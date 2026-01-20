<link rel="stylesheet" href="../style.css">

# Fejlmeddelelser

Fejlmeddelelser i *ModelList* vise med en foranstillet ikon <img src="./assets/18SimView - Udskrift af model.png" width=20>. Ved dobbelt-klik eller Ctrl-klik på linien i *ModelList* med fejlen flyttes fokus til det pågældende objekt i den hierarkiske træ-oversigt i *SimView*. Højre-klik på objektet i træet for at rette eller tilføje data.

Fejlmeddelelser optræder følgende steder:

*   [Termisk simulering med tsbi5 og ModelList](#tsbi5-modellist)

*   [Simulering af direkte sol med XSun](#xsun)

<h3 id="tsbi5-modellist"><strong>tsbi5 / ModelList</strong></h3>

| **Fejlmeddelelse** | **Mulig årsag** |
|---|---|
| No current building selected | Der er mere end en bygning defineret i modellen og det er ikke valgt hvilken der skal simuleres.<br>Højre-klik på bygningen (<img src="./assets/20SimView - Udskrift af model.png" width=20> i træet), vælg *Properties* og sæt "hak" ud for *Current building*. |
| No weather file | Der er ikke valgt en fil med klimadata som grundlag for simuleringen.<br>Højre-klik på *Site* (<img src="./assets/17SimView - Udskrift af model.png" width=20> i træet) og klik på *Browse*-knappen for at lokalisere en fil med klimadata (*.dry eller *.try). |
| Geometry incomplete | Geometrien for den termiske zone definerer ikke en lukket celle. |
| No rooms | Den termiske zone indeholder ikke mindst et rum.<br>Hold venstre knap på musen nede mens det ønskede rum trækkes til den tomme termiske zone eller slet den overflødige termiske zone. |
| No construction type | Fladen har ikke tilknyttet en konstruktion (materialelag).<br>Der kan tilknyttes [standardkonstruktioner](/24Miscellaneous/24_28_Insert_Default_Options.html) til en flade eller [frit valgte konstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html) fra databasen. |
| No windoor type | Der er ikke tilknyttet materialegenskaber til WinDoor'en.<br>Der kan tilknyttes materialeegenskaber som [standardkonstruktioner](/24Miscellaneous/24_28_Insert_Default_Options.html) eller som [frit valg fra databasen](/09SimView/09_09_SimView_Non_default_constructions.html). |
| Unknown geometry | WinDoor'ets geometri er udefineret, hvis fx restarealet når beregningen af rammens areal bliver negativt. Geometrien beregnes af rammens bredde og evt. fyldningsprocenten. |
| No component | Systemets fysiske egenskaber er ikke defineret.<br>Højre-klik på systemet og definer dets fysiske egenskaber på første fanablad. |
| No schedule | Systemet som er oprettet har ikke fået tilknyttet en [tidsplan](/11Systems/11_02_Systems_schedule.html).<br>Højre-klik på systemet i træet, skift til *Schedule*-fanebladet og definer en tidsplan for reguleringen af systemet. Hvis systemet ikke skal bruges i denne simulering kan det i stedet slås fra ved at højre-klikke på den termiske zone og markere systemet med et gråt "hak". |
| No control | Systemet som er oprettet har ikke fået tilknyttet en regulering.<br>Højre-klik på systemet i træet, skift til *Control*-fanebladet og definer en reguleringen for systemet. Hvis systemet ikke skal bruges i denne simulering kan det i stedet slås fra ved at højre-klikke på den termiske zone og markere systemet med et gråt "hak". |
| No time | Systemet som er oprettet har ikke en tilknyttet [tidsangivelse](/11Systems/11_17_Systems_Time.html).<br>Højre-klik på systemet i træet, skift til *Time*-fanebladet og definer en tidsangivelse for systemet. Hvis systemet ikke skal bruges i denne simulering kan det i stedet slås fra ved at højre-klikke på den termiske zone og markere systemet med et gråt "hak". |
| Unknown (Mixing) | Kilden for luft ind i den termiske zone ved [*Mixing*](/11Systems/11_10_systems_mixing.html) er udefineret. |
| General Lux | Det generelle belysningsniveau (Gen. Lighting Level) i lux er udefineret (<= 0). |
| Unknown (Ventilation &#124; Natkøling) | Sensorzonen for regulering af natkøling er udefineret.<br>Højre-klik på systemet i træet, skift til [*NightCoolCtrl*-fanebladet](/11Systems/11_24_Ventilation_Night_Cooling_Control.html) og definer en sensorzone for ventilationssystemet. |
| Thickness = x m | Tykkelsen af et materialelag i konstruktionen er mindre end 0,0001 m. |
| Missing material | Materialeegenskaber er ikke defineret - termiske- og/eller fugtegenskaber. |
| Spacer = x | Længden af afstandsprofilet i WinDoor er mindre end 0. |
| Frame = x | Arealet af rammen i WinDoor er mindre end 0. |
| Panel = x % | Fyldningsarealet i WinDoor er mindre end 0. |
| Dens = x kg/m³ / Cp = x J/kgK / lambda = x W/mK | Egenskaberne for materialet er ikke defineret korrekt. |
| U = x W/m²K | U-værdien for rammen i WinDoor er ikke defineret |
 

<h3 id="xsun"><strong>XSun</strong></h3>

| **Fejlmeddelelse**         | **Mulig årsag** |
|---------------------------|-----------------|
| Face sides degenerated |??? |