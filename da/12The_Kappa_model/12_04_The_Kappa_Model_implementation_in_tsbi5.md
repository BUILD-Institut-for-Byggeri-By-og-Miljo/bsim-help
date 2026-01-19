<link rel="stylesheet" href="../style.css">

# Kappa-modellen - Implementering i tsbi5
"Kappa-modellen" er implementeret efter beskrivelsen ovenfor med følgende forhold in mente.

**Indblæsningstemperaturen *T<sub>0</sub>***

Temperaturen *T<sub>0</sub>* er ovenfor benævnt "indblæsningstemperaturen". Hvis der er tale om ren mekanisk ventilation, og der i teorien ingen infiltration forekommer, svarer *T<sub>0</sub>* til indblæsningstemperaturen. Hvis bygningen omvendt alene ventileres naturligt uden varmegenvinding, svarer *T<sub>0</sub>* til temperaturen af udeluften. Kombineres mekanisk ventilation med fx vinduesåbning (naturlig ventilation), bliver indblæsningstemperaturen en blanding en de to størrelser. Her bestemmes *T<sub>0</sub>* som en vægtet værdi af indblæsningstemperaturen og udeluftens temperatur:

$$ T_0 = \frac{ m_{nat.} T_{nat.} + m_{mek.} T_{mek.} }{m_{mat.} + m_{mek.}} \tag{1} $$

hvor

m<sub>nat. </sub>er massestrøm fra naturlig ventilation (kg/s)  

m<sub>mek. </sub>er massestrøm fra balanceret mekanisk ventilation (kg/s)  

T<sub>nat. </sub>er temperaturen af "naturlig ventilationsluft", normalt svarende til udeluften (°C)  

T<sub>mek. </sub>er indblæsningstemperatur ved balanceret mekanisk ventilation (°C)  

Hvis der kun er mekanisk udsugning, bør der regnes med udeluftens temperatur.

I praksis vil der desuden forekomme et bidrag fra infiltration, i særdeleshed ved høje og utætte bygninger. Temperaturen af denne luftmængde vil ligge et sted mellem udeluftens og rumluftens temperatur efter passage og varmeveksling gennem revner og sprækker. *Indtil videre* ses der bort fra dette bidrag til *T<sub>0</sub>*, men på sigt bør det indregnes.

Da udsugningsluftens temperatur *T<sub>R</sub>* afhænger af blandt andet den konvektive varmestrøm langs alle indvendige overflader – som igen afhænger af det vertikale temperaturforløb – vil det være nødvendigt med en iterativ beregning. Her beregnes først F*<sub>konv</sub>*. efter formel [(3)](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse) uden hensyn til temperaturgradienten, dernæst bestemmes temperaturen *T* som funktion af højden *y* ved hjælp af formel [(7)](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse), idet *H*, *κ* og *T<sub>0</sub>* allerede er kendte. Hermed kan der foretages en korrigeret beregning af F*<sub>konv</sub>*, osv. Hvis der regnes med fuldstændig opblanding, er denne procedure unødvendig, hvorfor man i programmet springer den over, når κ = 1,0 og dermed reducere regnetiden.

 **Beregning af konvektiv varmestrøm**

Den konvektive varmestrøm fra gulv til luft beregnes ved hjælp af temperaturdifferencen *T<sub>gulv</sub> – T<sub>f</sub>* og den konvektive varmestrøm fra loft til luft som *T<sub>loft</sub> – T<sub>R</sub>*. For vægfladerne regnes med differencen mellem vægfladens overfladetemperatur og lufttemperaturen i fladens middelhøjde. De konvektive varmeovergangstal skal kunne ændres. Som default for indvendige konvektive varmeovergangstal kan værdierne i tabel 2 anvendes.

 
| Bygningsdel | Konvektivt varmeovergangstal (W/m² °C) |
|-------------|---------------------------------------|
| Gulv        | 2,5 |
| Loft        | 2,0 |
| Vægge        | 3,0 |



*Tabel 2. Default konvektive varmeovergangstal til bestemmelse af den konvektive varmestrøm fra de indvendige overflader. Reference: Hansen et al., 1987.*

**Default κ**

Værdien af *κ* bør som default være 1,0. Hermed vil beregningen svare til den traditionelle antagelse om fuldstændig opblanding, hvorved man ikke af vanvare ubevidst kommer til at regne, som om der var fortrængningsventilation.

**Operativ temperatur**

Den operative temperatur skal nødvendigvis tage hensyn til den nye temperaturfordeling. I *tsbi3* er den tilnærmet fundet som gennemsnittet af lufttemperaturen og middelstrålingstemperaturen under antagelse af fuldstændig opblanding. I BSim beregnes den operative temperatur som gennemsnittet af lufttemperaturen i højden 1,1 m (default) og middelstrålingstemperaturen. Dermed vil den operative temperatur svare til "det sædvanlige", når κ = 1,0. Af hensyn til beregning af atrier med flere etager, kan brugeren ændre højden, hvori den operative temperatur beregnes.

**Ustabil lagdeling**

Hvis en beregning resulterer i, at udsugningstemperaturen bliver mindre end indblæsningstemperaturen og dermed temperaturen ved gulvet, vil en temperaturlagdeling være ustabil og bryde sammen. Det medfører, at rumluften opblandes, hvilket her kan simuleres ved at sætte *κ* = 1,0.

Se også:

*   [Baggrund](https://help.bsim.dk/support/kb/articles/MQvEaomY/baggrund)
*   [Kappa-modellen](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse)
*   [Inddata i SimView](https://help.bsim.dk/support/kb/articles/yW1xGP9B/kappa-modellen-inddata)
*   [Referencer](https://help.bsim.dk/support/kb/articles/gWKDo0mp/kappa-modellen---referencer)
*   [Nomenklatur](https://help.bsim.dk/support/kb/articles/VmAOoa9a/kappa-modellen---nomenklatur)