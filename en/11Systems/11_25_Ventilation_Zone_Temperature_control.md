<link rel="stylesheet" href="../style.css">

# Ventilation, *Zone Temp Control*
In this type of control a room sensor controls the system components in series (via a central control unit). The control function includes a set point for heating and a set point for cooling with a "dead zone" in between. This makes it possible to achieve economical control in which the system does not oscillate between heating and cooling. The control function also includes a supply sensor with set points for minimum and maximum supply temperatures. If these set points are exceeded, the supply sensor takes over control to keep the supply temperature within the desired interval.

<figure id="center_img">
<img src="./assets/ventilation-zonetempctrl.gif" alt="Defining the control strategy for zone temperature control.">
<figcaption>Defining the control strategy for zone temperature control.</figcaption>
</figure>


*Part of nom. flow:* Indicates that the output of the system within the time definition attached to this control action has been reduced in relation to nominal output by the *Part of nom. flow* factor.

*Min Air Temp.* and *Max Air Temp.*: With this type of control the software primarily tries to achieve a room temperature within the interval defined by the set points for heating and cooling. The *Min Air Temp* and *Max Air Temp* parameters set lower and upper limits for the supply temperature, however. In this way the control function simulates a supply sensor, which overrides the room sensor when the supply temperature goes outside the defined interval. The supply temperature will therefore remain in the interval as far as possible, i.e. if there is sufficient capacity in the system components.

*Heating Set Pnt:* Specifies the set point for the room sensor during heating. If heating is required, the control function will increase heat recovery and then the output of the heating coil as much as necessary (up to maximum output) to keep the room temperature at the selected heating set point.

*Cooling Set Pnt:* Specifies the set point for the room temperature during cooling. If cooling is required, the control function will increase cooling recovery (if it has been defined as greater than 0) and then the output of the cooling coil as much as necessary (up to maximum output) to keep the room temperature at the selected set point. The cooling set point should always be higher than the heating set point to prevent the system from oscillating between heating and cooling.

*Air Hum:* Specifies the desired absolute moisture content of the supply air. This parameter is only significant if a humidifier has been defined in the system. Dehumidification will not therefore take place in this type of control.

*Master Zone:* Defines that the room temperature in the actual zone is being controlled according to the conditions in a other thermal zone. The inlet temperature in the actual zone is determined by the heating need in the Master Zone.


See also:
*   [Moisture control](https://help.bsim.dk/support/kb/articles/E9LwjGQw/fugtregulering)
*   [Inlet control](https://help.bsim.dk/support/kb/articles/pWrnB2Wn/indblasningsstyring)
*   [VAV control](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering)
*   [Night cooling control](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/ventilation---natkoling-ventilation)