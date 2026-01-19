# Stability criterion for starting simulations
Before starting the simulations, all temperatures in the model are set to 20 °C.

The model are being calculated several times (up until the maximum number of allowed [iterations/days](https://bsim.outseta.com/support/kb/articles/EWBOvOmr/tsbi5-general-options)) using the outdoor climate of the first day of the simulation period. All air node temperatures of the thermal zones are being recorded for hour 14.

The air node temperatures for hour 14 are being compared to the same temperatures from the day before (same outdoor climate) and the maximum difference is being recorded ad **dt**. Further **delta** is being recorded as dt for the actual day minus dt for the previous day.

The stability criterion is met if:

*   dt < 0,1 °C  
and
*   delta < 0,01 °C

and the real simulation starts using the real climate data with varying data from day to day.