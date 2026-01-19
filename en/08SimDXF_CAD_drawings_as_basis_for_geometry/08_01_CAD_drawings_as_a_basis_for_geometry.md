<link rel="stylesheet" href="../style.css">

# CAD drawings as a basis for geometry
<div style="text-align:center">

*SimDXF is a simple tool for import of CAD drawings in DXF-format as base for constructing the geometric description of building models in BSim.*

</div>
 
<div style="text-align:center">

*One floor of a multi story building can be imported via SimDXF at the time. If more floors needs to be created in the same model, it is necessary to create each floor separately and Insert the new floor(s) in the current project in SimView. Doing this the model gets more buildings (one for each new floor). It is **only** possible to simulate one building at the time (current building) in tsbi5. By dragging (in the tree structure of [SimView](https://bsim.outseta.com/support/kb/articles/wQXx2xQK/simview)) the new building(s) to the actual building, these floors (buildings) are added to the actual model and can be simulated simultaneously in [tsbi5](https://bsim.outseta.com/support/kb/articles/A93z0lQ0/tsbi5). Occasionally it will be necessary to move the new floors (i.e. upwards) in the model, using the [Move](https://help.bsim.dk/support/kb/articles/DmwA8o94/simview---move) command from the SimView-menu.*

</div>


CAD drawings of a building's floor plans can be used as the basis for constructing data models in BSim. CAD drawings must be saved in *DXF* format and should contain as little superfluous information as possible for the sake of clarity.

CAD drawings are opened in the external module called *SimDXF*, which is supplied with the software suite.

*SimDXF* is started – once the program has been set up – by clicking the icon on the toolbar and opening a *DXF* drawing.

<figure id="center_img">
<img src="./assets/image49.gif" alt="SimDXF with a CAD drawing open.">
<figcaption>SimDXF with a CAD drawing open.</figcaption>
</figure>

#### **Editing a face, window or door**

Select a face, window or door (click to highlight it in red), select *Edit Current* in the menu (right click + selection) or Ctrl + r. A name can be entered here if necessary and other data can be changed.


#### **Defaults - Options**

Various default values (e.g. window height) can be changed in the *Edit* | *Options* menu option.

 

#### **Saving in BSim format**

The model can be saved in a STEP file (*.dis), which can then be opened in *BSim* or *Bv98*. Please note that information on building elements does not contain details (e.g. on layering and materials). These should be taken from the database of the application in which they are to be used.

The edited DXF model can also be saved as an archive file (*.arc), which can subsequently be opened for further editing and printing of the STEP file.

It is a good idea always to save an archive file at the same time as a STEP file so that the STEP file will be easy to regenerate.

 

#### **Program version**

Via the menu entry [Help | About SimDXF ...](https://help.bsim.dk/support/kb/articles/1QpnypWE/about-simdxf) information about the program version is shown.

 

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
