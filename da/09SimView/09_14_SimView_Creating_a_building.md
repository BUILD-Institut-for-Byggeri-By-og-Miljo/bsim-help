<link rel="stylesheet" href="../style.css">

# SimView - Oprette en bygning
Der kan oprettes eller tilføjes en bygning ved at højre-klikke i vinduet med den geometriske modelvisning. Herved fremkommer *SimView*-menuen, hvor indgangen *Add Building* (kan også kaldes som *<u>E</u>dit* | *Add* | *Building* ) vælges. Når der første gang oprettes en bygning, vil den indeholde ét rum. Det betyder reelt, at med det første rum oprettes der samtidig en bygning.

<figure id="center_img">
<img src="./assets/AddBuilding.GIF" alt="Dialog (Building) for definition af bygning.">
<figcaption>Dialog (Building) for definition af bygning.</figcaption>
</figure>

Dialogen for oprettelse af en bygning indeholder 10 felter til indtastning:

*   *Name*: Navnet på bygningen (vælg et fornuftigt navn der kan genkendes senere!).

*   *Room Name*: Navnet på det rum som samtidig oprettes (vælg et godt navn!).

*   *X origin*: Nulpunktet for øst-aksen i det ikke roterede koordinatsystem.

*   *Y origin*: Nulpunktet for nord-aksen i det ikke roterede koordinatsystem.

*   *Z origin*: Nulpunktet for z-aksen (opad) i modellens koordinatsystem.

*   *Rotation*: Bygningens rotation i forhold til det globale koordinatsystem (i grader), positiv med uret.

*   *X extend*: Bygningens udstrækning i X-retningen - øst når koordinatsystemet ikke er roteret (meter).

*   *Y extend*: Bygningens udstrækning i Y-retningen - nord når koordinatsystemet ikke er roteret (meter).

*   *Height*: Højden af bygningen (meter).

Målene beskriver **systemliniernes** beliggenhed i modellen. Når der senere tilknyttes konstruktioner til de enkelte flader, afsættes de efter følgende konvention:

*   <span id="red_text"> *Udvendige vægge afsættes fra systemlinien og indefter* </span>

*   <span id="red_text"> *Indvendige vægge afsættes med systemlinien som centerlinie.* </span>

Dette forhold **skal** man være opmærksom på ved definition af modellens geometri.

 

Se også:

*   [Oprette en bygning](/09SimView/09_14_SimView_Creating_a_building.html)
*   [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)
*   [Standardkonstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilknytte ikke-standardkonstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html)
*   [Oprette en termisk zone](/10Thermal_zones/10_01_Thermal_Zone_property.html)
*   [Tilføje rum til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html)
*   [Tilføje systemer til termiske zoner](/11Systems/11_01_Systems.html)
*   [Redigere geometrien](/09SimView/09_02_SimView_Editing_the_model_geometry.html)
*   [Tilføje konstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilføje en åbning eller en WinDoor](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html)
*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)
*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)
*   [Udskrift af model](/10Thermal_zones/10_09_SimView_Printing_a_model.html)