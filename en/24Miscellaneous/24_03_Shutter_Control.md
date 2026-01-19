<link rel="stylesheet" href="../style.css">

# Shutter Control

<figure id="center_img">
<img src="./assets/shutterctrl.gif" alt="Dialog box for defining night shutter control.">
<figcaption>Dialog box for defining night shutter control.</figcaption>
</figure>

The software checks whether the outdoor temperature in the first hour is below the value specified in the Temp. Limit parameter within the relevant time definition. If this is the case, the shutter will be closed and remain closed until the time definition is interrupted for the first time. Normally a time definition assumes that the shutter will be closed for a connected period of winter or at night when the temperature is below a limit value entered in control.

Sf4 shutter specifies the solar light factor for a WinDoor when the shutter is closed. The solar light factor is only relevant in connection with daylight-dependent lighting control. It is linked to one specific point in the space and is defined as the illuminance at this point divided by the external illuminance on the WinDoor plane. When the shutter is closed, Sf4 replaces the other solar light factors Sf1, Sf2 and Sf3 defined for the window. The default value for Sf4 is 0, just like the other solar light factors. The daylight factors are described in greater detail under the [lighting](https://help.bsim.dk/support/kb/articles/wQXxbnQK/lighting) schedule.