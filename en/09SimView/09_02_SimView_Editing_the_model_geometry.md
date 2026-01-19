<link rel="stylesheet" href="../style.css">

# SimView - Editing the model geometry
The geometry of real buildings cannot always be described using simple boxes. It is therefore necessary to be able to edit the constructed geometry.

A face can be split by first splitting two of its *edges*. This is done by selecting the edge (easiest in the 3D view), double click or shift-left-click at the edge, right-clicking and selecting the *Split Edge* menu option. A similar procedure is used for the other edge(s) to be split. This action inserts a new vertex in th center of the edge. If one of the end points (vertexes) of the edge is selected as well, a diallog allowing the user to give the distance from that end point to the new vertx, say the lenght of the new edge:

<figure id="center_img">
<img src="./assets/split_edge.gif" alt="">
<figcaption></figcaption>
</figure>

A similar approach can be used for the rest of the edges that are to be splitted.

If two new *vertices* are selected (double click or shift-left-click) in the same face, an *edge* can be added between them using the *Add Edge* command from the *SimView* menu.

With this method the edges are split in the middle, which is not necessarily what is wanted. Select the face to be subdivided (3D view or tree summary), which will cause the new and old *vertices* to be displayed as black squares. Right-clicking on a *vertex* opens a dialog box that allows the X, Y and Z-coordinates of the vertex to be edited so that it can be moved to the desired location.

Now the face can be split by selecting the face and the two new *vertices*. Right-click and select the *Split Face* menu option. If the geometric view with thickness of constructions [has been chosen](https://help.bsim.dk/support/kb/articles/LmJv8EmP/simview---options), a face with a thickness of zero will appear, as a construction has **not** been attached to the new face. A construction can be attached to the new face as described above.

The split face will now consist of a face and an opening. The properties of a face can be attached to the opening by selecting it and then selecting the Add Face menu option from the SimView menu.

Alternatively the two sets of coordinates, vertices, can be selected and the Add Edge option from the right-click menu used to split the surface along the line connecting the points.

Existing faces can also be [moved](https://help.bsim.dk/support/kb/articles/DmwA8o94/simview---move) in parallel with the face's normal vector.

<figure id="center_img">
<img src="./assets/NormalView.gif" alt="Subdividing edges and faces. The black squares mark vertices belonging to the face and can be edited by right-clicking the marking in the geometric view.">
<figcaption>Subdividing edges and faces. The black squares mark vertices belonging to the face and can be edited by right-clicking the marking in the geometric view.</figcaption>
</figure>


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
*   [SimView menu ](https://help.bsim.dk/support/kb/articles/49EdrJQ7/simview---menu)
