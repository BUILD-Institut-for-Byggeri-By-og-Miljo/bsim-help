<link rel="stylesheet" href="../style.css">

# Shading, System

Til hvert vindue i en BSim-model kan der tilknyttes en solafskærmning, som beskrives gennem data i dialogen vist i figuren. Afskærmningen beskrives ved nogle ganske få parametre, der beskriver de fysiske egenskaber, som vist i tabellen.

<figure id="center_img">
<img src="./assets/SHADING.GIF" alt="Dialog for definition af data for solafskærmningen. Værdier for Shading Coeff. og Max Sun anvendes kun, såfremt der ikke er angivet værdier i de tilhørende reguleringer. Data for Slat Width og Slat Dist. er kun aktuelle for afskærmning af typen Venetian.">
<figcaption>Dialog for definition af data for solafskærmningen. Værdier for Shading Coeff. og Max Sun anvendes kun, såfremt der ikke er angivet værdier i de tilhørende reguleringer. Data for Slat Width og Slat Dist. er kun aktuelle for afskærmning af typen Venetian.</figcaption>
</figure>


*Data i BSim for dialogen SolarShading. Parametre i grå felter anvendes kun i specialtilfælde.*

| Parameter      | Beskrivelse                                                                                                   | Varianter / interval, enhed         | Standardværdi   |
|----------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------|-----------------|
| Type           | Afskærmningstype, hvor Simple er udefineret.                                                                 | Simple; Venetian; Screen; Curtain   | Simple          |
| Shading Coeff. | Solafskærmningsfaktor, benyttes kun i forbindelse med modeller fra tidligere BSim-versioner.                 | 0 - 1,0                             | 0,5             |
| Max Sun        | Grænse for solindfald, hvorover afskærmningen aktiveres for at holde denne værdi. Kun for ældre modeller.     | 0 - 800 W/m²                        | 150 W/m²        |
| Max Wind       | Vindhastighed, hvorover afskærmningen sættes ud af funktion. Kun aktiv, når Position er external.             | 0 - 30 m/s                          | 0               |
| Refl.          | Reflektans af afskærmning, fx lamelreflektans.                                                               | 0 - 1,0                             | 0,5             |
| Transm.        | Transmittans af afskærmning, fx lameltransmittans.                                                           | 0 - 1,0                             | 0,1             |
| Slat Width     | Lamelbredde, kun aktiv når Type er Venetian.                                                                 | 0 - 0,5 m                           | 0,05 m          |
| Slat Dist.     | Lamelafstand, kun aktiv når Type er Venetian.                                                                | 0 - 0,5 m                           | 0,042 m         |
| Position       | Placering af afskærmning i forhold til vindue.                                                               | External; Internal; Integrated | Internal
 

Solafskærmningens funktion beskrives, som for alle andre systemer i BSim, gennem en [tidsplan](/11Systems/11_02_Systems_schedule.html) (Schedule), hvori der for en eller flere [tidsangivelser](/11Systems/11_17_Systems_Time.html) (Time) angives, hvilken regulering (Control), der er aktuel. Der kan angives et ubegrænset antal tidsangivelser og tilhørende reguleringer for solafskærmningen.

Der kan vælges følgende fire forskellige afskærmningsformer:

*   [SolarCtrl](/11Systems/11_16_Systems_shading.html), der regulerer efter solindfald og operativ temperatur,

*   [SensorCtrl](/11Systems/11_16_Systems_shading.html), der styrer efter lysindfald på facaden,

*   [BlindCtrl](/11Systems/11_16_Systems_shading.html), der for en afskærmning af lameltype regulerer efter solindfald og direkte sol,

*   [GlareCtrl](/11Systems/11_16_Systems_shading.html), der styrer efter at minimere blændingen fra vinduet.

*Table values:* giver mulighed for at benytte detaljerede data om lamellerne i et afskærmningssystem ved at tilknytte en ekstern fil. Ved tryk på knappen åbnes en dialog til at lokalisere filen på pc'en.

*Remove table:* bruges til at fjerne tilknytningen af en [ekstern fil](/24Miscellaneous/24_32_Standard_tables_for_slate_based_shading_systems.html) til definition og styring af solafskærmningen.

I [tidsplanen](/11Systems/11_02_Systems_schedule.html) for solafskærmningen indgår en [afskærmningsregulering](/24Miscellaneous/24_04_Shading_Control.html), som giver mulighed for at definere en regulering af afskærmningen efter temperaturen i zonen. I dialogen er der desuden indgang til en valgmenu, hvori reguleringsformen defineres.

Se også

*   [Faneblad Schedule](/11Systems/11_02_Systems_schedule.html)
*   [Faneblad Time](/11Systems/11_17_Systems_Time.html)