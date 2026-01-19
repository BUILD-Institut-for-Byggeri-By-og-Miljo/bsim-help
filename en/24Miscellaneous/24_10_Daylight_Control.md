<link rel="stylesheet" href="../style.css">

# Daylight Control
In daylight control the lighting level is used as parameter for the control. For this control the parameters GeneralLighting (kW) and Gen.Lghting (lux) from the Lighting-system.

The first parameter gives the installed power and the second which lighting level is achieved when the general lighting is turned on 100 %. In DaylightCtrl is given the desired lighting level at the reference point in the actual time definition. If, for instance, a lighting level of 250 lux (Desired Light Level) is desired, it can be necessary to install 6 light sources that gives a total lighting level of 280 lux (Gen.Lighting) at the reference point. It is rare to be able to obtain exactly the desired lighting level and normally you will always install a little additional power to take into account dirt and dust at the light fittings (the maintenance factor).

<figure id="center_img">
<img src="./assets/light-daylightctrl.gif" alt="Dialog for defining control of shading as a function of the calculated lighting level at a point in the model.">
<figcaption>Dialog for defining control of shading as a function of the calculated lighting level at a point in the model.</figcaption>
</figure>

#### **Control on the basis of daylight**

With this control type the general lighting is regulated on the basis of the luminance at a given reference point in the zone. The luminance is, of course, heavily dependent on the location of the point, but the luminance on a horizontal work surface 0.85 above the floor is normally used. The software determines the luminance hour by hour on the basis of the calculated incident solar radiation on the windows in the zone and the values for [solar light factors](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors) SF1, SF2 and SF3, defined for each window, and solar light factor SF4, defined for any shading or shutters attached to the windows. The solar light factors are explained in greater detail in: [Algorithms for calculating solar radiation and daylight.](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstraling-og-dagslys)

*Desired Light Level (lux)* specifies the desired luminance at the chosen reference point. If the calculated daylight gives the desired luminance at the point, the general lighting is assumed to be off. If this level is not reached with daylight alone, the general lighting is assumed to be on. The type of light source and the way in which the general lighting can be controlled determine the level of power consumption.

*SwitchOff*: Indicates the percentage share of power used in the lighting system when the light is turned "off". This parameter has only influence in case of the continuous control form.

*Control Form:* This field opens a drop-down list box in which the control type has to be selected. It is possible to choose between on/off control, step-by-step control with a specified number of steps, continuous control and a user-defined type.

See also: [Light Control](https://help.bsim.dk/support/kb/articles/j9b8aMmn/belysning-light-control)