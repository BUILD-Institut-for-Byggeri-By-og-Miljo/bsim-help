<link rel="stylesheet" href="../style.css">

# Climate data definition

<figure id="center_img">
<img src="./assets/climate2.gif" alt="Dialog (Weather Data Definition Row) for definition of the individual parameters in raw data (ASCII) which are to be converted to the binary BSim format. The Delete-button removes the actual line of information in the definition file.">
<figcaption>Dialog (Weather Data Definition Row) for definition of the individual parameters in raw data (ASCII) which are to be converted to the binary BSim format. The Delete-button removes the actual line of information in the definition file.</figcaption>
</figure>


These rows have the syntax:

*   *Parameter* number constant factor 'unit'

and can be read: the value in position number in a line is give to parameter as:

*   Parameter = factor * (value - constant) [unit]

*Parameter* can be given in one of the units (in parenthesis).

*   *Ambient Temp.* - Ambient dry bulb temperature (C) or (F).

*   *Dew Point Temp.* - Dew point temperature (C) or (F).

*   *Rel. Humidity* - Relative humidity, given as (%) or an integer (-).

*   *Humidity Ratio* - Absolute moisture content (kg/kg).

*   *Entalphy* - Enthalpy (kJ/kg).

*   *Normal Radiation* - Normal radiation (W/m²) or (J/cm²).

*   *Diffuse Radiation* - Diffuse radiation on horizontal (W/m²) or (J/cm²).

*   *Global Radiation* - Global radiation on horizontal (W/m²) or (J/cm²).

*   *Direct Radiation on Horizontal* - Direct radiation on horizontal (W/m²) or (J/cm²).

    *   One of the following combinations of solar radiation **must** be given:

    *   Normal radiation + Diffuse radiation on horizontal.

    *   Normal radiation + Global radiation on horizontal.

    *   Global radiation on horizontal + Diffuse radiation on horizontal.

    *   Diffuse radiation on horizontal + Direct radiation on horizontal.

*   *Cloud cover* - Cloud cover, given as (octas), say 0-8 or a fraction (-).
*   *Wind Speed* - Wind speed (m/s) or (knot).
*   *Wind Direction* - Wind direction in degrees (North = 0°, East = 90°).
*   *AtmPressure* - Atmospheric pressure in pascal (Pa).
*   *Month* - Month(-), 1-12.
*   *Day* - Day (-), 1-31.
*   *Hour* - Hour number (-), 1-24.