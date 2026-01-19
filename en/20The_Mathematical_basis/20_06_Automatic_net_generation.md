<link rel="stylesheet" href="../style.css">

# Automatic net generation

<div style="text-align:center">

*Carsten Rode*  
*Institute for Buildings and Energy (BYGDTU)*  
*Technical University of Denmark*  
*[www.byg.dtu.dk](https://construct.dtu.dk/)*  
*November 2001*

</div>

**Moisture calculations in constructions with multiple material and/or moisture resistance**

An automatic generation of the calculation grid in connection with moisture calculations takes place when more materials are located near the interal surface and/or when a vapour barrier or layer of paint occurs before or between the material layers.

1. By moving from one material to an other in the order of material layers, the automatic sub-division of control volumes continues, but with a new development in the layer thickness. If the border zone between layer I and II analysed. If s<sub>I</sub> is the thickness of the first control volume after the layer border would have had, if material I has continued, the thickness of the first control volume in material II is:

$$ 
S_{II} = \frac{s_{36.7 \%, II}}{s_{36.7 \%, I}} \cdot s_I \tag{1} 
$$  
where s36,7% is the effective moisture penetration depth of the materials, mineral wool behind a gypsum board will for example have much higher control volumes than normal.

2. For materials behind "single moisture resistance", e.g. layers of paint on the surface facing the indoor environment or a vapour barrier between two material layers in the construction do not need to have a thickness of the control volumes a slender as else. The following layer thickness is used for the first control volume behind a single moisture resistance:

$$ 
s_{II} = first \cdot Z_{VR} \cdot \delta_{II} \tag{2} $$  
- where s<sub>II</sub> is the layer thickness of the first control volume after the moisture resistance.  
- first is the part of the effective moisture penetration depth normally attached to the first control volume according to the previous definitions in the automatic net generation algorithm.   
- Z<sub>VR</sub> is the moisture resistance (of paints, vapour barriers or similar), Pa·m²·s/kg   
- δ<sub>II</sub> is the vaopur permability of the layer behind the moisture resistance, kg/(m·s·Pa)

The thickness of the control volume can thus be scaled up as usual according to the selected "Factor".

s<sub>II</sub> can be equal to the maximum calculated size and the in paragraph 1 found value (if there is an other material in front of the vapour barrier).

Finally, the thickness of the control volume must be equal to the minimum of the above found values and the value normally used in tsbi5 according to desired "Layer thick" on the *Options* tab of tsbi5.

