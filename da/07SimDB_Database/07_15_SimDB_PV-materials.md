<link rel="stylesheet" href="../style.css">

# SimDB - PV-materialer

<figure id="center_img">
<img src="./assets/SIMPV-DB.GIF" alt="Dialog til definition af bygningsintegrerede solcellesystemer i databasen.">
<figcaption>Dialog til definition af bygningsintegrerede solcellesystemer i databasen.</figcaption>
</figure>

Bygningsintegrerede solcelleanlæg defineres ved en global systemeffektivitet som samlet beskriver effektiviteten af systemet, dvs. inkl. tab i kabler, vekselretter, solceller og paneler. Der skal ikke tages hensyn til tab på grund af slagskygger o.l. ved valg af effektivitet. Typiske værdier af systemeffektiviteten er 8-10 % for monokrystallinske, 6-9 % for polykrystallinske og 4-8 % for amorfe solceller.

 

Skygger

*   Feltet *Efficiency* (*ShadEff*) giver mulighed for at angive effektiviteten som skal benyttes for de arealer på panelerne som rammes af slagskygger når der **ikke** regnes med proportional reduktion på grund af slagskygger. Normalt er størrelsen af denne faktor 10-20 %.

*   Ved afkrydsning i *Proportional Shading Reduction* vil programmet beregne ydelsen proportionalt til de slagskygger som rammer panelerne, og ikke reducere ydelsen fra det skyggede areal til *ShadEff* når en slagskygge rammer arealet. I praksis kan dette opnås ved at optimere opstrengningen i modulerne samt delvist ved bruge af amorfe eller tyndfilm solceller som er mindre påvirkelige af slagskygger.

I *System Description* er det muligt at give en tekstmæssig beskrivelse af det system som er valgt, og dermed verificere hvilke overvejelser som ligger til grund for den valgte systemeffektivitet. Feltet er alene et informationsfelt.
