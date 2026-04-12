<link rel="stylesheet" href="../style.css">

# The Mathematical Basis

The matematical basis for the algorithms in BSim are described in the following sections.

*   [Internal building description, definition of nodes in constructions.](20_02_Building_description_and_definition_of_nodes_in_constructions.md)

*   [The heat balance for the zone air.](20_25_Heat_balance_for_the_zone_air.md)

*   [Heat transmission in the constructions.](20_26_Heat_transmission_in_constructions.md)

*   [Natural convetion at surfaces](20_11_Natural_convection_at_surfaces.md)

*   [Moisture balance for a zone.](20_04_Moisture_balance_for_a_zone.md)

    *   [Detailed simulation of moisture transport, BSim](20_05_Detailed_Moisture_balance.md)

    *   [Automatic net generation at moisture calculations, BSim](20_06_Automatic_net_generation.md)

    *   [Moisture transport with hysteresis, BSim](20_07_Moisture_transport_with_hysteresis.md)

    *   [Effecient moisture penetration depth, BSim](20_08_Effective_Moisture_Penetration_Depth,_and_Automatic_Grid_Generation_in_BSim2000_for_Moisture_Calculations.md)

*   [ Algorithms for calculation of solar radiation and daylight.](20_22_Algorithms_for_calculation_of_solar_radiation_and_daylight.md)
*   [Longwave radiant heat exchange between surfaces in a thermal zone.](20_24_Form_factor_between_two_polygons.md)
*   [Longwave radiant heat exchange between the model and the ambient.](20_23_Calculation_of_long_wave_radiation_to_the_sky.md)
*   [Hydronic heating and cooling in constructions.](20_27_Floor_heating_mathematical_basis.md)

This chapter examines the theoretical basis for the calculations in BSim. A building is understood by BSim as being a number of zones, separated from each other and from outside air or from possible virtual zones by constructions of different kinds. Explanations are given as to how the stationary balances for heat and moisture are arranged for each individual zone and how the non-stationary thermal transmission through constructions is calculated. The program does not calculate the moisture transport through the constructions and the zones' moisture balance is thus set up more simply.

In a numerical model such as the one used in BSim, every continuous event of the real world is described in a discrete time steps. This means that the temporal sequence of the various processes, which in reality are modified continuously, are described in the program as changes from one time-step to the next, where the time-steps are of a finite size. The program assumes quasistationary conditions, that is to say that for the length of time which a time-step lasts, the conditions (for example, the temperatures of the individual components in the building) are assumed to be constant. By using suitably small time-steps this gives a reasonable approximation of reality.

In a corresponding manner, the building materials are divided into control volumes, which are each represented by a nodal point (or node). In each control volume, the alterations in the nodes' thermal condition are enumerated as a function of the heat flows in and out of the volume and of the material's thermal capacity. Even though a control volume has a certain extent, the conditions in the nodal point are assumed to be valid for the whole control volume. This again is a reasonable approximation, as long as the control volumes are not too large.

The nodes are thus central elements in the description of the building. The air in the zones is also described as nodes, but no heat or moisture capacity is attributed and the condition of which is therefore altered momentarily according to influences from the surroundings.

