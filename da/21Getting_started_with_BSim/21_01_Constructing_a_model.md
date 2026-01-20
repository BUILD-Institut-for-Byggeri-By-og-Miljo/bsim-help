<link rel="stylesheet" href="../style.css">

# Opbygning af model


Abstraktion, beskrivelsen af essensen af problemet i den syntaks som et simuleringsværktøj benytter, er en af de mest vanskelige opgaver, både for novicen og eksperten. Det er sjældent at der er dels ressourcerne og dels grunden til at gennemføre en en-til-en beskrivelse af virkeligheden i programmet. Det kan være nyttigt at beskrive en pc som en varmekilde hvorimod ingen vil finde på at beskrive boksen med disketter eller bogen på skrivebordet. En generel regel for abstraktion er at stræbe efter, at bibeholde volumen, overfladeareal og termisk masse inden for en termisk zone. Denne vejledning er for kort til at give en komplet redegørelse for dette emne.

Indlæringskurven i brugen af BSim, som er i stand til at modellere en lang række forskellige typer af problemer, er ikke ligegyldig. Som i de fleste avancerede ingeniør programmer er der problemet med syntaksen - udtrykt med dialoger og menuer, som styrer programmet og dets data, der tilsammen udgør dets inddata og uddata. Yderligere problematisk for nye brugere er betydningen af systemet i henseende af hvordan programmet forudsætter de forskellige fysiske fænomener modelleret.

Styrken, og på samme tid svagheden, ved BSim er dets evne til at tilbyde brugeren forskellige måder at beskrive og analysere et problem. Ikke alene forventer BSim en beskrivelse af problemet som er systematisk korrekt (der er selvfølgelig en række indbyggede sandsynlighedscheck), men det antager at problemet har mening i termodynamisk henseende. Det vil sige, at programmet ikke har nogen mulighed for at checke betydningen af den opbyggede model.

For at være effektiv kræver indlæringen mere end blot adgang til en pc, noget dokumentation og tilstrækkelig tid til at finde ud af tingene ved "trial and error" metoden. Denne brugervejledning er et skridt på vejen til at gøre denne indlæringskurve mindre pinefuld. Vejledningen kan på ingen måde erstatte adgangen til en erfaren bruger af programmet eller egentlig træning, men er snarere en hjælp i gennemførelsen af denne proces. Det er hermed ikke sagt at det ikke er muligt at blive ekspert ved selvstudier, men at de ikke tekniske aspekter af simuleringsprocessen er svære at kommunikere.

Der er en række gyldne regler som bør overholdes ved opbygning af modeller til simulering af de termiske forhold i bygninger:

*   Brug den nødvendige [tid](https://help.bsim.dk/support/kb/articles/dQG2Okm4/tidsforbrug) til at indsamle viden (tegninger, materialedata, belastninger m.v.) om bygningen.

*   Overvej i forvejen problemstillingen og hvilke spørgsmål der skal besvares ved simuleringen.

*   Opbyg modellen så simpelt som muligt under hensyntagen til ovenstående.

*   Vurder løbende (under modelopbygningen) om resultaterne er sandsynlige.

I afsnittet med [indlæringseksempler](https://help.bsim.dk/support/kb/articles/BWzd7LQE/indlaringseksempler) findes tre eksempler som leder førstegangsbrugeren igennem en simpel opbygning af en bygningsmodels geometri, over tilføjelse af systemer til modellen til den første simulering med tsbi5-programmet.

Via nedenstående ordnede rækkefølge af forbindelser til forskellige sider i brugervejledningen gives en gennemgang af et typisk arbejdsforløb fra starten af et projekt over redigering af modelgeometrien til den endelige simulering med *tsbi5*-programmet.

Inden opbygningen af modellen starter er det en god ide at være bekendt med den måde programmet er [opbygget](https://bsim.outseta.com/support/kb/articles/wmjnBKmV/strukturen-i-bsim).

*   Der findes en række [genvejstaster](https://bsim.outseta.com/support/kb/articles/vWyPMJ9b/genvejstaster) i *BSim*

*   Modellen redigeres ved hjælp af [menuen](https://help.bsim.dk/support/kb/articles/49EdrJQ7/simview---menu) i *SimView*.

*   [Musen](https://bsim.outseta.com/support/kb/articles/DQ2xp4WV/operationer-med-musen-i-simview) er et værktøj som kan benyttes på flere måder i *SimView*.

*   Øverst i programfladen findes en [værktøjsbjælke](https://help.bsim.dk/support/kb/articles/E9Lw5nQw/simview---varktojsbjalken) som giver adgang til forskellige funktioner i *BSim*.

*   [Menuerne](https://bsim.outseta.com/support/kb/articles/pWrnYLWn/programmenuer-i-bsim) i BSim er interaktive og giver **kun** adgang til de funktioner som kan benyttes på det aktuelle sted i programmet.

I slutningen af hver linie er markeret med *kursiv* i hvilket af BSim's programmer den givne beskrivelse tilhører.

*   Et nyt projekt oprettes med en [wizard](https://help.bsim.dk/support/kb/articles/yWogPPWD/model-wizard---oprette-en-ny-model).

*   Der oprettes en [bygningsmodel](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning) i projektet med *SimView*.

*   Der tilføjes flere [rum](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum) til modellen i *SimView*.

*   Modelgeometrien [redigeres](https://help.bsim.dk/support/kb/articles/L9PwMrQJ/simview---redigere-modelgeometrien) med *SimView*.

*   Der tilknyttes [standardkonstruktioner](https://bsim.outseta.com/support/kb/articles/y9gBKGQM/standardkonstruktioner) fra databasen *SimDB*.

*   [Nye materialer](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial) oprettes til brug for nye konstruktioner i databasen *SimDB*.

*   [Nye konstruktioner](https://bsim.outseta.com/support/kb/articles/dQG2dzm4/simdb-buildingelement) oprettes fra materialerne i databasen *SimDB*.

*   Enkelte [standardkonstruktioner overskrives](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner) med konstruktioner fra *SimDB*.

*   Der [tilføjes vinduer, døre og åbninger](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor) i fladerne i *SimView*.

*   Der tilføjes systemer til vinduerne.

    *   [Solafskærmning](https://bsim.outseta.com/support/kb/articles/7maw8X9E/shading)

    *   [Skodder](https://bsim.outseta.com/support/kb/articles/ZmNrMxm2/shutter)

*   En flade [udfyldes helt](https://help.bsim.dk/support/kb/articles/xmer2wQV/simview---insert-windoor) med et vindue eller en åbning i *SimView*.

*   [Skygger fra omgivelser](https://bsim.outseta.com/support/kb/articles/E9LwJGQw/skygger-fra-omgivelser) tilføjes modellen i *SimView*.

*   Simulering af solindfaldet i modellen med [*XSun*](https://bsim.outseta.com/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun).

*   [Beregning af dagslysforholdene](https://bsim.outseta.com/support/kb/articles/LmJvYAmP/dagslysberegninger-med-simlight) i et rum beregnes med *SimLight*.

*   [Oprettes termiske zoner](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/termisk-zone---egenskaber) for simulering i *tsbi5*.

*   [Rummene i modellen tilknyttes de termiske zoner](https://help.bsim.dk/support/kb/articles/amRGJpQJ/tilfoje-rum-til-termiske-zoner) i *SimView*.

*   Der [tilføjes systemer](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer) til de termiske zoner i *SimView*.

    *   [Køling](https://bsim.outseta.com/support/kb/articles/y9gBNGQM/cooling)

    *   [Udstyr](https://bsim.outseta.com/support/kb/articles/vW5a8pW4/equipment)

    *   [Opvarmning](https://bsim.outseta.com/support/kb/articles/wmjnq7mV/heating)

    *   [Infiltration](https://bsim.outseta.com/support/kb/articles/Rm8JRZ94/infiltration)

    *   [Belysning](https://bsim.outseta.com/support/kb/articles/wQXxbnQK/lighting)

    *   [Mixing](https://bsim.outseta.com/support/kb/articles/Rm8JEd94/mixing) (luftoverførsel mellem termiske zoner)

    *   [Fugt](https://bsim.outseta.com/support/kb/articles/xmere5QV/moisture)

    *   [Personer](https://bsim.outseta.com/support/kb/articles/XQYdjgmP/persons)

    *   [Ventilation](https://bsim.outseta.com/support/kb/articles/OW4N5AQg/ventilation)

    *   [Udluftning](https://bsim.outseta.com/support/kb/articles/gWKDJlmp/venting)

*   [Simulering](https://bsim.outseta.com/support/kb/articles/A93z0lQ0/tsbi5) med *tsbi5*.

*   Den [grafiske præsentation af resultaterne](https://help.bsim.dk/support/kb/articles/aWxnxAQV/andring-af-den-grafiske-afbildning-af-resultater) kan ændres.

*   Grafik og data kan [importeres](https://bsim.outseta.com/support/kb/articles/nmDBo29y/bsim-og-andre-windows-programmer) i andre Windows programmer.

 

Se også:

*   [Indlæringseksempler](https://help.bsim.dk/support/kb/articles/BWzd7LQE/indlaringseksempler)


