# Operationer med musen i SimView
<div id="da">

### **Operationer i træstrukturen**

Ved et *venstre-klik* på et af objekterne i træet vil objektet blive vist rød i grafikken. Det gælder for geometriske objekter, dvs. en bygning, en termisk zone, et rum og en flade. En flade vil sige den geometriske beskrivelse af en væg, et gulv, et loft, en WinDoor eller en åbning. Når en flade er valgt vises fladens begrænsende *kanter* (*edges*) og hjørnepunkterne (*vertexes*) markeres med en sort firkant.

Ved *højre-klik* i træstrukturen vises egenskaber for det aktuelle objekt, og egenskaberne ved objektet kan ændres. Ved højre-klik på en bygningskonstrktion eller et byggemateriale åbnes databasen med fokus på det aktuelle objekt som er valgt i træstrukturen.

Ved *træk <u>med</u>* venstre knap på musen holdt nede kan rækkefølgen af de termiske zoner ændres. Rækkefølgen bestemmer den rækkefølge zonerne simuleres i.

 

**Geometri**

En bygning kan tilføjes til en eksisterende bygning ved at trække bygningen med musen til den ønskede bygning. Den flyttede bygning kan kun genskabes ved Undo.

Et [rum flyttes til en termisk zone](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html) ved at trække rummet med musen til den termiske zone, og rummet kan fjernes fra en termisk zone ved at trække det tilbage til den bygning rummet tilhører. Hvis en termisk zone slettes med Delete-tasten flyttes rummene i den termisk zone automatisk tilbage til den bygning rummene tilhører.

 

**Konstruktioner og materialer**

Bygningselementer (konstruktioner, vinduer og døre) samt finish materialer kan trækkes med musen til en ny flade i bygningen. Holdes Ctrl-tasten nede, mens der trækkes, flyttes en kopi. Tilsvarende kan et bygningselement eller finish materiale kopieres med Edit/Copy (Ctrl+c). Flyt til en ny position i træet med musen eller Shift-piletaster, og indsæt med Edit/Paste (Shift-Insert eller Ctrl+v). Et valgt bygningselemet eller finish materiale kan fjernes med Delete-tasten.

 

**Systemer**

Systemer for en termisk zone eller en windoor kan flyttes til en anden termisk zone eller windoor ved at trække med musen til den ønskede termiske zone eller windoor. Holdes Ctrl-tasten nede, mens der trækkes, flyttes en kopi. Hvis et tilsvarende system allerede findes i den termiske zone hvor systemet slippes, vil dette først overskrives efter aktiv accept.

Rækkefølgen af systemerne i træstrukturen er den samme som den rækefølge systemerne simuleres i tsbi5. Rækkefølgen af de enkelte systemer kan ændres ved at trække det ønskede system til det system, som skal efterfølge det pågældende. Et system kan fjernes med Delete-tasten.

 

### **Operationer i grafikken**

Ved et *venstre-klik* i grafikken vises markørens koordinater i statusbjælken.

Holdes *musens markør på et markeret hjørnepunkt* vises punktets navn og koordinater.

Ved *dobbelt venstre-klik* vælges et *referencepunkt*. Et referencepunkt anvendes i forbindelse med at der oprettes en ny bygning, når der indsættes en bygning i modellen fra et andet projekt, og som referencepunkt ved dagslysberegninger.

Ved *dobbelt venstre-klik* på en kant af en flade vælges denne (vist grøn). Hvis kanten allerede er valgt fravælges kanten. Alternativt kan *Shift + venstre-klik* benyttes.

Ved *dobbelt venstre-klik* på et markeret hjørnepunkt vælges punktet (markeret med en ramme omkring punktet). Hvis hjørnepunktet allerede er valgt fravælges punktet.

Ved *højre-klik* (udenfor et markeret hjørnepunkt) vises de hyppigst brugte menupunkter.

Ved *højre-klik* *på et markeret hjørnepunkt* vises en dialogboks, hvori punktetes koordinater kan redigeres. Ved ændring af koordinaterne på denne måde kan fladerne, som punktet indgår i, blive vindskæv, dvs. at ikke alle punkter, som definerer fladen, ligger i samme plan. *Vindskæve flader vil blive vist gul*. Det forudsættes i alle beregningsprogrammerne, at alle flader i modellen er plane.

Med *Ctrl-tasten* *holdt nede* kan *et markeret hjørnepunkt trækkes* med musen til en anden position. Flader kan herved også blive vindskæve. Et hjørnepunkt kan <u>ikke</u> trækkes i den rumlige afbildning.

Med *Ctrl-tasten holdt nede* kan der *venstre-klikkes på en kant* af en flade for at få fladen valgt i grafikken og lokaliseret i træet. Da en kant normalt indgår i mere end én flade kan alle fladerne, kanten indgår i, vælges én for én ved at *gentage Ctrl+venstre-klik*. Efter at musemarkøren er flyttet til en anden position - uden Ctrl-tasten nede - kan der vælges en ny kant.

I plan og opstalt grafikken kan der markeres et rektangulært område ved at flytte musens markør til et af det ønskede rektangels hjørnepunkter og *med venstre musetast holdt nede* flytte til modstående hjørnepunkt. Herefter kan der tastes + (eller klikkes på Zoom In ikonet) for at zoome ind på det valgte område.
