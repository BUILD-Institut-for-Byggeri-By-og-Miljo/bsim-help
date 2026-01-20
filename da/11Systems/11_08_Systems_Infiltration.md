<link rel="stylesheet" href="../style.css">

# Infiltration, System
Infiltration er utilsigtet eller ukontrolleret lufttilførsel gennem utætheder i bygningens klimaskærm. I modellen for infiltrationen indgår tre led i beregningen: Et grundluftskifte plus et led, der er afhængigt af differensen mellem inde og udetemperatur, plus et led, der er afhængigt af vindhastigheden:

$$ n_{udeluft} = n_0 + c_t \cdot \left( t_i - t_u \right)^{tp} + c_v \cdot v \tag{1} $$

| Symbol         | Forklaring                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------|
| *n₀*           | er grundluftskiftet (h⁻¹)                                                                                   |
| *tᵢ*           | er den operative indetemperatur (°C)                                                                        |
| *tᵤ*           | er udetemperaturen (°C)                                                                                     |
| *tp*           | temperaturpotens (TemPower)                                                                                 |
| *cₜ*           | er en konstant, der især afhænger af rummets og åbningernes størrelse samt højdeforskellen mellem åbningerne |
| *cᵥ*           | er en konstant, der især afhænger af bygningens tæthed, geometri, beliggenhed og terrænets topografi
| *v*            | er vindhastigheden (m/s)    
 

**Definition af infiltration**

Infiltration regnes altid som en udeluftstrøm, ind i den termiske zone. Eksfiltration, dvs. luft, der passerer utætheder ud af den termiske zone, kan ikke angives direkte. Beregningsmodellen kontrollerer for hvert tidsstep af simuleringen, at der er balance mellem de luftstrømme, der går ind og ud af den termiske zone. Ud over infiltration kan bidragene stamme fra udluftning (åbning af vinduer), mekanisk ventilation samt mixing (luftoverførsel mellem termiske zoner eller rum). Såfremt der er ubalance, vil et luftunderskud i en termisk zone blive udlignet ved infiltration, mens et luftoverskud vil blive udlignet ved eksfiltration. Det betyder fx, at det resulterende luftskifte ved infiltration godt kan være større end det, der er bestemt af parameterværdierne i ovenstående formel. Luftbalancen er nærmere beskrevet i [det matematiske grundlag](/20The_Mathematical_Basis/20_00_The_Mathematical_Basis.html).


<figure id="center_img">
<img src="./assets/infiltration.gif " alt="Dialog for definition af infiltration af udeluft i en termisk zone.">
<figcaption>Dialog for definition af infiltration af udeluft i en termisk zone.</figcaption>
</figure>


*Basic Air Change* (*n<sub>0</sub>*, grundluftskifte) er værdien af grundluftskiftet og vil normalt angive et middelniveau for luftskiftet. Hvis der forventes store variationer i luftskiftet, fx på forskellige årstider, bør grundluftskiftet indlæses som det øvre niveau for variationerne. Under tidsplanen kan variationer med tiden angives ved forskellige døgnprofiler til forskellige tidsangivelser.

*TempFactor* (*c<sub>t</sub>*) udtrykker, hvor meget luftskiftet stiger med stigende temperaturforskel mellem inde og ude. Der kan være store forskelle på, i hvor høj grad luftskiftet varierer med temperaturdifferensen, og dette led har normalt størst betydning i høje, 'utætte' bygninger, fx glasbygninger. Temperaturfaktorens størrelse afhænger især af utæthedernes placering og orientering i forhold til hinanden, således at utætheder i modsatte facader og i forskellige højdeniveauer giver den største faktor. For små, tætte rum eller bygninger er faktoren af størrelsesordenen 0,1, mens den for høje, utætte bygninger kan blive op til 5-7.

*TemPower* (*tp*) er en potens på temperaturdifferensen, som normalt vil ligge intervallet 0,4 - 0,7.

*WindFactor* (*c<sub>v</sub>*) angiver luftskiftets vindafhængighed. Formlen indebærer, at der antages at være proportionalitet mellem luftskiftet og vindhastigheden. For små, tætte bygninger med beskyttet beliggenhed vil den være af størrelsesordenen 0,05 - 0,1 , mens den for større bygninger med udsat beliggenhed kan blive op til 0,4.

Til højre for inddatafelterne, under trykknapperne findes to informationsfelter som løbende viser hvad infiltrationen er ved en vindhastighed på 4 m/s og en temperaturforskel mellem ude og inde på 4 hhv. 10 °C.

[Tidsplanen](/11Systems/11_02_Systems_schedule.html) definerer sammenhørende sæt af regulering og tidsangivelse. Der kan angives flere tidsplaner, således at det er muligt at definere forskellige døgnvariationer på forskellige tider af året. Normalt kan det antages, at luftskiftet ved infiltration er størst i bygningens brugstid, dvs. på tidspunkter hvor der opholder sig personer i en bygning, udvendige døre går op og i, og indvendige døre står åbne. Reguleringen for infiltration er af typen [døgnprofil](/11Systems/11_04_Systems_DayProfile.html).

Det bemærkes, at når der defineres flere tidsplaner, vil programmet under simuleringen gennemløbe dem i den rækkefølge, de optræder i dialogen, således at den første tidsangivelse, som indeholder den aktuelle simuleringstime, vil være aktiv.

Se også

*   [Faneblad Schedule](/11Systems/11_02_Systems_schedule.html)
*   [Faneblad DayProfile](/11Systems/11_04_Systems_DayProfile.html)
*   [Faneblad Time](/11Systems/11_17_Systems_Time.html)