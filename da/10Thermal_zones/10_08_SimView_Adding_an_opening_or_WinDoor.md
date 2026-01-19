<link rel="stylesheet" href="../style.css">

# Tilføje åbning eller WinDoor

Flader består ikke af ugennemskinnelige dele alene, der er også åbninger, vinduer og døre. I *BSim* er der indført et nyt begreb: *WinDoor.* Dette begreb dækker over såvel vinduer som døre, idet disse i simuleringssammenhænge opfører sig ens. At åbninger behandles under samme overskrift skyldes, at den geometriske placering defineres på samme måde, og at en *WinDoor* principielt tilføjes i en åbning.

Placeringen i en flade vælges ved først at vælge et hjørnepunkt *(vertex)* i fladen - normalt det punkt i fladen der har den mindste x- eller y-koordinat i fladens retning. En vertex vælges ved at venstre-klikke på en vertex i 3D-visningen samtidig med at *Shift-knappen* holdes nede. Alternativt kan der også dobbelt venstre-klikkes uden aktiveret *Shift-*knap*.* Dette punkt bliver origo i et midlertidigt, lokalt koordinatsystem hvori åbningen eller WinDoor placeres. Et valgt punkt vises som en sort firkant med en sort ramme udenom. Desuden skal der vælges en kant *(edge)* - normalt bunden af fladen - som lokal x-akse, hvorfra placeringen defineres. En kant vælge på samme måde som beskrevet ovenfor ved valg af vertex. En valgt kant vises som en grøn linie.

Højre-klik derefter i den geometriske visning og vælg indgangen *Add Opening* eller *Add WinDoor* for at åbne dialogen for definition af placeringen i fladen.

<figure id="center_img">
<img src="./assets/AddWindoor.GIF" alt="Dialog for placering af WinDoor i en flade."> 
<figcaption>*Dialog for placering af WinDoor i en flade.</figcaption>
</figure>

Der skal opgives en række informationer for en entydig placering:

*   *Name:* Navnet for åbningen eller vinduet (vælg et godt navn!).

*   *Width:* Bredden i meter.

*   *Height:* Højden i meter.

*   *Offset:* Flytningen i forhold til den valgte kant (grøn) i meter. Hvis fladens nederste kant er valgt, er det en lodret flytning i forhold til fladens bund (ofte gulvet).

*   *Dist:* Flytning parallelt med den valgte kant i meter.

*   *Number of Items*: Antallet af ens åbninger eller *WinDoors* i fladen i to akseretninger (X og Y) som illustreret på skitsen i dialogen.

*   *Distance between*: Hvis der indsættes mere en et objekt i fladen skal deres indbyrdes afstand angives i meter i begge akseretninger.

Vinduer og åbninger kan ikke placeres helt ude ved kanten af de konstruktioner som støder op til den flade vinduet eller åbningen skal indsættes i. Hvis der trykkes OK og tolerancen er overskredet forlades menuen uden indsættelse af et objekt. Trykkes der derimod *Apply* søger programmet at indsætte det ønskede objekt. Hvis placeringen er uden for tolerancerne vil indsættelsen ikke lykkes og inddata kan ændres.

Hver gang der trykkes på *Apply* tilføjes et objekt *(Opening* eller *WinDoor)* med den givne geometri. Alle åbninger og *WinDoor* tilhørende den samme flade kan derfor med fordel oprettes fra dialogen på en gang.

Hvis et vindue eller en åbning ønskes placeret midt i en flade med lige stor afstand til alle kanter, kan funktionen [Insert Windoor](https://help.bsim.dk/support/kb/articles/xmer2wQV/simview---insert-windoor) benyttes i stedet.

Den geometriske beskrivelse af en WinDoor (rammer, sprosser, udhæng og sidefinner samt systemer der knytter sig hertil - skodder og solafskærmning) sker ved at højre-klikke på objektet i træ-oversigten, hvorved dialogen [Windoor Property](https://help.bsim.dk/support/kb/articles/rQV5MLm6/windoor-property) vises.

Et bestemt vindue knyttes til modellen ved at trække det fra [databasen](https://help.bsim.dk/support/kb/articles/49EdNJQ7/materialelag-for-windoor) til det rigtige sted i modellens træ-oversigt.

Systemer tilknyttet en WinDoor:

*   [Regulering](https://help.bsim.dk/support/kb/articles/y9gB57QM/regulation) (af naturlig ventilation)
*   [Skodder](https://help.bsim.dk/support/kb/articles/ZmNrMxm2/shutter-system) (for reduktions af varmetab om natten)
*   [Solafskærmning](https://help.bsim.dk/support/kb/articles/7maw8X9E/shading-system) (for reduktion af overhedning)

Se også:

*   [Oprette en bygning](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Tilføje et rum](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Standardkonstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilknytte ikke-standardkonstruktioner](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Oprette en termisk zone](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/thermal-zone-property)
*   [Tilføje rum til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGJpQJ/tilf-je-rum-til-termiske-zoner)
*   [Tilføje systemer til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Redigere geometrien](https://help.bsim.dk/support/kb/articles/L9nrKz9Z/redigere-modelgeometri)
*   [Sollysfaktorer](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors)
*   [Tilføje konstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilføje en åbning eller WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilf-je-bning-eller-windoor)
*   [Tilknytte fiktive zoner](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview-fiktive-zoner)
*   [Tilknytte klimadata og jord](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Udskrift af model](https://help.bsim.dk/support/kb/articles/z9MKj7m4/udskrift-af-model)