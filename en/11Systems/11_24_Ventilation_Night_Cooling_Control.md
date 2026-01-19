<link rel="stylesheet" href="../style.css">

# Ventilation, *Night cooling control*
This type of control will often be combined with one of the other types. Its primary function will normally be to ventilate the current zone(s) outside the building's hours of use to cool the building mass down with a view to eliminating or substantially reducing the need for mechanical cooling (by means of a cooling coil).

<figure id="center_img">
<img src="./assets/ventilation-nightcoolctrl.gif" alt="Defining the control strategy for night cooling.">
<figcaption>Defining the control strategy for night cooling.</figcaption>
</figure>


*Part of nom. flow:* Indicates that the output of the system within the time definition attached to this control action has been reduced in relation to nominal output by the *Part of nom. flow* factor. Both situations in which the air output is increased and situations in which it is reduced in connection with night cooling are possible.

*Setp Top*: Specifies the temperature that the zone is to be cooled down to during night cooling. The temperature will normally be slightly lower that the desired temperature during the building's hours of use but should be chosen so that there will not normally be a need for heating when the building opens.

*Top - Te >*: Specifies the minimum difference between the current zone temperature and the outdoor temperature for night cooling to be in operation.

Top - Setp >: Specifies the minimum difference between the current zone temperature and the set point temperature for night cooling to be in operation. If the current zone temperature exceeds both the set point and the outdoor temperature by the specified values, the ventilation system will start up automatically with a view to bringing the temperature down to the desired set point value.

*Min Inlet Air: The Min Inlet Air* parameter sets a lower limit for the supply temperature. In this way the control function simulates a supply sensor which overrides the room sensor when the supply temperature drops below the set point for the minimum sensor. If there is sufficient capacity in the heat recovery unit and heating coil, and if they are active, the control function will keep the supply temperature at the minimum value at least.

*Air Hum:* Specifies the desired absolute moisture content of the supply air. This parameter is only significant if a humidifier has been defined in the system. Dehumidification will not therefore take place in this type of control.

*Sensor*: Opens a drop-down list box for selecting the location of the room sensor (thermal zone). Night cooling is controlled according to the temperature in the sensor zone.

*Construction*: Entry to drop-down list box for selection of a construction in the sensor zone inside which the sensor is located. The sensor is located in the middle of the material layer facing the sensor zone.

*   If the sensor is to be located 2 cm inside a 10 cm thick concrete wall, it is necessary to create the wall of two concrete layers, the first layer having a thickness of 4 cm.

*Active Components:* Specifies which components can be active during night cooling. The individual [components](https://bsim.outseta.com/support/kb/articles/OW4N5AQg/ventilation) are selected (on/off) by putting a tick-mark (<span id="green_text">v</span>) next to the components name or removing it. By putting the heating and cooling coils out of operation in connection with night cooling it is possible to ensure optimum functioning of this type of control, i.e. without unnecessary energy consumption for treating the ventilation air.

*   If there is no "<span id="green_text">v</span>" next to Fans, it means that no heat are transferred from the engines to the inlet air when the system controls according to this night cooling strategy. The engines do thus still run, forcing the air through the system.

See also:
*   [Moisture control](https://help.bsim.dk/support/kb/articles/E9LwjGQw/fugtregulering)
*   [Inlet control](https://help.bsim.dk/support/kb/articles/pWrnB2Wn/indblasningsstyring)
*   [Zone temperature control](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/ventilation---rumtemperaturregulering)
*   [VAV control](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering)   