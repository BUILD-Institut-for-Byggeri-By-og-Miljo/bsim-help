<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Moisture
The tab Moisture contains information about the moisture technical properties of the building materials.

<div id="gray_background">

If a new material is created in a database containing information about moisture transport in materials the moisture transport data <u>must</u> be given, even if a moisture transport simulation is not to be performed. [See limitations](https://help.bsim.dk/support/kb/articles/rQV5b8m6/begransninger).

</div>

<br>

<figure id="center_img">
<img src="./assets/db-fugt.jpg" alt="Moisture properties for building materials.">
<figcaption>Moisture properties for building materials.</figcaption>
</figure>

On tab *Moisture* the moisture properties of a building material is given. In this tab a number of data are given, which is primarily intended for future use.

<div id="gray_background">

Lambda is the heat transfer coefficient for the material which is being used when the "Moisture Transport" option is turned ON at the Options tab of the simulations with tsbi5. See also "[Thermal](https://help.bsim.dk/support/kb/articles/y9q8b2QA/simdb---buildingmaterial-thermal)".

</div>

**Only the value of Lambda is used for the time being, together with tables defined under Absorption, Desorption and DeltaRh.**

*Absorption/Desorption*: If you click the Absorption (Desorption) button, a [table is opened](https://help.bsim.dk/support/kb/articles/y9gBGVQM/sorptiondesorption). Here you can input coupled values of relative humidity (-) and moisture content (kg/kg) for points on the absorption (desorption) curve for each material. The first point is always assumed to be (0, 0), and can thus be omitted. The values must be typed in with increasing values for the relative humidity.

*DeltaRH*: Clicking the *DeltaRH* button a table is opened. Here you can input value(s) for the material curve under hygroscopic conditions as coupled values of relative humidity (-) and moisture permeability (kg/m s Pa).

 

See also:

*   [Tab Material](https://help.bsim.dk/support/kb/articles/4966z49X/simdb---buildingmaterial-material)
*   [Tab Moisture](https://help.bsim.dk/support/kb/articles/wQXx4nQK/simdb---buildingmaterial-moisture)
*   [Tab Glazing](https://help.bsim.dk/support/kb/articles/7maw2j9E/simdb---buildingmaterial-glazing)
*   [Tab UserDefined](https://help.bsim.dk/support/kb/articles/xmerM5QV/simdb---buildingmaterial-userdefined)
*   [Tab Frame](https://help.bsim.dk/support/kb/articles/ZmNreEm2/simdb---buildingmaterial-frame)
*   [Tab Finish](https://help.bsim.dk/support/kb/articles/BWzdbgQE/simdb---buildingmaterial-finish)
*   [Constructing a model](https://help.bsim.dk/support/kb/articles/y9q8azQA/opbygning-af-model)
