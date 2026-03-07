<link rel="stylesheet" href="../style.css">

# Opbygning af model


Abstraktion, beskrivelsen af essensen af problemet i den syntaks som et simuleringsværktøj benytter, er en af de mest vanskelige opgaver, både for novicen og eksperten. Det er sjældent at der er dels ressourcerne og dels grunden til at gennemføre en en-til-en beskrivelse af virkeligheden i programmet. Det kan være nyttigt at beskrive en pc som en varmekilde hvorimod ingen vil finde på at beskrive boksen med disketter eller bogen på skrivebordet. En generel regel for abstraktion er at stræbe efter, at bibeholde volumen, overfladeareal og termisk masse inden for en termisk zone. Denne vejledning er for kort til at give en komplet redegørelse for dette emne.

Indlæringskurven i brugen af BSim, som er i stand til at modellere en lang række forskellige typer af problemer, er ikke ligegyldig. Som i de fleste avancerede ingeniør programmer er der problemet med syntaksen - udtrykt med dialoger og menuer, som styrer programmet og dets data, der tilsammen udgør dets inddata og uddata. Yderligere problematisk for nye brugere er betydningen af systemet i henseende af hvordan programmet forudsætter de forskellige fysiske fænomener modelleret.

Styrken, og på samme tid svagheden, ved BSim er dets evne til at tilbyde brugeren forskellige måder at beskrive og analysere et problem. Ikke alene forventer BSim en beskrivelse af problemet som er systematisk korrekt (der er selvfølgelig en række indbyggede sandsynlighedscheck), men det antager at problemet har mening i termodynamisk henseende. Det vil sige, at programmet ikke har nogen mulighed for at checke betydningen af den opbyggede model.

For at være effektiv kræver indlæringen mere end blot adgang til en pc, noget dokumentation og tilstrækkelig tid til at finde ud af tingene ved "trial and error" metoden. Denne brugervejledning er et skridt på vejen til at gøre denne indlæringskurve mindre pinefuld. Vejledningen kan på ingen måde erstatte adgangen til en erfaren bruger af programmet eller egentlig træning, men er snarere en hjælp i gennemførelsen af denne proces. Det er hermed ikke sagt at det ikke er muligt at blive ekspert ved selvstudier, men at de ikke tekniske aspekter af simuleringsprocessen er svære at kommunikere.

Der er en række gyldne regler som bør overholdes ved opbygning af modeller til simulering af de termiske forhold i bygninger:

*   Brug den nødvendige [tid](/24Miscellaneous/24_46_Time_consumption.html) til at indsamle viden (tegninger, materialedata, belastninger m.v.) om bygningen.

*   Overvej i forvejen problemstillingen og hvilke spørgsmål der skal besvares ved simuleringen.

*   Opbyg modellen så simpelt som muligt under hensyntagen til ovenstående.

*   Vurder løbende (under modelopbygningen) om resultaterne er sandsynlige.

I afsnittet med [indlæringseksempler](/21Getting_started_with_BSim/21_02_Learning_examples.html) findes tre eksempler som leder førstegangsbrugeren igennem en simpel opbygning af en bygningsmodels geometri, over tilføjelse af systemer til modellen til den første simulering med tsbi5-programmet.

Via nedenstående ordnede rækkefølge af forbindelser til forskellige sider i brugervejledningen gives en gennemgang af et typisk arbejdsforløb fra starten af et projekt over redigering af modelgeometrien til den endelige simulering med *tsbi5*-programmet.

Inden opbygningen af modellen starter er det en god ide at være bekendt med den måde programmet er [opbygget](/06BSim_Program_structure/06_01_Structure_of_BSim.html).

*   Der findes en række [genvejstaster](/05Introduction/05_06_Shortcut_keys.html) i *BSim*

*   Modellen redigeres ved hjælp af [menuen](/06BSim_Program_structure/06_06_SimView_Menu.html) i *SimView*.

*   [Musen](/06BSim_Program_structure/06_03_Mouse_operations_in_SimView.html) er et værktøj som kan benyttes på flere måder i *SimView*.

*   Øverst i programfladen findes en [værktøjsbjælke](/06BSim_Program_structure/06_05_SimView_Toolbar.html) som giver adgang til forskellige funktioner i *BSim*.

*   [Menuerne](/06BSim_Program_structure/06_04_Program_menus_in_BSim.html) i BSim er interaktive og giver **kun** adgang til de funktioner som kan benyttes på det aktuelle sted i programmet.

I slutningen af hver linie er markeret med *kursiv* i hvilket af BSim's programmer den givne beskrivelse tilhører.

*   Et nyt projekt oprettes med en [wizard](/09SimView/09_12_Model_wizard_creating_a_new_model.html).

*   Der oprettes en [bygningsmodel](/06BSim_Program_structure/06_09_SimView_Creating_a_building.html) i projektet med *SimView*.

*   Der tilføjes flere [rum](/09SimView/09_15_SimView_Creating_a_space.html) til modellen i *SimView*.

*   Modelgeometrien [redigeres](/09SimView/09_02_SimView_Editing_the_model_geometry.html) med *SimView*.

*   Der tilknyttes [standardkonstruktioner](/07SimDB_Database/07_02_SimDB_BuildingElement.html) fra databasen *SimDB*.

*   [Nye materialer](/07SimDB_Database/07_06_SimDB_BuildingMaterial.html) oprettes til brug for nye konstruktioner i databasen *SimDB*.

*   [Nye konstruktioner](/07SimDB_Database/07_02_SimDB_BuildingElement.html) oprettes fra materialerne i databasen *SimDB*.

*   Enkelte [standardkonstruktioner overskrives](/09SimView/09_09_SimView_Non_default_constructions.html) med konstruktioner fra *SimDB*.

*   Der [tilføjes vinduer, døre og åbninger](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html) i fladerne i *SimView*.

*   Der tilføjes systemer til vinduerne.

    *   [Solafskærmning](/11Systems/11_16_Systems_shading.html)

    *   [Skodder](/11Systems/11_15_Systems_shutter.html)

*   En flade [udfyldes helt](/24Miscellaneous/24_30_SimView_Insert_Windoor.html) med et vindue eller en åbning i *SimView*.

*   [Skygger fra omgivelser](/10Thermal_zones/10_05_Shadows_from_the_surroundings.html) tilføjes modellen i *SimView*.

*   Simulering af solindfaldet i modellen med [*XSun*](/14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.html).

*   [Beregning af dagslysforholdene](/15SimLight_Daylight_calculations/15_01_Daylight_calculations_with_SimLight.html) i et rum beregnes med *SimLight*.

*   [Oprettes termiske zoner](/10Thermal_zones/10_01_Thermal_Zone_property.html) for simulering i *tsbi5*.

*   [Rummene i modellen tilknyttes de termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html) i *SimView*.

*   Der [tilføjes systemer](/11Systems/11_01_Systems.html) til de termiske zoner i *SimView*.

    *   [Køling](/11Systems/11_09_Systems_cooling.html)

    *   [Udstyr](/11Systems/11_19_Systems_Equipment.html)

    *   [Opvarmning](/11Systems/11_12_Systems_Heating.html)

    *   [Infiltration](/11Systems/11_08_Systems_Infiltration.html)

    *   [Belysning](/11Systems/11_03_Systems_Lighting.html)

    *   [Mixing](/11Systems/11_10_systems_mixing.html) (luftoverførsel mellem termiske zoner)

    *   [Fugt](/11Systems/11_05_Systems_Moisture.html)

    *   [Personer](/11Systems/11_13_Systems_Persons.html)

    *   [Ventilation](/11Systems/11_21_Systems_Ventilation.html)

    *   [Udluftning](/11Systems/11_18_Systems_Venting.html)

*   [Simulering](/13tsbi5_thermal_simulation/13_01_tsbi5.html) med *tsbi5*.

*   Den [grafiske præsentation af resultaterne](/13tsbi5_thermal_simulation/13_12_Modifying_the_graphical_presentation_of_results.html) kan ændres.

*   Grafik og data kan [importeres](/19BSim_and_other_windows_programs/19_01_BSim_and_other_Windows_programs.html) i andre Windows programmer.

 

Se også:

*   [Indlæringseksempler](/21Getting_started_with_BSim/21_02_Learning_examples.html)


