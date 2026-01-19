<link rel="stylesheet" href="../style.css">

# Persons, System
Modellen beskriver varme og fugtafgivelse fra personer, som opholder sig i den aktuelle termiske zone. Antallet kan variere med tiden, hvilket beskrives under tidsplanen som en procentdel af det nominelle eller maksimale antal i en given time. Bemærk at latent varme, der er bundet til vanddamp, ikke angives som varmeafgivelse, da programmet selv tager hensyn hertil ved beregning af køling, kondensforhold mv.

Varmeafgivelsen fra personer antages fordelt ligeligt mellem stråling og konvektion.

<figure id="center_img">
<img src="./assets/PEOPLE.GIF " alt="Dialog (PeopleLoad) for definition af varmeafgivelse fra personer.">
<figcaption>Dialog (PeopleLoad) for definition af varmeafgivelse fra personer.</figcaption>
</figure>


I dialogen findes to felter:

*Total Load*

*   Number of People angiver antallet af personer i den termiske zone. Den indlæste værdi behøver ikke at være et helt tal. Det kan være hensigtsmæssigt at angive Number of People som det maksimale antal, der kan forekomme i bygningen eller i den termiske zone (fx antal ansatte), og under reguleringen definere variationen i antal (tilstedeværende) over døgnet, ugen og året.

*   Heat Gen.* oplyser den nominelle varmeafgivelse fra det givne antal personer og 'persontype', fx svarende til aktiviteten.

*   Moist. Gen.* oplyser den tilhørende fugtafgivelse fra det givne antal personer og 'persontype'.

*   CO<sub>2</sub> Gen.* Oplyser om mængden af CO<sub>2</sub> som det samlede antal personer defineret i den termiske zone afgiver pr. time.

*People Type*

*   Under *People Type* skal der vælges eller defineres en persontype, svarende til et gennemsnitligt aktivitetsniveau. Beskrivelsen af persontypen består af en varme- og en fugtafgivelse pr. person.

*   Afgivelse af CO<sub>2</sub> fra personer afhænger af deres aktivitetsniveau som:

*   q<sub>v,CO2</sub> = 17 M  
hvor q<sub>v,CO2</sub> er CO<sub>2</sub>-strømmen, l/h,  
           M er stofskiftet, met.

 
| Aktivitet / Beklædning | Tør varme[W] Bsim input | Fordampning [g/h] | Fordampning [W] |
|-------------------------------|----------------------------|-------------------|-----------------|
| Stillesiddende <br> Nøgen <br> 0,5 clo <br> 1,0 clo <br> 1,5 clo | <br> 75 <br> 74 <br> 72 <br> 71 | <br> 40 <br> 42 <br> 44 <br> 46 |<br> 27 <br> 28 <br> 30 <br> 31 |
| Middel aktivitet <br> Nøgen <br> 0,5 clo <br> 1,0 clo <br> 1,5 clo |<br> 127 <br> 124 <br> 121 <br> 120 |<br> 115 <br> 120 <br> 123 <br> 126 |<br> 77 <br> 80 <br> 83 <br> 84 |
| Høj aktivitet <br> Nøgen <br> 0,5 clo <br> 1,0 clo <br> 1,5 clo |<br> 177 <br> 173 <br> 171 <br> 169 |<br> 192 <br> 198 <br> 202 <br> 205 | <br> 129 <br> 133 <br> 135 <br> 137


[Tidsplanen](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) (Schedule) definerer sammenhørende sæt af regulering og tidsangivelse. Der kan angives flere tidsplaner, således at det er muligt at definere forskellige døgnvariationer på forskellige tider af året. Hvis bygningsmodellen fx er en skole, kan én af tidsplanerne angive ferieperioder, hvor personlasten måske er 0.

For personlast er reguleringen af typen [døgnprofil](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dognprofil). For hver af de indlæste tidsplaner, skal der således defineres et døgnprofil, som angiver den procentvise variation af belastningen over døgnet inden for den tilhørende [tidsangivelse](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse).

Tidsangivelserne angiver således forskellige perioder af året, hvor der ønskes specificeret forskellige reguleringer (døgnprofiler).

 

Se også

*   Faneblad *[Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)*
*   Faneblad [*DayProfile*](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dognprofil)
*   Faneblad [*Time*](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)