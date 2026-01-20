<link rel="stylesheet" href="../style.css">

# tsbi5 - Simulation

Fanebladet *Simulation* indeholder to knapper - en til start og en til stop af simuleringen. Desuden er der en graf, som løbende viser udetemperaturen og den operative temperatur i modellens *termiske zoner*.

Den rækkefølge som de termiske zoner gennemregnes i bestemmes af deres rækkefølge i træet (oppefra og ned). Det er muligt at ændre rækkefølgen ved at organisere (træk med venstre knap på musen holdt nede) de termiske zoner til den ønskede rækkefølge.   
Dette har fx betydning hvis der skal simuleres luftoverførsel (mixing) fra en termisk zone til en anden og videre til en tredje. Hvis temperaturen i den første zone er faldet på grund af *venting* kan luftoverførslen til de efterfølgende termiske zoner stoppes på grund af setpunktet for mixingen.

<figure id="center_img">
<img src="./assets/Ts5-sim.jpg" alt="På fanebladet 'Simulation' startes og stoppes simuleringen. Under simuleringen vises udetemperaturen samt den operative temperatur for modellens termiske zoner.">
<figcaption>På fanebladet 'Simulation' startes og stoppes simuleringen. Under simuleringen vises udetemperaturen samt den operative temperatur for modellens termiske zoner.</figcaption>
</figure>

Øverst i den interaktive graf vises navnet for den måned som aktuelt simuleres samt - med farver svarende til de tilsvarende grafer - navne på de 5 første (regnet fra toppen af træet) termiske zoner i modellen plus udetemperaturen.   
Det er muligt at ændre rækkefølgen på de termiske zoner ved at trække dem til en ny placering i træet.

Under den interaktive graf der viser udetemperaturen og temperaturen i de termiske zoner findes fire knapper:

*   *Start* iværksætter en simulering for de periode som er givet på [*Options*](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) fanebladet. <u>NB</u>: Det er <u>ikke</u> muligt at gennemføre en tsbi5 simulering med [*ModelList* ](/09SimView/09_11_Model_information.html)vinduet åbent, eller lukket ned som et ikon.

*   *Check* gennemfører et check af syntaksen for den aktuelle model og viser eventuelle manglende informationer i [*ModelList*](/09SimView/09_11_Model_information.html) vinduet. Hvis der ingen fejl vises betyder det ikke at modellen er fejlfri, men blot at der er tilstrækkelig information til at gennemføre en simulering.  
Funktionen kaldes også umiddelbart før starten af en simulering. Hvis fugtmodellen er aktiv vises tillige information om den automatiske underinddeling af materialelagene i konstruktionerne.

*   *Stop* knappen kan bruges til at afbryde en kørende simulering inden slutningen (*Last Day*) af den simuleringsperiode som er givet på [*Options* ](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html)fanebladet.

*   Når en simulering er afsluttet kan resultaterne gemmes i et nyt navn ved at trykke på *Save Log As* knappen. De gemte resultater kan senere [sammenlignes](/13tsbi5_thermal_simulation/13_08_tsbi5_Parameters.html) med andre resultater fra den samme model, udsat for parametervariationer.

Under knapperne vises information om hvor lang tid der forventes at gå før hele simuleringsperioden er gennemregnet.

Når simuleringen startes gennemføres der først en indsvingning af modellen, og den egentlige simulering starter først når [stabilitetskriteriet](/24Miscellaneous/24_17_Stability_criterion_for_starting_simulations.html) er opfyldt eller det maksimalt tilladelige antal iterationer er nået. Det tilladelige antal iterationer kan angives i menuen [*Edit* | *Options*](/24Miscellaneous/24_16_tsbi5_general_options.html) når tsbi5 er aktiv.

Hvis antallet af tilladte iterationer overskrides uden at stabilitetskriteriet er opfyldt vises nedenstående dialog. I dialogen vises til information de parametre som ingår i bestemmelsen af [stabilitetskriteriet](/24Miscellaneous/24_17_Stability_criterion_for_starting_simulations.html).

<figure id="center_img">
<img src="./assets/stability.gif" alt="">
<figcaption></figcaption>
</figure>

Trykkes der "Ja" vil indsvingningen fortsætte, dog kun i en cyklus op til det maksimale antal iterationer/dage. Denne proces kan gentages indtil stabilitetskriteriet er opfyldt eller afbrydes når tilstrækkelig stabilitet er opnået.

Se også:

*   [Faneblad *Options*](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html)
*   [Faneblad *Moisture*](/24Miscellaneous/24_60_tsbi5_moisture.html)
*   [Faneblad *Simulation*](/13tsbi5_thermal_simulation/13_04_tsbi5_simulation.html)
*   [Faneblad *HeatBalance*](/13tsbi5_thermal_simulation/13_07_tsbi5_HeatBalance.html)
*   [Faneblad *Parametres*](/13tsbi5_thermal_simulation/13_08_tsbi5_Parameters.html)
*   [Faneblad *Tables*](/13tsbi5_thermal_simulation/13_09_tsbi5_Tables.html)