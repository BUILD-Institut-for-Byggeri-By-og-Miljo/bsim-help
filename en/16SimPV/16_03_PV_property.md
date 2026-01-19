<link rel="stylesheet" href="../style.css">

# PV property
<figure id="center_img">
<img src="./assets/pv_property.gif" alt="Dialog for definition of properties for an area in the building model that contains solar cells.">
<figcaption>Dialog for definition of properties for an area in the building model that contains solar cells.</figcaption>
</figure>

*Description*: The field shows the textural description given in the database for the selected PV-system.

*System Info*: The field shows the input data for the PV-system from the database. First line shows the SfB-number, second line the overall system efficiency and third line if proper stringing or selection of solar cell type ensures proportional reduction of the electric yield when partial shadows strikes the area.

*Area*: The field shows the PV area and the width and height of the area.

*Active Area*: Defines the part of the total area covered by active solar cells. If the solar cells are mounted between two panes of glass with a certain distance to allow light to penetrate the PV-array, the area with solar cells are to be given in m².

*Frame Dist.*: It is possible to give the distance - equal all around the module - from the frame to those solar cells closest to the frame. This information is used together with *Recess* to calculate shading from the frame.

*Recess*: Gives the distance from the surface of the solar cells to the frontier of the frame. This number is used, with *Frame Dist.* to calculate the shading from the mounting system.

*Frame Distance* and *Recess* expresses the local shadows on the solar cells of the module from the edges of the module or the profiles of the module mounting system. It is thus no necessary the front of the profile, which gives the *recess* but rather the depth of that edge casting the first shadow on the solar cells closest to the edge. The figure below shows *Recess* and *Frame Distance* for a given mounting system.

<figure id="center_img">
<img src="./assets/pv_local_shadow.gif" alt="Recess and Frame Dist. is calculated for that part of the mounting system that casts the first shadow on the solar cells closest to the edge of the module.">
<figcaption>Recess and Frame Dist. is calculated for that part of the mounting system that casts the first shadow on the solar cells closest to the edge of the module.</figcaption>
</figure>