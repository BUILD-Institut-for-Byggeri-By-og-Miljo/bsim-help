<link rel="stylesheet" href="../style.css">

# SimView - Default constructions

In *BSim* it is possible to attach default constructions to all the building elements from the *SimDB* database in one go. This is done by right-clicking in the geometric view and selecting the *Defaults* option, which opens two windows: the database and a list of different types of construction.

<figure id="center_img">
<img src="./assets/DefaultConstructions.gif" alt="Attaching default constructions to building elements.">
<figcaption>Attaching default constructions to building elements.</figcaption>
</figure>

*SimView* divides the constructions into groups, each of which can be given a default value from the database:

*   ExtConstructions: Constructions with one side to the open air.

*   IntConstuctions: Constructions with both sides to spaces.

*   ExtWindoor: Windows and doors with one side to the open air.

*   IntWindoor: Windows and doors with both sides to a space.

*   ExtConstFinish: Finish properties, e.g. color, gloss, etc., for faces in the open air.

*   IntConstFinish: Finish properties, e.g. color, gloss, etc., for faces in a space.

*   Roof: Constructions where the angle between the face's normal vector and the vertical is less than 30°.

*   IntFloor: Horizontal construction located between two spaces.

*   ExtFloor: Horizontal constructions whose normal vector points down.

*   ExtWindoorFinish: Finish properties for WinDoor in the open air.

*   IntWindoorFinish: Finish properties for WinDoor with a space on each side.

 

The *Delete* button allows the attachment to the database for groups of constructions to be removed. To remove the attachment, highlight a group and click *Delete.* The changes will take effect when the default constructions are updated using *Insert Defaults* by right-clicking the building.

The dialog box contains another two tabs: [HeatLoss](https://help.bsim.dk/support/kb/articles/MQvE8bmY/modeloplysninger) and [Description](https://help.bsim.dk/support/kb/articles/xmerZnQV/beskrivelse).

In addition to the constructions and [finish properties](https://help.bsim.dk/support/kb/articles/NmdKazW0/finish-property) a surface resistance is attached to all surfaces as standard.

To attach a construction from the database to one of the groups, hold the left mouse button down on the desired construction's [SfB number](https://help.bsim.dk/support/kb/articles/DQ2xwBWV/sfb-i-bsim), drag the number to the Defaults window and drop it on the name of the construction group in question. Once the desired default constructions have been attached, click Apply or OK in the Defaults window. The changes will not come into force until the building is right-clicked in the tree summary and the [Insert Defaults](https://help.bsim.dk/support/kb/articles/wQXxAZQK/insert-default-options) button is clicked in the dialog box that appears.

Not all constructions can be defined as default constructions. In this case the constructions have to be [selected from the database individually](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner).

 

See also:

*   [Creating a building](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Creating a space](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Default constructions](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Non-default constructions](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Creating thermal zones](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/thermal-zone-property)
*   [Systems in thermal zones](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Adding spaces to thermal zones ](https://help.bsim.dk/support/kb/articles/amRGJpQJ/tilf-je-rum-til-termiske-zoner)
*   [Editing the model geometry](https://help.bsim.dk/support/kb/articles/L9nrKz9Z/redigere-modelgeometri)
*   [Adding an opening or WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor)
*   [Solar light factors for WinDoors](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors)[](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilf-je-bning-eller-windoor)
*   [Virtual zones](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview-fiktive-zoner)
*   [Climate data and ground](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Printing a model](https://help.bsim.dk/support/kb/articles/z9MKj7m4/udskrift-af-model)
