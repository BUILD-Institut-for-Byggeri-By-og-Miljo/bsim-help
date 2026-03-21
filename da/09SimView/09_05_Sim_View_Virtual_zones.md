<link rel="stylesheet" href="../style.css">

# SimView - fiktive zoner

Begrebet fiktive zoner fungerer ved, at kun rum placeret i termiske zoner medtages i simuleringen med *tsbi5*. Fiktive zoner er zoner, der grænser op til termiske zoner og dermed påvirker forholdene her. En fiktiv zone kan defineres på to måder i BSim:

*   1) ved at angive at side 2 vender imod den termiske zone.

*   2) ved at oprette et rum - uden for termiske zoner - med en given temperaturvariation eller med en temperatur som en termisk zone.

**Ad 1)** Find den flade som skal vende side 2 imod en fiktiv zone. Højre-klik på "Finish" i træstrukturen for den side, som vender imod det fri, og vælge en termisk zone i stedet for "Outdoors". Herved oprettes en fiktiv zone som **altid** har samme temperatur- og fugtforhold som den termiske zone. De belastninger, som påvirker fladen i den valgte termiske zone, kopieres til den side, der vender imod den fiktive zone. Side 2 påvirkes således af den termiske zone uden at den termiske zone påvirkes direkte af fladens side 2. Vælges den fiktive zone på side 2 til at være den samme som på side 1 påvirkes konstruktionen symmetrisk.

<figure id="center_img">
<img src="./assets/finish_property.gif " alt="I Finish Property dialogen er det muligt at vælge hvad der skal være på den pågældende side af en flade.">
<figcaption>I Finish Property dialogen er det muligt at vælge hvad der skal være på den pågældende side af en flade.</figcaption>
</figure>


**Ad 2)** Hvis der oprettes et rum som støder op til en termisk zone, kan dette påtrykkes en fast [temperaturvariation](../24Miscellaneous/24_56_Room_Temperature.md) eller den samme temperatur som en termisk zone. Hvis modellen alene skal bruges til simulering med *tsbi5*, er det ikke nødvendigt at definere konstruktionerne for alle begrænsningsflader i et rum som ikke indgår i en termisk zone. Vælges naborummets temperatur lig med den termiske zones temperatur, vil konstruktionen som adskiller de to rum påvirkes symmetrisk.

 

Se også:

*   [Oprette en bygning](../09SimView/09_14_SimView_Creating_a_building.md)
*   [Tilføje et rum](../09SimView/09_15_SimView_Creating_a_space.md)
*   [Standardkonstruktioner](../10Thermal_zones/10_06_SimView_Default_constructions.md)
*   [Tilknytte ikke-standardkonstruktioner](../09SimView/09_09_SimView_Non_default_constructions.md)
*   [Oprette en termisk zone](../10Thermal_zones/10_01_Thermal_Zone_property.md)
*   [Tilføje rum til termiske zoner](../10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.md)
*   [Tilføje systemer til termiske zoner](../11Systems/11_01_Systems.md)
*   [Redigere geometrien](../09SimView/09_02_SimView_Editing_the_model_geometry.md)
*   [Tilføje konstruktioner](../10Thermal_zones/10_06_SimView_Default_constructions.md)
*   [Tilføje en åbning eller WinDoor](../10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.md)
*   [Tilknytte fiktive zoner](../09SimView/09_05_Sim_View_Virtual_zones.md)
*   [Tilknytte klimadata og jord](../09SimView/09_10_Climate_data.md)
*   [Udskrift af model](../10Thermal_zones/10_09_SimView_Printing_a_model.md)