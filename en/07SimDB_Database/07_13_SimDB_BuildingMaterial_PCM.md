<link rel="stylesheet" href="../style.css">

# SimDb - BuildingMaterial, PCM

<div style="text-align:center">

*Material properties for phase changing materials (PCM) is available from database BSim2008.mdb.*

*If tables with information about PCM is unavailable in the selected database, the tab PCM is not shown in the dialog Edit Material.*

</div>
 

The PCM tab holds information about a materials possible phase change properties. To activate the phase change properties for a material, information about "lambda" must be given. At the top of the PCM tab there is an indication indicating if "lambda" has been defined. In this case the values given in the table is being used in the simulations as a replacement of the normal conductivity given at [tab Thermal](https://help.bsim.dk/support/kb/articles/y9q8b2QA/simdb---buildingmaterial-thermal). Doing this, the conductivity can be defined as a function of the material temperature.

<figure id="center_img">
<img src="./assets/pcm.gif" alt="PCM-properties for a building material.">
<figcaption>PCM-properties for a building material.</figcaption>
</figure>

At the PCM-tab both the melting and the solidification curve is shown (red curve is the melting curve and the blue curve is the solidification curve). The curve expresses the enthalpy (J/kg) of the material as a function of the temperature (°C). The enthalpy-curve replaces the normal heat capacity given at the [Thermal tab](https://help.bsim.dk/support/kb/articles/y9q8b2QA/simdb---buildingmaterial-thermal).

 

Melting/Solidifying: Clicking the Melting or Solidifying buttons will open a dialog with a table for entering coupled values of enthalpy (J/kg) and temperature (°C) for points at the melting and solidification curve respectively. Values are entered as pairs with increasing temperature from top to bottom.

<figure id="center_img">
<img src="./assets/melting_solidification.gif" alt="">
<figcaption></figcaption>
</figure>

Lambda: Clicking the lambda button will open a dialog with a table to enter value(s) for the conductivity (W/mK) curve of the material as a function of the material temperature (°C). If only one value is entered, the conductivity will be considered constant and thus independent of the temperature. Values are entered in sequence with increasing temperature.

<figure id="center_img">
<img src="./assets/lambda.gif" alt="">
<figcaption></figcaption>
</figure>

The phase of a material is determined at any time from three possible phases:

1.  on the melting curve,

2.  on the solidification curve, or

3.  between the melting and the solidification curves.

Re. 1: The material is in a melting process and continues this as long as the temperature is rising. *The phase follows the melting curve*.

Re. 2: The material is in a solidification process and continues this as long as the temperature is dropping. *The phase follows the the solidification curve*.

Re. 3: The material is in a transition phase between melting and solidification. A horizontal line will be followed between the two curves until either the melting or the solidification curve has been reached. For conditions between the two curves, the total heat capacity for the material is determined by linear interpolation between the two points on the melting and solidification curves that intersects the horizontal line. The heat capacity is defined by the slope of the curves at the intersection.
