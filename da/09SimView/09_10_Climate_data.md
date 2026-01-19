<link rel="stylesheet" href="../style.css">

# Klimadata

En beregning kan hverken gennemføres med *tsbi5*, *XSun* eller *SimLight* uden en tilknyttet klimafil. Klimafilen tilknyttes bygningen ved højre-klik på bygningen i træ-oversigten og tryk på knappen *Site*, hvorved dialogen for valg af klimadata fremkommer.

<figure id="center_img">
<img src="./assets/SiteProperty.GIF " alt="Valg eller definition (Site Property) af klimadata.">
<figcaption>Valg eller definition (Site Property) af klimadata.</figcaption>
</figure>


Ved tryk på knappen *Browse* kan man manuelt gennemsøge computeren for filer med klimadata. Der skal trykkes *New*, før en klimafil kan vælges. Til højre for *Browse*-knappen vises information om indholdet af den valgte klimadatafil.

Der er gennem tiden leveret fire klimafiler med BSim: CPH.try, CPH.dry, Denmark.dry og Denmark-v2.dry. De fire filers indehold er lidt [forskelligt](https://help.bsim.dk/support/kb/articles/wmjnpKmV/standard-klimadata).

Hvis der alene skal gennemføres en analyse af solindfaldet med *XSun*, er det tilstrækkeligt at udfylde data i gruppen *Location* i stedet for at vælge en vejrdatafil.

Hvis der vælges en vejrdatafil hentes information til gruppen *Location* fra denne og datafelterne fremstår grå. Bygningens geografiske placering er givet i *Location* ved breddegrad (*Latitude*), længdegrad (*Longitude*) og tidszone (*TimeZone*). Tidszonen er positiv mod øst, dvs. Danmark ligger i tidszone 1. *Elevation* viser højden over havet for den station hvor klimadata er målt.

I gruppen *Ground Reflectance* kan den generelle horisontafskæring (*Horizon*) refleksionen af solstråling (*SolarRad*.) og refleksionen af dagslys (*Light*) fra omgivelserne opgives.

Ved tryk på knappen [*Ground* ](https://help.bsim.dk/support/kb/articles/OW4NqGQg/jord-ground)åbnes dialogen for definition af udeforholdene svarende til jorden under bygningen.

Det er muligt at [generere](https://help.bsim.dk/support/kb/articles/1Qpng0WE/konvertering-af-vejrdata-til-tsbi5) egne klimadata ud fra tekst (ASCII) filer med timeværdier af udeklimaparametre.

Se også:

*   [Oprette en bygning](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Tilføje et rum](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Standardkonstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilknytte ikke-standardkonstruktioner](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Oprette en termisk zone](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/thermal-zone-property)
*   [Tilføje rum til termiske zoner](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Tilføje systemer til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Redigere geometrien](https://help.bsim.dk/support/kb/articles/L9PwMrQJ/simview---redigere-modelgeometrien)
*   [Tilføje konstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilføje en åbning eller WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor)
*   [Tilknytte fiktive zoner](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview---fiktive-zoner)
*   [Tilknytte klimadata og jord](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Udskrift af model](https://help.bsim.dk/support/kb/articles/ZmNr2Em2/simview---udskrift-af-model)