<link rel="stylesheet" href="../style.css">

# Regulering efter lysføler på facaden

When using this control strategy, the solar shading is being controlled according to the light intensity on the facade. When the lighting level, measured on the facade where the window is located, exceeds the value of *Shade Close* (lux), the shading is being closed. The solar shading will remain closed until the lighting level on the facade drops below the value of *Shade Open* (lux). 

<figure id="center_img">
<img src="./assets/shd_sensor_ctrl.gif" alt="Dialog for definition of solar shading control by an external sensor - SensorCtrl.">
<figcaption>Dialog for definition of solar shading control by an external sensor - SensorCtrl.</figcaption>
</figure>

<br>

*Data in the dialog defining the control type SensorCtrl.*

| Parameter       | Description                                                                                                           | Variants / interval, unit | Standard value |
|-----------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------|----------------|
| Shading Coeff.  | Solar shading factor for the shading device, when it is being closed completely. This value overrides an eventual value given for the system SolarShading. | 0–1.0 | 0.5 |
| Shade Close     | Limit for lighting level on the facade, over which the solar shading is being closed.                                 | 3 000–80 000 lux         | 20 000 lux     |
| Shade Open      | Limit for lighting level on the facade, below which the shading is being opened.                                      | 2 000–20 000 lux         | 10 000 lux     |
| Sf4 shading     | Solar light factor for the window with the solar shading closed.                                                       | 0–0.5                    | 0.05 |
