<link rel="stylesheet" href="../style.css">


# Lighting, System
Belysningssystemet er opdelt i en generel, almen loftsbelysning *(General Lighting)* samt en arbejdspladsbelysning kaldet særlys *(Task Lighting)*. Reguleringen af de to belysningstyper er forskellig, idet arbejdspladsbelysningen altid antages tændt inden for tidsangivelserne i tidsplanen, mens almenbelysningen tændes og slukkes efter det aktuelle behov. Den definerede belysningseffekt omsættes til varme.

Varmeafgivelsen fra belysning - minus evt. andel som udsuges gennem armaturet (Exhaust Part) - antages afgivet ved stråling som fordeles ligeligt efter overfladernes arealer.   

<figure id="center_img">
<img src="./assets/LIGHTING.GIF" alt="Dialog til definition af den kunstige belysning i en termisk zone."> 
<figcaption>Dialog til definition af den kunstige belysning i en termisk zone.</figcaption>
</figure>

*Task Lighting* (særlys) betegner arbejdspladsbelysning, som regnes tændt i alle timer, der ligger inden for tidsangivelserne i tidsplanen. Varmeafgivelsen fra særbelysning fordeles altid med halvdelen til indeluft og halvdelen til zonens overflader ligeligt efter areal, dvs. med samme effekt til alle flader (W/m<sup>2</sup>).

*General Lighting (kW)* er betegnelsen for generel loftsbelysning (almenbelysning), som i princippet reguleres efter det indfaldende dagslys. Almenlyset kan reguleres efter tre forskellige principper. Ved den simpleste reguleringsform reguleres efter det totale solindfald (kW) gennem vinduerne i zonen, mens en anden regulering sker efter dagslysniveauet (lux) i et givet punkt i zonen. Den tredje regulering af almenlyset sker efter lysbehovet beregnet ved hjælp af andre beregningsmetoder (edb-programmer), hvorved *BSim* benytter timeværdier for belysningseffekten gemt på en resultatfil fra disse beregninger.

Herudover er der mulighed for at angive perioder, hvor kun en andel af almenbelysningen kan tændes, samt for at angive, at lyset i visse tilfælde slukkes, hvis indetemperaturen bliver for høj. Reguleringsprincipperne er nærmere beskrevet under afsnittet Tidsplan.

Det bemærkes, at de indlæste installerede belysningseffekter skal være inkl. tab i eventuel forkoblingsenhed. For lysstofrør udgør dette tab ca. 20 % af lyskildens effekt ved nominel belastning.

En del af varmeafgivelsen fra almenlys kan regnes overført til ventilationsanlæggets udsugningsluft, mens resten fordeles ligesom særlyset med halvdelen til rumluften og halvdelen til zonens overflader.

*General Lighting Level (lux)*: Denne parameter anvendes i forbindelse med lysregulering efter dagslys. Værdien angiver belysningsniveauet, som opnås i referencepunktet (jf. beskrivelsen af regulering), når almenlyset er tændt med fuld effekt. Det opnåede belysningsniveau i referencepunktet er inklusive lys fra særlyset, som altid forudsættes tændt inden for den tilhørende [tidsangivelse](/11Systems/11_02_Systems_schedule.html).

I reguleringen (typen dagslys) defineres det ønskede belysningsniveau i referencepunktet, og ud fra beregningen af dagslyset time for time i punktet bestemmes behovet for at regulere på almenlyset.

*Lighting Type* er indgang for valg af belysningstype, idet der kan vælges enten glødelamper eller lysstofrør. Typen har betydning i forbindelse med lysreguleringen, idet den afgivne varmeeffekt ikke er proportional med det udsendte lys. Typen af lyskilde skal defineres, fordi forholdet mellem effekt og lys varierer forskelligt for de to typer.

Belysningstype kan være af typen glødelamper eller fluorescerede. Typen har betydning i forbindelse med reguleringen af belysningen da den effekt som afsættes ikke er proportional med mængden af lys der afgives. Forholdet mellem effekt og lumen udbytte for glødelamper kan udtrykkes som:

$$ P = 0.01 \cdot \left( -53.2 \cdot f^2 + 125.296 \cdot f + 27.56 \right) \cdot \text{genlight} \tag{1} $$

og for fluorescerede belysning som:

\( P = (0.9 \cdot f + 0.1) \cdot \text{genlight} \) for \( f > 0.1 \)

\( P = 0.0 \) for \( f \leq 0.1 \)

hvor   
P                  er den effekt som behøves for at opnå det ønskede belysningsniveau, kW   
f                   er det ønskede belysningsniveau i andele af det nominelle niveau,   
genlight        er det nominelle belysningsniveau. lux

Se i øvrigt [algoritmer til beregning af solstråling og dagslys](/20The_Mathematical_Basis/20_03_Algorithms_for_solar_radiation_and_daylight_calculations.html).

*Solar Limit* anvendes i forbindelse med lysregulering efter det samlede solindfald i zonen. Ved solindfald mindre end værdien af Sollys regnes almenlyset tændt inden for den tilhørende tidsangivelse. Bemærk, at parameteren Faktor (angivet under regulering i tidsplanen) for den aktuelle periode bliver multipliceret på den indlæste effektværdi for almenlys.  
Solar Limit er den samme parameter som er defineret på fanebladet "LightCtrl". Hvis der er defineret en værdi på "Lighting" benyttes en eventuel værdi defineret på fanebladet LightCtrl ikke.

*Exhaust Part* er den andel (mellem 0 og 1) af den afgivne effekt fra almenbelysningen, der bliver fjernet via ventilationsanlæggets udsugning, fx fordi der udsuges direkte gennem belysningsarmaturerne (integrerede systemer), eller fordi der suges ud over et nedhængt loft, hvori belysningsarmaturerne er placeret. Udsugningen af belysningsvarmen fungerer kun, når ventilationsanlægget er i drift.

Effekten, der overføres fra almenbelysningen til udsugningen, bliver omregnet til en temperaturstigning i udsugningsluften. Såfremt der angives væsentligt forskellige ventilationsluftmængder til forskellige tidsangivelser, bør den angivne fjernelse af varme evt. vægtes svarende til dette.

**NB:** Uddugning af varme via ventilationsanlæggets udsugning fungerer kun hvis systemet Lighting er placeret før systemet Ventilation i træstrukturen. Det er muligt at ændre rækkefølgen af elementerne i træstrukturen ved at trække et element til en ny placering mens venstre knap på musen er trykket ned.

Der er to reguleringsformer ([*Light Control*](/11Systems/11_03_Systems_Lighting.html) og [*Daylight Control*](/11Systems/11_03_Systems_Lighting.html)) som principielt kan benyttes i samme termiske zone til forskellige tidsangivelser.

Det bemærkes, at det kun er almenlyset, der reguleres, mens 'særlys' altid regnes tændt inden for de definerede tidsangivelser.

 

Se også

*   Faneblad [LightCtr](/11Systems/11_03_Systems_Lighting.html)
*   Faneblad [DaylightCtrl](/11Systems/11_03_Systems_Lighting.html)
*   Faneblad [Schedule](/11Systems/11_02_Systems_schedule.html)
*   Faneblad [Time](/11Systems/11_17_Systems_Time.html)