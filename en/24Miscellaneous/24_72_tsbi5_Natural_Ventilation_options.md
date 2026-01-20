<link rel="stylesheet" href="../style.css">

# tsbi5 Natural Ventilation options

<div style="text-align:center">

<em>The module to simulate natural ventilation using the multi-zone model (mzm) is for the time being in beta test and results obtained using this module must, as always, be looked upon with natural scepticism. 

Any feed-back to the module given at bsim-support@build.aau.dk is appreciated! </em>

</div>
 

The page is under construction! <img src="./assets/SIGN.gif" width=25>

<div id="gray_background">

<strong>Note:</strong> Standard values should <span id="red_text"> <strong>only</strong> </span> be changed with great care! When the "OK" button is pressed, the actual values are changed and will be used in the simulations until they are changed again.
</div>

The tab Natural Ventilation is reserved for future use in conjunction with multi zone natural ventilation simulations.

Reset

*   By pressing the Reset-button, data on the actual tab returns to those standard values that are coded into the program.  

<figure id="center_img">
<img src="./assets/stdvalues2.gif" alt="The tab Natural Ventilation under tsbi5 options.">
<figcaption>The tab Natural Ventilation under tsbi5 options.</figcaption>
</figure>


Geometry

*   *Max Ceiling Slope:* Maximum slope on internal ceiling in order to be able to used the model. (See theory on its way!)

*   *Max Ceiling Distance:* Maximum distance from upper edge of opening (Opening and WinDoor) to internal face of ceiling in order to be able to used the model. (See theory on its way!)

*   *Min Opening Fraction*: Give the minimum size of an opening in a surface compared to the area of the surface in order to ignore the surface when making *SuperFaces*. (See theory on its way!) Should hopefully disappear!!

*   *Min Inlet Velocity*: Minimum air velocity through openings in order to be able to used the model for night cooling.

Convective Heat Transfer Model

*   *ka value:* The [Ka value](https://help.bsim.dk/support/kb/articles/DmwAjy94/parametre-til-naturlig-ventilation) for openings ([Danvak Basic-book, chapter 7](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur)).

*   *Inlet Air Angle*: Spread angle of the air fume.

*   *combo-box* to come

*   *combo-box* to come

Solve Pressure Equation - describes the criteria for convergence in the multi zone model.

*   *MaxDif:* A solution is assumed to be found if the pressure difference between two iterations is less than *MaxDif.*

*   *Max Iterations:* A maximum of *Max Iterations* will be made.

Mzm Heat Balance - describes the criteria for convergence between the multi zone model and the usual thermal simulation.

*   *Additional opening reg.:*

*   *TempDif:* A solution is assumed to be found if the temperature difference between two iterations is less than *TempDif.*

*   *Max Iterations:* A maximum of *Max Iterations* will be made.