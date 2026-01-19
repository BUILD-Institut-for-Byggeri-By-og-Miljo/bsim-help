<link rel="stylesheet" href="../style.css">

# SimDXF - Faces
In *SimDXF* faces are constructed as lines between two nodes.

Select two nodes and press Ctrl+F, or draw a rectangle around the nodes between which faces are to be drawn + Ctrl+F.

<figure id="center_img">
<img src="./assets/dxf06.gif" alt="Highlighting nodes for generating faces.">
<figcaption>Highlighting nodes for generating faces.</figcaption>
</figure>

**NOTE:** 

*   If faces are to be created around a space where the lines in the CAD-drawing are difficult to select as long centerlines, a situation can occur where it is impossible to create faces between the nodes. The reason for this is that faces can <span style="text-decoration: underline;">only</span> be created between two nodes created on basis of one common line in the CAD-drawing.

*   It is possible to work around this problem by creating the nodes one-by-one (Ctrl+Q) based on two lines crosing each other. And when the next node (around the space) is to be created, to reuse one of the lines used for creating the previous node. From two nodes created from one common line, it is possible to create a face in the BSim-drawing (at the right side of the screen) by fencing (drag the mouse while pressing the left mouse button) the two nodes and pressing Ctrl+F.

Editing functions can be found in the menu called up by clicking the right mouse button. Select *Faces / Nodes* before the menu option is selected.

 

See also:

*   [Selecting the DXF filter](https://help.bsim.dk/support/kb/articles/ZmNrexm2/simdxf---valg-dxf-filter)
*   [Opening a DXF drawing](https://help.bsim.dk/support/kb/articles/BWzdblQE/simdxf---abne-dxf-tegning)
*   [Creating help lines](https://help.bsim.dk/support/kb/articles/amRGMZQJ/simdxf---oprette-hjalpelinier)
*   [Creating nodes](https://help.bsim.dk/support/kb/articles/XQYdOMmP/simdxf---oprette-knuder-nodes)
*   [Faces](https://help.bsim.dk/support/kb/articles/4966zA9X/simdxf---flader)
*   [Spaces](https://help.bsim.dk/support/kb/articles/y9q8DNQA/simdxf---rum)
*   [WinDoor](https://help.bsim.dk/support/kb/articles/OW4N0pQg/simdxf---windoor)
*   [Drawing revisions](https://help.bsim.dk/support/kb/articles/dQG2xem4/simdxf---tegningsrevisioner)
*   [Adding SimDXF as an application](https://help.bsim.dk/support/kb/articles/7maw2X9E/simdxf---tilfoje-som-applikation)