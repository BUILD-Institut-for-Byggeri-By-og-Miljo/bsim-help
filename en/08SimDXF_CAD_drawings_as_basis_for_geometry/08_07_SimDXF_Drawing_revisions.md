<link rel="stylesheet" href="../style.css">

# SimDXF - Drawing revisions
An archive file contains all the help lines and derived faces, windows, doors and zones. *Nodes* can be constructed from the help line. When the archive file is opened, the above information is loaded, but also the original DXF file, which is recorded together with the original help lines.

If changes have been made to the DXF file, the deviations will manifest themselves in the help lines not lying correctly. The original model can be corrected using the following method.

1.  Construct *nodes* in the old model for points that are to be moved

2.  Construct *nodes* in the new model for the equivalent points

3.  Drag *nodes* in the old model over to the equivalents in the new model.

*Nodes* can be dragged using the left mouse button (select *node* with the mouse, hold the button down and drag the *node* until it covers the *new node*, release the mouse button).

*Nodes* cannot be dragged to another *node* if it means that the width of the corresponding face will be 0. Windows and doors do not move with the face to which they belong.

<figure id="center_img">
<img src="./assets/dxf11.gif" alt="Model displayed in SimView.">
<figcaption>Model displayed in SimView.</figcaption>
</figure>

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
