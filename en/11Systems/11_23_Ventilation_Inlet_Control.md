<link rel="stylesheet" href="../style.css">

# Ventilation, *Inlet Control*
Inlet control consists of controlling the supply temperature as a function of the outdoor temperature (climate compensation). The control curve consists of three connected lines and is plotted by defining two points and the slope of the lines outside those points, cf. dialog box graph. The output of the components is controlled in series, with the software trying to achieve the desired supply temperature first by controlling the recovery unit, then the heating or cooling coil.

<figure id="center_img">
<img src="./assets/ventilation-inletctrl.gif" alt="Defining the control strategy for inlet control. The curve show the control of the inlet air temperature according to the given input. The curve is refreshes when focus changes from one input field to another.">
<figcaption>Defining the control strategy for inlet control. The curve show the control of the inlet air temperature according to the given input. The curve is refreshes when focus changes from one input field to another.</figcaption>
</figure>


*Part of nom. flow:* Indicates that the output of the system within the time definition attached to this control action has been reduced in relation to nominal output by the *Part of nom. flow* factor.

*Control curve, Te1, Tinl1, Te2, Tinl2:* Specifies the two points of discontinuity (*Point 1 and Point 2*) for the control curve. In the dialog box graph the points are defined as: (-10, 30) and (10, 17).

*Slope before 1* and *Slope after 2*: Specifies the slope of the lines that make up the control curve at an outdoor temperature of below *Te1* and above *Te2,* as shown in the graph. The example in the graph has a slope of 0 before *P1* and 0.4 after *P2.*

*Air Hum:* Specifies the desired absolute moisture content of the supply air. This parameter is only significant if a humidifier has been defined in the system. Dehumidification will not therefore take place in this type of control.

See also:
*   [Moisture control](https://help.bsim.dk/support/kb/articles/E9LwjGQw/fugtregulering)
*   [Zone temperature control](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/ventilation---rumtemperaturregulering)
*   [VAV control](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering)
*   [Night cooling control](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/ventilation---natkoling-ventilation)