<link rel="stylesheet" href="../style.css">

# SimView - Systemer

Et system består af den generelle fysiske komponent, beskrevet ved en simpel matematisk model, samt en tidsplan, der angiver variationer, styringsstrategier m.m., defineret ved sammenhørende par af regulering og tidsangivelse, jf. figuren.

<figure id="center_img">
<img src="./assets/system-niam.gif" alt="Generel beskrivelse af systemer."> 
<figcaption>Generel beskrivelse af systemer.</figcaption>
</figure>

Alle systemer i *BSim* reguleres efter en operative temperatur i den termiske zone de er knyttet til.

Til en bygningsmodel skal alle de installationer og belastninger defineres, som har indflydelse på det termiske indeklima. De kaldes i det følgende under et for *komponenter.*

Komponenter beskrives ved simplificerede modeller af de fysiske installationer, belastninger m.m. De tilhørende variationer, styringsstrategier m.m. beskrives særskilt som en *regulering* af komponenten. Fx beskrives [personlast](/11Systems/11_13_Systems_Persons.html), dvs. varme- og fugtbelastningen fra personer i en zone, som det maksimale antal personer af en given type er angivet som én persons varme- og fugtafgivelse ved et givet aktivitetsniveau. Variationen af personlasten over året og døgnet angives som en regulering, i dette tilfælde som et døgnprofil, dvs. en procentvis døgnvariation af personlasten.

I nedenstående tabel gives en oversigt over elementer med deres mulige tilknyttede komponenter og reguleringer. I tilfælde, hvor en komponent kan have mere end én type regulering, angives tillige reguleringstyper, som kan anvendes ved valg af regulering.

Til ethvert system i en bygningsmodel kan der angives én eller ingen komponent af en given type. I de tilfælde, hvor der er valgt en komponent, angives reguleringen af komponenten ved hjælp af en [tidsplan](/11Systems/11_02_Systems_schedule.html)*.* En tidsplan består generelt af ét eller flere sammenhørende par af *regulering* og *tidsangivelse.* Ved reguleringen angives, hvorledes komponenten skal reguleres eller modificeres til de tidspunkter, der falder inden for den tilhørende [tidsangivelse](/11Systems/11_17_Systems_Time.html).

Kombinationen af komponent og den tilhørende tidsplan betegnes et system og definerer en indeklimamæssig påvirkning af bygningen til et vilkårligt tidspunkt under en simulering.

| Element | Komponent | Regulering | Type |
|---------|-----------|------------|------|
| <b>Zone</b>    |           |            |      |
|         | [Personlast](/11Systems/11_13_Systems_Persons.html) | [Døgnprofil](/11Systems/11_04_Systems_DayProfile.html) | - |
|         | [Last fra udstyr](/11Systems/11_19_Systems_Equipment.html) | [Døgnprofil](/11Systems/11_04_Systems_DayProfile.html) | - |
|         | [Fugtlast](/11Systems/11_05_Systems_Moisture.html) | [Døgnprofil](/11Systems/11_04_Systems_DayProfile.html) | - |
|         | [Infiltration](/11Systems/11_08_Systems_Infiltration.html) | [Døgnprofil](/11Systems/11_04_Systems_DayProfile.html) | - |
|         | [Belysning](/11Systems/11_03_Systems_Lighting.html) | [Lysregulering](/11Systems/11_03_Systems_Lighting.html) | Sol / temperatur |
|         |           | [Dagslysregulering](/11Systems/11_03_Systems_Lighting.html) | Dagslys |
|         | [Udluftning](/11Systems/11_18_Systems_Venting.html) | [Udluftningsregulering](/11Systems/11_18_Systems_Venting.html) | - |
|         | [Opvarmning](/11Systems/11_12_Systems_Heating.html) | [Varme](/11Systems/11_12_Systems_Heating.html)-/køleregulering | Heating |
|         |           | [Gulvvarmeregulering](/11Systems/11_07_Floor_Heating_Control.html) | Heating2 |
|         | [Køling](/11Systems/11_09_Systems_cooling.html) | Varme-/[køleregulering](/11Systems/11_09_Systems_cooling.html) | - |
|         | [Ventilationsanlæg](/11Systems/11_21_Systems_Ventilation.html) | [Indblas ningsstyring](/11Systems/11_23_Ventilation_Inlet_Control.html) | Indblas ning |
|         |           | [Rumtemperaturregulering](/11Systems/11_25_Ventilation_Zone_Temperature_control.html) | Rumtemperatur |
|         |           | [Fugtstyring](/11Systems/11_22_Ventilation_Moisture_control.html) | Fugt |
|         |           | [VAV regulering](/11Systems/11_26_Ventilation_VAV_control.html) | VAV |
|         |           | [Natkøling](/11Systems/11_24_Ventilation_Night_Cooling_Control.html) | Natkøling |
|         |           | [Recirkulation](/11Systems/11_28_Ventilation_Recirculation.html) |   |
|         | [Mixing](/11Systems/11_10_systems_mixing.html) | [Døgnprofil](/11Systems/11_04_Systems_DayProfile.html) | . |
| <b>Vindue</b>  |           |            |      |
|         | [Skodde](/11Systems/11_15_Systems_shutter.html) | [Temperaturregulering](/11Systems/11_15_Systems_shutter.html) | - |
|         | [Solafskærmning](/11Systems/11_16_Systems_shading.html) | [Afskærmningsregulering](/11Systems/11_16_Systems_shading.html) | - |
| <b>Fiktiv zone</b> |       |            |      |
|         | -        | Temp og/eller fugt variation | - |


*Oversigt over elementer i bygningsmodellen, hvortil der kan knyttes systemer bestående af komponent og tidsplan.*

Systemer tilknyttes de termiske zoner og vælges ved "afkrydsning" i dialogen *ThermalZone* Property, som kaldes frem ved højre-klik på ikonet for en termisk zone i træ-oversigten til venstre på skærmen. For de valgte systemer skal regulering og tidsplan herefter defineres.

<figure id="center_img">
<img src="./assets/system_add.gif" alt="Dialog (ThermalZone Property) for valg, inaktivering og fravalg af systemer der skal tilknyttes en termisk zone."> 
<figcaption>Dialog (ThermalZone Property) for valg, inaktivering og fravalg af systemer der skal tilknyttes en termisk zone.</figcaption>
</figure>

Check-boksene ud for de enkelte systemer har tre funktioner:

*   Første gang der klikkes i en tom boks tilføjes systemet til den termiske zone og markeringen vises som et sort check-mærke i en hvid boks, fx Cooling, Equipment og Heating. Systemet optræder i træ-oversigten uden foranstillet "+" så længe der **ikke** er defineret en tidsplan *(schedule).*

*   Anden gang der klikkes i boksen bliver systemet inaktivt i simuleringen med tsbi5 og markeres med et gråt check-mærke i en grå boks, fx Mixing. Når et system er inaktivt vil det **ikke** blive fejlchecket og **ikke** optræde i *[ModelList](/09SimView/09_11_Model_information.html).* Systemet vises i træstrukturen som den gældende ikon med et rødt kryds over.

*   Tredje gang der klikkes i boksen fjernes check-mærket og boksen fremstår tom. Når der klikkes på OK vil de systemer som findes, men ikke er afkrydsede, forslås slettet som system for den termiske zone.

De valgte systemer vises som underpunkter til den termiske zone i træ-oversigten. Rækkefølgen af systemerne i træstrukturen er den samme som den rækefølge systemerne simuleres i tsbi5. Rækkefølgen af de enkelte systemer kan ændres ved at trække det ønskede system til det system, som skal efterfølge det pågældende.

<figure id="center_img">
<img src="./assets/systems_in_zone.gif" alt="Systemerne (Systems) vises som underpunkter til den termiske zone."> 
<figcaption>Systemerne (Systems) vises som underpunkter til den termiske zone.</figcaption>
</figure>

I brugergrænsefladen afspejles denne struktur i dialogerne for de enkelte komponenter, idet der for alle komponenter findes et faneblad [*Schedule*](/11Systems/11_02_Systems_schedule.html) (tidsplan), som vælges for at definere den tidsplan, der skal anvendes for den konkrete komponent. I dialogen *Schedule* vises tidsplanen som sammenhørende par af [tidsangivelse](/11Systems/11_17_Systems_Time.html) og regulering.

Rækkefølgen af parrene regulering/tidsplan i oversigtsdialogen er af stor betydning, idet den under en simulering bruges til at bestemme, hvilken regulering der skal anvendes sammen med den aktuelle komponent. Til et givet tidspunkt (ved starten af hver time) gennemløbes tidsplanen i den rækkefølge, den er vist på oversigtsfanen *(Schedule).* Ved det første par, hvor det givne tidspunkt falder inden for tidsangivelsen, vil den tilhørende regulering blive anvendt sammen med dens komponent. Hvis det givne tidspunkt derimod ikke falder inden for nogen tidsangivelse i tidsplanen, vil den tilhørende komponent ikke blive aktiveret overhovedet, dvs. der vil ikke være nogen indeklimamæssig påvirkning på det pågældende tidspunkt.

Når de ønskede systemer er tilføjet den termiske zone, kan definitionerne redigeres ved at højre-klikke på systemet i træ-oversigten. Herved åbnes en dialog for definition af det aktuelle system.

Se også:

*   [tidsplan](/11Systems/11_02_Systems_schedule.html) (Fanebladet *Schedule)*
*   [tidsangivelse](/11Systems/11_17_Systems_Time.html) (Fanebladet *Time)*
*   [reguleringsprioritet](/11Systems/11_14_Control_priority_for_systems.html)
Systemer (ikke regulerbar) tilknyttet bygningsmodellen
*   [Eksterne skygger](/10Thermal_zones/10_05_Shadows_from_the_surroundings.html)

Systemer tilknyttet termiske zoner:

*   [Mixing](/11Systems/11_10_systems_mixing.html)
*   [Personer](/11Systems/11_13_Systems_Persons.html)
*   [Udstyr](/11Systems/11_19_Systems_Equipment.html)
*   [Fugt](/11Systems/11_05_Systems_Moisture.html)
*   [Infiltration](/11Systems/11_08_Systems_Infiltration.html)

*   [Belysning](/11Systems/11_03_Systems_Lighting.html)
*   [Udluftning](/11Systems/11_18_Systems_Venting.html)
*   [Opvarmning](/11Systems/11_12_Systems_Heating.html)
*   [Køling](/11Systems/11_09_Systems_cooling.html)
*   [Ventilation](/11Systems/11_21_Systems_Ventilation.html)

Til en WinDoor kan der knyttes to typer af systemer, som vælges via de respektive indgange i WinDoor-dialogen: Skodde og solafskærmning. Endvidere kan der indlæses oplysninger om sollysfaktorer, som vedrører dagslysforhold i forbindelse med regulering af systemet belysning.

Systemer tilknyttet WinDoor:

*   [Skodder](/11Systems/11_15_Systems_shutter.html)
*   [Solafskærmning](/11Systems/11_16_Systems_shading.html)

