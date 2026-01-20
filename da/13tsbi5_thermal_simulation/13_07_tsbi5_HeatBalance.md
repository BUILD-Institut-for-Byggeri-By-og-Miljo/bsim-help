<link rel="stylesheet" href="../style.css">

# tsbi5 - HeatBalance

På fanebladet *HeatBalance* findes en oversigt over de enkelte bidrag til varmebalancen.

<figure id="center_img">
<img src="./assets/tsbi5Heatbalance.GIF" alt="Fanebladet HeatBalance i tsbi5.">
<figcaption>Fanebladet HeatBalance i tsbi5.</figcaption>
</figure>

Øverst på fanebladet findes 4 valgmenuer, hvor forskellige muligheder for visning af varmebalancen kan vælges. Længst til venstre kan vælges hvilket år der skal vises. dat kan kun ske når der er gennemført en simulering over en perioder af flere år. I anden valgmenu kan opløsningen for den viste periode vælges, dvs. om varmebalancen skal opgøres uge- (*week*) eller månedsvis (*month*) i kolonnerne. I den midterste valgmenu er det muligt at skifte mellem timer (*Hour*) eller procent i sammentællingen af timer over og under visse temperarurer (se rækkerne markeret som: *Hours > 21, Hours > 25, Hours > 28 og Hours < 20*). Sammentællingen foretages under simuleringen, og det er derfor fx ikke muligt at udtrække antallet af timer over eller under grænserne inden for arbejdstiden. Hvis måtte dette ønskes, skal det gøres fra [resultatvisningen](https://help.bsim.dk/support/kb/articles/BWzdLlQE/tsbi5---tables). Temperaturgrænserne for sammentællingen kan ændres på fanebladet Options. I valgmenuen til højre er det muligt at vælge, om hele bygningen (*TotalBuilding*) eller en enkelt *termisk zone* skal vises i cellerne nedenunder.

Den første kolonne viser altid en sammentælling for hele den simulerede periode. De efterfølgende kolonner viser varmebalancen uge- eller månedsvis.

Det er muligt at gemme indholdet af varmebalancen i en ekstern tekst fil for yderligere bearbejdning, fx. i et regnearksprogram ved at trykke på "Alt + X" og derefter vælge navn og placering for tekstfilen.

Forklaring på de enkelte parametre i varmebalancen kan ses på [*Parametre i varmebalancen*](https://help.bsim.dk/support/kb/articles/4966dA9X/parametre-i-varmebalancen).

Længst til højre i toppen af fanebladet er en knap, som giver adgang til en grafisk præsentation af resultaterne som søjlediagram.

<figure id="center_img">
<img src="./assets/tsbi5Bar46.GIF" alt="Varmebalance vist som søjlediagram for januar (Month 1).">
<figcaption>Varmebalance vist som søjlediagram for januar (Month 1).</figcaption>
</figure>

Er en enkelt kolonne markeret, vil visningen af resultaterne starte med data fra denne kolonne. I bunden af vinduet med den grafiske visning af resultaterne findes 5 knapper, som (fra venstre) har følgende funktion:

*   Visning af information om den *Active-X* applikation, som er benyttet til grafisk visning af resultaterne.

*   Skift til forrige periode - hvis periode 1 vises, skiftes til sammentællingen for den simulerede periode.

*   Skift til næste periode.

*   [*Yscale* ](https://help.bsim.dk/support/kb/articles/wmjn7BmV/graph-scale)åbner en dialog for fastlåsning af y-skalaen fra periode til periode samt ændring af den grafiske visning.

*   Afslut den grafiske visning af resultaterne.

Ved højre-klik i den grafiske visning af resultaterne fremkommer en dialog, som giver mulighed for at [ændre den grafiske visning af resultaterne](https://help.bsim.dk/support/kb/articles/aWxnxAQV/andring-af-den-grafiske-afbildning-af-resultater).

Se også:

*   [Faneblad *Options*](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options)
*   [Faneblad *Moisture*](https://help.bsim.dk/support/kb/articles/XQYdbPmP/tsbi5---fugt)
*   [Faneblad *Simulation*](https://help.bsim.dk/support/kb/articles/DQ2xjyWV/tsbi5---simulation)
*   [Faneblad *HeatBalance*](https://help.bsim.dk/support/kb/articles/wmjn57mV/tsbi5---heatbalance)
*   [Faneblad *Parametres*](https://help.bsim.dk/support/kb/articles/nmDBAR9y/tsbi5---parameters)
*   [Faneblad *Tables*](https://help.bsim.dk/support/kb/articles/BWzdLlQE/tsbi5---tables)