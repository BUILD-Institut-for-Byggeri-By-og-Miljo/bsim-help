<link rel="stylesheet" href="../style.css">

# The Mathematical Basis

The matematical basis for the algorithms in BSim are described in the following sections.

*   [Internal building description, definition of nodes in constructions.](https://bsim.outseta.com/support/kb/articles/ZmNroAm2/bygningsopfattelse-knudepunktsinddeling)

*   [The heat balance for the zone air.](https://bsim.outseta.com/support/kb/articles/wmjnblmV/varmebalance-for-luften-i-en-zone)

*   [Heat transmission in the constructions.](https://bsim.outseta.com/support/kb/articles/nmDBbY9y/varmetransport-i-konstruktionerne)

*   [Natural convetion at surfaces](https://help.bsim.dk/support/kb/articles/L9PwnpQJ/natural-convection-at-surfaces)

*   [Moisture balance for a zone.](https://help.bsim.dk/support/kb/articles/ZmNr6nm2/fugtbalancen-for-en-zone)

    *   [Detailed simulation of moisture transport, BSim](https://help.bsim.dk/support/kb/articles/vW5alXW4/detailed-moisture-balance)

    *   [Automatic net generation at moisture calculations, BSim](https://help.bsim.dk/support/kb/articles/7mawLG9E/automatisk-netinddeling)

    *   [Moisture transport with hysteresis, BSim](https://help.bsim.dk/support/kb/articles/jW7oxJWq/moisture-transport-with-hysteresis)

    *   [Effecient moisture penetration depth, BSim](https://help.bsim.dk/support/kb/articles/EWBOLNmr/effective-moisture-penetration-depth-and-automatic-grid-generation-in-bsim2000-for-moisture-calculations)

*   [ Algorithms for calculation of solar radiation and daylight.](https://help.bsim.dk/support/kb/articles/BWzdaPQE/algoritmer-til-beregning-af-solstraling-og-dagslys)
*   [Longwave radiant heat exchange between surfaces in a thermal zone.](https://help.bsim.dk/support/kb/articles/E9LwqvQw/on-the-form-factor-between-two-polygons)
*   [Longwave radiant heat exchange between the model and the ambient.](https://help.bsim.dk/support/kb/articles/pWrn03Wn/calculation-of-long-wave-radiation-to-the-sky)
*   [Hydronic heating and cooling in constructions.](https://help.bsim.dk/support/kb/articles/BWzdVPQE/vandbaren-opvarmningkoling-i-konstruktioner)

This chapter examines the theoretical basis for the calculations in BSim. A building is understood by BSim as being a number of zones, separated from each other and from outside air or from possible virtual zones by constructions of different kinds. Explanations are given as to how the stationary balances for heat and moisture are arranged for each individual zone and how the non-stationary thermal transmission through constructions is calculated. The program does not calculate the moisture transport through the constructions and the zones' moisture balance is thus set up more simply.

In a numerical model such as the one used in BSim, every continuous event of the real world is described in a discrete time steps. This means that the temporal sequence of the various processes, which in reality are modified continuously, are described in the program as changes from one time-step to the next, where the time-steps are of a finite size. The program assumes quasistationary conditions, that is to say that for the length of time which a time-step lasts, the conditions (for example, the temperatures of the individual components in the building) are assumed to be constant. By using suitably small time-steps this gives a reasonable approximation of reality.

In a corresponding manner, the building materials are divided into control volumes, which are each represented by a nodal point (or node). In each control volume, the alterations in the nodes' thermal condition are enumerated as a function of the heat flows in and out of the volume and of the material's thermal capacity. Even though a control volume has a certain extent, the conditions in the nodal point are assumed to be valid for the whole control volume. This again is a reasonable approximation, as long as the control volumes are not too large.

The nodes are thus central elements in the description of the building. The air in the zones is also described as nodes, but no heat or moisture capacity is attributed and the condition of which is therefore altered momentarily according to influences from the surroundings.

