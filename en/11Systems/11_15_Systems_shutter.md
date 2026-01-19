<link rel="stylesheet" href="../style.css">

# Shutter, System
The shutter is primarily intended to be a night shutter that it closed for the current WinDoor when the outdoor temperature is below a certain value. The effect is that of improving the U-value of the current WinDoor and reducing incident solar radiation, if necessary to 0.</span>

<figure id="center_img">
<img src="./assets/shutter.gif" alt="Dialog box for defining night shutters.">
<figcaption>Dialog box for defining night shutters.</figcaption>
</figure>


R-value is the resistance to heat transmission through the shutter, say from surface to surface, without any surface resistance. The U-value for the total system (WinDoor + shutter) can be calculated as:

$$ U_{tot} = \frac{1}{\frac{1}{U_{windoor}} + h_s} \tag{1} $$

*U<sub>tot</sub>*                    total transmission coefficient, WinDoor+shutter, (W/m² K),   
*U<sub>WinDoor</sub>*            U-value for a WinDoor (inc. surface resistance), (W/m² K),   
*h<sub>s</sub>*                       thermal resistance for the shutter (ex. surface resistance) (W/m² K),


As the U-value for a WinDoor includes internal and external surface resistance, any changes in these should be included in the calculation of total resistance. Similarly, any resistance from air gaps between the glazing and shutter must be included in the resistance of the shutter.

*Transmit.* specifies the transmittance of solar radiation (heat) through the shutter. A transmittance other than 0 makes it possible, for example, to define secondary glazing used for part of the year or more advanced shutter systems with a transparent or translucent insulation type.

The shutter [schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) consists of "[shutter control](https://help.bsim.dk/support/kb/articles/Rm8JXX94/skodderegulering)" and a[ time definition](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse). The control action defines the outdoor temperature at which the shutter should be closed and a sun factor for a WinDoor with a closed shutter.

See also:
*   Tab [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)
*   Tab [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)
