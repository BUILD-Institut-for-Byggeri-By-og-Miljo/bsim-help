<link rel="stylesheet" href="../style.css">

# Equipment, System

Modellen beskriver varmeafgivelse i den aktuelle termiske zone fra maskiner, apparater, udstyr m.m. Under tidsplanen kan variationen over døgnet, ugen og året defineres. Bemærk, at varmeafgivelse fra belysning defineres særskilt i [belysningsdialogen](https://help.bsim.dk/support/kb/articles/wQXxbnQK/belysning).

<figure id="center_img">
<img src="./assets/Eqiupment.GIF " alt="Dialog for definition af belastningen fra udstyr. Når der trykkes ny (New) er det muligt at give udstyret et navn og en belastning i kWh (Heat Load) samt angive, hvor stor en andel af den afsatte varme der overføres direkte (ved konvektion) til luften i den termiske zone (Part to Air).">
<figcaption>Dialog for definition af belastningen fra udstyr. Når der trykkes ny (New) er det muligt at give udstyret et navn og en belastning i kWh (Heat Load) samt angive, hvor stor en andel af den afsatte varme der overføres direkte (ved konvektion) til luften i den termiske zone (Part to Air).</figcaption>
</figure>


*Heat Load* angiver den samlede interne varmebelastning fra maskiner, apparater, udstyr m.m., dvs. alle varmebelastninger, som ikke kan angives under andre indgange i installationsdialogen.

*Part to Air* angiver andelen af varmeafgivelsen (mellem 0 og 1), der afgives direkte til rumluften ved konvektion. Den resterende varmemængden fordeles til zonens flader. Andelen til luft bør sjældent sættes lavere end 0,7. Selv om en større del af varmeafgivelsen i visse tilfælde afgives som stråling til overfladerne, vil en del af strålingsvarmen overføres direkte til tynde eller lette materialer blive frigivet til luften inden for det aktuelle tidsstep. Andelen til overfladerne fordeles med lige stor effekt pr. m² (W/m²) til samtlige konstruktioner i fladerne for den aktuelle zone.

[Tidsplanen](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) *(Schedule)* definerer sammenhørende sæt af regulering og tidsangivelse. Reguleringen for 'udstyr' er af typen [døgnprofil](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dognprofil), hvor variationen over døgnets timer angives i procent.

Når systemet er navngivet og effekten bestemt, skal de øvrige nødvendige faneblade udfyldes. Vælg fanen [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) og vælg [DayProfile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dognprofil).

Herefter skal de perioder af året, hvor systemet kan være i drift, defineres på fanen tidsangivelse ([Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)).

Se også

Fanebladet [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)   
Fanebladet [DayProfile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dognprofil)   
Fanebladet [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)

