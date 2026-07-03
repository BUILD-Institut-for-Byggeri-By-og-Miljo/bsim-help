<link rel="stylesheet" href="../style.css">

# Konvertering af vejrdata til tsbi5

Vejrdata, som skal bruges i forbindelse med tsbi5, skal findes i et specielt (binært) format. Vejrdata, der findes som ASCII-filer, kan konverteres til tsbi5-format med *tsbi5* | *File* | *Weather data* | *Convert* kommandoen. Denne funktion beskrives i det følgende.

Det er også muligt at hente og direkte konvertere klimadata i energy+ / ASHRAE format (*.epw) fra Internettet ved en [specialfunktion](/24Miscellaneous/24_14_Energy_ASHRAE_climate_data.md) i BSim via indgangen *tsbi5* | *File* | *Weather data* | *ASHRAE*.

### **Vejrdata**

Vejrdata skal findes som timeværdier, dag for dag for et helt år, eller evt. dag for dag for perioder af et år. Dataene skal findes med timeværdier for de enkelte størrelser, linje for linje i en ASCII-fil, angivet i tidsfølge fra 1. januar (eller første dag i første periode) og fremefter. ASCII-filens primære navn (dvs. uden evt. 'extension') bestemmer navnet på tsbi5-vejrdatafilen. Data **skal** optræde i stigende tidsrækkefølge, men gerne med huller i data. Hvis der således f.eks. ønskes oprettet en klimafil fra oktober til marts, skal data foreligge fra januar til marts, et hul i data og derefter data fra oktober til december.

Følgende data anvendes af tsbi5:

*   Geografisk beliggenhed af det sted, hvor data er målt,

*   Udetemperatur og fugtforhold,

*   Data vedrørende solstråling,

*   Vindhastighed og retning,

*   Lufttryk (model for multizone simulering af naturlig ventilation).

### **Definition af dataformat**

En definitionsfil dannes via det interface, som findes for konvertering af klimadata til tsbi5-formatet. Definitionsfilen indeholder et antal felter, som beskriver formatet af vejrdatafilen *vdata.ext* og kan gemmes i <fil-navn>.wdf. Navnet på definitionsfilen bestemmer navnet på den binære klimadatafil.

<figure id="center_img">
<img src="./assets/CLIMATE.GIF" alt="Dialog (Conversion of Weather Data for tsbi5) for konvertering af ASCII (tekst) klimadata til tsbi5's binære format.">
<figcaption>Dialog (Conversion of Weather Data for tsbi5) for konvertering af ASCII (tekst) klimadata til tsbi5's binære format.</figcaption>
</figure>

*   *Description*: Information om indholdet af klimafilen (feltet <u>skal</u> udfyldes).

*   *Format*: Der kan vælges mellem fire formater:

    *   *Free*: Frit format, dvs. timeværdier findes linje for linje i fast rækkefølge, adskilt med mindst ét blanktegn eller tabulator.

    *   *Fixed*: Fast kolonneformat, dvs. timeværdier findes linje for linje i fast rækkefølge i faste kolonner med eller uden adskillelse med blanktegn.  

    * *NB: Hvis data indeholder ikke-numeriske informationer på samme linje som timedata, er dette format det eneste som kan benyttes*.

    *   *Time+free*: Variant af frit format. Før døgnværdierne findes en linje med datoangivelse.

    *   *eec*: Variant af fast format. Data for solstråling angiver for time 24 en døgnsum, som nulstilles i den konverterede fil.

*   [*Fixed columns from left to right*](/24Miscellaneous/24_61_Climate_data_fixed_format.md): I feltet angives placeringen af data i kolonner (index startende med 1 længst til venstre). Benyttes alene i forbindelse med formatet *Fixed*.

*   *Skip lines*: Angiver antallet af linjer i toppen af ASCII-filen, som skal springes over, inden data starter.

*   *Leap Year* : Angiver at data stammer fra et skudår (indeholder data for 29. februar).

*   *Latitude*: Geografisk breddegrad (grader), positiv mod nord.

*   *Longitude*: Geografisk længdegrad (grader), positiv mod øst.

*   *Timezone*: Afvigelse fra GMT (timer), positiv mod øst.

*   *Altitude*: Højden over havet for målestationens placering.

Med linjerne i skemaet defineres via en [dialog](/24Miscellaneous/24_58_Climate_data_definition.md) de enkelte parametre i linjerne i datafilen, dvs. hvilken parameter der er tale om, skalering og enhed samt dens relative position i linjen, kolonnenummer eller parameternummer regnet fra venstre mod højre.

Følgende data **skal** som minimum være til stede for at der kan dannes en binær klimafil:

*   Måned (1 til 12) + dag (1 til 28/29/30/31) **eller** dagnummer (1 til 365/366) i året + timen i dagen (1 til 24).

*   Udetemperaturen.

*   En af de fire kombinationer af soldata.

Desuden kan følgende data gives:

*   En parameter for luftens fugtighed (dugpunktstemperatur, relativ fugtighed, absolut fugtindhold eller enthalpi). *Opgives der ingen data for luftens fugtighed, anvendes konstant 0.*

*   Skydækket beregnes af programmet ud fra data for stråling og fugt, hvis det ikke opgives.

*   Vindhastighed og vindretning er nødvendige for at kunne simulere naturlig ventilation mellem en zone og omgivelserne. *Opgives der ingen data for vinden, anvendes konstant 0.*

*   Lufttrykket i pascal (Pa) er nødvendig for at kunne simulere naturlig ventilation mellem flere zoner og omgivelserne. 

    *Hvis lufttrykket angives til at være konstant 0 eller udelades, benyttes en fast værdi, som kan beregnes ud fra højden over havet. Der kan stadig gennemføres en simulering af naturlig ventilation med multi-zone modellen, men med reduceret nøjagtighed.*

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

*   *Data file* ... : Åbner en dialog for valg af ASCII-fil til konvertering til tsbi5-format.

*   *Save* ... : Gemmer den eksisterende definitionsfil, evt. under et nyt navn.

*   *Convert* : Konverterer den valgte ASCII-datafil til en binær tsbi5-klimafil.

*   *Cancel* : Afslutter dialogen uden at gemme eller konvertere.

#### **Convert**

Tryk <u>altid</u> *Save*, inden data konverteres!

Når klimadata er konverteret, vises en statistik over de konverterede klimadata. I statistikken vises måned for måned minimum-, middel- og maksimumværdierne for Udetemperatur (°C), Absolut fugtindhold (kg/kg), Normal stråling (W/m²), Diffus stråling (W/m²), Skydække (oktas), Vindretning (°) og Vindhastighed (m/s).

 