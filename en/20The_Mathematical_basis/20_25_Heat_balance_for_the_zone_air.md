<link rel="stylesheet" href="../style.css">

# Heat balance for the zone air

The heat balance for the air in a zone does not make allowance for the heat capacity of the air which means that the air momentarily adjusts itself to alterations in the surroundings. The following influences on the air's thermal condition are differentiated:

*   heat flows from adjoining constructions

*   heat flows through thermal bridges

*   heat flows through windoors

*   solar radiation through windoors (of which only a limited amount is assumed to be induced to the air)

*   thermal contribution from various heat loads and systems

*   air penetration from outdoor air (infiltration, venting)

*   air supplied from ventilation systems

*   air transferred by from other zones (mixing)

In connection with the contributions to the heat balance from the various forms for air flows, it must be noted that the program always ensures that there is air balance for each zone, i.e. that equally large air volumes in the zone are supplied and extracted. User-selected data, which would lead to imbalance will thus bring about an increase of the air quantity by infiltration or exfiltration so that balance is achieved.

 

#### **Heat flows from internal and external constructions**

Heat flows between the respective construction surfaces and the air are transferred via the surface film coefficients of the surfaces, here defined by the combined thermal resistances by convection and by radiation, which are specified for each individual surface. The transferred power to the air is calculated from the formula :

$$ \Phi_{air, constr} = \sum_{constructions} A_{surf} \frac{T_{surf} - T_{air}}{R_{surf}} \tag{1} $$

Φ<sub>air,constr</sub> is the induced effect to the air from all surfaces, W

A<sub>surf </sub>is the area of a surface, m²

T<sub>surf </sub>is the temperature of a surface, K

T<sub>air</sub> is the temperature of the air in the actual zone, K

R<sub>surf </sub>is the thermal surface resistance for a surface, m²K/W

 

#### **Heat flow through thermal bridges**

These heat flows are transferred directly between the air in the current zone and the air on the opposite side of the construction containing the thermal bridge. This means that the heat conduction through the thermal bridge is not considered and hereby the heat storing capabilities of the thermal bridge neither. For each construction in the thermal zone a total thermal bridge coefficient is calculated in W/K. The effect transferred to the zone air can be determined from the following formula:

$$ \Phi_{thermal \; bridges} = \sum_{constructions} \omega_{cold \; bridges} \left( T_{air,side2} - T_{air,side1} \right) \tag{2} $$

Φ<sub>thermal bridges </sub>is the total effect transferred to the air due to thermal bridges, W

ω<sub>thermal bridges </sub>is the total heat loss coefficient due to thermal bridges for the current construction, W/K

T<sub>air,side1 </sub>is the air temperature in the current zone, K

T<sub>air,side2 </sub>is the air temperature on the opposite side of the construction, K

 

#### **Heat flows through windoors**

Windoors is not attributed any thermal capacity, and heat flows through these types of sub-surfaces are assumed to take place between the air nodes on each side of the sub-surface, so that the heat flow from zone 1 to zone 2 (positive or negative) are calculated from the formula:

$$ \Phi_{air,win/door} = \sum_{windows \; + \; doors} A_{win/door} \cdot U_{win/door} \cdot \left( T_1 - T_2 \right) \tag{3} $$

Φ<sub>air,win/door </sub>is the induced power by transmission through windoors, W

U<sub>win/door </sub>is the sub-surface's thermal transmission coefficient, W/m² K

T<sub>1 </sub>and T<sub>2 </sub>are the air temperatures in the zones on respectively face 1 and 2, °C

 

The zone at face 2 of surfaces will often be the virtual zone, outside air, but the calculation principle will be the same as for interior windoors. The windoor's U-value is calculated on the basis of an area-weighting of the U-values for glass and frame.

 

#### **Solar radiation**

The incoming solar radiation is distributed, for each zone, between the surfaces and the air as indicated in the Solar distribution menu, under the ThermalZone menu, cf formula:

$$ \Phi_{air, sol} = f_{sol \; - \; air}  \Phi_{sol} \tag{4} $$

Φ<sub>air,sol </sub>is the induced power from solar radiation to the zone air, W

f<sub>sol - air </sub>is the fraction of solar radiation given to the air,

Φ<sub>sol </sub>is the total induced power from the solar radiation to the zone, W

The calculation of Φ<sub>sol</sub> is described in [[Petersen, 1982](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur)], [[Muneer, 1989](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur)] and [[Lund, 1979](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur)], whilst the distribution of the solar radiation between surfaces and air is described in "Description of the building model's individual elements".

 

#### **Air supplied to the zone**

The air supplied to the zone can originate from four different types of '[systems](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview-systemer)' entitled: [Mixing](https://help.bsim.dk/support/kb/articles/Rm8JEd94/mixing-system), [infiltration](https://help.bsim.dk/support/kb/articles/Rm8JRZ94/infiltration-system), [venting](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system) and (mechanical) [ventilation](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation-system). The effect of each of these individual contributions on the air's heat balance depends on the volume flow and on the temperature of the air which is supplied to the zone. In the heat balance, each term is determined individually, since they are all calculated on the basis of a formula corresponding to next formula allowing for the variations which are determined by schedules for the individual systems.:

 

$$ \Phi_{air,vent} = n_{vent} V (\rho c_p) (T_{vent} - T_{air}) \tag{5} $$

Φ<sub>air,vent </sub>is the heat supplied by the ventilation air, W

n<sub>vent </sub>is the air change in the zone by ventilation, s<sup>-1</sup>

V is the volume of the zone, m³

ρ is the density of the air, kg/m³

c<sub>p</sub> is the specific thermal capacity of air, J/kg K

When calculating the air's density no allowance is made for the actual temperature, since a constant density is anticipated, calculated at 15 °C and on the basis of the actual height above sea level.

 

#### **Heat contribution from systems**

These contributions originate from the following systems: people, equipment, lighting as well as actual heating and cooling systems in the zone. The systems' thermal influence on the air in the zone varies according to defined schedules, including the actual systems' control strategies which aim to maintain the desired thermal condition. During the description of systems, it is also defined how great a proportion of the heat dissipation is induced to the air, and how great a proportion is induced to the zone's surfaces by longwave radiation. In the present description, all the systems' heat dissipation is considered as one, as described by the magnitude Fair,syst.

#### **The zone's total heat balance**

The zone's total heat balance can now be defined by setting the sum of all the above mentioned heat contributions equal to zero, since with the stationary calculation method, heat will not be accumulated in the zone's air. On this basis, the equation in the next formula can be set up for calculation of the air temperature in the actual time-step

$$
\begin{aligned}
T_{\text{air}} \Bigg[
& \sum_{\text{constructions}} \frac{A_{\text{surf}}}{R_{\text{surf}}}
+ \sum_{\text{windoor}} A_{\text{windoor}} U_{\text{windoor}} \\
& + V (\rho c_p)_{\text{air}}
  \left( n_{\text{outdoor}} + \sum_{\text{zone}} n_{\text{zone}} \right)
\Bigg] \\
= {} &
\sum_{\text{constructions}} \frac{A_{\text{surf}}}{R_{\text{surf}}}
+ \sum_{\text{windoor}} A_{\text{windoor}} U_{\text{windoor}} \\
& + V (\rho c_p)_{\text{air}}
  \left(
    n_{\text{outdoor}} T_{\text{outdoor}}
    + \sum_{\text{zone}} n_{\text{zone}} T_{\text{zone}}
  \right) \\
& + \Phi_{\text{air,sol}}
+ \Phi_{\text{air,vent}}
+ \Phi_{\text{air,syst}}
+ \Phi_{\text{thermal bridges}}
\tag{6}
\end{aligned}
$$
