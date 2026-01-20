<link rel="stylesheet" href="../style.css">

# SimView - Udskrift af model
Alternativt til *ModelList* er *ModelDoc* som kaldes via *View* | [*ModelDoc*](/24Miscellaneous/24_29_Model_DOC.html). *ModelDoc* er en sorteret dokumentation af modellen.

Når *ModelList* er valgt fra værktøjsbjælken, eller der arbejdes i *XSun*, *tsbi5* eller *SimLight*, kan den viste information udskrives direkte på en printer

<img src="./assets/18SimView - Udskrift af model.png" width=20> Vises en ikon som et stopsignal i starten af en linie, angiver det, at der kan være fejl, eller at der mangler data. Ved dobbelt-klik eller Ctrl-klik på linien flyttes fokus til det pågældende objekt i den hierarkiske oversigt. Højre-klik på objektet i træet for at rette eller tilføje data. Oversigten kan opdateres ved igen at klikke på *ModelList*-ikonet. Klik [her](/06BSim_Program_structure/06_08_Error_messages.html) for at se forklaringer til [fejlmeddelelserne](/06BSim_Program_structure/06_08_Error_messages.html) i *ModelList*.

Det er <u>ikke</u> muligt at gennemføre en tsbi5 simulering med *ModelList* åben, eller lukket ned som en ikon.

I tabellen ses betydningen af de enkelte ikoner i modellisten og træ-oversigten.

| <img src="./assets/1SimView - Udskrift af model.png" width=20> | Generelt anvendt ikon. Dobbelt-klik fører **ikke** tilbage til et objekt i træet. |
|---|---|
| <img src="./assets/2SimView - Udskrift af model.png" width=20> | Konstruktion. |
| <img src="./assets/3SimView - Udskrift af model.png" width=20> | Bygningselement. |
| <img src="./assets/4SimView - Udskrift af model.png" width=20> | Kølesystem (*Cooling*). |
| <img src="./assets/5SimView - Udskrift af model.png" width=20> | Database. |
| <img src="./assets/6SimView - Udskrift af model.png" width=20> | Udstyr (*Equipment*). |
| <img src="./assets/7SimView - Udskrift af model.png" width=20> | Overflade (*Finish*) for en konstruktion. |
| <img src="./assets/8SimView - Udskrift af model.png" width=20> | Overfladeegenskaber for en konstruktion (*Finish material*). |
| <img src="./assets/9SimView - Udskrift af model.png" width=20> | Varmeanlæg (*Heating*). |
| <img src="./assets/10SimView - Udskrift af model.png" width=20> | Infiltration. |
| <img src="./assets/11SimView - Udskrift af model.png" width=20> | Belysning (*Lighting*). |
| <img src="./assets/12SimView - Udskrift af model.png" width=20> | Fugtbelastning (*Moisture*). |
| <img src="./assets/13SimView - Udskrift af model.png" width=20> | Udhæng og sidefinner (*Overhang and sidefin*). |
| <img src="./assets/14SimView - Udskrift af model.png" width=20> | Personbelastning (*People*). |
| <img src="./assets/15SimView - Udskrift af model.png" width=20> | Rum. |
| <img src="./assets/16SimView - Udskrift af model.png" width=20> | Solafskærmning (*SolarShading*). |
| <img src="./assets/17SimView - Udskrift af model.png" width=20> | Beliggenhed, bl.a. klimadata (*Site*). |
| <img src="./assets/18SimView - Udskrift af model.png" width=20> | Stopsignal, viser en kritisk fejl som forhindrer tsbi5 i at simulere. |
| <img src="./assets/19SimView - Udskrift af model.png" width=20> | Definition af temperaturen i et rum. |
| <img src="./assets/20SimView - Udskrift af model.png" width=20> | Bygning. |
| <img src="./assets/21SimView - Udskrift af model.png" width=20> | Tidsangivelse. |
| <img src="./assets/22SimView - Udskrift af model.png" width=20> | Ventilation. |
| <img src="./assets/23SimView - Udskrift af model.png" width=20> | Udluftning (*Venting*). |
| <img src="./assets/24SimView - Udskrift af model.png" width=20> | Advarsel om mulige manglende data. Der kan gennemføres en tsbi5 simulering med advarsler i modellen. |
| <img src="./assets/25SimView - Udskrift af model.png" width=20> | Vinduer og døre (WinDoor) uden åbning. |
| <img src="./assets/26SimView - Udskrift af model.png" width=20> | Vinduer og døre (WinDoor) med åbning til naturlig ventilation (BSim udvidelse). |
| <img src="./assets/27SimView - Udskrift af model.png" width=20> | Systemer. |
| <img src="./assets/28SimView - Udskrift af model.png" width=20> | Beskrivelse. |
| <img src="./assets/29SimView - Udskrift af model.png" width=20> | Jord (*Ground*) med temperaturvariation. |
| <img src="./assets/30SimView - Udskrift af model.png" width=20> | Definition af køling (*Cooling*). |
| <img src="./assets/31SimView - Udskrift af model.png" width=20> | Isolerende vinduesskodde (*Shutter*). |
| <img src="./assets/32SimView - Udskrift af model.png" width=20> | Døgnprofil (*Dayprofile*). |
| <img src="./assets/33SimView - Udskrift af model.png" width=20> | Åbning (*Opening*). |
| <img src="./assets/34SimView - Udskrift af model.png" width=20> | Mixing |
| <img src="./assets/35SimView - Udskrift af model.png" width=20> | Termisk zone |

 

Når et system er de-aktiveret i SimView optræder de i *ModelList* med deres respektive ikon, overstreget med et rødt kryds.

 

Se også:

*   [Oprette en bygning](/09SimView/09_14_SimView_Creating_a_building.html)

*   [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)

*   [Standardkonstruktioner](/24Miscellaneous/24_28_Insert_Default_Options.html)

*   [Tilknytte ikke-standardkonstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html)

*   [Oprette en termisk zone](/10Thermal_zones/10_01_Thermal_Zone_property.html)

*   [Tilføje rum til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html)

*   [Tilføje systemer til termiske zoner](/11Systems/11_01_Systems_property.html)

*   [Redigere geometrien](/09SimView/09_02_SimView_Editing_the_model_geometry.html)

*   [Tilføje konstruktioner](/24Miscellaneous/24_28_Insert_Default_Options.html)

*   [Tilføje en åbning eller WinDoor](/09SimView/09_07_Windoor_property.html)

*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)

*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)

*   [Udskrift af model](/06BSim_Program_structure/06_07_SimView_Printing_a_model.html)

