<link rel="stylesheet" href="../style.css">

# Konvertering af vejrdata til tsbi5

Vejrdata, som skal bruges i forbindelse med tsbi5, skal findes i et specielt (binært) format. Vejrdata, der findes som ASCII-filer, kan konverteres til tsbi5-format med *tsbi5* | *File* | *Weather data* | *Convert* kommandoen. Denne funktion beskrives i det følgende.

Det er også muligt at hente og direkte konvertere klimadata i energy+ / ASHRAE format (*.epw) fra Internettet ved en [specialfunktion](https://help.bsim.dk/support/kb/articles/dQG2XEm4/energyashrae-klimadata) i BSim2002 via indgangen *tsbi5* | *File* | *Weather data* | *ASHRAE*.

### **Vejrdata**

Vejrdata skal findes som timeværdier, dag for dag for et helt år, eller evt. dag for dag for perioder af et år. Data skal findes med timeværdier for de enkelte data, linie for linie i en ASCII-fil, angivet i tidsfølge fra 1. januar (eller første dag i første periode) og fremefter. ASCII-filens primære navn (dvs. uden evt. 'extension') bestemmer navnet for tsbi5 vejrdata filen. Data **skal** optræde i stigende tidsrækkefølge, men gerne med huller i data. Hvis der således fx ønskes oprettes en klimafil fra oktober til marts, skal data foreligge fra januar til marts, et hul i data og derefter data fra oktober til december.

Følgende data anvendes af tsbi5:

*   Geografisk beliggenhed af det sted, hvor data er målt,

*   Udetemperatur og fugtforhold,

*   Data vedrørende solstråling,

*   Vindhastighed og retning,

*   Lufttryk (model for multizone simulering af naturlig ventilation).

### **Definition af dataformat**

En definitionsfil dannes vis det interface som findes for konvertering af klimadata til tsbi5-formatet. Definitionsfilen indeholder et antal felter, som beskriver formatet af vejrdata filen *vdata.ext* og kan gemmes i &lt;fil-navn&gt;.wdf. Navnet på definitionsfilen bestemmer navnet på den binære klimadatafil.

<figure id="center_img">
<img src="./assets/CLIMATE.GIF" alt="Dialog (Conversion of Weather Data for tsbi5) for konvertering af ASCII (tekst) klimadata til tsbi5's binære format.">
<figcaption>Dialog (Conversion of Weather Data for tsbi5) for konvertering af ASCII (tekst) klimadata til tsbi5's binære format.</figcaption>
</figure>

*   *Description*: Information om indholdet af klimafilen (feltet <u>skal</u> udfyldes).

*   *Format*: Der kan vælges mellem fire formater:

    *   *Free*: Frit format, dvs. timeværdier findes linie for linie i fast rækkefølge, adskilt med mindst ét blanktegn eller tabulator.

    *   *Fixed*: Fast kolonne format, dvs. timeværdier findes linie for linie i fast rækkefølge i faste kolonner med eller uden adskillelse med blanktegn.  

    * *NB: Hvis data indeholder ikke-numeriske informationer på samme linje som timedata, er dette format det eneste som kan benyttes*.

    *   *Time+free*: Variant af frit format. Før døgnværdier findes en linie med dato angivelse.

    *   *eec*: Variant af fast format. Data for solstråling angiver for time 24 en døgnsum, som nulstilles i den konverterede fil.

*   [*Fixed columns from left to right*](https://help.bsim.dk/support/kb/articles/L9PwAjQJ/klimadata-fast-format): I feltet angives placeringen af data i kolonner (index startende med 1 længst til venstre). Benyttes alene i forbindelse med formatet *Fixed*.

*   *Skip lines*: Angiver antallet af linier i toppen af ASCII filen som skal springes over i toppen af filen inden data starter.

*   *Leap Year*. Angiver at data stammer fra et skudår (indeholder data for 29. februar).

*   *Latitude*: Geografisk breddegrad (grader), positiv mod nord.

*   *Longitude*: Geografisk længdegrad (grader), positiv mod øst.

*   *Timezone*: Afvigelse fra GMT (timer), positiv mod øst.

*   *Altitude*. Højden over havet af målestationens placering.

Med linierne i skemaet defineres, via en [dialog](https://help.bsim.dk/support/kb/articles/dQG2Dkm4/klimadata-definition), de enkelte parametre i linierne i datafilen, dvs. hvilken parameter, der er tale om, skalering og enhed, samt dens relative position i linien, kolonne nummer eller parameter nummer regnet fra venstre mod højre.

Følgende data **skal** som minimum være til stede for at der kan dannes en binær klimafil:

*   Måned (1 til 12) + dag (1 til 28/29/30/31) **eller** dagnummer (1 til 365/366) i året + timen i dagen (1 til 24).

*   Udetemperaturen.

*   En af de fire kombinationer af soldata.

Desuden kan følgende data gives:

*   En parameter for luftens fugtighed (dugpunktstemperatur, relativ fugtighed, absolut fugtindhold eller enthalpi). *Opgives der ingen data for luftens fugtighed anvendes konstant 0.*

*   Skydækket beregnes af programmet ud fra data for stråling og fugt hvis det ikke opgives.

*   Vindhastighed og vindretning er nødvendige for at kunne simulere naturlig ventilation mellem en zone og omgivelserne. *Opgives der ingen data for vinden anvendes konstant 0*.

*   Lufttrykket i pascal (Pa) er nødvendig for at kunne simulere naturlig ventilation mellem flere zoner og omgivelserne. 

    *Hvis lufttrykket angives til at være konstant 0 eller udelades benyttes en fast værdi som kan beregnes ud fra højden over havet. Der kan stadig gennemføres en simulering af naturlig ventilation med multi-zone modellen, men med reduceret nøjagtighed.*

#### **Format af inddata**

Konverteringen af klimadata forudsætter at data findes i følgende formater:


| Parameter                | Unit(s)                                    |
|--------------------------|---------------------------------------------|
| Måned                    | [-] 1 til 12 eller evt. en kortere periode |
| Dag                      | [-] 1 til 28/29/30/31 eller evt. en kortere periode |
| Time                     | [-] 1 til 24                                |
| Temperaturer             | °C eller °F                                 |
| Skydække                 | andel (0–1) eller oktas (0–8)               |
| Solindfald               | J/cm² eller W/m²                            |
| Entalpi                  | kJ/kg                                       |
| Absolut fugtindhold      | kg H₂O/kg tør luft                          |
| Relativt fugtindhold     | % eller andel (0–1)                         |
| Vindretning              | ° (Nord = 0, Øst = 90)                      |
| Vindhastighed            | knob eller m/s                              |
| Lufttryk                 | Pa                                          |

*Det er ikke tilrådeligt at generere klimadata af kortere varighed end ca. 14 dage på grund af bygningens evne til at akkumulere varme i konstruktionerne.*


#### **Knapper i dialogen**

*   *Open* : Åbner en allerede eksisterende definitionsfil for konvertering af klimadata. Indeholder informationer fra samtlige felter i dialogen.

*   *Data file* ... : Åbner en dialog for valg af ASCII fil til konvertering til binært tsbi5 format.

*   *Save* ... : Gemmer den eksisterende definitionsfil, evt. under et nyt navn.

*   *Convert* : Konverterer den valgte ASCII datafil til en binær tsbi5 klimafil.

*   *Cancel* : Afslutter dialogen uden at gemme eller konvertere.

#### **Convert**

Tryk <u>altid</u> *Save* inden data konverteres!

Når klimadata er konverteret vise en statistik over de konverterede klimadata. I statistikken vises måned for måned minimum, middel og maksimum værdierne for Udetemperatur (°C), Absolut fugtindhold (kg/kg), Normal stråling (W/m²), Diffus stråling (W/m²), Skydække (oktas), Vindretning (°) og Vindhastighed (m/s). Sidst vises de samme tre værdier for den samlede periode med konverterede data.

 

#### **DRY og TRY**

Med BSim følger vejrdata i DRY (Design Reference Year) format. Data i DRY består af månedsvise klimadata målt i perioden 1975 til 1989. De 12 måneder i DRY er:


| Måned      | År   |
|------------|------|
| januar     | 1981 |
| februar    | 1976 |
| marts      | 1984 |
| april      | 1987 |
| maj        | 1986 |
| juni       | 1980 |
| juli       | 1977 |
| august     | 1978 |
| september  | 1987 |
| oktober    | 1986 |
| november   | 1977 |
| december   | 1986 |

Tidligere blev der normalt benyttet et sæt klimadata med betegnelsen TRY (Test Reference Year). Et sådan datasæt fulgte med BSim og bestod følgende 12 måneder registreret i perioden fra 1959 til 1973: 


| Måned      | År   |
|------------|------|
| januar     | 1967 |
| februar    | 1968 |
| marts      | 1966 |
| april      | 1962 |
| maj        | 1961 |
| juni       | 1963 |
| juli       | 1963 |
| august     | 1971 |
| september  | 1965 |
| oktober    | 1962 |
| november   | 1964 |
| december   | 1970 |
