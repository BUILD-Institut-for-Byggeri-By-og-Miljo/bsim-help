<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Finish
The *Finish* tab contains information on the material's finish properties.

Different data are being used when simulating the thermal indoor climate, the energy flows and the daylight conditions. Data for the color of the surface is though only used in daylight simulations and in export of building models to [*Radiance*](https://bsim.outseta.com/support/kb/articles/A93zY5Q0/eksport-af-data-til-radiance) for further analyses.

If no material is selected to represent the surface properties, [*SimLight* ](https://bsim.outseta.com/support/kb/articles/LmJvYAmP/dagslysberegninger-med-simlight)will use the following default values for the light-reflectance in the calculation of daylight conditions in the rooms:

*   Floors: 0,1
*   Walls: 0,4
*   Ceilings: 0,7
*   Glass: 0,92

The reflectance from the surrounding free surfaces is obtained from the [Site](https://bsim.outseta.com/support/kb/articles/dQG2Kom4/site-property) property, if defined. If not defined, 0.1 will be used as default value.

<figure id="center_img">
<img src="./assets/dbfinish.gif" alt="Information on the material's finish properties is found on the 'Finish tab'.">
<figcaption>Information on the material's finish properties is found on the "Finish tab.</figcaption>
</figure>

*   Emissivity: Is being used in the simulation of long-wave radiative heat exchange between surfaces.

*   SolarAbs.: Absorbstance of solar radiation is being used in the thermal simulation of solar heating distribution to the surfaces of the model.

*   LightRefl.: The Light-reflectance is used in simulation of daylight in *SimLight*.

If a color has been defined as a finish property for a face, it will be transferred when the model is exported to Radiance. If a color has not been defined for the finishes, they will be assigned random colors in such a way that they all have different colors. The color is selected by clicking the *Colorbutton*, which opens a color dialog box.

<figure id="center_img">
<img src="./assets/color.jpg" alt="Dialog box for selecting color as a finish property.">
<figcaption>Dialog box for selecting color as a finish property.</figcaption>
</figure>

See also:

*   [Tab Material](https://help.bsim.dk/support/kb/articles/4966z49X/simdb---buildingmaterial-material)
*   [Tab Thermal](https://help.bsim.dk/support/kb/articles/y9q8b2QA/simdb---buildingmaterial-thermal)
*   [Tab Moisture](https://help.bsim.dk/support/kb/articles/wQXx4nQK/simdb---buildingmaterial-moisture)
*   [Tab Environment](https://help.bsim.dk/support/kb/articles/nmDBzx9y/simdb---buildingmaterial-environment)
*   [Tab Glazing](https://help.bsim.dk/support/kb/articles/7maw2j9E/simdb---buildingmaterial-glazing)
*   [Tab UserDefined](https://help.bsim.dk/support/kb/articles/xmerM5QV/simdb---buildingmaterial-userdefined)
*   [Tab Frame](https://help.bsim.dk/support/kb/articles/ZmNreEm2/simdb---buildingmaterial-frame)