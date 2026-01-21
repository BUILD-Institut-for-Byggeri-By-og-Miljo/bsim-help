<link rel="stylesheet" href="../style.css">

# Venting Control
It is assumed that, when the temperature in the offices exceeds a certain value, the staff will open the windows to vent the zone. In the case of the data shown in the following dialog box it is assumed that, when the indoor temperature exceeds the set point of 24 °C, the zone will be vented just as much as is necessary to keep the temperature down to the set point. It is not possible, however, to achieve an air change greater than that calculated on the basis of the data in the dialog box multiplied by the value of *Factor.*

<figure id="center_img">
<img src="./assets/venting-ctrl.gif" alt="Venting is controlled by the operative temperature in the thermal zone as a proportion of the basic air change.">
<figcaption>Venting is controlled by the operative temperature in the thermal zone as a proportion of the basic air change.</figcaption>
</figure>

*Set Point* specifies the limit for the indoor temperature, above which venting is expected to be activated. There will often be several systems that can be controlled to keep the indoor temperature to the desired value or within the desired interval. In this case the temperature set points in the control functions for these systems determine the order in which the systems are activated.

*SetP Co2* is the set- point for CO<sub>2</sub> concentration (ppm) in the indoor air. If "0" (zero) is given the natural ventilation will not be controlled according to the calculated CO<sub>2</sub> level. Above the set point venting will come into action as much as needed to fulfil the set point. If SetP Co2 is given (> 0) the natural ventilation is first controlled to obtain the desired CO<sub>2</sub> concentration, and then to obtain the temperature set point.

**Note:** If the set-point for the CO<sub>2</sub> control is too close $ \left( \frac{\text{CO}_2 \text{SetP} - \text{CO}_2 \text{Outside}}{\text{CO}_2 \text{Outside}} \leq 0{,}05 \right) $ to the estimated fixed value of the CO<sub>2</sub> content in the outdoor air, the desired indoor set-point will never be reached as the ventilation rate needs to rise to infinity.

To reach the desired set-point for the CO<sub>2</sub> content in the indoor air, the flow of outdoor air is controlled by the [basic air change and the wind part](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting) in the equation.

Entering a value for *Factor* of less than 1.0 indicates that only an air change - calculated on the basis of the equation using data from the venting dialog box - multiplied by *Factor* can be achieved within the relevant time definition. In the case of natural ventilation, this equals a reduction of the opening areas with *Factor.*