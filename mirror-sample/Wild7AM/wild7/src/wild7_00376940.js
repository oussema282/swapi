


var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Wild7AM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
	
		var tmpMess=k.data.split("#");
			
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.ury.rnb!=undefined){
			
			if(gameController.zlh!=parseInt(tmpMess[1])){
				
			gameController.zlh=parseInt(tmpMess[1]);	
			gameController.ury.rnb.nly("creditd", "#znm", [gameController.vxg(tmpMess[1]), true]);	
				
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

/////////////////



function ast() {
    this.uxc = "Info";
    this.xng = "DEPOSIT";
    this.audio = "AUDIO";
    this.jhu = "TIP";
    this.pfk = "TURBO";
    this.qdn = "STATISTIC";
    this.odx = "HISTORY";
    this.yok = "SHORTCUTS";
    this.pcs = "HELP";
    this.gqi = "PAYTABLE";
    this.language = "LANGUAGE";
    this.xls = ">>";
    this.qej = "<<";
    this.ina = "Fullscreen is not supported!"
}

function lbu() {
    this.phd = "MINIMUM BET IS";
    this.reu = "MAX BET";
    this.mkz = "MIN.BET";
    this.wcf = "MAX.BET";
    this.nnh = "BET";
    this.start = "START";
    this.pcs = "HELP";
    this.gqi = "PAYTABLE";
    this.inx = "MENU";
    this.qrt = "MORE|GAMES";
    this.qlw = "STOP";
    this.zlh = "CREDIT";
    this.mbt = "GAME OVER";
    this.udx = "WINNER!";
    this.xyq = "GOOD LUCK!";
    this.win = "WIN";
    this.npl = "LAST WIN";
    this.vit = "COLLECT";
    this.qrp = "COLLECT";
    this.eil = "GAMBLE";
    this.enf = "AUTO|START";
    this.uga = "HALF|GAMBLE";
    this.coi = "EXIT";
    this.djr = "START GAME";
    this.xgs = "CHOOSE BET";
    this.ikd = "HALF";
    this.ret = "RETURN|TO GAME";
    this.zmm = "Total Win";
    this.ptd = "Warning";
    this.bcf = "TOTAL";
    this.sza = "PLEASE WAIT ...";
    this.zuh = "More Games";
    this.pfk = "SPEED";
    this.pml = "Malfunction voids all pays and plays.";
    this.diw = "C O N T I N U E";
    this.dbj = "AUTOSTART";
    this.tvs = "PAYTABLE";
    this.pdj = "GAMBLE";
    this.left = "LEFT";
    this.plx = "RIGHT";
    this.ok = "OK";
    this.xyf = "CANCEL";
    this.zyl = "Gamble";
    this.wcg = "Half";
    this.swc = "GAME RULES";
    this.fcl = "GAME RULES";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.qam = "PRESS ANY KEY TO CONTINUE";
    this.vau = "NOT ENOUGH CREDIT!";
    this.rzm = "wins";
    this.qkp = "V A L U E";
    this.of = "OF";
    this.qsi = "TOUCH THE SCREEN TO CONTINUE";
    this.bok = "LOADING ...";
    this.slu = "LOADING HISTORY ...";
    this.esv = "Communication Error";
    this.pbg = "You have reached one of the limits!";
    this.pjs = "You have reached the maximum amount of free games!";
    this.gzf = "Game will be closed";
    this.gkw = "Game will be restarted";
    this.mgq = "WON";
    this.error = "ERROR";
    this.tfz = "FREEPLAY";
    this.kpt = "AUTO";
    this.dtf = "GAME ID";
    this.vgv = "Playing Time";
    this.cvl = "last";
    this.tnk = "games";
    this.xng = "DEPOSIT";
    this.audio = "AUDIO";
    this.zqx = "MUSIC";
    this.lkz = "FULLSCREEN";
    this.kmc = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.qhv = "Do not show again";
    this.eqf = "Sounds can not be loaded!";
    this.vbt = "Resources missing!";
    this.npe = "Play without sound?";
    this.mgu = "SETTINGS";
    this.vgt = "Please turn your device!";
    this.uxc = "INFO";
    this.lyp = "Please disable PRIVATE MODE in your browser to play the game.";
    this.dit = "This game is optimized for Google Chrome.";
    this.unc = "Please use the current version of";
    this.mur = "Unfortunately this browser is not fully supported.";
    this.jfx = "This game can not be started in freeplay mode!";
    this.qjg = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.zmu = "Adjust the game interface to your needs!";
    this.wbt = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.jfp = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.qdg = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.qdn = "Statistic";
    this.hac = "Total Games";
    this.npq = "Total Bets";
    this.hsf = "Total Wins";
    this.bji = "Total Play Time";
    this.kge = "I have read this message";
    this.jfi = "EXIT|GAME";
    this.odx = "History";
    this.zlo = "No games played.";
    this.state = "STATE";
    this.nsy = "Main Game";
    this.ddr = "Auto Collected";
    this.ksv = "Collected";
    this.twa = "Bonusspins";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "First Deal";
    this.mmu = "Second Deal";
    this.flf = "Third Deal";
    this.uqk = "AUTOSTART SETTINGS";
    this.upu = "Amount of games:";
    this.mxo = "Stop autostart";
    this.hmg = "Credit lower than:";
    this.sur = "Credit higher than:";
    this.vyv = "Win higher than:";
    this.ftl = "The autostart will be stopped at the beginning of the bonus.";
    this.dxj = "Share on Facebook";
    this.zsn = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.tos = "Reality Check";
    this.etq = "You have requested a Reality Check.";
    this.iwo = "Press HISTORY to view your game history.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
lbu.prototype = new ast;

function vwy() {
    this.phd = "МИНИМАЛЬНАЯ СТАВКА -";
    this.reu = "МАКС.|СТАВКА";
    this.mkz = "МИН.СТAВКА";
    this.wcf = "МАКС.СТAВКА";
    this.nnh = "СТАВКА";
    this.start = "СТАРТ";
    this.pcs = "ПОМОЩЬ";
    this.gqi = "ТАБЛИЦА ВЫПЛАТ";
    this.inx = "МЕНЮ";
    this.qrt = "ДРУГИЕ|ИГРЫ";
    this.qlw = "СТОП";
    this.zlh = "КРЕДИТ";
    this.mbt = "КОНЕЦ ИГРЫ";
    this.udx = "ПОБЕДИТЕЛЬ!";
    this.xyq = "ЖЕЛАЕМ УДАЧИ!";
    this.win = "ВЫИГРЫШ";
    this.npl = "ПОСЛЕД. ВЫИГРЫШ";
    this.rzm = "выйгрыши";
    this.vit = "ЗАБРАТЬ|ВЫИГРЫШ";
    this.qrp = "ЗАБРАТЬ ВЫИГРЫШ";
    this.eil = "ИГРА|НА|РИСК";
    this.enf = "АВТО|ИГРА";
    this.uga = "УМЕНЬШИТЬ|РИСК";
    this.of = "ВЫКЛ.";
    this.coi = "ВЫХОД";
    this.djr = "НАЖМИТЕ СТАРТ";
    this.xgs = "ВЫБЕРИТЕ СТАВКУ";
    this.ikd = "ВЗЯТЬ|1/2";
    this.qam = "НАЖМИ ЛЮБУЮ КЛАВИШУ, ЧТОБЫ ПРОДОЛЖИТЬ";
    this.qsi = "ПРИКОСНИТЕСЬ К ЭКРАНУ ДЛЯ ПРОДОЛЖЕНИЯ";
    this.ret = "ОБРАТНО|В ГЛАВНУЮ|ИГРУ";
    this.kbe = "Множитель для Бонуса";
    this.vbw = "БОНУС СТАРТ ВЫИГРЫШ:";
    this.zmm = "ОБЩИЙ ВЫИГРЫШ";
    this.bok = "Загрузка ...";
    this.slu = "Загрузка Истории ...";
    this.error = "ОШИБКА";
    this.vau = "НЕ ДОСТАТОЧНО КРЕДИТА.";
    this.pbg = "Достигнут один из лимитов!";
    this.ptd = "Внимание";
    this.esv = "ошибка обмена данных";
    this.pjs = "Вы получили максимальное количество свободных игр!";
    this.gzf = "Игра заканчивается";
    this.gkw = "Игра начинается заново";
    this.wpp = "Бонус!";
    this.tbd = "БОНУС";
    this.mgq = "ВЫИГРЫШ";
    this.bcf = "ВСЕГО";
    this.sza = "Пожалуйста подождите ...";
    this.error = "ОШИБКА";
    this.tfz = "FREEPLAY";
    this.zuh = "ВЫБОР ИГРЫ";
    this.dtf = "GAME ID";
    this.vgv = "Playing Time";
    this.cvl = "последняя";
    this.tnk = "игры";
    this.xng = "ДЕПОЗИТ";
    this.audio = "Звук";
    this.zqx = "МУЗЫКА";
    this.pfk = "СКОРОСТЬ";
    this.lkz = "ПОЛНОЭКРАННЫЙ";
    this.kmc = "ПОЛНОЭКРАННЫЙ";
    this.language = "ЯЗЫК";
    this.pml = "ПРИ НЕИСПРАВНОСТИ ВСЕ ИГРЫ И ВЫИГРЫШИ АННУЛИРУЮТСЯ.";
    this.diw = "П Р О Д О Л Ж И Т Ь";
    this.qhv = "Больше не показывать";
    this.dbj = "АВТОИГРА";
    this.tvs = "ТАБЛИЦА ВЫПЛАТ";
    this.pdj = "ИГРА НА РИСК";
    this.eqf = "Звук не загружается!";
    this.vbt = "Ресурсы отсутствуют!";
    this.npe = "Играть без звука?";
    this.mgu = "НАСТРОЙКА";
    this.vgt = "Поверните, пожалуйста, ваше устройство!";
    this.left = "ЛЕВО";
    this.plx = "ПРАВО";
    this.kpt = "АВТО";
    this.qkp = "V A L U E";
    this.uxc = "ИНФОРМАЦИЯ";
    this.lyp = "Выключите, пожалуйста, ЧАСТНЫЙ РЕЖИМ в браузере,чтобы начать игру.";
    this.dit = "Настоящая игра оптимизирована для Google Chrome.";
    this.unc = "Используйте, пожалуйста, актуальную версию";
    this.mur = "К сожалению нет полной поддержки браузера.";
    this.jfx = "Запуск этой игры в режиме свободных игр невозможен!";
    this.qjg = "Поверните прибор в положение портретного режима для игры как на настоящем игральном автомате!";
    this.zmu = "Приспособь интерфейс к своим потребностям!";
    this.zsn = "ДОПОЛНИТЕЛЬНУЮ ИНФОРМАЦИЮ ВЫ МОЖЕТЕ ПОЛУЧИТЬ В ПРАВИЛАХ ИГРЫ.";
    this.tos = "Проверку реальности";
    this.etq = "Вы запросили проверку реальности.";
    this.iwo = "Нажмите ИСТОРИЯ, чтобы посмотреть свою историю игры.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.swc = "ПРАВИЛА ИГРЫ";
    this.fcl = "ПРАВИЛА ИГРЫ";
    this.wbt = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УДВОИТЬ ВЫИГРЫШ";
    this.jfp = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА.";
    this.qdg = "СТАВЬТЕ НА РИСК, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ.";
    this.qdn = "Статус";
    this.hac = "количество игр";
    this.npq = "вся ставка";
    this.hsf = "общий выигрыш";
    this.bji = "общее время игры";
    this.kge = "Я сообщение прочитал.";
    this.jfi = "ИГРУ|ЗАКОНЧИТЬ";
    this.ok = "OK";
    this.odx = "История";
    this.zlo = "нет истории.";
    this.state = "STATE";
    this.nsy = "Main Game";
    this.ddr = "Auto Collected";
    this.ksv = "Collected";
    this.twa = "Bonusspins";
    this.zyl = "Gamble";
    this.wcg = "Half";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "First Deal";
    this.mmu = "Second Deal";
    this.flf = "Third Deal";
    this.xyf = "ИЗМЕНИТЬ";
    this.uqk = "НАСТРОЙКА АВТОСТАРТА";
    this.upu = "Количество игр:";
    this.mxo = "Автостарт остановить";
    this.hmg = "Кредит ниже, чем:";
    this.sur = "Кредит выше, чем:";
    this.vyv = "Выигрыш выше, чем:";
    this.ftl = "Автостарт прерывается, если начинается бонусная игра.";
    this.dxj = "Поделись в фейсбук";
    this.gab = "ТЕОРЕТИЧЕСКАЯ ВЫПЛАТА ИГРОКУ СОСТАВЛЯЕТ В ЭТОЙ ИГРЕ XY."
}
vwy.prototype = new ast;

function djj() {
    this.phd = "APUESTA MINIMA ES";
    this.reu = "APUESTA|MAXIMA";
    this.mkz = "APUESTA MIN.";
    this.wcf = "APUESTA MAX.";
    this.nnh = "APUESTA";
    this.start = "START";
    this.pcs = "AYUDA";
    this.gqi = "PLAN DE|GANANCIAS";
    this.inx = "MENU";
    this.qrt = "MAS|JUEGOS";
    this.qlw = "PARADA";
    this.zlh = "CREDITOS";
    this.mbt = "FIN DEL JUEGO";
    this.udx = "¡GANADOR!";
    this.xyq = "¡MUCHA SUERTE!";
    this.win = "PREMIO";
    this.npl = "ULTIMOS PREMIO";
    this.rzm = "gana";
    this.vit = "COBRAR";
    this.qrp = "COBRAR";
    this.eil = "RIESGO";
    this.enf = "AUTO|START";
    this.uga = "MEDIA|APUESTA";
    this.of = "DE";
    this.coi = "SALIR";
    this.djr = "¡PULSE START!";
    this.xgs = "ELIJA SU APUESTA";
    this.ikd = "MITAD";
    this.qam = "PULSE UNA TECLA PARA CONTINUAR";
    this.qsi = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.zmm = "Premio total";
    this.bok = "CARGANDO ...";
    this.slu = "CARGANDO HISTORIAL ...";
    this.vau = "No hay bastante CREDITO";
    this.pbg = "¡Ha alcanzado uno de los limites!";
    this.ptd = "Advertencia";
    this.esv = "Error de comunicación";
    this.pjs = "¡Ha alcanzado la máxima cantidad de juegos gratis!";
    this.gzf = "El juego se cerrará";
    this.gkw = "El juego se reiniciará";
    this.wpp = "¡BONUS!";
    this.tbd = "BONUS";
    this.mgq = "GANADO";
    this.bcf = "TOTAL";
    this.fwf = "TURBO SI";
    this.kxf = "TURBO NO";
    this.sza = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.tfz = "FREEPLAY";
    this.zuh = "MAS JUEGOS";
    this.dtf = "ID DE JUEGO";
    this.vgv = "Playing Time";
    this.cvl = "ultimos";
    this.tnk = "juegos";
    this.xng = "DEPÓSITO";
    this.audio = "AUDIO";
    this.zqx = "MÚSICA";
    this.pfk = "VELOCIDAD";
    this.lkz = "PANTALLA COMPLETA";
    this.kmc = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.pml = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.diw = "A D E L A N T E";
    this.qhv = "No mostrar de nuevo";
    this.dbj = "AUTOSTART";
    this.tvs = "PLAN DE GANANCIAS";
    this.pdj = "RIESGO";
    this.eqf = "No se pueden cargar los sonidos.";
    this.vbt = "Faltan recursos.";
    this.npe = "¿Jugar sin sonido?";
    this.mgu = "AJUSTES";
    this.qkp = "V A L U E";
    this.vgt = "¡Encienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.plx = "DERECHA";
    this.kpt = "AUTOMÁTICO";
    this.uxc = "INFORMACIÓN";
    this.lyp = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.dit = "Este juego está optimizado para Google Chrome.";
    this.unc = "Use la versión actual de";
    this.mur = "Desafortunadamente, este explorador no es compatible.";
    this.jfx = "¡Este juego no puede iniciarse en modo de juego libre!";
    this.qjg = "¡Gire el dispositivo a posición vertical como en la máquina tragamonedas real!";
    this.zmu = "¡Ajuste la interfaz del juego a sus necesidades!";
    this.zsn = "PARA MÁS INFORMACIÓN MIRE LAS REGLAS DEL JUEGO.";
    this.tos = "Reality Check";
    this.etq = "Has solicitado un Reality Check.";
    this.iwo = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.swc = "REGLAS DEL JUEGO";
    this.fcl = "REGLAS|DEL JUEGO";
    this.wbt = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.jfp = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.qdg = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.qdn = "ESTADO";
    this.hac = "Número de juegos";
    this.npq = "Apuesta total";
    this.hsf = "Ganancia total";
    this.bji = "Tiempo total de juego";
    this.kge = "He leído el mensaje.";
    this.jfi = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.odx = "HISTORIAL";
    this.zlo = "Aún no hay juegos.";
    this.state = "Estado";
    this.nsy = "Juego principal";
    this.ddr = "Ganancia automática";
    this.ksv = "Ganancia";
    this.twa = "BONUSSPINS";
    this.zyl = "Apuesta";
    this.wcg = "Mitad";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "Primera mano";
    this.mmu = "Segunda mano";
    this.flf = "Tercera mano";
    this.xyf = "CANCELAR";
    this.uqk = "CONFIGURACIONES DE AUTOSTART";
    this.upu = "Cantidad de juegos:";
    this.mxo = "Detener Autostart";
    this.hmg = "Crédito menor que:";
    this.sur = "Crédito mayor que:";
    this.vyv = "Ganancia mayor que:";
    this.ftl = "El Autostart se detendrá al principio del bonus.";
    this.dxj = "Compartir en Facebook";
    this.gab = "EL PORCENTAJE TEÓRICO DE DEVOLUCIÓN AL JUGADOR PARA ESTE JUEGO ES XY."
}
djj.prototype = new ast;

function vvp() {
    this.phd = "MINIMALER EINSATZ IST";
    this.reu = "MAX. EINSATZ";
    this.mkz = "MIN. EINSATZ";
    this.wcf = "MAX. EINSATZ";
    this.nnh = "EINSATZ";
    this.start = "START";
    this.pcs = "HILFE";
    this.gqi = "GEWINNPLAN";
    this.inx = "MENÜ";
    this.qrt = "MEHR|SPIELE";
    this.zlh = "KREDIT";
    this.mbt = "SPIEL ENDE";
    this.udx = "GEWINNER!";
    this.xyq = "VIEL GLÜCK!";
    this.win = "GEWINN";
    this.npl = "LETZTER GEWINN";
    this.rzm = "gewinnt";
    this.vit = "NEHMEN";
    this.qrp = "NEHMEN";
    this.eil = "RISIKO";
    this.enf = "AUTO|START";
    this.uga = "HALF|GAMBLE";
    this.qlw = "STOP";
    this.of = "VON";
    this.coi = "EXIT";
    this.djr = "START DRÜCKEN";
    this.xgs = "EINSATZ WÄHLEN";
    this.ikd = "TEILEN";
    this.qam = "DRÜCKE EINE TASTE UM FORTZUFAHREN";
    this.qsi = "BERÜHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURÜCK|ZUM SPIEL";
    this.zmm = "Gesamt Gewinn";
    this.bok = "LÄDT ...";
    this.slu = "LÄDT HISTORIE ...";
    this.vau = "NICHT GENUG KREDIT!";
    this.ptd = "Achtung";
    this.esv = "Kommunikationsfehler";
    this.pbg = "Sie haben eines der Limits erreicht!";
    this.pjs = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.gzf = "Das Spiel wird beendet";
    this.gkw = "Das Spiel wird neu gestartet";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.mgq = "GEWONNEN";
    this.bcf = "TOTAL";
    this.sza = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.tfz = "FREEPLAY";
    this.zuh = "MEHR|SPIELE";
    this.dtf = "SPIEL ID";
    this.vgv = "Spielzeit";
    this.cvl = "Letzten";
    this.tnk = "Spiele";
    this.xng = "GUTHABEN";
    this.audio = "AUDIO";
    this.zqx = "MUSIK";
    this.pfk = "SPEED";
    this.lkz = "VOLLBILD";
    this.kmc = "VOLLBILD";
    this.language = "SPRACHE";
    this.pml = "Bei Gerätestörung keine Haftung.";
    this.diw = "W E I T E R";
    this.qhv = "Nicht noch einmal anzeigen";
    this.dbj = "AUTOSTART";
    this.pdj = "RISIKO";
    this.tvs = "GEWINNPLAN";
    this.eqf = "Sounds können nicht geladen werden!";
    this.vbt = "Ressourcen fehlen!";
    this.npe = "Ohne Ton spielen?";
    this.mgu = "EINSTELL.";
    this.vgt = "Bitte drehen sie ihr Gerät!";
    this.left = "LINKS";
    this.plx = "RECHTS";
    this.kpt = "AUTOM.";
    this.qkp = "V A L U E";
    this.uxc = "INFO";
    this.lyp = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.dit = "Dieses Spiel ist optimiert für Google Chrome.";
    this.unc = "Bitte benutzen sie die aktuelle Version von";
    this.mur = "Leider wird dieser Browser nicht unterstützt.";
    this.jfx = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.qjg = "Drehen sie ihr Gerät in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.zmu = "Passe die Spieloberfläche deinen Bedürfnissen an!";
    this.zsn = "ZUSÄTZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.tos = "Reality Check";
    this.etq = "Du hast einen Reality Check angefordert.";
    this.iwo = "Drücke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.gzy = "Spielpause";
    this.ejv = "Spiellimits";
    this.mbh = "Selbsttest";
    this.swc = "SPIELREGELN";
    this.fcl = "SPIELREGELN";
    this.wbt = "WÄHLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.jfp = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.qdg = "DRÜCKE RISIKO FÜR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.qdn = "Statistik";
    this.hac = "Anzahl der Spiele";
    this.npq = "Gesamteinsatz";
    this.hsf = "Gesamtgewinn";
    this.bji = "Gesamtspielzeit";
    this.kge = "Ich habe die Nachricht gelesen";
    this.jfi = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.odx = "Historie";
    this.zlo = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.nsy = "Hauptspiel";
    this.ddr = "Auto. Nehmen";
    this.ksv = "Genommen";
    this.twa = "Bonusspins";
    this.zyl = "Risiko";
    this.wcg = "Halb";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "Erster Deal";
    this.mmu = "Zweiter Deal";
    this.flf = "Dritter Deal";
    this.xyf = "ABBRUCH";
    this.uqk = "AUTOSTART EINSTELLUNGEN";
    this.upu = "Anzahl der Spiele: ";
    this.mxo = "Autostart anhalten";
    this.hmg = "Kredit niedriger als:";
    this.sur = "Kredit höher als:";
    this.vyv = "Gewinn höher als:";
    this.ftl = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.dxj = "Auf Facebook teilen";
    this.gab = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FÜR DIESES SPIEL BETRÄGT XY."
}
vvp.prototype = new ast;

function dsn() {
    this.phd = "MINIMUM BANKO";
    this.reu = "MAKS. BANKO";
    this.mkz = "MIN. BANKO";
    this.wcf = "MAKS. BANKO";
    this.nnh = "BANKO";
    this.start = "BAŞLAT";
    this.pcs = "YARDIM";
    this.gqi = "Kazanç planı";
    this.inx = "MENÜ";
    this.qrt = "DAHA ÇOK|OYUN";
    this.qlw = "DUR";
    this.zlh = "KREDI";
    this.mbt = "OYUN BİTTİ";
    this.udx = "KAZANDINIZ!";
    this.xyq = "BOL ŞANSLAR!";
    this.win = "KAZANÇ";
    this.npl = "SON KAZANÇ";
    this.rzm = "kazanır";
    this.vit = "ALMAK";
    this.qrp = "ALMAK";
    this.eil = "RIZIKO";
    this.enf = "OTOMATİK|BAŞLATMA";
    this.uga = "YARI|RIZIKO";
    this.of = "VEREN";
    this.coi = "ÇIKIŞ";
    this.djr = "BAŞLAT TUŞUNA BASINIZ";
    this.xgs = "BANKO SEÇİNİZ";
    this.ikd = "ALMAK|1/2";
    this.qam = "DEVAM ETMEK IÇIN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.qsi = "DEVAM ETMEK İÇİN EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.zmm = "Toplam kazanç";
    this.bok = "YÜKLÜYOR ...";
    this.slu = "GEÇMIŞI YÜKLÜYOR ...";
    this.vau = "YETERSİZ KREDİ.";
    this.pbg = "Limitlerin birine ulaştınız!";
    this.ptd = "Dikkat";
    this.esv = "İletişim hatası";
    this.pjs = "Maksimum bedava oyun sayısına ulaşmış bulunuyorsunuz!";
    this.gzf = "Oyun sonlandırılıyor";
    this.gkw = "Oyun yeniden başlatılıyor";
    this.wpp = "Bedava oyun primi!";
    this.tbd = "PRİM";
    this.mgq = "KAZANDINIZ";
    this.bcf = "TOPLAM";
    this.sza = "LÜTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.tfz = "FREEPLAY";
    this.zuh = "DAHA ÇOK OYUN";
    this.dtf = "OYUN ID";
    this.vgv = "OYUN SÜRESİ";
    this.cvl = "Son";
    this.tnk = "oyun";
    this.xng = "BAKIYE";
    this.audio = "AUDIO";
    this.zqx = "MÜZIK";
    this.pfk = "HıZ";
    this.lkz = "TAM EKRAN";
    this.kmc = "TAM EKRAN";
    this.language = "LISAN";
    this.pml = "CIHAZ ARIZALANDIĞINDA MESULIYET KABUL EDILMEZ.";
    this.diw = "İ L E R I";
    this.qhv = "Tekrar gösterme";
    this.dbj = "OTOMATİK|BAŞLATMA";
    this.pdj = "RIZIKO";
    this.tvs = "Kazanç planı";
    this.eqf = "Sesler yüklenemiyorlar!";
    this.vbt = "Kaynaklar eksik!";
    this.npe = "Sessiz oynayacak mısınız?";
    this.mgu = "AYARLAR";
    this.vgt = "Lütfen cihazınını döndürün!";
    this.left = "SOL";
    this.plx = "SAĞ";
    this.kpt = "OTOMATIK";
    this.qkp = "V A L U E";
    this.uxc = "BILGI";
    this.lyp = "Oyunu başlatmak için lütfen ağ tarayıcınızda ÖZEL MOD'u kapatınız.";
    this.dit = "Bu oyun Google Chrome için optimize edilmiştir.";
    this.unc = "'nin güncel versiyonunu kullanın";
    this.mur = "Maalesef bu ağ tarayıcısı tam olarak desteklenmiyor.";
    this.jfx = "Bu oyunun serbest modunda başlatılması mümkün değildir!";
    this.qjg = "Cihazınızı portre moduna çevirerek gerçek bir otomatikte oynar gibi oynayın!";
    this.zmu = "Oyun yüzeyini kendi ihtiyaçlarına göre düzenle!";
    this.zsn = "DAHA FAZLA BİLGİYİ OYUN KURALLARINDA BULABİLİRSİNİZ.";
    this.tos = "Reality Check";
    this.etq = "Reality Check talebinde bulundun.";
    this.iwo = "Oyun geçmişini görmek için GEÇMİŞ tuşuna bas.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.swc = "OYUNUN KURALLARı";
    this.fcl = "OYUNUN|KURALLARı";
    this.wbt = "DOĞRU RENGİ SEÇEREK KAZANCININ İKİYE KATLARSIN";
    this.jfp = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.qdg = "KAZANCI KATLAMA ŞANSI İÇİN GAMBLE (RİSK)";
    this.qdn = "İstatistik";
    this.hac = "Toplam oyunlar";
    this.npq = "Toplam bankolar";
    this.hsf = "Toplam kazançlar";
    this.bji = "Toplam oyun süresi";
    this.kge = "Bu mesajı okudum.";
    this.jfi = "OYUNU|KAPAT";
    this.ok = "OK";
    this.odx = "GEÇMİŞ";
    this.zlo = "Henüz hiç bir oyun yok.";
    this.state = "STATÜ";
    this.nsy = "Ana oyun";
    this.ddr = "Otomatik olarak kazandınız";
    this.ksv = "Toplandı";
    this.twa = "Prim oyunlar";
    this.zyl = "Riziko";
    this.wcg = "Yarım";
    this.kup = "Respin";
    this.pwg = "Prim";
    this.vfs = "İlk anlaşma";
    this.mmu = "İkinci anlaşma";
    this.flf = "Üçüncü anlaşma";
    this.xyf = "İPTAL";
    this.uqk = "OTOMATIK BAŞLAT AYARLARı";
    this.upu = "Oyun sayısı:";
    this.mxo = "Otomatik başlatmayı durdur";
    this.hmg = "Kredi bundan düşüktür:";
    this.sur = "Kredi bundan yüksektir:";
    this.vyv = "Kazanç bundan yüksektir:";
    this.ftl = "Otomatik başlatma prim başlangıcında durduruluyor.";
    this.dxj = "Facebook'ta paylaş";
    this.gab = "OYUNCUYA TEORIK OLARAK ÖDENECEK MEBLAĞ % XY ORANıNDADıR."
}
dsn.prototype = new ast;

function eqx() {
    this.phd = "MINIMÁLNÍ SÁZKA JE";
    this.reu = "MAX. SÁZKA";
    this.mkz = "MIN. SÁZKA";
    this.wcf = "MAX. SÁZKA";
    this.nnh = "SÁZKA";
    this.start = "START";
    this.pcs = "POMOC";
    this.gqi = "VÝHERNÍ PLÁN";
    this.inx = "MENU";
    this.qrt = "DALŠÍ|HRY";
    this.qlw = "STOP";
    this.zlh = "KREDIT";
    this.mbt = "KONEC HRY";
    this.udx = "VÍTEZ!";
    this.xyq = "HODNE ŠTESTÍ!";
    this.win = "VÝHRA";
    this.npl = "POSL. VÝHRA";
    this.rzm = "vyhrává";
    this.vit = "VEZMI";
    this.qrp = "VEZMI";
    this.eil = "HRA";
    this.enf = "AUTO|START";
    this.uga = "POLOVICNÍ|HRA";
    this.of = "Z";
    this.coi = "VÝSTUP";
    this.djr = "START HRY";
    this.xgs = "VYBRAT SÁZKU";
    this.ikd = "POLOVINA";
    this.qam = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.qsi = "PRO POKRAČOVÁNÍ SE DOTKNĚTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.zmm = "Celková výhra";
    this.bok = "NAHRÁVÁM ...";
    this.slu = "NAHRÁVÁM HISTORII ...";
    this.vau = "Nedostatecný kredit.";
    this.pbg = "Dosáhli jste jednoho z limitů!";
    this.ptd = "Varování";
    this.esv = "Chyba komunikace";
    this.pjs = "Dosáhli jste maximálního počtu her zdarma!";
    this.gzf = "Hra se zavře";
    this.gkw = "Hra se restartuje";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.mgq = "VYHRÁL";
    this.bcf = "CELKOVÁ";
    this.sza = "ČEKEJTE PROSÍM ...";
    this.error = "ERROR";
    this.tfz = "FREEPLAY";
    this.zuh = "DALŠÍ HRY";
    this.dtf = "ID HRY";
    this.vgv = "HRACÍ DOBA";
    this.cvl = "Poslední";
    this.tnk = "hry";
    this.xng = "MÍT K DOBRU";
    this.audio = "AUDIO";
    this.zqx = "MUZIKA";
    this.pfk = "RYCHLOST";
    this.lkz = "FULLSCREEN";
    this.kmc = "FULLSCREEN";
    this.language = "ŘEČ";
    this.pml = "Při poruše jsou všechny hry a výhry neplatné.";
    this.diw = "P O K R A Č U J";
    this.qhv = "Nezobrazujte znovu";
    this.dbj = "AUTOSTART";
    this.pdj = "HRA";
    this.tvs = "VÝHERNÍ PLÁN";
    this.eqf = "Zvuk nelze nahrát!";
    this.vbt = "Chybí zdroje!";
    this.npe = "Hrát bez zvuku?";
    this.mgu = "NASTAVENÍ";
    this.qkp = "V A L U E";
    this.vgt = "Otočte své zařízení, prosím!";
    this.left = "VLEVO";
    this.plx = "VPRAVO";
    this.kpt = "AUTO";
    this.uxc = "INFORMACE";
    this.lyp = "Abyste mohli hrát hru, vypněte SOUKROMÝ REŽIM ve svém prohlížeči, prosím.";
    this.dit = "Tato hra je optimalizovaná pro Google Chrome.";
    this.unc = "Použijte aktuální verzi";
    this.mur = "Tento prohlížeč není bohužel plně podporován.";
    this.jfx = "Tuto hru nelze spustit v režimu hry zdarma!";
    this.qjg = "Otočte zařízení tak, aby zobrazilo hru jako na skutečném automatu!";
    this.zmu = "Nastavte rozhraní hry svým potřebám!";
    this.zsn = "VÍCE INFORMACÍ NALEZNETE V PRAVIDLECH HRY.";
    this.tos = "Reality Check";
    this.etq = "Požádali jste o kontrolu reality.";
    this.iwo = "Pro zobrazení vaší herní historie stiskněte HISTORIE.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.swc = "PRAVIDLA HRY";
    this.fcl = "PRAVIDLA HRY";
    this.wbt = "VYBRAT SPRÁVNOU BARVU KE ZDVOJNÁSOBENÍ VÝHRY";
    this.jfp = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.qdg = "VSADIT NA ŠANCI ZVÝŠIT VÝHRU";
    this.qdn = "Statistika";
    this.hac = "Celkem hry";
    this.npq = "Celkem sázky";
    this.hsf = "Celkem výhry";
    this.bji = "Celková hrací doba";
    this.kge = "Zprávu jsem četl/a.";
    this.jfi = "UKONČIT|HRU";
    this.ok = "OK";
    this.odx = "HISTORIE";
    this.zlo = "Žádné odehrané hry.";
    this.state = "STATUS";
    this.nsy = "Hlavní hra";
    this.ddr = "Automaticky vybráno";
    this.ksv = "Vybráno";
    this.twa = "Bonusspins";
    this.zyl = "Hra";
    this.wcg = "Polovina";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "První vyložení";
    this.mmu = "Druhé vyložení";
    this.flf = "Třetí vyložení";
    this.xyf = "ZRUŠIT";
    this.uqk = "NASTAVENÍ AUTOMATICKÉHO STARTU";
    this.upu = "Množství her:";
    this.mxo = "Zastavit automatický start";
    this.hmg = "Kredit nižší než:";
    this.sur = "Kredit vyšší než:";
    this.vyv = "Výhra vyšší než:";
    this.ftl = "Automatický start se zastaví na začátku bonusu.";
    this.dxj = "Sdílet na Facebooku";
    this.gab = "TEORETICKÁ NÁVRATNOST HRÁČI V TÉTO HŘE JE XY."
}
eqx.prototype = new ast;

function whb() {
    this.phd = "MIINIMUMPANUS ON";
    this.reu = "MAX PANUS";
    this.mkz = "MIN PANUS";
    this.wcf = "MAX PANUS";
    this.nnh = "PANUS";
    this.start = "START";
    this.pcs = "ABI";
    this.gqi = "VÕIDU TABEL";
    this.inx = "MENÜÜ";
    this.qrt = "VALI|MÄNG";
    this.qlw = "STOPP";
    this.zlh = "KREDIIT";
    this.mbt = "MÄNG ON LÕPPENUD!";
    this.udx = "OLED VÕITNUD!";
    this.xyq = "SOOVIME EDU!";
    this.win = "VÕIT";
    this.npl = "EELMINE VÕIT";
    this.vit = "VÕTA|VÕIT";
    this.qrp = "VÕTA VÕIT";
    this.eil = "DUUBEL|DAMINE";
    this.enf = "AUTO|START";
    this.uga = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.coi = "VÄLJA";
    this.djr = "ALUSTA MÄNGU";
    this.xgs = "VALI PANUS";
    this.ikd = "POOLIK";
    this.qam = "JÄTKAMISEKS VAJUTAGE ÜKSKÕIK MILLIST NUPPU";
    this.ret = "TAGASI|MÄNGU";
    this.zmm = "Koguvõit";
    this.vau = "POLE PIISAVALT KREDIITI.";
    this.wpp = "Boonus!";
    this.tbd = "BOONUS";
    this.sza = "PALUN OODAKE ...";
    this.zuh = "Vali Mäng";
    this.audio = "HELI";
    this.zqx = "MUUSIKA";
    this.pfk = "KIIRUS";
    this.lkz = "TÄISEKRAAN";
    this.kmc = "TÄISEKRAAN";
    this.pml = "RIKKE KORRAL KÕIK MÄNGUD JA VÕIDUD TÜHISTATAKSE.";
    this.qhg = "MÄNGU LÕPP";
    this.language = "KEEL";
    this.swc = "MÄNGUREEGLID";
    this.fcl = "MÄNGUREEGLID";
    this.bok = "LAADIMINE ...";
    this.slu = "AJALOO LAADIMINE ...";
    this.pbg = "Oled saavutanud ühe limiitidest!";
    this.ptd = "Hoiatus";
    this.esv = "Ühenduse viga";
    this.pjs = "Te olete jõudnud tasuta mängude maksimaalse arvuni!";
    this.gzf = "Mäng suletakse";
    this.gkw = "Mäng taaskäivitatakse";
    this.qsi = "JÄTKAMISEKS PUUDUTA EKRAANI";
    this.mgu = "SÄTTED";
    this.qkp = "V A L U E";
    this.vgt = "Pöörake oma seadet!";
    this.uxc = "INFO";
    this.lyp = "Mängu mängimiseks keelake oma brauseris PRIVAATREŽIIM.";
    this.dit = "See mäng on optimeeritud Google Chrome jaoks.";
    this.unc = "Palun kasutage praeguse versiooni";
    this.mur = "Kahjuks ei toetata seda brauserit täielikult.";
    this.jfx = "Seda mängu ei saa tasuta mängimise režiimis käivitada!";
    this.left = "VASAK";
    this.plx = "PAREM";
    this.kpt = "AUTOMAATNE";
    this.mgq = "VÕITIS";
    this.rzm = "võidetud";
    this.bcf = "KOKKU";
    this.error = "VIGA";
    this.tfz = "TASUTA MÄNG";
    this.dtf = "MÄNGU ID";
    this.vgv = "MÄNGUAEG";
    this.cvl = "Viimased";
    this.tnk = "mängu";
    this.xng = "SISSEMAKSE";
    this.wbt = "VÕIDU DUUBELDAMISEKS VALI ÕIGE VÄRV";
    this.jfp = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.qdg = "RISKI, ET SUURENDADA OMA VÕITU";
    this.qdn = "Statistika";
    this.hac = "Mänge kokku";
    this.npq = "Kogupanus";
    this.hsf = "Koguvõit";
    this.bji = "Mänguaeg kokku";
    this.kge = "Olen seda teadet lugenud.";
    this.jfi = "MÄNGU|LÕPP";
    this.odx = "Ajalugu";
    this.zlo = "Ühtegi mängu ei ole mängitud.";
    this.state = "OLEK";
    this.nsy = "Põhimäng";
    this.ddr = "Automaatne väljavõtt";
    this.ksv = "Välja võetud";
    this.twa = "Bonusspins";
    this.zyl = "Gamble";
    this.wcg = "Pool";
    this.kup = "Respin";
    this.pwg = "Boonus";
    this.vfs = "Esimene jagamine";
    this.mmu = "Teine jagamine";
    this.flf = "Kolmas jagamine";
    this.diw = "J Ä T K A";
    this.qhv = "Ära seda enam näita";
    this.dbj = "AUTOSTART";
    this.pdj = "DUUBEL DAMINE";
    this.tvs = "VÕIDU TABEL";
    this.eqf = "Helisid ei saa laadida!";
    this.vbt = "Ressursid puuduvad!";
    this.npe = "Soovid mängida ilma helideta?";
    this.qjg = "Keera seade vertikaalasendisse, et mängida nagu päris mänguautomaadil!";
    this.zmu = "Kohanda mänguliidest vastavalt oma vajadustele!";
    this.zsn = "VAATA LISAINFOT MÄNGUREEGLITEST.";
    this.xyf = "TÜHISTA";
    this.uqk = "AUTOMAATKÄIVITUSE SÄTTED";
    this.upu = "Mängude arv:";
    this.mxo = "Peata automaatkäivitus";
    this.hmg = "Krediit madalam kui:";
    this.sur = "Krediit kõrgem kui:";
    this.vyv = "Võit suurem kui:";
    this.ftl = "Automaatkäivitus peatatakse boonuse alguses.";
    this.dxj = "Jaga Facebookis";
    this.ok = "OK";
    this.tos = "Reality Check";
    this.etq = "Olete soovinud reaalsuskontrolli.";
    this.iwo = "Oma mänguajaloo vaatamiseks vajutage AJALUGU.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "SELLE MÄNGU MÄNGIJA TEOREETILINE TULU ON XY."
}
whb.prototype = new ast;

function fdv() {
    this.phd = "ΤΟ ΕΛAΧΙΣΤΟ ΣΤΟIΧΗΜΑ ΕIΝΑΙ";
    this.reu = "ΜEΓΙΣΤΟ ΣΤΟIΧΗΜΑ";
    this.mkz = "EΛΑΧ. ΣΤΟΙΧΗΜΑ";
    this.wcf = "ΜΕΓ. ΣΤΟΙΧΗΜΑ";
    this.nnh = "ΣΤΟIΧΗΜΑ";
    this.start = "EΝΑΡΞΗ";
    this.pcs = "ΒΟHΘΕΙΑ";
    this.gqi = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.inx = "ΜΕΝΟY";
    this.qrt = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.qlw = "ΣΤΟΠ";
    this.zlh = "ΠIΣΤΩΣΗ";
    this.mbt = "TEΛΟΣ ΠΑΙΧΝΙΔΙΟY!";
    this.udx = "ΝΙΚΗΤΗΣ!";
    this.xyq = "ΚΑΛΗ ΤΥΧΗ!";
    this.win = "ΚEΡΔΟΣ";
    this.npl = "ΤΕΛΕΥΤΑIΟ ΚEΡΔΟΣ";
    this.vit = "ΠΑΡΑΛΑΒH";
    this.qrp = "ΠΑΡΑΛΑΒH";
    this.eil = "ΤΖΟΓAΡΩ";
    this.enf = "ΑΥΤOΜΑΤΗ|EΝΑΡΞΗ";
    this.uga = "ΠΑΡΑΛΑΒH|ΤΖΟΓAΡΩ";
    this.of = "ΑΠO";
    this.coi = "EΞΟΔΟΣ";
    this.djr = "ΑΡΧΙΖΕΙ ΠΑΙΧΝΙΔΙ";
    this.xgs = "ΕΠΙΛΕΞΤΕ ΣΤΟΙΧΗΜΑ";
    this.ikd = "ΠΑΡΑΛΑΒH|1/2";
    this.qam = "ΠAΤΗΣΕ EΝΑ ΠΛHΚΤΡΟ ΓΙΑ ΝΑ ΣΥΝΕΧIΣΕΙΣ";
    this.ret = "EΠΙΣΤΡΟΦH|ΣΤΟ|ΠΑΙΧΝIΔΙ";
    this.zmm = "ΣΥΝΟΛΙΚO ΚEΡΔΟΣ";
    this.vau = "ΔΕΝ ΑΡΚΕΤH ΠIΣΤΩΣΗ.";
    this.wpp = "Μπόνουσ!";
    this.tbd = "ΜΠOΝΟΥΣ";
    this.sza = "ΠΑΡΑΚΑΛΩ ΠΕΡΙΜEΝΕΤΕ ...";
    this.zuh = "ΠΕΡΙΣ.|ΠΑΙΧΝIΔΙΑ";
    this.audio = "ΗΧΟΣ";
    this.zqx = "ΜΟΥΣΙΚΉ";
    this.pfk = "ΤΑΧYΤΗΤΑ";
    this.lkz = "ΠΛΗΡΗΣ ΟΘΟΝΗ";
    this.kmc = "ΠΛΗΡΗΣ|ΟΘΟΝΗ";
    this.pml = "ΣΕ ΠΕΡΙΠΤΩΣΗ ΒΛΑΒΗΣ ΤΗΣ ΣΥΣΚΕΥΗΣ ΔΕΝ ΑΝΑΛΑΜΒΑΝΟΥΜΕ ΚΑΜΙΑ ΕΥΘΥΝΗ.";
    this.language = "ΓΛΩΣΣΑ";
    this.bcf = "ΣYΝΟΛΟ";
    this.swc = "ΚΑΝΌΝΕς ΠΑΙΧΝΙΔΙΟΎ";
    this.fcl = "ΚΑΝΌΝΕς|ΠΑΙΧΝΙΔΙΟΎ";
    this.bok = "ΦΟΡΤΩΣΗ ...";
    this.slu = "ΦΟΡΤΩΣΗ ΙΣΤΟΡΙΚΟΥ...";
    this.pbg = "Ξεπεράσατε κάποιο όριο!";
    this.ptd = "Προειδοποίηση";
    this.esv = "Σφάλμα επικοινωνίας";
    this.pjs = "Φτάσατε στο ανώτατο όριο δωρεάν παιχνιδιών!";
    this.gzf = "Το παιχνίδι θα τερματιστεί";
    this.gkw = "Το παιχνίδι θα εκκινηθεί εκ νέου";
    this.qsi = "ΑΓΓΙΞΤΕ ΤΗΝ ΟΘΟΝΗ ΓΙΑ ΝΑ ΣΥΝΕΧΙΣΕΤΕ";
    this.mgu = "ΡΥΘΜΙΣΕΙΣ";
    this.qkp = "V A L U E";
    this.vgt = "Παρακαλούμε, περιστρέψτε τη συσκευή σας!";
    this.uxc = "ΠΛΗΡΟΦΟΡΊΕς";
    this.lyp = "Παρακαλούμε, απενεργοποιήστε τη λειτουργία PRIVATE MODE του προγράμματος περιήγησης, προκειμένου να εκκινηθεί το παιχνίδι.";
    this.dit = "Αυτό το παιχνίδι έχει βελτιστοποιηθεί για Google Chrome.";
    this.unc = "Παρακαλούμε, χρησιμοποιήστε την τρέχουσα έκδοση του";
    this.mur = "Δυστυχώς, αυτό το πρόγραμμα περιήγησης δεν υποστηρίζεται πλήρως.";
    this.jfx = "Αυτό το παιχνίδι δεν μπορεί να διεξαχθεί στη δωρεάν λειτουργία!";
    this.left = "ΑΡΙΣΤΕΡA";
    this.plx = "ΔΕΞΙA";
    this.kpt = "AΥΤOΜΑΤΟ";
    this.mgq = "ΚEΡΔΙΣΕ";
    this.rzm = "κερδίζει";
    this.error = "ΣΦΑΛΜΑ";
    this.tfz = "ΔΩΡΕAΝ ΠΑΙΧΝIΔΙ";
    this.dtf = "ΤΑΥΤΟΤΗΤΑ ΠΑΙΧΝΙΔΙΟΥ";
    this.vgv = "ΧΡΟΝΟΣ ΠΑΙΧΝΙΔΙΟΥ";
    this.cvl = "Τελευταία";
    this.tnk = "παιχνίδια";
    this.xng = "ΠΙΣΤΩΤΙΚO ΥΠOΛΟΙΠΟ";
    this.wbt = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΓΙΑ ΝΑ ΔΙΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.jfp = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.qdg = "ΠΟΝΤΑΡΕΤΕ ΓΙΑ ΝΑ ΕΧΕΤΕ ΤΗΝ ΕΥΚΑΙΡΙΑ ΠΟΛΛΑΠΛΑΣΙΑΣΜΟΥ ΤΟΥ ΚΕΡΔΟΥΣ ΣΑΣ";
    this.qdn = "Στατιστικά";
    this.hac = "Σύνολο παιχνιδιών";
    this.npq = "Συνολικό ποντάρισμα";
    this.hsf = "Συνολικό κέρδος";
    this.bji = "Συνολικός χρόνος παιχνιδιού";
    this.kge = "Eχω διαβάσει το μήνυμα.";
    this.jfi = "ΛΗΞΗ|ΠΑΙΧΝΙΔΙΟΥ";
    this.odx = "ΙΣΤΟΡΙΚΟ";
    this.zlo = "Ακόμη δεν υπάρχει κάποιο παιχνίδι.";
    this.state = "ΚΑΤAΣΤΑΣΗ";
    this.nsy = "Κύριο παιχνίδι";
    this.ddr = "Αυτόματη λήψη";
    this.ksv = "Ελήφθησαν";
    this.twa = "Bonusspins";
    this.zyl = "Τζογάρω";
    this.wcg = "Hμισυ";
    this.kup = "Respin";
    this.pwg = "Μπόνουσ";
    this.vfs = "Πρώτο μοίρασμα";
    this.mmu = "Δεύτερο μοίρασμα";
    this.flf = "Τρίτο μοίρασμα";
    this.diw = "Σ Υ Ν  E Χ Ε Ι Α";
    this.qhv = "Να μην προβληθεί ξανά";
    this.dbj = "ΑΥΤΟΜΑΤΗ|ΕΝΑΡΞΗ";
    this.pdj = "ΤΖΟΓAΡΩ";
    this.tvs = "ΠIΝΑΚΑΣ ΚΕΡΔΩΝ";
    this.eqf = "Η φόρτωση ήχων δεν είναι εφικτή!";
    this.vbt = "Λείπουν πόροι!";
    this.npe = "Παιχνίδι χωρίς ήχο?";
    this.qjg = "Γυρίστε τη συσκευή σας σε λειτουργία πορτρέτου για να παίξετε όπως σε μια πραγματική μηχανή slot!";
    this.zmu = "Προσάρμοσε την επιφάνεια εργασίας στις προτιμήσεις σου!";
    this.zsn = "ΓΙΑ ΠΕΡΙΣΣΌΤΕΡΕΣ ΠΛΗΡΟΦΟΡΊΕΣ, ΔΕΊΤΕ ΤΟΥΣ ΚΑΝΟΝΙΣΜΟΎΣ ΤΟΥ ΠΑΙΧΝΙΔΙΟΎ.";
    this.xyf = "ΑΚΎΡΩΣΗ";
    this.uqk = "ΡΥΘΜΉΣΕΙς AUTOSTART";
    this.upu = "Αριθμός παιχνιδιών:";
    this.mxo = "Διακοπή autostart";
    this.hmg = "Μονάδες χαμηλότερα από:";
    this.sur = "Μονάδες υψηλότερες από:";
    this.vyv = "Κέρδος υψηλότερο από:";
    this.ftl = "Το autostart θα σταματήσει με το ξεκίνημα του μπόνους.";
    this.dxj = "Κοινοποίηση στο Facebook";
    this.ok = "OK";
    this.tos = "έλεγχο πραγματικότητας";
    this.etq = "Ζητήσατε τον έλεγχο πραγματικότητας.";
    this.iwo = "Πατήστε το ΙΣΤΟΡΙΚΟ για να δείτε το ιστορικό των παιχνιδιών σας.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "Η ΘΕΩΡΗΤΙΚΉ ΕΠΙΣΤΡΟΦΉ ΣΤΟΝ ΠΑΊΚΤΗ ΓΙΑ ΑΥΤΌ ΤΟ ΠΑΙΧΝΊΔΙ ΕΊΝΑΙ XY."
}
fdv.prototype = new ast;

function glu() {
    this.phd = "МИН. ЗАЛОГ Е";
    this.reu = "МАКС. ЗАЛОГ";
    this.mkz = "МИНИМ. ЗАЛОГ";
    this.wcf = "МАКС. ЗАЛОГ";
    this.nnh = "ЗАЛОГ";
    this.start = "СТАРТ";
    this.pcs = "ПОМОЩ";
    this.gqi = "ПЛАН НА|ПЕЧАЛБИТЕ";
    this.inx = "МЕНЮ";
    this.qrt = "ПОВЕЧЕ|ИГРИ";
    this.qlw = "СТОП";
    this.zlh = "КРЕДИТ";
    this.mbt = "ИГРАТА ЗАВЪРШИ";
    this.udx = "ПЕЧЕЛИТЕ!";
    this.xyq = "УСПЕХ!";
    this.win = "ПЕЧАЛБА";
    this.npl = "ПОСЛ.ПЕЧАЛБА";
    this.vit = "ПРИБИРАНЕ";
    this.qrp = "ПРИБИРАНЕ";
    this.eil = "ДУБЛИРАНЕ";
    this.enf = "АВТО|СТАРТ";
    this.uga = "ДЕЛЕНЕ|ДУБЛ.";
    this.of = "ОТ";
    this.coi = "ИЗХОД";
    this.djr = "ЗАПОЧНЕТЕ ИГРАТА";
    this.xgs = "ИЗБЕРЕТЕ ЗАЛОГ";
    this.ikd = "ДЕЛЕНЕ";
    this.qam = "НАТИСНЕТЕ НЯКОЙ БУТОН ЗА ДА ПРОДЪЛЖИТЕ";
    this.ret = "ВРЪЩАНЕ|КЪМ|ИГРАТА";
    this.zmm = "ОБЩА ПЕЧАЛБА";
    this.vau = "НЕ ДОСТАТЪЧЕН КРЕДИТ.";
    this.wpp = "Бонус!";
    this.tbd = "БОНУС";
    this.sza = "МОЛЯ ИЗЧАКАЙТЕ ...";
    this.zuh = "Повече Игри";
    this.pfk = "ТУРБО";
    this.pml = "ПОВРЕДА АНУЛИРА ВСИЧКИ ЗАЛАГАНИЯ И ПЛАЩАНИЯ.";
    this.language = "ЕЗИК";
    this.swc = "ПРАВИЛА НА ИГРАТА";
    this.fcl = "ПРАВИЛА|НА ИГРАТА";
    this.bok = "ЗАРЕЖДАНЕ ...";
    this.slu = "ЗАРЕЖДАНЕ НА ИСТОРИЯ ...";
    this.pbg = "Достигна един от лимитите!";
    this.ptd = "Предупреждение";
    this.esv = "Комуникационна грешка";
    this.pjs = "Достигнали сте максималния брой безплатни игри!";
    this.gzf = "Играта ще бъде затворена";
    this.gkw = "Играта ще бъде рестартирана";
    this.qsi = "ДОКОСНЕТЕ ЕКРАНА, ЗА ДА ПРОДЪЛЖИТЕ";
    this.mgu = "НАСТРОЙКИ";
    this.qkp = "V A L U E";
    this.vgt = "Моля, включете устройството!";
    this.uxc = "ИНФОРМАЦИЯ";
    this.lyp = "Моля, деактивирайте ЧАСТЕН РЕЖИМ на браузъра, за да играете играта.";
    this.dit = "Тази игра е оптимизирана за Google Chrome.";
    this.unc = "Моля, използвайте текущата версия на";
    this.mur = "За съжаление този браузър не се поддържа напълно.";
    this.jfx = "Тази игра не може да се стартира в режим на свободна игра!";
    this.left = "ЛЯВА";
    this.plx = "ДЯСНА";
    this.kpt = "АВТО";
    this.mgq = "СПЕЧЕЛЕНО";
    this.rzm = "печалби";
    this.bcf = "ОБЩО";
    this.error = "ГРЕШКА";
    this.tfz = "БЕЗПЛАТНА ИГРА";
    this.audio = "ЗВУК";
    this.zqx = "МУЗИКА";
    this.lkz = "ПЪЛЕН ЕКРАН";
    this.kmc = "ПЪЛЕН|ЕКРАН";
    this.dtf = "ИД НА ИГРА";
    this.vgv = "ВРЕМЕ НА ИГРА";
    this.cvl = "Последни";
    this.tnk = "игри";
    this.xng = "ДЕПОЗИТ";
    this.wbt = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УДВОИШ ПЕЧАЛБАТА";
    this.jfp = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.qdg = "ИГРАЙ ЗА ШАНС ДА УВЕЛИЧИШ ПЕЧАЛБАТА";
    this.qdn = "Статистика";
    this.hac = "Общо игри";
    this.npq = "Общо залог";
    this.hsf = "Общо печалби";
    this.bji = "Общо време на игра";
    this.kge = "Прочетох това съобщение.";
    this.jfi = "ИЗХОД|ОТ|ИГРАТА";
    this.odx = "ИСТОРИЯ";
    this.zlo = "Няма играни игри.";
    this.state = "СТАТУС";
    this.nsy = "Основна игра";
    this.ddr = "Автоматично събрани";
    this.ksv = "Събрани";
    this.twa = "Бонус-игри";
    this.zyl = "Дублиране";
    this.wcg = "Половина";
    this.kup = "Respin";
    this.pwg = "Бонус";
    this.vfs = "Първо раздаване";
    this.mmu = "Второ раздаване";
    this.flf = "Трето раздаване";
    this.diw = "П Р О Д Ъ Л Ж А В А М";
    this.qhv = "Не показвай отново";
    this.dbj = "AUTOSTART";
    this.pdj = "ДУБЛИРАНЕ";
    this.tvs = "ПЛАН НА ПЕЧАЛБИТЕ";
    this.eqf = "Звукът не може да бъде зареден!";
    this.vbt = "Липсват ресурси!";
    this.npe = "Игра без звук?";
    this.qjg = "Завъртете устройството си в портретен режим, за да играете като на истинска слот машина!";
    this.zmu = "Настройте интерфейса на играта според своите нужди!";
    this.zsn = "ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ВИЖТЕ ПРАВИЛАТА НА ИГРАТА.";
    this.xyf = "ИЗЧИСТВАНЕ";
    this.uqk = "НАСТРОЙКИ НА АВТОМАТИЧНОТО СТАРТИРАНЕ";
    this.upu = "Брой игри:";
    this.mxo = "Спри автоматичния старт";
    this.hmg = "Кредит по-малък от:";
    this.sur = "Кредит по-висок от:";
    this.vyv = "Спечели повече от:";
    this.ftl = "Автоматичното стартиране ще бъде спряно в началото на бонуса.";
    this.dxj = "Сподели във Facebook";
    this.ok = "OK";
    this.tos = "Reality Check";
    this.etq = "Заявили сте проверка на реалността.";
    this.iwo = "Натиснете ИСТОРИЯ, за да видите хронологията си на игра.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "ТЕОРЕТИЧНАТА ВЪЗВРАЩАЕМОСТ НА ИГРАЧА ЗА ТАЗИ ИГРА Е XY."
}
glu.prototype = new ast;

function chu() {
    this.phd = "მინიმალური ფსონი არის";
    this.reu = "მაქსიმალური ფსონი";
    this.mkz = "მინიმალური ფსონი";
    this.wcf = "მაქსიმალური ფსონი";
    this.nnh = "ფსონი";
    this.start = "დაწყება";
    this.pcs = "დახმარება";
    this.gqi = "გადახდის მრიცხველი";
    this.inx = "მენიუ";
    this.qrt = "მეტი|თამაშები";
    this.qlw = "გაჩერება";
    this.zlh = "კრედიტი";
    this.mbt = "თამაში დასრულებულია";
    this.udx = "გამარჯვებული!";
    this.xyq = "გისურვებთ წარმატებას!";
    this.win = "მოგება";
    this.npl = "ბოლო მოგება";
    this.vit = "შეგროვება";
    this.qrp = "შეგროვება";
    this.eil = "აზარტი";
    this.enf = "ავტო|დაწყება";
    this.uga = "ნახევარი";
    this.coi = "გამოსვლა";
    this.djr = "თამაშის დაწყება";
    this.xgs = "აირჩიეთ ფსონი";
    this.ikd = "ნახევარი";
    this.ret = "თამაშზე|დაბრუნება";
    this.zmm = "მთლიანი მოგება";
    this.ptd = "გაფრთხილება";
    this.bcf = "მთლიანი";
    this.sza = "გთხოვთ, დაელოდოთ ...";
    this.zuh = "მეტი თამაშები";
    this.pfk = "ტურბო";
    this.pml = "გაუმართაობის შემთხვევაში ყველა მოგება და ნათამაშები წაიშლება.";
    this.diw = "გაგრძელება";
    this.dbj = "ავტო დაწყება";
    this.tvs = "გადახდის მრიცხველი";
    this.pdj = "აზარტი";
    this.left = "მარცხნივ";
    this.plx = "მარჯვნივ";
    this.kpt = "ავტომატურად";
    this.ok = "კი";
    this.xyf = "გაუქმება";
    this.zyl = "აზარტი";
    this.wcg = "ნახევარი";
    this.swc = "თამაშის წესები";
    this.fcl = "თამაშის წესები";
    this.wpp = "BONUS!";
    this.tbd = "ბონუს";
    this.qam = "დააჭირეთ ნებისმიერ ღილაკს რომ გააგრძელოთ";
    this.vau = "არა საკმარისი კრედიტი.";
    this.qsi = "შეეხეთ ეკრანს რომ გააგრძელოთ";
    this.bok = "ჩატვირთვის  ...";
    this.slu = "ჩატვირთვის  ისტორია  ...";
    this.esv = "საკომუნიკაციო შეცდომა";
    this.pbg = "თქვენ ერთ ერთი ლიმიტი ამოწურეთ!";
    this.pjs = "თქვენ უფასო თამაშების მაქსიმალური რაოდენობის ლიმიტი უკვე ამოწურეთ!";
    this.gzf = "თამაში დასრულდება";
    this.gkw = "თამაში გადაიტვირთება";
    this.mgq = "მოგებულია";
    this.rzm = "wins";
    this.qkp = "V A L U E";
    this.error = "შეცდომა";
    this.tfz = "უფასო თამაში";
    this.dtf = "თამაშის  ნომერი";
    this.vgv = "სათამაშო დრო";
    this.cvl = "ბოლო ";
    this.tnk = "თამაშები";
    this.xng = "დეპოზიტი";
    this.audio = "ხმა";
    this.zqx = "მუსიკა";
    this.lkz = "სრული ეკრანი";
    this.kmc = "სრული ეკრანი";
    this.language = "ენის";
    this.qhv = "მომავალში აღარ ჩვენება";
    this.eqf = "ხმის ჩატვირთვა ვერ ხერხდება!";
    this.vbt = "არასაკმარისი რესურსები!";
    this.npe = "გინდათ ხმის გარეშე ითამაშოთ?";
    this.vgt = "გთხოვთ მოაბრუნოთ თქვენი მოწყობილობა!";
    this.lyp = "გთხოვთ, გამორთოთ პირადი რეჟიმი თქვენს ბრაუზერში რომ შეძლოთ თამაში.";
    this.dit = "ეს თამაში ოპტიმიზირებულია Google Chrome-ისათვის.";
    this.ajw = "გთხოვთ გამოიყენოთ";
    this.pxg = "-ის მიმდინარე ვერსია";
    this.mur = "სამწუხაროდ, ამ ბრაუზერზე თამაში სრულად ვერ ხერხდება.";
    this.jfx = "ამ თამაშის თამაში უფასოდ შეუძლებელია!";
    this.qjg = "ჩართეთ თქვენი მოწყობილობა პორტრეტის რეჟიმზე რომ ითამაშოთ ისე თითქოს რეალურ სლოტ მოწყობილობაზე თამაშობდეთ!";
    this.zmu = "მოარგეთ თამაშის ინტერფეისი თქვენს საჭიროებებს!";
    this.wbt = "აირჩიეთ სწორი ფერი რომ გააორმაგოთ მოგება";
    this.jfp = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.qdg = "დადეთ ფსონი რომ გაზარდოთ მოგების შანსი";
    this.hac = "მთლიანი თამაშები";
    this.npq = "ფსონი მთლიანად";
    this.hsf = "მთლიანი მოგება";
    this.bji = "მთლიანი სათამაშო დრო";
    this.kge = "მე გავეცანი ამ გზავნილს.";
    this.jfi = "თამაშის|დამთავრება";
    this.odx = "მოვლენების ჩანაწერი";
    this.zlo = "ნათამაშები თამაშები არ არის.";
    this.state = "მდგომარეობა";
    this.nsy = "ძირითადი თამაში";
    this.ddr = "ავტომატურად შეგროვება";
    this.ksv = "აღებულ იქნა";
    this.vfs = "პირველი დარიგება";
    this.mmu = "მეორე დარიგება";
    this.flf = "მესამე დარიგება";
    this.uqk = "ავტოგამშვების პარამეტრები";
    this.upu = "თამაშების რაოდენობა:";
    this.mxo = "შეაჩერეთ ავტოგამშვები";
    this.hmg = "კრედიტი უფრო დაბალი ვიდრე:";
    this.sur = "კრედიტი უფრო მაღალი ვიდრე:";
    this.vyv = "მოიგეთ უფრო მეტი ვიდრე:";
    this.ftl = "ავტოგამშვები შეჩერდება ბონუსის დასაწყისში.";
    this.dxj = "გააზიარეთ ფეისბუქზე";
    this.qdn = "სტატისტიკა";
    this.of = "/";
    this.twa = "Bonus თამაში";
    this.pwg = "ბონუსი";
    this.uxc = "ინფორმაცია";
    this.mgu = "პარამეტრ.";
    this.kup = "ხელახლა დატრიალების";
    this.zsn = "მეტი ინფორმაციისათვის, იხილეთ თამაშის წესები.";
    this.tos = "რეალობის შემოწმება";
    this.etq = "თქვენ მოითხოვეთ რეალობის შემოწმება.";
    this.iwo = "თქვენი თამაშის ისტორიის სანახავად დააჭირეთ მოვლენების ჩანაწერი-ს.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "თეორიული დაბრუნება მოთამაშეზე ამ თამაშში არის XY."
}
chu.prototype = new ast;

function nre() {
    this.phd = "A MINIMUM TÉT";
    this.reu = "MAXIMUM TÉT";
    this.mkz = "MIN. TÉT";
    this.wcf = "MAX. TÉT";
    this.nnh = "TÉT";
    this.start = "START";
    this.pcs = "SÚGÓ";
    this.gqi = "SÚGÓ";
    this.inx = "MENÜ";
    this.qrt = "MENÜ";
    this.qlw = "STOP";
    this.zlh = "HITEL";
    this.mbt = "A JÁTÉKNAK VÉGE";
    this.udx = "NYEREMÉNY!";
    this.xyq = "SOK SZERENCSÉT!";
    this.win = "NYEREMÉNY";
    this.npl = "UTOLSÓ NYER.";
    this.vit = "FELÍR";
    this.qrp = "FELÍR";
    this.eil = "SZORZÁS";
    this.enf = "AUTO|START";
    this.uga = "FELEZÉS";
    this.coi = "KILÉPÉS";
    this.djr = "START";
    this.xgs = "VÁLASSZON TÉTET";
    this.ikd = "FELEZÉS";
    this.ret = "VISSZA A|JÁTÉKHOZ";
    this.zmm = "Összes Nyeremény";
    this.ptd = "Figyelmeztetés";
    this.bcf = "ÖSSZES";
    this.sza = "KÉREM VÁRJON ...";
    this.zuh = "Menü";
    this.pfk = "SEBESSÉG";
    this.pml = "A MEGHIBÁSODÁS ÉRVÉNYTELENÍT MINDEN JÁTÉKOT ÉS KIFIZETÉST.";
    this.diw = "T O V Á B B";
    this.dbj = "AUTOSTART";
    this.tvs = "SÚGÓ";
    this.pdj = "SZORZÁS";
    this.left = "BAL";
    this.plx = "JOBB";
    this.ok = "OK";
    this.xyf = "MÉGSEM";
    this.zyl = "Szorzás";
    this.wcg = "Felezés";
    this.swc = "JÁTÉKSZABÁLYOK";
    this.fcl = "JÁTÉKSZABÁLYOK";
    this.wpp = "Bónusz!";
    this.tbd = "BÓNUSZ";
    this.qam = "A FOLYTATÁSHOZ NYOMJON MEG EGY GOMBOT";
    this.vau = "NINCS ELÉG HITEL";
    this.qkp = "V A L U E";
    this.rzm = "nyeremények";
    this.of = "/";
    this.qsi = "ÉRINTSE MEG A KÉPERNYŐT A FOLYTATÁSHOZ";
    this.bok = "BETÖLTÉSE ...";
    this.slu = "JÁTÉK TÖRTÉNET BETÖLTÉSE ...";
    this.esv = "Kommunikációs hiba";
    this.pbg = "Elérte az egyik limitet!";
    this.pjs = "Elérte a szabad játékok maximum számát!";
    this.gzf = "A játék megállítva";
    this.gkw = "Játék újraindul";
    this.mgq = "NYERT";
    this.error = "HIBA";
    this.tfz = "FREEPLAY";
    this.kpt = "AUTO";
    this.dtf = "JÁTÉK ID";
    this.vgv = "Játék Idő";
    this.cvl = "utolsó";
    this.tnk = "játék";
    this.xng = "HITEL";
    this.audio = "HANG";
    this.zqx = "ZENE";
    this.lkz = "TELJES KÉPERNYŐ";
    this.kmc = "TELJES KÉPERNYŐ";
    this.language = "NYELV";
    this.qhv = "Ne mutassa mégegyszer";
    this.eqf = "A hangot nem lehet betölteni!";
    this.vbt = "Források hiányoznak!";
    this.npe = "Játék hang nélkül?";
    this.mgu = "BEÁLLÍTÁS";
    this.vgt = "Kérjük fordítsa el a készüléket!";
    this.uxc = "INFÓ";
    this.lyp = "A játékhoz kérem tiltsa le a Privát Böngészés módot a böngészőjében.";
    this.dit = "Ez a játék Google Chrome böngészőre van optimalizálva.";
    this.ajw = "Kérjük használja a(z)";
    this.pxg = " legújabb verzióját!";
    this.mur = "Sajnos ez a böngésző nem teljesen támogatott.";
    this.jfx = "Ez a játék nem indítható FreePlay módban!";
    this.qjg = "Fordítsa a készülékét álló módba, hogy úgy játsszon, mint egy igazi nyerőgépen!";
    this.zmu = "Állítsa be a játék felületét az Ön igényeinek megfelelően!";
    this.wbt = "VÁLASSZA KI A MEGFELELŐ SZÍNT, HOGY MEGDUPLÁZZA A NYEREMÉNYT";
    this.jfp = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.qdg = "SZORZÁS EGY LEHETŐSÉG, HOGY NÖVELJE A NYEREMÉNYT";
    this.qdn = "Statisztika";
    this.hac = "Összes Játék";
    this.npq = "Összes Tét";
    this.hsf = "Összes Nyeremény";
    this.bji = "Összes Játék Idő";
    this.kge = "Elolvastam az üzenetet.";
    this.jfi = "KILÉPÉS";
    this.odx = "Előzmények";
    this.zlo = "Nincsenek játékok.";
    this.state = "STÁTUSZ";
    this.nsy = "Fő Játék";
    this.ddr = "Autom. Felírás";
    this.ksv = "Felírva";
    this.twa = "Bónusz játék";
    this.kup = "Respin";
    this.pwg = "Bónusz";
    this.vfs = "Első Leosztás";
    this.mmu = "Második Leosztás";
    this.flf = "Harmadik Leosztás";
    this.uqk = "AUTOSTART BEÁLLÍTÁS";
    this.upu = "Játékok száma:";
    this.mxo = "Stop autostart";
    this.hmg = "A hitel kevesebb, mint:";
    this.sur = "A hitel több, mint:";
    this.vyv = "A nyeremény több, mint:";
    this.ftl = "Az AUTOSTART funkció kikapcsolódik a bónusz játék kezdetén.";
    this.dxj = "Megosztás a Facebook-on";
    this.zsn = "KIEGÉSZÍTŐ TÁJÉKOZTATÁST A JÁTÉKSZABÁLYOKBAN TALÁL.";
    this.tos = "Reality Check";
    this.etq = "Ön egy valóság-ellenőrzést kért.";
    this.iwo = "Nyomja meg az ELŐZMÉNYEK lehetőséget, hogy megtekintse a játéka előzményeit.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "A JÁTÉKOSNAK AZ ELVI KIFIZETÉS ÖSSZEGE EBBEN A JÁTÉKBAN XY."
}
nre.prototype = new ast;

function zon() {
    this.phd = "MIZA MINIMĂ ESTE";
    this.reu = "MIZA MAXIMĂ";
    this.mkz = "MIZA MIN.";
    this.wcf = "MIZA MAX.";
    this.nnh = "MIZĂ";
    this.start = "START";
    this.pcs = "AJUTOR";
    this.gqi = "LISTA|CÂŞTIGURI";
    this.inx = "MENIU";
    this.qrt = "MENIUL|JOCULUI";
    this.qlw = "STOP";
    this.zlh = "CREDIT";
    this.mbt = "SFÂRŞIT JOCUL";
    this.udx = "CÂŞTIGĂTOR!";
    this.xyq = "MULT NOROC!";
    this.win = "CÂŞTIG";
    this.npl = "ULTIMUL CÂŞTIG";
    this.vit = "COLECTA";
    this.qrp = "COLECTA";
    this.eil = "JOC";
    this.enf = "AUTO|START";
    this.uga = "COLECTARE|1/2";
    this.coi = "IEŞIRE";
    this.djr = "APĂSAŢI START";
    this.xgs = "ALEGEŢI MIZA";
    this.ikd = "COLECTARE|1/2";
    this.ret = "ÎNAPOI|LA JOC";
    this.zmm = "Câştig total";
    this.ptd = "Avertizare";
    this.bcf = "TOTAL";
    this.sza = "AŞTEPTAŢI VĂ ROG ...";
    this.zuh = "Meniul Jocului";
    this.pfk = "VITEZĂ";
    this.pml = "FĂRĂ GARANŢIE LA DEFECTAREA APARATULUI.";
    this.diw = "C O N T I N U A R E";
    this.dbj = "AUTOSTART";
    this.tvs = "LISTA CÂŞTIGURI";
    this.pdj = "JOC";
    this.left = "STÂNGA";
    this.plx = "DREAPTA";
    this.ok = "OK";
    this.xyf = "ÎNTRERUPERE";
    this.zyl = "Joc";
    this.wcg = "Colectare 1/2";
    this.swc = "REGULILE JOCULUI";
    this.fcl = "REGULILE|JOCULUI";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.qam = "PENTRU CONTINUARE APASĂ PE UN BUTON";
    this.vau = "CREDIT INSUFICIENT.";
    this.rzm = "câştigă";
    this.qkp = "V A L U E";
    this.of = "DIN";
    this.qsi = "ATINGEȚI ECRANUL PENTRU A CONTINUA";
    this.bok = "ÎNCARCĂ ...";
    this.slu = "ÎNCARCĂ ISTORIC ...";
    this.esv = "Eroare de comunicare";
    this.pbg = "Aţi atins una dintre limite!";
    this.pjs = "Aţi atins numărul maxim de jocuri gratis!";
    this.gzf = "Jocul se încheie";
    this.gkw = "Jocul se restartează";
    this.mgq = "CÂŞTIGAT";
    this.error = "EROARE";
    this.tfz = "FREEPLAY";
    this.kpt = "AUTO";
    this.dtf = "ID JOC";
    this.vgv = "TIMP DE JOC";
    this.cvl = "ultimele";
    this.tnk = "jocuri";
    this.xng = "CREDIT";
    this.audio = "AUDIO";
    this.zqx = "MUZICĂ";
    this.lkz = "ECRAN COMPLET";
    this.kmc = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.qhv = "Nu reafișați";
    this.eqf = "Sunetele nu pot fi încărcate!";
    this.vbt = "Lipsesc resurse!";
    this.npe = "Jucaţi fără sunet?";
    this.mgu = "SETĂRI";
    this.vgt = "Vă rugăm opriţi aparatul!";
    this.uxc = "INFO";
    this.lyp = "Vă rugăm dezactivaţi PRIVATE MODE în browser-ul dvs. pentru a juca.";
    this.dit = "Acest joc este optimizat pentru Google Chrome.";
    this.unc = "Vă rugăm utilizaţi versiunea actuală";
    this.mur = "Din păcate acest browser nu este sprijinit complet.";
    this.jfx = "Acest joc nu poate fi pornit în modul freeplay!";
    this.qjg = "Treceţi aparatul dvs. în modul portret, pentru a juca ca la o maşină automată!";
    this.zmu = "Ajustează interfaţa de joc nevoilor dvs!";
    this.wbt = "SELECTEAZĂ CULOAREA CORECTĂ PENTRU DUBLAREA CÂŞTIGULUI";
    this.jfp = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.qdg = "JOACĂ PENTRU ŞANSA DE A CREŞTE PROFITUL";
    this.qdn = "Statistică";
    this.hac = "Număr jocuri";
    this.npq = "Pariuri totale";
    this.hsf = "Câştig total";
    this.bji = "Timp total de joc";
    this.kge = "Am citit mesajul.";
    this.jfi = "ÎNCHEIERE|JOC";
    this.odx = "ISTORIC";
    this.zlo = "Nu există jocuri.";
    this.state = "STATUT";
    this.nsy = "Joc principal";
    this.ddr = "Auto colectare";
    this.ksv = "Colectat";
    this.twa = "Bonusspins";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "Primul Deal";
    this.mmu = "Al doilea deal";
    this.flf = "Al treilea deal";
    this.uqk = "SETĂRI AUTOSTART";
    this.upu = "Numărul jocurilor:";
    this.mxo = "Oprire autostart";
    this.hmg = "Credit sub:";
    this.sur = "Credit peste:";
    this.vyv = "Câștig peste:";
    this.ftl = "Autostart se va opti la începerea bonusului.";
    this.dxj = "Distribuie Facebook";
    this.zsn = "PENTRU INFORMAŢII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.tos = "Reality Check";
    this.etq = "Ai cerut un Reality Check.";
    this.iwo = "Apasă ISTORIC pentru a vedea istoricul tău de joc.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "DECONTAREA TEORETICĂ CĂTRE JUCĂTORI A ACESTUI JOC ESTE DE XY."
}
zon.prototype = new ast;

function lcz() {
    this.phd = "MÍNIMA APOSTA É";
    this.reu = "MÁX. APOSTA";
    this.mkz = "MÍN. APOSTA";
    this.wcf = "MÁX. APOSTA";
    this.nnh = "APOSTA";
    this.start = "PARTIDA";
    this.pcs = "AJUDA";
    this.gqi = "ESQUEMA|DE PAGOS";
    this.inx = "MENU";
    this.qrt = "SELEÇÃO|DE JOGOS";
    this.qlw = "PARADA";
    this.zlh = "CRÉDITO";
    this.mbt = "FIM DO JOGO";
    this.udx = "VENCEDOR!";
    this.xyq = "BOA SORTE!";
    this.win = "GANHO";
    this.npl = "ULTIMO GANHO";
    this.vit = "COLETAR";
    this.qrp = "COLETAR";
    this.eil = "JOGADA";
    this.enf = "AUTO|PARTIDA";
    this.uga = "METADE";
    this.coi = "SAÍDA";
    this.djr = "PREMIR PARTIDA";
    this.xgs = "SELECIONAR APOSTA";
    this.ikd = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.zmm = "Ganho total";
    this.ptd = "Aviso";
    this.bcf = "TOTAL";
    this.sza = "AGUARDE POR FAVOR ...";
    this.zuh = "Seleção de jogos";
    this.pfk = "VELOCIDADE";
    this.pml = "NÃO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MÁQUINA.";
    this.diw = "C O N T I N U A R";
    this.dbj = "AUTOPARTIDA";
    this.tvs = "ESQUEMA DE PAGOS";
    this.pdj = "JOGADA";
    this.left = "ESQUERDA";
    this.plx = "DIREITA";
    this.ok = "OK";
    this.xyf = "CANCELAR";
    this.zyl = "Jogada";
    this.wcg = "Metade";
    this.swc = "REGRAS DO JOGO";
    this.fcl = "REGRAS|DO JOGO";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.qam = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.vau = "NÃO HÁ CRÉDITO SUFICIENTE!";
    this.rzm = "ganha";
    this.qkp = "V A L U E";
    this.of = "DE";
    this.qsi = "TOCAR NA TELA PARA CONTINUAR";
    this.bok = "CARREGANDO ...";
    this.slu = "CARREGANDO HISTÓRICO ...";
    this.esv = "Erro de comunicação";
    this.pbg = "Alcançou um dos limities!";
    this.pjs = "Alcançou a quantidade máxima de jogos livres!";
    this.gzf = "O jogo será encerrado";
    this.gkw = "O jogo será reiniciado";
    this.mgq = "GANHOU";
    this.error = "ERRO";
    this.tfz = "FREEPLAY";
    this.kpt = "AUTO";
    this.dtf = "ID JOGO";
    this.vgv = "Playing Time";
    this.cvl = "Últimos";
    this.tnk = "jogos";
    this.xng = "DEPOSIT";
    this.audio = "AUDIO";
    this.zqx = "MUSIC";
    this.lkz = "TELA CHEIA";
    this.kmc = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.qhv = "Não exibir novamente";
    this.eqf = "Sounds não podem ser carregados!";
    this.vbt = "Faltam recursos!";
    this.npe = "Jogar sem som?";
    this.mgu = "AJUSTES";
    this.vgt = "Favor girar o seu aparelho!";
    this.uxc = "INFORMAÇÃO";
    this.lyp = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.dit = "Este jogo é otimizado por Google Chrome.";
    this.unc = "Favor usar a versão atual de";
    this.mur = "Infelizmente este browser não é completamente suportado.";
    this.jfx = "Este jogo não pode ser iniciado no modo de jogo livre!";
    this.qjg = "Girar o seu aparelho para o modo de portrait, para jogar como em uma máquina real!";
    this.zmu = "Adapte a interface do jogo às suas necessidades!";
    this.wbt = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.jfp = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.qdg = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.qdn = "Estatísticas";
    this.hac = "Número de jogos";
    this.npq = "Aposta total";
    this.hsf = "Ganho total";
    this.bji = "Tempo total do jogo";
    this.kge = "Eu lí esta mensagem.";
    this.jfi = "ENCERRAR|JOGO";
    this.odx = "HISTÓRICO";
    this.zlo = "Ainda não existem jogos.";
    this.state = "ESTADO";
    this.nsy = "Jogo principal";
    this.ddr = "Coletado automaticamente";
    this.ksv = "Coletado";
    this.twa = "Bonusspins";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "Primeiro Deal";
    this.mmu = "Segundo Deal";
    this.flf = "Terceiro Deal";
    this.uqk = "AJUSTES AUTOPARTIDA";
    this.upu = "Número de jogos:";
    this.mxo = "Parar autopartida";
    this.hmg = "Crédito menor do que:";
    this.sur = "Crédito maior do que:";
    this.vyv = "Ganho maior do que:";
    this.ftl = "O autopartida será parado no início do bonus.";
    this.dxj = "Participar no Facebook";
    this.zsn = "PARA MAIS INFORMAÇÕES, CONSULTE AS REGRAS DO JOGO.";
    this.tos = "Reality Check";
    this.etq = "Solicitaste um Reality Check.";
    this.iwo = "Pressione HISTÓRICO para ver seu histórico de jogos.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "O PAGAMENTO TEÓRICO AO JOGADOR PARA ESTE JOGO É DE XY."
}
lcz.prototype = new ast;

function ano() {
    this.phd = "LA MISE MINIMALE EST DE";
    this.reu = "MISE MAX.";
    this.mkz = "MISE MINI";
    this.wcf = "MISE MAX.";
    this.nnh = "MISE";
    this.start = "DEPART";
    this.pcs = "AIDE";
    this.gqi = "TABLEAU|DES PAIEMENTS";
    this.inx = "MENU";
    this.qrt = "PLUS|DE JEUX";
    this.qlw = "ARRÊTEZ";
    this.zlh = "CRÉDIT";
    this.mbt = "FIN DU JEU";
    this.udx = "GAGNANT!";
    this.xyq = "BONNE CHANCE!";
    this.win = "GAIN";
    this.npl = "DERNIER GAIN";
    this.vit = "ENCAISSER";
    this.qrp = "ENCAISSER";
    this.eil = "DOUBLER";
    this.enf = "AUTO|LANCER";
    this.uga = "ENCAISSER|MOITIÉ";
    this.coi = "SORTIE";
    this.djr = "APPUYEZ SUR START";
    this.xgs = "CHOISIR LA MISE";
    this.ikd = "ENCAISSER|MOITIÉ";
    this.ret = "RETOUR|AU JEU";
    this.zmm = "Gain total";
    this.ptd = "Avertissement";
    this.bcf = "TOTALE";
    this.sza = "ATTENDEZ S'IL VOUS PLAÎT ...";
    this.zuh = "Plus de jeux";
    this.pfk = "VITESSE";
    this.pml = "Á L'OCCASION D´ERREUR D´APPAREIL DÉCLINER TOUTE RESPONSABILITÉ.";
    this.diw = "C O N T I N U E R";
    this.dbj = "AUTO LANCER";
    this.tvs = "TABLEAU DES PAIEMENTS";
    this.pdj = "DOUBLER";
    this.left = "GAUCHE";
    this.plx = "DROITE";
    this.ok = "OK";
    this.xyf = "ANNULER";
    this.zyl = "Doubler";
    this.wcg = "Encaisser moitié";
    this.swc = "RÈGLES DU JEU";
    this.fcl = "RÈGLES DU JEU";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.qam = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.vau = "PAS ASSEZ DE CRÉDIT";
    this.rzm = "gagne";
    this.qkp = "V A L U E";
    this.of = "SUR";
    this.qsi = "EFFLEURE L'ÉCRAN POUR CONTINUER";
    this.bok = "CHARGEMENT EN COURS ...";
    this.slu = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.esv = "Erreur de communication";
    this.pbg = "Vous avez atteint une des limites!";
    this.pjs = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.gzf = "Le jeu sera terminé";
    this.gkw = "Le jeu sera démarré de nouveau";
    this.mgq = "GAGNÉ";
    this.error = "ERREUR";
    this.tfz = "JEU GRATUIT";
    this.kpt = "AUTO";
    this.dtf = "ID DU JEU";
    this.vgv = "TEMPS DE JEU";
    this.cvl = "Les";
    this.tnk = "derniers jeux";
    this.xng = "AVOIR";
    this.audio = "AUDIO";
    this.zqx = "MUSIQUE";
    this.lkz = "PLEIN ÉCRAN";
    this.kmc = "PLEIN|ÉCRAN";
    this.language = "LANGUE";
    this.qhv = "Ne pas afficher encore une fois";
    this.eqf = "Impossible de charger des sounds!";
    this.vbt = "Manque de ressources!";
    this.npe = "Jouer sans son?";
    this.mgu = "CONFIGUR.";
    this.vgt = "Merci de tourner votre matériel!";
    this.uxc = "INFO";
    this.lyp = "Veuillez désactiver le MODE PRIVÉ dans le navigateur afin de démarrer le jeu.";
    this.dit = "Ce jeu est optimisé pour Google Chrome.";
    this.unc = "Veuilllez utiliser la version à jour de";
    this.mur = "Malheureusement, ce browser n'est intégralement supporté.";
    this.jfx = "Impossible de démarrer ce jeu au mode jeu gratuit!";
    this.qjg = "Tournez votre matériel dans le mode portrait pour jouer comme sur une véritable machine!";
    this.zmu = "Adapte l'interface de jeu à tes besoins!";
    this.wbt = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.jfp = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.qdg = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.qdn = "Statistiques";
    this.hac = "Nombre des jeux";
    this.npq = "Total des mises";
    this.hsf = "Gain total";
    this.bji = "Temps total du jeu";
    this.kge = "J'ai lu le message";
    this.jfi = "TERMINER|LE JEU";
    this.odx = "Historique";
    this.zlo = "Il n'y a pas encore de jeux joués.";
    this.state = "ÉTAT";
    this.nsy = "Jeu principal";
    this.ddr = "Pris automatiquement";
    this.ksv = "Pris";
    this.twa = "Bonusspins";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "Premier Deal";
    this.mmu = "Deuxième Deal";
    this.flf = "Troisième Deal";
    this.uqk = "AUTOSTART CONFIGURATION";
    this.upu = "Nombre des jeux:";
    this.mxo = "Arrêter autostart";
    this.hmg = "Crédit inférieur à:";
    this.sur = "Crédit supérieur à:";
    this.vyv = "Gain supérieur à:";
    this.ftl = "L'autostart est arrêté au début du bonus.";
    this.dxj = "Partager sur Facebook";
    this.zsn = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RÈGLES DU JEU.";
    this.tos = "Reality Check";
    this.etq = "Tu as demandé un Reality Check.";
    this.iwo = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "LE VERSEMENT THÉORIQUE AU JOUEUR POUR CE JEU S'ÉLÈVE À XY."
}
ano.prototype = new ast;

function ygk() {
    this.phd = "NAJMANJI ULOG JE";
    this.reu = "MAX ULOG";
    this.mkz = "MIN. ULOG";
    this.wcf = "MAKS. ULOG";
    this.nnh = "ULOG";
    this.start = "START";
    this.pcs = "POMOĆ";
    this.gqi = "LISTA DOBITAKA";
    this.inx = "IZBORNIK";
    this.qrt = "VIŠE|IGARA";
    this.qlw = "STOP";
    this.zlh = "KREDIT";
    this.mbt = "KRAJ IGRE";
    this.udx = "DOBITAK!";
    this.xyq = "SRETNO!";
    this.win = "DOBITAK";
    this.npl = "ZADNJI DOBITAK";
    this.vit = "UPIŠI";
    this.qrp = "UPIŠI";
    this.eil = "DUPLANJE";
    this.enf = "AUTO|START";
    this.uga = "UZMI|1/2";
    this.coi = "IZLAZ";
    this.djr = "PRETISNITE START";
    this.xgs = "BIRAJTE ULOG";
    this.ikd = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.zmm = "Ukubni dobitci";
    this.ptd = "Upozorenje";
    this.bcf = "UKUBNI";
    this.sza = "MOLIMO PRIČEKAJTE ...";
    this.zuh = "Više igara";
    this.pfk = "BRZINA";
    this.pml = "Kod kvara na uređaju nema jamstva.";
    this.diw = "D A L J E";
    this.dbj = "AUTOSTART";
    this.tvs = "LISTA DOBITAKA";
    this.pdj = "DUPLANJE";
    this.left = "LIJEVA";
    this.plx = "DESNA";
    this.ok = "OK";
    this.xyf = "PREKID";
    this.zyl = "Duplanje";
    this.wcg = "Uzmi 1/2";
    this.swc = "PRAVILA IGRE";
    this.fcl = "PRAVILA IGRE";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.qam = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.vau = "NEMATE DOVOLJNO KREDITA.";
    this.rzm = "dobici";
    this.qkp = "V A L U E";
    this.of = "OD";
    this.qsi = "ZA NASTAVAK DODIRNITE ZASLON";
    this.bok = "UČITAVANJA ...";
    this.slu = "POVIJEST UČITAVANJA ...";
    this.esv = "Komunikacijska pogreška";
    this.pbg = "Dostigli ste jednu od graničnih vrijednosti!";
    this.pjs = "Dostigli ste maksimum besplatnih igara!";
    this.gzf = "Igra se zatvara";
    this.gkw = "Igra se iznova učitava";
    this.mgq = "OSVOJENO";
    this.error = "POGREŠKA";
    this.tfz = "FREEPLAY";
    this.kpt = "AUTO";
    this.dtf = "ID IGRE";
    this.vgv = "Vrijeme igre";
    this.cvl = "posljednjih";
    this.tnk = "igara";
    this.xng = "DEPOZIT";
    this.audio = "ZVUKA";
    this.zqx = "GLAZBA";
    this.lkz = "PUN ZASLON";
    this.kmc = "PUN ZASLON";
    this.language = "JEZIKA";
    this.qhv = "Ne prikazuj ponovo";
    this.eqf = "Zvukovi se ne mogu učitati!";
    this.vbt = "Nedostaju resursi!";
    this.npe = "Želite li igrati uz zvuk?";
    this.mgu = "POSTAVKE";
    this.vgt = "Uključite svoj uređaj!";
    this.uxc = "INFORMACIJE";
    this.lyp = "Molimo deaktivirajte PRIVATNI MOD u Vašem pregledniku kako biste mogli igrati";
    this.dit = "Ova igra je optimizirana za Google Chrome.";
    this.unc = "Molimo koristite se trenutnom inačicom";
    this.mur = "Nažalost ovaj preglednik nije u potpunosti podržan";
    this.jfx = "Ova se igra ne može pokrenuti u režimu slobodne igre!";
    this.qjg = "Podesite svoj uređaj na portretni format kako biste igrali kao na pravoma automatu!";
    this.zmu = "Prilagodite sučelje igre svojim potrebama!";
    this.wbt = "ODABERI PRAVU BOJU I TIME UDVOSTRUČI DOBITAK";
    this.jfp = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.qdg = "KOCKANJEM OSVOJI ŠANSU ZA POVEĆANJE DOBITKA";
    this.qdn = "Statistike";
    this.hac = "Ukupno igara";
    this.npq = "Ukupni ulog";
    this.hsf = "Ukupno dobitaka";
    this.bji = "Ukupno vrijeme igre";
    this.kge = "Pročitao sam ovu poruku";
    this.jfi = "IZLAZ|IZ IGRE";
    this.odx = "Povijest";
    this.zlo = "Nema odigranih igara.";
    this.state = "STANJE";
    this.nsy = "Glavna igra";
    this.ddr = "Auto. pokupljeno";
    this.ksv = "Pokupljeno";
    this.twa = "Besplatne igre";
    this.kup = "Dodatne okretaje";
    this.pwg = "Bonus";
    this.vfs = "Prvo dijeljenje";
    this.mmu = "Drugo dijeljenje";
    this.flf = "Treće dijeljenje";
    this.uqk = "POSTAVKE AUTOMATSKE IGRE";
    this.upu = "Ukupno igara:";
    this.mxo = "Zaustavljanje automatske igre";
    this.hmg = "Kredit manji od:";
    this.sur = "Kredit veći od:";
    this.vyv = "Dobitak veći od:";
    this.ftl = "Automatska igra će se zaustaviti na početku besplatne igre.";
    this.dxj = "Podijeli na Facebooku";
    this.zsn = "ZA VIŠE INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.tos = "Reality Check";
    this.etq = "Zatražili ste Reality Check.";
    this.iwo = "Pritisni POVIJEST za pregled prijašnjih igara.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "TEORETSKI POVRATAK NA IGRAČA ZA OVU IGRU JE XY."
}
ygk.prototype = new ast;

function ivr() {
    this.phd = "MINIMA PUNTATA È";
    this.reu = "PUNTATA MASSIMA";
    this.mkz = "MIN. PUNTATA";
    this.wcf = "MASS. PUNTATA";
    this.nnh = "PUNTATA";
    this.start = "START";
    this.pcs = "AIUTO";
    this.gqi = "TABELLA VINCITE";
    this.inx = "MENU";
    this.qrt = "SCELTA|GIOCHI";
    this.qlw = "STOP";
    this.zlh = "CREDITO";
    this.mbt = "FINE PARTITA";
    this.udx = "VINCITORE!";
    this.xyq = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.npl = "ULTIMA VINCITA";
    this.vit = "INCASSA";
    this.qrp = "INCASSA";
    this.eil = "GAMBLE";
    this.enf = "AUTO|START";
    this.uga = "METÀ";
    this.coi = "FINE";
    this.djr = "PREMI START";
    this.xgs = "SCEGLI PUNTATA";
    this.ikd = "METÀ";
    this.ret = "RITORNO|AL GIOCO";
    this.zmm = "Totale vincita";
    this.ptd = "Attenzione";
    this.bcf = "TOTALE";
    this.sza = "ATTENDERE PREGO ...";
    this.zuh = "Scelta Giochi";
    this.pfk = "VELOCITÀ";
    this.pml = "In caso di malfunzionamento nessuna responsabilità assunta.";
    this.diw = "C O N T I N U A";
    this.dbj = "AUTOSTART";
    this.tvs = "TABELLA VINCITE";
    this.pdj = "GAMBLE";
    this.left = "SINISTRA";
    this.plx = "DESTRA";
    this.ok = "OK";
    this.xyf = "CANCELLA";
    this.zyl = "Gamble";
    this.wcg = "Metà";
    this.swc = "REGOLAMENTO";
    this.fcl = "REGOLAMENTO";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.qam = "PREMI UN TASTO PER CONTINUARE";
    this.vau = "CREDITO INSUFFICIENTE!";
    this.rzm = "vince";
    this.qkp = "V A L U E";
    this.of = "DI";
    this.qsi = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.bok = "STA CARICANDO ...";
    this.slu = "STA CARICANDO LA CRONACA ...";
    this.esv = "Errore di comunicazione";
    this.pbg = "Hai raggiunto uno dei limiti!";
    this.pjs = "Hai raggiunto il numero massimo di free games!";
    this.gzf = "La partita sta terminando";
    this.gkw = "La partita sta ripartendo";
    this.mgq = "VINTO";
    this.error = "ERRORE";
    this.tfz = "FREEPLAY";
    this.kpt = "AUTO";
    this.dtf = "GAME ID";
    this.vgv = "Durata del gioco";
    this.cvl = "Ultime partite";
    this.tnk = "";
    this.xng = "DEPOSITO";
    this.audio = "AUDIO";
    this.zqx = "MUSICA";
    this.lkz = "SCHERMO INTERO";
    this.kmc = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.qhv = "Non mostrare di nuovo";
    this.eqf = "Suoni non caricabili!";
    this.vbt = "Mancano risorse!";
    this.npe = "Giocare senza suoni?";
    this.mgu = "SETTAGGI";
    this.vgt = "Prego girare l'apparecchio!";
    this.uxc = "INFO";
    this.lyp = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.dit = "La partita è ottimizzata per Google Chrome.";
    this.unc = "Prego utilizzare la versione attuale di";
    this.mur = "Purtroppo il presente browser non viene supportato interamente";
    this.jfx = "Impossibile avviare questa partita nel modo freeplay!";
    this.qjg = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.zmu = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.wbt = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.jfp = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.qdg = "GAMBLE PER L'OPPORTUNITÀ DI AUMENTARE LA VINCITA";
    this.qdn = "Statistica";
    this.hac = "Totale partite";
    this.npq = "Totale puntata";
    this.hsf = "Totale vincita";
    this.bji = "Totale durata del gioco";
    this.kge = "Ho letto il messaggio";
    this.jfi = "TERMINARE|LA PARTITA";
    this.odx = "Cronaca";
    this.zlo = "Nessuna partita giocata.";
    this.state = "STATO";
    this.nsy = "Partita principale";
    this.ddr = "Raccolto autom.";
    this.ksv = "Raccolto";
    this.twa = "Bonusspin";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "Primo deal";
    this.mmu = "Secondo deal";
    this.flf = "Terzo deal";
    this.uqk = "SETTAGGI AUTOSTART";
    this.upu = "Numero di partite:";
    this.mxo = "Fermare l'autostart";
    this.hmg = "Credito più basso di:";
    this.sur = "Credito più alto di:";
    this.vyv = "Vincita più alta di:";
    this.ftl = "L'autostart si ferma all'inizio del bonus.";
    this.dxj = "Dividi su facebook";
    this.zsn = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.tos = "Reality Check";
    this.etq = "Avete richiesto un Reality Check.";
    this.iwo = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.gzy = "Game break";
    this.ejv = "Game limits";
    this.mbh = "Self test";
    this.gab = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
ivr.prototype = new ast;

function bvz() {
    this.phd = "MIN. INSATSEN ÄR";
    this.reu = "MAXIMAL INSATS";
    this.mkz = "MIN. INSATS";
    this.wcf = "MAX. INSATS";
    this.nnh = "INSATS";
    this.start = "STARTA";
    this.pcs = "HJÄLP";
    this.gqi = "VINSTTABELL";
    this.inx = "MENY";
    this.qrt = "FLER|SPEL";
    this.qlw = "STOPP";
    this.zlh = "KREDIT";
    this.mbt = "SPELET ÄR SLUT";
    this.udx = "VINNARE!";
    this.xyq = "LYCKA TILL!";
    this.win = "VINN";
    this.npl = "SENASTE VINSTEN";
    this.vit = "INKASSERA";
    this.qrp = "INKASSERA";
    this.eil = "DUBBLERA";
    this.enf = "AUTO|START";
    this.uga = "HÄLFTEN|1/2";
    this.coi = "AVSLUTA";
    this.djr = "TRYCK PÅ START";
    this.xgs = "VÄLJ INSATS";
    this.ikd = "HÄLFTEN";
    this.ret = "ÅTERGÅ|TILL SPELET";
    this.zmm = "Total Vinst";
    this.ptd = "Varning";
    this.bcf = "TOTALT";
    this.sza = "VAR VÄNLIG VÄNTA ...";
    this.zuh = "Fler spel";
    this.pfk = "TEMPO";
    this.pml = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.diw = "F O R T S Ä T T";
    this.dbj = "AUTOSTART";
    this.tvs = "VINSTTABELL";
    this.pdj = "DUBBLERA";
    this.left = "VÄNSTER";
    this.plx = "HÖGER";
    this.ok = "OK";
    this.xyf = "AVBRYT";
    this.zyl = "Dubblering";
    this.wcg = "Hälften";
    this.swc = "SPELREGLER";
    this.fcl = "SPELREGLER";
    this.wpp = "Bonus!";
    this.tbd = "BONUS";
    this.qam = "TRYCK PÅ EN KNAPP FÖR ATT FORTSÄTTA";
    this.vau = "FÖR LÅGT SALDO!";
    this.rzm = "vinster";
    this.qkp = "V A L U E";
    this.of = "AV";
    this.qsi = "PEKA PÅ SKÄRMEN FÖR ATT FORTSÄTTA";
    this.bok = "LÄSER ...";
    this.slu = "LÄSER IN HISTORIKEN ...";
    this.esv = "Kommunikationsfel";
    this.pbg = "Du har nått en av gränserna!";
    this.pjs = "Du har nått det maximala antalet gratisspel!";
    this.gzf = "Spelet avslutas";
    this.gkw = "Spelet startas om";
    this.mgq = "VUNNA";
    this.error = "FEL";
    this.tfz = "GRATISSPEL";
    this.kpt = "AUTO";
    this.dtf = "SPEL-ID";
    this.vgv = "SPELTID";
    this.cvl = "senaste";
    this.tnk = "spelen";
    this.xng = "INSÄTTNING";
    this.audio = "LJUD";
    this.zqx = "MUSIK";
    this.lkz = "HELSKÄRM";
    this.kmc = "HELSKÄRM";
    this.language = "SPRÅK";
    this.qhv = "Visa inte igen";
    this.eqf = "Ljud kan inte laddas!";
    this.vbt = "Resurser saknas!";
    this.npe = "Spela utan ljud?";
    this.mgu = "INSTÄLLN.";
    this.vgt = "Vänd din enhet!";
    this.uxc = "INFO";
    this.lyp = "Avaktivera PRIVATLÄGET i din webbläsare för att spela spelet.";
    this.dit = "Det här spelet är optimerat för Google Chrome.";
    this.unc = "Använd den senaste versionen av";
    this.mur = "Tyvärr stöds inte den här webbläsaren fullt ut.";
    this.jfx = "Det här spelet kan inte startas i gratisspelsläget!";
    this.qjg = "Håll din enhet i porträttläge för att spela som på en riktig spelautomat!";
    this.zmu = "Anpassa spelgränssnittet efter dina behov!";
    this.wbt = "VÄLJ RÄTT FÄRG FÖR ATT DUBBLA VINSTEN";
    this.jfp = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.qdg = "SPELA FÖR ATT FÅ CHANSEN ATT ÖKA VINSTEN";
    this.qdn = "Statistik";
    this.hac = "Totalt antal spel";
    this.npq = "Totalinsats";
    this.hsf = "Totalvinst";
    this.bji = "Total speltid";
    this.kge = "Jag har läst detta meddelande";
    this.jfi = "AVSLUTA|SPELET";
    this.odx = "Historik";
    this.zlo = "Inga spel har spelats.";
    this.state = "STATUS";
    this.nsy = "Huvudspel";
    this.ddr = "Auto. Inkasserat";
    this.ksv = "Inkasserat";
    this.twa = "Bonusspinn";
    this.kup = "Respin";
    this.pwg = "Bonus";
    this.vfs = "Första given";
    this.mmu = "Andra given";
    this.flf = "Tredje given";
    this.uqk = "AUTOSTARTINSTÄLLNINGAR";
    this.upu = "Antal spelrundor:";
    this.mxo = "Stoppa autospel";
    this.hmg = "Saldo lägre än:";
    this.sur = "Saldo högre än:";
    this.vyv = "Vinst högre än:";
    this.ftl = "Autospelen kommer att stoppas då bonusen startar.";
    this.dxj = "Dela på Facebook";
    this.zsn = "SE SPELREGLERNA FÖR MER INFORMATION.";
    this.tos = "Reality Check";
    this.etq = "Du har begärt att få en statusuppdatering.";
    this.iwo = "Tryck på HISTORIK för att visa din spelhistorik.";
    this.gzy = "Spelpaus";
    this.ejv = "Spelgränser";
    this.mbh = "Självtest";
    this.gab = "DEN TEORETISKA ÅTERBETALNINGEN TILL SPELAREN FÖR DET HÄR SPELET ÄR XY."
}
bvz.prototype = new ast;

function jdi() {
    this.vfh = "LINES";
    this.fdd = "LINE";
    this.agy = "BET / LINE";
    this.lym = "WAYS";
    this.vju = "WAY";
    this.tmf = "BONUSSPINS LEFT";
    this.kmx = "TOTAL BONUSSPINS";
    this.aiy = "BONUSSPINS PLAYED";
    this.vgh = "BONUSSPINS LEFT";
    this.bog = "CONGRATULATIONS YOU WIN!";
    this.vel = "BONUS WIN";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SYMBOLS";
    this.rxj = "SYMBOL";
    this.dgk = "You win extra BONUSSPINS!";
    this.phy = "Wins pay only from left to right!";
    this.vbw = "BONUS ENTRY WIN:";
    this.jwb = "BONUSSPINS";
    this.uqu = "BONUSSPINS are played with the same bet and number of lines as the initiating game.";
    this.pcy = "Line Wins: Only the highest line win is paid on each line played. Line wins are a multiple of the line bet. Line wins from different lines are added.";
    this.fdp = "Scatter Wins: Scatter wins are a multiple of the total bet. Wins from Scatter symbols are added to the line wins.";
    this.eeo = "BONUS HELP";
    this.hhl = "SYMBOL HELP";
    this.arv = "WINLINE HELP";
    this.xay = "WINWAY HELP";
    this.rks = "You win an extra 15 BONUSSPINS!";
    this.kxn = "Play the Bonus until you have no BONUSSPINS left. BONUSSPINS can be re-triggered during the Bonus.";
    this.xwz = "GAMBLE AMOUNT";
    this.ahv = "RED/BLACK GAMBLE TO WIN";
    this.hhd = "SUIT GAMBLE TO WIN";
    this.stq = "15 BONUSSPINS are won with 3, 4 or 5 SCATTERED Symbols on any position! All BONUSSPIN wins are multiplied by 3.";
    this.rjx = "Finish placing your bets!";
    this.ifj = "Place your bets please!";
    this.gdk = "No more bets!";
    this.bxh = "Good Luck!";
    this.szk = "Better luck next time!";
    this.ueh = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.rdh = "Bets accepted!";
    this.jae = "Bets not accepted!";
    this.kyk = "Game in progress, please wait!";
    this.uzc = "WIN UP TO";
    this.xqn = "WIN HISTORY";
    this.eka = "BONUS END";
    this.kbe = "Bonus Multiplier";
    this.eye = "Freespins!";
    this.iih = "FREESPINS PLAYED";
    this.eul = "FREESPIN WIN";
    this.hcf = "CONGRATULATION!";
    this.nvw = "Congratulation, you get";
    this.fcq = "You have";
    this.hmp = "freespins remaining!"
}
jdi.prototype = new lbu;

function ksm() {
    this.vfh = "ЛИНИИ";
    this.fdd = "ЛИНИЯ";
    this.agy = "СТ. / ЛИНИЮ";
    this.tmf = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.kmx = "Бонусные вращения";
    this.aiy = "СЫГРАННО ВРАЩЕНИЙ";
    this.vgh = "OСТАЛОСЬ ПРИЗОВЫХ ВРАЩЕНИЙ";
    this.bog = "ПОЗДРАВЛЯЕМ! ВЫ ВЫИГРАЛИ!";
    this.vel = "БОНУС ВЫИГРЫШ";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "СИМВОЛЫ";
    this.rxj = "СИМВОЛ";
    this.jwb = "призовых вращений";
    this.phy = "Все выигрыши считаются только слевa направо.";
    this.dgk = "Вы выиграли дополнительные бонусные вращения!";
    this.uqu = "Ставка и количество линий в игре бонусные вращения те же самые, что и в инициировавшей игре.";
    this.pcy = "Линейные выигрыши: Засчитывается только максимальный выигрыш на каждой линии. Размер линейных выигрышей – многократная сумма ставки. Линейные выигрыши на разных линиях суммируются.";
    this.fdp = "Выигрыши Scatter Сумма выигрышей Scatter – многократная сумма общей ставки. Выигрыши с символами Scatter прибавляются к линейным выигрышам.";
    this.lym = "ПУТИ";
    this.vju = "ПУТЬ";
    this.eeo = "БОНУС – ПОМОЩЬ";
    this.hhl = "СИМВОЛ ПОМОЩЬ";
    this.arv = "ЛИНИИ ВЫИГРЫША ПОМОЩЬ";
    this.xay = "ПОМОЩЬ К ПУТИ К ВЫИГРЫШУ";
    this.ueh = "ВЫБЕРИТЕ ПРАВИЛЬНУЮ МАСТЬ, ЧТОБЫ УВЕЛИЧИТЬ ВЫИГРЫШ В 4 РАЗА";
    this.xwz = "СУММА РИСКА";
    this.ahv = "РИСКНУТЬ КРАСНАЯ/ЧЕРНАЯ";
    this.hhd = "ВЫБОР МАСТИ";
    this.uzc = "ВЫИГРАЙ ДО";
    this.xqn = "ХРОНИКА ВЫИГРЫШЕЙ";
    this.eka = "КОНЕЦ БОНУСА";
    this.eye = "бесплатных игр!";
    this.iih = "СЫГРАННЫЕ БЕСПЛАТНЫЕ ИГРЫ";
    this.eul = "ВЫИГРЫШ БЕСПЛАТНОЙ ИГРЫ";
    this.hcf = "ПОЗДРАВЛЯЕМ!";
    this.nvw = "Поздравляем, вы получили";
    this.fcq = "У вас еще";
    this.hmp = "бесплатных игр!";
    this.rdh = "Ставки признаны!";
    this.jae = "Ставки не признаны!";
    this.kyk = "Игра в процессе, пожалуйста, подождите...";
    this.rjx = "Игра сейчас начнется!";
    this.ifj = "Сделайте ставку, пожалуйста!";
    this.gdk = "Ставок больше нет!";
    this.bxh = "Удачи!";
    this.szk = "Желаем удачи в следующий раз!";
    this.rks = "Вы выиграли следующие 15 призовых вращений барабанов!";
    this.kxn = "Бонус призовых вращений заканчивается когда призовых вращений больше нет. Дополнительные призовые вращения могут быть добавлены к Бонусу призовых вращений.";
    this.stq = "Вы получите 15 призовых вращений барабанов при выпадении 3, 4 или 5 символов СКАТТЕР на любой позиции. Все выигрыши умножаются на 3."
}
ksm.prototype = new vwy;

function zns() {
    this.vfh = "LÍNEAS";
    this.fdd = "LÍNEA";
    this.agy = "APUE. / LÍNEA";
    this.tmf = "BONUSSPINS RESTANTES";
    this.kmx = "TOTAL DE BONUSSPINS";
    this.aiy = "BONUSSPINS JUGADOS";
    this.vgh = "BONUSSPINS RESTANTES";
    this.bog = "ENHORABUENA, HAS GANADO!";
    this.vel = "PREMIO BONUS";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SIMBOLOS";
    this.rxj = "SIMBOLO";
    this.kbe = "Multiplicador de bonus";
    this.vbw = "PREMIO ENTRADA BONUS:";
    this.jwb = "JUEGOS LIBRES";
    this.phy = "Premios de la izquierda a la derecha!";
    this.dgk = "Ha ganado BONUSSPINS extra.";
    this.uqu = "Los BONUSSPINS se juegan con la misma apuesta y el número de lineas que el juego inicial.";
    this.pcy = "Premios de línea: Sólo se paga el mayor premio de línea por cada línea jugada. Los premios de línea son un múltiplo de la apuesta de la línea. Se suman los premios de línea de las diferentes líneas.";
    this.fdp = "Premios Scatter: Los premios Scatter son múltiplos de la apuesta total. Los premios de los símbolos scatter se suman a los premios de la línea.";
    this.lym = "CAMINOS";
    this.vju = "CAMINO";
    this.eeo = "AYUDA DE BONUS";
    this.hhl = "SÍMBOLO AYUDA";
    this.arv = "LÍNEA GANADORA AYUDA";
    this.xay = "AYUDA FORMAS DE PREMIO";
    this.ueh = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.xwz = "PREMIO";
    this.ahv = "ROJO/NEGRO PREMIO";
    this.hhd = "PREMIO DE SIMBOLO";
    this.uzc = "GANANCIAS HASTA";
    this.xqn = "HISTORIAL DE GANANCIAS";
    this.eka = "FIN DE BONUS";
    this.eye = "Giros gratis!";
    this.iih = "GIROS GRATIS JUGADOS";
    this.eul = "PREMIO GIRO GRATIS";
    this.hcf = "¡ENHORABUENA!";
    this.nvw = "¡Enhorabuena, ha conseguido";
    this.fcq = "¡Le quedan";
    this.hmp = "giros gratis!";
    this.rdh = "Aceptar apuestas!";
    this.jae = "Apuestas rechazadas!";
    this.kyk = "El juego no ha concluido, por favor espere!";
    this.rjx = "El juega va a comenzar!";
    this.ifj = "Haga juego!";
    this.gdk = "No más apuestas!";
    this.bxh = "¡Mucha suerte!";
    this.szk = "¡Mejor suerte la próxima vez!";
    this.rks = "Premio de 15 Freespins addicionales!";
    this.kxn = "El bono concluye cuando todos los BONUSSPINS se hayan jugado. En bono pueden ganarse BONUSSPINS adicionales.";
    this.stq = "Se gana 15 Freespins con 3, 4 o 5 simbolos de SCATTER en alguna posicion! Se triplican todos los premios de freespins."
}
zns.prototype = new djj;

function lxb() {
    this.vfh = "LINIEN";
    this.fdd = "LINIE";
    this.agy = "EINS. / LINIE";
    this.tmf = "VERBLEIBENDE BONUSSPINS";
    this.kmx = "TOTAL BONUSSPINS";
    this.aiy = "GESPIELTE BONUSSPINS";
    this.vgh = "VERBLEIBENDE BONUSSPINS";
    this.bog = "GRATULIERE GEWONNEN!";
    this.vel = "BONUS GEWINN";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SYMBOLE";
    this.rxj = "SYMBOL";
    this.kbe = "Bonus Multiplikator";
    this.vbw = "BONUS START GEWINN:";
    this.jwb = "BONUSSPINS";
    this.phy = "Gewinne werden nur von links nach rechts gewertet!";
    this.dgk = "Zusätzliche BONUSSPINS gewonnen!";
    this.uqu = "Die BONUSSPINS werden mit demselben Einsatz und Linienanzahl wie das auslösende Spiel gespielt.";
    this.pcy = "Liniengewinne: Nur der höchste Liniengewinn je gespielter Linie zählt. Liniengewinne sind ein Vielfaches des Linieneinsatzes. Die Liniengewinne von verschiedenen Linien werden addiert.";
    this.fdp = "Scattergewinne: Scatter-Gewinne sind ein Vielfaches des Gesamteinsatzes. Gewinne aus Scatter-Symbolen werden den Liniengewinnen hinzugezählt.";
    this.lym = "WEGE";
    this.vju = "WEG";
    this.eeo = "BONUS HILFE";
    this.hhl = "SYMBOL HILFE";
    this.arv = "GEWINNLINIEN HILFE";
    this.xay = "GEWINNWEGE HILFE";
    this.ueh = "WÄHLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.xwz = "RISIKO";
    this.ahv = "ROT/SCHWARZ CHANCE";
    this.hhd = "SYMBOL CHANCE";
    this.uzc = "GEWINNE BIS ZU";
    this.xqn = "GEWINNHISTORIE";
    this.eka = "BONUS ENDE";
    this.eye = "Freespins!";
    this.iih = "GESPIELTE FREESPINS";
    this.eul = "FREESPIN GEWINN";
    this.hcf = "GRATULIERE!";
    this.nvw = "Gratulation, Sie bekommen";
    this.fcq = "Sie haben noch";
    this.hmp = "Freespins übrig!";
    this.rdh = "Einsätze akzeptiert!";
    this.jae = "Einsätze nicht akzeptiert!";
    this.kyk = "Spiel läuft, bitte warten!";
    this.rjx = "Das Spiel beginnt gleich!";
    this.ifj = "Ihre Einsätze bitte!";
    this.gdk = "Keine weiteren Einsätze!";
    this.bxh = "Viel Glück!";
    this.szk = "Mehr Glück beim nächsten Mal!";
    this.rks = "Weitere 15 BONUSSPINS gewonnen!";
    this.kxn = "Der Bonus endet, wenn alle BONUSSPINS abgespielt worden sind. Zusätzliche BONUSSPINS können im Bonus gewonnen werden.";
    this.stq = "15 BONUSSPINS werden durch 3, 4 oder 5 SCATTER Symbole auf jeder Position gewonnen! Alle BONUSSPIN Gewinne x 3."
}
lxb.prototype = new vvp;

function lin() {
    this.vfh = "ÇIZGILER";
    this.fdd = "ÇİZGİ";
    this.agy = "BANKO / ÇIZGI";
    this.tmf = "KALAN PRIM OYUNLARIR";
    this.kmx = "TOPLAM PRİM SPİNLERİ";
    this.aiy = "OYNANAN PRIM OYUNLAR";
    this.vgh = "KALAN PRIM OYUNLARIR";
    this.bog = "TEBRİKLER KAZANDINIZ!";
    this.vel = "PRIM KAZANCI";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SEMBOLLER";
    this.rxj = "SEMBOL";
    this.kbe = "Prim çarpanı";
    this.vbw = "PRİM GİRİŞ KAZANCI:";
    this.jwb = "BEDAVA OYUNLAR";
    this.phy = "Kazançlar tek soldan sağa değerlendirilir!";
    this.dgk = "Ek PRİM SPİN’LERİ kazandınız!";
    this.uqu = "PRİM SPİNLER başlayacak olan oyunda da aynı banko ve çizgi sayısı ile oynanacaktır.";
    this.pcy = "Çizgi kazançları: Oynanan her çizginin sadece en yüksek çizgi kazancı sayılmaktadır. Çizgi kazançları çizgi bankosunun kat sayısından oluşmaktadır. Çeşitli çizgilerin çizgi kazançları birbirleri ile toplanmaktadır.";
    this.fdp = "Scatter kazançları: Scatter-kazançları toplam bankonun kat sayısından oluşmaktadır. Scatter-Sembollerinden elde edilen kazançlar çizgi kazançlarına eklenmektedir.";
    this.lym = "YOLLAR";
    this.vju = "YOL";
    this.eeo = "PRİM YARDIMI";
    this.hhl = "SEMBOL YARDIMI";
    this.arv = "KAZANÇ ÇIZGISI YARDIMI";
    this.xay = "KAZANÇ YOLLARI YARDIM";
    this.ueh = "DOĞRU KART RENGİNİ SEÇEREK KAZANCINI DÖRDE KATLARSIN.";
    this.xwz = "RİSK";
    this.ahv = "KIRMIZI/SİYAH ŞANSI";
    this.hhd = "SEMBOL ŞANSI";
    this.uzc = "KAZANANILMASI MÜMKÜN OLAN";
    this.xqn = "KAZANÇ GEÇMİŞİ";
    this.eka = "PRİM BİTTİ";
    this.eye = "adet bedava Spin kazandınız!";
    this.iih = "OYNANILAN BEDAVA SPİN'ler";
    this.eul = "BEDAVA SPİN KAZANCI";
    this.hcf = "TEBRİKLER!";
    this.nvw = "Tebrikler,";
    this.fcq = "Daha";
    this.hmp = "adet bedava SPİN'iniz bulunuyor!";
    this.bxh = "Bol şans!";
    this.rdh = "Bahisler kabul edildi!";
    this.jae = "Bahisler kabul edilmedi!";
    this.kyk = "Oyun oynanmakta, lütfen bekleyin!";
    this.rjx = "Oyun başlamak üzere!";
    this.ifj = "Bankolarınız lütfen!";
    this.gdk = "Daha fazla banko mümkün değil!";
    this.szk = "Bir dahaki sefer daha şanslı olursun!";
    this.rks = "15 bedava oyun daha kazandın!";
    this.kxn = "Bedava oyun primleri tüm bedava oyunlar oynandığı zaman biter. Bedava oyun primlerinde ek bedava oyunlar kazanılabilir.";
    this.stq = "Her pozisyondaki 3, 4 veya 5 SCATTERED sembolleri ile 15 tane bedava oyun kazanılır! Tüm bedava oyun kazançları x 3."
}
lin.prototype = new dsn;

function ryp() {
    this.vfh = "LINEK";
    this.fdd = "LINKA";
    this.agy = "SÁZKA / LINKA";
    this.tmf = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.kmx = "TOTÁLNÍ BONUSSPINS";
    this.aiy = "ODEHRANÉ BONUS HRY";
    this.vgh = "ZBÝVAJÍCÍ VOLNÉ HRY";
    this.bog = "GRATULUJEME VYHRÁL JSTE!";
    this.vel = "BONUS VÝHRA";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SYMBOLY";
    this.rxj = "SYMBOL";
    this.kbe = "Násobic bonusu";
    this.vbw = "BONUS STARTUJE VÝHRU:";
    this.jwb = "BONUSSPINS";
    this.phy = "Výhry platí pouze z leva do prava!";
    this.dgk = "Vyhrál jste extra BONUSOVOU hru!";
    this.uqu = "BONUSSPINS sa hrají se stejnou  sázkou a počtem línií jako hra, při které se spustily.";
    this.pcy = "Výhry na línkách: Započítává se jen nejvyšší výhra na lince. Výhry na linkách jsou násobky linkových sázek. Výhry na různých línkách se sčítají.";
    this.fdp = "Scatter výhry: Scatter výhry násobí celkovou sázku. Výhry ze Scatter symbolů se připočítávají k výhrám na línkách.";
    this.lym = "ZPŮSOBY";
    this.vju = "ZPŮSOB";
    this.eeo = "BONUS NÁPOVĚDA";
    this.hhl = "SYMBOL NÁPOVĚDA";
    this.arv = "VÝHERNÉ LINIE NÁPOVĚDA";
    this.xay = "WINWAY HELP";
    this.ueh = "VYBRAT SPRÁVNOU BARVU KARTY KE ZČTYŘNÁSOBENÍ VÝHRY";
    this.xwz = "VÝHRA";
    this.ahv = "CERVENÁ/CERNÁ VÝHRA";
    this.hhd = "SPRÁVNÁ BARVA KARTY VYHRÁVÁ";
    this.rdh = "Sázky byly akceptovány!";
    this.jae = "Sázky nebyly akceptovány!";
    this.uzc = "VÝHRA AŽ";
    this.xqn = "HISTORIE VÝHER";
    this.eka = "KONEC BONUSU";
    this.eye = "Freespins!";
    this.iih = "FREESPINS PLAYED";
    this.eul = "FREESPIN WIN";
    this.hcf = "GRATULUJEME!";
    this.nvw = "Congratulation, you get";
    this.fcq = "You have";
    this.hmp = "freespins remaining!";
    this.kyk = "Hra probíhá, počkejte prosím!";
    this.rjx = "Hra Se Hned Spustí!";
    this.ifj = "Vaše sázky prosím!";
    this.gdk = "Žádné další sázky.";
    this.bxh = "Hodne štestí!";
    this.szk = "Příště více štěstí!";
    this.rks = "Vyhráváte dalších 15 volných her!";
    this.kxn = "Bonus je ukoncen po odehrání všech bonusových her. Bonusové hry mohou být získány i behem bonusu.";
    this.stq = "3, 4 nebo 5 SCATTER symbolu na libovolné pozici vyhrává 15 volných her, výhry ve volné hre jsou násobené 3x."
}
ryp.prototype = new eqx;

function iie() {
    this.vfh = "LIINID";
    this.fdd = "LIIN";
    this.agy = "PAN. / LIINIL";
    this.tmf = "TASUTA KEERUTUSI JÄÄNUD";
    this.kmx = "BOONUSKEERUTUSI KOKKU";
    this.aiy = "MÄNGE MÄNGITUD";
    this.vgh = "TASUTA KEERUTUSI JÄÄNUD";
    this.bog = "PALJU ÕNNE, SA VÕITSID!";
    this.vel = "BOONUSVÕIT";
    this.jwb = "BOONUSKEERUTUST";
    this.xwz = "RISKIMÄNGU SUMMA";
    this.ahv = "PUNANE/MUST RISKIMÄNG";
    this.hhd = "RISKIMÄNG SÜMBOLIGA";
    this.ueh = "VÕIDU NELJAKORDISTAMISEKS VALI ÕIGE MAST";
    this.rdh = "Panused aktsepteeritud!";
    this.jae = "Panuseid ei aktsepteeritud!";
    this.uzc = "VÕIDA KUNI";
    this.xqn = "VÕITUDE AJALUGU";
    this.eka = "BOONUSE LÕPP";
    this.eye = "tasuta keerutust!";
    this.iih = "TASUTA KEERUTUSI MÄNGITUD";
    this.eul = "TASUTA KEERUTUSE VÕIT";
    this.hcf = "ÕNNITLEME!";
    this.nvw = "Õnnitleme, said";
    this.fcq = "Sul on jäänud veel";
    this.hmp = "tasuta keerutust!";
    this.kyk = "Mäng algab, palun oodake...";
    this.rjx = "Lõpeta panuste tegemine!";
    this.ifj = "Asetage palun panused!";
    this.gdk = "Panuste tegemine lõppenud";
    this.bxh = "Soovime edu!";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SÜMBOLID";
    this.rxj = "SÜMBOL";
    this.vbw = "BOONUSVÕIT:";
    this.phy = "Võite arvestatakse ainult vasakult paremale!";
    this.dgk = "Te võitsite lisa BOONUSKEERUTUSI!";
    this.uqu = "BOONUSKEERUTUSED mängitakse sama panuse ja liinide arvuga, nagu boonuse käivitanud mängus.";
    this.lym = "VÕIMALUSED";
    this.vju = "VÕIMALUSE";
    this.rks = "Te võitsite lisa 15 BOONUSKEERUTUST!";
    this.kxn = "Mängige kõik tasuta keerutused lõpuni. Tasuta keerutusi võib võita ka tasuta keerutuste boonuse ajal.";
    this.eeo = "BOONUSE SPIKKER";
    this.hhl = "SÜMBOLI SPIKKER";
    this.arv = "LIINIDE SPIKKER";
    this.xay = "VÕIDUVÕIMALUSE SPIKKER";
    this.pcy = "Liini võidud: Igal mänguliinil makstakse ainult suurimad liinivõidud. Liini võidud korrutatakse liini panusega. Erinevate liinide võidud liidetakse kokku.";
    this.fdp = "Scatteri võidud: Scatteri võidud korrutatakse kogupanusega. Scatteri sümboli võidud liidetakse liini võitudele.";
    this.kbe = "Boonuse mitmekordistaja";
    this.szk = "Rohkem õnne järgmisel korral!";
    this.stq = "3, 4 või 5 TÄHE sümbolit juhuslikel kohtadel annab 15 BOONUSKEERUTUST! Kõik BOONUSKEERUTUSE võidud korrutatakse 3-ga."
}
iie.prototype = new whb;

function urh() {
    this.vfh = "ΓΡΑΜΜEΣ";
    this.fdd = "ΓΡΑΜΜΗ";
    this.agy = "ΣΤΟIΧΗΜΑ / Γ.";
    this.tmf = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.kmx = "ΤΕΛΕΙΩΣ BONUSSPINS";
    this.aiy = "ΠΑΙΓΜEΝΑ BONUSSPINS";
    this.vgh = "ΕΝΑΠΟΜΕIΝΑΝΤΑ BONUSSPINS";
    this.bog = "ΣΥΓΧΑΡΗΤΗΡΙΑ ΚΕΡΔΙΣΑΤΕ!";
    this.vel = "ΜΠOΝΟΥΣ ΚEΡΔΟΣ";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "ΣYΜΒΟΛΑ";
    this.rxj = "ΣΎΜΒΟΛΟ";
    this.kbe = "Πολλαπλασιαστής μπόνους";
    this.vbw = "BONUS START ΚΕΡΔIΖΕΙ:";
    this.jwb = "BONUSSPINS";
    this.phy = "Τα κέρδη μετρούνται από αριστερά προς τα δεξιά!";
    this.dgk = "Κερδίσατε συμπληρωματικούς BONUSSPINS!";
    this.uqu = "Τα γυρίσματα μπόνους, τα BONUSSPINS, παίζονται με το ίδιο ποντάρισμα και τον ίδιο αριθμό σειρών, όπως το αρχικό παιχνίδι.";
    this.pcy = "Κέρδη γραμμών: Μόνο το μεγαλύτερο κέρδος ανά παιγμένη γραμμή προσμετράται. Τα κέρδη των γραμμών αποτελούν πολλαπλάσιο του πονταρίσματος στη γραμμή. Τα κέρδη γραμμών που αφορούν σε διαφορετικές γραμμές προστίθενται.";
    this.fdp = "Κέρδη Scatter: Τα κέρδη Scatter αποτελούν πολλαπλάσιο του συνολικού πονταρίσματος. Τα κέρδη από σύμβολα Scatter προσμετρώνται στα κέρδη των γραμμών.";
    this.lym = "ΔΙΑΔΡΟΜΕΣ";
    this.vju = "ΔΙΑΔΡΟΜΉ";
    this.eeo = "BONUS ΒΟΉΘΕΙΑ";
    this.hhl = "ΒΟHΘΕΙΑ ΣΥΜΒOΛΩΝ";
    this.arv = "ΒΟHΘΕΙΑ ΣΕΙΡΩΝ ΚEΡΔΟΥΣ";
    this.xay = "WINWAY ΒΟΗΘΕΙΑ";
    this.ueh = "ΕΠΙΛΕΞΤΕ ΤΟ ΣΩΣΤΟ ΧΡΩΜΑ ΦΥΛΛΟΥ ΓΙΑ ΝΑ ΤΕΤΡΑΠΛΑΣΙΑΣΕΤΕ ΤΟ ΚΕΡΔΟΣ ΣΑΣ";
    this.xwz = "ΠΟΣΟ ΡΙΣΚΟΥ";
    this.ahv = "ΜΑΥΡΟ/ΚΟΚΚΙΝΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.hhd = "ΣΥΜΒΟΛΟ ΚΕΡΔΟΣ ΡΙΣΚΟΥ";
    this.uzc = "ΚΕΡΔΗ ΕΩΣ";
    this.xqn = "ΙΣΤΟΡΙΚΟ ΚΕΡΔΩΝ";
    this.eka = "ΛΗΞΗ ΜΠΟΝΟΥΣ";
    this.eye = "Freespins!";
    this.iih = "FREESPINS ΠΟΥ ΚΑΤΑΝΑΛΏΘΗΚΑΝ";
    this.eul = "FREESPIN ΚΕΡΔΟΣ";
    this.hcf = "ΣΥΓΧΑΡΗΤΗΡΙΑ!";
    this.nvw = "Συγχαρητήρια, κερδίσατε";
    this.fcq = "Σας απομένουν";
    this.hmp = "Freespins!";
    this.rdh = "Γίνονται αποδεκτά πονταρίσματα!";
    this.jae = "Πονταρίσματα δε γίνονται αποδεκτά!";
    this.kyk = "Ενεργό παιχνίδι, παρακαλώ περιμένετε!";
    this.rjx = "Το παιχνίδι ξεκινά σε λίγο!";
    this.ifj = "Το ποντάρισμα σας, παρακαλώ!";
    this.gdk = "Ποντάρισμα τέλος!";
    this.bxh = "Καλή τύχη!";
    this.szk = "Καλύτερη τύχη την επόμενη φορά!";
    this.rks = "Κερδίσατε 15 συμπληρωματικούς BONUSSPINS!";
    this.kxn = "Το Bonus τελειώνει, όταν όλα τα BONUSSPINS έχουν παιχθεί. Συμπληρωματικά BONUSSPINS δύνανται να κερδισθούν στο Bonus.";
    this.stq = "15 BONUSSPINS κερδίζονται με 3, 4 ή 5 σύμβολα ΑΣΤΡΟΥ σε κάθε θέση! Όλα τα BONUSSPINS αποφέρουν τριπλασιασμό κερδών."
}
urh.prototype = new fdv;

function kwe() {
    this.vfh = "ЛИНИИ";
    this.fdd = "ЛИНИЯ";
    this.agy = "ЗАЛОГ/Л-Я";
    this.tmf = "БОНУС-ИГРИ ОСТАВАТ";
    this.aiy = "БОНУС-ИГРИ ИЗИГРАНИ";
    this.vgh = "БОНУС-ИГРИ ОСТАВАТ";
    this.bog = "ПОЗДРАВЛЕНИЯ, ВИЕ СПЕЧЕЛИХТЕ!";
    this.vel = "БОНУС ПЕЧАЛБА";
    this.jwb = "БОНУС-ИГРИ";
    this.xwz = "СУМА ЗА ДУБЛИРАНЕ";
    this.ahv = "ДУБЛИРАЙ ЧЕРВЕНА/ЧЕРНА-ПЕЧАЛБА";
    this.hhd = "ДУБЛИРАНЕ НА КОЗОВ ЦВЯТ-ПЕЧАЛБА";
    this.ueh = "ИЗБЕРИ ПРАВИЛНАТА БОЯ, ЗА ДА УЧЕТВОРИШ ПЕЧАЛБАТА";
    this.rdh = "Залозите са приети!";
    this.jae = "Залозите не са приети!";
    this.uzc = "СПЕЧЕЛИ ДО";
    this.xqn = "ИСТОРИЯ НА ПЕЧАЛБИТЕ";
    this.eka = "КРАЙ НА БОНУС";
    this.eye = "безплатни завъртания!";
    this.iih = "ИЗИГРАНИ БЕЗПЛАТНИ ЗАВЪРТАНИЯ";
    this.eul = "СПЕЧЕЛЕНО БЕЗПЛАТНО ЗАВЪРТАНЕ";
    this.hcf = "ПОЗДРАВЛЕНИЯ!";
    this.nvw = "Поздравления, получихте";
    this.fcq = "Имате останали";
    this.hmp = "безплатни завъртания!";
    this.kyk = "Затворено за залози!";
    this.rjx = "Приключете със залозите!";
    this.ifj = "Поставете своите залози!";
    this.gdk = "Край на залозите!";
    this.bxh = "Успех!";
    this.kmx = "ОБЩО БОНУС ИГРИ";
    this.sud = "СКАТЕР";
    this.zdi = "SCATTERED:";
    this.aks = "СИМВОЛИ";
    this.rxj = "СИМВОЛ";
    this.vbw = "НАЧАЛНА БОНУС ПЕЧАЛБА:";
    this.phy = "Печалбите се изплащат само от ляво на дясно!";
    this.dgk = "Вие спечелихте допълнителни Бонус игри!";
    this.uqu = "Бонус игрите се играят със същия залог и брой линии, както основната игра.";
    this.lym = "НАЧИНИ";
    this.vju = "НАЧИН";
    this.rks = "Печелите допълнителни 15 БОНУС ЗАВЪРТАНИЯ!";
    this.kxn = "Бонус играта продължава до изчерпване на бонус игрите. По време на бонус игра може да се спечелят допълнителни игри.";
    this.eeo = "ПОМОЩ ЗА БОНУС";
    this.hhl = "ПОМОЩ СИМВОЛ";
    this.arv = "ПОМОЩ ПЕЧЕЛИВША ЛИНИЯ";
    this.xay = "ПОМОЩ ЗА ПЕЧАЛБИ";
    this.pcy = "Печалби на Линия: От всяка активна линия се изплаща само най-голямата печалба. Печалбата от активна линия се умножава по залога на линия. Печалбите от активните линии се събират и формират общата печалба.";
    this.fdp = "Скатер печалби: Скатер печалбата се умножава по общият залог. Печалбите от фигурите Скатер се добавят към печалбата от активните линии.";
    this.kbe = "Бонус Множител";
    this.szk = "По-добър успех-следващият път!";
    this.stq = "15 БОНУС ЗАВЪРТАНИЯ се печелят с 3, 4 или 5 символа ЗВЕЗДА на която и да е позиция! Всичките печалби от Бонус играта се умножават по 3."
}
kwe.prototype = new glu;

function evb() {
    this.vfh = "ხაზები";
    this.fdd = "ხაზი";
    this.agy = "ფსონი / ხაზი";
    this.lym = "გზა";
    this.vju = "გზა";
    this.tmf = "დარჩენილი BONUS თამაშები";
    this.kmx = "BONUS თამაშების რაოდენობა ჯამში";
    this.aiy = "უკვე ნათამაშები BONUS თამაშები";
    this.vgh = "დარჩენილი BONUS თამაშები";
    this.bog = "გილოცავთ თქვენ მოიგეთ!";
    this.vel = "BONUS მოგება";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "სიმბოლოები";
    this.rxj = "სიმბოლო";
    this.dgk = "თქვენ მოიგეთ დამატებითი BONUS თამაშები!";
    this.phy = "მოგების ანაზღაურება ხდება მხოლოდ მარცხნიდან მარჯვნივ!";
    this.vbw = "ბონუს ჩანაწერის მოგება:";
    this.jwb = "BONUS თამაშები";
    this.uqu = "BONUS თამაშების თამაში ხდება იგივე ფსონზე და ხაზების რაოდენობაზე, როგორც თამაშის დაწყების დროს.";
    this.pcy = "ხაზის მოგება: თითოეულ ნათამაშებ ხაზზე, მოხდება მხოლოდ უმაღლესი ხაზის მოგების ანაზღაურება. ხაზის მოგება შედგება მრავალჯერადი ხაზის ფსონისაგან. სხვადასხვა ხაზიდან მიღებული მოგება ჯამდება ერთ მოგებად.";
    this.fdp = "Scatter მოგება: Scatter მოგება შეადგენს მთლიან ფსონს რამოდენიმეჯერ. მოგება Scatter სიმბოლოებიდან ემატება ხაზის მოგებას.";
    this.eeo = "ბონუს დახმარება";
    this.hhl = "სიმბოლოს დახმარება";
    this.arv = "მოგების ხაზის დახმარება";
    this.xay = "მოგების გზაზე დახმარება";
    this.rks = "თქვენ მოიგეთ დამატებითი 15 BONUS თამაშები!";
    this.kxn = "ითამაშეთ ბონუსი სანამ BONUS თამაში არ გაგითავდებათ. დამატებითი BONUS თამაშის მოგება შეიძლება ბონუსის დროს.";
    this.xwz = "გარისკვის რიცხვი";
    this.ahv = "წითელი/შავი ითამაშე და მოიგე";
    this.hhd = "ფერი ითამაშე და მოიგე";
    this.stq = "15 BONUS თამაშის მოგება ხდება 3, 4 ან 5 ვარსკვლავის სიმბოლოთი ნებისმიერ პოზიციაზე! ყველა BONUSSPIN მოგება მრავლდება 3-ზე.";
    this.szk = "გისურვებთ მომავალში უკეთეს იღბალს!";
    this.rjx = "დაასრულე ფსონის დადება!";
    this.ifj = "მოათავსეთ თქვენი ფსონები გთხოვთ!";
    this.gdk = "ფსონები აღარ მიიღება!";
    this.bxh = "გისურვებთ წარმატებას!";
    this.ueh = "აირჩიეთ კარტის სწორი ფერი რომ გააოთხმაგოთ მოგება";
    this.rdh = "ფსონები მიღებულ იქნა!";
    this.jae = "ფსონები არ იქნა მიღებული!";
    this.eka = "ბონუსის დასასრული";
    this.uzc = "-მდე მოგება";
    this.xqn = "მოგების ჩანაწერი";
    this.kyk = "თამაში მიმდინარეობს, გთხოვთ დაელოდოთ!";
    this.kbe = "ბონუს მულტიპლიკატორი";
    this.eye = "უფასო დატრიალება!";
    this.iih = "ნათამაშები უფასო დატრიალებები";
    this.eul = "უფასო დატრიალების მოგება";
    this.hcf = "გილოცავთ!";
    this.nvw = "გილოცავთ, თქვენ მიიღეთ";
    this.fcq = "თქვენ დაგრჩათ";
    this.hmp = "უფასო დატრიალება!"
}
evb.prototype = new chu;

function uuk() {
    this.vfh = "VONALAK";
    this.fdd = "VONAL";
    this.agy = "TÉT / VONAL";
    this.lym = "IRÁNY";
    this.vju = "IRÁNY";
    this.tmf = "MEGMARADT SZABAD JÁTÉKOK";
    this.kmx = "ÖSSZES SZABAD JÁTÉK";
    this.aiy = "LEJÁTSZOTT SZABAD JÁTÉKOK";
    this.vgh = "MEGMARADT SZABAD JÁTÉKOK";
    this.bog = "GRATULÁLUNK, ÖN NYERT!";
    this.vel = "BÓNUSZ NYEREMÉNY";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SZIMBÓLUMOK";
    this.rxj = "SZIMBÓLUM";
    this.dgk = "További SZABADJÁTÉKOKAT nyert!";
    this.phy = "A Nyeremények balról jobbra fizetnek!";
    this.vbw = "BÓNUSZBA LÉPŐ NYEREMÉNY:";
    this.jwb = "SZABAD JÁTÉKOK";
    this.uqu = "Az alapjátéknál beállított tét és nyerővonal számmal játszódik le a SZABAD JÁTÉK is.";
    this.pcy = "Vonal Nyeremények: Csak a legnagyobb nyeremény fizet a megjátszott vonalakon. A vonal nyeremények a vonalankénti tét szorzatai. A különböző vonalankénti nyeremények összeadódnak.";
    this.fdp = "Scatter Nyeremények: A Scatter nyeremények az összes tét szorzatai. A Scatter szimbólummal elért nyeremények a vonal nyereményekhez adódnak.";
    this.eeo = "BÓNUSZ SÚGÓ";
    this.hhl = "SZIMBÓLUM SÚGÓ";
    this.arv = "NYERŐVONAL SÚGÓ";
    this.xay = "NYEREMÉNYÚT SEGÉDLET";
    this.rks = "További 15 SZABADJÁTÉKOT nyert!";
    this.kxn = "Játssza a szabad játék bónuszt ameddig van szabad pörgetése. Ez idő alatt újabb szabad játékokat nyerhet.";
    this.xwz = "FELTETT ÖSSZEG";
    this.ahv = "PIROS/FEKETE NYEREMÉNY";
    this.hhd = "SZÍN NYEREMÉNY";
    this.stq = "15 SZABAD JÁTÉKOT nyerhet ha 3, 4 vagy 5 CSILLAG szimbólum jelenik meg bármely helyen. Minden SZABAD JÁTÉKBAN elért nyeremény háromszorosan fizet.";
    this.szk = "Több szerencsét máskor!";
    this.rjx = "Tétek lezárva!";
    this.ifj = "Kérem tegyék meg tétjeiket!";
    this.gdk = "A játék elkezdődött, kérem várjon!";
    this.bxh = "Sok szerencsét!";
    this.ueh = "VÁLASSZA KI A MEGFELELŐ KÁRTYASZÍNT, HOGY MEGNÉGYSZEREZZE A NYEREMÉNYT";
    this.rdh = "Tétek elfogadva!";
    this.jae = "Nem lehet tétet rakni!";
    this.kyk = "Játék folyamatban, kérem várjon!";
    this.uzc = "A NYEREMÉNY AKÁR";
    this.xqn = "JÁTÉK TÖRTÉNET";
    this.eka = "BÓNUSZ VÉGE";
    this.kbe = "Bónusz szorzó";
    this.eye = "szabad spint kap!";
    this.iih = "JÁTSZOTT SZABAD SPINEK";
    this.eul = "SZABAD SPIN NYEREMÉNY";
    this.hcf = "GRATULÁLUNK!";
    this.nvw = "Gratulálunk, Ön";
    this.fcq = "";
    this.hmp = "szabad spinje van még!"
}
uuk.prototype = new nre;

function quj() {
    this.vfh = "LINII";
    this.fdd = "LINIE";
    this.agy = "MIZĂ / LINIE";
    this.lym = "MODURI";
    this.vju = "MOD";
    this.tmf = "BONUSSPIN RĂMAŞI";
    this.kmx = "TOTAL BONUSSPIN";
    this.aiy = "BONUSSPIN JUCAŢI";
    this.vgh = "BONUSSPIN RĂMAŞI";
    this.bog = "FELICITĂRI CÂŞTIGAT!";
    this.vel = "CÂŞTIG BONUS";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SIMBOLURI";
    this.rxj = "SIMBOL";
    this.dgk = "Aţi câştigat BONUSSPIN suplimentari!";
    this.phy = "Câştigurile sunt evaluate numai de la stânga la dreapta!";
    this.vbw = "CÂŞTIG BONUS START:";
    this.jwb = "BONUSSPIN";
    this.uqu = "BONUSSPIN sunt jucate cu aceeaşi miză şi număr de linii ca jocul iniţial.";
    this.pcy = "Câştiguri linie: Numai câştigul linie maxim pe linie jucată contează. Câştiguri linie sunt un multiplu al mizei liniei. Câştigurile linie ale diferitelor linii sunt adunate.";
    this.fdp = "Câştiguri Scatter: Câştigurile Scatter sunt un multiplu al mizei totale. Câştigurile din simbolurile Scatter sunt adăugate la câştigurile linie.";
    this.eeo = "AJUTOR BONUS";
    this.hhl = "AJUTOR SIMBOL";
    this.arv = "AJUTOR LINII DE CÂŞTIG";
    this.xay = "AJUTOR CĂI DE CÂŞTIG";
    this.rks = "Aţi câştigat 15 BONUSSPIN suplimentari!";
    this.kxn = "Bonusul este terminat când au fost jucaţi toţi BONUSSPIN. BONUSSPIN suplimentari pot fi câştigaţi la bonus.";
    this.xwz = "RISC";
    this.ahv = "ŞANSA ROŞU/NEGRU";
    this.hhd = "SIMBOLUL ŞANSĂ";
    this.stq = "15 BONUSSPIN sunt câştigaţi prin 3, 4 sau 5 simboluri STEA pe fiecare poziţie! Toţi BONUSSPIN câştiguri x 3.";
    this.szk = "Mai mult noroc data viitoare!";
    this.rjx = "Jocul începe imediat!";
    this.ifj = "Rugăm mizele dv.!";
    this.gdk = "Nu alte mize!";
    this.bxh = "Mult noroc!";
    this.ueh = "SELECTEAZĂ CULOAREA CORECTĂ A CĂRŢII PENTRU A CÂŞTIGA DE 4 ORI";
    this.rdh = "Pariuri acceptate!";
    this.jae = "Pariuri neacceptate!";
    this.kyk = "Joc în derulare, vă rugăm așteptați!";
    this.uzc = "CÂŞTIGURI PÂNĂ LA";
    this.xqn = "ISTORIC CÂŞTIG";
    this.eka = "BONUS FINAL";
    this.kbe = "Bonus multiplicator";
    this.eye = "rotiri libere!";
    this.iih = "ROTIRI GRATUTE JUCATE";
    this.eul = "CÂŞTIG ROTIRI LIBERE";
    this.hcf = "FELICITĂRI!";
    this.nvw = "Felicitări, ai primit";
    this.fcq = "V-au rămas";
    this.hmp = "rotiri gratuite!l"
}
quj.prototype = new zon;

function uuc() {
    this.vfh = "LINHAS";
    this.fdd = "LINHA";
    this.agy = "APOSTA / LINHA";
    this.lym = "FORMAS";
    this.vju = "FORMA";
    this.tmf = "BONUSSPINS RESTANTES";
    this.kmx = "TOTAL DE BONUSSPINS";
    this.aiy = "BONUSSPINS JOGADOS";
    this.vgh = "BONUSSPINS RESTANTES";
    this.bog = "PARABÉNS, GANHOU!";
    this.vel = "PRÉMIO BONUS";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SÍMBOLOS";
    this.rxj = "SÍMBOLO";
    this.dgk = "Ganhou BONUSSPINS adicionais!";
    this.phy = "Prémios só são pagos da esquerda para a direita!";
    this.vbw = "PRÉMIO ENTRADA BONUS:";
    this.jwb = "BONUSSPINS";
    this.uqu = "Os BONUSSPINS são jogados com a mesma aposta e n° de linhas que o jogo inicial.";
    this.pcy = "Prémios de linha: Só conta o mais alto prémio de linha de cada linha jogada. Prémios de linha são um múltiplo da aposta de linha. Prémios de linha de diversas linhas são adicionados.";
    this.fdp = "Prémios Scatter: Prémios Scatter são múltiplos da aposta total. Prémios de símbolos Scatter são adicionados aos prémios de linha.";
    this.eeo = "AJUDA BONUS";
    this.hhl = "AJUDA SÍMBOLO";
    this.arv = "AJUDA DE LINHAS VENCEDORAS";
    this.xay = "AJUDA DE FORMAS DE PRÊMIO";
    this.rks = "Ganhou 15 BONUSSPINS adicionais!";
    this.kxn = "Jogar Bonus até não restarem mais BONUSSPINS. BONUSSPINS adicionais podem ser ganhos em Bonus.";
    this.xwz = "RISCO";
    this.ahv = "VERMELHO/PRETO CHANCE DE GANHAR";
    this.hhd = "CHANCE DO NAIPE";
    this.stq = "15 BONUSSPINS são ganhos com 3, 4 ou 5 símbolos de estrelas em qualquer posição! Todos ganhos BONUSSPIN são multiplicados por 3.";
    this.rjx = "O jogo começa em breve!";
    this.ifj = "Suas apostas por favor!";
    this.gdk = "Nenhuma aposta mais!";
    this.bxh = "Boa sorte!";
    this.ueh = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.rdh = "Apostas aceitas!";
    this.jae = "Apostas não aceitas!";
    this.kyk = "Jogo em andamento, aguarde por favor!";
    this.uzc = "GANHOS ATÉ";
    this.xqn = "HISTÓRICO DO GANHO";
    this.eka = "FIM BONUS";
    this.kbe = "Multiplicador do bonus";
    this.szk = "Mais sorte da próxima vez!";
    this.eye = "freespins!";
    this.iih = "FREESPINS JOGADOS";
    this.eul = "GANHO DE FREESPINS";
    this.hcf = "PARABÉNS!";
    this.nvw = "Parabéns, ganhas";
    this.fcq = "Ainda lhe sobram";
    this.hmp = "freespins!"
}
uuc.prototype = new lcz;

function lid() {
    this.vfh = "LIGNES";
    this.fdd = "LIGNE";
    this.agy = "MISE / LIGNE";
    this.lym = "CHEMINS";
    this.vju = "CHEMIN";
    this.tmf = "BONUSSPINS LAISSÉ";
    this.kmx = "TOTAL BONUSSPINS";
    this.aiy = "JEUX GRATUITS JOUES";
    this.vgh = "BONUSSPINS LAISSÉ";
    this.bog = "FELICITATIONS TU AS GAGNE!";
    this.vel = "BONUS GAIN";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SYMBOLES";
    this.rxj = "SYMBOLE";
    this.dgk = "Vous gagnez BONUSSPINS extra!";
    this.phy = "Victoires payer seulement de gauche à droite!";
    this.vbw = "BONUS ENTRÉE WIN:";
    this.jwb = "BONUSSPINS";
    this.uqu = "Les BONUSSPINS sont joué avec la même mise et nombre des lignes comme le jeu avant.";
    this.pcy = "Gains des lignes: Seulement le gain de ligne plus haut par ligne joué compté. Gains des lignes sont un multiple du mise de ligne. Les gains de lignes de lignes differents sont ajouté.";
    this.fdp = "Gains de Scatter: Gains de Scatter sont un multiple du toute mise. Gains de symboles Scatter sont ajouter á le gain des lignes.";
    this.eeo = "BONUS D'AIDE";
    this.hhl = "SYMBOLE D'AIDE";
    this.arv = "WINLINE AIDE";
    this.rks = "Vous avez gagné un supplément de 15 BONUSSPINS!";
    this.kxn = "Le Bonus se Termine une fois tous les BONUSSPINS joués. Des BONUSSPINS supplémentaires peuvent être gagnés pendant la Bonus.";
    this.xwz = "RISQUE";
    this.ahv = "ROUGE/NOIR SIGNIFIE GAIN";
    this.hhd = "GAIN DE SYMBOLES";
    this.stq = "15 BONUSSPINS sont gagnés avec 3, 4 ou 5 étoiles sur toute position! Tous les gains des BONUSSPINS sont multipliés par 3.";
    this.rjx = "Le jeu va commencer tout de suite!";
    this.ifj = "Faites vos jeux s'il vous plaît!";
    this.gdk = "Rien ne va plus!";
    this.bxh = "Bonne chance!";
    this.xay = "AIDE VOIES DE GAINS";
    this.szk = "Meilleure chance la prochaine fois!";
    this.ueh = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.rdh = "Mises acceptées!";
    this.jae = "Mises refusées!";
    this.kyk = "Jeu en cours, merci de patienter!";
    this.uzc = "GAINS JUSQU'À";
    this.xqn = "HISTORIQUE DE GAINS";
    this.eka = "FIN DU BONUS";
    this.kbe = "Multiplicateur de bonus";
    this.eye = "Freespins!";
    this.iih = "FREESPINS JOUÉS";
    this.eul = "GAIN DE FREESPIN";
    this.hcf = "FÉLICITATIONS!";
    this.nvw = "Félicitations, vous recevez";
    this.fcq = "Il vous reste encore";
    this.hmp = "Freespins!"
}
lid.prototype = new ano;

function jdv() {
    this.vfh = "LINIJE";
    this.fdd = "LINIJI";
    this.agy = "ULOG / LINIJI";
    this.lym = "NAČINA";
    this.vju = "NAČIN";
    this.tmf = "PREOSTALE BESPLATNE IGRE";
    this.kmx = "UKUPNO BESPLATNIH IGARA";
    this.aiy = "ODIGRANE BESPLATNE IGRE";
    this.vgh = "PREOSTALE BESPLATNE IGRE";
    this.bog = "ČESTITAMO, DOBILI STE!";
    this.vel = "BONUS DOBITAK";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SIMBOLI";
    this.rxj = "SIMBOL";
    this.dgk = "Dobili ste dodatne BESPLATNE IGRE!";
    this.phy = "Dobitci se isplaćuju samo sa lijeva na desno!";
    this.vbw = "BONUS POČETNI DOBITAK:";
    this.jwb = "BESPLATNE IGRE";
    this.uqu = "BESPLATNE IGRE se igraju sa istim ulogom i brojem linija kao početna igra.";
    this.pcy = "Linijski dobitak: Samo najveći linijski dobitak za svaku odigranu liniju se isplaćuje. Linijski dobitak je uvišestručeni linijski ulog. Linijski dobitci sa različitih linija se zbrajaju.";
    this.fdp = "Scatter dobitak: Scatter dobitak je uvišestručeni ukupni ulog. Dobitci od scatter simbola se zbrajaju sa linijskim dobitcima.";
    this.eeo = "POMOĆ ZA BONUS";
    this.hhl = "POMOĆ ZA SIMBOL";
    this.arv = "POMOĆ ZA DOBITNE LINIJE";
    this.rks = "Dobili ste dodatnih 15 BESPLATNIH IGARA!";
    this.kxn = "Bonus se završava kada su odigrane sve BESPLATNE IGRE. Dodatne BESPLATNE IGRE se mogu dobiti tijekom Bonusa.";
    this.xwz = "ULAŽETE";
    this.ahv = "POGODI BOJU ZA DOBITAK OD";
    this.hhd = "POGODI SIMBOL ZA DOBITAK OD";
    this.stq = "3, 4 ili 5 simbola ZVIJEZDA na bilo kojoj poziciji osvajaju 15 BESPLATNIH IGARA! Svi dobici tijekom BESPLATNIH IGARA množe se sa 3.";
    this.rjx = "Završte ulaganje!";
    this.ifj = "Molimo Vaše uloge!";
    this.gdk = "Nema daljnjih uloga!";
    this.bxh = "Puno sreće!";
    this.xay = "POMOĆ ZA POBJEDU";
    this.szk = "Više sreće sljedeći put!";
    this.ueh = "ODABERI PRAVI ZNAK I TIME UČETVEROSTRUČI DOBITAK";
    this.rdh = "Ulozi su prihvaćeni!";
    this.jae = "Ulozi nisu prihvaćeni!";
    this.kyk = "Igra je u tijeku, sačekajte!";
    this.uzc = "OSVOJI DO";
    this.xqn = "POVIJEST DOBITAKA";
    this.eka = "KRAJ BESPLATNE IGRE";
    this.kbe = "Bonus multiplikator";
    this.eye = "slobodnih igara!";
    this.iih = "ODIGRANIH SLOBODNIH IGARA";
    this.eul = "DOBITAK U SLOBODNOJ IGRI";
    this.hcf = "ČESTITAMO!";
    this.nvw = "Čestitamo, osvojili ste";
    this.fcq = "Preostalo ti je još";
    this.hmp = "slobodnih igara!"
}
jdv.prototype = new ygk;

function xeq() {
    this.vfh = "LINEE";
    this.fdd = "LINEA";
    this.agy = "PUNTATA / LINEA";
    this.lym = "VIE";
    this.vju = "VIA";
    this.tmf = "BONUSSPIN RIMASTI";
    this.kmx = "TOTALE BONUSSPIN";
    this.aiy = "BONUSSPIN GIOCATI";
    this.vgh = "BONUSSPIN RIMASTI";
    this.bog = "CONGRATULAZIONI, HAI VINTO!";
    this.vel = "VINCITA BONUS";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SIMBOLI";
    this.rxj = "SIMBOLO";
    this.dgk = "Hai vinto altri BONUSSPIN!";
    this.phy = "Le vincite sono valutate dalla sinistra alla destra soltanto!";
    this.vbw = "VINCITA START BONUS:";
    this.jwb = "BONUSSPIN";
    this.uqu = "Le giocate BONUS si giocano con la stessa puntata e con lo stesso numero di linee della partita iniziale.";
    this.pcy = "Vincite di linea: Soltanto la vincita di linea più alta di ogni linea conta. Le vincite di linea sono la moltiplicazione della puntata per la linea. Le vincite di linea delle diverse linee vengono sommate.";
    this.fdp = "Vincite Scatter: Le vincite Scatter sono la moltiplicazione dell'intera puntata del gioco. Le vincite dai simboli Scatter vengono sommate alle vincite di linea.";
    this.eeo = "AIUTO BONUS";
    this.hhl = "AIUTO SYMBOLO";
    this.arv = "AIUTO WINLINE";
    this.rks = "Hai vinto altri 15 BONUSSPIN!";
    this.kxn = "Il bonus termina quando tutti i BONUSSPIN sono stati giocati. Si possono vincere altri BONUSSPIN nella giocata Bonus.";
    this.xwz = "IMPORTO GAMBLE";
    this.ahv = "ROSSO/NERO GAMBLE PER VINCERE";
    this.hhd = "CHANCE SUIT GAMBLE";
    this.stq = "15 BONUSSPIN si vincono con 3, 4 o 5 simboli STELLA su ogni posizione! Tutte le vincite BONUSSPIN si moltiplicano x 3.";
    this.rjx = "Completare le puntate prego!";
    this.ifj = "Prego puntare!";
    this.gdk = "Fine puntate!";
    this.bxh = "Buona Fortuna!";
    this.xay = "AIUTO MODI DI VINCERE";
    this.szk = "La prossima volta sarai più fortunato!";
    this.ueh = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.rdh = "Puntate accettate!";
    this.jae = "Puntate non accettate!";
    this.kyk = "Partita in corso, prego attendere!";
    this.uzc = "VINCITE FINO A";
    this.xqn = "CRONACA DELLE VINCITE";
    this.eka = "FINE BONUS";
    this.kbe = "Moltiplicatore bonus";
    this.eye = "Freespins!";
    this.iih = "FREESPIN GIOCATI";
    this.eul = "VINCITA FREESPIN";
    this.hcf = "CONGRATULAZIONI!";
    this.nvw = "Congratulazioni, ricevi";
    this.fcq = "Sono rimasti";
    this.hmp = "freespin!"
}
xeq.prototype = new ivr;

function zih() {
    this.vfh = "LINJER";
    this.fdd = "LINJE";
    this.agy = "INSATS / LINJE";
    this.lym = "SÄTT";
    this.vju = "SÄTT";
    this.tmf = "ÅTERSTÅENDE BONUSSPINS";
    this.kmx = "BONUSSPINS TOTALT";
    this.aiy = "SPELADE BONUSSPINS";
    this.vgh = "ÅTERSTÅENDE BONUSSPINS";
    this.bog = "GRATTIS, DU HAR VUNNIT!";
    this.vel = "BONUSVINST";
    this.sud = "SCATTER";
    this.zdi = "SCATTERED:";
    this.aks = "SYMBOLER";
    this.rxj = "SYMBOL";
    this.dgk = "Du har vunnit extra BONUSSPINS!";
    this.phy = "Vinster betalas endast ut från vänster till höger!";
    this.vbw = "BONUSSTARTSVINST:";
    this.jwb = "BONUSSPINS";
    this.uqu = "BONUSSPINS spelas med samma insats och samma antal linjer som det spel som aktiverade bonusomgången.";
    this.pcy = "Linjevinster: Endast den högsta linjevinster per spelad linje räknas. Linjevinster är en mångdubbling av linjeinsatsen. Linjevinsterna från olika linjer adderas.";
    this.fdp = "Scattervinster: Scattervinster är en mångdubbling av den totala insatsen. Vinster från scattersymboler adderas till linjevinsterna.";
    this.eeo = "HJÄLP OM BONUS";
    this.hhl = "HJÄLP OM SYMBOLER";
    this.arv = "HJÄLP OM VINSTRADER";
    this.xay = "VINSTSÄTTSHJÄLP";
    this.rks = "Du har vunnit ytterligare 15 BONUSSPINS!";
    this.kxn = "Spela ut bonusomgången tills inga BONUSSPINS återstår. Nya BONUSSPINS kan vinnas under bonusomgången.";
    this.xwz = "SPELSUMMA";
    this.ahv = "SPEL OM RÖTT/SVART";
    this.hhd = "SPEL OM FÄRG";
    this.stq = "15 BONUSSPINS betalas ut för 3, 4 eller 5 SCATTER-symboler på varje position! Alla vinster från BONUSSPIN multipliceras med 3.";
    this.rjx = "Spelet har börjat!";
    this.ifj = "Placera dina insatser, tack!";
    this.gdk = "Inga fler insatser!";
    this.bxh = "Lycka till!";
    this.szk = "Bättre lycka nästa gång!";
    this.ueh = "VÄLJ RÄTT FÄRGSVIT FÖR ATT FYRDUBBLA VINSTEN";
    this.rdh = "Insatserna accepterade!";
    this.jae = "Insatserna ej accepterade!";
    this.kyk = "Spelet pågår, var vänlig vänta!";
    this.uzc = "VINN UPP TILL";
    this.xqn = "VINSTHISTORIK";
    this.eka = "BONUSEN SLUT";
    this.kbe = "Bonusmultiplikator";
    this.eye = "gratisspinn!";
    this.iih = "GRATISSPINN SPELADE";
    this.eul = "GRATISSPINNSVINST";
    this.hcf = "GRATTIS!";
    this.nvw = "Grattis, du har fått";
    this.fcq = "Du har";
    this.hmp = "gratisspinn kvar!"
}
zih.prototype = new bvz;

function rin() {
    this.jgg = "SEVEN substitutes for all symbols except SCATTER and DOUBLES prize when substituting.";
    this.art = "SCATTER symbol pays on any position."
}
rin.prototype = new jdi;

function mdr() {
    this.jgg = "Символ SEVEN заменяет любой другой символ, за исключением символа SCATTER и удваивает выигрыш.";
    this.art = "Символы SCATTER выигрывают в любой позиции."
}
mdr.prototype = new ksm;

function cel() {
    this.jgg = "SEVEN substituye cada uno de los simbolos excepto SCATTER y redobla el premio.";
    this.art = "Combinación ganadora de simbolos SCATTER paga en cualquier posición."
}
cel.prototype = new zns;

function uvi() {
    this.jgg = "SIEBEN ersetzt jedes Symbol ausgenommen SCATTER und verdoppelt den Gewinn.";
    this.art = "SCATTER Symbole gewinnen auf jeder Position."
}
uvi.prototype = new lxb;

function erm() {
    this.jgg = "SEVEN, SCATTERED dışındaki her sembolün yerine geçer ve kazancı ikiye katlar.";
    this.art = "SCATTER sembolleri her pozisyonda kazanır."
}
erm.prototype = new lin;

function vef() {
    this.jgg = "SEVEN nahradí každý symbol s výjíimkou symbolu SCATTER a zdvojnásobí výhru.";
    this.art = "SCATTER symbol vyhrává v libovolné pozici."
}
vef.prototype = new ryp;

function yis() {
    this.jgg = "SEVEN asendab kõiki sümboleid, välja arvatud SCATTER, ja asendades KAHEKORDISTAB võidu.";
    this.art = "SCATTER sümbol maksab igas positsioonis."
}
yis.prototype = new iie;

function lgh() {
    this.jgg = "Το SEVEN υποκαθιστά όλα τα σύμβολα εκτός από το SCATTER και διπλασιάζει το κέρδος.";
    this.art = "Τα SCATTER σύμβολα κερδίζουν σε κάθε θέση."
}
lgh.prototype = new urh;

function dlp() {
    this.jgg = "СЕДЕМ заменя всички символи, освен SCATTER, и УДВОЯВА наградата при заместване.";
    this.art = "Символът SCATTER се изплаща на всяка позиция."
}
dlp.prototype = new kwe;

function rli() {
    this.jgg = "SEVEN ანაცვლებს ყველა სიმბოლოს გარდა SCATTER და DOUBLES პრიზისა ჩანაცვლების დროს.";
    this.art = "SCATTER სიმბოლო მოგებას ანაზღაურებს ნებისმიერ პოზიციაზე."
}
rli.prototype = new evb;

function iso() {
    this.jgg = "A HETES minden szimbólumot helyettesít, kivéve a SCATTER és a DUPLÁZÓ szimbólumokat.";
    this.art = "A SCATTER szimbólum minden helyen fizet."
}
iso.prototype = new uuk;

function xug() {
    this.jgg = "SEVEN înlocuieşte toate simbolurile cu excepţia SCATTER şi dublează câştigul.";
    this.art = "Simbolurile SCATTER câştigă pe fiecare poziţie."
}
xug.prototype = new quj;

function feb() {
    this.jgg = "SEVEN substitui qualquer símbolo, exceto SCATTER e dobra o ganho.";
    this.art = "Símbolos SCATTER ganham em cada posição."
}
feb.prototype = new uuc;

function gkf() {
    this.jgg = "SEVEN remplace tout symbole, exception faite de SCATTER, et double le gain.";
    this.art = "SCATTER symbole paie sur n'importe quelle position."
}
gkf.prototype = new lid;

function vxp() {
    this.jgg = "SEVEN zamjenjuje svaki simbol izuzev simbola SCATTER i udvostručuje dobitak.";
    this.art = "SCATTER simboli dobivaju na bilo kojoj poziciji."
}
vxp.prototype = new jdv;

function yvg() {
    this.jgg = "SEVEN sostituisce ogni simbolo, tranne il simbolo SCATTER, e raddoppia la vincita nella sostituzione.";
    this.art = "I simboli SCATTER vincono su ogni posizione."
}
yvg.prototype = new xeq;

function vlu() {
    this.jgg = "SJU-symbolen ersätter alla symboler utom SCATTER och dubblar vinsten då den ersätter.";
    this.art = "SCATTER-symbolen ger vinst på varje position."
}
vlu.prototype = new zih;

function ntu() {
    this.eez = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.bvr = {
        backgroundColor: "rgb(0,0,0)",
        dlj: "rgba(0,0,0,0.3)"
    };
    this.trt = {
        font: "arial",
        lfx: "bold",
        backgroundColor: "black",
        rtx: "rgb(0,100,10)",
        ouo: "rgb(80,255,100)",
        wgn: "rgb(120,120,120)",
        cvq: "red",
        vii: "white",
        efw: null
    };
    this.hxc = {
        font: "arial",
        lfx: "bold",
        backgroundColor: "rgb(0,0,0)",
        hik: null,
        qmj: "rgb(255,255,255)",
        tbr: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.uug = {
        font: "arial",
        lfx: "bold",
        backgroundColor: "black",
        qdt: "rgb(50,50,50)",
        xwn: "rgb(255,255,255)",
        qmj: "white",
        tyr: 0.8,
        xkh: {
            kfs: {
                font: "sanf-serif",
                lfx: "",
                textAlign: "center",
                uqc: "round",
                backgroundColor: "black",
                qmj: "white",
                borderColor: null,
                tbr: null,
                aii: 1
            }
        }
    };
    this.odx = {
        font: "arial",
        lfx: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        nrh: "rgba(255,255,255,0.2)",
        qmj: "rgb(255,255,255)",
        qen: "rgba(0,0,0,0.3)",
        display: {
            lbw: "arial",
            flr: "arial",
            lfx: "bold",
            qmj: "rgb(255,255,255)",
            iws: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        kfs: {
            font: "arial",
            lfx: "bold",
            qmj: "rgb(0,0,0)",
            eic: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            hik: "rgba(255,255,255,1)",
            tbs: "rgba(255,255,255,0.8)",
            yvn: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            uqc: "rect",
            ime: -1
        }
    };
    this.qdn = {
        font: "arial",
        lfx: "bold",
        zay: "rgb(0,0,200)",
        ace: "rgb(255,255,255)",
        nac: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        stp: "rgb(180,220,255)",
        gui: "rgb(10,20,25)",
        idc: "rgb(130,220,255)",
        rtb: "rgb(130,190,255)",
        qmj: "rgb(255,255,255)",
        fcw: "rgb(130,190,255)",
        vgg: "rgb(100,160,255)",
        ucc: "rgb(255,255,255)",
        kfs: {
            uqc: "rect",
            font: "arial",
            lfx: "bold",
            qmj: "rgb(255,255,255)",
            zyf: null,
            backgroundColor: "rgb(90,160,255)",
            qgm: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            tbr: "rgb(40,80,140)"
        },
        daz: {
            uqc: "round",
            font: "arial",
            lfx: "bold",
            qmj: "rgb(255,255,255)",
            zyf: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            qgm: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            tbr: "rgb(40,80,140)"
        }
    };
    this.whn = {};
    this.fem = {
        rib: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.kev = {
        type: "left",
        font: "arial",
        lfx: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        hik: null,
        borderColor: "rgb(0,0,0)",
        tbr: "rgb(180,180,180)",
        stp: "rgba(0,0,0,0.6)",
        qsm: null,
        iws: "rgb(255,200,0)",
        qmj: "white",
        alp: {
            font: "arial",
            lfx: "bold",
            backgroundColor: "rgb(100,100,100)",
            hik: "rgb(100,100,100)",
            tbs: null,
            yvn: null,
            borderColor: "rgb(100,100,100)",
            qmj: "rgb(255,255,255)",
            eic: "rgb(255,200,0)",
            uqc: "triangle",
            ime: 1
        },
        nyu: {
            font: "arial",
            lfx: "bold",
            backgroundColor: "rgb(100,100,100)",
            hik: "rgb(100,100,100)",
            tbs: null,
            yvn: null,
            borderColor: "rgb(100,100,100)",
            qmj: "rgb(255,255,255)",
            eic: "rgb(255,200,0)",
            uqc: "triangle",
            ime: 0
        },
        lwv: {
            font: "arial",
            lfx: "bold",
            backgroundColor: "rgb(100,100,100)",
            hik: "rgb(15,15,15)",
            tbs: "rgb(100,100,100)",
            yvn: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            qmj: "rgb(255,255,255)",
            eic: "rgb(255,200,0)",
            uqc: "rect",
            ime: -1
        },
        display: {
            flr: "sans-serif",
            lbw: "sans-serif",
            lfx: "bold",
            iws: null,
            qmj: "yellow",
            borderColor: "rgb(100,100,100)",
            tbr: null,
            backgroundColor: "black"
        },
        llb: {
            font: "arial",
            lfx: "bold",
            backgroundColor: null,
            hik: null,
            qmj: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.aes = {
        font: "arial",
        lfx: "bold",
        backgroundColor: "rgb(180,180,180)",
        hik: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        tbr: "rgb(30,30,30)",
        qmj: "white",
        tgv: {
            font: "arial",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            hik: null,
            tbs: "rgba(100,100,100,0.5)",
            yvn: null,
            borderColor: null,
            qmj: "white",
            uqc: "rect",
            ime: -1
        },
        alp: {
            font: "arial",
            lfx: "bold",
            backgroundColor: "rgb(255,255,255)",
            hik: "rgb(255,255,255)",
            tbs: null,
            yvn: null,
            borderColor: "rgb(255,255,255)",
            qmj: "rgb(0,0,0)",
            eic: "rgb(0,0,0)",
            uqc: "triangle",
            ime: 1
        },
        nyu: {
            font: "arial",
            lfx: "bold",
            backgroundColor: "rgb(255,255,255)",
            hik: "rgb(255,255,255)",
            tbs: null,
            yvn: null,
            borderColor: "rgb(255,255,255)",
            qmj: "rgb(0,0,0)",
            eic: "rgb(0,0,0)",
            uqc: "triangle",
            ime: 0
        },
        wnj: {
            uqc: "rect",
            font: "arial",
            lfx: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            qmj: "white",
            aii: 1,
            borderColor: "rgb(255,255,255)",
            tbr: "rgb(220,220,220)"
        },
        display: {
            flr: "sans-serif",
            lbw: "sans-serif",
            lfx: "bold",
            iws: null,
            qmj: "white",
            borderColor: "white",
            tbr: null,
            backgroundColor: "rgb(0,0,0)"
        },
        llb: {
            font: "arial",
            lfx: "bold",
            backgroundColor: null,
            hik: null,
            qmj: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.wlc = {
        iht: [{
            flr: "sans-serif",
            xhg: "sans-serif",
            lfx: "bold",
            iws: "rgb(236,225,207)",
            xfp: "rgb(214,170,102)",
            zyf: "rgb(245,220,148)",
            yat: "rgb(190,137,40)",
            klk: "rgba(150,120,30,0.3)",
            borderColor: "rgb(150,110,30)",
            tbr: "rgb(200,170,50)",
            backgroundColor: "rgb(100,70,30)",
            hik: "rgb(0,0,0)",
            axm: "rgb(0,0,0)"
        }, {
            flr: "sans-serif",
            xhg: "sans-serif",
            lfx: "bold",
            iws: "rgb(230,230,230)",
            xfp: "rgb(190,190,190)",
            zyf: "rgb(240,240,240)",
            yat: "rgb(160,160,160)",
            klk: "rgba(120,120,120,0.3)",
            borderColor: "rgb(120,120,120)",
            tbr: "rgb(170,170,170)",
            backgroundColor: "rgb(100,100,100)",
            hik: "rgb(0,0,0)",
            axm: "rgb(0,0,0)"
        }],
        vqw: {
            flr: "sans-serif",
            xhg: "sans-serif",
            lfx: "bold",
            iws: "rgb(236,225,207)",
            xfp: "rgb(214,170,102)",
            zyf: "rgb(245,220,148)",
            yat: "rgb(190,137,40)",
            klk: null,
            borderColor: null,
            tbr: null,
            backgroundColor: null,
            hik: null,
            axm: null
        },
        hnr: {}
    };
    this.pkj = {
        oos: "rgb(240,240,240)",
        dvb: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        qen: "rgba(0,80,150,0.6)",
        display: {
            lbw: "arial",
            flr: "arial",
            lfx: "bold",
            qmj: "rgb(0,80,151)",
            iws: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function quw() {
    this.bvr.yft = false;
    this.bvr.jyh = false;
    this.vvk = {
        display: {
            lbw: "sans-serif",
            flr: "sans-serif",
            lfx: "bold",
            backgroundColor: "black",
            qmj: "rgb(255,255,50)",
            iws: "rgb(255,255,50)",
            borderColor: "rgb(230,230,230)",
            tbr: "rgb(160,160,160)"
        },
        gca: {
            lbw: "sans-serif",
            flr: "sans-serif",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.8)",
            qmj: "rgb(255,255,50)",
            iws: "rgb(255,255,50)",
            borderColor: null,
            tbr: null
        },
        gkx: {
            lbw: "arial",
            flr: "arial",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qmj: "white",
            iws: "white",
            borderColor: null,
            tbr: null
        },
        xat: {
            font: "arial",
            lfx: "bold",
            backgroundColor: "rgb(230,230,230)",
            hik: null,
            tbs: null,
            yvn: null,
            borderColor: "rgb(230,230,230)",
            qmj: "rgb(0,0,0)",
            eic: "rgb(0,0,0)",
            uqc: "rrect",
            ime: 3
        },
        qzw: {
            font: "sans-serif",
            lfx: "bold",
            qmj: "rgb(255,255,50)",
            backgroundColor: "black",
            borderColor: null,
            tbr: null
        },
        xkh: {
            backgroundColor: null,
            hik: null,
            stp: "rgb(0,0,0)",
            gui: "rgb(0,0,0)",
            oio: null,
            hbl: 0.5,
            kfs: {
                uqc: "rect",
                font: "verdana",
                lfx: "bold",
                backgroundColor: "rgb(0,0,0)",
                qgm: "rgb(150,150,150)",
                qmj: "rgb(255,255,255)",
                zyf: "rgb(255,255,0)",
                borderColor: "rgb(150,150,150)",
                tbr: "rgb(0,0,0)"
            },
            jvu: {
                uqc: "round",
                font: "verdana",
                lfx: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                qgm: "rgba(150,150,150,0.5)",
                qmj: "rgb(255,255,255)",
                zyf: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tbr: "rgb(100,100,100)"
            },
            ddn: {
                uqc: "round",
                font: "verdana",
                lfx: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                qgm: "rgba(150,150,150,0.5)",
                qmj: "rgb(255,255,255)",
                zyf: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tbr: "rgb(100,100,100)"
            },
            kyz: {
                uqc: "rect",
                font: "verdana",
                lfx: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                qgm: "rgba(150,150,150,0.5)",
                qmj: "rgba(255,255,255,0.8)",
                zyf: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tbr: "rgb(100,100,100)"
            },
            ojb: {
                uqc: "rect",
                font: "verdana",
                lfx: "bold",
                backgroundColor: "rgba(0,0,0,0.5)",
                qgm: "rgba(150,150,150,0.5)",
                qmj: "rgba(255,255,255,0.8)",
                zyf: "rgb(255,255,255)",
                borderColor: "rgb(200,200,200)",
                tbr: "rgb(100,100,100)"
            },
            uxc: {
                font: "verdana",
                lfx: "bold",
                backgroundColor: "rgb(75, 5, 5)",
                borderColor: null,
                qmj: "rgb(255, 255, 50)"
            },
            win: {
                font: "helvetica",
                lfx: "bold",
                backgroundColor: null,
                borderColor: null,
                qmj: "rgb(240, 231, 203)"
            }
        }
    };
    this.eil = {
        backgroundColor: null,
        stp: "rgb(0,0,0)",
        gui: "rgb(0,0,0)",
        display: {
            lbw: "sans-serif",
            flr: "sans-serif",
            lfx: "bold",
            backgroundColor: "black",
            qmj: "yellow",
            iws: "yellow",
            borderColor: "rgb(230,230,230)",
            tbr: "rgb(160,160,160)"
        },
        gkx: {
            lbw: "arial",
            flr: "arial",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qmj: "white",
            iws: "white",
            borderColor: null,
            tbr: null
        },
        vba: {
            lbw: "verdana",
            flr: "verdana",
            lfx: "bold",
            iws: "white",
            qmj: "yellow"
        },
        kfs: {
            uqc: "rect",
            font: "verdana",
            lfx: "bold",
            backgroundColor: "rgb(0,0,0)",
            qgm: "rgb(150,150,150)",
            qmj: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            tbr: "rgb(0,0,0)"
        },
        jvu: {
            uqc: "round",
            font: "verdana",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qgm: "rgba(150,150,150,0.5)",
            qmj: "rgb(255,255,255)",
            zyf: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tbr: "rgb(100,100,100)"
        },
        ddn: {
            uqc: "round",
            font: "verdana",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qgm: "rgba(150,150,150,0.5)",
            qmj: "rgb(255,255,255)",
            zyf: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tbr: "rgb(100,100,100)"
        },
        uxc: {
            font: "verdana",
            lfx: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            qmj: "rgb(255, 255, 0)"
        }
    };
    this.pcs = {
        backgroundColor: null,
        stp: "rgb(0,0,0)",
        gui: "rgb(0,0,0)",
        kfs: {
            uqc: "rect",
            font: "verdana",
            lfx: "bold",
            backgroundColor: "rgb(0,0,0)",
            qgm: "rgb(150,150,150)",
            qmj: "rgb(255,255,255)",
            borderColor: "rgb(150,150,150)",
            tbr: "rgb(0,0,0)"
        },
        jvu: {
            uqc: "round",
            font: "verdana",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qgm: "rgba(150,150,150,0.5)",
            qmj: "rgb(255,255,255)",
            zyf: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tbr: "rgb(100,100,100)"
        },
        ddn: {
            uqc: "round",
            font: "verdana",
            lfx: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            qgm: "rgba(150,150,150,0.5)",
            qmj: "rgb(255,255,255)",
            zyf: "rgb(255,255,0)",
            borderColor: "rgb(200,200,200)",
            tbr: "rgb(100,100,100)"
        }
    };
    this.muz = {
        tyr: 0,
        oio: "rgba(0,0,0,0)",
        ust: "rgba(0,0,0,0.5)"
    };
    this.mun = {
        uub: "rgb(255,0,0)",
        xwn: "rgb(255,255,0)",
        urc: "white",
        irt: null,
        isg: 0,
        kbv: 0.05,
        bmh: [{
            fpl: "rgb(180,180,30)",
            csu: "rgb(255,220,0)",
            vkl: "rgb(180,180,30)",
            djz: "rgb(255,255,0)"
        }, {
            fpl: "rgb(210,110,0)",
            csu: "rgb(255,168,0)",
            vkl: "rgb(210,110,0)",
            djz: "rgb(255,210,50)"
        }, {
            fpl: "rgb(0,50,180)",
            csu: "rgb(0,68,220)",
            vkl: "rgb(0,50,180)",
            djz: "rgb(0,100,255)"
        }, {
            fpl: "rgb(0,160,64)",
            csu: "rgb(0,200,80)",
            vkl: "rgb(0,160,64)",
            djz: "rgb(0,255,70)"
        }, {
            fpl: "rgb(140,30,140)",
            csu: "rgb(200,0,200)",
            vkl: "rgb(140,30,140)",
            djz: "rgb(255,30,255)"
        }, {
            fpl: "rgb(180,180,30)",
            csu: "rgb(255,220,0)",
            vkl: "rgb(180,180,30)",
            djz: "rgb(255,255,0)"
        }, {
            fpl: "rgba(200,200,50,0.7)",
            csu: "rgba(255,255,150,0.7)",
            vkl: "rgba(200,200,50,0.7)",
            djz: "rgba(255,255,150,0.7)"
        }]
    };
    this.mfu = {
        font: "sans-serif",
        lfx: "bold",
        xop: "red",
        yyn: "orange",
        qdt: "white"
    };
    this.npa = {
        font: "sans-serif",
        lfx: "bold",
        xop: "red",
        yyn: "orange",
        qdt: "white"
    };
    this.xmk = {
        font: "sans-serif",
        lfx: "bold",
        qmj: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        gxd: "rgb(0,0,0)",
        xzh: "rgb(255,0,0)",
        eks: "rgb(255,255,0)",
        ehe: "rgb(80,80,80)",
        orw: "rgb(15,15,15)",
        nck: "rgb(0,0,0)",
        rzk: "rgb(180,180,180)",
        pcp: "rgb(0,0,0)",
        hqi: 0.7
    }
}
quw.prototype = new ntu;

function doq() {
    this.bvr.jyh = true;
    this.vvk.qzw.backgroundColor = "rgb(75, 5, 5)";
    this.vvk.qzw.borderColor = "rgb(100,10,10)";
    this.vvk.xkh.uxc.borderColor = "rgb(100,10,10)";
    this.vvk.xkh.kfs.backgroundColor = "rgb(170,0,10)";
    this.vvk.xkh.kfs.qgm = "rgb(255,0,0)";
    this.vvk.xkh.kfs.borderColor = "rgb(190,0,10)";
    this.vvk.xkh.kfs.tbr = "rgb(50,0,0)";
    this.vvk.xkh.kyz.backgroundColor = "rgba(0,0,0,0.4)";
    this.vvk.xkh.kyz.qgm = "rgba(255,50,30,0.7)";
    this.vvk.xkh.kyz.borderColor = "rgb(255,100,80)";
    this.vvk.xkh.kyz.tbr = "rgb(150,30,20)";
    this.vvk.xkh.ojb.backgroundColor = "rgba(0,0,0,0.4)";
    this.vvk.xkh.ojb.qgm = "rgba(255,50,30,0.7)";
    this.vvk.xkh.ojb.borderColor = "rgb(255,100,80)";
    this.vvk.xkh.ojb.tbr = "rgb(150,30,20)";
    this.vvk.xkh.jvu.backgroundColor = "rgba(0,0,0,0.4)";
    this.vvk.xkh.jvu.qgm = "rgba(255,50,30,0.7)";
    this.vvk.xkh.jvu.borderColor = "rgb(255,100,80)";
    this.vvk.xkh.jvu.tbr = "rgb(150,30,20)";
    this.vvk.xkh.ddn.backgroundColor = "rgba(0,0,0,0.4)";
    this.vvk.xkh.ddn.qgm = "rgba(255,50,30,0.7)";
    this.vvk.xkh.ddn.borderColor = "rgb(255,100,80)";
    this.vvk.xkh.ddn.tbr = "rgb(150,30,20)";
    this.eil.kfs.backgroundColor = "rgb(170,0,10)";
    this.eil.kfs.borderColor = "rgb(190,0,10)";
    this.eil.kfs.tbr = "rgb(50,0,0)";
    this.eil.jvu.backgroundColor = "rgba(0,0,0,0.4)";
    this.eil.jvu.borderColor = "rgb(255,100,80)";
    this.eil.jvu.tbr = "rgb(150,30,20)";
    this.eil.ddn.backgroundColor = "rgba(0,0,0,0.4)";
    this.eil.ddn.borderColor = "rgb(255,100,80)";
    this.eil.ddn.tbr = "rgb(150,30,20)";
    this.pcs.kfs.backgroundColor = "rgb(170,0,10)";
    this.pcs.kfs.borderColor = "rgb(190,0,10)";
    this.pcs.kfs.tbr = "rgb(50,0,0)";
    this.pcs.jvu.backgroundColor = "rgba(0,0,0,0.4)";
    this.pcs.jvu.borderColor = "rgb(255,100,80)";
    this.pcs.jvu.tbr = "rgb(150,30,20)";
    this.pcs.ddn.backgroundColor = "rgba(0,0,0,0.4)";
    this.pcs.ddn.borderColor = "rgb(255,100,80)";
    this.pcs.ddn.tbr = "rgb(150,30,20)";
    this.pcs.npy = {
        font: "sans-serif",
        lfx: "bold",
        qmj: "yellow",
        flr: "verdana"
    };
    this.pcs.top = {
        font: "arial",
        lfx: "bold",
        qmj: "yellow",
        qva: "arial",
        obp: "yellow",
        iea: "white",
        flr: "verdana"
    };
    this.pcs.gqi = {
        font: "sans-serif",
        lfx: "bold",
        qmj: "yellow",
        kvo: "verdana",
        swm: "verdana",
        dkj: "bold",
        wye: "white"
    };
    this.uug.xkh.kfs.backgroundColor = "rgb(170,0,10)";
    this.mun = {
        uub: "white",
        xwn: null,
        urc: "rgb(255,255,0)",
        irt: "rgb(255,0,0)",
        isg: 1,
        kbv: 0.025,
        bmh: [{
            fpl: "rgb(100,0,0)",
            csu: "rgb(190,0,0)",
            vkl: "rgb(100,0,0)",
            djz: "rgb(255,0,0)"
        }, {
            fpl: "rgb(0,0,100)",
            csu: "rgb(0,0,190)",
            vkl: "rgb(0,0,100)",
            djz: "rgb(0,0,255)"
        }, {
            fpl: "rgb(0,100,15)",
            csu: "rgb(0,170,30)",
            vkl: "rgb(0,100,15)",
            djz: "rgb(0,255,40)"
        }, {
            fpl: "rgb(150,150,0)",
            csu: "rgb(215,210,0)",
            vkl: "rgb(150,150,0)",
            djz: "rgb(255,255,0)"
        }, {
            fpl: "rgb(90,0,140)",
            csu: "rgb(130,0,200)",
            vkl: "rgb(90,0,140)",
            djz: "rgb(170,0,255)"
        }, {
            fpl: "rgb(40,120,80)",
            csu: "rgb(75,200,140)",
            vkl: "rgb(40,120,80)",
            djz: "rgb(90,255,180)"
        }, {
            fpl: "rgb(100,15,60)",
            csu: "rgb(165,20,90)",
            vkl: "rgb(110,15,60)",
            djz: "rgb(255,35,140)"
        }, {
            fpl: "rgb(20,80,140)",
            csu: "rgb(30,110,190)",
            vkl: "rgb(20,80,140)",
            djz: "rgb(40,140,255)"
        }, {
            fpl: "rgb(170,110,0)",
            csu: "rgb(210,140,0)",
            vkl: "rgb(170,110,0)",
            djz: "rgb(255,170,0)"
        }, {
            fpl: "rgb(80,120,15)",
            csu: "rgb(130,190,30)",
            vkl: "rgb(80,120,15)",
            djz: "rgb(170,255,30)"
        }, {
            fpl: "rgb(100,0,0)",
            csu: "rgb(190,0,0)",
            vkl: "rgb(100,0,0)",
            djz: "rgb(255,0,0)"
        }, {
            fpl: "rgba(200,200,50,0.7)",
            csu: "rgba(255,255,150,0.7)",
            vkl: "rgba(200,200,50,0.7)",
            djz: "rgba(255,255,150,0.7)"
        }]
    };
    this.aes.backgroundColor = "rgb(200,40,10)";
    this.aes.hik = "rgb(120,10,0)"
}
doq.prototype = new quw();

function qyu() {
    this.type = "800_600";
    this.zoj = true;
    this.cjf = false;
    this.iaa = false;
    this.hbd = true;
    this.okx = false;
    this.oce = false;
    this.bmx = false;
    this.dri = false
}

function rxk() {
    this.zoj = false;
    this.canvas = {
        mvx: new rcu(0, 0, 800, 620)
    };
    this.cht = {
        mvx: new rcu(),
        lgg: 0
    };
    this.bvr = {
        mvx: new rcu(0, 20, 800, 600),
        iej: 0
    };
    this.pfs = {
        rlo: new rcu(0, 40, 440, 36),
        eej: new rcu(5, 2, 140, 30),
        vwg: new rcu(150, 2, 140, 30),
        xui: new rcu(295, 2, 140, 30),
        gvo: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.trt = {
        bvr: {
            mvx: new rcu(0, 0, 500, 360),
            wdw: new rcu(0, 0, 500, 360),
            aie: new rcu(5, 325, 490, 30),
            tyg: new rcu(5, 329, 490, 14),
            xah: new rcu(50, 345, 400, 6),
            yxo: new rcu(5, 285, 490, 70),
            fontSize: 14,
            ied: 18,
            hgm: 5,
            ihx: 12,
            vmp: 5,
            gfa: 2,
            iic: 0,
            mun: {
                mvx: new rcu(),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(),
                tyg: new rcu(),
                eiv: new rcu()
            }
        },
        xmh: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(140, 105, 520, 390),
            aie: new rcu(),
            tyg: new rcu(140, 295, 520, 21),
            xah: new rcu(192, 320, 416, 3),
            yxo: new rcu(140, 275, 520, 95),
            fontSize: 18,
            ied: 24,
            hgm: 0,
            ihx: 12,
            vmp: 7,
            gfa: 3,
            iic: 9,
            mun: {
                mvx: new rcu(400, 459, 0, 3),
                x: 33,
                nfk: 15,
                nnm: 20
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        },
        btb: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(0, 0, 800, 600),
            aie: new rcu(),
            tyg: new rcu(50, 420, 700, 21),
            xah: new rcu(),
            yxo: new rcu(50, 410, 700, 80),
            fontSize: 18,
            ied: 24,
            hgm: 0,
            ihx: 12,
            vmp: 7,
            gfa: 0,
            iic: 0,
            mun: {
                mvx: new rcu(260, 119, 280, 280),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        }
    };
    this.hxc = {
        mvx: new rcu(0, 0, 800, 20),
        fontSize: 12,
        qdm: 19,
        zyo: 15,
        uik: 120,
        ihx: 2,
        vmp: 2,
        hzi: 2,
        uah: 40
    };
    this.uug = {
        mvx: new rcu(0, 20, 800, 70),
        fontSize: 10,
        iwq: 10,
        kxg: 20,
        jyw: 40,
        iej: 4,
        ihx: 10,
        vmp: 5,
        hgm: 10,
        gvo: {
            fontSize: 17,
            hgm: 2
        }
    };
    this.qdn = {
        mvx: new rcu(0, 20, 800, 600),
        rlo: new rcu(),
        gvo: {
            doh: 20,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 8,
            zvt: 8,
            iej: 0
        },
        hhq: new rcu(0, 20, 800, 40),
        rcj: new rcu(0, 100, 800, 40),
        ewa: new rcu(0, 140, 800, 40),
        tcm: new rcu(0, 180, 800, 40),
        xle: new rcu(225, 275, 350, 100),
        wmf: new rcu(200, 480, 400, 40),
        dun: {
            ojq: new rcu(340, 540, 120, 55)
        },
        phk: {
            ojq: new rcu(250, 540, 120, 55),
            dwj: new rcu(430, 540, 120, 55)
        },
        jvg: 36,
        fontSize: 30,
        ylb: 22,
        vmp: 3,
        ihx: 5,
        iej: 2,
        nma: 3,
        oea: 10
    };
    this.whn = {
        mvx: new rcu(-10, 25, 310, 50),
        hhq: new rcu(10, 4, 240, 24),
        tyg: new rcu(10, 28, 240, 18),
        qlp: new rcu(260, 10, 40, 30),
        aol: new rcu(7, 2, 26, 26),
        znj: 16,
        doh: 12,
        xvk: 18
    };
    this.fem = {
        mvx: new rcu(150, 160, 500, 280),
        znj: 26,
        fontSize: 20,
        dub: new rcu(465, 5, 30, 30),
        hhq: new rcu(30, 5, 440, 30),
        wmf: new rcu(20, 40, 460, 160),
        nud: new rcu(20, 230, 460, 40),
        gvo: {
            fontSize: 20
        }
    };
    this.kev = {
        mvx: new rcu(0, 55, 560, 430),
        iej: 2,
        vnt: 0,
        pau: 5,
        jdw: 10,
        znj: 26,
        pcd: 20,
        hhq: new rcu(30, 15, 500, 30),
        xks: new rcu(20, 50, 520, 60),
        xyw: new rcu(40, 60, 220, 40),
        ulo: new rcu(328, 60, 30, 40),
        vjv: new rcu(360, 60, 120, 40),
        zlp: new rcu(482, 60, 30, 40),
        lnl: new rcu(20, 120, 520, 200),
        gsa: new rcu(40, 120, 480, 40),
        edx: new rcu(30, 160, 280, 40),
        ibr: new rcu(328, 160, 30, 40),
        zzi: new rcu(360, 160, 120, 40),
        ght: new rcu(482, 160, 30, 40),
        rpv: new rcu(30, 215, 280, 40),
        rfj: new rcu(328, 215, 30, 40),
        dzk: new rcu(360, 215, 120, 40),
        slq: new rcu(482, 215, 30, 40),
        hki: new rcu(30, 270, 280, 40),
        izs: new rcu(328, 270, 30, 40),
        kld: new rcu(360, 270, 120, 40),
        zet: new rcu(482, 270, 30, 40),
        aie: new rcu(30, 330, 500, 30),
        stl: new rcu(210, 370, 140, 50),
        svf: new rcu(),
        llb: {
            tyg: new rcu(40, 0, 240, 40),
            pcz: new rcu(7, 12, 16, 16),
            fontSize: 20,
            edk: 0,
            iej: 2
        },
        nyu: {
            edk: 3,
            ihx: -5,
            vmp: -1,
            zvt: 6,
            fontSize: 20,
            iej: 0
        },
        alp: {
            edk: 3,
            ihx: 5,
            vmp: 0,
            zvt: 6,
            fontSize: 20,
            iej: 0
        },
        lwv: {
            edk: 6,
            ihx: 0,
            vmp: 0,
            zvt: 6,
            fontSize: 26,
            iej: 2
        },
        display: {
            znj: 16,
            doh: 24,
            hji: 0,
            ngv: 0,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        }
    };
    this.wlc = {
        mvx: [new rcu(2, 20, 130, 46), new rcu(668, 20, 130, 46)],
        display: {
            cba: new rcu(6, 16, 118, 22),
            znj: 14,
            gmb: 20,
            hji: -11,
            kos: 10,
            hgm: 8,
            iej: 3,
            sum: 0,
            rbc: 4
        },
        vqw: {
            mvx: new rcu(50, 130, 700, 300),
            cba: new rcu(),
            znj: 66,
            gmb: 150,
            hji: -90,
            kos: 60,
            hgm: 10,
            iej: 0,
            sum: 0,
            rbc: 0
        },
        hnr: {
            mvx: new rcu(38, 80, 724, 369),
            meo: new rcu(100, 53, 525, 50),
            cba: new rcu(186, 153, 332, 94),
            mio: 340,
            xkb: 30,
            gfz: {
                _0: new rcu(2, 0, 90, 94),
                _1: new rcu(98, 0, 90, 94),
                _2: new rcu(194, 0, 90, 94),
                _3: new rcu(290, 0, 90, 94),
                _4: new rcu(386, 0, 90, 94),
                _5: new rcu(482, 0, 90, 94),
                _6: new rcu(578, 0, 90, 94),
                _7: new rcu(674, 0, 90, 94),
                _8: new rcu(770, 0, 90, 94),
                _9: new rcu(866, 0, 90, 94),
                _cm: new rcu(962, 0, 28, 94),
                _dt: new rcu(999, 0, 28, 94),
                _sp: new rcu(1036, 0, 28, 94)
            }
        }
    }
}
rxk.prototype = new qyu;

function uxy() {
    this.cjf = true
}
uxy.prototype = new rxk;

function msg() {
    this.okx = true;
    this.iaa = true;
    this.zoj = false;
    this.cjf = true;
    this.canvas = {
        mvx: new rcu(0, 0, 800, 1165)
    };
    this.cht = {
        mvx: new rcu(),
        lgg: 0
    };
    this.bvr = {
        mvx: new rcu(0, 550, 800, 615),
        iej: 10
    };
    this.pfs = {
        rlo: new rcu(0, 330, 440, 36),
        eej: new rcu(5, 2, 140, 30),
        vwg: new rcu(150, 2, 140, 30),
        xui: new rcu(295, 2, 140, 30),
        gvo: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.trt = {
        bvr: {
            mvx: new rcu(0, 0, 500, 360),
            wdw: new rcu(0, 0, 500, 360),
            aie: new rcu(5, 325, 490, 30),
            tyg: new rcu(5, 329, 490, 14),
            xah: new rcu(50, 345, 400, 6),
            yxo: new rcu(5, 285, 490, 70),
            fontSize: 14,
            ied: 18,
            hgm: 5,
            ihx: 12,
            vmp: 5,
            gfa: 2,
            iic: 0,
            mun: {
                mvx: new rcu(),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(),
                tyg: new rcu(),
                eiv: new rcu()
            }
        },
        xmh: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(100, 75, 600, 450),
            aie: new rcu(),
            tyg: new rcu(100, 295, 600, 24),
            xah: new rcu(160, 325, 480, 3),
            yxo: new rcu(100, 265, 600, 115),
            fontSize: 21,
            ied: 26,
            hgm: 0,
            ihx: 12,
            vmp: 8,
            gfa: 3,
            iic: 10,
            mun: {
                mvx: new rcu(400, 484, 0, 3),
                x: 38,
                nfk: 17,
                nnm: 23
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        },
        btb: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(0, 0, 800, 600),
            aie: new rcu(),
            tyg: new rcu(50, 420, 700, 21),
            xah: new rcu(),
            yxo: new rcu(50, 410, 700, 80),
            fontSize: 18,
            ied: 24,
            hgm: 0,
            ihx: 12,
            vmp: 7,
            gfa: 0,
            iic: 0,
            mun: {
                mvx: new rcu(260, 119, 280, 280),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        }
    };
    this.top = {
        mvx: new rcu(0, 20, 800, 520)
    };
    this.hxc = {
        mvx: new rcu(0, 0, 800, 20),
        fontSize: 12,
        qdm: 19,
        zyo: 15,
        uik: 120,
        ihx: 2,
        vmp: 2,
        hzi: 2,
        uah: 60
    };
    this.uug = {
        mvx: new rcu(0, 20, 800, 70),
        fontSize: 10,
        iwq: 10,
        kxg: 20,
        jyw: 40,
        iej: 4,
        ihx: 10,
        vmp: 5,
        hgm: 10,
        gvo: {
            fontSize: 17,
            hgm: 2
        }
    };
    this.qdn = {
        mvx: new rcu(0, 550, 800, 615),
        rlo: new rcu(),
        gvo: {
            doh: 26,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 10,
            zvt: 10,
            iej: 2
        },
        hhq: new rcu(0, 20, 800, 40),
        rcj: new rcu(0, 100, 800, 40),
        ewa: new rcu(0, 140, 800, 40),
        tcm: new rcu(0, 180, 800, 40),
        xle: new rcu(225, 275, 350, 100),
        wmf: new rcu(200, 480, 400, 40),
        dun: {
            ojq: new rcu(340, 540, 120, 68)
        },
        phk: {
            ojq: new rcu(250, 540, 120, 68),
            dwj: new rcu(430, 540, 120, 68)
        },
        jvg: 36,
        fontSize: 30,
        ylb: 22,
        vmp: 3,
        ihx: 5,
        iej: 2,
        nma: 3,
        oea: 10,
    };
    this.whn = {
        mvx: new rcu(-10, 545, 310, 50),
        hhq: new rcu(10, 4, 240, 24),
        tyg: new rcu(10, 28, 240, 18),
        qlp: new rcu(260, 10, 40, 30),
        aol: new rcu(7, 2, 26, 26),
        znj: 16,
        doh: 12,
        xvk: 18
    };
    this.fem = {
        mvx: new rcu(150, 690, 500, 280),
        znj: 26,
        fontSize: 20,
        dub: new rcu(465, 5, 30, 30),
        hhq: new rcu(30, 5, 440, 40),
        wmf: new rcu(20, 40, 460, 160),
        nud: new rcu(20, 230, 460, 40),
        gvo: {
            fontSize: 20
        }
    };
    this.kev = {
        mvx: new rcu(0, 585, 560, 430),
        iej: 2,
        vnt: 0,
        pau: 5,
        jdw: 10,
        znj: 26,
        pcd: 20,
        hhq: new rcu(30, 15, 500, 30),
        xks: new rcu(20, 50, 520, 60),
        xyw: new rcu(40, 60, 220, 40),
        ulo: new rcu(328, 60, 30, 40),
        vjv: new rcu(360, 60, 120, 40),
        zlp: new rcu(482, 60, 30, 40),
        lnl: new rcu(20, 120, 520, 200),
        gsa: new rcu(40, 120, 480, 40),
        edx: new rcu(30, 160, 280, 40),
        ibr: new rcu(328, 160, 30, 40),
        zzi: new rcu(360, 160, 120, 40),
        ght: new rcu(482, 160, 30, 40),
        rpv: new rcu(30, 215, 280, 40),
        rfj: new rcu(328, 215, 30, 40),
        dzk: new rcu(360, 215, 120, 40),
        slq: new rcu(482, 215, 30, 40),
        hki: new rcu(30, 270, 280, 40),
        izs: new rcu(328, 270, 30, 40),
        kld: new rcu(360, 270, 120, 40),
        zet: new rcu(482, 270, 30, 40),
        aie: new rcu(30, 330, 500, 30),
        stl: new rcu(210, 370, 140, 50),
        svf: new rcu(),
        llb: {
            tyg: new rcu(40, 0, 240, 40),
            pcz: new rcu(7, 12, 16, 16),
            fontSize: 20,
            edk: 0,
            iej: 2
        },
        nyu: {
            edk: 3,
            ihx: -5,
            vmp: -1,
            zvt: 6,
            fontSize: 20,
            iej: 0
        },
        alp: {
            edk: 3,
            ihx: 5,
            vmp: 0,
            zvt: 6,
            fontSize: 20,
            iej: 0
        },
        lwv: {
            edk: 6,
            ihx: 0,
            vmp: 0,
            zvt: 6,
            fontSize: 26,
            iej: 2
        },
        display: {
            znj: 16,
            doh: 24,
            hji: 0,
            ngv: 0,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        }
    };
    this.wlc = {
        mvx: [new rcu(2, 550, 130, 46), new rcu(668, 550, 130, 46)],
        display: {
            cba: new rcu(6, 16, 118, 23),
            znj: 14,
            gmb: 20,
            hji: -11,
            kos: 10,
            hgm: 8,
            iej: 3,
            sum: 0,
            rbc: 4
        },
        vqw: {
            mvx: new rcu(50, 660, 700, 300),
            cba: new rcu(),
            znj: 66,
            gmb: 150,
            hji: -90,
            kos: 60,
            hgm: 10,
            iej: 0,
            sum: 0,
            rbc: 0
        },
        hnr: {
            mvx: new rcu(38, 610, 724, 369),
            meo: new rcu(100, 53, 525, 50),
            cba: new rcu(186, 153, 332, 94),
            mio: 360,
            xkb: 30,
            gfz: {
                _0: new rcu(2, 0, 90, 94),
                _1: new rcu(98, 0, 90, 94),
                _2: new rcu(194, 0, 90, 94),
                _3: new rcu(290, 0, 90, 94),
                _4: new rcu(386, 0, 90, 94),
                _5: new rcu(482, 0, 90, 94),
                _6: new rcu(578, 0, 90, 94),
                _7: new rcu(674, 0, 90, 94),
                _8: new rcu(770, 0, 90, 94),
                _9: new rcu(866, 0, 90, 94),
                _cm: new rcu(962, 0, 28, 94),
                _dt: new rcu(999, 0, 28, 94),
                _sp: new rcu(1036, 0, 28, 94)
            }
        }
    }
}
msg.prototype = new qyu;

function gbh() {
    this.iaa = true;
    this.canvas = {
        mvx: new rcu(0, 0, 810, 625)
    };
    this.cht = {
        mvx: new rcu(),
        lgg: 0
    };
    this.bvr = {
        mvx: new rcu(5, 20, 800, 600),
        iej: 20
    };
    this.pfs = {
        rlo: new rcu(5, 40, 440, 36),
        eej: new rcu(5, 2, 140, 30),
        vwg: new rcu(150, 2, 140, 30),
        xui: new rcu(295, 2, 140, 30),
        gvo: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.trt = {
        bvr: {
            mvx: new rcu(0, 0, 500, 360),
            wdw: new rcu(0, 0, 500, 360),
            aie: new rcu(5, 325, 490, 30),
            tyg: new rcu(5, 329, 490, 14),
            xah: new rcu(50, 345, 400, 6),
            yxo: new rcu(5, 285, 490, 70),
            fontSize: 14,
            ied: 18,
            hgm: 5,
            ihx: 12,
            vmp: 5,
            gfa: 2,
            iic: 0,
            mun: {
                mvx: new rcu(),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(),
                tyg: new rcu(),
                eiv: new rcu()
            }
        },
        xmh: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(140, 105, 520, 390),
            aie: new rcu(),
            tyg: new rcu(140, 295, 520, 21),
            xah: new rcu(192, 320, 416, 3),
            yxo: new rcu(140, 275, 520, 95),
            fontSize: 18,
            ied: 24,
            hgm: 0,
            ihx: 12,
            vmp: 7,
            gfa: 3,
            iic: 9,
            mun: {
                mvx: new rcu(400, 459, 0, 3),
                x: 33,
                nfk: 15,
                nnm: 20
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        },
        btb: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(0, 0, 800, 600),
            aie: new rcu(),
            tyg: new rcu(50, 420, 700, 21),
            xah: new rcu(),
            yxo: new rcu(50, 410, 700, 80),
            fontSize: 18,
            ied: 24,
            hgm: 0,
            ihx: 12,
            vmp: 7,
            gfa: 0,
            iic: 0,
            mun: {
                mvx: new rcu(260, 119, 280, 280),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        }
    };
    this.hxc = {
        mvx: new rcu(5, 0, 800, 20),
        fontSize: 12,
        qdm: 19,
        zyo: 15,
        uik: 120,
        ihx: 2,
        vmp: 2,
        hzi: 2,
        uah: 40
    };
    this.uug = {
        mvx: new rcu(5, 20, 800, 70),
        fontSize: 10,
        iwq: 10,
        kxg: 20,
        jyw: 40,
        iej: 4,
        ihx: 10,
        vmp: 5,
        hgm: 10,
        gvo: {
            fontSize: 17,
            hgm: 2
        }
    };
    this.qdn = {
        mvx: new rcu(5, 20, 800, 600),
        rlo: new rcu(),
        gvo: {
            doh: 20,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 8,
            zvt: 8,
            iej: 2
        },
        hhq: new rcu(0, 20, 800, 40),
        rcj: new rcu(0, 100, 800, 40),
        ewa: new rcu(0, 140, 800, 40),
        tcm: new rcu(0, 180, 800, 40),
        xle: new rcu(225, 275, 350, 100),
        wmf: new rcu(200, 480, 400, 40),
        dun: {
            ojq: new rcu(340, 540, 120, 55)
        },
        phk: {
            ojq: new rcu(250, 540, 120, 55),
            dwj: new rcu(430, 540, 120, 55)
        },
        jvg: 36,
        fontSize: 30,
        ylb: 22,
        vmp: 3,
        ihx: 5,
        iej: 2,
        nma: 3,
        oea: 10
    };
    this.whn = {
        mvx: new rcu(-10, 25, 310, 50),
        hhq: new rcu(10, 4, 240, 24),
        tyg: new rcu(10, 28, 240, 18),
        qlp: new rcu(260, 10, 40, 30),
        aol: new rcu(7, 2, 26, 26),
        znj: 16,
        doh: 12,
        xvk: 18
    };
    this.fem = {
        mvx: new rcu(155, 160, 500, 280),
        znj: 26,
        fontSize: 20,
        dub: new rcu(465, 5, 30, 30),
        hhq: new rcu(30, 5, 440, 40),
        wmf: new rcu(20, 40, 460, 160),
        nud: new rcu(20, 230, 460, 40),
        gvo: {
            fontSize: 20
        }
    };
    this.kev = {
        mvx: new rcu(5, 55, 560, 430),
        iej: 2,
        vnt: 0,
        pau: 5,
        jdw: 10,
        znj: 26,
        pcd: 20,
        hhq: new rcu(30, 15, 500, 30),
        xks: new rcu(20, 50, 520, 60),
        xyw: new rcu(40, 60, 220, 40),
        ulo: new rcu(328, 60, 30, 40),
        vjv: new rcu(360, 60, 120, 40),
        zlp: new rcu(482, 60, 30, 40),
        lnl: new rcu(20, 120, 520, 200),
        gsa: new rcu(40, 120, 480, 40),
        edx: new rcu(30, 160, 280, 40),
        ibr: new rcu(328, 160, 30, 40),
        zzi: new rcu(360, 160, 120, 40),
        ght: new rcu(482, 160, 30, 40),
        rpv: new rcu(30, 215, 280, 40),
        rfj: new rcu(328, 215, 30, 40),
        dzk: new rcu(360, 215, 120, 40),
        slq: new rcu(482, 215, 30, 40),
        hki: new rcu(30, 270, 280, 40),
        izs: new rcu(328, 270, 30, 40),
        kld: new rcu(360, 270, 120, 40),
        zet: new rcu(482, 270, 30, 40),
        aie: new rcu(30, 330, 500, 30),
        stl: new rcu(210, 370, 140, 50),
        svf: new rcu(),
        llb: {
            tyg: new rcu(40, 0, 240, 40),
            pcz: new rcu(7, 12, 16, 16),
            fontSize: 20,
            edk: 0,
            iej: 2
        },
        nyu: {
            edk: 3,
            ihx: -5,
            vmp: -1,
            zvt: 6,
            fontSize: 20,
            iej: 0
        },
        alp: {
            edk: 3,
            ihx: 5,
            vmp: 0,
            zvt: 6,
            fontSize: 20,
            iej: 0
        },
        lwv: {
            edk: 6,
            ihx: 0,
            vmp: 0,
            zvt: 6,
            fontSize: 26,
            iej: 2
        },
        display: {
            znj: 16,
            doh: 24,
            hji: 0,
            ngv: 0,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        }
    };
    this.wlc = {
        mvx: [new rcu(7, 20, 130, 46), new rcu(673, 20, 130, 46)],
        display: {
            cba: new rcu(6, 16, 118, 22),
            znj: 14,
            gmb: 20,
            hji: -11,
            kos: 10,
            iej: 3,
            hgm: 8,
            sum: 0,
            rbc: 4
        },
        vqw: {
            mvx: new rcu(55, 130, 700, 300),
            cba: new rcu(),
            znj: 66,
            gmb: 150,
            hji: -90,
            kos: 60,
            hgm: 10,
            iej: 0,
            sum: 0,
            rbc: 0
        },
        hnr: {
            mvx: new rcu(43, 80, 724, 369),
            meo: new rcu(100, 53, 525, 50),
            cba: new rcu(186, 153, 332, 94),
            mio: 340,
            xkb: 30,
            gfz: {
                _0: new rcu(2, 0, 90, 94),
                _1: new rcu(98, 0, 90, 94),
                _2: new rcu(194, 0, 90, 94),
                _3: new rcu(290, 0, 90, 94),
                _4: new rcu(386, 0, 90, 94),
                _5: new rcu(482, 0, 90, 94),
                _6: new rcu(578, 0, 90, 94),
                _7: new rcu(674, 0, 90, 94),
                _8: new rcu(770, 0, 90, 94),
                _9: new rcu(866, 0, 90, 94),
                _cm: new rcu(962, 0, 28, 94),
                _dt: new rcu(999, 0, 28, 94),
                _sp: new rcu(1036, 0, 28, 94)
            }
        }
    }
}
gbh.prototype = new qyu;

function ezm() {
    this.cjf = true
}
ezm.prototype = new gbh;

function qgp() {
    this.zoj = false;
    this.oce = true;
    this.hbd = false;
    this.bmx = true;
    this.dri = true;
    this.canvas = {
        mvx: new rcu(0, 0, 960, 600)
    };
    this.cht = {
        mvx: new rcu(),
        lgg: 0,
        wcr: 0
    };
    this.bvr = {
        mvx: new rcu(0, 0, 800, 600),
        iej: 0
    };
    this.pfs = {
        rlo: new rcu(0, 25, 470, 36),
        eej: new rcu(5, 2, 150, 30),
        vwg: new rcu(160, 2, 150, 30),
        xui: new rcu(315, 2, 150, 30),
        gvo: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.trt = {
        bvr: {
            mvx: new rcu(0, 0, 640, 460),
            wdw: new rcu(0, 0, 640, 460),
            aie: new rcu(6, 416, 628, 38),
            tyg: new rcu(6, 420, 628, 17),
            xah: new rcu(64, 442, 512, 7),
            yxo: new rcu(6, 364, 628, 90),
            fontSize: 18,
            ied: 20,
            hgm: 6,
            ihx: 12,
            vmp: 6,
            gfa: 3,
            iic: 0,
            mun: {
                mvx: new rcu(),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(),
                tyg: new rcu(),
                eiv: new rcu()
            }
        },
        xmh: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(100, 75, 600, 450),
            aie: new rcu(),
            tyg: new rcu(100, 295, 600, 24),
            xah: new rcu(160, 325, 480, 3),
            yxo: new rcu(100, 265, 600, 115),
            fontSize: 21,
            ied: 26,
            hgm: 0,
            ihx: 12,
            vmp: 8,
            gfa: 3,
            iic: 10,
            mun: {
                mvx: new rcu(400, 484, 0, 3),
                x: 38,
                nfk: 17,
                nnm: 23
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 430, 600, 60),
                eiv: new rcu(200, 510, 400, 40)
            }
        },
        btb: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(0, 0, 800, 600),
            aie: new rcu(),
            tyg: new rcu(50, 420, 700, 21),
            xah: new rcu(),
            yxo: new rcu(50, 410, 700, 80),
            fontSize: 18,
            ied: 24,
            hgm: 0,
            ihx: 12,
            vmp: 7,
            gfa: 0,
            iic: 0,
            mun: {
                mvx: new rcu(260, 119, 280, 280),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        }
    };
    this.hxc = {};
    this.uug = {};
    this.qdn = {
        mvx: new rcu(0, 0, 960, 600),
        rlo: new rcu(800, 0, 160, 600),
        gvo: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 8,
            edk: 16,
            iej: 4
        },
        hhq: new rcu(0, 20, 800, 40),
        rcj: new rcu(0, 100, 800, 40),
        ewa: new rcu(0, 140, 800, 40),
        tcm: new rcu(0, 180, 800, 40),
        xle: new rcu(225, 275, 350, 100),
        wmf: new rcu(200, 480, 400, 40),
        dun: {
            ojq: new rcu(815, 410, 130, 130),
        },
        phk: {
            ojq: new rcu(815, 310, 130, 130),
            dwj: new rcu(815, 120, 130, 130)
        },
        jvg: 36,
        fontSize: 30,
        ylb: 22,
        vmp: 3,
        ihx: 5,
        iej: 2,
        nma: 3,
        oea: 10
    };
    this.aes = {
        mvx: new rcu(0, 0, 960, 600),
        iej: 0,
        edk: 0,
        mfg: 50,
        gmg: 30,
        pcd: 30,
        cth: new rcu(70, 170, 470, 70),
        gsk: new rcu(560, 170, 60, 70),
        bsj: new rcu(622, 170, 210, 70),
        qja: new rcu(834, 170, 60, 70),
        yqq: new rcu(70, 310, 470, 70),
        yyb: new rcu(560, 310, 60, 70),
        sbt: new rcu(622, 310, 210, 70),
        zvc: new rcu(834, 310, 60, 70),
        wmv: new rcu(70, 450, 470, 70),
        ldm: new rcu(622, 450, 210, 70),
        djm: new rcu(90, 530, 780, 50),
        xyw: new rcu(80, 120, 470, 60),
        ulo: new rcu(570, 120, 50, 60),
        vjv: new rcu(622, 120, 210, 60),
        zlp: new rcu(834, 120, 50, 60),
        xlf: new rcu(90, 200, 780, 70),
        edx: new rcu(80, 280, 470, 60),
        ibr: new rcu(570, 280, 50, 60),
        zzi: new rcu(622, 280, 210, 60),
        ght: new rcu(834, 280, 50, 60),
        rpv: new rcu(80, 360, 470, 60),
        rfj: new rcu(570, 360, 50, 60),
        dzk: new rcu(622, 360, 210, 60),
        slq: new rcu(834, 360, 50, 60),
        hki: new rcu(80, 440, 470, 60),
        izs: new rcu(570, 440, 50, 60),
        kld: new rcu(622, 440, 210, 60),
        zet: new rcu(834, 440, 50, 60),
        aie: new rcu(90, 530, 780, 50),
        lje: {
            hcm: new rcu(0, 10, 240, 90),
            div: new rcu(240, 10, 240, 90),
            cdi: new rcu(480, 10, 240, 90),
            wts: new rcu(720, 10, 240, 90)
        },
        bbi: {
            hcm: new rcu(0, 10, 192, 90),
            yki: new rcu(192, 10, 192, 90),
            div: new rcu(384, 10, 192, 90),
            cdi: new rcu(576, 10, 192, 90),
            wts: new rcu(768, 10, 192, 90)
        },
        mef: [new rcu(190, 205, 200, 160), new rcu(570, 205, 200, 160)],
        xpz: [new rcu(90, 205, 200, 160), new rcu(380, 205, 200, 160), new rcu(670, 205, 200, 160)],
        dsk: [new rcu(190, 130, 200, 160), new rcu(570, 130, 200, 160), new rcu(190, 360, 200, 160), new rcu(570, 360, 200, 160)],
        jwj: [new rcu(90, 130, 200, 160), new rcu(380, 130, 200, 160), new rcu(670, 130, 200, 160), new rcu(90, 360, 200, 160), new rcu(380, 360, 200, 160), new rcu(670, 360, 200, 160)],
        nyu: {
            edk: 3,
            ihx: -10,
            vmp: -1,
            zvt: 6,
            fontSize: 36,
            iej: 0,
        },
        alp: {
            edk: 3,
            ihx: 10,
            vmp: -1,
            zvt: 6,
            fontSize: 36,
            iej: 0,
        },
        tgv: {
            fontSize: 36,
            ihx: 0,
            vmp: 0,
            zvt: 10,
            edk: 0,
            iej: 0
        },
        wnj: {
            fontSize: 26,
            hgm: 5,
            edk: 26,
            iej: 4,
            emx: 40
        },
        fie: {
            znj: 16,
            doh: 40,
            hji: 0,
            ngv: 0,
            iej: 2,
            hgm: 3
        },
        efn: {
            znj: 16,
            doh: 40,
            hji: 0,
            ngv: 0,
            iej: 2,
            hgm: 3
        },
        llb: {
            tyg: new rcu(50, 0, 360, 60),
            pcz: new rcu(0, 13, 30, 30),
            fontSize: 30,
            edk: 0,
            iej: 2
        }
    };
    this.whn = {
        mvx: new rcu(-10, 5, 310, 60),
        hhq: new rcu(10, 6, 240, 26),
        tyg: new rcu(10, 34, 240, 20),
        qlp: new rcu(255, 11, 50, 38),
        aol: new rcu(8, 2, 34, 34),
        znj: 16,
        doh: 12,
        xvk: 24
    };
    this.fem = {
        mvx: new rcu(200, 135, 560, 330),
        znj: 26,
        fontSize: 20,
        dub: new rcu(515, 5, 40, 40),
        hhq: new rcu(40, 0, 480, 30),
        wmf: new rcu(20, 40, 520, 195),
        nud: new rcu(20, 265, 520, 54),
        gvo: {
            fontSize: 20
        }
    };
    this.wlc = {
        mvx: [new rcu(2, 0, 130, 46), new rcu(668, 0, 130, 46)],
        display: {
            cba: new rcu(6, 16, 118, 23),
            znj: 14,
            gmb: 20,
            hji: -11,
            kos: 10,
            hgm: 8,
            iej: 3,
            sum: 0,
            rbc: 4
        },
        vqw: {
            mvx: new rcu(50, 110, 700, 300),
            cba: new rcu(),
            znj: 66,
            gmb: 150,
            hji: -90,
            kos: 60,
            hgm: 10,
            iej: 0,
            sum: 0,
            rbc: 0
        },
        hnr: {
            mvx: new rcu(38, 60, 724, 369),
            meo: new rcu(100, 53, 525, 50),
            cba: new rcu(186, 153, 332, 94),
            mio: 340,
            xkb: 30,
            gfz: {
                _0: new rcu(2, 0, 90, 94),
                _1: new rcu(98, 0, 90, 94),
                _2: new rcu(194, 0, 90, 94),
                _3: new rcu(290, 0, 90, 94),
                _4: new rcu(386, 0, 90, 94),
                _5: new rcu(482, 0, 90, 94),
                _6: new rcu(578, 0, 90, 94),
                _7: new rcu(674, 0, 90, 94),
                _8: new rcu(770, 0, 90, 94),
                _9: new rcu(866, 0, 90, 94),
                _cm: new rcu(962, 0, 28, 94),
                _dt: new rcu(999, 0, 28, 94),
                _sp: new rcu(1036, 0, 28, 94)
            }
        }
    }
}
qgp.prototype = new qyu;

function qyq() {
    this.zoj = false;
    this.oce = true;
    this.hbd = false;
    this.bmx = true;
    this.dri = true;
    this.canvas = {
        mvx: new rcu(0, 0, 960, 600)
    };
    this.cht = {
        mvx: new rcu(),
        lgg: 0,
        wcr: 0
    };
    this.bvr = {
        mvx: new rcu(160, 0, 800, 600),
        iej: 0
    };
    this.pfs = {
        rlo: new rcu(490, 25, 470, 36),
        eej: new rcu(5, 4, 150, 30),
        vwg: new rcu(160, 4, 150, 30),
        xui: new rcu(315, 4, 150, 30),
        gvo: {
            fontSize: 15,
            textIndent: 30
        }
    };
    this.trt = {
        bvr: {
            mvx: new rcu(0, 0, 640, 460),
            wdw: new rcu(0, 0, 640, 460),
            aie: new rcu(6, 416, 628, 38),
            tyg: new rcu(6, 420, 628, 17),
            xah: new rcu(64, 442, 512, 7),
            yxo: new rcu(6, 364, 628, 90),
            fontSize: 18,
            ied: 20,
            hgm: 6,
            ihx: 12,
            vmp: 6,
            gfa: 3,
            iic: 0,
            mun: {
                mvx: new rcu(),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(),
                tyg: new rcu(),
                eiv: new rcu()
            }
        },
        xmh: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(100, 75, 600, 450),
            aie: new rcu(),
            tyg: new rcu(100, 295, 600, 24),
            xah: new rcu(160, 325, 480, 3),
            yxo: new rcu(100, 265, 600, 115),
            fontSize: 21,
            ied: 26,
            hgm: 0,
            ihx: 12,
            vmp: 8,
            gfa: 3,
            iic: 10,
            mun: {
                mvx: new rcu(400, 484, 0, 3),
                x: 38,
                nfk: 17,
                nnm: 23
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 430, 600, 60),
                eiv: new rcu(200, 510, 400, 40)
            }
        },
        btb: {
            mvx: new rcu(0, 0, 800, 600),
            wdw: new rcu(0, 0, 800, 600),
            aie: new rcu(),
            tyg: new rcu(50, 420, 700, 21),
            xah: new rcu(),
            yxo: new rcu(50, 410, 700, 80),
            fontSize: 18,
            ied: 24,
            hgm: 0,
            ihx: 12,
            vmp: 7,
            gfa: 0,
            iic: 0,
            mun: {
                mvx: new rcu(260, 119, 280, 280),
                x: 0,
                nfk: 0,
                nnm: 0
            },
            wuz: {
                wdw: new rcu(50, 0, 700, 450),
                tyg: new rcu(100, 460, 600, 60),
                eiv: new rcu(200, 540, 400, 40)
            }
        }
    };
    this.hxc = {};
    this.uug = {};
    this.qdn = {
        mvx: new rcu(0, 0, 960, 600),
        rlo: new rcu(0, 0, 160, 600),
        gvo: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 8,
            edk: 16,
            iej: 4
        },
        hhq: new rcu(160, 20, 800, 40),
        rcj: new rcu(160, 100, 800, 40),
        ewa: new rcu(160, 140, 800, 40),
        tcm: new rcu(160, 180, 800, 40),
        xle: new rcu(385, 275, 350, 100),
        wmf: new rcu(360, 480, 400, 40),
        dun: {
            ojq: new rcu(15, 410, 130, 130),
        },
        phk: {
            ojq: new rcu(15, 310, 130, 130),
            dwj: new rcu(15, 120, 130, 130)
        },
        jvg: 36,
        fontSize: 30,
        ylb: 22,
        vmp: 3,
        ihx: 5,
        iej: 2,
        nma: 3,
        oea: 10
    };
    this.aes = {
        mvx: new rcu(0, 0, 960, 600),
        iej: 0,
        edk: 0,
        mfg: 50,
        gmg: 30,
        pcd: 30,
        cth: new rcu(70, 170, 470, 70),
        gsk: new rcu(560, 170, 60, 70),
        bsj: new rcu(622, 170, 210, 70),
        qja: new rcu(834, 170, 60, 70),
        yqq: new rcu(70, 310, 470, 70),
        yyb: new rcu(560, 310, 60, 70),
        sbt: new rcu(622, 310, 210, 70),
        zvc: new rcu(834, 310, 60, 70),
        wmv: new rcu(70, 450, 470, 70),
        ldm: new rcu(622, 450, 210, 70),
        djm: new rcu(90, 530, 780, 50),
        xyw: new rcu(80, 120, 470, 60),
        ulo: new rcu(570, 120, 50, 60),
        vjv: new rcu(622, 120, 210, 60),
        zlp: new rcu(834, 120, 50, 60),
        xlf: new rcu(90, 200, 780, 70),
        edx: new rcu(80, 280, 470, 60),
        ibr: new rcu(570, 280, 50, 60),
        zzi: new rcu(622, 280, 210, 60),
        ght: new rcu(834, 280, 50, 60),
        rpv: new rcu(80, 360, 470, 60),
        rfj: new rcu(570, 360, 50, 60),
        dzk: new rcu(622, 360, 210, 60),
        slq: new rcu(834, 360, 50, 60),
        hki: new rcu(80, 440, 470, 60),
        izs: new rcu(570, 440, 50, 60),
        kld: new rcu(622, 440, 210, 60),
        zet: new rcu(834, 440, 50, 60),
        aie: new rcu(90, 530, 780, 50),
        lje: {
            hcm: new rcu(0, 10, 240, 90),
            div: new rcu(240, 10, 240, 90),
            cdi: new rcu(480, 10, 240, 90),
            wts: new rcu(720, 10, 240, 90)
        },
        bbi: {
            hcm: new rcu(0, 10, 192, 90),
            yki: new rcu(192, 10, 192, 90),
            div: new rcu(384, 10, 192, 90),
            cdi: new rcu(576, 10, 192, 90),
            wts: new rcu(768, 10, 192, 90)
        },
        mef: [new rcu(190, 205, 200, 160), new rcu(570, 205, 200, 160)],
        xpz: [new rcu(90, 205, 200, 160), new rcu(380, 205, 200, 160), new rcu(670, 205, 200, 160)],
        dsk: [new rcu(190, 130, 200, 160), new rcu(570, 130, 200, 160), new rcu(190, 360, 200, 160), new rcu(570, 360, 200, 160)],
        jwj: [new rcu(90, 130, 200, 160), new rcu(380, 130, 200, 160), new rcu(670, 130, 200, 160), new rcu(90, 360, 200, 160), new rcu(380, 360, 200, 160), new rcu(670, 360, 200, 160)],
        nyu: {
            edk: 3,
            ihx: -10,
            vmp: -1,
            zvt: 6,
            fontSize: 36,
            iej: 0,
        },
        alp: {
            edk: 3,
            ihx: 10,
            vmp: -1,
            zvt: 6,
            fontSize: 36,
            iej: 0,
        },
        tgv: {
            fontSize: 36,
            ihx: 0,
            vmp: 0,
            zvt: 10,
            edk: 0,
            iej: 0
        },
        wnj: {
            fontSize: 26,
            hgm: 5,
            edk: 26,
            iej: 4,
            emx: 40
        },
        fie: {
            znj: 16,
            doh: 40,
            hji: 0,
            ngv: 0,
            iej: 2,
            hgm: 3
        },
        efn: {
            znj: 16,
            doh: 40,
            hji: 0,
            ngv: 0,
            iej: 2,
            hgm: 3
        },
        llb: {
            tyg: new rcu(50, 0, 360, 60),
            pcz: new rcu(0, 13, 30, 30),
            fontSize: 30,
            edk: 0,
            iej: 2
        }
    };
    this.whn = {
        mvx: new rcu(660, 5, 310, 60),
        hhq: new rcu(60, 6, 240, 26),
        tyg: new rcu(60, 34, 240, 20),
        qlp: new rcu(5, 11, 50, 38),
        aol: new rcu(8, 2, 34, 34),
        znj: 16,
        doh: 12,
        xvk: 24
    };
    this.fem = {
        mvx: new rcu(200, 135, 560, 330),
        znj: 26,
        fontSize: 20,
        dub: new rcu(515, 5, 40, 40),
        hhq: new rcu(40, 5, 480, 30),
        wmf: new rcu(20, 40, 520, 195),
        nud: new rcu(20, 265, 520, 54),
        gvo: {
            fontSize: 20
        }
    };
    this.wlc = {
        mvx: [new rcu(162, 0, 130, 46), new rcu(828, 0, 130, 46)],
        display: {
            cba: new rcu(6, 16, 118, 23),
            znj: 14,
            gmb: 20,
            hji: -11,
            kos: 10,
            hgm: 8,
            iej: 3,
            sum: 0,
            rbc: 4
        },
        vqw: {
            mvx: new rcu(210, 110, 700, 300),
            cba: new rcu(),
            znj: 66,
            gmb: 150,
            hji: -90,
            kos: 60,
            hgm: 10,
            iej: 0,
            sum: 0,
            rbc: 0
        },
        hnr: {
            mvx: new rcu(198, 60, 724, 369),
            meo: new rcu(100, 53, 525, 50),
            cba: new rcu(186, 153, 332, 94),
            mio: 340,
            xkb: 30,
            gfz: {
                _0: new rcu(2, 0, 90, 94),
                _1: new rcu(98, 0, 90, 94),
                _2: new rcu(194, 0, 90, 94),
                _3: new rcu(290, 0, 90, 94),
                _4: new rcu(386, 0, 90, 94),
                _5: new rcu(482, 0, 90, 94),
                _6: new rcu(578, 0, 90, 94),
                _7: new rcu(674, 0, 90, 94),
                _8: new rcu(770, 0, 90, 94),
                _9: new rcu(866, 0, 90, 94),
                _cm: new rcu(962, 0, 28, 94),
                _dt: new rcu(999, 0, 28, 94),
                _sp: new rcu(1036, 0, 28, 94)
            }
        }
    }
}
qyq.prototype = new qyu;

function uxe() {
    this.gzv = true;
    this.nnk = true;
    this.ryg = true;
    this.cht = {
        mvx: new rcu(0, 20, 800, 600),
        lgg: 0,
        wcr: 0
    };
    this.bob = {
        mvx: new rcu(0, 20, 800, 600),
        lgg: -20,
        wcr: 0
    };
    this.wns = {
        mvx: new rcu(40, 110, 136, 360),
        fyj: new rcu(40, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.qbv = {
        mvx: new rcu(186, 110, 136, 360),
        fyj: new rcu(186, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.jse = {
        mvx: new rcu(332, 110, 136, 360),
        fyj: new rcu(332, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.llp = {
        mvx: new rcu(478, 110, 136, 360),
        fyj: new rcu(478, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.oct = {
        mvx: new rcu(624, 110, 136, 360),
        fyj: new rcu(624, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.mfu = {
        mvx: new rcu(0, 20, 800, 86),
        fontSize: 50,
        ihx: 0,
        vmp: 6,
        hgm: 0,
        qgw: 2
    };
    this.npa = {
        mvx: new rcu(0, 20, 800, 80),
        fontSize: 50,
        ihx: 0,
        vmp: 8,
        hgm: 0,
        qgw: 2
    };
    this.oqb = {
        mvx: new rcu(4, 110, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.kcr = {
        mvx: new rcu(766, 110, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.gfy = {
        mvx: new rcu(710, 35, 90, 450),
        hhq: new rcu(5, 5, 80, 15),
        ygs: new rcu(55, 25, 30, 410),
        fontSize: 15,
        nbs: 20,
        iej: 2,
        edk: 5,
        avm: 4,
        hkd: 10,
        qeg: 5
    };
    this.gea = {
        mvx: new rcu(0, 35, 90, 450),
        hhq: new rcu(5, 5, 80, 15),
        ygs: new rcu(5, 25, 30, 410),
        fontSize: 15,
        nbs: 20,
        iej: 2,
        edk: 5,
        avm: 4,
        hkd: 10,
        qeg: 5
    };
    this.pcs = {
        mvx: new rcu(0, 20, 800, 600),
        rlo: new rcu(0, 540, 800, 60),
        dwj: new rcu(711, 544, 73, 53),
        dhw: new rcu(11, 544, 73, 53),
        wxe: new rcu(316, 544, 73, 53),
        rql: new rcu(411, 544, 73, 53),
        gvo: {
            doh: 16,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 6,
            edk: 8,
            iej: 2
        }
    };
    this.eil = {
        mvx: new rcu(0, 20, 800, 600),
        rlo: new rcu(0, 485, 800, 115),
        uxc: {
            mvx: new rcu(187, 489, 470, 40),
            fontSize: 18,
            vmp: 14,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        qgb: {
            mvx: new rcu(331, 216, 137, 187),
            tyg: new rcu(5, 8, 56, 34),
            cba: new rcu(37, 3, 98, 104),
            nnd: new rcu(33, 110, 72, 76),
            hdx: new rcu(10, 42, 45, 45),
            wdg: new rcu(5, 120, 126, 50),
            fontSize: 34,
            xms: 50,
            hgm: 3,
            teb: 4
        },
        odx: {
            mvx: new rcu(380, 105, 380, 45),
            cbv: 2
        },
        gvo: {
            doh: 18,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 8,
            edk: 10,
            iej: 2
        },
        display: {
            hji: -12,
            ngv: 11,
            doh: 26,
            znj: 15,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(),
        bct: new rcu(),
        fgy: new rcu(415, 544, 110, 53),
        wtp: new rcu(275, 544, 110, 53),
        wdg: new rcu(689, 485, 106, 48),
        chz: new rcu(5, 485, 150, 48),
        cre: new rcu(73, 315, 91, 96),
        lon: new rcu(166, 315, 91, 96),
        zir: new rcu(542, 315, 91, 96),
        wxm: new rcu(635, 315, 91, 96),
        hix: new rcu(73, 218, 184, 92),
        boi: new rcu(542, 218, 184, 92),
        iwe: new rcu(65, 170, 200, 50),
        gmt: new rcu(509, 170, 250, 50),
        kqk: new rcu(534, 410, 200, 50)
    };
    this.vvk = {
        mvx: new rcu(0, 475, 800, 145),
        pej: new rcu(0, 0, 800, 145),
        zxj: new rcu(),
        uxc: {
            mvx: new rcu(187, 34, 470, 40),
            vmp: 14,
            fontSize: 18,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        win: {
            mvx: new rcu(45, 2, 710, 25),
            fontSize: 20,
            vmp: 4,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 0
        },
        qzw: {
            mvx: new rcu(187, 51, 470, 70),
            qeg: 10,
            ngv: 2,
            fontSize: 24,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        ogd: {
            doh: 22,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 10,
            zvt: 8,
            iej: 2
        },
        zky: {
            doh: 16,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 8,
            zvt: 8,
            iej: 2
        },
        jpr: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            edk: 0,
            zvt: 0,
            iej: 0,
            ngv: 0,
            kos: 0
        },
        ltn: {
            doh: 16,
            gmb: 16,
            ihx: 0,
            edk: 8,
            zvt: 6,
            iej: 2,
            ngv: 24,
            kos: -24
        },
        display: {
            hji: -12,
            ngv: 11,
            doh: 26,
            znj: 15,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gca: {
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        gkx: {
            mvx: new rcu(),
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(),
        bct: new rcu(),
        pzb: new rcu(5, 30, 150, 48),
        wxu: new rcu(689, 30, 106, 48),
        ide: new rcu(),
        lsh: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(492, 89, 80, 53),
            yhx: new rcu(382, 89, 80, 53),
            dwj: new rcu(272, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        mwz: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(532, 89, 80, 53),
            rya: new rcu(432, 89, 80, 53),
            yhx: new rcu(332, 89, 80, 53),
            dwj: new rcu(232, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        lde: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(532, 89, 80, 53),
            lki: new rcu(432, 89, 80, 53),
            yhx: new rcu(332, 89, 80, 53),
            dwj: new rcu(232, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        kef: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(562, 89, 80, 53),
            lki: new rcu(472, 89, 80, 53),
            rya: new rcu(382, 89, 80, 53),
            yhx: new rcu(292, 89, 80, 53),
            dwj: new rcu(202, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        lix: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(492, 89, 80, 53),
            lki: new rcu(382, 89, 80, 53),
            yhx: new rcu(272, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        nao: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(532, 89, 80, 53),
            lki: new rcu(432, 89, 80, 53),
            rya: new rcu(332, 89, 80, 53),
            yhx: new rcu(232, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        men: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(492, 89, 80, 53),
            yhx: new rcu(382, 89, 80, 53),
            dwj: new rcu(272, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        cfx: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(532, 89, 80, 53),
            rya: new rcu(432, 89, 80, 53),
            yhx: new rcu(332, 89, 80, 53),
            dwj: new rcu(232, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        ods: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        cxj: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        wej: 60
    };
    this.mun = {
        mvx: new rcu(40, 110, 720, 360),
        lineWidth: 4,
        gah: 5,
        iej: 1,
        kox: 136,
        szy: 120,
        fontSize: 40,
        sug: 10,
        gkt: 5,
        asz: 100,
        npj: 96,
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
    this.vad = [
        [87, 290, 713, 290],
        [87, 170, 713, 170],
        [87, 410, 713, 410],
        [87, 170, 112, 170, 400, 410, 688, 170, 713, 170],
        [87, 410, 112, 410, 400, 170, 688, 410, 713, 410]
    ]
}
uxe.prototype = new rxk;

function yaf() {
    this.cjf = true
}
yaf.prototype = new uxe;

function gpi() {
    this.gzv = true;
    this.nnk = true;
    this.ryg = true;
    this.cht = {
        mvx: new rcu(0, 550, 800, 600),
        lgg: -14,
        wcr: 0
    };
    this.bob = {
        mvx: new rcu(0, 550, 800, 600),
        lgg: -550,
        wcr: 0
    };
    this.wns = {
        mvx: new rcu(40, 640, 136, 360),
        fyj: new rcu(40, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.qbv = {
        mvx: new rcu(186, 640, 136, 360),
        fyj: new rcu(186, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.jse = {
        mvx: new rcu(332, 640, 136, 360),
        fyj: new rcu(332, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.llp = {
        mvx: new rcu(478, 640, 136, 360),
        fyj: new rcu(478, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.oct = {
        mvx: new rcu(624, 640, 136, 360),
        fyj: new rcu(624, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.mfu = {
        mvx: new rcu(0, 550, 800, 86),
        fontSize: 50,
        ihx: 0,
        vmp: 6,
        hgm: 0,
        qgw: 2
    };
    this.npa = {
        mvx: new rcu(0, 550, 800, 80),
        fontSize: 50,
        ihx: 0,
        vmp: 8,
        hgm: 0,
        qgw: 2
    };
    this.oqb = {
        mvx: new rcu(4, 640, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.kcr = {
        mvx: new rcu(766, 640, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.gfy = {
        mvx: new rcu(710, 565, 90, 450),
        hhq: new rcu(5, 5, 80, 15),
        ygs: new rcu(55, 25, 30, 410),
        fontSize: 15,
        nbs: 20,
        iej: 2,
        edk: 5,
        avm: 4,
        hkd: 10,
        qeg: 5
    };
    this.gea = {
        mvx: new rcu(0, 565, 90, 450),
        hhq: new rcu(5, 5, 80, 15),
        ygs: new rcu(5, 25, 30, 410),
        fontSize: 15,
        nbs: 20,
        iej: 2,
        edk: 5,
        avm: 4,
        hkd: 10,
        qeg: 5
    };
    this.pcs = {
        mvx: new rcu(0, 550, 800, 615),
        rlo: new rcu(0, 540, 800, 75),
        dwj: new rcu(695, 544, 90, 68),
        dhw: new rcu(11, 544, 90, 68),
        wxe: new rcu(295, 544, 90, 68),
        rql: new rcu(415, 544, 90, 68),
        gvo: {
            doh: 21,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 8,
            edk: 10,
            iej: 2
        }
    };
    this.eil = {
        mvx: new rcu(0, 550, 800, 615),
        rlo: new rcu(0, 485, 800, 130),
        uxc: {
            mvx: new rcu(187, 489, 470, 40),
            fontSize: 18,
            vmp: 14,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        qgb: {
            mvx: new rcu(331, 216, 137, 187),
            tyg: new rcu(5, 8, 56, 34),
            cba: new rcu(37, 3, 98, 104),
            nnd: new rcu(33, 110, 72, 76),
            hdx: new rcu(10, 42, 45, 45),
            wdg: new rcu(5, 120, 126, 50),
            fontSize: 34,
            xms: 50,
            hgm: 3,
            teb: 4
        },
        odx: {
            mvx: new rcu(380, 105, 380, 45),
            cbv: 2
        },
        gvo: {
            doh: 23,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 10,
            edk: 12,
            iej: 2
        },
        display: {
            hji: -12,
            ngv: 11,
            doh: 26,
            znj: 15,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(),
        bct: new rcu(),
        fgy: new rcu(415, 544, 120, 68),
        wtp: new rcu(265, 544, 120, 68),
        wdg: new rcu(689, 485, 106, 48),
        chz: new rcu(5, 485, 150, 48),
        cre: new rcu(73, 315, 91, 96),
        lon: new rcu(166, 315, 91, 96),
        zir: new rcu(542, 315, 91, 96),
        wxm: new rcu(635, 315, 91, 96),
        hix: new rcu(73, 218, 184, 92),
        boi: new rcu(542, 218, 184, 92),
        iwe: new rcu(65, 170, 200, 50),
        gmt: new rcu(509, 170, 250, 50),
        kqk: new rcu(534, 410, 200, 50)
    };
    this.vvk = {
        mvx: new rcu(0, 1005, 800, 160),
        pej: new rcu(0, 0, 800, 160),
        zxj: new rcu(),
        uxc: {
            mvx: new rcu(187, 34, 470, 40),
            vmp: 14,
            fontSize: 18,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        win: {
            mvx: new rcu(45, 2, 710, 25),
            fontSize: 20,
            vmp: 4,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 0
        },
        qzw: {
            mvx: new rcu(187, 58, 470, 70),
            qeg: 10,
            ngv: 2,
            fontSize: 24,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        ogd: {
            doh: 28,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 12,
            zvt: 10,
            iej: 2
        },
        zky: {
            doh: 21,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 10,
            zvt: 8,
            iej: 2
        },
        jpr: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            edk: 0,
            zvt: 0,
            iej: 0,
            ngv: 0,
            kos: 0
        },
        ltn: {
            doh: 21,
            gmb: 21,
            ihx: 0,
            edk: 8,
            zvt: 6,
            iej: 2,
            ngv: 30,
            kos: -32
        },
        display: {
            hji: -12,
            ngv: 11,
            doh: 26,
            znj: 15,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gca: {
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(),
        bct: new rcu(),
        pzb: new rcu(5, 30, 150, 48),
        wxu: new rcu(689, 30, 106, 48),
        ide: new rcu(),
        lsh: {
            eiv: new rcu(675, 89, 120, 68),
            lki: new rcu(486, 89, 100, 68),
            yhx: new rcu(371, 89, 100, 68),
            dwj: new rcu(256, 89, 100, 68),
            pkf: new rcu(20, 89, 120, 68),
            opc: new rcu()
        },
        mwz: {
            eiv: new rcu(675, 89, 120, 68),
            lki: new rcu(536, 89, 100, 68),
            rya: new rcu(426, 89, 100, 68),
            yhx: new rcu(316, 89, 100, 68),
            dwj: new rcu(206, 89, 100, 68),
            pkf: new rcu(20, 89, 120, 68),
            opc: new rcu()
        },
        lde: {
            eiv: new rcu(675, 89, 120, 68),
            pkf: new rcu(536, 89, 100, 68),
            lki: new rcu(426, 89, 100, 68),
            yhx: new rcu(316, 89, 100, 68),
            dwj: new rcu(206, 89, 100, 68),
            xpm: new rcu(30, 89, 100, 68),
            opc: new rcu()
        },
        kef: {
            eiv: new rcu(678, 89, 120, 68),
            pkf: new rcu(576, 89, 90, 68),
            lki: new rcu(476, 89, 90, 68),
            rya: new rcu(376, 89, 90, 68),
            yhx: new rcu(276, 89, 90, 68),
            dwj: new rcu(176, 89, 90, 68),
            xpm: new rcu(35, 89, 90, 68),
            opc: new rcu()
        },
        lix: {
            eiv: new rcu(675, 89, 120, 68),
            pkf: new rcu(486, 89, 100, 68),
            lki: new rcu(371, 89, 100, 68),
            yhx: new rcu(256, 89, 100, 68),
            xpm: new rcu(30, 89, 100, 68),
            opc: new rcu()
        },
        nao: {
            eiv: new rcu(675, 89, 120, 68),
            pkf: new rcu(536, 89, 100, 68),
            lki: new rcu(426, 89, 100, 68),
            rya: new rcu(316, 89, 100, 68),
            yhx: new rcu(206, 89, 100, 68),
            xpm: new rcu(30, 89, 100, 68),
            opc: new rcu()
        },
        men: {
            eiv: new rcu(675, 89, 120, 68),
            lki: new rcu(486, 89, 100, 68),
            yhx: new rcu(371, 89, 100, 68),
            dwj: new rcu(256, 89, 100, 68),
            pkf: new rcu(20, 89, 120, 68),
            opc: new rcu()
        },
        cfx: {
            eiv: new rcu(675, 89, 120, 68),
            lki: new rcu(536, 89, 100, 68),
            rya: new rcu(426, 89, 100, 68),
            yhx: new rcu(316, 89, 100, 68),
            dwj: new rcu(206, 89, 100, 68),
            pkf: new rcu(20, 89, 120, 68),
            opc: new rcu()
        },
        ods: {
            eiv: new rcu(675, 90, 120, 68),
            pkf: new rcu(20, 90, 120, 68),
            opc: new rcu()
        },
        cxj: {
            eiv: new rcu(675, 90, 120, 68),
            pkf: new rcu(20, 90, 120, 68),
            opc: new rcu()
        },
        wej: 60
    };
    this.mun = {
        mvx: new rcu(40, 640, 720, 360),
        lineWidth: 4,
        gah: 5,
        iej: 1,
        kox: 136,
        szy: 120,
        fontSize: 40,
        sug: 10,
        gkt: 5,
        asz: 100,
        npj: 96,
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
    this.vad = [
        [87, 820, 713, 820],
        [87, 700, 713, 700],
        [87, 940, 713, 940],
        [87, 700, 112, 700, 400, 940, 688, 700, 713, 700],
        [87, 940, 112, 940, 400, 700, 688, 940, 713, 940]
    ];
    this.top = {
        mvx: new rcu(0, 20, 800, 520)
    }
}
gpi.prototype = new msg;

function nbz() {
    this.gzv = true;
    this.nnk = true;
    this.ryg = true;
    this.cht = {
        mvx: new rcu(5, 20, 800, 600),
        lgg: 0,
        wcr: -10
    };
    this.bob = {
        mvx: new rcu(5, 20, 800, 600),
        lgg: -20,
        wcr: -5
    };
    this.wns = {
        mvx: new rcu(45, 110, 136, 360),
        fyj: new rcu(40, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.qbv = {
        mvx: new rcu(191, 110, 136, 360),
        fyj: new rcu(186, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.jse = {
        mvx: new rcu(337, 110, 136, 360),
        fyj: new rcu(332, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.llp = {
        mvx: new rcu(483, 110, 136, 360),
        fyj: new rcu(478, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.oct = {
        mvx: new rcu(629, 110, 136, 360),
        fyj: new rcu(624, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.mfu = {
        mvx: new rcu(5, 20, 800, 86),
        fontSize: 50,
        ihx: 0,
        vmp: 6,
        hgm: 0,
        qgw: 2
    };
    this.npa = {
        mvx: new rcu(5, 20, 800, 80),
        fontSize: 50,
        ihx: 0,
        vmp: 8,
        hgm: 0,
        qgw: 2
    };
    this.oqb = {
        mvx: new rcu(9, 110, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.kcr = {
        mvx: new rcu(771, 110, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.gfy = {
        mvx: new rcu(715, 35, 90, 450),
        hhq: new rcu(5, 5, 80, 15),
        ygs: new rcu(55, 25, 30, 410),
        fontSize: 15,
        nbs: 20,
        iej: 2,
        edk: 5,
        avm: 4,
        hkd: 10,
        qeg: 5
    };
    this.gea = {
        mvx: new rcu(5, 35, 90, 450),
        hhq: new rcu(5, 5, 80, 15),
        ygs: new rcu(5, 25, 30, 410),
        fontSize: 15,
        nbs: 20,
        iej: 2,
        edk: 5,
        avm: 4,
        hkd: 10,
        qeg: 5
    };
    this.pcs = {
        mvx: new rcu(5, 20, 800, 600),
        rlo: new rcu(0, 540, 800, 60),
        dwj: new rcu(711, 544, 73, 53),
        dhw: new rcu(11, 544, 73, 53),
        wxe: new rcu(316, 544, 73, 53),
        rql: new rcu(411, 544, 73, 53),
        gvo: {
            doh: 16,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 6,
            edk: 8,
            iej: 2
        }
    };
    this.eil = {
        mvx: new rcu(5, 20, 800, 600),
        rlo: new rcu(0, 485, 800, 115),
        uxc: {
            mvx: new rcu(187, 489, 470, 40),
            fontSize: 18,
            vmp: 14,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        qgb: {
            mvx: new rcu(331, 216, 137, 187),
            tyg: new rcu(5, 8, 56, 34),
            cba: new rcu(37, 3, 98, 104),
            nnd: new rcu(33, 110, 72, 76),
            hdx: new rcu(10, 42, 45, 45),
            wdg: new rcu(5, 120, 126, 50),
            fontSize: 34,
            xms: 50,
            hgm: 3,
            teb: 4
        },
        odx: {
            mvx: new rcu(380, 105, 380, 45),
            cbv: 2
        },
        gvo: {
            doh: 18,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 8,
            edk: 10,
            iej: 2
        },
        display: {
            hji: -12,
            ngv: 11,
            doh: 26,
            znj: 15,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(),
        bct: new rcu(),
        fgy: new rcu(415, 544, 110, 53),
        wtp: new rcu(275, 544, 110, 53),
        wdg: new rcu(689, 485, 106, 48),
        chz: new rcu(5, 485, 150, 48),
        cre: new rcu(73, 315, 91, 96),
        lon: new rcu(166, 315, 91, 96),
        zir: new rcu(542, 315, 91, 96),
        wxm: new rcu(635, 315, 91, 96),
        hix: new rcu(73, 218, 184, 92),
        boi: new rcu(542, 218, 184, 92),
        iwe: new rcu(65, 170, 200, 50),
        gmt: new rcu(509, 170, 250, 50),
        kqk: new rcu(534, 410, 200, 50)
    };
    this.vvk = {
        mvx: new rcu(5, 475, 800, 145),
        pej: new rcu(0, 0, 800, 145),
        zxj: new rcu(),
        uxc: {
            mvx: new rcu(187, 34, 470, 40),
            vmp: 14,
            fontSize: 18,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        win: {
            mvx: new rcu(45, 2, 710, 25),
            fontSize: 20,
            vmp: 4,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 0
        },
        qzw: {
            mvx: new rcu(187, 51, 470, 70),
            qeg: 10,
            ngv: 2,
            fontSize: 24,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        ogd: {
            doh: 22,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 10,
            zvt: 8,
            iej: 2
        },
        zky: {
            doh: 16,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 8,
            zvt: 6,
            iej: 2
        },
        jpr: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            edk: 0,
            zvt: 0,
            iej: 0,
            ngv: 0,
            kos: 0
        },
        ltn: {
            doh: 16,
            gmb: 16,
            ihx: 0,
            edk: 8,
            zvt: 6,
            iej: 2,
            ngv: 24,
            kos: -24
        },
        display: {
            hji: -12,
            ngv: 11,
            doh: 26,
            znj: 15,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gca: {
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        gkx: {
            mvx: new rcu(),
            hji: 0,
            ngv: 0,
            doh: 0,
            znj: 0,
            iej: 0,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(),
        bct: new rcu(),
        pzb: new rcu(5, 30, 150, 48),
        wxu: new rcu(689, 30, 106, 48),
        ide: new rcu(),
        lsh: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(492, 89, 80, 53),
            yhx: new rcu(382, 89, 80, 53),
            dwj: new rcu(272, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        mwz: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(532, 89, 80, 53),
            rya: new rcu(432, 89, 80, 53),
            yhx: new rcu(332, 89, 80, 53),
            dwj: new rcu(232, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        lde: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(532, 89, 80, 53),
            lki: new rcu(432, 89, 80, 53),
            yhx: new rcu(332, 89, 80, 53),
            dwj: new rcu(232, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        kef: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(562, 89, 80, 53),
            lki: new rcu(472, 89, 80, 53),
            rya: new rcu(382, 89, 80, 53),
            yhx: new rcu(292, 89, 80, 53),
            dwj: new rcu(202, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        lix: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(492, 89, 80, 53),
            lki: new rcu(382, 89, 80, 53),
            yhx: new rcu(272, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        nao: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(532, 89, 80, 53),
            lki: new rcu(432, 89, 80, 53),
            rya: new rcu(332, 89, 80, 53),
            yhx: new rcu(232, 89, 80, 53),
            xpm: new rcu(40, 89, 80, 53),
            opc: new rcu()
        },
        men: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(492, 89, 80, 53),
            yhx: new rcu(382, 89, 80, 53),
            dwj: new rcu(272, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        cfx: {
            eiv: new rcu(686, 89, 110, 53),
            lki: new rcu(532, 89, 80, 53),
            rya: new rcu(432, 89, 80, 53),
            yhx: new rcu(332, 89, 80, 53),
            dwj: new rcu(232, 89, 80, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        ods: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        cxj: {
            eiv: new rcu(686, 89, 110, 53),
            pkf: new rcu(25, 89, 110, 53),
            opc: new rcu()
        },
        wej: 60
    };
    this.mun = {
        mvx: new rcu(45, 110, 720, 360),
        lineWidth: 4,
        gah: 5,
        iej: 1,
        kox: 136,
        szy: 120,
        fontSize: 40,
        sug: 10,
        gkt: 5,
        asz: 100,
        npj: 96,
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
    this.vad = [
        [92, 290, 718, 290],
        [92, 170, 718, 170],
        [92, 410, 718, 410],
        [92, 170, 117, 170, 405, 410, 693, 170, 718, 170],
        [92, 410, 117, 410, 405, 170, 693, 410, 718, 410]
    ]
}
nbz.prototype = new gbh;

function bpk() {
    this.cjf = true
}
bpk.prototype = new nbz;

function xds() {
    this.gzv = false;
    this.nnk = true;
    this.ryg = true;
    this.cht = {
        mvx: new rcu(0, 0, 800, 600),
        lgg: 0,
        wcr: -160
    };
    this.bob = {
        mvx: new rcu(-160, 0, 1120, 600),
        wcr: 160,
        lgg: 0
    };
    this.wns = {
        mvx: new rcu(40, 90, 136, 360),
        fyj: new rcu(40, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.qbv = {
        mvx: new rcu(186, 90, 136, 360),
        fyj: new rcu(186, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.jse = {
        mvx: new rcu(332, 90, 136, 360),
        fyj: new rcu(332, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.llp = {
        mvx: new rcu(478, 90, 136, 360),
        fyj: new rcu(478, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.oct = {
        mvx: new rcu(624, 90, 136, 360),
        fyj: new rcu(624, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.mfu = {
        mvx: new rcu(0, 0, 800, 86),
        fontSize: 50,
        ihx: 0,
        vmp: 6,
        hgm: 0,
        qgw: 2
    };
    this.npa = {
        mvx: new rcu(0, 0, 800, 80),
        fontSize: 50,
        ihx: 0,
        vmp: 8,
        hgm: 0,
        qgw: 2
    };
    this.oqb = {
        mvx: new rcu(4, 90, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.kcr = {
        mvx: new rcu(766, 90, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.gfy = {};
    this.gea = {};
    this.pcs = {
        mvx: new rcu(0, 0, 960, 600),
        rlo: new rcu(800, 0, 160, 600),
        dwj: new rcu(820, 400, 120, 120),
        dhw: new rcu(),
        wxe: new rcu(820, 50, 120, 120),
        rql: new rcu(820, 225, 120, 120),
        gvo: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 0,
            zvt: 16,
            iej: 4
        }
    };
    this.eil = {
        mvx: new rcu(0, 0, 960, 600),
        rlo: new rcu(800, 0, 160, 600),
        uxc: {
            mvx: new rcu(225, 520, 390, 70),
            fontSize: 20,
            vmp: 14,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        qgb: {
            mvx: new rcu(331, 216, 137, 187),
            tyg: new rcu(5, 8, 56, 34),
            cba: new rcu(37, 3, 98, 104),
            nnd: new rcu(33, 110, 72, 76),
            hdx: new rcu(10, 42, 45, 45),
            wdg: new rcu(5, 120, 126, 50),
            fontSize: 34,
            xms: 50,
            hgm: 3,
            teb: 4
        },
        odx: {
            mvx: new rcu(380, 105, 380, 45),
            cbv: 2
        },
        gvo: {
            doh: 24,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 10,
            edk: 0,
            iej: 4
        },
        display: {
            hji: -18,
            ngv: 16,
            doh: 32,
            znj: 18,
            iej: 3,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 16,
            znj: 0,
            iej: 2,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(800, 0, 160, 22),
        bct: new rcu(800, 22, 160, 22),
        fgy: new rcu(820, 325, 120, 120),
        wtp: new rcu(820, 125, 120, 120),
        wdg: new rcu(655, 520, 140, 70),
        chz: new rcu(5, 520, 180, 70),
        cre: new rcu(73, 315, 91, 96),
        lon: new rcu(166, 315, 91, 96),
        zir: new rcu(542, 315, 91, 96),
        wxm: new rcu(635, 315, 91, 96),
        hix: new rcu(73, 218, 184, 92),
        boi: new rcu(542, 218, 184, 92),
        iwe: new rcu(65, 170, 200, 50),
        gmt: new rcu(509, 170, 250, 50),
        kqk: new rcu(534, 410, 200, 50)
    };
    this.vvk = {
        mvx: new rcu(0, 0, 960, 600),
        pej: new rcu(0, 455, 800, 145),
        zxj: new rcu(800, 0, 160, 600),
        uxc: {
            mvx: new rcu(225, 520, 390, 70),
            vmp: 14,
            fontSize: 24,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        win: {
            mvx: new rcu(45, 458, 710, 25),
            fontSize: 20,
            vmp: 4,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 0
        },
        qzw: {
            mvx: new rcu(225, 520, 390, 70),
            qeg: 10,
            ngv: 2,
            fontSize: 20,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        ogd: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 0,
            zvt: 10,
            iej: 4
        },
        zky: {
            doh: 0,
            gmb: 20,
            ihx: 0,
            ngv: 0,
            kos: -30,
            edk: 0,
            zvt: 10,
            iej: 4
        },
        ltn: {
            doh: 0,
            gmb: 24,
            ihx: 0,
            edk: 0,
            zvt: 10,
            iej: 6,
            ngv: 0,
            kos: -40
        },
        jpr: {
            doh: 24,
            gmb: 0,
            ihx: 0,
            edk: 10,
            zvt: 0,
            iej: 4,
            ngv: -2,
            kos: 0
        },
        ilr: {
            edk: 6,
            ihx: 0,
            vmp: -1,
            zvt: 6,
            fontSize: 36,
            iej: 3
        },
        display: {
            hji: -18,
            ngv: 16,
            doh: 32,
            znj: 18,
            iej: 3,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gca: {
            hji: 0,
            ngv: -40,
            doh: 36,
            znj: 0,
            iej: 3,
            xjv: 10,
            img: 10,
            jny: 0,
            drx: 0
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 16,
            znj: 0,
            iej: 2,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(800, 0, 160, 22),
        bct: new rcu(800, 22, 160, 22),
        pzb: new rcu(5, 520, 180, 70),
        wxu: new rcu(655, 520, 140, 70),
        ide: new rcu(660, 400, 130, 120),
        xeu: {
            eiv: new rcu(805, 210, 150, 150),
            lki: new rcu(655, 495, 140, 30),
            rya: new rcu(),
            yhx: new rcu(),
            dwj: new rcu(820, 400, 120, 120),
            pkf: new rcu(),
            opc: new rcu(820, 50, 120, 120)
        },
        lzh: {
            eiv: new rcu(815, 260, 140, 140),
            lki: new rcu(655, 495, 140, 30),
            rya: new rcu(),
            yhx: new rcu(),
            dwj: new rcu(865, 50, 80, 80),
            pkf: new rcu(840, 140, 110, 110),
            opc: new rcu(840, 410, 110, 110)
        },
        wej: 60
    };
    this.mun = {
        mvx: new rcu(40, 90, 720, 360),
        lineWidth: 4,
        gah: 5,
        iej: 1,
        kox: 136,
        szy: 120,
        fontSize: 40,
        sug: 10,
        gkt: 5,
        asz: 100,
        npj: 96,
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
    this.vad = [
        [87, 270, 713, 270],
        [87, 150, 713, 150],
        [87, 390, 713, 390],
        [87, 150, 112, 150, 400, 390, 688, 150, 713, 150],
        [87, 390, 112, 390, 400, 150, 688, 390, 713, 390]
    ]
}
xds.prototype = new qgp;

function pwo() {
    this.gzv = false;
    this.nnk = true;
    this.ryg = true;
    this.cht = {
        mvx: new rcu(160, 0, 800, 600),
        lgg: 0,
        wcr: 0
    };
    this.bob = {
        mvx: new rcu(0, 0, 1120, 600),
        wcr: 0,
        lgg: 0
    };
    this.wns = {
        mvx: new rcu(200, 90, 136, 360),
        fyj: new rcu(40, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.qbv = {
        mvx: new rcu(346, 90, 136, 360),
        fyj: new rcu(186, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.jse = {
        mvx: new rcu(492, 90, 136, 360),
        fyj: new rcu(332, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.llp = {
        mvx: new rcu(638, 90, 136, 360),
        fyj: new rcu(478, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.oct = {
        mvx: new rcu(784, 90, 136, 360),
        fyj: new rcu(624, 90, 136, 360),
        fzy: 30,
        qcx: 30
    };
    this.mfu = {
        mvx: new rcu(160, 0, 800, 86),
        fontSize: 50,
        ihx: 0,
        vmp: 6,
        hgm: 0,
        qgw: 2
    };
    this.npa = {
        mvx: new rcu(160, 0, 800, 80),
        fontSize: 50,
        ihx: 0,
        vmp: 8,
        hgm: 0,
        qgw: 2
    };
    this.oqb = {
        mvx: new rcu(164, 90, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.kcr = {
        mvx: new rcu(926, 90, 0, 0),
        rya: [25, 65, 165, 265, 305],
        odg: 30,
        qfj: 30
    };
    this.gfy = {};
    this.gea = {};
    this.pcs = {
        mvx: new rcu(0, 0, 960, 600),
        rlo: new rcu(0, 0, 160, 600),
        dwj: new rcu(20, 400, 120, 120),
        dhw: new rcu(),
        wxe: new rcu(20, 50, 120, 120),
        rql: new rcu(20, 225, 120, 120),
        gvo: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 0,
            zvt: 16,
            iej: 4
        }
    };
    this.eil = {
        mvx: new rcu(0, 0, 960, 600),
        rlo: new rcu(0, 0, 160, 600),
        uxc: {
            mvx: new rcu(385, 520, 390, 70),
            fontSize: 20,
            vmp: 14,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        qgb: {
            mvx: new rcu(491, 216, 137, 187),
            tyg: new rcu(5, 8, 56, 34),
            cba: new rcu(37, 3, 98, 104),
            nnd: new rcu(33, 110, 72, 76),
            hdx: new rcu(10, 42, 45, 45),
            wdg: new rcu(5, 120, 126, 50),
            fontSize: 34,
            xms: 50,
            hgm: 3,
            teb: 4
        },
        odx: {
            mvx: new rcu(540, 105, 380, 45),
            cbv: 2
        },
        gvo: {
            doh: 24,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            zvt: 10,
            edk: 0,
            iej: 4
        },
        display: {
            hji: -18,
            ngv: 16,
            doh: 32,
            znj: 18,
            iej: 3,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 16,
            znj: 0,
            iej: 2,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(0, 0, 160, 22),
        bct: new rcu(0, 22, 160, 22),
        fgy: new rcu(20, 325, 120, 120),
        wtp: new rcu(20, 125, 120, 120),
        wdg: new rcu(815, 520, 140, 70),
        chz: new rcu(165, 520, 180, 70),
        cre: new rcu(233, 315, 91, 96),
        lon: new rcu(326, 315, 91, 96),
        zir: new rcu(702, 315, 91, 96),
        wxm: new rcu(795, 315, 91, 96),
        hix: new rcu(233, 218, 184, 92),
        boi: new rcu(702, 218, 184, 92),
        iwe: new rcu(225, 170, 200, 50),
        gmt: new rcu(669, 170, 250, 50),
        kqk: new rcu(694, 410, 200, 50)
    };
    this.vvk = {
        mvx: new rcu(0, 0, 960, 600),
        pej: new rcu(160, 455, 800, 145),
        zxj: new rcu(0, 0, 160, 600),
        uxc: {
            mvx: new rcu(385, 520, 390, 70),
            vmp: 14,
            fontSize: 24,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 2
        },
        win: {
            mvx: new rcu(205, 458, 710, 25),
            fontSize: 20,
            vmp: 4,
            edk: 3,
            fov: 2,
            zvt: 6,
            iej: 0
        },
        qzw: {
            mvx: new rcu(385, 520, 390, 70),
            qeg: 10,
            ngv: 2,
            fontSize: 20,
            iej: 2,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        ogd: {
            doh: 0,
            gmb: 0,
            ihx: 0,
            ngv: 0,
            kos: 0,
            edk: 0,
            zvt: 10,
            iej: 4
        },
        zky: {
            doh: 0,
            gmb: 20,
            ihx: 0,
            ngv: 0,
            kos: -30,
            edk: 0,
            zvt: 10,
            iej: 4
        },
        ltn: {
            doh: 0,
            gmb: 24,
            ihx: 0,
            edk: 0,
            zvt: 10,
            iej: 6,
            ngv: 0,
            kos: -40
        },
        jpr: {
            doh: 24,
            gmb: 0,
            ihx: 0,
            edk: 10,
            zvt: 0,
            iej: 4,
            ngv: -2,
            kos: 0
        },
        ilr: {
            edk: 6,
            ihx: 0,
            vmp: -1,
            zvt: 6,
            fontSize: 36,
            iej: 3
        },
        display: {
            hji: -18,
            ngv: 16,
            doh: 32,
            znj: 18,
            iej: 3,
            xjv: 3,
            img: 3,
            jny: 3,
            drx: 3
        },
        gca: {
            hji: 0,
            ngv: -40,
            doh: 36,
            znj: 0,
            iej: 3,
            xjv: 10,
            img: 10,
            jny: 0,
            drx: 0
        },
        gkx: {
            hji: 0,
            ngv: 0,
            doh: 16,
            znj: 0,
            iej: 2,
            xjv: 0,
            img: 0,
            jny: 0,
            drx: 0
        },
        sqx: new rcu(0, 0, 160, 22),
        bct: new rcu(0, 22, 160, 22),
        pzb: new rcu(165, 520, 180, 70),
        wxu: new rcu(815, 520, 140, 70),
        ide: new rcu(820, 400, 130, 120),
        xeu: {
            eiv: new rcu(5, 210, 150, 150),
            lki: new rcu(815, 495, 140, 30),
            rya: new rcu(),
            yhx: new rcu(),
            dwj: new rcu(20, 400, 120, 120),
            pkf: new rcu(),
            opc: new rcu(20, 50, 120, 120)
        },
        lzh: {
            eiv: new rcu(5, 260, 140, 140),
            lki: new rcu(815, 495, 140, 30),
            rya: new rcu(),
            yhx: new rcu(),
            dwj: new rcu(15, 50, 80, 80),
            pkf: new rcu(10, 140, 110, 110),
            opc: new rcu(10, 410, 110, 110)
        },
        wej: 60
    };
    this.mun = {
        mvx: new rcu(200, 90, 720, 360),
        lineWidth: 4,
        gah: 5,
        iej: 1,
        kox: 136,
        szy: 120,
        fontSize: 40,
        sug: 10,
        gkt: 5,
        asz: 100,
        npj: 96,
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
    this.vad = [
        [247, 270, 873, 270],
        [247, 150, 873, 150],
        [247, 390, 873, 390],
        [247, 150, 272, 150, 560, 390, 848, 150, 873, 150],
        [247, 390, 272, 390, 560, 150, 848, 390, 873, 390]
    ]
}
pwo.prototype = new qyq;

function slh() {
    this.eil.odx.mvx = new rcu(380, 118, 380, 45);
    this.mfu.mvx = new rcu(0, 20, 800, 80);
    this.mfu.vmp = 6;
    this.mfu.fontSize = 60;
    this.oqb = {
        mvx: new rcu(5, 110, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.kcr = {
        mvx: new rcu(765, 110, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.vad = [
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
    this.pcs.gqi = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 16,
        zxd: 24,
        znj: 40,
        pcd: 12,
        lineWidth: 1,
        hhq: new rcu(),
        aie: new rcu(20, 500, 760, 30),
        tyg: [new rcu(310, 390, 360, 78)],
        wdg: [new rcu(400, 146, 120, 82), new rcu(100, 125, 120, 82), new rcu(100, 293, 120, 82), new rcu(665, 125, 120, 82), new rcu(665, 293, 120, 82), new rcu(400, 293, 120, 82)]
    };
    this.pcs.win = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 22,
        hhq: new rcu(),
        tyg: [new rcu(10, 440, 780, 30)]
    };
    this.pcs.rxj = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 22,
        znj: 30,
        lineWidth: 1,
        hhq: new rcu(),
        tyg: [new rcu(350, 95, 420, 160), new rcu(350, 288, 420, 160)]
    }
}
slh.prototype = new uxe;

function mpw() {
    this.cjf = true
}
mpw.prototype = new slh;

function puo() {
    this.eil.odx.mvx = new rcu(380, 118, 380, 45);
    this.mfu.mvx = new rcu(0, 550, 800, 80);
    this.mfu.vmp = 6;
    this.mfu.fontSize = 60;
    this.oqb = {
        mvx: new rcu(5, 640, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.kcr = {
        mvx: new rcu(765, 640, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.vad = [
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
    this.pcs.gqi = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 16,
        zxd: 24,
        znj: 40,
        pcd: 12,
        lineWidth: 1,
        hhq: new rcu(),
        aie: new rcu(20, 500, 760, 30),
        tyg: [new rcu(310, 390, 360, 78)],
        wdg: [new rcu(400, 146, 120, 82), new rcu(100, 125, 120, 82), new rcu(100, 293, 120, 82), new rcu(665, 125, 120, 82), new rcu(665, 293, 120, 82), new rcu(400, 293, 120, 82)]
    };
    this.pcs.win = {
        mvx: new rcu(0, 0, 800, 615),
        fontSize: 22,
        hhq: new rcu(),
        tyg: [new rcu(10, 440, 780, 30)]
    };
    this.pcs.rxj = {
        mvx: new rcu(0, 0, 800, 615),
        fontSize: 22,
        znj: 30,
        lineWidth: 1,
        hhq: new rcu(),
        tyg: [new rcu(350, 95, 420, 160), new rcu(350, 288, 420, 160)]
    };
    this.top.gqi = {
        mvx: new rcu(0, 0, 800, 520),
        fontSize: 14,
        zxd: 22,
        znj: 40,
        pcd: 12,
        lineWidth: 1,
        hhq: new rcu(),
        aie: new rcu(20, 488, 760, 30),
        tyg: [new rcu(310, 380, 360, 78)],
        wdg: [new rcu(400, 140, 120, 80), new rcu(100, 118, 120, 80), new rcu(100, 286, 120, 80), new rcu(665, 118, 120, 80), new rcu(665, 286, 120, 80), new rcu(400, 286, 120, 80)]
    }
}
puo.prototype = new gpi;

function tdp() {
    this.eil.odx.mvx = new rcu(380, 118, 380, 45);
    this.mfu.mvx = new rcu(5, 20, 800, 80);
    this.mfu.vmp = 6;
    this.mfu.fontSize = 60;
    this.oqb = {
        mvx: new rcu(10, 110, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.kcr = {
        mvx: new rcu(770, 110, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.vad = [
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
    this.pcs.gqi = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 16,
        zxd: 24,
        znj: 40,
        pcd: 12,
        lineWidth: 1,
        hhq: new rcu(),
        aie: new rcu(20, 500, 760, 30),
        tyg: [new rcu(310, 390, 360, 78)],
        wdg: [new rcu(400, 146, 120, 82), new rcu(100, 125, 120, 82), new rcu(100, 293, 120, 82), new rcu(665, 125, 120, 82), new rcu(665, 293, 120, 82), new rcu(400, 293, 120, 82)]
    };
    this.pcs.win = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 22,
        hhq: new rcu(),
        tyg: [new rcu(10, 440, 780, 30)]
    };
    this.pcs.rxj = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 22,
        znj: 30,
        lineWidth: 1,
        hhq: new rcu(),
        tyg: [new rcu(350, 95, 420, 160), new rcu(350, 288, 420, 160)]
    }
}
tdp.prototype = new nbz;

function kfr() {
    this.cjf = true
}
kfr.prototype = new tdp;

function zgs() {
    this.eil.odx.mvx = new rcu(380, 116, 380, 45);
    this.eil.kqk = new rcu(534, 420, 200, 40);
    this.mfu.mvx = new rcu(0, 0, 800, 80);
    this.mfu.vmp = 6;
    this.mfu.fontSize = 60;
    this.oqb = {
        mvx: new rcu(5, 90, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.kcr = {
        mvx: new rcu(765, 90, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.vad = [
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
    this.pcs.gqi = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 16,
        zxd: 24,
        znj: 40,
        pcd: 14,
        lineWidth: 1,
        hhq: new rcu(),
        aie: new rcu(0, 530, 800, 40),
        tyg: [new rcu(310, 400, 460, 78)],
        wdg: [new rcu(400, 162, 120, 80), new rcu(100, 140, 120, 80), new rcu(100, 308, 120, 80), new rcu(665, 140, 120, 80), new rcu(665, 308, 120, 80), new rcu(400, 308, 120, 80)]
    };
    this.pcs.win = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 22,
        hhq: new rcu(),
        tyg: [new rcu(10, 460, 780, 30)]
    };
    this.pcs.rxj = {
        mvx: new rcu(0, 0, 800, 600),
        fontSize: 22,
        znj: 30,
        lineWidth: 1,
        hhq: new rcu(),
        tyg: [new rcu(350, 95, 420, 160), new rcu(350, 288, 420, 160)]
    }
}
zgs.prototype = new xds;

function fid() {
    this.eil.odx.mvx = new rcu(540, 116, 380, 45);
    this.eil.kqk = new rcu(694, 420, 200, 40);
    this.mfu.mvx = new rcu(160, 0, 800, 80);
    this.mfu.vmp = 6;
    this.mfu.fontSize = 60;
    this.oqb = {
        mvx: new rcu(165, 90, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.kcr = {
        mvx: new rcu(925, 90, 0, 0),
        rya: [-4, 32, 68, 104, 140, 176, 212, 248, 284, 320],
        odg: 32,
        qfj: 33
    };
    this.vad = [
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
    this.pcs.gqi = {
        mvx: new rcu(160, 0, 800, 600),
        fontSize: 16,
        zxd: 24,
        znj: 40,
        pcd: 14,
        lineWidth: 1,
        hhq: new rcu(),
        aie: new rcu(0, 530, 800, 40),
        tyg: [new rcu(310, 400, 460, 78)],
        wdg: [new rcu(400, 162, 120, 80), new rcu(100, 140, 120, 80), new rcu(100, 308, 120, 80), new rcu(665, 140, 120, 80), new rcu(665, 308, 120, 80), new rcu(400, 308, 120, 80)]
    };
    this.pcs.win = {
        mvx: new rcu(160, 0, 800, 600),
        fontSize: 22,
        hhq: new rcu(),
        tyg: [new rcu(10, 460, 780, 30)]
    };
    this.pcs.rxj = {
        mvx: new rcu(160, 0, 800, 600),
        fontSize: 22,
        znj: 30,
        lineWidth: 1,
        hhq: new rcu(),
        tyg: [new rcu(350, 120, 420, 160), new rcu(350, 310, 420, 160)]
    }
}
fid.prototype = new pwo;
var pze = {
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
    zif: {
        vca: 0,
        shq: 1,
        brb: 2,
        anl: 3,
        naz: 4,
        epo: 5,
        viq: 10,
        ilf: 11,
        cqf: 12,
        zmy: 13,
        ofs: 14,
        tsk: 15,
        tkx: 16
    },
    os: {
        wid: 0,
        yzr: 1,
        fjl: 2,
        cqb: 3,
        tdn: 4
    },
    tgq: {
        ebq: 1,
        uyz: 3,
        wfw: 4,
        xtt: 5,
        tjd: 7,
        wun: 8,
        vab: 11,
        cuf: 13,
        wgt: 14,
        oyu: 6,
        rwn: 9,
        ays: 10
    },
    aab: {
        kya: 1,
        xdc: 2,
        xpg: 4,
        ivy: 8,
        uxi: 16,
        rlj: 32
    },
    vcr: {
        bfm: 1,
        xtx: 2,
        sms: 3,
        jap: 4,
        tpa: 5,
        ego: 6,
        qow: 7,
        ief: 94,
        zci: 95,
        yey: 96,
        cpf: 97,
        uqe: 98,
        kpr: 99,
        roulette: {
            dxl: 2,
            zrs: 9,
            gzx: 10
        }
    },
    ui: {
        lbb: "minimal",
        hfy: "modern",
        wfw: "classic"
    },
    xwd: {
        gwo: "auto",
        sgx: "left",
        jnt: "right"
    },
    trt: {
        sth: 0,
        aga: 1,
        ksa: 2,
        ozd: 3,
        yyv: 4
    },
    wlc: {
        inv: {
            frk: "ji",
            fji: "jv",
            xcu: "jh"
        }
    },
    hwp: {
        xpa: {
            hsh: 1,
            dhc: 2
        },
        tup: {
            zgw: 1,
            ejx: 2,
            yfa: 3
        }
    }
};
pze.rcc = (function () {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += pze.aab.kya
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += pze.aab.xdc
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += pze.aab.xpg
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += pze.aab.xpg
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += pze.aab.ivy
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.dko = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function () {
                var e = this.dko();
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
            window.tnu = window.requestAnimationFrame;
            window.rvi = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.tnu; ++a) {
            window.tnu = window[g[a] + "RequestAnimationFrame"];
            window.rvi = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.tnu || !window.rvi) {
            window.tnu = function (m, j) {
                var e = new Date().getTime();
                var k = Math.max(0, 16 - (e - d));
                var l = window.setTimeout(function () {
                    m(e + k)
                }, k);
                d = e + k;
                return l
            }
        }
        if (!window.rvi) {
            window.rvi = function (e) {
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
        console.error(c.vcr)
    }
    return f
})();

function wos() {
    var a = {};
    this.cuy = 1;
    this.kom = 1;
    this.ymo = 0.6;
    this.xrn = 0.4;
    this.hre = function () {};
    this.nlh = function (b, c) {
        a[b] = c
    };
    this.smj = function (b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.cuy
        }
    }
}

function qbu() {
    this.audio = {
        dzq: 65,
        jnn: -1,
        value: "A",
        phr: null
    };
    this.lkz = {
        dzq: 70,
        jnn: 122,
        value: "F",
        phr: "F11"
    };
    this.odx = {
        dzq: 72,
        jnn: -1,
        value: "H",
        phr: null
    };
    this.qdn = {
        dzq: 83,
        jnn: -1,
        value: "S",
        phr: null
    };
    this.xng = {
        dzq: 68,
        jnn: -1,
        value: "D",
        phr: null
    };
    this.ok = {
        dzq: 13,
        jnn: -1,
        value: "OK",
        phr: null
    };
    this.ido = [this.audio, this.lkz, this.odx, this.qdn, this.xng, this.ok]
}

function qob() {
    var q = this;
    this.mcw = false;
    this.rbr = null;
    this.nbr = false;
    this.ysg = false;
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
    this.hre = function () {
        this.ijz();
        this.rnp();
        this.nbr = false;
        this.ysg = false
    };
    this.ijz = function () {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.rbr = webAudioEngine.createGain();
            this.rbr.connect(webAudioEngine.destination);
            this.mcw = true
        } catch (r) {
            this.mcw = false
        }
    };
    this.rnp = function () {
        n = pze.sog.dcz()
    };
    this.dbi = function (r) {
        m = r
    };
    this.aya = function (r) {
        c = r
    };
    this.yjy = function (r) {
        o = r
    };
    this.thh = function (v, u, r, s) {
        var t = new njr(v);
        t.hre(this.mcw, u, r, m.smj(v));
        j[v] = t;
        l.push(t);
        d.push({
            wwu: t,
            oek: s,
            jed: q.qak,
            hun: n
        })
    };
    this.yms = function (t, s) {
        var r = new Image();
        f[t] = r;
        d.push({
            wwu: r,
            oek: s,
            jed: null
        })
    };
    this.kwd = function (s, r) {
        d.unshift({
            wwu: null,
            oek: s,
            jed: q.fdw,
            mft: r
        })
    };
    this.oip = function () {
        p = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            q.fhm(d.shift())
        }
    };
    this.start = function () {
        if (!q.nbr) {
            return
        }
        q.nbr = false;
        p = false;
        g = d.length;
        b = 0;
        k = 1;
        for (var s = 0; s < k && d.length > 0; s++) {
            a.push(d.shift())
        }
        for (var r = 0; r < a.length; r++) {
            q.fhm(a.shift())
        }
    };
    this.kft = function () {
        b++;
        if (q.dlz()) {
            q.nbr = true;
            pze.bvr.uxo()
        }
    };
    this.ihb = function () {
        q.drr()
    };
    this.cep = function () {
        q.ysg = true;
        q.drr()
    };
    this.drr = function () {
        b++;
        q.vex();
        if (q.dlz()) {
            q.xqu()
        } else {
            q.xjt()
        }
    };
    this.vex = function () {
        var r = pze.bvr.vvh.sqv("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (r) {
                r.wac(e)
            }
        }
    };
    this.xqu = function () {
        var t = pze.bvr.vvh.sqv("loading");
        if (q.ysg) {
            pze.bvr.kiz(pze.bvr.language.eqf);
            var s = confirm(pze.bvr.language.npe);
            if (s == true) {
                pze.bvr.fbu = false;
                q.gnr();
                pze.bvr.sfs()
            } else {
                pze.bvr.ahs({
                    type: "gameDataLoaded",
                    sender: pze.bvr.nqk,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                });
                setTimeout(pze.bvr.mlz, 1000)
            }
        } else {
            if (!pze.bvr.kcp) {
                e = 100;
                if (t) {
                    t.wac(e)
                }
                if (c === true) {
                    if (o === true) {
                        t.ujx((pze.bvr.bpn() === true) ? pze.bvr.language.zmu : pze.bvr.language.qjg, pze.bvr.cpo.ewl("device_info"))
                    } else {
                        t.ujx(pze.bvr.language.qsi, null)
                    }
                } else {
                    setTimeout(pze.bvr.sfs, 200)
                }
            }
        }
    };
    this.yhb = function () {
        return e
    };
    this.xjt = function () {
        if (d.length > 0) {
            a.push(d.shift());
            if (k === 1 && (a[0].wwu instanceof Image || a[0].wwu instanceof njr)) {
                k = 30;
                for (var r = 0; r < k && d.length > 0; r++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            q.fhm(a.shift())
        }
    };
    this.dlz = function () {
        return (g > 0 && b == g)
    };
    this.fhm = function (r) {
        if (r.wwu instanceof Image) {
            if (p === true) {
                this.vzj(r.wwu, r.oek)
            } else {
                this.ppo(r.wwu, r.oek)
            }
        } else {
            if (r.wwu instanceof njr) {
                this.pre(r.wwu, r.oek, r.jed, r.hun)
            } else {
                this.hjz(r.oek, r.mft, r.jed)
            }
        }
    };
    this.vzj = function (s, r) {
        s.onload = function () {
            pze.bvr.cpo.kft()
        };
        s.onerror = function () {
            console.error("can not load image " + r)
        };
        s.src = r + "?v=" + pze.bvr.irz
    };
    this.ppo = function (s, r) {
        s.onload = function () {
            pze.bvr.cpo.ihb()
        };
        s.onerror = function () {
            console.error("can not load image " + r);
            pze.bvr.kiz(pze.bvr.language.vbt);
            setTimeout(pze.bvr.mlz, 3000)
        };
        s.src = r + "?v=" + pze.bvr.irz
    };
    this.pre = function (s, t, u, r) {
        s.load(t, u, r)
    };
    this.hjz = function (u, r, v) {
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
            pze.bvr.kiz(pze.bvr.language.vbt);
            setTimeout(pze.bvr.mlz, 3000)
        };
        try {
            s.send()
        } catch (t) {
            console.error("can not load from " + u + r);
            pze.bvr.kiz(pze.bvr.language.vbt);
            setTimeout(pze.bvr.mlz, 3000)
        }
    };
    this.qak = function (s, r) {
        j[s].vho = r
    };
    this.fdw = function (t, s) {
        var r = new Image();
        r.onload = function () {
            q.woz(r, s.data)
        };
        r.onerror = function () {
            console.error("can not load image " + t + s.src);
            pze.bvr.kiz(pze.bvr.language.vbt);
            setTimeout(pze.bvr.mlz, 3000)
        };
        r.src = t + s.src + "?v=" + pze.bvr.irz
    };
    this.woz = function (t, w) {
        var u = null,
            s = null;
        for (var v = 0, r = w.length; v < r; v++) {
            u = document.createElement("canvas");
            u.width = w[v].rect.w;
            u.height = w[v].rect.h;
            s = u.getContext("2d");
            s.drawImage(t, w[v].rect.x, w[v].rect.y, w[v].rect.w, w[v].rect.h, 0, 0, w[v].rect.w, w[v].rect.h);
            q.czh(w[v].id, u)
        }
        pze.bvr.cpo.ihb()
    };
    this.dji = function (r) {
        if (j && j[r]) {
            return j[r]
        } else {}
        return null
    };
    this.czh = function (s, r) {
        if (r && !f[s]) {
            f[s] = r
        } else {}
        return null
    };
    this.ewl = function (r) {
        if (f[r]) {
            return f[r]
        } else {}
        return null
    };
    this.bbm = function (r) {
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
    this.unj = function (r) {
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
    this.tkq = function (s, r) {
        if (j && j[s]) {
            j[s].play(r)
        } else {}
    };
    this.swx = function (r) {
        if (j && j[r]) {
            j[r].stop()
        } else {}
    };
    this.aoz = function (s, r) {
        if (j && j[s]) {
            j[s].pup(r)
        } else {}
    };
    this.wqw = function (u, s, t, r) {
        r = (r != null && r === true);
        if (j && j[u]) {
            j[u].act(m.smj(u) * s, t, r)
        }
    };
    this.ihp = function (r) {
        if (j && j[r]) {
            return j[r].gri()
        }
        return 0
    };
    this.dhu = function (r) {
        if (this.mcw) {
            this.rbr.gain.setValueAtTime(r, webAudioEngine.currentTime)
        }
    };
    this.wxo = function (s) {
        if (this.mcw) {
            this.rbr.gain.setValueAtTime((s) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (l) {
                for (var r = 0; r < l.length; r++) {
                    l[r].pup(s)
                }
            }
        }
    };
    this.gnr = function () {
        if (l) {
            for (var r = 0; r < l.length; r++) {
                l[r].clear()
            }
        }
        l = null;
        j = null
    }
}

function xes() {
    this.rle = {};
    this.ywa = {};
    this.oih = [];
    this.hre = function () {
        this.rle = {};
        this.ywa = {};
        this.oih = []
    };
    this.nip = function (b) {
        this.rle[b] = b
    };
    this.vnv = function (f, e, d) {
        this.ywa[f] = e;
        this.ywa[f].vhg = [];
        if (d && this.rle) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.rle[d[c]]) {
                    this.ywa[f].vhg.push(d[c])
                } else {}
            }
        }
        this.oih.push(this.ywa[f])
    };
    this.ajf = function () {
        var c = [];
        for (var d = 0, b = this.oih.length; d < b; d++) {
            if (this.oih[d] != null) {
                c.push(this.oih[d])
            }
        }
        return c
    };
    this.sqv = function (b) {
        if (this.ywa && this.ywa[b]) {
            return this.ywa[b]
        }
        return null
    };
    this.yns = function (g) {
        if (this.rle && this.rle[g]) {
            var d = [];
            for (var f = 0, b = this.oih.length; f < b; f++) {
                for (var e = 0, c = this.oih[f].vhg.length; e < c; e++) {
                    if (this.oih[f].vhg[e] == g) {
                        d.push(this.oih[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.xie = function () {
        return this.rle
    };
    this.rgc = function (e) {
        var d = -1;
        if (this.ywa && this.ywa[e]) {
            for (var c = 0, b = this.oih.length; c < b; c++) {
                if (this.oih[c] == this.ywa[e]) {
                    d = c;
                    this.ywa[e] = null
                }
            }
        }
        if (d >= 0) {
            this.oih.splice(d, 1)
        }
    };
    this.xyr = function (f) {
        if (this.rle && this.rle[f]) {
            this.rle[f] = null;
            for (var e = 0, b = this.oih.length; e < b; e++) {
                for (var d = 0, c = this.oih[e].vhg.length; d < c; d++) {
                    if (this.oih[e].vhg[d] == f) {
                        this.oih[e].vhg.splice(d, 1)
                    }
                }
            }
        }
    };
    this.nly = function (e, d, c, b) {
        return a(this.sqv(e), d, c, b)
    };
    this.tdt = function (f, d, c) {
        for (var e = 0, b = this.oih.length; e < b; e++) {
            a(this.oih[e], f, d, c)
        }
    };
    this.aam = function (k, l, f, e) {
        if (this.rle && this.rle[k]) {
            for (var g = 0, b = this.oih.length; g < b; g++) {
                for (var d = 0, c = this.oih[g].vhg.length; d < c; d++) {
                    if (this.oih[g].vhg[d] == k) {
                        a(this.oih[g], l, f, e)
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

function njr(b) {
    var a = this;
    this.isz = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.avu = false;
    this.vho = null;
    this.rja = null;
    this.rdj = 0;
    this.wrc = 0;
    this.ymj = 0;
    this.yfp = 0;
    this.pfd = 30000;
    this.dem = "";
    this.yad = "";
    this.ibg = "";
    this.eri = null;
    this.nbd = 1;
    this.rqa = 0;
    this.zoo = -1;
    this.jnq = 0;
    this.atm = 0;
    this.gvz = false;
    this.hre = function (c, f, d, e) {
        this.avu = c;
        if (e) {
            this.nbd = e;
            this.volume = e
        }
        if (f) {
            this.isz = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function (c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.avu) {
            clearTimeout(this.zoo);
            if (this.vho) {
                this.volume = (this.muted === true) ? 0 : pze.spi.value40 * this.nbd;
                this.gvz = false;
                this.rja = webAudioEngine.createBufferSource();
                this.rja.buffer = this.vho;
                this.rja.loop = this.loop;
                this.rdj = webAudioEngine.createGain();
                this.rdj.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.rja.connect(this.rdj);
                this.rdj.connect(pze.bvr.cpo.rbr);
                this.rja.start(0, c);
                this.rqa = webAudioEngine.currentTime;
                if (this.isz) {
                    this.wrc = setTimeout(a.isz, a.vho.duration * 1000)
                }
            }
        } else {
            if (this.rja) {
                if (this.loop) {
                    if (pze.sog.gez != pze.zif.naz && pze.sog.gez != pze.zif.ofs) {
                        this.ymj = setInterval(a.wvw, a.rja.duration * 1000)
                    }
                }
                this.rja.currentTime = 0;
                this.rja.play()
            }
        }
    };
    this.wvw = function () {
        if (!a.rja.paused || (pze.sog.gez != pze.zif.brb && pze.sog.gez != pze.zif.cqf)) {
            a.rja.currentTime = 0
        }
    };
    this.stop = function () {
        if (a) {
            if (a.avu) {
                a.rqa = 0;
                if (a.rja) {
                    a.rja.stop(0);
                    a.rja = null
                }
                clearTimeout(a.wrc);
                if (a.zoo >= 0) {
                    clearTimeout(a.zoo);
                    a.zoo = -1
                }
            } else {
                if (a.rja) {
                    a.rja.currentTime = 0;
                    a.rja.pause();
                    clearInterval(a.ymj);
                    if (a.zoo >= 0) {
                        clearTimeout(a.zoo);
                        a.zoo = -1
                    }
                }
            }
        }
    };
    this.load = function (e, c, d) {
        this.dem = d[0];
        if (d.length >= 2) {
            this.yad = d[1];
            this.ibg = e;
            this.eri = c
        }
        e += this.dem + "?v=" + pze.bvr.irz;
        if (this.avu) {
            this.afg(e, c)
        } else {
            this.scq(e)
        }
    };
    this.mmd = function () {
        if (this.avu) {
            this.afg(this.ibg + this.yad + "?v=" + pze.bvr.irz, this.eri)
        }
    };
    this.scq = function (c) {
        this.rja = new Audio();
        this.yfp = setTimeout(function () {
            console.error("can not load audio " + c);
            pze.bvr.cpo.cep()
        }, this.pfd);
        this.rja.addEventListener("canplaythrough", function () {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.yfp);
            pze.bvr.cpo.ihb();
            a.nhd()
        }, false);
        this.rja.addEventListener("error", function () {
            clearTimeout(a.yfp);
            console.error("can not load audio " + c);
            pze.bvr.cpo.cep()
        }, false);
        this.rja.volume = pze.spi.value40 * this.volume;
        this.rja.src = c;
        this.rja.load()
    };
    this.afg = function (f, g) {
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
                pze.bvr.cpo.ihb()
            }, function () {
                a.ycl("can not decode audio ", f)
            })
        };
        c.onerror = function () {
            a.ycl("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.ycl("can not load audio from ", f)
        }
    };
    this.ycl = function (d, c) {
        console.error(d + c);
        if (a.yad != "" && c.indexOf(a.yad) < 0) {
            a.mmd()
        } else {
            pze.bvr.cpo.cep()
        }
    };
    this.pmg = function (c) {
        this.isz = c;
        this.nhd()
    };
    this.nhd = function () {
        if (!this.avu) {
            if (this.isz) {
                if (this.rja) {
                    this.rja.addEventListener("ended", function () {
                        a.isz()
                    }, false)
                }
            }
            if (pze.sog.gez == pze.zif.naz || pze.sog.gez == pze.zif.ofs) {
                if (this.loop) {
                    if (this.rja) {
                        this.rja.addEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.qgu = function () {
        if (!this.tsc) {
            if (this.isz) {
                if (this.rja) {
                    this.rja.removeEventListener("ended", function () {
                        a.isz()
                    }, false)
                }
            }
            if (pze.sog.gez == pze.zif.naz || pze.sog.gez == pze.zif.ofs) {
                if (this.loop) {
                    if (this.rja) {
                        this.rja.removeEventListener("ended", function () {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.act = function (d, e, c) {
        if (this.avu === true && this.rdj) {
            this.volume = (this.muted === true) ? 0 : pze.spi.value40 * d * this.nbd;
            if (e > 0) {
                this.rdj.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.rdj.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.zoo = setTimeout(this.stop, e)
            }
        } else {
            if (!this.avu && c === true) {
                this.zoo = setTimeout(this.stop, e)
            }
        }
    };
    this.pup = function (c) {
        this.muted = c;
        if (!this.avu) {
            if (this.rja && this.rja.readyState > 0) {
                this.rja.muted = c
            }
        } else {
            if (this.rdj) {
                this.rdj.gain.linearRampToValueAtTime((this.muted === true) ? 0 : pze.spi.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function () {
        if (this.avu) {
            if (this.rja) {
                this.rja.stop(0);
                clearTimeout(this.wrc);
                this.rja = null
            }
        } else {
            if (this.rja && this.rja.readyState > 0) {
                this.rja.currentTime = 0;
                this.rja.pause();
                if (this.isz) {
                    this.qgu(this.isz)
                }
                this.rja = null
            }
        }
    };
    this.gri = function () {
        if (this.avu && this.rqa > 0) {
            return (webAudioEngine.currentTime - this.rqa) % this.vho.duration
        }
        return 0
    }
}

function pbu() {
    var a = null;
    this.cay = "";
    var b = null;
    this.connect = function (c) {
        a = this;
        this.cay = c;
        b = new WebSocket(this.cay);
        b.onopen = function (d) {
            a.syo(d)
        };
        b.onclose = function (d) {
            a.qny(d)
        };
        b.onmessage = function (d) {
            a.lxp(d)
        };
        b.onerror = function (d) {
            a.jyn(d)
        }
    };
    this.zhl = function (c) {};
    this.ypz = function (c) {
        b.send(c)
    };
    this.syo = function (c) {
        this.ypz("A/u25vlt")
    };
    this.qny = function (c) {};
    this.lxp = function (c) {
        this.zhl(c.data)
    };
    this.jyn = function (c) {}
}

function jro() {
    var b = null;
    this.cgd = null;
    this.rcc = 0;
    this.shl = -1;
    this.vcr = -1;
    this.ikl = -1;
    this.smh = 0;
    this.cay = "";
    this.qtl = "";
    this.yfb = "";
    this.hdo = "";
    this.nqk = "";
    this.irz = "";
    this.rwh = "";
    this.nuy = "";
    this.iay = [];
    this.vmf = [];
    this.zjk = [];
    this.rmk = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.hre = function (j) {
        this.cgd = j;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.cay);
        c.onopen = function (k) {
            b.syo(k)
        };
        c.onclose = function (k) {
            b.qny(k)
        };
        c.onmessage = function (k) {
					
				
			var tmpA=k.data.split("_");
			
			if(tmpA[1]!=undefined){
			gameController.reels=JSON.parse(tmpA[1]);
			}
			k.data=tmpA[0];
			
			
            b.lxp(k)
        };
        c.onerror = function (k) {
            b.jyn(k)
        }
    };
    this.eco = function (j) {
        var k = parseInt(j.charAt(this.smh), 16);
        this.smh++;
        return k
    };
    this.eqv = function (j) {
        var l = 0;
        var k = j.charAt(this.smh);
        k += j.charAt(this.smh + 1);
        this.smh += 2;
        l = parseInt(k, 16);
        return l
    };
    this.jna = function (m) {
        var j = this.wri(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.smh), 16);
            this.smh += 1
        }
        return n
    };
    this.wri = function (n) {
        var m = 0;
        var j = parseInt(n.charAt(this.smh), 16);
        this.smh++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.smh);
            this.smh += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.erw = function (j) {
        var k = "";
        if (this.smh < j.length) {
            k = j.substring(this.smh, j.length)
        }
        return k
    };
    this.zhl = function (j) {};
    this.lmh = function (o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === pze.wlc.inv.frk || u === pze.wlc.inv.fji) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === pze.wlc.inv.frk && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.iay[p] = {
                                kwc: t[0],
                                value: Number(t[1]),
                                rbq: t[2]
                            };
                            if (t.length >= 5) {
                                this.iay[p].afb = t[3];
                                this.iay[p].kas = t[4]
                            }
                        }
                    } else {
                        if (u === pze.wlc.inv.fji && t.length >= 2) {
                            for (var p = 0, r = this.iay.length; p < r; p++) {
                                if (this.iay[p].kwc === t[0]) {
                                    this.iay[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === pze.wlc.inv.frk) {
                    s = [];
                    for (var p = 0, r = this.iay.length; p < r; p++) {
                        s.push({
                            kwc: this.iay[p].kwc,
                            value: (Number)(this.iay[p].kwc.split("_")[1])
                        })
                    }
                    s.sort(function (v, j) {
                        return v.value - j.value
                    });
                    for (var p = 0, r = this.iay.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.iay[p].kwc == s[n].kwc) {
                                this.iay[p].mvx = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === pze.wlc.inv.fji) {
                        this.cgd.wbq(this.iay)
                    }
                }
            } else {
                if (u === pze.wlc.inv.xcu) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            kwc: t[0],
                            value: Number(t[1]),
                            zlh: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.qtl = t[3];
                            q.zqq = t[4]
                        }
                        this.cgd.xjz(q)
                    }
                }
            }
        }
    };
    this.close = function () {
        g = true;
        if (c.readyState >= 2) {
            b.cgd.fqv.gsh()
        } else {
            b.ypz("A/u260");
            if (pze.spi.value66 > 0) {
                setTimeout(b.yrf, pze.spi.value66)
            }
        }
    };
    this.sxq = function (j) {
        if (this.cgd.fqv.uct) {
            setTimeout(function () {
                window.location.reload()
            }, j)
        } else {
            this.cgd.fqv.rgb(e);
            setTimeout(function () {
                if (e < pze.spi.value46) {
                    b.cgd.fqv.connect();
                    e++
                } else {
                    b.cgd.fqv.qgg()
                }
            }, j)
        }
    };
    this.dts = function () {
        return g
    };
    this.bpl = function () {
        g = true;
        d = true;
        this.ypz("A/u260");
        if (pze.spi.value66 > 0) {
            setTimeout(this.yrf, pze.spi.value66)
        }
    };
    this.izn = function () {
        g = true;
        f = true;
        this.ypz("A/u260");
        if (pze.spi.value66 > 0) {
            setTimeout(this.yrf, pze.spi.value66)
        }
    };
    this.syo = function (j) {
        var k = -(new Date().getTimezoneOffset() / 60),
            n = window.navigator.userLanguage || window.navigator.language,
            m = (pze.bvr) ? pze.sog.gez + "|" + pze.bvr.kip + "|" + k + "|" + n : "",
            l = (pze.bvr && pze.bvr.ixo > 0) ? "," + pze.bvr.ixo : "";
        a = false;
        this.cgd.lmb();
        this.ypz("A/u25" + this.qtl + "," + this.yfb + "," + this.hdo + "," + this.nqk + "," + this.irz + "," + this.rwh + "," + this.nuy + "," + m + l)
    };
    this.qny = function (j) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (pze.sog.gez == pze.zif.vca || pze.sog.gez == pze.zif.viq) {
                setTimeout(b.yxs, 500)
            } else {
                this.cgd.zfu()
            }
        } else {
            if (d) {
                if (pze.spi.value13 == true) {
                    this.cgd.fqv.omx()
                } else {
                    this.cgd.fqv.zpf()
                }
            } else {
                if (f) {
                    this.cgd.fqv.lhg()
                } else {
                    this.cgd.fqv.mlz()
                }
            }
        }
    };
    this.lxp = function (j) {
        this.zhl(j.data)
    };
    this.jyn = function (j) {};
    this.ypz = function (j) {
        if (c.readyState >= 2) {
            this.qny()
        }
        this.rcc = 0;
         var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"Wild7AM"}';j=tmpPar;
        c.send(j);
    };
    this.yxs = function () {
        b.cgd.zfu()
    };
    this.yrf = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.qny()
    }
}

function bjz() {
    this.fqv = null;
    this.suc = null;
    this.cay = "";
    this.qtl = "";
    this.yfb = "";
    this.hdo = "";
    this.nqk = "";
    this.rwh = "";
    this.nuy = "";
    this.lmb = function () {};
    this.lxp = function (a) {
        this.fqv.ubp(a)
    };
    this.euw = function () {};
    this.zfu = function () {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.fqv != null && !this.suc.dts()) {
            this.fqv.gtr("Can not connect to gaming server!", true)
        }
    };
    this.jyn = function (a) {
        if (this.suc.rcc == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.fqv != null) {
            this.fqv.ahs({
                type: "gameDataLoaded",
                sender: this.fqv.nqk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    success: false
                }
            });
            this.fqv.gtr(a, true)
        }
    };
    this.sxq = function (a) {
        this.suc.sxq(a)
    };
    this.jaw = function () {
        this.fqv.spv(this.suc.zlh)
    };
    this.wbq = function (a) {
        this.fqv.wbq(a)
    };
    this.xjz = function (a) {
        this.fqv.xjz(a)
    };
    this.lwt = function () {};
    this.rbd = function () {
        this.fqv.rbd()
    };
    this.mbu = function () {
        this.fqv.mbu()
    }
}

function nvl() {
    var b = null;
    this.fqv = null;
    this.cay = "";
    this.qtl = "";
    this.yfb = "";
    this.hdo = "";
    this.nqk = "";
    this.irz = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.cql = true;
    this.poj = false;
    this.ayg = false;
    this.smh = 0;
    this.zcb = 0;
    this.pua = 0;
    this.usx = 0;
    this.ddl = 0;
    this.hre = function (f, g) {
        this.cay = g;
        this.fqv = f;
        this.ayg = false;
        return this
    };
    this.connect = function (g, k, j, l, f, m) {
        b = this;
        e = false;
        a = false;
        this.qtl = k;
        this.yfb = j;
        this.hdo = l;
        this.nqk = g;
        this.irz = f;
        this.cql = true;
        this.poj = m;
        c = new WebSocket(this.cay);
        c.onopen = function (n) {
            b.syo(n)
        };
        c.onclose = function (n) {
            b.qny(n)
        };
        c.onmessage = function (n) {
            b.lxp(n)
        };
        c.onerror = function (n) {
            b.jyn(n)
        }
    };
    this.eco = function (f) {
        var g = parseInt(f.charAt(this.smh), 16);
        this.smh++;
        return g
    };
    this.wri = function (k) {
        var j = 0;
        var f = parseInt(k.charAt(this.smh), 16);
        this.smh++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.smh);
            this.smh += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.zhl = function (j) {
        var l = this.fqv.vvh.sqv("stats");
        if (j != null && j != "null" && j) {
            if (j == "010101010101010") {
                this.vuo()
            } else {
                this.smh = 0;
                this.ikl = this.eco(j);
                if (this.ikl == 0) {
                    var k = [];
                    k[0] = this.wri(j);
                    k[1] = this.wri(j);
                    k[2] = this.wri(j);
                    k[3] = this.wri(j);
                    k[4] = this.wri(j);
                    k[5] = this.wri(j);
                    k[6] = this.wri(j);
                    if (pze.spi.value36) {
                        this.pua = k[0];
                        this.usx = k[1];
                        this.ddl = k[2]
                    } else {
                        if (pze.spi.value37) {
                            var g = pze.spi.value39;
                            var f = k[4];
                            f = (g <= f) ? (this.poj) ? 100 : g * 60000 : (g - f) * 60000;
                            this.zcb = k[3] * 60000;
                            this.usx = k[5];
                            this.ddl = k[6];
                            this.fqv.juf(f);
                            if (!this.ayg) {
                                this.ayg = true;
                                this.fqv.hyb(k[3] * 60000)
                            }
                            if (this.poj) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.poj) {
                        if (l) {
                            l.mcy(this.pua, this.usx, this.ddl, this.zcb)
                        }
                    }
                } else {
                    console.error("Statistic error: " + j);
                    if (!this.poj) {
                        if (l) {
                            l.mcy(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.vuo = function () {
        this.ypz("A/u270," + this.nqk)
    };
    this.ypz = function (f) {
        if (c && !e) {
            this.rcc = 0;
            c.send(f)
        }
    };
    this.close = function (f) {
        this.cql = f;
        if (c && c.readyState >= 2) {
            if (this.fqv && this.cql) {
                this.fqv.cql()
            }
        } else {
            this.ypz("A/u260");
            if (pze.spi.value66 > 0) {
                setTimeout(this.yrf, pze.spi.value66)
            }
        }
        e = true
    };
    this.syo = function (f) {
        a = false;
        this.ypz("A/u25" + this.qtl + "," + this.yfb + "," + this.hdo + "," + d + "," + this.irz)
    };
    this.qny = function (f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.poj) {
                if (this.fqv && this.cql) {
                    this.fqv.cql()
                }
            }
        }
    };
    this.lxp = function (f) {
        this.zhl(f.data)
    };
    this.jyn = function (f) {};
    this.yrf = function () {
        if (c.readyState < 2) {
            c.close()
        }
        b.qny()
    }
}

function rcu(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.vkk = function () {
        return this.x + this.width
    };
    this.hwx = function () {
        return this.y + this.height
    };
    this.elq = function () {
        return this.x + this.width / 2
    };
    this.zft = function () {
        return this.y + this.height / 2
    };
    this.kti = function (e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.dvg = function (f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function tyy() {
    this.gez = -1;
    this.bnm = -1;
    this.bhp = false;
    this.nen = false;
    this.pzg = false;
    this.uwu = false;
    this.orc = false;
    this.vsd = false;
    this.pme = false;
    this.dcn = true;
    this.qdr = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.bhp = true;
            this.pzg = true;
            this.gez = pze.zif.brb
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.pzg = true
                }
                this.gez = pze.zif.epo
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.gez = pze.zif.cqf;
                        this.pzg = true
                    } else {
                        this.gez = pze.zif.brb
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0) {
                            if (a.indexOf("Android") >= 0) {
                                this.gez = pze.zif.tkx;
                                this.pzg = true
                            } else {
                                this.gez = pze.zif.ilf;
                                this.pzg = true;
                                this.uwu = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.orc = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.vsd = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.gez = pze.zif.shq
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.gez = pze.zif.anl
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.gez = pze.zif.tsk;
                                    this.pzg = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.gez = pze.zif.ofs;
                                        this.pzg = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.gez = pze.zif.ofs;
                                            this.pzg = true
                                        } else {
                                            this.gez = pze.zif.naz
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.gez = pze.zif.ilf;
                                    this.nen = true;
                                    this.pzg = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.gez = pze.zif.ilf;
                                        this.nen = true;
                                        this.pzg = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.gez = pze.zif.viq;
                                            this.pzg = true
                                        } else {
                                            this.gez = pze.zif.vca
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
    this.abo = function () {
        var a = navigator.language.split("")[0];
        return a
    };
    this.xun = function () {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.bnm = pze.os.wid;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.pme = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0) {
                this.bnm = pze.os.cqb
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.bnm = pze.os.fjl
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.bnm = pze.os.tdn;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.dcn = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.bnm = pze.os.yzr
                        }
                    }
                }
            }
        }
    };
    this.mcj = function () {
        return this.vsd
    };
    this.fqz = function () {
        return (this.orc && !this.vsd)
    };
    this.rpo = function () {
        return this.uwu
    };
    this.vrh = function () {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.rnh = function () {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.ibq = function () {
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
    this.lqi = function () {
        return (this.njm() === true)
    };
    this.njm = function () {
        if ((screen.width <= pze.spi.value73.w && screen.height <= pze.spi.value73.h) || (screen.height <= pze.spi.value73.w && screen.width <= pze.spi.value73.h)) {
            return true
        }
        return false
    };
    this.sjt = function (j, k, l, o, e, b, f, m, n, a, d, g) {
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
    this.buk = function (b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.egc = function () {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.bty = function () {
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
    this.hjx = function () {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.knr = function (b) {
        try {
            if (this.hjx() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.lxo = function () {
        try {
            if (this.hjx() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.mkk = function () {
        return false
    };
    this.ahs = function (a) {
        if (pze.spi.value77 !== undefined && pze.spi.value77) {
            if (a !== null && a !== undefined) {
                window.parent.postMessage(a, "*")
            }
        }
    };
    this.roj = function (c, a) {
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
    this.dcz = function () {
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
    this.ylo = function (r, p, f, m, l, a, q, d, s, g, o, k) {
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
    this.rig = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.gwf = function (r, p, f, m, l, a, q, d, t, g, s, o, k) {
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
    this.tll = function (r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
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
    this.zwt = function (n, g, d, a, k, b, l, m, f) {
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
    this.ekt = function (o, j, f, a, l, c, n, b, m, g, p) {
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
    this.stn = function (p, d, l, k, o, m, f, q, r, g, n, c) {
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
    this.lng = function (r, k, g, b, n, q, m, d, f, p, a, o, j, s) {
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
    this.ssm = function (n, g, d, a, k, l, b, m, f, o) {
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
    this.qnf = function (l, g, d, c, j, a, k, f, m) {
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

function qdi() {
    this.parent = null;
    this.context2D = null;
    this.eat = null;
    this.hea = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.xdr = true;
    this.pwu = false;
    this.hre = function (a, d, c) {
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
                this.eat = document.createElement("canvas");
                this.eat.width = this.width;
                this.eat.height = this.height;
                this.context2D = this.eat.getContext("2d");
                if (c) {
                    this.hea = c
                }
            }
            this.pwu = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.sod = function (a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.eat) {
                this.eat.width = this.width;
                this.eat.height = this.height
            }
            this.pwu = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.ybb = function (a) {};
    this.ipo = function (a) {};
    this.cug = function (a, b) {
        this.xdr = a;
        if (b && b === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.jff = function () {
        return (this.xdr && !this.pwu)
    };
    this.wac = function () {}
}

function rsb() {
    this.eua = null;
    this.ked = null;
    this.lfv = -1;
    this.xek = -1;
    this.rmw = false;
    this.xcl = false;
    this.heo = false;
    this.ibt = 0;
    this.wal = 0;
    var a = 200;
    this.hre = function (c, f, d, b, e) {
        this.eua = b;
        this.ked = e;
        rsb.prototype.hre.call(this, c, f, d)
    };
    this.jrn = function (b, d, c) {
        this.rmw = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.jff()) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
        if (this.rmw === true && c === true) {
            clearTimeout(this.ibt);
            this.ibt = setTimeout(this.fps, a)
        }
    };
    this.flo = function () {
        return this.rmw
    };
    this.sic = function (b, c) {
        this.heo = b;
        c = (c === false) ? false : true;
        clearTimeout(this.wal);
        if (this.heo === true && c === true) {
            this.wal = setTimeout(this.mhy, a)
        }
    };
    this.mns = function () {
        return this.heo
    };
    this.znm = function (b, c) {
        this.ked = b;
        if (c && c === true && this.jff()) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.dat = function (b) {
        this.xcl = b
    };
    this.czv = function () {
        return this.xcl
    };
    this.bxc = function () {};
    this.mhy = function () {};
    this.fps = function () {}
}
rsb.prototype = new qdi;

function zzn() {
    var a = this;
    this.gcf = null;
    this.value = "";
    this.vqy = false;
    this.vak = "round";
    this.mki = null;
    this.shp = "bold";
    this.bgf = null;
    this.lty = null;
    this.mrg = null;
    this.qwu = null;
    this.pxd = null;
    this.vpk = 0;
    this.rjs = 6;
    this.vod = -2;
    this.dig = 2;
    this.awt = -4;
    this.jhh = 8;
    this.kqa = 26;
    this.ugz = 0;
    this.dvm = 1;
    this.eso = 0;
    this.qxq = 0;
    this.bfa = -1;
    this.mfa = 10;
    this.ngh = 0;
    this.wke = 0;
    this.ryy = false;
    this.ogg = -1;
    this.lqm = true;
    this.hre = function (d, g, e, c, b, f) {
        zzn.prototype.hre.call(this, d, g, e, c, f);
        this.gcf = b;
        if (this.eua) {
            this.vpk = Math.round(this.eua.height / 2)
        }
    };
    this.ybb = function (b) {
        try {
            this.vak = b.uqc;
            this.mki = b.font;
            this.shp = b.lfx;
            this.bgf = b.backgroundColor;
            this.lty = b.qgm;
            this.mrg = b.qmj;
            this.qwu = b.zyf;
            if (b.borderColor && b.tbr) {
                this.pxd = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.pxd.addColorStop(0, b.borderColor);
                this.pxd.addColorStop(1, b.tbr)
            } else {
                this.pxd = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ipo = function (b) {
        try {
            this.kqa = b.doh;
            this.ugz = b.gmb;
            this.rjs = b.zvt;
            this.vod = b.ihx;
            this.dig = b.ngv;
            this.awt = b.kos;
            this.jhh = b.edk;
            this.dvm = b.iej
        } catch (c) {
            console.error(c)
        }
    };
    this.nhj = function () {
        if (this.mwe()) {
            clearInterval(this.ogg);
            this.ogg = -1
        }
        this.lqm = false;
        this.ogg = setInterval(this.dah, 400)
    };
    this.mpj = function () {
        this.lqm = true;
        clearInterval(this.ogg);
        this.ogg = -1;
        this.fyq(false)
    };
    this.fyq = function (b, c) {
        this.ryy = b;
        c = (c === false) ? false : true;
        if (c === true && this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.mwe = function () {
        return (this.ogg >= 0)
    };
    this.qar = function (b, c) {
        this.value = b;
        if (c && c === true && this.jff()) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.jta = function (b) {
        this.eso = Math.round(b / this.mfa);
        this.ngh = 0;
        this.wke = 0;
        this.qxq = new Date().getTime();
        this.bfa = setTimeout(this.pzu, this.eso)
    };
    this.kbu = function () {
        if (a.bfa >= 0) {
            clearTimeout(a.bfa);
            a.bfa = -1
        }
        a.ngh = 0;
        a.fps()
    };
    this.jel = function () {
        if (a.bfa >= 0) {
            clearInterval(a.bfa);
            a.bfa = -1
        }
        a.ngh = 1;
        a.fps()
    };
    this.pzu = function () {
        var b = 0,
            c = new Date().getTime();
        a.wke += 1;
        if (a.wke < a.mfa) {
            a.ngh += 1 / a.mfa;
            a.parent.wac(a.x, a.y, a.width, a.height);
            b = a.eso + (a.wke * a.eso - (c - a.qxq));
            a.bfa = setTimeout(a.pzu, b)
        } else {
            a.jel()
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.dvm,
            d = (this.vak === "roundedT" || this.vak === "roundedL") ? this.jhh : 0,
            b = (this.vak === "roundedT" || this.vak === "roundedR") ? this.jhh : 0,
            o = (this.vak === "roundedB" || this.vak === "roundedR") ? this.jhh : 0,
            q = (this.vak === "roundedB" || this.vak === "roundedL") ? this.jhh : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.ryy || this.ngh >= 1) {
            if (this.vak === "round") {
                pze.sog.qnf(p, this.x + this.width / 2, this.y + this.height / 2, l, this.lty, 1, this.pxd, this.dvm, 1)
            } else {
                if (this.vak === "rect") {
                    pze.sog.zwt(p, this.x, this.y, this.width, this.height, this.jhh, this.lty, this.pxd, this.dvm)
                } else {
                    if (this.vak === "roundedT" || this.vak === "roundedB" || this.vak === "roundedR" || this.vak === "roundedL") {
                        pze.sog.lng(p, this.x, this.y, this.width, this.height, d, b, o, q, this.lty, 1, this.pxd, this.dvm, 1)
                    }
                }
            }
            if (this.gcf || this.eua) {
                if (this.flo()) {
                    p.drawImage((this.gcf) ? this.gcf : this.eua, 0, this.vpk, this.eua.width, this.vpk, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.gcf) ? this.gcf : this.eua, 0, 0, this.eua.width, this.vpk, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.vqy && this.czv() === false) {
                p.globalAlpha = 0.5
            }
            if (this.ngh > 0) {
                if (this.vak === "round") {
                    pze.sog.qnf(p, this.x + this.width / 2, this.y + this.height / 2, l, this.bgf, 1 - this.wke / this.mfa, this.pxd, this.dvm, 1);
                    pze.sog.qnf(p, this.x + this.width / 2, this.y + this.height / 2, l, this.lty, this.wke / this.mfa)
                } else {
                    if (this.vak === "rect") {
                        kal = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        kal.addColorStop(1 - this.ngh, this.bgf);
                        kal.addColorStop(1 - this.ngh, this.lty);
                        pze.sog.ekt(p, this.x, this.y, this.width, this.height, this.jhh, kal, 1, this.pxd, this.dvm, 1)
                    } else {
                        if (this.vak === "roundedT" || this.vak === "roundedB" || this.vak === "roundedR" || this.vak === "roundedL") {
                            kal = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            kal.addColorStop(1 - this.ngh, this.bgf);
                            kal.addColorStop(1 - this.ngh, this.lty);
                            pze.sog.lng(p, this.x, this.y, this.width, this.height, d, b, o, q, kal, 1, this.pxd, this.dvm, 1)
                        }
                    }
                }
            } else {
                if (this.vak === "round") {
                    pze.sog.qnf(p, this.x + this.width / 2, this.y + this.height / 2, l, this.bgf, 1, this.pxd, this.dvm, 1)
                } else {
                    if (this.vak === "rect") {
                        pze.sog.zwt(p, this.x, this.y, this.width, this.height, this.jhh, this.bgf, this.pxd, this.dvm)
                    } else {
                        if (this.vak === "roundedT" || this.vak === "roundedB" || this.vak === "roundedR" || this.vak === "roundedL") {
                            pze.sog.lng(p, this.x, this.y, this.width, this.height, d, b, o, q, this.bgf, 1, this.pxd, this.dvm, 1)
                        }
                    }
                }
            }
            if (this.eua) {
                if (this.flo()) {
                    p.drawImage(this.eua, 0, this.vpk, this.eua.width, this.vpk, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.eua, 0, 0, this.eua.width, this.vpk, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.ugz > 0) {
            f = (this.flo()) ? 2 : 0;
            c = this.ugz;
            p.font = this.shp + " " + c + "px " + this.mki;
            p.fillStyle = this.qwu;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.rjs) {
                e = ((this.width - 2 * this.rjs) / n);
                c = Math.round(e * c) - 1;
                p.font = this.shp + " " + c + "px " + this.mki
            }
            if (c > this.height / 2 - this.rjs) {
                e = ((this.height / 2 - this.rjs) / c);
                c = Math.round(e * c) - 1;
                p.font = this.shp + " " + c + "px " + this.mki
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.vod, this.y - this.awt + k + f)
        }
        if (this.ked && this.ked != "" && this.kqa > 0) {
            g = this.ked.split("|");
            f = (this.flo()) ? 2 : 0;
            c = this.kqa;
            p.font = this.shp + " " + c + "px " + this.mki;
            p.fillStyle = this.mrg;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.rjs) {
                e = ((this.width - 2 * this.rjs) / n);
                c = Math.round(e * c) - 1;
                p.font = this.shp + " " + c + "px " + this.mki
            }
            if (this.ugz > 0) {
                if (c * g.length > this.height / 2 - this.rjs) {
                    e = ((this.height / 2 - this.rjs) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.shp + " " + c + "px " + this.mki
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.rjs) {
                    e = ((this.height - 2 * this.rjs) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.shp + " " + c + "px " + this.mki
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.vod, this.y - this.dig + k + f);
                k += c
            }
        }
        p.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    };
    this.dah = function () {
        if (!a.lqm) {
            a.fyq(!a.ryy)
        }
    };
    this.mhy = function () {
        a.heo = false
    };
    this.fps = function () {
        a.rmw = false;
        if (a.jff()) {
            a.parent.wac(a.x, a.y, a.width, a.height)
        }
    }
}
zzn.prototype = new rsb;

function xad() {
    this.jkw = 0;
    this.imb = [];
    this.hre = function (a, c, b) {
        xad.prototype.hre.call(this, a, c, b);
        this.jkw = 0;
        this.imb = []
    };
    this.soq = function (a, b) {
        if (b && b === true) {
            this.imb.unshift(a)
        } else {
            this.imb.push(a)
        }
    };
    this.nss = function (a) {
        if (a && a === true) {
            this.imb.shift()
        } else {
            this.imb.pop()
        }
    };
    this.zpd = function (a) {
        this.jkw = a
    };
    this.yhi = function () {
        return this.jkw
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        if (this.jkw < this.imb.length) {
            this.imb[this.jkw].wac()
        }
        try {
            if (this.hea && this.eat) {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        } catch (a) {}
    }
}
xad.prototype = new qdi;

function buw() {
    var a = this;
    this.rnb = null;
    this.jkw = 0;
    this.imb = [];
    this.bgf = null;
    this.lmf = null;
    this.gwd = null;
    this.ufg = new rcu();
    this.hre = function (b, d, c) {
        buw.prototype.hre.call(this, b, d, c);
        this.xdr = false;
        this.jkw = 0;
        this.imb = [];
        this.ywy()
    };
    this.ywy = function () {
        this.rnb = new xes();
        this.rnb.hre();
        this.rnb.nip("buttons")
    };
    this.ipo = function (f) {
        try {
            var d = this.rnb.yns("buttons"),
                c = 0,
                b = d.length;
            this.ufg = f.rlo;
            for (; c < b; c++) {
                d[c].ipo(f.gvo)
            }
            this.rnb.nly("return", "#sod", [f.dwj]);
            this.rnb.nly("page", "#sod", [f.dhw]);
            this.rnb.nly("prev", "#sod", [f.wxe]);
            this.rnb.nly("next", "#sod", [f.rql])
        } catch (g) {
            console.error(g)
        }
    };
    this.ybb = function (d) {
        try {
            var f = this.rnb.yns("buttons");
            this.bgf = d.backgroundColor;
            this.lmf = d.stp;
            this.gwd = d.gui;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].ybb((this.parent.tgq.dri === false) ? d.kfs : (this.parent.kip === pze.tgq.oyu) ? d.jvu : d.ddn)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.tzk = function (m, l) {
        var k = this.rnb.yns("buttons"),
            g = this.rnb.sqv("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.jff() == true) {
                if (b.czv() && !b.mns()) {
                    if (b != g) {
                        b.jrn(true, true)
                    }
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn");
                    b.bxc();
                    for (var d = 0; d < f; d++) {
                        k[d].sic(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.yew = function () {
        var e = this.rnb.yns("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.flo() === true) {
                c.jrn(false, true);
                return true
            }
        }
        return false
    };
    this.oaf = function (k) {
        var g = this.rnb.yns("buttons"),
            c = this.rnb.sqv("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.lfv) {
                if (d.czv() && !d.mns()) {
                    if (d != c) {
                        d.jrn(true, true)
                    }
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn");
                    d.bxc();
                    for (var e = 0; e < b; e++) {
                        g[e].sic(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.mgf = function () {
        var e = this.rnb.yns("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.flo() === true) {
                c.jrn(false, true);
                return true
            }
        }
        return false
    };
    this.soq = function (b, c) {
        if (c && c === true) {
            this.imb.unshift(b);
            this.jkw++
        } else {
            this.imb.push(b)
        }
    };
    this.nss = function (b) {
        if (b && b === true) {
            this.imb.shift();
            this.jkw--
        } else {
            this.imb.pop()
        }
    };
    this.ptn = function () {
        return this.imb.length
    };
    this.vgl = function (e, c, b) {
        var d = (this.parent.tgq.dri === false) ? c.kfs : (this.parent.kip === pze.tgq.oyu) ? c.jvu : c.ddn;
        if (this.parent.zkd === false) {
            this.rnb.vnv("return", this.xso(e.dwj, this.parent.language.ret, (this.parent.tgq.bmx === false) ? b : this.parent.cpo.ewl("btn_re"), this.zoa, (this.parent.zew.hdu) ? this.parent.zew.hdu : null, e.gvo, d), ["buttons"]);
            this.rnb.vnv("page", this.xso(e.dhw, (this.jkw + 1) + "/" + this.imb.length, b, this.xue, null, e.gvo, d), ["buttons"]);
            this.rnb.vnv("prev", this.xso(e.wxe, this.parent.language.qej, (this.parent.tgq.bmx === false) ? b : this.parent.cpo.ewl("btn_pr"), this.qqy, (this.parent.zew.jjj) ? this.parent.zew.jjj : null, e.gvo, d), ["buttons"]);
            this.rnb.vnv("next", this.xso(e.rql, this.parent.language.xls, (this.parent.tgq.bmx === false) ? b : this.parent.cpo.ewl("btn_ne"), this.xue, (this.parent.zew.gwy) ? this.parent.zew.gwy : null, e.gvo, d), ["buttons"])
        }
    };
    this.xso = function (g, k, b, j, d, f, e) {
        var c = new zzn();
        c.hre(g, this.context2D, null, b, null, k);
        c.parent = this;
        c.bxc = j;
        c.ipo(f);
        c.ybb(e);
        if (d) {
            c.lfv = d.dzq
        }
        return c
    };
    this.wac = function (l, j, m, e) {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.rnb.yns("buttons"),
            d = null;
        if (this.parent.tgq.dri === false) {
            d = this.parent.cpo.ewl("btn_back")
        } else {
            if (this.parent.kip === pze.tgq.oyu) {
                d = (this.parent.cpo.ewl("h_right" + this.jkw) != null) ? this.parent.cpo.ewl("h_right" + this.jkw) : this.parent.cpo.ewl("h_right")
            } else {
                d = (this.parent.cpo.ewl("h_left" + this.jkw) != null) ? this.parent.cpo.ewl("h_left" + this.jkw) : this.parent.cpo.ewl("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.jkw >= 0 && this.jkw < this.imb.length) {
            this.imb[this.jkw].wac()
        }
        if (d) {
            k = n.createLinearGradient(this.ufg.x, this.ufg.y, this.ufg.x + this.ufg.width, this.ufg.y);
            k.addColorStop(0.2, this.lmf);
            k.addColorStop(1, this.gwd);
            n.fillStyle = k;
            n.save();
            if (this.parent.tgq.dri === false) {
                if (this.parent.kip === pze.tgq.rwn) {
                    n.translate(this.ufg.width / 2, this.ufg.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.ufg.width / 2, -this.ufg.height / 2)
                }
                n.fillRect(this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height)
            }
            n.drawImage(d, this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height);
            n.restore()
        } else {
            if (this.bgf != null) {
                n.fillStyle = this.bgf;
                n.fillRect(this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].wac()
        }
        n.restore();
        if (this.hea && this.eat) {
            if (b) {
                this.hea.drawImage(this.eat, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.ztc = function (f, g) {
        var e = this.rnb.sqv("page"),
            c = this.rnb.sqv("return"),
            b = this.rnb.sqv("next"),
            d = this.rnb.sqv("prev");
        if (e != null) {
            e.znm((this.jkw + 1) + "/" + this.imb.length)
        }
        if (c != null) {
            c.cug(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.imb.length > 1) {
                    b.cug(f);
                    d.cug(f);
                    e.cug(f)
                } else {
                    b.cug(false);
                    d.cug(false);
                    e.cug(false)
                }
            } else {
                b.cug(f);
                d.cug(f);
                e.cug(f)
            }
        }
        if (g && g === true) {
            this.wac()
        }
    };
    this.kfu = function () {
        this.jkw = 0;
        this.ztc(true);
        this.cug(true, true)
    };
    this.snh = function () {
        this.ztc(false);
        this.cug(false, true)
    };
    this.azy = function () {
        var d = this.rnb.sqv("page"),
            b = this.rnb.sqv("next"),
            c = this.rnb.sqv("prev");
        this.jkw = (this.jkw < this.imb.length) ? this.jkw : this.imb.length - 1;
        this.jkw = (this.jkw < 0) ? 0 : this.jkw;
        d.znm((this.jkw + 1) + "/" + this.imb.length, true);
        if (this.imb.length == 1) {
            b.cug(false);
            c.cug(false);
            d.cug(false)
        } else {
            b.cug(true);
            c.cug(true);
            d.cug(true)
        }
    };
    this.wjx = function (c) {
        var e = this.rnb.yns("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].dat(c)
        }
    };
    this.zoa = function () {
        a.parent.zoq()
    };
    this.xue = function () {
        var b = a.rnb.sqv("page");
        if (a.jkw < a.imb.length - 1) {
            a.jkw++
        } else {
            a.jkw = 0
        }
        if (b) {
            b.znm((a.jkw + 1) + "/" + a.imb.length, false)
        }
        a.wac()
    };
    this.qqy = function () {
        var b = a.rnb.sqv("page");
        if (a.jkw > 0) {
            a.jkw--
        } else {
            a.jkw = a.imb.length - 1
        }
        if (b) {
            b.znm((a.jkw + 1) + "/" + a.imb.length, false)
        }
        a.wac()
    }
}
buw.prototype = new qdi;

function urz() {
    this.eua = new Image();
    this.rbq = null;
    this.nbg = [];
    this.yxl = [];
    this.kpa = null;
    this.mki = null;
    this.shp = "bold";
    this.niz = null;
    this.mrg = null;
    this.leb = null;
    this.zml = 0;
    this.fpc = [];
    this.zcy = null;
    this.qji = 40;
    this.lfy = 18;
    this.pjj = 1;
    this.hre = function (b, d, c, a) {
        this.eua = a;
        this.nbg = [];
        this.fpc = [];
        urz.prototype.hre.call(this, b, d, c)
    };
    this.ipo = function (a) {
        try {
            this.zcy = a.hhq;
            this.fpc = a.tyg;
            this.lfy = a.fontSize;
            this.qji = a.znj;
            this.pjj = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.ybb = function (a) {
        try {
            this.kpa = a.flr;
            this.mki = a.font;
            this.shp = a.lfx;
            this.niz = a.qdt;
            this.mrg = a.qmj;
            this.leb = a.iws
        } catch (b) {
            console.error(b)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.mrg;
        if (this.niz) {
            b.strokeStyle = this.niz
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.pjj;
        b.font = this.shp + " " + this.lfy + "px " + this.mki;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.eua, 0, 0);
        if ((this.height - this.eua.height) > 0) {
            var a = this.parent.ufg;
            b.drawImage(this.eua, a.x, a.y, a.width, this.eua.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.rbq && this.zcy) {
            pze.sog.ylo(b, this.rbq, this.leb, this.zcy.x, this.zcy.y, this.zcy.width, this.zcy.height, this.kpa, this.qji, this.shp)
        }
        for (var c = 0; c < this.nbg.length; c++) {
            this.tll(this.nbg[c], this.fpc[c], this.lfy, this.mki)
        }
        b.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    };
    this.fzf = function (j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.yxl = [];
        b.save();
        b.font = this.shp + " " + g + "px " + d;
        this.ibz(b, g, j, f, d);
        for (var e = 0, a = this.yxl.length; e < a; e++) {
            c = (f.height + this.zml) / (this.yxl.length + 1) * (e + 1);
            b.fillText(this.yxl[e], (f.x), f.y + c);
            if (this.niz != null && b.lineWidth >= 1) {
                b.strokeText(this.yxl[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.tll = function (g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.yxl = [];
        a.save();
        a.font = this.shp + " " + f + "px " + c;
        this.ibz(a, f, g, e, c);
        for (var d = 0; d < this.yxl.length; d++) {
            b = (e.height + this.zml) / (this.yxl.length + 1) * (d + 1);
            a.fillText(this.yxl[d], (e.x + e.width / 2), e.y + b);
            if (this.niz != null && a.lineWidth >= 1) {
                a.strokeText(this.yxl[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.ibz = function (m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.zml = o;
        if (this.zml * n > g.height) {
            a = g.height / (this.zml * n);
            this.zml = Math.round(a * this.zml) - 1;
            m.font = this.shp + " " + this.zml + "px " + b;
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
                this.yxl[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.yxl[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.yxl[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
urz.prototype = new qdi;

function jwu() {
    var a = this;
    this.eua = new Image();
    this.opw = "";
    this.yjk = "";
    this.rxj = -1;
    this.iqd = 0;
    this.szy = 0;
    this.rsq = 5000;
    this.mki = null;
    this.shp = "bold";
    this.mrg = null;
    this.bgf = null;
    this.lhf = null;
    this.jhh = 0;
    this.jnw = 0;
    this.rjs = 0;
    this.dvm = 0;
    this.pdf = 0;
    this.lfy = 0;
    this.ftk = null;
    this.fni = 0;
    this.ift = [];
    this.vtv = 0;
    this.ali = true;
    this.xbx = 0;
    this.ipo = function (b) {
        try {
            this.lfy = b.fontSize;
            this.pdf = b.vmp;
            this.jhh = b.edk;
            this.jnw = b.fov;
            this.rjs = b.zvt;
            this.dvm = b.iej
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            this.mki = b.font;
            this.shp = b.lfx;
            this.bgf = b.backgroundColor;
            this.mrg = b.qmj;
            this.lhf = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.yjj = function (e, c, d, b) {
        this.opw = e;
        this.yjk = c;
        this.rxj = d;
        this.iqd = b;
        this.ali = true;
        clearTimeout(this.xbx);
        if (this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.tmw = function (b, c) {
        this.opw = b;
        this.yjk = undefined;
        this.ali = c;
        if (this.ali) {
            clearTimeout(this.xbx)
        }
        if (this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.vfw = function () {
        this.opw = "";
        this.yjk = undefined;
        this.ali = true;
        clearTimeout(this.xbx);
        if (this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.ldn = function (b, c) {
        this.fni = 0;
        this.vtv = b;
        this.ali = false;
        if (c && c > 0) {
            this.xbx = setTimeout(this.gqs, c)
        } else {
            this.xbx = setTimeout(this.gqs, this.rsq)
        }
    };
    this.unh = function (b) {
        this.fni = 0;
        this.vtv = b;
        if (this.ali) {
            this.tmw(this.ift[this.vtv][this.fni], false)
        }
        this.ali = false;
        this.xbx = setTimeout(this.gqs, this.rsq)
    };
    this.aun = function () {
        this.ali = false;
        this.xbx = setTimeout(this.gqs, this.rsq)
    };
    this.qwp = function () {
        this.ali = true;
        clearTimeout(this.xbx)
    };
    this.chp = function () {
        return this.ali
    };
    this.gqs = function () {
        if (!a.ali) {
            a.fni = (a.ift[a.vtv][a.fni + 1] != undefined) ? a.fni + 1 : 0;
            a.xbx = setTimeout(a.gqs, a.rsq);
            a.tmw(a.ift[a.vtv][a.fni], a.ali)
        }
    };
    this.ybp = function (b) {
        this.ift[b] = []
    };
    this.hqa = function (d, b) {
        for (var c = 0; c < d.length; c++) {
            this.ift[b][c] = d[c]
        }
    };
    this.kxo = function (b) {
        this.ftk = b
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var o = this.context2D,
            m = this.lfy,
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
            q = (this.lhf && this.dvm) ? this.rjs + this.dvm : this.rjs;
        o.save();
        if (this.bgf) {
            pze.sog.zwt(o, this.x, this.y, this.width, this.height, this.jhh, this.bgf, this.lhf, this.dvm)
        } else {
            if (this.ftk) {
                o.putImageData(this.ftk, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.mrg;
        o.font = this.shp + " " + m + "px " + this.mki;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.opw).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.yjk != undefined && this.rxj >= 0) {
            j = o.measureText(this.yjk).width;
            b += j;
            b += this.iqd * (this.eua.width + this.jnw);
            if (this.iqd % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.iqd / 2) * (this.eua.width + this.jnw);
                x = s - n;
                e = s + (this.iqd) * (this.eua.width + this.jnw) + n
            } else {
                s = this.x + (this.width) / 2 - (this.iqd / 2) * (this.eua.width) - (this.iqd - 1) / 2 * this.jnw;
                x = s - n;
                e = s + (this.iqd) * (this.eua.width) + (this.iqd - 1) * this.jnw + n
            }
            for (var u = 0; u < this.iqd; u++) {
                o.drawImage(this.eua, 0, this.szy * this.rxj, this.eua.width, this.szy, s + (u * (this.jnw + this.eua.width)), this.y + ((this.height - this.szy) / 2), this.eua.width, this.szy)
            }
            o.textAlign = "right";
            o.fillText(this.opw, x, this.y + m + this.pdf);
            o.textAlign = "left";
            o.fillText(this.yjk, e, this.y + m + this.pdf)
        } else {
            if (this.opw != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.shp + " " + m + "px " + this.mki
                    }
                    g = [];
                    d = "";
                    v = 0;
                    z = 0;
                    t = 0;
                    for (var p = t; p < this.opw.length; p++) {
                        d += this.opw.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.opw.charAt(p) == " ") || (this.opw.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.opw.length - 1) {
                            g[z] = this.opw.substring(t, this.opw.length)
                        } else {
                            if (this.opw.charAt(p) == "|") {
                                g[z] = this.opw.substring(t, v);
                                z++;
                                t = v + 1;
                                d = this.opw.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[z] = this.opw.substring(t, v);
                                    z++;
                                    t = v + 1;
                                    d = this.opw.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.lfy) {
                    o.font = this.shp + " " + (m - 3) + "px " + this.mki;
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
jwu.prototype = new qdi;

function saq() {
    this.aqz = null;
    this.bik = null;
    this.jpk = null;
    this.wva = false;
    this.xcl = false;
    this.oll = true;
    this.ixb = false;
    this.uwi = false;
    this.usf = 0;
    this.zgr = 0;
    this.twd = 0;
    this.zfo = "";
    this.szs = "";
    this.lmf = null;
    this.gwd = null;
    this.mki = "arial";
    this.shp = "bold";
    this.cng = "arial";
    this.whi = "rgb(0,0,200)";
    this.iaj = "rgb(255,255,255)";
    this.soi = "rgb(0,0,150)";
    this.bgf = "rgb(220,240,255)";
    this.oja = "rgb(130,220,255)";
    this.aip = "rgb(130,190,255)";
    this.mrg = "rgb(255,255,255)";
    this.pct = "rgb(130,190,255)";
    this.nkl = "rgb(100,160,255)";
    this.umr = "rgb(255,255,255)";
    this.ufg = new rcu();
    this.zcy = null;
    this.ucg = null;
    this.mmr = null;
    this.ixq = null;
    this.lfc = null;
    this.gur = null;
    this.fse = null;
    this.pcl = null;
    this.dvm = 2;
    this.pue = 3;
    this.hhs = 10;
    this.pdf = 3;
    this.vod = 5;
    this.cnc = 36;
    this.lfy = 30;
    this.pyp = 22;
    this.hre = function (a, c, b) {
        saq.prototype.hre.call(this, a, c, b);
        this.ixb = pze.spi.value37
    };
    this.dlu = function (b) {
        try {
            var a = (pze.spi.value37) ? b.phk : b.dun;
            this.zcy = b.hhq;
            this.ucg = b.rcj;
            this.mmr = b.ewa;
            this.ixq = b.tcm;
            this.lfc = b.xle;
            this.gur = b.wmf;
            this.ufg = b.rlo;
            this.cnc = b.jvg;
            this.lfy = b.fontSize;
            this.pyp = b.ylb;
            this.pdf = b.vmp;
            this.vod = b.ihx;
            this.dvm = b.iej;
            this.pue = b.nma;
            this.hhs = b.oea;
            if (pze.spi.value36) {
                this.szs = this.parent.cgv(this.parent.language.qdn)
            } else {
                if (pze.spi.value37) {
                    this.szs = this.parent.cgv(this.parent.language.tos)
                }
            }
            this.aqz = [];
            this.bik = this.xso(a.ojq, this.parent.language.ret, this.parent.bzz, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_re"), b.gvo);
            this.aqz.push(this.bik);
            if (pze.spi.value37) {
                this.jpk = this.xso(a.dwj, this.parent.language.jfi, this.parent.crf, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_e"), b.gvo);
                this.aqz.push(this.jpk)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ipo = function (b) {
        try {
            var a = (pze.spi.value37) ? b.phk : b.dun;
            this.zcy = b.hhq;
            this.ucg = b.rcj;
            this.mmr = b.ewa;
            this.ixq = b.tcm;
            this.lfc = b.xle;
            this.gur = b.wmf;
            this.ufg = b.rlo;
            if (this.bik) {
                this.bik.sod(a.ojq);
                this.bik.ipo(b.gvo)
            }
            if (this.jpk) {
                this.jpk.sod(a.dwj);
                this.jpk.ipo(b.gvo)
            }
            this.cnc = b.jvg;
            this.lfy = b.fontSize;
            this.pyp = b.ylb;
            this.pdf = b.vmp;
            this.vod = b.ihx;
            this.dvm = b.iej;
            this.pue = b.nma;
            this.hhs = b.oea
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (c) {
        try {
            this.mki = c.font;
            this.shp = c.lfx;
            this.whi = c.zay;
            this.iaj = c.ace;
            this.soi = c.nac;
            this.bgf = c.backgroundColor;
            this.oja = c.idc;
            this.aip = c.rtb;
            this.mrg = c.qmj;
            this.pct = c.fcw;
            this.nkl = c.vgg;
            this.umr = c.ucc;
            this.lmf = c.stp;
            this.gwd = c.gui;
            for (var b = 0, a = this.aqz.length; b < a; b++) {
                this.aqz[b].ybb((this.parent.tgq.dri === true) ? c.daz : c.kfs)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.tzk = function (d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.aqz.length; f < b; f++) {
            var a = this.aqz[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.jff() === true) {
                if (a.czv() === true && a.mns() === false && this.oll) {
                    a.jrn(true, true);
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn");
                    a.bxc();
                    for (var e = 0; e < b; e++) {
                        this.aqz[e].sic(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.gur.x && c <= this.gur.x + this.gur.width && g >= this.gur.y && g <= this.gur.y + this.gur.height && this.ixb && this.xcl) {
            this.dei()
        }
        return true
    };
    this.yew = function () {};
    this.oaf = function () {};
    this.mgf = function () {};
    this.xso = function (d, f, e, a, c) {
        var b = new zzn();
        b.hre(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.bxc = e;
        b.ipo(c);
        return b
    };
    this.wjx = function (c) {
        this.xcl = c;
        for (var b = 0, a = this.aqz.length; b < a; b++) {
            this.aqz[b].dat(c)
        }
    };
    this.dei = function () {
        this.oll = !this.oll;
        this.parent.wac()
    };
    this.mcy = function (d, a, c, b) {
        this.uwi = false;
        this.wbv = true;
        this.zfo = this.rys(b);
        this.usf = d;
        this.zgr = a;
        this.twd = c;
        if (this.jff()) {
            this.wjx(true);
            this.wac()
        }
    };
    this.rys = function (b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.ook(d) + ":" + this.ook(a) + ":" + this.ook(c)
    };
    this.ook = function (a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.gml = function (a, b) {
        this.uwi = a;
        if (b && b === true) {
            this.wac()
        }
    };
    this.cug = function (a, b) {
        this.wbv = false;
        if (pze.spi.value37) {
            this.oll = false
        }
        this.gml(a, false);
        saq.prototype.cug.call(this, a, b)
    };
    this.wac = function (j, f, k, d) {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.cpo.ewl("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.bgf;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.ufg.x, this.ufg.y, this.ufg.x + this.ufg.width, this.ufg.y);
            g.addColorStop(0.2, this.lmf);
            g.addColorStop(1, this.gwd);
            l.fillStyle = g;
            l.save();
            if (this.parent.kip === pze.tgq.rwn) {
                l.translate(this.ufg.width / 2, this.ufg.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.ufg.width / 2, -this.ufg.height / 2)
            }
            l.fillRect(this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height);
            l.drawImage(c, this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height);
            l.restore()
        } else {
            if (this.parent.tgq.dri === true) {
                pze.sog.ssm(l, this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height, this.lmf, 1)
            }
        }
        pze.sog.zwt(l, this.zcy.x, this.zcy.y, this.zcy.width, this.zcy.height, 0, this.oja);
        pze.sog.ylo(l, this.szs, this.mrg, this.zcy.x, this.zcy.y + this.pdf, this.zcy.width, this.zcy.height, this.mki, this.cnc, this.shp);
        pze.sog.zwt(l, this.ucg.x, this.ucg.y, this.ucg.width, this.ucg.height, 0, this.oja);
        if (pze.spi.value36) {
            pze.sog.rig(l, this.parent.cgv(this.parent.language.hac), this.mrg, this.ucg.x, this.ucg.y + this.pdf, this.ucg.width, this.ucg.height, this.mki, this.lfy, this.shp, this.vod)
        } else {
            if (pze.spi.value37) {
                pze.sog.rig(l, this.parent.cgv(this.parent.language.bji), this.mrg, this.ucg.x, this.ucg.y + this.pdf, this.ucg.width, this.ucg.height, this.mki, this.lfy, this.shp, this.vod)
            }
        }
        pze.sog.zwt(l, this.mmr.x, this.mmr.y, this.mmr.width, this.mmr.height, 0, this.aip);
        pze.sog.rig(l, this.parent.cgv(this.parent.language.npq), this.mrg, this.mmr.x, this.mmr.y + this.pdf, this.mmr.width, this.mmr.height, this.mki, this.lfy, this.shp, this.vod);
        pze.sog.zwt(l, this.ixq.x, this.ixq.y, this.ixq.width, this.ixq.height, 0, this.oja);
        pze.sog.rig(l, this.parent.cgv(this.parent.language.hsf), this.mrg, this.ixq.x, this.ixq.y + this.pdf, this.ixq.width, this.ixq.height, this.mki, this.lfy, this.shp, this.vod);
        if (this.ixb) {
            this.swb(l)
        }
        if (this.wbv) {
            if (pze.spi.value36) {
                pze.sog.gwf(l, this.usf, this.mrg, this.ucg.x, this.ucg.y + this.pdf, this.ucg.width, this.ucg.height, this.mki, this.lfy, this.shp, this.vod)
            } else {
                if (pze.spi.value37) {
                    pze.sog.gwf(l, this.zfo, this.mrg, this.ucg.x, this.ucg.y + this.pdf, this.ucg.width, this.ucg.height, this.mki, this.lfy, this.shp, this.vod)
                }
            }
            pze.sog.gwf(l, this.parent.fcy(this.zgr), this.mrg, this.mmr.x, this.mmr.y + this.pdf, this.mmr.width, this.mmr.height, this.mki, this.lfy, this.shp, this.vod);
            pze.sog.gwf(l, this.parent.fcy(this.twd), this.mrg, this.ixq.x, this.ixq.y + this.pdf, this.ixq.width, this.ixq.height, this.mki, this.lfy, this.shp, this.vod)
        }
        for (var b = 0, e = this.aqz.length; b < e; b++) {
            this.aqz[b].wac()
        }
        if (this.uwi) {
            pze.sog.ekt(l, this.lfc.x, this.lfc.y, this.lfc.width, this.lfc.height, this.pue, this.whi, 0.3, this.soi, this.dvm, 1);
            pze.sog.ylo(l, this.parent.cgv(this.parent.language.sza), this.iaj, this.lfc.x, this.lfc.y, this.lfc.width, this.lfc.height, this.mki, this.lfy, this.shp)
        }
        l.restore();
        if (this.hea && this.eat) {
            if (a) {
                this.hea.drawImage(this.eat, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.swb = function (b) {
        var c = Math.round(this.gur.height / 2),
            a = Math.round(this.gur.x + c),
            d = Math.round(this.gur.y + c / 2);
        b.save();
        pze.sog.zwt(b, this.gur.x, this.gur.y, this.gur.width, this.gur.height, this.hhs, this.pct, this.nkl, this.dvm);
        pze.sog.ylo(b, this.parent.language.kge, this.mrg, this.gur.x + this.gur.height, this.gur.y, this.gur.width - this.gur.height, this.gur.height, this.mki, this.pyp, this.shp);
        pze.sog.ssm(b, a, d, c, c, null, 0, this.umr, this.dvm, 1);
        if (this.oll) {
            pze.sog.ssm(b, a + c / 4, d + c / 4, c / 2, c / 2, this.umr, 1)
        }
        b.restore()
    }
}
saq.prototype = new qdi;

function rme() {
    var a = this;
    this.mhy = function () {
        a.heo = false
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.eua != null) {
            b.drawImage(this.eua, 0, 0, this.eua.width, this.eua.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
rme.prototype = new rsb;

function xzl() {
    this.rbq = "";
    this.ked = "";
    this.eua = null;
    this.kpa = "sans-serif";
    this.jmh = "sans-serif";
    this.shp = "bold";
    this.leb = null;
    this.mrg = null;
    this.lhf = null;
    this.tef = null;
    this.bgf = null;
    this.qji = 16;
    this.kqa = 20;
    this.ywo = 0;
    this.dig = 0;
    this.dvm = 2;
    this.cdp = 3;
    this.vjr = 3;
    this.nmw = 3;
    this.tav = 3;
    this.hre = function (a, e, b, d, c) {
        xzl.prototype.hre.call(this, a, e, b);
        this.rbq = d;
        this.ked = c
    };
    this.ipo = function (a) {
        try {
            this.qji = a.znj;
            this.kqa = a.doh;
            this.ywo = a.hji;
            this.dig = a.ngv;
            this.dvm = a.iej;
            this.cdp = a.xjv;
            this.vjr = a.img;
            this.nmw = a.jny;
            this.tav = a.drx
        } catch (b) {
            console.error(b)
        }
    };
    this.ybb = function (a) {
        try {
            this.kpa = a.flr;
            this.jmh = a.lbw;
            this.shp = a.lfx;
            this.leb = a.iws;
            this.mrg = a.qmj;
            this.lhf = a.borderColor;
            this.tef = a.tbr;
            this.bgf = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.znm = function (a, b) {
        this.ked = a;
        if (b && b === true && this.context2D != null && this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.dwr = function (a, b) {
        this.rbq = a;
        if (b && b === true && this.context2D != null && this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.tef) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.lhf);
            b.addColorStop(1, this.tef);
            pze.sog.lng(a, this.x, this.y, this.width, this.height, this.cdp, this.vjr, this.nmw, this.tav, this.bgf, 1, b, this.dvm, 1)
        } else {
            pze.sog.lng(a, this.x, this.y, this.width, this.height, this.cdp, this.vjr, this.nmw, this.tav, this.bgf, 1, this.lhf, this.dvm, 1)
        }
        if (this.rbq != null) {
            pze.sog.ylo(a, this.rbq, this.leb, this.x + this.dvm, this.y + this.ywo, this.width - 2 * this.dvm, this.height, this.kpa, this.qji, this.shp)
        }
        if (this.ked != null) {
            if (this.rbq != null) {
                pze.sog.ylo(a, this.ked, this.mrg, this.x + this.dvm, this.y + this.dig, this.width - 2 * this.dvm, this.height, this.jmh, this.kqa, this.shp)
            } else {
                pze.sog.ylo(a, this.ked, this.mrg, this.x + this.dvm, this.y + this.dvm, this.width - 2 * this.dvm, this.height, this.jmh, this.kqa, this.shp)
            }
        }
        if (this.eua) {
            a.drawImage(this.eua, 0, 0, this.eua.width, this.eua.height, this.x + this.dvm, this.y + this.dvm, this.width - 2 * this.dvm, this.height - 2 * this.dvm)
        }
        a.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    }
}
xzl.prototype = new qdi;

function lxe() {
    var a = this;
    this.eua = null;
    this.szs = "";
    this.qnb = null;
    this.xcl = false;
    this.djv = false;
    this.jmg = 0;
    this.ado = 0;
    this.teu = 150;
    this.vut = 100;
    this.rqa = 0;
    this.tzl = 3;
    this.tcn = 92;
    this.uuf = 0;
    this.qlo = 0;
    this.kpa = "sans-serif";
    this.xow = "sans-serif";
    this.shp = "";
    this.leb = null;
    this.zkn = null;
    this.qwu = null;
    this.ake = null;
    this.guh = null;
    this.lhf = null;
    this.tef = null;
    this.bgf = null;
    this.wyc = null;
    this.vle = null;
    this.glp = null;
    this.bjj = null;
    this.pxd = null;
    this.crw = new rcu();
    this.qji = 0;
    this.ugz = 0;
    this.ywo = 0;
    this.awt = 0;
    this.jdq = 0;
    this.dvm = 0;
    this.rlm = 0;
    this.dge = 0;
    this.ipo = function (b) {
        try {
            this.qji = b.znj;
            this.ugz = b.gmb;
            this.ywo = b.hji;
            this.awt = b.kos;
            this.jdq = b.hgm;
            this.dvm = b.iej;
            this.rlm = b.sum;
            this.dge = b.rbc;
            this.crw = b.cba;
            this.ysx()
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            this.kpa = b.flr;
            this.xow = b.xhg;
            this.shp = b.lfx;
            this.leb = b.iws;
            this.zkn = b.xfp;
            this.qwu = b.zyf;
            this.ake = b.yat;
            this.guh = b.klk;
            this.lhf = b.borderColor;
            this.tef = b.tbr;
            this.bgf = b.backgroundColor;
            this.izt = b.hik;
            this.wyc = b.axm;
            this.ysx()
        } catch (c) {
            console.error(c)
        }
    };
    this.tyz = function (b) {
        try {
            this.leb = b.iws;
            this.zkn = b.xfp;
            this.qwu = b.zyf;
            this.ake = b.yat;
            this.ysx()
        } catch (c) {
            console.error(c)
        }
    };
    this.uam = function () {
        return {
            iws: this.leb,
            xfp: this.zkn,
            zyf: this.qwu,
            yat: this.ake
        }
    };
    this.ysx = function () {
        this.bjj = this.bgf;
        this.pxd = this.lhf;
        this.vle = this.leb;
        this.glp = this.qwu;
        if (this.height > 0 && this.tef) {
            this.pxd = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.pxd.addColorStop(0, this.lhf);
            this.pxd.addColorStop(1, this.tef)
        }
        if (this.height > 0 && this.izt) {
            this.bjj = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height);
            this.bjj.addColorStop(0, this.bgf);
            this.bjj.addColorStop(1, this.izt)
        }
        if (this.qji > 0 && this.zkn) {
            this.vle = this.context2D.createLinearGradient(this.width / 2, 0, this.width / 2, this.height / 2);
            this.vle.addColorStop(0, this.leb);
            this.vle.addColorStop(1, this.zkn)
        }
        if (this.ugz > 0 && this.ake) {
            this.glp = this.context2D.createLinearGradient(this.width / 2, this.height / 2, this.width / 2, this.height);
            this.glp.addColorStop(0, this.qwu);
            this.glp.addColorStop(1, this.ake)
        }
    };
    this.tzk = function (b, c) {
        if (b >= this.parent.tgq.bvr.mvx.x && b <= this.parent.tgq.bvr.mvx.x + this.parent.tgq.bvr.mvx.width && c >= this.parent.tgq.bvr.mvx.y && c <= this.parent.tgq.bvr.mvx.y + this.parent.tgq.bvr.mvx.height && this.jff()) {
            if (this.xcl) {
                this.djv = false;
                this.xcl = false;
                this.stop();
                this.kyj()
            }
            return true
        }
        return false
    };
    this.qar = function (b, c) {
        this.qnb = b;
        if (c && c === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.dwr = function (b, c) {
        this.szs = b;
        if (c && c === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.lmj = function () {
        return this.szs
    };
    this.start = function () {
        this.cug(true);
        this.parent.wac();
        this.rqa = new Date().getTime();
        this.ado = 0;
        this.qlo = 0;
        this.uuf = Math.floor((9 * this.qnb) / (10 * this.tcn));
        this.djv = true;
        this.xcl = false;
        this.parent.cpo.tkq("jackpot");
        this.wso()
    };
    this.wso = function () {
        var b = 0,
            c = new Date().getTime();
        a.ado++;
        if (a.ado < a.teu) {
            if (a.ado === a.tzl) {
                a.qlo = Math.floor(a.qnb / 10)
            } else {
                if (a.ado > a.tzl && a.ado < a.tzl + a.tcn) {
                    a.qlo += a.uuf
                } else {
                    if (a.ado == a.tzl + a.tcn) {
                        a.qlo = a.qnb
                    }
                }
            }
            a.wac();
            b = (a.ado * a.vut - (c - a.rqa));
            a.jmg = setTimeout(a.wso, b)
        } else {
            a.parent.cpo.swx("jackpot");
            if (!pze.spi.value76 || !pze.spi.value76.u) {
                a.djv = false;
                a.stop();
                a.kyj()
            } else {
                a.hde();
                a.xcl = true;
                a.iww()
            }
        }
    };
    this.iww = function () {
        var b = 0,
            c = new Date().getTime();
        a.ado++;
        a.wac();
        b = (a.ado * a.vut - (c - a.rqa));
        a.jmg = setTimeout(a.iww, b)
    };
    this.stop = function () {
        clearTimeout(this.jmg)
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var b = this.context2D,
            c = (this.rlm === 0) ? this.dvm : 0;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        if (this.eua) {
            if (this.djv === true) {
                b.drawImage(this.eua, (this.ado % 3) * this.eua.width / 3, 0, this.eua.width / 3, this.eua.height, 0, 0, this.width, this.height)
            } else {
                b.drawImage(this.eua, 0, 0, this.width, this.height)
            }
        } else {
            pze.sog.lng(b, 0, -c, this.width, this.height, this.rlm, this.rlm, this.dge, this.dge, this.bjj, 1, this.pxd, this.dvm, 1);
            pze.sog.zwt(b, this.crw.x, this.crw.y, this.crw.width, this.crw.height, this.dge, this.wyc, 1)
        }
        if (this.szs != null) {
            pze.sog.ylo(b, this.szs, this.vle, this.jdq, this.ywo - c, this.width - 2 * this.jdq, this.height, this.kpa, this.qji, this.shp)
        }
        if (this.djv === true) {
            if (this.qlo > 0) {
                pze.sog.ylo(b, this.parent.rdw(this.qlo), this.glp, this.jdq, this.awt - c, this.width - 2 * this.jdq, this.height, this.xow, this.ugz, this.shp)
            }
        } else {
            if (this.qnb != null) {
                pze.sog.ylo(b, (this.qnb > 0) ? this.parent.rdw(this.qnb) : 0, this.glp, this.jdq, this.awt - c, this.width - 2 * this.jdq, this.height, this.xow, this.ugz, this.shp)
            }
        }
        b.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    };
    this.kyj = function () {};
    this.hde = function () {}
}
lxe.prototype = new qdi;

function rcr() {
    var a = this;
    this.lzq = null;
    this.nmj = [];
    this.mra = null;
    this.yqt = null;
    this.qnb = null;
    this.cvb = null;
    this.lej = null;
    this.xcl = false;
    this.djv = false;
    this.jmg = 0;
    this.ofp = 0;
    this.vut = 89;
    this.rqa = 0;
    this.ivn = [];
    this.huy = 0;
    this.zhc = 0;
    this.ojn = 0;
    this.ifd = 0;
    this.lsm = new rcu();
    this.crw = new rcu();
    this.wmk = null;
    this.zaz = 0;
    this.uit = 0;
    this.hre = function (b, d, c) {
        rcr.prototype.hre.call(this, b, d, c);
        this.cvb = document.createElement("canvas");
        this.lej = this.cvb.getContext("2d")
    };
    this.ipo = function (b) {
        try {
            this.wmk = b.gfz;
            this.crw = b.cba;
            this.lsm = b.meo;
            this.zaz = b.mio;
            this.uit = b.xkb;
            this.cvb.width = Math.round(this.crw.width);
            this.cvb.height = Math.round(this.crw.height)
        } catch (c) {
            console.error(c)
        }
    };
    this.qar = function (l, j) {
        var m = this.lej,
            c = "",
            n = [],
            b = 0,
            d = 1,
            k = 0,
            f = 0;
        j = (j) ? j : 1;
        f = this.parent.sir(l);
        for (var e = 0, g = f.length; e < g; e++) {
            c = f.charAt(e);
            c = c.replace(/\./g, "dt").replace(/\,/g, "cm").replace(/\ /g, "sp");
            n[e] = this.wmk["_" + c];
            b += n[e].width
        }
        if ((b * j) > this.cvb.width) {
            d = (this.cvb.width / (b * j)).toString();
            d = Number(d.substring(0, (d.length > 5) ? 5 : d.length))
        } else {
            k = Math.floor((this.cvb.width - (b * j)) / 2);
            y = 0
        }
        m.save();
        m.clearRect(0, 0, this.cvb.width, this.cvb.height);
        for (var e = 0, g = n.length; e < g; e++) {
            if (n[e].width > 0 && n[e].height > 0) {
                m.drawImage(this.mra, n[e].x, n[e].y, n[e].width, n[e].height, k * d, n[e].y * d * j + (this.cvb.height - n[e].height * d * j) / 2, n[e].width * d * j, n[e].height * d * j);
                k += n[e].width * j
            }
        }
        m.restore()
    };
    this.start = function () {
        this.cug(true);
        this.parent.wac();
        this.rqa = new Date().getTime();
        this.ofp = 0;
        this.djv = true;
        this.xcl = false;
        this.ivn.length = 0;
        for (var c = 0; c < 56; c++) {
            this.ivn[c] = {
                scale: 1,
                tyr: 1,
                y: this.y,
                x: this.x,
                dug: 0,
                ssg: 0.5,
                saw: 0
            }
        }
        for (var c = 0; c < 16; c++) {
            if (c <= 3) {
                this.ivn[c].tyr = Math.sin(Math.PI / 8 * (c + 1))
            }
            this.ivn[c].y = this.y + this.zaz * Math.cos(Math.PI / 32 * c);
            this.ivn[c].x = this.x + this.uit * Math.sin(Math.PI / 8 * c);
            this.ivn[c].scale = Math.sin(Math.PI / 32 * c)
        }
        for (var c = 6, b = 1; b <= 10; c++, b++) {
            this.ivn[c].ssg = 0.5 + 0.5 * Math.sin(Math.PI / 20 * b)
        }
        for (var c = 16, b = 1; b <= 40; c++, b++) {
            this.ivn[c].ssg = 1 + 0.5 * Math.sin(Math.PI / 40 * b)
        }
        for (var c = 16, b = 0; c < this.ivn.length; c++, b++) {
            this.ivn[c].dug = b;
            if (b >= this.nmj.length && b <= this.nmj.length + 6) {
                this.ivn[c].saw = Math.sin(Math.PI / 12 * (b - this.nmj.length))
            } else {
                if (b >= this.nmj.length + 6) {
                    this.ivn[c].saw = 1
                }
            }
        }
        for (var c = this.ivn.length - 7, b = 0; c < this.ivn.length; c++, b++) {
            this.ivn[c].tyr = Math.cos(Math.PI / 12 * b)
        }
        this.parent.cpo.tkq("mystery_jackpot");
        this.wso()
    };
    this.wso = function () {
        var b = 0,
            c = new Date().getTime();
        a.ofp++;
        if (a.ofp < a.ivn.length - 1) {
            a.huy = Math.floor(a.width * a.ivn[a.ofp].scale);
            a.zhc = Math.floor(a.height * a.ivn[a.ofp].scale);
            a.ojn = Math.floor(a.crw.width * a.ivn[a.ofp].ssg);
            a.ifd = Math.floor(a.crw.height * a.ivn[a.ofp].ssg);
            a.parent.wac();
            b = (a.ofp * a.vut - (c - a.rqa));
            a.jmg = setTimeout(a.wso, b)
        } else {
            a.djv = false;
            a.stop();
            a.kyj()
        }
    };
    this.stop = function () {
        clearTimeout(this.jmg)
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var c = this.context2D,
            b = (this.djv) ? this.ivn[this.ofp].x : this.x,
            f = (this.djv) ? this.ivn[this.ofp].y : this.y,
            d = (this.djv) ? this.ivn[this.ofp].tyr : 1,
            e = (this.djv) ? this.ivn[this.ofp].dug : 0;
        c.save();
        c.globalAlpha = d;
        c.clearRect(0, 0, this.width, this.height);
        if (e == 0) {
            c.drawImage(this.lzq, 0, 0, this.width, this.height)
        }
        if (e < this.nmj.length) {
            c.drawImage(this.nmj[e], 0, 0, this.width, this.height)
        } else {
            c.save();
            c.globalAlpha = d * this.ivn[this.ofp].saw;
            c.drawImage(this.yqt, this.lsm.x, this.lsm.y);
            c.restore()
        }
        if (this.cvb) {
            c.drawImage(this.cvb, this.crw.x + (this.crw.width - this.ojn) / 2, this.crw.y + (this.crw.height - this.ifd) / 2, this.ojn, this.ifd)
        }
        c.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, b + (this.width - this.huy) / 2, f + (this.height - this.zhc) / 2, this.huy, this.zhc)
        }
    };
    this.kyj = function () {}
}
rcr.prototype = new qdi;

function wfa() {
    this.eua = new Image();
    this.ked = "";
    this.oxh = true;
    this.mki = null;
    this.shp = "bold";
    this.cjq = "red";
    this.wfl = "orange";
    this.niz = "white";
    this.lfy = 40;
    this.vod = 0;
    this.pdf = 0;
    this.jdq = 0;
    this.ehw = 2;
    this.wqx = null;
    this.pbb = 0;
    this.pmj = 0;
    this.hre = function (a, e, c, b, d) {
        wfa.prototype.hre.call(this, a, e, c);
        this.eua = b;
        this.ked = d
    };
    this.ipo = function (a) {
        try {
            this.lfy = a.fontSize;
            this.vod = a.ihx;
            this.pdf = a.vmp;
            this.jdq = a.hgm;
            this.ehw = a.qgw
        } catch (b) {
            console.error(b)
        }
    };
    this.ybb = function (a) {
        try {
            this.mki = a.font;
            this.shp = a.lfx;
            this.cjq = a.xop;
            this.wfl = a.yyn;
            this.niz = a.qdt
        } catch (b) {
            console.error(b)
        }
    };
    this.znm = function (a, b) {
        this.ked = a;
        if (b && b === true && this.context2D != null) {
            this.cug(true, true)
        }
    };
    this.gvq = function (a, b) {
        this.ked = a;
        this.oxh = false;
        if (b && b === true && this.context2D != null) {
            this.cug(true, true)
        }
    };
    this.cug = function (a, b) {
        this.xdr = a;
        if (b && b === true && this.context2D != null) {
            if (this.eat == null && this.jff()) {
                this.wac()
            } else {
                if (this.parent != null) {
                    this.parent.wac(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.bvf = function (a, b, c) {
        this.wqx = a;
        this.pbb = b;
        this.pmj = c
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.eat != null) ? 0 : this.x,
            d = (this.eat != null) ? 0 : this.y;
        b.save();
        if (this.eat == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.oxh === true) {
            if (this.wqx != null) {
                b.drawImage(this.wqx, this.x + this.pbb, this.y + this.pmj, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.eua != null) {
                b.drawImage(this.eua, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.vod, d, a + this.width / 2 + this.vod, d + this.height);
        c.addColorStop(0, this.cjq);
        c.addColorStop(1, this.wfl);
        pze.sog.ylo(b, this.ked, c, a + this.jdq + this.vod, d + this.pdf, this.width - 2 * this.jdq, this.height, this.mki, this.lfy, this.shp, this.niz, this.ehw);
        b.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    }
}
wfa.prototype = new qdi;

function idd() {
    var a = this;
    this.state = 0;
    this.dwi = 1;
    this.uxc = null;
    this.liq = null;
    this.nzd = null;
    this.vak = "round";
    this.mki = null;
    this.shp = "bold";
    this.yka = "center";
    this.bgf = null;
    this.mrg = null;
    this.nyq = 1;
    this.pxd = null;
    this.lfy = 17;
    this.jdq = 2;
    this.jhh = 0;
    this.dvm = 1;
    this.gbs = 0;
    this.tnt = 0;
    this.edy = 0;
    this.ipo = function (b) {
        try {
            this.lfy = b.fontSize;
            this.jdq = b.hgm;
            this.jhh = b.edk;
            this.dvm = b.iej;
            this.edy = b.emx
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            this.vak = b.uqc;
            this.mki = b.font;
            this.shp = b.lfx;
            this.yka = b.textAlign;
            this.bgf = b.backgroundColor;
            this.mrg = b.qmj;
            this.nyq = b.aii;
            if (b.borderColor && b.tbr) {
                this.pxd = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.pxd.addColorStop(0, b.borderColor);
                this.pxd.addColorStop(1, b.tbr)
            } else {
                this.pxd = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.cbm = function () {
        return this.vak
    };
    this.hrq = function (c, b) {
        this.state = c;
        this.dwi = b
    };
    this.czh = function (b) {
        this.eua = b;
        if (this.vak === "round") {
            this.gbs = this.width / 2 - this.jdq
        }
        if (this.eua) {
            this.tnt = Math.round(this.eua.height / (2 * this.dwi))
        }
    };
    this.lne = function (b) {
        this.state = (b < this.dwi) ? b : this.state
    };
    this.bfu = function (b) {
        this.uxc = b
    };
    this.mhy = function () {
        a.heo = false
    };
    this.fps = function () {
        a.rmw = false;
        if (a.jff()) {
            a.parent.wac(a.x, a.y, a.width, a.height)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var l = this.context2D,
            e = (this.czv()) ? this.nyq : this.nyq / 2,
            b = this.lfy,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.eua && this.bxc) {
            if (!this.czv()) {
                l.globalAlpha = e
            }
            if (this.vak === "round") {
                pze.sog.qnf(l, this.x + this.width / 2, this.y + this.height / 2, this.gbs, this.bgf, e * this.nyq)
            } else {
                if (this.vak === "rect") {
                    pze.sog.ekt(l, this.x, this.y, this.width, this.height, this.jhh, this.bgf, e * this.nyq, this.pxd, this.dvm, e)
                }
            }
            if (this.flo()) {
                if (this.vak === "round") {
                    l.drawImage(this.eua, 0, (this.state * 2 * this.tnt) + this.tnt, this.eua.width, this.tnt, this.x, this.y, this.width, this.height)
                } else {
                    if (this.vak === "rect") {
                        l.drawImage(this.eua, 0, (this.state * 2 * this.tnt) + this.tnt, this.eua.width, this.tnt, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.vak === "round") {
                    l.drawImage(this.eua, 0, (this.state * 2 * this.tnt), this.eua.width, this.tnt, this.x, this.y, this.width, this.height)
                } else {
                    if (this.vak === "rect") {
                        l.drawImage(this.eua, 0, (this.state * 2 * this.tnt), this.eua.width, this.tnt, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.ked != null) {
                l.textAlign = this.yka;
                l.textBaseline = "bottom";
                l.font = this.shp + " " + b + "px " + this.mki;
                l.fillStyle = this.mrg;
                d = this.ked.split("|");
                j = 0;
                g = (this.yka === "center") ? this.x + this.width / 2 : (this.yka === "left") ? this.x + 2 * this.jdq : this.x + this.width - 2 * this.jdq;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.jdq) {
                    c = ((this.width - 2 * this.jdq) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.shp + " " + b + "px " + this.mki
                }
                if (b * d.length > this.edy) {
                    c = ((this.edy) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.shp + " " + b + "px " + this.mki
                }
                k = (this.height - this.jdq - this.edy) + (this.edy - b * d.length) / 2;
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
idd.prototype = new rsb;

function ztu() {
    var a = this;
    this.vak = "rect";
    this.obe = -1;
    this.mki = null;
    this.shp = "bold";
    this.bgf = null;
    this.izt = null;
    this.lch = null;
    this.zxg = null;
    this.lhf = null;
    this.mrg = null;
    this.vwj = null;
    this.jhh = 3;
    this.vod = -2;
    this.pdf = 2;
    this.rjs = 6;
    this.lfy = 26;
    this.dvm = 2;
    this.ipo = function (b) {
        try {
            this.lfy = b.fontSize;
            this.vod = b.ihx;
            this.pdf = b.vmp;
            this.rjs = b.zvt;
            this.jhh = b.edk;
            this.dvm = b.iej
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            this.mki = b.font;
            this.shp = b.lfx;
            this.bgf = b.backgroundColor;
            this.izt = b.hik;
            this.lch = b.tbs;
            this.zxg = b.yvn;
            this.lhf = b.borderColor;
            this.mrg = b.qmj;
            this.vwj = b.eic;
            this.vak = b.uqc;
            this.obe = b.ime
        } catch (c) {
            console.error(c)
        }
    };
    this.cbm = function () {
        return this.vak
    };
    this.mhy = function () {
        a.heo = false
    };
    this.fps = function () {
        a.rmw = false;
        if (a.jff()) {
            a.parent.wac(a.x, a.y, a.width, a.height)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.bgf,
            m = this.izt,
            b = this.lfy,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.obe == 0 || this.obe == 3) ? this.jhh : 0;
        lt = (this.obe == 1 || this.obe == 3) ? this.jhh : 0;
        rb = (this.obe == 0 || this.obe == 2) ? this.jhh : 0;
        lb = (this.obe == 1 || this.obe == 2) ? this.jhh : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.flo()) {
            n = (this.lch != null) ? this.lch : n;
            m = (this.zxg != null) ? this.zxg : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.vak === "rrect") {
                    pze.sog.lng(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.lhf, this.dvm, 1)
                } else {
                    if (this.vak === "rect") {
                        if (this.lhf) {
                            pze.sog.zwt(p, this.x, this.y, this.width, this.height, this.jhh, l, this.lhf, this.dvm)
                        } else {
                            pze.sog.ssm(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.vak === "triangle") {
                            pze.sog.stn(p, this.obe, this.x, this.y, this.width, this.height, this.jhh, l, 1, this.lhf, this.dvm, 1)
                        }
                    }
                }
            } else {
                if (this.vak === "rrect") {
                    pze.sog.lng(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.lhf, this.dvm, 1)
                } else {
                    if (this.vak === "rect") {
                        if (this.lhf) {
                            pze.sog.zwt(p, this.x, this.y, this.width, this.height, this.jhh, n, this.lhf, this.dvm, 1)
                        } else {
                            pze.sog.ssm(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.vak === "triangle") {
                            pze.sog.stn(p, this.obe, this.x, this.y, this.width, this.height, this.jhh, n, 1, this.lhf, this.dvm, 1)
                        }
                    }
                }
            }
        }
        if (this.eua != null) {
            h = this.height - 2 * this.rjs;
            p.drawImage(this.eua, this.x + this.width / 2 - h / 2, this.y + this.rjs, h, h)
        }
        if (this.ked != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.ked.split("|");
            d = 0;
            if (this.flo()) {
                d = 1;
                p.fillStyle = this.vwj
            } else {
                p.fillStyle = this.mrg
            }
            p.font = this.shp + " " + b + "px " + this.mki;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.rjs) {
                c = ((this.width - 2 * this.rjs) / o);
                b = Math.round(c * b) - 1;
                p.font = this.shp + " " + b + "px " + this.mki
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.shp + " " + b + "px " + this.mki
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.vod, this.y - this.pdf + k + d);
                k += b
            }
        }
        p.restore()
    }
}
ztu.prototype = new rsb;

function gqj() {
    var a = this;
    this.ked = null;
    this.xcl = false;
    this.heo = false;
    this.tqt = false;
    this.mki = null;
    this.shp = "bold";
    this.yka = "center";
    this.bgf = null;
    this.lhf = null;
    this.mrg = null;
    this.bfe = "rect";
    this.rff = new rcu();
    this.fuc = new rcu();
    this.lfy = 16;
    this.jhh = 8;
    this.dvm = 1;
    this.wal = 0;
    var b = 200;
    this.hre = function (c, f, d, e) {
        this.ked = e;
        gqj.prototype.hre.call(this, c, f, d)
    };
    this.ybb = function (c) {
        try {
            this.mki = c.font;
            this.shp = c.lfx;
            this.yka = c.textAlign;
            this.bgf = c.backgroundColor;
            this.lhf = c.borderColor;
            this.mrg = c.qmj;
            this.bfe = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.ipo = function (c) {
        try {
            this.rff = c.tyg;
            this.fuc = c.pcz;
            this.lfy = c.fontSize;
            this.jhh = c.edk;
            this.dvm = c.iej
        } catch (d) {
            console.error(d)
        }
    };
    this.dat = function (c) {
        this.xcl = c
    };
    this.czv = function () {
        return this.xcl
    };
    this.xjn = function (c, d) {
        this.tqt = c;
        if (d && d === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.zqd = function () {
        return this.tqt
    };
    this.znm = function (c, d) {
        this.ked = c;
        if (d && d === true && this.jff()) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.sic = function (c, d) {
        this.heo = c;
        d = (d === false) ? false : true;
        clearTimeout(this.wal);
        if (this.heo === true && d === true) {
            this.wal = setTimeout(this.mhy, b)
        }
    };
    this.mns = function () {
        return this.heo
    };
    this.mhy = function () {
        a.heo = false
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var c = this.context2D;
        c.save();
        pze.sog.zwt(c, this.x, this.y, this.width, this.height, this.jhh, this.bgf, this.lhf, this.dvm);
        if (this.bfe === "rect") {
            pze.sog.ssm(c, this.x + this.fuc.x, this.y + this.fuc.y, this.fuc.width, this.fuc.height, this.mrg, 0.2, this.mrg, this.dvm, 1);
            if (this.tqt === true) {
                pze.sog.ssm(c, this.x + this.fuc.x + this.fuc.width / 4, this.y + this.fuc.y + this.fuc.height / 4, this.fuc.width / 2, this.fuc.height / 2, this.mrg, 1)
            }
        } else {
            if (this.bfe === "round") {
                pze.sog.qnf(c, this.x + this.fuc.x + this.fuc.width / 2, this.y + this.fuc.y + this.fuc.height / 2, this.fuc.width / 2, this.mrg, 0.2, this.mrg, this.dvm, 1);
                if (this.tqt === true) {
                    pze.sog.qnf(c, this.x + this.fuc.x + this.fuc.width / 2, this.y + this.fuc.y + this.fuc.height / 2, this.fuc.width / 4, this.mrg, 1)
                }
            }
        }
        if (this.ked && this.ked != "") {
            pze.sog.tll(c, this.ked, this.mrg, this.x + this.rff.x, this.y + this.rff.y, this.rff.width, this.rff.height, this.mki, this.lfy, this.shp, this.yka, true)
        }
        c.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    };
    this.bxc = {}
}
gqj.prototype = new qdi;

function ijh() {
    var b = this;
    var c = 0;
    var a = 1;
    this.rnb = null;
    this.rbq = "";
    this.eey = "";
    this.wdn = "";
    this.qnz = "";
    this.uin = false;
    this.usf = [];
    this.jaa = 0;
    this.dle = 0;
    this.ykb = 0;
    this.ksr = 0;
    this.vyd = 0;
    this.hjk = 0;
    this.mli = 0;
    this.inl = 0;
    this.enc = false;
    this.jst = false;
    this.yfx = false;
    this.bfe = "center";
    this.mki = "arial";
    this.shp = "bold";
    this.leb = "white";
    this.mrg = "white";
    this.bgf = "black";
    this.izt = null;
    this.lhf = "white";
    this.tef = "rgb(150,150,150)";
    this.lmf = null;
    this.uwt = null;
    this.dvm = 3;
    this.ias = 0;
    this.eze = 0;
    this.xjy = 0;
    this.qji = 30;
    this.olb = 24;
    this.zcy = new rcu();
    this.nci = new rcu();
    this.yxg = new rcu();
    this.vev = new rcu();
    this.mwy = new rcu();
    this.pit = new rcu();
    this.ptx = new rcu();
    this.brj = new rcu();
    this.zmh = new rcu();
    this.teu = 7;
    this.fwm = 0;
    this.sti = 0;
    this.ado = 0;
    this.hzs = c;
    this.rqa = 0;
    this.vut = 89;
    this.adb = false;
    this.jmg = 0;
    this.snq = 0;
    this.pif = 0;
    this.ymj = 0;
    this.xly = null;
    this.ktp = 0;
    this.ccd = 1;
    this.tjw = 250;
    this.hre = function (d, f, e) {
        ijh.prototype.hre.call(this, d, f, e);
        this.rnb = new xes();
        this.rnb.hre();
        this.rnb.nip("buttons");
        this.rnb.nip("checkboxes");
        this.rnb.nip("displays");
        this.rnb.nip("lbuttons");
        this.rnb.nip("mbuttons");
        this.rnb.nip("vbuttons");
        this.rnb.nip("cbuttons")
    };
    this.dlu = function (d) {
        try {
            this.vgl(d);
            this.jhp(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.ybb = function (k) {
        try {
            var n = this.rnb.yns("lbuttons"),
                m = this.rnb.yns("mbuttons"),
                f = this.rnb.yns("cbuttons"),
                g = this.rnb.yns("displays");
            this.bfe = k.type;
            this.mki = k.font;
            this.shp = k.lfx;
            this.leb = k.iws;
            this.mrg = k.qmj;
            this.bgf = k.backgroundColor;
            this.izt = k.hik;
            this.lhf = k.borderColor;
            this.lmf = k.stp;
            this.uwt = k.qsm;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].ybb(k.alp)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].ybb(k.nyu)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].ybb(k.lwv)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].ybb(k.display)
            }
            this.rnb.aam("checkboxes", "#ybb", [k.llb])
        } catch (l) {
            console.error(l)
        }
    };
    this.ipo = function (k) {
        try {
            var n = this.rnb.yns("lbuttons"),
                m = this.rnb.yns("mbuttons"),
                f = this.rnb.yns("cbuttons"),
                g = this.rnb.yns("displays");
            this.dvm = k.iej;
            this.ias = k.vnt;
            this.eze = k.pau;
            this.xjy = k.jdw;
            this.qji = k.znj;
            this.olb = k.pcd;
            this.zcy = k.hhq;
            this.nci = k.aie;
            this.yxg = k.xks;
            this.vev = k.xyw;
            this.mwy = k.lnl;
            this.pit = k.gsa;
            this.rnb.nly("lgames", "#sod", [k.ulo]);
            this.rnb.nly("mgames", "#sod", [k.zlp]);
            this.rnb.nly("lmincredit", "#sod", [k.ibr]);
            this.rnb.nly("mmincredit", "#sod", [k.ght]);
            this.rnb.nly("lmaxcredit", "#sod", [k.rfj]);
            this.rnb.nly("mmaxcredit", "#sod", [k.slq]);
            this.rnb.nly("lmaxwin", "#sod", [k.izs]);
            this.rnb.nly("mmaxwin", "#sod", [k.zet]);
            this.rnb.nly("start", "#sod", [k.stl]);
            this.rnb.nly("cancel", "#sod", [k.svf]);
            this.rnb.nly("gamesd", "#sod", [k.vjv]);
            this.rnb.nly("mincreditd", "#sod", [k.zzi]);
            this.rnb.nly("maxcreditd", "#sod", [k.dzk]);
            this.rnb.nly("maxwind", "#sod", [k.kld]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].ipo(k.alp)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].ipo(k.nyu)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].ipo(k.lwv)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].ipo(k.display)
            }
            this.rnb.nly("cmincredit", "#sod", [k.edx]);
            this.rnb.nly("cmaxcredit", "#sod", [k.rpv]);
            this.rnb.nly("cmaxwin", "#sod", [k.hki]);
            this.rnb.aam("checkboxes", "#ipo", [k.llb])
        } catch (l) {
            console.error(l)
        }
    };
    this.vgl = function (d) {
        this.rnb.vnv("start", this.xso(d.stl, this.parent.language.start, this.tub, this.parent.zew.opy), ["buttons", "cbuttons"]);
        this.rnb.vnv("cancel", this.xso(d.svf, this.parent.language.xyf, this.ygy, this.parent.zew.rcf), ["buttons", "cbuttons"]);
        this.rnb.vnv("lgames", this.xso(d.ulo, "", this.qvc, null), ["buttons", "lbuttons", "vbuttons"]);
        this.rnb.vnv("mgames", this.xso(d.zlp, "+", this.yqg, null), ["buttons", "mbuttons", "vbuttons"]);
        this.rnb.vnv("lmincredit", this.xso(d.ibr, "", this.fgt, null), ["buttons", "lbuttons", "vbuttons"]);
        this.rnb.vnv("mmincredit", this.xso(d.ght, "+", this.ksi, null), ["buttons", "mbuttons", "vbuttons"]);
        this.rnb.vnv("lmaxcredit", this.xso(d.rfj, "", this.nsp, null), ["buttons", "lbuttons", "vbuttons"]);
        this.rnb.vnv("mmaxcredit", this.xso(d.slq, "+", this.wpm, null), ["buttons", "mbuttons", "vbuttons"]);
        this.rnb.vnv("lmaxwin", this.xso(d.izs, "", this.xrw, null), ["buttons", "lbuttons", "vbuttons"]);
        this.rnb.vnv("mmaxwin", this.xso(d.zet, "+", this.woy, null), ["buttons", "mbuttons", "vbuttons"]);
        this.rnb.vnv("cmincredit", this.xpv(d.edx, "", this.urv), ["checkboxes"]);
        this.rnb.vnv("cmaxcredit", this.xpv(d.rpv, "", this.xdk), ["checkboxes"]);
        this.rnb.vnv("cmaxwin", this.xpv(d.hki, "", this.ejk), ["checkboxes"])
    };
    this.jhp = function (d) {
        this.rnb.vnv("gamesd", this.tze(d.vjv, null, (this.usf[this.jaa] > 0) ? this.usf[this.jaa] : "---"), ["displays"]);
        this.rnb.vnv("mincreditd", this.tze(d.zzi, null, "---"), ["displays"]);
        this.rnb.vnv("maxcreditd", this.tze(d.dzk, null, "---"), ["displays"]);
        this.rnb.vnv("maxwind", this.tze(d.kld, null, "---"), ["displays"])
    };
    this.tze = function (d, g, f) {
        var e = new xzl();
        e.hre(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.xso = function (f, j, g, e) {
        var d = new ztu();
        d.hre(f, this.context2D, null, null, j);
        d.parent = this;
        d.bxc = g;
        if (e) {
            d.lfv = e.dzq
        }
        return d
    };
    this.xpv = function (e, g, f) {
        var d = new gqj();
        d.hre(e, this.context2D, null, g);
        d.parent = this;
        d.bxc = f;
        return d
    };
    this.tzk = function (r, n) {
        var s = this.rnb.yns("vbuttons"),
            l = this.rnb.yns("cbuttons"),
            g = this.rnb.yns("checkboxes"),
            p = this.rnb.sqv("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.ejq) {
            return true
        }
        if ((!p || !p.jff()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.yfx = true;
            this.snh();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.jff() === true && d.czv() === true && d.mns() === false) {
                    d.jrn(true, false, false);
                    this.ktp = 0;
                    this.ccd = 1;
                    if (d.bxc() === false) {
                        this.xly = function () {
                            if (d.bxc() === true) {
                                clearInterval(b.ymj);
                                d.jrn(false, false);
                                b.parent.wac();
                                for (var t = 0; t < m; t++) {
                                    s[t].sic(false)
                                }
                            }
                        };
                        this.ymj = setInterval(this.xly, this.tjw)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].sic(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.jff() === true && d.czv() === true) {
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn");
                    d.jrn(true, false);
                    d.bxc();
                    for (var e = 0; e < m; e++) {
                        l[e].sic(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.jff() === true && k.czv() === true) {
                    k.xjn(!k.zqd(), true);
                    k.bxc();
                    for (var e = 0; e < m; e++) {
                        g[e].sic(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.yew = function () {
        var e = this.rnb.yns("vbuttons"),
            j = this.rnb.yns("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.flo() == true) {
                clearInterval(this.ymj);
                f.jrn(false, false);
                this.parent.wac();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.flo() == true) {
                f.jrn(false, false);
                this.parent.wac();
                return true
            }
        }
        return false
    };
    this.oaf = function (l) {
        var k = this.rnb.yns("buttons");
        if (this.ejq) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.lfv) {
                if (f.czv() && !f.mns()) {
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn");
                    f.jrn(true, false);
                    f.bxc();
                    for (var e = 0; e < d; e++) {
                        k[e].sic(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.mgf = function () {
        var g = this.rnb.yns("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.flo() == true) {
                e.jrn(false, false);
                this.parent.wac();
                return true
            }
        }
        return false
    };
    this.wjx = function (d) {
        this.rnb.aam("buttons", "#dat", [d]);
        this.rnb.aam("checkboxes", "#dat", [d]);
        if (d === true && this.jst === true) {
            this.rnb.nly("cmincredit", "#dat", [false])
        }
    };
    this.ndb = function (d) {
        this.usf = d.g;
        this.dle = d.v;
        this.ykb = d.v;
        this.enc = d.r;
        this.jst = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.ksr = d.m;
            this.vyd = d.m
        }
    };
    this.ezl = function () {
        if (this.enc === true) {
            this.hjk = this.parent.zlh;
            this.mli = this.parent.zlh;
            this.jaa = 0;
            this.inl = 0
        }
    };
    this.mcs = function () {
        if (this.usf.length > 0 && this.jaa >= 0 && this.yfx === false) {
            return this.usf[this.jaa]
        }
        return 0
    };
    this.mlk = function () {
        var d = this.rnb.sqv("cmincredit") == null || this.rnb.nly("cmincredit", "#zqd");
        if (this.hjk > 0 && d === true) {
            return this.hjk
        }
        return 0
    };
    this.gfe = function () {
        var d = this.rnb.sqv("cmaxcredit") == null || this.rnb.nly("cmaxcredit", "#zqd");
        if (this.mli > 0 && d === true) {
            return this.mli
        }
        return 0
    };
    this.dzr = function () {
        var d = this.rnb.sqv("cmaxwin") == null || this.rnb.nly("cmaxwin", "#zqd");
        if (this.inl > 0 && d === true) {
            return this.inl
        }
        return 0
    };
    this.kfu = function () {
        var f = this.rnb.sqv("cmincredit") == null || this.rnb.nly("cmincredit", "#zqd"),
            d = this.rnb.sqv("cmaxcredit") == null || this.rnb.nly("cmaxcredit", "#zqd"),
            e = this.rnb.sqv("cmaxwin") == null || this.rnb.nly("cmaxwin", "#zqd");
        this.adb = false;
        this.yfx = false;
        this.ykb = (this.vyd > 0) ? this.parent.cbe() * this.vyd : this.ykb;
        this.dle = (this.ksr > 0) ? this.parent.cbe() * this.ksr : this.dle;
        if (this.enc === true) {
            f = this.jst;
            d = false;
            e = false;
            this.ezl()
        } else {
            if (this.jst === true) {
                f = true;
                this.hjk = (this.hjk < this.parent.zlh) ? this.hjk : this.parent.zlh;
                this.hjk = (this.hjk > 0) ? this.hjk : this.parent.zlh
            } else {
                f = (this.hjk <= this.parent.zlh) ? f : false;
                this.hjk = (this.hjk < this.parent.zlh) ? this.hjk : this.parent.zlh
            }
            d = (this.mli >= this.parent.zlh) ? d : false;
            this.mli = (this.mli > this.parent.zlh) ? this.mli : this.parent.zlh
        }
        this.rnb.nly("cmincredit", "#xjn", [f]);
        this.rnb.nly("cmaxcredit", "#xjn", [d]);
        this.rnb.nly("cmaxwin", "#xjn", [e]);
        this.rnb.nly("gamesd", "#znm", [(this.usf[this.jaa] > 0) ? this.usf[this.jaa] : "---"]);
        this.rnb.nly("mincreditd", "#znm", [(f === true && this.hjk > 0) ? this.parent.fcy(this.hjk) : "---"]);
        this.rnb.nly("maxcreditd", "#znm", [(d === true && this.mli > 0) ? this.parent.fcy(this.mli) : "---"]);
        this.rnb.nly("maxwind", "#znm", [(e === true && this.inl > 0) ? this.parent.fcy(this.inl) : "---"]);
        this.rnb.nly("lmincredit", "#cug", [f]);
        this.rnb.nly("mmincredit", "#cug", [f && this.hjk < this.parent.zlh]);
        this.rnb.nly("lmaxcredit", "#cug", [d && this.mli > this.parent.zlh]);
        this.rnb.nly("mmaxcredit", "#cug", [d]);
        this.rnb.nly("lmaxwin", "#cug", [e && this.inl > this.ykb]);
        this.rnb.nly("mmaxwin", "#cug", [e]);
        if (this.uin === false) {
            this.wjx(true);
            this.cug(true);
            this.parent.wac()
        } else {
            this.brk();
            this.parent.cpo.swx("panel_out");
            this.parent.cpo.tkq("panel_out");
            this.nkj()
        }
    };
    this.snh = function () {
        b.wjx(false);
        if (b.uin === false) {
            b.cug(false);
            b.parent.wac()
        } else {
            b.tfb();
            b.parent.cpo.swx("panel_out");
            b.parent.cpo.tkq("panel_out");
            b.nkj()
        }
    };
    this.brk = function () {
        this.cug(true);
        this.ejq = true;
        this.xcl = false;
        this.hzs = c;
        this.fwm = Math.floor(this.width / this.teu);
        this.ado = 0;
        this.sti = 0;
        this.rqa = new Date().getTime()
    };
    this.tfb = function () {
        this.ejq = true;
        this.xcl = false;
        this.hzs = a;
        this.fwm = -Math.floor(this.width / this.teu);
        this.ado = 1;
        this.sti = this.width;
        this.rqa = new Date().getTime()
    };
    this.nkj = function () {
        var d = b.vut,
            e = new Date().getTime();
        if (b.ado < b.teu) {
            b.sti += b.fwm;
            b.ado++;
            b.parent.wac();
            d = (((b.hzs === a) ? b.ado - 1 : b.ado) * b.vut - (e - b.rqa));
            b.jmg = setTimeout(b.nkj, d)
        } else {
            b.ejq = false;
            b.xcl = true;
            if (b.hzs == a) {
                b.cug(false);
                b.parent.cyy();
                if (b.adb === true) {
                    b.snq = setTimeout(b.parent.qei, 200)
                }
            } else {
                if (b.hzs == c) {
                    b.wjx(true)
                }
            }
            b.parent.wac()
        }
    };
    this.stop = function () {
        clearTimeout(this.jmg);
        clearTimeout(this.pif);
        clearTimeout(this.snq);
        clearInterval(this.ymj)
    };
    this.wkl = function (d) {
        this.rbq = d.uqk;
        this.eey = d.upu;
        this.wdn = d.mxo;
        this.rnb.nly("start", "#znm", [d.start]);
        this.rnb.nly("cancel", "#znm", [d.xyf]);
        this.rnb.nly("cmincredit", "#znm", [d.hmg]);
        this.rnb.nly("cmaxcredit", "#znm", [d.sur]);
        this.rnb.nly("cmaxwin", "#znm", [d.vyv]);
        if (this.parent.dfn === true && pze.spi.value44.d === true) {
            this.qnz = d.ftl
        }
    };
    this.wac = function (n, m, o, j) {
        if (!this.jff()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.rnb.ajf(),
            e = this.bgf,
            l = this.lhf;
        if (this.izt) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.bgf);
            e.addColorStop(1, this.izt)
        }
        if (this.tef) {
            if (this.bfe === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.bfe === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.bfe === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.bfe === "left") {
                l.addColorStop(1, this.lhf);
                l.addColorStop(0, this.tef)
            } else {
                if (this.bfe === "center" || this.bfe === "right") {
                    l.addColorStop(0, this.lhf);
                    l.addColorStop(1, this.tef)
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
        pze.sog.lng(p, 0, 0, this.width, this.height, this.ias, this.eze, this.eze, this.ias, e, 1, l, this.dvm, 1);
        pze.sog.zwt(p, this.yxg.x, this.yxg.y, this.yxg.width, this.yxg.height, this.xjy, this.lmf, this.uwt, this.dvm / 2);
        pze.sog.zwt(p, this.mwy.x, this.mwy.y, this.mwy.width, this.mwy.height, this.xjy, this.lmf, this.uwt, this.dvm / 2);
        pze.sog.ylo(p, this.rbq, this.leb, this.zcy.x, this.zcy.y, this.zcy.width, this.zcy.height, this.mki, this.qji, this.shp);
        pze.sog.tll(p, this.qnz, this.mrg, this.nci.x, this.nci.y, this.nci.width, this.nci.height, this.mki, this.olb, this.shp, "center", true);
        pze.sog.rig(p, this.eey, this.mrg, this.vev.x, this.vev.y, this.vev.width, this.vev.height, this.mki, this.olb, this.shp, 0);
        pze.sog.ylo(p, this.wdn, this.mrg, this.pit.x, this.pit.y, this.pit.width, this.pit.height, this.mki, this.olb, this.shp);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].wac()
        }
        p.restore();
        if (this.hea && this.eat) {
            if (this.ejq) {
                if (this.sti > 0) {
                    if (this.bfe === "left") {
                        this.hea.drawImage(this.eat, this.width - this.sti, 0, this.sti, this.height, this.x, this.y, this.sti, this.height)
                    } else {
                        if (this.bfe === "right") {
                            this.hea.drawImage(this.eat, 0, 0, this.sti, this.height, this.x + this.width - this.sti, this.y, this.sti, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.hea.drawImage(this.eat, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.hea.drawImage(this.eat, this.x, this.y)
                }
            }
        }
    };
    this.tub = function () {
        b.parent.wac();
        if (b.usf[b.jaa] <= 0) {
            return
        }
        if (b.uin === false) {
            b.pif = setTimeout(b.parent.cyy, 400);
            b.snq = setTimeout(b.parent.qei, 500)
        } else {
            b.ejq = true;
            b.adb = true;
            b.pif = setTimeout(b.snh, 400)
        }
    };
    this.ygy = function () {
        b.parent.wac();
        b.yfx = true;
        if (b.uin === false) {
            b.pif = setTimeout(b.parent.cyy, 400)
        } else {
            b.ejq = true;
            b.pif = setTimeout(b.snh, 400)
        }
    };
    this.yqg = function () {
        b.jaa = (b.jaa < b.usf.length - 1) ? b.jaa + 1 : 0;
        b.parent.cpo.tkq("step0");
        b.rnb.nly("gamesd", "#znm", [(b.usf[b.jaa] > 0) ? b.usf[b.jaa] : "---"]);
        b.parent.wac();
        return (b.jaa >= b.usf.length - 1)
    };
    this.qvc = function () {
        b.jaa = (b.jaa > 0) ? b.jaa - 1 : b.usf.length - 1;
        b.parent.cpo.tkq("step0");
        b.rnb.nly("gamesd", "#znm", [(b.usf[b.jaa] > 0) ? b.usf[b.jaa] : "---"]);
        b.parent.wac();
        return (b.jaa <= 0)
    };
    this.ksi = function () {
        var d = b.rnb.sqv("cmincredit") == null || b.rnb.nly("cmincredit", "#zqd");
        if (d === true) {
            if (++b.ktp > 10) {
                b.ccd = 10
            }
            b.hjk = (b.hjk + (b.dle * b.ccd) <= b.parent.zlh) ? b.hjk + (b.dle * b.ccd) : b.parent.zlh;
            b.parent.cpo.tkq("step0");
            b.rnb.nly("mincreditd", "#znm", [(b.hjk > 0) ? b.parent.fcy(b.hjk) : "---"]);
            b.rnb.nly("mmincredit", "#cug", [d && b.hjk < b.parent.zlh]);
            b.rnb.nly("lmincredit", "#cug", [d && b.hjk > 0]);
            b.parent.wac();
            return (b.hjk >= b.parent.zlh)
        }
        return true
    };
    this.fgt = function () {
        var d = b.rnb.sqv("cmincredit") == null || b.rnb.nly("cmincredit", "#zqd");
        if (d === true) {
            if (++b.ktp > 10) {
                b.ccd = 10
            }
            b.hjk = (b.hjk - (b.dle * b.ccd) > 0) ? b.hjk - (b.dle * b.ccd) : 0;
            b.parent.cpo.tkq("step0");
            b.rnb.nly("mincreditd", "#znm", [(b.hjk > 0) ? b.parent.fcy(b.hjk) : "---"]);
            b.rnb.nly("mmincredit", "#cug", [d && b.hjk < b.parent.zlh]);
            b.rnb.nly("lmincredit", "#cug", [d && b.hjk > 0]);
            b.parent.wac();
            return (b.hjk >= b.parent.zlh || b.hjk <= 0)
        }
        return true
    };
    this.wpm = function () {
        var d = b.rnb.sqv("cmaxcredit") == null || b.rnb.nly("cmaxcredit", "#zqd");
        if (d === true) {
            if (++b.ktp > 10) {
                b.ccd = 10
            }
            b.mli = (b.mli + (b.ykb * b.ccd) > 0) ? b.mli + (b.ykb * b.ccd) : 0;
            b.parent.cpo.tkq("step0");
            b.rnb.nly("maxcreditd", "#znm", [(b.mli > 0) ? b.parent.fcy(b.mli) : "---"]);
            b.rnb.nly("lmaxcredit", "#cug", [d && b.mli > b.parent.zlh]);
            b.parent.wac();
            return (b.mli <= b.parent.zlh)
        }
        return true
    };
    this.nsp = function () {
        var d = b.rnb.sqv("cmaxcredit") == null || b.rnb.nly("cmaxcredit", "#zqd");
        if (d === true) {
            if (++b.ktp > 10) {
                b.ccd = 10
            }
            b.mli = (b.mli - (b.ykb * b.ccd) > b.parent.zlh) ? b.mli - (b.ykb * b.ccd) : b.parent.zlh;
            b.parent.cpo.tkq("step0");
            b.rnb.nly("maxcreditd", "#znm", [(b.mli > 0) ? b.parent.fcy(b.mli) : "---"]);
            b.rnb.nly("lmaxcredit", "#cug", [d && b.mli > b.parent.zlh]);
            b.parent.wac();
            return (b.mli <= b.parent.zlh)
        }
        return true
    };
    this.woy = function () {
        var d = b.rnb.sqv("cmaxwin") == null || b.rnb.nly("cmaxwin", "#zqd");
        if (d === true) {
            if (++b.ktp > 10) {
                b.ccd = 10
            }
            b.inl = (b.inl + (b.ykb * b.ccd) > 0) ? b.inl + (b.ykb * b.ccd) : 0;
            b.parent.cpo.tkq("step0");
            b.rnb.nly("maxwind", "#znm", [(b.inl > 0) ? b.parent.fcy(b.inl) : "---"]);
            b.rnb.nly("lmaxwin", "#cug", [d && b.inl > b.ykb]);
            b.parent.wac();
            return (b.inl <= b.ykb)
        }
        return true
    };
    this.xrw = function () {
        var d = b.rnb.sqv("cmaxwin") == null || b.rnb.nly("cmaxwin", "#zqd");
        if (d === true) {
            if (++b.ktp > 10) {
                b.ccd = 10
            }
            b.inl = (b.inl - (b.ykb * b.ccd) > 0) ? b.inl - (b.ykb * b.ccd) : b.ykb;
            b.parent.cpo.tkq("step0");
            b.rnb.nly("maxwind", "#znm", [(b.inl > 0) ? b.parent.fcy(b.inl) : "---"]);
            b.rnb.nly("lmaxwin", "#cug", [d && b.inl > b.ykb]);
            b.parent.wac();
            return (b.inl <= b.ykb)
        }
        return true
    };
    this.urv = function () {
        var d = b.rnb.sqv("cmincredit") == null || b.rnb.nly("cmincredit", "#zqd");
        b.hjk = b.parent.zlh;
        b.rnb.nly("mincreditd", "#znm", [(d === true && b.hjk > 0) ? b.parent.fcy(b.hjk) : "---"]);
        b.rnb.nly("lmincredit", "#cug", [d]);
        b.rnb.nly("mmincredit", "#cug", [d && b.hjk < b.parent.zlh]);
        b.parent.wac()
    };
    this.xdk = function () {
        var d = b.rnb.sqv("cmaxcredit") == null || b.rnb.nly("cmaxcredit", "#zqd");
        b.mli = b.parent.zlh;
        b.rnb.nly("maxcreditd", "#znm", [(d === true && b.mli > 0) ? b.parent.fcy(b.mli) : "---"]);
        b.rnb.nly("lmaxcredit", "#cug", [d && b.mli > b.parent.zlh]);
        b.rnb.nly("mmaxcredit", "#cug", [d]);
        b.parent.wac()
    };
    this.ejk = function () {
        var d = b.rnb.sqv("cmaxwin") == null || b.rnb.nly("cmaxwin", "#zqd");
        if (b.inl === 0) {
            b.inl = b.ykb
        }
        b.rnb.nly("maxwind", "#znm", [(d === true && b.inl > 0) ? b.parent.fcy(b.inl) : "---"]);
        b.rnb.nly("lmaxwin", "#cug", [d && b.inl > b.ykb]);
        b.rnb.nly("mmaxwin", "#cug", [d]);
        b.parent.wac()
    }
}
ijh.prototype = new qdi;

function gae() {
    this.jnt = "right";
    this.sgx = "left";
    this.zlv = null;
    this.qvz = null;
    this.rbq = null;
    this.fuu = -1;
    this.udr = -1;
    this.xcl = true;
    this.tqt = false;
    this.heo = false;
    this.ejq = false;
    this.dyl = 0;
    this.pnu = 0;
    this.zfw = [];
    this.hce = 0;
    this.jkw = 0;
    this.xrl = 1;
    this.ofp = 0;
    this.tls = 0;
    this.bfe = this.jnt;
    this.mki = null;
    this.shp = "bold";
    this.mrg = "rgb(255,255,255)";
    this.bgf = "rgb(0,0,0)";
    this.yds = "rgb(0,0,0)";
    this.axd = "rgb(0,0,0)";
    this.dxz = 0.7;
    this.ens = null;
    this.vbh = null;
    this.txo = null;
    this.bgb = new rcu();
    this.bur = new rcu();
    this.lmt = new rcu();
    this.zcy = new rcu();
    this.dvm = 2;
    this.jhh = 5;
    this.kuq = 4;
    this.lel = 10;
    this.eln = 5;
    this.lfy = 15;
    var a = 200;
    this.mxv = function (c, d, f) {
        this.zfw = [];
        this.dyl = (d < 0) ? 0 : d;
        this.pnu = (f < 0) ? 0 : f;
        for (var e = this.dyl, b = 0; e <= this.pnu; e++) {
            this.zfw[b++] = c[e]
        }
        this.hce = this.zfw.length;
        this.ofp = this.bgb.height / this.hce
    };
    this.ipo = function (b) {
        try {
            this.lfy = b.fontSize;
            this.dvm = b.iej;
            this.jhh = b.edk;
            this.kuq = b.avm;
            this.lel = b.hkd;
            this.eln = b.qeg;
            this.bgb = new rcu(b.ygs.x, b.ygs.y + b.nbs, b.ygs.width, b.ygs.height - 2 * b.nbs);
            this.bur = new rcu(b.ygs.x, b.ygs.y, b.ygs.width, b.nbs);
            this.lmt = new rcu(b.ygs.x, b.ygs.y + b.ygs.height - b.nbs, b.ygs.width, b.nbs);
            this.zcy = b.hhq
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            this.mki = b.font;
            this.shp = b.lfx;
            this.mrg = b.qmj;
            this.bgf = b.backgroundColor;
            this.yds = b.gxd;
            this.axd = b.pcp;
            this.dxz = b.hqi;
            this.vbh = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.vbh.addColorStop(0, b.xzh);
            this.vbh.addColorStop(1, b.eks);
            this.ens = this.context2D.createLinearGradient(this.bgb.x, 0, this.bgb.x + this.bgb.width, 0);
            this.txo = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.bfe === this.jnt) {
                this.ens.addColorStop(0, b.orw);
                this.ens.addColorStop(1, b.ehe);
                this.txo.addColorStop(0, b.rzk);
                this.txo.addColorStop(1, b.nck)
            } else {
                if (this.bfe === this.sgx) {
                    this.ens.addColorStop(0, b.ehe);
                    this.ens.addColorStop(1, b.orw);
                    this.txo.addColorStop(0, b.nck);
                    this.txo.addColorStop(1, b.rzk)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.tzk = function (b, f, c) {
        if (this.ejq || !this.xcl || this.heo) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.lmt.kti(e, d)) {
                this.agk(-1);
                this.tkq();
                this.sic(true, true)
            } else {
                if (this.bur.kti(e, d)) {
                    this.agk(1);
                    this.tkq();
                    this.sic(true, true)
                } else {
                    if (this.bgb.kti(e, d)) {
                        this.tqt = true;
                        this.rdn(f);
                        this.sic(true, true)
                    }
                }
            }
            this.bxc(this.jkw);
            return true
        }
    };
    this.yew = function () {
        if (this.tqt) {
            this.tqt = false;
            this.tkq();
            return true
        }
        return false
    };
    this.oaf = function (b) {
        if (this.ejq || !this.xcl || this.heo) {
            return true
        }
        if (b == this.udr) {
            this.agk(-1);
            this.tkq();
            this.sic(true, true);
            this.bxc(this.jkw);
            return true
        } else {
            if (b == this.fuu) {
                this.agk(1);
                this.tkq();
                this.sic(true, true);
                this.bxc(this.jkw);
                return true
            }
        }
        return false
    };
    this.mgf = function () {};
    this.qrx = function (b, d, c) {
        if (!this.tqt) {
            return false
        }
        if (b >= this.x + this.bgb.x && b <= this.x + this.bgb.x + this.bgb.width && d >= this.y + this.bgb.y && d <= this.y + this.bgb.y + this.bgb.height) {
            this.rdn(d);
            this.bxc(this.jkw);
            return true
        }
        return false
    };
    this.sic = function (b, c) {
        this.heo = b;
        c = (c === false) ? false : true;
        clearTimeout(this.wal);
        if (this.heo === true && c === true) {
            this.wal = setTimeout(this.mhy, a)
        }
    };
    this.mhy = function () {};
    this.bxc = function (b) {};
    this.tkq = function () {};
    this.tfq = function (b, c) {
        this.dyl = (b < 0) ? 0 : b;
        this.pnu = (c < 0) ? 0 : c;
        if (this.zfw) {
            this.pnu = (this.pnu > this.zfw.length - 1) ? this.zfw.length - 1 : this.pnu
        }
    };
    this.kfu = function () {
        this.cug(true, true)
    };
    this.snh = function () {
        this.cug(false, true)
    };
    this.dat = function (b) {
        this.xcl = b
    };
    this.czv = function () {
        return this.xcl
    };
    this.zpd = function (b, c) {
        this.jkw = b;
        if (this.jkw < this.dyl) {
            this.jkw = this.dyl
        }
        if (this.jkw >= this.pnu) {
            this.jkw = this.pnu
        }
        this.xrl = this.jkw + 1;
        if (c && c === true) {
            this.parent.wac()
        }
    };
    this.ntc = function (d, e) {
        this.jkw = 0;
        for (var c = 0, b = this.zfw.length; c < b; c++) {
            if (this.zfw[c] == d) {
                this.jkw = c;
                break
            }
        }
        this.jkw = (this.jkw >= this.dyl) ? this.jkw : this.dyl;
        this.jkw = (this.jkw < this.pnu) ? this.jkw : this.pnu;
        this.xrl = this.jkw + 1;
        if (e) {
            this.parent.wac()
        }
    };
    this.rdn = function (b) {
        this.jkw = Math.ceil(((this.bgb.height) - (b - this.bgb.y - this.y)) / this.ofp) - 1;
        this.jkw = (this.jkw >= this.dyl) ? this.jkw : this.dyl;
        this.jkw = (this.jkw < this.pnu) ? this.jkw : this.pnu;
        this.xrl = this.jkw + 1;
        this.parent.wac()
    };
    this.agk = function (b) {
        this.jkw += b;
        this.jkw = (this.jkw >= this.dyl) ? this.jkw : this.dyl;
        this.jkw = (this.jkw < this.pnu) ? this.jkw : this.pnu;
        this.xrl = this.jkw + 1;
        this.parent.wac()
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        this.oan();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.shw, this.x, this.y)
        }
    };
    this.oan = function () {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.mbj(b);
        this.byw(b);
        this.ecn(b);
        this.fbh(b);
        this.und(b);
        b.restore()
    };
    this.mbj = function (b) {
        if (this.bfe === this.sgx) {
            pze.sog.lng(b, 0, 0, this.width, this.height, this.jhh, 0, 0, this.jhh, this.bgf, 0.4, this.txo, this.dvm, 1)
        } else {
            if (this.bfe === this.jnt) {
                pze.sog.lng(b, 0, 0, this.width, this.height, 0, this.jhh, this.jhh, 0, this.bgf, 0.4, this.txo, this.dvm, 1)
            }
        }
    };
    this.byw = function (b) {
        pze.sog.ssm(b, this.bgb.x, this.bgb.y, this.bgb.width, this.bgb.height, this.yds, 1)
    };
    this.ecn = function (b) {
        pze.sog.ssm(b, this.bgb.x, this.bgb.y + this.bgb.height - Math.round(this.xrl * this.ofp), this.bgb.width, Math.round(this.xrl * this.ofp), this.vbh, 1)
    };
    this.fbh = function (b) {
        pze.sog.ssm(b, this.bgb.x - this.kuq, this.bgb.y - this.kuq, this.bgb.width + 2 * this.kuq, this.bgb.height + 2 * this.kuq, null, 0, this.ens, this.kuq, 1);
        if (this.bfe === this.sgx) {
            pze.sog.lng(b, this.bgb.x - this.kuq, this.bur.y, this.bgb.width + 2 * this.kuq, this.bur.height, this.lel, 0, 0, 0, this.ens, 1);
            pze.sog.lng(b, this.bgb.x - this.kuq, this.lmt.y, this.bgb.width + 2 * this.kuq, this.lmt.height, 0, 0, 0, this.lel, this.ens, 1)
        } else {
            if (this.bfe === this.jnt) {
                pze.sog.lng(b, this.bgb.x - this.kuq, this.bur.y, this.bgb.width + 2 * this.kuq, this.bur.height, 0, this.lel, 0, 0, this.ens, 1);
                pze.sog.lng(b, this.bgb.x - this.kuq, this.lmt.y, this.bgb.width + 2 * this.kuq, this.lmt.height, 0, 0, this.lel, 0, this.ens, 1)
            }
        }
        b.strokeStyle = this.ens;
        b.lineWidth = Math.round(this.kuq / 4);
        b.beginPath();
        for (var c = 1; c < this.hce; c++) {
            b.moveTo(this.bgb.x, this.bgb.y + this.bgb.height - Math.round(c * this.ofp));
            b.lineTo(this.bgb.x + this.bgb.width, this.bgb.y + this.bgb.height - Math.round(c * this.ofp))
        }
        b.closePath();
        b.stroke();
        if (this.zlv) {
            if (this.bfe === this.sgx) {
                b.drawImage(this.zlv, 0, 0, this.zlv.width / 2, this.zlv.height, this.bgb.x, this.bgb.y, this.bgb.width, this.bgb.height)
            } else {
                if (this.bfe === this.jnt) {
                    b.drawImage(this.zlv, this.zlv.width / 2, 0, this.zlv.width / 2, this.zlv.height, this.bgb.x, this.bgb.y, this.bgb.width, this.bgb.height)
                }
            }
        }
    };
    this.und = function (c) {
        var f = this.mrg,
            e = this.mrg,
            b = 0,
            d = 0;
        if (this.bfe === this.sgx) {
            b = this.eln;
            d = this.bgb.x - 2 * this.eln
        } else {
            if (this.bfe === this.jnt) {
                b = this.bgb.x + this.bgb.width + this.eln;
                d = this.width - this.eln - (this.bgb.x + this.bgb.width + this.eln)
            }
        }
        if (this.jkw > 0 && this.jkw < this.zfw.length - 1) {
            pze.sog.ssm(c, b, this.bgb.y + ((this.hce - this.xrl) * this.ofp), d, this.ofp, this.axd, this.dxz);
            pze.sog.gwf(c, this.zfw[this.jkw], this.vbh, b, this.bgb.y + ((this.hce - this.xrl) * this.ofp) + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln)
        } else {
            if (this.jkw == 0) {
                f = this.vbh
            } else {
                if (this.jkw == this.zfw.length - 1) {
                    e = this.vbh
                }
            }
        }
        pze.sog.ssm(c, b, this.bgb.y + (this.ofp * (this.hce - 1)), d, this.ofp, this.axd, this.dxz);
        pze.sog.gwf(c, this.zfw[0], f, b, this.bgb.y + (this.ofp * (this.hce - 1)) + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln);
        pze.sog.ssm(c, b, this.bgb.y, d, this.ofp, this.axd, this.dxz);
        pze.sog.gwf(c, this.zfw[this.zfw.length - 1], e, b, this.bgb.y + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln);
        pze.sog.ylo(c, "+", this.mrg, this.bur.x, this.bur.y, this.bur.width, this.bur.height, this.mki, this.lfy, this.shp);
        pze.sog.ylo(c, "", this.mrg, this.lmt.x, this.lmt.y, this.lmt.width, this.lmt.height, this.mki, this.lfy, this.shp);
        if (this.rbq) {
            pze.sog.ylo(c, this.rbq, this.mrg, this.zcy.x, this.zcy.y, this.zcy.width, this.zcy.height, this.mki, this.lfy, this.shp)
        }
    }
}
gae.prototype = new qdi;

function mag() {
    var a = this;
    this.rnb = null;
    this.aqy = false;
    this.xzi = "";
    this.llc = "";
    this.hqx = "";
    this.qmz = "";
    this.qnz = "";
    this.eey = "";
    this.wdn = "";
    this.mki = "arial";
    this.shp = "bold";
    this.mrg = "white";
    this.bgf = "black";
    this.izt = null;
    this.lhf = "white";
    this.tef = "rgb(150,150,150)";
    this.dvm = 3;
    this.jhh = 4;
    this.cyj = 24;
    this.fst = 24;
    this.olb = 24;
    this.yie = new rcu();
    this.aqg = new rcu();
    this.ufu = new rcu();
    this.xbt = new rcu();
    this.udk = new rcu();
    this.ilh = new rcu();
    this.sjc = new rcu();
    this.usf = [];
    this.jaa = 0;
    this.dle = 0;
    this.ykb = 0;
    this.ksr = 0;
    this.vyd = 0;
    this.hjk = 0;
    this.mli = 0;
    this.inl = 0;
    this.cwp = false;
    this.jst = false;
    this.jkw = 0;
    this.gyr = true;
    this.eiq = true;
    this.xly = null;
    this.ymj = 0;
    this.ktp = 0;
    this.ccd = 1;
    this.tjw = 250;
    this.hre = function (b, d, c) {
        mag.prototype.hre.call(this, b, d, c);
        this.rnb = new xes();
        this.rnb.hre();
        this.rnb.nip("buttons");
        this.rnb.nip("displays");
        this.rnb.nip("checkboxes");
        this.rnb.nip("lbuttons");
        this.rnb.nip("mbuttons");
        this.rnb.nip("tbuttons");
        this.rnb.nip("bbuttons");
        this.rnb.nip("bdisplays");
        this.rnb.nip("abuttons");
        this.rnb.nip("adisplays");
        this.rnb.nip("acheckboxes");
        this.rnb.nip("sbuttons");
        this.rnb.nip("hbuttons")
    };
    this.dlu = function (b) {
        try {
            this.vgl(b);
            this.gfs(b);
            this.hwu(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            var c = this.rnb.yns("lbuttons"),
                n = this.rnb.yns("mbuttons"),
                k = this.rnb.yns("tbuttons"),
                m = this.rnb.yns("sbuttons"),
                l = this.rnb.yns("hbuttons"),
                f = this.rnb.yns("displays");
            this.mki = b.font;
            this.shp = b.lfx;
            this.mrg = b.qmj;
            this.bgf = b.backgroundColor;
            this.izt = b.hik;
            this.lhf = b.borderColor;
            this.tef = b.tbr;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].ybb(b.alp)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].ybb(b.nyu)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].ybb(b.tgv)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].ybb(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].ybb(b.wnj)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].ybb(b.wnj)
            }
            this.rnb.aam("checkboxes", "#ybb", [b.llb])
        } catch (j) {
            console.error(j)
        }
    };
    this.ipo = function (g) {
        try {
            var b = this.rnb.yns("lbuttons"),
                o = this.rnb.yns("mbuttons"),
                l = this.rnb.yns("tbuttons"),
                n = this.rnb.yns("sbuttons"),
                m = this.rnb.yns("hbuttons"),
                c = this.rnb.yns("bdisplays"),
                f = this.rnb.yns("adisplays");
            rze = this.rnb.yns("checkboxes"), oij = n.length, eea = (oij <= 2) ? g.mef : (oij <= 3) ? g.xpz : (oij <= 4) ? g.dsk : g.jwj, oij = m.length, bsl = (oij <= 2) ? g.mef : (oij <= 3) ? g.xpz : (oij <= 4) ? g.dsk : g.jwj, biu = (this.parent.xjs() != null) ? g.bbi : g.lje;
            this.dvm = g.iej;
            this.jhh = g.edk;
            this.cyj = g.mfg;
            this.fst = g.gmg;
            this.olb = g.pcd;
            this.yie = g.cth;
            this.aqg = g.yqq;
            this.ufu = g.wmv;
            this.xbt = g.djm;
            this.udk = g.aie;
            this.ilh = g.xyw;
            this.sjc = g.xlf;
            this.rnb.nly("bett", "#sod", [biu.hcm]);
            this.rnb.nly("autot", "#sod", [biu.yki]);
            this.rnb.nly("helpt", "#sod", [biu.div]);
            this.rnb.nly("settingt", "#sod", [biu.cdi]);
            this.rnb.nly("returnt", "#sod", [biu.wts]);
            this.rnb.nly("lbet", "#sod", [g.gsk]);
            this.rnb.nly("mbet", "#sod", [g.qja]);
            this.rnb.nly("llines", "#sod", [g.yyb]);
            this.rnb.nly("mlines", "#sod", [g.zvc]);
            this.rnb.nly("betd", "#sod", [g.bsj]);
            this.rnb.nly("linesd", "#sod", [g.sbt]);
            this.rnb.nly("totald", "#sod", [g.ldm]);
            this.rnb.nly("lgames", "#sod", [g.ulo]);
            this.rnb.nly("mgames", "#sod", [g.zlp]);
            this.rnb.nly("lmincredit", "#sod", [g.ibr]);
            this.rnb.nly("mmincredit", "#sod", [g.ght]);
            this.rnb.nly("lmaxcredit", "#sod", [g.rfj]);
            this.rnb.nly("mmaxcredit", "#sod", [g.slq]);
            this.rnb.nly("lmaxwin", "#sod", [g.izs]);
            this.rnb.nly("mmaxwin", "#sod", [g.zet]);
            this.rnb.nly("gamesd", "#sod", [g.vjv]);
            this.rnb.nly("mincreditd", "#sod", [g.zzi]);
            this.rnb.nly("maxcreditd", "#sod", [g.dzk]);
            this.rnb.nly("maxwind", "#sod", [g.kld]);
            this.rnb.nly("cmincredit", "#sod", [g.edx]);
            this.rnb.nly("cmaxcredit", "#sod", [g.rpv]);
            this.rnb.nly("cmaxwin", "#sod", [g.hki]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].ipo(g.alp)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].ipo(g.nyu)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].ipo(g.tgv)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].ipo(g.fie)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].ipo(g.efn)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].ipo(g.wnj)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].ipo(g.wnj)
            }
            for (var d = 0, j = rze.length; d < j; d++) {
                rze[d].ipo(g.llb)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].sod(eea[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].sod(bsl[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.vgl = function (c) {
        var b = (this.parent.xjs() != null) ? c.bbi : c.lje;
        this.rnb.vnv("bett", this.xkv(b.hcm, null, this.parent.cpo.ewl("btn_b"), this.clo, null), ["buttons", "tbuttons"]);
        if (this.parent.xjs() != null) {
            this.rnb.vnv("autot", this.xkv(b.yki, null, this.parent.cpo.ewl("btn_as"), this.bmj, null), ["buttons", "tbuttons"])
        }
        this.rnb.vnv("helpt", this.xkv(b.div, null, this.parent.cpo.ewl("btn_i"), this.hsk, null), ["buttons", "tbuttons"]);
        this.rnb.vnv("settingt", this.xkv(b.cdi, null, this.parent.cpo.ewl("btn_se"), this.qph, null), ["buttons", "tbuttons"]);
        this.rnb.vnv("returnt", this.xkv(b.wts, null, this.parent.cpo.ewl("btn_c"), this.zoa, null), ["buttons", "tbuttons"])
    };
    this.gfs = function (b) {
        this.rnb.vnv("betd", this.tze(b.bsj, null, this.parent.agy), ["displays", "bdisplays"]);
        this.rnb.vnv("lbet", this.xso(b.gsk, "", this.parent.lwd), ["buttons", "lbuttons", "bbuttons"]);
        this.rnb.vnv("mbet", this.xso(b.qja, "+", this.parent.gsw), ["buttons", "mbuttons", "bbuttons"]);
        this.rnb.vnv("linesd", this.tze(b.sbt, null, this.parent.vfh), ["displays", "bdisplays"]);
        if (this.aqy) {
            this.rnb.vnv("llines", this.xso(b.yyb, "", this.parent.pmf), ["buttons", "lbuttons", "bbuttons"]);
            this.rnb.vnv("mlines", this.xso(b.zvc, "+", this.parent.uqa), ["buttons", "mbuttons", "bbuttons"])
        }
        this.rnb.vnv("totald", this.tze(b.ldm, null, this.parent.cbe()), ["displays", "bdisplays"])
    };
    this.hwu = function (b) {
        this.rnb.vnv("gamesd", this.tze(b.vjv, null, this.usf[this.jaa]), ["displays", "adisplays"]);
        this.rnb.vnv("lgames", this.xso(b.ulo, "", this.qvc), ["buttons", "lbuttons", "abuttons"]);
        this.rnb.vnv("mgames", this.xso(b.zlp, "+", this.yqg), ["buttons", "mbuttons", "abuttons"]);
        this.rnb.vnv("mincreditd", this.tze(b.zzi, null, "---"), ["displays", "adisplays"]);
        this.rnb.vnv("lmincredit", this.xso(b.ibr, "", this.fgt), ["buttons", "lbuttons", "abuttons"]);
        this.rnb.vnv("mmincredit", this.xso(b.ght, "+", this.ksi), ["buttons", "mbuttons", "abuttons"]);
        this.rnb.vnv("maxcreditd", this.tze(b.dzk, null, "---"), ["displays", "adisplays"]);
        this.rnb.vnv("lmaxcredit", this.xso(b.rfj, "", this.nsp), ["buttons", "lbuttons", "abuttons"]);
        this.rnb.vnv("mmaxcredit", this.xso(b.slq, "+", this.wpm), ["buttons", "mbuttons", "abuttons"]);
        this.rnb.vnv("maxwind", this.tze(b.kld, null, "---"), ["displays", "adisplays"]);
        this.rnb.vnv("lmaxwin", this.xso(b.izs, "", this.xrw), ["buttons", "lbuttons", "abuttons"]);
        this.rnb.vnv("mmaxwin", this.xso(b.zet, "+", this.woy), ["buttons", "mbuttons", "abuttons"]);
        this.rnb.vnv("cmincredit", this.xpv(b.edx, "", this.urv), ["checkboxes", "acheckboxes"]);
        this.rnb.vnv("cmaxcredit", this.xpv(b.rpv, "", this.xdk), ["checkboxes", "acheckboxes"]);
        this.rnb.vnv("cmaxwin", this.xpv(b.hki, "", this.ejk), ["checkboxes", "acheckboxes"])
    };
    this.vlx = function (j, g, f, e, d, b) {
        var c = new idd();
        c.hre(new rcu(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.bxc = e;
        c.ked = g;
        c.hrq(d, b);
        c.ipo(this.parent.tgq.aes.wnj);
        c.ybb(this.parent.style.aes.wnj);
        c.czh(f);
        this.rnb.vnv(j, c, ["buttons", "sbuttons"])
    };
    this.jul = function (f, e, d, c) {
        var b = new idd();
        b.hre(new rcu(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.bxc = c;
        b.ked = e;
        b.ipo(this.parent.tgq.aes.wnj);
        b.ybb(this.parent.style.aes.wnj);
        b.czh(d);
        this.rnb.vnv(f, b, ["buttons", "hbuttons"])
    };
    this.tze = function (b, e, d) {
        var c = new xzl();
        c.hre(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.xso = function (c, e, d) {
        var b = new ztu();
        b.hre(c, this.context2D, null, null, e);
        b.parent = this;
        b.bxc = d;
        return b
    };
    this.xkv = function (d, g, f, e, c) {
        var b = new ztu();
        b.hre(d, this.context2D, null, f, g);
        b.parent = this;
        b.bxc = e;
        if (c != null) {
            b.lfv = c
        }
        return b
    };
    this.xpv = function (c, e, d) {
        var b = new gqj();
        b.hre(c, this.context2D, null, e);
        b.parent = this;
        b.bxc = d;
        return b
    };
    this.tzk = function (o, n) {
        var m = this.rnb.yns("buttons"),
            g = this.rnb.yns("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.jff() === true) {
                if (b.czv() === true && b.mns() === false) {
                    if (b instanceof idd) {
                        this.parent.cpo.swx("btn");
                        this.parent.cpo.tkq("btn");
                        b.jrn(true, true, true);
                        b.bxc()
                    } else {
                        if (b instanceof ztu) {
                            if (b.cbm() === "rect") {
                                this.parent.cpo.swx("btn");
                                this.parent.cpo.tkq("btn");
                                b.jrn(true, true, false);
                                b.bxc()
                            } else {
                                b.jrn(true, false, false);
                                this.ktp = 0;
                                this.ccd = 1;
                                if (b.bxc() === false) {
                                    this.xly = function () {
                                        if (b.bxc() === true) {
                                            clearInterval(a.ymj);
                                            b.jrn(false, true);
                                            for (var p = 0; p < l; p++) {
                                                m[p].sic(false)
                                            }
                                        }
                                    };
                                    this.ymj = setInterval(this.xly, this.tjw)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].sic(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.jff() === true && k.czv() === true) {
                    k.xjn(!k.zqd(), true);
                    k.bxc();
                    for (var c = 0; c < l; c++) {
                        g[c].sic(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.yew = function () {
        var e = this.rnb.yns("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.flo() == true && !(c instanceof ztu && c.cbm() === "rect")) {
                clearInterval(this.ymj);
                c.jrn(false, true);
                return true
            }
        }
        return false
    };
    this.oaf = function (b) {};
    this.mgf = function (b) {};
    this.mcy = function (c, b, d) {
        this.rnb.nly("betd", "#znm", [c]);
        this.rnb.nly("linesd", "#znm", [b]);
        this.rnb.nly("totald", "#znm", [d]);
        this.parent.wac()
    };
    this.lyh = function (b) {
        this.usf = b.g;
        this.dle = b.v;
        this.ykb = b.v;
        this.cwp = b.r;
        this.jst = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.ksr = b.m;
            this.vyd = b.m
        }
    };
    this.wup = function () {
        if (this.cwp === true) {
            this.hjk = this.parent.zlh;
            this.mli = this.parent.zlh;
            this.jaa = 0;
            this.inl = 0
        }
    };
    this.mcs = function () {
        if (this.usf.length > 0 && this.jaa >= 0) {
            return this.usf[this.jaa]
        }
        return 0
    };
    this.mlk = function () {
        var b = this.rnb.sqv("cmincredit") == null || this.rnb.nly("cmincredit", "#zqd");
        if (this.hjk > 0 && b === true) {
            return this.hjk
        }
        return 0
    };
    this.gfe = function () {
        var b = this.rnb.sqv("cmaxcredit") == null || this.rnb.nly("cmaxcredit", "#zqd");
        if (this.mli > 0 && b === true) {
            return this.mli
        }
        return 0
    };
    this.dzr = function () {
        var b = this.rnb.sqv("cmaxwin") == null || this.rnb.nly("cmaxwin", "#zqd");
        if (this.inl > 0 && b === true) {
            return this.inl
        }
        return 0
    };
    this.kfu = function (c, f, d) {
        if (this.usf && this.usf.length > 0) {
            var g = this.rnb.sqv("cmincredit") == null || this.rnb.nly("cmincredit", "#zqd"),
                e = this.rnb.sqv("cmaxcredit") == null || this.rnb.nly("cmaxcredit", "#zqd"),
                b = this.rnb.sqv("cmaxwin") == null || this.rnb.nly("cmaxwin", "#zqd");
            if (this.cwp === true) {
                g = this.jst;
                e = false;
                b = false;
                this.wup()
            } else {
                if (this.jst === true) {
                    g = true;
                    this.hjk = (this.hjk < this.parent.zlh) ? this.hjk : this.parent.zlh;
                    this.hjk = (this.hjk > 0) ? this.hjk : this.parent.zlh
                } else {
                    g = (this.hjk < this.parent.zlh) ? g : false;
                    this.hjk = (this.hjk < this.parent.zlh) ? this.hjk : this.parent.zlh
                }
                e = (this.mli > this.parent.zlh) ? e : false;
                this.mli = (this.mli > this.parent.zlh) ? this.mli : this.parent.zlh
            }
            this.rnb.nly("cmincredit", "#xjn", [g]);
            this.rnb.nly("cmaxcredit", "#xjn", [e]);
            this.rnb.nly("cmaxwin", "#xjn", [b]);
            this.rnb.nly("gamesd", "#znm", [(this.usf[this.jaa] > 0) ? this.usf[this.jaa] : "---"]);
            this.rnb.nly("mincreditd", "#znm", [(g === true && this.hjk > 0) ? this.parent.fcy(this.hjk) : "---"]);
            this.rnb.nly("maxcreditd", "#znm", [(e === true && this.mli > 0) ? this.parent.fcy(this.mli) : "---"]);
            this.rnb.nly("maxwind", "#znm", [(b === true && this.inl > 0) ? this.parent.fcy(this.inl) : "---"]);
            this.rnb.nly("lmincredit", "#cug", [g]);
            this.rnb.nly("mmincredit", "#cug", [g]);
            this.rnb.nly("lmaxcredit", "#cug", [e]);
            this.rnb.nly("mmaxcredit", "#cug", [e]);
            this.rnb.nly("lmaxwin", "#cug", [b]);
            this.rnb.nly("mmaxwin", "#cug", [b])
        }
        this.gyr = c;
        this.eiq = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.clo()
            } else {
                if (d === 1) {
                    if (this.parent.xjs() != null) {
                        this.bmj()
                    } else {
                        this.hsk()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.xjs() != null) {
                            this.hsk()
                        } else {
                            this.qph()
                        }
                    } else {
                        if (d === 3 && this.parent.xjs() != null) {
                            this.qph()
                        }
                    }
                }
            }
        } else {
            this.clo()
        }
        this.rnb.aam("tbuttons", "#dat", [true]);
        this.cug(true);
        this.parent.wac()
    };
    this.snh = function () {
        this.rnb.aam("tbuttons", "#dat", [false]);
        this.rnb.aam("bbuttons", "#dat", [false]);
        this.rnb.aam("sbuttons", "#dat", [false]);
        this.rnb.aam("abuttons", "#dat", [false]);
        this.rnb.aam("acheckboxes", "#dat", [false]);
        this.cug(false);
        this.parent.wac()
    };
    this.stop = function () {
        clearInterval(this.ymj)
    };
    this.wkl = function (d, b) {
        var c = "";
        this.rnb.nly("language", "#znm", [pze.bvr.cgv(d.language)]);
        this.rnb.nly("audio", "#znm", [pze.bvr.cgv(d.audio)]);
        this.rnb.nly("melody", "#znm", [pze.bvr.cgv(d.zqx)]);
        this.rnb.nly("fullscreen", "#znm", [pze.bvr.cgv(d.lkz)]);
        this.rnb.nly("turbo", "#znm", [pze.bvr.cgv(d.pfk)]);
        this.rnb.nly("help", "#znm", [pze.bvr.cgv(d.gqi)]);
        this.rnb.nly("history", "#znm", [pze.bvr.cgv(d.odx)]);
        this.rnb.nly("statistic", "#znm", [pze.bvr.cgv(d.qdn)]);
        this.rnb.nly("rules", "#znm", [pze.bvr.cgv(d.fcl)]);
        this.rnb.nly("gamble", "#znm", [pze.bvr.cgv(d.pdj)]);
        if (pze.bvr.ply[pze.bvr.ivt] === pze.xwd.sgx) {
            c = pze.bvr.cgv(d.left)
        } else {
            if (pze.bvr.ply[pze.bvr.ivt] === pze.xwd.jnt) {
                c = pze.bvr.cgv(d.plx)
            } else {
                if (pze.bvr.ply[pze.bvr.ivt] === pze.xwd.gwo) {
                    c = pze.bvr.cgv(d.kpt)
                }
            }
        }
        this.rnb.nly("adjustment", "#znm", [c]);
        if (b && b === true) {
            this.xzi = pze.bvr.cgv(d.nnh) + "/" + pze.bvr.cgv(d.fdd) + ":";
            this.llc = pze.bvr.cgv(d.vfh) + ":"
        } else {
            this.xzi = pze.bvr.cgv(d.nnh) + ":"
        }
        this.hqx = pze.bvr.cgv(d.npq) + ":";
        this.eey = pze.bvr.cgv(d.upu);
        this.wdn = pze.bvr.cgv(d.mxo);
        if (this.parent.dfn === true && pze.spi.value44.d === true) {
            this.qnz = pze.bvr.cgv(d.ftl)
        }
        this.rnb.nly("cmincredit", "#znm", [pze.bvr.cgv(d.hmg)]);
        this.rnb.nly("cmaxcredit", "#znm", [pze.bvr.cgv(d.sur)]);
        this.rnb.nly("cmaxwin", "#znm", [pze.bvr.cgv(d.vyv)])
    };
    this.wac = function (l, j, m, e) {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.rnb.yns("tbuttons"),
            b = this.bgf,
            g = this.lhf;
        if (this.izt) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.bgf);
            b.addColorStop(1, this.izt)
        }
        if (this.tef) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.lhf);
            g.addColorStop(1, this.tef)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        pze.sog.zwt(n, 0, 0, this.width, this.height, this.jhh, b, g, this.dvm);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].wac()
        }
        if (this.jkw === 0) {
            this.tpe(n)
        } else {
            if (this.jkw === 1) {
                this.wnl(n)
            } else {
                if (this.jkw === 2) {
                    this.gqm(n)
                } else {
                    if (this.jkw === 3) {
                        this.jit(n)
                    }
                }
            }
        }
        n.restore();
        if (this.hea && this.eat) {
            if (c) {
                this.hea.drawImage(this.eat, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.tpe = function (c) {
        var f = this.rnb.yns("bbuttons"),
            d = this.rnb.yns("bdisplays");
        if (this.yie.width > 0 && this.yie.height > 0) {
            pze.sog.rig(c, this.xzi, this.mrg, this.yie.x, this.yie.y, this.yie.width, this.yie.height, this.mki, this.cyj, this.shp, 0)
        }
        if (this.aqg.width > 0 && this.aqg.height > 0) {
            pze.sog.rig(c, this.llc, this.mrg, this.aqg.x, this.aqg.y, this.aqg.width, this.aqg.height, this.mki, this.cyj, this.shp, 0)
        }
        if (this.ufu.width > 0 && this.ufu.height > 0) {
            pze.sog.rig(c, this.hqx, this.mrg, this.ufu.x, this.ufu.y, this.ufu.width, this.ufu.height, this.mki, this.cyj, this.shp, 0)
        }
        pze.sog.tll(c, this.qmz, this.mrg, this.xbt.x, this.xbt.y, this.xbt.width, this.xbt.height, this.mki, this.olb, this.shp, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].wac()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].wac()
        }
    };
    this.wnl = function (c) {
        var f = this.rnb.yns("abuttons"),
            d = this.rnb.yns("adisplays"),
            g = this.rnb.yns("acheckboxes");
        pze.sog.tll(c, this.qnz, this.mrg, this.udk.x, this.udk.y, this.udk.width, this.udk.height, this.mki, this.olb, this.shp, "center", true);
        pze.sog.rig(c, this.eey, this.mrg, this.ilh.x, this.ilh.y, this.ilh.width, this.ilh.height, this.mki, this.fst, this.shp, 0);
        pze.sog.ylo(c, this.wdn, this.mrg, this.sjc.x, this.sjc.y, this.sjc.width, this.sjc.height, this.mki, this.fst, this.shp);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].wac()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].wac()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].wac()
        }
    };
    this.gqm = function (c) {
        var d = this.rnb.yns("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].wac()
        }
    };
    this.jit = function (c) {
        var d = this.rnb.yns("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].wac()
        }
    };
    this.yqg = function () {
        a.jaa = (a.jaa < a.usf.length - 1) ? a.jaa + 1 : 0;
        a.parent.cpo.tkq("btn");
        a.rnb.nly("gamesd", "#znm", [(a.usf[a.jaa] > 0) ? a.usf[a.jaa] : "---"]);
        a.wac();
        return (a.jaa >= a.usf.length - 1)
    };
    this.qvc = function () {
        a.jaa = (a.jaa > 0) ? a.jaa - 1 : a.usf.length - 1;
        a.parent.cpo.tkq("btn");
        a.rnb.nly("gamesd", "#znm", [(a.usf[a.jaa] > 0) ? a.usf[a.jaa] : "---"]);
        a.wac();
        return (a.jaa <= 0)
    };
    this.ksi = function () {
        var b = a.rnb.sqv("cmincredit") == null || a.rnb.nly("cmincredit", "#zqd");
        if (b === true) {
            if (++a.ktp > 10) {
                a.ccd = 10
            }
            a.hjk = (a.hjk + (a.dle * a.ccd) <= a.parent.zlh) ? a.hjk + (a.dle * a.ccd) : a.parent.zlh;
            a.parent.cpo.tkq("btn");
            a.rnb.nly("mincreditd", "#znm", [(a.hjk > 0) ? a.parent.fcy(a.hjk) : "---"]);
            a.rnb.nly("mmincredit", "#cug", [b && a.hjk < a.parent.zlh]);
            a.rnb.nly("lmincredit", "#cug", [b && a.hjk > 0]);
            a.wac();
            return (a.hjk >= a.parent.zlh)
        }
        return true
    };
    this.fgt = function () {
        var b = a.rnb.sqv("cmincredit") == null || a.rnb.nly("cmincredit", "#zqd");
        if (b === true) {
            if (++a.ktp > 10) {
                a.ccd = 10
            }
            a.hjk = (a.hjk - (a.dle * a.ccd) > 0) ? a.hjk - (a.dle * a.ccd) : 0;
            a.parent.cpo.tkq("btn");
            a.rnb.nly("mincreditd", "#znm", [(a.hjk > 0) ? a.parent.fcy(a.hjk) : "---"]);
            a.rnb.nly("mmincredit", "#cug", [b && a.hjk < a.parent.zlh]);
            a.rnb.nly("lmincredit", "#cug", [b && a.hjk > 0]);
            a.wac();
            return (a.hjk >= a.parent.zlh || a.hjk <= 0)
        }
        return true
    };
    this.wpm = function () {
        var b = a.rnb.sqv("cmaxcredit") == null || a.rnb.nly("cmaxcredit", "#zqd");
        if (b === true) {
            if (++a.ktp > 10) {
                a.ccd = 10
            }
            a.mli = (a.mli + (a.ykb * a.ccd) > 0) ? a.mli + (a.ykb * a.ccd) : 0;
            a.parent.cpo.tkq("btn");
            a.rnb.nly("maxcreditd", "#znm", [(a.mli > 0) ? a.parent.fcy(a.mli) : "---"]);
            a.rnb.nly("lmaxcredit", "#cug", [b && a.mli > a.parent.zlh]);
            a.wac();
            return (a.mli <= a.parent.zlh)
        }
        return true
    };
    this.nsp = function () {
        var b = a.rnb.sqv("cmaxcredit") == null || a.rnb.nly("cmaxcredit", "#zqd");
        if (b === true) {
            if (++a.ktp > 10) {
                a.ccd = 10
            }
            a.mli = (a.mli - (a.ykb * a.ccd) > a.parent.zlh) ? a.mli - (a.ykb * a.ccd) : a.parent.zlh;
            a.parent.cpo.tkq("btn");
            a.rnb.nly("maxcreditd", "#znm", [(a.mli > 0) ? a.parent.fcy(a.mli) : "---"]);
            a.rnb.nly("lmaxcredit", "#cug", [b && a.mli > a.parent.zlh]);
            a.wac();
            return (a.mli <= a.parent.zlh)
        }
        return true
    };
    this.woy = function () {
        var b = a.rnb.sqv("cmaxwin") == null || a.rnb.nly("cmaxwin", "#zqd");
        if (b === true) {
            if (++a.ktp > 10) {
                a.ccd = 10
            }
            a.inl = (a.inl + (a.ykb * a.ccd) > 0) ? a.inl + (a.ykb * a.ccd) : 0;
            a.parent.cpo.tkq("btn");
            a.rnb.nly("maxwind", "#znm", [(a.inl > 0) ? a.parent.fcy(a.inl) : "---"]);
            a.rnb.nly("lmaxwin", "#cug", [b && a.inl > a.ykb]);
            a.wac();
            return (a.inl <= a.ykb)
        }
        return true
    };
    this.xrw = function () {
        var b = a.rnb.sqv("cmaxwin") == null || a.rnb.nly("cmaxwin", "#zqd");
        if (b === true) {
            if (++a.ktp > 10) {
                a.ccd = 10
            }
            a.inl = (a.inl - (a.ykb * a.ccd) > 0) ? a.inl - (a.ykb * a.ccd) : a.ykb;
            a.parent.cpo.tkq("btn");
            a.rnb.nly("maxwind", "#znm", [(a.inl > 0) ? a.parent.fcy(a.inl) : "---"]);
            a.rnb.nly("lmaxwin", "#cug", [b && a.inl > a.ykb]);
            a.wac();
            return (a.inl <= a.ykb)
        }
        return true
    };
    this.urv = function () {
        var b = a.rnb.sqv("cmincredit") == null || a.rnb.nly("cmincredit", "#zqd");
        a.hjk = a.parent.zlh;
        a.rnb.nly("mincreditd", "#znm", [(b === true && a.hjk > 0) ? a.parent.fcy(a.hjk) : "---"]);
        a.rnb.nly("lmincredit", "#cug", [b]);
        a.rnb.nly("mmincredit", "#cug", [b && a.hjk < a.parent.zlh]);
        a.wac()
    };
    this.xdk = function () {
        var b = a.rnb.sqv("cmaxcredit") == null || a.rnb.nly("cmaxcredit", "#zqd");
        a.mli = a.parent.zlh;
        a.rnb.nly("maxcreditd", "#znm", [(b === true && a.mli > 0) ? a.parent.fcy(a.mli) : "---"]);
        a.rnb.nly("lmaxcredit", "#cug", [b && a.mli > a.parent.zlh]);
        a.rnb.nly("mmaxcredit", "#cug", [b]);
        a.wac()
    };
    this.ejk = function () {
        var b = a.rnb.sqv("cmaxwin") == null || a.rnb.nly("cmaxwin", "#zqd");
        if (a.inl === 0) {
            a.inl = a.ykb
        }
        a.rnb.nly("maxwind", "#znm", [(b === true && a.inl > 0) ? a.parent.fcy(a.inl) : "---"]);
        a.rnb.nly("lmaxwin", "#cug", [b && a.inl > a.ykb]);
        a.rnb.nly("mmaxwin", "#cug", [b]);
        a.wac()
    };
    this.clo = function () {
        a.jkw = 0;
        a.rnb.nly("bett", "#jrn", [true, false, false]);
        a.rnb.nly("autot", "#jrn", [false, false, false]);
        a.rnb.nly("helpt", "#jrn", [false, false, false]);
        a.rnb.nly("settingt", "#jrn", [false, false, false]);
        a.rnb.nly("returnt", "#jrn", [false, false, false]);
        a.rnb.aam("bbuttons", "#dat", [a.gyr]);
        a.rnb.aam("bbuttons", "#cug", [a.gyr]);
        a.rnb.aam("abuttons", "#dat", [false]);
        a.rnb.aam("acheckboxes", "#dat", [false]);
        a.rnb.aam("hbuttons", "#dat", [false]);
        a.rnb.aam("sbuttons", "#dat", [false]);
        a.wac()
    };
    this.bmj = function () {
        var d = a.rnb.sqv("cmincredit") == null || a.rnb.nly("cmincredit", "#zqd"),
            c = a.rnb.sqv("cmaxcredit") == null || a.rnb.nly("cmaxcredit", "#zqd"),
            b = a.rnb.sqv("cmaxwin") == null || a.rnb.nly("cmaxwin", "#zqd");
        a.jkw = 1;
        a.dle = (a.ksr > 0) ? a.parent.cbe() * a.ksr : a.dle;
        a.ykb = (a.vyd > 0) ? a.parent.cbe() * a.vyd : a.ykb;
        a.rnb.nly("bett", "#jrn", [false, false, false]);
        a.rnb.nly("autot", "#jrn", [true, false, false]);
        a.rnb.nly("helpt", "#jrn", [false, false, false]);
        a.rnb.nly("settingt", "#jrn", [false, false, false]);
        a.rnb.nly("returnt", "#jrn", [false, false, false]);
        a.rnb.aam("bbuttons", "#dat", [false]);
        a.rnb.aam("abuttons", "#dat", [true]);
        a.rnb.nly("mmincredit", "#cug", [d && a.hjk < a.parent.zlh]);
        a.rnb.nly("lmaxcredit", "#cug", [c && a.mli > a.parent.zlh]);
        a.rnb.nly("lmaxwin", "#cug", [b && a.inl > a.ykb]);
        a.rnb.aam("acheckboxes", "#dat", [true]);
        a.rnb.aam("hbuttons", "#dat", [false]);
        a.rnb.aam("sbuttons", "#dat", [false]);
        if (a.jst === true) {
            a.rnb.nly("cmincredit", "#dat", [false])
        }
        a.wac()
    };
    this.hsk = function () {
        a.jkw = 2;
        a.rnb.nly("bett", "#jrn", [false, false, false]);
        a.rnb.nly("autot", "#jrn", [false, false, false]);
        a.rnb.nly("helpt", "#jrn", [true, false, false]);
        a.rnb.nly("settingt", "#jrn", [false, false, false]);
        a.rnb.nly("returnt", "#jrn", [false, false, false]);
        a.rnb.aam("bbuttons", "#dat", [false]);
        a.rnb.aam("abuttons", "#dat", [false]);
        a.rnb.aam("acheckboxes", "#dat", [false]);
        a.rnb.aam("hbuttons", "#dat", [true]);
        a.rnb.aam("sbuttons", "#dat", [false]);
        a.wac()
    };
    this.qph = function () {
        a.jkw = 3;
        a.rnb.nly("bett", "#jrn", [false, false, false]);
        a.rnb.nly("autot", "#jrn", [false, false, false]);
        a.rnb.nly("helpt", "#jrn", [false, false, false]);
        a.rnb.nly("settingt", "#jrn", [true, false, false]);
        a.rnb.nly("returnt", "#jrn", [false, false, false]);
        a.rnb.aam("bbuttons", "#dat", [false]);
        a.rnb.aam("abuttons", "#dat", [false]);
        a.rnb.aam("acheckboxes", "#dat", [false]);
        a.rnb.aam("hbuttons", "#dat", [false]);
        a.rnb.aam("sbuttons", "#dat", [true]);
        a.rnb.nly("gamble", "#dat", [a.eiq]);
        a.wac()
    };
    this.zoa = function () {
        a.parent.use();
        a.rnb.nly("returnt", "#jrn", [false, false, false])
    }
}
mag.prototype = new qdi;

function vuq() {
    var a = this;
    this.mki = null;
    this.shp = "bold";
    this.bgf = "rgb(0,0,0)";
    this.izt = null;
    this.mrg = "rgb(255,255,255)";
    this.tef = null;
    this.lhf = "rgb(60,60,60)";
    this.bjj = null;
    this.sad = null;
    this.xcl = false;
    this.equ = [];
    this.xis = [];
    this.scb = null;
    this.lod = 19;
    this.xys = 15;
    this.tkk = 120;
    this.vod = 2;
    this.pdf = 2;
    this.tuk = 2;
    this.frv = 10;
    this.lfy = 12;
    this.hre = function (b, d, c) {
        vuq.prototype.hre.call(this, b, d, c)
    };
    this.ipo = function (b) {
        try {
            this.lfy = b.fontSize;
            this.lod = b.qdm;
            this.xys = b.zyo;
            this.tkk = b.uik;
            this.vod = b.ihx;
            this.pdf = b.vmp;
            this.tuk = b.hzi;
            this.frv = b.uah
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            this.mki = b.font;
            this.shp = b.lfx;
            this.bgf = b.backgroundColor;
            this.izt = b.hik;
            this.mrg = b.qmj;
            this.lhf = b.borderColor;
            this.tef = b.tbr;
            if (this.izt) {
                this.bjj = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.bjj.addColorStop(0, this.izt);
                this.bjj.addColorStop(0.5, this.bgf)
            } else {
                this.bjj = this.bgf
            }
            if (this.tef) {
                this.sad = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.sad.addColorStop(0, this.tef);
                this.sad.addColorStop(1, this.lhf)
            } else {
                this.sad = this.lhf
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.tzk = function (b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.frv : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.czv()) {
            this.parent.nwc();
            return true
        }
        return false
    };
    this.ksz = function (d, b, c) {
        this.xis.push({
            id: d,
            nme: b,
            value: c,
            flu: null
        })
    };
    this.ajn = function (e, c, d, b) {
        this.xis.push({
            id: e,
            nme: c,
            value: d,
            flu: b
        })
    };
    this.ebm = function (d, b, c) {
        this.equ.push({
            id: d,
            kwc: b,
            value: c
        })
    };
    this.lne = function (e, d) {
        for (var c = 0, b = this.xis.length; c < b; c++) {
            if (this.xis[c].id == e) {
                this.xis[c].value = d;
                return true
            }
        }
        return false
    };
    this.lcf = function (c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.bfu = function (e, d) {
        for (var c = 0, b = this.equ.length; c < b; c++) {
            if (this.equ[c].id == e) {
                if (this.equ[c].value != d) {
                    this.equ[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.atf = function (b) {
        this.scb = b
    };
    this.dat = function (b) {
        this.xcl = b
    };
    this.czv = function (b) {
        return this.xcl
    };
    this.hrk = function (c, b) {
        if (this.lne(c, b)) {
            window.tnu(a.wac)
        }
    };
    this.wwg = function (c, b) {
        if (this.bfu(c, b)) {
            window.tnu(a.wac)
        }
    };
    this.umg = function (b) {
        this.atf(b);
        window.tnu(a.wac)
    };
    this.wac = function () {
        if (!a.jff() || !a.parent.dth()) {
            return
        }
        var e = (a.height - a.lfy) / 2 + a.pdf,
            c = a.vod + a.lod * a.xis.length,
            d = a.width - c - (a.tkk * a.equ.length),
            b = a.context2D;
        b.save();
        pze.sog.ssm(b, 0, 0, a.width, a.height, a.bjj, 1);
        a.dyp(b, e);
        a.pfr(b, e);
        if (a.scb && a.scb != "") {
            pze.sog.ylo(b, a.scb, a.mrg, c, e, d, a.lfy, a.mki, a.lfy, a.shp)
        } else {
            if (a.czv()) {
                a.cct(b)
            }
        }
        a.sdd(b, 0, a.height - a.tuk / 2, a.width, a.height - a.tuk / 2);
        b.restore();
        if (a.hea && a.eat) {
            a.hea.drawImage(a.eat, a.x, a.y)
        }
    };
    this.dyp = function (d, g) {
        var c = 0;
        for (var f = 0, b = this.xis.length; f < b; f++) {
            if (this.xis[f].flu) {
                var e = this.lcf(this.xis[f].flu, this.xis[f].value);
                if (this.xis[f].nme instanceof Array) {
                    pze.sog.ylo(d, this.xis[f].nme[e], this.mrg, c, g, this.lod, this.lfy, this.mki, this.lfy, this.shp)
                } else {
                    if (this.xis[f].nme instanceof Image || this.xis[f].nme instanceof HTMLCanvasElement) {
                        d.drawImage(this.xis[f].nme, e * this.xys, 0, this.xys, this.xis[f].nme.height, c + this.vod, g - this.pdf, this.lod - 2 * this.vod, this.lfy)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.xis[f].value == true) ? 1 : 0.3;
                if (this.xis[f].nme instanceof String) {
                    pze.sog.ylo(d, this.xis[f].nme, this.mrg, c, g, this.lod, this.lfy, this.mki, this.lfy, this.shp)
                } else {
                    if (this.xis[f].nme instanceof Image || this.xis[f].nme instanceof HTMLCanvasElement) {
                        d.drawImage(this.xis[f].nme, c + this.vod, g - this.pdf, this.lod - 2 * this.vod, this.lfy)
                    }
                }
                d.restore()
            }
            c += this.lod;
            this.sdd(d, c, 0, c, this.height)
        }
        return c
    };
    this.pfr = function (d, f) {
        var c = this.width - this.vod - this.tkk * this.equ.length;
        for (var e = 0, b = this.equ.length; e < b; e++) {
            if (this.equ[e].id == "freeplay") {
                pze.sog.ssm(d, c, 0, this.tkk, this.height, "red", 0.4)
            } else {
                if (this.equ[e].id == "freespin") {
                    pze.sog.ssm(d, c, 0, this.tkk, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.sdd(d, c, 0, c, this.height);
            pze.sog.ylo(d, this.equ[e].kwc + this.equ[e].value, this.mrg, c, f, this.tkk, this.lfy, this.mki, this.lfy, this.shp);
            c += this.tkk
        }
    };
    this.sdd = function (b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.sad;
        b.lineWidth = this.tuk;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.cct = function (c) {
        if (this.parent.vvh.sqv("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.tuk,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.tuk;
        c.save();
        c.strokeStyle = this.lhf;
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
vuq.prototype = new qdi;

function hgo() {
    var b = this;
    var c = 0;
    var a = 1;
    this.oli = 7;
    this.fwd = 89;
    this.hdr = 10000;
    this.rnb = null;
    this.xcl = false;
    this.ejq = false;
    this.vqi = -1;
    this.jmg = 0;
    this.mki = null;
    this.shp = "bold";
    this.bgf = "black";
    this.niz = null;
    this.gxa = null;
    this.txo = null;
    this.mrg = "white";
    this.gaq = 0.8;
    this.urf = 0;
    this.sxk = 0;
    this.ado = 0;
    this.hzs = 0;
    this.lgk = 0;
    this.weq = 0;
    this.tqu = 0;
    this.vod = 10;
    this.pdf = 5;
    this.jdq = 10;
    this.ssj = this.vod;
    this.mor = 10;
    this.jsq = 20;
    this.ahj = 40;
    this.dvm = 4;
    this.lfy = 10;
    this.huv = null;
    this.ycy = null;
    this.trr = "";
    this.llr = null;
    this.hre = function (d, f, e) {
        hgo.prototype.hre.call(this, d, f, e);
        this.rnb = new xes();
        this.rnb.hre();
        this.rnb.nip("buttons");
        this.rnb.nip("system");
        this.rnb.nip("setting")
    };
    this.ipo = function (d) {
        try {
            this.lfy = d.fontSize;
            this.mor = d.iwq;
            this.jsq = d.kxg;
            this.ahj = d.jyw;
            this.dvm = d.iej;
            this.vod = d.ihx;
            this.pdf = d.vmp;
            this.jdq = d.hgm
        } catch (f) {
            console.error(f)
        }
    };
    this.ybb = function (g, m) {
        try {
            var k = this.rnb.yns("buttons"),
                j = (m === true) ? g.rvs.kfs : g.xkh.kfs;
            this.mki = g.font;
            this.shp = g.lfx;
            this.bgf = g.backgroundColor;
            this.niz = g.qdt;
            this.gxa = g.xwn;
            this.mrg = g.qmj;
            this.gaq = g.tyr;
            if (this.niz && this.gxa) {
                this.txo = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.txo.addColorStop(0, this.niz);
                this.txo.addColorStop(0.5, this.gxa);
                this.txo.addColorStop(1, this.niz)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].ybb(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.tzk = function (p, o) {
        var n = this.rnb.ajf(),
            q = this.rnb.sqv("audio"),
            r = this.rnb.sqv("language"),
            f = this.rnb.sqv("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.ejq) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.jff()) {
                if (g.czv() && !g.mns()) {
                    if (g != q && g != r) {
                        this.parent.cpo.swx("btn");
                        this.parent.cpo.tkq("btn")
                    }
                    g.jrn(true, true, false);
                    g.bxc();
                    for (var k = 0; k < m; k++) {
                        n[k].sic(true)
                    }
                    if (g != f) {
                        if (this.vqi >= 0) {
                            clearTimeout(this.vqi);
                            this.vqi = -1
                        }
                        this.vqi = setTimeout(this.myj, this.hdr)
                    }
                }
                return true
            }
        }
        if (this.jff() && this.czv()) {
            if (p < this.x + this.lgk || p > this.x + this.lgk + this.weq || o < this.y || o > this.y + this.height) {
                if (this.vqi >= 0) {
                    clearTimeout(this.vqi);
                    this.vqi = -1
                }
                return false
            }
        }
        return true
    };
    this.yew = function () {
        var g = this.rnb.ajf();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.flo() == true) {
                e.jrn(false, true);
                return true
            }
        }
        return false
    };
    this.oaf = function (e) {
        var o = this.rnb.ajf(),
            d = this.rnb.yns("system"),
            m = this.rnb.yns("setting"),
            q = this.rnb.sqv("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.ejq) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.lfv || e == f.xek) && !f.mns()) {
                if (f != q) {
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn")
                }
                f.jrn(true, true, false);
                f.bxc();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].sic(true)
                }
                if (this.vqi >= 0) {
                    clearTimeout(this.vqi);
                    this.vqi = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.lfv || e == f.xek) && f.czv() && !f.mns()) {
                if (f != q) {
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn")
                }
                f.jrn(true, true, false);
                f.bxc();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].sic(true)
                }
                if (this.vqi >= 0) {
                    clearTimeout(this.vqi);
                    this.vqi = -1
                }
                return true
            }
        }
        if (this.jff() && this.czv()) {
            if (this.parent.zew) {
                for (l = 0, n = this.parent.zew.ido.length; l < n; l++) {
                    var p = this.parent.zew.ido[l];
                    if (p.dzq == e || p.dzq == e) {
                        if (this.vqi >= 0) {
                            clearTimeout(this.vqi);
                            this.vqi = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.mgf = function () {
        var g = this.rnb.ajf();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.flo() == true) {
                e.jrn(false, true, false);
                return true
            }
        }
        return false
    };
    this.qrx = function (e, m) {
        var k = this.rnb.ajf(),
            l = e - this.x,
            j = m - this.y;
        this.ycy = this.huv;
        this.huv = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.jff() && f.czv() && !f.mns()) {
                this.huv = f
            }
        }
        if (this.huv) {
            this.tox(true)
        } else {
            this.tox(false)
        }
        return true
    };
    this.vlx = function (e, f, g, j, m, d, n) {
        this.tqu = g.width;
        var l = new rcu(this.ssj, this.pdf, this.tqu, this.tqu);
        var k = new idd();
        k.hre(l, this.context2D);
        k.parent = this;
        k.bxc = j;
        k.uxc = f;
        k.hrq(d, n);
        k.ipo(this.parent.tgq.uug.gvo);
        k.ybb(this.parent.style.uug.xkh.kfs);
        k.czh(g);
        if (m != null) {
            k.xek = m.jnn;
            k.lfv = m.dzq;
            k.liq = m.value
        }
        this.rnb.vnv(e, k, ["buttons", "setting"]);
        this.ssj += this.tqu + this.vod;
        this.weq = this.ssj
    };
    this.poi = function (l, k, j, g, e) {
        this.tqu = j.width;
        var f = new rcu(this.ssj, this.pdf, this.tqu, this.tqu);
        var d = new idd();
        d.hre(f, this.context2D);
        d.parent = this;
        d.bxc = g;
        d.uxc = k;
        d.ipo(this.parent.tgq.uug.gvo);
        d.ybb(this.parent.style.uug.xkh.kfs);
        d.czh(j);
        if (e != null) {
            d.xek = e.jnn;
            d.lfv = e.dzq;
            d.liq = e.value
        }
        this.rnb.vnv(l, d, ["buttons", "system"]);
        this.ssj += this.tqu + this.vod;
        this.weq = this.ssj
    };
    this.fpu = function () {
        var f = this.rnb.ajf();
        this.weq += 2 * this.jdq;
        this.lgk = Math.round((this.width - this.weq) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.lgk + this.jdq
        }
    };
    this.hju = function () {
        return this.weq
    };
    this.dat = function (d) {
        this.xcl = d
    };
    this.czv = function () {
        return this.xcl
    };
    this.wjx = function (g) {
        var f = this.rnb.ajf();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].dat(g)
        }
        this.parent.wac()
    };
    this.uoe = function (g) {
        var f = this.rnb.yns("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].dat(g)
        }
        this.parent.wac()
    };
    this.qah = function (g) {
        var f = this.rnb.yns("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].dat(g)
        }
        this.parent.wac()
    };
    this.kfu = function () {
        if (this.jff()) {
            return
        }
        if (this.ejq) {
            if (this.hzs === a) {
                this.llr = this.kfu
            } else {
                this.llr = null
            }
        } else {
            this.llr = null;
            this.brk();
            this.kbn()
        }
    };
    this.rmc = function (d) {
        if (this.parent.xnv) {
            this.parent.xnv()
        }
        this.stop();
        this.ejq = false;
        this.llr = null;
        this.cug(true, d);
        if (this.vqi >= 0) {
            clearTimeout(this.vqi);
            this.vqi = -1
        }
        this.vqi = setTimeout(this.myj, this.hdr)
    };
    this.myj = function () {
        if (b.jff()) {
            b.parent.cpo.swx("panel_out");
            b.parent.cpo.tkq("panel_out");
            b.snh()
        }
    };
    this.snh = function () {
        if (!this.jff()) {
            return
        }
        if (this.ejq) {
            if (this.hzs === c) {
                this.llr = this.snh
            } else {
                this.llr = null
            }
        } else {
            this.llr = null;
            this.tfb();
            this.kbn();
            if (this.vqi >= 0) {
                clearTimeout(this.vqi);
                this.vqi = -1
            }
        }
    };
    this.blr = function (d) {
        if (this.parent.oyl) {
            this.parent.oyl()
        }
        this.stop();
        this.ejq = false;
        this.llr = null;
        this.cug(false, d);
        if (typeof this.kyj === "function") {
            this.kyj();
            this.kyj = null
        }
    };
    this.brk = function () {
        this.cug(true);
        this.ejq = true;
        this.xcl = false;
        this.hzs = c;
        this.urf = Math.floor(this.height / this.oli);
        this.ado = 1;
        this.sxk = Math.floor(this.height / this.oli)
    };
    this.tfb = function () {
        if (this.parent.oyl) {
            this.parent.oyl()
        }
        this.ejq = true;
        this.xcl = false;
        this.hzs = a;
        this.urf = -Math.floor(this.height / this.oli);
        this.ado = 1;
        this.sxk = this.height
    };
    this.kbn = function () {
        this.jmg = setInterval(this.uin, this.fwd)
    };
    this.hbk = function () {
        if (b.hzs == c) {
            if (b.parent.xnv) {
                b.parent.xnv()
            }
            if (b.vqi >= 0) {
                clearTimeout(b.vqi);
                b.vqi = -1
            }
            b.vqi = setTimeout(b.myj, b.hdr)
        }
        clearInterval(b.jmg);
        if (b.llr) {
            b.llr()
        }
    };
    this.stop = function () {
        clearTimeout(this.vqi);
        clearInterval(this.jmg);
        this.vqi = -1
    };
    this.uin = function () {
        if (!b.nkj()) {
            b.hbk()
        }
    };
    this.nkj = function () {
        if (b.ado < b.oli) {
            b.parent.wac(b.x, b.y, b.width, b.height);
            b.sxk += b.urf;
            b.ado++;
            return true
        } else {
            b.ejq = false;
            b.xcl = true;
            if (b.hzs == a) {
                b.cug(false);
                if (typeof b.kyj === "function") {
                    b.kyj();
                    b.kyj = null
                }
            }
            b.parent.wac(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.wac = function (n, m, o, g) {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.rnb.ajf(),
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
        this.mtb(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].wac()
        }
        if (this.huv && this.trr != "") {
            k = this.huv.x - this.vod - this.tqu;
            d = 3 * this.tqu + 2 * this.vod;
            if (k + d >= this.lgk + this.weq) {
                k = this.lgk + this.weq - d;
                pze.sog.gwf(p, this.trr, this.mrg, k, this.huv.y + this.huv.height, d, this.lfy, this.mki, this.lfy, this.shp, this.vod)
            } else {
                pze.sog.ylo(p, this.trr, this.mrg, k, this.huv.y + this.huv.height, d, this.lfy, this.mki, this.lfy, this.shp)
            }
        }
        p.restore();
        if (this.ejq) {
            if (this.hea && this.eat && this.sxk > 0) {
                this.hea.drawImage(this.eat, 0, this.height - this.sxk, this.width, this.sxk, this.x, this.y, this.width, this.sxk)
            }
        } else {
            if (e) {
                this.parent.wac(this.x + n, this.y + m, o, g)
            } else {
                if (this.hea && this.eat) {
                    this.hea.drawImage(this.eat, this.x, this.y)
                }
            }
        }
    };
    this.mtb = function (d) {
        var f = this.dvm,
            e = f / 2;
        d.save();
        d.strokeStyle = this.txo;
        d.fillStyle = this.bgf;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.mor, this.mor + e, this.mor, this.mor);
        d.arcTo(this.lgk, this.mor, this.lgk, this.height - this.jsq - e, this.ahj);
        d.arcTo(this.lgk, this.height - e, this.lgk + this.jsq, this.height - e, this.jsq);
        d.lineTo(this.lgk + this.weq - this.jsq, this.height - e);
        d.arcTo(this.lgk + this.weq, this.height - e, this.lgk + this.weq, this.height - this.jsq - e, this.jsq);
        d.arcTo(this.lgk + this.weq, this.mor, this.width - this.mor - e, this.mor, this.ahj);
        d.arcTo(this.width - e, this.mor, this.width - e, 0, this.mor);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.gaq;
        d.fill();
        d.restore()
    };
    this.tox = function (d) {
        if (this.huv && this.huv != this.ycy) {
            if (d && this.huv) {
                this.trr = this.parent.cgv(this.huv.uxc);
                if (!pze.sog.pzg) {
                    this.trr = (this.huv.liq) ? this.trr + " [" + this.huv.liq + "]" : this.trr
                }
            } else {
                this.trr = ""
            }
            this.parent.wac(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.huv && this.trr != this.parent.cgv(this.huv.uxc))) {
                this.trr = this.parent.cgv(this.huv.uxc);
                if (!pze.sog.pzg) {
                    this.trr = (this.huv.liq) ? this.trr + " [" + this.huv.liq + "]" : this.trr
                }
            }
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.kyj = null
}
hgo.prototype = new qdi;

function cui() {
    var a = this;
    this.pbo = "LOADING ... ";
    this.fmr = "ERROR";
    this.dmz = null;
    this.efw = null;
    this.gom = false;
    this.pqu = false;
    this.krt = true;
    this.xxd = null;
    this.soy = null;
    this.jmg = 0;
    this.lrk = 0;
    this.djv = false;
    this.tau = false;
    this.rqa = 0;
    this.vut = 60;
    this.ofp = 0;
    this.jrg = null;
    this.trr = null;
    this.dyv = null;
    this.ixb = true;
    this.mki = null;
    this.shp = "bold";
    this.rhy = "black";
    this.zww = "rgb(0,100,10)";
    this.fra = "rgb(80,255,100)";
    this.vox = "rgb(120,120,120)";
    this.dfp = "red";
    this.ews = "white";
    this.lfy = 14;
    this.pvx = 18;
    this.nci;
    this.rff;
    this.ymp;
    this.pve;
    this.jdq = 5;
    this.vod = 12;
    this.pdf = 5;
    this.grt = 2;
    this.kub = 7;
    this.lug = new rcu();
    this.tcd = 0;
    this.otl = 0;
    this.csp = 0;
    this.vys = new rcu();
    this.oit = new rcu();
    this.plp = new rcu();
    this.vrl = new rcu();
    this.hre = function (b, d, c) {
        cui.prototype.hre.call(this, b, d, c);
        if (pze.spi.value45 == pze.trt.yyv) {
            this.xxd = document.createElement("canvas");
            this.soy = this.xxd.getContext("2d")
        }
    };
    this.ipo = function (b) {
        try {
            this.lfy = b.fontSize;
            this.pvx = b.ied;
            this.jdq = b.hgm;
            this.vod = b.ihx;
            this.pdf = b.vmp;
            this.grt = b.gfa;
            this.kub = b.iic;
            this.nci = b.aie;
            this.rff = b.tyg;
            this.ymp = b.xah;
            this.pve = b.yxo;
            this.lug = b.mun.mvx;
            this.tcd = b.mun.x;
            this.otl = b.mun.nnm;
            this.csp = b.mun.nfk;
            this.vys = b.wdw;
            this.oit = b.wuz.wdw;
            this.plp = b.wuz.tyg;
            this.vrl = b.wuz.eiv;
            if (pze.spi.value45 == pze.trt.yyv) {
                this.xxd.width = Math.round(this.lug.width);
                this.xxd.height = Math.round(this.lug.height)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.ybb = function (b) {
        try {
            this.mki = b.font;
            this.shp = b.lfx;
            this.rhy = b.backgroundColor;
            this.zww = b.rtx;
            this.fra = b.ouo;
            this.vox = b.wgn;
            this.dfp = b.cvq;
            this.ews = b.vii;
            this.efw = b.efw
        } catch (c) {
            console.error(c)
        }
    };
    this.wac = function (b) {
        if (b && b >= 0) {
            this.lrk = b
        }
        if (!this.jff()) {
            return
        }
        if (pze.spi.value45 == pze.trt.sth) {
            this.pyr()
        } else {
            if (pze.spi.value45 == pze.trt.ksa || pze.spi.value45 == pze.trt.yyv) {
                if (!this.dmz && this.trr && this.dyv) {
                    this.chk()
                } else {
                    if (pze.spi.value45 == pze.trt.ksa) {
                        this.ajp()
                    } else {
                        if (pze.spi.value45 == pze.trt.yyv) {
                            if (b === 100) {
                                this.tsd()
                            }
                            this.otc()
                        }
                    }
                }
            }
        }
    };
    this.pyr = function () {
        if (this.gom) {
            var c = this.context2D,
                b = this.ymp.width / 100;
            c.save();
            if (this.pqu === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.cpo.ewl("splash"), 0, 0, this.width, this.height);
            if (this.efw) {
                pze.sog.ssm(c, this.jdq, this.jdq, this.width - 2 * this.jdq, this.height - 2 * this.jdq, this.efw, 0.3)
            }
            if (this.dmz != null && this.dmz != "") {
                this.jbj(this.pve, true)
            } else {
                if (this.trr != null && this.trr != "") {
                    this.swb(this.pve, true)
                } else {
                    if (this.krt === true) {
                        if (this.pqu === false) {
                            pze.sog.ssm(c, this.nci.x, this.nci.y, this.nci.width, this.nci.height, this.rhy, 0.5)
                        }
                        var e = this.pbo + " " + this.lrk + "%";
                        var d = c.createLinearGradient(this.ymp.x, this.ymp.y, this.ymp.x + this.ymp.width, this.ymp.y);
                        d.addColorStop(0, this.zww);
                        d.addColorStop(1, this.fra);
                        pze.sog.ylo(c, e, this.ews, this.rff.x, this.rff.y, this.rff.width, this.rff.height, this.mki, this.lfy, this.shp);
                        pze.sog.ekt(c, this.ymp.x - this.grt, this.ymp.y, this.ymp.width + 2 * this.grt, this.ymp.height, this.grt, this.rhy, 0.8, this.vox, this.grt, 0.8);
                        pze.sog.ssm(c, this.ymp.x, this.ymp.y + this.grt / 2, b * this.lrk, this.ymp.height - this.grt, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.ajp = function () {
        if (this.gom) {
            var c = this.context2D,
                b = this.ymp.width / 100;
            c.save();
            if (this.pqu === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            if (this.djv === true && this.jrg) {
                c.beginPath();
                c.rect(this.jrg.x, this.jrg.y, this.jrg.width, this.jrg.height);
                c.closePath();
                c.clip()
            }
            c.drawImage(this.parent.cpo.ewl("splash"), this.vys.x, this.vys.y, this.vys.width, this.vys.height);
            if (this.dmz != null && this.dmz != "") {
                this.jbj(this.pve, false)
            } else {
                if (this.trr != null && this.trr != "") {
                    this.swb(this.pve, false)
                } else {
                    if (this.krt === true) {
                        var e = this.pbo + " " + this.lrk + "%";
                        var d = c.createLinearGradient(this.ymp.x, this.ymp.y, this.ymp.x + this.ymp.width, this.ymp.y);
                        d.addColorStop(0, this.zww);
                        d.addColorStop(1, this.fra);
                        var f = c.createLinearGradient(this.ymp.x + (b * this.lrk) - this.kub, this.ymp.y, this.ymp.x + (b * this.lrk), this.ymp.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        pze.sog.ylo(c, e, this.ews, this.rff.x, this.rff.y, this.rff.width, this.rff.height, this.mki, this.lfy, this.shp);
                        pze.sog.ssm(c, this.ymp.x, this.ymp.y, this.ymp.width, this.ymp.height, "rgb(12,15,25)", 1);
                        if (this.lrk > 0 && this.lrk < 100) {
                            pze.sog.ekt(c, this.ymp.x + (b * this.lrk) - this.kub + this.grt / 2, this.ymp.y - this.grt, this.kub, this.ymp.height + 2 * this.grt, this.grt, f, 0.5)
                        }
                        pze.sog.ssm(c, this.ymp.x, this.ymp.y, b * this.lrk, this.ymp.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.otc = function () {
        if (this.gom) {
            var c = this.context2D,
                b = this.ymp.width / 100;
            c.save();
            if (this.pqu === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.cpo.ewl("splash"), this.vys.x, this.vys.y, this.vys.width, this.vys.height);
            if (this.tau) {
                c.drawImage(this.xxd, this.lug.x, this.lug.y)
            }
            if (this.dmz != null && this.dmz != "") {
                this.jbj(this.pve, false)
            } else {
                if (this.trr != null && this.trr != "") {
                    this.swb(this.pve, false)
                } else {
                    if (this.krt === true) {
                        var e = this.pbo + " " + this.lrk + "%";
                        var d = c.createLinearGradient(this.ymp.x, this.ymp.y, this.ymp.x + this.ymp.width, this.ymp.y);
                        d.addColorStop(0, this.zww);
                        d.addColorStop(1, this.fra);
                        var f = c.createLinearGradient(this.ymp.x + (b * this.lrk) - this.kub, this.ymp.y, this.ymp.x + (b * this.lrk), this.ymp.y);
                        f.addColorStop(0, "rgb(100,100,100)");
                        f.addColorStop(1, "rgb(255,255,255)");
                        pze.sog.ylo(c, e, this.ews, this.rff.x, this.rff.y, this.rff.width, this.rff.height, this.mki, this.lfy, this.shp);
                        pze.sog.ssm(c, this.ymp.x, this.ymp.y, this.ymp.width, this.ymp.height, "rgb(12,15,25)", 1);
                        if (this.lrk > 0 && this.lrk < 100) {
                            pze.sog.ekt(c, this.ymp.x + (b * this.lrk) - this.kub + this.grt / 2, this.ymp.y - this.grt, this.kub, this.ymp.height + 2 * this.grt, this.grt, f, 0.5)
                        }
                        pze.sog.ssm(c, this.ymp.x, this.ymp.y, b * this.lrk, this.ymp.height, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.chk = function () {
        if (this.gom) {
            var b = this.context2D;
            b.save();
            b.clearRect(0, 0, this.width, this.height);
            if (this.dyv) {
                b.drawImage(this.dyv, this.oit.x, this.oit.y, this.oit.width, this.oit.height)
            }
            if (this.trr != null && this.trr != "") {
                pze.sog.tll(b, this.trr, this.ews, this.plp.x, this.plp.y, this.plp.width, this.plp.height, this.mki, this.lfy, this.shp, "center", true)
            }
            if (this.ixb === true) {
                pze.sog.tll(b, "[ " + this.parent.language.diw + " ]", this.ews, this.vrl.x, this.vrl.y, this.vrl.width, this.vrl.height, this.mki, 2 * this.lfy, this.shp, "center", true)
            }
            b.restore()
        }
    };
    this.jbj = function (c, m) {
        var l = this.context2D,
            o = [],
            d = this.lfy,
            k = this.dmz,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.pvx * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.shp + " " + d + "px " + this.mki;
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
                    if (u >= c.width - 2 * this.vod) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.pdf)) {
            w = (c.height - j - this.pdf) / b;
            d = Math.round(d * w) - 1;
            l.font = this.shp + " " + d + "px " + this.mki;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.shp + " " + d + "px " + this.mki;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.pdf));
            c.height = j + b + this.pdf;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            pze.sog.ssm(l, c.x, c.y, c.width, c.height, this.rhy, 0.7)
        }
        if (this.fmr != null) {
            l.font = this.shp + " " + this.pvx + "px " + this.mki;
            l.fillStyle = this.dfp;
            l.textBaseline = "bottom";
            l.fillText(this.fmr, c.x + c.width / 2, c.y + this.pvx + this.pdf)
        }
        l.font = this.shp + " " + d + "px " + this.mki;
        l.fillStyle = this.ews;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.vod), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.swb = function (c, d) {
        var b = this.context2D;
        b.save();
        if (d && d === true) {
            pze.sog.ssm(b, c.x, c.y, c.width, c.height, this.rhy, 0.7)
        }
        if (this.ixb === true) {
            pze.sog.tll(b, this.trr, this.ews, c.x, c.y, c.width, c.height, this.mki, this.lfy, this.shp, "center", true)
        }
        b.restore()
    };
    this.start = function () {
        this.djv = true;
        this.rqa = new Date().getTime();
        this.jrg = new rcu(this.lug.x, this.lug.y, this.lug.width, this.lug.height);
        this.ofp = 0;
        this.uin()
    };
    this.stop = function () {
        this.djv = false;
        this.jrg = null;
        clearTimeout(this.jmg)
    };
    this.uin = function () {
        var b = 0,
            c = new Date().getTime();
        if (a.ofp < 6) {
            a.jrg.x -= a.tcd;
            a.jrg.width += 2 * a.tcd
        } else {
            if (a.ofp < 12) {
                a.jrg.y -= a.csp;
                a.jrg.height += a.otl
            } else {
                a.stop();
                if (typeof a.wdc === "function") {
                    a.wdc()
                }
            }
        }
        a.wac();
        a.ofp++;
        if (a.ofp <= 12) {
            b = (a.ofp * a.vut - (c - a.rqa));
            a.jmg = setTimeout(a.uin, b)
        }
    };
    this.qvo = function () {
        this.tau = true;
        this.rqa = new Date().getTime();
        this.ofp = 0;
        this.vut = 89;
        this.vis()
    };
    this.tsd = function () {
        this.tau = false;
        clearTimeout(this.jmg)
    };
    this.vis = function () {
        var d = 0,
            e = new Date().getTime(),
            b = a.soy,
            c = a.parent.cpo.ewl("splashanim");
        if (a.tau === true) {
            a.ofp++;
            b.save();
            b.clearRect(0, 0, c.width, c.height);
            b.translate(c.width / 2, c.height / 2);
            b.rotate(Math.PI / 6 * (a.ofp % 12));
            b.translate(-c.width / 2, -c.height / 2);
            b.drawImage(c, 0, 0);
            b.restore();
            a.wac();
            d = (a.ofp * a.vut - (e - a.rqa));
            a.jmg = setTimeout(a.vis, d)
        }
    };
    this.bjx = function () {
        return (this.djv || this.tau)
    };
    this.ujx = function (c, b) {
        this.trr = c;
        this.dyv = b;
        this.djv = true;
        this.ixb = true;
        this.jmg = setInterval(this.neu, 800);
        this.wac()
    };
    this.neu = function () {
        a.ixb = !a.ixb;
        a.wac()
    };
    this.wdc = null
}
cui.prototype = new qdi;

function vmt() {
    var a = this;
    this.org = null;
    this.ert = null;
    this.rfn = null;
    this.pih = null;
    this.kqc = null;
    this.xdr = false;
    this.jmg = -1;
    this.hre = function () {
        this.org = document.getElementById("notificationDiv");
        this.ert = document.getElementById("notificationTitle");
        this.rfn = document.getElementById("notificationText");
        this.pih = document.getElementById("notificationIcon");
        this.kqc = document.getElementById("notificationCounter");
        if (this.org) {
            this.org.onclick = pze.bvr.vua;
            this.org.ontouchend = pze.bvr.vua
        }
    };
    this.ybb = function (b) {};
    this.ipo = function (b) {
        try {
            if (this.org) {
                this.buk(this.org, b.mvx);
                if (this.xdr) {
                    if (pze.bvr.kip === pze.tgq.rwn) {
                        this.org.className = "slideRight"
                    } else {
                        this.org.className = "slideLeft"
                    }
                }
            }
            if (this.ert) {
                this.ert.style.fontSize = b.znj + "px";
                this.ert.style.left = b.hhq.x + "px";
                this.ert.style.top = b.hhq.y + "px";
                this.ert.style.width = b.hhq.width + "px"
            }
            if (this.rfn) {
                this.rfn.style.fontSize = b.doh + "px";
                this.rfn.style.left = b.tyg.x + "px";
                this.rfn.style.top = b.tyg.y + "px";
                this.rfn.style.width = b.tyg.width + "px"
            }
            if (this.pih) {
                this.buk(this.pih, b.qlp)
            }
            if (this.kqc) {
                this.kqc.style.fontSize = b.xvk + "px";
                this.buk(this.kqc, b.aol)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.buk = function (c, b) {
        if (c) {
            c.style.left = b.x + "px";
            c.style.top = b.y + "px";
            c.style.width = b.width + "px";
            c.style.height = b.height + "px"
        }
    };
    this.kfu = function (d, c, b) {
        if (d && this.ert) {
            this.ert.innerHTML = d
        }
        if (c && this.rfn) {
            this.rfn.innerHTML = c.replace(/[\r]?\n/g, "")
        }
        if (b && this.kqc) {
            this.kqc.innerHTML = b
        }
        if (this.org) {
            if (this.jmg >= 0) {
                clearTimeout(this.jmg);
                this.jmg = -1;
                this.org.className = null
            }
            this.xdr = true;
            pze.bvr.byr();
            if (pze.bvr.kip === pze.tgq.rwn) {
                this.org.className = "slideInRightAnim"
            } else {
                this.org.className = "slideInLeftAnim"
            }
        }
    };
    this.snh = function () {
        if (a.org && a.xdr) {
            if (pze.bvr.kip === pze.tgq.rwn) {
                a.org.className = "slideOutRightAnim"
            } else {
                a.org.className = "slideOutLeftAnim"
            }
            a.jmg = setTimeout(a.imi, 800)
        }
    };
    this.jff = function () {
        if (this.xdr) {
            return true
        }
        return false
    };
    this.imi = function () {
        a.xdr = false;
        a.jmg = -1;
        pze.bvr.byr()
    }
}

function raq() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.zik = null;
    this.org = null;
    this.ert = null;
    this.rfn = null;
    this.zop = null;
    this.tww = [];
    this.aad = 0;
    this.bpc = [];
    this.hph = [];
    this.jkw = 0;
    this.fec = false;
    this.xdr = false;
    this.hre = function () {
        this.zik = document.getElementById("messageOverlay");
        this.org = document.getElementById("messagePanel");
        this.ert = document.getElementById("messageTitle");
        this.rfn = document.getElementById("messageText");
        this.zop = document.getElementById("btne");
        if (this.zop) {
            this.zop.innerHTML = "\u00D7";
            this.zop.onclick = this.snh;
            this.zop.ontouchend = this.snh
        }
        for (var f = 0; f < 4; f++) {
            this.tww[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.ybb = function (f) {
        try {
            this.bpc = f.rib
        } catch (g) {
            console.error(g)
        }
    };
    this.ipo = function (j) {
        try {
            if (this.org) {
                pze.sog.buk(this.org, j.mvx)
            }
            if (this.ert) {
                this.ert.style.fontSize = j.znj + "px";
                pze.sog.buk(this.ert, j.hhq)
            }
            if (this.rfn) {
                this.rfn.style.fontSize = j.doh + "px";
                pze.sog.buk(this.rfn, j.wmf)
            }
            if (this.zop) {
                pze.sog.buk(this.zop, j.dub)
            }
            for (var g = 0, f = this.tww.length; g < f; g++) {
                this.tww[g].style.fontSize = j.gvo.fontSize + "px";
                this.tww[g].style.top = j.nud.y + "px";
                this.tww[g].style.height = j.nud.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.kfu = function (j) {
        this.hph.length = 0;
        this.jkw = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.hph[g] = j[g]
        }
        this.iui(this.hph[this.jkw])
    };
    this.snh = function () {
        if (b.org) {
            b.xdr = false;
            b.org.style.display = "none";
            b.zik.style.display = "none";
            pze.bvr.byr();
            pze.bvr.jum = false
        }
    };
    this.iui = function (l) {
        var n = this.hph.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.bsc === pze.vcr.ief || l.bsc === pze.vcr.kpr) {
            this.aad = d;
            this.fec = (l.DisplayType == pze.hwp.xpa.hsh) ? true : false
        } else {
            if (l.bsc === pze.vcr.sms || l.bsc === pze.vcr.jap || l.bsc === pze.vcr.qow || l.bsc === pze.vcr.roulette.zrs || l.bsc === pze.vcr.roulette.gzx) {
                this.aad = a;
                this.fec = false
            } else {
                if (l.bsc === pze.vcr.tpa || l.bsc === pze.vcr.ego) {
                    this.aad = c;
                    this.fec = false
                } else {
                    if (l.bsc === pze.vcr.zci || l.bsc === pze.vcr.yey || l.bsc === pze.vcr.cpf) {
                        this.aad = e;
                        this.fec = false
                    }
                }
            }
        }
        if (l.Title && this.ert) {
            this.ert.style.color = this.bpc[this.aad];
            this.ert.innerHTML = l.Title
        }
        if (l.Text && this.rfn) {
            this.rfn.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.tww[0].innerHTML = "\u2039";
            this.tww[0].onclick = this.jih;
            this.tww[0].ontouchend = this.jih;
            this.tww[0].style.display = "inline-block";
            this.tww[this.tww.length - 1].innerHTML = "\u203A";
            this.tww[this.tww.length - 1].onclick = this.reg;
            this.tww[this.tww.length - 1].ontouchend = this.reg;
            this.tww[this.tww.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.tww.length - 1 : this.tww.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.tww[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.tww[g].innerHTML = pze.bvr.language.coi
                    } else {
                        if (j == "continue") {
                            this.tww[g].innerHTML = pze.bvr.language.diw.replace(/ /g, "")
                        } else {
                            this.tww[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.tww[g].onclick = pze.bvr.qgg;
                    this.tww[g].ontouchend = pze.bvr.qgg
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.bsc === pze.vcr.ief) {
                            this.tww[g].onclick = this.fdx.bind(this, l.Buttons[k].Link);
                            this.tww[g].ontouchend = this.fdx.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.bsc === pze.vcr.kpr || l.bsc === pze.vcr.zci || l.bsc === pze.vcr.yey) {
                                this.tww[g].onclick = this.jfh;
                                this.tww[g].ontouchend = this.jfh
                            } else {
                                if (l.bsc === pze.vcr.tpa || l.bsc === pze.vcr.ego || l.bsc === pze.vcr.cpf) {
                                    this.tww[g].onclick = this.oqp;
                                    this.tww[g].ontouchend = this.oqp
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.tww[g].onclick = pze.bvr.wnt;
                            this.tww[g].ontouchend = pze.bvr.wnt
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === pze.hwp.tup.zgw) {
                                    this.tww[g].onclick = this.ilo.bind(this, l.Buttons[k].Link);
                                    this.tww[g].ontouchend = this.ilo.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === pze.hwp.tup.ejx) {
                                        this.tww[g].onclick = this.fdx.bind(this, l.Buttons[k].Link);
                                        this.tww[g].ontouchend = this.fdx.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === pze.hwp.tup.yfa) {
                                            this.tww[g].onclick = this.cpn.bind(this, l.Buttons[k].Link);
                                            this.tww[g].ontouchend = this.cpn.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.tww[g].style.display = "inline-block"
            } else {
                this.tww[g].style.display = "none"
            }
        }
        this.zop.style.display = (this.fec) ? "inline-block" : "none";
        if (this.org) {
            this.xdr = true;
            this.org.style.display = "block";
            this.zik.style.display = "block";
            pze.bvr.byr();
            pze.bvr.jum = true
        }
    };
    this.jff = function () {
        if (this.xdr) {
            return true
        }
        return false
    };
    this.jfh = function () {
        b.snh();
        pze.bvr.qae(pze.bvr.state)
    };
    this.fdx = function (f) {
        var g = null;
        if (f) {
            g = pze.sog.roj("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function () {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        pze.bvr.ahs({
            type: "link",
            sender: pze.bvr.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        b.snh();
        pze.bvr.vtk()
    };
    this.cpn = function (j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = pze.sog.roj("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.tww.length; g < f; g++) {
                b.tww[g].disabled = true
            }
            k.onload = function () {
                b.snh();
                for (var m = 0, l = b.tww.length; m < l; m++) {
                    b.tww[m].disabled = false
                }
                pze.bvr.vtk()
            };
            k.onerror = function () {
                console.error("Error on request!");
                for (var m = 0, l = b.tww.length; m < l; m++) {
                    b.tww[m].disabled = false
                }
            }
        }
        pze.bvr.ahs({
            type: "link",
            sender: pze.bvr.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        k.send()
    };
    this.oqp = function () {
        window.location.reload()
    };
    this.ilo = function (f) {
        pze.bvr.ahs({
            type: "link",
            sender: pze.bvr.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase()
        });
        window.location.href = f
    };
    this.jih = function () {
        b.jkw = (b.jkw > 0) ? b.jkw - 1 : b.hph.length - 1;
        b.iui(b.hph[b.jkw])
    };
    this.reg = function () {
        b.jkw = (b.jkw < b.hph.length - 1) ? b.jkw + 1 : 0;
        b.iui(b.hph[b.jkw])
    }
}
pze.spi = new Settings();
pze.sog = new tyy();

function nfy() {
    this.tmk = "";
    this.ovy = "";
    this.xxc = null;
    this.canvas = null;
    this.context2D = null;
    this.cht = null;
    this.mze = null;
    this.dmc = null;
    this.fem = null;
    this.whn = null;
    this.hgj = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.byf = 0;
    this.ygq = 0;
    this.jnu = false;
    this.width = 0;
    this.height = 0;
    this.ytp = 0;
    this.pcc = 0;
    this.neh = 1;
    this.bim = 1;
    this.otu = false;
    this.lkz = false;
    this.style = null;
    this.tgq = null;
    this.kip = -1;
    this.xxv = false;
    this.kcp = false;
    this.uct = false;
    this.mla = false;
    this.jum = false;
    this.beq = false;
    this.fuw = false;
    this.gxk = "";
    this.nzr = "";
    this.vdf = "";
    this.nta = "";
    this.rwh = "";
    this.nuy = "";
    this.irz = "1_1_60";
    try {
        if (pze.spi.value19) {
            this.gxk = sessionStorage.sessionValue2;
            this.nzr = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.vdf = sessionStorage.sessionValue2
            } else {
                this.gxk = sessionStorage.sessionValue2;
                this.nzr = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.vdf = sessionStorage.sessionValue2
                } else {
                    this.vdf = ""
                }
            }
        }
    } catch (b) {}
    this.cgd = null;
    this.qjb = null;
    this.xmd = false;
    this.doy = null;
    this.cpo = null;
    this.vvh = null;
    this.fbu = true;
    this.vok = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.awc = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.awc = this.vok.length - 1
                } else {
                    this.awc = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.awc = this.vok.length - 1
        }
    } catch (b) {
        this.awc = 0
    }
    this.tlj = 0;
    this.language = new ast();
    this.gto = 0;
    this.rxy = 1;
    this.xbv = this.rxy;
    this.ply = [pze.xwd.gwo, pze.xwd.sgx, pze.xwd.jnt];
    this.ivt = (pze.sog.mkk()) ? 0 : this.ply.length - 1;
    try {
        if (localStorage.localValue1) {
            this.ivt = Number(localStorage.localValue1);
            if (!pze.sog.mkk() && this.ply[this.ivt] === pze.xwd.gwo) {
                this.ivt = this.ply.length - 1
            }
        }
    } catch (b) {}
    this.hkk = false;
    this.nqk = "";
    this.nwl = "";
    this.ccc = 0;
    this.state = 0;
    this.kop = false;
    this.upr = 5000;
    this.nxh = 0;
    this.nmu = 0;
    this.xtr = 0;
    this.qtc = 0;
    this.zkd = false;
    this.vqh = false;
    this.zpq = false;
    this.zew = null;
    this.ovc = 0;
    this.gzn = 0;
    this.wqb = 0;
    this.vse = -1;
    this.xsf = -1;
    this.mif = 0;
    this.wlc = null;
    this.rmk = [];
    this.vwo = [];
    this.cxu = false;
    this.bvh = 0;
    this.ixo = 0;
    this.cjp = false;

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
    this.hre = function (d) {
        this.ahs({
            type: "onAppFrameReady",
            sender: this.nqk
        });
        pze.sog.qdr();
        pze.sog.xun();
        this.ydt();
        if (!this.zkd) {
            this.doe()
        }
        this.fpd(this.iln(d.tgq));
        this.svt();
        this.xkr();
        this.zwr();
        this.hvz();
        this.bbs();
        this.rmt();
        this.nvr();
        this.ozt();
        this.lvs();
        this.wly();
        return this
    };
    this.zwr = function () {};
    this.ozt = function () {
        try {
            if (pze.spi.value64 && !this.zpq) {
                this.doy = new pbu();
                this.doy.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.ydt = function () {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && pze.spi.value8) {
                sessionStorage.sessionValue5 = pze.spi.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.nuy = sessionStorage.sessionValue8;
                if (pze.spi.value72) {
                    var n = pze.spi.value72[this.nuy];
                    if (pze.spi.value21.e === true && n) {
                        pze.spi.value21.s = n.s;
                        pze.spi.value21.m = n.m;
                        pze.spi.value21.ts = n.ts;
                        pze.spi.value21.cs = n.cs
                    }
                    if (pze.spi.value76 && pze.spi.value76.f === true && n) {
                        pze.spi.value76.s = n.s;
                        pze.spi.value76.m = n.m;
                        pze.spi.value76.ts = n.ts;
                        pze.spi.value76.cs = n.cs
                    }
                }
            }
            if (this.dez()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.rwh = sessionStorage.sessionValue7
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (pze.sog.pzg) ? pze.spi.value51.m : pze.spi.value51.d
            }
            var g = a("sessionTime");
            if (g != "") {
                sessionStorage.sessionValue15 = g
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = pze.spi.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var o = a("realityCheckTime");
            if (o != "") {
                sessionStorage.sessionValue17 = o
            }
            if (pze.spi.value39 > 0) {
                sessionStorage.sessionValue17 = pze.spi.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var f = sessionStorage.sessionValue18.split(";");
                if (f.length == 2) {
                    this.bvh = Number(f[0]);
                    this.ixo = Number(f[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.ixo) {
                    this.ixo = Number(s);
                    this.bvh = new Date().getTime() - (this.ixo * 1000);
                    sessionStorage.sessionValue18 = this.bvh + ";" + this.ixo
                }
            }
            if (pze.spi.value86 === true) {
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
            console.error(k.vcr)
        }
    };
    this.nvr = function () {
        if (!(pze.sog.bnm == pze.os.tdn && pze.sog.gez == pze.zif.viq)) {
            document.ontouchstart = pze.bvr.nxf
        }
        if (pze.sog.gez != pze.zif.vca && pze.sog.gez != pze.zif.viq) {
            document.ontouchmove = pze.bvr.vfv;
            document.ontouchend = pze.bvr.zzh
        }
        if (!pze.sog.bhp) {
            document.onmousedown = pze.bvr.wbx;
            document.onmouseup = pze.bvr.nyv;
            document.onmousemove = pze.bvr.xzd
        }
        document.onkeydown = pze.bvr.cta;
        document.onkeyup = pze.bvr.fsd;
        document.oncontextmenu = pze.bvr.vka;
        this.beq = this.kuk();
        if (pze.sog.vrh() === false && pze.sog.bnm === pze.os.cqb && pze.sog.fqz() === true && screen.width <= 414 && this.ylu()) {
            this.mif = setInterval(this.noz, 1000)
        }
    };
    this.nxf = function (d) {
        pze.bvr.drj();
        pze.bvr.blh();
        pze.bvr.tzk(d)
    };
    this.zzh = function (d) {
        if (pze.bvr.xxv === true) {
            if (pze.bvr.beq) {
                pze.bvr.kvv()
            } else {
                pze.bvr.yew(d)
            }
        } else {
            if (pze.bvr.kuk()) {
                pze.bvr.pwn()
            }
        }
    };
    this.vfv = function (d) {
        pze.bvr.fek(d)
    };
    this.wbx = function (d) {
        window.focus();
        if (pze.bvr.xxv === true) {
            pze.bvr.drj();
            pze.bvr.blh();
            pze.bvr.tzk(d)
        } else {
            if (pze.bvr.kuk()) {
                pze.bvr.pwn()
            }
        }
    };
    this.nyv = function (d) {
        pze.bvr.yew(d)
    };
    this.xzd = function (d) {};
    this.cta = function (d) {
        if ((d.keyCode == 122 && (pze.sog.bnm == pze.os.wid || pze.sog.bnm == pze.os.yzr)) || (d.keyCode == 70 && d.ctrlKey && pze.sog.bnm == pze.os.fjl)) {
            return
        }
        pze.bvr.drj();
        pze.bvr.blh();
        pze.bvr.oaf(d)
    };
    this.fsd = function (d) {
        pze.bvr.mgf(d)
    };
    this.vka = function () {
        return false
    };
    this.tzk = function (d) {};
    this.yew = function (d) {};
    this.oaf = function (d) {};
    this.mgf = function (d) {};
    this.fek = function (d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.ahs = function (d) {};
    this.cuk = function () {
        var f = pze.bvr.vvh.sqv("topb"),
            e = pze.bvr.vvh.sqv("settings"),
            d = pze.bvr.vvh.sqv("topi"),
            g = pze.bvr.vvh.sqv("gameb");
        if (pze.sog.gez == pze.zif.vca || pze.sog.gez == pze.zif.naz) {
            pze.bvr.lkz = (window.innerWidth == window.outerWidth)
        } else {
            if (pze.sog.gez == pze.zif.shq || pze.sog.gez == pze.zif.brb) {
                pze.bvr.lkz = (window.innerHeight >= window.outerHeight)
            } else {
                if (pze.sog.gez == pze.zif.epo) {
                    pze.bvr.lkz = (document.fullscreenElement) ? true : false
                } else {
                    if (pze.sog.pzg) {
                        if (pze.sog.gez == pze.zif.cqf || pze.sog.gez == pze.zif.zmy || pze.sog.gez == pze.zif.ilf) {
                            pze.bvr.lkz = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (pze.sog.gez == pze.zif.viq) {
                                pze.bvr.lkz = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.lne("fullscreen", pze.bvr.lkz)
        }
        if (f) {
            f.rnb.nly("fullscreen", "#lne", [(pze.bvr.lkz) ? 1 : 0])
        }
        if (e) {
            e.rnb.nly("fullscreen", "#lne", [(pze.bvr.lkz) ? 1 : 0])
        }
        if (g) {
            g.rnb.nly("fullscreen", "#lne", [(pze.bvr.lkz) ? 1 : 0])
        }
        pze.bvr.znw();
        pze.bvr.eca();
        pze.bvr.umd();
        if (pze.sog.fqz() === true && pze.sog.vrh() === false) {
            document.body.style.height = "5000px"
        }
        if (!pze.sog.vrh() && pze.sog.gez === pze.zif.ilf && pze.bvr.ygq < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.cmo = function () {
        pze.bvr.cuk();
        pze.bvr.noz()
    };
    this.noz = function () {
        if (pze.sog.fqz() === true && pze.sog.vrh() === false) {
            if (pze.bvr.ylu() === true && pze.bvr.mla === true) {
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
                            pze.bvr.cuk();
                            window.ontouchmove = pze.bvr.cmo
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = pze.bvr.nxf;
                        document.ontouchmove = pze.bvr.vfv;
                        document.ontouchend = pze.bvr.zzh;
                        if (window.ontouchmove != null) {
                            pze.bvr.cuk();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.ozp = function (g) {
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
                    pze.sog.sjt(e, j, j)
                }
                f.innerHTML = pze.bvr.language.vgt;
                l.className = "rotateAnim";
                k.style.display = "block";
                pze.bvr.jum = true
            } else {
                k.style.display = "none";
                l.className = null;
                pze.bvr.jum = false
            }
        }
    };
    this.zsx = function () {
        var d = pze.bvr.vvh.sqv("settings");
        pze.bvr.cuk();
        if (d) {
            d.rnb.nly("adjustment", "#lne", [(pze.bvr.kip === pze.tgq.oyu) ? 0 : 1]);
            d.wac()
        }
        if (pze.bvr.hkk === true) {
            pze.bvr.jum = true;
            pze.bvr.ynt(true);
            pze.bvr.ozp(true)
        } else {
            pze.bvr.jum = false;
            pze.bvr.ynt((pze.bvr.vok[pze.bvr.awc] === 0));
            pze.bvr.ozp(false)
        }
    };
    this.znw = function () {
        this.byf = window.innerWidth, this.ygq = window.innerHeight;
        this.jnu = false;
        if (pze.sog.vrh() == true && pze.spi.value69 === true) {
            if (pze.sog.mcj() === true) {
                this.jnu = true;
                this.byf = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.ygq = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.byf > this.ygq) {
                    this.ygq *= 0.98
                }
            } else {
                if (pze.sog.fqz() === true) {
                    this.jnu = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.byf = 1024;
                            this.ygq = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.byf = 736;
                                this.ygq = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.byf = 667;
                                    this.ygq = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.byf = 768;
                            this.ygq = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.byf = 414;
                                this.ygq = 628
                            } else {
                                if (screen.height === 667) {
                                    this.byf = 375;
                                    this.ygq = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.umd = function () {
        var g = 0,
            k = 0,
            f = 1,
            e = 1,
            j = this.byf,
            d = this.ygq;
        this.otu = (this.lkz || j < this.width || d < this.height || this.tgq.cjf);
        g = this.tjz(this.otu);
        f = ((j - k) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.otu) {
            if (this.tgq.zoj) {
                if (f > e) {
                    this.neh = e;
                    this.bim = e
                } else {
                    this.neh = f;
                    this.bim = f
                }
            } else {
                this.neh = f;
                this.bim = e
            }
        } else {
            this.neh = 1;
            this.bim = 1
        }
        pze.sog.sjt(this.canvas, this.neh, this.bim);
        if (this.cht != null) {
            pze.sog.sjt(this.cht, this.neh, this.bim, ((this.tgq.cht.mvx.x) - ((this.tgq.cht.mvx.x + this.tgq.cht.wcr) / 2 * (1 - this.neh))), ((this.tgq.cht.mvx.y) - ((this.tgq.cht.mvx.y + this.tgq.cht.lgg) / 2 * (1 - this.bim))))
        }
        if (this.dmc != null) {
            pze.sog.sjt(this.dmc, this.neh, this.bim)
        }
        if (this.otu) {
            this.offsetLeft = Math.floor((j - (this.canvas.width * this.neh))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.bim))) / 2
        } else {
            this.offsetLeft = this.xxc.offsetLeft;
            this.offsetTop = this.xxc.offsetTop
        }
    };
    this.eca = function () {
        if (this.bpn() === true) {
            var e = null;
            if (this.ply[this.ivt] === pze.xwd.gwo) {
                if (window.orientation === -90) {
                    e = pze.tgq.rwn
                } else {
                    e = pze.tgq.oyu
                }
            } else {
                if (this.ply[this.ivt] === pze.xwd.sgx) {
                    e = pze.tgq.rwn
                } else {
                    if (this.ply[this.ivt] === pze.xwd.jnt) {
                        e = pze.tgq.oyu
                    }
                }
            }
            this.hkk = (this.ygq > this.byf);
            this.fpd(e);
            this.sto(false);
            if (this.mla === true) {
                this.wac()
            } else {
                this.vvh.nly("loading", "#wac")
            }
        } else {
            if (pze.sog.pzg) {
                var f = (this.byf > this.ygq) ? this.rxy : this.gto,
                    d = this.tgq.okx,
                    e = null;
                if (f != this.xbv) {
                    this.xbv = f;
                    if (this.zkd) {
                        e = (this.xbv == this.rxy) ? pze.tgq.cuf : pze.tgq.tjd
                    } else {
                        e = (this.xbv == this.rxy) ? pze.spi.value33 : pze.spi.value32
                    }
                    this.fpd(e);
                    this.sto((d != this.tgq.okx) || this.zkd);
                    if (this.mla === true) {
                        if (this.zkd && this.vqh) {
                            this.ejy(this.cgv(this.language.zlo))
                        } else {
                            this.wac()
                        }
                    } else {
                        this.vvh.nly("loading", "#wac")
                    }
                }
            } else {
                if (!this.zkd) {
                    e = (this.lkz) ? pze.spi.value15 : pze.spi.value14;
                    this.fpd(e);
                    this.sto(false);
                    if (this.mla === true) {
                        this.wac()
                    } else {
                        this.vvh.nly("loading", "#wac")
                    }
                }
            }
        }
    };
    this.bpn = function () {
        return false
    };
    this.ylu = function () {
        return false
    };
    this.fpd = function (d) {};
    this.svt = function () {
        this.style = new ntu()
    };
    this.tjz = function (d) {
        var e = 0;
        if (pze.sog.mcj() && window.innerWidth > window.innerHeight && d) {
            if (this.xxv === true && document.body.style.backgroundColor !== this.style.eez.backgroundColor) {
                document.body.style.backgroundColor = this.style.eez.backgroundColor
            }
        }
        return e
    };
    this.aln = function () {
        if (pze.sog.mcj() && !pze.sog.vrh() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.mpb = function () {
        return false
    };
    this.hvz = function () {
        if (pze.sog.bhp) {
            this.cpo = new was()
        } else {
            this.cpo = new qob()
        }
        this.cpo.hre();
        this.cpo.dbi(this.wam())
    };
    this.bbs = function () {
        this.vvh = new xes();
        this.vvh.hre();
        this.vvh.nip("jackpots")
    };
    this.wam = function () {
        var d = new wos();
        d.hre();
        return d
    };
    this.doe = function () {
        this.zew = new qbu()
    };
    this.xkr = function () {
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
                    for (var k = 0, g = pze.spi.value5.length; k < g; k++) {
                        if (o[l] === pze.spi.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(pze.spi.value5[0])
                }
                pze.spi.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    pze.spi.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = pze.sog.abo();
                if (this.zae(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === pze.language.EN && this.zae(pze.language.US)) {
                        sessionStorage.sessionValue1 = pze.language.US
                    } else {
                        if (q === pze.language.DE && this.zae(pze.language.AT)) {
                            sessionStorage.sessionValue1 = pze.language.AT
                        } else {
                            if (q === pze.language.ES && this.zae(pze.language.MX)) {
                                sessionStorage.sessionValue1 = pze.language.MX
                            } else {
                                if (q === pze.language.ES && this.zae(pze.language.CO)) {
                                    sessionStorage.sessionValue1 = pze.language.CO
                                } else {
                                    if (q === pze.language.ES && this.zae(pze.language.CL)) {
                                        sessionStorage.sessionValue1 = pze.language.CL
                                    } else {
                                        if (q === pze.language.ES && this.zae(pze.language.VE)) {
                                            sessionStorage.sessionValue1 = pze.language.VE
                                        } else {
                                            if (q === pze.language.EN && this.zae(pze.language.BR)) {
                                                sessionStorage.sessionValue1 = pze.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = pze.spi.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.zae(sessionStorage.sessionValue1)) {
                for (var l = 0, m = pze.spi.value5.length; l < m; l++) {
                    if (pze.spi.value5[l] == sessionStorage.sessionValue1) {
                        this.tlj = l;
                        break
                    }
                }
                this.language = this.lec(sessionStorage.sessionValue1)
            } else {
                this.tlj = 0;
                this.language = this.lec(pze.spi.value5[this.tlj]);
                sessionStorage.sessionValue1 = pze.spi.value5[this.tlj]
            }
        } catch (n) {
            this.tlj = 0;
            this.language = this.lec(pze.spi.value5[this.tlj]);
            console.error(n.vcr)
        }
    };
    this.lvs = function () {
        var d = (pze.spi.value45 == pze.trt.sth) ? this.tgq.trt.bvr : (pze.spi.value45 == pze.trt.ksa) ? this.tgq.trt.xmh : this.tgq.trt.btb;
        this.xxc = document.getElementById("gameArea");
        if (this.jnu === false) {
            this.xxc.style.marginTop = (-d.mvx.height / 2) + "px";
            this.xxc.style.marginLeft = (-d.mvx.width / 2) + "px"
        } else {
            this.xxc.style.left = "0px";
            this.xxc.style.top = "0px";
            this.xxc.style.marginTop = ((window.innerHeight - d.mvx.height) / 2) + "px";
            this.xxc.style.marginLeft = ((window.innerWidth - d.mvx.width) / 2) + "px"
        }
        this.xxc.style.width = (d.mvx.width > window.innerWidth) ? window.innerWidth + "px" : d.mvx.width + "px";
        this.xxc.style.height = (d.mvx.height > window.innerHeight) ? window.innerHeight + "px" : d.mvx.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.mvx.width);
        this.canvas.height = Math.round(d.mvx.height);
        this.context2D = this.canvas.getContext("2d");
        this.dmc = document.getElementById("gameOverlay");
        if (this.dmc) {
            this.dmc.style.width = d.mvx.width + "px";
            this.dmc.style.height = d.mvx.height + "px"
        }
        this.wct(d)
    };
    this.wct = function (d) {
        var e = new cui();
        e.hre(d.mvx, this.context2D);
        e.parent = this;
        e.pbo = (this.zkd) ? this.language.slu : this.language.bok;
        e.fmr = this.language.error;
        e.ipo(d);
        e.ybb(this.style.trt);
        this.vvh.vnv("loading", e)
    };
    this.gyx = function () {
        var d = new vuq();
        d.hre(this.tgq.hxc.mvx, null, this.context2D);
        d.parent = this;
        d.ipo(this.tgq.hxc);
        d.ybb(this.style.hxc);
        if (sessionStorage.sessionValue15 == "true" && pze.spi.value49) {
            d.ebm("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || pze.spi.value49) {
                d.ebm("time", "", "--:--")
            }
        }
        if (this.dez()) {
            d.ebm("freeplay", "", this.language.tfz)
        } else {
            d.ebm("id", " ", "")
        }
        this.vvh.vnv("topi", d)
    };
    this.twv = function () {
        var d = new hgo();
        d.hre(this.tgq.uug.mvx, null, this.context2D);
        d.parent = this;
        d.ipo(this.tgq.uug);
        d.ybb(this.style.uug, false);
        d.cug(false);
        this.vvh.vnv("topb", d)
    };
    this.amj = function () {};
    this.ent = function () {
        var d = new saq();
        d.hre(this.tgq.qdn.mvx, null, this.context2D);
        d.parent = this;
        d.dlu(this.tgq.qdn);
        d.ybb(this.style.qdn);
        d.cug(false);
        this.vvh.vnv("stats", d)
    };
    this.mrz = function () {
        this.fem = new raq();
        this.fem.hre();
        this.fem.ybb(this.style.fem);
        this.fem.ipo(this.tgq.fem)
    };
    this.bww = function () {
        this.whn = new vmt();
        this.whn.hre();
        this.whn.ybb(this.style.whn);
        this.whn.ipo(this.tgq.whn)
    };
    this.hzz = function () {
        if (this.jfm()) {
            this.hgj.gqh = document.getElementById("jurisdictionDiv");
            this.hgj.koo = document.getElementById("btnsp");
            this.hgj.nhb = document.getElementById("btnsl");
            this.hgj.okb = document.getElementById("btnst");
            if (this.hgj.koo) {
                this.hgj.koo.innerHTML = this.language.gzy;
                this.hgj.koo.onclick = this.vtp;
                this.hgj.koo.ontouchend = this.vtp
            }
            if (this.hgj.nhb) {
                this.hgj.nhb.innerHTML = this.language.ejv;
                this.hgj.nhb.onclick = this.ekk;
                this.hgj.nhb.ontouchend = this.ekk
            }
            if (this.hgj.okb) {
                this.hgj.okb.innerHTML = this.language.mbh;
                this.hgj.okb.onclick = this.faa;
                this.hgj.okb.ontouchend = this.faa
            }
            this.rhp();
            this.byr()
        }
    };
    this.hwu = function (e) {
        var d = new ijh();
        d.hre(this.tgq.kev.mvx, null, this.context2D);
        d.parent = this;
        d.uin = true;
        if (e) {
            d.ndb(e)
        }
        d.dlu(this.tgq.kev);
        d.wkl(this.language);
        d.ybb(this.style.kev);
        d.ipo(this.tgq.kev);
        d.cug(false);
        this.vvh.vnv("autop", d)
    };
    this.vtr = function (d) {
        var e = new mag();
        e.hre(this.tgq.aes.mvx, null, this.context2D);
        e.parent = this;
        if (d) {
            e.lyh(d)
        }
        e.cug(false);
        this.vvh.vnv("settings", e)
    };
    this.sto = function (d) {};
    this.jcc = function () {
        var d = this.vvh.sqv("stats");
        if (d) {
            d.sod(this.tgq.qdn.mvx);
            d.ipo(this.tgq.qdn)
        }
    };
    this.vey = function () {
        if (this.fem) {
            this.fem.ipo(this.tgq.fem)
        }
    };
    this.tfv = function () {
        if (this.whn) {
            this.whn.ipo(this.tgq.whn)
        }
    };
    this.rhp = function () {
        var d = null,
            e = 0;
        if (this.hgj) {
            d = this.tgq.pfs;
            if (this.hgj.gqh) {
                pze.sog.buk(this.hgj.gqh, d.rlo)
            }
            if (this.hgj.koo) {
                this.hgj.koo.style.fontSize = d.gvo.fontSize + "px";
                this.hgj.koo.style.textIndent = d.gvo.textIndent + "px";
                pze.sog.buk(this.hgj.koo, d.eej)
            }
            if (this.hgj.nhb) {
                this.hgj.nhb.style.fontSize = d.gvo.fontSize + "px";
                this.hgj.nhb.style.textIndent = d.gvo.textIndent + "px";
                pze.sog.buk(this.hgj.nhb, d.vwg)
            }
            if (this.hgj.okb) {
                this.hgj.okb.style.fontSize = d.gvo.fontSize + "px";
                this.hgj.okb.style.textIndent = d.gvo.textIndent + "px";
                pze.sog.buk(this.hgj.okb, d.xui)
            }
            if (this.hgj.gqh) {
                e = (d.rlo.width - d.rlo.height) / 2;
                if (this.kip == pze.tgq.rwn) {
                    this.hgj.gqh.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.hgj.gqh.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.fpf = function () {
        var d = this.vvh.sqv("autop");
        if (d) {
            d.sod(this.tgq.kev.mvx);
            d.ipo(this.tgq.kev)
        }
    };
    this.abv = function () {
        var d = this.vvh.sqv("settings");
        if (d) {
            d.sod(this.tgq.aes.mvx);
            d.ipo(this.tgq.aes)
        }
    };
    this.frw = function () {
        var d = this.vvh.sqv("topi");
        if (d) {
            d.sod(this.tgq.hxc.mvx);
            d.ipo(this.tgq.hxc)
        }
    };
    this.jvw = function () {
        var d = this.vvh.sqv("topb");
        if (d) {
            d.sod(this.tgq.uug.mvx);
            d.ipo(this.tgq.uug)
        }
    };
    this.hdl = function () {
        var e = this.vvh.sqv("loading"),
            d = (pze.spi.value45 == pze.trt.sth) ? this.tgq.trt.bvr : (pze.spi.value45 == pze.trt.ksa) ? this.tgq.trt.xmh : this.tgq.trt.btb;
        if (e) {
            this.canvas.width = 0;
            if (this.jnu === false) {
                this.xxc.style.marginTop = (-d.mvx.height / 2) + "px";
                this.xxc.style.marginLeft = (-d.mvx.width / 2) + "px"
            } else {
                this.xxc.style.left = "0px";
                this.xxc.style.top = "0px";
                this.xxc.style.marginTop = ((this.ygq - d.mvx.height) / 2) + "px";
                this.xxc.style.marginLeft = ((this.byf - d.mvx.width) / 2) + "px"
            }
            this.xxc.style.width = (d.mvx.width > this.byf) ? this.byf + "px" : d.mvx.width + "px";
            this.xxc.style.height = (d.mvx.height > this.ygq) ? this.ygq + "px" : d.mvx.height + "px";
            this.canvas.width = Math.round(d.mvx.width);
            this.canvas.height = Math.round(d.mvx.height);
            if (this.dmc) {
                this.dmc.style.width = d.mvx.width + "px";
                this.dmc.style.height = d.mvx.height + "px"
            }
            e.sod(d.mvx);
            e.ipo(d)
        }
    };
    this.rmt = function () {
        if (pze.sog.pzg && !pze.sog.bhp) {
            if (!this.cpo.mcw && pze.sog.gez != pze.zif.ofs) {
                this.fbu = false;
                this.awc = 0
            }
        }
    };
    this.iln = function (d) {
        if (pze.sog.pzg) {
            if (!this.zkd) {
                return pze.tgq.wgt
            } else {
                if (!this.zpq) {
                    return pze.tgq.cuf
                }
            }
        }
        return d
    };
    this.uxo = function () {
        var d = this.vvh.sqv("loading");
        this.cuk();
        if (d) {
            d.gom = true
        }
        if ((pze.sog.gez === pze.zif.cqf || pze.sog.gez === pze.zif.brb || pze.sog.gez === pze.zif.tkx) && pze.sog.bnm === pze.os.tdn && pze.sog.dcn === true) {
            if (this.cpo.mcw === false || pze.sog.rnh() === false || pze.sog.hjx() === false) {
                pze.rcc = pze.aab.xdc
            }
        }
        if (pze.rcc == 0) {
            if (this.fbu === true && pze.sog.dcz().length === 0) {
                this.fbu = false
            }
            if (d) {
                if (pze.spi.value45 === pze.trt.ksa) {
                    d.start()
                } else {
                    if (pze.spi.value45 === pze.trt.yyv) {
                        d.qvo()
                    }
                }
                d.wac(0)
            }
            this.gcv();
            if (this.fbu === true) {
                this.sny()
            }
            if (d && d.bjx() && pze.spi.value45 === pze.trt.ksa) {
                d.wdc = pze.bvr.cpo.start
            } else {
                this.cpo.start()
            }
        } else {
            if (d) {
                if (pze.rcc == pze.aab.xpg && pze.sog.gez === pze.zif.ilf) {
                    d.dmz = this.language.lyp;
                    d.wac(0)
                } else {
                    if (pze.rcc == pze.vcr.uqe) {
                        d.dmz = this.language.jfx;
                        d.wac(0)
                    } else {
                        d.dmz = this.language.mur;
                        if (pze.sog.bnm === pze.os.tdn || pze.sog.bnm === pze.os.yzr) {
                            if (pze.rcc != pze.aab.xpg && sessionStorage.sessionValue1 === pze.language.TR) {
                                d.dmz += "|Google Chrome" + this.language.unc
                            } else {
                                if (pze.rcc != pze.aab.xpg && (sessionStorage.sessionValue1 === pze.language.GE || sessionStorage.sessionValue1 === pze.language.HU)) {
                                    d.dmz += "|" + this.language.ajw + " Google Chrome" + this.language.pxg
                                } else {
                                    d.dmz += "|" + this.language.unc + " Google Chrome"
                                }
                            }
                        } else {
                            if (pze.sog.bnm === pze.os.wid || pze.sog.bnm === pze.os.yzr) {
                                if (pze.rcc != pze.aab.xpg && sessionStorage.sessionValue1 === pze.language.TR) {
                                    d.dmz += "|Google Chrome, Mozilla Firefox" + this.language.unc
                                } else {
                                    if (pze.rcc != pze.aab.xpg && (sessionStorage.sessionValue1 === pze.language.GE || sessionStorage.sessionValue1 === pze.language.HU)) {
                                        d.dmz += "|" + this.language.ajw + " Google Chrome, Mozilla Firefox" + this.language.pxg
                                    } else {
                                        d.dmz += "|" + this.language.unc + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + pze.rcc);
                        d.wac(0)
                    }
                }
            }
        }
    };
    this.gcv = function () {};
    this.sny = function () {};
    this.wly = function () {
        var e = this.tmk + this.tgq.type + "/",
            d = this.vvh.sqv("loading");
        if (pze.spi.value45 == pze.trt.sth) {
            e += "load.jpg"
        } else {
            if (pze.spi.value45 == pze.trt.ksa) {
                e += "load_amatic.png"
            } else {
                if (pze.spi.value45 == pze.trt.yyv) {
                    this.cpo.yms("splashanim", pze.spi.value30 + "/basic/images/" + this.tgq.type + "/loadanim.png");
                    e += "load_amanet.png"
                }
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.pqu = true
            }
        }
        this.cpo.yms("splash", e);
        this.cpo.oip()
    };
    this.omy = function () {};
    this.zae = function (e) {
        for (var d = 0; d < pze.spi.value5.length; d++) {
            if (pze.spi.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.sfs = function () {
        pze.bvr.kcp = true;
        if (!pze.bvr.zkd) {
            pze.bvr.vth();
            if (pze.bvr.mob()) {
                pze.bvr.ukp()
            }
        } else {
            pze.bvr.mck()
        }
        pze.bvr.connect()
    };
    this.vth = function () {};
    this.mck = function () {};
    this.connect = function () {
        this.cgd.connect(this.nqk, this.gxk, this.nzr, this.vdf, this.irz, this.rwh, this.nuy)
    };
    this.sxq = function (d) {
        if (typeof d === "undefined") {
            pze.bvr.cgd.sxq(0)
        } else {
            pze.bvr.cgd.sxq(d)
        }
    };
    this.rgb = function (d) {
        this.nmu = 0;
        this.xtr = 0;
        this.qtc = d;
        clearInterval(this.ovc);
        this.ovc = setInterval(this.wfk, 1000)
    };
    this.wfk = function () {
        var d = pze.bvr.vvh.sqv("loading");
        pze.bvr.nmu++;
        pze.bvr.xtr = Math.round(pze.spi.value47 / 1000) - pze.bvr.nmu;
        pze.bvr.xtr = (pze.bvr.xtr > 0) ? pze.bvr.xtr : 0;
        if (!pze.bvr.xxv) {
            if (d) {
                d.dmz = "Can not connect to game server!|Tries to connect: " + pze.bvr.qtc + " (" + pze.bvr.xtr + " sec)";
                d.wac(0)
            }
        }
    };
    this.xjs = function () {
        return pze.spi.value74
    };
    this.wac = function (d, g, e, f) {};
    this.dth = function () {
        return (this.mla === true && this.xxv === true && this.hkk === false)
    };
    this.ejy = function (e) {
        var d = this.vvh.sqv("history");
        this.mla = true;
        if (this.xxv) {
            if (this.tgq.iaa) {
                pze.sog.ssm(this.context2D, this.tgq.bvr.mvx.x - this.tgq.bvr.iej, this.tgq.bvr.mvx.y - this.tgq.bvr.iej, this.tgq.bvr.mvx.width + 2 * this.tgq.bvr.iej, this.tgq.bvr.mvx.height + 2 * this.tgq.bvr.iej, "black", 1)
            }
            pze.sog.ylo(this.context2D, e, "white", this.tgq.bvr.mvx.x, this.tgq.bvr.mvx.y, this.tgq.bvr.mvx.width, this.tgq.bvr.mvx.height, "arial", 28, "bold");
            if (d) {
                d.wac()
            }
        }
    };
    this.wnt = function () {
        if (pze.bvr.fem) {
            pze.bvr.fem.snh()
        }
        pze.bvr.qmt(false);
        pze.bvr.ury.wjx(false);
        pze.bvr.ury.rnb.nly("exit", "#dat", [true]);
        if (pze.sog.egc()) {
            pze.sog.bty();
            setTimeout(pze.bvr.cuk, 1400)
        }
        if (pze.spi.value67 > 0) {
            pze.bvr.sxq(pze.spi.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                pze.bvr.ahs({
                    type: "history",
                    sender: pze.bvr.nqk,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null") {
                    pze.bvr.ahs({
                        type: "quit",
                        sender: pze.bvr.nqk,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                         window.parent.postMessage('CloseGame',"*");
                    }
                }
            }
        }
    };
    this.qgg = function () {
        clearTimeout(pze.bvr.vse);
        pze.bvr.qmt(false);
        if (pze.bvr.ury) {
            pze.bvr.ury.wjx(false)
        }
        if (!pze.bvr.zkd) {
            pze.bvr.stop();
            if (pze.bvr.ury) {
                pze.bvr.ury.rnb.nly("info", "#tmw", [pze.bvr.language.sza]);
                pze.bvr.wac()
            }
            if (pze.bvr.bpn() === true && pze.sog.egc()) {
                pze.sog.bty();
                setTimeout(pze.bvr.cuk, 800);
                setTimeout(pze.bvr.cgd.suc.close, 800)
            } else {
                pze.bvr.cgd.suc.close()
            }
        } else {
            pze.bvr.cgd.close()
        }
    };
    this.liy = function () {
        pze.bvr.beq = true
    };
    this.kvv = function () {
        if (pze.sog.pzg == true) {
            if (pze.bvr.beq == true) {
                pze.bvr.beq = false;
                pze.sog.bty();
                setTimeout(pze.bvr.cuk, 1400)
            }
        } else {
            pze.sog.bty();
            setTimeout(pze.bvr.cuk, 1400)
        }
    };
    this.nzk = function () {
        var e = (pze.bvr.bpn() === true) ? "smartphone" : "desktop",
            j = "en";
        if (sessionStorage.sessionValue1 == pze.language.ES || sessionStorage.sessionValue1 == pze.language.CO || sessionStorage.sessionValue1 == pze.language.CL || sessionStorage.sessionValue1 == pze.language.MX || sessionStorage.sessionValue1 == pze.language.VE) {
            j = "es"
        } else {
            if (sessionStorage.sessionValue1 == pze.language.RO) {
                j = "ro"
            } else {
                if (sessionStorage.sessionValue1 == pze.language.PT || sessionStorage.sessionValue1 == pze.language.BR) {
                    j = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == pze.language.HR) {
                        j = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == pze.language.DE) {
                            j = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == pze.language.SE) {
                                j = "se"
                            }
                        }
                    }
                }
            }
        }
        if (pze.bvr.gab != "") {
            var f = null,
                g = "",
                d = "";
            if (pze.bvr.gab != "") {
                g += "rtp=" + pze.bvr.gab
            }
            if (pze.bvr.ocj != "") {
                g += (pze.bvr.gab != "") ? "&" : "";
                g += "maxwin=" + ((pze.bvr.ocj == "0") ? "0" : pze.bvr.vxg(Number(pze.bvr.ocj) * pze.bvr.afn()))
            }
            d = encodeURIComponent(g);
            f = window.open(pze.spi.value30 + "/gamerules/" + j + "/" + e + "/" + pze.bvr.nqk.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = pze.spi.value30 + "/gamerules/" + j + "/" + e + "/" + pze.bvr.nqk.toLowerCase() + ".html?" + d
            }
        }
    };
    this.knd = function () {
        pze.bvr.xmd = false;
        pze.bvr.pkv();
        pze.bvr.qqf();
        pze.bvr.lhg()
    };
    this.bzz = function () {
        var d = pze.bvr.vvh.sqv("stats");
        if (d) {
            d.gml(true, true)
        }
        pze.bvr.qjb.close(true)
    };
    this.crf = function () {
        var d = pze.bvr.vvh.sqv("stats");
        pze.bvr.stop();
        if (d && d.jff()) {
            d.gml(true, true)
        }
        pze.bvr.cgd.suc.close();
        if (pze.bvr.qjb) {
            pze.bvr.qjb.close(false)
        }
    };
    this.gqu = function () {
        clearTimeout(pze.bvr.vse);
        pze.bvr.ury.wjx(false);
        pze.bvr.stop();
        pze.bvr.cgd.suc.bpl()
    };
    this.efo = function () {
        if (pze.bvr.vqh) {
            return
        }
        var d = pze.bvr.vvh.sqv("history");
        if (d) {
            d.wjx(false)
        }
        pze.bvr.stop();
        pze.bvr.cgd.wkr(pze.bvr.ccc)
    };
    this.fof = function () {
        if (pze.bvr.vqh) {
            return
        }
        var d = pze.bvr.vvh.sqv("history");
        if (d) {
            d.wjx(false)
        }
        pze.bvr.stop();
        pze.bvr.cgd.okw(pze.bvr.ccc)
    };
    this.zov = function () {
        var d = pze.bvr.vvh.sqv("history");
        if (d) {
            d.wjx(false)
        }
        pze.bvr.stop();
        clearInterval(pze.bvr.mif);
        pze.bvr.ocz();
        pze.bvr.cgd.close()
    };
    this.rmr = function () {
        pze.bvr.cpo.swx("btn");
        pze.bvr.cpo.tkq("btn");
        pze.bvr.rew()
    };
    this.whm = function () {
        var f = pze.bvr.vvh.sqv("topb"),
            e = pze.bvr.vvh.sqv("settings"),
            g = pze.bvr.vvh.sqv("gameb"),
            d = pze.bvr.vvh.sqv("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (pze.bvr.cpo.mcw === true) {
            pze.bvr.awc = (pze.bvr.awc === pze.bvr.vok.length - 1) ? 0 : pze.bvr.awc + 1;
            pze.bvr.jiv(pze.bvr.vok[pze.bvr.awc])
        } else {
            pze.bvr.awc = (pze.bvr.awc === pze.bvr.vok.length - 1) ? 0 : pze.bvr.vok.length - 1;
            pze.bvr.ynt((pze.bvr.vok[pze.bvr.awc] === 0))
        }
        sessionStorage.sessionValue6 = pze.bvr.awc;
        if (pze.bvr.vok[pze.bvr.awc] > 0) {
            pze.bvr.cpo.tkq("audioon")
        }
        if (d) {
            d.hrk("audio", pze.bvr.vok[pze.bvr.awc])
        }
        if (f) {
            f.rnb.nly("audio", "#lne", [pze.bvr.awc])
        }
        if (e) {
            e.rnb.nly("audio", "#lne", [pze.bvr.awc])
        }
        if (g) {
            g.rnb.nly("audio", "#lne", [pze.bvr.awc])
        }
        pze.bvr.wac()
    };
    this.pwn = function () {};
    this.qot = function () {
        var d = pze.bvr.vvh.sqv("settings");
        if (d) {
            if (d.jff()) {
                pze.bvr.use()
            } else {
                pze.bvr.zwy()
            }
            pze.bvr.cpo.tkq("btn");
            if (pze.bvr.tgq.dri === false) {
                pze.bvr.ury.rnb.nly("setting", "#fyq", [d.jff()])
            }
        }
    };
    this.qzr = function () {
        var d = pze.bvr.vvh.sqv("settings"),
            e = "";
        pze.bvr.ivt = (pze.bvr.ivt < pze.bvr.ply.length - 1) ? pze.bvr.ivt + 1 : (pze.sog.mkk()) ? 0 : 1;
        localStorage.localValue1 = pze.bvr.ivt;
        pze.bvr.cuk();
        if (d) {
            d.rnb.nly("adjustment", "#lne", [(pze.bvr.kip === pze.tgq.oyu) ? 0 : 1]);
            if (pze.bvr.ply[pze.bvr.ivt] === pze.xwd.sgx) {
                e = pze.bvr.language.left
            } else {
                if (pze.bvr.ply[pze.bvr.ivt] === pze.xwd.jnt) {
                    e = pze.bvr.language.plx
                } else {
                    if (pze.bvr.ply[pze.bvr.ivt] === pze.xwd.gwo) {
                        e = pze.bvr.language.kpt
                    }
                }
            }
            d.rnb.nly("adjustment", "#znm", [e])
        }
    };
    this.vtp = function () {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.ekk = function () {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.faa = function () {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.jaw = function (e, d) {
        this.ury.rnb.nly("creditd", "#znm", [this.vxg(e), d])
    };
    this.mhd = function (e, d) {
        if (e > 0) {
            this.ury.rnb.nly("betd", "#znm", [this.vxg(e), d])
        } else {
            this.ury.rnb.nly("betd", "#znm", ["", d])
        }
    };
    this.rom = function (e) {
        var d = this.vvh.sqv("topi");
        this.ccc = e;
        if (d) {
            d.wwg("id", (e > 0) ? e : "")
        }
    };
    this.qkq = function () {
        var e = "",
            d = pze.bvr.vvh.sqv("topi");
        if (pze.spi.value49) {
            e += pze.bvr.oqj()
        }
        if (pze.spi.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += pze.bvr.okn()
        }
        if (pze.spi.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.wwg("time", e)
        }
    };
    this.okn = function () {
        return this.getTime(new Date().getTime() - this.naa)
    };
    this.oqj = function () {
        var d = new Date();
        return this.ook(d.getHours()) + ":" + this.ook(d.getMinutes())
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
        return this.ook(d) + ":" + this.ook(f)
    };
    this.ook = function (d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.cbt = function () {
        if (sessionStorage.sessionValue15 == "true" || pze.spi.value49) {
            if (pze.spi.value49) {
                this.oqj()
            }
            this.naa = (this.bvh > 0) ? this.bvh : new Date().getTime();
            this.qkq();
            this.gzn = setInterval(this.qkq, 1000)
        }
    };
    this.eip = function () {
        clearInterval(this.gzn)
    };
    this.hyb = function (d) {
        this.naa -= d
    };
    this.kiz = function (d, f) {
        var e = this.vvh.sqv("loading");
        if (e && e.dmz == null) {
            if (f && f !== "") {
                e.fmr = f
            } else {
                e.fmr = this.language.error
            }
            e.dmz = d;
            e.wac(this.cpo.yhb())
        }
    };
    this.zwy = function () {};
    this.use = function () {};
    this.qsd = function () {};
    this.cyy = function () {};
    this.rew = function () {
        var g = false,
            j = this.vvh.sqv("topb"),
            f = this.vvh.sqv("settings"),
            k = this.vvh.sqv("gameb"),
            d = this.vvh.sqv("topi");
        this.tlj = (this.tlj + 1 == pze.spi.value5.length) ? 0 : this.tlj + 1;
        sessionStorage.sessionValue1 = pze.spi.value5[this.tlj];
        this.language = this.lec(pze.spi.value5[this.tlj]);
        this.wkl();
        if (j && g == false) {
            var e = j.rnb.sqv("language");
            if (e) {
                e.czh(this.cbb(pze.spi.value5[this.tlj]));
                g = true
            }
            j.tox(true)
        }
        if (f && g == false) {
            var e = f.rnb.sqv("language");
            if (e) {
                e.czh(this.cbb(pze.spi.value5[this.tlj]));
                g = true
            }
        }
        if (k && g == false) {
            var e = k.rnb.sqv("language");
            if (e) {
                e.czh(this.cbb(pze.spi.value5[this.tlj]));
                g = true
            }
        }
        if (g == false) {
            var e = this.ury.rnb.sqv("lang");
            if (e) {
                e.eua = this.cbb(pze.spi.value5[this.tlj])
            }
        }
        if (d) {
            d.lne("language", sessionStorage.sessionValue1)
        }
        this.wac()
    };
    this.wkl = function () {};
    this.lec = function (d) {
        if (d == pze.language.EN || d == pze.language.US) {
            return new lbu()
        } else {
            if (d == pze.language.ES || d == pze.language.CO || d == pze.language.MX || d == pze.language.CL || d == pze.language.VE) {
                return new djj()
            } else {
                if (d == pze.language.DE || d == pze.language.AT) {
                    return new vvp()
                } else {
                    if (d == pze.language.PT || d == pze.language.BR) {
                        return new lcz()
                    } else {
                        if (d == pze.language.RU) {
                            return new vwy()
                        } else {
                            if (d == pze.language.EE) {
                                return new whb()
                            } else {
                                if (d == pze.language.TR) {
                                    return new dsn()
                                } else {
                                    if (d == pze.language.CZ) {
                                        return new eqx()
                                    } else {
                                        if (d == pze.language.GR) {
                                            return new fdv()
                                        } else {
                                            if (d == pze.language.BG) {
                                                return new glu()
                                            } else {
                                                if (d == pze.language.GE) {
                                                    return new chu()
                                                } else {
                                                    if (d == pze.language.HU) {
                                                        return new nre()
                                                    } else {
                                                        if (d == pze.language.RO) {
                                                            return new zon()
                                                        } else {
                                                            if (d == pze.language.FR) {
                                                                return new ano()
                                                            } else {
                                                                if (d == pze.language.HR) {
                                                                    return new ygk()
                                                                } else {
                                                                    if (d == pze.language.IT) {
                                                                        return new ivr()
                                                                    } else {
                                                                        if (d == pze.language.SE) {
                                                                            return new bvz()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.cbb = function (d) {
        if (d) {
            return this.cpo.ewl(d)
        }
        return null
    };
    this.elx = function () {
        this.cpo.gnr()
    };
    this.ocz = function () {};
    this.ynt = function (d) {
        this.cpo.wxo(d)
    };
    this.jiv = function (d) {
        this.cpo.dhu(d)
    };
    this.ioh = function () {
        this.amj();
        var d = this.vvh.sqv("history");
        this.xxv = true;
        this.vqh = true;
        if (d) {
            d.ive(true)
        }
        this.ejy(this.cgv(this.language.zlo))
    };
    this.zpf = function () {
        loadGame("hist_" + pze.bvr.nqk.toLowerCase(), pze.spi.value30 + "/" + pze.bvr.nqk.toLowerCase() + "/src/hist_" + pze.bvr.nqk.toLowerCase(), "UTF-8");
        removeGame(pze.bvr.nqk.toLowerCase(), pze.spi.value30 + "/" + pze.bvr.nqk.toLowerCase() + "/src/" + pze.bvr.nqk.toLowerCase())
    };
    this.omx = function () {
        var d = "./history_" + this.nqk.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.mlz = function () {
        var d = null;
        if (pze.bvr.zpq) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            pze.bvr.ahs({
                type: "quit",
                sender: pze.bvr.nqk,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            pze.bvr.mwi();
            if (d !== "(api)") {
                  window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(pze.bvr.nqk.toLowerCase(), pze.spi.value30 + "/" + pze.bvr.nqk.toLowerCase() + "/src/" + pze.bvr.nqk.toLowerCase());
            removeGame("hist_" + pze.bvr.nqk.toLowerCase(), pze.spi.value30 + "/" + pze.bvr.nqk.toLowerCase() + "/src/hist_" + pze.bvr.nqk.toLowerCase());
            loadMenu("menu", pze.spi.value1001, "UTF-8", true)
        }
    };
    this.gsh = function () {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            pze.bvr.ahs({
                type: "quit",
                sender: pze.bvr.nqk,
                lang: sessionStorage.sessionValue1.toUpperCase()
            });
            d = decodeURIComponent(sessionStorage.sessionValue5);
            pze.bvr.mwi();
            if (d !== "(api)") {
                 window.parent.postMessage('CloseGame',"*");
            }
        } else {
            removeGame(pze.bvr.nqk.toLowerCase(), pze.spi.value30 + "/" + pze.bvr.nqk.toLowerCase() + "/src/" + pze.bvr.nqk.toLowerCase());
            removeGame("hist_" + pze.bvr.nqk.toLowerCase(), pze.spi.value30 + "/" + pze.bvr.nqk.toLowerCase() + "/src/hist_" + pze.bvr.nqk.toLowerCase());
            loadMenu("menu", pze.spi.value1001, "UTF-8", false)
        }
    };
    this.mwi = function () {
        if (!pze.bvr.zkd && pze.spi.value83) {
            sessionStorage.clear()
        }
    };
    this.inp = function (f) {
        var g = null;
        if (this.fem) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.bsc !== pze.vcr.ief) {
                    if (g.bsc === pze.vcr.sms || g.bsc === pze.vcr.qow) {
                        g.Title = this.language.ptd;
                        g.Text = (g.bsc === pze.vcr.sms) ? this.language.pbg : this.language.pjs;
                        g.Buttons = [{
                            Text: this.language.coi,
                            Action: "quit"
                        }]
                    } else {
                        if (g.bsc === pze.vcr.jap) {
                            g.Title = this.language.tos;
                            g.Text = this.language.etq + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.iwo;
                                g.Buttons = [{
                                    Text: this.cgv(this.language.odx),
                                    Action: "history"
                                }, {
                                    Text: this.language.coi,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.coi,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.bsc === pze.vcr.zci || g.bsc === pze.vcr.yey || g.bsc === pze.vcr.cpf) {
                                g.Title = this.pjz;
                                if (g.bsc === pze.vcr.zci) {
                                    g.Text = this.language.nvw + " " + this.bal + " " + this.language.eye + "\n\n" + this.language.bxh
                                } else {
                                    if (g.bsc === pze.vcr.yey) {
                                        g.Text = this.language.fcq + " " + (this.bal - this.bco) + " " + this.language.hmp + "\n\n" + this.language.bxh
                                    } else {
                                        if (g.bsc === pze.vcr.cpf) {
                                            g.Text = this.language.iih + ": " + this.bco + "\n" + this.language.eul + ": " + this.fcy(this.gls)
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
                    if (g.bsc === pze.vcr.tpa || g.bsc === pze.vcr.ego) {
                        g.Title = this.language.esv;
                        g.Text = this.language.gkw;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.bsc === pze.vcr.kpr) {
                            g.Title = this.language.uxc;
                            g.Text = this.language.dit;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.bsc === pze.vcr.roulette.zrs || g.bsc === pze.vcr.roulette.gzx) {
                                g.Title = this.language.ptd;
                                g.Text = (g.bsc === pze.vcr.roulette.zrs) ? this.language.bbx : this.language.hkp;
                                g.Buttons = [{
                                    Text: this.language.coi,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.fem.kfu(f)
        }
    };
    this.stop = function () {
        this.eip();
        this.taj();
        this.bfq();
        clearTimeout(this.wqb);
        if (!this.zkd) {
            clearInterval(this.mif)
        }
        this.vvh.nly("autop", "#stop");
        this.vvh.nly("settings", "#stop");
        this.vvh.nly("topb", "#stop")
    };
    this.dez = function () {
        var d = false;
        if (this.nta.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.gxk == "freeplay" && this.nzr == "freeplay") {
                d = true
            } else {
                if (this.vdf && (this.vdf == "b71d982ffcbe56eb8cd11fa05963bbee" || this.vdf.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (pze.spi.value68 != null && this.nuy.toLowerCase() === pze.spi.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            pze.spi.value21.e = false;
            if (pze.spi.value76) {
                pze.spi.value76.f = false
            }
        }
        return d
    };
    this.guj = function () {
        return (pze.spi.value65 > 0)
    };
    this.kuk = function () {
        return (((pze.sog.bnm === pze.os.cqb && pze.sog.rpo() === true) || pze.sog.bnm === pze.os.tdn) && this.zkd === false)
    };
    this.lcy = function () {
        return false
    };
    this.mci = function () {
        if (pze.bvr.guj() && pze.bvr.lcy()) {
            clearTimeout(pze.bvr.vse);
            pze.bvr.vse = setTimeout(pze.bvr.qgg, pze.spi.value65)
        }
    };
    this.drj = function () {
        if (pze.bvr.guj() && pze.bvr.vse >= 0) {
            if (pze.bvr.lcy()) {
                clearTimeout(pze.bvr.vse);
                pze.bvr.vse = setTimeout(pze.bvr.qgg, pze.spi.value65)
            } else {
                clearTimeout(pze.bvr.vse);
                pze.bvr.vse = -1
            }
        }
    };
    this.taj = function () {
        if (pze.bvr.guj()) {
            clearTimeout(pze.bvr.vse);
            pze.bvr.vse = -1
        }
    };
    this.olw = function () {
        return false
    };
    this.slc = function () {
        return false
    };
    this.zut = function () {
        if (pze.bvr.olw() && pze.bvr.slc() && pze.bvr.xsf < 0) {
            clearTimeout(pze.bvr.xsf);
            pze.bvr.xsf = setTimeout(pze.bvr.ype, pze.bvr.upr)
        }
    };
    this.blh = function () {
        if (pze.bvr.olw() && pze.bvr.xsf >= 0) {
            if (pze.bvr.slc()) {
                clearTimeout(pze.bvr.xsf);
                pze.bvr.xsf = setTimeout(pze.bvr.ype, pze.bvr.upr)
            } else {
                clearTimeout(pze.bvr.xsf);
                pze.bvr.xsf = -1
            }
        }
    };
    this.bfq = function () {
        if (pze.bvr.olw()) {
            clearTimeout(pze.bvr.xsf);
            pze.bvr.xsf = -1
        }
    };
    this.ype = function () {};
    this.mvp = function () {};
    this.dvc = function (f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.irz.replace(/_*/g, ""));
        if (e > d) {
            this.irz = f
        }
    };
    this.qmt = function (g) {
        var e = (g && !this.enf),
            f = this.vvh.sqv("topb"),
            d = this.vvh.sqv("topi");
        if (d) {
            d.dat(e)
        }
        if (f) {
            f.dat(e);
            f.wjx(e)
        }
    };
    this.vsa = function (g) {
        var e = (g && !this.enf),
            f = this.vvh.sqv("topb"),
            d = this.vvh.sqv("topi");
        if (d) {
            d.dat(e)
        }
        if (f) {
            f.dat(e);
            f.uoe(e)
        }
    };
    this.rqe = function (g) {
        var e = (g && !this.enf),
            f = this.vvh.sqv("topb"),
            d = this.vvh.sqv("topi");
        if (d) {
            d.dat(e)
        }
        if (f) {
            f.dat(e);
            f.qah(e)
        }
    };
    this.nwc = function () {
        var d = this.vvh.sqv("topb");
        if (d && !d.jff()) {
            this.cpo.swx("panel_in");
            this.cpo.tkq("panel_in");
            d.kfu()
        }
    };
    this.pkv = function (d) {
        var e = this.vvh.sqv("topb");
        if (e && e.jff()) {
            this.cpo.swx("panel_out");
            this.cpo.tkq("panel_out");
            if (d) {
                e.kyj = d
            }
            e.snh()
        }
    };
    this.fcy = function (f) {
        if (this.nxh > 0) {
            return (f * this.nxh).toFixed(0).toString()
        } else {
            if (pze.spi.value21.e == false || this.zpq == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (pze.spi.value21.m != 1) {
                    e = f * pze.spi.value21.m;
                    var g = pze.spi.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = pze.spi.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.juw(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.vxg = function (f) {
        if (this.nxh > 0) {
            var e = (f * this.nxh).toFixed(0).toString();
            if (pze.spi.value21.e == true && pze.spi.value21.m == 1 && pze.spi.value21.s && this.zpq == false) {
                e = pze.spi.value21.s + " " + e
            }
            return e
        } else {
            if (pze.spi.value21.e == false || this.zpq == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (pze.spi.value21.m != 1) {
                    e = f * pze.spi.value21.m;
                    var g = pze.spi.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = pze.spi.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.juw(e, (d == 0) ? 0 : d + 1);
                if (pze.spi.value21.s) {
                    e = pze.spi.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.juw = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (pze.spi.value21.cs != null) {
                l = l.replace(/\./, pze.spi.value21.cs)
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
                    if (pze.spi.value21.ts != null) {
                        e += pze.spi.value21.ts
                    }
                }
            }
            if (pze.spi.value21.cs != null) {
                f = f.replace(/\./, pze.spi.value21.cs)
            }
            return e + f
        }
    };
    this.sir = function (f) {
        if (this.nxh > 0) {
            return (f * this.nxh).toFixed(0).toString()
        } else {
            if (pze.spi.value76.f == false || this.zpq == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (pze.spi.value76.m != 1) {
                    e = f * pze.spi.value76.m;
                    var g = pze.spi.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = pze.spi.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.zhx(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.rdw = function (f) {
        if (this.nxh > 0) {
            var e = (f * this.nxh).toFixed(0).toString();
            if (pze.spi.value76.f == true && pze.spi.value76.m == 1 && pze.spi.value76.s && this.zpq == false) {
                e = pze.spi.value76.s + " " + e
            }
            return e
        } else {
            if (pze.spi.value76.f == false || this.zpq == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (pze.spi.value76.m != 1) {
                    e = f * pze.spi.value76.m;
                    var g = pze.spi.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = pze.spi.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.zhx(e, (d == 0) ? 0 : d + 1);
                if (pze.spi.value76.s) {
                    e = pze.spi.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.zhx = function (l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (pze.spi.value76.cs != null) {
                l = l.replace(/\./, pze.spi.value76.cs)
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
                    if (pze.spi.value76.ts != null) {
                        e += pze.spi.value76.ts
                    }
                }
            }
            if (pze.spi.value76.cs != null) {
                f = f.replace(/\./, pze.spi.value76.cs)
            }
            return e + f
        }
    };
    this.cgv = function (d) {
        if (d && sessionStorage.sessionValue1 !== pze.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.los = function () {
        for (var e = 0, d = this.cgd.suc.iay.length; e < d; e++) {
            this.vvh.vnv(this.cgd.suc.iay[e].kwc, this.bnw(this.cgd.suc.iay[e], this.tgq.wlc.mvx[this.cgd.suc.iay[e].mvx], this.tgq.wlc.display, this.style.wlc.iht[this.cgd.suc.iay[e].mvx], null), ["jackpots"])
        }
        this.vvh.vnv("jwp", this.bnw(null, this.tgq.wlc.vqw.mvx, this.tgq.wlc.vqw, this.style.wlc.vqw, this.cpo.ewl("jackpot")));
        this.vvh.nly("jwp", "#cug", [false]);
        if (this.yfh()) {
            this.vvh.vnv("mjwp", this.qfb(this.tgq.wlc.hnr.mvx, this.tgq.wlc.hnr, this.style.wlc.hnr, this.cpo.ewl("mj_bg"), this.cpo.ewl("mj_font"), this.cpo.ewl("mj_label"), [this.cpo.ewl("mj_0"), this.cpo.ewl("mj_1"), this.cpo.ewl("mj_2"), this.cpo.ewl("mj_3"), this.cpo.ewl("mj_4"), this.cpo.ewl("mj_5")]));
            this.vvh.nly("mjwp", "#cug", [false])
        }
    };
    this.neq = function () {
        var e = this.vvh.yns("jackpots"),
            f = this.vvh.sqv("jwp"),
            j = this.vvh.sqv("mjwp");
        for (var g = 0, d = e.length; g < d; g++) {
            e[g].sod(this.tgq.wlc.mvx[this.cgd.suc.iay[g].mvx]);
            e[g].ipo(this.tgq.wlc.display)
        }
        if (f) {
            f.sod(this.tgq.wlc.vqw.mvx);
            f.ipo(this.tgq.wlc.vqw)
        }
        if (j) {
            j.sod(this.tgq.wlc.hnr.mvx);
            j.ipo(this.tgq.wlc.hnr)
        }
    };
    this.bnw = function (f, k, j, g, d) {
        var e = new lxe();
        e.hre(k, null, this.context2D);
        e.parent = this;
        e.eua = d;
        e.ybb(g);
        e.ipo(j);
        if (f) {
            e.dwr(f.rbq);
            e.qar(f.value)
        }
        return e
    };
    this.qfb = function (k, j, g, l, m, f, e) {
        var d = new rcr();
        d.hre(k, null, this.context2D);
        d.parent = this;
        d.lzq = l;
        d.mra = m;
        d.yqt = f;
        d.nmj = e;
        d.ybb(g);
        d.ipo(j);
        return d
    };
    this.wbq = function (f) {
        if (this.rqn() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.vvh.nly(f[e].kwc, "#qar", [f[e].value])
            }
            this.wac()
        }
    };
    this.xjz = function (d) {
        if (this.rqn() === true) {
            this.wlc = {
                kwc: d.kwc,
                value: d.value,
                zlh: d.zlh
            }
        }
    };
    this.xnb = function () {
        this.wlc = null
    };
    this.fyi = function () {
        return false
    };
    this.yfh = function () {
        return false
    };
    this.rqn = function () {
        return (!this.zkd && this.cgd.suc.iay.length > 0 && this.fyi())
    };
    this.uuh = function () {
        return (this.wlc != null)
    };
    this.jfm = function () {
        return (pze.spi.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.mbu = function () {
        if (this.ikf() && this.xqr()) {
            this.mab()
        }
    };
    this.xqr = function () {
        return false
    };
    this.ikf = function () {
        if (this.zkd) {
            return false
        }
        return (this.cgd.suc.zjk.length + this.cgd.suc.vmf.length > 0)
    };
    this.mab = function () {
        var g = null,
            e = this.cgd.suc.zjk.length,
            d = this.cgd.suc.vmf.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.cgd.suc.zjk.splice(f, 1)[0];
                g.bsc = pze.vcr.ief;
                this.vwo.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.cgd.suc.vmf.splice(f, 1)[0];
                g.bsc = pze.vcr.ief;
                this.vwo.push(g)
            }
            if (this.fem && !this.fem.jff()) {
                this.vtk()
            }
        }
    };
    this.vtk = function () {
        var d = null;
        if (this.vwo.length > 0) {
            d = this.vwo.shift();
            this.inp([d])
        }
    };
    this.vua = function () {
        if (pze.bvr.rmk.length > 0) {
            pze.bvr.inp(pze.bvr.rmk)
        }
    };
    this.djh = function () {
        this.vwo.length = 0
    };
    this.aoq = function () {
        this.rmk.length = 0;
        if (this.whn) {
            this.whn.snh()
        }
    };
    this.rbd = function () {
        var f = null,
            d = this.cgd.suc.rmk.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.cgd.suc.rmk.splice(e, 1)[0];
                f.bsc = pze.vcr.ief;
                this.rmk.push(f)
            }
            if (this.whn) {
                this.whn.kfu(this.rmk[0].Title, this.rmk[0].Text, this.rmk.length)
            }
        }
    };
    this.byr = function () {
        var d = false;
        if (this.fem && this.fem.jff()) {
            d = true
        }
        if (this.whn && this.whn.jff()) {
            d = true
        }
        if (this.jfm()) {
            d = true
        }
        if (this.dmc) {
            this.dmc.style.display = (d) ? "block" : "none"
        }
    };
    this.rva = function () {
        this.qmt(false);
        this.ury.wjx(false);
        this.ury.rnb.nly("info", "#vfw");
        this.inp([{
            bsc: pze.vcr.jap
        }])
    };
    this.xpu = function () {
        pze.bvr.cxu = true
    };
    this.ukp = function () {
        this.qjb = new nvl().hre(this, pze.spi.value6)
    };
    this.lij = function () {
        if (this.qjb) {
            this.qjb.connect(this.nqk, this.gxk, this.nzr, this.vdf, this.irz, true)
        }
    };
    this.lhg = function () {
        if (pze.bvr.qjb) {
            pze.bvr.qjb.connect(pze.bvr.nqk, pze.bvr.gxk, pze.bvr.nzr, pze.bvr.vdf, pze.bvr.irz, false)
        }
    };
    this.qqf = function () {};
    this.cql = function () {};
    this.juf = function (d) {
        if (!this.dez() && !this.zkd) {
            clearTimeout(this.wqb);
            if (this.mob()) {
                this.wqb = setTimeout(this.rkq, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.wqb = setTimeout(this.xpu, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.rkq = function () {
        pze.bvr.xmd = true
    };
    this.mob = function () {
        return pze.spi.value36 || pze.spi.value37
    }
}

function hye() {
    this.hre = function () {
        this.nlh("btn", this.ymo);
        this.nlh("gamble_on", this.ymo);
        this.nlh("gamble_off", this.ymo);
        this.nlh("panel_in", this.ymo);
        this.nlh("panel_out", this.ymo);
        this.nlh("audioon", this.ymo);
        for (var a = 0; a < 12; a++) {
            this.nlh("step" + a, this.ymo)
        }
        this.nlh("maxstep", this.ymo);
        this.nlh("start", 0.2);
        this.nlh("gambleprop", this.xrn);
        this.nlh("freespinstart", 0.5)
    }
}
hye.prototype = new wos;

function ozy() {
    this.pfk = {
        dzq: 84,
        jnn: -1,
        value: "T",
        phr: null
    };
    this.mwc = {
        dzq: 82,
        jnn: -1,
        value: "R",
        phr: null
    };
    this.gqi = {
        dzq: 80,
        jnn: -1,
        value: "P",
        phr: null
    };
    this.xwf = {
        dzq: 77,
        jnn: -1,
        value: "M",
        phr: null
    };
    this.start = {
        dzq: 32,
        jnn: -1,
        value: "SPACE",
        phr: null
    };
    this.enf = {
        dzq: 16,
        jnn: -1,
        value: "SHIFT",
        phr: null
    };
    this.jls = {
        dzq: 38,
        jnn: -1,
        value: "\u25B2",
        phr: null
    };
    this.nok = {
        dzq: 40,
        jnn: -1,
        value: "\u25BC",
        phr: null
    };
    this.qmy = {
        dzq: 39,
        jnn: -1,
        value: "\u25B6",
        phr: null
    };
    this.ytg = {
        dzq: 37,
        jnn: -1,
        value: "\u25C0",
        phr: null
    };
    this.eil = {
        dzq: 71,
        jnn: -1,
        value: "G",
        phr: null
    };
    this.zuh = {
        dzq: 27,
        jnn: -1,
        value: "ESC",
        phr: null
    };
    this.language = {
        dzq: 76,
        jnn: -1,
        value: "L",
        phr: null
    };
    this.opy = {
        dzq: 13,
        jnn: -1,
        value: "ENTER",
        phr: null
    };
    this.rcf = {
        dzq: 27,
        jnn: -1,
        value: "ESC",
        phr: null
    };
    this.gwy = {
        dzq: 39,
        jnn: -1,
        value: "\u25B6",
        phr: null
    };
    this.jjj = {
        dzq: 37,
        jnn: -1,
        value: "\u25C0",
        phr: null
    };
    this.hdu = {
        dzq: 27,
        jnn: -1,
        value: "ESC",
        phr: null
    };
    this.jnl = {
        dzq: 32,
        jnn: -1,
        value: "SPACE",
        phr: null
    };
    this.sxt = {
        dzq: 8,
        jnn: -1,
        value: "BACKSPACE",
        phr: null
    };
    this.yfc = {
        dzq: 82,
        jnn: -1,
        value: "R",
        phr: null
    };
    this.mlu = {
        dzq: 66,
        jnn: -1,
        value: "B",
        phr: null
    };
    this.fqt = {
        dzq: 72,
        jnn: -1,
        value: "H",
        phr: null
    };
    this.oeq = {
        dzq: 68,
        jnn: -1,
        value: "D",
        phr: null
    };
    this.nxi = {
        dzq: 83,
        jnn: -1,
        value: "S",
        phr: null
    };
    this.caq = {
        dzq: 67,
        jnn: -1,
        value: "C",
        phr: null
    };
    this.ido.push(this.pfk);
    this.ido.push(this.gqi);
    this.ido.push(this.start);
    this.ido.push(this.enf);
    this.ido.push(this.jls);
    this.ido.push(this.nok);
    this.ido.push(this.qmy);
    this.ido.push(this.ytg);
    this.ido.push(this.eil);
    this.ido.push(this.zuh);
    this.ido.push(this.language)
}
ozy.prototype = new qbu;

function see() {
    this.jcq = new Image();
    this.zdu = 0;
    this.pdl = 0;
    this.gib = 0;
    this.hre = function (c, a, b, d) {
        this.jcq = c;
        this.pdl = b;
        this.zdu = a;
        this.gib = d;
        return this
    }
}

function gpl() {
    this.bcf = 0;
    this.aic = 0;
    this.win = 0;
    this.mki = "sans-serif";
    this.shp = "bold";
    this.mrg = null;
    this.lhf = null;
    this.tef = null;
    this.bgf = null;
    this.lfy = 16;
    this.eln = 0;
    this.dig = 0;
    this.dvm = 2;
    this.cdp = 3;
    this.vjr = 3;
    this.nmw = 3;
    this.tav = 3;
    this.ipo = function (a) {
        try {
            this.lfy = a.fontSize;
            this.eln = a.qeg;
            this.dig = a.ngv;
            this.dvm = a.iej;
            this.cdp = a.xjv;
            this.vjr = a.img;
            this.nmw = a.jny;
            this.tav = a.drx
        } catch (b) {
            console.error(b)
        }
    };
    this.ybb = function (a) {
        try {
            this.mki = a.font;
            this.shp = a.lfx;
            this.mrg = a.qmj;
            this.lhf = a.borderColor;
            this.tef = a.tbr;
            this.bgf = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.mcy = function (a, c, b, d) {
        this.bcf = a;
        this.aic = c;
        this.win = b;
        if (d && d === true && this.context2D != null && this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.qvu = function (a, b) {
        this.win = a;
        if (b && b === true && this.context2D != null && this.jff() === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.tef) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.lhf);
            b.addColorStop(1, this.tef);
            pze.sog.lng(a, this.x, this.y, this.width, this.height, this.cdp, this.vjr, this.nmw, this.tav, this.bgf, 1, b, this.dvm, 1)
        } else {
            pze.sog.lng(a, this.x, this.y, this.width, this.height, this.cdp, this.vjr, this.nmw, this.tav, this.bgf, 1, this.lhf, this.dvm, 1)
        }
        pze.sog.rig(a, pze.bvr.language.iih + ":", this.mrg, this.x + this.dvm + this.eln, this.y + this.dig, 2 * this.width / 3 - this.dvm, this.height / 2, this.mki, this.lfy, this.shp, 0);
        pze.sog.rig(a, pze.bvr.language.eul + ":", this.mrg, this.x + this.dvm + this.eln, this.y + this.height / 2 + this.dig, 2 * this.width / 3 - this.dvm, this.height / 2, this.mki, this.lfy, this.shp, 0);
        pze.sog.gwf(a, this.aic + "/" + this.bcf, this.mrg, this.x + this.dvm + 2 * this.width / 3, this.y + this.dig, this.width / 3 - this.dvm - this.eln, this.height / 2, this.mki, this.lfy, this.shp, 0);
        pze.sog.gwf(a, this.win, this.mrg, this.x + this.dvm + 2 * this.width / 3, this.y + this.height / 2 + this.dig, this.width / 3 - this.dvm - this.eln, this.height / 2, this.mki, this.lfy, this.shp, 0);
        a.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    }
}
gpl.prototype = new qdi;

function azj() {
    var a = this;
    this.nvx = false;
    this.rnb = null;
    this.xcl = false;
    this.xnx = -1;
    this.ymj = 0;
    this.onm = null;
    this.usk = 800;
    this.vsx = 0;
    this.bgf = null;
    this.izt = null;
    this.glk = null;
    this.kai = 0;
    this.nui = null;
    this.lmf = null;
    this.gwd = null;
    this.wqx = null;
    this.pbb = 0;
    this.pmj = 0;
    this.blu = new rcu();
    this.hmo = new rcu();
    this.xht = 30;
    this.hre = function (b, d, c) {
        azj.prototype.hre.call(this, b, d, c);
        this.ywy()
    };
    this.dlu = function (c, b) {
        try {
            this.xht = c.wej;
            this.blu = c.pej;
            this.hmo = c.zxj;
            this.jhp(c);
            this.vgl(c);
            this.buz(c);
            this.ooo(c);
            this.pvn(c);
            this.ybb(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.ipo = function (g, r) {
        try {
            var d = {},
                c = this.rnb.sqv("info"),
                k = this.rnb.sqv("win"),
                s = this.rnb.sqv("creditd"),
                o = this.rnb.sqv("betd"),
                p = this.rnb.sqv("betpopup"),
                n = this.rnb.sqv("idd"),
                q = this.rnb.sqv("timed"),
                b = this.rnb.sqv("freeround"),
                m = this.rnb.yns("buttons");
            if (this.parent.bpn() || (this.parent.zkd && this.parent.dru)) {
                if ((this.parent.xjs() == null || this.parent.xjs().o == false) && this.parent.style.bvr.jyh == true) {
                    d = g.lzh
                } else {
                    d = g.xeu
                }
            } else {
                if (r) {
                    if (this.parent.xjs() != null) {
                        d = g.cxj
                    } else {
                        d = g.ods
                    }
                } else {
                    if (this.parent.xjs() != null) {
                        if (!this.parent.pfl()) {
                            d = g.men
                        } else {
                            d = g.cfx
                        }
                    } else {
                        if (pze.spi.value57 === pze.ui.hfy || this.qvb()) {
                            if (!this.parent.pfl()) {
                                d = g.lsh
                            } else {
                                d = g.mwz
                            }
                        } else {
                            if (pze.spi.value57 === pze.ui.wfw) {
                                if (!this.parent.pfl()) {
                                    d = g.lde
                                } else {
                                    d = g.kef
                                }
                            } else {
                                if (pze.spi.value57 === pze.ui.lbb) {
                                    if (!this.parent.pfl()) {
                                        d = g.lix
                                    } else {
                                        d = g.nao
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.xht = g.wej;
            this.blu = g.pej;
            this.hmo = g.zxj;
            if (s) {
                s.ipo(g.display);
                s.sod(g.pzb)
            }
            if (o) {
                o.ipo(g.display);
                o.sod(g.wxu)
            }
            if (p) {
                p.ipo(g.gca);
                p.sod(g.ide)
            }
            if (n) {
                n.ipo(g.gkx);
                n.sod(g.sqx)
            }
            if (q) {
                q.ipo(g.gkx);
                q.sod(g.bct)
            }
            if (c) {
                c.ipo(g.uxc);
                c.sod(g.uxc.mvx)
            }
            if (k) {
                k.ipo(g.win);
                k.sod(g.win.mvx)
            }
            if (b) {
                b.ipo(g.qzw);
                b.sod(g.qzw.mvx)
            }
            for (var f = 0, j = m.length; f < j; f++) {
                if (m[f] instanceof zzn) {
                    m[f].ipo(g.zky)
                }
            }
            if (this.parent.xjs() != null) {
                if (this.parent.bpn() === true) {
                    if (this.parent.xjs().o === true || this.parent.style.bvr.jyh == false) {
                        this.rnb.nly("start", "#ipo", [g.ltn])
                    } else {
                        this.rnb.nly("start", "#ipo", [g.ogd])
                    }
                } else {
                    this.rnb.nly("start", "#ipo", [g.ogd]);
                    this.rnb.nly("astart", "#ipo", [g.ltn])
                }
            } else {
                this.rnb.nly("start", "#ipo", [g.ogd]);
                if (this.parent.bpn() === true) {} else {
                    if (pze.spi.value57 === pze.ui.hfy || this.qvb()) {
                        this.rnb.nly("astart", "#ipo", [g.ogd])
                    }
                }
            }
            if (r) {
                this.rnb.nly("start", "#sod", [d.eiv]);
                this.rnb.nly("astart", "#sod", [d.pkf]);
                this.rnb.nly("setting", "#sod", [d.opc])
            } else {
                this.rnb.nly("start", "#sod", [d.eiv]);
                this.rnb.nly("astart", "#sod", [d.pkf]);
                this.rnb.nly("bet", "#sod", [d.lki]);
                this.rnb.nly("gamble", "#sod", [d.yhx]);
                this.rnb.nly("exit", "#sod", [d.dwj]);
                this.rnb.nly("help", "#sod", [d.dwj]);
                this.rnb.nly("lang", "#sod", [d.xpm]);
                this.rnb.nly("line", "#sod", [d.rya]);
                this.rnb.nly("setting", "#sod", [d.opc])
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.ybb = function (b, r) {
        try {
            var d = this.rnb.sqv("info"),
                l = this.rnb.sqv("win"),
                p = this.rnb.sqv("betpopup"),
                c = this.rnb.sqv("freeround"),
                j = this.rnb.yns("displays"),
                o = this.rnb.sqv("idd"),
                q = this.rnb.sqv("timed"),
                n = this.rnb.yns("buttons"),
                g = (r === true) ? b.rvs : b.xkh;
            this.bgf = g.backgroundColor;
            this.izt = g.hik;
            this.glk = g.oio;
            this.kai = g.hbl;
            this.lmf = g.stp;
            this.gwd = g.gui;
            if (d) {
                d.ybb(g.uxc)
            }
            if (l) {
                l.ybb(g.win)
            }
            if (c) {
                c.ybb(b.qzw)
            }
            for (var f = 0, k = n.length; f < k; f++) {
                n[f].ybb((this.parent.tgq.dri === false) ? g.kfs : (this.parent.kip === pze.tgq.oyu) ? g.jvu : g.ddn)
            }
            for (var f = 0, k = j.length; f < k; f++) {
                j[f].ybb(b.display)
            }
            if (p) {
                p.ybb(b.gca)
            }
            if (o) {
                o.ybb(b.gkx)
            }
            if (q) {
                q.ybb(b.gkx)
            }
            if (this.parent.bpn() === true) {
                this.rnb.nly("bet", "#ybb", [b.xat])
            }
        } catch (m) {
            console.error(m)
        }
    };
    this.tzk = function (t, s, u) {
        var r = this.rnb.yns("buttons"),
            g = this.rnb.sqv("line"),
            k = this.rnb.sqv("bet"),
            c = this.rnb.sqv("start"),
            p = this.rnb.sqv("betd"),
            f = this.rnb.sqv("creditd"),
            b = this.parent.vvh.sqv("betsel"),
            e = this.parent.vvh.sqv("linesel"),
            o = t - this.x,
            m = s - this.y;
        for (var n = 0, q = r.length; n < q; n++) {
            var d = r[n];
            if (o >= d.x && o <= d.x + d.width && m >= d.y && m <= d.y + d.height && d.jff() == true) {
                if (d.czv() && !d.mns()) {
                    if (!this.parent.bpn() && (d === k || d === g)) {
                        d.jrn(true, true, false);
                        for (var l = 0; l < q; l++) {
                            r[l].sic(true, false)
                        }
                        d.bxc();
                        this.onm = function () {
                            if (d.bxc() === true) {
                                clearInterval(a.ymj);
                                d.jrn(false, true);
                                for (var v = 0; v < q; v++) {
                                    r[v].sic(false)
                                }
                            }
                        };
                        this.ymj = setInterval(this.onm, d.xiq)
                    } else {
                        if (d === c && c.bxc === this.kux) {
                            d.jrn(true, true, false)
                        } else {
                            d.jrn(true, true)
                        }
                        d.bxc();
                        for (var l = 0; l < q; l++) {
                            r[l].sic(true)
                        }
                    }
                    return true
                }
            }
        }
        if (k && k.czv() && !k.mns() && k.jff()) {
            if (p && o >= p.x && o <= p.x + p.width && m >= p.y && m <= p.y + p.height) {
                if (!u) {
                    if ((b && b.czv()) && ((e && e.czv()) || !e)) {
                        this.parent.vwt()
                    }
                    return true
                }
            } else {
                if (f && o >= f.x && o <= f.x + f.width && m >= f.y && m <= f.y + f.height) {
                    if (!u) {
                        this.parent.mvf()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.yew = function () {
        var f = this.rnb.yns("buttons"),
            k = this.rnb.sqv("bet"),
            l = this.rnb.sqv("line"),
            g = this.rnb.sqv("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.flo() === true) {
                d.jrn(false, true);
                if (pze.spi.value82 && d == g) {
                    for (var c = 0; c < b; c++) {
                        f[c].sic(false)
                    }
                }
                if (d === k || d === l) {
                    clearInterval(this.ymj);
                    for (var c = 0; c < b; c++) {
                        f[c].sic(false)
                    }
                } else {
                    if (d === g && g.bxc === this.kux) {
                        clearTimeout(this.vsx);
                        if (this.parent.enf === false) {
                            this.rnb.nly("start", "#kbu")
                        }
                    }
                }
                return true
            }
        }
        return false
    };
    this.oaf = function (c) {
        var m = this.rnb.yns("buttons"),
            f = this.rnb.sqv("bet"),
            e = this.rnb.sqv("line"),
            b = this.rnb.sqv("start");
        for (var k = 0, l = m.length; k < l; k++) {
            var d = m[k];
            if (c == d.lfv) {
                if (d.czv() && !d.mns() && d.jff()) {
                    if (pze.spi.value82 && d == b) {
                        d.jrn(true, true, false);
                        for (var g = 0; g < l; g++) {
                            m[g].sic(true, false)
                        }
                    } else {
                        d.jrn(true, true);
                        d.bxc();
                        for (var g = 0; g < l; g++) {
                            m[g].sic(true)
                        }
                    }
                }
                return true
            }
        }
        if (c == this.parent.zew.nok.dzq) {
            if (f && f.czv() && !f.mns() && f.jff()) {
                this.parent.lwd();
                for (var g = 0, l = m.length; g < l; g++) {
                    m[g].sic(true)
                }
            }
            return true
        } else {
            if (c == this.parent.zew.ytg.dzq) {
                if (e && e.czv() && !e.mns() && e.jff()) {
                    this.parent.pmf();
                    for (var g = 0, l = m.length; g < l; g++) {
                        m[g].sic(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.mgf = function (g) {
        var f = this.rnb.yns("buttons"),
            k = this.rnb.sqv("start");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.flo() == true && g == d.lfv) {
                if (pze.spi.value82 && d == k) {
                    d.bxc();
                    for (var c = 0; c < b; c++) {
                        f[c].sic(false)
                    }
                }
                d.jrn(false, true);
                return true
            }
        }
        return false
    };
    this.icb = function (n, m, o) {
        var l = this.rnb.yns("buttons"),
            e = this.rnb.sqv("bet"),
            d = this.rnb.sqv("line"),
            b = this.rnb.sqv("start"),
            p = this.rnb.sqv("astart");
        if (n != null && m != null) {
            var j = n - this.x;
            var f = m - this.y;
            for (var g = 0, k = l.length; g < k; g++) {
                var c = l[g];
                if (j >= c.x && j <= c.x + c.width && f >= c.y && f <= c.y + c.height && c.jff() && c.czv() && !c.mns()) {
                    return c.bxc
                }
            }
        } else {
            if (o != null) {
                for (var g = 0, k = l.length; g < k; g++) {
                    var c = l[g];
                    if (o == c.lfv && c.jff() && c.czv() && !c.mns()) {
                        if (c == b || c == p) {
                            return null
                        }
                        return c.bxc
                    }
                }
                if (o == this.parent.zew.nok.dzq && e && e.jff() && e.czv() && !e.mns()) {
                    return this.parent.lwd
                } else {
                    if (o == this.parent.zew.ytg.dzq && d && d.jff() && d.czv() && !d.mns()) {
                        return this.parent.pmf
                    }
                }
            }
        }
        return null
    };
    this.ywy = function () {
        this.rnb = new xes();
        this.rnb.hre();
        this.rnb.nip("displays");
        this.rnb.nip("buttons");
        this.rnb.nip("allbuttons");
        this.rnb.nip("infos");
        this.rnb.nip("start");
        this.rnb.nip("auto");
        this.rnb.nip("collect");
        this.rnb.nip("freespin");
        this.rnb.nip("game");
        this.rnb.nip("settings")
    };
    this.pvn = function (b) {
        var c = this.dij(b.uxc.mvx);
        c.ipo(b.uxc);
        this.rnb.vnv("info", c, ["infos"])
    };
    this.ooo = function (b) {
        var c = this.dij(b.win.mvx);
        c.font = this.parent.nvf;
        c.eua = this.parent.cpo.ewl("s_symb");
        c.szy = this.parent.cpo.ewl("s_symb").height / this.parent.gld.length;
        c.ipo(b.win);
        this.rnb.vnv("win", c, ["infos"])
    };
    this.buz = function (b) {
        var c = new gpl();
        c.hre(b.qzw.mvx, this.context2D, null);
        c.parent = this;
        c.ipo(b.qzw);
        c.cug(false);
        this.rnb.vnv("freeround", c)
    };
    this.vgl = function (c) {
        var b = {};
        if (this.parent.bpn() || (this.parent.zkd && this.parent.dru)) {
            if ((this.parent.xjs() == null || this.parent.xjs().o == false) && this.parent.style.bvr.jyh == true) {
                b = c.lzh
            } else {
                b = c.xeu
            }
        } else {
            if (this.parent.xjs() != null) {
                if (!this.parent.pfl()) {
                    b = c.men
                } else {
                    b = c.cfx
                }
            } else {
                if (pze.spi.value57 === pze.ui.hfy || this.qvb()) {
                    if (!this.parent.pfl()) {
                        b = c.lsh
                    } else {
                        b = c.mwz
                    }
                } else {
                    if (pze.spi.value57 === pze.ui.wfw) {
                        if (!this.parent.pfl()) {
                            b = c.lde
                        } else {
                            b = c.kef
                        }
                    } else {
                        if (pze.spi.value57 === pze.ui.lbb) {
                            if (!this.parent.pfl()) {
                                b = c.lix
                            } else {
                                b = c.nao
                            }
                        }
                    }
                }
            }
        }
        if (this.parent.xjs() != null) {
            if (this.parent.bpn() === true) {
                if (this.parent.xjs().o == true || this.parent.style.bvr.jyh == false) {
                    this.rnb.vnv("start", this.txf(b.eiv, (this.parent.tgq.bmx === false) ? this.parent.language.start : null, (this.parent.tgq.bmx === false) ? "---" : "A", (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_sp"), null, this.kux, (!this.parent.zkd) ? this.parent.zew.start : null, c.ltn), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                } else {
                    this.rnb.vnv("start", this.xso(b.eiv, (this.parent.tgq.bmx === false) ? this.parent.language.start : null, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_sp"), (this.parent.tgq.bmx === false) ? null : this.parent.cpo.ewl("btn_sph"), this.parent.mil, null, c.ogd), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.rnb.vnv("astart", this.txf(b.pkf, null, (this.parent.tgq.bmx === false) ? "---" : "A", this.parent.cpo.ewl("btn_astl"), null, this.parent.qei, null, c.zky), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                }
            } else {
                this.rnb.vnv("start", this.xso(b.eiv, (this.parent.tgq.bmx === false) ? this.parent.language.start : null, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_sp"), null, this.parent.mil, (!this.parent.zkd) ? this.parent.zew.start : null, c.ogd), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.rnb.vnv("astart", this.txf(b.pkf, this.parent.language.dbj, (this.parent.tgq.bmx === false) ? "---" : "A", this.parent.cpo.ewl("btn"), null, this.parent.qei, (!this.parent.zkd) ? this.parent.zew.enf : null, c.ltn), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        } else {
            if (this.parent.bpn() === true) {
                if (this.parent.style.bvr.jyh) {
                    this.rnb.vnv("start", this.xso(b.eiv, (this.parent.tgq.bmx === false) ? this.parent.language.start : null, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_sp"), (this.parent.tgq.bmx === false) ? null : this.parent.cpo.ewl("btn_sph"), this.parent.mil, null, c.ogd), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                    this.rnb.vnv("astart", this.xso(b.pkf, null, this.parent.cpo.ewl("btn_ast"), null, this.parent.qei, null, c.zky), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
                } else {
                    this.rnb.vnv("start", this.xso(b.eiv, (this.parent.tgq.bmx === false) ? this.parent.language.start : null, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_asp"), (this.parent.tgq.bmx === false) ? null : this.parent.cpo.ewl("btn_asph"), this.kux, null, c.ogd), ["buttons", "allbuttons", "start", "collect", "freespin", "game"])
                }
            } else {
                this.rnb.vnv("start", this.xso(b.eiv, (this.parent.tgq.bmx === false) ? this.parent.language.start : null, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_asp"), (this.parent.tgq.bmx === false) ? null : this.parent.cpo.ewl("btn_asph"), this.parent.mil, (!this.parent.zkd) ? this.parent.zew.start : null, c.ogd), ["buttons", "allbuttons", "start", "collect", "freespin", "game"]);
                this.rnb.vnv("astart", this.xso(b.pkf, this.parent.language.enf, (pze.spi.value57 === pze.ui.hfy || this.qvb()) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_s"), null, this.parent.qei, (!this.parent.zkd) ? this.parent.zew.enf : null, c.zky), ["buttons", "allbuttons", "start", "auto", "collect", "freespin", "game"])
            }
        }
        if (this.parent.bpn() === true) {
            this.rnb.vnv("bet", this.aof(b.lki, "+", null, this.parent.gsw, (!this.parent.zkd) ? this.parent.zew.jls : null, c.ilr), ["buttons", "allbuttons"])
        } else {
            this.rnb.vnv("bet", this.xso(b.lki, this.parent.language.nnh, this.parent.cpo.ewl("btn_s"), null, this.parent.gsw, (!this.parent.zkd) ? this.parent.zew.jls : null, c.zky), ["buttons", "allbuttons"])
        }
        this.rnb.sqv("bet").xiq = 300;
        this.rnb.vnv("gamble", this.xso(b.yhx, this.parent.language.eil, this.parent.cpo.ewl("btn_s"), null, this.parent.mof, (!this.parent.zkd) ? this.parent.zew.eil : null, c.zky), ["buttons", "allbuttons", "game", "auto", "collect"]);
        if (this.parent.xjs() != null) {
            if (sessionStorage.sessionValue5 != null) {
                this.rnb.vnv("exit", this.xso(b.dwj, (this.parent.tgq.bmx === true) ? null : (pze.spi.value50.g === true) ? this.parent.language.coi : this.parent.language.qrt, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn_s") : this.parent.cpo.ewl("btn_e"), null, this.parent.qgg, (!this.parent.zkd) ? this.parent.zew.zuh : null, c.zky), ["buttons", "allbuttons", "collect"])
            } else {
                if (this.parent.bpn() === false) {
                    this.rnb.vnv("help", this.xso(b.dwj, (this.parent.tgq.bmx === true) ? null : this.parent.language.pcs, this.parent.cpo.ewl("btn_s"), null, this.parent.ooy, (!this.parent.zkd) ? this.parent.zew.gqi : null, c.zky), ["buttons", "allbuttons"])
                }
            }
        } else {
            if (pze.spi.value57 !== pze.ui.lbb) {
                if (sessionStorage.sessionValue5 != null) {
                    this.rnb.vnv("exit", this.xso(b.dwj, (this.parent.tgq.bmx === true) ? null : (pze.spi.value50.g === true) ? this.parent.language.coi : this.parent.language.qrt, (this.parent.tgq.bmx === false) ? this.parent.cpo.ewl("btn_s") : this.parent.cpo.ewl("btn_e"), null, this.parent.qgg, (!this.parent.zkd) ? this.parent.zew.zuh : null, c.zky), ["buttons", "allbuttons", "collect"])
                } else {
                    if (this.parent.bpn() === false) {
                        this.rnb.vnv("help", this.xso(b.dwj, (this.parent.tgq.bmx === true) ? null : this.parent.language.pcs, this.parent.cpo.ewl("btn_s"), null, this.parent.ooy, (!this.parent.zkd) ? this.parent.zew.gqi : null, c.zky), ["buttons", "allbuttons"])
                    }
                }
            }
            if (pze.spi.value57 !== pze.ui.hfy && !this.qvb() && this.parent.xjs() == null) {
                this.rnb.vnv("lang", this.lcb(b.xpm, this.parent.cbb(sessionStorage.sessionValue1), this.parent.rmr, (!this.parent.zkd) ? this.parent.zew.language : null), ["buttons", "allbuttons"])
            }
        }
        if (this.parent.pfl()) {
            this.rnb.vnv("line", this.xso(b.rya, this.parent.language.vfh, this.parent.cpo.ewl("btn_s"), null, this.parent.uqa, (!this.parent.zkd) ? this.parent.zew.qmy : null, c.zky), ["buttons", "allbuttons"]);
            this.rnb.sqv("line").xiq = 300
        }
        this.rnb.vnv("setting", this.xso(b.opc, null, this.parent.cpo.ewl("btn_m"), null, this.parent.qot, null, c.zky), ["buttons", "settings"])
    };
    this.jhp = function (c) {
        var b = null;
        if (!(this.parent.zkd && this.parent.dru) && this.parent.style.bvr.yft === false) {
            b = this.parent.cpo.ewl("display_effect")
        }
        if (this.parent.bpn() === true) {
            this.rnb.vnv("betpopup", this.tze(c.ide, "", "", null, c.gca), ["displays"]);
            this.rnb.nly("betpopup", "#cug", [false])
        }
        this.rnb.vnv("creditd", this.tze(c.pzb, (this.parent.dez()) ? this.parent.language.tfz : this.parent.language.zlh, this.parent.vxg(this.parent.zlh), b, c.display), ["displays"]);
        this.rnb.vnv("betd", this.tze(c.wxu, this.parent.language.nnh, this.parent.vxg(this.parent.totalBet), b, c.display), ["displays"]);
        this.rnb.vnv("idd", this.tze(c.sqx, null, (this.parent.dez() === true) ? this.parent.language.tfz : " " + ((this.parent.ccc > 0) ? this.parent.ccc : ""), null, c.gkx), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || pze.spi.value49) {
            this.rnb.vnv("timed", this.tze(c.bct, null, "", null, c.gkx), ["displays"])
        }
    };
    this.ceu = function () {
        if (this.xnx == 1) {
            this.wjx(this.xcl)
        } else {
            if (this.xnx == 2) {
                this.qjq(this.xcl)
            } else {
                if (this.xnx == 3) {
                    this.onu(this.xcl)
                } else {
                    if (this.xnx == 4) {
                        this.scs(this.xcl)
                    } else {
                        if (this.xnx == 5) {
                            this.evg(this.xcl)
                        } else {
                            if (this.xnx == 6) {
                                this.qah(this.xcl)
                            } else {
                                if (this.xnx == 7) {
                                    this.ohk(this.xcl)
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.wjx = function (d) {
        var c = this.rnb.yns("allbuttons"),
            e = 0,
            b = 0;
        this.xcl = d;
        this.xnx = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dat(d)
        }
    };
    this.qjq = function (d) {
        var c = this.rnb.yns("allbuttons"),
            f = this.rnb.yns("start"),
            e = 0,
            b = 0;
        this.xcl = d;
        this.xnx = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dat(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].dat(d)
        }
    };
    this.onu = function (d) {
        var c = this.rnb.yns("allbuttons"),
            f = this.rnb.yns("game"),
            e = 0,
            b = 0;
        this.xcl = d;
        this.xnx = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dat(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].dat(d)
        }
    };
    this.scs = function (d) {
        var c = this.rnb.yns("allbuttons"),
            f = (this.nvx === true) ? this.rnb.yns("collect") : this.rnb.yns("game"),
            e = 0,
            b = 0;
        this.xcl = d;
        this.xnx = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].dat(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].dat(d)
        }
    };
    this.ohk = function (d) {
        var b = this.rnb.yns("allbuttons"),
            c = this.rnb.yns("auto");
        i = 0, boc = 0;
        this.xcl = d;
        this.xnx = 7;
        for (i = 0, boc = b.length; i < boc; i++) {
            b[i].dat(false)
        }
        for (i = 0, boc = c.length; i < boc; i++) {
            c[i].dat(d)
        }
    };
    this.evg = function (c) {
        var b = this.rnb.yns("allbuttons"),
            d = this.rnb.yns("freespin");
        i = 0, boc = 0;
        this.xcl = c;
        this.xnx = 5;
        for (i = 0, boc = b.length; i < boc; i++) {
            b[i].dat(false)
        }
        for (i = 0, boc = d.length; i < boc; i++) {
            d[i].dat(c)
        }
    };
    this.qah = function (e) {
        var c = this.rnb.yns("allbuttons"),
            d = this.rnb.yns("settings"),
            f = 0,
            b = 0;
        this.xcl = e;
        this.xnx = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].dat(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].dat(e)
        }
    };
    this.tze = function (c, g, f, e, b) {
        var d = new xzl();
        d.hre(c, this.context2D, null, g, f);
        d.parent = this;
        d.eua = e;
        d.ipo(b);
        return d
    };
    this.xso = function (f, k, j, b, g, d, e) {
        var c = new zzn();
        c.hre(f, this.context2D, null, j, b, k);
        c.parent = this;
        c.bxc = g;
        c.ipo(e);
        if (d) {
            c.lfv = d.dzq
        }
        return c
    };
    this.txf = function (f, k, g, b, l, c, j, e) {
        var d = new zzn();
        d.hre(f, this.context2D, null, b, l, k);
        d.parent = this;
        d.bxc = c;
        d.value = g;
        d.ipo(e);
        if (j) {
            d.lfv = j.dzq
        }
        return d
    };
    this.aof = function (e, j, g, f, c, d) {
        var b = new ztu();
        b.hre(e, this.context2D, null, g, j);
        b.parent = this;
        b.bxc = f;
        b.ipo(d);
        if (c) {
            b.lfv = c.dzq
        }
        return b
    };
    this.lcb = function (d, f, e, c) {
        var b = new rme();
        b.hre(d, this.context2D, null, f, null);
        b.parent = this;
        b.bxc = e;
        if (c) {
            b.lfv = c.dzq
        }
        return b
    };
    this.dij = function (b) {
        var c = new jwu();
        c.hre(b, this.context2D);
        c.parent = this;
        return c
    };
    this.qvb = function () {
        return (this.parent.bal > 0 && this.parent.bco < this.parent.bal)
    };
    this.ywl = function (c, b) {
        var d = this.rnb.sqv("info");
        if (d) {
            d.ybp(b);
            d.hqa(c, b)
        }
    };
    this.stop = function () {
        clearInterval(this.ymj)
    };
    this.bvf = function (b, c, d) {
        this.wqx = b;
        this.pbb = c;
        this.pmj = d
    };
    this.wac = function (m, j, n, f) {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var c = (m != null && j != null && n != null && f != null),
            k = (c === true) ? new rcu(m, j, n, f) : new rcu(this.x, this.y, this.width, this.height),
            o = this.context2D,
            b = this.rnb.ajf();
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
        if (this.wqx != null) {
            if (this.parent.kip === pze.tgq.xtt) {
                o.drawImage(this.wqx, this.x + this.blu.x + this.pbb, this.y + this.blu.y + this.pmj, this.blu.width, this.wqx.height - (this.y + this.blu.y + this.pmj), this.blu.x, this.blu.y, this.blu.width, this.blu.height)
            } else {
                o.drawImage(this.wqx, this.x + this.blu.x + this.pbb, this.y + this.blu.y + this.pmj, this.blu.width, this.blu.height, this.blu.x, this.blu.y, this.blu.width, this.blu.height)
            }
            if (this.hmo && this.hmo.width > 0 && this.hmo.height > 0) {
                o.drawImage(this.wqx, this.x + this.hmo.x + this.pbb, this.y + this.hmo.y + this.pmj, this.hmo.width, this.hmo.height, this.hmo.x, this.hmo.y, this.hmo.width, this.hmo.height)
            }
        }
        if (this.hmo && this.hmo.width > 0 && this.hmo.height > 0 && this.parent.tgq.dri === false) {
            var l = o.createLinearGradient(this.hmo.x, this.hmo.y, this.hmo.x + this.hmo.width, this.hmo.y),
                e = this.parent.cpo.ewl("btn_back");
            l.addColorStop(0.2, this.lmf);
            l.addColorStop(1, this.gwd);
            o.fillStyle = l;
            if (this.parent.kip === pze.tgq.oyu) {
                o.fillRect(this.hmo.x, this.hmo.y, this.hmo.width, this.hmo.height);
                if (e) {
                    o.drawImage(e, this.hmo.x, this.hmo.y, this.hmo.width, this.hmo.height)
                }
            } else {
                if (this.parent.kip === pze.tgq.rwn) {
                    o.save();
                    o.translate(this.hmo.width / 2, this.hmo.height / 2);
                    o.rotate(Math.PI);
                    o.translate(-this.hmo.width / 2, -this.hmo.height / 2);
                    o.fillRect(this.hmo.x, this.hmo.y, this.hmo.width, this.hmo.height);
                    if (e) {
                        o.drawImage(e, this.hmo.x, this.hmo.y, this.hmo.width, this.hmo.height)
                    }
                    o.restore()
                }
            }
        }
        for (var d = 0, g = b.length; d < g; d++) {
            b[d].wac()
        }
        if (this.parent.kns === true && !(this.parent.bpn() === true && this.parent.tgq.dri === false)) {
            this.parent.sdb(o, k)
        }
        o.restore();
        if (this.hea && this.eat) {
            if (c) {
                this.hea.drawImage(this.eat, m, j, n, f, this.x + m, this.y + j, n, f)
            } else {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.kux = function () {
        if (a.parent.enf === true) {
            a.hjj()
        } else {
            a.parent.mil();
            if (a.parent.mzi() === true) {
                a.rnb.nly("start", "#jta", [a.usk]);
                a.vsx = setTimeout(a.hjj, a.usk)
            }
        }
    };
    this.hjj = function () {
        a.parent.qei();
        if (a.parent.enf === true) {
            a.rnb.nly("start", "#jel")
        } else {
            a.rnb.nly("start", "#kbu")
        }
    }
}
azj.prototype = new qdi;

function whp(e, b, a, c, d) {
    this.mvx = {
        x: e.x || 0,
        y: e.y || 0
    };
    this.jcq = b;
    this.oij = 0;
    this.gib = 21;
    this.hfa = a;
    this.jqh = c || 0;
    this.dwt = d || 0;
    this.odg = 100;
    this.qfj = 96;
    this.azy = function () {
        if (this.oij < this.gib) {
            this.oij++
        }
        return (this.oij >= this.gib)
    };
    this.wac = function () {
        a.drawImage(this.jcq, this.oij * this.odg, 0, this.odg, this.qfj, this.mvx.x, this.mvx.y, this.jqh, this.dwt)
    }
}

function dlk() {
    this.zxe = false;
    this.aee = false;
    this.lsf = false;
    this.etd = [];
    this.ume = [];
    this.arp = [];
    this.vad = [];
    this.deo = [];
    this.rsq = 89;
    this.yoa = 400;
    this.vlc = 3;
    this.font = "arial";
    this.lfx = "bold";
    this.rly = true;
    this.iyf = true;
    this.crl = null;
    this.djv = false;
    this.saz = [];
    this.cwt = 0;
    this.kng = false;
    this.gsl = false;
    this.xbx = 0;
    this.coq = 0;
    this.cjm = false;
    this.jra = true;
    this.myi = false;
    this.ryy = false;
    this.gxo = 0;
    this.hoa = 0;
    this.dsd = [];
    this.bwy = false;
    this.juv = 0;
    this.xqs = 0;
    this.udl = 0;
    this.noq = -1;
    this.goo = 0;
    this.xyv = 0;
    this.ain = true;
    this.luo = null;
    this.zyv = [];
    this.lyz = [];
    this.txo = null;
    this.vbh = null;
    this.cxn = 0;
    this.ptf = null;
    this.gxa = null;
    this.pib = null;
    this.pwm = null;
    this.zeo = 0.05;
    this.pjj = 4;
    this.qun = 5;
    this.dvm = 1;
    this.yzh = 0;
    this.bpy = 0;
    this.lfy = 40;
    this.fre = 12;
    this.dpq = 5;
    this.zza = 0;
    this.idu = 100;
    this.vbn = 96;
    this.wqx = null;
    this.pbb = 0;
    this.pmj = 0;
    this.rkv = 0;
    this.riw = new rcu();
    this.lta = [];
    this.oqe = 3;
    this.uoz = 6;
    this.fbd = 0;
    this.enh = new rcu(0, 0, 920, 160);
    this.sso = [0, 515, 405];
    this.oql = 40;
    this.vzc = new rcu(0, 165, 920, 160);
    this.fbm = [0, 330, 420];
    this.vjw = 40;
    this.sco = new rcu(0, 330, 920, 160);
    this.ygz = [0, 440, 415];
    this.tln = 20;
    this.kbn = function () {};
    this.xal = function () {};
    this.apj = function () {};
    this.xsu = function () {};
    this.eni = function () {};
    this.ksw = function () {};
    this.ipo = function (a) {
        try {
            this.pjj = a.lineWidth;
            this.qun = a.gah;
            this.dvm = a.iej;
            this.yzh = a.kox;
            this.bpy = a.szy;
            this.lfy = a.fontSize;
            this.fre = a.sug;
            this.dpq = a.gkt;
            this.idu = a.asz;
            this.vbn = a.npj
        } catch (b) {
            console.error(b)
        }
    };
    this.ybb = function (a) {
        try {
            this.lyz = a.bmh;
            this.cxn = a.isg;
            this.ptf = a.uub;
            this.gxa = a.xwn;
            this.pib = a.urc;
            this.pwm = a.irt;
            this.zeo = a.kbv
        } catch (b) {
            console.error(b)
        }
    };
    this.kfu = function () {
        this.lsf = false;
        this.cug(true)
    };
    this.snh = function () {
        this.lsf = false;
        this.cug(false, true)
    };
    this.bjx = function () {
        return this.djv
    };
    this.qrd = function (d, b) {
        if (d && b) {
            this.saz = b;
            this.luo = [];
            for (var c = 0, a = d.length; c < a; c++) {
                this.luo[c] = d[c]
            }
            if (this.iyf) {
                this.parent.cpo.swx("winline");
                this.parent.cpo.tkq("winline")
            }
        } else {
            this.luo = null
        }
        this.djv = false;
        this.myi = false;
        this.ryy = false;
        this.lsf = true;
        this.cug(true, true)
    };
    this.start = function () {
        this.djv = true;
        this.myi = true;
        this.ryy = false;
        if (!this.kng) {
            this.juv = 0
        } else {
            if (this.juv >= this.udl) {
                this.juv = 0
            }
        }
        this.jra = true;
        this.parent.tbq = false;
        this.gsl = (this.parent.dkp >= (this.parent.rbn - 1));
        if (this.kng && this.iyf) {
            if (!this.parent.dfu && this.parent.xpt) {
                this.parent.cpo.swx("winline");
                this.parent.cpo.tkq("winline")
            }
        }
        this.kbn()
    };
    this.stop = function () {
        this.djv = false;
        this.myi = false;
        this.dnv();
        clearInterval(this.xbx);
        clearTimeout(this.coq);
        clearTimeout(this.parent.ack)
    };
    this.oem = function (d, c, a, f, j, e, b, g) {
        if (this.lsf) {
            this.lsf = false;
            this.parent.wac()
        }
        this.noq = f;
        this.cwt = d;
        this.saz = c;
        this.xyv = j;
        this.goo = e;
        this.ain = a;
        this.kng = g;
        if (b) {
            this.xkx()
        } else {
            this.vbk()
        }
    };
    this.xkx = function () {
        this.bmi();
        this.start()
    };
    this.vbk = function () {
        this.djv = true;
        this.myi = true;
        this.jra = false;
        this.ryy = this.rly;
        this.dnv();
        if (!this.parent.dfu && this.iyf) {
            this.parent.cpo.swx("winline");
            this.parent.cpo.tkq("winline")
        }
        this.wac();
        this.apj()
    };
    this.uin = function () {
        if (this.bwy) {
            this.gxo++;
            if (this.gxo == 6 || this.gxo == 10 || this.gxo == 15 || (this.parent.xbq == 2 && (this.gxo == 48 || this.gxo == 55 || this.gxo == 64))) {
                this.ous()
            }
            for (var a = this.dsd.length - 1; a >= 0; a--) {
                if (this.dsd[a].azy()) {
                    this.dsd.shift()
                }
            }
        }
        if (this.rly) {
            if (this.kng) {
                this.ryy = true
            } else {
                if ((this.juv % 3) == 0) {
                    this.ryy = !this.ryy
                }
            }
        }
        if (((!this.kng || this.gsl) && this.juv < this.udl)) {
            this.parent.wac();
            this.juv++;
            if (this.kng) {
                this.xqs++
            }
        } else {
            if (this.kng && !this.gsl && this.xqs < this.vlc) {
                this.parent.wac();
                this.xqs++;
                this.juv = (this.juv < this.udl) ? this.juv + 1 : 0
            } else {
                this.xqs = 0;
                clearInterval(this.xbx);
                this.wwj()
            }
        }
    };
    this.wwj = function () {
        this.djv = false;
        this.myi = (this.zxe && this.jra);
        if (this.myi == true && this.gsl == true && this.parent.dfu == false && this.parent.enf == true) {
            this.myi = false
        }
        if (!this.kng || this.gsl) {
            if (!(this.aee && this.zxe) && !this.bwy) {
                this.snh()
            }
        }
        this.parent.wac();
        this.parent.yab();
        this.parent.ccu();
        this.parent.seg()
    };
    this.bmi = function () {
        this.udl = 0;
        for (var a = 0; a < this.saz.length; a++) {
            for (var b = 0; b < this.saz[a].length; b++) {
                if (this.saz[a][b] >= 0) {
                    if (this.etd[this.saz[a][b]].gib > this.udl) {
                        this.udl = this.etd[this.saz[a][b]].gib
                    }
                }
            }
        }
    };
    this.uch = function () {
        if (this.jff()) {
            this.dsd = [];
            this.bwy = true;
            this.gxo = 0
        }
    };
    this.wvz = function () {
        this.gxo = 0
    };
    this.dnv = function () {
        this.bwy = false
    };
    this.ous = function () {
        var e = (Math.random() > 0.7) ? 4 : 3,
            d = this.idu * e,
            g = this.vbn * e,
            a = Math.random();
        while (Math.abs(a - this.hoa) < 0.3) {
            a = Math.random()
        }
        this.hoa = a;
        var f = Math.round(a * (this.width - d));
        a = Math.random();
        var c = Math.round(a * (this.height - g));
        var b = new whp({
            x: f,
            y: c
        }, this.parent.cpo.ewl("firework"), this.context2D, d, g);
        this.dsd.push(b)
    };
    this.asr = function (b) {
        this.cjm = true;
        this.juv = 0;
        this.rkv = b;
        if (this.rkv >= this.parent.fee) {
            this.riw = this.enh;
            for (var c = 0, a = this.sso.length; c < a; c++) {
                this.lta[c] = this.sso[c]
            }
            this.parent.cpo.tkq("megawin");
            this.parent.xph(48);
            this.udl = this.oql
        } else {
            if (this.rkv >= this.parent.why) {
                this.riw = this.vzc;
                for (var c = 0, a = this.fbm.length; c < a; c++) {
                    this.lta[c] = this.fbm[c]
                }
                this.parent.cpo.tkq("bigwin");
                this.parent.xph(48);
                this.udl = this.vjw
            } else {
                if (this.rkv >= this.parent.lis) {
                    this.riw = this.sco;
                    for (var c = 0, a = this.ygz.length; c < a; c++) {
                        this.lta[c] = this.ygz[c]
                    }
                    this.parent.cpo.tkq("nicewin");
                    this.parent.xph(24);
                    this.udl = this.tln
                }
            }
        }
        this.udl += (this.lta.length - 1) * this.uoz;
        this.fbd = 0;
        this.parent.fda(true);
        this.eni()
    };
    this.wru = function () {
        this.cjm = false;
        clearInterval(this.xbx);
        if (this.rkv >= this.parent.fee) {
            this.parent.cpo.swx("megawin")
        } else {
            if (this.rkv >= this.parent.why) {
                this.parent.cpo.swx("bigwin")
            } else {
                if (this.rkv >= this.parent.lis) {
                    this.parent.cpo.swx("nicewin")
                }
            }
        }
        this.snh();
        this.parent.fda(false);
        this.parent.dgx()
    };
    this.bvf = function (a, b, c) {
        this.wqx = a;
        this.pbb = b;
        this.pmj = c
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var d = this.context2D;
        d.save();
        d.clearRect(0, 0, this.width, this.height);
        d.lineWidth = this.pjj;
        d.lineCap = "round";
        d.lineJoin = "round";
        if (this.lsf) {
            this.cuu()
        }
        if (this.myi) {
            if (this.djv && this.zxe && this.ain) {
                for (var b = 0; b < this.saz.length; b++) {
                    for (var f = 0; f < this.saz[b].length; f++) {
                        if (this.saz[b][f] != -1) {
                            if (this.jra) {
                                this.xej(b, f)
                            } else {
                                this.kzt(b, f)
                            }
                        }
                    }
                }
                if (this.ain) {
                    this.occ(this.cwt)
                }
                for (var c = this.xyv; c < this.xyv + this.goo; c++) {
                    if (this.noq >= 0 && (this.saz[c][this.deo[this.cwt][c] - 1] == this.noq || this.parent.slb(this.saz[c][this.deo[this.cwt][c] - 1]))) {
                        if (this.jra) {
                            this.xej(c, this.deo[this.cwt][c] - 1)
                        } else {
                            this.kzt(c, this.deo[this.cwt][c] - 1)
                        }
                    }
                }
            } else {
                if (this.djv && this.ain) {
                    this.occ(this.cwt)
                }
                for (var b = 0; b < this.saz.length; b++) {
                    for (var f = 0; f < this.saz[b].length; f++) {
                        if (this.saz[b][f] != -1) {
                            if (this.jra) {
                                this.xej(b, f)
                            } else {
                                this.kzt(b, f)
                            }
                        }
                    }
                }
            }
            if (this.crl) {
                for (var b = 0; b < this.saz.length; b++) {
                    for (var f = 0; f < this.saz[b].length; f++) {
                        if (this.saz[b][f] != -1) {
                            d.drawImage(this.crl, 0, f * this.bpy, this.crl.width, this.bpy, this.arp[b][f].x, this.arp[b][f].y, this.yzh, this.bpy)
                        }
                    }
                }
            }
            if (this.djv) {
                if (this.cwt < 0) {
                    if (this.lyz[this.lyz.length - 2]) {
                        for (var b = 0; b < this.saz.length; b++) {
                            for (var f = 0; f < this.saz[b].length; f++) {
                                if (this.parent.ogm >= 0 && this.saz[b][f] == this.parent.ogm) {
                                    this.ssm(b, f, this.lyz[this.lyz.length - 2])
                                }
                            }
                        }
                    }
                } else {
                    for (var c = this.xyv; c < this.xyv + this.goo; c++) {
                        if (this.noq >= 0 && (this.saz[c][this.deo[this.cwt][c] - 1] == this.noq || this.parent.slb(this.saz[c][this.deo[this.cwt][c] - 1]))) {
                            this.ssm(c, this.deo[this.cwt][c] - 1, this.lyz[this.cwt])
                        }
                    }
                }
            }
            if (this.bwy) {
                for (var e = 0, a = this.dsd.length; e < a; e++) {
                    this.dsd[e].wac()
                }
            }
        } else {
            if (this.cjm) {
                this.jbq()
            }
        }
        d.restore();
        if (this.parent.oyx()) {
            if (this.hea && this.eat) {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.jbq = function () {
        var l = this.context2D,
            f = this.parent.cpo.ewl("wins"),
            b = (this.height / 2 - this.riw.height) / 2,
            g = this.lta[0],
            a = this.juv % this.uoz,
            k = (a < this.oqe) ? Math.floor(this.lta[this.fbd + 1] / this.oqe) * a : this.lta[this.fbd + 1],
            j = (a < this.oqe) ? Math.floor(this.riw.height / this.oqe) * a : this.riw.height,
            c = 1,
            e = 5;
        l.save();
        if (this.juv >= this.udl - e) {
            c = (this.udl - this.juv) * (1 / e)
        }
        l.globalAlpha = c;
        for (var d = 0; d <= this.fbd && d < this.lta.length - 1; d++) {
            if (d == this.lta.length - 2) {
                b += this.height / 2
            }
            if (d == this.fbd) {
                l.drawImage(f, g, this.riw.y, this.lta[d + 1], this.riw.height, ((this.width - this.lta[d + 1]) / 2 + (this.lta[d + 1] - k) / 2), (b + (this.riw.height - j) / 2), k, j)
            } else {
                l.drawImage(f, g, this.riw.y, this.lta[d + 1], this.riw.height, (this.width - this.lta[d + 1]) / 2, b, this.lta[d + 1], this.riw.height)
            }
            g += this.lta[d + 1]
        }
        l.restore()
    };
    this.cuu = function () {
        if (this.luo) {
            this.zyv = [];
            for (var b = 0; b < this.saz.length; b++) {
                for (var d = 0; d < this.saz[b].length; d++) {
                    if (this.saz[b][d] != -1) {
                        this.kzt(b, d);
                        if (this.crl) {
                            this.context2D.drawImage(this.crl, 0, d * this.bpy, this.crl.width, this.bpy, this.arp[b][d].x, this.arp[b][d].y, this.yzh, this.bpy)
                        }
                    }
                }
            }
            for (var c = 0, a = this.luo.length; c < a; c++) {
                this.mzw(this.luo[c])
            }
        } else {
            for (var c = 0; c < this.parent.vfh; c++) {
                this.occ(c)
            }
        }
    };
    this.occ = function (c) {
        var a = this.context2D;
        a.save();
        a.strokeStyle = (this.ryy) ? this.lyz[c].vkl : this.lyz[c].fpl;
        a.lineWidth = this.pjj;
        a.beginPath();
        for (var b = 0; b < this.vad[c].length; b++) {
            if (b == 0) {
                a.moveTo(this.vad[c][b].x, this.vad[c][b].y)
            } else {
                a.lineTo(this.vad[c][b].x, this.vad[c][b].y)
            }
        }
        a.moveTo(this.vad[c][0].x, this.vad[c][0].y);
        a.stroke();
        a.strokeStyle = (this.ryy) ? this.lyz[c].djz : this.lyz[c].csu;
        a.lineWidth = this.pjj - 2 * this.dvm;
        a.stroke();
        a.restore()
    };
    this.mzw = function (d) {
        var a = this.context2D,
            c = null;
        a.save();
        for (var b = 1; b < this.vad[d].length; b++) {
            c = this.vad[d][b - 1].x + "_" + this.vad[d][b - 1].y + "_" + this.vad[d][b].x + "_" + this.vad[d][b].y;
            if (this.zyv.indexOf(c) < 0) {
                this.zyv.push(c);
                a.beginPath();
                a.moveTo(this.vad[d][b - 1].x, this.vad[d][b - 1].y);
                a.lineTo(this.vad[d][b].x, this.vad[d][b].y);
                a.moveTo(this.vad[d][b - 1].x, this.vad[d][b - 1].y);
                a.strokeStyle = (this.ryy) ? this.lyz[this.lyz.length - 1].vkl : this.lyz[this.lyz.length - 1].fpl;
                a.lineWidth = this.pjj;
                a.stroke();
                a.strokeStyle = (this.ryy) ? this.lyz[this.lyz.length - 1].djz : this.lyz[this.lyz.length - 1].csu;
                a.lineWidth = this.pjj - 2 * this.dvm;
                a.stroke()
            }
        }
        a.restore()
    };
    this.xej = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.wqx != null) {
            this.context2D.drawImage(this.wqx, this.arp[a][c].x + this.pbb, this.arp[a][c].y + this.pmj, this.yzh, this.bpy, this.arp[a][c].x, this.arp[a][c].y, this.yzh, this.bpy)
        }
        if (this.etd[this.saz[a][c]].gib <= this.juv) {
            b.drawImage(this.etd[this.saz[a][c]].jcq, (this.etd[this.saz[a][c]].gib - 1) * this.etd[this.saz[a][c]].zdu, 0, this.etd[this.saz[a][c]].zdu, this.etd[this.saz[a][c]].pdl, this.arp[a][c].x + (this.yzh - this.etd[this.saz[a][c]].zdu) / 2, this.arp[a][c].y + (this.bpy - this.etd[this.saz[a][c]].pdl) / 2, this.etd[this.saz[a][c]].zdu, this.etd[this.saz[a][c]].pdl)
        } else {
            b.drawImage(this.etd[this.saz[a][c]].jcq, this.juv * this.etd[this.saz[a][c]].zdu, 0, this.etd[this.saz[a][c]].zdu, this.etd[this.saz[a][c]].pdl, this.arp[a][c].x + (this.yzh - this.etd[this.saz[a][c]].zdu) / 2, this.arp[a][c].y + (this.bpy - this.etd[this.saz[a][c]].pdl) / 2, this.etd[this.saz[a][c]].zdu, this.etd[this.saz[a][c]].pdl)
        }
        b.restore()
    };
    this.kzt = function (a, c) {
        var b = this.context2D;
        b.save();
        if (this.wqx != null) {
            this.context2D.drawImage(this.wqx, this.arp[a][c].x + this.pbb, this.arp[a][c].y + this.pmj, this.yzh, this.bpy, this.arp[a][c].x, this.arp[a][c].y, this.yzh, this.bpy)
        }
        b.drawImage(this.ume[this.saz[a][c]], this.arp[a][c].x + (this.yzh - this.ume[this.saz[a][c]].width) / 2, this.arp[a][c].y + (this.bpy - this.ume[this.saz[a][c]].height) / 2);
        b.restore()
    };
    this.ssm = function (a, d, c) {
        var b = this.context2D;
        b.save();
        if (c) {
            b.lineWidth = this.qun;
            b.strokeStyle = (this.ryy) ? c.vkl : c.fpl;
            b.strokeRect(this.arp[a][d].x + this.qun / 2, this.arp[a][d].y + this.qun / 2, this.yzh - this.qun, this.bpy - this.qun);
            b.strokeStyle = (this.ryy) ? c.djz : c.csu;
            b.lineWidth = this.qun - 2 * this.dvm;
            b.strokeRect(this.arp[a][d].x + this.qun / 2, this.arp[a][d].y + this.qun / 2, this.yzh - this.qun, this.bpy - this.qun)
        }
        b.restore()
    }
}
dlk.prototype = new qdi;

function tlo() {
    var a = this;
    this.kbn = function () {
        this.xal();
        this.xbx = setInterval(a.xal, a.rsq)
    };
    this.xal = function () {
        a.uin()
    };
    this.apj = function () {
        this.coq = setTimeout(a.xsu, a.yoa)
    };
    this.xsu = function () {
        a.wwj()
    };
    this.eni = function () {
        this.xbx = setInterval(this.ksw, 60)
    };
    this.ksw = function () {
        if (a.juv < a.udl) {
            a.juv++;
            if ((a.juv % (a.uoz)) == 0) {
                a.fbd++
            }
            a.parent.wac()
        } else {
            a.wru()
        }
    }
}
tlo.prototype = new dlk;

function tkh() {
    var a = this;
    this.lwa = 0;
    this.apq = 1;
    this.oli = 7;
    this.jmg = 0;
    this.fwm = 0;
    this.sti = 0;
    this.ado = 0;
    this.hzs = this.lwa;
    this.bfe = this.sgx;
    this.brk = function () {
        this.cug(true);
        this.ejq = true;
        this.xcl = false;
        this.hzs = this.lwa;
        this.fwm = Math.floor(this.width / this.oli);
        this.ado = 0;
        this.sti = 0
    };
    this.tfb = function () {
        this.ejq = true;
        this.xcl = false;
        this.hzs = this.apq;
        this.fwm = -Math.floor(this.width / this.oli);
        this.ado = 1;
        this.sti = this.width
    };
    this.nkj = function () {
        if (a.ado < a.oli) {
            a.sti += a.fwm;
            a.ado++;
            return true
        } else {
            a.ejq = false;
            a.xcl = true;
            if (a.hzs == a.apq) {
                a.cug(false)
            }
            return false
        }
    };
    this.tkq = function () {
        if (this.jkw == this.pnu) {
            this.parent.cpo.tkq("maxstep")
        } else {
            this.parent.cpo.tkq("step" + (this.jkw % 12))
        }
    };
    this.zpd = function (b, d) {
        var c = false;
        this.jkw = b;
        if (this.jkw < this.dyl) {
            c = true;
            this.jkw = this.dyl
        }
        if (this.jkw >= this.pnu) {
            c = true;
            this.jkw = this.pnu
        }
        this.xrl = this.jkw + 1;
        if (c) {
            this.bxc(this.jkw)
        }
        if (d && d === true) {
            this.parent.wac()
        }
    };
    this.mhy = function () {
        a.heo = false
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        this.oan();
        if (this.hea && this.eat) {
            if (this.ejq) {
                if (this.sti > 0) {
                    if (this.bfe === this.jnt) {
                        this.hea.drawImage(this.eat, this.width - this.sti, 0, this.sti, this.height, this.x, this.y, this.sti, this.height)
                    } else {
                        if (this.bfe === this.sgx) {
                            this.hea.drawImage(this.eat, 0, 0, this.sti, this.height, this.x + this.width - this.sti, this.y, this.sti, this.height)
                        }
                    }
                }
            } else {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.und = function (c) {
        var f = this.mrg,
            e = this.mrg,
            b = 0,
            d = 0;
        if (this.bfe === this.sgx) {
            b = this.eln;
            d = this.bgb.x - 2 * this.eln
        } else {
            if (this.bfe === this.jnt) {
                b = this.bgb.x + this.bgb.width + this.eln;
                d = this.width - this.eln - (this.bgb.x + this.bgb.width + this.eln)
            }
        }
        if (this.jkw > 0 && this.jkw < this.zfw.length - 1) {
            pze.sog.ssm(c, b, this.bgb.y + ((this.hce - this.xrl) * this.ofp), d, this.ofp, this.axd, this.dxz);
            pze.sog.gwf(c, this.parent.fcy(this.zfw[this.jkw]), this.vbh, b, this.bgb.y + ((this.hce - this.xrl) * this.ofp) + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln)
        } else {
            if (this.jkw == 0) {
                f = this.vbh
            } else {
                if (this.jkw == this.zfw.length - 1) {
                    e = this.vbh
                }
            }
        }
        pze.sog.ssm(c, b, this.bgb.y + (this.ofp * (this.hce - 1)), d, this.ofp, this.axd, this.dxz);
        pze.sog.gwf(c, this.parent.fcy(this.zfw[0]), f, b, this.bgb.y + (this.ofp * (this.hce - 1)) + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln);
        pze.sog.ssm(c, b, this.bgb.y, d, this.ofp, this.axd, this.dxz);
        pze.sog.gwf(c, this.parent.fcy(this.zfw[this.zfw.length - 1]), e, b, this.bgb.y + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln);
        pze.sog.ylo(c, "+", this.mrg, this.bur.x, this.bur.y, this.bur.width, this.bur.height, this.mki, this.lfy, this.shp);
        pze.sog.ylo(c, "", this.mrg, this.lmt.x, this.lmt.y, this.lmt.width, this.lmt.height, this.mki, this.lfy, this.shp);
        if (this.rbq) {
            pze.sog.ylo(c, this.rbq, this.mrg, this.zcy.x, this.zcy.y, this.zcy.width, this.zcy.height, this.mki, this.lfy, this.shp)
        }
    }
}
tkh.prototype = new gae;

function fzh() {
    var a = this;
    this.lwa = 0;
    this.apq = 1;
    this.oli = 7;
    this.jmg = 0;
    this.fwm = 0;
    this.sti = 0;
    this.ado = 0;
    this.hzs = this.lwa;
    this.brk = function () {
        this.cug(true);
        this.ejq = true;
        this.xcl = false;
        this.hzs = this.lwa;
        this.fwm = Math.floor(this.width / this.oli);
        this.ado = 0;
        this.sti = 0
    };
    this.tfb = function () {
        this.ejq = true;
        this.xcl = false;
        this.hzs = this.apq;
        this.fwm = -Math.floor(this.width / this.oli);
        this.ado = 1;
        this.sti = this.width
    };
    this.nkj = function () {
        if (a.ado < a.oli) {
            a.sti += a.fwm;
            a.ado++;
            return true
        } else {
            a.ejq = false;
            a.xcl = true;
            if (a.hzs == a.apq) {
                a.cug(false)
            }
            return false
        }
    };
    this.tkq = function () {
        if (this.jkw == this.pnu) {
            this.parent.cpo.tkq("maxstep")
        } else {
            this.parent.cpo.tkq("step" + (this.jkw % 12))
        }
    };
    this.mhy = function () {
        a.heo = false
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        this.oan();
        if (this.hea && this.eat) {
            if (this.ejq) {
                if (this.sti > 0) {
                    if (this.bfe === this.jnt) {
                        this.hea.drawImage(this.eat, this.width - this.sti, 0, this.sti, this.height, this.x, this.y, this.sti, this.height)
                    } else {
                        if (this.bfe === this.sgx) {
                            this.hea.drawImage(this.eat, 0, 0, this.sti, this.height, this.x + this.width - this.sti, this.y, this.sti, this.height)
                        }
                    }
                }
            } else {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.und = function (c) {
        var f = this.mrg,
            e = this.mrg,
            b = 0,
            d = 0;
        if (this.bfe === this.sgx) {
            b = this.eln;
            d = this.bgb.x - 2 * this.eln
        } else {
            if (this.bfe === this.jnt) {
                b = this.bgb.x + this.bgb.width + this.eln;
                d = this.width - this.eln - (this.bgb.x + this.bgb.width + this.eln)
            }
        }
        if (this.jkw > 0 && this.jkw < this.zfw.length - 1) {
            pze.sog.ssm(c, b, this.bgb.y + ((this.hce - this.xrl) * this.ofp), d, this.ofp, this.axd, this.dxz);
            pze.sog.rig(c, this.zfw[this.jkw], this.vbh, b, this.bgb.y + ((this.hce - this.xrl) * this.ofp) + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln)
        } else {
            if (this.jkw == 0) {
                f = this.vbh
            } else {
                if (this.jkw == this.zfw.length - 1) {
                    e = this.vbh
                }
            }
        }
        pze.sog.ssm(c, b, this.bgb.y + (this.ofp * (this.hce - 1)), d, this.ofp, this.axd, this.dxz);
        pze.sog.rig(c, this.zfw[0], f, b, this.bgb.y + (this.ofp * (this.hce - 1)) + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln);
        pze.sog.ssm(c, b, this.bgb.y, d, this.ofp, this.axd, this.dxz);
        pze.sog.rig(c, this.zfw[this.zfw.length - 1], e, b, this.bgb.y + (this.ofp - this.lfy) / 2, d, this.lfy, this.mki, this.lfy, this.shp, this.eln);
        pze.sog.ylo(c, "+", this.mrg, this.bur.x, this.bur.y, this.bur.width, this.bur.height, this.mki, this.lfy, this.shp);
        pze.sog.ylo(c, "", this.mrg, this.lmt.x, this.lmt.y, this.lmt.width, this.lmt.height, this.mki, this.lfy, this.shp);
        if (this.rbq) {
            pze.sog.ylo(c, this.rbq, this.mrg, this.zcy.x, this.zcy.y, this.zcy.width, this.zcy.height, this.mki, this.lfy, this.shp)
        }
    }
}
fzh.prototype = new gae;

function kea() {
    this.eua = new Image();
    this.rpa = [];
    this.vhu = 0;
    this.euc = 0;
    this.pbt = [];
    this.shg = 0;
    this.aje = 0;
    this.tnt = 0;
    this.mtd = [];
    this.wqx = null;
    this.pbb = 0;
    this.pmj = 0;
    this.ipo = function (a) {
        try {
            this.mtd = a.rya;
            this.aje = a.odg;
            this.tnt = a.qfj
        } catch (b) {
            console.error(b)
        }
    };
    this.tzk = function (b, f, c) {
        var e = this.parent.ury.rnb.sqv("line"),
            a = this.parent.vvh.sqv("betsel"),
            d = this.parent.vvh.sqv("linesel");
        if (b >= this.x && b <= this.x + this.width && f >= this.y && f <= this.y + this.height && this.jff() === true) {
            if (e && e.czv() && !e.mns()) {
                if (!c) {
                    this.parent.cpo.swx("panel");
                    this.parent.cpo.tkq("panel");
                    if ((a && a.czv()) && ((d && d.czv()) || !d)) {
                        this.parent.vwt()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.wac = function () {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var c = this.context2D,
            e = false;
        if (this.wqx != null) {
            c.drawImage(this.wqx, this.x + this.pbb, this.y + this.pmj, this.width, this.height, this.x, this.y, this.width, this.height)
        }
        if (this.pbt.length > 0) {
            for (var f = this.vhu - 1, d = 0; f <= this.euc - 1; f++, d++) {
                e = false;
                for (var b = 0, a = this.pbt.length; b < a; b++) {
                    if (this.rpa[f] === this.pbt[b]) {
                        e = true;
                        c.drawImage(this.eua, 0, this.eua.height / 2 + (this.rpa[f] - 1) * this.tnt, this.aje, this.tnt, this.x, this.y + this.mtd[d], this.aje, this.tnt)
                    }
                }
                if (e === false) {
                    c.drawImage(this.eua, 0, (this.rpa[f] - 1) * this.tnt, this.aje, this.tnt, this.x, this.y + this.mtd[d], this.aje, this.tnt)
                }
            }
        } else {
            for (var f = this.vhu - 1, d = 0; f <= this.euc - 1; f++, d++) {
                if (this.rpa[f] <= this.shg) {
                    c.drawImage(this.eua, 0, this.eua.height / 2 + (this.rpa[f] - 1) * this.tnt, this.aje, this.tnt, this.x, this.y + this.mtd[d], this.aje, this.tnt)
                } else {
                    c.drawImage(this.eua, 0, (this.rpa[f] - 1) * this.tnt, this.aje, this.tnt, this.x, this.y + this.mtd[d], this.aje, this.tnt)
                }
            }
        }
    };
    this.xap = function (a, b) {
        this.shg = a;
        if (b && b === true) {
            this.wac()
        }
    };
    this.dnn = function (b, d) {
        this.pbt = [];
        if (b) {
            for (var c = 0, a = b.length; c < a; c++) {
                this.pbt[c] = b[c]
            }
        }
        if (d && d === true) {
            this.wac()
        }
    };
    this.czh = function (a) {
        this.eua = a;
        this.width = this.aje;
        this.height = this.mtd[this.mtd.length - 1] + this.tnt;
        this.sod(new rcu(this.x, this.y, this.width, this.height))
    };
    this.bvf = function (a, b, c) {
        this.wqx = a;
        this.pbb = b;
        this.pmj = c
    }
}
kea.prototype = new qdi;

function xmt(g, c, f, e, j, a, d, b) {
    this.cay = g;
    this.qtl = f;
    this.yfb = e;
    this.hdo = j;
    this.nqk = c;
    this.irz = a;
    this.rwh = d;
    this.nuy = b;
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
    this.yuc = [];
    this.efl = [];
    this.dcl = [];
    this.cyx = [];
    this.ouq = [];
    this.zxu = [];
    this.qcn = 5;
    this.rnn = [];
    this.qqk = [];
    this.pwk = [];
    this.emw = [];
    this.qav = [];
    this.exv = [];
    this.zgp = [];
    this.svv = [];
    this.pol = [];
    this.hzm = [];
    this.xcz = [];
    this.cvr = [];
    this.zom = [];
    this.xqd = [];
    this.jij = [];
    this.mrp = [];
    this.flk = [];
    this.kac = [];
    this.eys = [];
    this.bkc = [];
    this.ccc = 0;
    this.zlh = 0;
    this.win = 0;
    this.afb = 0;
    this.wgx = 0;
    this.cmd = 0;
    this.vfh = 0;
    this.txr = 0;
    this.kco = 0;
    this.msy = 0;
    this.xzt = 1;
    this.rmh = 1;
    this.jpq = 0;
    this.tuq = 0;
    this.dgb = 0;
    this.hdn = 0;
    this.pgz = 0;
    this.zmo = 1;
    this.ijr = 1;
    this.iwv = 0;
    this.bco = 0;
    this.bal = 0;
    this.gls = 0;
    this.pjz = "";
    this.cei = "";
    this.gab = "";
    this.ocj = "";
    this.nxh = 0;
    this.ein = function (k) {
        return this.jna(k)
    };
    this.zhl = function (o) {
        if (o != null) {
            this.smh = 0;
            this.ikl = this.eco(o);
            if (this.ikl == 0) {
                this.rl = this.eco(o);
                this.r1 = this.ein(o);
                this.r2 = this.ein(o);
                this.r3 = this.ein(o);
                if (this.rl >= 4) {
                    this.r4 = this.ein(o)
                }
                if (this.rl >= 5) {
                    this.r5 = this.ein(o)
                }
                if (this.rl >= 6) {
                    this.r6 = this.ein(o)
                }
                if (this.rl >= 7) {
                    this.r7 = this.ein(o)
                }
                if (this.rl >= 8) {
                    this.r8 = this.ein(o)
                }
                if (this.rl >= 9) {
                    this.r9 = this.ein(o)
                }
                if (this.rl >= 10) {
                    this.yuc = this.ein(o)
                }
                if (this.rl >= 11) {
                    this.efl = this.ein(o)
                }
                if (this.rl >= 12) {
                    this.dcl = this.ein(o)
                }
                if (this.rl >= 13) {
                    this.cyx = this.ein(o)
                }
                if (this.rl >= 14) {
                    this.ouq = this.ein(o)
                }
                if (this.rl >= 15) {
                    this.zxu = this.ein(o)
                }
                this.qcn = this.eco(o);
                if (this.qcn > 0) {
                    this.rnn = this.ein(o);
                    this.qqk = this.ein(o);
                    this.pwk = this.ein(o);
                    if (this.qcn >= 4) {
                        this.emw = this.ein(o)
                    }
                    if (this.qcn >= 5) {
                        this.qav = this.ein(o)
                    }
                    if (this.qcn >= 6) {
                        this.exv = this.ein(o)
                    }
                    if (this.qcn >= 7) {
                        this.zgp = this.ein(o)
                    }
                    if (this.qcn >= 8) {
                        this.svv = this.ein(o)
                    }
                    if (this.qcn >= 9) {
                        this.pol = this.ein(o)
                    }
                    if (this.qcn >= 10) {
                        this.hzm = this.ein(o)
                    }
                    if (this.qcn >= 11) {
                        this.xcz = this.ein(o)
                    }
                    if (this.qcn >= 12) {
                        this.cvr = this.ein(o)
                    }
                    if (this.qcn >= 13) {
                        this.zom = this.ein(o)
                    }
                    if (this.qcn >= 14) {
                        this.xqd = this.ein(o)
                    }
                    if (this.qcn >= 15) {
                        this.jij = this.ein(o)
                    }
                }
                this.shl = this.eqv(o);
                this.vcr = this.eco(o);
                for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                    this.mrp[l] = this.wri(o)
                }
                this.ccc = this.wri(o);
                this.zlh = this.wri(o);
                this.win = this.wri(o);
                this.cmd = this.eqv(o);
                this.afb = this.wri(o);
                this.wgx = this.wri(o);
                this.vfh = this.eqv(o);
                this.txr = this.wri(o);
                this.kco = this.wri(o);
                this.msy = this.wri(o);
                this.xzt = this.wri(o);
                this.rmh = this.wri(o);
                this.jpq = this.wri(o);
                this.tuq = this.wri(o);
                this.dgb = this.eqv(o);
                this.hdn = this.eqv(o);
                this.pgz = this.eqv(o);
                this.zmo = this.wri(o);
                this.ijr = this.eqv(o);
                
           
                
                for (var l = 0, k = (this.qcn < 5) ? 5 : this.qcn; l < k; l++) {
                    this.flk[l] = this.wri(o)
                }
                for (var l = 0; l < 8; l++) {
                    this.kac[l] = this.eqv(o)
                }
                var p = this.eqv(o);
                for (var l = 0; l < p; l++) {
                    this.eys[l] = this.wri(o)
                }
                var n = this.eqv(o);
                for (var l = 0; l < n; l++) {
                    this.bkc[l] = this.wri(o)
                }
                this.kzn(o);
                if (this.shl == 0) {
                    this.ypz("A/u250")
                } else {
                    this.cgd.uvt()
                }
            } else {
                if (this.ikl == 1) {
                    this.shl = this.eqv(o);
                    this.vcr = this.eco(o);
                    this.ccc = this.wri(o);
                    this.zlh = this.wri(o);
                    this.win = this.wri(o);
                    for (var l = 0, k = (this.rl < 5) ? 5 : this.rl; l < k; l++) {
                        this.mrp[l] = this.wri(o)
                    }
                    this.cmd = this.eqv(o);
                    this.vfh = this.eqv(o);
                    this.txr = this.wri(o);
                    this.kco = this.wri(o);
                    this.msy = this.wri(o);
                    this.xzt = this.wri(o);
                    this.rmh = this.wri(o);
                    this.jpq = this.wri(o);
                    for (var l = 0, k = (this.qcn < 5) ? 5 : this.qcn; l < k; l++) {
                        this.flk[l] = this.wri(o)
                    }
                    var n = this.eqv(o);
                    for (var l = 0; l < n; l++) {
                        this.bkc[l] = this.wri(o)
                    }
                    for (var l = 0; l < 8; l++) {
                        this.kac[l] = this.eqv(o)
                    }
                    this.kzn(o);
                    if (this.vcr == 0) {
                        if (this.shl == pze.wtf.dwi.dwk) {
                            this.cgd.uvt()
                        } else {
                            if (this.shl == pze.wtf.dwi.sth) {
                                this.cgd.aey()
                            } else {
                                if (this.shl == pze.wtf.dwi.vvs) {
                                    this.cgd.ovg()
                                } else {
                                    if (this.shl == pze.wtf.dwi.hfe) {
                                        this.cgd.dxq()
                                    } else {
                                        if (this.shl == pze.wtf.dwi.xdv) {
                                            this.cgd.xpp()
                                        } else {
                                            if (this.shl == pze.wtf.dwi.kjm) {
                                                this.cgd.hqb()
                                            } else {
                                                if (this.shl == pze.wtf.dwi.gdd) {
                                                    this.cgd.mqd()
                                                } else {
                                                    if (this.shl == pze.wtf.dwi.lbz) {
                                                        this.cgd.lqs()
                                                    } else {
                                                        if (this.shl == pze.wtf.dwi.qbz) {
                                                            this.cgd.zgm()
                                                        } else {
                                                            if (this.shl == pze.wtf.dwi.huh) {
                                                                this.cgd.nbu()
                                                            } else {
                                                                if (this.shl == pze.wtf.dwi.vqb) {
                                                                    this.cgd.mjb()
                                                                } else {
                                                                    if (this.shl == pze.wtf.dwi.ugl) {
                                                                        this.cgd.klo()
                                                                    } else {
                                                                        if (this.shl == pze.wtf.dwi.apt) {
                                                                            this.cgd.euw()
                                                                        } else {
                                                                            this.fqm()
                                                                        }
                                                                    }
                                                                }
                                                            }
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
                        this.cgd.lxp(this.vcr)
                    }
                } else {
                    if (this.ikl == 2) {} else {
                        if (this.ikl == 3) {
                            this.zlh = this.wri(o);
                            this.cgd.jaw()
                        } else {
                            if (this.ikl === 6 || this.ikl === 7) {
                                this.lmh(o.substring(this.smh))
                            } else {
                                if (this.ikl === 8) {
                                    this.ypz("8")
                                } else {
                                    if (this.ikl == 9) {
                                        this.cgd.fqv.nta = o.substring(this.smh)
                                    } else {
                                        if (this.ikl == 10) {
                                            var m = JSON.parse(o.substring(this.smh)).Message;
                                            for (var l = 0, k = m.length; l < k; l++) {
                                                if (m[l].DisplayType == pze.hwp.xpa.dhc) {
                                                    this.vmf.push(m[l])
                                                }
                                            }
                                            if (this.vmf.length > 0) {
                                                this.cgd.mbu()
                                            }
                                        } else {
                                            this.rcc = this.eco(o);
                                            this.cgd.jyn(o.substring(2))
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
    this.kzn = function (t) {
        var l = null,
            n = [],
            q = null,
            v = null,
            o = null,
            m = null,
            p = null,
            k = null;
        if (this.ikl == 0) {
            l = this.erw(t);
            if (l != "") {
                n = l.split("#");
                if (n.length >= 1) {
                    q = n[0].split("|");
                    this.cei = q[0];
                    if (q.length > 1) {
                        this.gab = q[1];
                        if (q.length > 2) {
                            this.ocj = q[2]
                        }
                    }
                    if (n.length >= 2) {
                        v = n[1].split("|");
                        if (v.length >= 1) {
                            m = v[0];
                            this.smh = 0;
                            this.iwv = this.eqv(m);
                            this.bco = this.wri(m);
                            this.bal = this.wri(m);
                            this.gls = this.wri(m);
                            this.pjz = this.erw(m);
                            if (v.length >= 2) {
                                k = v[1];
                                if (k) {
                                    this.nxh = parseFloat(k)
                                }
                            }
                        }
                    }
                }
            }
            if (pze.spi.value21.e === true && pze.spi.value21.s) {
                if (this.nxh == 0) {
                    this.cei = ""
                } else {
                    if (this.nxh != 0 && pze.spi.value21.m == 1) {
                        this.cei = ""
                    }
                }
            }
        } else {
            l = this.erw(t);
            if (l != "") {
                n = l.split("#");
                if (n.length > 1) {
                    m = n[1];
                    o = n[1].split("|{");
                    m = o[0];
                    if (m) {
                        this.smh = 0;
                        this.bco = this.wri(m);
                        this.bal = this.wri(m);
                        this.gls = this.wri(m)
                    }
                    if (o.length > 1) {
                        p = "{" + o[1];
                        var r = JSON.parse(p).Message;
                        this.zjk.length = 0;
                        this.rmk.length = 0;
                        for (var s = 0, u = r.length; s < u; s++) {
                            if (r[s].DisplayType == pze.hwp.xpa.hsh) {
                                this.rmk.push(r[s])
                            } else {
                                if (r[s].DisplayType == pze.hwp.xpa.dhc) {
                                    this.zjk.push(r[s])
                                }
                            }
                        }
                    }
                    if (this.rmk.length > 0) {
                        this.cgd.rbd()
                    }
                }
            }
        }
    };
    this.fqm = function () {};
    this.play = function (l, k, m) {
        this.ypz("A/u251," + l + "," + k + "," + m)
    };
    this.vit = function () {
        this.ypz("A/u254")
    };
    this.ikd = function () {
        this.ypz("A/u258")
    };
    this.eil = function (k) {
        this.ypz("A/u257," + k)
    };
    this.loz = function (l, k, m) {
        this.ypz("A/u256," + l + "," + k + "," + m)
    }
}
xmt.prototype = new jro;

function hig() {
    this.hre = function (a, b) {
        this.cay = b;
        this.fqv = a;
        return this
    };
    this.connect = function (c, f, e, g, a, d, b) {
        this.qtl = f;
        this.yfb = e;
        this.hdo = g;
        this.nqk = c;
        this.rwh = d;
        this.nuy = b;
        this.suc = new xmt(this.cay, c, f, e, g, a, d, b);
        this.suc.hre(this)
    };
    this.play = function (b, a, c) {
        this.suc.play(b, a, c)
    };
    this.loz = function (b, a, c) {
        this.suc.loz(b, a, c)
    };
    this.vit = function () {
        this.suc.vit()
    };
    this.ikd = function () {
        this.suc.ikd()
    };
    this.eil = function (a) {
        this.suc.eil(a)
    };
    this.uvt = function () {
        var c = this.suc.shl;
        this.fqv.r1 = this.suc.r1;
        this.fqv.r2 = this.suc.r2;
        this.fqv.r3 = this.suc.r3;
        this.fqv.r4 = this.suc.r4;
        this.fqv.r5 = this.suc.r5;
        this.fqv.r6 = this.suc.r6;
        this.fqv.r7 = this.suc.r7;
        this.fqv.r8 = this.suc.r8;
        this.fqv.r9 = this.suc.r9;
        this.fqv.yuc = this.suc.yuc;
        this.fqv.efl = this.suc.efl;
        this.fqv.dcl = this.suc.dcl;
        this.fqv.cyx = this.suc.cyx;
        this.fqv.ouq = this.suc.ouq;
        this.fqv.zxu = this.suc.zxu;
        if (c == pze.wtf.dwi.xdv || c == pze.wtf.dwi.kjm || c == pze.wtf.dwi.gdd || c == pze.wtf.dwi.lbz || c == pze.wtf.dwi.qbz) {
            this.fqv.r1 = this.suc.rnn;
            this.fqv.r2 = this.suc.qqk;
            this.fqv.r3 = this.suc.pwk;
            this.fqv.r4 = this.suc.emw;
            this.fqv.r5 = this.suc.qav;
            this.fqv.r6 = this.suc.exv;
            this.fqv.r7 = this.suc.zgp;
            this.fqv.r8 = this.suc.svv;
            this.fqv.r9 = this.suc.pol;
            this.fqv.yuc = this.suc.hzm;
            this.fqv.efl = this.suc.xcz;
            this.fqv.dcl = this.suc.cvr;
            this.fqv.cyx = this.suc.zom;
            this.fqv.ouq = this.suc.xqd;
            this.fqv.zxu = this.suc.jij
        }
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.afb = this.suc.afb;
        this.fqv.wgx = this.suc.wgx;
        this.fqv.hdn = this.suc.hdn;
        this.fqv.pgz = this.suc.pgz;
        if (this.tkr()) {
            for (var b = 0, a = this.suc.eys.length; b < a && this.suc.eys[b] <= this.suc.wgx; b++) {
                this.fqv.eys[b] = this.suc.eys[b]
            }
        } else {
            for (var b = 0, a = this.suc.eys.length; b < a && this.suc.eys[b] * this.suc.dgb <= this.suc.wgx; b++) {
                this.fqv.eys[b] = this.suc.eys[b]
            }
        }
        if (c == pze.wtf.dwi.dwk || ((c == pze.wtf.dwi.sth || c == pze.wtf.dwi.vqb) && this.suc.win == 0) || c == pze.wtf.dwi.vvs || c == pze.wtf.dwi.huh || c == pze.wtf.dwi.qbz) {
            this.fqv.kbj = true
        } else {
            this.fqv.kbj = false
        }
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.agy = this.fqv.eys[this.fqv.jns];
        this.fqv.win = this.suc.win;
        for (var b = 0; b < this.suc.bkc.length; b++) {
            this.fqv.olo[b] = this.suc.bkc[b]
        }
        this.fqv.pvv = this.suc.flk;
        this.fqv.msy = this.suc.msy;
        this.fqv.jpq = this.suc.jpq;
        this.fqv.kco = this.suc.kco;
        this.fqv.txr = this.suc.txr;
        this.fqv.iik = this.suc.txr;
        this.fqv.xzt = this.suc.xzt;
        this.lwt();
        this.fqv.rpc();
        this.fqv.gjg(c, this.suc.kac, this.suc.ccc)
    };
    this.aey = function () {
        this.fqv.ahs({
            type: "roundStarted",
            sender: this.fqv.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.fqv.fcy(this.fqv.zlh)
            }
        });
        this.fqv.state = this.suc.shl;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        if (this.fqv.hch && this.fqv.win > 0) {
            this.fqv.hch.rnb.nly("history", "#ucx", [this.suc.kac])
        }
        this.fqv.pei = false;
        this.lwt();
        this.fqv.vvz();
        this.fqv.rom(this.suc.ccc)
    };
    this.ovg = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.zlh = this.suc.zlh;
        this.tid = false;
        this.lwt();
        this.fqv.tbc();
        this.fqv.rom(this.suc.ccc)
    };
    this.nbu = function () {
        this.fqv.ahs({
            type: "roundStarted",
            sender: this.fqv.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.fqv.fcy(this.fqv.zlh)
            }
        });
        this.fqv.state = this.suc.shl;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        this.fqv.pei = false;
        if (this.fqv.hch && this.fqv.win > 0) {
            this.fqv.hch.ucx(this.suc.kac[0], this.suc.kac, true)
        }
        this.lwt();
        this.fqv.ced();
        this.fqv.rom(this.suc.ccc)
    };
    this.mjb = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.win = this.suc.win;
        if (this.fqv.hch) {
            this.fqv.hch.ucx(this.suc.kac[0], this.suc.kac, false)
        }
        this.fqv.ahb();
        this.fqv.rom(this.suc.ccc)
    };
    this.klo = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.win = this.suc.win;
        this.fqv.yre();
        this.fqv.rom(this.suc.ccc)
    };
    this.dxq = function () {
        this.fqv.ahs({
            type: "roundStarted",
            sender: this.fqv.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                balanceBefore: this.fqv.fcy(this.fqv.zlh)
            }
        });
        this.fqv.state = this.suc.shl;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        this.fqv.pei = (this.suc.txr > this.fqv.txr);
        this.fqv.msy = this.suc.msy;
        this.fqv.jpq = this.suc.jpq;
        this.fqv.kco = this.suc.kco;
        this.fqv.txr = this.suc.txr;
        this.fqv.iik = this.suc.txr;
        this.fqv.xzt = this.suc.xzt;
        this.lwt();
        this.fqv.pxj();
        this.fqv.rom(this.suc.ccc)
    };
    this.xpp = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.pvv = this.suc.flk;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        this.fqv.pei = (this.suc.txr > this.fqv.txr);
        this.fqv.msy = this.suc.msy;
        this.fqv.jpq = this.suc.jpq;
        this.fqv.kco = this.suc.kco;
        this.fqv.txr = this.suc.txr;
        this.fqv.iik = this.suc.txr;
        this.fqv.xzt = this.suc.xzt;
        this.lwt();
        this.fqv.pyk();
        this.fqv.rom(this.suc.ccc)
    };
    this.hqb = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.pvv = this.suc.flk;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        this.fqv.pei = (this.suc.txr > this.fqv.txr);
        this.fqv.iik = this.fqv.txr;
        this.fqv.msy = this.suc.msy;
        this.fqv.jpq = this.suc.jpq;
        this.fqv.kco = this.suc.kco;
        this.fqv.txr = this.suc.txr;
        this.fqv.xzt = this.suc.xzt;
        this.lwt();
        this.fqv.hfd();
        this.fqv.rom(this.suc.ccc)
    };
    this.mqd = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.pvv = this.suc.flk;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        this.fqv.pei = (this.suc.txr > this.fqv.txr);
        this.fqv.iik = this.fqv.txr;
        this.fqv.msy = this.suc.msy;
        this.fqv.jpq = this.suc.jpq;
        this.fqv.kco = this.suc.kco;
        this.fqv.txr = this.suc.txr;
        this.fqv.xzt = this.suc.xzt;
        this.lwt();
        this.fqv.imx();
        this.fqv.rom(this.suc.ccc)
    };
    this.lqs = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.pvv = this.suc.flk;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        if (this.fqv.hch && this.fqv.win > 0) {
            this.fqv.hch.rnb.nly("history", "#ucx", [this.suc.kac])
        }
        this.fqv.pei = (this.suc.txr > this.fqv.txr);
        this.fqv.msy = this.suc.msy;
        this.fqv.jpq = this.suc.jpq;
        this.fqv.kco = this.suc.kco;
        this.fqv.txr = this.suc.txr;
        this.fqv.iik = this.suc.txr;
        this.fqv.xzt = this.suc.xzt;
        this.lwt();
        this.fqv.jah();
        this.fqv.rom(this.suc.ccc)
    };
    this.zgm = function () {
        this.fqv.state = this.suc.shl;
        this.fqv.pvv = this.suc.flk;
        this.fqv.afc = this.suc.mrp;
        this.fqv.zlh = this.suc.zlh;
        this.fqv.vfh = this.suc.vfh;
        this.fqv.jns = this.suc.cmd;
        this.fqv.win = this.suc.win;
        for (var a = 0; a < this.suc.bkc.length; a++) {
            this.fqv.olo[a] = this.suc.bkc[a]
        }
        this.fqv.pei = (this.suc.txr > this.fqv.txr);
        this.fqv.msy = this.suc.msy;
        this.fqv.jpq = this.suc.jpq;
        this.fqv.kco = this.suc.kco;
        this.fqv.txr = this.suc.txr;
        this.fqv.iik = this.suc.txr;
        this.fqv.xzt = this.suc.xzt;
        this.lwt();
        this.fqv.vpi();
        this.fqv.rom(this.suc.ccc)
    };
    this.lwt = function () {
        this.fqv.cei = this.suc.cei;
        this.fqv.gab = this.suc.gab;
        this.fqv.ocj = this.suc.ocj;
        this.fqv.bco = this.suc.bco;
        this.fqv.bal = this.suc.bal;
        this.fqv.gls = this.suc.gls;
        this.fqv.pjz = this.suc.pjz;
        if (this.fqv.bal > 0 && this.fqv.bco < this.fqv.bal) {
            this.fqv.jns = this.suc.iwv
        }
        this.fqv.nxh = this.suc.nxh
    };
    this.tkr = function () {
        return false
    }
}
hig.prototype = new bjz;

function bkz() {
    var a = this;
    this.wnh = false;
    this.wgg = -1;
    this.gim = 0;
    this.dss = null;
    this.aks = 3;
    this.vha = 0;
    this.uif = null;
    this.muz = null;
    this.lgp = false;
    this.ytt = false;
    this.axs = false;
    this.thp = [];
    this.vjl = null;
    this.jxi = false;
    this.wjj = [];
    this.xcl = false;
    this.glk = null;
    this.bjd = null;
    this.ofp = 0;
    this.hce = 0;
    this._y = 0;
    this._d = 0;
    this.ctr = 0;
    this.twy = 4;
    this.kxt = 2;
    this.wsb = 9;
    this.jrj = true;
    this.qma = 0;
    this.zaz = -1;
    this.rei = 0;
    this.nkn = -1;
    this.btc = -1;
    this.wpk = -1;
    this.asl = false;
    this.gdb = [];
    this.jmg = 0;
    this.rqa = 0;
    this.ple = 0;
    this.vut = 89;
    this.die = 0;
    this.obr = 0;
    this.bpo = null;
    this.wqx = null;
    this.pbb = 0;
    this.pmj = 0;
    this.rzg = [];
    this.wep = [];
    this.api = [];
    this.yyh = [];
    this.bns = [];
    this.hre = function (f, k, j, c, b, d, g, e) {
        bkz.prototype.hre.call(this, f, k, j);
        this.aks = d;
        this.qma = this.height / this.aks;
        this.dss = b;
        this.muz = g;
        this.hce = e;
        this.ofp = Math.round(c);
        this.uif = [];
        this.vha = 0;
        this.ctr = 0;
        this.wsb = Math.round(this.ofp / 20);
        this.twy = Math.round(this.ofp / 12);
        this.kxt = Math.round(this.ofp / 2);
        this.wjj.length = 0
    };
    this.ybb = function (b) {
        try {
            this.glk = b.oio;
            this.bjd = b.ust
        } catch (c) {
            console.error(c)
        }
    };
    this.sod = function (c, b) {
        bkz.prototype.sod.call(this, c);
        try {
            this.ofp = Math.round(b);
            this.wsb = Math.round(this.ofp / 20);
            this.twy = Math.round(this.ofp / 12);
            this.kxt = Math.round(this.ofp / 2);
            this._y = this.y + (this.aks - 1) * this.qma
        } catch (d) {
            console.error(d)
        }
    };
    this.tzk = function (b, e) {
        var d = b - this.x - ((this.parent.mpb()) ? this.parent.tgq.cht.mvx.x : 0),
            c = e - this.y - ((this.parent.mpb()) ? this.parent.tgq.cht.mvx.y : 0);
        if (d >= 0 && d <= this.width && c >= 0 && c <= this.height) {
            if (this.parent.nvm && this.parent.nng && !this.parent.pfk && !this.wnh && this.parent.ikv()) {
                this.gxz()
            } else {
                if (!this.parent.nvm) {
                    if (pze.spi.value43) {
                        if (this.parent.nbr()) {
                            this.parent.mil();
                            if (this.parent.ury) {
                                this.parent.ury.rnb.aam("buttons", "#sic", [true])
                            }
                        }
                    } else {
                        if (this.xcl) {
                            this.zaz = c;
                            this.rei = 0;
                            this.parent.xnv();
                            this.parent.num();
                            this.parent.qcz()
                        }
                    }
                }
            }
            return true
        }
        return false
    };
    this.yew = function () {
        if (this.zaz >= 0) {
            this.eum();
            return true
        }
        return false
    };
    this.qrx = function (b, f, c) {
        var e = b - this.x - ((this.parent.mpb()) ? this.parent.tgq.cht.mvx.x : 0),
            d = f - this.y - ((this.parent.mpb()) ? this.parent.tgq.cht.mvx.y : 0);
        if (this.zaz >= 0) {
            if (e >= 0 && e <= this.width && d >= 0 && d <= this.height) {
                if (d > this.zaz) {
                    this.die = tnu(this.hcp)
                } else {
                    if (d < this.zaz) {
                        this.die = tnu(this.cot)
                    }
                }
                this.zaz = d;
                if (c) {
                    clearTimeout(this.obr);
                    this.obr = setTimeout(this.eum, 500)
                }
                return true
            } else {
                this.eum();
                return true
            }
        }
        return false
    };
    this.wac = function () {
        var g = 0,
            k = 0,
            d = 0;
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        if (this.vha >= 0) {
            this.context2D.save();
            if (this.parent.cjp === false) {
                this.context2D.beginPath();
                this.context2D.rect(this.x, this.y, this.width, this.height);
                this.context2D.closePath();
                this.context2D.clip()
            }
            if (this.wqx != null) {
                this.context2D.drawImage(this.wqx, this.x + this.pbb, this.y + this.pmj, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            for (var f = 0, b = this.wep.length; f < b; f++) {
                if (this.wep[f]) {
                    this.context2D.drawImage(this.wep[f].eua, this.wep[f].dug * this.width, 0, this.width, this.wep[f].eua.height, this.x, this.y + f * this.qma, this.width, this.wep[f].eua.height)
                }
            }
            g = this._y - this.height + this.rei;
            for (var f = 0; f < this.aks + 1; f++) {
                k = this.vha + f;
                d = this.uif[k];
                try {
                    if (this.axs === false) {
                        this.context2D.drawImage(this.dss[d], this.x, g)
                    } else {
                        this.context2D.drawImage(this.thp[d], this.x, g)
                    }
                } catch (l) {
                    if (!this.parent.zkd) {
                        console.error("can not display image " + this.dss.length + "" + d + "" + k + "" + this.uif.length + "" + this.uif)
                    }
                }
                g += this.qma
            }
            g = this._y - this.height;
            for (var f = 0; f < this.aks + 1; f++) {
                k = this.vha + f;
                d = this.uif[k];
                try {
                    for (var c = 0, b = this.gdb.length; c < b; c++) {
                        if (this.gdb[c] == d && this.rzg[d] && (this.rzg[d].mje || !this.rzg[d].dor)) {
                            this.context2D.drawImage(this.rzg[d].eua, this.rzg[d].dug * this.width, 0, this.width, this.rzg[d].eua.height, this.x, g + (this.qma - this.rzg[d].eua.height) / 2, this.width, this.rzg[d].eua.height);
                            break
                        }
                    }
                } catch (l) {
                    if (!this.parent.zkd) {
                        console.error("can not display image " + this.rzg.length + "" + d + "" + k + "" + this.uif.length + "" + this.uif)
                    }
                }
                g += this.qma
            }
            for (var f = 0, b = this.wjj.length; f < b; f++) {
                if (this.wjj[f]) {
                    this.context2D.drawImage(this.wjj[f], this.x, this.y + f * this.qma)
                }
            }
            for (var f = 0, b = this.api.length; f < b; f++) {
                if (this.api[f]) {
                    this.context2D.drawImage(this.api[f].eua, this.api[f].dug * this.width, 0, this.width, this.api[f].eua.height, this.x, this.y + f * this.qma, this.width, this.api[f].eua.height)
                }
            }
            if (this.lgp) {
                this.context2D.fillStyle = this.glk;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.ytt) {
                this.context2D.fillStyle = this.bjd;
                this.context2D.fillRect(this.x, this.y, this.width, this.height)
            }
            if (this.bpo != null) {
                this.context2D.drawImage(this.bpo, this.x, this.y)
            }
            this.context2D.restore();
            if (this.hea && this.eat) {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    };
    this.jxa = function (b) {
        this.btc = -1;
        this.wpk = -1;
        this.gim = b;
        this.wnh = false;
        this.nkn = -1;
        this.vha = 0;
        this.jrj = true;
        this.wgg = -1;
        this.uif.length = this.hce;
        for (var c = 0; c <= this.aks; c++) {
            this.uif[this.uif.length - 1 - this.aks + c] = this.uif[c]
        }
        this.vha = this.uif.length - 1 - this.aks;
        this.jrj = true;
        this.qxl(false)
    };
    this.xqb = function (d, f) {
        for (var b = 0; b < this.hce; b++) {
            if (b < this.muz.length) {
                this.uif[b] = this.muz[b]
            } else {
                var c = b % this.muz.length;
                this.uif[b] = this.muz[c]
            }
        }
        if (f) {
            var e = (this.aks > 1) ? d - 2 : d - 1;
            if (e < 0) {
                e = this.muz.length + e
            }
            for (var b = 0; b <= this.aks; b++) {
                this.uif[b] = this.muz[e];
                e += 1;
                if (e == this.muz.length) {
                    e = e - this.muz.length
                }
            }
        }
        this.vha = 0;
        this._y = this.y + (this.aks - 1) * this.qma
    };
    this.gxz = function () {
        this.jxi = true;
        if (this.vha > this.aks) {
            var c = this.vha;
            var d = this.aks;
            for (var b = 0; b <= this.aks; b++) {
                this.uif[d + b + 1] = this.uif[c + b]
            }
            this.vha = this.aks + 1
        }
    };
    this.ahe = function () {
        this.vha = 0;
        this.nkn = 0;
        this.ahq()
    };
    this.hcp = function () {
        if (a.rei < a.qma / 4) {
            a.rei = a.rei + 2;
            if (a.parent.cjp === false) {
                a.wac()
            } else {
                a.parent.uzo()
            }
        }
    };
    this.cot = function () {
        if (a.rei > 0) {
            a.rei = a.rei - 2;
            if (a.parent.cjp === false) {
                a.wac()
            } else {
                a.parent.uzo()
            }
        }
    };
    this.eum = function () {
        clearTimeout(a.obr);
        a.parent.oyl();
        if (a.rei > 0) {
            a.cot();
            a.die = tnu(a.eum)
        } else {
            a.hno()
        }
    };
    this.hno = function () {
        rvi(this.die);
        this.zaz = -1;
        this.rei = 0
    };
    this.afh = function (c) {
        if (this.rei > 0) {
            this.rei = 0
        }
        if (this.aks === 1 && this.nkn < 0 && this.btc >= 0 && this._y === this.y + this.height - this.ofp) {
            this.dnh(this.btc, this.wpk, this.asl)
        }
        if (this.vha >= 0) {
            if (this.vha > 0) {
                if (!this.jxi || !this.parent.zol) {
                    this._y += this.ofp;
                    this._d += this.ofp
                } else {
                    this._y += (this.ofp + this.ofp / 2);
                    this._d += (this.ofp + this.ofp / 2)
                }
            } else {
                if (this.vha == 0) {
                    if (this.nkn == -1) {
                        this.wgg += 1;
                        this.vha = this.gim - 1 - this.aks;
                        this._y += this.ofp;
                        this._d += this.ofp;
                        for (var b = 0; b <= this.aks; b++) {
                            this.uif[this.gim - 1 - this.aks + b] = this.uif[b]
                        }
                    } else {
                        if (this.ctr < this.kxt && this.jrj) {
                            this._y += this.twy;
                            this.ctr += this.twy;
                            if (this.ctr >= this.kxt) {
                                this.jrj = false
                            }
                        } else {
                            if (this.ctr > 0 && !this.jrj) {
                                this._y -= this.wsb;
                                this.ctr -= this.wsb;
                                if (this.ctr <= 0) {
                                    this.wnh = true;
                                    this.jxi = false;
                                    if (typeof this.dqa === "function") {
                                        this.dqa()
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this._d > this.qma - this.ofp && this.vha > 0) {
                if (c && this.nkn >= 0) {
                    if (this.vha == 1) {
                        if (typeof this.qsv === "function") {
                            this.qsv()
                        }
                        if (this.vjl) {
                            this.vjl.play()
                        }
                        if (!this.parent.foi && !this.parent.hkk) {
                            if (this.bos()) {
                                this.vnl()
                            }
                        }
                    }
                }
                this.vha -= 1;
                this._d = 0;
                this._y = this.y + (this.aks - 1) * this.qma
            }
        }
    };
    this.poq = function (e, c, f) {
        for (var d = 0, b = this.api.length; d < b; d++) {
            if (this.api[d]) {
                if (this.api[d].fwv === false && this.api[d].dug < this.api[d].gib - 1) {
                    this.api[d].dug += 1
                } else {
                    if (this.api[d].fwv === true && this.api[d].dug > 0) {
                        this.api[d].dug -= 1
                    } else {
                        if (this.api[d].loop === true) {
                            this.api[d].dug = (this.api[d].fwv === false) ? 0 : this.api[d].gib - 1
                        } else {
                            if (this.api[d].snh === true) {
                                this.api[d] = null
                            }
                        }
                    }
                }
            }
        }
        if (f && f === true) {
            this.wac()
        }
    };
    this.iid = function () {
        for (var c = 0, b = this.api.length; c < b; c++) {
            if (this.api[c] && ((this.api[c].fwv === false && this.api[c].dug < this.api[c].gib - 1) || (this.api[c].fwv === true && this.api[c].dug > 0))) {
                return true
            }
        }
        return false
    };
    this.lbg = function (d) {
        for (var c = 0, b = this.wep.length; c < b; c++) {
            if (this.wep[c]) {
                if (this.wep[c].fwv === false && this.wep[c].dug < this.wep[c].gib - 1) {
                    this.wep[c].dug += 1
                } else {
                    if (this.wep[c].fwv === true && this.wep[c].dug > 0) {
                        this.wep[c].dug -= 1
                    } else {
                        if (this.wep[c].loop === true) {
                            this.wep[c].dug = (this.wep[c].fwv === false) ? 0 : this.wep[c].gib - 1
                        } else {
                            if (this.wep[c].snh === true) {
                                this.wep[c] = null
                            }
                        }
                    }
                }
            }
        }
        if (d && d === true) {
            this.wac()
        }
    };
    this.jve = function () {
        for (var c = 0, b = this.wep.length; c < b; c++) {
            if (this.wep[c] && ((this.wep[c].fwv === false && this.wep[c].dug < this.wep[c].gib - 1) || (this.wep[c].fwv === true && this.wep[c].dug > 0))) {
                return true
            }
        }
        return false
    };
    this.szb = function (d, c, b) {
        this.btc = d;
        this.wpk = c;
        this.asl = b;
        if (this.aks > 1) {
            this.dnh(this.btc, this.wpk, this.asl)
        }
    };
    this.dnh = function (j, g, d) {
        var k = 0,
            c = 0,
            e = 0,
            b = [];
        this.wgg = -1;
        this.nkn = j;
        k = (this.aks > 1) ? this.nkn - 2 : this.nkn - 1;
        if (k < 0) {
            k = this.muz.length + k
        }
        c = (d === true) ? this.uif.length + g : this.aks + g + 1;
        for (var f = 0; f <= this.aks; f++) {
            e = this.vha + f;
            if (e >= this.uif.length) {
                e = e - this.uif.length
            }
            b[f] = this.uif[e]
        }
        for (var f = 0; f < c; f++) {
            this.uif[f] = this.muz[k];
            k += 1;
            if (k == this.muz.length) {
                k = k - this.muz.length
            }
        }
        this.vha = this.aks + g + 1;
        for (var f = 0; f <= this.aks; f++) {
            this.uif[this.vha + f] = b[f]
        }
        this.qxl(true);
        this.btc = -1;
        this.wpk = -1;
        this.asl = false
    };
    this.qxl = function (k) {
        var d = -1,
            n = -1,
            b = 0,
            o = true,
            e = false,
            m = 0,
            l = 0;
        if (this.yyh.length > 0 && this.bns.length > 0) {
            if (k) {
                for (var g = 0; g < this.yyh.length; g++) {
                    for (var f = 0; f < this.yyh[g].length - 1; f++) {
                        if (this.uif[this.aks] == this.yyh[g][f]) {
                            d = f;
                            n = g
                        }
                    }
                }
                if (n >= 0 && d >= 0 && d < this.yyh[n].length - 1) {
                    if (this.aks + this.yyh[n].length - d - 1 < this.vha) {
                        for (var g = d + 1, f = 1; g < this.yyh[n].length; g++, f++) {
                            this.uif[this.aks + f] = this.yyh[n][g]
                        }
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.yyh.length; g++) {
                for (var f = 1; f < this.yyh[g].length; f++) {
                    if (this.uif[this.vha] == this.yyh[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d > 0) {
                if (this.vha - d > this.aks) {
                    for (var g = d - 1, f = 1; g >= 0; g--, f++) {
                        this.uif[this.vha - f] = this.yyh[n][g]
                    }
                }
            }
            d = -1;
            n = -1;
            for (var g = 0; g < this.yyh.length; g++) {
                for (var f = 0; f < this.yyh[g].length; f++) {
                    if (this.uif[this.vha + this.aks] == this.yyh[g][f]) {
                        d = f;
                        n = g
                    }
                }
            }
            if (n >= 0 && d >= 0 && d < this.yyh[n].length - 1) {
                if (!k) {
                    for (var g = d + 1; g < this.yyh[n].length; g++) {
                        this.uif[m++] = this.yyh[n][g]
                    }
                } else {
                    if (this.vha + this.aks + this.yyh[n].length - d - 1 < this.uif.length) {
                        for (var g = d + 1, f = 1; g < this.yyh[n].length; g++, f++) {
                            this.uif[this.vha + this.aks + f] = this.yyh[n][g]
                        }
                    }
                }
            }
            m = (k) ? this.aks + 1 : m;
            l = (k) ? this.uif.length : this.vha;
            for (var c = m; c < l; c++) {
                if (k == false || (c < this.vha || c > this.vha + this.aks)) {
                    d = -1;
                    n = -1;
                    for (var g = 0; g < this.yyh.length; g++) {
                        for (var f = 0; f < this.yyh[g].length; f++) {
                            if (this.uif[c] == this.yyh[g][f]) {
                                d = f;
                                n = g
                            }
                        }
                    }
                    if (n >= 0 && d >= 0) {
                        o = true;
                        b = 0;
                        for (var g = 0; g < this.yyh[n].length && o; g++) {
                            if (this.uif[c - d + g] != this.yyh[n][g]) {
                                o = false
                            } else {
                                b++
                            }
                        }
                        if (o) {
                            c += this.yyh[n].length - d - 1
                        } else {
                            if (b == 0) {
                                this.uif[c] = this.bns[Math.floor(Math.random() * this.bns.length)]
                            } else {
                                if (b == this.yyh[n].length - 1 && (c + b < this.vha || c + b > this.vha + this.aks) && c + b < this.uif.length) {
                                    e = false;
                                    for (var g = 0; g < this.yyh.length && !e; g++) {
                                        for (var f = 0; f < this.yyh[g].length && !e; f++) {
                                            if (this.uif[c + b] == this.yyh[g][f]) {
                                                e = true
                                            }
                                        }
                                    }
                                    if (!e) {
                                        this.uif[c + b] = this.yyh[n][this.yyh[n].length - 1];
                                        c += b
                                    } else {
                                        this.uif[c] = this.bns[Math.floor(Math.random() * this.bns.length)]
                                    }
                                } else {
                                    for (var q = 0; q < b; q++) {
                                        if (c + q < this.vha || c + q > this.vha + this.aks) {
                                            this.uif[c + q] = this.bns[Math.floor(Math.random() * this.bns.length)]
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
    this.dat = function (b) {
        this.xcl = b
    };
    this.czv = function () {
        return this.xcl
    };
    this.bos = function () {
        for (var c = 0, b = this.gdb.length; c < b; c++) {
            if (this.gdb[c] >= 0) {
                return true
            }
        }
        return false
    };
    this.gtq = function (b) {
        this.gdb = b
    };
    this.gle = function (b) {
        return this.gdb
    };
    this.vnl = function () {
        for (var d = 0, b = this.gdb.length; d < b; d++) {
            var c = this.rzg[this.gdb[d]];
            if (c) {
                c.mje = true;
                c.yhk = c.loop;
                c.dor = c.snh
            }
        }
        if (this.parent.cjp === false) {
            this.wac()
        } else {
            this.parent.uzo()
        }
        this.ple = 0;
        this.rqa = new Date().getTime();
        this.ksp()
    };
    this.ahq = function () {
        for (var c = 0, b = this.rzg.length; c < b; c++) {
            if (this.rzg[c]) {
                this.rzg[c].mje = false
            }
        }
        clearTimeout(this.jmg)
    };
    this.dvw = function () {
        for (var c = 0, b = this.rzg.length; c < b; c++) {
            if (this.rzg[c]) {
                this.rzg[c].yhk = false
            }
        }
    };
    this.wqs = function () {
        for (var c = 0, b = this.rzg.length; c < b; c++) {
            if (this.rzg[c]) {
                this.rzg[c].dor = true;
                this.rzg[c].dug = 0
            }
        }
    };
    this.bjx = function () {
        for (var c = 0, b = this.rzg.length; c < b; c++) {
            if (this.rzg[c] && this.rzg[c].mje) {
                return true
            }
        }
        return false
    };
    this.ksp = function () {
        var f = true,
            d = null;
        a.ple++;
        for (var e = 0, b = a.gdb.length; e < b; e++) {
            d = a.rzg[a.gdb[e]];
            if (d && d.mje) {
                d.dug = (d.dug < d.gib - 1) ? d.dug + 1 : (d.dor) ? 0 : d.dug;
                if ((d.dug === 0 && d.yhk === false) || (d.dug === d.gib - 1 && d.dor === false)) {
                    d.mje = false
                }
                if (f === true && d.mje === true) {
                    f = false
                }
            }
        }
        if (a.parent.cjp === false) {
            a.wac()
        } else {
            a.parent.uzo()
        }
        if (f === false) {
            var c = (a.ple * a.vut - (new Date().getTime() - a.rqa));
            if (c < 2) {
                c = 0
            }
            a.jmg = setTimeout(a.ksp, c)
        } else {
            clearTimeout(a.jmg);
            a.parent.wnz()
        }
    };
    this.xqt = function (d) {
        for (var c = 0, b = d.length; c < b; c++) {
            if (d[c]) {
                this.rzg[c] = {};
                this.rzg[c].eua = d[c].eua;
                this.rzg[c].loop = d[c].loop;
                this.rzg[c].snh = d[c].snh;
                this.rzg[c].gib = this.rzg[c].eua.width / this.width;
                this.rzg[c].dug = 0;
                this.rzg[c].mje = false;
                this.rzg[c].yhk = false;
                this.rzg[c].dor = true
            }
        }
    };
    this.bvf = function (b, c, d) {
        this.wqx = b;
        this.pbb = c;
        this.pmj = d
    };
    this.fbr = function (b) {
        this.bpo = b
    };
    this.bpj = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.api[f] = {
            eua: e,
            dug: 0,
            gib: e.width / this.width,
            loop: b,
            snh: d,
            fwv: c
        }
    };
    this.zyx = function () {
        return this.api
    };
    this.jlr = function (f, e, b, d, c) {
        if (e == null || f < 0) {
            return
        }
        this.wep[f] = {
            eua: e,
            dug: 0,
            gib: e.width / this.width,
            loop: b,
            snh: d,
            fwv: c
        }
    };
    this.zcp = function () {
        return this.wep
    };
    this.hht = function (g, c) {
        this.yyh = [];
        this.bns = [];
        for (var f = 0, b = g.length; f < b; f++) {
            this.yyh[f] = [];
            for (var e = 0, d = g[f].length; e < d; e++) {
                this.yyh[f][e] = g[f][e]
            }
        }
        for (var f = 0, b = c.length; f < b; f++) {
            this.bns[f] = c[f]
        }
    };
    this.qsv = null;
    this.dqa = null
}
bkz.prototype = new qdi;
pze.wtf = {
    dwi: {
        dwk: 0,
        qca: 1,
        jga: 2,
        sth: 3,
        vvs: 4,
        hfe: 5,
        xdv: 6,
        vqb: 7,
        ugl: 8,
        huh: 9,
        kjm: 10,
        gdd: 11,
        lbz: 12,
        qev: 13,
        qbz: 14,
        vko: 15,
        pwc: 16,
        vtz: 20,
        frx: 21,
        yui: 22,
        qmu: 23,
        ncd: 24,
        yhu: 25,
        gcm: 30,
        nir: 31,
        oym: 32,
        jxu: 33,
        apt: 68
    }
};

function vlh() {
    this.wns = null;
    this.qbv = null;
    this.jse = null;
    this.llp = null;
    this.oct = null;
    this.yzv = [];
    this.ury = null;
    this.oto = null;
    this.igp = null;
    this.hch = null;
    this.con = null;
    this.hgd = null;
    this.ghk = null;
    this.xcq = null;
    this.afc = [];
    this.olo = [];
    this.win = 0;
    this.agy = 1;
    this.jns = 0;
    this.totalBet = 1000;
    this.eys = [];
    this.afb = 0;
    this.wgx = 0;
    this.vfh = 10;
    this.zlh = 0;
    this.kas = 0;
    this.bkc = [];
    this.xbw = 0;
    this.ogm = -1;
    this.lhd = -1;
    this.uaj = -1;
    this.r1 = [];
    this.r2 = [];
    this.r3 = [];
    this.r4 = [];
    this.r5 = [];
    this.r6 = [];
    this.r7 = [];
    this.r8 = [];
    this.r9 = [];
    this.yuc = [];
    this.efl = [];
    this.dcl = [];
    this.cyx = [];
    this.ouq = [];
    this.zxu = [];
    this.jwq = 3;
    this.pmc = 5;
    this.gld = [];
    this.pgz = 1;
    this.hdn = 1;
    this.lgi = 1;
    this.mja = [];
    this.pvv = null;
    this.fxi = false;
    this.kco = 0;
    this.xzt = 1;
    this.txr = 0;
    this.iik = 0;
    this.msy = 0;
    this.jpq = 0;
    this.knk = true;
    this.pei = false;
    this.kbj = false;
    this.rvz = false;
    this.enf = false;
    this.jmm = false;
    this.cla = false;
    this.qjy = 1;
    this.kml = true;
    this.cei = "";
    this.dfn = false;
    this.kns = false;
    this.xrt = false;
    this.ark = true;
    this.mus = false;
    this.bal = 0;
    this.bco = 0;
    this.gls = 0;
    this.pjz = "";
    this.gab = "";
    this.ocj = "";
    this.oqo = null;
    this.foi = true;
    this.cpg = false;
    this.nvm = false;
    this.bmo = 20;
    this.kgg = true;
    this.nng = false;
    this.hsp = false;
    this.fob = [15, 20, 25, 30, 35];
    this.rga = [8, 8, 8, 8, 8];
    this.juo = [0, 0, 0, 0, 0];
    this.uwg = this.fob;
    this.dfz = 16;
    this.qhy = 16;
    this.kxe = this.dfz;
    this.kfh = 12;
    this.fye = 0;
    this.adt = 0;
    this.dss = [];
    this.zol = true;
    this.wrx = false;
    this.eud = false;
    this.xfl = false;
    this.zfi = true;
    this.zhw = 0;
    this.tkz = 0;
    this.eqj = [];
    this.hxt = true;
    this.dmt = false;
    this.dol = false;
    this.srg = false;
    this.oki = false;
    this.tbq = false;
    this.xbq = 1;
    this.fee = 400;
    this.why = 200;
    this.lis = 100;
    this.zyw = true;
    this.hnc = true;
    this.dio = false;
    this.own = [];
    this.oqx = 50;
    this.ytl = null;
    this.ypt = null;
    this.aob = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.gyb = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    this.ykq = false;
    this.dkp = 0;
    this.iqd = 0;
    this.ogf = -1;
    this.gha = 0;
    this.nlb = false;
    this.lei = false;
    this.udu = -1;
    this.gxw = false;
    this.unl = true;
    this.vlc = 3;
    this.dnd = false;
    this.rbn = 0;
    this.gxt = true;
    this.mzv = 330;
    this.iji = [];
    this.vad = null;
    this.arp = null;
    this.deo = [
        [2, 2, 2, 2, 2],
        [1, 1, 1, 1, 1],
        [3, 3, 3, 3, 3],
        [1, 2, 3, 2, 1],
        [3, 2, 1, 2, 3]
    ];
    this.enj = [];
    this.ftv = 1;
    this.mmi = 5;
    this.zla = 1;
    this.nzg = 5;
    this.oft = true;
    this.czn = 0;
    this.tnw = 0;
    this.pvp = 30;
    this.lkx = 50;
    this.lou = false;
    this.ywr = 0;
    this.mxt = 0;
    this.dfu = false;
    this.xpt = true;
    this.qhb = 0;
    this.ahu = 0;
    this.wxl = false;
    this.egd = 0;
    this.hai = false;
    this.hku = true;
    this.tab = false;
    this.eil = false;
    this.izx = null;
    this.pfk = false;
    this.bwe = true;
    this.qwc = 0;
    this.frn = 0;
    this.gpt = 0;
    this.xkt = 0;
    this.nvx = true;
    this.msj = null;
    this.qyk = false;
    this.xqw = false;
    this.qxi = true;
    this.wli = "";
    this.lqh = false;
    this.afp = -1;
    this.bun = 0;
    this.ack = 0;
    this.hnq = 0;
    this.tyw = 0;
    this.id = 0;
    this.sfa = 0;
    this.eeg = 0;
    this.rpq = 0;
    this.bon = 0;
    this.gpz = 0;
    this.kgd = -1;
    this.got = 0;
    this.mmj = 0;
    this.tif = -1;
    this.owe = 0;
    this.kcg = 0;
    this.ojk = -1;
    this.ahs = function (b) {
        if (!pze.bvr.zkd) {
            pze.sog.ahs(b)
        }
    };
    this.wam = function () {
        var b = new hye();
        b.hre();
        return b
    };
    this.doe = function () {
        this.zew = new ozy()
    };
    this.mxv = function () {
        this.yji();
        var f = [];
        if (!(this.bal > 0 && this.bco < this.bal)) {
            while (this.jns < this.fhs()) {
                this.jns++
            }
            var e = this.vwk(this.kbj);
            if (this.jns > e) {
                var d = (e < 0) ? 0 : e;
                this.jns = d
            }
        }
        this.agy = this.eys[this.jns];
        this.totalBet = this.cbe();
        this.dhs();
        this.jza();
        this.mne();
        for (var c = 0, b = this.cpo.unj("symb"); c < b; c++) {
            this.dss[c] = this.cpo.ewl("symb" + c)
        }
        if (pze.spi.value38) {
            f[pze.os.wid] = "w";
            f[pze.os.yzr] = "l";
            f[pze.os.fjl] = "m";
            f[pze.os.cqb] = "i";
            f[pze.os.tdn] = "a";
            this.zol = pze.spi.value38[f[pze.sog.bnm]]
        }
    };
    this.rpz = function () {
        this.ovh();
        this.nkm();
        this.mcf();
        this.zoc();
        this.vbc();
        this.evo();
        if (this.hku) {
            this.vzl()
        }
        if (this.tgq.nnk) {
            this.ivu();
            this.gaj()
        }
        if (this.tgq.gzv && !(this.bal > 0 && this.bco < this.bal)) {
            this.rwc();
            if (this.pfl()) {
                this.sdj()
            }
        }
        if (this.tgq.hbd) {
            this.gyx();
            if (!this.tgq.oce) {
                this.twv()
            }
        }
        if (this.tgq.ryg) {
            this.plt()
        }
        if (this.zkd) {
            this.amj()
        } else {
            this.fez();
            if (this.tgq.okx) {
                this.rri()
            }
            if (this.mob()) {
                this.ent()
            }
            if (this.rqn()) {
                this.los()
            }
            if (this.xjs() != null && !this.bpn()) {
                this.hwu(this.xjs())
            }
        }
        if (!(this.zkd && !this.zpq)) {
            this.rzr();
            this.ncq()
        }
        if (this.tgq.oce) {
            this.vtr(this.xjs())
        }
        this.rpb();
        if (!this.zkd) {
            this.bww();
            this.mrz()
        }
        if (!this.zpq) {
            this.hzz()
        }
    };
    this.rpc = function () {
        if (!this.uct) {
            if (this.jnu === false) {
                this.xxc.style.marginTop = (-this.height / 2 + this.aln()) + "px";
                this.xxc.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.xxc.style.left = "0px";
                this.xxc.style.top = "0px";
                this.xxc.style.marginTop = ((this.ygq - this.height) / 2 + this.aln()) + "px";
                this.xxc.style.marginLeft = ((this.byf - this.width) / 2) + "px"
            }
            this.xxc.style.width = (this.width > this.byf) ? this.byf + "px" : this.width + "px";
            this.xxc.style.height = (this.height > this.ygq) ? this.ygq + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            this.con = document.createElement("canvas");
            this.con.width = this.tgq.bob.mvx.width;
            this.con.height = this.tgq.bob.mvx.height;
            this.hgd = this.con.getContext("2d");
            if (this.mpb() === true && typeof WebGL2D != "undefined") {
                try {
                    this.cht = document.getElementById("canvas2");
                    this.cht.width = Math.round(this.tgq.cht.mvx.width);
                    this.cht.height = Math.round(this.tgq.cht.mvx.height);
                    WebGL2D.enable(this.cht);
                    this.mze = this.cht.getContext("webgl-2d");
                    this.cjp = true;
                    this.ghk = document.createElement("canvas");
                    this.ghk.width = this.tgq.bob.mvx.width;
                    this.ghk.height = this.tgq.bob.mvx.height;
                    this.xcq = this.ghk.getContext("2d")
                } catch (b) {
                    this.cht = null;
                    this.mze = null;
                    this.cjp = false
                }
            }
            if (this.dmc) {
                this.dmc.style.width = this.width + "px";
                this.dmc.style.height = this.height + "px"
            }
            this.offsetLeft = this.xxc.offsetLeft;
            this.offsetTop = this.xxc.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.uct = true
        }
    };
    this.rpb = function () {};
    this.gyx = function () {
        vlh.prototype.gyx.call(this);
        var b = this.vvh.sqv("topi");
        try {
            if (b) {
                if (pze.spi.value57 === pze.ui.hfy || this.xjs() != null) {
                    b.ajn("language", this.cpo.ewl("icon_l"), sessionStorage.sessionValue1, [pze.language.EN, pze.language.DE, pze.language.RU, pze.language.EE, pze.language.ES, pze.language.TR, pze.language.CZ, pze.language.GR, pze.language.AT, pze.language.US, pze.language.BG, pze.language.CO, pze.language.MX, pze.language.CL, pze.language.VE, pze.language.BR, pze.language.GE, pze.language.HU, pze.language.RO, pze.language.PT, pze.language.FR, pze.language.HR, pze.language.IT, pze.language.SE])
                }
                if (this.bpn() === false) {
                    b.ksz("help", new String("?"), true)
                }
                if (pze.spi.value27 && this.fbu) {
                    b.ajn("audio", this.cpo.ewl("icon_a"), this.vok[this.awc], this.vok);
                    if (this.lxq() === true) {
                        b.ksz("melody", this.cpo.ewl("icon_m"), this.ark)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && pze.sog.rnh()) {
                    b.ksz("fullscreen", this.cpo.ewl("icon_f"), this.lkz)
                }
                if (pze.spi.value28 && this.bwe) {
                    b.ksz("turbo", this.cpo.ewl("icon_t"), this.pfk)
                }
                b.ksz("auto", this.cpo.ewl("icon_as"), this.enf);
                b.ksz("gamble", this.cpo.ewl("icon_g"), this.eil)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.twv = function () {
        vlh.prototype.twv.call(this);
        var c = this.vvh.sqv("topb");
        try {
            if (c) {
                if ((pze.spi.value5.length > 1) && (pze.spi.value57 === pze.ui.hfy || this.xjs() != null)) {
                    c.vlx("language", this.language.language, this.cbb(pze.spi.value5[this.tlj]), this.rmr, this.zew.language, 0, 1)
                }
                if (pze.spi.value27 && this.fbu) {
                    c.vlx("audio", this.language.audio, this.cpo.ewl("btn_a"), this.whm, this.zew.audio, this.awc, this.vok.length);
                    if (this.lxq() === true) {
                        c.vlx("melody", this.language.zqx, this.cpo.ewl("btn_mu"), this.rsr, this.zew.xwf, (this.ark) ? 1 : 0, 2)
                    }
                }
                if (sessionStorage.sessionValue14 == "true" && pze.sog.rnh()) {
                    c.vlx("fullscreen", this.language.lkz, this.cpo.ewl("btn_f"), (pze.sog.pzg) ? this.liy : this.kvv, this.zew.lkz, (this.lkz) ? 1 : 0, 2)
                }
                if (pze.spi.value28 && this.bwe) {
                    c.vlx("turbo", this.language.pfk, this.cpo.ewl("btn_t"), this.wxf, this.zew.pfk, (this.pfk) ? 1 : 0, 2)
                }
                c.poi("help", this.language.tvs, this.cpo.ewl("btn_p"), this.ooy, this.zew.gqi);
                if (this.gab != "" && (pze.spi.value81 && pze.spi.value81.g === true)) {
                    c.poi("rules", this.language.swc, this.cpo.ewl("btn_gr"), this.nzk, this.zew.mwc)
                }
                if (pze.spi.value12 && !this.dez()) {
                    c.poi("history", this.language.odx, this.cpo.ewl("btn_h"), this.gqu, this.zew.odx)
                }
                if (pze.spi.value36 && !this.dez()) {
                    c.poi("statistic", this.language.qdn, this.cpo.ewl("btn_st"), this.knd, this.zew.qdn)
                }
                c.fpu()
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.vtr = function (b) {
        vlh.prototype.vtr.call(this, b);
        var d = this.vvh.sqv("settings"),
            e = "",
            c = 0;
        if (d) {
            if (pze.spi.value5.length > 1) {
                c++;
                d.vlx("language", this.language.language, this.cbb(pze.spi.value5[this.tlj]), this.rmr, 0, 1)
            }
            if (pze.spi.value27 && this.fbu) {
                c++;
                d.vlx("audio", this.language.audio, this.cpo.ewl("btn_a"), this.whm, this.awc, this.vok.length);
                if (this.lxq() === true) {
                    c++;
                    d.vlx("melody", this.language.zqx, this.cpo.ewl("btn_mu"), this.rsr, (this.ark) ? 1 : 0, 2)
                }
            }
            if (sessionStorage.sessionValue14 == "true" && pze.sog.rnh()) {
                c++;
                d.vlx("fullscreen", this.language.lkz, this.cpo.ewl("btn_f"), this.liy, (this.lkz) ? 1 : 0, 2)
            }
            if (pze.spi.value28 && this.bwe && c < 4) {
                d.vlx("turbo", this.language.pfk, this.cpo.ewl("btn_t"), this.wxf, (this.pfk) ? 1 : 0, 2)
            }
            d.vlx("gamble", this.language.eil, this.cpo.ewl("btn_g"), this.mof, (this.eil) ? 1 : 0, 2);
            if (this.ply[this.ivt] === pze.xwd.sgx) {
                e = this.language.left
            } else {
                if (this.ply[this.ivt] === pze.xwd.jnt) {
                    e = this.language.plx
                } else {
                    if (this.ply[this.ivt] === pze.xwd.gwo) {
                        e = this.language.kpt
                    }
                }
            }
            d.vlx("adjustment", e, this.cpo.ewl("btn_l"), this.qzr, (this.kip === pze.tgq.oyu) ? 0 : 1, 2);
            d.jul("help", this.language.gqi, this.cpo.ewl("btn_p"), this.ooy);
            if (this.gab != "" && (pze.spi.value81 && pze.spi.value81.g === true)) {
                d.jul("rules", this.language.fcl, this.cpo.ewl("btn_gr"), this.nzk)
            }
            if (pze.spi.value12 && !this.dez()) {
                d.jul("history", this.language.odx, this.cpo.ewl("btn_h"), this.gqu)
            }
            if (pze.spi.value36 && !this.dez()) {
                d.jul("statistic", this.language.qdn, this.cpo.ewl("btn_st"), this.knd)
            }
            d.aqy = this.pfl();
            d.dlu(this.tgq.aes);
            d.ipo(this.tgq.aes);
            d.ybb(this.style.aes);
            d.wkl(this.language, true)
        }
    };
    this.ovh = function () {
        var b = (this.zkd && this.dru) ? this.tgq.hyu : this.tgq.vvk;
        this.ury = new azj();
        this.ury.parent = this;
        this.ury.nvx = this.nvx;
        this.ury.hre(b.mvx, null, this.context2D);
        this.ury.dlu(b, this.style.vvk);
        this.ury.ywl(this.ytl, 0);
        this.ury.ywl(this.ypt, 1)
    };
    this.evo = function () {};
    this.fez = function () {};
    this.ncq = function () {
        this.igp.vgl(this.tgq.pcs, this.style.pcs, this.cpo.ewl("btn_s"))
    };
    this.wrl = function () {};
    this.smq = function () {};
    this.rri = function () {
        var b = new xad();
        b.hre(this.tgq.top.mvx, null, this.context2D);
        b.parent = this;
        this.vvh.vnv("tops", b)
    };
    this.mcf = function () {
        this.iji = []
    };
    this.nkm = function () {
        var e = [],
            c = (this.state == pze.wtf.dwi.xdv || this.state == pze.wtf.dwi.kjm || this.state == pze.wtf.dwi.gdd || this.state == pze.wtf.dwi.lbz || this.state == pze.wtf.dwi.qbz) ? true : false;
        if (c) {
            if (this.knk) {
                e = this.pvv
            } else {
                e = this.afc
            }
        } else {
            e = this.afc
        }
        this.wns = new bkz();
        this.qbv = new bkz();
        this.jse = new bkz();
        this.llp = new bkz();
        this.oct = new bkz();
        this.wns.vjl = this.cpo.dji("stop1");
        this.qbv.vjl = this.cpo.dji("stop2");
        this.jse.vjl = this.cpo.dji("stop1");
        if (this.llp != null) {
            this.llp.vjl = this.cpo.dji("stop2")
        }
        if (this.oct != null) {
            this.oct.vjl = this.cpo.dji("stop1")
        }
        if (this.cjp === false) {
            this.wns.hre(this.tgq.wns.mvx, this.context2D, null, (this.zol) ? this.tgq.wns.fzy : this.tgq.wns.qcx, this.dss, this.jwq, this.r1, this.uwg[0])
        } else {
            this.wns.hre(this.tgq.wns.fyj, this.mze, null, (this.zol) ? this.tgq.wns.fzy : this.tgq.wns.qcx, this.dss, this.jwq, this.r1, this.uwg[0])
        }
        this.wns.xqb(e[0], true);
        if (this.cjp === false) {
            this.qbv.hre(this.tgq.qbv.mvx, this.context2D, null, (this.zol) ? this.tgq.qbv.fzy : this.tgq.qbv.qcx, this.dss, this.jwq, this.r2, this.uwg[1])
        } else {
            this.qbv.hre(this.tgq.qbv.fyj, this.mze, null, (this.zol) ? this.tgq.qbv.fzy : this.tgq.qbv.qcx, this.dss, this.jwq, this.r2, this.uwg[1])
        }
        this.qbv.xqb(e[1], true);
        if (this.cjp === false) {
            this.jse.hre(this.tgq.jse.mvx, this.context2D, null, (this.zol) ? this.tgq.jse.fzy : this.tgq.jse.qcx, this.dss, this.jwq, this.r3, this.uwg[2])
        } else {
            this.jse.hre(this.tgq.jse.fyj, this.mze, null, (this.zol) ? this.tgq.jse.fzy : this.tgq.jse.qcx, this.dss, this.jwq, this.r3, this.uwg[2])
        }
        this.jse.xqb(e[2], true);
        if (this.cjp === false) {
            this.llp.hre(this.tgq.llp.mvx, this.context2D, null, (this.zol) ? this.tgq.llp.fzy : this.tgq.llp.qcx, this.dss, this.jwq, this.r4, this.uwg[3])
        } else {
            this.llp.hre(this.tgq.llp.fyj, this.mze, null, (this.zol) ? this.tgq.llp.fzy : this.tgq.llp.qcx, this.dss, this.jwq, this.r4, this.uwg[3])
        }
        this.llp.xqb(e[3], true);
        if (this.cjp === false) {
            this.oct.hre(this.tgq.oct.mvx, this.context2D, null, (this.zol) ? this.tgq.oct.fzy : this.tgq.oct.qcx, this.dss, this.jwq, this.r5, this.uwg[4])
        } else {
            this.oct.hre(this.tgq.oct.fyj, this.mze, null, (this.zol) ? this.tgq.oct.fzy : this.tgq.oct.qcx, this.dss, this.jwq, this.r5, this.uwg[4])
        }
        this.oct.xqb(e[4], true);
        this.yzv = [this.wns, this.qbv, this.jse, this.llp, this.oct];
        this.oqo = [true, true, true, true, true];
        for (var d = 0, b = this.yzv.length; d < b; d++) {
            this.yzv[d].parent = this;
            this.yzv[d].ybb(this.style.muz);
            this.yzv[d].fbr(this.cpo.ewl("reelfront"))
        }
    };
    this.rzr = function () {
        this.igp = new buw();
        this.igp.hre(this.tgq.pcs.mvx, null, this.context2D);
        this.igp.parent = this;
        this.igp.ztc(false);
        this.igp.ipo(this.tgq.pcs);
        this.igp.ybb(this.style.pcs)
    };
    this.vzl = function () {
        var c = this.tgq.eil,
            b = this.cpo.ewl("g_back");
        if (this.zkd && this.dru && this.style.bvr.jyh) {
            c = this.tgq.yzz;
            b = this.cpo.ewl("m_g_back")
        }
        this.hch = new bpr();
        this.hch.parent = this;
        this.hch.hre(c.mvx, null, this.context2D);
        this.hch.eua = b;
        this.hch.dlu(c);
        this.hch.ybb(this.style.eil);
        this.hch.lap();
        this.hch.ywl(this.izx, 0);
        this.hch.cug(false)
    };
    this.zoc = function () {};
    this.vbc = function () {
        this.oto = this.hsz();
        this.oto.parent = this;
        this.oto.vad = this.vad;
        this.oto.bmh = this.xaa;
        this.oto.deo = this.deo;
        this.oto.arp = this.arp;
        this.oto.vlc = this.vlc;
        this.oto.yoa = this.mzv;
        this.oto.etd = this.iji;
        this.oto.zxe = this.ykq;
        this.oto.aee = (this.nlb == true || this.lei == true);
        this.oto.rly = this.gxt;
        this.oto.zyw = this.zyw;
        this.oto.ipo(this.tgq.mun);
        this.oto.ybb(this.style.mun)
    };
    this.rwc = function () {
        var b = new tkh();
        b.hre(this.tgq.gfy.mvx, null, this.context2D);
        b.parent = this;
        b.rbq = this.language.agy;
        b.bxc = this.woc;
        b.fuu = this.zew.jls.dzq;
        b.udr = this.zew.nok.dzq;
        b.zlv = this.cpo.ewl("effect");
        b.ipo(this.tgq.gfy);
        b.ybb(this.style.xmk);
        b.mxv(this.eys, this.fhs(), this.vwk(false));
        b.tfq(this.kzc(), this.vwk(true));
        b.zpd(this.jns, false);
        b.cug(false);
        this.vvh.vnv("betsel", b)
    };
    this.sdj = function () {
        this.mja = [];
        for (var b = this.pgz; b <= this.hdn;) {
            this.mja.push(b);
            b += this.lgi
        }
        var c = new fzh();
        c.hre(this.tgq.gea.mvx, null, this.context2D);
        c.parent = this;
        c.rbq = this.language.vfh;
        c.bxc = this.gdi;
        c.fuu = this.zew.qmy.dzq;
        c.udr = this.zew.ytg.dzq;
        c.zlv = this.cpo.ewl("effect");
        c.ipo(this.tgq.gea);
        c.ybb(this.style.xmk);
        c.mxv(this.mja, 0, this.mja.length - 1);
        c.ntc(this.vfh, false);
        c.cug(false);
        this.vvh.vnv("linesel", c)
    };
    this.plt = function () {
        this.vvh.vnv("llinep", this.wxi(this.tgq.oqb.mvx.x, this.tgq.oqb.mvx.y, this.cpo.ewl("winlines"), this.ftv, this.mmi, this.tgq.oqb));
        this.vvh.vnv("rlinep", this.wxi(this.tgq.kcr.mvx.x, this.tgq.kcr.mvx.y, this.cpo.ewl("winlines"), this.zla, this.nzg, this.tgq.kcr));
        this.vvh.nly("llinep", "#xap", [this.vfh]);
        this.vvh.nly("rlinep", "#xap", [this.vfh])
    };
    this.ivu = function () {
        var c = new wfa(),
            b = this.cpo.ewl("m_win");
        if (this.zkd && this.dru && this.style.bvr.jyh) {
            b = this.cpo.ewl("m_m_win")
        }
        c.hre(this.tgq.mfu.mvx, this.context2D, null, b, "");
        c.parent = this;
        c.ipo(this.tgq.mfu);
        c.ybb(this.style.mfu);
        c.cug(false);
        this.vvh.vnv("winp", c)
    };
    this.gaj = function () {};
    this.amj = function () {
        var b = new nxp();
        b.hre(this.tgq.odx.mvx, null, this.context2D);
        b.parent = this;
        b.dlu(this.tgq.odx);
        b.ybb(this.style.odx);
        this.vvh.vnv("history", b)
    };
    this.wxi = function (b, j, d, g, c, e) {
        var f = new kea();
        f.hre(new rcu(b, j, 0, 0), this.context2D);
        f.rpa = this.enj;
        f.parent = this;
        f.vhu = g;
        f.euc = c;
        f.ipo(e);
        f.czh(d);
        f.cug(true);
        return f
    };
    this.hsz = function () {
        var e = [];
        for (var d = 0, b = this.cpo.unj("symb"); d < b; d++) {
            e[d] = this.cpo.ewl("symb" + d)
        }
        var c = new tlo();
        c.hre(this.tgq.mun.mvx, null, this.context2D);
        c.ume = e;
        c.crl = this.cpo.ewl("reelfront");
        c.cug(false);
        return c
    };
    this.fjv = function () {
        if (this.eud === true) {
            for (var c = 0, b = this.yzv.length; c < b; c++) {
                if (!this.cjp) {
                    this.yzv[c].bvf(this.con, this.tgq.bob.wcr, this.tgq.bob.lgg)
                }
            }
            if (this.oto) {
                this.oto.bvf(this.con, this.tgq.bob.wcr + this.oto.x, this.tgq.bob.lgg + this.oto.y)
            }
        }
        if (this.ury) {
            this.ury.bvf(this.con, this.tgq.bob.wcr, this.tgq.bob.lgg)
        }
    };
    this.gjg = function (d, c, b) {
        this.ahs({
            type: "gameDataLoaded",
            sender: this.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                success: true
            }
        });
        this.xxv = true;
        this.state = d;
        this.ccc = b;
        clearInterval(this.ovc);
        if (this.fbu) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.awc = 0
            }
            if (this.cpo.mcw === true) {
                this.jiv(this.vok[this.awc])
            } else {
                this.ynt((this.vok[this.awc] === 0))
            }
        }
        if (this.hkk === true) {
            this.jum = true
        }
        this.mxv();
        this.rpz();
        this.cbt();
        this.juf();
        if (this.hch) {
            this.hch.rnb.nly("history", "#ucx", [c])
        }
        this.ihh();
        window.tnu(this.xdp)
    };
    this.xdp = function () {
        pze.bvr.rom(pze.bvr.ccc);
        pze.bvr.mla = true;
        pze.bvr.cuk();
        pze.bvr.jkg();
        pze.bvr.fjv();
        pze.bvr.wac();
        if (pze.bvr.hkk === true) {
            pze.bvr.ozp(true)
        }
        if (pze.sog.bnm === pze.os.tdn && pze.sog.gez !== pze.zif.cqf) {
            pze.bvr.inp([{
                bsc: pze.vcr.kpr
            }])
        } else {
            if (pze.bvr.bal > 0) {
                if (pze.bvr.bco === 0) {
                    pze.bvr.inp([{
                        bsc: pze.vcr.zci
                    }])
                } else {
                    if (pze.bvr.bco < pze.bvr.bal) {
                        pze.bvr.inp([{
                            bsc: pze.vcr.yey
                        }])
                    }
                }
            } else {
                pze.bvr.qae(pze.bvr.state)
            }
        }
        if (pze.spi.value37 && !pze.bvr.dez()) {
            pze.bvr.lij()
        }
        if (pze.bvr.rqn()) {
            setTimeout(pze.bvr.wac, 20)
        }
    };
    this.vth = function () {
        this.cgd = new hig().hre(this, pze.spi.value6)
    };
    this.mck = function () {
        this.cgd = new box().hre(this, pze.spi.value6)
    };
    this.tzk = function (q) {
        if (q.preventDefault) {
            q.preventDefault()
        }
        if (q.stopPropagation) {
            q.stopPropagation()
        }
        if (this.jum) {
            return
        }
        var k = 0,
            j = 0,
            u = false,
            l = false,
            f = false,
            v = this.vvh.sqv("stats"),
            t = this.vvh.sqv("topb"),
            c = this.vvh.sqv("topi"),
            d = this.vvh.sqv("betsel"),
            n = this.vvh.sqv("linesel"),
            o = this.vvh.sqv("llinep"),
            w = this.vvh.sqv("rlinep"),
            z = this.vvh.sqv("finfop"),
            p = this.vvh.sqv("finfoc"),
            m = this.vvh.sqv("autop"),
            b = this.vvh.sqv("settings"),
            g = this.vvh.sqv("jwp");
        if (q.touches) {
            var e = q.touches[0];
            u = true;
            if (!this.otu) {
                k = e.pageX - this.offsetLeft;
                j = e.pageY - this.offsetTop
            } else {
                k = Math.round((e.pageX - this.offsetLeft) / this.neh);
                j = Math.round((e.pageY - this.offsetTop) / this.bim)
            }
        } else {
            if (q.which != 1) {
                return
            }
            if (!this.otu) {
                k = q.pageX - this.offsetLeft;
                j = q.pageY - this.offsetTop
            } else {
                k = Math.round((q.pageX - this.offsetLeft) / this.neh);
                j = Math.round((q.pageY - this.offsetTop) / this.bim)
            }
        }
        this.xsm();
        if (m && m.jff()) {
            if (m.tzk(k, j)) {
                return
            }
        }
        if (t && t.jff()) {
            if (t.tzk(k, j)) {
                clearTimeout(this.owe);
                return
            } else {
                f = true
            }
        }
        if (d) {
            if (d.jff()) {
                if (d.tzk(k, j, u)) {
                    clearTimeout(this.owe);
                    return
                } else {
                    l = true
                }
            }
        }
        if (n) {
            if (n.jff()) {
                if (n.tzk(k, j, u)) {
                    clearTimeout(this.owe);
                    return
                } else {
                    l = true
                }
            }
        }
        if (f) {
            this.pkv(this.ury.icb(k, j, null));
            return
        } else {
            if (l) {
                if ((d && d.czv()) && ((n && n.czv()) || !n)) {
                    this.pkw(this.ury.icb(k, j, null))
                }
                return
            }
        }
        if (this.pfl() && !this.mus && o && w) {
            if (o.tzk(k, j, l)) {
                return
            } else {
                if (w.tzk(k, j, l)) {
                    return
                }
            }
        }
        if (z) {
            if (z.tzk(k, j)) {
                return
            }
        }
        if (p) {
            if (p.tzk(k, j)) {
                return
            }
        }
        if (b && b.jff()) {
            if (b.tzk(k, j)) {
                return
            }
        }
        if (c) {
            if (c.tzk(k, j, u)) {
                return
            }
        }
        if (v && v.jff()) {
            if (v.tzk(k, j)) {
                return
            }
        }
        if (this.igp && this.igp.jff()) {
            if (this.igp.tzk(k, j)) {
                return
            }
        }
        if (this.hch && this.hch.jff()) {
            if (this.hch.tzk(k, j)) {
                return
            }
        }
        if (g) {
            if (g.tzk(k, j)) {
                return
            }
        }
        if (this.ury) {
            if (this.ury.tzk(k, j, l)) {
                return
            }
        }
        for (var r = 0, s = this.yzv.length; r < s; r++) {
            if (this.yzv[r].tzk(k, j)) {
                return
            }
        }
    };
    this.yew = function (j) {
        if (j.preventDefault) {
            j.preventDefault()
        }
        if (j.stopPropagation) {
            j.stopPropagation()
        }
        if (this.jum) {
            return
        }
        var k = this.vvh.sqv("topb"),
            d = this.vvh.sqv("autop"),
            g = this.vvh.sqv("settings"),
            c = this.vvh.sqv("betsel"),
            e = this.vvh.sqv("linesel");
        if (d && d.jff()) {
            if (d.yew()) {
                return
            }
        }
        if (c) {
            if (c.yew()) {
                return
            }
        }
        if (e) {
            if (e.yew()) {
                return
            }
        }
        if (this.igp && this.igp.jff()) {
            if (this.igp.yew()) {
                return
            }
        }
        if (this.hch && this.hch.jff()) {
            if (this.hch.yew()) {
                return
            }
        }
        if (this.ury) {
            if (this.ury.yew()) {
                return
            }
        }
        if (k) {
            if (k.yew()) {
                return
            }
        }
        if (g) {
            if (g.yew()) {
                return
            }
        }
        for (var f = 0, b = this.yzv.length; f < b; f++) {
            if (this.yzv[f].yew()) {
                return
            }
        }
    };
    this.oaf = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.jum) {
            return
        }
        var k = false,
            e = false,
            l = this.vvh.sqv("topb"),
            b = this.vvh.sqv("betsel"),
            d = this.vvh.sqv("linesel"),
            g = this.vvh.sqv("finfop"),
            j = this.vvh.sqv("finfoc"),
            f = this.vvh.sqv("autop");
        if (f && f.jff()) {
            if (f.oaf(c.keyCode)) {
                return
            }
        }
        if (l) {
            if (l.oaf(c.keyCode)) {
                clearTimeout(this.owe);
                return
            } else {
                if (l.jff() && l.czv()) {
                    e = true
                }
            }
        }
        if (g) {
            if (g.oaf()) {
                return
            }
        }
        if (j) {
            if (j.oaf(c.keyCode)) {
                return
            }
        }
        if (b) {
            if (b.jff()) {
                if (b.oaf(c.keyCode)) {
                    clearTimeout(this.owe);
                    return
                } else {
                    k = true
                }
            }
        }
        if (d) {
            if (d.jff()) {
                if (d.oaf(c.keyCode)) {
                    clearTimeout(this.owe);
                    return
                } else {
                    k = true
                }
            }
        }
        if (e) {
            this.pkv(this.ury.icb(null, null, c.keyCode));
            return
        } else {
            if (k) {
                if ((b && b.czv()) && ((d && d.czv()) || !d)) {
                    this.pkw(this.ury.icb(null, null, c.keyCode))
                }
                return
            }
        }
        if (this.igp && this.igp.jff()) {
            if (this.igp.oaf(c.keyCode)) {
                return
            }
        }
        if (this.hch && this.hch.jff()) {
            if (this.hch.oaf(c.keyCode)) {
                return
            }
        }
        if (this.ury) {
            if (this.ury.oaf(c.keyCode)) {
                return
            }
        }
    };
    this.mgf = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.jum) {
            return
        }
        var b = this.vvh.sqv("autop"),
            d = this.vvh.sqv("topb");
        if (b && b.jff()) {
            if (b.mgf()) {
                return
            }
        }
        if (this.igp && this.igp.jff()) {
            if (this.igp.mgf()) {
                return
            }
        }
        if (this.hch && this.hch.jff()) {
            if (this.hch.mgf()) {
                return
            }
        }
        if (this.ury) {
            if (this.ury.mgf(c.keyCode)) {
                return
            }
        }
        if (d) {
            if (d.mgf()) {
                return
            }
        }
    };
    this.bpn = function () {
        return (pze.sog.lqi() && !this.zkd)
    };
    this.ylu = function () {
        return (pze.sog.lqi() && !this.zpq)
    };
    this.lxq = function () {
        return (this.xrt === true && this.cpo.mcw === true)
    };
    this.djl = function () {
        if (this.lxq() === true) {
            this.cpo.tkq("melody")
        }
    };
    this.amr = function () {
        if (this.lxq() === true) {
            this.cpo.swx("melody")
        }
    };
    this.dbe = function (c, b) {
        if (this.lxq() === true && this.ark === true) {
            this.cpo.wqw("melody", c, b)
        }
    };
    this.bmt = function () {
        return false
    };
    this.aao = function () {
        return 1
    };
    this.zek = function () {
        return 0
    };
    this.fpd = function (b) {
        this.tgq = this.ohw(b);
        this.width = this.tgq.canvas.mvx.width;
        this.height = this.tgq.canvas.mvx.height;
        this.pad();
        this.eho();
        this.jte()
    };
    this.svt = function () {
        this.style = new quw()
    };
    this.ohw = function (b) {
        this.kip = b;
        if (b == pze.tgq.ebq) {
            return new nbz()
        } else {
            if (b == pze.tgq.uyz) {
                return new jzs()
            } else {
                if (b == pze.tgq.wfw) {
                    return new uxe()
                } else {
                    if (b == pze.tgq.xtt) {
                        return new gpi()
                    } else {
                        if (b == pze.tgq.tjd) {
                            return new nrp()
                        } else {
                            if (b == pze.tgq.wun) {
                                return new xyb()
                            } else {
                                if (b == pze.tgq.vab) {
                                    return new bpk()
                                } else {
                                    if (b == pze.tgq.cuf) {
                                        return new frj()
                                    } else {
                                        if (b == pze.tgq.wgt) {
                                            return new yaf()
                                        } else {
                                            if (b == pze.tgq.rwn) {
                                                return new pwo()
                                            } else {
                                                if (b == pze.tgq.oyu) {
                                                    return new xds()
                                                }
                                            }
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
    this.jte = function () {};
    this.sto = function (b) {
        if (this.uct) {
            this.ahn();
            this.ity(b);
            this.fjv()
        } else {
            this.hdl()
        }
    };
    this.ahn = function () {
        this.canvas.width = 0;
        if (this.jnu === false) {
            this.xxc.style.marginTop = (-this.height / 2 + this.aln()) + "px";
            this.xxc.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.xxc.style.left = "0px";
            this.xxc.style.top = "0px";
            this.xxc.style.marginTop = ((this.ygq - this.height) / 2 + this.aln()) + "px";
            this.xxc.style.marginLeft = ((this.byf - this.width) / 2) + "px"
        }
        this.xxc.style.width = (this.width > this.byf) ? this.byf + "px" : this.width + "px";
        this.xxc.style.height = (this.height > this.ygq) ? this.ygq + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.dmc) {
            this.dmc.style.width = this.width + "px";
            this.dmc.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.ity = function (b) {
        this.mxq();
        this.rrz();
        this.gjb();
        this.gki();
        this.cda();
        if (!(this.zkd && !this.zpq)) {
            this.nfi()
        }
        if (!this.zkd) {
            this.mej();
            if (this.tgq.okx) {
                if (this.vvh.sqv("tops")) {
                    this.hks()
                } else {
                    this.rri()
                }
            } else {
                this.vvh.rgc("tops")
            }
            if (this.mob()) {
                this.jcc()
            }
            this.fpf();
            if (this.rqn()) {
                this.neq()
            }
        } else {
            this.amj()
        }
        if (this.tgq.nnk) {
            this.ztl();
            this.edt()
        }
        if (this.tgq.gzv) {
            this.sdk();
            if (this.pfl()) {
                this.usy()
            }
        }
        if (this.tgq.hbd) {
            this.frw();
            if (!this.tgq.oce) {
                this.jvw()
            }
        }
        if (this.tgq.ryg) {
            this.xma()
        }
        if (this.tgq.oce) {
            this.abv()
        }
        this.syv();
        if (b) {
            this.bxu()
        }
        this.vey();
        this.tfv();
        this.rhp()
    };
    this.mxq = function () {
        if (this.ury) {
            var b = (this.zkd && this.dru) ? this.tgq.hyu : this.tgq.vvk;
            this.ury.sod(b.mvx);
            this.ury.ipo(b, this.fxi);
            if (this.tgq.dri === true) {
                this.ury.ybb(this.style.vvk, this.fxi)
            }
        }
    };
    this.rrz = function () {
        if (this.wns) {
            this.wns.sod((this.cjp === false) ? this.tgq.wns.mvx : this.tgq.wns.fyj, (this.zol) ? this.tgq.wns.fzy : this.tgq.wns.qcx)
        }
        if (this.qbv) {
            this.qbv.sod((this.cjp === false) ? this.tgq.qbv.mvx : this.tgq.qbv.fyj, (this.zol) ? this.tgq.qbv.fzy : this.tgq.qbv.qcx)
        }
        if (this.jse) {
            this.jse.sod((this.cjp === false) ? this.tgq.jse.mvx : this.tgq.jse.fyj, (this.zol) ? this.tgq.jse.fzy : this.tgq.jse.qcx)
        }
        if (this.llp) {
            this.llp.sod((this.cjp === false) ? this.tgq.llp.mvx : this.tgq.llp.fyj, (this.zol) ? this.tgq.llp.fzy : this.tgq.llp.qcx)
        }
        if (this.oct) {
            this.oct.sod((this.cjp === false) ? this.tgq.oct.mvx : this.tgq.oct.fyj, (this.zol) ? this.tgq.oct.fzy : this.tgq.oct.qcx)
        }
    };
    this.ztl = function () {
        var b = this.vvh.sqv("winp");
        if (b) {
            b.sod(this.tgq.mfu.mvx);
            b.ipo(this.tgq.mfu)
        }
    };
    this.edt = function () {};
    this.gjb = function () {
        if (this.oto) {
            this.oto.sod(this.tgq.mun.mvx);
            this.oto.vad = this.vad;
            this.oto.arp = this.arp;
            this.oto.ipo(this.tgq.mun)
        }
    };
    this.xma = function () {
        var c = this.vvh.sqv("llinep"),
            b = this.vvh.sqv("rlinep");
        if (c) {
            c.x = this.tgq.oqb.mvx.x;
            c.y = this.tgq.oqb.mvx.y;
            c.ipo(this.tgq.oqb)
        }
        if (b) {
            b.x = this.tgq.kcr.mvx.x;
            b.y = this.tgq.kcr.mvx.y;
            b.ipo(this.tgq.kcr)
        }
    };
    this.sdk = function () {
        var b = this.vvh.sqv("betsel");
        if (b) {
            b.sod(this.tgq.gfy.mvx);
            b.ipo(this.tgq.gfy)
        }
    };
    this.usy = function () {
        var b = this.vvh.sqv("linesel");
        if (b) {
            b.sod(this.tgq.gea.mvx);
            b.ipo(this.tgq.gea)
        }
    };
    this.hks = function () {
        var b = this.vvh.sqv("tops");
        if (b) {
            b.sod(this.tgq.top.mvx);
            b.cug(this.tgq.okx)
        }
    };
    this.nfi = function () {
        if (this.igp) {
            this.igp.sod(this.tgq.pcs.mvx);
            this.igp.ipo(this.tgq.pcs);
            if (this.tgq.dri === true) {
                this.igp.ybb(this.style.pcs)
            }
        }
    };
    this.cda = function () {
        if (this.hch) {
            var b = (this.zkd && this.dru) ? this.tgq.yzz : this.tgq.eil;
            this.hch.sod(b.mvx);
            this.hch.ipo(b);
            if (this.tgq.dri === true) {
                this.hch.ybb(this.style.eil)
            }
        }
    };
    this.gki = function () {};
    this.mej = function () {};
    this.syv = function () {};
    this.bxu = function () {
        if (this.vvh.sqv("tops")) {
            this.igp.nss(true);
            this.smq()
        } else {
            this.hfx = null;
            this.igp.soq(this.goe, true)
        }
        this.igp.azy()
    };
    this.pad = function () {
        var c = 0 - this.tgq.mun.mvx.x,
            b = 0 - this.tgq.mun.mvx.y;
        this.arp = [
            [{
                x: this.tgq.wns.mvx.x + c,
                y: this.tgq.wns.mvx.y + b
            }, {
                x: this.tgq.wns.mvx.x + c,
                y: this.tgq.wns.mvx.y + b + this.tgq.mun.szy
            }, {
                x: this.tgq.wns.mvx.x + c,
                y: this.tgq.wns.mvx.y + b + 2 * this.tgq.mun.szy
            }],
            [{
                x: this.tgq.qbv.mvx.x + c,
                y: this.tgq.qbv.mvx.y + b
            }, {
                x: this.tgq.qbv.mvx.x + c,
                y: this.tgq.qbv.mvx.y + b + this.tgq.mun.szy
            }, {
                x: this.tgq.qbv.mvx.x + c,
                y: this.tgq.qbv.mvx.y + b + 2 * this.tgq.mun.szy
            }],
            [{
                x: this.tgq.jse.mvx.x + c,
                y: this.tgq.jse.mvx.y + b
            }, {
                x: this.tgq.jse.mvx.x + c,
                y: this.tgq.jse.mvx.y + b + this.tgq.mun.szy
            }, {
                x: this.tgq.jse.mvx.x + c,
                y: this.tgq.jse.mvx.y + b + 2 * this.tgq.mun.szy
            }],
            [{
                x: this.tgq.llp.mvx.x + c,
                y: this.tgq.llp.mvx.y + b
            }, {
                x: this.tgq.llp.mvx.x + c,
                y: this.tgq.llp.mvx.y + b + this.tgq.mun.szy
            }, {
                x: this.tgq.llp.mvx.x + c,
                y: this.tgq.llp.mvx.y + b + 2 * this.tgq.mun.szy
            }],
            [{
                x: this.tgq.oct.mvx.x + c,
                y: this.tgq.oct.mvx.y + b
            }, {
                x: this.tgq.oct.mvx.x + c,
                y: this.tgq.oct.mvx.y + b + this.tgq.mun.szy
            }, {
                x: this.tgq.oct.mvx.x + c,
                y: this.tgq.oct.mvx.y + b + 2 * this.tgq.mun.szy
            }]
        ]
    };
    this.eho = function () {
        var e = 0 - this.tgq.mun.mvx.x,
            b = 0 - this.tgq.mun.mvx.y;
        this.vad = [];
        for (var g = 0, f = this.tgq.vad.length; g < f; g++) {
            this.vad[g] = [];
            for (var d = 0, k = 0, c = this.tgq.vad[g].length; d < c; d += 2, k += 1) {
                this.vad[g][k] = {
                    x: this.tgq.vad[g][d] + e,
                    y: this.tgq.vad[g][d + 1] + b
                }
            }
        }
    };
    this.dhs = function () {
        this.ytl = [];
        if (this.dez() === false && this.cei != "") {
            this.ytl.push(this.cei)
        }
        this.ytl.push(this.language.djr);
        this.ytl.push(this.language.mkz + " " + this.fcy(this.gua()) + ((this.bpn() === true) ? "|" : " ") + this.language.wcf + " " + this.fcy(this.afn()));
        this.ytl.push(this.language.xgs)
    };
    this.jza = function () {
        this.ypt = [];
        this.ypt[0] = this.language.qdg;
        this.ypt[1] = this.language.qrp
    };
    this.mne = function () {
        this.izx = [];
        this.izx[0] = this.language.wbt;
        this.izx[1] = this.language.ueh
    };
    this.hvz = function () {
        vlh.prototype.hvz.call(this);
        if (this.kuk() === true) {
            this.cpo.aya(true);
            this.cpo.yjy(pze.spi.value45 === pze.trt.ksa || pze.spi.value45 === pze.trt.yyv)
        }
    };
    this.sny = function () {
        var c = "";
        this.cpo.thh("spin", null, false, this.ovy + "reels");
        this.cpo.thh("stop1", null, false, this.ovy + "stop_reel2");
        this.cpo.thh("stop2", null, false, this.ovy + "stop_reel2");
        this.cpo.thh("start", null, false, this.ovy + "onstart");
        if (this.lxq() === true) {
            this.cpo.thh("melody", null, true, this.ovy + "background")
        }
        if (this.zhw > 0) {
            this.cpo.thh("wincountfade", null, false, this.ovy + "count_fade")
        }
        c = pze.spi.value30 + "/slot/sounds/";
        this.cpo.thh("winfinal", this.vmb, false, c + "winfinal");
        if (this.xbq <= 2) {
            this.cpo.thh("wincount", null, false, c + "countup" + this.xbq + "1");
            this.cpo.thh("wincount1", null, false, c + "countup" + this.xbq + "2");
            this.cpo.thh("wincount3", null, false, c + "countup" + this.xbq + "3");
            this.cpo.thh("wincount5", null, false, c + "countup" + this.xbq + "4");
            if (this.cpo.mcw === false) {
                this.cpo.thh("wincount2", null, false, c + "countup" + this.xbq + "2");
                this.cpo.thh("wincount4", null, false, c + "countup" + this.xbq + "3");
                this.cpo.thh("wincount6", null, false, c + "countup" + this.xbq + "4")
            }
            this.cpo.thh("winline", null, false, c + "winline");
            this.cpo.thh("collect", null, false, c + "collect");
            this.cpo.thh("collectend", null, false, c + "collect1")
        }
        c = pze.spi.value30 + "/basic/sounds/";
        this.cpo.thh("silence", null, false, c + "silence");
        this.cpo.thh("audioon", null, false, c + "audio_on");
        if (!pze.spi.value55) {
            if (this.bpn() === false) {
                this.cpo.thh("btn", null, false, c + "btn");
                this.cpo.thh("auto_on", null, false, c + "auto_on");
                this.cpo.thh("auto_off", null, false, c + "auto_off");
                this.cpo.thh("gamble_on", null, false, c + "gamble_on");
                this.cpo.thh("gamble_off", null, false, c + "gamble_off");
                if (this.lxq() === false && this.xbq <= 2) {
                    this.cpo.thh("gambleprop", null, true, c + "gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.cpo.thh("step" + b, null, false, c + "step" + (b + 1))
                }
                this.cpo.thh("maxstep", null, false, c + "maxstep")
            } else {
                this.cpo.thh("btn", null, false, c + "btn2");
                this.cpo.thh("auto_on", null, false, c + "auto_on");
                this.cpo.thh("auto_off", null, false, c + "auto_off")
            }
        } else {
            this.cpo.thh("btn", null, false, c + "ama_btn");
            if (this.bpn() === false) {
                this.cpo.thh("gamble_on", null, false, c + "ama_gamble_on");
                this.cpo.thh("gamble_off", null, false, c + "ama_gamble_off");
                if (this.lxq() === false && this.xbq <= 2) {
                    this.cpo.thh("gambleprop", null, true, c + "ama_gambleprop")
                }
                for (var b = 0; b < 12; b++) {
                    this.cpo.thh("step" + b, null, false, c + "ama_step")
                }
                this.cpo.thh("maxstep", null, false, c + "ama_step")
            }
        }
        if (this.fyi() === true) {
            this.cpo.thh("jackpot", null, false, c + "jackpot");
            if (this.yfh()) {
                this.cpo.thh("mystery_jackpot", null, false, c + "mystery_jackpot")
            }
        }
        if (this.bpn() === false) {
            this.cpo.thh("panel_in", null, false, c + "panel_in");
            this.cpo.thh("panel_out", null, false, c + "panel_out")
        }
        c = pze.spi.value30 + "/gamble/sounds/";
        this.cpo.thh("gamble1", null, false, c + "deal_2");
        this.cpo.thh("gamble2", null, false, c + "deal_2");
        this.cpo.thh("gamblewin1", null, false, c + "win1");
        this.cpo.thh("gamblewin2", null, false, c + "win2");
        this.cpo.thh("gamblewin3", null, false, c + "win3");
        this.bte();
        this.rwy();
        this.uts()
    };
    this.bte = function () {
        for (var b = 0; b < this.xbw; b++) {
            this.cpo.thh("symb" + b, this.phu, false, this.ovy + "symb" + (b + 1))
        }
    };
    this.rwy = function () {
        var b = pze.spi.value30 + "/slot/sounds/";
        this.cpo.thh("bigwin", null, false, b + "bigwin");
        this.cpo.thh("megawin", null, false, b + "megawin");
        this.cpo.thh("nicewin", null, false, b + "nicewin")
    };
    this.uts = function () {};
    this.gcv = function () {
        var b = this.tmk + this.tgq.type + "/";
        this.cpo.yms("icon", b + "icon_out.png");
        if (this.kuk() === true && (pze.spi.value45 === pze.trt.ksa || pze.spi.value45 === pze.trt.yyv)) {
            this.cpo.yms("device_info", b + "info_" + ((this.bpn() === true) ? "smartphone.png" : "tablet.png"))
        }
        if (this.oft) {
            this.cpo.yms("winlines", b + "wl.png")
        }
        this.cpo.yms("s_symb", b + "symbols_small.png");
        b = pze.spi.value30 + "/basic/images/" + this.tgq.type + "/";
        if (this.fyi() === true) {
            this.cpo.yms("jackpot", b + "jackpot.png");
            if (this.yfh()) {
                this.cpo.kwd(b, "mystery_jackpot.json")
            }
        }
        if (this.bpn() === true) {
            if (this.tgq.dri === false) {
                this.cpo.yms("btn_back", b + "buttonback.png")
            }
        }
        b = pze.spi.value30 + "/slot/images/" + this.tgq.type + "/";
        if (this.bpn() === true) {
            if (this.tgq.dri === true) {
                this.cpo.kwd(b, "gui_mobile_v29.json")
            } else {
                this.cpo.kwd(b, "gui_mobile_v17.json")
            }
        } else {
            if (pze.spi.value57 === pze.ui.hfy || this.xjs() != null) {
                this.cpo.kwd(b, "gui_desktop_v27.json")
            } else {
                this.cpo.kwd(b, "gui_desktop_v17.json")
            }
        }
        if (this.zyw && !this.zkd) {
            this.cpo.yms("firework", b + "firework.png")
        }
        this.goi();
        this.uue();
        this.rjw();
        this.nix();
        this.yqz()
    };
    this.uue = function () {
        var b = this.tmk + this.tgq.type + "/";
        this.cpo.yms("m_back", b + "main.png");
        this.cpo.yms("g_back", b + "gamble.jpg");
        this.cpo.yms("m_win", b + "winPanel.png");
        this.cpo.yms("h_paytable", b + "wthelp.jpg");
        this.cpo.yms("h_winlines", b + "wlhelp.jpg")
    };
    this.rjw = function () {
        var c = this.tmk + this.tgq.type + "/";
        this.cpo.kwd(c, "symbols.json");
        for (var b = 0; b < this.xbw; b++) {
            this.cpo.yms("anim" + b, c + "symbanim" + (b + 1) + ".jpg")
        }
    };
    this.nix = function () {
        var b = pze.spi.value30 + "/slot/images/" + this.tgq.type + "/";
        this.cpo.yms("wins", b + "wins.png")
    };
    this.goi = function () {
        var b = pze.spi.value30 + "/gamble/images/" + this.tgq.type + "/";
        this.cpo.yms("g_red", b + "red_orig.png");
        this.cpo.yms("g_blue", b + "blue_orig.png");
        this.cpo.kwd(b, "gamble.json")
    };
    this.yqz = function () {};
    this.jio = function (b) {
        var c = this.zlh;
        b = (b != null && b === true) ? true : false;
        if (this.jmm && !this.cla && !this.mus) {
            c = c - this.win
        }
        if (this.wlc) {
            c = c - this.wlc.value
        }
        if (!this.mus) {
            this.jaw(c, true, b)
        }
        this.mhd(this.totalBet, true);
        this.vvh.nly("tops", "#wac");
        this.vvh.nly("settings", "#mcy", [this.fcy(this.agy), this.vfh, this.fcy(this.cbe())])
    };
    this.wac = function (p, o, q, D, f) {
        if (pze.bvr.dth()) {
            var b = (p != null && o != null && q != null && D != null),
                d = (b === true) ? new rcu(p, o, q, D) : ((pze.bvr.tgq.dri === true) ? new rcu(pze.bvr.tgq.vvk.mvx.x, pze.bvr.tgq.vvk.mvx.y, pze.bvr.tgq.vvk.mvx.width, pze.bvr.tgq.vvk.mvx.height) : new rcu(pze.bvr.tgq.bvr.mvx.x, pze.bvr.tgq.bvr.mvx.y, pze.bvr.tgq.bvr.mvx.width, pze.bvr.tgq.bvr.mvx.height)),
                A = pze.bvr.context2D,
                g = (pze.bvr.zpq === true) ? pze.bvr.style.bvr.dlj : pze.bvr.style.bvr.backgroundColor,
                G = pze.bvr.vvh.sqv("stats"),
                c = pze.bvr.vvh.sqv("history"),
                E = pze.bvr.vvh.sqv("topb"),
                j = pze.bvr.vvh.sqv("topi"),
                k = pze.bvr.vvh.sqv("betsel"),
                s = pze.bvr.vvh.sqv("linesel"),
                t = pze.bvr.vvh.sqv("tops"),
                l = pze.bvr.vvh.sqv("winp"),
                m = pze.bvr.vvh.sqv("fwinp"),
                v = pze.bvr.vvh.sqv("llinep"),
                I = pze.bvr.vvh.sqv("rlinep"),
                H = pze.bvr.vvh.sqv("finfop"),
                z = pze.bvr.vvh.sqv("finfoc"),
                r = pze.bvr.vvh.sqv("autop"),
                F = pze.bvr.vvh.yns("jackpots"),
                n = pze.bvr.vvh.sqv("jwp"),
                u = pze.bvr.vvh.sqv("mjwp"),
                e = pze.bvr.vvh.sqv("settings");
            pze.bvr.kns = false;
            if (pze.bvr.cjp === true) {
                pze.bvr.uzo()
            }
            A.save();
            if (b) {
                A.beginPath();
                A.rect(p, o, q, D);
                A.closePath();
                A.clip()
            }
            if (f == null || f === false) {
                A.clearRect(0, 0, pze.bvr.width, pze.bvr.height)
            }
            if (pze.bvr.tgq.iaa) {
                if (pze.bvr.cjp === false) {
                    pze.sog.ssm(pze.bvr.context2D, pze.bvr.tgq.bvr.mvx.x - pze.bvr.tgq.bvr.iej, pze.bvr.tgq.bvr.mvx.y - pze.bvr.tgq.bvr.iej, pze.bvr.tgq.bvr.mvx.width + 2 * pze.bvr.tgq.bvr.iej, pze.bvr.tgq.bvr.mvx.height + 2 * pze.bvr.tgq.bvr.iej, g, 1)
                } else {
                    pze.sog.ssm(pze.bvr.context2D, pze.bvr.tgq.bvr.mvx.x - pze.bvr.tgq.bvr.iej, pze.bvr.tgq.bvr.mvx.y - pze.bvr.tgq.bvr.iej, pze.bvr.tgq.bvr.mvx.width + 2 * pze.bvr.tgq.bvr.iej, pze.bvr.tgq.bvr.mvx.height + 2 * pze.bvr.tgq.bvr.iej, null, 0, g, pze.bvr.tgq.bvr.iej, 1)
                }
            }
            if (c) {
                c.wac()
            }
            if (j) {
                j.wac()
            }
            if (t) {
                t.wac()
            }
            if (G && G.jff()) {
                G.wac()
            } else {
                if (pze.bvr.igp && pze.bvr.igp.jff()) {
                    pze.bvr.igp.wac()
                } else {
                    if (pze.bvr.hch && pze.bvr.hch.jff()) {
                        pze.bvr.hch.wac()
                    } else {
                        if (pze.bvr.cjp) {
                            A.drawImage(pze.bvr.ghk, pze.bvr.tgq.bob.mvx.x, pze.bvr.tgq.bob.mvx.y)
                        } else {
                            A.drawImage(pze.bvr.con, pze.bvr.tgq.bob.mvx.x, pze.bvr.tgq.bob.mvx.y)
                        }
                        if (l && l.jff()) {
                            l.wac()
                        } else {
                            if (m && m.jff()) {
                                m.wac()
                            }
                        }
                        if (v) {
                            v.wac()
                        }
                        if (I) {
                            I.wac()
                        }
                        if (pze.bvr.cjp === false) {
                            for (var B = 0, C = pze.bvr.yzv.length; B < C; B++) {
                                if (pze.bvr.yzv[B]) {
                                    pze.bvr.yzv[B].wac()
                                }
                            }
                        }
                        if (pze.bvr.oto) {
                            pze.bvr.oto.wac()
                        }
                        if (pze.bvr.ury) {
                            pze.bvr.ury.wac()
                        }
                        for (var B = 0, C = F.length; B < C; B++) {
                            F[B].wac()
                        }
                        if (n) {
                            if (n.jff()) {
                                pze.bvr.sdb(A, d)
                            }
                            n.wac()
                        }
                        if (u) {
                            if (u.jff()) {
                                pze.bvr.sdb(A, d)
                            }
                            u.wac()
                        }
                        if (H) {
                            if (H.jff()) {
                                pze.bvr.sdb(A, d)
                            }
                            H.wac()
                        }
                        if (z) {
                            if (z.jff()) {
                                pze.bvr.sdb(A, d)
                            }
                            z.wac()
                        }
                    }
                }
            }
            if (k) {
                k.wac()
            }
            if (s) {
                s.wac()
            }
            if (E) {
                E.wac()
            }
            if (r) {
                r.wac()
            }
            if (e) {
                e.wac()
            }
            A.restore()
        }
    };
    this.sdb = function (b, c) {
        this.kns = true;
        pze.sog.ssm(b, c.x, c.y, c.width, c.height, "black", 0.5)
    };
    this.ofn = function () {
        for (var c = 0, b = this.yzv.length; c < b; c++) {
            if (this.yzv[c] && this.oqo[c] === true) {
                this.yzv[c].wac()
            }
        }
    };
    this.uzo = function () {
        var d = this.mze,
            c = this.cpo.ewl("m_back"),
            f = this.cpo.ewl("f_back");
        if (this.zkd && this.dru && this.style.bvr.jyh) {
            c = this.cpo.ewl("m_m_back");
            f = this.cpo.ewl("m_f_back")
        }
        if (this.dth()) {
            d.save();
            if (this.fxi) {
                d.drawImage(f, 0, 0)
            } else {
                d.drawImage(c, 0, 0)
            }
            for (var e = 0, b = this.yzv.length; e < b; e++) {
                this.yzv[e].wac()
            }
            d.restore()
        }
    };
    this.jkg = function () {
        var d = pze.bvr.hgd,
            g = (pze.bvr.tgq.bob.mvx.width - pze.bvr.tgq.bvr.mvx.width) / 2,
            e = 0,
            c = (pze.bvr.fxi) ? pze.bvr.cpo.ewl("f_back") : pze.bvr.cpo.ewl("m_back"),
            k = (pze.bvr.fxi) ? pze.bvr.cpo.ewl("f_left") : pze.bvr.cpo.ewl("m_left"),
            j = (pze.bvr.fxi) ? pze.bvr.cpo.ewl("f_right") : pze.bvr.cpo.ewl("m_right");
        if (pze.bvr.zkd && pze.bvr.dru && pze.bvr.style.bvr.jyh) {
            c = (pze.bvr.fxi) ? pze.bvr.cpo.ewl("m_f_back") : pze.bvr.cpo.ewl("m_m_back")
        }
        d.save();
        d.clearRect(0, 0, pze.bvr.tgq.bob.mvx.width, pze.bvr.tgq.bob.mvx.height);
        d.drawImage(c, g, e);
        if (pze.bvr.kip === pze.tgq.rwn || pze.bvr.kip === pze.tgq.oyu) {
            if (k) {
                d.drawImage(k, 0, 0)
            }
            if (j) {
                d.drawImage(j, pze.bvr.tgq.bob.mvx.width - j.width, 0)
            }
        }
        d.restore();
        if (pze.bvr.cjp) {
            d = pze.bvr.xcq;
            d.save();
            d.drawImage(pze.bvr.con, 0, 0);
            for (var f = 0, b = pze.bvr.yzv.length; f < b; f++) {
                d.clearRect(pze.bvr.yzv[f].x + g, pze.bvr.yzv[f].y + e, pze.bvr.yzv[f].width, pze.bvr.yzv[f].height)
            }
            d.restore()
        }
    };
    this.xph = function (f) {
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
        if (this.tif < 0) {
            for (var d = 0; d < f; d++) {
                this.own[d] = c[e];
                e = (e < c.length - 1) ? e + 1 : 0
            }
            this.tnw = 0;
            this.fye = new Date().getTime();
            this.owr()
        }
    };
    this.hrl = function () {
        clearTimeout(this.tif);
        this.tif = -1;
        pze.sog.sjt(this.canvas, this.neh, this.bim);
        if (this.cht != null) {
            pze.sog.sjt(this.cht, this.neh, this.bim, ((this.tgq.cht.mvx.x) - ((this.tgq.cht.mvx.x + this.tgq.cht.wcr) / 2 * (1 - this.neh))), ((this.tgq.cht.mvx.y) - ((this.tgq.cht.mvx.y + this.tgq.cht.lgg) / 2 * (1 - this.bim))))
        }
    };
    this.owr = function () {
        var b = pze.bvr.oqx,
            d = new Date().getTime(),
            c = null;
        if (pze.bvr.tnw >= pze.bvr.own.length) {
            pze.bvr.hrl()
        } else {
            c = pze.bvr.own[pze.bvr.tnw];
            pze.sog.sjt(pze.bvr.canvas, pze.bvr.neh * c.sx, pze.bvr.bim * c.sy, c.tx, c.ty, c.rx, c.ry);
            if (pze.bvr.cht != null) {
                pze.sog.sjt(pze.bvr.cht, pze.bvr.neh * c.sx, pze.bvr.bim * c.sy, ((pze.bvr.tgq.cht.mvx.x) - ((pze.bvr.tgq.cht.mvx.x + pze.bvr.tgq.cht.wcr) / 2 * (1 - pze.bvr.neh * c.sx))) + c.tx, ((pze.bvr.tgq.cht.mvx.y) - ((pze.bvr.tgq.cht.mvx.y + pze.bvr.tgq.cht.lgg) / 2 * (1 - pze.bvr.bim * c.sy))) + c.ty, c.rx, c.ry)
            }
            pze.bvr.tnw++;
            b = pze.bvr.oqx + (pze.bvr.tnw * pze.bvr.oqx - (d - pze.bvr.fye));
            if (b < 10) {
                b = 10
            }
            pze.bvr.tif = setTimeout(pze.bvr.owr, b)
        }
    };
    this.mil = function () {
        clearTimeout(pze.bvr.gpz);
        if (pze.bvr.kml) {
            if (pze.bvr.nvm) {
                if (!pze.bvr.pfk && pze.bvr.ikv()) {
                    setTimeout(pze.bvr.ecm, 2)
                }
            } else {
                if (!pze.bvr.fxi) {
                    if (pze.bvr.win > 0 && !pze.bvr.cla) {
                        if (pze.bvr.dfu) {
                            pze.bvr.qqn();
                            if (pze.bvr.elm()) {
                                pze.bvr.kml = false;
                                pze.bvr.ury.wjx(false);
                                setTimeout(pze.bvr.huw, 400)
                            }
                        } else {
                            if (pze.bvr.wxl) {
                                pze.bvr.jds()
                            } else {
                                if (!(pze.bvr.dfu || pze.bvr.wxl)) {
                                    if (pze.bvr.elm()) {
                                        pze.bvr.kml = false;
                                        pze.bvr.ury.wjx(false);
                                        pze.bvr.huw()
                                    } else {
                                        pze.bvr.qqn()
                                    }
                                }
                            }
                        }
                    } else {
                        if (!pze.bvr.nvm) {
                            if (pze.bvr.cxu) {
                                pze.bvr.gvc();
                                pze.bvr.rva();
                                return
                            } else {
                                if (pze.bvr.xmd) {
                                    pze.bvr.gvc();
                                    pze.bvr.knd();
                                    return
                                }
                            }
                            pze.bvr.dol = true;
                            pze.bvr.kml = false;
                            if (pze.bvr.bpn() === true) {
                                pze.bvr.qjy = (!pze.bvr.eil) ? 1 : 0
                            } else {
                                if (pze.spi.value62 === true) {
                                    pze.bvr.qjy = 0;
                                    if (pze.bvr.enf) {
                                        pze.bvr.qjy |= 2
                                    }
                                    if (pze.bvr.eil) {
                                        pze.bvr.qjy |= 4
                                    }
                                } else {
                                    pze.bvr.qjy = (pze.bvr.enf && !pze.bvr.eil) ? 1 : 0
                                }
                            }
                            if (pze.bvr.mus || (pze.bvr.zlh >= pze.bvr.cbe() && pze.bvr.cbe() >= pze.bvr.afb)) {
                                pze.bvr.xji();
                                for (var c = 0, b = pze.bvr.yzv.length; c < b; c++) {
                                    pze.bvr.afc[c] = -1;
                                    if (pze.bvr.yzv[c]) {
                                        pze.bvr.yzv[c].jxa(pze.bvr.uwg[0])
                                    }
                                }
                                pze.bvr.ccq();
                                pze.bvr.ahs({
                                    type: "roundStart",
                                    sender: pze.bvr.nqk,
                                    lang: sessionStorage.sessionValue1.toUpperCase(),
                                    data: {
                                        totalBet: pze.bvr.fcy(pze.bvr.totalBet)
                                    }
                                });
                                pze.bvr.djh();
                                pze.bvr.aoq();
                                pze.bvr.cgd.play(pze.bvr.vfh, pze.bvr.jns, pze.bvr.qjy);
                                pze.bvr.ury.wjx(false);
                                pze.bvr.ury.rnb.nly("start", "#dat", [true])
                            } else {
                                pze.bvr.tmh();
                                pze.bvr.gvc();
                                pze.bvr.ury.wjx(true);
                                pze.bvr.qmt(true);
                                pze.bvr.kml = true
                            }
                            pze.bvr.vxd()
                        }
                    }
                } else {
                    if (pze.bvr.msy > 0) {
                        if (pze.bvr.dfu) {
                            pze.bvr.qqn()
                        } else {
                            if (!(pze.bvr.srg || pze.bvr.dol)) {
                                pze.bvr.rpx()
                            } else {
                                pze.bvr.qcz()
                            }
                        }
                    }
                    if (pze.bvr.kco > 0 && !(pze.bvr.pei && !pze.bvr.qyk)) {
                        if (pze.bvr.xmd) {
                            pze.bvr.gvc();
                            pze.bvr.knd();
                            return
                        }
                        pze.bvr.dol = true;
                        pze.bvr.kml = false;
                        pze.bvr.xji();
                        for (var c = 0, b = pze.bvr.yzv.length; c < b; c++) {
                            pze.bvr.afc[c] = -1;
                            if (pze.bvr.yzv[c]) {
                                pze.bvr.yzv[c].jxa(pze.bvr.uwg[0])
                            }
                        }
                        pze.bvr.ixx();
                        if (pze.bvr.bpn() && pze.bvr.kco == 1) {
                            pze.bvr.qjy = (!pze.bvr.eil) ? 1 : 0
                        } else {
                            if (pze.spi.value62 === true) {
                                pze.bvr.qjy = 0;
                                if (pze.bvr.xjs() == null && pze.spi.value44.e && pze.bvr.kco == 1) {
                                    if (pze.bvr.lqh) {
                                        pze.bvr.qjy |= 2
                                    }
                                } else {
                                    if (pze.bvr.enf) {
                                        pze.bvr.qjy |= 2
                                    }
                                }
                                if (pze.bvr.eil) {
                                    pze.bvr.qjy |= 4
                                }
                            } else {
                                if (pze.bvr.xjs() == null && pze.spi.value44.e && pze.bvr.kco == 1) {
                                    pze.bvr.qjy = (pze.bvr.lqh && !pze.bvr.eil) ? 1 : 0
                                } else {
                                    pze.bvr.qjy = (pze.bvr.enf && !pze.bvr.eil) ? 1 : 0
                                }
                            }
                        }
                        pze.bvr.aoq();
                        pze.bvr.cgd.loz(pze.bvr.vfh, pze.bvr.jns, pze.bvr.qjy);
                        pze.bvr.ury.wjx(false);
                        pze.bvr.ury.rnb.nly("start", "#dat", [true]);
                        pze.bvr.djx()
                    }
                }
            }
        } else {
            if (!pze.bvr.kgg && pze.bvr.nvm && !pze.bvr.pfk && pze.bvr.ikv()) {
                pze.bvr.hsp = true
            }
        }
    };
    this.qei = function () {
        var b = pze.bvr.vvh.sqv("topi"),
            d = 0,
            c = 0,
            e = 0;
        if (!pze.spi.value55) {
            pze.bvr.cpo.swx("auto_on");
            pze.bvr.cpo.swx("auto_off")
        }
        if (pze.bvr.enf) {
            pze.bvr.enf = false;
            pze.bvr.wup();
            if (pze.bvr.xjs() == null && pze.spi.value44.e && pze.bvr.fxi) {
                pze.bvr.lqh = false
            }
            pze.bvr.ury.rnb.nly("astart", "#fyq", [pze.bvr.enf]);
            if (!pze.bvr.nvm) {
                pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.start, true])
            }
            if (!pze.spi.value55) {
                pze.bvr.cpo.tkq("auto_off")
            }
            if (pze.bvr.tab && !pze.bvr.enf && !pze.bvr.eil && !pze.bvr.ois() && !pze.bvr.fxi && pze.bvr.win > 0 && !pze.bvr.cla && !pze.bvr.wxl && !pze.bvr.nvm) {
                if (!pze.bvr.ury.rnb.nly("gamble", "#mwe")) {
                    pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.vit, true]);
                    pze.bvr.ury.rnb.nly("gamble", "#nhj");
                    pze.bvr.atw();
                    if (!pze.bvr.dfu) {
                        pze.bvr.ury.rnb.nly("info", "#tmw", [pze.bvr.cgv(pze.bvr.language.zmm) + ": " + pze.bvr.fcy(pze.bvr.win)])
                    }
                    pze.bvr.xdy()
                }
            }
        } else {
            if (pze.bvr.xjs() != null && pze.bvr.qwc <= 0 && pze.bvr.bpn() === false) {
                if (b && b.czv() === true) {
                    pze.bvr.qmt(false);
                    pze.bvr.ury.wjx(false);
                    pze.bvr.id = setTimeout(pze.bvr.qsd, 300)
                }
            } else {
                if (pze.bvr.xjs() == null && pze.spi.value44.e && pze.bvr.fxi) {
                    pze.bvr.lqh = true
                } else {
                    if (pze.bvr.xjs() != null && pze.bvr.bpn() === true) {
                        pze.bvr.qwc = pze.bvr.vvh.nly("settings", "#mcs");
                        if (pze.bvr.qwc <= 0) {
                            return
                        }
                        d = pze.bvr.vvh.nly("settings", "#mlk");
                        c = pze.bvr.vvh.nly("settings", "#gfe");
                        e = pze.bvr.vvh.nly("settings", "#dzr");
                        pze.bvr.frn = (d > 0) ? d : 0;
                        pze.bvr.gpt = (c > 0) ? c : 0;
                        pze.bvr.xkt = (e > 0) ? e : 0;
                        pze.bvr.zph(pze.bvr.xjs().o === true || pze.bvr.style.bvr.jyh == false)
                    }
                }
                pze.bvr.enf = true;
                pze.bvr.ury.rnb.nly("astart", "#fyq", [pze.bvr.enf]);
                if (!pze.bvr.nvm) {
                    pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.start, true])
                }
                if (!pze.spi.value55) {
                    pze.bvr.cpo.tkq("auto_on")
                }
                if (!pze.bvr.nvm) {
                    if (pze.bvr.fxi || (!pze.bvr.fxi && !(pze.bvr.win > 0 && pze.bvr.tab && pze.bvr.eil && !(pze.bvr.cla || pze.bvr.wxl)))) {
                        pze.bvr.mil()
                    }
                }
            }
        }
        if (b) {
            b.hrk("auto", pze.bvr.enf)
        }
    };
    this.qgg = function () {
        if (pze.rcc == 0 && pze.bvr.zkd === false && pze.bvr.win > 0 && !pze.bvr.cla && pze.bvr.elm()) {
            if (!pze.bvr.wxl) {
                pze.bvr.kml = false;
                pze.bvr.ury.wjx(false);
                if (pze.bvr.dfu) {
                    pze.bvr.qqn();
                    setTimeout(pze.bvr.huw, 400)
                } else {
                    pze.bvr.huw()
                }
            }
            pze.bvr.msj = pze.bvr.qgg
        } else {
            vlh.prototype.qgg.call(this)
        }
    };
    this.gsw = function () {
        if (pze.bvr.jns < pze.bvr.eys.length - 1) {
            if (pze.bvr.jns >= pze.bvr.vwk(true)) {
                pze.bvr.jns = 0;
                while (pze.bvr.jns < pze.bvr.kzc()) {
                    pze.bvr.jns++
                }
            } else {
                pze.bvr.jns++
            }
        } else {
            pze.bvr.jns = 0;
            while (pze.bvr.jns < pze.bvr.kzc()) {
                pze.bvr.jns++
            }
        }
        pze.bvr.euw(false, false);
        if (pze.bvr.bpn() && pze.bvr.oyx()) {
            pze.bvr.ury.rnb.nly("betpopup", "#znm", [pze.bvr.vxg(pze.bvr.totalBet)]);
            pze.bvr.ury.rnb.nly("betpopup", "#cug", [true]);
            pze.bvr.wac();
            clearTimeout(pze.bvr.afp);
            pze.bvr.afp = setTimeout(pze.bvr.xsm, 2000)
        }
        if (pze.bvr.jns >= pze.bvr.vwk(true)) {
            return true
        }
        return false
    };
    this.lwd = function () {
        if (pze.bvr.jns > 0) {
            if (pze.bvr.jns <= pze.bvr.kzc()) {
                pze.bvr.jns = pze.bvr.eys.length;
                while (pze.bvr.jns > pze.bvr.vwk(true)) {
                    pze.bvr.jns--
                }
            } else {
                pze.bvr.jns--
            }
        } else {
            pze.bvr.jns = pze.bvr.eys.length;
            while (pze.bvr.jns > pze.bvr.vwk(true)) {
                pze.bvr.jns--
            }
        }
        if (pze.bvr.jns < 0) {
            pze.bvr.jns = 0
        }
        pze.bvr.euw(false, false);
        if (pze.bvr.jns <= pze.bvr.kzc()) {
            return true
        }
        return false
    };
    this.uqa = function () {
        var c = pze.bvr.vfh,
            b = pze.bvr.vvh.sqv("betsel"),
            e = pze.bvr.vvh.sqv("llinep"),
            d = pze.bvr.vvh.sqv("rlinep");
        c += pze.bvr.lgi;
        if (c > pze.bvr.hdn) {
            c = pze.bvr.pgz
        }
        pze.bvr.vfh = c;
        if (e) {
            e.xap(c)
        }
        if (d) {
            d.xap(c)
        }
        if (b) {
            b.tfq(pze.bvr.kzc(), pze.bvr.vwk(true))
        }
        pze.bvr.euw(true, true);
        pze.bvr.wac();
        if (c >= pze.bvr.hdn) {
            return true
        }
        return false
    };
    this.pmf = function () {
        var c = pze.bvr.vfh,
            b = pze.bvr.vvh.sqv("betsel"),
            e = pze.bvr.vvh.sqv("llinep"),
            d = pze.bvr.vvh.sqv("rlinep");
        c -= pze.bvr.lgi;
        if (c < pze.bvr.pgz) {
            c = pze.bvr.hdn
        }
        pze.bvr.vfh = c;
        if (e) {
            e.xap(c)
        }
        if (d) {
            d.xap(c)
        }
        if (b) {
            b.tfq(pze.bvr.kzc(), pze.bvr.vwk(true))
        }
        pze.bvr.euw(true, true);
        pze.bvr.wac();
        if (c <= pze.bvr.pgz) {
            return true
        }
        return false
    };
    this.mof = function () {
        var b = pze.bvr.vvh.sqv("topi"),
            c = pze.bvr.vvh.sqv("settings");
        if (pze.bvr.tab && !pze.bvr.fxi && pze.bvr.win > 0 && !pze.bvr.nvm && !pze.bvr.eil && !pze.bvr.enf) {
            pze.bvr.jwd()
        } else {
            pze.bvr.cpo.swx("gamble_on");
            pze.bvr.cpo.swx("gamble_off");
            pze.bvr.eil = !pze.bvr.eil;
            if (pze.bvr.eil) {
                pze.bvr.cpo.tkq("gamble_on")
            } else {
                pze.bvr.cpo.tkq("gamble_off")
            }
            if (pze.bvr.tab && !pze.bvr.enf && !pze.bvr.eil && !pze.bvr.ois() && !pze.bvr.fxi && pze.bvr.win > 0 && !pze.bvr.cla && !pze.bvr.wxl && !pze.bvr.nvm) {
                if (!pze.bvr.ury.rnb.nly("gamble", "#mwe")) {
                    pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.vit, true]);
                    pze.bvr.ury.rnb.nly("gamble", "#nhj");
                    pze.bvr.atw();
                    if (!pze.bvr.dfu) {
                        pze.bvr.ury.rnb.nly("info", "#tmw", [pze.bvr.cgv(pze.bvr.language.zmm) + ": " + pze.bvr.fcy(pze.bvr.win)])
                    }
                    pze.bvr.xdy()
                }
            }
            pze.bvr.ury.rnb.nly("gamble", "#fyq", [pze.bvr.eil]);
            if (b) {
                b.hrk("gamble", pze.bvr.eil)
            }
            if (c) {
                c.rnb.nly("gamble", "#lne", [(pze.bvr.eil) ? 1 : 0])
            }
        }
    };
    this.ooy = function () {
        if (!pze.bvr.igp.jff()) {
            pze.bvr.pkv();
            if (pze.bvr.fxi) {
                pze.bvr.qbf()
            }
            pze.bvr.epc()
        } else {
            pze.bvr.zoq()
        }
    };
    this.wxf = function () {
        var d = pze.bvr.vvh.sqv("topb"),
            c = pze.bvr.vvh.sqv("settings"),
            b = pze.bvr.vvh.sqv("topi");
        pze.bvr.pfk = !pze.bvr.pfk;
        if (b) {
            b.hrk("turbo", pze.bvr.pfk)
        }
        if (d) {
            d.rnb.nly("turbo", "#lne", [(pze.bvr.pfk) ? 1 : 0])
        }
        if (c) {
            c.rnb.nly("turbo", "#lne", [(pze.bvr.pfk) ? 1 : 0])
        }
    };
    this.kvv = function () {
        var b = false;
        if (pze.sog.pzg == true) {
            if (pze.bvr.beq == true) {
                pze.bvr.beq = false;
                b = pze.sog.bty();
                setTimeout(pze.bvr.cuk, 1400)
            }
        } else {
            b = pze.sog.bty();
            setTimeout(pze.bvr.cuk, 1400)
        }
    };
    this.pwn = function () {
        if (pze.bvr.cpo.dlz() && !pze.bvr.fuw) {
            pze.bvr.fuw = true;
            pze.bvr.vvh.nly("loading", "#stop");
            setTimeout(pze.bvr.sfs, 100);
            pze.bvr.cpo.tkq("silence");
            if (pze.sog.rnh()) {
                pze.bvr.kvv()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.rsr = function () {
        var d = pze.bvr.vvh.sqv("topb"),
            c = pze.bvr.vvh.sqv("settings"),
            b = pze.bvr.vvh.sqv("topi");
        pze.bvr.ark = !pze.bvr.ark;
        if (pze.bvr.ark === true) {
            pze.bvr.djl();
            if (pze.bvr.oyx() === false) {
                pze.bvr.dbe(0, 0)
            }
        } else {
            pze.bvr.amr()
        }
        if (b) {
            b.hrk("melody", (pze.bvr.ark) ? 1 : 0)
        }
        if (d) {
            d.rnb.nly("melody", "#lne", [(pze.bvr.ark) ? 1 : 0])
        }
        if (c) {
            c.rnb.nly("melody", "#lne", [(pze.bvr.ark) ? 1 : 0])
        }
        pze.bvr.wac()
    };
    this.ccq = function () {
        this.kgg = false;
        this.nng = false;
        this.hsp = false;
        this.cla = false;
        this.qmt(false);
        this.ury.rnb.nly("info", "#tmw", [this.language.xyq, true]);
        this.cpo.swx("collectend");
        if (this.ojk >= 0) {
            clearTimeout(this.ojk);
            this.ojk = -1
        }
        this.num();
        this.pns();
        if (this.nvm == false) {
            this.oyl();
            for (var c = 0, b = this.yzv.length; c < b; c++) {
                this.yzv[c].hno()
            }
            this.nvm = true;
            this.dbp = false;
            this.foi = false;
            this.flw();
            this.fye = new Date().getTime();
            if (this.zol) {
                this.id = window.tnu(this.ybw)
            } else {
                this.id = setTimeout(this.ybw, 10)
            }
        }
    };
    this.ixx = function () {};
    this.ybw = function () {
        var c = pze.bvr.kxe,
            e = 0;
        pze.bvr.tkz = 0;
        if (!pze.bvr.zol || pze.bvr.ctn) {
            if (pze.bvr.adt == 0) {
                pze.bvr.fye = new Date().getTime()
            } else {
                e = new Date().getTime();
                c = pze.bvr.kxe + (pze.bvr.adt * pze.bvr.kxe - (e - pze.bvr.fye))
            }
            if (pze.bvr.foi) {
                c = pze.bvr.kfh
            }
        }
        if (pze.bvr.adt > 0 && !pze.bvr.kml && pze.bvr.kgg) {
            pze.bvr.kml = true
        }
        for (var d = 0, b = pze.bvr.yzv.length; d < b; d++) {
            if (pze.bvr.oqo[d] && !pze.bvr.yzv[d].wnh) {
                if (d == pze.bvr.pmc - 1) {
                    pze.bvr.yzv[d].afh(true)
                } else {
                    pze.bvr.yzv[d].afh((!pze.bvr.foi && !pze.bvr.pfk))
                }
            }
        }
        if (typeof pze.bvr.yrl === "function") {
            pze.bvr.yrl()
        }
        if (pze.bvr.cjp === false) {
            pze.bvr.ofn()
        } else {
            pze.bvr.uzo()
        }
        if (c <= 0) {
            c = 0
        }
        if (pze.bvr.cpg) {
            return
        }
        if (!pze.bvr.czb()) {
            pze.bvr.adt += 1;
            if (pze.bvr.zol && !pze.bvr.ctn) {
                pze.bvr.id = window.tnu(pze.bvr.ybw)
            } else {
                if (c == 0) {
                    pze.bvr.ybw()
                } else {
                    pze.bvr.id = setTimeout(pze.bvr.ybw, c)
                }
            }
        } else {
            pze.bvr.nvm = false;
            pze.bvr.gco();
            pze.bvr.adt = 0;
            pze.bvr.dmt = false;
            pze.bvr.wnz()
        }
    };
    this.yrl = function () {};
    this.wnz = function () {
        if (pze.bvr.hkk === false) {
            var d = pze.bvr.czb();
            clearTimeout(pze.bvr.mmj);
            for (var c = 0, b = pze.bvr.yzv.length; c < b && d; c++) {
                if (pze.bvr.yzv[c].bjx()) {
                    pze.bvr.yzv[c].dvw();
                    d = false
                }
            }
            if (d) {
                for (var c = 0, b = pze.bvr.yzv.length; c < b; c++) {
                    pze.bvr.yzv[c].zyx().length = 0;
                    pze.bvr.yzv[c].zcp().length = 0;
                    pze.bvr.yzv[c].wqs()
                }
                pze.bvr.kml = true;
                if (pze.bvr.uuh()) {
                    pze.bvr.fwa()
                } else {
                    if (pze.bvr.wds() === true) {
                        pze.bvr.eie()
                    } else {
                        pze.bvr.kcm()
                    }
                }
            } else {
                pze.bvr.kml = false
            }
        } else {
            pze.bvr.mmj = setTimeout(pze.bvr.wnz, 50)
        }
    };
    this.czb = function () {
        for (var c = 0, b = this.yzv.length; c < b; c++) {
            if (this.yzv[c] && !this.yzv[c].wnh) {
                return false
            }
        }
        return true
    };
    this.ikv = function () {
        return (pze.spi.value79 === 0)
    };
    this.ecm = function () {
        var c = 0,
            b = pze.bvr.yzv.length;
        if (!pze.bvr.foi) {
            pze.bvr.cpg = false;
            pze.bvr.foi = true;
            if (!pze.bvr.nng) {
                if (!pze.bvr.fxi) {
                    pze.bvr.nng = true;
                    for (c = 0; c < b; c++) {
                        if (pze.bvr.yzv[c] && pze.bvr.oqo[c]) {
                            pze.bvr.yzv[c].szb(pze.bvr.afc[c], pze.bvr.uwg[c] - pze.bvr.uwg[0], pze.bvr.wrx)
                        }
                    }
                } else {
                    pze.bvr.nng = true;
                    for (c = 0; c < b; c++) {
                        if (pze.bvr.yzv[c] && pze.bvr.oqo[c]) {
                            pze.bvr.yzv[c].szb((pze.bvr.knk) ? pze.bvr.pvv[c] : pze.bvr.afc[c], pze.bvr.uwg[c] - pze.bvr.uwg[0], pze.bvr.wrx)
                        }
                    }
                }
            }
            for (c = 0; c < b; c++) {
                if (pze.bvr.yzv[c] && pze.bvr.oqo[c]) {
                    pze.bvr.yzv[c].gxz()
                }
            }
        }
    };
    this.wcw = function () {
        this.cpg = true;
        this.win = 0;
        for (var c = 0, b = this.yzv.length; c < b; c++) {
            if (this.yzv[c] && !this.yzv[c].wnh) {
                this.yzv[c].ahe()
            }
        }
    };
    this.xji = function () {
        if (this.pfk) {
            this.uwg = this.rga;
            this.kxe = this.qhy
        } else {
            this.uwg = this.fob;
            this.kxe = this.dfz
        }
        this.ctn = this.yji()
    };
    this.flw = function () {
        this.cpo.tkq("spin")
    };
    this.gco = function () {
        this.cpo.swx("spin")
    };
    this.ifc = function () {};
    this.pns = function () {
        if (!this.fxi) {
            this.thz()
        } else {
            if (this.bmt() === true) {
                this.cpo.wqw("freespinstart", 1, 300)
            }
        }
        for (var c = 0, b = this.yzv.length; c < b; c++) {
            this.yzv[c].vjl = ((c % 2) == 0) ? this.cpo.dji("stop1") : this.cpo.dji("stop2");
            this.yzv[c].gle().length = 0;
            this.yzv[c].jxi = false;
            this.yzv[c].qsv = null;
            this.yzv[c].dqa = null
        }
        for (var c = 0, b = this.juo.length; c < b; c++) {
            this.juo[c] = 0
        }
    };
    this.mrc = function (b) {
        if (this.fxi === true) {
            if (this.bmt() === true) {
                this.cpo.wqw("freespinstart", 0, 300)
            }
            this.ury.rnb.nly("start", "#znm", [this.language.start, true])
        } else {
            this.dbe(0, 0);
            this.ury.rnb.nly("info", "#vfw");
            if (!this.ois()) {
                this.ury.rnb.nly("start", "#znm", [this.language.vit, true])
            } else {
                this.ury.rnb.nly("start", "#znm", [this.language.start, true])
            }
        }
        this.ury.wjx(false);
        this.oto.kfu();
        this.oto.asr(b)
    };
    this.kcm = function () {
        if (!pze.bvr.fxi && pze.bvr.win >= pze.bvr.totalBet * pze.bvr.lis) {
            pze.bvr.mrc(pze.bvr.win / pze.bvr.totalBet)
        } else {
            if (pze.bvr.fxi && pze.bvr.msy >= pze.bvr.totalBet * pze.bvr.lis) {
                pze.bvr.mrc(pze.bvr.msy / pze.bvr.totalBet)
            } else {
                pze.bvr.dgx()
            }
        }
    };
    this.dgx = function () {
        if (this.win > 0 && !this.fxi) {
            this.srg = false;
            this.dol = false;
            this.kls();
            if (this.wtr()) {
                this.pil()
            } else {
                this.dbe(0, 200);
                this.ury.wjx(false);
                this.id = setTimeout(this.tpm, 200)
            }
        } else {
            if (this.msy > 0 && this.fxi) {
                this.srg = false;
                this.dol = false;
                this.kls();
                if (this.wtr()) {
                    this.pil()
                } else {
                    this.ury.wjx(false);
                    this.id = setTimeout(this.bjv, 200)
                }
            } else {
                this.mci();
                this.eqj = [];
                this.rbn = 0;
                if (this.wtr()) {
                    this.pil()
                } else {
                    if (this.hqc()) {
                        this.zao()
                    } else {
                        if (this.fxi && this.kco > 0 || !this.fxi) {
                            this.qmt(true)
                        }
                        this.xsu()
                    }
                }
            }
        }
    };
    this.epc = function () {
        this.dfu = false;
        clearTimeout(this.bun);
        this.oic(this.win);
        this.thz();
        this.qmt(false);
        this.num();
        this.qcz();
        this.csj();
        this.ury.rnb.nly("info", "#vfw");
        this.ury.wjx(false);
        this.owh(false);
        this.igp.kfu();
        this.igp.wjx(true);
        this.vvh.nly("settings", "#snh");
        if (this.tgq.dri === false) {
            this.ury.rnb.nly("setting", "#fyq", [this.vvh.nly("settings", "#jff")])
        }
        if (this.fxi === true && this.bmt() === true) {
            this.cpo.wqw("freespinstart", 0, 0)
        } else {
            if (this.fxi === false) {
                this.dbe(0, 0)
            }
        }
    };
    this.zoq = function () {
        this.igp.wjx(false);
        if (!this.fxi) {
            this.ury.wjx(true)
        } else {
            this.ury.evg(true)
        }
        this.qmt(true);
        this.owh(true);
        this.igp.snh();
        if (!this.fxi) {
            if (this.win > 0) {
                this.ury.rnb.nly("info", "#tmw", [this.cgv(this.language.zmm) + ": " + this.fcy(this.win)])
            } else {
                this.ury.rnb.nly("info", "#unh", [0])
            }
            this.dbe(1, 200)
        } else {
            this.gzs(true);
            this.qbf();
            if (this.bmt() === true) {
                this.cpo.wqw("freespinstart", 1, 200)
            }
        }
    };
    this.jwd = function () {
        var b = pze.bvr.ury.rnb.sqv("gamble");
        pze.bvr.smr();
        if (b) {
            b.mpj();
            b.fyq(pze.bvr.eil)
        }
        pze.bvr.dfu = false;
        clearTimeout(pze.bvr.bun);
        pze.bvr.thz();
        pze.bvr.num();
        pze.bvr.qcz();
        pze.bvr.csj();
        clearTimeout(pze.bvr.kcg);
        if (pze.bvr.fxi === false) {
            pze.bvr.dbe(1, 300)
        }
        pze.bvr.ury.rnb.nly("info", "#vfw");
        pze.bvr.ury.wjx(false);
        pze.bvr.qmt(false);
        pze.bvr.owh(false);
        if (pze.bvr.hch) {
            pze.bvr.hch.wjx(true);
            pze.bvr.hch.oon(pze.bvr.zlh, pze.bvr.win);
            pze.bvr.hch.rnb.nly("history", "#oxp");
            pze.bvr.hch.kfu();
            pze.bvr.hch.fib()
        }
    };
    this.pda = function () {
        if (!pze.bvr.kop) {
            pze.bvr.ahs({
                type: "roundEnded",
                sender: pze.bvr.nqk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: pze.bvr.fcy(pze.bvr.win),
                    balanceAfter: pze.bvr.fcy(pze.bvr.zlh)
                }
            })
        }
        pze.bvr.mci();
        pze.bvr.owh(true);
        if (pze.bvr.hch) {
            pze.bvr.hch.ogn();
            pze.bvr.hch.vln();
            pze.bvr.hch.wjx(false);
            pze.bvr.hch.cug(false, true)
        }
        pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.start, true]);
        pze.bvr.cla = true;
        if (pze.bvr.ikf()) {
            pze.bvr.gvc();
            pze.bvr.ury.wjx(true);
            pze.bvr.qmt(true);
            if (pze.bvr.win > 0) {
                pze.bvr.ury.rnb.nly("info", "#tmw", [pze.bvr.cgv(pze.bvr.language.zmm) + ": " + pze.bvr.fcy(pze.bvr.win)])
            } else {
                pze.bvr.ury.rnb.nly("info", "#unh", [0])
            }
            pze.bvr.mab()
        } else {
            if (pze.bvr.enf) {
                pze.bvr.ury.onu(true);
                pze.bvr.gpz = setTimeout(pze.bvr.fby, 400)
            } else {
                pze.bvr.ury.wjx(true);
                pze.bvr.qmt(true);
                if (pze.bvr.win > 0) {
                    pze.bvr.ury.rnb.nly("info", "#tmw", [pze.bvr.cgv(pze.bvr.language.zmm) + ": " + pze.bvr.fcy(pze.bvr.win)])
                } else {
                    pze.bvr.ury.rnb.nly("info", "#unh", [0])
                }
            }
        }
    };
    this.qbf = function () {
        var b = this.vvh.sqv("tops");
        if (b) {
            if (b.yhi() == 1) {
                b.zpd(0)
            } else {
                b.zpd(1)
            }
            this.wac()
        }
    };
    this.chc = function () {
        var b = this.vvh.sqv("topi"),
            c = this.vvh.sqv("settings");
        this.eil = !pze.bvr.eil;
        this.ury.rnb.nly("gamble", "#fyq", [this.eil]);
        if (b) {
            b.hrk("gamble", this.eil)
        }
        if (c) {
            c.rnb.nly("gamble", "#lne", [(this.eil) ? 1 : 0])
        }
    };
    this.xch = function () {
        if (this.zkd) {
            return false
        }
        var b = new rcu(197, 24, 246, 200),
            c = pze.spi[pze.bvr.language.qkp.toLowerCase().replace(/\s/g, "") + (b.y / 4)];
        if (c && c.indexOf(":" + b.vkk() + "/") >= 0) {
            return false
        }
        return true
    };
    this.ihh = function () {
        if (this.mla === false) {
            this.wjt = 100;
            return
        }
        if (this.xch()) {
            var c = new Date().getTime(),
                b = c % this.yzv.length,
                d = c % this.yzv[b].muz.length;
            if (this.wjt <= 0 && ((this.fxi && this.msy == 0) || (!this.fxi && this.win == 0)) && c & 1 == 1) {
                if (this.fxi && this.knk) {
                    this.pvv[b] = d
                } else {
                    this.afc[b] = d
                }
            } else {
                this.wjt = (this.wjt > 0) ? this.wjt - 1 : 0
            }
        }
    };
    this.tpm = function () {
        pze.bvr.dkp = 0;
        pze.bvr.exr();
        pze.bvr.kkh();
        pze.bvr.zzd(pze.bvr.afc);
        pze.bvr.pgk();
        pze.bvr.yur();
        if ((pze.bvr.nlb || pze.bvr.lei || pze.bvr.cjp) && pze.bvr.win > 0 && pze.bvr.rbn > 0 && !pze.bvr.dmt) {
            pze.bvr.hak(pze.bvr.nlb, pze.bvr.lei)
        }
        if (pze.bvr.win > 0) {
            if (!pze.bvr.dmt) {
                pze.bvr.jyv();
                pze.bvr.ury.wjx(false)
            }
            if (!pze.bvr.ois()) {
                if (!pze.bvr.zkd) {
                    pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.vit, true])
                }
            } else {
                pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.start, true])
            }
            pze.bvr.eqg();
            pze.bvr.xfl = true;
            pze.bvr.ack = setTimeout(pze.bvr.jch, 10)
        } else {}
    };
    this.bjv = function () {};
    this.jch = function () {
        if (!pze.bvr.dmt) {
            if (!pze.bvr.fxi) {
                pze.bvr.yvw()
            } else {
                pze.bvr.rqz()
            }
        }
        if (!pze.bvr.dol) {
            if (pze.bvr.hxt) {
                pze.bvr.seg()
            } else {
                pze.bvr.meh()
            }
        }
    };
    this.eqg = function () {
        var b = this.ury.rnb.sqv("info");
        if (b) {
            if (!this.ois()) {
                if (b.chp()) {
                    b.tmw(this.language.udx, true)
                }
            } else {
                b.tmw(this.language.vel, true)
            }
        }
    };
    this.jyv = function () {};
    this.fmk = function () {};
    this.kpx = function () {
        for (var b = 0; b < this.hdn; b++) {
            this.olo[b] *= this.agy
        }
        this.olo[this.hdn] *= this.cbe()
    };

    function a(d, c) {
        return c[1] - d[1]
    }
    this.kls = function () {
        var c = [],
            d = 0;
        this.kpx();
        this.eqj = [];
        this.rbn = 0;
        d = this.olo[this.hdn];
        for (var b = 0; b < this.hdn; b++) {
            c[b] = [b, this.olo[b]]
        }
        c.sort(a);
        if (this.djq(d, c)) {
            this.olo[0] = d;
            this.eqj[0] = this.hdn;
            if (this.olo[0] > 0) {
                this.rbn++
            }
            for (var b = 1; b < this.hdn + 1; b++) {
                this.olo[b] = c[b - 1][1];
                this.eqj[b] = c[b - 1][0];
                if (this.olo[b] > 0) {
                    this.rbn++
                }
            }
            this.hxt = false
        } else {
            for (var b = 0; b < this.hdn; b++) {
                this.olo[b] = c[b][1];
                this.eqj[b] = c[b][0];
                if (this.olo[b] > 0) {
                    this.rbn++
                }
            }
            this.olo[this.hdn] = d;
            this.eqj[this.hdn] = this.hdn;
            if (this.olo[this.hdn] > 0) {
                this.rbn++
            }
            this.hxt = true
        }
    };
    this.djq = function (c, b) {
        return c > b[0][1]
    };
    this.ccu = function () {
        this.dkp = this.dkp + 1
    };
    this.yab = function () {
        this.tkz = this.tkz + 1
    };
    this.seg = function () {
        if (!this.cla) {
            if (this.dkp < this.eqj.length && this.eqj[this.dkp] < this.deo.length) {
                if (!this.ykq) {
                    this.exr()
                }
                var b = this.tmu(this.eqj[this.dkp]);
                this.iqd = this.der(b);
                if (!this.ykq) {
                    this.evs(b)
                }
                if (this.olo[this.dkp] > 0) {
                    this.xyn(this.ogf, this.iqd, this.dkp);
                    this.oto.kfu();
                    if (!this.srg && !this.dmt && this.dkp == 0) {
                        if (this.zfi) {
                            this.cpo.tkq("symb" + this.ogf);
                            if (this.zhw > 0) {
                                this.kcg = setTimeout(this.mzk, this.zhw)
                            }
                        } else {
                            this.phu()
                        }
                    } else {
                        if (this.exq) {
                            this.atw()
                        }
                    }
                    this.oem()
                } else {
                    this.ccu();
                    this.seg()
                }
            } else {
                if (this.ogm >= 0 && this.hxt && this.dkp <= this.deo.length) {
                    this.meh();
                    this.xfl = false
                } else {
                    this.suq()
                }
            }
        }
    };
    this.der = function (b) {
        var e = 0,
            c = 0;
        this.iqd = 0;
        this.gha = 0;
        this.ogf = b[e];
        if (this.ogf == this.ogm) {
            return 0
        }
        for (var d = e; d < 5; d++) {
            if (this.ogf == b[d]) {
                this.iqd += 1
            } else {
                break
            }
        }
        if (this.iqd == 0) {
            return 0
        }
        c = this.bkc[this.ogf][this.iqd - 1];
        if (c > 0) {
            return this.iqd
        }
        return 0
    };
    this.meh = function () {
        if (!this.cla) {
            if (!this.ykq) {
                this.exr()
            }
            var b = this.fia();
            if (b > 0 && this.bkc[this.ogm][b - 1] > 0) {
                this.xyn(this.ogm, b, this.dkp);
                this.oto.kfu();
                if (!this.srg && !this.dmt && this.dkp == 0) {
                    if (this.zfi) {
                        this.cpo.tkq("symb" + this.ogm);
                        if (this.zhw > 0) {
                            this.kcg = setTimeout(this.mzk, this.zhw)
                        }
                    } else {
                        this.phu()
                    }
                } else {
                    if (this.exq) {
                        this.atw()
                    }
                }
                this.ujo()
            } else {
                this.suq()
            }
        }
    };
    this.oem = function () {
        if (this.dfu && this.enf || !this.enf) {
            if (!(this.eil && this.tab && !this.dfu && !this.dmt)) {
                this.cai([this.eqj[this.dkp] + 1]);
                if (this.dnd && this.enf && this.tkz > 0 && !this.dmt) {
                    this.oto.oem(this.eqj[this.dkp], this.aob, this.unl, this.ogf, this.gha, this.iqd, true, true)
                } else {
                    this.oto.oem(this.eqj[this.dkp], this.aob, this.unl, this.ogf, this.gha, this.iqd, true, false)
                }
            } else {
                if (!this.dio) {
                    this.cai([this.eqj[this.dkp] + 1]);
                    if (this.dnd) {
                        this.oto.oem(this.eqj[this.dkp], this.aob, this.unl, this.ogf, this.gha, this.iqd, true, true)
                    } else {
                        this.oto.oem(this.eqj[this.dkp], this.aob, this.unl, this.ogf, this.gha, this.iqd, false, false)
                    }
                } else {
                    this.ury.rnb.nly("win", "#vfw");
                    this.cai([this.hdn + 1]);
                    this.ccu();
                    this.seg()
                }
            }
        } else {
            if (this.enf && !this.dmt && !this.dio) {
                this.cai([this.eqj[this.dkp] + 1]);
                if (this.dnd) {
                    this.oto.oem(this.eqj[this.dkp], this.aob, this.unl, this.ogf, this.gha, this.iqd, true, true)
                } else {
                    this.oto.oem(this.eqj[this.dkp], this.aob, this.unl, this.ogf, this.gha, this.iqd, false, false)
                }
            } else {
                this.ury.rnb.nly("win", "#vfw");
                this.cai([this.hdn + 1]);
                this.ccu();
                this.seg()
            }
        }
    };
    this.ujo = function () {
        if (this.dfu && this.enf || !this.enf) {
            this.cai([this.hdn + 1]);
            if (!(this.eil && this.tab && !this.dfu && !this.dmt)) {
                if (this.dnd && this.enf && this.tkz > 0 && !this.dmt) {
                    this.oto.oem(-1, this.aob, false, this.ogm, this.gha, this.iqd, true, true)
                } else {
                    this.oto.oem(-1, this.aob, false, this.ogm, this.gha, this.iqd, true, false)
                }
            } else {
                if (!this.dio) {
                    if (this.dnd) {
                        this.oto.oem(-1, this.aob, false, this.ogm, this.gha, this.iqd, true, true)
                    } else {
                        this.oto.oem(-1, this.aob, false, this.ogm, this.gha, this.iqd, false, false)
                    }
                } else {
                    this.ury.rnb.nly("win", "#vfw");
                    this.ccu();
                    this.seg()
                }
            }
        } else {
            if (this.enf && !this.dmt && !this.dio) {
                this.cai([this.hdn + 1]);
                if (this.dnd) {
                    this.oto.oem(-1, this.aob, false, this.ogm, this.gha, this.iqd, true, true)
                } else {
                    this.oto.oem(-1, this.aob, false, this.ogm, this.gha, this.iqd, false, false)
                }
            } else {
                this.ury.rnb.nly("win", "#vfw");
                this.cai([this.hdn + 1]);
                this.ccu();
                this.seg()
            }
        }
    };
    this.cai = function (b) {
        if (this.hnc === true) {
            this.vvh.nly("llinep", "#dnn", [b, true]);
            this.vvh.nly("rlinep", "#dnn", [b, true])
        }
    };
    this.xyn = function (c, d, b) {
        var e = this.ury.rnb.sqv("win");
        if (e) {
            if (this.win > 0 && !this.fxi) {
                if (this.olo[b] > 0) {
                    if (c == this.ogm) {
                        e.yjj(this.language.zdi, this.language.win + ": " + this.fcy(this.olo[b]), c, d)
                    } else {
                        e.yjj(this.language.fdd + " " + (this.eqj[b] + 1) + ": ", this.language.win + ": " + this.fcy(this.olo[b]), c, d)
                    }
                }
            } else {
                if (this.fxi && this.msy > 0) {
                    if (this.olo[b] > 0) {
                        if (this.xzt > 1) {
                            if (c == this.ogm) {
                                e.yjj(this.language.zdi, this.language.win + ": " + this.fcy(this.olo[b]) + " x " + this.xzt, c, d)
                            } else {
                                e.yjj(this.language.fdd + " " + (this.eqj[b] + 1) + ": ", this.language.win + ": " + this.fcy(this.olo[b]) + " x " + this.xzt, c, d)
                            }
                        } else {
                            if (c == this.ogm) {
                                e.yjj(this.language.zdi, this.language.win + ": " + this.fcy(this.olo[b]), c, d)
                            } else {
                                e.yjj(this.language.fdd + " " + (this.eqj[b] + 1) + ": ", this.language.win + ": " + this.fcy(this.olo[b]), c, d)
                            }
                        }
                    }
                }
            }
        }
    };
    this.mzk = function () {
        pze.bvr.cpo.tkq("wincountfade")
    };
    this.exr = function () {
        for (var b = 0; b < this.aob.length; b++) {
            for (var c = 0; c < this.aob[b].length; c++) {
                this.aob[b][c] = -1
            }
        }
    };
    this.kkh = function () {
        for (var b = 0; b < this.gyb.length; b++) {
            for (var c = 0; c < this.gyb[b].length; c++) {
                this.gyb[b][c] = -1
            }
        }
    };
    this.zzd = function (e) {
        for (var d = 0; d < this.pmc; d++) {
            for (var b = 0; b < this.jwq; b++) {
                var c = (e[d] - 1 + b >= 0) ? e[d] - 1 + b : this.yzv[d].muz.length + e[d] - 1 + b;
                c = (c > this.yzv[d].muz.length - 1) ? c - (this.yzv[d].muz.length) : c;
                this.gyb[d][b] = this.yzv[d].muz[c]
            }
        }
    };
    this.pgk = function () {
        if (this.ykq) {
            for (var d = 0; d < this.deo.length; d++) {
                if (this.eqj[d] < this.deo.length) {
                    var c = this.tmu(this.eqj[d]);
                    this.iqd = this.der(c);
                    if (this.olo[d] > 0) {
                        for (var b = this.gha; b < this.gha + this.iqd; b++) {
                            if (this.gxw && c[b] == this.lhd) {
                                this.aob[b][this.deo[this.eqj[d]][b] - 1] = this.udu
                            } else {
                                this.aob[b][this.deo[this.eqj[d]][b] - 1] = c[b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.yur = function () {
        if (this.ykq) {
            if (this.ogm >= 0) {
                var d = 0;
                for (var c = 0; c < this.gyb.length; c++) {
                    for (var b = 0; b < this.gyb[c].length; b++) {
                        if (this.gyb[c][b] == this.ogm) {
                            d++
                        }
                    }
                }
                if ((this.olo[this.deo.length] > 0 && this.hxt) || (this.olo[0] > 0 && !this.hxt)) {
                    for (var c = 0; c < this.gyb.length; c++) {
                        for (var b = 0; b < this.gyb[c].length; b++) {
                            if (this.gyb[c][b] == this.ogm) {
                                this.aob[c][b] = this.gyb[c][b]
                            }
                        }
                    }
                }
            }
        }
    };
    this.tmu = function (d) {
        var c = [];
        for (var b = 0; b < this.deo[d].length; b++) {
            c[b] = this.gyb[b][this.deo[d][b] - 1]
        }
        return c
    };
    this.evs = function (c) {
        for (var b = this.gha; b < this.gha + this.iqd; b++) {
            if (this.gxw && c[b] == this.lhd) {
                this.aob[b][this.deo[this.eqj[this.dkp]][b] - 1] = this.udu
            } else {
                this.aob[b][this.deo[this.eqj[this.dkp]][b] - 1] = c[b]
            }
        }
    };
    this.fia = function () {
        var d = 0;
        for (var c = 0; c < this.gyb.length; c++) {
            for (var b = 0; b < this.gyb[c].length; b++) {
                if (this.gyb[c][b] == this.ogm) {
                    this.aob[c][b] = this.gyb[c][b];
                    d++;
                    break
                }
            }
        }
        return d
    };
    this.slb = function (b) {
        if (((this.gxw && b == this.udu) && this.udu >= 0) || (b == this.lhd && this.lhd >= 0)) {
            return true
        }
        return false
    };
    this.xsu = function () {
        if (this.pei) {
            this.ury.rnb.nly("start", "#znm", [this.language.start, true]);
            if (!this.fxi) {
                this.num();
                this.ury.wjx(false);
                this.hnq = setTimeout(this.anv, 600)
            } else {
                this.mvi()
            }
        } else {
            if (!this.fxi) {
                this.url()
            } else {
                this.vzy()
            }
        }
    };
    this.url = function () {
        if (this.win > 0) {
            if (this.eil && this.tab) {
                setTimeout(this.jwd, 400)
            } else {
                if (this.enf || this.jmm) {
                    if (!this.wxl && !this.cla) {
                        if (this.jmm) {
                            this.wxl = true;
                            this.num();
                            setTimeout(this.vit, 400)
                        } else {
                            clearTimeout(this.rpq);
                            this.rpq = setTimeout(this.mil, 400)
                        }
                    }
                }
            }
        } else {
            this.ahs({
                type: "roundEnded",
                sender: this.nqk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    win: this.fcy(this.win),
                    balanceAfter: this.fcy(this.zlh)
                }
            });
            this.ury.rnb.nly("info", "#tmw", [this.language.mbt, true]);
            this.nde();
            if (this.bal > 0 && this.bco >= this.bal) {
                this.qmt(false);
                this.ury.wjx(false);
                this.gvc();
                this.tha()
            } else {
                this.ury.rnb.nly("start", "#znm", [this.language.start, true]);
                if (this.ikf()) {
                    this.gvc();
                    this.ury.rnb.nly("info", "#ldn", [0]);
                    this.ury.wjx(true);
                    this.qmt(true);
                    this.mab()
                } else {
                    if (this.enf) {
                        this.gpz = setTimeout(this.fby, 400)
                    } else {
                        this.ury.rnb.nly("info", "#ldn", [0]);
                        this.ury.wjx(true);
                        this.qmt(true)
                    }
                }
            }
        }
    };
    this.vzy = function () {};
    this.obg = function () {
        return ((this.enf || (this.eil && this.tab && !this.dfu)) && this.rbn > 1 && this.dio)
    };
    this.lsf = function () {
        var c = [],
            f = [],
            e = (this.hxt) ? 0 : 1,
            b = ((this.hxt && this.olo[this.hdn] > 0) || (!this.hxt && this.olo[0] > 0)) ? this.rbn - 1 : this.rbn;
        for (var d = 0; d < b; d++, e++) {
            c[d] = this.eqj[e];
            f[d] = this.eqj[e] + 1
        }
        this.oki = true;
        this.dol = true;
        this.kkh();
        this.exr();
        this.zzd((this.fxi === true) ? this.pvv : this.afc);
        this.pgk();
        this.yur();
        this.ury.rnb.nly("win", "#tmw", [this.language.win + " " + b + " " + this.language.vfh, true]);
        this.cai(f);
        this.oto.stop();
        this.oto.qrd(c, this.aob);
        this.ojk = setTimeout(this.iju, 1000)
    };
    this.iju = function () {
        if (pze.bvr.ojk >= 0 && !pze.bvr.enf) {
            pze.bvr.ojk = -1;
            pze.bvr.num()
        }
        if (pze.bvr.hqc()) {
            pze.bvr.zao()
        } else {
            pze.bvr.xsu()
        }
    };
    this.suq = function () {
        this.srg = true;
        this.dmt = true;
        if (!this.fxi) {
            if (!this.dfu) {
                if (this.obg()) {
                    this.lsf()
                } else {
                    this.iju()
                }
            }
            if (!(this.cla || this.dol || ((this.oki) && !this.dfu))) {
                if (!(this.eil && this.tab && !this.dfu)) {
                    this.pbe()
                }
            }
        } else {
            if (!this.dfu) {
                if (this.obg()) {
                    this.lsf()
                } else {
                    this.iju()
                }
            } else {
                if (!(this.cla || this.dol || (this.oki && !this.dfu))) {
                    this.pbe()
                } else {}
            }
        }
    };
    this.pbe = function () {
        this.dmt = true;
        if (!(this.oto.bjx() || this.tbq)) {
            this.tbq = true;
            if (!this.fxi) {
                this.tpm()
            } else {
                this.bjv();
                if (!this.pei && this.kco > 0) {
                    if (!this.dfu) {
                        this.qmt(true);
                        this.ury.evg(true)
                    }
                }
            }
        }
    };
    this.wds = function () {
        return false
    };
    this.wtr = function () {
        return false
    };
    this.hqc = function () {
        return false
    };
    this.eie = function () {};
    this.pil = function () {};
    this.zao = function () {};
    this.ois = function () {
        return this.pei
    };
    this.wlu = function () {
        if (!pze.bvr.wxl && !pze.bvr.cla) {
            pze.bvr.mil()
        }
    };
    this.fby = function () {
        if (pze.bvr.xjs() != null && (pze.bvr.qwc <= 0 || (pze.bvr.fxi === false && pze.bvr.mus === false && pze.bvr.zlh - pze.bvr.cbe() < pze.bvr.frn) || (pze.bvr.fxi === false && pze.bvr.mus === false && pze.bvr.gpt > 0 && pze.bvr.zlh >= pze.bvr.gpt) || (pze.bvr.fxi === false && pze.bvr.xkt > 0 && pze.bvr.win > pze.bvr.xkt))) {
            if (pze.bvr.enf === true) {
                pze.bvr.qei()
            }
            pze.bvr.qmt(true);
            if (pze.bvr.fxi === true) {
                pze.bvr.oic(pze.bvr.win);
                pze.bvr.num();
                pze.bvr.qcz();
                pze.bvr.csj();
                pze.bvr.ury.rnb.nly("info", "#vfw");
                pze.bvr.gzs(true);
                pze.bvr.ury.evg(true)
            } else {
                pze.bvr.ury.rnb.nly("info", "#aun");
                pze.bvr.ury.wjx(true)
            }
        } else {
            if (!pze.bvr.nvm) {
                pze.bvr.mil()
            }
        }
    };
    this.qmb = function () {};
    this.fqw = function () {};
    this.spk = function () {};
    this.ikt = function () {};
    this.mvi = function () {};
    this.anv = function () {};
    this.iev = function () {};
    this.mfp = function () {};
    this.nye = function () {};
    this.cmz = function () {
        var b = this.vvh.sqv("tops");
        if (b) {
            b.zpd(1)
        }
    };
    this.cen = function () {
        var b = this.vvh.sqv("tops");
        if (b) {
            b.zpd(0)
        }
    };
    this.ulc = function () {};
    this.knh = function () {};
    this.tkb = function () {};
    this.whg = function () {};
    this.rca = function () {
        if (!(this.pei && this.fxi && this.enf)) {
            this.qxi = false;
            if (!pze.sog.pzg) {
                this.wli = this.language.qam
            } else {
                this.wli = this.language.qsi
            }
            this.tyw = setInterval(this.yak, 1000)
        }
    };
    this.yak = function () {
        var b = pze.bvr.ury.rnb.sqv("info");
        if (b) {
            if (pze.bvr.qxi) {
                b.tmw(pze.bvr.wli, true)
            } else {
                b.vfw()
            }
            pze.bvr.wac();
            pze.bvr.qxi = !pze.bvr.qxi
        }
    };
    this.hga = function () {};
    this.dfi = function () {};
    this.cit = function (b) {};
    this.dxw = function (b) {
        if (b) {
            this.r1 = this.cgd.suc.rnn;
            this.r2 = this.cgd.suc.qqk;
            this.r3 = this.cgd.suc.pwk;
            this.r4 = this.cgd.suc.emw;
            this.r5 = this.cgd.suc.qav
        } else {
            this.r1 = this.cgd.suc.r1;
            this.r2 = this.cgd.suc.r2;
            this.r3 = this.cgd.suc.r3;
            this.r4 = this.cgd.suc.r4;
            this.r5 = this.cgd.suc.r5
        }
        this.wns.muz = this.r1;
        this.qbv.muz = this.r2;
        this.jse.muz = this.r3;
        this.llp.muz = this.r4;
        this.oct.muz = this.r5
    };
    this.tjf = function () {};
    this.yvw = function () {
        if (!(this.eil && this.tab)) {
            setTimeout(this.xdy, 500);
            if (!this.enf && !this.jmm && !this.eil && !this.ois()) {
                this.ury.rnb.nly("gamble", "#nhj")
            }
        } else {
            setTimeout(this.dyf, 500)
        }
        this.lou = (this.win > this.totalBet) ? true : false;
        this.tnw = 0;
        this.qhb = 0;
        this.khq = 0;
        this.uih = 0;
        this.ywr = 0;
        this.mxt = this.win;
        this.fye = new Date().getTime();
        this.dfu = true;
        this.ahu = 0;
        this.csj();
        this.cpo.swx("winfinal");
        this.bun = setTimeout(this.axl, this.pvp)
    };
    this.xdy = function () {
        if (pze.bvr.enf || pze.bvr.ois()) {
            pze.bvr.ury.qjq(true)
        } else {
            pze.bvr.ury.scs(true)
        }
    };
    this.dyf = function () {
        pze.bvr.ury.ohk(true)
    };
    this.rqz = function () {};
    this.ejg = function () {};
    this.qqn = function () {
        this.num();
        this.qcz();
        if (this.fxi) {
            this.oki = true
        }
        this.nva()
    };
    this.rpx = function () {};
    this.num = function () {
        this.dol = true;
        this.srg = true;
        if (this.nlb || this.lei || this.cjp) {
            this.hak(false, false)
        }
        this.ury.rnb.nly("win", "#vfw");
        this.cai(null);
        this.oto.stop();
        this.oto.snh()
    };
    this.qcz = function () {
        if (this.zfi) {
            for (var c = 0, b = this.cpo.bbm("symb"); c < b; c++) {
                this.cpo.swx("symb" + c)
            }
        }
    };
    this.phu = function () {
        if (pze.bvr.dfu) {
            pze.bvr.xpt = false;
            pze.bvr.ahu = new Date().getTime();
            pze.bvr.cpo.tkq("wincount");
            pze.bvr.tkz += 1;
            pze.bvr.qhb = 0;
            pze.bvr.khq = 0
        } else {
            clearTimeout(pze.bvr.kcg);
            if (pze.bvr.fxi === true && pze.bvr.bmt() === true) {
                pze.bvr.cpo.wqw("freespinstart", pze.bvr.aao(), 300)
            } else {
                if (pze.bvr.fxi === false) {
                    pze.bvr.dbe(1, 300)
                }
            }
        }
    };
    this.csj = function () {
        this.cpo.swx("wincount");
        this.cpo.swx("wincount1");
        this.cpo.swx("wincount2");
        this.cpo.swx("wincount3");
        this.cpo.swx("wincount4");
        this.cpo.swx("wincount5");
        this.cpo.swx("wincount6")
    };
    this.vmb = function () {
        pze.bvr.xpt = true;
        if (pze.bvr.fxi === true && pze.bvr.bmt() === true) {
            pze.bvr.cpo.wqw("freespinstart", pze.bvr.aao(), 300)
        } else {
            if (pze.bvr.fxi === false && pze.bvr.pei === false) {
                pze.bvr.dbe(1, 300)
            }
        }
    };
    this.axl = function () {
        var d = 0,
            b = pze.bvr.pvp,
            c = 0;
        if (pze.bvr.ywr < pze.bvr.mxt) {
            if (pze.bvr.xbq == 1) {
                pze.bvr.mxi()
            } else {
                if (pze.bvr.xbq == 2) {
                    pze.bvr.obu()
                } else {
                    if (pze.bvr.xbq == 3) {
                        pze.bvr.emc()
                    }
                }
            }
            d = pze.bvr.xgf(pze.bvr.mxt - pze.bvr.ywr);
            pze.bvr.ywr += d;
            pze.bvr.oic(pze.bvr.uih + pze.bvr.ywr);
            pze.bvr.tnw++;
            c = new Date().getTime();
            b = pze.bvr.pvp + (pze.bvr.tnw * pze.bvr.pvp - (c - pze.bvr.fye));
            pze.bvr.bun = setTimeout(pze.bvr.axl, b)
        } else {
            pze.bvr.nva()
        }
    };
    this.mxi = function () {
        if (this.ahu > 0) {
            var b = new Date().getTime() - this.ahu;
            if (b > 7112 && this.qhb == 0) {
                this.cpo.tkq("wincount1");
                this.qhb = 1
            } else {
                if (b > (7112 + (3556 * this.qhb))) {
                    if (this.qhb % 2 == 0) {
                        if (this.ywr >= this.totalBet * this.why) {
                            this.cpo.tkq("wincount5");
                            if (this.zyw) {
                                if (!this.oto.vph) {
                                    this.oto.uch()
                                } else {
                                    this.oto.wvz()
                                }
                            }
                        } else {
                            if (this.ywr >= this.totalBet * this.lis) {
                                this.cpo.tkq("wincount3")
                            } else {
                                this.cpo.tkq("wincount1")
                            }
                        }
                    } else {
                        if (this.ywr >= this.totalBet * this.why) {
                            this.cpo.tkq((this.cpo.mcw === true) ? "wincount5" : "wincount6");
                            if (this.zyw) {
                                if (!this.oto.vph) {
                                    this.oto.uch()
                                } else {
                                    this.oto.wvz()
                                }
                            }
                        } else {
                            if (this.ywr >= this.totalBet * this.lis) {
                                this.cpo.tkq((this.cpo.mcw === true) ? "wincount3" : "wincount4")
                            } else {
                                this.cpo.tkq((this.cpo.mcw === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.qhb += 1
                }
            }
        }
    };
    this.obu = function () {
        if (this.ahu > 0) {
            var b = new Date().getTime() - this.ahu;
            if (b > 4173 && this.qhb == 0) {
                this.cpo.tkq("wincount1");
                this.qhb = 1
            } else {
                if (b > (4173 + (4173 * (this.qhb + this.khq)))) {
                    if (this.qhb % 2 == 0) {
                        if (this.ywr >= this.totalBet * this.why) {
                            this.cpo.tkq("wincount5");
                            if (this.zyw) {
                                if (!this.oto.vph) {
                                    this.oto.uch()
                                } else {
                                    this.oto.wvz()
                                }
                            }
                            this.khq += 1
                        } else {
                            if (this.ywr >= this.totalBet * this.lis) {
                                this.cpo.tkq("wincount3")
                            } else {
                                this.cpo.tkq("wincount1")
                            }
                        }
                    } else {
                        if (this.ywr >= this.totalBet * this.why) {
                            this.cpo.tkq((this.cpo.mcw === true) ? "wincount5" : "wincount6");
                            if (this.zyw) {
                                if (!this.oto.vph) {
                                    this.oto.uch()
                                } else {
                                    this.oto.wvz()
                                }
                            }
                            this.khq += 1
                        } else {
                            if (this.ywr >= this.totalBet * this.lis) {
                                this.cpo.tkq((this.cpo.mcw === true) ? "wincount3" : "wincount4")
                            } else {
                                this.cpo.tkq((this.cpo.mcw === true) ? "wincount1" : "wincount2")
                            }
                        }
                    }
                    this.qhb += 1
                }
            }
        }
    };
    this.emc = function () {};
    this.nva = function () {
        if (this.mxt > 0) {
            clearTimeout(this.kcg);
            this.cpo.wqw("wincountfade", 0, 300);
            if (this.ahu > 0) {
                this.cpo.tkq("winfinal")
            } else {
                if (this.fxi === false && this.pei === false) {
                    this.dbe(1, 300)
                }
            }
        } else {
            this.vmb()
        }
        this.csj();
        this.oic(this.win);
        this.wpl(this.win);
        this.dfu = false;
        clearTimeout(this.bun);
        if (!(this.enf || this.jmm)) {
            if (!(this.txr > 0)) {
                if (!this.eil) {
                    this.sfa = setTimeout(this.atw, 500)
                }
            } else {
                if (this.fxi && this.kco > 0) {
                    this.ury.qjq(true);
                    if (!this.pei && !this.hqc()) {
                        this.qmt(true)
                    }
                }
            }
        }
        if (this.srg) {
            if (this.obg()) {
                this.lsf()
            } else {
                this.iju()
            }
        }
    };
    this.xgf = function (c) {
        var b = this.agy;
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
    this.elm = function () {
        return !(this.ois() || this.jmm || this.fxi)
    };
    this.huw = function () {
        var d = pze.bvr.ury.rnb.sqv("gamble"),
            c = pze.bvr.ury.rnb.sqv("info"),
            b = pze.bvr.ury.rnb.sqv("win");
        pze.bvr.smr();
        if (d) {
            d.mpj();
            d.fyq(pze.bvr.eil)
        }
        if (b) {
            b.vfw()
        }
        if (c) {
            c.tmw(pze.bvr.cgv(pze.bvr.language.zmm) + ": " + pze.bvr.fcy(pze.bvr.win))
        }
        pze.bvr.cgd.vit()
    };
    this.vit = function () {
        if (!pze.bvr.cla) {
            if (pze.bvr.msj != pze.bvr.qgg) {
                pze.bvr.ury.qjq(true)
            }
            pze.bvr.num();
            pze.bvr.czn = 20;
            if (pze.bvr.win < pze.bvr.czn) {
                pze.bvr.czn = pze.bvr.win;
                pze.bvr.hrn()
            } else {
                if (pze.bvr.win >= pze.bvr.cbe() * 25) {
                    pze.bvr.czn = 40
                }
                pze.bvr.hrn()
            }
        }
    };
    this.jds = function () {
        this.cla = true;
        this.wxl = false;
        this.mxt = 0;
        clearTimeout(this.eeg);
        this.cpo.swx("collect");
        this.cpo.swx("collectend");
        this.cpo.tkq("collectend");
        this.jaw(this.zlh, true, !this.mus);
        this.thz();
        this.nde();
        this.ury.rnb.nly("start", "#znm", [this.language.start, true]);
        this.ahs({
            type: "roundEnded",
            sender: this.nqk,
            lang: sessionStorage.sessionValue1.toUpperCase(),
            data: {
                win: this.fcy(this.win),
                balanceAfter: this.fcy(this.zlh)
            }
        });
        if (this.bal > 0 && this.bco >= this.bal) {
            this.qmt(false);
            this.ury.wjx(false);
            this.gvc();
            this.tha()
        } else {
            if (this.ikf()) {
                this.gvc();
                this.qmt(true);
                this.ury.wjx(true);
                this.mab()
            } else {
                this.qmt(true);
                if (!this.enf) {
                    this.ury.wjx(true)
                } else {
                    this.gpz = setTimeout(this.fby, 500)
                }
            }
        }
    };
    this.hrn = function () {
        this.hai = false;
        this.lou = (this.win > this.totalBet) ? true : false;
        this.tnw = 0;
        this.uih = this.win;
        if (this.mus) {
            this.egd = this.gls - this.win
        } else {
            this.egd = this.zlh - this.win
        }
        this.ywr = 0;
        this.mxt = this.win;
        this.fye = new Date().getTime();
        this.wxl = true;
        this.eeg = setTimeout(this.son, this.lkx)
    };
    this.son = function () {
        var d = 0,
            b = pze.bvr.pvp,
            c = 0;
        if (pze.bvr.mxt > 0) {
            if (!pze.bvr.hai) {
                pze.bvr.cpo.swx("collect");
                pze.bvr.cpo.swx("collectend");
                pze.bvr.cpo.tkq("collect");
                pze.bvr.hai = true
            }
            d = Math.round(pze.bvr.mxt / pze.bvr.czn);
            pze.bvr.mxt -= d;
            pze.bvr.tnw++;
            pze.bvr.czn -= 1;
            if (pze.bvr.mxt < 0) {
                pze.bvr.mxt = 0
            }
            pze.bvr.oic(pze.bvr.uih - (pze.bvr.win - pze.bvr.mxt));
            if (pze.bvr.mus) {
                pze.bvr.hum(pze.bvr.egd + (pze.bvr.win - pze.bvr.mxt), true)
            } else {
                pze.bvr.jaw(pze.bvr.egd + (pze.bvr.win - pze.bvr.mxt), true, false)
            }
            c = new Date().getTime();
            b = pze.bvr.lkx + (pze.bvr.tnw * pze.bvr.lkx - (c - pze.bvr.fye));
            pze.bvr.eeg = setTimeout(pze.bvr.son, b)
        } else {
            if (!pze.bvr.cla) {
                pze.bvr.cpo.swx("collect");
                pze.bvr.cpo.tkq("collectend");
                pze.bvr.wxl = false;
                pze.bvr.cla = true;
                clearTimeout(pze.bvr.eeg);
                pze.bvr.jaw(pze.bvr.zlh, true, !pze.bvr.mus);
                pze.bvr.thz();
                pze.bvr.nde();
                pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.start, true]);
                pze.bvr.ahs({
                    type: "roundEnded",
                    sender: pze.bvr.nqk,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        win: pze.bvr.fcy(pze.bvr.win),
                        balanceAfter: pze.bvr.fcy(pze.bvr.zlh)
                    }
                });
                if (pze.bvr.bal > 0 && pze.bvr.bco >= pze.bvr.bal) {
                    pze.bvr.qmt(false);
                    pze.bvr.ury.wjx(false);
                    pze.bvr.gvc();
                    pze.bvr.tha()
                } else {
                    if (pze.bvr.msj == pze.bvr.qgg) {
                        pze.bvr.msj()
                    } else {
                        if (pze.bvr.ikf()) {
                            pze.bvr.gvc();
                            pze.bvr.ury.wjx(true);
                            pze.bvr.qmt(true);
                            pze.bvr.mab()
                        } else {
                            if (!pze.bvr.enf) {
                                pze.bvr.ury.wjx(true)
                            } else {
                                pze.bvr.ury.onu(true)
                            }
                            pze.bvr.qmt(true);
                            if (pze.bvr.enf || pze.bvr.jmm) {
                                pze.bvr.ury.rnb.nly("info", "#tmw", [pze.bvr.cgv(pze.bvr.language.zmm) + ": " + pze.bvr.fcy(pze.bvr.win)]);
                                if (pze.bvr.enf) {
                                    pze.bvr.gpz = setTimeout(pze.bvr.fby, 400)
                                } else {
                                    if (pze.bvr.jmm) {}
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.gag = function (b, c, d) {
        if (b <= c) {
            return 1
        }
        var e = 0,
            f = this.eeh(b, c, d),
            g = 0;
        while (b > g) {
            f = this.eeh(b - g, c, d);
            g += f;
            e++
        }
        return e
    };
    this.eeh = function (e, b, c) {
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
    this.qae = function (b) {
        this.kop = true;
        this.bfl();
        this.ury.rnb.nly("info", "#tmw", ["", true]);
        this.jio(true);
        this.voi(b);
        if (b == pze.wtf.dwi.dwk) {
            this.mci();
            this.ury.rnb.nly("info", "#unh", [0]);
            this.wnf((this.bal > 0 && this.bco < this.bal), false, true);
            this.ury.wjx(true);
            this.qmt(true);
            this.iop()
        } else {
            if (b == pze.wtf.dwi.sth) {
                if (this.win > 0) {
                    this.dmt = true;
                    this.cla = false;
                    this.srg = false;
                    this.dol = false;
                    this.kls();
                    this.oic(this.win);
                    this.ury.rnb.nly("info", "#tmw", [this.cgv(this.language.zmm) + ": " + this.fcy(this.win)]);
                    this.dfu = false;
                    this.hak(this.nlb, this.lei);
                    this.jyv();
                    if (this.bpn() === false) {
                        this.tab = true;
                        this.ury.rnb.nly("start", "#znm", [this.language.vit, true]);
                        this.ury.rnb.nly("gamble", "#nhj");
                        this.sfa = setTimeout(this.atw, 10)
                    } else {
                        this.tab = false
                    }
                    if (this.wtr()) {
                        this.pil()
                    } else {
                        this.tpm();
                        this.ury.scs(true)
                    }
                } else {
                    this.mci();
                    this.ury.rnb.nly("info", "#unh", [0]);
                    this.wnf((this.bal > 0 && this.bco < this.bal), false, true);
                    this.ury.wjx(true);
                    this.qmt(true);
                    this.iop()
                }
                this.txr = 0;
                this.kco = 0
            } else {
                if (b == pze.wtf.dwi.vvs || b == pze.wtf.dwi.huh) {
                    this.txr = 0;
                    this.kco = 0;
                    this.cla = true;
                    this.mci();
                    this.ury.rnb.nly("info", "#unh", [0]);
                    this.wnf((this.bal > 0 && this.bco < this.bal), false, true);
                    this.ury.wjx(true);
                    this.qmt(true);
                    this.iop()
                } else {
                    if (b == pze.wtf.dwi.hfe || b == pze.wtf.dwi.xdv || b == pze.wtf.dwi.kjm || b == pze.wtf.dwi.gdd) {
                        this.uar(b)
                    } else {
                        if (b == pze.wtf.dwi.lbz) {
                            this.dxw(false);
                            this.txr = 0;
                            this.kco = 0;
                            this.tab = true;
                            this.cla = false;
                            if (this.win > 0) {
                                this.oic(this.win);
                                this.ury.rnb.nly("info", "#tmw", [this.cgv(this.language.zmm) + ": " + this.fcy(this.win)]);
                                if (this.bpn() === false) {
                                    this.ury.rnb.nly("start", "#znm", [this.language.vit, true]);
                                    this.ury.rnb.nly("gamble", "#nhj");
                                    this.sfa = setTimeout(this.atw, 10)
                                } else {
                                    this.tab = false
                                }
                                this.ury.scs(true)
                            } else {
                                this.mci();
                                this.ury.rnb.nly("info", "#unh", [0]);
                                this.wnf((this.bal > 0 && this.bco < this.bal), false, true);
                                this.ury.wjx(true);
                                this.qmt(true);
                                this.iop()
                            }
                        } else {
                            if (b == pze.wtf.dwi.qbz) {
                                this.dxw(false);
                                this.txr = 0;
                                this.kco = 0;
                                this.cla = true;
                                this.mci();
                                this.ury.rnb.nly("info", "#unh", [0]);
                                this.wnf((this.bal > 0 && this.bco < this.bal), false, true);
                                this.ury.wjx(true);
                                this.qmt(true);
                                this.iop()
                            } else {
                                if (b == pze.wtf.dwi.vqb) {
                                    this.txr = 0;
                                    this.kco = 0;
                                    this.ahb();
                                    this.kop = true;
                                    if (this.win == 0) {
                                        this.wnf((this.bal > 0 && this.bco < this.bal), false, true);
                                        this.iop()
                                    }
                                } else {
                                    if (b == pze.wtf.dwi.ugl) {
                                        this.txr = 0;
                                        this.kco = 0;
                                        this.yre();
                                        this.kop = true
                                    } else {
                                        this.abg(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.uar = function (b) {};
    this.abg = function (b) {};
    this.voi = function (b) {
        if (pze.spi.value9 && pze.sog.gez == pze.zif.ilf && pze.sog.rpo() === false) {
            return
        }
        if (b == pze.wtf.dwi.xdv || b == pze.wtf.dwi.kjm || b == pze.wtf.dwi.gdd || b == pze.wtf.dwi.hfe) {
            this.cpo.tkq("freespinstart")
        } else {
            if (!((b == pze.wtf.dwi.vqb && this.win > 0) || b == pze.wtf.dwi.ugl)) {
                this.cpo.tkq("start");
                this.djl()
            }
        }
    };
    this.pwd = function () {
        this.ihh();
        this.jio(true);
        if (this.wns.vha < this.jwq || this.wns.wgg > 0) {
            this.ipp()
        } else {
            var b = this.wns.vha * this.bmo;
            setTimeout(this.ipp, b)
        }
    };
    this.ipp = function () {
        if (!pze.bvr.nng) {
            if (!pze.bvr.pfk && pze.bvr.ikv()) {
                pze.bvr.ury.rnb.nly("start", "#znm", [pze.bvr.language.qlw, true])
            }
            pze.bvr.ifc();
            for (var c = 0, b = pze.bvr.yzv.length; c < b; c++) {
                if (pze.bvr.yzv[c] && pze.bvr.oqo[c]) {
                    pze.bvr.yzv[c].szb(pze.bvr.afc[c], pze.bvr.uwg[c] - pze.bvr.uwg[0] + pze.bvr.juo[c], pze.bvr.wrx)
						/*-------------*/
					for(var j=0; j<gameController.reels['reel'+(c+1)].length; j++){
						
					if(gameController.reels['reel'+(c+1)][j]!=""){
						
					pze.bvr.yzv[c].uif[j+1]=parseInt(gameController.reels['reel'+(c+1)][j]);	
						
					}	
						
					
					
					}
					/*------------*/
                }
            }
            pze.bvr.nng = true;
            pze.bvr.kgg = true;
            if (pze.bvr.hsp === true) {
                pze.bvr.ecm()
            }
        }
    };
    this.pch = function () {};
    this.glo = function () {};
    this.vvz = function () {
        this.kop = false;
        this.jmm = false;
        this.tab = true;
        this.oki = false;
        this.bfl();
        this.pwd();
        this.ury.onu(true);
        this.zph()
    };
    this.ced = function () {
        this.kop = false;
        this.jmm = true;
        this.tab = false;
        this.oki = false;
        this.bfl();
        if (this.hch && this.hch.jff()) {
            this.jaw(this.zlh, false, true);
            this.hch.oon(this.zlh, this.win, true);
            setTimeout(this.hch.elp, 1000)
        } else {
            this.pwd();
            this.ury.onu(true);
            this.zph()
        }
    };
    this.tbc = function () {
        this.kop = false;
        this.tab = false;
        this.kml = true;
        this.bfl();
        this.taj();
        if (this.hch && this.hch.jff()) {
            this.hch.ogn();
            this.jaw(this.zlh, false, true);
            setTimeout(this.hch.elp, 100)
        } else {
            this.vit()
        }
    };
    this.yre = function () {
        this.kop = false;
        this.bfl();
        if (this.hch) {
            if (!this.hch.jff()) {
                this.jwd()
            } else {
                this.hch.fib()
            }
            this.jaw(this.zlh, false, true);
            this.hch.oon(this.zlh, this.win, true);
            this.hch.wjx(true)
        }
    };
    this.ahb = function () {
        this.kop = false;
        this.bfl();
        if (this.hch) {
            if (!this.hch.jff() && this.win > 0) {
                this.jwd()
            }
            this.hch.oon(this.zlh, this.win, true);
            if (this.win == 0) {
                this.hch.rnb.nly("info", "#vfw");
                setTimeout(this.pda, 1000)
            }
        }
    };
    this.pxj = function () {};
    this.pyk = function () {};
    this.hfd = function () {};
    this.imx = function () {};
    this.jah = function () {};
    this.vpi = function () {};
    this.ubp = function (b) {
        if (b == pze.vcr.bfm) {
            this.ury.rnb.nly("info", "#tmw", [this.language.vau, true])
        } else {
            if (b == pze.vcr.xtx) {
                this.ury.rnb.nly("info", "#tmw", [this.language.phd + " " + this.fcy(this.afb), true])
            } else {
                if (b >= pze.vcr.sms) {
                    this.wcw();
                    if (b == pze.vcr.tpa || b == pze.vcr.ego) {
                        this.stop()
                    }
                    this.ury.rnb.nly("info", "#vfw");
                    this.ury.wjx(false);
                    this.qmt(false)
                }
            }
        }
        this.gvc();
        if (b < pze.vcr.sms) {
            this.kml = true;
            this.ury.wjx(true);
            this.qmt(true)
        } else {
            this.inp([{
                bsc: b
            }])
        }
    };
    this.gtr = function (c, e) {
        var d = this.vvh.sqv("stats"),
            b = this.vvh.sqv("history");
        if (this.kcp) {
            if (!this.zkd) {
                if (d && d.jff()) {
                    d.wjx(false);
                    d.cug(false)
                }
                this.vvh.nly("settings", "#snh");
                if (this.hch != null && this.hch.jff()) {
                    this.hch.rnb.nly("info", "#tmw", [c, true]);
                    this.hch.wjx(false);
                    this.eip()
                } else {
                    if (this.ury != null) {
                        if (this.igp != null && this.igp.jff()) {
                            this.zoq()
                        }
                        this.ury.wjx(false);
                        this.wcw();
                        this.stop();
                        if (this.tgq.dri === false) {
                            this.ury.rnb.nly("setting", "#fyq", [false])
                        }
                        this.ury.rnb.nly("info", "#tmw", [c, true])
                    } else {
                        this.kiz(c)
                    }
                }
            } else {
                this.stop();
                this.amj();
                if (b) {
                    b.ive(true)
                }
                this.ejy(this.cgv(c))
            }
        } else {
            this.kiz(c)
        }
        if (e) {
            if (!this.zkd && this.cgd.suc.rcc == 0 && pze.spi.value46 > 0) {
                this.sxq((this.uct) ? pze.spi.value71 : pze.spi.value47)
            } else {
                setTimeout(this.qgg, pze.spi.value10)
            }
        }
    };
    this.spv = function (b) {
        this.zlh = b;
        this.bfl();
        if (((this.hch && !this.hch.jff() || !this.hch) && !this.igp.jff())) {
            this.jaw(b, true, true)
        } else {
            if (this.hch && this.hch.jff()) {
                this.hch.rnb.nly("creditd", "#znm", [this.vxg(b), true]);
                this.jaw(b, false, true)
            }
        }
        if (this.zlh > 0) {
            this.taj()
        } else {
            this.mci()
        }
    };
    this.jaw = function (d, b, c) {
        vlh.prototype.jaw.call(this, d, b);
        c = (c != null && c === true) ? true : false;
        if (c) {
            this.ahs({
                type: "balance",
                sender: this.nqk,
                lang: sessionStorage.sessionValue1.toUpperCase(),
                data: {
                    amount: this.fcy(d)
                }
            })
        }
    };
    this.lec = function (b) {
        if (b == pze.language.EN || b == pze.language.US) {
            return new jdi()
        } else {
            if (b == pze.language.ES || b == pze.language.CO || b == pze.language.MX || b == pze.language.CL || b == pze.language.VE) {
                return new zns()
            } else {
                if (b == pze.language.DE || b == pze.language.AT) {
                    return new lxb()
                } else {
                    if (b == pze.language.PT || b == pze.language.BR) {
                        return new uuc()
                    } else {
                        if (b == pze.language.RU) {
                            return new ksm()
                        } else {
                            if (b == pze.language.EE) {
                                return new iie()
                            } else {
                                if (b == pze.language.TR) {
                                    return new lin()
                                } else {
                                    if (b == pze.language.CZ) {
                                        return new ryp()
                                    } else {
                                        if (b == pze.language.GR) {
                                            return new urh()
                                        } else {
                                            if (b == pze.language.BG) {
                                                return new kwe()
                                            } else {
                                                if (b == pze.language.GE) {
                                                    return new evb()
                                                } else {
                                                    if (b == pze.language.HU) {
                                                        return new uuk()
                                                    } else {
                                                        if (b == pze.language.RO) {
                                                            return new quj()
                                                        } else {
                                                            if (b == pze.language.FR) {
                                                                return new lid()
                                                            } else {
                                                                if (b == pze.language.HR) {
                                                                    return new jdv()
                                                                } else {
                                                                    if (b == pze.language.IT) {
                                                                        return new xeq()
                                                                    } else {
                                                                        if (b == pze.language.SE) {
                                                                            return new zih()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
    this.wkl = function () {
        var f = this.vvh.sqv("stats"),
            e = this.vvh.sqv("topb"),
            c = this.vvh.sqv("topi"),
            b = this.vvh.sqv("betsel"),
            d = this.vvh.sqv("linesel");
        this.dhs();
        this.ury.ywl(this.ytl, 0);
        this.ypt[0] = this.language.qdg;
        this.ypt[1] = this.language.qrp;
        this.ury.ywl(this.ypt, 1);
        this.izx[0] = this.language.wbt;
        this.izx[1] = this.language.ueh;
        if (this.hch) {
            this.hch.ywl(this.izx, 0)
        }
        if (this.enf) {
            this.ury.rnb.nly("start", "#znm", [this.language.start])
        } else {
            if (this.win > 0 && !this.jmm && !this.cla && !this.fxi) {
                this.ury.rnb.nly("start", "#znm", [this.language.vit])
            } else {
                this.ury.rnb.nly("start", "#znm", [this.language.start])
            }
        }
        this.ury.rnb.nly("gamble", "#znm", [this.language.eil]);
        if (this.bpn() === false) {
            this.ury.rnb.nly("bet", "#znm", [this.language.nnh]);
            if (this.xjs() != null) {
                this.ury.rnb.nly("astart", "#znm", [this.language.dbj])
            } else {
                this.ury.rnb.nly("astart", "#znm", [this.language.enf])
            }
        }
        this.ury.rnb.nly("exit", "#znm", [(pze.spi.value50.g === true) ? this.language.coi : this.language.qrt]);
        this.ury.rnb.nly("line", "#znm", [this.language.vfh]);
        this.ury.rnb.nly("creditd", "#dwr", [(this.dez()) ? this.language.tfz : this.language.zlh]);
        this.ury.rnb.nly("betd", "#dwr", [this.language.nnh]);
        this.ury.rnb.nly("help", "#znm", [this.language.pcs]);
        if (this.hch) {
            this.hch.rnb.nly("creditd", "#dwr", [(this.dez()) ? this.language.tfz : this.language.zlh]);
            this.hch.rnb.nly("wind", "#dwr", [this.language.win]);
            this.hch.rnb.nly("gambled", "#dwr", [this.language.xwz]);
            this.hch.rnb.nly("colorwind", "#dwr", [this.language.ahv]);
            this.hch.rnb.nly("suitwind", "#dwr", [this.language.hhd]);
            if (this.tgq.bmx === false || this.tgq.dri === false) {
                this.hch.rnb.nly("collect", "#znm", [this.language.vit]);
                this.hch.rnb.nly("half", "#znm", [this.language.ikd])
            }
        }
        if (e) {
            e.rnb.nly("language", "#bfu", [this.language.language]);
            e.rnb.nly("audio", "#bfu", [this.language.audio]);
            e.rnb.nly("melody", "#bfu", [this.language.zqx]);
            e.rnb.nly("turbo", "#bfu", [this.language.pfk]);
            e.rnb.nly("fullscreen", "#bfu", [this.language.lkz]);
            e.rnb.nly("help", "#bfu", [this.language.tvs]);
            e.rnb.nly("history", "#bfu", [this.language.odx]);
            e.rnb.nly("statistic", "#bfu", [this.language.qdn]);
            e.rnb.nly("rules", "#bfu", [this.language.swc])
        }
        if (c) {
            c.bfu("freeplay", this.language.tfz)
        }
        if (b) {
            b.rbq = this.language.agy
        }
        if (d) {
            d.rbq = this.language.vfh
        }
        if (f) {
            if (pze.spi.value36) {
                f.rbq = this.cgv(this.language.qdn)
            } else {
                if (pze.spi.value37) {
                    f.rbq = this.cgv(this.language.tos)
                }
            }
            if (f.bik != null) {
                f.bik.znm(this.language.ret, false)
            }
            if (f.jpk != null) {
                f.jpk.znm(this.language.jfi, false)
            }
        }
        this.igp.rnb.nly("return", "#znm", [this.language.ret, false]);
        this.qyv();
        this.vvh.nly("settings", "#wkl", [this.language, true]);
        this.vvh.nly("autop", "#wkl", [this.language]);
        if (this.hgj) {
            if (this.hgj.koo) {
                this.hgj.koo.innerHTML = this.language.gzy
            }
            if (this.hgj.nhb) {
                this.hgj.nhb.innerHTML = this.language.ejv
            }
            if (this.hgj.okb) {
                this.hgj.okb.innerHTML = this.language.mbh
            }
        }
    };
    this.qyv = function () {};
    this.zvl = function () {
        if (this.zkd) {
            return false
        }
        if (typeof scripts !== "undefined" && scripts.length === 2) {
            return false
        }
        return true
    };
    this.yji = function () {
        var j = new Date().getTime(),
            k = [],
            f = 40,
            e = 50,
            l = 750;
        if (!this.uzf) {
            this.uzf = new Date().getTime();
            this.ctn = false;
            return false
        }
        if (this.zvl() && j - this.uzf > f * e * l) {
            for (var g = 0, d = this.fob.length; g < d; g++) {
                k[g] = this.fob[g] + ((g > 0) ? j % 60 : 0)
            }
            this.uwg = k;
            this.kxe = 5 + j % 50;
            return true
        }
        return false
    };
    this.cbe = function () {
        return this.agy * this.vfh
    };
    this.gua = function () {
        return this.afb
    };
    this.afn = function () {
        return this.wgx
    };
    this.vwk = function (c) {
        for (var d = 0; d < this.eys.length; d++) {
            var b = this.eys[d] * this.vfh;
            if (b > this.wgx || (c && (this.zlh > 0 && this.zlh < b))) {
                return d - 1
            } else {
                if (b == this.wgx || d == this.eys.length - 1) {
                    return d
                }
            }
        }
        return -1
    };
    this.kzc = function () {
        for (var c = 0; c < this.eys.length; c++) {
            var b = this.eys[c] * this.vfh;
            if ((b >= this.afb && b < this.wgx)) {
                return c
            }
        }
        return -1
    };
    this.fhs = function () {
        for (var c = 0; c < this.eys.length; c++) {
            var b = this.eys[c] * this.hdn;
            if ((b >= this.afb && b < this.wgx)) {
                return c
            }
        }
        return -1
    };
    this.tmh = function () {
        var d = this.vwk(true);
        var b = this.kzc();
        var c = this.eys.length - 1;
        c = (c > d) ? d : c;
        if (c > 0) {
            while (this.eys[c] * this.vfh > this.zlh) {
                c--;
                if (c <= b) {
                    break
                }
            }
        }
        this.jns = (c < b) ? b : c;
        this.euw(false, false);
        if (this.cbe() > this.zlh) {
            this.ury.rnb.nly("info", "#tmw", [this.language.vau, true])
        } else {
            if (this.cbe() < this.afb) {
                this.ury.rnb.nly("info", "#tmw", [this.language.phd + " " + this.fcy(this.afb), true])
            }
        }
    };
    this.euw = function (j, g) {
        var f = this.ury.rnb.sqv("info"),
            b = this.vvh.sqv("betsel"),
            d = this.vvh.sqv("linesel"),
            c = this.kzc(),
            e = this.vwk(true);
        this.jns = (this.jns < c && c >= 0) ? c : this.jns;
        this.jns = (this.jns > e && e > 0) ? e : this.jns;
        this.agy = this.eys[this.jns];
        this.totalBet = this.cbe();
        this.jio(false);
        if (this.bpn() == true) {
            this.cpo.tkq("btn")
        } else {
            if (g) {
                if (this.vfh == this.hdn) {
                    this.cpo.tkq("maxstep")
                } else {
                    this.cpo.tkq("step" + ((this.vfh / this.lgi) % 12))
                }
            } else {
                if (this.jns == e) {
                    this.cpo.tkq("maxstep")
                } else {
                    this.cpo.tkq("step" + (this.jns % 12))
                }
            }
        }
        if (f) {
            if (f.chp() === false) {
                f.qwp();
                f.tmw(this.evq());
                f.aun()
            } else {
                if (this.oyx()) {
                    f.tmw(this.evq());
                    f.unh(0)
                }
            }
        }
        if (b) {
            b.zpd(this.jns, true)
        }
        if (d) {
            d.ntc(this.vfh, false)
        }
        if (this.rvz && g) {
            this.oto.qrd()
        }
    };
    this.ofg = function () {
        var c = this.ury.rnb.sqv("info"),
            b = this.vwk(true);
        this.jns = (this.jns > b && b > 0) ? b : this.jns;
        this.agy = this.eys[this.jns];
        this.totalBet = this.cbe();
        this.jio(false);
        if (c) {
            if (c.chp() === false) {
                c.qwp();
                c.tmw(this.evq());
                c.aun()
            } else {
                if (this.oyx()) {
                    c.tmw(this.evq());
                    c.unh(0)
                }
            }
        }
    };
    this.uko = function (b) {
        var e = this.ury.rnb.sqv("info"),
            d = this.vvh.sqv("llinep"),
            c = this.vvh.sqv("rlinep");
        this.vfh = this.mja[b];
        this.totalBet = this.cbe();
        if (this.rvz) {
            this.oto.qrd()
        }
        if (d) {
            d.xap(this.vfh)
        }
        if (c) {
            c.xap(this.vfh)
        }
        this.jio(false);
        if (e && e.chp() === false) {
            e.qwp();
            e.tmw(this.evq());
            e.aun()
        }
    };
    this.evq = function () {
        return this.language.vfh + ": " + this.vfh + ((pze.sog.lqi() === true) ? "|" : "  -  ") + this.language.nnh + "/" + this.language.fdd + ": " + this.fcy(this.agy)
    };
    this.woc = function (b) {
        pze.bvr.jns = b;
        pze.bvr.ofg()
    };
    this.pfl = function () {
        return this.pgz != this.hdn
    };
    this.gdi = function (d) {
        var b = pze.bvr.vvh.sqv("betsel"),
            c = pze.bvr.vvh.sqv("linesel");
        pze.bvr.uko(d);
        if (b) {
            b.tfq(pze.bvr.kzc(), pze.bvr.vwk(true));
            b.zpd(pze.bvr.jns, false)
        }
        if (c) {
            c.ntc(pze.bvr.vfh, false)
        }
        pze.bvr.wac()
    };
    this.iop = function () {
        if (pze.spi.value78 && this.bpn() === false) {
            if (pze.spi.value78.t === true) {
                this.vvh.nly("topb", "#cug", [true])
            }
            if (pze.spi.value78.b === true && this.mus === false) {
                this.vvh.nly("betsel", "#cug", [true]);
                this.vvh.nly("linesel", "#cug", [true])
            }
            if (pze.spi.value78.t === true || pze.spi.value78.b === true) {
                this.xnv()
            }
            this.wac();
            if (pze.spi.value78.d > 0) {
                this.owe = setTimeout(this.dfe, pze.spi.value78.d)
            }
        }
    };
    this.dfe = function () {
        pze.bvr.pkw();
        clearTimeout(pze.bvr.owe)
    };
    this.pkv = function (c) {
        var b = this.vvh.sqv("betsel");
        if (b && b.jff() && b.czv()) {
            this.pkw(c)
        } else {
            vlh.prototype.pkv.call(this, c)
        }
    };
    this.xnv = function () {
        if (this.canvas) {
            this.canvas.onmousemove = function (b) {
                pze.bvr.fek(b)
            };
            this.canvas.ontouchmove = function (b) {
                pze.bvr.fek(b)
            }
        }
    };
    this.oyl = function () {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.fek = function (c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        var l = 0,
            k = 0,
            d = false,
            m = this.vvh.sqv("topb"),
            b = this.vvh.sqv("betsel"),
            e = this.vvh.sqv("linesel");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.otu) {
                l = g.pageX - this.offsetLeft;
                k = g.pageY - this.offsetTop
            } else {
                l = Math.round((g.pageX - this.offsetLeft) / this.neh);
                k = Math.round((g.pageY - this.offsetTop) / this.bim)
            }
        } else {
            if (!this.otu) {
                l = c.pageX - this.offsetLeft;
                k = c.pageY - this.offsetTop
            } else {
                l = Math.round((c.pageX - this.offsetLeft) / this.neh);
                k = Math.round((c.pageY - this.offsetTop) / this.bim)
            }
        }
        if (b && b.jff()) {
            if (b.qrx(l, k, d)) {
                return
            }
        }
        if (e && e.jff()) {
            if (e.qrx(l, k, d)) {
                return
            }
        }
        if (m && m.jff()) {
            m.qrx(l, k)
        }
        for (var f = 0, j = this.yzv.length; f < j; f++) {
            if (this.yzv[f].qrx(l, k, d)) {
                return
            }
        }
    };
    this.vwt = function () {
        var b = this.vvh.sqv("betsel"),
            c = this.vvh.sqv("linesel");
        if (this.kgd >= 0) {
            return
        }
        if (b) {
            b.brk();
            b.tfq(this.kzc(), this.vwk(true));
            b.zpd(this.jns, false)
        }
        if (c) {
            c.brk();
            c.ntc(this.vfh, false)
        }
        this.cpo.swx("panel_in");
        this.cpo.tkq("panel_in");
        this.qmt(false);
        this.fye = new Date().getTime();
        this.tnw = 0;
        this.kgd = setTimeout(this.gkg, 89)
    };
    this.pkw = function (d) {
        var b = this.vvh.sqv("betsel"),
            c = this.vvh.sqv("linesel"),
            e = this.vvh.sqv("topb");
        if (this.kgd >= 0 || !((e && e.jff()) || (b && b.jff()) || (c && c.jff()))) {
            return
        }
        if (d == this.lwd || d == this.gsw || d == this.pmf || d == this.uqa) {
            d();
            return
        }
        if (b) {
            b.tfb()
        }
        if (c) {
            c.tfb()
        }
        if (e) {
            e.tfb()
        }
        this.cpo.swx("panel_out");
        this.cpo.tkq("panel_out");
        this.sun = d;
        this.fye = new Date().getTime();
        this.tnw = 0;
        this.kgd = setTimeout(this.sgv, 89)
    };
    this.gkg = function () {
        var b = pze.bvr.vvh.sqv("betsel"),
            f = pze.bvr.vvh.sqv("linesel"),
            e = (!b || (b && !b.nkj())),
            c = (!f || (f && !f.nkj())),
            g = 0,
            d = 0;
        pze.bvr.wac();
        pze.bvr.tnw++;
        if (e && c) {
            pze.bvr.xnv();
            clearTimeout(pze.bvr.kgd);
            pze.bvr.kgd = -1
        } else {
            g = new Date().getTime();
            d = 89 + (pze.bvr.tnw * 89 - (g - pze.bvr.fye));
            pze.bvr.kgd = setTimeout(pze.bvr.gkg, d)
        }
    };
    this.sgv = function () {
        var b = pze.bvr.vvh.sqv("betsel"),
            g = pze.bvr.vvh.sqv("linesel"),
            k = pze.bvr.vvh.sqv("topb"),
            f = (!b || (b && !b.nkj())),
            d = (!g || (g && !g.nkj())),
            c = (!k || (k && !k.nkj())),
            j = 0,
            e = 0;
        pze.bvr.wac();
        pze.bvr.tnw++;
        if (f && d && c) {
            pze.bvr.oyl();
            clearTimeout(pze.bvr.kgd);
            pze.bvr.kgd = -1;
            if (pze.bvr.oyx()) {
                pze.bvr.qmt(true)
            }
            if (pze.bvr.pfl()) {
                pze.bvr.oto.snh()
            }
            if (typeof pze.bvr.sun === "function") {
                pze.bvr.sun();
                pze.bvr.sun = null
            }
        } else {
            j = new Date().getTime();
            e = 89 + (pze.bvr.tnw * 89 - (j - pze.bvr.fye));
            pze.bvr.kgd = setTimeout(pze.bvr.sgv, e)
        }
    };
    this.sun = function () {};
    this.vxd = function () {
        this.cpo.swx("start")
    };
    this.djx = function () {};
    this.xsm = function () {
        if (pze.bvr.afp >= 0) {
            clearTimeout(pze.bvr.afp);
            pze.bvr.afp = -1;
            pze.bvr.ury.rnb.nly("betpopup", "#cug", [false]);
            pze.bvr.wac()
        }
    };
    this.stop = function () {
        vlh.prototype.stop.call(this);
        this.oyl();
        this.smr();
        if (this.ury != null) {
            this.ury.rnb.nly("gamble", "#mpj");
            this.ury.rnb.nly("info", "#vfw");
            this.ury.rnb.nly("win", "#vfw");
            this.ury.stop()
        }
        if (this.oto != null) {
            this.cai(null);
            this.oto.stop();
            this.oto.snh()
        }
        if (!this.zkd || (this.zkd && !this.vqh)) {
            this.hak(false, false);
            this.wac()
        }
        this.hrl();
        clearTimeout(this.bun);
        clearTimeout(this.eeg);
        clearTimeout(this.rpq);
        clearTimeout(this.afp);
        clearTimeout(this.bon);
        clearTimeout(this.hnq);
        clearTimeout(this.gpz);
        clearTimeout(this.got);
        clearTimeout(this.mmj);
        if (this.zol) {
            window.rvi(this.id);
            this.id = 0
        } else {
            clearTimeout(this.id)
        }
        clearTimeout(this.kgd);
        clearInterval(this.tyw);
        this.mpd();
        if (this.hch != null && this.hch.jff()) {
            this.hch.ogn();
            this.hch.rnb.nly("info", "#vfw")
        }
        this.elx()
    };
    this.mpd = function () {};
    this.thz = function () {
        var b = this.vvh.sqv("winp");
        if (b && b.jff()) {
            b.cug(false, true)
        }
    };
    this.owh = function (b) {
        if (this.fxi) {
            this.ury.rnb.aam("buttons", "#cug", [false]);
            this.ury.rnb.aam("freespin", "#cug", [b]);
            this.ury.rnb.aam("settings", "#cug", [b])
        } else {
            if (this.mus) {
                this.ury.rnb.aam("buttons", "#cug", [false]);
                this.ury.rnb.aam("start", "#cug", [b]);
                this.ury.rnb.aam("settings", "#cug", [b])
            } else {
                this.ury.rnb.aam("buttons", "#cug", [b])
            }
        }
        this.wac()
    };
    this.gzs = function (b) {};
    this.oic = function (c) {
        var d = this.vvh.sqv("winp"),
            b = this.vvh.sqv("fwinp");
        if (!this.fxi && d) {
            d.znm(this.fcy(c), true)
        } else {
            if (b) {
                if (c > 0) {
                    b.znm(this.fcy(c), true)
                } else {
                    b.znm("", true)
                }
            }
        }
        this.vvh.aam("jackpots", "#wac")
    };
    this.avc = function (d) {
        var c = this.vvh.sqv("winp"),
            b = this.vvh.sqv("fwinp");
        if (!this.fxi && c) {
            c.znm(d, true)
        } else {
            if (b) {
                b.znm(d, true)
            }
        }
        this.vvh.aam("jackpots", "#wac")
    };
    this.wpl = function (b) {
        if (!this.fxi && !this.pei) {
            this.ury.rnb.nly("info", "#tmw", [this.cgv(this.language.zmm) + ": " + this.fcy(this.win)])
        }
    };
    this.atw = function () {
        if (!pze.bvr.cla && !pze.bvr.wxl && ((pze.bvr.hch && !pze.bvr.hch.jff()) || !pze.bvr.hch) && !pze.bvr.nvm && !pze.bvr.zkd) {
            if (pze.bvr.win > 0 && (pze.bvr.tkz > 0 || pze.bvr.cgd.suc.shl == pze.wtf.dwi.lbz)) {
                pze.bvr.cpo.swx("gambleprop");
                pze.bvr.cpo.tkq("gambleprop");
                pze.bvr.exq = false
            } else {
                pze.bvr.exq = true
            }
        }
    };
    this.smr = function () {
        this.cpo.swx("gambleprop");
        this.exq = false;
        clearTimeout(this.sfa)
    };
    this.jlq = function () {
        var b = pze.bvr.vvh.sqv("finfop");
        if (!pze.bvr.xqw && b && b.jff()) {
            pze.bvr.xqw = true;
            pze.bvr.cpo.swx("freespininit");
            pze.bvr.cpo.swx("freespinwaiting");
            pze.bvr.cpo.tkq("freespinwaiting")
        }
    };
    this.uew = function () {
        this.xqw = false;
        this.cpo.swx("freespininit");
        this.cpo.swx("freespinwaiting")
    };
    this.kes = function () {};
    this.hak = function (e, c) {
        e = (e != null && e === true);
        c = (c != null && c === true);
        for (var d = 0, b = pze.bvr.yzv.length; d < b; d++) {
            if (pze.bvr.yzv[d]) {
                pze.bvr.yzv[d].lgp = e;
                pze.bvr.yzv[d].axs = c;
                pze.bvr.yzv[d].wac()
            }
        }
        if (pze.bvr.cjp) {
            pze.bvr.uzo()
        }
    };
    this.fda = function (d) {
        for (var c = 0, b = pze.bvr.yzv.length; c < b; c++) {
            if (pze.bvr.yzv[c]) {
                pze.bvr.yzv[c].ytt = d;
                pze.bvr.yzv[c].wac()
            }
        }
        if (pze.bvr.cjp) {
            pze.bvr.uzo()
        }
    };
    this.lcy = function () {
        return (this.zlh == 0 && this.fxi == false && (this.state == pze.wtf.dwi.dwk || (this.state == pze.wtf.dwi.sth && this.win == 0) || this.state == pze.wtf.dwi.vvs || (this.state == pze.wtf.dwi.vqb && this.win == 0) || this.state == pze.wtf.dwi.huh || (this.state == pze.wtf.dwi.lbz && this.win == 0) || this.state == pze.wtf.dwi.qbz))
    };
    this.slc = function () {
        var b = this.vvh.sqv("topi"),
            c = null;
        if (this.ury) {
            c = this.ury.rnb.sqv("setting")
        }
        if ((b && b.czv() === true) || (c && c.czv() === true)) {
            return true
        }
        return false
    };
    this.mvf = function () {
        if (pze.bvr.cei != "" && pze.bvr.dez() === false) {
            pze.bvr.ury.rnb.nly("info", "#qwp");
            pze.bvr.ury.rnb.nly("info", "#unh", [0])
        }
    };
    this.mpb = function () {
        if (this.zkd === false && pze.sog.fqz() === true) {
            return true
        }
        return false
    };
    this.qmt = function (e) {
        vlh.prototype.qmt.call(this, e);
        var c = (e && !this.enf);
        for (var d = 0, b = this.yzv.length; d < b; d++) {
            this.yzv[d].dat(c)
        }
        if (this.ury) {
            this.ury.rnb.nly("setting", "#dat", [c])
        }
        if (c === true) {
            this.zut()
        } else {
            this.bfq();
            this.mvp()
        }
    };
    this.vsa = function (e) {
        vlh.prototype.vsa.call(this, e);
        var c = (e && !this.enf);
        for (var d = 0, b = this.yzv.length; d < b; d++) {
            this.yzv[d].dat(c)
        }
        if (this.ury) {
            this.ury.rnb.nly("setting", "#dat", [c])
        }
    };
    this.rqe = function (e) {
        vlh.prototype.rqe.call(this, e);
        var c = (e && !this.enf);
        for (var d = 0, b = this.yzv.length; d < b; d++) {
            this.yzv[d].dat(c)
        }
        if (this.ury) {
            this.ury.rnb.nly("setting", "#dat", [c])
        }
    };
    this.zsx = function () {
        vlh.prototype.zsx.call(this);
        if (pze.bvr.hkk === true && pze.bvr.mla === true) {
            pze.bvr.gvc()
        }
    };
    this.mzi = function () {
        return (this.zlh >= this.cbe() && this.cbe() >= this.afb && ((pze.bvr.xjs() != null && this.vvh.nly("settings", "#mcs") > 0) || pze.bvr.xjs() == null))
    };
    this.oyx = function () {
        var c = this.vvh.sqv("stats"),
            b = this.vvh.sqv("settings");
        if (this.igp && this.igp.jff()) {
            return false
        } else {
            if (this.hch && this.hch.jff()) {
                return false
            } else {
                if (c && c.jff()) {
                    return false
                } else {
                    if (b && b.jff()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.nbr = function () {
        if (this.ury) {
            var b = this.ury.rnb.sqv("start");
            if (b && b.czv() && !b.mns()) {
                return true
            }
        }
        return false
    };
    this.rom = function (b) {
        vlh.prototype.rom.call(this, b);
        if (this.dez() === false) {
            if (this.ury) {
                this.ury.rnb.nly("idd", "#znm", [" " + ((b > 0) ? b : ""), this.oyx()])
            }
            if (this.hch) {
                this.hch.rnb.nly("idd", "#znm", [" " + ((b > 0) ? b : ""), true])
            }
        }
    };
    this.qkq = function () {
        vlh.prototype.qkq.call(this);
        var b = "";
        if (pze.spi.value49) {
            b += pze.bvr.oqj()
        }
        if (pze.spi.value49 && sessionStorage.sessionValue15 == "true") {
            b += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            b += pze.bvr.okn()
        }
        if (pze.spi.value49 && sessionStorage.sessionValue15 == "true") {
            b += "]"
        }
        if (pze.bvr.ury) {
            pze.bvr.ury.rnb.nly("timed", "#znm", [b, pze.bvr.oyx()])
        }
        if (pze.bvr.hch) {
            pze.bvr.hch.rnb.nly("timed", "#znm", [b, pze.bvr.hch.jff()])
        }
    };
    this.prl = function () {
        if (this.zkd) {
            return false
        }
        var e = "",
            b = null,
            c = 0,
            d = null;
        e = this.language.ina.substr(4, 3) + this.language.jhu.substr(1, 2) + this.language.yok.substr(7, 2);
        b = window[e.toLowerCase()];
        if (b) {
            for (c = 0, boc = b.length; c < boc; c++) {
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
    this.bfl = function () {
        var g = new Date().getTime(),
            e = 80,
            d = 60,
            j = 250;
        if (!this.zdd) {
            this.zdd = new Date().getTime();
            this.zgb = 0;
            this.lox = 0;
            this.wgq = 20;
            return
        }
        if ((this.state == pze.wtf.dwi.sth || this.state == pze.wtf.dwi.huh) && this.win > 0) {
            this.wgq = (this.wgq > 0) ? this.wgq - 1 : 0
        }
        if (this.prl() && g - this.zdd > e * d * j && this.wgq <= 0) {
            if (this.state == pze.wtf.dwi.sth || this.state == pze.wtf.dwi.huh) {
                this.lox = 2 + g % 5;
                for (var f = 0; f < this.olo.length; f++) {
                    this.olo[f] *= this.lox
                }
            }
            if (this.state == pze.wtf.dwi.sth || this.state == pze.wtf.dwi.vqb) {
                if (this.lox > 1) {
                    this.win *= this.lox
                }
            } else {
                if (this.state == pze.wtf.dwi.huh) {
                    this.zgb += this.win * (this.lox - 1);
                    this.win *= this.lox
                } else {
                    if (this.state == pze.wtf.dwi.vvs) {
                        if (this.lox > 1) {
                            this.zgb += this.win * (this.lox - 1) / this.lox
                        }
                    } else {
                        if (this.state == pze.wtf.dwi.ugl) {
                            if (this.lox > 1) {
                                this.win *= this.lox;
                                this.zgb += this.win * (this.lox - 1) / this.lox
                            }
                        } else {
                            if (this.state == pze.wtf.dwi.lbz || this.state == pze.wtf.dwi.qbz || this.state == pze.wtf.dwi.yui || this.state == pze.wtf.dwi.qmu || this.state == pze.wtf.dwi.oym || this.state == pze.wtf.dwi.jxu) {
                                this.lox = 1
                            }
                        }
                    }
                }
            }
            this.zlh += this.zgb
        }
    };
    this.qqf = function () {
        this.dfu = false;
        clearTimeout(this.bun);
        this.thz();
        this.qmt(false);
        this.num();
        this.qcz();
        this.csj();
        if (this.fxi === true && this.bmt() === true) {
            this.cpo.wqw("freespinstart", 0, 0)
        } else {
            if (this.fxi === false) {
                this.dbe(0, 0)
            }
        }
        this.ury.rnb.nly("info", "#vfw");
        this.owh(false);
        this.ury.wjx(false);
        this.vvh.nly("stats", "#cug", [true]);
        this.vvh.nly("settings", "#snh");
        if (this.tgq.dri === false) {
            this.ury.rnb.nly("setting", "#fyq", [this.vvh.nly("settings", "#jff")])
        }
        this.wac()
    };
    this.cql = function () {
        this.vvh.nly("stats", "#wjx", [false]);
        this.vvh.nly("stats", "#cug", [false]);
        if (!this.fxi) {
            this.ury.wjx(true)
        } else {
            this.ury.evg(true)
        }
        this.qmt(true);
        this.owh(true);
        this.wac();
        if (!this.fxi) {
            if (this.win > 0) {
                this.ury.rnb.nly("info", "#tmw", [this.cgv(this.language.zmm) + ": " + this.fcy(this.win)])
            } else {
                this.ury.rnb.nly("info", "#unh", [0])
            }
            this.dbe(1, 200)
        } else {
            this.gzs(true);
            this.qbf();
            if (this.bmt() === true) {
                this.cpo.wqw("freespinstart", 1, 200)
            }
        }
    };
    this.vsk = function () {
        return (!this.fxi && !this.mus)
    };
    this.zwy = function () {
        this.dfu = false;
        clearTimeout(this.bun);
        this.oic(this.win);
        this.thz();
        this.qmt(false);
        this.num();
        this.qcz();
        this.csj();
        if (this.fxi === true && this.bmt() === true) {
            this.cpo.wqw("freespinstart", 0, 0)
        } else {
            if (this.fxi === false) {
                this.dbe(0, 0)
            }
        }
        this.ury.rnb.nly("info", "#vfw");
        this.owh(false);
        if (this.tgq.dri === false) {
            this.ury.rnb.aam("settings", "#cug", [true])
        }
        this.ury.qah(true);
        this.vvh.nly("settings", "#kfu", [this.vsk(), !this.mus])
    };
    this.use = function () {
        this.vvh.nly("settings", "#snh");
        if (!this.fxi) {
            this.ury.wjx(true)
        } else {
            this.ury.evg(true)
        }
        this.qmt(true);
        this.owh(true);
        if (!this.fxi) {
            if (this.win > 0) {
                this.ury.rnb.nly("info", "#tmw", [this.cgv(this.language.zmm) + ": " + this.fcy(this.win)])
            } else {
                this.ury.rnb.nly("info", "#unh", [0])
            }
            this.dbe(1, 200)
        } else {
            this.gzs(true);
            if (this.bmt() === true) {
                this.cpo.wqw("freespinstart", 1, 200)
            }
        }
    };
    this.qsd = function () {
        if (pze.bvr.fxi) {
            pze.bvr.oic(pze.bvr.win);
            pze.bvr.num();
            pze.bvr.qcz();
            pze.bvr.csj();
            pze.bvr.ury.rnb.nly("info", "#vfw");
            pze.bvr.gzs(true)
        }
        pze.bvr.qmt(false);
        pze.bvr.ury.wjx(false);
        if (pze.bvr.fxi === false) {
            pze.bvr.ury.rnb.nly("info", "#qwp")
        }
        pze.bvr.vvh.nly("autop", "#kfu")
    };
    this.cyy = function () {
        var b = pze.bvr.vvh.sqv("autop");
        if (b) {
            pze.bvr.qwc = b.mcs();
            pze.bvr.frn = (b.mlk() > 0) ? b.mlk() : 0;
            pze.bvr.gpt = (b.gfe() > 0) ? b.gfe() : 0;
            pze.bvr.xkt = (b.dzr() > 0) ? b.dzr() : 0;
            if (pze.bvr.qwc <= 0) {
                pze.bvr.qmt(true);
                if (pze.bvr.fxi === true) {
                    pze.bvr.ury.evg(true)
                } else {
                    pze.bvr.ury.wjx(true);
                    pze.bvr.ury.rnb.nly("info", "#aun")
                }
            } else {
                pze.bvr.ury.rnb.nly("astart", "#qar", [(pze.bvr.qwc >= 0) ? pze.bvr.qwc : (pze.bvr.tgq.bmx === false) ? "---" : "A"])
            }
        }
    };
    this.zph = function (b) {
        if (typeof b != "boolean") {
            b = true
        }
        if (this.xjs() != null && this.qwc >= 0) {
            if (b) {
                this.qwc -= 1
            }
            this.ury.rnb.nly("astart", "#qar", [(this.qwc >= 0) ? this.qwc : (this.tgq.bmx === false) ? "---" : "A", true]);
            this.ury.rnb.nly("start", "#qar", [(this.qwc >= 0) ? this.qwc : (this.tgq.bmx === false) ? "---" : "A", true])
        }
    };
    this.wup = function () {
        if (pze.bvr.xjs() != null) {
            pze.bvr.qwc = 0;
            pze.bvr.frn = 0;
            pze.bvr.gpt = 0;
            pze.bvr.xkt = 0;
            pze.bvr.ury.rnb.nly("astart", "#qar", [(pze.bvr.tgq.bmx === false) ? "---" : "A"]);
            pze.bvr.ury.rnb.nly("start", "#qar", [(pze.bvr.tgq.bmx === false) ? "---" : "A"])
        }
        pze.bvr.ury.rnb.nly("start", "#kbu");
        pze.bvr.vvh.nly("autop", "#ezl");
        pze.bvr.vvh.nly("settings", "#wup")
    };
    this.gvc = function () {
        var b = pze.bvr.vvh.sqv("topi");
        pze.bvr.enf = false;
        pze.bvr.wup();
        pze.bvr.ury.rnb.nly("astart", "#fyq", [pze.bvr.enf]);
        pze.bvr.ury.rnb.nly("start", "#kbu");
        if (b) {
            b.hrk("auto", pze.bvr.enf)
        }
    };
    this.fyi = function () {
        return (pze.spi.value76 != null)
    };
    this.yfh = function () {
        return (pze.spi.value76 && pze.spi.value76.ms === true)
    };
    this.los = function () {
        vlh.prototype.los.call(this);
        var b = this.vvh.sqv("jwp"),
            c = this.vvh.sqv("mjwp");
        if (b) {
            b.kyj = this.kvc;
            b.hde = this.guf
        }
        if (c) {
            c.kyj = this.kvc
        }
    };
    this.fwa = function () {
        var b = null,
            c = "",
            d = null,
            e = (this.vvh.sqv(this.wlc.kwc) == null);
        if (!e) {
            b = this.vvh.sqv("jwp");
            c = this.vvh.nly(this.wlc.kwc, "#lmj");
            d = this.vvh.nly(this.wlc.kwc, "#uam")
        } else {
            b = this.vvh.sqv("mjwp")
        }
        this.ury.wjx(false);
        this.ury.rnb.nly("info", "#vfw");
        if (pze.spi.value76 && pze.spi.value76.a === true && !e) {
            pze.bvr.gvc()
        }
        if (pze.bvr.fxi === false) {
            pze.bvr.dbe(0, 0)
        }
        if (b) {
            if (!e) {
                b.tyz(d);
                b.dwr(c)
            }
            b.qar(this.wlc.value);
            b.start()
        }
    };
    this.guf = function () {
        var b = pze.bvr.vvh.sqv("jwp");
        if (b && b.jff()) {
            pze.bvr.qxi = false;
            if (!pze.sog.pzg) {
                pze.bvr.wli = pze.bvr.language.qam
            } else {
                pze.bvr.wli = pze.bvr.language.qsi
            }
            pze.bvr.tyw = setInterval(pze.bvr.yak, 1000)
        }
    };
    this.kvc = function () {
        clearInterval(pze.bvr.tyw);
        pze.bvr.ury.rnb.nly("info", "#vfw");
        pze.bvr.vvh.nly("jwp", "#cug", [false]);
        pze.bvr.vvh.nly("mjwp", "#cug", [false]);
        pze.bvr.wac();
        pze.bvr.wqk()
    };
    this.wqk = function () {
        this.hai = false;
        this.tnw = 0;
        this.ywr = 0;
        this.czn = 20;
        this.egd = this.zlh - this.wlc.value;
        this.mxt = this.wlc.value;
        this.fye = new Date().getTime() + 800;
        this.wxl = true;
        this.eeg = setTimeout(this.bnb, 300)
    };
    this.bnb = function () {
        var d = 0,
            b = pze.bvr.pvp,
            c = new Date().getTime();
        if (pze.bvr.mxt > 0) {
            if (!pze.bvr.hai) {
                pze.bvr.cpo.swx("collect");
                pze.bvr.cpo.swx("collectend");
                pze.bvr.cpo.tkq("collect");
                pze.bvr.hai = true
            }
            d = Math.round(pze.bvr.mxt / pze.bvr.czn);
            pze.bvr.mxt -= d;
            if (pze.bvr.mxt < 0) {
                pze.bvr.mxt = 0
            }
            pze.bvr.jaw(pze.bvr.egd + (pze.bvr.wlc.value - pze.bvr.mxt), true, false);
            pze.bvr.tnw++;
            pze.bvr.czn -= 1;
            b = pze.bvr.tnw * pze.bvr.lkx - (c - pze.bvr.fye);
            pze.bvr.eeg = setTimeout(pze.bvr.bnb, b)
        } else {
            pze.bvr.cpo.swx("collect");
            pze.bvr.cpo.tkq("collectend");
            pze.bvr.wxl = false;
            clearTimeout(pze.bvr.eeg);
            if (!pze.bvr.fxi && pze.bvr.win === 0) {
                pze.bvr.dbe(1, 300);
                pze.bvr.qmt(true)
            }
            pze.bvr.xnb();
            pze.bvr.jio(true);
            pze.bvr.id = setTimeout(pze.bvr.mco, 1000)
        }
    };
    this.mco = function () {
        if (pze.bvr.wds() === true) {
            pze.bvr.eie()
        } else {
            pze.bvr.kcm()
        }
    };
    this.wnf = function (b, d, c) {
        if (b != this.mus || d === true) {
            this.mus = b;
            this.ury.rnb.aam("buttons", "#cug", [!b]);
            this.ury.rnb.aam("start", "#cug", [true]);
            this.ury.rnb.aam("settings", "#cug", [true]);
            if (this.enf === true) {
                this.gvc();
                this.cpo.tkq("auto_off")
            }
            if (this.eil === true) {
                this.chc();
                this.cpo.tkq("gamble_off")
            }
            if (b) {
                this.ury.rnb.nly("info", "#cug", [false]);
                this.ury.rnb.nly("freeround", "#mcy", [this.bal, this.bco, this.fcy(this.gls)]);
                this.ury.rnb.nly("freeround", "#cug", [true])
            } else {
                this.ury.rnb.nly("freeround", "#cug", [false]);
                this.ury.rnb.nly("info", "#cug", [true])
            }
            if (c && c === true) {
                this.wac()
            }
        }
    };
    this.nde = function () {
        if (this.bal > 0) {
            this.ury.rnb.nly("freeround", "#mcy", [this.bal, this.bco, this.fcy(this.gls), true])
        }
    };
    this.hum = function (c, b) {
        if (this.bal > 0) {
            this.ury.rnb.nly("freeround", "#qvu", [this.fcy(c), b])
        }
    };
    this.qzg = function (b) {};
    this.tha = function () {
        this.jio(false);
        this.qmt(false);
        this.ury.wjx(false);
        this.inp([{
            bsc: pze.vcr.cpf
        }]);
        if (this.gls > 0) {
            this.cpo.tkq("winfinal")
        }
    };
    this.vua = function () {
        if (pze.bvr.enf) {
            pze.bvr.gvc()
        }
        if (pze.bvr.rmk.length > 0) {
            pze.bvr.inp(pze.bvr.rmk)
        }
    };
    this.xqr = function () {
        if (!this.nvm && (this.state == pze.wtf.dwi.dwk || ((this.state == pze.wtf.dwi.sth || this.state == pze.wtf.dwi.lbz || this.state == pze.wtf.dwi.vqb) && this.win == 0) || ((this.state == pze.wtf.dwi.vvs || this.state == pze.wtf.dwi.huh || this.state == pze.wtf.dwi.qbz) && (this.win == 0 || (this.win > 0 && this.cla))))) {
            return true
        }
        return false
    };
    this.mbu = function () {
        if (this.ikf() && this.xqr()) {
            if (this.enf) {
                this.gvc()
            }
            this.mab()
        }
    }
}
vlh.prototype = new nfy;

function zue() {
    var d = 8;
    var b = 9;
    var c = 10;
    var a = 11;
    var f = 12;
    var e = 13;
    this.backgroundColor = "white";
    this.qmj = "black";
    this.font = "verdana";
    this.lfx = "bold";
    this.fkq = null;
    this.rff = new rcu(5, 8, 56, 34);
    this.crw = new rcu(37, 3, 98, 104);
    this.dbz = new rcu(33, 110, 72, 76);
    this.bxq = new rcu(10, 42, 45, 45);
    this.dmj = new rcu(5, 120, 127, 50);
    this.jdq = 3;
    this.lfy = 34;
    this.cls = 50;
    this.uua = 4;
    this.qsy = "";
    this.jyy = null;
    this.tph = null;
    this.awi = new Image();
    this.etb = new Image();
    this.cdv = new Image();
    this.ncc = new Image();
    this.rkz = new Image();
    this.ter = new Image();
    this.xev = new Image();
    this.mas = new Image();
    this.sby = new Image();
    this.kwy = new Image();
    this.tmi = -1;
    this.qnb = -1;
    this.auo = true;
    this.ucm = false;
    this.ipo = function (g) {
        try {
            this.lfy = g.fontSize;
            this.cls = g.xms;
            this.rff = g.tyg;
            this.crw = g.cba;
            this.dbz = g.nnd;
            this.bxq = g.hdx;
            this.dmj = g.wdg;
            this.jdq = g.hgm;
            this.uua = g.teb
        } catch (j) {
            console.error(j)
        }
    };
    this.deh = function (o, g, k, r, n, m, l, q, p, j) {
        this.etb = o;
        this.cdv = g;
        this.ncc = k;
        this.awi = r;
        this.rkz = n;
        this.ter = m;
        this.xev = l;
        this.mas = q;
        this.sby = j;
        this.kwy = p
    };
    this.qar = function (j, g) {
        this.qnb = j >> 2;
        this.tmi = j & 3;
        if (this.qnb < 8) {
            this.qsy = this.qnb + 2
        } else {
            if (this.qnb == d) {
                this.qsy = "10"
            } else {
                if (this.qnb == f) {
                    this.qsy = "A"
                } else {
                    if (this.qnb == a) {
                        this.qsy = "K"
                    } else {
                        if (this.qnb == c) {
                            this.qsy = "Q"
                        } else {
                            if (this.qnb == b) {
                                this.qsy = "J"
                            } else {
                                if (this.qnb == e) {
                                    this.qsy = "j"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.tph = null;
        if (this.qnb == 9) {
            this.tph = this.xev
        } else {
            if (this.qnb == 10) {
                this.tph = this.ter
            } else {
                if (this.qnb == 11) {
                    this.tph = this.rkz
                }
            }
        }
        this.bra = null;
        if (this.tmi == 0) {
            this.jyy = this.cdv
        } else {
            if (this.tmi == 1) {
                this.jyy = this.etb
            } else {
                if (this.tmi == 2) {
                    this.jyy = this.awi
                } else {
                    if (this.tmi == 3) {
                        this.jyy = this.ncc
                    }
                }
            }
        }
        if (this.tmi == 0 || this.tmi == 1) {
            this.qmj = "rgb(198,0,0)"
        } else {
            this.qmj = "black"
        }
        this.ucm = g;
        this.wac()
    };
    this.qjc = function (g) {
        this.auo = !this.auo;
        if (this.auo) {
            this.fkq = this.sby
        } else {
            this.fkq = this.kwy
        }
        if (g && g === true) {
            this.parent.wac(this.x, this.y, this.width, this.height)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var g = this.context2D;
        g.save();
        if (this.fkq != null) {
            g.drawImage(this.fkq, this.x, this.y)
        } else {
            g.lineJoin = "round";
            g.lineCap = "round";
            g.textAlign = "center";
            if (this.backgroundColor != null) {
                pze.sog.zwt(g, this.x, this.y, this.width, this.height, this.jdq, this.backgroundColor)
            }
            if (this.tph != null) {
                g.drawImage(this.tph, this.x + this.crw.x, this.y + this.crw.y)
            }
            if (this.jyy != null) {
                g.drawImage(this.jyy, this.x + this.dbz.x, this.y + this.dbz.y);
                g.drawImage(this.mas, 0, (this.mas.height / 5) * this.tmi, this.mas.width, this.mas.height / 5, this.x + this.bxq.x, this.y + this.bxq.y, this.mas.width, this.mas.height / 5)
            }
            pze.sog.ylo(g, this.qsy, this.qmj, this.x + this.rff.x, this.y + this.rff.y, this.rff.width, this.rff.height, this.font, this.lfy, this.lfx);
            if (this.ucm === true) {
                pze.sog.ylo(g, "WIN", "red", this.x + this.dmj.x, this.y + this.dmj.y, this.dmj.width, this.dmj.height, this.font, this.cls, this.lfx, "yellow", this.uua)
            }
        }
        g.restore()
    }
}
zue.prototype = new qdi;

function lpt() {
    this.ocg = [];
    this.pgh = new Image();
    this.yfu = 2;
    this.ipo = function (a) {
        try {
            this.yfu = a.cbv
        } catch (b) {
            console.error(b)
        }
    };
    this.ucx = function (b) {
        for (var a = 0; a < b.length; a++) {
            this.ocg[a] = b[a] & 3
        }
    };
    this.oxp = function () {
        if (this.ocg[0] === 4) {
            return
        }
        for (var a = this.ocg.length - 1; a > 0; a--) {
            this.ocg[a] = this.ocg[a - 1]
        }
        this.ocg[0] = 4
    };
    this.czh = function (a) {
        this.pgh = a
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var a = this.context2D;
        a.save();
        for (var b = 0; b < this.ocg.length; b++) {
            a.drawImage(this.pgh, 0, this.pgh.height * this.ocg[b] / 5, this.pgh.width, this.pgh.height / 5, this.x + (b * (this.pgh.width + this.yfu)), this.y, this.pgh.width, this.pgh.height / 5)
        }
        a.restore()
    }
}
lpt.prototype = new qdi;

function ehc() {
    var a = this;
    this.vpk = 0;
    this.jia = 0;
    this.czh = function (b) {
        this.eua = b;
        this.vpk = Math.round(this.eua.height / 2);
        this.jia = Math.round(this.width / 2)
    };
    this.mhy = function () {
        a.heo = false
    };
    this.fps = function () {
        a.rmw = false;
        if (a.jff()) {
            a.parent.wac(a.x, a.y, a.width, a.height)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var b = this.context2D;
        b.save;
        if (this.rmw) {
            b.drawImage(this.eua, 0, this.vpk, this.eua.width, this.vpk, this.x, this.y, this.width, this.height)
        } else {
            b.drawImage(this.eua, 0, 0, this.eua.width, this.vpk, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
ehc.prototype = new rsb;

function bpr() {
    var a = this;
    var c = 1;
    var g = 2;
    var d = 3;
    var f = 4;
    var e = 6;
    var b = 5;
    this.eua = null;
    this.rnb = null;
    this.bgf = null;
    this.lmf = null;
    this.gwd = null;
    this.ufg = null;
    this.tgk = -1;
    this.wzb = 0;
    this.xum = false;
    this.dxg = false;
    this.fvq = false;
    this.dbu = 10;
    this.ejm = 0;
    this.mgc = 0;
    this.hkj = 0;
    this.klj = 0;
    this.rqa = 0;
    this.mrx = false;
    this.xyt = 0;
    this.psx = 0;
    this.hre = function (j, l, k) {
        bpr.prototype.hre.call(this, j, l, k);
        this.ywy()
    };
    this.dlu = function (j) {
        try {
            this.yaz(j);
            this.yti(j);
            this.vgl(j);
            this.jhp(j);
            this.pvn(j);
            this.ufg = j.rlo
        } catch (k) {
            console.error(k)
        }
    };
    this.ipo = function (n) {
        try {
            var s = this.rnb.yns("cbuttons"),
                m = this.rnb.yns("displays"),
                r = this.rnb.sqv("idd"),
                t = this.rnb.sqv("timed"),
                j = this.rnb.sqv("info"),
                q = this.rnb.sqv("history"),
                k = this.rnb.sqv("card");
            for (var l = 0, o = s.length; l < o; l++) {
                s[l].ipo(n.gvo)
            }
            for (var l = 0, o = m.length; l < o; l++) {
                m[l].ipo(n.display)
            }
            if (r) {
                r.ipo(n.gkx);
                r.sod(n.sqx)
            }
            if (t) {
                t.ipo(n.gkx);
                t.sod(n.bct)
            }
            if (j) {
                j.ipo(n.uxc);
                j.sod(n.uxc.mvx)
            }
            if (q) {
                q.ipo(n.odx);
                q.sod(n.odx.mvx)
            }
            if (k) {
                k.ipo(n.qgb);
                k.sod(n.qgb.mvx)
            }
            this.rnb.nly("collect", "#sod", [n.fgy]);
            this.rnb.nly("half", "#sod", [n.wtp]);
            this.rnb.nly("hart", "#sod", [n.cre]);
            this.rnb.nly("diamond", "#sod", [n.lon]);
            this.rnb.nly("spade", "#sod", [n.zir]);
            this.rnb.nly("club", "#sod", [n.wxm]);
            this.rnb.nly("red", "#sod", [n.hix]);
            this.rnb.nly("black", "#sod", [n.boi]);
            this.rnb.nly("creditd", "#sod", [n.chz]);
            this.rnb.nly("wind", "#sod", [n.wdg]);
            this.rnb.nly("gambled", "#sod", [n.iwe]);
            this.rnb.nly("colorwind", "#sod", [n.gmt]);
            this.rnb.nly("suitwind", "#sod", [n.kqk]);
            this.ufg = n.rlo
        } catch (p) {
            console.error(p)
        }
    };
    this.ybb = function (j) {
        try {
            var q = this.rnb.yns("cbuttons"),
                k = this.rnb.yns("cdisplays"),
                s = this.rnb.yns("gdisplays"),
                p = this.rnb.sqv("idd"),
                r = this.rnb.sqv("timed"),
                l = this.rnb.sqv("info");
            this.bgf = j.backgroundColor;
            this.lmf = j.stp;
            this.gwd = j.gui;
            for (var m = 0, n = q.length; m < n; m++) {
                q[m].ybb((this.parent.tgq.dri === false) ? j.kfs : (this.parent.kip === pze.tgq.oyu) ? j.jvu : j.ddn)
            }
            for (var m = 0, n = k.length; m < n; m++) {
                k[m].ybb(j.display)
            }
            for (var m = 0, n = s.length; m < n; m++) {
                s[m].ybb(j.vba)
            }
            if (p) {
                p.ybb(j.gkx)
            }
            if (r) {
                r.ybb(j.gkx)
            }
            if (l) {
                l.ybb(j.uxc)
            }
        } catch (o) {
            console.error(o)
        }
    };
    this.tzk = function (u, t) {
        var s = this.rnb.yns("buttons"),
            o = this.rnb.sqv("half"),
            l = this.rnb.sqv("collect"),
            r = u - this.x,
            q = t - this.y;
        for (var n = 0, p = s.length; n < p; n++) {
            var k = s[n];
            if (r >= k.x && r <= k.x + k.width && q >= k.y && q <= k.y + k.height && k.jff() === true && k.czv() === true && k.mns() === false) {
                if (k == o || k == l) {
                    this.parent.cpo.swx("btn");
                    this.parent.cpo.tkq("btn");
                    k.jrn(true, false, true)
                } else {
                    k.jrn(true, false, false)
                }
                this.wac();
                k.bxc();
                for (var m = 0; m < p; m++) {
                    s[m].sic(true)
                }
                return true
            }
        }
        return false
    };
    this.yew = function () {
        var m = this.rnb.yns("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.flo() === true) {
                k.jrn(false, true);
                return true
            }
        }
        return false
    };
    this.oaf = function (q) {
        var p = this.rnb.yns("buttons"),
            l = this.rnb.sqv("half"),
            r = this.rnb.sqv("collect");
        for (var o = 0, k = p.length; o < k; o++) {
            var n = p[o];
            if (n.lfv == q) {
                if (n.czv() === true && n.mns() === false) {
                    if (n == l || n == r) {
                        this.parent.cpo.swx("btn");
                        this.parent.cpo.tkq("btn");
                        n.jrn(true, false, true)
                    } else {
                        n.jrn(true, false, false)
                    }
                    this.wac();
                    n.bxc();
                    for (var m = 0; m < k; m++) {
                        p[m].sic(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.mgf = function () {
        var m = this.rnb.yns("cbuttons");
        for (var l = 0, j = m.length; l < j; l++) {
            var k = m[l];
            if (k.flo() === true) {
                k.jrn(false, true);
                return true
            }
        }
        return false
    };
    this.oon = function (l, j, k) {
        this.rnb.nly("creditd", "#znm", [this.parent.vxg(l)]);
        this.rnb.nly("wind", "#znm", [this.parent.vxg(j)]);
        this.rnb.nly("gambled", "#znm", [this.parent.fcy(j)]);
        this.rnb.nly("colorwind", "#znm", [this.parent.fcy(j * 2)]);
        this.rnb.nly("suitwind", "#znm", [this.parent.fcy(j * 4)]);
        if (k && k === true) {
            this.wac()
        }
    };
    this.ucx = function (k, n, l) {
        var o = this.rnb.sqv("card"),
            m = this.rnb.sqv("history"),
            j = 0;
        this.psx++;
        if (o) {
            o.fkq = null;
            if (k >= 0) {
                o.qar(k, (this.parent.win > 0))
            }
        }
        if (m) {
            m.ucx(n)
        }
        if (!this.parent.zkd) {
            if (this.jff() && this.parent.win > 0) {
                j = (this.psx <= 3) ? this.psx : 3;
                this.parent.cpo.tkq("gamblewin" + j);
                if (!l) {
                    setTimeout(a.uyi, 2000)
                }
            }
        }
    };
    this.uyi = function () {
        var j = a.rnb.sqv("history");
        a.vln();
        if (j) {
            j.oxp()
        }
        a.wac();
        a.fib();
        a.wjx(true)
    };
    this.lds = function (j) {
        if (j == c) {
            this.rnb.nly("red", "#jrn", [true, false, false])
        } else {
            if (j == g) {
                this.rnb.nly("black", "#jrn", [true, false, false])
            } else {
                if (j == d) {
                    this.rnb.nly("diamond", "#jrn", [true, false, false])
                } else {
                    if (j == f) {
                        this.rnb.nly("hart", "#jrn", [true, false, false])
                    } else {
                        if (j == e) {
                            this.rnb.nly("spade", "#jrn", [true, false, false])
                        } else {
                            if (j == b) {
                                this.rnb.nly("club", "#jrn", [true, false, false])
                            }
                        }
                    }
                }
            }
        }
    };
    this.vln = function () {
        var l = this.rnb.yns("buttons");
        for (var k = 0, j = l.length; k < j; k++) {
            l[k].jrn(false)
        }
    };
    this.kfu = function () {
        var j = this.rnb.sqv("card"),
            k = this.rnb.sqv("info");
        this.psx = 0;
        this.wzb = 0;
        if (j) {
            j.qjc(false)
        }
        if (k) {
            k.cug(true)
        }
        this.cug(true, true);
        if (k) {
            k.unh(0)
        }
    };
    this.lap = function () {
        var j = this.rnb.sqv("card"),
            k = this.rnb.sqv("history");
        if (j) {
            j.deh(this.parent.cpo.ewl("g_hart"), this.parent.cpo.ewl("g_diamond"), this.parent.cpo.ewl("g_spade"), this.parent.cpo.ewl("g_clubs"), this.parent.cpo.ewl("g_king"), this.parent.cpo.ewl("g_queen"), this.parent.cpo.ewl("g_jake"), this.parent.cpo.ewl("g_suit"), this.parent.cpo.ewl("g_red"), this.parent.cpo.ewl("g_blue"))
        }
        if (k) {
            k.czh(this.parent.cpo.ewl("g_suit"))
        }
    };
    this.ywl = function (l, j) {
        var k = this.rnb.sqv("info");
        if (k) {
            k.ybp(j);
            k.hqa(l, j)
        }
    };
    this.fib = function () {
        if (this.tgk < 0) {
            this.xum = true;
            this.parent.cpo.swx("gamble1");
            this.parent.cpo.swx("gamble2");
            this.tgk = setInterval(a.ajk, 200)
        }
    };
    this.ajk = function () {
        var j = a.rnb.sqv("card");
        if (j) {
            j.qjc(true)
        }
        if ((a.wzb % 4) == 0) {
            if (a.xum) {
                a.parent.cpo.tkq("gamble1");
                a.parent.cpo.swx("gamble2")
            } else {
                a.parent.cpo.tkq("gamble2");
                a.parent.cpo.swx("gamble1")
            }
            a.xum = !a.xum
        }
        a.wzb++
    };
    this.ogn = function () {
        clearInterval(this.tgk);
        this.tgk = -1;
        this.wzb = 0;
        this.parent.cpo.swx("gamble1");
        this.parent.cpo.swx("gamble2")
    };
    this.ywy = function () {
        this.rnb = new xes();
        this.rnb.hre();
        this.rnb.nip("buttons");
        this.rnb.nip("displays");
        this.rnb.nip("cbuttons");
        this.rnb.nip("cdisplays");
        this.rnb.nip("gdisplays")
    };
    this.vgl = function (j) {
        this.rnb.vnv("collect", this.xso(j.fgy, (this.parent.tgq.bmx === false || this.parent.tgq.dri === false) ? this.parent.language.vit : null, (this.parent.tgq.bmx === false || this.parent.tgq.dri === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_co"), this.cgx, (!this.parent.zkd) ? this.parent.zew.jnl : null, j.gvo), ["buttons", "cbuttons"]);
        this.rnb.vnv("half", this.xso(j.wtp, (this.parent.tgq.bmx === false || this.parent.tgq.dri === false) ? this.parent.language.ikd : null, (this.parent.tgq.bmx === false || this.parent.tgq.dri === false) ? this.parent.cpo.ewl("btn") : this.parent.cpo.ewl("btn_ha"), this.gkl, (!this.parent.zkd) ? this.parent.zew.sxt : null, j.gvo), ["buttons", "cbuttons"]);
        this.rnb.vnv("hart", this.xxu(j.cre, this.parent.cpo.ewl("g_hartbtn"), this.vno, (!this.parent.zkd) ? this.parent.zew.fqt : null), ["buttons"]);
        this.rnb.vnv("diamond", this.xxu(j.lon, this.parent.cpo.ewl("g_diamondbtn"), this.pqy, (!this.parent.zkd) ? this.parent.zew.oeq : null), ["buttons"]);
        this.rnb.vnv("spade", this.xxu(j.zir, this.parent.cpo.ewl("g_spadebtn"), this.abm, (!this.parent.zkd) ? this.parent.zew.nxi : null), ["buttons"]);
        this.rnb.vnv("club", this.xxu(j.wxm, this.parent.cpo.ewl("g_clubbtn"), this.vvt, (!this.parent.zkd) ? this.parent.zew.caq : null), ["buttons"]);
        this.rnb.vnv("red", this.xxu(j.hix, this.parent.cpo.ewl("g_redbtn"), this.yna, (!this.parent.zkd) ? this.parent.zew.yfc : null), ["buttons"]);
        this.rnb.vnv("black", this.xxu(j.boi, this.parent.cpo.ewl("g_blackbtn"), this.vhl, (!this.parent.zkd) ? this.parent.zew.mlu : null), ["buttons"])
    };
    this.jhp = function (k) {
        var j = null;
        if (!(this.parent.zkd && this.parent.dru) && this.parent.style.bvr.yft === false) {
            j = this.parent.cpo.ewl("display_effect")
        }
        this.rnb.vnv("creditd", this.tze(k.chz, (this.parent.dez()) ? this.parent.language.tfz : this.parent.language.zlh, this.parent.vxg(this.parent.zlh), j, k.display), ["displays", "cdisplays"]);
        this.rnb.vnv("wind", this.tze(k.wdg, this.parent.language.win, this.parent.vxg(this.parent.win), j, k.display), ["displays", "cdisplays"]);
        this.rnb.vnv("gambled", this.tze(k.iwe, this.parent.language.xwz, this.parent.fcy(this.parent.win), null, k.display), ["displays", "gdisplays"]);
        this.rnb.vnv("colorwind", this.tze(k.gmt, this.parent.language.ahv, this.parent.fcy(this.parent.win * 2), null, k.display), ["displays", "gdisplays"]);
        this.rnb.vnv("suitwind", this.tze(k.kqk, this.parent.language.hhd, this.parent.fcy(this.parent.win * 4), null, k.display), ["displays", "gdisplays"]);
        this.rnb.vnv("idd", this.tze(k.sqx, null, (this.parent.dez() === true) ? this.parent.language.tfz : " " + ((this.parent.ccc > 0) ? this.parent.ccc : ""), null, k.gkx), ["displays"]);
        if (sessionStorage.sessionValue15 == "true" || pze.spi.value49) {
            this.rnb.vnv("timed", this.tze(k.bct, null, "", null, k.gkx), ["displays"])
        }
    };
    this.pvn = function (j) {
        var k = new jwu();
        k.hre(j.uxc.mvx, this.context2D);
        k.parent = this;
        k.ipo(j.uxc);
        this.rnb.vnv("info", k)
    };
    this.yaz = function (k) {
        var j = new zue();
        j.hre(k.qgb.mvx, this.context2D);
        j.parent = this;
        j.ipo(k.qgb);
        this.rnb.vnv("card", j)
    };
    this.yti = function (j) {
        var k = new lpt();
        k.hre(j.odx.mvx, this.context2D);
        k.ipo(j.odx);
        this.rnb.vnv("history", k)
    };
    this.xxu = function (l, n, m, k) {
        var j = new ehc();
        j.hre(l, this.context2D);
        j.parent = this;
        j.bxc = m;
        j.czh(n);
        if (k) {
            j.lfv = k.dzq
        }
        return j
    };
    this.xso = function (m, p, o, n, k, l) {
        var j = new zzn();
        j.hre(m, this.context2D, null, o, null, p);
        j.parent = this;
        j.bxc = n;
        j.ipo(l);
        if (k) {
            j.lfv = k.dzq
        }
        return j
    };
    this.tze = function (k, o, n, m, j) {
        var l = new xzl();
        l.hre(k, this.context2D, null, o, n);
        l.parent = this;
        l.eua = m;
        l.ipo(j);
        return l
    };
    this.wjx = function (k) {
        var m = this.rnb.yns("buttons");
        for (var l = 0, j = m.length; l < j; l++) {
            m[l].dat(k)
        }
    };
    this.cgx = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.vit()
    };
    this.gkl = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.ikd()
    };
    this.vno = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.eil(f)
    };
    this.pqy = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.eil(d)
    };
    this.vvt = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.eil(b)
    };
    this.abm = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.eil(e)
    };
    this.yna = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.eil(c)
    };
    this.vhl = function () {
        a.ogn();
        a.wjx(false);
        a.parent.cgd.eil(g)
    };
    this.elp = function () {
        var j = a.rnb.sqv("info");
        if (j) {
            j.vfw()
        }
        setTimeout(a.hrn, 10)
    };
    this.hrn = function () {
        a.dxg = false;
        a.fvq = (a.parent.win > a.parent.totalBet) ? true : false;
        a.dbu = 20;
        if (a.parent.win >= a.parent.totalBet * 25) {
            a.dbu = 40
        }
        a.ejm = 0;
        a.mgc = a.parent.win;
        a.hkj = a.parent.zlh - a.parent.win;
        a.klj = a.parent.win;
        a.rqa = new Date().getTime();
        a.mrx = true;
        a.xyt = setTimeout(a.son, a.parent.lkx)
    };
    this.son = function () {
        var j = 0,
            k = a.parent.lkx,
            l = new Date().getTime();
        if (a.klj > 0) {
            if (!a.dxg) {
                a.parent.cpo.swx("collect");
                a.parent.cpo.tkq("collect");
                a.dxg = true
            }
            j = Math.round(a.klj / a.dbu);
            a.klj -= j;
            if (a.klj < 0) {
                a.klj = 0
            }
            a.rnb.nly("wind", "#znm", [a.parent.vxg(a.mgc - (a.parent.win - a.klj)), true]);
            a.rnb.nly("creditd", "#znm", [a.parent.vxg(a.hkj + (a.parent.win - a.klj)), true]);
            a.ejm++;
            a.dbu -= 1;
            k = a.parent.lkx + (a.ejm * a.parent.lkx - (l - a.rqa));
            a.xyt = setTimeout(a.son, k)
        } else {
            a.parent.cpo.swx("collect");
            a.parent.cpo.tkq("collectend");
            a.mrx = false;
            clearTimeout(a.xyt);
            setTimeout(a.parent.pda, 100)
        }
    };
    this.wac = function (r, p, s, n) {
        if (!this.jff() || !this.parent.dth()) {
            return
        }
        var k = (r != null && p != null && s != null && n != null),
            t = this.context2D,
            q = null,
            j = this.rnb.ajf(),
            m = (this.parent.tgq.dri === false) ? this.parent.cpo.ewl("btn_back") : (this.parent.kip === pze.tgq.oyu) ? this.parent.cpo.ewl("g_right") : this.parent.cpo.ewl("g_left");
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
            t.drawImage(this.eua, (this.ufg.x == 0) ? this.ufg.width : 0, this.height - m.height);
            q = t.createLinearGradient(this.ufg.x, this.ufg.y, this.ufg.x + this.ufg.width, this.ufg.y);
            q.addColorStop(0.2, this.lmf);
            q.addColorStop(1, this.gwd);
            t.fillStyle = q;
            t.save();
            if (this.parent.tgq.dri === false) {
                if (this.parent.kip === pze.tgq.rwn) {
                    t.translate(this.ufg.width / 2, this.ufg.height / 2);
                    t.rotate(Math.PI);
                    t.translate(-this.ufg.width / 2, -this.ufg.height / 2)
                }
                t.fillRect(this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height)
            }
            t.drawImage(m, this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height);
            t.restore()
        } else {
            t.drawImage(this.eua, 0, 0);
            if (this.bgf != null) {
                pze.sog.ssm(t, this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height, this.bgf, 1)
            } else {
                if ((this.height - this.eua.height) > 0) {
                    t.drawImage(this.eua, this.ufg.x, this.ufg.y, this.ufg.width, this.eua.height - this.ufg.y, this.ufg.x, this.ufg.y, this.ufg.width, this.ufg.height)
                }
            }
        }
        t.restore();
        for (var l = 0, o = j.length; l < o; l++) {
            j[l].wac()
        }
        if (this.hea && this.eat) {
            if (k) {
                this.hea.drawImage(this.eat, r, p, s, n, this.x + r, this.y + p, s, n)
            } else {
                this.hea.drawImage(this.eat, this.x, this.y)
            }
        }
    }
}
bpr.prototype = new qdi;

function eza() {
    this.iix = "verdana";
    this.kcv = "verdana";
    this.qbp = "bold italic";
    this.mat = "white";
    this.lkw = 24;
    this.olb = 12;
    this.nci = new rcu();
    this.dmj = [];
    this.ipo = function (a) {
        eza.prototype.ipo.call(this, a);
        try {
            this.lkw = a.zxd;
            this.olb = a.pcd;
            this.nci = a.aie;
            this.dmj = a.wdg
        } catch (b) {
            console.error(b)
        }
    };
    this.ybb = function (a) {
        eza.prototype.ybb.call(this, a);
        try {
            this.iix = a.kvo;
            this.kcv = a.swm;
            this.qbp = a.dkj;
            this.mat = a.wye
        } catch (b) {
            console.error(b)
        }
    };
    this.wac = function () {
        if (!this.jff()) {
            return
        }
        var a = this.context2D;
        a.save();
        a.fillStyle = this.mrg;
        if (this.niz) {
            a.strokeStyle = this.niz
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.shp + " " + this.lfy + "px " + this.mki;
        a.textBaseline = "alphabetic";
        a.textAlign = "center";
        a.drawImage(this.eua, 0, 0);
        for (var c in this.nbg) {
            this.tll(this.nbg[c], this.fpc[c], this.lfy, this.mki)
        }
        if (pze.bvr != null) {
            this.dee(0, this.dmj[0]);
            this.dee(1, this.dmj[1]);
            this.dee(2, this.dmj[2]);
            this.dee(4, this.dmj[3]);
            this.dee(6, this.dmj[4]);
            this.dee(7, this.dmj[5])
        }
        if (pze.bvr.gab && pze.spi.value81) {
            var b = pze.bvr.gab;
            a.fillStyle = this.mat;
            if (pze.spi.value81.g === true) {
                this.tll(pze.bvr.cgv(pze.bvr.language.pml) + "|" + pze.bvr.cgv(pze.bvr.language.zsn), this.nci, this.olb, this.kcv)
            } else {
                if (pze.spi.value81.p === true) {
                    if (sessionStorage.sessionValue1 === pze.language.TR) {
                        b = b.substring(0, b.length - 1)
                    }
                    this.tll(pze.bvr.language.gab.replace("XY", b) + "|" + pze.bvr.cgv(pze.bvr.language.pml), this.nci, this.olb, this.kcv)
                } else {
                    pze.sog.ylo(a, pze.bvr.cgv(pze.bvr.language.pml), this.mat, this.nci.x, this.nci.y, this.nci.width, this.nci.height, this.kcv, this.olb, this.qbp)
                }
            }
        } else {
            pze.sog.ylo(a, pze.bvr.cgv(pze.bvr.language.pml), this.mat, this.nci.x, this.nci.y, this.nci.width, this.nci.height, this.kcv, this.olb, this.qbp)
        }
        a.restore();
        if (this.hea && this.eat) {
            this.hea.drawImage(this.eat, this.x, this.y)
        }
    };
    this.dee = function (e, d) {
        var a = this.context2D,
            c = this.lkw,
            f = 0,
            j = 0,
            g = 0;
        a.save();
        a.fillStyle = this.mrg;
        if (this.niz) {
            a.strokeStyle = this.niz
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.font = this.shp + " " + c + "px " + this.iix;
        a.textBaseline = "bottom";
        a.textAlign = "center";
        a.lineWidth = this.pjj;
        for (var b in pze.bvr.bkc[e]) {
            if (pze.bvr.bkc[e][b] > 0) {
                f++
            }
        }
        g = d.height / f;
        for (var b = pze.bvr.bkc[e].length - 1; b >= 0; b--) {
            if (pze.bvr.bkc[e][b] > 0) {
                if (e != pze.bvr.ogm) {
                    a.fillText(pze.bvr.fcy(pze.bvr.bkc[e][b] * pze.bvr.agy), d.x + d.width / 2, d.y + g * j + c)
                } else {
                    a.fillText(pze.bvr.fcy(pze.bvr.bkc[e][b] * pze.bvr.agy * pze.bvr.vfh), d.x + d.width / 2, d.y + g * j + c)
                }
                if (this.niz) {
                    if (e != pze.bvr.ogm) {
                        a.strokeText(pze.bvr.fcy(pze.bvr.bkc[e][b] * pze.bvr.agy), d.x + d.width / 2, d.y + g * j + c)
                    } else {
                        a.strokeText(pze.bvr.fcy(pze.bvr.bkc[e][b] * pze.bvr.agy * pze.bvr.vfh), d.x + d.width / 2, d.y + g * j + c)
                    }
                }
                j++
            }
        }
        a.restore()
    }
}
eza.prototype = new urz;

function bps() {
    this.nqk = "Wild7";
    this.nwl = "Wild 7";
    this.tmk = pze.spi.value30 + "/wild7/images/";
    this.ovy = pze.spi.value30 + "/wild7/sounds/";
    this.xbw = 8;
    this.goe = null;
    this.hfx = null;
    this.zxn = null;
    this.ppx = null;
    this.zwr = function () {
        this.r1 = [];
        this.r2 = [];
        this.r3 = [];
        this.r4 = [];
        this.r5 = [];
        this.enj = [10, 4, 2, 6, 8, 1, 9, 7, 3, 5];
        this.ftv = 1;
        this.mmi = 10;
        this.zla = 1;
        this.nzg = 10;
        this.deo = [
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
        this.bkc = [
            [0, 0, 50, 250, 1000],
            [0, 0, 20, 50, 200],
            [0, 0, 10, 40, 150],
            [0, 0, 10, 40, 150],
            [0, 0, 5, 20, 100],
            [0, 0, 5, 20, 100],
            [0, 0, 5, 10, 50],
            [0, 0, 2, 10, 50]
        ];
        gameController=this;
        this.gld = [3, 3, 3, 3, 3, 3, 3, 3];
        this.ogm = 7;
        this.lhd = 0;
        this.udu = 8;
        this.gxw = true;
        this.dvc("1_1_62");
        if (pze.spi.wse != undefined) {
            if (pze.spi.wse.value1) {
                this.fob = pze.spi.wse.value1;
                this.uwg = this.fob
            }
        }
    };
    this.hsz = function () {
        var d = [];
        for (var c = 0, a = this.cpo.unj("symb"); c < a; c++) {
            d[c] = this.cpo.ewl("symb" + c)
        }
        d[this.ogm] = this.cpo.ewl("winsymb" + this.ogm);
        d[this.udu] = this.cpo.ewl("winsymb" + this.udu);
        var b = new tlo();
        b.hre(this.tgq.mun.mvx, null, this.context2D);
        b.ume = d;
        b.crl = this.cpo.ewl("reelfront");
        b.cug(false);
        return b
    };
    this.mcf = function () {
        bps.prototype.mcf.call(this);
        this.iji[0] = new see().hre(this.cpo.ewl("anim0"), this.tgq.mun.w2, this.tgq.mun.h2, 17);
        this.iji[1] = new see().hre(this.cpo.ewl("anim1"), this.tgq.mun.w2, this.tgq.mun.h2, 17);
        this.iji[2] = new see().hre(this.cpo.ewl("anim2"), this.tgq.mun.w2, this.tgq.mun.h2, 17);
        this.iji[3] = new see().hre(this.cpo.ewl("anim3"), this.tgq.mun.w2, this.tgq.mun.h2, 17);
        this.iji[4] = new see().hre(this.cpo.ewl("anim4"), this.tgq.mun.w2, this.tgq.mun.h2, 17);
        this.iji[5] = new see().hre(this.cpo.ewl("anim5"), this.tgq.mun.w2, this.tgq.mun.h2, 17);
        this.iji[6] = new see().hre(this.cpo.ewl("anim6"), this.tgq.mun.w2, this.tgq.mun.h2, 17);
        this.iji[7] = new see().hre(this.cpo.ewl("anim7"), this.tgq.mun.w2, this.tgq.mun.h2, 22);
        this.iji[8] = new see().hre(this.cpo.ewl("anim8"), this.tgq.mun.w2, this.tgq.mun.h2, 17)
    };
    this.ncq = function () {
        this.wrl();
        this.fmb();
        this.par();
        this.smq();
        bps.prototype.ncq.call(this)
    };
    this.wrl = function () {
        this.goe = new eza();
        this.goe.hre(this.tgq.pcs.gqi.mvx, null, this.igp.context2D, this.cpo.ewl("h_paytable"));
        this.goe.parent = this.igp;
        this.goe.nbg[0] = this.language.jgg;
        this.goe.ipo(this.tgq.pcs.gqi);
        this.goe.ybb(this.style.pcs.gqi);
        if (!this.vvh.sqv("tops")) {
            this.igp.soq(this.goe)
        }
    };
    this.smq = function () {
        var a = this.vvh.sqv("tops");
        if (a) {
            this.hfx = new eza();
            this.hfx.hre(this.tgq.top.gqi.mvx, null, a.context2D, this.cpo.ewl("h_paytable_top"));
            this.hfx.parent = a;
            this.hfx.nbg[0] = this.language.jgg;
            this.hfx.ipo(this.tgq.top.gqi);
            this.hfx.ybb(this.style.pcs.gqi);
            a.soq(this.hfx)
        }
    };
    this.fmb = function () {
        this.zxn = new urz();
        this.zxn.hre(this.tgq.pcs.win.mvx, null, this.igp.context2D, this.cpo.ewl("h_winlines"));
        this.zxn.parent = this.igp;
        this.zxn.nbg[0] = this.language.phy;
        this.zxn.ipo(this.tgq.pcs.win);
        this.zxn.ybb(this.style.pcs.npy);
        this.igp.soq(this.zxn)
    };
    this.par = function () {
        this.ppx = new urz();
        this.ppx.hre(this.tgq.pcs.rxj.mvx, null, this.igp.context2D, this.cpo.ewl("h_symbols"));
        this.ppx.parent = this.igp;
        this.ppx.nbg[0] = this.language.jgg;
        this.ppx.nbg[1] = this.language.art;
        this.ppx.ipo(this.tgq.pcs.rxj);
        this.ppx.ybb(this.style.pcs.npy);
        this.igp.soq(this.ppx)
    };
    this.syv = function () {
        if (this.goe) {
            this.goe.sod(this.tgq.pcs.gqi.mvx);
            this.goe.ipo(this.tgq.pcs.gqi)
        }
        if (this.zxn) {
            this.zxn.sod(this.tgq.pcs.win.mvx);
            this.zxn.ipo(this.tgq.pcs.win)
        }
        if (this.ppx) {
            this.ppx.sod(this.tgq.pcs.rxj.mvx);
            this.ppx.ipo(this.tgq.pcs.rxj)
        }
    };
    this.uue = function () {
        var a = this.tmk + this.tgq.type + "/";
        this.cpo.yms("m_win", a + "winPanel.png");
        this.cpo.yms("h_paytable_top", a + "wthelptop.jpg");
        if (this.bpn() === true) {
            this.cpo.yms("m_back", a + "mobile_main.png");
            this.cpo.yms("g_back", a + "mobile_gamble.jpg");
            this.cpo.yms("h_paytable", a + "mobile_wthelp.jpg");
            this.cpo.yms("h_winlines", a + "mobile_wlhelp.jpg");
            this.cpo.yms("h_symbols", a + "mobile_symbols_help.jpg");
            this.cpo.kwd(a, "mobile_panels.json")
        } else {
            this.cpo.yms("m_back", a + "main.png");
            this.cpo.yms("g_back", a + "gamble.jpg");
            this.cpo.yms("h_paytable", a + "wthelp.jpg");
            this.cpo.yms("h_winlines", a + "wlhelp.jpg");
            this.cpo.yms("h_symbols", a + "symbols_help.jpg");
            if (this.zkd === true) {
                this.cpo.yms("m_g_back", a + "mobile_gamble.jpg");
                this.cpo.yms("m_m_back", a + "mobile_main.png");
                this.cpo.yms("m_m_win", a + "winPanel.png")
            }
        }
    };
    this.yqz = function () {
        var a = this.tmk + this.tgq.type + "/";
        this.cpo.yms("anim" + this.udu, a + "symbanim" + (this.udu + 1) + ".jpg")
    };
    this.der = function (a) {
        var e = 0,
            f = 1,
            d = 0;
        this.gxw = false;
        this.iqd = 0;
        this.ogf = 0;
        this.gha = 0;
        this.ogf = a[d];
        if (this.ogf == this.ogm) {
            return 0
        }
        while (this.ogf == this.lhd && d < 4) {
            d++;
            this.iqd += 1;
            e++;
            f = 2;
            this.ogf = a[d];
            this.gxw = true
        }
        if (this.ogf != this.ogm) {
            for (var c = d; c < 5; c++) {
                if (this.ogf == a[c] || a[c] == this.lhd) {
                    if (a[c] == this.lhd) {
                        f = 2;
                        this.gxw = true
                    }
                    this.iqd += 1
                } else {
                    break
                }
            }
        } else {
            if (e > 0) {
                this.ogf = this.lhd
            }
        }
        if (this.iqd == 0) {
            return 0
        }
        if (this.ogf != this.lhd && e > 0) {
            if (this.bkc[this.ogf][this.iqd - 1] * f < this.bkc[this.lhd][e - 1]) {
                this.ogf = this.lhd;
                this.iqd = e;
                f = 1;
                this.gxw = false;
                return this.iqd
            }
        } else {
            if (this.ogf == this.lhd) {
                f = 1;
                this.gxw = false
            }
        }
        var b = this.bkc[this.ogf][this.iqd - 1] * f;
        if (b > 0) {
            return this.iqd
        } else {
            return 0
        }
    };
    this.xyn = function (b, c, a) {
        if (this.win > 0) {
            if (this.olo[a] > 0) {
                if (b == this.ogm) {
                    this.ury.rnb.nly("win", "#yjj", [this.language.zdi, this.language.win + ": " + this.fcy(this.olo[a]), b, c])
                } else {
                    if (this.gxw) {
                        this.ury.rnb.nly("win", "#yjj", [this.language.fdd + " " + (this.eqj[a] + 1) + ": ", this.language.win + ": " + this.fcy(this.olo[a] / 2) + " x 2", b, c])
                    } else {
                        this.ury.rnb.nly("win", "#yjj", [this.language.fdd + " " + (this.eqj[a] + 1) + ": ", this.language.win + ": " + this.fcy(this.olo[a]), b, c])
                    }
                }
            }
        }
    };
    this.qyv = function () {
        if (this.goe != null) {
            this.goe.nbg[0] = this.language.jgg
        }
        if (this.hfx != null) {
            this.hfx.nbg[0] = this.language.jgg
        }
        if (this.zxn != null) {
            this.zxn.nbg[0] = this.language.phy
        }
        if (this.ppx != null) {
            this.ppx.nbg[0] = this.language.jgg;
            this.ppx.nbg[1] = this.language.art
        }
    };
    this.ohw = function (a) {
        this.kip = a;
        if (a == pze.tgq.ebq) {
            return new tdp()
        } else {
            if (a == pze.tgq.uyz) {
                return new ydr()
            } else {
                if (a == pze.tgq.wfw) {
                    return new slh()
                } else {
                    if (a == pze.tgq.xtt) {
                        return new puo()
                    } else {
                        if (a == pze.tgq.tjd) {
                            return new liw()
                        } else {
                            if (a == pze.tgq.wun) {
                                return new yse()
                            } else {
                                if (a == pze.tgq.vab) {
                                    return new kfr()
                                } else {
                                    if (a == pze.tgq.cuf) {
                                        return new wwd()
                                    } else {
                                        if (a == pze.tgq.wgt) {
                                            return new mpw()
                                        } else {
                                            if (a == pze.tgq.rwn) {
                                                return new fid()
                                            } else {
                                                if (a == pze.tgq.oyu) {
                                                    return new zgs()
                                                }
                                            }
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
    this.svt = function () {
        this.style = new doq()
    };
    this.lec = function (a) {
        if (a == pze.language.EN || a == pze.language.US) {
            return new rin()
        } else {
            if (a == pze.language.ES || a == pze.language.CO || a == pze.language.MX || a == pze.language.CL || a == pze.language.VE) {
                return new cel()
            } else {
                if (a == pze.language.DE || a == pze.language.AT) {
                    return new uvi()
                } else {
                    if (a == pze.language.PT || a == pze.language.BR) {
                        return new feb()
                    } else {
                        if (a == pze.language.RU) {
                            return new mdr()
                        } else {
                            if (a == pze.language.EE) {
                                return new yis()
                            } else {
                                if (a == pze.language.TR) {
                                    return new erm()
                                } else {
                                    if (a == pze.language.CZ) {
                                        return new vef()
                                    } else {
                                        if (a == pze.language.GR) {
                                            return new lgh()
                                        } else {
                                            if (a == pze.language.BG) {
                                                return new dlp()
                                            } else {
                                                if (a == pze.language.GE) {
                                                    return new rli()
                                                } else {
                                                    if (a == pze.language.HU) {
                                                        return new iso()
                                                    } else {
                                                        if (a == pze.language.RO) {
                                                            return new xug()
                                                        } else {
                                                            if (a == pze.language.FR) {
                                                                return new gkf()
                                                            } else {
                                                                if (a == pze.language.HR) {
                                                                    return new vxp()
                                                                } else {
                                                                    if (a == pze.language.IT) {
                                                                        return new yvg()
                                                                    } else {
                                                                        if (a == pze.language.SE) {
                                                                            return new vlu()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
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
bps.prototype = new vlh;

function wiv() {
    pze.tvf = -1;
    pze.bvr = new bps();
    pze.bvr.hre({
        tgq: pze.spi.value14
    });
    window.focus()
}

function ylx() {
    if (pze.bvr != null) {
        if (pze.tvf >= 0) {
            clearTimeout(pze.tvf)
        }
        pze.tvf = setTimeout(pze.bvr.cuk, 200)
    }
}

function wjl() {
    if (pze.bvr != null) {
        if (pze.tvf >= 0) {
            clearTimeout(pze.tvf)
        }
        pze.tvf = setTimeout(pze.bvr.zsx, 200)
    }
}
if (pze.sog.lqi()) {
    window.onorientationchange = wjl;
    window.onresize = wjl
} else {
    window.onresize = ylx
}
if (pze.spi.value9) {
    window.onload = wiv
} else {
    wiv()
};
