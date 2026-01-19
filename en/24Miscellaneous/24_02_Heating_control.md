<link rel="stylesheet" href="../style.css">

# Heating control
The control curve (see dialog box with *HeatCoolCtrl*) is defined as a continuous, disjointed line consisting of three straight parts. The curve connects two points:

P1 = (Max Power , Design Temp) and P2 = (Min Power , Te Min)

The available power is equal to the maximum power (*Max Power*) at outdoor temperatures lower than the design outdoor temperature (*Design Temp*) and equal to the minimum power (*Min Power*) at outdoor temperatures higher than Te Min. At outdoor temperatures in between the available power varies linearly in accordance with the following equation:

$$ P_{heating} = P_{min} + (P_{max} - P_{min}) \cdot \frac{t_0 - t_{min}}{t_{design - t_{min}}} \; \text{when} \; t_{design} \leq t_0 \leq t_{min} $$

<figure id="center_img">
<img src="./assets/heatingctrl.gif" alt="Defining control for a radiator. The red curve shows the available power for space heating according to the given input in the dialog. The blue curve shows the un-controllable part of the hetaing power (given at the 'Heating' tab). The curves are updated when focus changes from one input field to another.">
<figcaption>Defining control for a radiator. The red curve shows the available power for space heating according to the given input in the dialog. The blue curve shows the un-controllable part of the hetaing power (given at the "Heating" tab). The curves are updated when focus changes from one input field to another.</figcaption>
</figure>

*Factor* specifies that only some of the calculated power is available within the schedules attached to the control action. The factor can also be used when specifying simple control systems (e.g. manual shunt valve) where the heating power is controlled according to the time of year. The default value for Factor is 1.0.

*Set Point* specifies the setting of the room thermostat. The radiator is controlled on the basis of operative temperature of the selected Sensor Zone.

*Design Temp* specifies the design outdoor temperature for the radiator.

*Min Power* specifies the minimum available power in the system before the heat supply is regarded as switched off. *Min Power* is connected with *Te Min*.

*Te Min* specifies the outdoor temperature at which the available power in the radiator reaches its minimum value, Min Power. The heat output is set to 0 outside the time definitions in the [schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule).

*Sensor Zone* indicates in which thermal zone the sensor of the heating system is located. This is especially important if one wish to simulated a floor heating system, where the floor heating zone is a separate thermal zone with heat emmitance controlled by the temperature in an other thermal zone. If *(None)* is shown in the input field, it means that the sensor is located in the thermal zone where the control is used. The same heating system can thus be used in different thermal zones, without trying to reach the same thermal zone temperature in all thermal zones using the same heating control. **NB:** The use of a sensor located in an other thermal zone is not yet fully validated - so results obtained with this function should be looked upon with great care.