<link rel="stylesheet" href="../style.css">

# Belysning - Light control


I *LightCtrl* benyttes som et simpelt mål for "lyset" i rummet det samlede solindfald i zonen. Dette defineres ved en grænse, [Solar Limit](www.help.bsim.dk) (kW), hvorunder lyset tændes.

Imidlertid er der også et andet reguleringskriterium, nemlig på temperaturen: Hvis der bliver meget varmt i den termiske zone, er det muligt at slukke lyset for at holde temperaturen nede. Dette angives i *LightCtrl* som *Temp Max* (°C). Dette har dog ingen mening, hvis det er midt om natten og derfor angives samtidig en *Lower Limit* for solindfaldet, der sikrer at lyset kun slukkes, hvis der dog er lidt lys (sol) til stede angivet ved *Lower Limit* (kW).

<figure id="center_img">
<img src="./assets/light-lightctrl.gif" alt="Dialog til definition af reguleringen (Lighting | LightCtrl) af kunstbelysningen som en funktion af solindfaldet og temperaturen i zonen.">
<figcaption>Dialog til definition af reguleringen (Lighting | LightCtrl) af kunstbelysningen som en funktion af solindfaldet og temperaturen i zonen.</figcaption>
</figure>


#### **Regulering efter solindfald og temperatur**

Ved denne reguleringstype reguleres almenlyset principielt efter det totale solindfald i den aktuelle zone.

*Factor* er en reduktionsfaktor (mellem 0 og 1), som angiver, at inden for den tilhørende tidsangivelse kan kun en vis andel af almenlyset tændes. Faktoren kan fx benyttes i forbindelse med bygninger, hvor en begrænset del af lyset af sikkerhedshensyn ønskes tændt uden for brugstiden, fx om natten.

Parameteren *Lower Limit* er nøje knyttet til den efterfølgende *Temp. Max* og angiver en nedre grænse for det totale solindfald, hvorover almenlyset slukkes, når temperaturen overstiger værdien af *Temp. Max*. Værdien af parameteren bør normalt sættes lavere end parameteren Sollys (*Solar Limit*), der er defineret i belysningsdialogen.

Ved overskridelse af værdien *Temp. Max* antages det, at almenlyset slukkes, dog kun såfremt det samlede solindfald overstiger den nedre grænse defineret i *Lower Limit* (sol grænse).

*Solar Limit* anvendes i forbindelse med lysregulering efter det samlede solindfald i zonen. Ved solindfald mindre end værdien af Sollys regnes almenlyset tændt inden for den tilhørende tidsangivelse. Bemærk, at parameteren Faktor (angivet under regulering i tidsplanen) for den aktuelle periode bliver multipliceret på den indlæste effektværdi for almenlys.   
Solar Limit er den samme parameter som er defineret på fanebladet "Lighting". Hvis der er defineret en værdi på "Lighting" benyttes en eventuel værdi defineret på dette faneblad (LightCtrl) ikke.

Se også: [Daylight Control](https://help.bsim.dk/support/kb/articles/zWZAql9p/belysning-daylight-control)
