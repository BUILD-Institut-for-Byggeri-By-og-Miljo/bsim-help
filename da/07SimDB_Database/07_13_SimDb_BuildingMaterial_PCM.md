<link rel="stylesheet" href="../style.css">

# SimDb - BuildingMaterial, PCM
<center>

*Materialeegenskaber for faseskiftende materialer (PCM) er tilgængelige fra og med databasen BSim2008.mdb.*

</center>
<center>

*Hvis tabellen med information om materialernes faseskiftende egenskaber ikke findes i den valgte database vises fanebladet PCM ikke i dialogen Edit Material.*

</center>
 

PCM Fanebladet indeholder oplysninger om materialets eventuelle faseskiftende egenskaber. For at aktivere et materiales faseskiftende egenskaber skal der i fanebladets tabel for "Lambda" være angivet værdier, ellers er PCM-egenskaberne ikke aktive i beregningerne. Øverst i fanebladet PCM er angivet om "lambda" er defineret for det pågældende materiale, og hvis dette er tilfældet benyttes lambdaværdierne angivet i tabellen som varmeledningsevne for materialet frem for den varmeledningsevne som er angivet på [Thermal fanebladet](/07SimDB_Database/07_12_SimDB_BuildingMaterial_Thermal.html). Herved kan varmeledningsevnen altså angives som værende afhængig af temperaturen.

<figure id="center_img">
<img src="./assets/pcm.gif " alt="PCM-egenskaber for bygningsmateriale.">
<figcaption>PCM-egenskaber for bygningsmateriale.</figcaption>
</figure>

I PCM-fanebladet vises hhv. smelte- og størknekurven for det faseskiftende materiale (rød kurve er smeltekurve, blå er størknekurve). Kurven udtrykker materialets enthalpi (J/kg) som funktion af temperaturen (°C). Enthalpi-kurverne erstatter i beregningerne materialets varmekapacitet angivet under [fanebladet Thermal](/07SimDB_Database/07_12_SimDB_BuildingMaterial_Thermal.html).

Melting/Solidifying: Klikkes på Melting (Solidifying) knappen åbnes en tabel, hvori der indtastes sammenhørende værdier af enthalpi (J/kg) og temperatur (°C) for punkter på smelte (størkne) kurven for materialet. Værdierne indtastes i rækkefølge efter stigende temperatur.

<figure id="center_img">
<img src="./assets/melting_solidification.gif " alt="">
<figcaption></figcaption>
</figure>

Lambda: Klikkes på Lambda knappen åbnes en tabel, hvori der indtastes værdi(er) af materialets varmeledningsevnekurve (W/mK) som funktion af temperaturen (°C). Indtastes der udelukkende én varmeledningsevne vil denne betragtes som konstant og uafhængig af temperaturen. Værdierne indtastes i rækkefølge med stigende temperatur.

<figure id="center_img">
<img src="./assets/lambda.gif " alt="">
<figcaption></figcaption>
</figure>

Materialets fase bestemmes til et givet tidspunkt som værende i én af tre mulige tilstande:

1.  på smeltekurven

2.  på størknekurven, eller

3.  mellem smelte- og størknekurven

Ad. 1: Materialet er i en smelteproces og denne fortsætter så længe temperaturen stiger. *Smeltekurven følges*.

Ad. 2: Materialet er i en størkneproces og denne fortsætter så længe temperaturen falder. Størknekurven følges.

Ad. 3: Materialet er i en overgangsfase mellem smeltning eller størkning. Der følges altid en vandret linje mellem de to kurver indtil enten smelte- eller størknekurven rammes igen. For tilstande mellem de to kurver fastlægges den samlede varmekapacitet for materialet ved lineær interpolation mellem den tilsvarende varmekapacitet for hhv. punktet på smeltekurven og punktet på størknekurven (varmekapaciteten bestemmes som hældningen af kurverne på det pågældende sted).
