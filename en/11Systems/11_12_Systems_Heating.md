<link rel="stylesheet" href="../style.css">

# Systems, *Heating*

The model simulates a thermostatically controlled radiator or convector. The primary function of the model is to determine how much power the radiator has to release to raise the temperature to the desired set-point temperature defined in the control action. The thermostat's sensor is affected both by the indoor air temperature and the surface temperatures.

The radiator power is regarded as being controlled on the basis of outdoor temperature, linearly from maximum power (*MaxPower*) at the design outdoor temperature (*Design Temp*) to the minimum power (*Min Power*) available when the outdoor temperature is *Te Min* or above, cf. control curve on the HeatCoolCtrl tab.

<figure id="center_img">
<img src="./assets/heating.gif" alt="Defining a heating system.">
<figcaption>Defining a heating system.</figcaption>
</figure>


*Unit:* By placing a "tick" mark next to *Unit,* it is possible to change from inputting the absolute amount of installed power in the thermal zone to amount of installed power per m² floor area. This is especially useful if the same heating system is to be used (copied) in more thermal zones with varying heat loss.

*Max Power* is the maximum heating power at the *Design Temp*. Maximum power will be available in the radiator at all outdoor temperatures below the design outdoor temperature, e.g. corresponding to the highest supply temperature in the radiator system. At higher outdoor temperatures it is assumed that the supply temperature is reduced, which is simulated by a linearly decreasing radiator output.  
     In connection with [floor heating](https://bsim.outseta.com/support/kb/articles/L9nr6e9Z/gulvvarmeregulering) (BSim) it is possible to give a negative value of *Max Power* and thus simulate cooling inside the constructions.

*Fixed Part* is the proportion of the available power that is not controllable (between 0 and 1). It can, for example, specify a piping loss from the system. Please note that this proportion is fixed, i.e. a non-controllable heat emission that represents a constant percentage of the available power.

*Part to Air* specifies how large a part of the heat emission from the radiator is supplied to the room air by convection. The remaining heat emission is by radiation to the surfaces of the zone. The proportion supplied to the air is dependent on the current type of radiator/convector, but the number should not normally be set lower than 0.5. For a normal radiator positioned on an outside wall (back) under a window a value of between 0.5 and 0.7 can be assumed.

*Central Heat Pump* indicates that the heat in the heating system comes from a central heat pump. The heat pump can not be activated as a source for the heating system until the external program [PackCalc](https://bsim.outseta.com/support/kb/articles/Nmdd3wm0/packcalc) have been installed. PackCalc has been developed by IPU Teknology development at Danish Technical University (DTU) and can be downloaded from their web site.

*Heat Pump data:* Opens a dialog to give input parametres for the heat pump.

[*Schedule*](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) defines how the radiator is controlled at different times of the day, week and year. For systems with a night-time or weekend reduction in the indoor temperature it will be necessary to specify at least two different schedules corresponding to control on the basis of different temperature set points.

The control of a heating system is defined at the [HeatCoolCtrl](https://help.bsim.dk/support/kb/articles/y9gBMjQM/opvarmning---varmeregulering) tab or at the [FloorHeatingCtrl](https://help.bsim.dk/support/kb/articles/L9nr6e9Z/gulvvarmeregulering) tab.

See also:
*   Tab [HeatCoolCtrl](https://help.bsim.dk/support/kb/articles/y9gBMjQM/opvarmning---varmeregulering)
*   Tab [FloorHeatCtrl](https://help.bsim.dk/support/kb/articles/L9nr6e9Z/gulvvarmeregulering)
*   Tab [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---tidsplan)
*   Tab [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)

