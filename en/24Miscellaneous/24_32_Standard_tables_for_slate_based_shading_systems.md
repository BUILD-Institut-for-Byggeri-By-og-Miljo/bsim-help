<link rel="stylesheet" href="../style.css">

# Standard tables for slate based shading systems

In earlier versions of BSim, the description of solar shading was limited to a fixed shading factor. From version 6,9,10,20 it has been possible to define shading systems where the shading factor varies both dependant on the tilt of the slates and on the time of the day and the year. The position of the sun in the sky compared to the orientation of the window can be described by the profile angle, which is the projection of the solar height on a vertical plane perpendicular to the window. For every hour of the year, BSim calculate the profile angle and from this it is possible to calculate how the shading factor or the g-value (total solar heat transmittance) for the entire system varies over the day and the year. It should be noted that while the g-value in datasheets are normally given for solar radiation perpendicular to the glass pane, it is given for any angle of incidence of the direct radiation here - like for diffuse radiation.

 

#### **Use of user-defined table values**

BSim can simulate normal Venetian blinds located internally or externally as shading factors (g-values) are pre-defined in build-in tables for Venetian blinds having different values of reflectance. It is a premise that the Venetian blind is being used in combination with a low energy glazing. To be able to simulate other type of slate based shading devices, e.g. glazed slates, a possibility for the user to define their own slate based shading devices in external tables. The tables must contain information about the g-value as a function of the tilt of the slates, the profile angle and a reduction factor for daylight as a function of the slate tilt (overcast sky). The format of the tables is given in the figure below.

<figure id="center_img">
<img src="./assets/shading_externalFile.png" alt="">
<figcaption></figcaption>
</figure>


*Actual solar energy transmittance for slate based solar shading (in combination with the actual glazing type).*

The description of user defined table for control of slate based solar shading devices in BSim. The control of the type *BlindCtrl.* The table must be made as a text file with columns separated by a space or a tab character. Only the numbers within the shown frame must be part of the table.
