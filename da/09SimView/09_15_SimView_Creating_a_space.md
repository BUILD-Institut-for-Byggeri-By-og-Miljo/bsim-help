<link rel="stylesheet" href="../style.css">

# SimView - Oprette et rum
Vælg den flade i modellen som støder op til det rum, der ønskes tilføjet. Fladen vises med røde streger i den geometriske visning og er markeret i træ-oversigten. Et højre-klik kalder menuen frem, og indgangen *Add Room* vælges. Dette giver adgang til dialogen for tilføjelse af et rum.

<figure id="center_img">
<img src="./assets/AddRoom.GIF" alt="En flade (konstruktion) er valgt for tilføjelse af et rum. Den valgte konstruktion er markeret i den geometriske visning og i træ-oversigten.">
<figcaption>En flade (konstruktion) er valgt for tilføjelse af et rum. Den valgte konstruktion er markeret i den geometriske visning og i træ-oversigten.</figcaption>
</figure>


<figure id="center_img">
<img src="./assets/RoomDlg.GIF" alt="Dialog (Room) for tilføjelse af et rum. De tre felter giver mulighed for at angive et navn (vælg et godt navn!), hvor langt rummet skal strække sig (i meter) fra den flade, det defineres ud fra (i samme retning som fladens normal), samt fire muligheder for valg af geometri for rummet.">
<figcaption>Dialog (Room) for tilføjelse af et rum. De tre felter giver mulighed for at angive et navn (vælg et godt navn!), hvor langt rummet skal strække sig (i meter) fra den flade, det defineres ud fra (i samme retning som fladens normal), samt fire muligheder for valg af geometri for rummet.</figcaption>
</figure>

Funktionerne for oprettelse af det nye rums geometri (*Room Shape*) er:

*   *Box* (kasse) - opretter et kasseformet rum på ydersiden (i forhold til det eksisterende rum) af den valgte flade. Afstanden fra den valgte flade til den modstående flade i det nye rum er givet ved værdien af *Projection*.

*   *Cone* (pyramide) - opretter et pyramideformet rum på ydersiden (i forhold til det eksisterende rum) af den valgte flade. Afstanden fra den valgte flade til toppunktet af pyramiden er givet ved værdien af *Projection*.

*   *Copy of Current Room* opretter en geometrisk kopi - inklusiv vinduer og åbninger i flader der vender mod det fri - af det rum, som den markerede flade tilhører. *For den valgte flade <u>skal</u> der findes en modstående flade i det det eksisterende rum som er parallel og har samme form og areal*.

*   *Copy of whole Storey* opretter en komplet kopi af alle de rum som er beliggende umiddelbart under (eller over) den valgte flade. For den valgte flade og alle flader som støder op mod den valgte flade - direkte eller indirekte - og som er parallel med den valgte flade, kopieres de tilhørende rum lige som ved *Copy of Current Room* funktionen. Det er således muligt at kopiere en hel etage til en ny etage, ovenover eller nedenunder, i en operation. *Ved oprettelse af nye etager i store modeller vil operationen tage en del tid - så hav tålmodighed*. *Selv om funktionen opfordrer til opbygning af store modeller, anbefales det altid, at forenkle modellen så meget som muligt under hensyntagen til det problem som søges løst ved simuleringen. Regnetiden vokser proportionalt med antallet af flader og termiske zoner.*

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
