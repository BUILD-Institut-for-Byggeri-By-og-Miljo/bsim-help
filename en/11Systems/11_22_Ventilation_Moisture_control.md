<link rel="stylesheet" href="../style.css">

# Ventilation, *Moisture control*

This type of control can primarily be used where there is a need to dehumidify the room air at times. The desired relative humidity is converted into a desired absolute humidity on the basis of the temperature set point. This figure is used to calculate what the absolute moisture content of the supply air should be to achieve the desired humidity in the zone.

If the moisture content of the air supplied to the system is too high, the air is dehumidified by cooling in the system's cooling coil. To achieve the desired temperature in the zone, the air may be heated in the heating coil before being supplied to the zone. If the capacity of the heating coil is insufficient to achieve the desired zone temperature, a radiator, if there is one, might heat the space further. It is important in this connection to be aware of three characteristics of moisture control.

1.  The heating coil in the ventilation system will always take priority over the radiator (irrespective of the set points for the two systems).

2.  If the desired relative humidity is to be achieved, the temperature set point must also be achieved, which means that, if the radiator (heating or cooling radiator) helps to maintain the temperature, the set point for the radiator must be the same as the temperature set point in the moisture control.

3.  The temperature set point is used as a heating set point and so dehumidification of the air will not work in interaction with cooling proper in the system's cooling coil

If the moisture content of the air supplied to the system is too low, the air will be humidified in a steam humidifier if one has been defined.

<figure id="center_img">
<img src="./assets/ventilation-moisturectrl.gif" alt="Defining the control strategy for moisture control.">
<figcaption>Defining the control strategy for moisture control.</figcaption>
</figure>


*Part of nom. flow:* Indicates that the output of the system within the time definition attached to this control action has been reduced in relation to nominal output by the *Part of nom. flow* factor.

*Min Inlet Temp:* The *Min Inlet Temp* parameter is a lower limit for the supply temperature. This means that the control function simulates a supply sensor, which overrides the hygrostat's sensor when the supply temperature drops below the minimum temperature set point.

*Setp Reheating:* The desired room temperature is used when converting the relative humidity (the set point for the hygrostat) into a "desired" absolute humidity in the thermal zone. If dehumidification is required, the system's components cannot themselves be regulated to maintain the desired temperature, as the heating coil is located before the cooling coil.

*Setp De-humid:* The set point for a hygrostat positioned in the thermal zone where dehumidification is required. The thermal zone's moisture balance is used to calculate what the moisture content of the supply air should be to achieve the desired relative humidity in the thermal zone.

*Setp Humidify:* The set point for the hygrostat during humidification. The humidification set point is only significant in systems in which a (steam) humidifier is defined. The thermal zone's moisture balance is used to calculate what the moisture content of the supply air should be to achieve the desired relative humidity in the thermal zone.

*Setp Cooling:* The set point for the room sensor during cooling. Control will take place on the basis of the lowest of the two supply temperatures, which are determined by the need for dehumidification (determined by the hygrostat's set point) and the need for cooling (determined by the room temperature sensor's set point) respectively. If cooling is required, the control function will increase cold recovery (if it has been defined as greater than 0) and then the output of the cooling coil as much as is necessary, up to maximum output, to keep the condition of the room air below or at the selected set points.

See also:
*   [Inlet control](https://help.bsim.dk/support/kb/articles/pWrnB2Wn/ventilation---indblasningsstyring)
*   [Zone temperature control](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/ventilation---rumtemperaturregulering)
*   [VAV control](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering)
*   [Night cooling control](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/ventilation---natkoling-ventilation)