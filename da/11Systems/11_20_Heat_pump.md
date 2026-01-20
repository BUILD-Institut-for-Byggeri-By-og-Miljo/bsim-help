<link rel="stylesheet" href="../style.css">

# Varmepumpe, System

I dialogen angives data for en eventuel varmepumpe til rumopvarmning. Dataene bestemmes i henhold til relevante europæiske standarder.

<figure id="center_img">
<img src="./assets/HeatPump.gif " alt="Dialog for fysisk definition varmepumpe.">
<figcaption>Dialog for fysisk definition varmepumpe.</figcaption>
</figure>


*   *Type:* I feltet vælges det om varmepumpen alene er til produktion af varmt brugsvand, alene er til rumopvarmning eller om varmepumpen kan producere både varmt brugsvand og rumopvarmning i kombination, alternativt om der er en duoløsning med en varmepumpe, som kan producere varmt brugsvand og en anden varmepumpe til rumopvarmning. ***NB: Systemer til produktion af varmt brugsvand er pt. inaktive i BSim.***

**Room Heating**

*   *Nom. Efficiency:* Den nominelle effekt er varmepumpens ydelse ved testtemperaturerne angivet nedenfor. For varmepumper til varmt brugsvand bestemmes den nominelle effekt ikke nødvendigvis som en del af testen. I disse tilfælde angives i stedet den gennemsnitlige effekt til opvarmning af det varme brugsvand på årsbasis.

*   *Nom. COP:* Den nominelle COP er varmepumpens virkningsgrad ved de samme testtemperaturer. COP'en angives inklusive hjælpeudstyr, i den udstrækning det er med ved testen af varmepumpen. Øvrigt hjælpeudstyr, som ikke indgår i COP'en bestemt ved testen, angives separat, se under særligt hjælpeudstyr nedenfor.

*   *Rel. COP 50 % load:* Den relative COP ved 50 % belastning af varmepumpen er COP'en ved 50 % ydelse divideret med COP'en ved 100 % ydelse. Den relative COP ved 50 % belastning af varmepumpen bestemmes i henhold til CEN TS 14825. Hvis den relative ydelse ikke er bestemt i henhold til CEN TS 14825 antages en værdi på 0,80. Parameteren er ikke relevant for varmepumper ved brugsvandsopvarmning.

**Test temperaturer:** I afsnittet angives de test-temperaturer, som er benyttet ved bestemmelse af varmepumpens ydelse og virkningsgrad. Test-temperaturen på den varme side skal være større end eller eventuelt lig med test-temperaturen på den kolde side.

Cold side

*   Test Temp.: Test-temperaturen på den kolde side er mediets temperatur ved fordamperen.

*   Source: I afsnittet angives mediet på varmepumpens kolde side, dvs. kilden og hvilket medie varmen leveres til på den varme side. Mediet vælges i rullemenuer.  
Kold side På den kolde side er der mulighed for at vælge mellem:

    *   Jordslanger,

    *   Aftræk og

    *   Udeluft.

Warm side

*   Test temp.: Test-temperaturen på den varme side er mediets temperatur ved kondensatoren.  
For varmepumper i kombineret drift til varmt brugsvand og rumopvarmning, hvor det dokumenteres, at opvarmningen af det varme brugsvand primært sker ved udnyttelse overhedningsvarmen, kan der angives en test-temperatur på den varme side på 50 °C i kombination med de aktuelle testværdier for rumopvarmning. Anvendelse af disse værdier forudsætter, at der ikke kan ske test af varmepumpen ved varmt brugsvand produktion i henhold til anerkendte standarder.

*   Source: På den varme side er der mulighed for at vælge mellem: bullet Rumluft,

    *   Indblæsning og

    *   Varmeanlæg.

Inden det er muligt at gennemføre en simulering af en varmepumpe er det nødvendigt at definere designparametrene for varmepumpen. Dette gøres ved fra *SimView* at højreklikke i grafikken og fra [menuen](/06BSim_Program_structure/06_06_SimView_Menu.html) vælge *Defaults.* Skift til fanebladet [Heatloss](/09SimView/09_11_Model_information.html), og vælg ok.

Varmepumpen kan først aktiveres som kilde til varmetsystemet når programmet [PackCalc](/24Miscellaneous/24_01_PackCalc_Cooling.html) er installeret. PackCalc er udviklet af IPU Teknologiudvikling og kan hentes fra SBi's hjemmeside.

 

**Domestic hot water**

**Funktionerne for beregning af varmepumper i forbindelse med varmt brugsvand er ikke aktive i denne version af BSim.**

Se også:

*   [Schedule](/11Systems/11_02_Systems_schedule.html)
*   [DayProfile](/11Systems/11_04_Systems_DayProfile.html)
*   [Time](/11Systems/11_17_Systems_Time.html)