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

Eksisterende flader kan også [flyttes](https://help.bsim.dk/support/kb/articles/DmwA8o94/simview---move) parallelt med fladens normal.

<figure id="center_img">
<img src="./assets/NormalView.GIF" alt="Underinddeling af kanter og flader. De sorte firkanter markerer koordinatpunkter (vertex) tilhørende fladen og kan redigeres ved højre-klik på markeringen i den geometriske visning.">
<figcaption>Underinddeling af kanter og flader. De sorte firkanter markerer koordinatpunkter (vertex) tilhørende fladen og kan redigeres ved højre-klik på markeringen i den geometriske visning.</figcaption>
</figure>

 

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
*   [Tilføje en åbning eller WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor)
*   [Tilknytte fiktive zoner](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview---fiktive-zoner)
*   [Tilknytte klimadata og jord](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Udskrift af model](https://help.bsim.dk/support/kb/articles/ZmNr2Em2/simview---udskrift-af-model)
*   [SimView menuen](https://help.bsim.dk/support/kb/articles/49EdrJQ7/simview---menu)
*   [Flytning af bygninger, flader og WinDoors](https://help.bsim.dk/support/kb/articles/DmwA8o94/simview---move)

