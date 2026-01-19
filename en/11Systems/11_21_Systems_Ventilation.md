<link rel="stylesheet" href="../style.css">

# Systems, *Ventilation*
A ventilation system is described by means of the individual components and a schedule.

The basic structure of a ventilation system is illustrated in the figure. The individual components are described by means of simple models that take account of the physical properties with the greatest importance in terms of energy and indoor climate.

<figure id="center_img">
<img src="./assets/ventsys.gif" alt="Basic features of the ventilation system model in BSim ">
<figcaption>Basic features of the ventilation system model in BSim.</figcaption>
</figure>


In general it should be noted that the models do not take account of differences in the density of air, which is calculated at 15°C on the basis of the site's height above sea level. The individual components in the system are defined using the fields in the ventilation system dialog box.


<figure id="center_img">
<img src="./assets/ventilation.gif" alt="The ventilation system is defined by means of its individual components.">
<figcaption>The ventilation system is defined by means of its individual components.</figcaption>
</figure>


#### **Fans:**

The Fans dialog box covers both supply and exhaust fans in the system. The total power requirement at nominal air output is calculated on the basis of the pressure rise and efficiency for each fan. In the case of reduced or increased output power consumption is calculated in proportion to the air flow.

*Input:* The nominal air flow for the supply fan. Variable flows can be specified for different times of the day and year under control in the schedule.

*Output:* The nominal flow for the exhaust fan. It is possible to specify different supply and exhaust air flows, with any imbalance in the total air flows in and out of the zone being equalised by infiltration or exfiltration. It is assumed that the system returns the exhaust air from the zone back to the system.

*Pressure Rise:* The total pressure rise across the fan (in or out), corresponding to the loss right through the unit and its duct system.

*Total Eff(iciency):* The total efficiency of the fan (in or out). The efficiency is partly dependent on the size of the fan (or the power consumed). It is calculated as the product of the efficiency of the motor, power transmission (belt efficiency) and fan. The total efficiency is often in the regions of:

*   0.4 - 0.5 for small fans, up to 1 kW

*   0.6 - 0.85 for medium-sized fans, up to 10 kW

*   0.8 - 0.9 for large fans, up to 100 kW output

The pressure rise and efficiency are used to calculate the power requirement per hour and energy consumption for operation of the system.

*Part To Air:* The proportion of the power consumption of the supply fan that is transferred to the ventilation air. The power varies with the air output, and the transferred power is converted into a temperature increase in the air.

 

#### **Recovery Unit:**

Based on hourly values for the air flows it is possible to simulate heat and moisture transfer from the exhaust air to the supply air. The recovery unit (including a return air arrangement) is specified by means of the efficiency of heat, cold and moisture recovery. It is possible to specify a different efficiency for each of the three types of recovery, though the cold and moisture recovery level cannot be greater than the maximum heat recovery level. If different efficiency levels are specified, the ratio between them is assumed to be constant if the air flows are adjusted. The model is therefore able to simulate the majority of recovery systems that occur, but assumes that recovery takes place with (optimum) modulation as required within the specified maximum and minimum recovery levels.

*Max Heat Rec:* Specifies the maximum temperature efficiency that can be achieved by heat transfer. The thermal efficiency is defined in the usual way as:

$$ \eta = \frac{t_{i2} - t_{i1}}{t_{u1} - t_{u2}} \tag{1} $$

t<sub>i1</sub> and t<sub>i2</sub> are the temperatures of the supply air before and after the recovery unit.  
t<sub>u1</sub> and t<sub>u2</sub> are the temperatures of the exhaust air before and after the recovery unit.

This definition does not take account of differences in volume or mass flow rates. If there is a difference in the supply and exhaust air flows, a correction has to be made in both the temperature and moisture recovery levels. The recovery levels must be calculated for the supply air, i.e. as the ratio between the transfer of heat or moisture and the theoretical maximum transfer achievable.

*Min Heat Rec:* Specifies the minimum efficiency for heat recovery, which is often equal to 0. If, however, the recovery component is not equipped with a control system, e.g. control of a bypass damper in a plate heat exchanger, there may be periods in which recovery exceeds what is actually required.

If the maximum and minimum efficiency levels are different, there is assumed to be fully modulated control as required between the recovery levels.

*Max* *Cool Rec:* is the maximum "cooling efficiency" of the recovery unit. In this context the term cold recovery should be perceived as reverse heat recover, i.e. where the intake air (frequently the outdoor air) is cooled by the exhaust air. This would typically be desirable in the case of ventilation of rooms or buildings where the indoor temperature is to be kept at a level well below the outdoor temperature, i.e. usually in buildings with mechanical cooling or night cooling, or buildings in a hot climate.

The calculation model assumes that recovery takes place with full (optimum) modulation as required, based on a control strategy that ensures that cold recovery only happens if and when it is "worthwhile", i.e. when the operative temperature in the thermal zone is at least 2.0 K lower than the outdoor temperature.

*Moisture Rec:* Maximum moisture efficiency for the recovery unit. If different recovery levels are specified, the ratio between them is assumed to be constant during control.

 

#### **Heating Coil:**

The ventilation system is assumed to have no more than one heating coil. This means that the description and control of systems that in practice have both a preheating coil and a reheating coil are approximate. Please note that the software calculates the temperature increase through the fan and makes a correction for it by determining the necessary output in the heating coil.

*Max Power:* The maximum power that can be given off by the ventilation system's heating coil. The heating requirement for the ventilation air by the heating coil is calculated on the basis of the selected control strategy and the selected temperature set points. Optimum control functioning is assumed, i.e. full modulation of heat emission within the current time step.

*Heat Pump:* The heat pump can not be activated as a source for the ventilation system until the external program [PackCalc](https://help.bsim.dk/support/kb/articles/j9b8ZOmn/packcalc-koling) have been installed. PackCalc has been developed by IPU Teknology development at Danish Technical University (DTU) and can be downloaded from their web site.

 

#### **Cooling Coil:** 

The cooling coil is assumed to have a constant temperature that is independent of the cooling requirement and the cooling power given off. The calculation takes full account of precipitation on the cooling coil, but as the final state is determined by iteration, a certain (percentage) tolerance from the desired state and the maximum cooling power is permitted.

*Max Power:* The maximum power of the cooling coil specified as a negative number. There is assumed to be optimum control of the system's cooling coil with modulation.

*Surface temperature:* The surface temperature of the cooling temperature, which is used to calculate how much moisture precipitates on the cooling coil. The temperature is assumed to be constant and greater than 0°C.

*Cooling:* Activates the central cooling system as a source for cooling in the ventilation system. Central cooling can not be activated as a source for the ventilation system until the external program [PackCalc](http://help.bsim.dk/support/kb/articles/j9b8ZOmn/packcalc-koling) have been installed. PackCalc has been developed by IPU Teknology development at Danish Technical University (DTU) and can be downloaded from their web site.

 

#### **Humidifier:** 

The only type of humidifier that can be simulated is an adiabatic steam humidifier, which works without changing the temperature of the air.

*Max Output:* The maximum output of the humidifier. The model for moisture calculations has been simplified and does not take account of moisture accumulation, absorption and adsorption in building components and materials.

 

#### **Air Source:** 

Specifies where the air for the ventilation system is taken from. The air can be taken from the outdoor air (default) and all thermal zones.

 

#### **Schedule:** 

For each ventilation system a control strategy has to be defined in one or more [schedules](https://help.bsim.dk/support/kb/articles/79O3DZ9E/schedule). A schedule is the term in general use in the software for a connected set of control and time definition. A precise distinction is therefore made between the system's physical components, which in principle can be found in a manufacturer's catalogue, and the control function, which can be established using control equipment that works automatically or is operated manually together with the system. The control strategy can, for example, include a change in the supply temperature curve, adjustment of damper functions, e.g. bypassing heat recovery in summer, or shutting off the flow of water to the heating or cooling coil.

 

#### **Control:** 

The software has five types of control. They are called [inlet control](https://help.bsim.dk/support/kb/articles/pWrnB2Wn/ventilation---indblasningsstyring), [zone temperature control](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/ventilation---rumtemperaturregulering), [moisture control](https://help.bsim.dk/support/kb/articles/E9LwjGQw/ventilation---fugtregulering), [VAV control](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering) and[ night cooling control](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/ventilation---natkoling-ventilation). The type of control required is defined via the five tabs in the ventilation dialog box.

*   [Inlet control](https://help.bsim.dk/support/kb/articles/pWrnB2Wn/ventilation---indblasningsstyring)
*   [Room temperature control](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/ventilation---rumtemperaturregulering)
*   [Moisture control](https://help.bsim.dk/support/kb/articles/E9LwjGQw/ventilation---fugtregulering)
*   [VAV control](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering)
*   [Night cooling control](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/ventilation---natkoling-ventilation)

See also:
*   Tab [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/schedule)
*   Tab [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time)