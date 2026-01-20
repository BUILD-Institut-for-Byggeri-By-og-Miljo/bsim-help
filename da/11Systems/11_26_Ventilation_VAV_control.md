<link rel="stylesheet" href="../style.css">

# VAV-regulering, Ventilation

VAV-regulering (Variable Air Volume) er en anden form for regulering efter en rumføler, der primært benyttes ved rum med kølebehov i en stor del af driftstiden. Funktionen er, at rumføleren ved faldende varmebehov og stigende kølebehov regulerer varmeflade, genvinder og volumenstrøm (fx via spjældmotor) i serie for at opnå den ønskede rumtemperatur. Ved fortsat stigende kølebehov vil regulatoren åbne for kølefladen, når setpunktet for køling overskrides. Ligesom ved rumtemperaturregulering bør der indlægges en dødzone mellem setpunkterne. Når indblæsningstemperaturen kommer under minimum setpunktet for indblæsningsføleren, vil denne overstyre rumføleren, således at minimumværdien for indblæsningstemperaturen ikke underskrides.

<figure id="center_img">
<img src="./assets/ventilation-vavctrl.gif " alt="Definition (Ventilation | VAVCtrl) af reguleringsstrategien for VAV-regulering.">
<figcaption>Definition (Ventilation | VAVCtrl) af reguleringsstrategien for VAV-regulering.</figcaption>
</figure>


*VAV, max factor:* Volumenstrømmene (nominelle) angivet ved data for 'ventilator' kan blive forøget med faktoren angivet i parameteren *VAV max factor* (≥ 1). I praksis vil indblæsningsarmaturerne være bestemmende for, hvor stor undertemperatur og hvor stor variation i luftmængden, der kan tillades. Faktoren vil normalt ligge i intervallet 1,5 - 3,0.

*Min Inlet Temp:* Ved denne reguleringsform søges den ønskede rumtemperatur opnået ved seriel regulering af varmeflade, genvinder, luftmængde samt køleflade. Ved parameteren *Min Inlet Temp* sættes dog en nedre grænse for indblæsningstemperaturen. Reguleringen simulerer således en indblæsningsføler, som overstyrer rumføleren, når indblæsningstemperaturen kommer under minimum setpunktet for indblæsningsføleren.

*Max. Inlet Temp:* Sætter en øvre grænse for temperaturen af indbæsningsluftens temperatur. Reguleringen simulerer således en indblæsningsføler, som overstyrer rumføleren, når indblæsningstemperaturen kommer over maksimum setpunktet for indblæsningsføleren.

*Setp Indoor Air:* Setpunkt for rumføleren ved varmegenvinding og opvarmning. Ved varmebehov yder anlægget den nominelle (minimum) luftmængde, og ved regulering af genvinder og varmeflade søges både minimum indblæsningstemperatur og setpunktet for opvarmning overholdt.

*Setp Cooling:* Setpunkt for rumføleren ved luftregulering og køling. Ved kølebehov øges luftmængden gradvist for at holde setpunktet. Såfremt dette ikke er tilstrækkeligt, åbnes der gradvist for kølefladen, indtil enten den maksimale køleydelse nås, eller indblæsningstemperaturen kommer ned på minimumværdien. Setpunktet for køling bør altid vælges højere (2-4 K) end setpunktet for opvarmning, således at anlægget ikke pendler mellem opvarmning og luftregulering/køling.

*Setp. CO2:* Angiver setpunktet for VAV regulering for opnåelse af ønsket CO2 indhold i indeluften. Regulering efter CO2 indholdet har prioritet i forhold til indetemperatur, dvs. der reguleres først efter opnåelse af det ønskede CO2 indhold og dernæst efter den ønskede indetemparatur. Hvis der ikke ønskes regulering efter CO2 indholdet indtastes 0 som *Setp. CO2.*   
CO2 indholdet i udeluften angives som en information på bygningens [Site](/24Miscellaneous/24_25_Site_Property.html).

*Air Hum:* Angiver det ønskede absolutte fugtindhold i indblæsningsluften. Denne parameter har kun betydning, såfremt der er defineret en befugter i anlægget. Der vil således ikke foregå en affugtning i denne reguleringstype.

Se også:

*   [Indblæsningsstyring](/11Systems/11_23_Ventilation_Inlet_Control.html)
*   [Rumtemperaturregulering](/11Systems/11_25_Ventilation_Zone_Temperature_control.html)
*   [Fugtregulerering](/11Systems/11_22_Ventilation_Moisture_control.html)
*   [Natkøling](/11Systems/11_24_Ventilation_Night_Cooling_Control.html)