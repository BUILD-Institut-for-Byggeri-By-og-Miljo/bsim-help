<link rel="stylesheet" href="../style.css">

# Calculation of the glass temperature

It is assumed that there are always two layers of glass in a WinDoor. Their absorbtance is SA<sub>i</sub> and reflectance is SR<sub>i</sub> (this assumption is not valid for glass with hard coatings!!). These assumptions are valid for WinDoors with 1 and 2 layers of glass, but not for more glass layers.

In the model, different absorption and reflection at the two glass faces are used in the calculation of the absorbed amount of radiation as:

$$ q_{abs,i} = I_i (1 - SR_i)\cdot SA_i - I_j ((1-SR_j)SA_j)^2 \tag{1} $$

and similar for q<sub>abs1</sub>, with switched indexes.

If only the total absorbtance (SA) and reflectance (SR) are known, this can be given as input for *[face 1](https://help.bsim.dk/support/kb/articles/Rm8JDx94/simdb-glazing-additional-data)* of the WinDoor, and BSim assumes that the two glass layers are equal and their individual values is half of the given value. From these assumptions the absorbed radiation can be calculated as:

$$ q_{abs,0} = I_1 \left( 1 - \frac{SR}{2}\right) \frac{SA}{2} + I_0 \left( \left( 1 - \frac{SR}{2}\right) \frac{SA}{2} \right)^2 \tag{2} $$

 

It is assumed that all longwave radiation striking the glass is reflected. *This assumption is correct for normal building glass, but not for thin films, e.g. of teflon or plastic.*

I<sub>1</sub> and I<sub>0</sub> is the shortwave radiation striking face 0 respectively face 1 of the WinDoor. The shortwave radiation on a glass face facing the ambient is I<sub>direct</sub>+ I<sub>diffuce,sky</sub> + I<sub>diffuce,reflected</sub>. On glass faces facing a thermal zone the shortwave radiation is I<sub>light</sub> + I<sub>transmitted sun</sub>.

Now the temperature for the glass surfaces can be calculated as a heat balance to the air temperature next to the glass surface, including the amount of absorbed energy in the glass face:

$$ t_{g,i} = Ur_i (\Theta_1 - \Theta_0) - q_{abs,i} r_i + \Theta_i \tag{3} $$

This expression has the advantage that the temperature is equal to the temperature calculated using the old model as long as no radiation is striking the two glass faces.

The longwave radiation exchange from the surfaces of the glass and the surrounding surfaces an average emission coefficient (ε = 0,94) is used for all surfaces made of glass.

 

</div>
