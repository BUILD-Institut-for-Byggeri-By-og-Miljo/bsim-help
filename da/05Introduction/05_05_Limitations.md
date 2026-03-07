<link rel="stylesheet" href="../style.css">

# Begrænsninger

<center><em>Der findes en række begrænsninger som knytter sig til brugen af forskellige programmer i BSim programpakken.</em></center>


 

Sammenligning resultater fra flere modeller

*   Hvis modelnavnet er for langt er det ikke muligt at sammenligne resultater fra forskellige modeller i [*tsbi5* på fanebladet *Tables*](/13tsbi5_thermal_simulation/13_04_Parameters_in_the_output_log.html).

    *   Modellens navn må maksimalt være på 63 tegn.


Materialeegenskaber for nye materialer i databasen

*   Skal der defineres et ny materiale i materialedelen af databasen <u>skal</u> alle tilgængelige felter udfyldes for det pågældende materiale. Hvis materialet defineres i en database med materialeværdier for fugttransport <u>skal</u> disse udfyldes. Sker det ikke vil resultaterne fra en simulering - også uden fugttransport - blive forkerte idet materialet vil blive opfattet som et luftlag i konstruktionen.<div id="red_text">Fra og med version 4,6,7,12 vil det blive betragtet som en fejl, og der kan ikke simuleres før alle materialeværdier er defineret.</div>

*   Ved at klikke på *About*-knappen i [*SimDB*](/07SimDB_Database/07_06_Building_material_moisture.html) åbnes en dialog som viser egenskaberne for den valgte database. I nedenstående eksempel indeholder databasen materialedata for fugttransport (Moisture), solceller (Pv Arrays), og detaljeret simulering af glastemperaturen (Glazing Extra).

<figure id="center_img">
<img src="./assets/about_simdb.jpg " alt="Caption">
<figcaption></figcaption>
</figure>

Varmeledningsevne (lambda) i simuleringer med *tsbi5*

*   Der benyttes en forskellig varmeledningsevne (lambda-værdi) afhængig af om "Moisture Transport" er slået eller fra på "Options" fanebladet af tsbi5. Hvis "Moisture Transport" er slået fra benyttes værdien fra "[Thermal](/07SimDB_Database/07_04_Building_material_thermal.html)" fanebladet i SimDb. Hvis "Moisture Transport" er slået til benyttes værdien fra "[Moisture](/07SimDB_Database/07_06_Building_material_moisture.html)" fabelbadet. 

 

Tidsskridt i simuleringer med *tsbi5*

*   Antallet af tidsskridt pr. time er et udtryk for hvor hurtigt temperatur og fugt ænders som følge af ydre påvirkninger. *tsbi5* beregner ved starten af hver simulering hvor mange tidsskridt pr. time det er nødvendigt at have for at opnå en stabil simulering. Et stort antal tidsskridt betyder derfor at modellen er meget følsom over for påvirkninger. Hvis er valgt et antal tidsskridt som er mindre end hvad *tsbi5* kræver for at opnå en stabil simulering advares der herom og det anbefalede antal tidsskridt vises.

<figure id="center_img">
<img src="./assets/timestep.jpg " alt="Caption">
<figcaption></figcaption>
</figure>

*   Det er muligt at fortsætte med det valgte antal tidsskridt eller med det af tsbi5 beregnede antal. Antallet af tidsskridt vælges på *Options* fanebladet under *tsbi5*.

*   <div id="gray_background"> Især i forbindelse med avanceret simulering af fugttransport i konstruktionerne er det vigtigt at sikre det rette antal tidsskridt! </div>

 

Resultatsammenligning

*   I nogle tilfælde viser BSim en fejlmeddelelse som "The selected file must be located in the folder 'x:\xxxxxxxxxxxx' like the current log" når en tsbi5 resultatfil åbnes [for sammenligning med den aktuelle resultatfil](/13tsbi5_thermal_simulation/13_04_Parameters_in_the_output_log.html). BSim opfatter at de to resultatfiler er placeret i forskellige fil-mapper, og dermed ikke kan sammenlignes. Fænomenet optræder på visse typer af netværk. Det er muligt at omgå problemet ved at sørge for at alle fil-mapper i den aktuelle sti er navngivet med højest 8 karakterer og uden mellemrum eller specialtegn.

 

Solfordeling på delflader

*   Med *XSun* sluet **til** på [*Options*](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) fanebladet til simuleringerne med tsbi5, vil det direkte solindfald blive fordelt geometrisk korrekt til alle delflader i en flade (fx et gulv opdelt i flere felter).

*   Hvis XSun er sluet **fra** vil solindfaldet blive fordelt efter de enkelte delfladers areal og den fordelingsnøgle som gives i [*ThermalZone Property*](/10Thermal_zones/10_01_Thermal_zone_property.html) dialogen.

*   Solpåvirkningen vil således blive den samme (pr. m²) for alle delflader i gulve, vægge og lofter, ligegyldigt hvor i rummet delfladen er placeret (fx ved bagvæg og ved vindue).

 

Flader/rum med store glasandele

*   Hvis der ønskes gennemført en simulering med langbølget strålingsudveksling af en termisk zone eller en flade med en meget stor andel glas, er det nødvendigt at være meget omhyggelig med den geometriske opbygning og opbygningen af konstruktionerne.

*   *Geometrien* bør om muligt opbygges så glasset kun udgør en mindre andel af den termiske zones / fladens samlede areal. Fx kan en U-formet termisk zone med et stort vindue i bunden af U'et, langs facaden, opbygges som angivet i nedenstående figur.

<figure id="center_img">
<img src="./assets/glassfacade.gif " alt="Caption">
<figcaption></figcaption>
</figure>

*   Opbygningen til højre giver en mere stabil simulering end opbygningen til venstre, idet facadearealet der fordeles solstråling til er større i rummet omkring vinduet

*   *Konstruktionerne* bør altid opbygges så kun de materialelag som har termisk betydning for en korrekt simulering af modellen medtages. Fx bør et tyndt, godt ledende materialelag på ydersiden erstattes med en maling med tilsvarende overfladeegenskaber som *ExtConstFinish*.

 

Beregning af solceller

*   Hvis der ikke er tilknyttet et materiale til de arealer i modellen som er med solceller, benyttes data for almindelige polykrystallinske solceller (systemeffektivitet 10 % og ingen proportional reduktion af ydelsen ved delskygger).

 

Oprettelse af faces i SimDxf

*   Hvis det er umuligt at oprette en flade (face) mellem to knudepunkter i SimDxf, er årsagen ofte at knudepunktere <u>ikke</u> har én linie fra cad-tegningen fælles. På den relevante hjælpeside er der beskrevet en mulig [metode](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_02_SimDXF_surfaces.html) til at omgå problemet.

 

Langbølget strålingsudveksling med himlen

*   Når der regnes med langbølget strålingsudveksling med himlen (slås til og fra med *Longwave Rad*. *to Sky* på fanebladet [Options i tsbi5](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html)) er det alene strålingsudvekslingen med himlen som medtages i simuleringen. Der regnes således ikke med strålingsudveksling med eventuelt omkringliggende bygninger eller fremspring på bygningen selv. Strålingsudvekslingen er således alene afhængig af temperaturforskellen mellem en overflade og himlen, hhv. jorden og den hældning fladen har.

*   Det er planen, på et senere tidspunkt, at implementere strålingsudveksling med andre bygninger og fremspring på bygningen. Se også: Langbølget strålingsudveksling mellem en termisk zones indvendige overflader.

 

[VAV-regulering](/11Systems/11_24_VAV_control_ventilation.html) og [kølelofter](/11Systems/11_03_Cooling_system.html)

*   Der bør **ikke** simuleres kølelofter i forbindelse med VAV-regulering af ventilationssystemet. Denne kombination vil medfører for høje kølebehov, idet den forøgede luftstrøm fra VAV-reguleringen **ikke** reduceres til normal luftstrøm, hvis setpunktet for køleloftet overskrides. Det bedste skøn på kølebehovet fås ved brug af en køleflade i ventilationsanlægget.

 

Indvendige vinduer

*   Når der skal simuleres indvendige vinduer (vinduer mellem termiske zoner og rum eller andre termiske zoner), bør der være sat en markering ved *XSun Distribution* på fanebladet [*Options*](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) i [*tsbi5*](/13tsbi5_thermal_simulation/13_01_tsbi5_Main_page.html). Det er muligt at gennemføre en simulering uden XSun solfordelingen, men resultaterne kan <u>kun</u> benyttes til et groft skøn.

 

Langbølget strålingsudveksling mellem en termisk zones indvendige overflader

*   Det er <u>kun</u> muligt at regne med langbølget strålingsudveksling i [tsbi5](/13tsbi5_thermal_simulation/13_01_tsbi5_Main_page.html) i de rum der er konvekse. Det er muligt at opbyge en termisk zone som ikke er konveks, ved at sammensætte konvekse rum i den samme termiske zone.

*   Simuleringen af den langbølgede strålingsudveksling mellem en termisk zones indvendige overflader slås til og fra med optionen *Longwave Radiation* på [Options fanebladet](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) i tsbi5. Se også: Langbølget strålingsudveksling med himlen.

 

Dagslysberegning med [SimLight](/15SimLight_Daylight_calculations/15_01_SimLight_Main_page.html)

1.   Det er <u>kun</u> muligt at regne på dagslys i SimLight i de rum som er konvekse.

2.  I beregningerne med SimLight tages der <u>ikke</u> hensyn til eventuelle naborum til det rum der regnes på, dvs. der kommer lys gennem indvendige vinduer som om de vender imod det fri.

3.  Der kan <u>kun</u> regnes med SimLight i rum med <u>rektangulære</u> vinduer.

 

Luftbalance

*   Hvid der introduceres en ubalance i luftstrømmen til eller fra en termisk zone, vil tsbi5 automatisk balancerer denne ubalance ved in- eller eksfiltration med udeluft. Dette uagtet at den termiske zone fysisk måtte være placeret <u>uden</u> direkte forbindelse til det fri.

 

Systemer

*   Der kan <u>kun</u> optraede et system (undtagen [*Mixing*](/11Systems/11_31_Mixing_system.html) og [*Heating*](/11Systems/11_02_Heating_system.html) - radiator og gulvvarme) i en termisk zone ad gangen. Der kan godt optraede forskellige reguleringer til forskellige [tidsangivelser](/24Miscellaneous/24_06_Time_scheme.html), men <u>kun</u> et system kan være aktivt ad gangen.

 

[XSun video](/14XSun_Analysis_of_incident_solar_radiation/14_02_XSun_video.html)-optagelser

*   Optagelsen og afspilningen af videoen sker i den størrelse vindue BSim har under optagelsen. Hvis fokus skifter fra BSim til en anden kørende applikation, fx ved hjælp af Alt+Tab, vil den del af denne applikation som fysisk er inden for det BSim vindue som optages, blive optaget i stedet for XSun animationen.

 

[XSun](/14XSun_Analysis_of_incident_solar_radiation/14_01_Solar_radiation_analysis.html)

*   Hvis der opbygges en model som giver mulighed for at sende solen fra et rum ind i et naborum, gennem dette og tilbage til det oprindelige rum, vil der opstå en uendelig løkke. Dette specialtilfælde findes og fejlen forhindres ved at afskære solen fra at passerer naborummet og tilbage til det oprindelige rum. Herved opstår en fejl i beregningerne.