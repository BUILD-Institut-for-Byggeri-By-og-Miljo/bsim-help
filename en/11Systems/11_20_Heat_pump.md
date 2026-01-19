<link rel="stylesheet" href="../style.css">

# Heat pump, System
In the scheme data for a eventual heat pump contributing to the space heating is given. Data are determined according to relevant European standards.

<figure id="center_img">
<img src="./assets/heatpump.gif" alt="Dialog for physical description of a heat pump.">
<figcaption>Dialog for physical description of a heat pump.</figcaption>
</figure>

*   *Type:* In this field is is selected if the heat pump is solely for production of domestic hot water (dhw) or it can produce both hot water and heating. Alternatively if it is a duo solution with one heat pump for domestic hot water and on for space heating. **NB: Systems for production of domestic hot water are currently inactive in BSim.**

Room Heating

*   *Nom. Efficiency:* The nominal power is the power delivered from the eat pump at the test conditions as stated below. For heat pumps to dhw the nominal power is not necessarily determined in the test. In these cases the average annual power for heating dhw can be used instead.

*   *Nom. COP:* The nominal COP is the efficiency of the heat pump at the given test temperatures. The COP is given including eventual supporting equipment if it is part of the test. Additional supporting equipment, which is not part of the COP determined during the test must be given separately.

*   *Rel. COP 50 % load*: The relative COP at 50 % load of the heat pump is the COP at 50 % load divided by the COP at 100 % load. The relative COP at 50 % load of the heat pump is determined according to CEN TS 14825. If the relative load is not determined according CEN TS 14825 a value of 0.80 assumed. The parameter is not relevant for heat pumps for dhw.

**Test:** In the section are given the test-temperatures, which have been used in the determination of the load and the efficiency of the heat pump. The test-temperature at the hot side must be higher or equal to the temperature at the cold side.

Cold side

*   *Test Temp.:* Test-temperature at the cold side is the temperature of the media at the evaporator.

*   Source: This section defines the media on the cold side of the heat pump, say which source and which media the heat is being delivered to at the hot side. The media is being selected in the combo-box.

*   Cold side: At the cold side it is possible to select among:

    *   Ground buried pipes,

    *   Exhaust, and

    *   Ambient air.   

Warm side

*   *Test temp.:* The test-temperature at the warm side is the temperature of the media next to the condenser.  
For heat pumps for combined production of space heating and dhw, and where it is documented that heating of dhw primarily happens by exploiting excess room temperatures, a test-temperature of 50 °C at the warm side in combination with the actual test values for space heating can be used. These values an be used if no test of the heat pump can been undertaken for production of dhw according to acknowledged international standards.

*   *Source:* At the warm side it is possible to choose between:

    *   Room air,

    *   Inlet air, and

    *   Hydronic heating system.   

Before simulating a heat pump it is necessary to define the design parameters for the heat pump. This is done in *SimView* by right-clicking in the graphic representation of the model and from the [menu](https://help.bsim.dk/support/kb/articles/49EdrJQ7/simview---menu) selecting Defaults. Jump to the tab [Heatloss](https://bsim.outseta.com/support/kb/articles/MQvE8bmY/modeloplysninger), and click OK.

The heat pump can not be activated as a source for the heating system until the external program [PackCalc](https://help.bsim.dk/support/kb/articles/j9b8ZOmn/packcalc-koling) have been installed. PackCalc has been developed by IPU Teknology development at Danish Technical University (DTU) and can be downloaded from their web site.

**Domestic hot water**

**The functions for calculation of production of domestic hot water is currently inactive in BSim.**

See also:

*   [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/schedule)   
[](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile)
*   [DayProfile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile)   
[](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time)
*   [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time)