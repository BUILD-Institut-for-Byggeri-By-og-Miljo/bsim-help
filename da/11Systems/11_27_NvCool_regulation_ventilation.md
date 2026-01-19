<link rel="stylesheet" href="../style.css">

# NvCool-regulering, Ventilation

*Morten Stender Christensen & Olaf Bruun Jørgensen, [Esbensen Rådgivende Ingeniører](https://www.dem.dk/)*

*Iver Holm Iversen, [IndeKlimaMiljø](https://www.ikm.dk/)*

NvCool-regulering, er ligesom VAV-regulering, en ventilationsregulering efter en rumføler, der primært benyttes ved rum med ventilation og kølebehov i en stor del af driftstiden. NvCool-reguleringen er udviklet til EFP-projektet *"Naturlig ventilation med varmegenindvinding og Køling"*. Ved naturlig ventilation er der ikke noget elforbrug til ventilation og derfor ønskes der - ved høje indetemperaturer - ofte at fjerne varmen ved forøget udluftning frem for aktiv køling af indtagsluften.

I ovennævnte EFP-projekt er der udviklet et system til naturlig ventilation med varmegenindvinding og køling. Afkastluften fra ventilationen passerer en luft-til-væske varmeveksler med et meget lavt tryktab på luftsiden. Igennem rørene løber en væske, der opvarmes af afkastluften. Væsken løber i en lukket kreds videre ned til en varmepumpe, afkøles her og bliver ført retur til varmeveksleren. Den ekstraherede varme fra væsken bliver via varmepumpen overført til varmesystemet i den pågældende bygning, som ventileres.

Forskellen på VAV-regulering og NvCool-regulering er, at hvor VAV-regulering øger ventilationsluftmængden lineært ved et ønsket kølesetpunkt, fx 24 °C ,vil NvCool-reguleringen starte med at øge ventilationsluftmængden eksponentielt (først kraftigt og derefter mindre og mindre) og ved en lavere indetemperatur (f.eks. 22 °C). Derved ventileres der kraftigt før en overtemperatur er nået - en form for "præventiv køling".

<figure id="center_img">
<img src="./assets/NvCoolFig1.gif " alt="Sammenligning af luftskifte NvCool-regulering sammenlignet med en traditionel VAV-regulering.">
<figcaption>Sammenligning af luftskifte NvCool-regulering sammenlignet med en traditionel VAV-regulering.</figcaption>
</figure>

<figure id="center_img">
<img src="./assets/NvCoolFig2.gif " alt="Forskel i resultater ved VAV- og NvCool-regulering fra simulering i BSim.">
<figcaption>Forskel i resultater ved VAV- og NvCool-regulering fra simulering i BSim.</figcaption>
</figure>


Setpunktet for NvCool-reguleringen er sat til 22 °C og VAV-reguleringen til 24 °C. Allerede ved 22 °C luftes der derfor ud med en forøget luftmængde med NvCool-reguleringen, mens VAV-reguleringen først vil forøge luftmængden ved 24 °C. Som det ses, opnås der en lavere indetemperatur med NvCoolCtrl pga. det forøgede luftskifte. NvCool-reguleringen anvender overordnet set mere ventilation end en VAV-regulering, men til gengæld er mindre mekanisk køling nødvendig - i eksemplet ovenfor anvendes aktiv køling på indtagsluften i VAV-reguleringen, mens det ikke er nødvendigt med NvCool-reguleringen.

<figure id="center_img">
<img src="./assets/NvCoolFig3.gif " alt="Dialog for definition af inddata til reguleringsstrategien Ventilation | NvCoolCtrl.">
<figcaption>Dialog for definition af inddata til reguleringsstrategien Ventilation | NvCoolCtrl.</figcaption>
</figure>


*   *VAV, max factor [-]:* Volumenstrømmene (nominelle) angivet ved data for 'ventilator' kan blive forøget med faktoren angivet i parameteren VAV max factor (≥ 1). Faktoren vil normalt ligge i intervallet 1,5 - 3,0.

*   *Min Inlet Temp. [°C]:* Ved parameteren Min Inlet Temp sættes en nedre grænse for indblæsningstemperaturen.

*   *Temp. diff. [°C]:* Sætter en grænse for den maximale tilladelige temp. differens mellem indblæsningsluften og rumluften, således at der undgås trækgener.

*   *Setp. Indoor air, [°C]:* Setpunkt for rumføleren for aktivering af ventilationsluftmængden. Ved varmebehov yder anlægget den nominelle (minimum) luftmængde. Overstiges setpunkt, øges luftmængden eksponentielt som angivet foroven.

*   *Max Water temp. [°C]:* Angiver den maksimalt mulige fremløbstemperatur til varmefladen. I resultatfilen angiver "NvWaterTemp" den øjeblikkelige fremløbstemperatur til varmefladen, som afhænger af inde- og udetemperaturen. Varmefladen kan om sommeren også fungere som en køleflade, som der kan sendes koldt vand gennem. Fremløbstemperaturen på det kolde vand bliver gemt i resultatfilen som *”NvWaterTemp”*. Ydelsen af varme – og kølefladen er baseret på praktiske forsøg med en Comfort 100 enhed.