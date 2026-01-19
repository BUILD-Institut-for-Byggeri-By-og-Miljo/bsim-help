<link rel="stylesheet" href="../style.css">

# Ventilation, *Recirculation*

<figure id="center_img">
<img src="./assets/ventilation_rac.jpg" alt="Control of ventilation system with recirculation of air.">
<figcaption>Control of ventilation system with recirculation of air.</figcaption>
</figure>


*   *Min Supply Ratio* is the lowest share (of *Supply* given at the [Ventilation](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation) tab) of air (outdoor + re-circulated) that the ventilation system delivers to the zone.

*   *Min Return Ratio* is the minimum share of re-circulated air in the ventilation system.
*   *Max Return Ratio* is the maximum share of re-circulated air in the ventilation system.
*   *Setp CO2* is the set-point for the CO<sub>2</sub>-level in the zone, which the ventilation system should try to meet. If *Setp CO2* = 0 the system do not control towards a certain CO<sub>2</sub>-level.
*   *Setp Humid* is the set-point for the moisture content in the indoor air, which the ventilation system should try to meet. If the moisture content of the indoor air is below the set-point, the humidifier starts to bring the humidity up to the desired level. If *Setp Humid* = 0 the system is not controlled towards a minimum humidity level of the indoor air.
*   *Setp Dehumid* is the set-point for the moisture content in the indoor air, which the ventilation system should try to meet. If the moisture content of the indoor air is above the set-point, the de-humidifier starts to bring the humidity down to the desired level. If *Setp Humid* = 0 the system is not controlled towards a maximum humidity level of the indoor air.
*   *Min Inlet Temp* is the lowest acceptable temperature of the inlet air to the zone.
*   *Max Inlet Temp* is the highest acceptable temperature of the inlet air to the zone.
*   *Setp Temp* is the desired operative temperature of the zone.

Control of ventilation systems with recirculation of the air happens according to the description given in the [theory section](https://bsim.outseta.com/support/kb/articles/dQG2VDm4/recirkulation).

