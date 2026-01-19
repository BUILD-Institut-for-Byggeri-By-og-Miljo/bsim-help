<link rel="stylesheet" href="../style.css">

# Det matematiske grundlag

I disse sektioner gennemgås det teoretiske grundlag for beregningerne i BSim.

*   [Programmets bygningsopfattelse, knudepunktsinddeling](https://bsim.outseta.com/support/kb/articles/ZmNroAm2/bygningsopfattelse-knudepunktsinddeling)

*   [Varmebalancen for luften i en termisk zone](https://bsim.outseta.com/support/kb/articles/wmjnblmV/varmebalance-for-luften-i-en-zone)

*   [Varmetransport i konstruktionerne](https://bsim.outseta.com/support/kb/articles/nmDBbY9y/varmetransport-i-konstruktionerne)

*   [Fugtbalancen for en termisk zone](https://bsim.outseta.com/support/kb/articles/ZmNr6nm2/fugtbalancen-for-en-zone)

    *   [Detaljeret fugtbalance, BSim](https://help.bsim.dk/support/kb/articles/vW5alXW4/detailed-moisture-balance)

    *   [Automatisk netinddeling ved fugtberegninger, BSim](https://help.bsim.dk/support/kb/articles/7mawLG9E/automatisk-netinddeling)

    *   [Fugttransport med hysterese, BSim](https://help.bsim.dk/support/kb/articles/jW7oxJWq/moisture-transport-with-hysteresis)

    *   [Effektiv indtrængningsdybde for fugt, BSim](https://help.bsim.dk/support/kb/articles/EWBOLNmr/effective-moisture-penetration-depth-and-automatic-grid-generation-in-bsim2000-for-moisture-calculations)

*   [Naturlig konvektion ved overflader](https://help.bsim.dk/support/kb/articles/L9PwnpQJ/natural-convection-at-surfaces)

*   [Algoritmer til beregning af solstråling og dagslys](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstraling-og-dagslys)

*   [Langbølget strålingsudveksling mellem rummet overflader](https://help.bsim.dk/support/kb/articles/E9LwqvQw/on-the-form-factor-between-two-polygons)

*   [Langbølget strålingsudveksling med omgivelserne](https://help.bsim.dk/support/kb/articles/pWrn03Wn/calculation-of-long-wave-radiation-to-the-sky)

*   [Vandbåren gulvvarme/køling (engelsk)](https://help.bsim.dk/support/kb/articles/BWzdVPQE/vandbaren-opvarmningkoling-i-konstruktioner)

En bygning opfattes af BSim som bestående af et antal termiske zoner, der adskilles fra hinanden og fra udeluften eller fra eventuelle fiktive zoner ved konstruktioner af forskellig art. Der bliver gennemgået, hvordan de stationære balanceligninger for varme og fugt opstilles for hver enkelt zone for sig, og hvordan den instationære varmetransport gennem konstruktionerne beregnes. Endvidere beskrives, hvordan zonernes varmebalancer kobles til varmetransporten gennem konstruktionerne. Programmet beregner ikke fugttransporten gennem konstruktionerne, og zonernes fugtbalance kan derfor opstilles mere simpelt.

I en numerisk model som den, der benyttes i BSim, er den virkelige verden beskrevet på diskretiseret form. Det vil sige, at tidsmæssige forløb af forskellige processer, der i virkeligheden ændres kontinuert, i programmet beskrives ved ændringer fra ét tidsskridt til et andet, hvor tidsskridtene er af en endelig størrelse. Der antages kvasistationære forhold, hvilket vil sige, at så længe et tidsskridt varer, regnes forholdene, fx temperaturerne af de enkelte komponenter i bygningen, at være konstante. Ved at benytte tilpas små tidsskridt giver dette en rimelig tilnærmelse til virkeligheden.

På tilsvarende måde er byggematerialer inddelt i kontrolvolumener, der hver repræsenteres ved et knudepunkt. I hvert kontrolvolumen opregnes ændringerne i knudepunktets termiske tilstand som funktion af varmestrømmene ind og ud af volumenet og af materialets varmekapacitet. Selv om et kontrolvolumen har en vis udstrækning, regnes tilstanden i knudepunktet at være gældende for hele kontrolvolumenet, hvilket igen er en rimelig tilnærmelse, så længe kontrolvolumenerne ikke er for store.

Knudepunkter er således centrale elementer i bygningsbeskrivelsen. Også zonernes luft er beskrevet ved knudepunkter, der dog ikke tillægges nogen varme- eller fugtmæssig kapacitet, og hvis tilstand derfor ændres momentant efter påvirkninger fra omgivelserne.
