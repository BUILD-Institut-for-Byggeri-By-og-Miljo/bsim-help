<link rel="stylesheet" href="../style.css">

# Rumtemperaturregulering, Ventilation

Angiver en regulering, hvor en rumføler (via en reguleringscentral) regulerer anlægskomponenterne i serie. I reguleringsfunktionen indgår et setpunkt for opvarmning og et setpunkt for køling, hvorimellem der er en 'dødzone', således at der kan opnås en økonomisk regulering, hvor anlægget ikke pendler mellem opvarmning og køling. I reguleringen indgår også en indblæsningsføler med setpunkter for minimum og maksimum indblæsningstemperatur. Ved overskridelse af disse setpunkter overtager indblæsningsføleren reguleringen for at holde indblæsningstemperaturen inden for det ønskede interval.

<figure id="center_img">
<img src="./assets/ventilation-zonetempctrl.gif " alt="Definition af reguleringsstrategien for rumtemperaturregulering (ZoneTempCtrl).">
<figcaption>Definition af reguleringsstrategien for rumtemperaturregulering (ZoneTempCtrl).</figcaption>
</figure>


*Part of nom. flow:* Angiver, at anlæggets ydelse inden for den til denne regulering knyttede tidsangivelse er reduceret i forhold til den nominelle ydelse med faktoren andel.

*Min Air Temp.* og *Max Air Temp.:* Ved denne reguleringsform søges der primært opnået en rumtemperatur, som ligger inden for intervallet defineret ved setpunkterne for opvarmning og køling. Ved parametrene *Min Air Temp* og *Max Air Temp* sættes dog en nedre, henholdsvis en øvre grænse for indblæsningstemperaturen. Reguleringen simulerer således en indblæsningsføler, som overstyrer rumføleren, når indblæsningstemperaturen kommer uden for det definerede interval. Så vidt muligt, dvs. hvis der er tilstrækkelig kapacitet i anlægskomponenterne, vil indblæsningstemperaturen derfor holde sig i intervallet.

*Heating Set Pnt:* Angiver setpunktet for rumføleren ved opvarmning. Ved varmebehov vil reguleringen øge varmegenvindingen og derpå ydelsen af varmefladen så meget, som det er nødvendigt (op til maksimal ydelse), for at holde rumtemperaturen på det valgte setpunkt for opvarmning.

*Cooling Set Pnt:* Angiver setpunktet for rumføleren ved køling. Ved kølebehov vil reguleringen øge kuldegenvindingen (såfremt denne er defineret større end 0) og derpå ydelsen af kølefladen så meget, som det er nødvendigt (op til maximal ydelse), for at holde rumtemperaturen nede på det valgte setpunkt. Setpunktet for køling bør altid vælges højere end setpunktet for opvarmning, således at anlægget ikke pendler mellem opvarmning og køling.

*Air Hum:* Angiver det ønskede absolutte fugtindhold i indblæsningsluften. Denne parameter har kun betydning, såfremt der er defineret en befugter i anlægget. Der vil således ikke foregå en affugtning i denne reguleringstype.

*Master Zone:* Angiver at rumtemperaturen i den aktuelle zone skal reguleres efter temperaturforholdene i en anden zone. Indblæsningstemperaturen i den aktuelle zone bestemmes ud fra opvarmningsbehovet i *Master Zone.*

Se også:

*   [Indblæsningsstyring](/11Systems/11_23_Ventilation_Inlet_Control.html)
*   [Fugtregulerering](/11Systems/11_22_Ventilation_Moisture_control.html)
*   [VAV-regulering](/11Systems/11_26_Ventilation_VAV_control.html)
*   [Natkøling](/11Systems/11_24_Ventilation_Night_Cooling_Control.html)