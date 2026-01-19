<link rel="stylesheet" href="../style.css">

# *SimView* - Virtual zones

The term virtual zones works as only those spaces located in thermal zones will be simulated in tsbi5. Virtual zones are zones, facing a real thermal zone and thus influences the conditions here. Virtual zones in BSim can be defined in two different ways:

*   1) selecting that face 2 also faces the thermal zone.

*   2) by creating a space - outside any thermal zone - with a given temperature variation or a temperature as a thermal zone.

**Re 1)** Locate the face that are facing a virtual zone. Right-click "Finish" in the tree structure on the side of a construction facing outdoors and select a thermal zone instead of "Outdoors". This creates a virtual zone that **always** have the same temperature and moisture conditions as the thermal zone. The loads on the surface facing the thermal zone are copied to the side of the virtual zone. Face 2 is thus influenced by the thermal zone, without a direct influence from face 2 on the thermal zone. If the conditions in the virtual zone is selected to be equal to the thermal zone at face 1, then the loads on the construction is symmetrical.


<figure id="center_img">
<img src="./assets/finish_property.gif" alt="In the Finish Property dialog is is possible to select what is on the outdoors side of a construction.">
<figcaption>In the Finish Property dialog is is possible to select what is on the outdoors side of a construction.</figcaption>
</figure>


**Re 2)** If a space is created next to a real thermal zone, it can be given a fixed [temperature variation](https://help.bsim.dk/support/kb/articles/4966J79X/rumtemperatur) or the same indoor conditions as a real thermal zone. If the model is **not** going to be used in Bv98, the constructions in spaces outside thermal zones do not have to be defined. If the space if given the same indoor conditions as in the neighboring zone, the construction will be subject to symmetrical loads.

When right-clicking a virtual zone (space) the dialog for definition of the thermal [properties of the space](https://help.bsim.dk/support/kb/articles/7mawaK9E/room-propery) is shown. The temperature variation of a room outside any thermal zone can be described as a cosines shaped variation over the year.


See also:

*   [Creating a building](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Creating a space](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Default constructions](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Non-default constructions](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Creating thermal zones](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/thermal-zone-property)
*   [Systems in thermal zones](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Editing the model geometry](https://help.bsim.dk/support/kb/articles/L9PwMrQJ/simview---redigere-modelgeometrien)
*   [Solar light factors for WinDoors](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors)
*   [Adding an opening or WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor)
*   [Virtual zones](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview---fiktive-zoner)
*   [Climate data and ground](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Printing a model](https://help.bsim.dk/support/kb/articles/ZmNr2Em2/simview---udskrift-af-model)

