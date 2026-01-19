<link rel="stylesheet" href="../style.css">

# Recirkulation

<figure id="center_img">
<img src="./assets/SIGN.gif" alt="">
<figcaption></figcaption>
</figure>

<span id="gray_background">
Recirkulation af ventilationsluften sker i henhold til nedenstående pseudo-kode.
</span>

<figure id="center_img">
<img src="./assets/recirculation%20system.gif" alt="Princip for ventilationsanlæg med recirkulation.">
<figcaption>Princip for ventilationsanlæg med recirkulation.</figcaption>
</figure>

Numrene i figuren refererer til den generelle beskrivelse af lufttilstande i anlæg og bygning. Recirkulering (Returnair) kan regulere på tilstanden i zonen ved:

*   at ændre på graden af returluft (forholdet ml. luftmængder 5a/11)

*   ændre på (samlet) indblæsningsluftmængde (11)

*   på befugter (9→10)

*   på affugter (køleflade) (6→7)

 

### **Inddata til ventilationsanlæg**

I de nuværende generelle data for anlæg svarer de eksisterende ventilatorer til ventilator 1: supply og 2: exhaust. Der skal tilføjes to ventilatorer, nemlig 3: return og 4: intake. Normalt vil den nuværende "return" være placeret som ventilator 2 i figuren.

Det skal overvejes, om MinHeatRec og MaxCoolRec senere skal flyttes over i reguleringerne (da de i nogle tilfælde kan opfattes som reguleringsparametre).

## **Inddata til recirkulation: ReturnairCtrl**

| **Parameter**      | **Enhed** | **Betydning** |
|--------------------|:---------:|---------------|
| MinSupplyRatio     | 0–1,0     | nedre værdi for andel af nominel indblæsningsluftmængde. Forholdet mellem SupplyAir og Exhaust bibeholdes konstant, når Supply ændres |
| MinReturnRatio     | 0–1,0     | nedre grænse for recirkuleret luft (i forhold til Supply) |
| MaxReturnRatio     | 0–1,0     | øvre grænse for recirkuleret luft (i forhold til Supply) |
| SetP CO₂           | ppm       | øvre grænse for CO₂ indhold i zonen |
| SetPHumid          | %         | nedre grænse for relativ luftfugtighed i zonen |
| SetPDehumid        | %         | øvre grænse for relativ luftfugtighed i zonen |
| MinInletTemp       | °C        | nedre grænse for indblæsningstemperatur |
| MaxInletTemp       | °C        | øvre grænse for indblæsningstemperatur |
| SetPTemp           | °C        | ønsket værdi for operativ temperatur i zonen |


### **Startbetingelser i første tidsskridt**

| **Parameter**   | **Værdi i første tidsskridt** | **Forklaring**                                              |
|-----------------|:-----------------------------:|-------------------------------------------------------------|
| SupplyRatio     | MinSupplyRatio                | der indblæses mindst muligt luft                            |
| ReturnRatio     | MaxReturnRatio                | der recirkuleres størst mulig luftmængde (i forhold til Supply) |
| InletTemp       | ZoneAirTemp                   | zonens lufttemperatur i forrige tidsskridt                  |
 

### **Startbetingelser i efterfølgende tidsstep**

| **Parameter**   | **Startværdi i efterfølgende tidsskridt** | **Forklaring**                                 |
|-----------------|:-----------------------------------------:|------------------------------------------------|
| SupplyRatio     | SupplyRatio                               | værdi i forrige tidsskridt                     |
| ReturnRatio     | ReturnRatio                               | værdi i forrige tidsskridt                     |
| InletTemp       | ZoneAirTemp                               | zonens lufttemperatur i forrige tidsskridt     |

#### **Reguleringsprioritet** 

1.  CO<sub>2</sub>

2.  Fugt

3.  Temperatur 

## **Regulering af CO<sub>2</sub>**

Værdi i zonen (4) under SetP CO<sub>2</sub>: ingen regulering

Værdi i zonen (4) over SetP CO<sub>2 </sub>:

*regulering*

1.  hvis ZoneAirCO2 > OutdoorAir CO<sub>2</sub>: reduktion af ReturnRatio

2.  når/hvis ReturnRatio = MinReturnRatio: øgning af SupplyRatio

*Intern parameter*: beregn MinOutdoorAir for at opnå SetP CO<sub>2</sub> (mindste ude-luftsmængde for at holde CO<sub>2</sub> indholdet under SetP).

## **Regulering af fugt**

Omregning af SetPHumid og SetPDehumid til værdier af relativ luftfugtighed ved SetPTemp. Hvis værdi i zonen (4) over SetPHumid og under SetPDehumid: ingen regulering

Værdi i zonen (4) under SetPHumid:   
*regulering*

1.  (øgning af ReturnRatio - kan næppe blive aktuelt)

2.  befugtning via Humidifier (9→10) med check af, at tilstanden ikke overskrider mætningskurven for lufttilstand 9

3.  hvis mætningskurven nås: øgning af SupplyRatio (- beregn hvor meget..!)

4.  befugtning via Humidifier (9→10) med check af, at tilstanden ikke overskrider mætningskurven for lufttilstand 9

Værdi i zonen (4) over SetPDehumid:   
*regulering*

1.  hvis ZoneAirHum > OutdoorAirHum: reduktion af ReturnRatio

2.  når/hvis ReturnRatio=MinReturnRatio: øgning af SupplyRatio

3.  når/hvis SupplyRatio=1: start køleflade for affugtning (6→7)

## **Regulering af temperatur**

Værdi i zonen (4) er mindre end (ZoneAirTemp - DeltaT):   
*Regulering*

1.  start varmeflade indtil ZoneAirTemp=SetPTemp (7→8)

2.  start radiator indtil ZoneAirTemp=SetPTemp

Værdi i zonen (4) er større end (ZoneAirTemp + DeltaT):

*Regulering*

1.  hvis ClCoil > MaxCoolPower (negativ): forøg køleydelsen (6→7)

2.  hvis zonens fugtighed herved kommer under SetPHumid: start befugter (9→10)