<link rel="stylesheet" href="../style.css">

# Naturlig ventilation, System

*Modulet til simulering af naturlig ventilation med multi-zone modellen (mzm) er i øjeblikket udsendt i beta-test og resultater opnået med modulet skal, som altid, betragtes med sund skepsis.*

*Feed-back til modulet på bsim-support@sbi.dk er meget velkommen!*

 Denne side er under ombygning <img src="./assets/SIGN.gif" width=25>

Simuleringen af naturlig ventilation (enkeltzone - EZM - eller multizone - MZM - simulering af naturlig ventilation) i BSim kræver inddata en række forskellige steder i modellen.

*   Site

*   Finish

*   Opening

*   Windoor

*   Venting

*   VentingCtrl

*   Nye parametre i resultatloggen

*   tsbi5 Options

Naturlig ventilation kan aktiveres på termisk zone niveau.

*   I simuleringerne med EZM tages kun hensyn til WinDoors/åbninger mod det fri. Den anvendte model kan findes automatisk af BSim.

*   I simuleringerne med MZM tages der tillige hensyn til luftstrømning gennem åbninger imellem termiske zoner. MZM kan dermed erstatte luftoverførsel mellem termiske zoner ved Mixing.

Naturlig ventilation ved EZM er implementeret som en speciel form for *Venting* (udluftning) i et udvidelsesmodul til BSim, og er baseret på [By og Byg Anvisning 202](/11Systems/11_11_Natural_ventilation.html), Naturlig ventilation i erhvervsbygninger, Beregning og dimensionering (2002).   
MZM er ligeledes implementeret som en form for *Venting* og er baseret på Jensen R.L. *Modellering af naturlig ventilation og natkøling - ved hjælp af ringmetoden.*

 

**Inddata for naturlig ventilation**

**Site**


<figure id="center_img">
<img src="./assets/SiteProperty.GIF " alt="Inddata til naturlig ventilation er knyttet til CO2-koncentrationen og landskabstypen i Site dialogen.">
<figcaption>Inddata til naturlig ventilation er knyttet til CO<sub>2</sub>-koncentrationen og landskabstypen i Site dialogen.</figcaption>
</figure>

 

*   *Weather File*: Der <u>skal</u> vælges en klimadatafil som indeholder information om vindhastigheden for at der kan gennemføres en simulering af naturlig ventilation. Til højre for *Browse-knappen* vises information om indholdet af den valgte klimadatafil.

*   *Co2:* Koncentrationen af CO<sub>2</sub> i udeluften (foreløbig konstant) opgives som en egenskab for bygningsmodellens lokalitet.

*   *Terrain Type*: Terræntypen vælges (se [Anvisning 202, side 35](/20The_Mathematical_Basis/20_28_Literature.html)) fra listen:

    *   Open flat country: Åbent fladt land,

    *   *Country with scattered windbreaks:* Landskab med spredt bevoksning,

    *   *Urban:* Forstadsområder,

    *   *City:* Bycentrum.**  
**

 

**Finish**


<figure id="center_img">
<img src="./assets/finish_property.gif " alt="I Finish Property dialogen knytter simuleringen af naturlig ventilation sig til 'Wind Exposure'.">
<figcaption>I Finish Property dialogen knytter simuleringen af naturlig ventilation sig til 'Wind Exposure'.</figcaption>
</figure>

*   *Wind Exposure* Angiver de lokale vindforhold for en væg som vender mod det fri. Forholdene vælges fra listen:

    *   *Semi-exposed:* Omkringliggende bygninger eller lignende er halvt så høje som væggen (standardværdi).

    *   *Exposed:* Væggen er fritliggende.

    *   *Sheltered:* Omkringliggende bygninger eller lignende er af samme højde som væggen.

 

**Opening**

<figure id="center_img">
<img src="./assets/opening_property.gif " alt="I Opening Property dialogen er den naturlige ventilation knyttet til Cd-værdien">
<figcaption>I Opening Property dialogen er den naturlige ventilation knyttet til Cd-værdien.</figcaption>
</figure>

*   *Cd:* Udstrømningskoefficienten *[Cd](/20The_Mathematical_Basis/20_15_Parameters_for_Natural_Ventilation.html) findes* jvf. [Anvisning 202, side 70-71](/20The_Mathematical_Basis/20_28_Literature.html).

*   *Ka:* [Koefficienten](/20The_Mathematical_Basis/20_15_Parameters_for_Natural_Ventilation.html) bruges i forbindelse med bestemmelse af størrelsen af det areal hvor der er tvungen strømning og udetemperatur i modsætning til resten af loftet hvor der er fri strømning/konvektion og indetemperatur.

I simuleringerne benyttes det fulde (geometriske) areal af åbningen.

**Windoor**

<figure id="center_img">
<img src="./assets/nat_vent.gif " alt="På WinDoor Property dialogens andet faneblad er inddata til simulering af naturlig ventilation samlet.">
<figcaption>På WinDoor Property dialogens andet faneblad er inddata til simulering af naturlig ventilation samlet.</figcaption>
</figure>

*   *Cd:* Udstrømningskoefficienten [*Cd*](/20The_Mathematical_Basis/20_15_Parameters_for_Natural_Ventilation.html) findes jvf. Anvisning 202, side 70-71.

*   *Cnt:* Åbningens center (0-1) er placeret i afstanden *Cnt**H over vinduets underkant, hvor H er vinduets højde. Åbningens bredde antages at være bredden af vinduet.

*   *Afrac:* Andelen af det aktuelle vindues totale areal som kan åbnes. Hvis *Afrac* = 0 kan vinduet ikke åbnes, og kan således ikke bidrage til naturlig ventilation af den termiske zone

*   *Ka:* [Koefficienten](/20The_Mathematical_Basis/20_15_Parameters_for_Natural_Ventilation.html) bruges i forbindelse med bestemmelse af størrelsen af det areal hvor der er tvungen strømning og udetemperatur i modsætning til resten af loftet hvor der er fri strømning/konvektion og indetemperatur.

Som vindtrykkoefficienter - der afhængiger af åbningernes orientering og vindens retning - anvendes værdierne angivet i [Anvisning 202, Appendiks A, side 109-110](/20The_Mathematical_Basis/20_28_Literature.html).

 

**Venting**

<figure id="center_img">
<img src="./assets/Venting.gif " alt="I definitionen af systemet 'Venting udluftning' er naturlig ventilation tilknyttet felterne 'Max AirChange' og 'Max Wind' samt valgmenuen 'Natural Ventilation'.">
<figcaption>I definitionen af systemet 'Venting udluftning' er naturlig ventilation tilknyttet felterne 'Max AirChange' og 'Max Wind' samt valgmenuen 'Natural Ventilation'.</figcaption>
</figure>

*   Max AirChange: Maksimalt tilladeligt luftskifte (/h).

*   Max Wind: Ingen naturlig ventilation hvis vindhastigheden (m/s) er større end angivne grænse. Angives 0 m/s kan der forekomme naturlig ventilation uanset vindhastigheden.

*   Natural Ventilation: Den ønskede model vælges i listen under Natural Ventilation. Umiddelbart over listen vises hvilken model BSim selv foreslår. Der kan vælges mellem følgende muligheder:

    *   *(Disabled):* Den oprindelige BSim model for venting.

    *   *(Automatic):* BSim vælger den model som skal anvendes, bestemt af rummets geometri, se det [matematiske grundlag](/20The_Mathematical_Basis/20_12_Natural_ventilation.html) for illustration af modelgeometrier svarende til nedenstående modeller for naturlig ventilation.

    *   *Single Sided:* Ét sæt åbninger i én flade, i samme lodrette niveau.

    *   *Cross:* Åbninger i to flader i samme højde (tværventilation).

    *   *Combined Two Levels:* Åbninger i flere niveauer i to ikke parallelle flader.

    *   *Combined:* Åbninger i flere niveauer i mere end to flader (kombineret opdrift- og tværventilation).

 

**VentingCtrl**

<figure id="center_img">
<img src="./assets/venting-ctrl.gif" alt="Reguleringen af den naturlige ventilation bestemmes af inddata i VentingCtrl dialogen.">
<figcaption>Reguleringen af den naturlige ventilation bestemmes af inddata i VentingCtrl dialogen.</figcaption>
</figure>
 

*   *SetPoint:* Temperatur setpunkt (°C). Hvis den operative temperatur i sensor zonen er over setpunktet udluftes der netop så meget, at setpunktet kan overholdes.

*   *SetP Co2*: Setpunkt for CO<sub>2</sub> koncentration (ppm). Angives 0 styres der ikke efter CO<sub>2</sub>. Hvis CO<sub>2</sub> koncentration i sensor zonen er over setpunktet udluftes der netop så meget, at setpunktet kan overholdes. Hvis *SetP Co2* er angivet (> 0) styres først efter den ønskede CO<sub>2</sub> koncentration, og derefter styres efter setpunktet for temperaturen.

*   *Factor:* Andel af den maksimale luftmængde, som kan komme i brug.**  


### <b> Nye parametre i resultatloggen </b>

**Under termisk zone/Air Balance:**

*   *VentFrac:* Andel af de(t) totale åbningsareal der anvendes. Middelværdi over timen.

*   *VentPi:* Beregnet middeltryk i den termiske zonen, Pa.

**Under Windoors**

*   *VentDPi:* Trykforskel med fortegn, Pa.

*   *VentSpeed:* Lufthastighed, m/s.

*   *VentCp:* Vindtrykkoefficient ([Anvisning 202, side 69](/20The_Mathematical_Basis/20_28_Literature.html)).

Se alle [parametre i resultatloggen](/13tsbi5_thermal_simulation/13_11_Parameters_in_the_result_log.html) her.

**tsbi5 Options**  
Hvis modellen for simulering af naturlig ventilation ved [multi-zone modellen](/20The_Mathematical_Basis/20_14_The_multizone_model.html) ønskes benyttet ved simuleringen med tsbi5, skal der sættes et flag i [Options dialogen](/13tsbi5_thermal_simulation/13_XX_tsbi5_Options.html) under tsbi5.

