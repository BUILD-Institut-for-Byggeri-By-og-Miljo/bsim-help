<link rel="stylesheet" href="../style.css">

# Fan coil control

Using the *fan coil control* it is possible to control a local cooling system in BSim, taking into account that the cooling power is dependant on the temperature difference between the zone temperature and the cooling surface (the cooling fluid). This cooling control can be used when modeling *fan coils*.

The available cooling power in the thermal zone is calculated as:

$$  
P = \frac{(\Theta_i - \Theta_m) \cdot P_{\text{dim}}}{\Theta_{\text{dim}} - \Theta_m}  \tag{1}
$$

where:

*   *Θ<sub>i </sub>* is temperature of the thermal zone indoor air.
*   *Θ<sub>m</sub>* is the average temperature of the cooling fluid.
*   *P<sub>dim</sub>* is the dimensioning power of the local cooling system.
*   *Θ<sub>dim </sub>* is the dimensioning zone temperature for the local cooling system (the temperature over which the system reaches it's dimensioning cooling power).

<figure id="center_img">
<img src="./assets/fan_coil_ctrl.gif" alt="Dialog (Cooling | FanCoilCtrl) control of cooling systems with a fan coil unit.">
<figcaption>Dialog (Cooling | FanCoilCtrl) control of cooling systems with a fan coil unit.</figcaption>
</figure>


*Factor* indicates that within the attached time plan only a certain part of the calculated amount of cooling power is available. The available part is the calculated cooling power times *Factor*.

*Set Point* indicates the set point for the room thermostat in the case of cooling need.

*Design Temp* gives the zone temperature at which the cooling unit reaches its maximum power, [*Max Power*](https://help.bsim.dk/support/kb/articles/y9gBNGQM/cooling-system).

*T Cool* gives the average temperature of the cooling fluid.

The graph shows the available cooling power as a function of the zone temperature at the given input data for the actual control strategy. The output from the Fan Coil is thus controlled according to the slope of the line between the points Set Point and Design Temp - if the awailable power is insufficient to maintan the room temperature at the desired Set Point.

The calculated power when using FanCoilCtrl in the results log (qCooling) can in some cases with very varying thermal loads in the zone (including solar gains) sow a higher value than the one that can be calculated from the indoor temperature in the results log and the given input. This is caused by the fact that the indoor temperature in the results log is the one calculated at the end of the last time-step in the hour. The indoor temperature can be higher in the intermediate time-steps of the hour. qCooling is calculated for every time-step of the hour.