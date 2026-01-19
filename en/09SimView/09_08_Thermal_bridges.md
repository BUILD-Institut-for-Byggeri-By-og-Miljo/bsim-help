<link rel="stylesheet" href="../style.css">

# Thermal bridges
Thermal bridges can be connected to edges around both faces and WinDoors.

<figure id="center_img">
<img src="./assets/dlg_ColdBridge.gif" alt="Dialog for definition of thermal bridges along the edges of a face.">
<figcaption>Dialog for definition of thermal bridges along the edges of a face.</figcaption>
</figure>

<u>**Insert edges**</u> inserts the length of all edges surrounding the selected construction into the table. Then it is possible to add information about the line loss coefficient (Ψ) for each thermal bridge.

It is also possible to add the effect of point shaped thermal bridges in a face by adding a new line in the table. Here 1 should be used as the "Line length", the point loss coefficient should be placed in "Lin Transm", and the number of point shaped thermal bridges should be added in the column "Amount".

<u>**Clear All**</u> deletes the content of the table.

The influence of thermal bridges in the energy balance is described in the [theory section](https://help.bsim.dk/support/kb/articles/wmjnblmV/varmebalance-for-luften-i-en-zone).

It is also possible to simulate [geometric thermal bridges](https://help.bsim.dk/support/kb/articles/49EdOJQ7/kuldebroer), i.e. thermal bridges caused by the difference in internal and external surface area at outward corners where the insulation layer bends around the corner without decrease in thickness.