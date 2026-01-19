<link rel="stylesheet" href="../style.css">

# Systems, *Shading*

To any WinDoor in a BSim-model it is possible to connect a solar shading device, which is being described by input fields shown in the figure below. The solar shading device itself is described by a limited number of parameters, describing the physical properties of the device, as shown in the table below.

<figure id="center_img">
<img src="./assets/shading.gif" alt="Dialog box for defining shading device for a WinDoor. Values for Shading Coeff. and Max Sun are only being used, if no values are given in any of the control strategies. Data for Slat Width and Slat Dist. is only being used for devices of the type Venetian blind.">
<figcaption>Dialog box for defining shading device for a WinDoor. Values for Shading Coeff. and Max Sun are only being used, if no values are given in any of the control strategies. Data for Slat Width and Slat Dist. is only being used for devices of the type Venetian blind.</figcaption>
</figure>


Data in BSim for the dialog SolarShading. Parameters in grey fields are only being used for special types of shading devices.


| Parameter       | Description                                                                                                                                         | Variations                                   | Standard value |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|----------------|
| Type            | Shading type, where Simple is undefined.                                                                                                           | Simple; Venetian; Screen; Curtain            | Simple         |
| Shading Coeff.  | Solar shading factor, only used when simulating models created in earlier versions of BSim.                                                         | 0 - 1,0                                      | 0,5            |
| Max Sun         | Limit for solar incidence, above which the shading is being activated to maintain this value. Only used when simulating models created in earlier versions of BSim. | 0 - 800 W/m²                                 | 150 W/m²       |
| Max Wind        | Wind speed above which the solar shading is put out of activity. Only active in case of external Position for the shading device.                    | 0 - 30 m/s                                   | 0              |
| Refl.           | Reflectance of shading, e.g. reflectance of slates.                                                                                                | 0 - 1,0                                      | 0,5            |
| Transm.         | Transmittance of shading, e.g. transmittance of slates.                                                                                            | 0 - 1,0                                      | 0,1            |
| Slat Width      | Slat width, only active if the Type is Venetian.                                                                                                   | 0 - 0,5 m                                    | 0,05 m         |
| Slat Dist.      | Slat distance, only active if the Type is Venetian.                                                                                                 | 0 - 0,5 m                                    | 0,042 m        |
| Position        | Location of shading device compared to the window.                                                                                                  | External; Internal; Integrated               | Internal       |


The functionality of solar shading devices are, as any system in BSim, being described in a [schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule), where for one or more [time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse) definitions it is possible to define which control to use when. An unlimited number of time schedules can be defined with corresponding control strategies for the solar shading device.

There can be selected among the following four control strategies:
*   [SolarCtrl](https://help.bsim.dk/support/kb/articles/49Ed16Q7/solafskarmning---regulering-efter-solindfald-og-temperatur), controlling the solar incidence after a set-point temperature in the thermal zone,
*   [SensorCtrl](https://help.bsim.dk/support/kb/articles/BWzd23QE/solafskarmning---regulering-efter-lysfoler-pa-facaden), controlling the shading device after the lighting level measured at the external face of the facade where the WinDoor is located,
*   [BlindCtrl](https://help.bsim.dk/support/kb/articles/ZmNrBwm2/solafskarmning---regulering-med-lameller-efter-solindfald-og-direkte-solstraling), controlling shading devices of the type Venetian blind according to set-points for solar incidence and direct solar radiation,
*   [GlareCtrl](https://help.bsim.dk/support/kb/articles/4966wd9X/solafskarmning---regulering-efter-blandingsforhold-og-belysningsstyrke), controlling the shading device to minimize glare from the WinDoor.

Table values offers the possibility of using detailed information about the slates in the shading system by attaching information fro an [external text file](https://help.bsim.dk/support/kb/articles/y9q82qQA/standardtabeller-for-lamel-afskarmninger). When clicking the button, a dialog is being opened to find the file on the PC.

*Remove* table is used to remove the attachment of an external file for definition of a shading system.

See also:
*   Tab [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)
*   Tab [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)
