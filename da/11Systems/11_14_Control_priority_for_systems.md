<link rel="stylesheet" href="../style.css">

# Reguleringsprioritet for systemer

Den ønskede operative temperatur kan søges opnået ved hjælp af flere af de i det foregående beskrevne systemer, der kan virke hver for sig eller samtidigt. Prioritetsfølgen af de mulige regulerende systemer er bestemt af de valgte temperatursetpunkter, og afhænger til et givet tidspunkt af, om der er et varmebehov eller et kølebehov.

**Regulering ved varmebehov (temperaturen ønskes hævet)**

Følgende systemer kan bidrage til at hæve temperaturen:

*   [Radiator](/11Systems/11_12_Systems_Heating.html)

*   [Ventilationsanlæg (varmegenvinding, varmeflade)](/11Systems/11_21_Systems_Ventilation.html)

Det system, der har det højeste setpunkt, aktiveres først, dog således at grænserne for de til rådighed værende effekter samt grænser for indblæsningstemperaturer altid overholdes (hvis dette er muligt).

**Eksempel**

I 'varmeregulering' for en [radiator](/11Systems/11_12_Systems_Heating.html) er setpunktet sat til 21,5 °C, mens der i '[rumtemperaturregulering](/11Systems/11_25_Ventilation_Zone_Temperature_control.html)' for et [ventilationsanlæg](/11Systems/11_21_Systems_Ventilation.html) er angivet en minimum indblæsningstemperatur på 16,0 °C samt et setpunkt for opvarmning på 21,0 °C. Funktionen vil da være, at temperaturen på indblæsningsluften vil være 16,0 °C, mens der ved stigende varmebehov afgives mere og mere varme fra radiatoren for at holde rumtemperaturen på 21,5 °C. Hvis den til rådighed værende effekt på radiatoren er utilstrækkelig til at holde 21,0 °C, vil indblæsningstemperaturen blive hævet for at holde denne rumtemperatur.

**Regulering ved kølebehov (temperaturen ønskes sænket)**

Følgende systemer kan bidrage til at sænke temperaturen:

*   [Solafskærmning](/11Systems/11_16_Systems_shading.html)

*   [Udluftning](/11Systems/11_18_Systems_Venting.html)

*   [Køling (køleradiator)](/11Systems/11_09_Systems_cooling.html)

*   [Ventilationsanlæg](/11Systems/11_21_Systems_Ventilation.html) (kuldegenvinding, [VAV](/11Systems/11_26_Ventilation_VAV_control.html), køleflade)

*   ([Belysning](/11Systems/11_03_Systems_Lighting.html))

I dette tilfælde aktiveres de enkelte systemer/komponenter efter laveste setpunkt.

**Eksempel**

Nedenfor er vist et eksempel på de bestemmende setpunkter for rækkefølgen ved regulering af systemerne i en model i en situation med kølebehov.


 | System            | Regulering        | Setpunkt(er) Værdi                                                                 | Prioritet      |
|-------------------|------------------|------------------------------------------------------------------------------------|----------------|
| Solafskærmning    | Afsk. reg.       | Max Sol 200 W/m²                                                                   | (1)            |
| Udluftning        | Udluftn. reg.    | Temp. grænse 21,5°C                                                                | 1 el. 2        |
| Køleradiator      | Varme/kølereg.   | Setpunkt 22,0 °C                                                                   | 3              |
| Ventilationsanlæg | VAV-regulering   | Setpunkt 24,0 °C <br> <br> Min. indbl.temp. 16,0°C <br> <br> VAV-setpunkt 21,0 °C  <br> <br> Setpunkt køling 25,0°C | 4 <br>  <br> (0) <br> <br> <br> 1 <br><br> <br>  5 <br> |
| Belysning         | Lys reg.         | Temp.grænse 27,0 °C <br> (Solgrænse 0,25 kW)                                       | (6)

<br>

Regulatoren til ventilationsanlægget vil søge at holde indblæsningstemperaturen nede på 16,0 °C, men i første omgang uden at åbne for kølefladen. Denne indblæsningstemperatur kan altså kun holdes, så længe udetemperaturen er lavere end 16,0 °C minus temperaturstigningen i systemet.

Solafskærmningen indgår ikke helt som de øvrige systemer i prioriteringen af de regulerende funktioner. For det første vil solafskærmningen altid blive aktiveret, såfremt solindfaldet gennem det vindue, den er tilknyttet, ellers vil overstige grænseværdien Max sol. Solafskærmningen vil desuden altid blive aktiveret, hvis den beregnede rumtemperatur uden regulering overstiger solafskærmningens temperaturgrænse Temp. Max, uanset at dette setpunkt er højere end et af de øvrige.

Reguleringen vil derfor foregå med følgende prioritering:

1.  Hvis den operative temperatur, der beregnes at blive uden regulering, overstiger 21,5 °C, vil *solafskærmningen* blive trukket så meget for, som det er nødvendigt for at holde 21,5 °C.

2.  Hvis den operative temperatur, der beregnes at blive uden regulering, overstiger 21,0 °C, men ikke 21,5 °C, vil med de angivne setpunkter den første regulering være, at *ventilationsanlægget* øger volumenstrømmen i forsøg på at opnå 21,0 °C.

3.  Hvis volumenstrømmen kommer op på det maksimale (bestemt af VAV-reguleringens maxfaktor), uden at den operative temperatur kan holdes nede på 21,0 °C, kontrollerer programmet det næstfølgende setpunkt. I dette eksempel er det setpunktet for *solafskærmningen* på 21.5 °C. Såfremt den operative temperatur ligger mellem 21,0 og 21,5 °C, vil der ikke ske yderligere regulering. Overstiger den operative temperatur derimod 21,5 °C, vil *solafskærmningen* blive trukket for, hvis dette ikke allerede er sket, jf. pkt. 1.

4.  Hvis heller ikke dette og de følgende setpunkter kan holdes, vil systemerne regulere i den anførte prioritetsfølge: *Udluftning, køleradiator,* ventilationsanlæggets *køleflade* og evt. *belysningen.* Reguleringen af belysningen består i, at almenbelysningen slukkes for at mindske rummets varmebelastning. Prioriteringen af denne er sat i parentes, da den er yderligere betinget af, at den samlede solindstråling i zonen overstiger den valgte værdi for *Solgrænse.*