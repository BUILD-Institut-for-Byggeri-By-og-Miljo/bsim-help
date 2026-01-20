<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Moisture
Fanebladet Moisture indeholder oplysninger om materialets fugtegenskaber.

<div id="gray_background">
Oprettes der nye materialer i en database med information om egenskaber for fugttransport <u>skal</u> der angives data for fugttransporten, også selvom der ikke skal simuleres fugttransport. <a href="/05Introduction/05_05_Limitations.html">Se begrænsninger</a>.
</div>


<figure id="center_img">
<img src="./assets/DB-FUGT.JPG " alt="Fugtegenskaber for bygningsmateriale.">
<figcaption>Fugtegenskaber for bygningsmateriale.</figcaption>
</figure>

I fanebladet *Moisture* angives fugtegenskaber for et materiale. I fanebladet kan angives en række data, som er medtaget til fremtidig brug.

<div id="gray_background">
Lambda er varmeledningsevnen for materialet som anvendes når "Moisture Transport" er slået TIL under options for simuleringer med tsbi5. Se også "<a href="/07SimDB_Database/07_12_SimDB_BuildingMaterial_Thermal.html">Thermal</a>."
</div>
<br>

**Kun værdien Lambda anvendes endnu, samt de tabeller som defineres under Absorption, Desorption og DeltaRh.**

*Absorption/Desorption*: Klikkes på Absorption (*Desorption*) knappen [[åbnes en tabel](/24Miscellaneous/24_43_Sorption_desorption.html), hvori der indtastes sammenhørende værdier af relativ fugt (-) og fugtindhold (kg/kg) for punkter på absorptions (desorptions) kurven for materialet. Første punkt antages altid at være (0, 0), og det kan udelades. Værdierne indtastes i rækkefølge med stigende relativ fugtighed.

*DeltaRH*: Klikkes på *DeltaRH* knappen åbnes en tabel, hvori der indtastes værdi(er) for materialets kurve for det hygroskopiske område, som sammenhørende værdier af relativ fugt (-) og fugt permeabilitet (kg/m s Pa).

 

Se også:

*   [Faneblad Material](/07SimDB_Database/07_11_SimDB_BuildingMaterial_Material.html)

*   [Faneblad Thermal](/07SimDB_Database/07_12_SimDB_BuildingMaterial_Thermal.html)

*   [Faneblad PCM](/07SimDB_Database/07_13_SimDB_BuildingMaterial_PCM.html)

*   [Faneblad Moisture](/07SimDB_Database/07_14_SimDB_BuildingMaterial_Moisture.html)

*   [Faneblad Glazing](/07SimDB_Database/07_10_SimDB_BuildingMaterial_Glazing.html)

*   [Faneblad UserDefined](/07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.html)

*   [Faneblad Frame](/07SimDB_Database/07_09_SimDB_BuildingMaterial_Frame.html)

*   [Faneblad Finish](/07SimDB_Database/07_08_SimDB_BuildingMaterial_Finish.html)


 

*   [Godt i gang med BSim2000](/21Getting_started_with_BSim/21_01_Getting_started_with_BSim.html)
