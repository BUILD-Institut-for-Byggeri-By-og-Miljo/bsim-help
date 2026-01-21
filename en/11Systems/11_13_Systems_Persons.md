<link rel="stylesheet" href="../style.css">

# Systems, *Persons*
The model describes heat and moisture release from people present in the current thermal zone. The number can vary over time, with this being described under the schedule as a percentage of the nominal or maximum number in a given hour. Please note that latent warmth linked to water vapor should not be specified as heat release, as the software takes this into account itself when calculating cooling, condensation, etc.

Heat from people is distributed equally between convective and radiative heat transfer.

<figure id="center_img">
<img src="./assets/people.gif" alt="Dialog box for defining heat emission from people.">
<figcaption>Dialog box for defining heat emission from people.</figcaption>
</figure>


There are two fields in the dialog box.

*Total Load*

*   *Number of People* specifies the number of people in the thermal zone. The number entered does not have to be a whole number. It may be a good idea to specify the *Number of People* as the maximum that can occur in the building or thermal zone (e.g. number of employees) and define the variation in the number of people present over the day, week and year under control.

*   *Heat Gen.* indicates the nominal heat emission from the given number of people and "people type", e.g. corresponding to their activity.

*   *Moist. Gen.* indicates the relevant moisture release from the given number of people and "people type".

*   *CO2 Gen.* Informs about the amount of CO<sub>2</sub> released by the total number of persons in a thermal zone per. hour.

People Type

*   A People Type corresponding to the mean level of activity is defined in this field. The description of the people type consists of heat emission and moisture release per person.

*   CO<sub style="letter-spacing: -0.01em;">2</sub><span style="letter-spacing: -0.01em;"> flow from persons depends on their level of activity as:</span>

*   q<sub style="letter-spacing: -0.01em;">v,CO2</sub><span style="letter-spacing: -0.01em;"> = 17 M</span>

    *   where

    *   q<sub style="letter-spacing: -0.01em;">v,CO2</sub><span style="letter-spacing: -0.01em;"> is the CO</span><sub style="letter-spacing: -0.01em;">2</sub><span style="letter-spacing: -0.01em;">-flow, l/h,</span> 

    *   M is the metobolism, met.


| Activity / Clothing | Dry heat [W] Bsim input | Evaporation [g/h] | Evaporation [W] |
|-------------------------------|----------------------------|-------------------|-----------------|
| Sitting quet <br> Naked <br> 0,5 clo <br> 1,0 clo <br> 1,5 clo | <br> 75 <br> 74 <br> 72 <br> 71 | <br> 40 <br> 42 <br> 44 <br> 46 |<br> 27 <br> 28 <br> 30 <br> 31 |
| Medium activity <br> naked <br> 0,5 clo <br> 1,0 clo <br> 1,5 clo |<br> 127 <br> 124 <br> 121 <br> 120 |<br> 115 <br> 120 <br> 123 <br> 126 |<br> 77 <br> 80 <br> 83 <br> 84 |
| High activity <br> Naked <br> 0,5 clo <br> 1,0 clo <br> 1,5 clo |<br> 177 <br> 173 <br> 171 <br> 169 |<br> 192 <br> 198 <br> 202 <br> 205 | <br> 129 <br> 133 <br> 135 <br> 137
 

[*Schedule*](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) defines connected sets of control and time definitions. It is possible to specify several schedules, allowing different day variations to be defined at different times of the year. If the building model is a school, for example, one of the schedules can be for holidays, when the people load might be 0.

People load control is of the [day profile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile) type. This means that a day profile specifying the percentage variation in the load over the day within the relevant [time definition](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse) has to be defined for each of the schedules entered.

The time definitions therefore indicate different periods of the year for which different control actions (day profiles) are to be specified.

See also:

*   Tab [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule)

*   Tab [DayProfile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile)

*   Tab [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)

