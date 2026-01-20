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

Hvis et vindue eller en åbning ønskes placeret midt i en flade med lige stor afstand til alle kanter, kan funktionen [Insert Windoor](/24Miscellaneous/24_72_Insert_Windoor_Function.html) benyttes i stedet.

Den geometriske beskrivelse af en WinDoor (rammer, sprosser, udhæng og sidefinner samt systemer der knytter sig hertil - skodder og solafskærmning) sker ved at højre-klikke på objektet i træ-oversigten, hvorved dialogen [Windoor Property](/24Miscellaneous/24_73_Windoor_Property.html) vises.

Et bestemt vindue knyttes til modellen ved at trække det fra [databasen](/07SimDB_Database/07_08_WinDoor_material_layers.html) til det rigtige sted i modellens træ-oversigt.

Systemer tilknyttet en WinDoor:

*   [Regulering](/11Systems/11_03_Regulation.html) (af naturlig ventilation)
*   [Skodder](/11Systems/11_04_Shutter_System.html) (for reduktions af varmetab om natten)
*   [Solafskærmning](/11Systems/11_05_Shading_System.html) (for reduktion af overhedning)

Se også:

*   [Oprette en bygning](/09SimView/09_14_SimView_Creating_a_building.html)
*   [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)
*   [Standardkonstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilknytte ikke-standardkonstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html)
*   [Oprette en termisk zone](/10Thermal_zones/10_01_Thermal_Zone_property.html)
*   [Tilføje rum til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html)
*   [Tilføje systemer til termiske zoner](/11Systems/11_01_Systems.html)
*   [Redigere geometrien](/10Thermal_zones/10_04_SimView_Editing_the_model_geometry.html)
*   [Sollysfaktorer](/10Thermal_zones/10_07_Solar_light_factors_for_WinDoors.html)
*   [Tilføje konstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilføje en åbning eller WinDoor](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html)
*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)
*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)
*   [Udskrift af model](/10Thermal_zones/10_09_SimView_Printing_a_model.html)