<link rel="stylesheet" href="../style.css">

# Baggrund

**Fuldstændig opblanding**  
Når der regnes på energi- og komfortforhold i ventilerede rum, har det traditionelt været en meget udbredt antagelse, at luften i det aktuelle rum regnes fuldstændigt opblandet. Det umiddelbare incitament til antagelsen er, at det giver en markant lettelse i beregningerne – det være sig i hånden eller via computerprogrammer. Denne antagelse er også benyttet i fx *tsbi3*.

Ved fuldstændig opblanding vil der i teorien ingen gradienter forekomme for hverken temperatur- eller koncentrationsfordeling i et rum. Det vil sige, at temperaturen og koncentrationen i princippet er den samme overalt og dermed den samme tæt ved indblæsningsarmaturerne som i nærheden af varme- og forureningskilder for at nævne to yderpunkter. Man siger kort og godt, at tilstanden i den udsugede luft er repræsentativ for tilstandene de øvrige steder i rummet.

I forholdsvis lavloftede rum med mekanisk ventilation efter opblandingsprincippet som det fx anvendes i mange kontorlokaler, vil antagelsen normalt være ganske god.

**Rum med gradienter**  
Derimod vil man i rum, som er ventileret efter fortrængningsprincippet, ikke kunne bruge denne antagelse, idet den ventilationsform netop vil generere gradienter (i vertikal retning). I fortrængningsventilerede rum vil man finde, at temperaturen og koncentrationen i udsugningsluften normalt er signifikant højere end i opholdszonen, hvilket da også er den væsentligste grund til at princippet i det hele taget anvendes (Skistad, 1994; Yuan et al., 1998; 1999). Det giver i forhold til opblandingsventilation en højere temperatur- og ventilationseffektivitet eller sagt på en anden måde, får man fjernet mere energi pr. m<sup>3</sup> luft og opnår en lavere forureningskoncentration i opholdszonen. Tilstedeværelsen af temperatur- og koncentrationsgradienter vil dermed have en direkte indflydelse på den termiske komfort, luftkvaliteten og energiforbruget. Ventilationsprincippet har naturligvis også sine begrænsninger eksempelvis i opvarmningssituationen, hvilket ikke vil blive kommenteret yderligere her, se fx Brohus og Nielsen, 1996; Nielsen, 1996 samt Mundt, 1996.

I naturlig eller hybrid ventilerede bygninger samt i højloftede lokaler, hvor ventilationen er beskeden, vil der ofte gælde de samme forhold som i rum, der ventileres mekanisk efter fortrængningsprincippet (Howarth, 1985; Kato et al., 1995; Niemelä og Koskela, 1996; Heiselberg et al., 1998).

Udviklingen over det sidste årti er således gået i retning af, at der er et klart voksende behov for at kunne tage vertikale temperaturgradienter i regning.

**Indflydelse af stråling**  
Varmebalancen for rum med temperaturgradienter vil i højere grad end andre være påvirket af indbyrdes strålingsudveksling mellem de indvendige overflader. Fx vil gulvtemperaturen i fortrængningsventilerede rum være højere end lufttemperaturen i umiddelbar nærhed og modsat vil lofttemperaturen være lavere end lufttemperaturen umiddelbart under loftet, hvilket blandt andet er en følge af gensidig strålingsudveksling mellem loft og gulv. I det hele taget vil langbølget stråling have en stor indflydelse på temperaturfordelingen, idet den er med til at "omfordele" energien, eksempelvis fra den relativt varme luft øverst i rummet via loft og højtliggende vægflader til fladerne og luften i den nederste del af rummet (Li et al., 1992; 1993).

På samme måde vil solstråling på flader have en stor indflydelse på de lokale temperaturforhold (Schild, 1996; Heiselberg et al., 1998).

**Randbetingelser til CFD**  
Hvis der ønskes en detaljeret bestemmelse af de lokale felter i et rum, eksempelvis lufthastighed, temperatur eller forureningskoncentration, må der foretages numeriske strømningsberegninger ved hjælp af CFD (Computational Fluid Dynamics) - alternativt kan der opbygges og måles på en model i reduceret eller fuld skala.

Kvaliteten af CFD-simuleringer afhænger meget af, om det er muligt at fastsætte tilstrækkeligt gode randbetingelser, fx den konvektive varmestrøm fra en solbeskinnet vægoverflade. Programmer til termisk bygningssimulering som BSim vil være oplagte at bruge til at bestemme randbetingelser for CFD-simuleringer. Her er det selvfølgelig en forudsætning, at modellerne er tilstrækkelig udbyggede og i passende udstrækning kan tage højde for blandt andet temperaturgradienter, solindfald og langbølget strålingsudveksling. Generering af gode randbetingelser til CFD simuleringer er derfor yderligere et incitament til at implementere en model for temperaturgradienter.

Se også:

*   [Kappa-modellen](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse)
*   [Implementering af modellen](https://help.bsim.dk/support/kb/articles/DmwA6g94/kappa-modellen---implementering-i-tsbi5)
*   [Inddata i SimView](https://help.bsim.dk/support/kb/articles/yW1xGP9B/kappa-modellen-inddata)
*   [Referencer](https://help.bsim.dk/support/kb/articles/gWKDo0mp/kappa-modellen---referencer)
*   [Nomenclatur](https://help.bsim.dk/support/kb/articles/VmAOoa9a/kappa-modellen---nomenklatur)
