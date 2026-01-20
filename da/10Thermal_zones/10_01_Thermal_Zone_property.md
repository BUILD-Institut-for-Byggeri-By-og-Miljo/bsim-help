<link rel="stylesheet" href="../style.css">

# Thermal Zone property

*Termisk zone* er et begreb, som er næsten identisk med begrebet zone i *tsbi3.* En termisk zone er i *BSim* et eller flere rum i en bygningsmodel, som er valgt til simulering i *tsbi5.* Et rum har tilknyttet en beskrivelse af geometri og konstruktioner, hvorimod en termisk zone kan tilknyttes systemer som fx udstyr, ventilation, varmeanlæg osv.

En bygningsmodel består af en række rum geometrisk og evt. termisk beskrevet (konstruktioner, vinduer m.v.). Nogle af disse rum kan være i *termiske zoner*, og disse vil indgå i en termisk simulering med *tsbi5.* Rum, der tilhører den samme termiske zone, bliver således simuleret som en zone med samme temperatur og belastninger.

Hvis alle rum i en bygningsmodel er beskrevet termisk - også dem uden for *termiske zoner*, kan hele modellen overføres til beregning i *[Be18-programmet](/24Miscellaneous/24_20_Be10_Be18_Export.html)*. En model kan således samtidig benyttes til simpel beregning i *Be18* og detaljeret simulering i *tsbi5.*

En termisk zone oprettes ved at højre-klikke på bygningen i træ-oversigten og trykke på knappen *Insert Thermal Zone.* Et eller flere rum tilknyttes en termisk zone ved at trække (med venstre muse-knap holdt nede) den til den ønskede termiske zone.

Dialogen for definition af de globale egenskaber for termiske zoner kaldes frem ved højreklik på den termiske zone i træ-oversigten til venstre i *SimView.*



<figure id="center_img">
<img src="./assets/tz_property.gif" alt="Dialogen for definition af de globale egenskaber for termiske zoner kaldes frem ved højreklik på den termiske zone i træ-oversigten til venstre i SimView."> 
<figcaption>Dialogen for definition af de globale egenskaber for termiske zoner kaldes frem ved højreklik på den termiske zone i træ-oversigten til venstre i SimView. </figcaption>
</figure>


Solfordelingen til den termiske zones gulv *(ToFloor),* vægge *(ToWalls)* og loft *(ToCeiling)* angives som faste størrelser i dialogen. Denne fordeling benyttes hvis der **ikke** sættes "hak" ved *XSun Distribution* i parametre på [Options](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) fanebladet under simuleringen med tsbi5. Er der derimod sat "hak" ved *XSun Distribution* **og** intet "hak" ved langbølget strålingsudveksling, beregnes solfordelingen løbende.

I dialogen er det også muligt at angive hvor stor en andel af den indkomne solenergi, som overføres direkte til luften *(ToAir)* fx ved at ramme gardiner eller andre lette møbler.

Desuden er det muligt at definere hvor meget af solenergien der tabes *(Lost)* fx på grund af refleksion fra gardiner, potteplanter, snavs på ruderne, spejlende overflader i rummet etc., inden den afsættes i den termiske zone. For store vinduespartier vil værdien typisk være mindre end for små. Hvis vinduerne derimod flyder hele facaden vil værdien typisk stige på grund af refleksioner i rummet som ikke opfanges af brystninger mv.

Beregningen af den operative temperatur sker ved en vægtning af lufttemperaturen og gennemsnittet af de indvendige overfladers temperatur. Normalt vægtes de to temperaturer ens, men det er muligt at ændre på dette ved at angive hvor stor en vægt *(TiFraction* = 0,1 - 0,9) lufttemperaturen skal have.

Temperaturlagdelingen op gennem den termiske zone kan simuleres ved den såkaldte "[kappa-model](/12The_Kappa_model/12_01_The_Kappa_model.html)", hvor parameteren kappa og den højde over gulvet *(SensorHgt),* hvor den operative temperatur skal beregnes, skal gives. Det er således temperaturen i *SensorHgt* som alle systemer reguleres efter.

Se også:

*   [Oprette en bygning](/09SimView/09_14_SimView_Creating_a_building.html)
*   [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)
*   [Standardkonstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilknytte ikke-standardkonstruktioner](/09SimView/09_09_SimView_Non_default_constructions.html)
*   [Tilføje rum til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html)
*   [Tilføje systemer til termiske zoner](/11Systems/11_01_Systems.html)
*   [Redigere geometrien](/10Thermal_zones/10_04_SimView_Editing_the_model_geometry.html)
*   [Tilføje konstruktioner](/10Thermal_zones/10_06_SimView_Default_constructions.html)
*   [Tilføje en åbning eller WinDoor](/10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.html)
*   [Tilknytte fiktive zoner](/09SimView/09_05_Sim_View_Virtual_zones.html)
*   [Tilknytte klimadata og jord](/09SimView/09_10_Climate_data.html)
*   [Udskrift af model](/10Thermal_zones/10_09_SimView_Printing_a_model.html)