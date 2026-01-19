<link rel="stylesheet" href="../style.css">

# Venting, System

Udluftningen kan benyttes til at definere funktionen af alle former for naturlig ventilation, dvs. tilsigtet ventilering af zonen via ventiler, vinduer eller andre åbninger til det fri. Den simpleste form for naturlig ventilation sker ved åbning af vinduer, og modellen kan både simulere et 'fast' luftskifte, som kun varierer med forskellen mellem inde- og udetemperaturen og af vindhastigheden, og et luftskifte, som reguleres for at opretholde en ønsket indetemperatur.

Modellen for udluftning udtrykker hvor stort luftskifte, der (maksimalt) kan opnås under de aktuelle udeklimaforhold. Ligesom for infiltrationen indgår der tre led i beregningen af luftskiftet: Et grundluftskifte plus et led, der er afhængigt af differensen mellem inde og udetemperatur, plus et led, der er afhængigt af vindhastigheden:

$$ n_{udeluft} = n_0 + c_t \cdot (t_i - t_u)^{tp} + c_v \cdot v \tag{1} $$


 | Symbol         | Forklaring                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------|
| n₀             | er grundluftskiftet (h⁻¹)                                                                                   |
| tᵢ             | er den operative indetemperatur (°C)                                                                        |
| tᵤ             | er udetemperaturen (°C)                                                                                     |
| tp             | temperaturpotens *(TemPower)*                                                                               |
| cₜ             | er en konstant, der især afhænger af rummets og åbningernes størrelse samt højdeforskellen mellem åbningerne |
| cᵥ             | er en konstant, der især afhænger af bygningens tæthed, geometri, beliggenhed og terrænets topografi        |
| v     |    	er vindhastigheden (m/s)

Den til udluftningen hørende regulering simulerer, at vinduer eller ventilationsåbninger åbnes, såfremt temperaturen kommer over et vist niveau defineret ved et brugerbestemt setpunkt. Når der er tendens til, at setpunktet overskrides, forøges den naturlige ventilation så meget, som det er nødvendigt for at opretholde den ønskede temperatur, dog ikke mere end svarende til et brugerbestemt maksimalt luftskifte.

I modsætning til infiltration er udluftning defineret sådan, at der går en lige så stor luftstrøm ud af den termiske zone (til udeluften), som der kommer ind i den termiske zone (fra udeluften). Udluftning er altså pr. definition i (luft)balance og vil således ikke influere på størrelsen af infiltration eller eksfiltration, jf. afsnittet [Infiltration](https://help.bsim.dk/support/kb/articles/Rm8JRZ94/infiltration).

<figure id="center_img">
<img src="./assets/Venting_old.gif " alt="Definition af udluftningen i en termisk zone.">
<figcaption>Definition af udluftningen i en termisk zone.</figcaption>
</figure>

Værdien af grundluftskiftet (*Basic AirChange, n<sub>0</sub>*) vil ofte angive det luftskifte, der kan opnås ved fuld åbning af vinduerne under udeklimaforhold, der er 'normale' for den tilhørende tidsangivelse, defineret i tidsplanen. Konstanterne i ovenstående beregningsudtryk angiver da, hvor meget luftskiftet ændrer sig med temperaturdifferensen og med vindhastigheden.

Reguleringen, som defineres i tidsplanen, er bestemmende for, om der skal udluftes og hvor meget, 'vinduerne skal åbnes', dvs. hvilket luftskifte der er nødvendigt for at opnå den ønskede operative indetemperatur.

Faktoren [*TmpFactor*](https://help.bsim.dk/support/kb/articles/dQG2Gom4/udluftnings-temperaturfaktor) (c<sub>t</sub>) udtrykker hvor meget, luftskiftet stiger med stigende temperaturforskel mellem inde og ude. Dette felt er indgang til en dialog, som kan benyttes til at analysere betydningen af ind- og udløbsåbningernes størrelse samt den lodrette afstand imellem disse. For små rum antager faktoren små værdier, ned til ca. 0,2, mens den for store rum med åbningsarealer på 1 m² og rumhøjde 10 meter kan blive op til ca. 20.

Et tryk på knappen *TmpFactor* åbner en dialog til dimensionering af åbningsarealerne for at opnå en ønsket temperaturfaktor. Det bemærkes, at denne dialog primært fungerer som en hjælpedialog, som kan benyttes, hvis der ikke indlæses en værdi for faktoren direkte i udluftningsdialogen.

*WindFactor* *(c<sub>v</sub>)* er en faktor for luftskiftets vindafhængighed. Formlen indebærer, at der antages at være proportionalitet mellem luftskifte og vindhastighed. For mindre bygninger med små udluftningsåbninger samt beskyttet beliggenhed vil den være af størrelsesordenen 0,1, mens den for større bygninger med udsat beliggenhed kan blive op til 0,4-0,6.

*Max AirChange* udtrykker det maksimale luftskifte, som tillades ved udluftning. Hvis luftskiftet beregnet efter formlen bliver højere end denne værdi, vil det blive korrigeret til maksimalværdien.

*Max Wind* anvendes i forbindelse med udvidelsesmodulet NatVent (BSim fra version 2002) til simulering af naturlig ventilation og angiver den højest acceptable vindhastighed hvorunder der kan forekomme naturlig ventilation. Hvis *Max Wind* sættes til 0, vil den naturlige ventilation være aktiv for alle vindhastigheder.

*Sensor Zone* angiver en termiske zone hvor den operative temperatur ønskes benyttet til regulering af udluftningen i den aktuelle termiske zone. Det kan fx være temperaturen i et kontor som er bestemmende for udluftningen i et atrium.

*Natural Ventilation* (udvidelsesmodul til BSim) Den ønskede model for naturlig ventilation vælges i listen under Natural Ventilation. Umiddelbart over listen vises hvilken model BSim selv foreslår ud fra den given geometri af rummet. Der kan vælges følgende:


| Modeltype                                                                                                   | Beskrivelse                                                                                                         |
|------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| (Disabled)                                                                                                 | Den oprindelige BSim model for venting.                                                                             |
| (Automatic)                                                                                                | BSim vælger, ud fra rummets geometri ([oversigt](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation) med anvendte/mulige geometrier), den model som skal anvendes. |
| [Single Sided](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)<br>[Cross](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation) | Se [oversigt](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)!                          |
| [Combined Two](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)<br>[Levels](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation) |                                                                                          |
| [Combined](https://bsim.outseta.com/support/kb/articles/xmerqBQV/naturlig-ventilation)                                                          | Generel model, se [oversigt](MANGLER.SE.BSIM)!
 

[Naturlig ventilation](https://bsim.outseta.com/support/kb/articles/49EdKkQ7/naturlig-ventilation) kan simuleres ved enkeltzone modellen eller ved multizone modellen. Enkeltzone modellen simulerer luftudveksling mellem enkelte termiske zoner og omgivelserne. Multizone modellen simulerer luftudveksling mellem omgivelserne og termiske zone samt internt mellem termiske zoner afhængigt af det opståede drivtryk og setpunkterne for regulering af Venting.

Hvis modellen for simulering af[ naturlig ventilation](https://bsim.outseta.com/support/kb/articles/49EdKkQ7/naturlig-ventilation) ved [multi-zone modellen](https://bsim.outseta.com/support/kb/articles/VmAOXP9a/multizone-modellen) ønskes benyttet ved simuleringen med tsbi5, skal der sættes et flag i [Options dialogen](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options) under tsbi5.

[Tidsplanen](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) for udluftning definerer sammenhørende sæt af [regulering](https://help.bsim.dk/support/kb/articles/OW4NDGQg/venting---udluftningskontrol) og tidsangivelse. I almindelige opholdsrum vil udluftningen simulere brugernes åbning af vinduer, når indetemperaturen bliver for høj, og udluftningen vil da normalt kun være 'aktiv' inden for bygningens brugstid. I større bygninger, hvor der er udstyr for automatisk udluftning ved overskridelse af setpunktet for en temperaturføler, må det vurderes, om det opnåelige luftskifte afhænger af tiden på døgnet og på året.

Se også:

*   [Fanebladet VentingCtrl](https://help.bsim.dk/support/kb/articles/OW4NDGQg/venting---udluftningskontrol)
*   [Faneblad Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)
*   [Faneblad Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)


