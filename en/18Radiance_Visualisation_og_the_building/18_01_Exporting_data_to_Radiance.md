<link rel="stylesheet" href="../style.css">

# Eksport af data til Radiance
It is possible to export the building model to *Radiance* for visualization of the building and *ray tracing* of daylight and artificial lighting conditions. The building model is exported by clicking: *<u>F</u>ile* | *Save as Radiance*.

[*Radiance*](https://radsite.lbl.gov/radiance/HOME.html) was originally developed on UNIX workstations, but a modified version, [*Desktop Radiance*](https://radsite.lbl.gov/radiance/desktop.html), has been developed for use in Windows NT/9x. *Radiance* is also part of the *[Adeline](https://www.ibp.fraunhofer.de/wt/adeline.html)* software suite for designing lighting conditions in buildings. The Adeline suite was developed under the [International Energy Agency's (IEA) Solar Heating and Cooling Programme](https://www.iea-shc.org/) Task 12 and can be run on a PC.

If a color has been defined as a surface property, it will be transferred when the model is exported to *Radiance*. If a color has not been defined, the surfaces will be assigned random colors in such a way that all faces have a different color.

<figure id="center_img">
<img src="./assets/RADIANCE.GIF" alt="Example of a picture generated with Radiance on the basis of a model exported from BSim.">
<figcaption>Example of a picture generated with Radiance on the basis of a model exported from BSim.</figcaption>
</figure>
