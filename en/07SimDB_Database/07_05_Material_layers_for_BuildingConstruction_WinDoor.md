<link rel="stylesheet" href="../style.css">

# Material layers for BuildingConstruction - WinDoor
WinDoors are defined by clicking the "layer" that should be changed/created, after eventual clicking the *New*-button. Now the material type is selected from the *Type* selection box (Note: The glass must be selected fra material group "a", the frame from group "b" and the panel from gruop "c"). Hereafter the material is selected i the *ConstructionMaterial* selection box.

WinDoors are defined in the same database structure as al other constructions, but the un-named fields and the collumns in the table have a little different meaning.

*   *Construction material* defines the "material" layers of WinDoor:

    *   Field 1 shows the SfB-number of the highlighted material layer (glass, frame or panel).

    *   The meaning of field 2 depends on the layer number:

        *   For layer 1 (glass) field 2 defines the lienar heat-loss corfficient through the spacer between the panes of glass (see <a href="#windoor-table"> table</a>).

        *   For layer 2 (frame) field 2 is the width of the frame measures in the plane of the WinDoor (distance from masonry to edge of the glass). The width is assumed to be the same on all sides of the glass.

        *   For layer 3 (panel) field 2 defines the size of the panel of the reaminding area - when the frame has been subtracted from the opening area.

*   The table at the buttom of the dialog shows the order of the material "layers". In a WinDoor the order is **important**. First "layer" **must** be the glass, second "layer" **must** be the frame and third "layer" **must** be the panel. The panel do not need to occour in all WinDoor definitions, but only in those with a [layout](), equal to that of a door. It is possible to change the order of the material "layers" by dragging, whild pressin the left mouse button, the layer to a new position in the table.

*   At the bottom right an information field on how to understand the table at the left-hand side is shown.

<figure id="center_img">
<img src="./assets/DBBE2.GIF" alt="Defining a WinDoor in the database.">
<figcaption>Defining a WinDoor in the database.</figcaption>
</figure>

The dialog box for editing material data can be opened by right-clicking the name of the material.

The linear coefficient of transmission heat loss (*LinTrCoeff* or the Ψ<sub>g</sub> value) in W/m K through spacer profiles made of aluminum or ordinary steel are shown in the table below (Source: [DS 418:2002](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur)). It is possible to interpolate in the table.

<div id="windoor-table">

| WinDoor U-value (W/m²K) | Linear coefficient of transmission (W/mK) |
|------------------------|-------------------------------------------|
| 1,0 – 1,2              | 0,10                                      |
| 2,7 – 3,0              | 0,07                                      |

</div>


See also:

*   [Tab BuildingElement ](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)

*   [Tab MaterialAmount](https://help.bsim.dk/support/kb/articles/Rm8JaZ94/simdb---buildingelement-materialamount)
