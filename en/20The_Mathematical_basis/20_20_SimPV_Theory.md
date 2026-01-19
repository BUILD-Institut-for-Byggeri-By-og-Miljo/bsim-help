<link rel="stylesheet" href="../style.css">

# SimPV Theory

In SimPV an estimate of the yield from a building integrated PV system is calculated for a given location on the building model. Shadows striking the solar cells, which will reduce the yield to almost zero, are taken into account The yield is calculated as :

$$ Q_{p v} = \varepsilon_t \cdot \left( I_{diffuse} + I_{direct} \cdot \left(1 - \frac{A_{shadow,active}}{A_{p v, active}} \right) \cdot f \right) \cdot A_{p v}F_{eff} \tag{1} $$

where:

*   *ε<sub>t </sub>* is the total efficiency (solar cells, converter, cable-losses etc.) in the solar cell system. The system efficiency can be obtained using SimDb from the materials part of the database in table 9.

*   *I<sub>diffuse</sub>* is the diffuse solar power on the PV-array.

*   *I<sub>direct </sub>* is the direct solar power on the PV-array.

*   *f* is a factor giving is a part of the face is shaded.   

    *   *f* = 1 if *A<sub>shadow</sub>* ≤ 0 **or** *A<sub>shadow</sub>* > 0 and *PropShadRed* (SimDb) = 1,

    *   *f* = *ShadEff* if *A<sub>shadow </sub>*> 0 and *PropShadRed* (SimDb) = 0.

*   *A<sub>pv</sub>* is the geometric area of the solar cell system, defined in *SimView* with *Add PvArray* [m²], inside *Frame Dist*.

*   *A<sub>shadow, active </sub>* is the shaded area of *A<sub>pv, active</sub>*.

*   *A<sub>pv</sub>* is the total area of the solar cell system.

*   *F<sub>pv </sub>* gives the active part (Active Area) of the area Apv [%] recalculated to a fraction.

Analouge to this, the nominal yield can be calculated as if no shading hits the area as:

$$ Q_{p v} = \varepsilon_t \cdot (I_{diffuse} + I_{direct}) \cdot A_{p v} \cdot F_{p v} \tag{2} $$

This result can be used to calculate the "performance ratio" which express how large a yield is possible from an area compared to the actual yield taking into account losses from shading etc. The calculations are made for each time-step and summarised to monthly values shown in a result log for each face with solar cells.

