<link rel="stylesheet" href="../style.css">

# SimView - Redigere modelgeometrien


Geometrien for virkelige bygninger kan ikke altid beskrives som simple kasser. Derfor er det nødvendigt, at kunne redigere den opbyggede geometri.

En flade kan opdeles ved først at opdele to af dens kanter (*Edges*). Dette gøres ved at vælge kanten (lettest fra 3D-visningen), dobbeltklik eller shift-venstre-klik på kanten, højre-klikke og vælge menuindgangen *Split Edge*. Tilsvarende fremgangsmåde benyttes for de(n) andre kanter, der skal opdeles. Herved indsættes en ny vertex midt i kanten. Vælges yderligere en af den valgte kants endepunkter (vertex) fremkommer en dialog, hvor afstanden fra den valgte vertex til den indsatte vertex kan angives, dvs. længden af den nye kant:

<figure id="center_img">
<img src="./assets/split_edge.gif " alt="Split edge">
<figcaption>Split edge</figcaption>
</figure>


Tilsvarende fremgangsmåde benyttes for de(n) andre kanter, der skal opdeles.

Når der vælges (dobbelt-klik eller shift-venstre-klik) to nye vertexes i samme flade, kan der tilføjes en kant (*Edge*) mellem disse ved *Add Edge* kommandoen fra *SimView*-menuen.

Kanterne deles på denne måde på midten, hvilket ikke nødvendigvis er det ønskede. Den flade, som ønskes underinddelt, vælges (3D-view eller træ-oversigt), hvorved de nye og gamle koordinatpunkter (*vertex*) vises som sorte firkanter. Ved højre-klik på en *vertex* vises en dialog, som giver mulighed for at redigere punktets x, y og z-koordinater og på denne måde flytte punktet til den ønskede placering.

Nu kan fladen opdeles ved at vælge fladen og de to nye *vertex*. Der højre-klikkes, og indgangen *Split Face* vælges. Hvis den geometriske visning er valgt med tykkelse på konstruktioner, vil der nu optræde en flade med tykkelsen nul, idet der **ikke** er tilknyttet en konstruktion til den nye flade. Der kan tilknyttes en konstruktion til den nye flade som beskrevet ovenfor.

Den opdelte flade vil herefter bestå af en flade og en åbning. Åbningen tilknyttes egenskaber som en flade ved at vælge den og derefter vælge menupunktet *Add Face* fra SimView menuen.

Alternativt kan de to sæt koordinater *vertex* vælges og indgangen *Add edge* fra højre-klik menuen bruges til at opdele fladen langs den linie, der forbinder punkterne.

Eksisterende flader kan også [flyttes](/09SimView/09_13_SimView_Move.html) parallelt med fladens normal.

<figure id="center_img">
<img src="./assets/NormalView.GIF" alt="Underinddeling af kanter og flader. De sorte firkanter markerer koordinatpunkter (vertex) tilhørende fladen og kan redigeres ved højre-klik på markeringen i den geometriske visning.">
<figcaption>Underinddeling af kanter og flader. De sorte firkanter markerer koordinatpunkter (vertex) tilhørende fladen og kan redigeres ved højre-klik på markeringen i den geometriske visning.</figcaption>
</figure>

 

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
*   [Tilføje en åbning eller WinDoor](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html)
*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)
*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)
*   [Udskrift af model](/10Thermal_zones/10_09_SimView_Printing_a_model.html)
*   [SimView menuen](/06BSim_Program_structure/06_06_SimView_Menu.html)
*   [Flytning af bygninger, flader og WinDoors](/09SimView/09_13_SimView_Move.html)

