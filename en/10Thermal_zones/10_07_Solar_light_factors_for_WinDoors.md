<link rel="stylesheet" href="../style.css">

# Solar light factors for WinDoors
The illuminance at a point is very dependent on the point's location in the room. Normally the illuminance on a horizontal work surface 0.85 m above the floor is considered.

Since the illuminance outside the window varies from moment to moment, it is most practical to specify the illuminance at a point in the room as a relative quantity in relation to the light outside.

*   **Definition of solar light factor**

*   **Direct and indirect components of solar light factors SF1 to SF4**

*   **Direct solar radiation SF1**

*   **Diffuse sky light SF2**

*   **Reflected light SF3**

*  **Light from shading (or shutters) SF4**

 

### **Definition of solar light factor**

In BSim the relative illuminance in the room is specified in relation to the current solar radiation on the window, with the ratio being called the solar light factor SF, which must not be confused with the daylight factor (DF).

The solar light factor SF at a point in a given plane is defined as the ratio between the illuminance at the point in the plane and the simultaneous illuminance outdoors on the plane of the facade without shadows from the surroundings. The illuminance cannot be described with a single value for the solar light factor, but has to be split into different components, with a distinction being made between the following:

*   SF1 the solar light factor for direct sunlight (direct light)

*   SF2 the solar light factor for diffuse sky light (diffuse light from the firmament).

*   SF3 the solar light factor for reflected light

*   SF4 the solar light factor for the window when fitted with shading

When a glazing type is chosen for a window, a transmission factor is defined for solar radiation and daylight respectively. Calculated solar light factors must therefore be used for a window with a transmission factor of 1.

 

### **Direct and indirect components of solar light factors SF1 to SF4**

Light striking a point is made up of two components:

1. The direct component (index d), which is the light directly to the point from the light source, e.g. the sky or the shading.   
2. The inter-reflected component IRC (index i), which is made up of the light first reflected once or more by other surfaces before it strikes the point.

The solar light factors in a given instance can be calculated by computer or determined by more or less accurate manual calculation methods or measurements in existing buildings. The manual calculation methods for daylight factors only include components from diffuse sky radiation and radiation from reflected light.

A description of how the two components of each of the solar light factors can be calculated or determined from curves can be found in: [Algorithms for calculating solar radiation and daylight](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstr-ling-og-dagslys).

For window sizes and room dimensions in normal use there follow curves, which are intended as a guide, for calculating the solar light factors, but in cases involving special facades or constructions where more precise factors are required, they will have to be determined by other means.

The curves shown have been approximated on the basis of calculations for a room with a facade of 4 m x 2.8 m and a window with a glazed area of 40-60% of the internal facade area. The room depth can vary from 6 to 10 meters. The reflectance of the ceiling, walls and floor is 0.7, 0.4 and 0.1 respectively. The curves and correction factors for solar light factors in the above example are specified in algorithms for calculating solar radiation and daylight, which also give results for rooms with a larger glazed area and greater depth.


| SF  | Direct component, SF<sub>d</sub>                                                                  | Indirect component, SF<sub>i</sub>             |
|-----|----------------------------------------------------------------------------------------|------------------------------------|
| SF1 | If there is direct solar radiation at the point, it is not included in SF1.           | <img src="./assets/sf1i.gif" width=200>                          |
| SF2 | <img src="./assets/sf2d.gif" width=200>                                                                           | <img src="./assets/sf2i.gif" width=200>                          |
| SF3 | Reflected radiation from the surface of the ground cannot strike the point on the horizontal work surface directly and does not contribute to SF3. | <img src="./assets/sf3i.gif" width=200> |
| SF4 | <img src="./assets/sf4d.gif" width=200>                                                                              | <img src="./assets/sf4i.gif" width=200>                          |


*Illustration of the components of the four solar light factors SF1-SF4 from direct and inter-reflected radiation.*

 

### **Direct solar radiation SF1**

Direct solar radiation will produce a bright spot somewhere in the room, and the reflected light from this spot will act as a light source. Since the position of the spot in the room is very dependent on the height and azimuth of the sun, SF1 at a point will be far from constant. A single value representative of SF1 is required in the calculations, however. At the point struck by the direct radiation, there will be very high illuminance, but this is ignored when calculating SF1, with only the inter-reflected component IRC being taken into account.

In the figure sunlight factor SF1 is shown for a room of 6 meters in depth with varying window size, expressed as the area of the glazing as a percentage of the entire (internal) area of the facade.

<figure id="center_img">
<img src="./assets/sf1-8m.jpg" alt="Solar light factor SF1 for the direct radiation component of the daylight in a room with a depth of 8 meters with different window areas.">
<figcaption>Solar light factor SF1 for the direct radiation component of the daylight in a room with a depth of 8 meters with different window areas.</figcaption>
</figure>

It should be noted that the direct solar radiation in the calculations is assumed to strike the floor if XSun distribution is deselected in tsbi5 Options. On this basis solar light factor SF1 is directly proportional to the reflectance of the floor, which is set at 0.1 in the calculations. Therefore, in the case of higher reflectances, SF1 can be calculated directly by multiplying by the ratio between the actual reflectance and 0.1.

### **Diffuse sky light SF2**

SF2 is normally the largest component of illuminance at a point that can "see" the sky. In the calculations it is assumed that, irrespective of the state of the sky (overcast or clear), the luminance distribution is the same as for a CIE-overcast sky or uniformly cloudy, and SF2 is calculated for one of these states. The quantity for the incidence of daylight is calculated using algorithms obtained from measurements in Danish conditions ([Petersen, 1982](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur)).

The two components of solar light factor SF2 from the direct and inter-reflected portions of diffuse sky radiation respectively can be determined separately as described in: [Algorithms for calculating solar radiation and daylight](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstr-ling-og-dagslys).

The sum of the two components is shown in the following figure, which illustrates the solar light factors for a room of 8 meters in depth with different window areas.

<figure id="center_img">
<img src="./assets/sf2-8m.jpg" alt="Solar light factor SF2 for the diffuse sky radiation component of the daylight in a room with a depth of 8 meters with different window areas.">
<figcaption>Solar light factor SF2 for the diffuse sky radiation component of the daylight in a room with a depth of 8 meters with different window areas.</figcaption>
</figure>

### **Reflected light SF3**

SF3 determines the component represented by sunlight reflected from the surface of the ground and includes both the diffuse sky light and direct sunlight components. Diffuse reflection from the surface of the ground is assumed. The characteristic feature of the reflected component is that it must strike other surfaces in the room first, in particular the ceiling, before reaching the point. This factor therefore only includes components made up of the inter-reflected portion of the light (the point on the work surface cannot "see" any radiation directly from the ground).

<figure id="center_img">
<img src="./assets/sf3-8m.jpg" alt="Solar light factor SF3 for the reflected radiation component of the daylight in a room of 8 metres in depth with different window areas.">
<figcaption>Solar light factor SF3 for the reflected radiation component of the daylight in a room of 8 metres in depth with different window areas.</figcaption>
</figure>

### **Correction factors for solar light factors**

When a WinDoor is defined in the database, heat and light transmission values are entered for the current glazing type. Normally standard values that do not take account of dirt on the glazing are used, nor can correction be made for high local air pollution, which reduces insolation. Such circumstances are only of minor significance in solar heat calculations, but it may be important to take them into account with regard to daylight. A table of suggested values for the most important corrections can be found in: [Algorithms for calculating solar radiation and daylight.](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstr-ling-og-dagslys)


### **Light from shading (or shutters) SF4**

If shading is used and the light is "diffused" after it passes the shading, *SF4* is used for the shading, cf. figure. As with the other sunlight factors, *SF4* is specified for a window with a transmittance of 1, as transmission factors are included in data for WinDoors and shading. It should be noted that the shading factor does not affect the size of *SF4*.

The light from the shading represents a direct component SF4<sub>d</sub> and an inter-reflected component SF4<sub>i</sub> in the illuminance, which can be determined separately as described in: [Algorithms for calculating solar radiation and daylight.](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstr-ling-og-dagslys)

<figure id="center_img">
<img src="./assets/sf4-8m.jpg" alt="Solar light factor SF4 for sunlight diffused through shading for a room of 8 metres in depth with different window percentages.">
<figcaption>Solar light factor SF4 for sunlight diffused through shading for a room of 8 metres in depth with different window percentages.</figcaption>
</figure>

