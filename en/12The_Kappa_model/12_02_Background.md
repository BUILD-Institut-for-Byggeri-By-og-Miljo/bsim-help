<link rel="stylesheet" href="../style.css">

# Background

#### **Complete mixing**


When energy and comfort conditions in ventilated rooms are calculated, it has traditionally been a very widespread assumption that the air in the room in question is completely mixed. The immediate incentive for this assumption is that it greatly facilitates the calculations, whether done manually or using computer programs. This assumption was also used in tsbi3.

In the case of complete mixing there would in theory be no gradients for either temperature or concentration distribution in a room. In other words, the temperature and concentration would in principle be the same throughout and therefore the same close to the air inlet as in the vicinity of sources of heat and contamination, to name two extremes. In short, it is being claimed that the condition of the exhaust air is representative of conditions elsewhere in the room.

In relatively low-ceiling rooms with mechanical ventilation based on the mixing principle used in many offices, for example, this assumption would normally be very good.

 

#### **Rooms with gradients**

In rooms ventilated according to the displacement principle, on the other hand, this assumption could not be used, as this form of ventilation in particular will generate gradients (in a vertical direction). In displacement-ventilated rooms the temperature and concentration of the exhaust air would normally be found to be significantly higher than in the populated zone, with this being the main reason for the principle being used at all (Skistad, 1994; Yuan et al., 1998; 1999). Compared with fully mixed ventilation, greater temperature and ventilation efficiency are produced, or, to put it another way, more energy is removed per m³ of air and a lower contamination concentration is achieved in the populated zone. The presence of temperature and concentration gradients will therefore have a direct influence on thermal comfort, air quality and energy consumption. This ventilation principle also has its limitations of course, e.g. in the heating situation, but this will not be discussed further here, cf. Brohus and Nielsen, 1996; Nielsen, 1996 and Mundt, 1996, for example.

In buildings with natural or hybrid ventilation and in high-ceilinged rooms where ventilation is modest, the conditions will often be the same as in rooms with mechanical ventilation based on the displacement principle (Howarth, 1985; Kato et al., 1995; Niemelä and Koskela, 1996; Heiselberg et al., 1998).

Development over the last decade has therefore moved in the direction of there being a clearly growing need to be able to take vertical temperature gradients into account.

 

 

#### **Influence of radiation**

The thermal balance for rooms with temperature gradients will be affected to a greater extent than others by reciprocal radiation exchange between internal surfaces. The floor temperature in displacement-ventilated rooms, for example, will be higher than the air temperature in the immediate vicinity and, conversely, the ceiling temperature will be lower than the air temperature immediately below the ceiling, which is partly the result of reciprocal radiation exchange between the ceiling and floor. Altogether, long-wave radiation will have a great influence on temperature distribution, with it helping to "redistribute" energy, e.g. from the relatively warm air at the top of the room via the ceiling and high-level wall surfaces to the surfaces and air in the bottom part of the room (Li et al., 1992; 1993).

In the same way, solar radiation on surfaces will have a great influence on local temperature conditions (Schild, 1996; Heiselberg et al., 1998).

 

 

#### **CFD boundary conditions**

If a detailed definition of the local fields in a room is required, e.g. air speed, temperature or contamination concentration, numerical flow calculations have to be carried out using CFD (Computational Fluid Dynamics) - alternatively a reduced or full scale model can be built and measurements taken.

The quality of CFD simulations is very much dependent on it being possible to set sufficiently good boundary conditions, e.g. the convective heat flow from a sunlit wall surface. Programs for thermal building simulation like BSim are obvious tools for use in defining boundary conditions for CFD simulations. The models must, however, be sufficiently well developed and able to allow for temperature gradients, incident solar radiation and long-wave radiation exchange, etc., to a suitable extent. The generation of good boundary conditions for CFD simulations is therefore a further incentive for implementing a model for temperature gradients.

 

See also:

*   [Model description](https://help.bsim.dk/support/kb/articles/yWogRdWD/kappa-modellen---modelbeskrivelse)
*   [Implementation in tsbi5](https://help.bsim.dk/support/kb/articles/DmwA6g94/kappa-modellen---implementering-i-tsbi5)
*   [Input in SimView](https://help.bsim.dk/support/kb/articles/yW1xGP9B/kappa-modellen-inddata)
*   [References](https://help.bsim.dk/support/kb/articles/gWKDo0mp/kappa-modellen---referencer)
*   [Nomenclature](https://help.bsim.dk/support/kb/articles/VmAOoa9a/kappa-modellen---nomenklatur)


