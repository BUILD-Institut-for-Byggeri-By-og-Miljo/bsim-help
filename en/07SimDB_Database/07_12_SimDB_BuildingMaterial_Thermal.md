<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Thermal
The *Thermal* tab contains information on the thermal properties of the material and is displayed for all materials apart from those located in [SfB](https://bsim.outseta.com/support/kb/articles/DQ2xwBWV/sfb-i-bsim) groups a, b, c and 0, 1, ... .

The thermal properties are thermal capacity C<sub>p</sub> [J/kg K] and thermal conductivity l [W/m K]. This information is only used if the material forms part of a building construction (not a *WinDoor*) used in a simulation with *tsbi5* or *Bv98*.

<div id="gray_background">

If "Moisture Transport" is turned OFF at the "Options" tab under simulations with tsbi5, the lambda-value given on this tab is being used. See also "[Moisture](https://help.bsim.dk/support/kb/articles/wQXx4nQK/simdb---buildingmaterial-moisture)".

If a new material is created in a database containing information about moisture transport in materials the moisture transport data <span style="text-decoration: underline;">must</span> be given, even if a moisture transport simulation is not to be performed. [See limitations](https://help.bsim.dk/support/kb/articles/rQV5b8m6/begransninger).

</div>


<figure id="center_img">
<img src="./assets/dbthermal.gif" alt="Thermal data (over and above density) for the material.">
<figcaption>Thermal data (over and above density) for the material.</figcaption>
</figure>

See also:

*   [Tab Material](https://help.bsim.dk/support/kb/articles/4966z49X/simdb---buildingmaterial-material)
*   [Tab Moisture](https://help.bsim.dk/support/kb/articles/wQXx4nQK/simdb---buildingmaterial-moisture)
*   [Tab Environment](https://help.bsim.dk/support/kb/articles/nmDBzx9y/simdb---buildingmaterial-environment)
*   [Tab Glazing](https://help.bsim.dk/support/kb/articles/7maw2j9E/simdb---buildingmaterial-glazing)
*   [Tab UserDefined](https://help.bsim.dk/support/kb/articles/xmerM5QV/simdb---buildingmaterial-userdefined)
*   [Tab Frame](https://help.bsim.dk/support/kb/articles/ZmNreEm2/simdb---buildingmaterial-frame)
*   [Tab Finish](https://help.bsim.dk/support/kb/articles/BWzdbgQE/simdb---buildingmaterial-finish)
