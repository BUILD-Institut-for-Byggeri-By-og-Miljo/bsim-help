<link rel="stylesheet" href="../style.css">

# Structure of BSim

The programs in the *BSim suite are built up around SimView*, a central program and user interface with model editor. In *SimView* the model is displayed in a hierarchical tree summary – like that used in Windows Explorer, for example – down the left-hand side of the screen. The tree summary can be collapsed or expanded to display a large or small part of the model at one time. If text is too long to display in full, it can be viewed by holding the mouse cursor over the text string. The full text will be displayed in a speech bubble. Generally speaking, information on the object currently under the mouse cursor is provided in this way throughout the software suite.

In *SimView* a building model is displayed both in the form of a hierarchical tree summary on the left of the screen and in the form of a graphical view on the right of the screen. The graphical view is divided up into a floor plan, two elevations and a spatial view. *North is displayed in the bottom right-hand corner of the floor plan to show the rotation of the current building*.

The right-hand side of the screen is therefore divided into four fields, which display the model in the form of

*   an elevation at right angles to the X-axis or from north to south if the model has not been rotated (top left)

*   an elevation at right angles to the Y-axis or from east to west if the model has not been rotated (top right)

*   a plan drawing (bottom left)

*   a spatial view (bottom right)

A north arrow indicating the rotation of the model is also displayed in the plan drawing.

The models are defined in a system of spatial coordinates in which the <span id="red_text"> **X-axis** is positive towards east, the **Y-axis** is positive towards north and the **Z-axis** is positive upwards. </span>

The buildings of the model can be located with faces having a negative z-value. This do **not** mean that the model is below the surface of the ground, even though it looks like it in the spatial view. Sun will thus still be able to come through windows located all or partially beneath the origin of the co-ordinate system.

The system lines of the model are defined in [SimView](../09SimView/09_01_SimView.md) or imported from a CAD drawing using the [SimDXF](../08SimDXF_CAD_drawings_as_basis_for_geometry/08_01_CAD_drawings_as_a_basis_for_geometry.md) program.

When constructions are attached to the surfaces of the model they are drawn as:

*   Constructions facing *Outdoor or Ground* are drawn from the system line and <u>inward</u>.

*   Constructions between two rooms are drawn symmetric around the system line.

<figure id="center_img">
<img src="./assets/image25.gif" alt="The program window in SimView with the tree summary on the left and four views of the model on the right.">
<figcaption>The program window in SimView with the tree summary on the left and four views of the model on the right.</figcaption>
</figure>

The model's individual objects can be [worked on and examined](06_03_Mouse_operations_in_SimView.md) by clicking the mouse in combination with the Ctrl and Shift keys on the keyboard. Clicking with the left mouse button is called a left click (or just a click), while a click with the right mouse button is called a right click.

It is generally possible to change the view of the building model. The user can zoom in or out by pressing "+" or "-", and the model can be rotated by pressing "right arrow" or "left arrow". The same functions are also available on the toolbar or by selecting *<u>V</u>iew* | *<u>V</u>iew* followed by *Zoom In, Zoom Out* or *ViewPoint*.

Simple editing can be done directly in the tree summary. A system, for example, can be moved by dragging it from one thermal zone to another. Spaces can be [added to thermal zones](../10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.md) by dragging them into the zone.

In all the programs in the *BSim* suite it is possible to call up a menu by clicking the right mouse button. The menu is different in the various programs ([SimView](../09SimView/09_01_SimView.md), [XSun](../14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation.md), [tsbi5](../13tsbi5_thermal_simulation/13_01_tsbi5_thermal_simulation.md) and [SimLight](../15SimLight_Daylight_calculations/15_01_Daylight_calculations.md)) and contains the most frequently used functions for the current location.

It is possible to select faces (constructions) directly in the geometrical view by moving the mouse cursor to the desired object and pressing *Ctrl* + "*left click*" in the 3D view. This highlights the object in red in the geometrical view and the current construction is highlighted in the tree summary. It is also possible to select an object directly by clicking in the tree summary (see: [Add a space](../09SimView/09_15_SimView_Creating_a_space.md)). It is often easier to select the desired construction in the tree summary than in the 3D geometry.

 

See also:

*   [Toolbar](06_05_SimView_Toolbar.md)

*   [SimView menu](06_06_SimView_Menu.md)

*   [Program menus](06_04_Program_menus_in_BSim.md)
