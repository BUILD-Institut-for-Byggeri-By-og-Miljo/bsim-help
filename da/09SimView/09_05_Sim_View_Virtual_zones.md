<link rel="stylesheet" href="../style.css">

# SimView - fiktive zoner

Begrebet fiktive zoner fungerer ved, at kun rum placeret i termiske zoner medtages i simuleringen med *tsbi5*. Fiktive zoner er zoner, der grænser op til termiske zoner og dermed påvirker forholdene her. En fiktiv zone kan defineres på to måder i BSim:

*   1) ved at angive at side 2 vender imod den termiske zone.

*   2) ved at oprette et rum - uden for termiske zoner - med en given temperaturvariation eller med en temperatur som en termisk zone.

**Ad 1)** Find den flade som skal vende side 2 imod en fiktiv zone. Højre-klik på "Finish" i træstrukturen for den side, som vender imod det fri, og vælge en termisk zone i stedet for "Outdoors". Herved oprettes en fiktiv zone som **altid** har samme temperatur- og fugtforhold som den termiske zone. De belastninger, som påvirker fladen i den valgte termiske zone, kopieres til den side, der vender imod den fiktive zone. Side 2 påvirkes således af den termiske zone uden at den termiske zone påvirkes direkte af fladens side 2. Vælges den fiktive zone på side 2 til at være den samme som på side 1 påvirkes konstruktionen symmetrisk.

<figure id="center_img">
<img src="./assets/finish_property.gif " alt="I Finish Property dialogen er det muligt at vælge hvad der skal være på den pågældende side af en flade.">
<figcaption>I Finish Property dialogen er det muligt at vælge hvad der skal være på den pågældende side af en flade.</figcaption>
</figure>


**Ad 2)** Hvis der oprettes et rum som støder op til en termisk zone, kan dette påtrykkes en fast [temperaturvariation](https://help.bsim.dk/support/kb/articles/4966J79X/rumtemperatur) eller den samme temperatur som en termisk zone. Hvis modellen alene skal bruges til simulering med *tsbi5*, er det ikke nødvendigt at definere konstruktionerne for alle begrænsningsflader i et rum som ikke indgår i en termisk zone. Vælges naborummets temperatur lig med den termiske zones temperatur, vil konstruktionen som adskiller de to rum påvirkes symmetrisk.

 

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