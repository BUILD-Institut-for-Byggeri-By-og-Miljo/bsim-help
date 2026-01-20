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

Dialogen indeholder yderligere to faneblade: [HeatLoss](/09SimView/09_11_Model_information.html) og [Description](/09SimView/09_11_Model_information.html).

Ud over konstruktionerne og overfladeegenskaberne er der standardmæssigt tilknyttet en overgangsisolans til samtlige [overflader](/24Miscellaneous/24_34_Finish_Property.html).

En konstruktion fra databasen tilknyttes en af grupperne ved at holde venstre museknap nede på den ønskede konstruktions [SfB-nummer](/07SimDB_Database/07_07_BuildingElement.html), trække det til *Defaults* vinduet og slippe det på navnet for den ønskede konstruktionsgruppe. Når de ønskede standardkonstruktioner er tilknyttet, trykkes på knappen *Anvend* eller *OK* i vinduet *Defaults.*

Ændringerne træder først i kraft, når der højre-klikkes på bygningen i træ-oversigten og trykkes på knappen [Insert Defaults](/24Miscellaneous/24_71_Insert_Default_Options.html) i den dialog, der fremkommer.

Det er ikke alle konstruktioner, der kan defineres som standardkonstruktioner. I disse tilfælde må konstruktionerne [vælges enkeltvis fra databasen](/09SimView/09_09_SimView_Non_default_constructions.html).

 

Se også:

*   [Oprette en bygning](/09SimView/09_14_SimView_Creating_a_building.html)
*   [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)
*   [Standardkonstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilknytte ikke-standardkonstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html)
*   [Tilføje rum til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html)
*   [Tilføje systemer til termiske zoner](/11Systems/11_01_Systems.html)
*   [Redigere geometrien](/10Thermal_zones/10_04_SimView_Editing_the_model_geometry.html)
*   [Tilføje konstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilføje en åbning eller WinDoor](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html)
*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)
*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)
*   [Udskrift af model](/10Thermal_zones/10_09_SimView_Printing_a_model.html)