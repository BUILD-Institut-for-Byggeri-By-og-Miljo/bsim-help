<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Finish
Fanebladet *Finish* indeholder information om materialets overfladeegenskaber.

De forskellige data benyttes enten til simulering af det termiske indeklima samt energi- og dagslysforholdene. Data for overfladens farve benyttes dog alene i forbindelse med beregning af dagslysforholdene og ved eksport af bygningsmodeller til videre behandling med [*Radiance*](/18Radiance_Visualisation_og_the_building/18_01_Exporting_data_to_Radiance.html).

Hvis der ikke vælges et materiale til at repræsentere en overflade vil [*SimLight*](/15SimLight_Daylight_calculations/15_01_Daylight_calculations_with_SimLight.html) benytte følgende standardværdier for lys-reflektansen i simuleringerne:

*   Gulv: 0,1

*   Vægge: 0,4

*   Lofter: 0,7

*   Glas: 0,92

Tilsvarende hentes reflektansen af jordoverfladen omkring modellen fra [Site](/24Miscellaneous/24_25_Site_Property.html), hvis den er defineret, ellers benyttes 0,1.

<figure id="center_img">
<img src="./assets/DBFINISH.GIF" alt="Information om materialets overfladeegenskaber findes på fanebladet Finish (Edit Material | Finish).">
<figcaption>Information om materialets overfladeegenskaber findes på fanebladet "Finish" (Edit Material | Finish).</figcaption>
</figure>

*   Emissivity: Benyttes i simuleringen af langbølget strålingsudveksling.

*   SolarAbs.: Absorbstans af solstråling benyttes i termisk simulering af solvarmens fordeling til modellens overflader.

*   LightRefl.: Lys-reflektansen benyttes til simulering af dagslys med *SimLight*.

Hvis der for en flade er defineret en farve som overfladeegenskab, overføres denne ved eksport til Radiance. Hvis der ikke er defineret en farve for overfladerne, tildeles de tilfældige farver på en sådan måde, at alle får forskellig farve. Farven vælges ved tryk på knappen *Color*, hvorved en dialog for valg af farve åbnes.

<figure id="center_img">
<img src="./assets/COLOR.JPG " alt="Dialog for valg af overfladeegenskaben farve.">
<figcaption>Dialog for valg af overfladeegenskaben farve.</figcaption>
</figure>

Se også:

*   [Faneblad Material](/07SimDB_Database/07_11_SimDB_BuildingMaterial_Material.html)

*   [Faneblad Moisture](/07SimDB_Database/07_14_SimDB_BuildingMaterial_Moisture.html)

*   [Faneblad Thermal](/07SimDB_Database/07_12_SimDB_BuildingMaterial_Thermal.html)

*   [Faneblad Environment](/07SimDB_Database/07_07_SimDB_BuildingMaterial_Environment.html)

*   [Faneblad Glazing](/07SimDB_Database/07_10_SimDB_BuildingMaterial_Glazing.html)

*   [Faneblad UserDefined](/07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.html)

*   [Faneblad Frame](/07SimDB_Database/07_09_SimDB_BuildingMaterial_Frame.html)
