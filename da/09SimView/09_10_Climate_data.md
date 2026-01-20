<link rel="stylesheet" href="../style.css">

# Klimadata

En beregning kan hverken gennemføres med *tsbi5*, *XSun* eller *SimLight* uden en tilknyttet klimafil. Klimafilen tilknyttes bygningen ved højre-klik på bygningen i træ-oversigten og tryk på knappen *Site*, hvorved dialogen for valg af klimadata fremkommer.

<figure id="center_img">
<img src="./assets/SiteProperty.GIF " alt="Valg eller definition (Site Property) af klimadata.">
<figcaption>Valg eller definition (Site Property) af klimadata.</figcaption>
</figure>


Ved tryk på knappen *Browse* kan man manuelt gennemsøge computeren for filer med klimadata. Der skal trykkes *New*, før en klimafil kan vælges. Til højre for *Browse*-knappen vises information om indholdet af den valgte klimadatafil.

Der er gennem tiden leveret fire klimafiler med BSim: CPH.try, CPH.dry, Denmark.dry og Denmark-v2.dry. De fire filers indehold er lidt [forskelligt](/24Miscellaneous/24_58_Climate_data_definition.html).

Hvis der alene skal gennemføres en analyse af solindfaldet med *XSun*, er det tilstrækkeligt at udfylde data i gruppen *Location* i stedet for at vælge en vejrdatafil.

Hvis der vælges en vejrdatafil hentes information til gruppen *Location* fra denne og datafelterne fremstår grå. Bygningens geografiske placering er givet i *Location* ved breddegrad (*Latitude*), længdegrad (*Longitude*) og tidszone (*TimeZone*). Tidszonen er positiv mod øst, dvs. Danmark ligger i tidszone 1. *Elevation* viser højden over havet for den station hvor klimadata er målt.

I gruppen *Ground Reflectance* kan den generelle horisontafskæring (*Horizon*) refleksionen af solstråling (*SolarRad*.) og refleksionen af dagslys (*Light*) fra omgivelserne opgives.

Ved tryk på knappen [*Ground* ](/24Miscellaneous/24_26_Ground.html)åbnes dialogen for definition af udeforholdene svarende til jorden under bygningen.

Det er muligt at [generere](/13tsbi5_thermal_simulation/13_03_Converting_weather_data_for_tsbi5.html) egne klimadata ud fra tekst (ASCII) filer med timeværdier af udeklimaparametre.

Se også:

*   [Oprette en bygning](/09SimView/09_14_SimView_Creating_a_building.html)
*   [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)
*   [Standardkonstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilknytte ikke-standardkonstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html)
*   [Oprette en termisk zone](/10Thermal_zones/10_01_Thermal_Zone_property.html)
*   [Tilføje rum til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html)
*   [Tilføje systemer til termiske zoner](/11Systems/11_01_Systems.html)
*   [Redigere geometrien](/09SimView/09_02_SimView_Editing_the_model_geometry.html)
*   [Tilføje konstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilføje en åbning eller WinDoor](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html)
*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)
*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)
*   [Udskrift af model](/10Thermal_zones/10_09_SimView_Printing_a_model.html)