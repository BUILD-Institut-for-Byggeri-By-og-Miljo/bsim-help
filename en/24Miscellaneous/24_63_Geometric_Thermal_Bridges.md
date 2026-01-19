<link rel="stylesheet" href="../style.css">

# Geometric thermal bridges

It is possible to take into account the additional heat loss due to geometric thermal bridges during the simulations in tsbi5.

Thermal bridges are handled according to the rules given in the Danish Standard DS418. A adjustment of the heat loss through internal areas are made according to the difference ration between external and interna face area.

<figure id="center_img">
<img src="./assets/thermal_bridge.gif" alt="The internal area is 6,4 m² and the external 11,2 m², this gives a geometric thermal bridge.">
<figcaption>The internal area is 6,4 m² and the external 11,2 m², this gives a geometric thermal bridge.</figcaption>
</figure>


Correction of the heat loss is done as a percentage increase of the λ-value and the heat capacity <br> (r $\cdot$ C<sub>p</sub>). Calculation of the corrected U-values are based on sub-surfaces. It can thus have great influence if a surface has been splitted near an edge and thereby have a much larger external than internal area.

The only exception, according to DS418, is the joint between facade, floor and foundation. Here the calculation of the heat loss must be done through the internal surface areas. The thermal bridge along this joint should be treated as a [constructive (or linear) thermal bridge](https://help.bsim.dk/support/kb/articles/NmdK5OW0/kuldebroer).
