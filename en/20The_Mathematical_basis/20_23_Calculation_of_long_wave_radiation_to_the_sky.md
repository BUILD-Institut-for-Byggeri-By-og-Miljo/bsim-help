<link rel="stylesheet" href="../style.css">

# Calculation of long wave radiation to the sky

<div style="text-align:center">

Carsten Rode  <br>
BYG*DTU  <br>
2001

</div>

$$ \text{TempFactSky} = \frac{\left( t_{\text{new}}[1] + 273{,}15 + th_{\text{abs}} \right)^{3}}{2} \tag{1} $$
$$ \text{TempFactOut} = \frac{\left( t_{\text{new}}[1] - t_{\text{out}} + 546{,}3 \right)^{3}}{2} \tag{2} $$

where

$$ th_{abs} = \left( (1-cc) \cdot 9{,}36 e^{-6} t_{out,abs}^6 + cc \cdot td_{abs} \right)^{0{,}25} \tag{3} $$

 is the absolute outdoor dew point temperature,

$$ td_{abs} = td + 273{,}15 \tag{4} $$

 is the outdoor dry bulb temperature,

$$ td_{out,abs} = t_{out} + 273{,}15 \tag{5} $$

cc is the cloud cover as decimal number.

Heat transfer coefficient for radiation exchange between the exterior surface and the sky.

$$ h_{rad,sky} = \frac{1 + \cos (h)}{2} + (1 - \varepsilon_{ground}) \cdot \frac{1 - \cos (h)}{2} \cdot \varepsilon_{warm} \\ \cdot \sigma \cdot TempFactSky \tag{6} $$

where

ε<sub>warm </sub>the is long wave emissivity of exterior surface,  
σ is Stefan-Boltzmann constant (5,6697e<sup>-8</sup> W/m²K<sup>4</sup>),  
ε<sub>ground</sub> is the long wave emissivity of exterior ground (0,90).

In the heat balance of the exterior surface the following are added to the coefficients of the equation system for the first exterior node point:

$$ b[1] + = h_{rad,sky} + h_{rad,out} \tag{7} $$

$$ d[1]+ = h_{rad,out} \cdot t_{out} + h_{rad,sky} \cdot (th_{abs} + 273{,}15) \tag{8} $$

####  

#### **Outdoor surface convection coefficient, dependent on wind speed**

Next to calculating the long wave radiation effects, the heat transfers coefficient between the outdoor air and the first node point on the exterior side of the construction is calculated as:

$$ h[1] = \frac{1}{outside[1] \cdot m[1] + \frac{1}{h_{conv} + rx[1]}} \tag{9} $$

where outside[1]*m[1] is the thermal resistance in the between from the node point to the surface, if the node point is not exactly at the surface (in tsbi5, m[1] is zero), rx[1] is possible "extra" surface resistance at the surface - normally zero, and h<sub>conv</sub> is calculated from the wind speed v (m/s) as:

if v ≤ 5 then

$$ h_{conv} = 5{,}82 + 3{,}96 \cdot v \tag{10} $$

else *h<sub>conv</sub>* = 7.68 $\cdot$ v<sup>0.75</sup>

#### **Both long wave radiation and convection**

Normally, both long wave radiation and heat transfer by convection should be calculated in the same calculation, and then the equations from the end of this note's section "Calculation of long wave radiation to the sky" become:

$$ b[1]+ = h[1] + h_{rad,sky} + h_{rad,out} + h[2] \tag{11} $$

$$ d[1]+ = \left( h[1] + h_{rad,out} \right) \cdot t_{out} + h_{rad,sky} \cdot (th_{abs} - 273{,}15) \tag{12} $$

With h[1] calculated as in the section "Outdoor surface convection coefficient dependent on wind speed".

See also
*   Calculation of [the sky temperature](https://help.bsim.dk/support/kb/articles/wQXx3oQK/himmeltemperatur).
