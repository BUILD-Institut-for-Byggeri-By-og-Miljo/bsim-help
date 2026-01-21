<link rel="stylesheet" href="../style.css">

# Infiltration, System
Infiltration is unintended or uncontrolled air penetration through leaks in the building envelope. The calculation of the infiltration model is made up of three terms: a basic air change, a term that is dependent on the difference between the indoor and outdoor temperatures, and a term that is dependent on the wind speed:

$$ n_{out,air} = n_0 + c_t \cdot (t_i - t_o)^{tp} + c_v \cdot v \tag{1} $$

| Symbol         | Description                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------|
| *n₀*           | is the basic air change(h⁻¹)                                                                                   |
| *tᵢ*           | is the operative indoor temperature (°C)                                                                        |
| *tᵤ*           | is the outdoor temperature  (°C)                                                                                     |
| *tp*           | is the temperature power (TemPower)                                                                                 |
| *cₜ*           | is a constant that depends in particular on the size of the space and openings and the height difference between the openings |
| *cᵥ*           | is a constant that depends in particular on the imperviousness, geometry and location of the building and the topography of the land
| *v*            | is the wind speed (m/s)   
 

**Definition of infiltration**

Infiltration is always calculated as an outdoor air flow into the thermal zone. Exfiltration, i.e. air escaping from the thermal zone through leaks, cannot be specified directly. The calculation model checks that there is a balance between the air flows entering and exiting the thermal zone for each time step in the simulation. Apart from infiltration, the components can come from venting (opening windows), mechanical ventilation and mixing (air transfer between thermal zones or spaces). If there is an imbalance, an air deficit in a thermal zone will be equalized by infiltration, whereas an air surplus will be equalized by exfiltration. This means, for example, that air change owing to infiltration may well be greater than determined by the parameter values in the above equation. The air balance is described in more detail in [the mathematical basis](https://help.bsim.dk/support/kb/articles/BWzd4NQE/det-matematiske-grundlag).


<figure id="center_img">
<img src="./assets/infiltration.gif" alt="Dialog box for defining infiltration of outdoor air in a thermal zone.">
<figcaption>Dialog box for defining infiltration of outdoor air in a thermal zone.</figcaption>
</figure>


*Basic Air Change (n<sub>0</sub> )* is the value of the basic air change and will normally specify a mean level for the air change. If large variations in the air change are expected, e.g. at different times of year, the air change should be entered as the top level for the variations. In the schedule variations over time can be specified by means of different day profiles for different time definitions.

*TempFactor (c<sub>t</sub> )* indicates how much the air change increases as the difference in temperature between indoors and out increases. The extent to which the air change fluctuates with the temperature difference can vary widely, and this component is normally of greatest importance in tall, "leaky" buildings, e.g. glass buildings. The size of the temperature factor is particularly dependent on the position and orientation of the leaks in relation to each other, with leaks in opposing facades and at different heights giving the largest factor. For small, impervious spaces or buildings the factor is around 0.1, whereas it can be up to 5-7 for tall, leaky buildings.

*TemPower (t<sub>p</sub> )* is a power of the temperature difference and is normally 0.4 - 0.7.

*WindFactor (c<sub>v</sub> )* specifies the dependence of the air change on wind. The equation assumes that the air change is proportional to the wind speed. In the case of small, impervious buildings in a sheltered location the factor will be around 0.05 - 0.1, whereas for large, exposed buildings it can be up to 0.4.

At the right of the input fields, under the buttons two information fields shows the infiltration for a wind speed of 4 m/s and a temperature difference between in and out of 4 respectively 10 °C.

[The schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) defines connected sets of control and time definition. Several schedules can be specified, making it possible to define different day variations at different times of the year. It can normally be assumed that the air change from infiltration is greatest when the building is in use, i.e. at times when people are in the building, external doors are being opened and closed and internal doors are open. Infiltration control is of the [day profile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile) type.

Please note that, when several schedules are defined, the software will run through them in the simulation in the order in which they appear in the dialog box, so that the first time definition containing the current simulation hour will be active.

See also:
*   [Tab Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)
*   [Tab DayProfile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile)   
[](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)
*   [Tab Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)