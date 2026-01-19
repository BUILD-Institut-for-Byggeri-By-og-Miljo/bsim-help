<link rel="stylesheet" href="../style.css">

# Varmetransport i konstruktionerne

Varmetransporten internt i konstruktioner beskrives instationært, dvs. under hensyntagen til hvert enkelt lags termiske kapacitet. Et eksempel på knudepunktsinddeling for en konstruktion er vist på nedenstående figur. Konstruktionen består af flere lag, der her yderligere er inddelt i flere kontrolvolumener. Kontrolvolumenerne indekseres med bogstavet "i".

<figure id="center_img">
<img src="./assets/NET_KNST.GIF" alt="Inddeling i kontrolvolumener og placering af knudepunkter for en væg bestående af flere lag af forskellige materialer.Inddeling i kontrolvolumener og placering af knudepunkter for en væg bestående af flere lag af forskellige materialer.">
<figcaption>Inddeling i kontrolvolumener og placering af knudepunkter for en væg bestående af flere lag af forskellige materialer.Inddeling i kontrolvolumener og placering af knudepunkter for en væg bestående af flere lag af forskellige materialer.</figcaption>
</figure>

For hvert kontrolvolumen holdes der i hvert tidsskridt kontrol med hvor meget varme, der ved varmeledning tilføres fra nabovolumenerne, og hvor meget, der fjernes. Summen af disse bidrag til en ændring af entalpiindholdet, fra ét tidsskridt til det næste, der ud fra af materialets varmefylde kan omregnes til en temperaturændring.

Betragt kontrolvolumenet "i" på ovenstående figur. Varmeledning fra naboelementet i-1 kan udregnes ud fra Fourier's varmeledningsligning med den tilnærmelse, at temperaturforløbet mellem disse to kontrolvolumeners knudepunkter er det samme som i en stationær situation. Denne tilnærmelse, differenstilnærmelsen, erstatter de differentielle temperaturgradienter i Fourier's lov med gradienter beregnet ud fra endelige temperaturforskelle mellem knudepunkter af endelig afstand. En sådan tilnærmelse er gængs teknik i de fleste numeriske metoder og rimelig nøjagtig, så længe diskretiseringen (knudepunktsinddelingen) ikke er for grov.

For at gøre beskrivelsen generel, antages de to materialer at have hver sit varmeledningstal og kontrolvolumenerne hver sin tykkelse. Man får da varmetransporten pr. tids- og arealenhed (varmefluxen) i skillefladen mellem de to kontrolvolumener, gældende for tidsskridtet fra "j" til "j+1":

$$ q_i^{j+1} = - \frac{T_i^{j+1} - T_{i-1}^{j+1}}{\frac{\Delta x_{i-1}}{2 \lambda_{i-1}} + \frac{\Delta x_i}{2 \lambda_i} + R_i} \tag{6} $$

$q$ er varmefluxen, W/m²

$Δx$ er et kontrolvolumens bredde, m

$λ$ er materialets varmeledningstal, W/m K

$R$ er isolansen mellem kontrolvolumenerne, m²K/W

$i$ er indeks for stedet

$j$ er indeks for tiden

Varmefluxen regnes positiv med x-aksen, der har samme positive retning som kontrolvolumenernes indicering. I nævneren udtrykkes summen af termiske modstande mellem knudepunkt "i-1" og "i". Den termiske modstand mellem kontrolvolumenerne vil være nul, hvis der ikke har været specificeret en anden værdi for skillelinien mellem to materialelag (fx for luftrum).

Ud fra ligning (6) beregnes varmefluxen ud fra temperaturerne ved slutningen af tidsskridtet. Når beregningen er kommet til tidsskridt "j", og forholdene skal beregnes frem til tiden "j+1", er tilstanden ved dette tidsskridts afslutning endnu ikke kendt, og man kan derfor ikke eksplicit indsætte værdier for temperaturerne på højresiden af ligning (6). Der benyttes derfor en implicit beregningsprocedure, som beskrives i det følgende.

Gennem tidsskridtet regnes den implicit angivne varmeflux fra ligning (7) at være konstant, og tilvæksten i entalpi for kontrolvolumen "i" opsummeres som følger:

$$ \rho_i \Delta x_i  \frac{h_i^{j+1} - h_i^j}{\Delta t} = - \left( q_{i+1}^{j+1} - q_{i}^{j+1} \right) \tag{7} $$

$h$ er det specifikke entalpiindhold (defineret ud fra et referenceniveau), J/kg

$Δt$ er tidsskridtets størrelse, s

Ved at udtrykke de specifikke entalpiændringer som en temperaturændring ganget med den specifikke varmefylde, og ved at indsætte udtrykkene for q fra ligningen for varmetransport i konstruktionerne, kan følgende udtryk opstilles:

$$ (\rho c_p)_i \Delta x_i \frac{T_i^{j+1} - T_i^j}{\Delta t} = \frac{T_{i-1}^{j+1} - T_i^{j+1}}{\frac{\Delta x_{i-1}}{2 \lambda_{i-1}} + \frac{\Delta x_i}{2 \lambda_i} + R_i} + \frac{T_{i+1}^{j+1} - T_i^{j+1}}{\frac{\Delta x_i}{2 \lambda_i} + \frac{\Delta x_{i+1}}{2 \lambda_{i+1}} + R_{i+1}} \tag{8} $$

 

Denne ligning opstilles for alle "i" og løses på én gang, da ligningerne gensidigt benytter 'hinandens' information om temperaturen på nyt tidsniveau. Dette kan kun lade sig gøre, hvis randforholdene er kendte. Derfor udtrykkes ligning (8) på en lidt anden form, som gælder for randvolumenet "i"=1 ved konstruktionens side 1. Idet knudepunktet ligger på selve randen, fås formel 4:

$$ (\rho c_p)_1 \Delta x_1 \frac{T_1^{j+1} - T_1^j}{\Delta t} = q_{surf, side1} + \frac{T_{luft} - T_1^{j+1}}{R_{surf side 1}} + \frac{T_2^{j+1} - T_1^{j+1}}{\frac{\Delta x_1}{\lambda_1} + \frac{\Delta x_2}{2 \lambda_2} + R_2} \tag{9} $$

$ q_{surf,side1} $ er varmeoverførsel direkte til overfladen, W/m²

$ R_{surf,side1} $ er overgangsisolansen, m² K/W

$ T_1 $ er den størrelse, der i afsnittet Zonens samlede varmebalance blev kaldt $ T_{surf} $. Varmeoverførslen direkte til overfladen er for overflader mod indvendige zoner sammensat af den del af zonens solindfald, der ikke regnes at være 'tabt' eller tilført zoneluften, samt af eventuelle varmeandele fra systemer, der går til overfladerne. Solens overfladebidrag fordeles efter overfladernes areal, dog med forskellig vægtning for gulv, vægge og loft, mens overfladebidrag fra systemer fordeles ligeligt over overfladearealerne i zonen. Overflader mod det fri har et varmetilskud, som beregnes af solindfaldet for en udvendig flade med den pågældende hældning og orientering ganget med absorptionstallet for overfladematerialet. For konstruktioner beregnes ikke nogen effekt af skyggende objekter i bygningens omgivelser eller af bygningsfremspring. Der regnes heller ikke med langbølget stråling til omgivelserne, specielt til himmelrummet.

Ligning (9) giver ikke nogen indikation af hvilket tidsniveau, der gælder for den tilstødende zones lufttemperatur $T_{luft} $. Dette spørgsmål berøres sidst i dette afsnit.

En tilsvarende ligning gælder for side 2 ("i"=n).

Til brug for opstilling af ligningssystemet for alle "i" indføres hjælpestørrelserne H og HO. For de indre kontrolvolumener:

$$ H_i = \frac{1}{\frac{\Delta x_{i-1}}{2 \lambda_{i-1}} + \frac{\Delta x_i}{2 \lambda_i} + R_i} \tag{10} $$

$$ HO_i = \frac{(\rho c_p)_i \Delta x_i}{\Delta t} \tag{11} $$

For overfladekontrolvolumenet ved side 1 defineres HO som ovenfor, mens H<sub>1</sub> og H<sub>2</sub> bestemmes af:

$$ H_1 = \frac{1}{R_{surf, side 1}} \tag{12} $$

$$ H_2 = \frac{1}{\frac{\Delta x_{1}}{\lambda_{1}} + \frac{\Delta x_2}{2 \lambda_2} + R_2} \tag{13} $$

Udtryk svarende til disse gælder for H-funktionerne (H<sub>n</sub> og H<sub>n1</sub>) nær overfladen ved side 2. Ved hjælp af disse hjælpestørrelser kan ligningerne (8) og (9) omskrives til en simplere form, idet led, der involverer temperaturerne på 'nyt' tidsniveau "j+1", skrives på venstre side af lighedstegnet, og eksplicit givne værdier, såsom led, der involverer temperaturen på 'gammelt' tidsniveau "j" skrives på højresiden.

For de indre kontrolvolumener fås da:

$$ - H_i T_{i-1}^{j+1} + \left(HO_i + H_i + H_{i+1}\right) T_{i}^{j+1} - H_{i+1} T_{i+1}^{j+1} = HO_i T_{i}^{j} \tag{14} $$

Dette udtryk kan yderligere simplificeres ved indførelse af koefficienterne A, B, C og D, hvis definition umiddelbart fremgår ved sammenligning mellem ligning (13) og ligning (14):

$$ A_i  T_{i-1}^{j+1} + B_i T_{i}^{j+1} + C_i T_{i+1}^{j+1} = D_i \tag{15} $$

For overfladekontrolvolumenerne ved side 1 fås:

Også dette udtryk kan simplificeres ved indførelse af koefficienterne B, C og D:

$$ \left( HO_1 + H_1 + H_2 \right)T_1^{j+1} - H_2T_2^{j+1} = HO_1T_1^j + H_1T_{luft} + q_{surf, side 1} \tag{16} $$

$$ B_1 T_{1}^{j+1} + C_1 T_{2}^{j+1} = D_1 \tag{17}$$

Udtrykkene fra ligning (16), (17) og det tilsvarende udtryk, der kunne skrives for overfladen ved side 2, kan samles i ét ligningssystem:

$$ \left[\begin{array}{cccccc}B_1 & C_1 & & & & \\ \cdot & \cdot & \cdot & & & \\ & A_i & B_i & C_i & & \\ & & \cdot & \cdot & \cdot & \\ & & & A_n & B_n & \end{array} \right] \left[ \begin{array}{c} T_1^{j+1} \\ \cdot \\ T_i^{j+1} \\ \cdot \\ T_n^{j+1} \end{array} \right] = \left[ \begin{array}{c} D_1 \\ \cdot \\ D_i \\ \cdot \\ D_n \end{array} \right] \tag{18} $$

Koefficientmatricen i dette ligningssystem har nuller uden for de tre hoveddiagonaler og kan derfor løses ved hjælp af en simpel og hurtig algoritme, den såkaldte doublesweep- eller tridiagonal-metode. Denne metode er beskrevet i flere lærebøger, bl.a. fra [Numerisk Institut \[18\]](www.help.bsim).

Når man går fra ét tidsskridt til et andet, bliver de nyligt beregnede temperaturer til de 'gamle' temperaturer, set fra det nye tidsskridt. På denne måde er det muligt at fortsætte med at regne frem i tiden, så længe man blot for hvert tidsskridt har kendskab til randbetingelserne, dvs. lufttemperaturer og varmetilførsler ved stråling ved hver af de to overflader. For at igangsætte beregningen i allerførste tidsskridt vælges der faste starttemperaturer (standard er, at alle temperaturer sættes til 20 °C), og fra disse udgangsværdier gennemregnes den første dag i simuleringsperioden et antal gange, indtil der er opnået stabilitet, dvs. en nogenlunde fast døgnrytmeindsvingning (kvasistationær tilstand).

 

### **Tidsskridtenes størrelse**

For at opnå en rimelig nøjagtighed i beregningerne, blandt andet jævnfør den tidligere nævnte antagelse om kvasistationære forhold mellem knudepunkterne, er det nødvendigt at begrænse tidsskridtenes størrelse, selvom den implicitte beregningsmetode i sig selv ikke giver anledning til ustabiliteter, når tidsskridtene bliver for store. Dette er fx tilfældet for den eksplicitte metode, der anvender temperaturer på 'gammelt' niveau i ligning (6). En øvre tidsskridtgrænse ligger i, at vejrdata læses med times intervaller, og at hver time beregnes med mindst to tidsskridt. Desuden er det valgt at begrænse størrelsen af det såkaldte Fouriertal for kontrolvolumerne. Fouriertallet for et kontrolvolumen kan beregnes som følger:

$$ R = \frac{\lambda}{\rho c_p} \frac{\Delta t}{(\Delta x)^2} \tag{19} $$

I BSim vælges standardværdien for Δt således, at Fouriertallet ikke overskrider værdien 1,25 for nogen af de kontrolvolumener, der indgår i bygningsmodellen. Man får derfor følgende maksimale tidsskridt:

$$ (\Delta t)_{max} = \min\limits_{alle \; kontrol \; volumener} \left(1.25 \frac{\rho c_p}{\lambda} (\Delta x)^2\right) \tag{20} $$

Til sammenligning er det kritiske Fouriertal 0,5 for den eksplicitte beregningsmetode. tidsskridtkravet ses således at være mest kritisk for beregninger, hvori indgår tynde lag af materialer med en kombination af høj varmeledningsevne og lav densitet og varmefylde. Specielt bør den kvadratiske afhængighed af lagtykkelsen noteres, da den alt andet lige betyder, at der skal benyttes fire gange så mange tidsskridt, hver gang det bestemmende kontrolvolumens tykkelse halveres.

Ved starten af en simulering udskriver programmet det beregnede tidsskridt (det anbefalede antal tidsskridt pr. time), og brugeren bør være opmærksom på, at en stor forskel mellem det anbefalede og det valgte kan medføre større unøjagtighed i beregningerne.

 

### **Kobling af varmetransport i konstruktionerne til zonernes varmebalance**

Beregning af varmestrømme i konstruktionerne forudsætter kendskab til temperaturerne i alle tilstødende zoner, og beregning af lufttemperaturerne i zonerne forudsætter bl.a. kendskab til overfladetemperaturer på alle konstruktioner. Denne gensidige afhængighed kunne friste til opbygning af et stort ligningssystem, hvori alle zoners lufttemperatur og temperaturfordelingen i alle konstruktioner løses på én gang. Dette er teoretisk muligt, men ikke særlig hensigtsmæssigt, da ligningssystemets koefficientmatrice ikke i almindelighed vil blive tridiagonal som i ligning (18). De metoder, der benyttes til at løse et komplet ligningssystem, anses for at være for beregningstunge til dette formål. En tilstrækkelig nøjagtighed kan opnås med følgende procedure:

1.  Først beregnes lufttemperaturen i hver af zonerne ud fra det aktuelle tidsskridts varmetilskud og det forrige tidsskridts transmissionstab gennem konstruktionsoverfladerne.

2.  På baggrund af de beregnede lufttemperaturer udføres instationære beregninger af konstruktionernes temperaturforhold.

3.  Beregningen af lufttemperaturen fra (punkt 1) gentages med de transmissionsvarmetab, der gives af de nye temperaturfordelinger i konstruktionerne.

Herved bliver zonernes varmebalancer beregnet to gange pr. tidsskridt. Denne del af beregningerne er imidlertid beskeden set i sammenligning med beregningen af de instationære forhold i konstruktionerne.

Den beskrevne procedure følges, når der vælges 'optimeret' på første faneblad i *tsbi5*-simuleringsdialogen. Gentagelsen af beregningen af de termiske zoners lufttemperatur under punkt 3 udelades, når der i stedet vælges en simpel beregning.
