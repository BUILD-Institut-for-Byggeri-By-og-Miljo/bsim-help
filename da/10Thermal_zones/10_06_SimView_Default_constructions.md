<link rel="stylesheet" href="../style.css">

# Standardkonstruktioner

I *BSim* er det muligt at tilknytte standardkonstruktioner til alle bygningselementerne på en gang fra databasen *SimDB.* Dette sker ved at højre-klikke i den geometriske visning og vælge indgangen *Defaults,* som åbner to vinduer, dels databasen, dels en liste med forskellige typer af konstruktioner. 

<figure id="center_img">
<img src="./assets/DefaultConstructions.GIF" alt="Tilknytning af standardkonstruktioner (Defaults | BuildingElement) til bygningselementer."> 
<figcaption>Tilknytning af standardkonstruktioner (Defaults | BuildingElement) til bygningselementer.</figcaption>
</figure>

*SimView* inddeler konstruktionerne i grupper, som hver kan tilknyttes en standardværdi fra databasen:

*   *ExtConstructions:* Konstruktioner med den ene side mod det fri.

*   *IntConstuctions:* Konstruktioner med begge sider mod rum.

*   *ExtWindoor:* Vinduer og døre med den ene side mod det fri.

*   *IntWindoor:* Vinduer og døre med begge sider mod et rum.

*   *ExtConstFinish:* Overfladeegenskaber, fx farve, glans o.l. for flader mod det fri.

*   *IntConstFinish:* Overfladeegenskaber, fx farve, glans o.l. for flader mod et rum.

*   *Roof:* Konstruktioner hvor vinklen mellem fladens normalvektor og lodret er mindre end 30°.

*   *IntFloor:* Vandrette konstruktion beliggende imellem to rum.

*   *ExtFloor:* Vandrette konstruktioner, hvis normalvektor peger nedad.

*   *ExtWindoorFinish:* Overfladeegenskaber for WinDoor mod det fri.

*   *IntWindoorFinish:* Overfladeegenskaber for WinDoor med et rum på hver side.

Knappen *Delete* giver mulighed for at fjerne tilknytningen til databasen for grupper af konstruktioner. En gruppe markeres og der trykkes *Delete* for at fjerne tilknytningen. Ændringerne træder ført i kraft når standardkonstruktionerne er opdateret ved *Insert Defaults* via højre-klik på bygningen.

Dialogen indeholder yderligere to faneblade: [HeatLoss](https://help.bsim.dk/support/kb/articles/MQvE8bmY/modeloplysninger) og [Description](https://help.bsim.dk/support/kb/articles/xmerZnQV/beskrivelse).

Ud over konstruktionerne og overfladeegenskaberne er der standardmæssigt tilknyttet en overgangsisolans til samtlige [overflader](https://help.bsim.dk/support/kb/articles/NmdKazW0/finish-property).

En konstruktion fra databasen tilknyttes en af grupperne ved at holde venstre museknap nede på den ønskede konstruktions [SfB-nummer](https://help.bsim.dk/support/kb/articles/DQ2xwBWV/sfb-i-bsim), trække det til *Defaults* vinduet og slippe det på navnet for den ønskede konstruktionsgruppe. Når de ønskede standardkonstruktioner er tilknyttet, trykkes på knappen *Anvend* eller *OK* i vinduet *Defaults.*

Ændringerne træder først i kraft, når der højre-klikkes på bygningen i træ-oversigten og trykkes på knappen [Insert Defaults](https://help.bsim.dk/support/kb/articles/wQXxAZQK/insert-default-options) i den dialog, der fremkommer.

Det er ikke alle konstruktioner, der kan defineres som standardkonstruktioner. I disse tilfælde må konstruktionerne [vælges enkeltvis fra databasen](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview-ikke-standard-konstruktioner).

 

Se også:

*   [Oprette en bygning](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Tilføje et rum](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Standardkonstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilknytte ikke-standardkonstruktioner](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Tilføje rum til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGJpQJ/tilf-je-rum-til-termiske-zoner)
*   [Tilføje systemer til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Redigere geometrien](https://help.bsim.dk/support/kb/articles/L9nrKz9Z/redigere-modelgeometri)
*   [Tilføje konstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilføje en åbning eller WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilf-je-bning-eller-windoor)
*   [Tilknytte fiktive zoner](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview-fiktive-zoner)
*   [Tilknytte klimadata og jord](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Udskrift af model](https://help.bsim.dk/support/kb/articles/z9MKj7m4/udskrift-af-model)