<link rel="stylesheet" href="../style.css">

# Ventilation, *VAV Control*
VAV control (Variable Air Volume) is another form of control based on a room sensor. It is primarily used in rooms with a cooling requirement for a large proportion of their operating hours. It works by the room sensor controlling the heating coil, recovery unit and volume flow rate (e.g. by means of damper motor) in series as the heating requirement falls and the cooling requirement rises with a view to achieving the desired room temperature. If the cooling requirement continues to rise, the cooling coil will be switched on when the cooling set point is exceeded. As with zone temperature control, a dead zone should be inserted between the set points. When the supply temperature drops below the minimum set point for the supply sensor, the latter will override the room temperature to prevent the supply temperature from going below its minimum value.

<figure id="center_img">
<img src="./assets/ventilation-vavctrl.gif" alt="Defining the control strategy for VAV control.">
<figcaption>Defining the control strategy for VAV control.</figcaption>
</figure>


*VAV, max factor:* The volume flow rates (nominal) specified in the "fans" data can be increased by the factor specified in the *VAV max factor* (≥ 1) parameter. In practice the air supply fittings will determine how large a temperature deficit and how large a variation in air flow can be permitted. The factor will normally be 1.5 - 3.0.

*Min Inlet Temp:* This type of control tries to achieve the desired room temperature by serial control of the heating coil, recovery unit, air flow and cooling coil. The *Min Inlet Temp* sets a lower limit for the supply temperature, however. In this way the control function simulates a supply sensor which overrides the room sensor when the supply temperature drops below the minimum set point for the supply sensor.

*Max Inlet Temp*: This type of control tries to achieve the desired room temperature by serial control of the heating coil, recovery unit, air flow and cooling coil. The *Max Inlet Temp* sets a upper limit for the supply temperature, however. In this way the control function simulates a supply sensor which overrides the room sensor when the supply temperature increases above the maximum set point for the supply air sensor.

*Setp Indoor Air*: The set point for the room sensor during heat recovery and heating. If heating is required, the system supplies the nominal (minimum) air flow and, when controlling the recovery unit and heating coil, tries to comply with both the minimum supply temperature and the heating set point.

*Setp Cooling:* The set point for the room sensor during air control and cooling. If cooling is required, the air flow is increased gradually to keep to the set point. If this is insufficient, the cooling coil is gradually turned on until either the maximum cooling output is reached or the supply temperature drops below the minimum value. The cooling set point should always be higher (2-4 K) than the heating set point to prevent the system from oscillating between heating and air control/cooling.

*Setp. CO2*: Gives the set-point for the VAV control to obtain a desired CO<sub>2</sub> content in the indoor air. Control to obtain a certain CO<sub>2</sub> level has priority compared to the indoor temperature, meaning that first the air flow is being increased to obtain the desired CO<sub>2</sub> level and secondly to obtain the desired indoor temperature. If control of the air flow according to the CO<sub>2</sub> level is not desired, 0 shall be given as input parameter for *Setp. CO2.*   
The CO<sub>2</sub> content of the outdoor air is given as information on the [Site](https://bsim.outseta.com/support/kb/articles/dQG2Kom4/site-property) of the model.

*Air Hum:* Specifies the desired absolute moisture content in the supply air. This parameter is only significant if a humidifier has been defined in the system. Dehumidification will not therefore take place in this type of control.
 

See also:
*   [Moisture control](https://help.bsim.dk/support/kb/articles/E9LwjGQw/fugtregulering)
*   [Inlet control](https://help.bsim.dk/support/kb/articles/pWrnB2Wn/indblasningsstyring)
*   [Zone temperature control](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/rumtemperaturregulering)
*   [Night cooling control](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/natkoling-ventilation)

