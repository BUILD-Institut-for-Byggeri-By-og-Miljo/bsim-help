<link rel="stylesheet" href="../style.css">

# Finish Property

<figure id="center_img">
<img src="./assets/finish_property.gif" alt="Finish Property.">
<figcaption>Finish Property.</figcaption>
</figure>


*   *Rcomb*: The combined (radiation and convection) thermal surface resistance for the surface (see default values).
*   **NB:** When a finish is facing ground, the combined external surface resistance is automatically changed to 1.5 m²K/W. This value must be changed (according to the Danish standard DS418 2002:06 - Calculation of heat loss from buildings) if the soil is included in the material layers of the construction or if the construction is placed more then 0.5 meters below terrain.
*   *Rconv*: The convective surface resistance for the surface (see default values).
*   *Z*: Resistance for moisture transport through the surface (see default values).
*   *Facing:* At the external face of a face, it is possible to define what is on this side of the construction. On this side any thermal zone or ground-zone can be given. This is a simple way of defining virtual zones with the temperature and moisture conditions as the actual thermal zone or as defined in the [ground](https://help.bsim.dk/support/kb/articles/OW4NqGQg/jord-ground) definition.
*   *Locality* hold information about exposure of surfaces facing the ambient. The field is inactive for faces facing a room.
    *   *Horizon*: At the external face of constructions, is is possible to define a local skyline which differs from the general skyline, defined under [Site](https://bsim.outseta.com/support/kb/articles/dQG2Kom4/site-property).
    *   *Wind Exposure*: Indicates the wind exposure of the surface:
    *   Semi-exposed - partly exposed to the wind.
    *   Exposed - fully exposed to the wind.
    *   Sheltered - sheltered from the wind.
    *   *Filtration Air Flow*: Using this parameter it is possible to give the air-flow in and out of the construction through leaks. The parameter is a factor for the wind speed.
*   *Wind Pressure Coefficient, Cp*: The two buttons, *Top* and *Bottom*, opens a [dialog](https://help.bsim.dk/support/kb/articles/rmklPLQg/vindtrykkoefficient-for-spalter) for defining the wind pressure coefficients at the top and bottom of a vertical, ventilated crevice located inside a construction facing the ambient. The coefficients are used to calculate the air exchange in the crevice, dependant on the wind pressure at the exterior face of the construction.

If the surface resistance for a surface (*Rcomb*), the convective (*Rconv*) surface resistance or the moisture resistance is specified as 0 in the *Finish Property* dialog box, the default values are used.

The default values for the surface resistances and the convective heat transfer coefficients are shown in the table below.

| **Name** |  | **Value** | **Unit** |
|----------|-----------------|---------|---------|
| Internal, combined surface resistance | upward heat flow<br>vertical heat flow<br>downward heat flow | 0.10<br>0.13<br>0.17 | m²K/W |
| External, combined surface resistance | upward heat flow<br>vertical heat flow<br>downward heat flow | 0.04<br>0.04<br>0.04 | m²K/W |
| External, combined surface resistance for constructions facing ground |  | 1,50 | m²K/W |
| Internal convective resistance | floors<br>ceilings<br>walls | 0.40<br>0.50<br>0.33 | m²K/W |

 

*Default values for surface resistance used when 0 is specified in the Finish Property dialog box.*

The external surface resistance is used in all cases. The convective surface resistance is used for the internal surface resistance when calculations are done with [long-wave radiation exchange](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options) in tsbi5. The total surface resistance for a face in this type of simulation is dependent on the surface temperature of the faces with which the current face exchanges radiant heat. In this case heat transfer from radiation is calculated dynamically.

