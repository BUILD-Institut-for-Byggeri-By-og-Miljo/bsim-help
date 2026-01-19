<link rel="stylesheet" href="../style.css">

# Thermal Zone property

*Termisk zone* er et begreb, som er næsten identisk med begrebet zone i *tsbi3.* En termisk zone er i *BSim* et eller flere rum i en bygningsmodel, som er valgt til simulering i *tsbi5.* Et rum har tilknyttet en beskrivelse af geometri og konstruktioner, hvorimod en termisk zone kan tilknyttes systemer som fx udstyr, ventilation, varmeanlæg osv.

En bygningsmodel består af en række rum geometrisk og evt. termisk beskrevet (konstruktioner, vinduer m.v.). Nogle af disse rum kan være i *termiske zoner*, og disse vil indgå i en termisk simulering med *tsbi5.* Rum, der tilhører den samme termiske zone, bliver således simuleret som en zone med samme temperatur og belastninger.

Hvis alle rum i en bygningsmodel er beskrevet termisk - også dem uden for *termiske zoner*, kan hele modellen overføres til beregning i *[Be18-programmet](https://bsim.outseta.com/support/kb/articles/wmjnRomV/eksport-til-be10)*. En model kan således samtidig benyttes til simpel beregning i *Be18* og detaljeret simulering i *tsbi5.*

En termisk zone oprettes ved at højre-klikke på bygningen i træ-oversigten og trykke på knappen *Insert Thermal Zone.* Et eller flere rum tilknyttes en termisk zone ved at trække (med venstre muse-knap holdt nede) den til den ønskede termiske zone.

Dialogen for definition af de globale egenskaber for termiske zoner kaldes frem ved højreklik på den termiske zone i træ-oversigten til venstre i *SimView.*



<figure id="center_img">
<img src="./assets/tz_property.gif" alt="Dialogen for definition af de globale egenskaber for termiske zoner kaldes frem ved højreklik på den termiske zone i træ-oversigten til venstre i SimView."> 
<figcaption>Dialogen for definition af de globale egenskaber for termiske zoner kaldes frem ved højreklik på den termiske zone i træ-oversigten til venstre i SimView. </figcaption>
</figure>


Solfordelingen til den termiske zones gulv *(ToFloor),* vægge *(ToWalls)* og loft *(ToCeiling)* angives som faste størrelser i dialogen. Denne fordeling benyttes hvis der **ikke** sættes "hak" ved *XSun Distribution* i parametre på [Options](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options) fanebladet under simuleringen med tsbi5. Er der derimod sat "hak" ved *XSun Distribution* **og** intet "hak" ved langbølget strålingsudveksling, beregnes solfordelingen løbende.

I dialogen er det også muligt at angive hvor stor en andel af den indkomne solenergi, som overføres direkte til luften *(ToAir)* fx ved at ramme gardiner eller andre lette møbler.

Desuden er det muligt at definere hvor meget af solenergien der tabes *(Lost)* fx på grund af refleksion fra gardiner, potteplanter, snavs på ruderne, spejlende overflader i rummet etc., inden den afsættes i den termiske zone. For store vinduespartier vil værdien typisk være mindre end for små. Hvis vinduerne derimod flyder hele facaden vil værdien typisk stige på grund af refleksioner i rummet som ikke opfanges af brystninger mv.

Beregningen af den operative temperatur sker ved en vægtning af lufttemperaturen og gennemsnittet af de indvendige overfladers temperatur. Normalt vægtes de to temperaturer ens, men det er muligt at ændre på dette ved at angive hvor stor en vægt *(TiFraction* = 0,1 - 0,9) lufttemperaturen skal have.

Temperaturlagdelingen op gennem den termiske zone kan simuleres ved den såkaldte "[kappa-model](https://help.bsim.dk/support/kb/articles/BWzdGlQE/kappa-modellen)", hvor parameteren kappa og den højde over gulvet *(SensorHgt),* hvor den operative temperatur skal beregnes, skal gives. Det er således temperaturen i *SensorHgt* som alle systemer reguleres efter.

Se også:

*   [Oprette en bygning](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Tilføje et rum](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Standardkonstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilknytte ikke-standardkonstruktioner](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Tilføje rum til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGJpQJ/tilf-je-rum-til-termiske-zoner)
*   [Tilføje systemer til termiske zoner](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Redigere geometrien](https://help.bsim.dk/support/kb/articles/L9nrKz9Z/redigere-modelgeometri)
*   [Tilføje konstruktioner](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Tilføje en åbning eller WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilf-je-bning-eller-windoor)
*   [Tilknytte fiktive zoner](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview-fiktive-zoner)
*   [Tilknytte klimadata og jord](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Udskrift af model](https://help.bsim.dk/support/kb/articles/z9MKj7m4/udskrift-af-model)