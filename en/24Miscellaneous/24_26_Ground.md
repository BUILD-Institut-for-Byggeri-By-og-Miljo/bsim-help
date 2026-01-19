<link rel="stylesheet" href="../style.css">

# Ground
*The dialog is opened from the Site dialog.*

It is possible to define the maximum temperature and relative moisture content of the ground together with the date when they occur. It is also possible to specify the lowest ground temperature with the relevant relative moisture content. A sinusoidal variation of ground temperature and relative humidity during the year is applied on the basis of these data.

<figure id="center_img">
<img src="./assets/ground.gif" alt="Dialog box for information on the ground under the building.">
<figcaption>Dialog box for information on the ground under the building.</figcaption>
</figure>


Annual variation of the temperature in the ground is calculated as daily average temperatures from:

$$ t_d = t_0 + \Delta t \cdot \left(\cos\left(\left(dn - dn_{max}\right) \cdot \left(\frac{2 \pi}{365}\right)\right)\right) \tag{1} $$

where
*   **t0** is the annual average space temperature in °C,
*   **Δt** is the half difference between maximum and minimum space temperature in °C,
*   **dn** is the actual day number,
*   **dn<sub>max  </sub>**is the number of the day with the maximum space temperature (i.e. 10. August = day no. 222).


<figure id="center_img">
<img src="./assets/yswing.jpg" alt="Annual variation of the temperature in a space or the ground. Here the annual average temperature is 13 °C. the variation is 6 °C (Maximum - Minimum) with a maximum on 12. August (day number 225).">
<figcaption>Annual variation of the temperature in a space or the ground. Here the annual average temperature is 13 °C. the variation is 6 °C (Maximum - Minimum) with a maximum on 12. August (day number 225).</figcaption>
</figure>


A corresponding variation can be forced on the moisture content in the ground or rather the air coming from a defined virtual ground zone.

You can create as many "Ground" as you like, and use them as virtual zones facing face sides where you do not wish a detailed simulation of the thermal conditions at both face sides.

According to the [Danish norm DS418, amendment 4](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur), the dimensioning ground temperature under an unheated building and in deep layers of soil around a heated building be defined to 10 °C (In Denmark).

Slab-on-ground constructions must thus be created in a way that a part of the ground below the building is part of the construction. The transmission coefficient (U-value) for a slab-on-ground or a basement wall directly towards the ground can be determined from the formula:

$$ U' = \frac{1}{R_{si} + \sum R_m + R_g} $$

where

*   ***R<sub>si</sub>*** is the surface resistance at the interior face of the construction in the unit m²K/W. This value is not shown when showing the construction in [SimDB](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb-buildingelement).
*   ***R<sub>g</sub>*** is the thermal resistance of the soil in the unit m²K/W. A slab-on-ground construction construction can thus be created by adding an extra material layer (soil) to the exterior side of the construction.
*   ***R<sub>m</sub>*** is the thermal resistance of the material layers in the construction in the unit m²K/W. This value is shown as information in [SimDB](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb-buildingelement).

