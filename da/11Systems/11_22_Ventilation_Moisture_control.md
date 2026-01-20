<link rel="stylesheet" href="../style.css">

# Fugtregulering, Ventilation

Denne reguleringsform kan primært benyttes, hvor der i perioder er behov for at affugte rumluften. Ud fra temperatursetpunktet omregnes den ønskede relative fugtighed til en ønsket absolut fugtighed. Herudfra beregnes det, hvad det absolutte fugtindhold i indblæsningsluften skal være for at opnå den ønskede fugtighed i zonen.

Såfremt fugtindholdet i luften, der tilføres anlægget, er for høj, affugtes luften ved afkøling i anlæggets køleflade. For at opnå den ønskede temperatur i zonen opvarmes luften eventuelt i varmefladen, før den blæses ind i zonen. Såfremt kapaciteten af varmefladen er utilstrækkelig til at opnå den ønskede zonetemperatur, vil en eventuel radiator yderligere kunne opvarme rummet. Det er i denne forbindelse vigtigt at være opmærksom på tre forhold ved fugtreguleringen:

1. Varmefladen i ventilationssystemet vil altid være prioriteret før radiatoren (uanset setpunkterne for de to systemer).   
2. Det er en forudsætning for opnåelsen af den ønskede relative fugtighed, at temperatursetpunktet også opnås, hvilket betyder, at hvis radiatoren (varme- eller køleradiator) bidrager til opretholdelsen af temperaturen, må setpunktet for radiatoren være valgt lig med temperatursetpunktet i fugtreguleringen.   
3. Temperatursetpunktet bruges som et opvarmningssetpunkt, og affugtningen af luften vil derfor ikke fungere i vekselvirkning med egentlig køling i anlæggets køleflade.   
Såfremt fugtindholdet i luften, der tilføres anlægget, er for lavt, vil luften blive befugtet i en dampbefugter, hvis en sådan er defineret.

<figure id="center_img">
<img src="./assets/ventilation-moisturectrl.gif " alt="Definition af reguleringsstrategien for ventilation med fugtregulering (MoistureCtrl).">
<figcaption>Definition af reguleringsstrategien for ventilation med fugtregulering (MoistureCtrl).</figcaption>
</figure>


*Part of nom.* flow angiver, at anlæggets ydelse inden for den til reguleringen knyttede tidsangivelse er reduceret i forhold til den nominelle ydelse med faktoren *Part of nom. flow.*

Parameteren *Min Inlet Temp* angiver en nedre grænse for indblæsningstemperaturen. Reguleringen simulerer således en indblæsningsføler, som overstyrer hygrostatens føler, når indblæsningstemperaturen kommer under setpunktet for minimumføleren.

*Setp Reheating* er den ønskede rumtemperatur som benyttes ved omregning af den relative fugtighed (setpunktet for hygrostaten) til en 'ønsket' absolut fugtighed i den termiske zone. Ved behov for affugtning kan anlæggets komponenter ikke selv reguleres til opretholdelse af den ønskede temperatur, idet varmefladen er placeret før kølefladen.

*Setp De-humid* er setpunktet for en hygrostat placeret i den termiske zone, hvor der ønskes affugtning. Ud fra den termiske zones fugtbalance beregnes, hvad fugtindholdet i indblæsningsluften skal være for at opnå den ønskede relative fugtighed i den termiske zone.

*Setp Humidify* er setpunktet for hygrostaten ved befugtning. Setpunktet for befugtning vil kun have betydning for anlæg, hvori der er defineret en (damp)befugter. Ud fra den termiske zones fugtbalance beregnes, hvad fugtindholdet i indblæsningsluften skal være for at opnå den ønskede relative fugtighed i den termiske zone.

Se også:

*   [Indblæsningsstyring](/11Systems/11_23_Ventilation_Inlet_Control.html)
*   [*Rumtemperaturregulering*](/11Systems/11_25_Ventilation_Zone_Temperature_control.html)
*   [VAV-regulering](/11Systems/11_26_Ventilation_VAV_control.html)
*   [Natkøling](/11Systems/11_24_Ventilation_Night_Cooling_Control.html)