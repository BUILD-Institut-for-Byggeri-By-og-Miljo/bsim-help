<link rel="stylesheet" href="../style.css">

# NvCool regulation, Ventilation


<div style="text-align:center">

<strong>Morten Stender Christensen & Olaf Bruun Jørgensen, <a href="https://www.dem.dk/">Esbensen Consulting Engineers</a>
<br>
Iver Holm Iversen,  <a href="https://www.ikm.dk/">IndeKlimaMiljø</a></strong>
</div>
 

The NvCool-control is, like VAV-control, a control strategy according to a space sensor, which primarily are used in rooms with need for ventilation and cooling in the major part of the operation time. The NvCool-control was developed in a research project under the Danish EFP-programme, called "*Natural ventilation with heat recovery and cooling*". Using natural ventilation there are no electricity consumption and surplus heat is thus removed - at a higher indoor temperature - by increased airing instead of mechanical cooling of the inlet air.

I the afore mentioned EFP-project a system for natural ventilation and cooling have been developed. The exhaust air passes an air-to-fluid heat exchanger with very low pressure loss on the air-side. Fluid circulates in the pipes and this heats the air. The fluid are in a closed circuit and passes to a heat pump where it is cooled further before it returns to the heat exchanger. The heat gained from the fluid in the heat pump is transferred to the heating system.

The difference between a VAV-control and a NvCool-control is that the VAV-control increases the air volume linearly at a set point, e.g. 24 °C while the NVCool-control will start by increasing the air flow exponentially (dramatically at the beginning and then less) and at a lower indoor temperature (e.g. 22 °C). Doing this a high air flow is made in advance of reaching an over temperature - as kind of a "preventive cooling".


<figure id="center_img">
<img src="./assets/NvCoolFig1.gif" alt="Air-change when using NvCool-control compared to air-change when using a traditional VAV-control.">
<figcaption>Air-change when using NvCool-control compared to air-change when using a traditional VAV-control.</figcaption>
</figure>


<figure id="center_img">
<img src="./assets/NvCoolFig2.gif" alt="Differences in results using VAV- and NvCool-control in simulations with BSim.">
<figcaption>Differences in results using VAV- and NvCool-control in simulations with BSim.</figcaption>
</figure>


The set-point for the NvCool-control is fixed to 22 °C and for the VAV-control, 24 C. At 22 °C airing therefore starts with an increased air-flow in the NvCool-control, while the VAV-control do not increase the air-flow before the indoor temperature reaches 24 °C. It is clear that there is a lower indoor temperature using the NvCool-control than if using the VAV-control, due to the increased air-flow. Generally speaking, the NvCool-control uses more air than the VAV-control, but as a consequence less mechanical cooling is needed. In the example above active cooling of the inlet air is used in the VAV-control while this is not necessary using he NvCool-control.


<figure id="center_img">
<img src="./assets/NvCoolFig3.gif" alt="Dialog for definition of input data to the control strategy Ventilation | NvCoolCtrl.">
<figcaption>Dialog for definition of input data to the control strategy Ventilation | NvCoolCtrl.</figcaption>
</figure>


*   *VAV, max factor* [-]: Volume flow (nominal) given as a factor for 'ventilator' that cen be used to increase the nominal air flow (≥ 1). Normally the factor will be between 1.5 and 3.0.

*   *Min Inlet Temp.* [°C]: The parameter *Min Inlet Temp* defines the lower limit for the inlet temperature.

*   *Temp. diff.* [°C]: Defines a limit for the maximum allowed temperature difference between the inlet air and the indoor air temperature. This is usefull to avoid problems with draft.

*   *Setp. Indoor air,* [°C]: Set-point for the space sensor for activating the increased air-flow. In case of heating demand, the system will give the nominal (minimum) air-flow. If the set-point is over-passed, the air-flow increases exponentially as shown above.

*   *Max Water temp.* [°C]: Defines the highest allowed fluid temperature at the heating coil. In the results file the actual fluid temperature to the heating coil is shown. The heating coil can work as a cooling coil during summer (cooling) periods as cooled fluid can circulate through the heat exchanger. The flow temperature for the cold fluid is saved in the results file as *”NvWaterTemp”.* The yield form the heating/cooling coil is based on practical experiments with a Comfort 100 unit.

