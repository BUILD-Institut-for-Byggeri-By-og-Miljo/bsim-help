<link rel="stylesheet" href="../style.css">

# Udskrift af model
Alternativt til *ModelList* er *ModelDoc* som kaldes via *View* | [*ModelDoc*](/09SimView/09_04_Documentation_of_model.html). *ModelDoc* er en sorteret dokumentation af modellen.

Når *ModelList* er valgt fra værktøjsbjælken, eller der arbejdes i *XSun*, *tsbi5* eller *SimLight*, kan den viste information udskrives direkte på en printer

<img src="./assets/STOP.GIF" width=15> Vises en ikon som et stopsignal i starten af en linie, angiver det, at der kan være fejl, eller at der mangler data. Ved dobbelt-klik eller Ctrl-klik på linien flyttes fokus til det pågældende objekt i den hierarkiske oversigt. Højre-klik på objektet i træet for at rette eller tilføje data. Oversigten kan opdateres ved igen at klikke på *ModelList*-ikonet. Klik [her](/06BSim_Program_structure/06_14_Error_messages.html) for at se forklaringer til [fejlmeddelelserne](/06BSim_Program_structure/06_14_Error_messages.html) i *ModelList*.

Det er <u>ikke</u> muligt at gennemføre en tsbi5 simulering med *ModelList* åben, eller lukket ned som en ikon.

I tabellen ses betydningen af de enkelte ikoner i modellisten og træ-oversigten.

<img src="./assets/1SimView - Udskrift af model.png" width=15> Generelt anvendt ikon. Dobbelt-klik fører **ikke** tilbage til et objekt i træet.
<br> 

<img src="./assets/2SimView - Udskrift af model.png" width=15> Konstruktion.
<br> 

<img src="./assets/3SimView - Udskrift af model.png" width=15> Bygningselement.
<br> 

<img src="./assets/4SimView - Udskrift af model.png" width=15> Kølesystem (*Cooling*).
<br> 

<img src="./assets/5SimView - Udskrift af model.png" width=15> Database.
<br> 

<img src="./assets/6SimView - Udskrift af model.png" width=15> Udstyr (*Equipment*).
<br> 

<img src="./assets/7SimView - Udskrift af model.png" width=15> Overflade (*Finish*) for en konstruktion.
<br> 

<img src="./assets/8SimView - Udskrift af model.png" width=15> Overfladeegenskaber for en konstruktion (*Finish material*).
<br> 

<img src="./assets/9SimView - Udskrift af model.png" width=15> Varmeanlæg (*Heating*).
<br> 

<img src="./assets/10SimView - Udskrift af model.png" width=15> Infiltration.
<br> 

<img src="./assets/11SimView - Udskrift af model.png" width=15> Belysning (*Lighting*).
<br> 

<img src="./assets/12SimView - Udskrift af model.png" width=15> Fugtbelastning (*Moisture*).
<br> 

<img src="./assets/13SimView - Udskrift af model.png" width=15> Udhæng og sidefinner (*Overhang and sidefin*).
<br> 

<img src="./assets/14SimView - Udskrift af model.png" width=15> Personbelastning (*People*).
<br> 

<img src="./assets/15SimView - Udskrift af model.png" width=15> Rum.
<br> 

<img src="./assets/16SimView - Udskrift af model.png" width=15> Solafskærmning (*SolarShading*).
<br> 

<img src="./assets/17SimView - Udskrift af model.png" width=15> Beliggenhed, bl.a. klimadata (*Site*).
<br> 

<img src="./assets/18SimView - Udskrift af model.png" width=15> Stopsignal, viser en kritisk fejl som forhindrer tsbi5 i at simulere.
<br> 

<img src="./assets/19SimView - Udskrift af model.png" width=15> Definition af temperaturen i et rum.
<br> 

<img src="./assets/20SimView - Udskrift af model.png" width=15> Bygning.
<br> 

<img src="./assets/21SimView - Udskrift af model.png" width=15> Tidsangivelse.
<br> 

<img src="./assets/22SimView - Udskrift af model.png" width=15> Ventilation.
<br> 

<img src="./assets/23SimView - Udskrift af model.png" width=15> Udluftning (Venting).
<br> 

<img src="./assets/24SimView - Udskrift af model.png" width=15> Advarsel om mulige manglende data. Der kan gennemføres en tsbi5 simulering med advarsler i modellen.
<br> 

<img src="./assets/25SimView - Udskrift af model.png" width=15> Vinduer og døre (WinDoor) uden åbning.
<br> 

<img src="./assets/26SimView - Udskrift af model.png" width=15> Vinduer og døre (WinDoor) med åbning til naturlig ventilation (BSim udvidelse).
<br> 

<img src="./assets/27SimView - Udskrift af model.png" width=15> Systemer.
<br> 

<img src="./assets/28SimView - Udskrift af model.png" width=15> Beskrivelse.
<br> 

<img src="./assets/29SimView - Udskrift af model.png" width=15> Jord (*Ground*) med temperaturvariation.
<br> 

<img src="./assets/30SimView - Udskrift af model.png" width=15> Definition af køling (*Cooling*).
<br> 

<img src="./assets/31SimView - Udskrift af model.png" width=15> Isolerende vinduesskodde (*Shutter*).
<br> 

<img src="./assets/32SimView - Udskrift af model.png" width=15> Døgnprofil (*Dayprofile*).
<br> 

<img src="./assets/33SimView - Udskrift af model.png" width=15> Åbning (*Opening*).
<br> 

<img src="./assets/34SimView - Udskrift af model.png" width=15> Mixing
<br> 

<img src="./assets/35SimView - Udskrift af model.png" width=15> Termisk zone.
<br> 

Når et system er de-aktiveret i SimView optræder de i *ModelList* med deres respektive ikon, overstreget med et rødt kryds.

 

Se også:

*   [Oprette en bygning](/09SimView/09_14_SimView_Creating_a_building.html)
*   [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)
*   [Standardkonstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilknytte ikke-standardkonstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html)
*   [Oprette en termisk zone](/10Thermal_zones/10_01_Thermal_Zone_property.html)
*   [Tilføje rum til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html)
*   [Tilføje systemer til termiske zoner](/11Systems/11_01_Systems.html)
*   [Redigere geometrien](/10Thermal_zones/10_04_SimView_Editing_the_model_geometry.html)
*   [Tilføje konstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilføje en åbning eller WinDoor](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html)
*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)
*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)
*   [Udskrift af model](/10Thermal_zones/10_09_SimView_Printing_a_model.html)