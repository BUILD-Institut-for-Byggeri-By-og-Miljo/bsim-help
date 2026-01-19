<link rel="stylesheet" href="../style.css">

# Light Control
In LightCtrl a simple measure for the "light" in the room is used - the total solar incidence in the room. This is defined by a limit - [Solar Limit](https://help.bsim.dk/support/kb/articles/wQXxbnQK/lighting-system) (kW) - over which the light is turned on.

Another control criteria are the indoor temperature: If it becomes too hot in the thermal zone, it is possible to turn off the light to lower the indoor temperature. This is given in LightCtrl as Temp. Max (°C). However this has no meaning if it occurs during the night and a minimum value of the total solar incidence in the thermal zone ensures that the light will only be turned of if some light (sun) is available, as given by Lower Limit (kW).

<figure id="center_img">
<img src="./assets/light-lightctrl.gif" alt="Dialog for defining control of artificial lighting as a function of incident solar radiation and temperature in the zone.">
<figcaption>Dialog for defining control of artificial lighting as a function of incident solar radiation and temperature in the zone.</figcaption>
</figure>

#### **Control on the basis of incident solar radiation and temperature**

With this type of control the general lighting is basically regulated on the basis of the total incident solar radiation in the current zone.

Factor is a reduction factor (between 0 and 1), which indicates that only a certain proportion of the general lighting can be switched on within the relevant time definition. This factor can, for example, be used in connection with buildings where a limited part of the lighting has to be on outside opening hours, e.g. at night, for security reasons.

The *Lower Limit* parameter is closely linked to *Temp. Max,* which comes after it, and specifies a lower limit for total incident solar radiation, above which the general lighting is switched off if the temperature exceeds the *Temp. Max* value. The value of this parameter should normally be set lower than the [Solar Limit]() parameter, which is defined in the lighting dialog box.

If the *Temp. Max* value is exceeded, it is assumed that the general lighting will be switched off, but only in so far as total incident solar radiation exceeds the *Lower Limit*.

*Solar Limit* is used in connection with lighting control on the basis of the total incident solar radiation in the zone. If the incident solar radiation is less than the value for Daylight Limit, the general lighting is assumed to be on within the relevant time definition. Please note that the Factor parameter (specified under control in the schedule) for the current period will be multiplied by the power value entered for general lighting.  
Solar Limit is the same parameter as defined at the tab "LightCtrl". If a value is defined (different from 0) on this tab (Lighting), this value is being used and the value defined on the LightCtrl tab is not being used.

See also: [Daylight Control](https://help.bsim.dk/support/kb/articles/zWZAql9p/belysning-daylight-control)