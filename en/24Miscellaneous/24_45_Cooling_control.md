<link rel="stylesheet" href="../style.css">

# Cooling control

<figure id="center_img">
<img src="./assets/coolingctrl.gif" alt="Defining control for a cooling radiator.">
<figcaption>Defining control for a cooling radiator.</figcaption>
</figure>


*Factor* specifies that only a certain proportion of the calculated cooling output is available within the attached time definition, determined by multiplying the calculated value by *Factor.*

*Set Point* specifies the set point for the room thermostat if cooling is needed.

*Design Temp* specifies the outdoor temperature at which the cooling radiator achieves its maximum output, *Max Power*.

*Min Power* specifies the minimum power available at the temperature *Te Min* within the time definitions when the cooling radiator is active. Please note that the radiator is assumed to have a thermostatically controlled valve that controls the cooling power actually supplied on the basis of current requirements.

*Te Min* specifies the outdoor temperature at which the available cooling output achieves its minimum. The available cooling power is controlled linearly between *Te Min* and *Design Temp*, while outside this interval it is *Min Power* and *Max Power* respectively. The output is 0 outside the set time definitions.

*Sensor Zone* tells the program in which zone the sensor for controlling the cooling system is located. Selecting (*None*) is the same as selecting the zone itself, and the system can thus be coiped/moved from one zone to another without changes.

