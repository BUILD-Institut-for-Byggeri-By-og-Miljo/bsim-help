<link rel="stylesheet" href="../style.css">

# Finish Property

<figure id="center_img">
<img src="./assets/finish_property.gif" alt="Finish Property.">
<figcaption>Finish Property.</figcaption>
</figure>


*   *Rcomb*: Den kombinerede (stråling og konvektion) overgangsmodstand for overfladen (se standardværdier).

    *   **NB:** Når en flade vender imod mod jord, ændres den kombinerede udvendige overgangsisolans automatisk til 1,5 m²K/W. Dette tal skal ændres hvis jorden er inkluderet i konstruktionens materialelag eller hvis fladen er placeret mere end 0,5 meter under terræn.

*   *Rconv*: Den konvektive varmeovergang ved overfladen (se standardværdier).

*   *Z*: Overfladens modstand imod fugttransport (se standardværdier).

*   *Facing*. På den side af en flade som vender imod det fri er det muligt at angive at fladen vender imod en enden termisk zone - dvs. der er samme termiske forhold som i den angivne termiske zone - eller en jord-zone. Det er hermed muligt at oprette en simpel fiktiv zone, enten med samme temperatur- og fugtforhold som i den aktuelle zone eller som angivet under definitionen af en [jord-zone](/24Miscellaneous/24_26_Ground.html).

*   *Locality* indeholder informationer om eksponeringen af overflader der vender imod det fri. Feltet er inaktivt for flader der vender imod et rum.

    *   *Horizon*: På ydersiden af konstruktioner er det muligt at angive en lokal horisontafskæring som afviger fra den globale horisontafskæring der er defineret under [Site](/24Miscellaneous/24_25_Site_Property.html).

    *   *Wind Exposure*: Angiver en udvendig overflades eksponering for vinden. Det er muligt at vælge mellem:

        *   Semi-exposed - delvist udsat for vindpåvirkning.

        *   Exposed - frit udsat for vindpåvirkning.

        *   Sheltered - beskyttet for vindpåvirkning.

    *   *Filtration Air Flow*: Med denne parameter er det muligt at angive luftstrømmen ud og ind gennem konstruktionen. Parameteren er en faktor for vindhastigheden og bestemmer luftstrømmen gennem utætheder i konstruktionen.

*   *Wind Pressure Coefficient, Cp*: De to knapper, *Top* og *Bottom*, åbner en [dialog](/24Miscellaneous/24_35_Wind_pressure_coefficient_for_crevices.html) til definition af tryktabskoefficienterne for toppen og bunden af en lodret, ventileret luftspalte et stykke inde i en konstruktion der vender imod det fri. Koefficienterne bruges til at beregne luftudvekslingen i spalten på baggrund af vindtrykket på ydersiden af fladen.

Hvis overgangsisolansen (*Rcomb*) for en overflade, den konvektive overgangsisolans (*Rconv*) og diffusionsmodstanden (*Z*) er opgivet til 0 i *Finish Property* dialogen benyttes standardværdierne.

Standardværdierne for overgangsisolanser og konvektive overgangsisolanser fremgår af tabellen.
 

| Benævnelse                                                   | Værdi | Enhed    |
|--------------------------------------------------------------|-------|----------|
| **Indvendig kombineret overgangsisolanser**                  |       |          |
| – varmestrom opad                                            | 0,10  | m²K/W    |
| – vandret varmestrøm                                         | 0,13  | m²K/W    |
| – varmestrøm nedad                                           | 0,17  | m²K/W    |
| **Udvendig kombineret overgangsisolanser**                   |       |          |
| – varmestrom opad                                            | 0,04  | m²K/W    |
| – vandret varmestrøm                                         | 0,04  | m²K/W    |
| – varmestrøm nedad                                           | 0,04  | m²K/W    |
| **Udvendig kombineret overgangsisolanser for flader mod jord** | 1,50  | m²K/W    |
| **Indvendig konvektiv overgangsmodstand for gulve**          | 0,40  | m²K/W    |
| **Indvendig konvektiv overgangsmodstand for lofter**         | 0,50  | m²K/W    |
| **Indvendig konvektiv overgangsmodstand for vægge**          | 0,33  | m²K/W    |


*Standardværdier for overgangsmodstande som benyttes når der gives 0 som inddata i Finish Property dialogen.*

Den udvendige overgangsmodstand benyttes i alle tilfælde. For den indvendige overgangsmodstand benyttes de konvektive overgangsmodstande når der regnes med [langbølget strålingsudveksling](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) i tsbi5. Den samlede overgangsisolans for en flade ved denne type simulering afhænger af overfladetemperaturerne for de flader som den aktuelle flade udveksler strålevarme med. Varmeoverføringen ved stråling beregnes i dette tilfælde dynamisk.
