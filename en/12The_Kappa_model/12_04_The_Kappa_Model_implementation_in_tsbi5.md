<link rel="stylesheet" href="../style.css">

# The Kappa Model - implementation in tsbi5

The "Kappa Model" has been implemented in accordance with the above description bearing the following conditions in mind.

#### **Supply temperature** **T<sub>0</sub>**

Temperature *T<sub>0</sub>* is referred to as the "supply temperature" above. If purely mechanical ventilation is involved and there is no infiltration in theory, *T<sub>0</sub>* corresponds to the supply temperature. If, on the other hand, the building is ventilated exclusively by natural means, *T<sub>0</sub>* corresponds to the temperature of the outdoor air. If mechanical ventilation is combined with window opening (natural ventilation), for example, the supply temperature will be a combination of the two quantities. In this case *T<sub>0</sub>* is determined as a weighted value from the supply temperature and the temperature of the outdoor air.

$$ T_0 = \frac{ m_{nat.} T_{nat.} + m_{mek.} T_{mek.} }{m_{mat.} + m_{mek.}} \tag{1} $$

where

m<sub>nat.      </sub>is the mass flow rate from natural ventilation (kg/s)  

m<sub>mek.    </sub>is the mass flow rate from balanced mechanical ventilation (kg/s)  

T<sub>nat.       </sub>is the temperature of "natural ventilation air", normally corresponding to outdoor air (°C)  

T<sub>mek. </sub>   is the supply temperature with balanced mechanical ventilation (°C)

 
If there is mechanical extraction only, the temperature of the outdoor air should be used.

In practice a contribution will also be made by infiltration, particularly in the case of tall, leaky buildings. The temperature of this air flow will be somewhere between the temperature of the outdoor air and the room air following passage and heat exchange through cracks. This contribution to *T<sub>0</sub>*, is being ignored for the time being, but it ought to be included in the long term.

Since the temperature of the exhaust air *T<sub>R</sub>* is dependent on, among other things, the convective heat flow along all internal surfaces – which in turn is dependent on the vertical temperature progression – an iterative calculation will be necessary. First *F<sub>konv</sub>*. is calculated using equation [(3)](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse) without taking account of the temperature gradient, then the temperature *T* is determined as a function of the height y using equation [(7)](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse), with *H*, *κ* and *T<sub>0</sub>* already being known. This makes it possible to carry out a corrected calculation of *F<sub>konv</sub>*, etc. If complete mixing is reckoned with, this procedure is unnecessary, which is why it is skipped in the software when κ = 1.0 to reduce the calculation time.

 

#### **Calculating convective heat flow**

The convective heat flow from floor to air is calculated using the temperature difference *T<sub>floor</sub> – T<sub>f</sub>* and the convective heat flow from ceiling to air as *T<sub>ceiling</sub> – T<sub>R</sub>*. In the case of wall surfaces the difference between the surface temperature of the wall and the air temperature at its mid-height is used. It should be possible to change the convective heat transfer coefficients. The values in table 2 can be used as the default for internal convective heat transfer coefficients.

| Building part |Convective heat transfer coefficient (W/m²°C) |
|-------------|---------------------------------------|
| Floor        | 2,5 |
| Ceiling        | 2,0 |
| Walls        | 3,0 |



*Table 2. Default convective heat transfer coefficients for determining the convective heat flow from internal surfaces. Reference: Hansen et al., 1987.*

 

#### **Default κ**

The default value of *κ* should be 1.0. With this default the calculation will correspond to the traditional assumption of complete mixing, so it will not be possible to make the calculation as if there were displacement ventilation unconsciously by mistake.

 

#### **Operative temperature**

The operative temperature must necessarily take account of the new temperature distribution. In *tsbi3* it was approximated as the average of the air temperature and the mean radiation temperature assuming complete mixing. In BSim the operative temperature is calculated as the average of the air temperature at a height of 1.1 m (default) and the mean radiation temperature. This means that the operative temperature will correspond to "the usual" when *κ* = 1.0. When it comes to calculations for atriums with several floors, the user can change the height at which the operative temperature is calculated.

 

#### **Unstable stratification**

If a calculation results in the exhaust temperature being less than the supply temperature and therefore the temperature at the floor, a temperature stratification would be unstable and break down. This means that the room air is being mixed, which can be simulated by setting *κ* = 1.0.

 

See also:

*   [Input in SimView](https://help.bsim.dk/support/kb/articles/yW1xGP9B/kappa-modellen-inddata)
*   [Background](https://help.bsim.dk/support/kb/articles/MQvEaomY/baggrund)
*   [Model description](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse)
*   [References](https://help.bsim.dk/support/kb/articles/gWKDo0mp/kappa-modellen---referencer)
*   [Nomenclature](https://help.bsim.dk/support/kb/articles/VmAOoa9a/kappa-modellen---nomenklatur)

