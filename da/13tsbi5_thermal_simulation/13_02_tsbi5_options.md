<link rel="stylesheet" href="../style.css">

# tsbi5 - Options

Fanebladet *Options* indeholder forskellige valg for opsætning af den simulering, der skal gennemføres.

<figure id="center_img">
<img src="./assets/tsbi5Options.GIF" alt="Simuleringsprogrammet tsbi5 har fem faneblade samt valg af en række options for simuleringen, som gør det muligt at benytte programmet.">
<figcaption>Simuleringsprogrammet tsbi5 har fem faneblade samt valg af en række options for simuleringen, som gør det muligt at benytte programmet.</figcaption>
</figure>

 

*   *First Day:* Dato for start på simulering.

*   *Last Day:* Dato for slut på simulering.

*   Det er muligt at simulere mere end et år, med gentagelse af klimadata. Dette er især nyttig i forbindelse med simulering af fugtforholdene i konstruktionerne, hvor udtørring eller opfugtning kan være en proces som tager mere end et år. Resultaterne fra en simulering over flere år, gemmes i selvstændige resultatfiler. Disse resultatfiler navngives med modelnavnet efterfulgt af "#yy", hvor yy er de to sidste cifre af årstallet (fx 02 = 2002). I resultatvisningen på [*Parametres* fanebladet](https://help.bsim.dk/support/kb/articles/nmDBAR9y/tsbi5---parameters) vises **kun** det første år af simuleringsperioden. Efterfølgende år kan hentes ind i resultatvisningen ved tryk på *Open New Model* knappen.

*   *Simulation Options* er en gruppe med opsætning for simuleringen:

    *   *Optimized Simulation*: Flag for optimeret simulering (regulering af systemer i hver tidsskridt i modsætning til hver time).

    *   *Moisture Transport*: Flag for beregning af fugttransport i konstruktionerne. Denne option vil kun være aktiv hvis der benyttes en database med data for materialernes fugttekniske egenskaber.

    *   *Glazing Temp* (fra BSim version 2002): Angiver at modellen for detaljeret simulering af glastemperaturen skal benyttes.

    *   *Multizone Model* Angiver at multi-zone modellen skal anvendes til simulering af naturlig ventilation.

    *   *Longwave Rad. to Sky*: Flag for beregning af langbølget strålingsudveksling mellem modellens udvendige overflade og himlen.

    *   *Longwave Radiation*: Flag for beregning af langbølget strålingsudveksling mellem modellens indvendige overflader. Ved brug af denne beregningsmetode benyttes [variable overgangsmodstande ved overfladerne](https://help.bsim.dk/support/kb/articles/L9PwnpQJ/natural-convection-at-surfaces) i modellen. Beregningen kan <u>kun</u> gennemføres hvis rummene i modellen er konvekse.

    *   *XSun Distribution*: Flag for beregning af solfordeling ved hjælp af [*XSun*](https://help.bsim.dk/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun). Beregningen gennemføres kun for de rum i modellen som er konvekse.

    *   *Moisture Transport*: Angiver at der skal simuleres fugttransport i konstruktionerne (kræver at der er defineret fugttekniske egenskaber for konstruktionerne). Muligheden er <u>kun</u> tilgængelig hvis en database med fugttekniske egenskaber er tilknyttet modellen.

    *   *Latent Heat*: Angiver at der skal gennemføres en simulering af den latente varmetransport ved bevægelse af fugt i konstruktionerne.

    *   *Thermal Bridge*: Angiver at der skal justeres for geometriske [kuldebroer](https://help.bsim.dk/support/kb/articles/49EdOJQ7/kuldebroer) under simuleringerne.

    *   *Time steps (/h)*: Antallet af tidsskridt pr. time. Hvis antallet er mindre end hvad der kræves for at opnå en stabil simulering advares der herom og der anbefales et antal tidsstep som vil give en stabil simulering.<div id="gray_background"> Især i forbindelse med avanceret simulering af fugttransport i konstruktionerne er det vigtigt at sikre det rette antal tidsskridt!</div>

    *   *Layer thick (m)*: Makimumtykkelsen (i meter) for afstanden mellem knudepunkterne hvor temperaturen (og fugtigheden) beregnes i konstruktionerne (har især betydning ved simulering af fugttransport).

    *   *Solar Rad. Model*: Viser navnet på den model der benyttes til beregning af solindfald på hældende flader. Denne funktion er ikke aktiv.

    *   *Reg. System Time Step*: Ved at sætte dette flag er det muligt at vælge at BSim regulerer alle systemer på tidsskridt-niveau i stedet for på time-niveau. Denne option er implementeret for at sikre bagud-kompatibilitet med resultater fra tidligere (før version 6,11,1,14) simuleringer.

*   Save in Log: Grupper af parametre, der skal gemmes på timebasis,

    *   *Weather*: Data fra udeklimaet,

    *   *Thermal Zones*: Data fra *termiske zoner* (fx temperatur, operativ temperatur, solindfald osv.),

    *   *Constructions*: Data fra konstruktioner (fx overfladetemperaturer, knudepunktstemperaturer, kondensrisiko, solcelleydelse - via [*SimPv* ](https://help.bsim.dk/support/kb/articles/pWrnRaWn/simpv)- osv.).

    *   *Windoors*: Data fra vinduer og døre,

*   *Tables*: Ved at fjerne check-mærket fra *Dynamic update of Tables* aktiveres *Apply*-knappen på fanebladet *Tables* for manuel opdatering af indholdet i resultattabellerne når der skiftes til en ny dato. Denne funktion er især nyttig når der analyseres parameterlister med mange parametre.

*   *Stat, hour*: Giver mulighed for at bestemme ved hvilke operative temperaturer tsbi5 skal tælle timer over hhv. under 4 temperaturgrænser. Disse oplysninger kan benyttes til vurdering af det termiske indeklima.

*   *Weather Data*: Med dette flag er det muligt at standse simuleringen ved skiftet fra et år til et andet (feltet er kun aktivt ved simulering over et årsskifte) og lokalisere en ny klimadatafil som skal benyttes indtil næste årsskifte. Den nye klimadatafil lokaliseres gennem åbning af den almindelige dialog til åbning af filer i Windows.   

    *   Hvis der trykkes på *Annuller* i dialogen for åbning af nye vejrdata, fortsætter simuleringen med samme vejrdata som hidtil.

Se også:

*   [Faneblad *Options*](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options)
    *   [*Edit + Options*](https://help.bsim.dk/support/kb/articles/EWBOvOmr/tsbi5-general-options)
*   [Faneblad *Moisture*](https://help.bsim.dk/support/kb/articles/XQYdbPmP/tsbi5---fugt)
*   [Faneblad *Simulation*](https://help.bsim.dk/support/kb/articles/DQ2xjyWV/tsbi5---simulation)
*   [Faneblad *HeatBalance*](https://help.bsim.dk/support/kb/articles/wmjn57mV/tsbi5---heatbalance)
*   [Faneblad *Parametres*](https://help.bsim.dk/support/kb/articles/nmDBAR9y/tsbi5---parameters)
*   [Faneblad *Tables*](https://help.bsim.dk/support/kb/articles/BWzdLlQE/tsbi5---tables)