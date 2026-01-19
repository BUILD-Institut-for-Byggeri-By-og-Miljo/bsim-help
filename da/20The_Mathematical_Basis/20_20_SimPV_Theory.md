# SimPV - Beregningsforudsætninger

I SimPV beregnes et overslag for ydelsen fra et solcelleanlæg på den givne placering på bygningen. Der tages hensyn til slagskygger på arealet som vil kunne reducere ydelsen markant. Ydelsen beregnes overslagsmæssigt som:

$$ Q_{p v} = \varepsilon_t \cdot \left( I_{diffus} + I_{direkte} \cdot \left(1 - \frac{A_{skygge,aktiv}}{A_{p v, aktiv}} \right) \cdot f \right) \cdot A_{p v}F_{eff} $$

hvor:

*   ε<sub>t </sub>er den totale effektivitet (solceller, vekselretter, ledningstab mv.) af solcelleanlægget. Systemeffektiviteten kan hentes med [SimDb fra databasens materialedel i tabel 9](www.google.dk).

*   I<sub>diffus</sub> er den diffuse solintensitet på solcellerne.

*   I<sub>direkte </sub>er de direkte solintensitet på solcellerne.

*   *f* er en faktor som angiver om en del af fladen er ramt af slagskygger.   

    *   *f* = 1 hvis *A<sub>skygge</sub>* ≤ 0 **eller** *A<sub>skygge</sub>* > 0 og *PropShadRed* (SimDb) = 1,

    *   *f* = *ShadEff* hvis *A<sub>skygge </sub>*> 0 og *PropShadRed* (SimDb) = 0.

*   *A<sub>pv</sub>* er det geometriske areal af solcelleanlægget, defineret i SimView med *Add PvArray* [m²]. inden for *Frame Dist*.

*   *A<sub>skygge,aktiv</sub>* er det skyggede areal af *A<sub>pv,aktiv</sub>*.

*   *A<sub>pv</sub>* er det samlede arealet af solcelleanlægget.

*   *F<sub>pv </sub>* angiver den aktive andel (Active Area) af arealet *A<sub>pv</sub>* [%] og omregnet til en andel mellem 0 og 1.

Tilsvarende beregnes det mulige udbytte hvis fladen ikke blev ramt af slagskygger (*No shading reduction*), som:

$$ Q_{p v} = \varepsilon_t \cdot (I_{diffus} + I_{direkte}) \cdot A_{p v} \cdot F_{p v} $$

Dette resultat kan bruges til at beregne "performance ratio" som udtrykker hvor stort et udbytte der opnås fra en flade i forhold til det mulige udbytte hvis fladen ikke havde været skygget. Beregningen gennemføres i hvert tidsskridt og summeres til månedsværdier som vises i et resultatskema med en sum for hver flade med solceller i modellen og en samlet sum for alle flader med solceller i modellen.
