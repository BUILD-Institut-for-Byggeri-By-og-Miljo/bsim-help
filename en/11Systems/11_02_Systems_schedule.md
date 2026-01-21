<link rel="stylesheet" href="../style.css">

# Systems, *Schedule*
In the user interface the structure is reflected by the systems in the dialog boxes for the individual components, with all components having a *Schedule* tab, which defines the schedule to be used for the specific component.


The order of the control/schedule pairs *(DayProfile/Time)* on the summary tab is very important, with it being used in a simulation to determine which control action has to be used together with the current component. At a given time (at the beginning of each hour) the schedule is run through in the order in which it is shown on the summary tab. In the case of the first control/time definition pair where the specified time falls within the time definition, the relevant control action will be used together with its component. If, of the other hand, the specified time does not fall within any time definition in the schedule, the effect will be for the relevant component not to be activated at all, so there will be no impact on indoor climate at the time in question.

The overall summary for a system can be viewed on the *Schedule* tab.

<figure id="center_img">
<img src="./assets/Schedule.gif" alt="The Schedule dialog box displays the combinations of control (DayProfile or control) and Time that are attached to the current system.">
<figcaption>The Schedule dialog box displays the combinations of control (DayProfile or control) and Time that are attached to the current system.</figcaption>
</figure>


tsbi5 runs through the list from the top (see example below), so the ability to change the order of the systems can be useful. This can be done by clicking the "Move Up" and "Move Down" buttons.

<img src="./assets/schedule_time.gif" alt="The list with different schedules is run through from the top.">
<figcaption>The list with different schedules is run through from the top.</figcaption>
</figure>


It is thus **only** the control associated with the first met time definition (marked with a thick line in the figure above), which will come into action in *tsbi5.* The control associated the time definition *Always* will only be used in the period not "occupied" by any previous time definition, located higher in the schedule table.

Time definitions covering the **whole year** (simulation period) must be located as the last entry in the table. Such a definition is normally used to "catch" periods that "falls" outside the rest of the time definitions for the system.

See also: 
*   [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time)
