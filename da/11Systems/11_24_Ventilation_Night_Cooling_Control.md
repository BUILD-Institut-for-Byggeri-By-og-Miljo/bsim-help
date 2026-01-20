<link rel="stylesheet" href="../style.css">

# Natkøling, Ventilation

Denne form for regulering vil ofte være kombineret med en af de øvrige typer. Den primære funktion vil normalt være at ventilere de(n) aktuelle zone(r) uden for brugstiden for at køle bygningsmassen ned, således at behovet for mekanisk køling (via køleflade) elimineres eller reduceres væsentligt.

<figure id="center_img">
<img src="./assets/ventilation-nightcoolctrl.gif " alt="Definition af reguleringsstrategien for natkøling (NightCoolCtrl).">
<figcaption>Definition af reguleringsstrategien for natkøling (NightCoolCtrl).</figcaption>
</figure>


*Part of nom. flow:* Angiver, at ydelsen inden for den til denne regulering knyttede tidsangivelse er reduceret i forhold til den nominelle ydelse med faktoren *Part of nom. flow.* Der kan både forekomme tilfælde, hvor luftydelsen øges, og hvor den reduceres i forbindelse med natkøling.

*Setp Top:* Angiver den temperatur, som zonen ønskes kølet ned til under natkøling. Setpunktet vil normalt være lidt lavere end den ønskede temperatur i brugstiden, men bør vælges således, at der normalt ikke vil være behov for opvarmning ved brugstidens start.

*Top - Te >:* Angiver den mindste forskel mellem den aktuelle zonetemperatur og udetemperaturen, for at natkølingen vil være i drift.

*Top - Setp >:* Angiver den mindste forskel mellem den aktuelle zonetemperatur og setpunktstemperaturen, for at natkølingen vil være i drift. Såfremt den aktuelle zonetemperatur både overskrider setpunktet og udetemperaturen med de angivne værdier, vil ventilationsanlægget automatisk starte med henblik på at bringe temperaturen ned på den ønskede setpunktsværdi.

*Min Inlet Air:* Med parameteren *Min Inlet Air* sættes en nedre grænse for indblæsningstemperaturen. Reguleringen simulerer således en indblæsningsføler, som overstyrer rumføleren, når indblæsningstemperaturen kommer under setpunktet for minimumføleren. Såfremt der er tilstrækkelig kapacitet i varmegenvinder og varmeflade, og såfremt disse er aktive, vil reguleringen mindst holde indblæsningstemperaturen på minimumværdien.

*Air Hum:* Angiver det ønskede absolutte fugtindhold i indblæsningsluften. Denne parameter har kun betydning, såfremt der er defineret en befugter i anlægget. Der vil således ikke foregå en affugtning i denne reguleringstype.

*Sensor:* Indgang til en valgmenu for placering (termisk zone) af rumføleren. Natkølingen reguleres efter temperaturen i sensor-zonen.

*Construction:* Indgang til valgmenu for placering af sensoren indbygget i en konstruktion i sensor-zonen. Føleren placeres i midten af det første materialelag der vender ind mod sensor-zonen.   
Hvis føleren fx ønskes placeret 2 cm inde i en 10 cm tyk betonvæg, er det nødvendigt at opbygge væggen af to betonlag, hvor det lag føleren ønskes placeret i skal være 4 cm tyk.

*Active Components:* Angiver hvilke komponenter, der kan være aktive under natkølingen. De enkelte [komponenter](/11Systems/11_21_Systems_Ventilation.html) vælges (on/off) ved at sætte eller fjerne et "**v**" (check-mærke) ud for komponentens navn. Ved at sætte varmeflade og køleflade ud af funktion i forbindelse med natkøling, er der mulighed for at sikre, at denne reguleringsform fungerer optimalt, dvs. uden unødvendigt energiforbrug til behandling af ventilationsluften.   
Hvis der <u>ikke</u> er et "**v**" ud for *Fans,* betyder det, at der ikke overføres varme fra motorerne i ventilationssystemet til indblæsningsluften når systemet regulerer efter denne natkølingsstrategi. Motorerne kører således stadig og driver luften gennem systemet.

Se også:

*   [Indblæsningsstyring](/11Systems/11_23_Ventilation_Inlet_Control.html)
*   [Rumtemperaturregulering](/11Systems/11_25_Ventilation_Zone_Temperature_control.html)
*   [Fugtregulerering](/11Systems/11_22_Ventilation_Moisture_control.html)
*   [VAV-regulering](/11Systems/11_26_Ventilation_VAV_control.html)