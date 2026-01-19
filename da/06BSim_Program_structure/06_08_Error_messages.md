<link rel="stylesheet" href="../style.css">

# Fejlmeddelelser

Fejlmeddelelser i *ModelList* vise med en foranstillet ikon <img src="./assets/18SimView - Udskrift af model.png" width=20>. Ved dobbelt-klik eller Ctrl-klik på linien i *ModelList* med fejlen flyttes fokus til det pågældende objekt i den hierarkiske træ-oversigt i *SimView*. Højre-klik på objektet i træet for at rette eller tilføje data.

Fejlmeddelelser optræder følgende steder:

*   Termisk simulering med tsbi5 og ModelList

*   Simulering af direkte sol med XSun

### **tsbi5 / ModelList**

| **Fejlmeddelelse** | **Mulig årsag** |
|---|---|
| No current building selected | Der er mere end en bygning defineret i modellen og det er ikke valgt hvilken der skal simuleres.<br>Højre-klik på bygningen (<img src="./assets/20SimView - Udskrift af model.png" width=20> i træet), vælg *Properties* og sæt "hak" ud for *Current building*. |
| No weather file | Der er ikke valgt en fil med klimadata som grundlag for simuleringen.<br>Højre-klik på *Site* (<img src="./assets/17SimView - Udskrift af model.png" width=20> i træet) og klik på *Browse*-knappen for at lokalisere en fil med klimadata (*.dry eller *.try). |
| Geometry incomplete | Geometrien for den termiske zone definerer ikke en lukket celle. |
| No rooms | Den termiske zone indeholder ikke mindst et rum.<br>Hold venstre knap på musen nede mens det ønskede rum trækkes til den tomme termiske zone eller slet den overflødige termiske zone. |
| No construction type | Fladen har ikke tilknyttet en konstruktion (materialelag).<br>Der kan tilknyttes [standardkonstruktioner](https://bsim.outseta.com/support/kb/articles/y9gBKGQM/standardkonstruktioner) til en flade eller [frit valgte konstruktioner](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner) fra databasen. |
| No windoor type | Der er ikke tilknyttet materialegenskaber til WinDoor'en.<br>Der kan tilknyttes materialeegenskaber som [standardkonstruktioner](https://bsim.outseta.com/support/kb/articles/y9gBKGQM/standardkonstruktioner) eller som [frit valg fra databasen](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner). |
| Unknown geometry | WinDoor'ets geometri er udefineret, hvis fx restarealet når beregningen af rammens areal bliver negativt. Geometrien beregnes af rammens bredde og evt. fyldningsprocenten. |
| No component | Systemets fysiske egenskaber er ikke defineret.<br>Højre-klik på systemet og definer dets fysiske egenskaber på første fanablad. |
| No schedule | Systemet som er oprettet har ikke fået tilknyttet en [tidsplan](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule).<br>Højre-klik på systemet i træet, skift til *Schedule*-fanebladet og definer en tidsplan for reguleringen af systemet. Hvis systemet ikke skal bruges i denne simulering kan det i stedet slås fra ved at højre-klikke på den termiske zone og markere systemet med et gråt "hak". |
| No control | Systemet som er oprettet har ikke fået tilknyttet en regulering.<br>Højre-klik på systemet i træet, skift til *Control*-fanebladet og definer en reguleringen for systemet. Hvis systemet ikke skal bruges i denne simulering kan det i stedet slås fra ved at højre-klikke på den termiske zone og markere systemet med et gråt "hak". |
| No time | Systemet som er oprettet har ikke en tilknyttet [tidsangivelse](https://bsim.outseta.com/support/kb/articles/VmAOwo9a/tidsangivelse).<br>Højre-klik på systemet i træet, skift til *Time*-fanebladet og definer en tidsangivelse for systemet. Hvis systemet ikke skal bruges i denne simulering kan det i stedet slås fra ved at højre-klikke på den termiske zone og markere systemet med et gråt "hak". |
| Unknown (Mixing) | Kilden for luft ind i den termiske zone ved [*Mixing*](https://bsim.outseta.com/support/kb/articles/Rm8JEd94/mixing) er udefineret. |
| General Lux | Det generelle belysningsniveau (Gen. Lighting Level) i lux er udefineret (<= 0). |
| Unknown (Ventilation &#124; Natkøling) | Sensorzonen for regulering af natkøling er udefineret.<br>Højre-klik på systemet i træet, skift til [*NightCoolCtrl*-fanebladet](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/ventilation---natkoling-ventilation) og definer en sensorzone for ventilationssystemet. |
| Thickness = x m | Tykkelsen af et materialelag i konstruktionen er mindre end 0,0001 m. |
| Missing material | Materialeegenskaber er ikke defineret - termiske- og/eller fugtegenskaber. |
| Spacer = x | Længden af afstandsprofilet i WinDoor er mindre end 0. |
| Frame = x | Arealet af rammen i WinDoor er mindre end 0. |
| Panel = x % | Fyldningsarealet i WinDoor er mindre end 0. |
| Dens = x kg/m³ / Cp = x J/kgK / lambda = x W/mK | Egenskaberne for materialet er ikke defineret korrekt. |
| U = x W/m²K | U-værdien for rammen i WinDoor er ikke defineret |
 

### **XSun**

| **Fejlmeddelelse**         | **Mulig årsag** |
|---------------------------|-----------------|
| Face sides degenerated |??? |



## Parametre i gruppen *Outdoors*

Inddata fra klimafil og beregnet position af solen.  
Disse parametre er **kun** tilgængelige i resultatloggen hvis der er sat “hak” ud for  
[Weather] på [Options fanebladet] før simuleringen.

| Parameter   | Beskrivelse |
|-------------|-------------|
| **AtmPres** | Lufttrykket, Pascal.  <br> Hvis lufttrykket er konstant 0 kan der stadig simuleres naturlig ventilation med [multizone-modellen], men med reduceret præcision. |
| **CldCover** | Skydække, ottendedele (8 = helt overskyet, 0 = skyfrit) |
| **DifRad** | Diffus solstråling på vandret, kW/m² |
| **ExtTmp** | Temperaturen af udeluften (tør), °C |
| **HumRatio** | Absolut fugtindhold i udeluften, kg/kg tør luft |
| **NormRad** | Direkte solindfald ved vinkelret indstråling, kW/m² |
| **RelHumid** | Relativ fugtighed i udeluften, % |
| **SkyTemp** | Himmeltemperatur, °C |
| **SunAz** | Solens position regnet fra nord (nord = 0°) og positiv mod øst (øst = 90°), grader |
| **SunH** | Solhøjde i forhold til vandret (zenit = 90°), grader |
| **WindDir** | Vindretning (nord = 0°), grader |
| **WindSpeed** | Vindhastighed, m/s |