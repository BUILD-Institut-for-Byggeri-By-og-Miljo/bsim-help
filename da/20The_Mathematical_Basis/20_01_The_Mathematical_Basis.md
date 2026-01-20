<link rel="stylesheet" href="../style.css">

# Det matematiske grundlag

I disse sektioner gennemgås det teoretiske grundlag for beregningerne i BSim.

*   [Programmets bygningsopfattelse, knudepunktsinddeling](/20The_Mathematical_Basis/20_02_Building_description_and_definition_of_nodes_in_constructions.html)

*   [Varmebalancen for luften i en termisk zone](/20The_Mathematical_Basis/20_25_Heat_balance_for_the_zone_air.html)

*   [Varmetransport i konstruktionerne](/20The_Mathematical_Basis/20_26_Heat_transmission_in_constructions.html)

*   [Fugtbalancen for en termisk zone](/20The_Mathematical_Basis/20_04_Moisture_balance_for_a_zone.html)

    *   [Detaljeret fugtbalance, BSim](/20The_Mathematical_Basis/20_05_Detailed_Moisture_balance.html)

    *   [Automatisk netinddeling ved fugtberegninger, BSim](/20The_Mathematical_Basis/20_06_Automatic_net_generation.html)

    *   [Fugttransport med hysterese, BSim](/20The_Mathematical_Basis/20_07_Moisture_transport_with_hysteresis.html)

    *   [Effektiv indtrængningsdybde for fugt, BSim](/20The_Mathematical_Basis/20_08_Effective_Moisture_Penetration_Depth,_and_Automatic_Grid_Generation_in_BSim2000_for_Moisture_Calculations.html)

*   [Naturlig konvektion ved overflader](/20The_Mathematical_Basis/20_11_Natural_convection_at_surfaces.html)

*   [Algoritmer til beregning af solstråling og dagslys](/20The_Mathematical_Basis/20_22_Algorithms_for_calculation_of_solar_radiation_and_daylight.html)

*   [Langbølget strålingsudveksling mellem rummet overflader](/20The_Mathematical_Basis/20_24_Form_factor_between_two_polygons.html)

*   [Langbølget strålingsudveksling med omgivelserne](/20The_Mathematical_Basis/20_23_Calculation_of_long_wave_radiation_to_the_sky.html)

*   [Vandbåren gulvvarme/køling (engelsk)](/20The_Mathematical_Basis/20_27_Floor_heating_mathematical_basis.html)

En bygning opfattes af BSim som bestående af et antal termiske zoner, der adskilles fra hinanden og fra udeluften eller fra eventuelle fiktive zoner ved konstruktioner af forskellig art. Der bliver gennemgået, hvordan de stationære balanceligninger for varme og fugt opstilles for hver enkelt zone for sig, og hvordan den instationære varmetransport gennem konstruktionerne beregnes. Endvidere beskrives, hvordan zonernes varmebalancer kobles til varmetransporten gennem konstruktionerne. Programmet beregner ikke fugttransporten gennem konstruktionerne, og zonernes fugtbalance kan derfor opstilles mere simpelt.

I en numerisk model som den, der benyttes i BSim, er den virkelige verden beskrevet på diskretiseret form. Det vil sige, at tidsmæssige forløb af forskellige processer, der i virkeligheden ændres kontinuert, i programmet beskrives ved ændringer fra ét tidsskridt til et andet, hvor tidsskridtene er af en endelig størrelse. Der antages kvasistationære forhold, hvilket vil sige, at så længe et tidsskridt varer, regnes forholdene, fx temperaturerne af de enkelte komponenter i bygningen, at være konstante. Ved at benytte tilpas små tidsskridt giver dette en rimelig tilnærmelse til virkeligheden.

På tilsvarende måde er byggematerialer inddelt i kontrolvolumener, der hver repræsenteres ved et knudepunkt. I hvert kontrolvolumen opregnes ændringerne i knudepunktets termiske tilstand som funktion af varmestrømmene ind og ud af volumenet og af materialets varmekapacitet. Selv om et kontrolvolumen har en vis udstrækning, regnes tilstanden i knudepunktet at være gældende for hele kontrolvolumenet, hvilket igen er en rimelig tilnærmelse, så længe kontrolvolumenerne ikke er for store.

Knudepunkter er således centrale elementer i bygningsbeskrivelsen. Også zonernes luft er beskrevet ved knudepunkter, der dog ikke tillægges nogen varme- eller fugtmæssig kapacitet, og hvis tilstand derfor ændres momentant efter påvirkninger fra omgivelserne.
