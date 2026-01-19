<link rel="stylesheet" href="../style.css">

# Varmebalance for luften i en zone

I opstillingen af varmebalancen for luften i en zone tages der ikke hensyn til luftens varmekapacitet, hvilket betyder, at luften momentant indstiller sig efter ændringer i omgivelserne. Der skelnes mellem følgende påvirkninger af luftens termiske tilstand:

*   Varmestrømme fra tilstødende konstruktioner

*   Varmestrømme gennem kuldebroer

*   Varmestrømme gennem vinduer og døre

*   Solindstråling gennem vinduer (hvoraf kun en del regnes tilført luften)

*   Varmebidrag fra forskellige varmebelastninger og systemer

*   Lufttilførsel fra udeluften (infiltration, udluftning)

*   Lufttilførsel fra ventilationsanlæg

*   Lufttilførsel fra andre zoner (mixing)

I forbindelse med bidragene til varmebalancen fra de forskellige former for lufttilførsel skal det bemærkes, at programmet altid sikrer, at der er luftbalance for hver zone, dvs. at der tilføres og fjernes lige store luftvolumener i zonen. Brugervalgte data, som vil give en ubalance, vil således medføre en forøgelse af luftmængden ved infiltration eller eksfiltration, således at balance opnås.

### **Varmestrømme fra indvendige og udvendige konstruktioner**

Disse varmestrømme overføres mellem de respektive konstruktionsoverflader og luften via fladernes overgangsisolans (sammensat af overgangsisolans ved konvektion og ved stråling), der specificeres for hver enkelt flade. Den tilførte effekt til luften beregnes ud fra formlen:

$$ \Phi_{luft, konstr} = \sum_{konstruktioner} A_{ft} \frac{T_{overfl} - T_{luft}}{R_{overfl}} \tag{1} $$

$ Φ_{luft,konstr} $ er tilført effekt til luften fra alle konstruktioner, W

$ A_{fl} $ er areal af en flade, m²

$ T_{overfl} $ er temperaturen af en overflade, K

$ T_{luft} $ er luftens temperatur i den aktuelle zone, K

$ R_{overfl} $ er termisk overgangsisolans for en overflade, m²K/W
  

### **Varmestrømme gennem kuldebroer**

Disse varmestrømme overføres direkte mellem luften i den pågældende zone og luften på den modsatte side af den konstruktion som indeholder kuldebroen, og der tages således ikke hensyn til varmetransporten gennem selve kuldebroen og dermed lagring af varme. For hver konstruktion i den termiske zone beregnes en samlet kuldebro-koefficient angivet i W/K. Den tilførte effekt til luften beregnes ud fra formlen:

$$ \Phi_{kuldebroer} = \sum_{konstruktioner} \omega_{kuldebroer} \left( T_{luft,side2} - T_{luft,side1} \right) \tag{2} $$

$ Φ_{kuldebroer} $ er tilført effekt til luften pga. kuldebroer, W

$ ω_{kuldebroer} $ er den totale varmetabskoefficient for kuldebroer i den aktuelle zone, W/K

$ T_{luft,side1} $ er lufttemperaturen i den aktuelle zone, K

$ T_{luft,side2} $ er lufttemperaturen på modsat side af konstruktionen, K

 

### **Varmestrømme gennem vinduer og døre**

Vinduer og døre tillægges ingen varmekapacitet, og varmestrømme gennem disse typer af delflader regnes at ske mellem luftknudepunkterne på hver side af delfladen, således at varmestrømmen fra zone 1 til zone 2 (med fortegn) beregnes af formlen:

$$ \Phi_{luft,vin/dør} = \sum_{vinduer \; og \; døre} A_{vin/dør} \cdot U_{vin/dør} \cdot \left( T_1 - T_2 \right) \tag{3} $$

$ Φ_{luft,vin/dør} $ er tilført effekt ved transmission gennem vinduer og døre, W

$ U_{vin/dør} $ er delfladens (vinduets eller dørens) transmissionskoefficient, W/m² K

$ T_1 $ og $T_2 $ er lufttemperaturene i zonerne på henholdsvis side 1 og 2, °C

Ofte vil zonen på side 2 af flader med vinduer være den fiktive zone udeluft, men beregningsprincippet er det samme for indvendige døre (og vinduer). Vinduers U-værdi beregnes ud fra en arealmæssig vægtning af U-værdierne for glas og karm.


### **Solindstråling**

Den indfaldne solstråling fordeles, for hver enkelt zone, mellem overfladerne og luften, jf formel 4:

$$ \Phi_{luft, sol} = f_{sol, til \; luft}  \Phi_{sol} \tag{4} $$

$ Φ_{luft,sol} $ er den tilførte effekt fra solindfaldet til luften, W

$ f_{sol, til \; luft} $ er fordelingsfaktoren defineret i solfordelingsdialog,

$ Φ_{sol} $ er den samlede tilførte effekt fra solen tilført zonen, W

Beregningen af $ Φ_{sol} $ er beskrevet i [\[5\]](https://help.bsim.dk/support/kb), [\[19\]](https://help.bsim.dk/support/kb) og [\[20\]](https://help.bsim.dk/support/kb).


### **Lufttilførsel ved ventilation**

Lufttilførslen kan stamme fra fire forskellige '[systemer](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview-systemer)': [Mixing](https://help.bsim.dk/support/kb/articles/Rm8JEd94/mixing-system), [infiltration](https://help.bsim.dk/support/kb/articles/Rm8JRZ94/infiltration-system), [udluftning](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system) samt (mekanisk) [ventilation](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation-system). Virkningen af hvert af disse bidrag på luftens varmebalance afhænger af volumenstrømmen og af temperaturen af luften, der tilføres zonen. I varmebalancen bestemmes hvert led for sig, idet de alle beregnes under hensyntagen til de variationer, der er bestemt af tidsplanerne for de enkelte systemer formlen:

$$ \Phi_{luft,vent} = n_{vent} V (\rho c_p) (T_{vent} - T_{luft}) \tag{5} $$

$ Φ_{luft,vent} $ er varmetilførsel fra den tilførte luft, W

$ n_{vent} $ er luftskiftet i zonen ved udveksling med udeluften, s<sup>-1</sup>

$V$ er zonens volumen, m³

$ρ$ er luftens densitet, kg/m³

$c_p$ er luftens specifikke varmekapacitet, J/kg K

Ved beregning af luftens densitet tages der ikke hensyn til den aktuelle temperatur, idet der regnes med konstant densitet beregnet ved 15 °C ud fra den aktuelle højde over havet.

 

### **Varmetilskud fra systemer**

Disse varmetilskud stammer fra systemerne personer, udstyr, belysning samt egentlige opvarmnings- og kølesystemer i zonen. Systemernes termiske påvirkning på zoneluften varierer ud fra de definerede tidsplaner, herunder de egentlige systemers reguleringsstrategier, som sigter på at opretholde en ønsket termisk tilstand.

Ved beskrivelsen af systemerne defineres desuden hvor stor en del af varmeafgivelsen, der tilføres rumluften, og hvor stor en del, der tilføres zonens overflader ved langbølget stråling. I nærværende beskrivelse betragtes alle systemers varmeafgivelse til rumluften under ét beskrevet ved størrelsen $ Φ_{luft,syst} $, jf. formlen for den termiske zones varmebalance.

 

### **Zonens samlede varmebalance**

Zonens samlede varmebalance kan nu opstilles ved at sætte summen af alle ovenstående varmebidrag lig nul, idet der med den stationære beregningsmetode ikke vil kunne ophobes varme i zoneluften. Herudfra fås nedenstående ligning, formel 6, til beregning af lufttemperaturen i det aktuelle tidsskridt.

$$
T_{\text{luft}}\left[
\sum_{\text{konst}}\frac{A_{\text{overfl}}}{R_{\text{overfl}}}
+\sum_{\text{windoor}}A_{\text{windoor}}\,U_{\text{windoor}}
+V(\rho c_p)_{\text{luft}}\Bigl(n_{\text{ude}}+\sum_{\text{zone}}n_{\text{zone}}\Bigr)
\right]
=
$$

$$
\sum_{\text{konst}}\frac{A_{\text{overfl}}}{R_{\text{overfl}}}
+\sum_{\text{windoor}}A_{\text{windoor}}\,U_{\text{windoor}}
+V(\rho c_p)_{\text{luft}}\Bigl[n_{\text{ude}}\,T_{\text{ude}}+\sum_{\text{zone}}n_{\text{zone}}\,T_{\text{zone}}\Bigr]
+\Phi_{\text{luft,sol}}+\Phi_{\text{luft,vent}}+\Phi_{\text{luft,syst}}+\Phi_{\text{kuldebroer}}
$$