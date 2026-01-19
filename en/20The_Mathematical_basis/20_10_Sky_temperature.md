<link rel="stylesheet" href="../style.css">

# Sky Temperature

The sky temperature is calculated as:

$$ 
T_{sky} \left((1-cc) \cdot 9.36 e^{-6} \cdot T_{e}^{6} + cc \cdot T_{d}^{4}\right)^{0.25} \tag{1} 
$$

where

*cc*     is the cloud cover fraction, [0-1].   
*T<sub>e</sub>*     is the ambient air temperature in degree Kelvin.  
*T<sub>d</sub>*   is the dew point temperature of the ambient air in degree Kelvin.

 
Long wave radiative exchange from the exterior surfaces of the building is simulated to this temperature.

