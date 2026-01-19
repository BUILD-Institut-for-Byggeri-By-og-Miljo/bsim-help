<link rel="stylesheet" href="../style.css">

# Shading Control
This control strategy the solar shading device is being controlled according to the solar incidence through the actual WinDoor. A limit is given for the amount of solar (Max Sun, W/m²) to allow though the WinDoor before the shading device is being activated (closed). When this limit is being exceeded, the shading device is being closed just so much that the limit can be met (if possible). If the solar incidence in the following half hour increases, it is being tested if the solar shading have to be adjusted. If the solar incidence in the actual position exceeds the value of (Max Sun + Delta Sun, W/m²), the shading device is being controlled to meet the this new limit (if possible). By giving a high value of Delta Sun less changes in position will occur during the day. Simultaneously, the control of the solar shading device can also be made according to the actual operative temperature in the thermal zone. The criteria for activating the shading device is that the temperature limit (Temp. Max, °C) is being exceeded. Is this the case, the shading device will be controlled just so much that the temperature limit is being met (if possible). The control according to the temperature in the thermal zone will only be activated if the total solar incidence through all WinDoor's in the zone exceeds the limit Sun Limit (in kW). Control of the shading device, both according to the solar incidence and the temperature criteria, can happen in three different control strategies: on/off, 0 - ½ - 1 and continuous. The table gives an overview over data in the dialog for SolarCtrl.

<figure id="center_img">
<img src="./assets/shadingctrl.gif" alt="Dialog box for defining solar/temperature shading control - SolarCtrl.">
<figcaption>Dialog box for defining solar/temperature shading control - SolarCtrl.</figcaption>
</figure>

Data in the dialog for the control type SolarCtrl.

| Parameter | Description | Variants / interval, unit | Standard value |
|----------|-------------|--------------------------|----------------|
| Shading Coeff. | Solar shading factor for the shading device, when it is completely closed. This value overrides an eventual value given for the system SolarShading. | 0–1.0 | 0.5 |
| Max Sun | Limit for solar incidence through the actual WinDoor above which the shading device is being activated (closed).<br><br>**Note:** If "0" is given as limit for MaxSun, the value from tab SolarShading is being used – it is recommended to use a value > 0. | 0–800 W/m² | 150 W/m² |
| Delta Sun | Used to determine a new limit for the shading device when it is already activated. When the solar incidence at the current position is changed with a value higher than (±) Delta Sun, the device is being controlled again. | 0–500 W/m² | 75 W/m² |
| Temp Max | Limit for the operative temperature, above which the shading device is being activated (if possible), <u>and</u> if the total solar incidence to the thermal zone exceeds SunLimit. | 10–40 °C | 26 °C |
| Sun Limit | Lower limit for the total solar incidence through all WinDoor's in the actual thermal zone, under which control according to the temperature criteria will not come into action. | 0–20 kW | 0.3 kW |
| Sf4 shading | Solar light factor for the WinDoor with the shading device closed completely. | 0–0.5 | 0.05 |
| Control Form | Control principle for the shading device. | on/off<br>0–½–1<br>Continuous | Continuous |

<br>

*Sf4 shading* is the solar light factor for the actual WinDoor, when the solar shading is completely closed. The solar light factor is only relevant in conjunction with daylight dependant control of the artificial lighting and is connected to **one** reference point in the room. The solar light factor is defined as the lighting level in this reference point divided by the lighting level at the plane of the WinDoor. When the shading device is closed (full or partly), Sf4 replaces the other defined [solar light factors Sf1, Sf2, and Sf3](https://bsim.outseta.com/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors) for the share of the WinDoor that have a closed shading device. If a shading device is 60 % closed, the calculated daylight is being weighted (0.6 / 0.4) of the two values calculated with and without solar shading device.

The standard value for Sf4 is 0, like the other [solar light factors](https://bsim.outseta.com/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors). Daylight factors are described in the time schedule for [lighting](https://help.bsim.dk/support/kb/articles/wQXxbnQK/lighting).

It can be difficult to determine which shading control strategy most correctly will simulated the actual use of the shading device in a real building. The shading type must thus be evaluated in relation to the connected time definition, especially for manual systems in relation to the possible presence of persons in the individual thermal zone.