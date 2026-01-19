<link rel="stylesheet" href="../style.css">

# Reference point


It is possible to define several reference points in a room to control the artificial lighting from these different points. The calculation and transfer of the solar light factors is made using [SimLight]().

The actual reference point is shown in SimView as a <span id="pink_text"> X</span>. It is possible to move the reference point by double-clicking the left mouse-button in one of the 3 sections or by holding the Ctrl-button while dragging the reference point with the left mouse-button pressed.


<figure id="center_img">
<img src="./assets/show_ref_point.gif" alt="The reference point is shown as a X in SimView.">
<figcaption>The reference point is shown as a <span id="pink_text"> X </span> in SimView.</figcaption>
</figure>


Reference points are made for each separate room in the building model by right-clicking the room and selecting Ref Points.



<figure id="center_img">
<img src="./assets/create_ref_point.gif" alt="Reference points are created by right-clicking the room and selecting Ref Points.">
<figcaption>Reference points are created by right-clicking the room and selecting Ref Points.</figcaption>
</figure>

Doing this will open a dialog with information about the coordinates for the actual reference point. Clicking New will create a new reference point with the coordinates for the actual reference point. REMEMBER to attribute a good name to the new reference point making it easy to identify it when needed in the control strategies for systems.



<figure id="center_img">
<img src="./assets/referencePoint.gif" alt="Dialog for defining several reference points in a room.">
<figcaption>Dialog for defining several reference points in a room.</figcaption>
</figure>

*   *Position in room:* Defines the location of the reference point in the global coordinate system of the building model.
    *   X: X-coordinate of the reference point.
    *   Y: Y-coordinate of the reference point.
    *   Z: Z-coordinate of the reference point.
*   *Normal to plane*: Defines a vector perpendicular to a plane in the room, pointing in the positive direction at which the reference point is located. A normal vector with the values 0,0,1 represents a horizontal plane where the reference point looks upwards.
    *   *dx:* X-coordinate the normal vector to the reference plane.
    *   *dy:* Y-coordinate the normal vector to the reference plane.
    *   *dz:* Z-coordinate the normal vector to the reference plane.
*   *New:* Creates a new reference point with "0" for all values, except dz.
*   *Copy:* Creates a new reference point as a copy of the current reference point.
*   *Delete:* Deletes the current reference point from the model.   

