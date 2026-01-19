<link rel="stylesheet" href="../style.css">

# DayProfile, System
Den hyppigst anvendte regulering er af typen døgnprofil, som beskrives nedenfor. De øvrige reguleringstyper beskrives under de enkelte systemer, hvortil de kan knyttes.

For hver periode af døgnet, hvor der ønskes specificeret en bestemt belastning indlæses belastningen som et heltal med %-tegn efterfulgt af timeperioden, hvori denne belastning skal være gældende. Efter hver timeangivelse og før en efterfølgende procentangivelse skal der være mellemrum.

Hvis den samme time angives to gange i døgnprofilet, er det belastningen for den sidste angivelse, der vil være gældende. Fx er profilerne 50 % 1-24 100 % 8-16 og 100 % 8-16 50 % 17-7 identiske.

Der kan angives flere [tidsplaner](http://bsim.outseta.com/support/kb/articles/79O3DZ9E/systemer---tidsplan) med sammenhørende døgnprofil og tidsangivelse, således at der kan simuleres forskellige belastningsvariationer på forskellige dage i ugen, måneden eller året. Der kan endvidere refereres fra forskellige komponenter til det samme døgnprofil, og kombinationen af døgnprofil og tidsangivelse giver mulighed for store variationsmuligheder for komponenternes 'regulering'.

Et døgnprofil angiver hvornår i løbet af et døgn et simpelt system er i drift og med hvor stor en andel af den nominelle belastning der afsættes i den enkelte time. Det er muligt at angive en procent større end 100, men tsbi5 vil da afsættes en effekt der er lig den nominelle belastning. Tilsvarende kan der gives en procent mindre end 0, men tsbi5 afsætter effekten 0.

<figure id="center_img">
<img src="./assets/DayProfile.GIF" alt="Dialog for definition af reguleringen døgnprofil. Her er valgt et profil med 50 % belastning hele døgnet og 100 % belastning i timerne 9 til 15 (inkl.)."> 
<figcaption>Dialog for definition af reguleringen døgnprofil. Her er valgt et profil med 50 % belastning hele døgnet og 100 % belastning i timerne 9 til 15 (inkl.).</figcaption>
</figure>

I inddataboksen *Profile* indtastes oplysningerne om døgnprofilets sammensætning linje for linje. Programmet læser tabellen oppefra. Hvis den samme time angives to gange i døgnprofilet, er det belastningen for den sidste angivelse, der vil være gældende. Det er muligt at ændre rækkefølgen af linierne ved at holde venstre knap på musen nede og trække den ønskede linje til en ny placering. Resultatet af de indtastede værdier vises på grafen til højre i dialogen.

 

Se også:

*   [Tidsangivelse](http://bsim.outseta.com/support/kb/articles/VmAOwo9a/tidsangivelse) (Time)
*   [Tidsplan](http://bsim.outseta.com/support/kb/articles/79O3DZ9E/systemer---tidsplan) (Schedule)

 

