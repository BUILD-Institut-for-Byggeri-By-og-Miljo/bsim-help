<link rel="stylesheet" href="../style.css">

# WinDoor Property

<figure id="center_img">
<img src="./assets/WindoorProperty.gif " alt="Dialog (Windoor Property) for beskrivelse af geometri, glasareal og skyggegivere for en WinDoor.">
<figcaption>Dialog (Windoor Property) for beskrivelse af geometri, glasareal og skyggegivere for en WinDoor.</figcaption>
</figure>


I feltet *Area* vises de oplysninger som programmet har beregnet af åbningens geometri og information fra databasen. De beregnede størrelser er: åbningens areal (*Opening*), glassets areal (*GlassArea*), rammens areal (*FrameArea*), fyldningens areal (*PanelArea*) som benyttes i forbindelse med simuelring af døre og længden af afstandsprofilet (*SpacerLength*).

Bemærk, at første gang dialogen åbnes, vil informationen *Impossible Geometry* fremkomme i stedet for *SpacerLength* og der vises et stopsignal til højre for *Override*-knappen hvis åbningen ikke er en rektangel eller der ikke er valgt et vindue fra databasen. Ved klik på [knappen *Override*](/24Miscellaneous/24_51_WinDoor_Override.html) kan arealet for rammen og fyldningen samt afstandsprofilets længde ændres. Fra disse data beregnes arealet af glasset.

Meddelelsen *Impossible Geometry* kan også skyldes at den aktuelle Windoor er placeret så den strækker sig ind over *Inner Shell*, dvs. konstruktionerne i de flader som støder op til den fladen hvori Windoor placeret. Kan opstå hvis tykkelsen af modellens konstruktioner forøges fx ved valg af nye konstruktioner. Det vil ikke være muligt at gennemføre en simulering så længe Windoors geometri er umulig.

Oplysningsfelterne under *Area* beskriver U-værdien for det WinDoor der er tilknyttet, samt dets indgang i databasen (SfB-nummer og navn).

*   *Recess (m)*: Glassets tilbagetrækning i forhold til ydersiden af væggen i meter. Hvis der angives en Recess på 0, bliver afskygningen behandlet svarende til at glasset er placeret plant med konstruktionens <u>**indvendige** </u>overflade. Ønskes glasset placeret i plan med facadens udvendige overflade skal der angives en værdi større end 0,0001.   
<span id="red_text"> **NB:** Recess fungerer <u>kun</u> hvis [XSun solfordeling](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) er slået til. </span>

*   *Select Systems*: Der kan vælges tre systemer som knytter sig til objektet:   
Regulering ([Regulation](/24Miscellaneous/24_62_Regulation.html)),  
Skodder ([*Shutter*](/11Systems/11_15_Systems_shutter.html)) og   
solafskærmning ([*SolarShading*](/11Systems/11_16_Systems_shading.html)).   
Systemerne defineres ved at højre-klikke i træ-oversigten, hvorved den tilhørende dialog kaldes frem

*   *DayLight*: Giver mulighed for manuel indtastning af sollysfaktorerne [Sf1](/10Thermal_zones/10_07_Solar_light_factors_for_WinDoors.html), [Sf2](/10Thermal_zones/10_07_Solar_light_factors_for_WinDoors.html) og [Sf3](/10Thermal_zones/10_07_Solar_light_factors_for_WinDoors.html) for et vindue. Det er også muligt at beregne og overføre dagslysfaktorerne automatisk fra [SimLight](/15SimLight_Daylight_calculations/15_02_Daylight_calculation_at_a_point.html) programmet.

*   [*Sidefin* og *Overhang*](/24Miscellaneous/24_54_WinDoor_overhangs_and_side-fins.html): Den lokale geometri omkring objektet kan beskrives ved klik på knapperne [*Left*, *Right* og *Top*](/24Miscellaneous/24_54_WinDoor_overhangs_and_side-fins.html), som kalder dialoger frem til definition af geometrien for sidefinner og udhæng.   
<span id="red_text">**NB:** Overhang og Sidefin fungerer **nu** også sammen med [XSun solfordeling](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) men vises ikke i [XSun](/14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.html). Hvis et udhæng over eller langs et vindue skal simuleres med XSun solfordeling bør disse opbygges geometrisk i modellen.   
Hvis Overhang eller Sidefin benyttes **sammen med** XSun solfordeling, er der risiko for dobbelt afskygning på Windoor og dermed stærkt reduceret solindfald. </span>

På baggrund af disse oplysninger beregner programmet ramme-/karmarealet og fyldningsarealet samt arealet af kalfatringsfugen. Den samlede U-værdi for en *WinDoor* beregnes i henhold til anvisningerne i tillægget til [DS418](/20The_Mathematical_Basis/20_28_Literature.html) om beregning af varmetabet gennem vinduer og døre.
