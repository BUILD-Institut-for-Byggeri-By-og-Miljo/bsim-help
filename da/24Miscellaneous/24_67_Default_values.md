<link rel="stylesheet" href="../style.css">

# Standardværdier

<figure id="center_img">
<img src="./assets/SIGN.gif" alt="">
<figcaption></figcaption>
</figure>

Der anvendes generelt standardværdier for en lang række data forskellige steder i programmet hvis der ikke er opgivet brugerdefinerede værdier. I det følgende vil BSim's standardværdier blive samlet.

*   Overfladeegenskaber (finish)

*   Rum (temperatur og fugt)

*   Solceller

 

### **Overfladeegenskaber (finish)**

#### **Varmeovergangsmodstande**

Standardværdierne for overgangsisolanser og konvektive overgangsisolanser fremgår af tabellen.


| Benævnelse                                      | Værdi                | Enhed    |
|-------------------------------------------------|----------------------|----------|
| Indvendig overfladeisolans — varmestrøm opad    | 0,10                 | m²K/W    |
| Indvendig overfladeisolans — vandret varmestrøm | 0,13                 | m²K/W    |
| Indvendig overfladeisolans — varmestrøm nedad   | 0,17                 | m²K/W    |
| Udvendig overfladeisolans — varmestrøm opad     | 0,04                 | m²K/W    |
| Udvendig overfladeisolans — vandret varmestrøm  | 0,04                 | m²K/W    |
| Udvendig overfladeisolans — varmestrøm nedad    | 0,04                 | m²K/W    |
| Indvendig konvektiv overgangsmodstand for gulve | 0,40                 | m²K/W    |
| Indvendig konvektiv overgangsmodstand for lofter| 0,50                 | m²K/W    |
| Indvendig konvektiv overgangsmodstand for vægge | 0,33                 | m²K/W    |


*Standardværdier for overgangsmodstande som benyttes når der gives 0 som inddata i Finish Property dialogen.*

Er der valgt simulering af langbølget strålingsudveksling (inde / ude) på *Options* fanebladet i *tsbi5* vil der dynamisk blive beregnet en variabel overgangsmodstand for konvektion, afhængig af temperaturforskellen mellem overfladen og luften og vindhastigheden på ydersiden af konstruktionerne.

#### **Lystekniske egenskaber**

Hvis der ikke vælges et materiale til at repræsentere en overflade vil *SimLight* benytte følgende standardværdier for reflektansen i beregningen af dagslysforholdene:

*   Absorptans: 0.9

*   Reflektans: 0.2

*   Emissivitet: 0.8

### **Rum - temperatur og fugt**

Hvis er rum **ikke** er placeret i en *termisk zone*, tildelt den samme temperatur som en *termisk zone* eller tilknyttet et *temperaturprofil*, benyttes 20 °C som en fast indetemperatur gennem hele simuleringsperioden.

### **Solceller**

Vælges der ingen materialeegenskab for arealer med solceller, benyttes som standard egenskaberne for et solcelleanlæg bestående af monokrystallinske solceller og en fornuftig elektrisk konfiguration og en god vekselretter. Værdierne for standardsystemet er:


 Variabel                                | Værdi  |
|-----------------------------------------|--------|
| Systemeffektivitet                      | 8,12 % |
| Skyggeeffektivitet (angivet som % af systemeffektiviteten) | 15 %   |
| Proportional skyggered | Nej |

Solceller kan beregnes med et udvidelsesmodul i BSim.