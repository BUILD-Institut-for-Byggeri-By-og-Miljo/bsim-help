<link rel="stylesheet" href="../style.css">

# Parameters for Natural Ventilation

<div style="text-align:center">

The module to simulate natural ventilation using the multi-zone model (mzm) is for the time being in beta test and results obtained using this module must, as always, be looked upon with natural skepticism.

Any feed-back to the module given at [bsim-support@sbi.dk](mailto:bsim-support@sbi.dk) is appreciated!

</div>
 

The parameter Cd is central for the simulation of natural ventilation using the multi-zone model (mzm) and can be determined according to [By og Byg (SBi), Direction 202](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur) (In Danish). The inlet air handling unit constant Ka are used to calculate the penetration depth for the inlet air through a opening. Ka can be determined according to the [Danvak basic book, chapter 7](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur) (In Danish).

 

#### **Cd - Discharge coefficient**

The value can be determined according to [By og Byg (SBi), Direction 202](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur), page 70-71 (typical values range from 0.62 to 0.70):

 

**Resistance, contraction and discharge coefficients**

The volume flow through an opening is not only dependant on the pressure difference but also friction, contraction and opening area.

The friction is characterized by the resistance factor ζ. If the resistance factor is known, the flow speed coefficient can be determined from:

$$ C_v = \frac{1}{\sqrt{1+\zeta}} \tag{1} $$

For the discharge coefficient is found (according to equation 9.3):

$$ C_d = C_v C_k = \frac{C_k}{\sqrt{1+\zeta}} \tag{2} $$

For a normal ventilation opening without ducts the friction will be limited and correspond to a resistance value of 0.05 - 0.1. The contraction coefficient is 0.6 - 0.7 if the opening have sharp edges and it approaches 1.0 if the opening have rounded edges.

For more complicated openings the friction, and discharge coefficient can be determined from the average flow speed of volume flow, measured as a function of the pressure difference over the opening. The average flow speed v<sub>m</sub> in the opening is determined from:

$$ v_m = v_k \left( \frac{A_k}{A} \right) = v_k C_k = \frac{q_v}{A} \tag{3} $$

From equation 9.1, 9.23 and 9.31 the following correspondence between resistance, pressure difference and air velocity can be found:

$$ \Delta p = ½ \rho \left( \frac{v_k}{C_v} \right)^2 = ½ \rho v_{k}^2 (1+\zeta) = ½ \rho \frac{v_m^2 (1+\zeta)}{C_k^2} $$

or:

$$ 1 + \zeta = \frac{2 \Delta p}{\rho} \cdot \frac{1}{v_k^2} = \frac{2 \Delta p}{\rho} \left( \frac{C_k}{v_m} \right)^2 \tag{4} $$

For the discharge coefficient is found by inserting in equation 9.32 in equation 9.30:

$$ C_d = C_k \frac{v_k}{\sqrt{\frac{2 \Delta p}{\rho}}} = \frac{v_m}{\sqrt{\frac{2 \Delta p}{\rho}}} \tag{5} $$

From the volume flow can, by inserting equation 9.31 into equation 9.32 and 9.33, the following connection between resistance value, discharge coefficient and volume flow be found:

$$ 1 + \zeta = \frac{2 \Delta p}{\rho} \left( \frac{C_k A}{q_v} \right)^2 \tag{6} $$

$$ C_d = \frac{1}{\sqrt{\frac{2 \Delta p}{\rho}}} \cdot \frac{q_v}{A} \tag{7} $$

For WinDoor openings, where the volume flow can be controlled by an operate-able part of the WinDoor, the literature sometimes give large resistance numbers which varies by the degree of opening in a way that the larges resistance number occurs at the smallest degree of opening. The high, varying, values is caused by the fact that the resistance number in these cases includes, not only friction, but also remaining dynamic pressure in the air beam plus the contraction coefficient and the reduction in air volume through the fully open WinDoor.

For WinDoor openings an discharge coefficient C<sub>d</sub> = 0.7 is often assumed.

For inlet and outlet openings the discharge coefficient is determined from a coupling between pressure difference and average air velocity. The outlet opening consists as a example of a grid towards the room, a outlet duct and a grid in the chimney. With a measured average air velocity of 1.0 m/s and a pressure difference at 11 Pa C<sub>d</sub> is found from equation 9.33:

$$ C_d = \frac{1.0}{\sqrt{\frac{2 \cdot 11}{1.2}}} = 0.23 $$

Inlet openings, where the air passes by a radiator, have the same average air velocity at the same pressure difference as outlet openings and thus the same discharge coefficient.

Read more in [By og Byg (SBi) Direction 202](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur) (In Danish).

 

#### **Inlet air handling unit constant Ka**

The value is determined according to [Danvak basic book, chapter 7](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur) (In Danish) where further explanations and constants can be found in the chapter *Luftfordeling i rum (Air distribution in rooms)* section *Luftstråler (Air beams).* The inlet air handling unit constant Ka are used to calculate the penetration depth for the inlet air through a opening.

| **Opening** | **Conditions** | **Ka** |
|------------|---------------|--------|
| Circular | 2,5 m/s < v<sub>0</sub> < 7,5 m/s<br>7,5 m/s < v<sub>0</sub> < 50 m/s | 8,0<br>10,0 |
| Rectangular<br>distance x > 6 multiplied by width | width/height = 1<br>width/height = 5<br>width/height = 10<br>width/height = 20 | 9,2<br>8,8<br>8,5<br>7,9 |


Read more in [Danvak basic book](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur) (In Danish).

