# Natural convection at surfaces

<p align="center">
Carsten Rode <br> 
Institute for Buildings and Energy (BYGDTU) <br>  
Technical University of Denmark <br>  
www.byg.dtu.dk <br>
August 3, 2000 <br>
</p>
 

### **Heat Transfer Coefficient**

The orthodox expressions to find the heat transfer coefficient, α<sub>c</sub>, W/m²K are based on empirical correlations, mainly using dimensionless numbers.

The expressions also employ a characteristic length *L*, which for vertical surfaces (walls) is the height of the surface [m]. For horizontal surfaces (floors and ceilings), *L* can be taken as the average of the length and width (the square root of the area may be a reasonable and simpler approximation, although it is not probably not strictly "legal").

Then the dimensionless numbers must be calculated. (Note: The following is according to the conventional theory. *A simpler way* to calculate the α<sub>c</sub>‘s, is described next page.)

First, the Grashof number, *Gr*, must be calculated.

 $$ Gr = \frac{g \cdot \beta \cdot \Delta T \cdot L^3}{v^2} $$

For air at normal room temperature (20°C), this can be simplified as:

$$ Gr = \frac{9.81 \cdot 0.00341 \cdot \Delta T \cdot L^3}{(1.511\cdot 10^{-5})^2} = 1.47 \cdot 10^8 \cdot \Delta T \cdot L^3 $$

Gr must be multiplied with the Prandtl-number (*Pr*), which for air is 0,713, to achieve the Rayleigh-number (*Ra = Gr · Pr ≅ 10<sup>8</sup> · ΔT · L<sup>3</sup>*).

Now some expressions exist to calculate a Nusselt-number, *Nu*.

For vertical surfaces:

*   Laminar conditions (*Ra ≤ 10<sup>9</sup>*): *Nu = 0.59 · Ra<sup>1/4</sup>* Turbulent conditions *(Ra > 10<sup>9</sup>): Nu = 0.13 · Ra<sup>1/3</sup>*

For horizontal surfaces with upward heat flow (warm floors or cold ceilings):

*   Laminar conditions (*Ra ≤* 2 · 10<sup>7</sup>): *Nu* = 0.54 · *Ra<sup>1/4</sup>*

*   Turbulent conditions (*Ra* > 2 · 10<sup>7</sup>): *Nu* = 0.14 · *Ra<sup>1/3</sup>*

For horizontal surfaces with downward heat flow (cold floors or warm roofs):

*   Laminar conditions: *Nu* = 0.27 · *Ra<sup>1/4</sup>*

(Really, this is only valid if *Ra* does not exceed 3 · 10<sup>10</sup>. However, there are no other solutions, should that not be the case.)

Finally, for determination of the heat transfer coefficient, the *Nu*-number should be transformed into α<sub>c</sub>:

$$ \alpha_c = \frac{\lambda}{L} \cdot Nu  $$

For air at normal room temperature, this is:

$$ \alpha_c = \frac{0.0257}{L} \cdot Nu  $$

### **A simpler way**

All the above has to be carried out for every surface and every time step. It may take too long time to calculate. If it can be quickly determined for the actual surfaces, what are the conditions for the flow to be either turbulent or laminar, then some computational work can be saved. This can be done by looking at some of the equations above, but now in a reverse order, so the criteria are expressed directly by a ΔT~L relation. Also, some simpler expressions may be used to calculate α<sub>c</sub>, so the calculation of dimensionless numbers can be saved

#### **For vertical surfaces:**

Laminar conditions, small surfaces (Δ*T* *≤* 9.5/L<sup>3</sup>):

$$ \alpha_c = 1.42 \left(\frac{\Delta T}{L} \right)^{0.25} \; W/m^2 K $$

Turbulent conditions, large surfaces (Δ*T* > 9.5/L<sup>3</sup>):

$$ \alpha_c = 1.31 \cdot (\Delta T)^{0.33} \; W/m^2 K  $$

 

#### **For horizontal surfaces with upward heat flow** (warm floors or cold ceilings):

Laminar conditions, small surfaces (Δ*T* *≤* 0.19/L<sup>3</sup>):

$$ \alpha_c = 1.32 \left(\frac{\Delta T}{L} \right)^{0.25} \; W/m^2 K  $$

Turbulent conditions, large surfaces (Δ*T* > 0.19/L<sup>3</sup>):

$$ \alpha_c = 1.52 \cdot (\Delta T)^{0.33} \; W/m^2 K  $$

#### **For horizontal surfaces with downward heat flow** (cold floors or warm ceilings): Only laminar conditions:

$$ \alpha_c = 0.59 \left(\frac{\Delta T}{L} \right)^{0.25} \; W/m^2 K  $$

(Reference for the above expressions: ASHRAE Fundamentals Handbook, 2001)

The above equations are used rather directly in *BSim2000*. They are the convective heat transfer coefficients that are used in parallel to the algorithms for heat transfer by radiation when the option *Longwave Radiation* is chosen for the simulation.

###   **Moisture Transfer Coefficient**

The surface moisture transfer coefficient β can be calculated from the heat transfer coefficient using the Lewis relation. For the moisture transfer coefficient, two different variations exist: β<sub>v</sub> or β<sub>p</sub>, depending on which driving potential for water vapour transfer one is using: vapour concentration, *v*, or vapour pressure, *p*. The Lewis relation reads:

$$ \beta_{v} = \frac{\alpha_c}{\rho \cdot c} \; m/s $$

Where ρ·c is the product of density and specific heat for air, which at 20°C is 1,205 kg/m³ · 1007 J/kg·K = 1213 J/m³·K.

The relationship between β<sub>v</sub> and β<sub>p</sub> is:

$$ \beta_{p} = \frac{\beta_{v}}{R_{v} \cdot T} \;  kg/(m^2\cdot s\cdot Pa) $$

Where R<sub>v</sub> is the gas constant for water vapour (461,5 J/kg·K), and *T* is the absolute temperature. Thus the following relation holds for β<sub>p</sub>:

$$ \beta_p = \frac{\alpha_c}{5.60\cdot 10^5 \cdot T} $$

At normal room temperature this can be further simplified as: β<sub>p</sub> = 6,1 · 10<sup>-9 </sup>· α<sub>c</sub> (with the units for β<sub>p</sub> and α<sub>c</sub> used above).

The surface resistance for convective humidity transfer Z<sub>surf</sub> can be found as 1/β<sub>p</sub>.
