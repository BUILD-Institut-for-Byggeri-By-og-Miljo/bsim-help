<link rel="stylesheet" href="../style.css">

# Ventilation, System

Ventilationsanlæg beskrives ved de enkelte komponenter og en tidsplan.

Et system består af den generelle fysiske komponent, beskrevet ved en simpel matematisk model, samt en tidsplan, der angiver variationer, styringsstrategier m.m., defineret ved sammenhørende par af regulering og tidsangivelse, jf. figuren.

<figure id="center_img">
<img src="./assets/VENTSYS.GIF " alt="Principiel opbygning af modellen for ventilationsanlæg i BSim">
<figcaption>Principiel opbygning af modellen for ventilationsanlæg i BSim</figcaption>
</figure>


Generelt bemærkes, at modellerne ikke tager hensyn til forskelle i luftens densitet, der beregnes ved 15 °C ud fra lokalitetens højde over havet. De enkelte komponenter i anlægget defineres via felterne i ventilationsanlægsdialogen.

<figure id="center_img">
<img src="./assets/ventilation.gif " alt="Ventilationssystemet defineres ved sine enkeltkomponenter.">
<figcaption>Ventilationssystemet defineres ved sine enkeltkomponenter.</figcaption>
</figure>


**Fans:** Ventilatordialogen dækker både indblæsnings- og udsugningsventilatorer i anlægget. Ud fra trykstigning og virkningsgrad for hver ventilator beregnes det samlede effektbehov ved nominel luftydelse. Ved reduceret eller forøget ydelse (VAV-regulering) regnes effektoptagelsen proportional med luftmængden.

*Input:* Nominel volumenstrøm for indblæsningsventilatoren. Under regulering i tidsplanen kan der angives varierende volumenstrøm på forskellige tider af dagen og året.

*Output:* Nominel volumenstrøm for udsugningsventilatoren. Der er mulighed for at angive forskellige indblæsnings- og udsugningsluftmængder, og en evt. ubalance i de totale luftstrømme ind i og ud af zonen udlignes ved infiltration eller eksfiltration. Systemet antages at returnere udsugningsluften fra zonen tilbage til anlægget.

*Pressure Rise:* Total trykstigning over ventilatoren (ind eller ud) svarende til tabet igennem hele aggregatet og det tilhørende kanalsystem.

*Total Efficiency):* Total virkningsgrad for ventilatoren (ind eller ud). Virkningsgraden afhænger delvis af ventilatorens størrelse (eller den optagne effekt). Den beregnes som produktet af virkningsgraderne for motoren, kraftoverføringen (remvirkningsgrad) samt ventilator. Den totale virkningsgrad ligger ofte i områderne:

0,4 - 0,5 for små ventilatorer, op til 1 kW,   
0,6 - 0,85 for mellemstore ventilatorer, op til 10 kW, og   
0,8 - 0,9 for store ventilatorer, op til 100 kW afgiven effekt.   
Trykstigninger og virkningsgrader benyttes til at beregne effektbehov pr. time samt energiforbrug til driften af anlægget.

*Part To Air*: Andelen af den optagne effekt i indblæsningsventilatoren, der overføres til ventilationsluften. Effekten varierer med luftydelsen, og den overførte effekt omregnes til en temperaturstigning i luften.

**Recovery Unit**: Ud fra timeværdier af luftstrømmene kan der simuleres varme- og fugtoverføring fra udsugningsluften til indblæsningsluften. Genvindingsenheden (herunder returluftarrangement) specificeres ved virkningsgrader for henholdsvis varme-, køle- og fugtgenvinding. Der kan angives forskellige virkningsgrader for de tre typer genvinding, dog kan kulde- og fugtgenvindingsgraden ikke være større end den maksimale varmegenvindingsgrad. Hvis der angives forskellige virkningsgrader, antages forholdet mellem disse at være konstant ved evt. regulering af luftmængderne. Modellen kan således simulere de fleste forekommende genvindingssystemer, men forudsætter, at genvindingen sker modulerende (optimalt) efter behovet inden for de angivne maksimale og minimale genvindingsgrader.

*Max Heat Rec*: Angiver den maksimale temperaturvirkningsgrad, der kan opnås ved varmeoverførsel. Temperaturvirkningsgraden er defineret på sædvanlig måde som

$$ \eta = \frac{t_{i2} - t_{i1}}{t_{u1} - t_{u2}} \tag{1} $$

t<sub>i1</sub> og t<sub>i2</sub> er temperaturerne af indblæsningsluften før og efter genvinderen.   
t<sub>u1</sub> og t<sub>u2</sub> er temperaturerne af udsugningsluften før og efter genvinderen.

Denne definition tager ikke hensyn til forskelle i volumen eller massestrømme. Såfremt der er forskel på indblæsnings- og udsugningsluftmængderne, må der korrigeres herfor i både temperaturgenvindings og fugtgenvindingsgraderne. Genvindingsgraderne skal beregnes for indblæsningsluften, dvs. som forholdet mellem overførslen af varme eller fugt og den teoretiske, maksimalt opnåelige overførsel.

*Min Heat Rec*: Angive den minimale virkningsgrad ved varmegenvinding, ofte lig med 0. Hvis genvindingskomponenten imidlertid ikke er forsynet med et reguleringssystem, fx som styring af et bypass-spjæld i en krydsvarmeveksler, kan der forekomme perioder, hvor der genvindes mere, end der er behov for.

Hvis maksimale og minimale virkningsgrader er forskellige, antages der at være fuldt modulerende regulering efter behovet mellem genvindingsgraderne.

*Max Cool Rec*: er den maksimale 'kølevirkningsgrad' for genvinderen. Begrebet kølegenvinding skal her opfattes som en omvendt varmegenvinding, altså hvor indtagsluften (ofte udeluften) køles ned af udsugningsluften. Dette vil typisk være ønskeligt ved ventilation af rum eller bygninger, hvor indetemperaturen ønskes holdt på et niveau, der er væsentligt under udetemperaturen, altså normalt i bygninger med mekanisk køling, natkøling eller bygninger i et varmt klima.

Beregningsmodellen forudsætter, at genvindingen sker modulerende (optimalt) efter behovet, bestemt via en reguleringsstrategi, der sikrer, at kuldegenvinding kun finder sted når og i det omfang, det kan 'betale sig', dvs. når den operative temperatur i den termiske zone er mindst 2,0 K lavere end udetemperaturen.

*Moisture Rec*: Maksimal fugtvirkningsgrad for genvinderen. Hvis der angives forskellige virkningsgrader, antages forholdet mellem disse at være konstant under reguleringen.

 

**Heating Coil**: Ventilationsanlægget forudsættes at have højst én varmeflade. Det betyder, at beskrivelsen og reguleringen af anlæg, som i praksis har både en forvarmeflade og en eftervarmeflade, bliver tilnærmet. Det bemærkes, at programmet beregner temperaturstigningen gennem ventilatoren og korrigerer herfor ved bestemmelsen af den nødvendige effektafgivelse i varmefladen.

*Max Power*: Maksimal effekt, der kan afgives fra ventilationsanlæggets varmeflade. Ud fra den valgte reguleringsstrategi og de valgte temperatursetpunkter beregnes behovet for opvarmning af ventilationsluften gennem varmefladen. Reguleringen regnes at fungere optimalt, dvs. med fuldt modulerende varmeafgivelse inden for det aktuelle tidsstep.

Central Heat Pump angiver at varmen til varmeanlægget kommer fra en central varmepumpe. Varmepumen kan først aktiveres som kilde til ventilationssystemet når programmet [PackCalc](/24Miscellaneous/24_01_PackCalc_Cooling.html) er installeret. PackCalc er udviklet af IPU Teknologiudvikling og kan hentes fra SBi's hjemmeside.

Heat Pump: Åbner en dialog hvor data for varmepumpen angives.

**Cooling Coil:** Kølefladen antages at have en overfladetemperatur, der er konstant og uafhængig af kølebehovet og den afgivne køleeffekt. Beregningen tager fuldt hensyn til fugtudfældning på kølefladen, men da sluttilstanden bestemmes ved iteration, tillades en vis (procentvis) tolerance fra den ønskede tilstand og fra den maksimale køleeffekt.

*Max Power*: Maksimal effekt af kølefladen angivet som negativt tal. Der forudsættes at være optimal, modulerende regulering af anlæggets køleflade.

*Surface temperature*: Overfladetemperaturen på kølefladen, som anvendes i forbindelse med beregninger af fugtmængden, der udfældes på kølefladen. Temperaturen antages at være konstant og større end 0 °C.

Central Heat Pump angiver at varmen til varmeanlægget kommer fra en central varmepumpe. Den centrale køling kan først aktiveres som kilde til ventilationssystemet når programmet [PackCalc](/24Miscellaneous/24_01_PackCalc_Cooling.html) er installeret. PackCalc er udviklet af IPU Teknologiudvikling og kan hentes fra SBi's hjemmeside.

Coolig: Åbner en dialog som giver mulighed for at give inddata til køleanlægget.

**Humidifier:** Den eneste form for befugter, som kan simuleres, er en adiabatisk dampbefugter, som fungerer uden ændring af luftens temperatur.

Max Output: Maksimal ydelse af befugteren. Modellen for fugtberegninger er forenklet, idet den ikke tager hensyn til fugtakkumulering, absorption og adsorption i byggekomponenter og materialer.

**Air Source:** Angiver, hvorfra luften til ventilationssystemet hentes. Luften kan hentes fra udeluften (standard) og fra alle termiske zoner.

**Tidsplan:** For ethvert ventilationsanlæg skal der defineres en reguleringsstrategi, som omfatter i én eller flere tidsplaner. Tidsplan er den generelt anvendte betegnelse i programmet for et sammenhørende sæt af regulering og tidsangivelse. Der skelnes således nøje mellem anlæggets fysiske komponenter, der principielt kan findes i et firmakatalog, og reguleringsfunktionen, der kan etableres ved hjælp af reguleringsudstyr, som fungerer automatisk eller betjenes manuelt sammen med anlægget. I reguleringsstrategien kan fx indgå ændring af kurve for indblæsningstemperaturen, omstilling af spjældfunktioner, fx bypass af varmegenvinding i sommerperioden, eller lukning af vandstrømmen til varme- eller kølefladen.

**Regulering:** Programmet har fem former for regulering, kaldet [indblæsningsstyring](/11Systems/11_23_Ventilation_Inlet_Control.html), [rumtemperaturregulering](/11Systems/11_25_Ventilation_Zone_Temperature_control.html), [fugtregulerering](/11Systems/11_22_Ventilation_Moisture_control.html), [VAV-regulering](/11Systems/11_26_Ventilation_VAV_control.html) samt [natkøling](/11Systems/11_24_Ventilation_Night_Cooling_Control.html). Den ønskede reguleringstype defineres via de fem faneblade i ventilationsdialogen.

*   [Indblæsningsstyring](/11Systems/11_23_Ventilation_Inlet_Control.html)
*   [Rumtemperaturregulering](/11Systems/11_25_Ventilation_Zone_Temperature_control.html)
*   [Fugtregulerering](/11Systems/11_22_Ventilation_Moisture_control.html)
*   [VAV-regulering](/11Systems/11_26_Ventilation_VAV_control.html)
*   [Vatkøling](/11Systems/11_24_Ventilation_Night_Cooling_Control.html)

Se også

*   [Faneblad Schedule](/11Systems/11_02_Systems_schedule.html)
*   [Faneblad Time](/11Systems/11_17_Systems_Time.html)

