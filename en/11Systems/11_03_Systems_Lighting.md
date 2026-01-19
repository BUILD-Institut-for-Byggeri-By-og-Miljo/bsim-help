<link rel="stylesheet" href="../style.css">

# Systems, *Lighting*

The lighting system is divided into general ceiling lighting (*General Lighting*) and workstation lighting referred to as *Task Lighting*. The two lighting types are controlled differently, with the workstation lighting always being assumed to be on within the time specifications in the schedule, while the general lighting is switched on and off as required. The defined lighting power is converted into heat.

Heat from lighting equipment - minus an eventual part that is removed directly from the fixtures (Exhaust Part) - is distributed as radiative heat transfer. Radiative heat transfer is distributed to the surfaces according to their areas.

<figure id="center_img">
<img src="./assets/lighting.gif" alt="Dialog for defining the artificial lighting in a thermal zone.">
<figcaption>Dialog for defining the artificial lighting in a thermal zone.</figcaption>
</figure>


*Task Lighting* is the workstation lighting, which is regarded as being on during all the hours within the time definitions in the schedule. Half the heat emissions are always regarded as going to the indoor air and half to the zone's surfaces, divided equally according to area, i.e. with the same power to all faces (W/m<sup>2</sup>).

*General Lighting (kW)* is the general ceiling lighting, which is basically controlled according to the incident daylight. The general lighting can be controlled according to three different principles. In the simplest form of control the lighting is controlled on the basis of the total incident solar radiation (kW) through the windows in the zone, while the second form of control uses the level of daylight (lux) at a given point in the zone. The third form of control for general lighting is based on the lighting need calculated using other calculation methods (computer programs), with BSim using hourly values for lighting power saved in a result file imported from these calculations.

It is also possible to specify periods during which only part of the general lighting can be switched on, as well as to indicate that the lighting should be switched off in certain cases if the indoor temperature becomes too high. The control principles are described in greater detail in the [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) section.

Please note that the installed lighting powers that are entered must include losses in any ballasts. In the case of fluorescent lights this loss represents approximately 20% of the power of the light source at nominal load.

Some of the heat emissions from general lighting can be regarded as having been transferred to the ventilation system's exhaust air, while the rest is divided equally between the room air and the zone's surfaces, just as with task lighting.

*General Lighting Level:* This parameter is used in connection with lighting control on the basis of daylight. The value specifies the lighting level (Lux) achieved at the reference point (cf. description of control) when the general lighting is switched on at full power. The lighting level achieved at the reference point includes light from the task lighting, which is always assumed to be on within the relevant time definition.

In the daylight type of control the desired lighting level is defined at the reference point, with the need to control the general lighting being determined on the basis of the calculated daylight at the point hour by hour.

*Lighting Type* is the drop-down list box for selecting the lighting type, with it being possible to choose incandescent lamps or fluorescent tubes. The type is important in connection with lighting control, as the heating power given off is not proportional to the light emitted. The type of light source has to be defined because the ratio between power and light varies differently for the two types.

The type can be either incandescent or fluorescent. The type is of significance regarding light control as the power consumed is not proportional with the light emitted. The ratio between power and lumen output is for incandescent sources calculated according to:

$$ P = 0.01 \cdot \left( -53.2 \cdot f^2 + 125.296 \cdot f + 27.56 \right) \cdot \text{genlight} \tag{1} $$

Fluorescent types are calculated according to:

$ P = (0.9 \cdot f + 0.1) \cdot \text{genlight} $ for $ f > 0.1 $

$ P = 0.0 $ for $ f \leq 0.1 $

where

$ P $                    is the power needed to achieve the desired lighting level, kW

$ f $                     is the desired lighting level in fraction of the nominal level, -

$ genlight $        is the nominal lighting level, lux

For further information see: [Algorithms for calculating solar radiation and daylight.](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstraling-og-dagslys)

*Solar Limit* is used in connection with lighting control on the basis of the total incident solar radiation in the zone. If the incident solar radiation is less than the value for Daylight Limit, the general lighting is assumed to be on within the relevant time definition. Please note that the Factor parameter (specified under control in the schedule) for the current period will be multiplied by the power value entered for general lighting.  
     Solar Limit is the same parameter as defined at the tab "LightCtrl". If a value is defined (different from 0) on this tab (Lighting), this value is being used and the value defined on the LightCtrl tab is not being used.

*Exhaust Part* is the proportion (between 0 and 1) of the power given off by the general lighting that is removed with the ventilation system's exhaust air, e.g. because air is extracted directly through the light fittings (integrated systems) or above a false ceiling in which the light fittings are mounted. Extraction of lighting heat only works when the ventilation system is in operation.

The power transferred from the general lighting in this way is converted into an increase in the temperature of the exhaust air. If widely varying ventilation air flows are specified for different time definitions, the specified removal of heat should, if necessary, be weighted accordingly.

There are basically two forms of control ([Light Control](https://help.bsim.dk/support/kb/articles/j9b8aMmn/belysning---light-control) and [Daylight Control](https://help.bsim.dk/support/kb/articles/zWZAql9p/belysning---daylight-control)) that can be used in the same thermal zone for different time definitions.

Please note that only the general lighting is controlled, whereas "tasking lighting" is always regarded as being on within the specified time definitions.

See also:
*   Tab [*LightCtrl*](https://bsim.outseta.com/support/kb/articles/j9b8aMmn/belysning---light-control)
*   Tab [*DaylightCtrl*](https://help.bsim.dk/support/kb/articles/zWZAql9p/belysning---daylight-control)
*   Tab [*Schedule*](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)
*   Tab [*Time*](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)