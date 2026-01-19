<link rel="stylesheet" href="../style.css">

# SimDb - Glazing, Additional data 

At tab *Additional* data needed to use the model for simulation of the glass temperature is found. This model takes into account the absorption of solar heat in the glazings in a better way than the old model, which calculated the glass temperature based on the dark U-value.

<figure id="center_img">
<img src="./assets/tab_additional.gif" alt="Tab Additional for definition of input data to detailed simulations of the glazing temperature.">
<figcaption>Tab Additional for definition of input data to detailed simulations of the glazing temperature.</figcaption>
</figure>


*   *Direct Solar Radiation*

    *   *Transmittance* is the direct transmittance for solar radiation perpendicular to the glazing, say without secondary heat transfer because of the heating of the glass. The direct transmittance is less than *Heat Transmittance* (the G-value) given on the *Glazing* tab.

*   *Pane*
    *   *Reflectance* is the reflectance for face 1 and face 2 of the glazing. Face 1 is the upper finish of the actual WinDoor in the tree structure - in external walls normally facing indoors. If only the total reflectance for all glass layers in the glazing is known, this value can be put on face 1, and BSim will assume an even split between the two faces.   
        *   The value can be found in data sheets from the glazing manufacturer.
    *   *Absorptance* is the absorptance for face 1 and face 2 of the glazing. Input are treated as described under reflectance.
*   *Source of Data* is a text field for documentation of the source of the given data.

In the calculation of the glazing temperature it is assumed that all layers of the glazing is the same, and reflectance and absorptance is the same for all glass layers (half of the given values).

