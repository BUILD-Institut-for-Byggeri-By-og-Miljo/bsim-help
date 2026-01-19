<link rel="stylesheet" href="../style.css">

# Systems, *Venting*

Venting can be used to define the function of all forms of natural ventilation, i.e. deliberate ventilation of the zone using valves, windows or other openings to the outside. The simplest form of natural ventilation is the opening of windows, and the model can simulate both a "fixed" air change, which only varies with the difference between the temperature indoors and out plus the wind speed, and an air change that is controlled to maintain a desired indoor temperature.

The model for venting expresses the maximum air change that can be achieved in the current outdoor weather conditions. Just as with infiltration, the calculation of air change contains three terms. A basic air change, a term that is dependent on the difference between indoor and outdoor temperature and a term that is dependent on the wind speed.

$$ n_{out,air} = n_0 + c_t \cdot (t_i - t_o)^{tp} + c_v \cdot v \tag{1} $$

|  | |
|------|-------------|
| *n₀* | Basic air change (h⁻¹) |
| *tᵢ* | Operative indoor temperature (°C) |
| *tᵤ* | Outdoor temperature (°C) |
| *tₚ* | Temperature power (*TempPower*) |
| *cₜ* | Constant that depends in particular on the size of the space, the openings, and the height difference between the openings |
| *cᵥ* | Constant that depends in particular on the imperviousness, geometry, and location of the building and the topography of the land |
| *v* | Wind speed (m/s) |

 

Venting control simulates windows or ventilation openings being opened if the temperature exceeds a user-defined set point. When there is a tendency for the set point to be exceeded, the natural ventilation is increased as much as necessary to maintain the desired temperature, but only up to a user-defined maximum air change.

Unlike with infiltration, venting is defined in such a way that the air flow leaving the thermal zone (to the outdoor air) is the same as that entering the thermal zone (from the outdoor air). Venting is therefore in (air) balance by definition and consequently will not influence the amount of infiltration or exfiltration, cf. section entitled [Infiltration](https://help.bsim.dk/support/kb/articles/Rm8JRZ94/infiltration).

<figure id="center_img">
<img src="./assets/Venting_old.gif" alt="Defining venting in a thermal zone.">
<figcaption>Defining venting in a thermal zone.</figcaption>
</figure>


The basic air change value (*Basic AirChange, n<sub>0</sub>*) will often specify the air change that can be achieved by fully opening the windows in weather conditions that are "normal" for the relevant time definition as defined in the schedule. In this case the constants in the above expression indicate how much the air change alters with the temperature difference and wind speed.

The control defined in the schedule determines whether venting is required and how much "the windows should be opened", i.e. what air change is needed to achieve the desired operative indoor temperature.

*TmpFactor (c<sub>t</sub>)* expresses how much the air change rises as the temperature difference between indoors and out increases. This field opens a dialog box, which can be used to analyze the significance of the size of the inlet and outlet openings together with the vertical distance between them. For small spaces the factor assumes small values, down to approx. 0.2, while for large spaces with opening areas of 1 m² and a height of 10 m the factor can be up to approx. 20.

Clicking the [*TmpFactor* ](https://help.bsim.dk/support/kb/articles/dQG2Gom4/udluftnings-temperaturfaktor)button opens a dialog box for dimensioning the opening areas to achieve a desired temperature factor. Please note that this dialog box primarily performs a help function, which can be used if a value for the factor is not entered directly in the venting dialog box.

*WindFactor* (c<sub>v</sub>) expresses the dependence of the air change on wind. The equation means that air change is assumed to be proportional to wind speed. For small buildings with small venting openings and a sheltered site it will be in the order of 0.1, while for large buildings on an exposed site it can be up to 0.4 - 0.6.

*Max AirChange* expresses the maximum air change permitted during ventilation. If the air change calculated using the equation goes above this value, it will be corrected to the maximum value.

*Max Wind* is only used in connection with the module (from BSim version 2002) for simulation of natural ventilation and expresses the maximum wind speed, below which natural ventilation may occour. If *Max Wind* is set to 0, natural ventilation can be active at any wind speed.

*Sensor Zone* indicates the thermal zone where the operative temperature will be used for controlling the venting in the actual thermal zone. This, for instance, could be the temperature of an office determining the venting in an atria.

*Natural Ventilation* (from BSim version 2002) The desired model for natural ventilation can be selected from the list given under *Natural Ventilation.* Just above the list, BSim suggest - from the given model geometry - the most appropriate natural ventilation model for the zone. One of the followgin can be selected:

| Mode | Description |
|------|-------------|
| **(Disabled)** | The original model used for venting in previous versions of BSim. |
| **(Automatic)** | BSim selects, from the zone geometry (see [overview](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation) with used/possible geometries), the model to use. |
| [Single Sided](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)<br>[Cross](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation) | See [overview](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)! |
| [Combined Two](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)<br>[Levels](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation) |  |
| [Combined](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation) | General model, see [overview](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)! |


The venting [*schedule*](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) defines connected sets of[ control](https://help.bsim.dk/support/kb/articles/OW4NDGQg/venting---udluftningskontrol) and time definition. In ordinary rooms where people are present venting will simulate windows being opened by the users when the indoor temperature becomes too hot, in which case venting will normally only be "active" during the building's hours of use. In large buildings with equipment for automatic venting when the set point for a temperature is exceeded, it must be assessed whether the achievable air change is dependent on the time of the day and year.

See also:
*   [Tab VentingCtrl](https://help.bsim.dk/support/kb/articles/OW4NDGQg/venting---udluftningskontrol)   
[](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)
*   [Tab Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)   
[](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time)
*   [Tab Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time)
