# Systemer til luftudveksling

### **Overordnet beskrivelse af multizone modellen**

Teorien bag multizone modellen er gennemgået i sektionen om det teoretiske grundlag for multizone modeller. På baggrund af gennemgangen er det valgt at implementere en multizone model (mzm) baseret på ringmetoden, og med en nyudviklet [reguleringsstruktur](https://help.bsim.dk/support/kb/articles/7mawyJ9E/regulering-af-multizone-modellen).

### **Krav og behov som multizone modellen skal opfylde**

Integration af naturlig og mekanisk ventilation bør tage udgangspunkt i de situationer der vil være behov for at modellere i praksis, dvs. brugere kan vælge at simulere forskellige ventilationsstrategier. Ligeledes må der af hensyn til beregningen foretages simplificeringer. Følgende ventilationsstrategier kan simuleres:

1.  Balanceret mekanisk ventilation med udluftning/naturlig ventilation. Ved balanceret mekanisk ventilation forudsættes det at indblæst og udsuget luftmængde er den samme, hvorfor det mekaniske system ikke har indflydelse på trykfordelingen i bygningen. Den mekaniske ventilation bør kunne reduceres automatisk i takt med at udluftning/naturlig ventilation klarer ventilationen. Dette kan laves med CO<sub>2</sub> styring af mekanisk ventilation.

2.  Naturlig ventilation med mekanisk udsugning. I de fleste bygninger med naturlig ventilation er der mekanisk udsugning, hvor en større eller mindre del udsuges enten konstant (toiletrum, kopirum m.m.) eller på forskellige tidspunkter (møderum, køkkener, m.m.).

### **Overordnede ændringer i BSim**

Med implementeringen af mzm har det været nødvendigt at indføre tre iterationer. Da BSim som tidligere beskrevet ikke før har benyttet iterationer, er dette en stor programændring der også får relativ stor indflydelse på beregningshastigheden.

De tre iterationer er: 

1.  Multizone model iteration

2.  Iteration mellem mzm og ændring af åbningsgraderne for åbningerne

3.  Iteration mellem mzm og varmebalancen (BSim)

Hver gang multizone modellen bliver kaldt under en simulering, skal den iterere for at sikre en tilfredsstillende nøjagtighed af løsningen af det ikke-lineære ligningssystem.

For at finde frem til den åbningsgrad af åbningerne, der giver det ønskede luftskifte i zonerne, itereres der ved at ændre åbningsgraderne og løse multizone modellen.

Når det bedst mulige indstilling af åbningerne er fundet skal der itereres mellem mzm og varmebalancen. Multizone modellen beregner luftmængder på baggrund af temperaturer, og varmebalancen beregner temperaturerne på baggrund af luftmængder. Der skal derfor itereres mellem de to indtil en ønsket nøjagtighed er opnået.

*   [Implementering af multizone modellen](https://help.bsim.dk/support/kb/articles/7mawyJ9E/regulering-af-multizone-modellen)
