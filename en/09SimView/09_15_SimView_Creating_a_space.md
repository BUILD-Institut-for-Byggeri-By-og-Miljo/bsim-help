<link rel="stylesheet" href="../style.css">

# *SimView* - Creating a space

Select the face in the model that adjoins the space to be added. The face is displayed with red lines in the geometric view and highlighted in the tree summary. Right-click to call up the menu and select the *Add Space* option. This opens the dialog box for adding a space.


<figure id="center_img">
<img src="./assets/AddRoom.GIF" alt="A face (construction) has been selected for the addition of a space. The selected construction is highlighted in the geometric view and the tree summary.">
<figcaption>A face (construction) has been selected for the addition of a space. The selected construction is highlighted in the geometric view and the tree summary.</figcaption>
</figure>



<figure id="center_img">
<img src="./assets/RoomDlg.GIF" alt="Dialog box for adding a space. The three fields allow the user to specify a name (choose a good name!), how far the space should extend (in meters) from the face it is defined from (in the same direction as the face's normal vector) and four options for choosing a geometry for the space. ">
<figcaption>Dialog box for adding a space. The three fields allow the user to specify a name (choose a good name!), how far the space should extend (in meters) from the face it is defined from (in the same direction as the face's normal vector) and four options for choosing a geometry for the space. </figcaption>
</figure>

The four geometries are *Box, Cone, Copy of Current Space* and *Copy of whole Storey*:

*   *Box* - creates a box shaped space on the exterior side (counted from the existing space) of the selected face. The distance from the selected face to the opposite face in the new space is given by the value of *Projection*.

*   *Cone* - creates a cone or a pyramid shaped space on the exterior side (counted from the existing space) of the selected face. The distance from the selected face to the top of the cone is given by the value of *Projection*.

*   *Copy of Current Room* - creates a geometric copy on the exterior side of the selected face - including WinDoors or openings in any of the faces facing the ambient - of the current space. *For the selected face an opposite face <u>must</u> exist which is parallel and has the same size and shape as the current face*.

*   *Copy of whole Storey* - creates a complete copy of all spaces with a ceiling/floor in the same level as the current face and parallel to it. For the selected face, and all faces adjacent to (directly and indirectly) it and which are parallel to it, all spaces below (or above) are copied to a new storey above (or below) as it is done for a single space using the *Copy of Current Room* function. It is thus possible to copy a whole floor plan in one operation. *Using this function in large models will cause the program to work for quite some time - so be patient. Even though this function encourage to create large models, it is always recommended to simplify the model as much as possible bearing in mind the target of the simulation. The simulation time grows proportional to the number of faces and thermal zones.*

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

