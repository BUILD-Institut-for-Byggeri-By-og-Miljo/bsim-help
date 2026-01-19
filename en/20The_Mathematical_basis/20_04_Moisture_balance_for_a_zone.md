<link rel="stylesheet" href="../style.css">

# Moisture balance for a zone
The moisture balance for a zone is calculated according to the same principle as for the zone's heat balance, although slightly fewer sources are reckoned with for moisture exchange. The zone's moisture contribution arises from people, other moisture loads in the zone, as well as the moisture contribution which can be in connection with three forms of air induction: [infiltration](https://help.bsim.dk/support/kb/articles/Rm8JRZ94/infiltration-system), [venting](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system) and (mechanical) [ventilation](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation-system) and finally, the moisture contribution which can arise by induction of air from neighboring zones, [mixing](https://help.bsim.dk/support/kb/articles/Rm8JEd94/mixing-system). In the simple moisture model, dehumidification of the room by condensation in the zone is not reckoned with, neither on cold surfaces of WinDoors or constructions nor on the surface of the cooling coil. These transport functions can be handled in a[ detailed model](https://help.bsim.dk/support/kb/articles/vW5alXW4/detailed-moisture-balance) for moisture transport in the construction available in BSim from version 2002.

The most significant difference, seen in comparison with the principle for setting up the heat balance, is the fact that no consideration is made regarding the exchange of moisture with the constructions' materials due to their hygroscopic properties.

 

#### **Moisture production in the zone**

Moisture induction from people and different forms of humidification is gathered in one parameter, G<sub>air,load</sub>, which indicates the mass of aqueous vapor induced to the air per time unit (kg/h). This volume is controlled by the moisture producing systems' schedules and controls.

 

#### **Moisture supplied by ventilation**

During air exchange with outside air, a complete mixture is assumed before the air leaves the zone. The moisture induction is therefore:

$$ 
G_{air, vent} = n_{ventin} \cdot V \cdot \rho_{air} \cdot (x_{ventin} - x_{air}) \tag{1} 
$$    

*G<sub>air,load</sub>* is the heat induction during air exchange with outside air, kg/h

*n<sub>ventin</sub>* is the air exchange by supply air ventilation (inlet), 1/h

*x<sub>ventin</sub>*  is the moisture content of the ventilation supply air, kg/kg

*x<sub>air</sub>* is the air's moisture content in the zone, kg/kg

 

#### **Moisture induction by mixing from other thermal zones or spaces**

The moisture supplied by air from other zones is calculated in a corresponding manner:

$$ 
G_{air, zones} = \sum_{zones} n_{mixin} \cdot V \cdot \rho_{air} \cdot (x_{mixin} - x_{air}) \tag{2} 
$$ 

*G<sub>air,mixin </sub>* is the moisture supplied by air from other zones, kg/h

*n<sub>mixin </sub>* is the air change by mixing into the zone, 1/h

*x<sub>mixin </sub>* is the moisture content of the induced air from neighboring zones, kg/kg

*x<sub>air </sub>* is the air's moisture content in the zone, kg/kg

 

#### **The zone's total moisture balance**

By adding the contributions to the zone's moisture balance together and setting the sum to 0 (corresponding to the zone's air not being reckoned as having any moisture capacity), the following expression is obtained for the moisture content in the zone:


$$
\begin{aligned}
x_{\text{air}} &= 
\frac{
  G_{\text{air,load}} + G_{\text{air,vent}} + G_{\text{air,zones}}
}{
  V \rho_{\text{air}} \left( n_{\text{ventout}} + \sum_{\text{zones}} n_{\text{mixout}} \right)
} \\[1mm]
&= 
\frac{
  G_{\text{air,load}} + V \rho_{\text{air}} \Bigl( n_{\text{vent}} \cdot x_{\text{vent}} + \sum_{\text{zones}} n_{\text{mixin}} \cdot x_{\text{mixin}} \Bigr)
}{
  V \rho_{\text{air}} \left( n_{\text{ventout}} + \sum_{\text{zones}} n_{\text{mixout}} \right)
}
\end{aligned}
\qquad (3)
$$

where  
*x<sub>air</sub>* is the resulting moisture content in the zone's air, kg/kg   
*n<sub>ventout</sub>* is the air change by ventilation (out), 1/h   
*n<sub>mixout</sub>* is the air change by mixing (out), 1/h

Note that the individual contributions to the ventilation need not each be in balance. For example, it is possible to define mixing, so that air is only induced from the neighboring zones, whilst no air goes from the actual zone to any neighboring zone. This will, for example, be realistic for a room which is equipped with mechanical exhaust.
