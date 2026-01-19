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

*   [Oprette en bygning](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Tilføje et rum](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Standardkonstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilknytte ikke-standardkonstruktioner](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Oprette en termisk zone](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/thermal-zone-property)
*   [Tilføje rum til termiske zoner](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Tilføje systemer til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Redigere geometrien](https://help.bsim.dk/support/kb/articles/L9PwMrQJ/simview---redigere-modelgeometrien)
*   [Tilføje konstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilføje en åbning eller en WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor)
*   [Tilknytte fiktive zoner](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview---fiktive-zoner)
*   [Tilknytte klimadata og jord](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Udskrift af model](https://help.bsim.dk/support/kb/articles/ZmNr2Em2/simview---udskrift-af-model)