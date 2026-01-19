# Beregning af glastemperatur

Hvis det antages at et glas altid har to lag, og at lagenes absorbtans er SA<sub>i</sub> og reflektans er SR<sub>i</sub> (*gælder <u>ikke</u> for glas med hård coating!!*). Disse antagelser at ok for vinduer med 1 og 2 glaslag, men ikke for flere glaslag.

I modellen med forskellig absorption og refleksion på de to glas kan følgende formel benyttes:

$$ q_{abs,i} = I_i (1 - SR_i)\cdot SA_i - I_j ((1-SR_j)SA_j)^2  $$

og tilsvarende for q<sub>abs1</sub>, blot med ombytning af indeks.

Hvis den samlede absorbtans (SA) og reflektans (SR) kendes for en rude, kan dette indtastes for [*side 1*](https://bsim.outseta.com/support/kb/articles/Rm8JDx94/simdb---glazing-additional-data) af ruden, og BSim antager at glaslagene er ens med værdier svarende til halvdelen af den indlæste værdi. Ud fra disse antagelser kan den absorberede stråling i hver overflade estimeres som:

$$ q_{abs,0} = I_1 \left( 1 - \frac{SR}{2}\right) \frac{SA}{2} + I_0 \left( \left( 1 - \frac{SR}{2}\right) \frac{SA}{2} \right)^2  $$

Det antages at al langbølget stråling der rammer et glaslag reflekteres. *Denne antagelse er rigtig for glas, men gælder <u>ikke</u> for tynde folier af plast.*

I<sub>1</sub>og I<sub>0</sub> er den kortbølgede stråling der rammer side 0 hhv. 1 af vinduet. Den kortbølgede stråling på glasflader der vender imod det fri er I<sub>direkte</sub>+ I<sub>diffus,himmel</sub> + I<sub>diffus,reflekteret</sub>. På glasflader der vender imod en termisk zone (*hvordan håndterer vi stråling som passerer gennem et rum og ind i en termisk zone?*) er den kortbølgede stråling I<sub>lys</sub> + I<sub>transmitteret sol</sub>.

Herefter kan temperaturen for overfladerne beregnes som en varmebalance til den nærmeste lufttemperatur med den absorberede stråling som et nye led i den sædvanlige ligning for beregning af varmetabet alene på grund af den mørke U-værdi:

$$ t_{g,i} = Ur_i (\Theta_1 - \Theta_0) - q_{abs,i} r_i + \Theta_i $$

Dette udtryk har den fordel at temperaturen bliver lig med den temperatur som blev beregnet ved den gamle metode når der ikke er stråling på nogen af de to glasflader.

Til brug for den langbølgede strålingsudveksling med glassets overflader kan den gennemsnitlige emmisionskoefficient (ε = 0,94) for glas benyttes på alle glasoverflader.
