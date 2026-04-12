<link rel="stylesheet" href="../style.css">

# *SimView* - Systems

A system consists of the general physical component, described by a simple mathematical model, and a schedule, which specifies variations, control strategies, etc., described by connected pairs of control and time definition, cf. figure.

<figure id="center_img">
<img src="./assets/system-niam.gif" alt="General description of systems.">
<figcaption>General description of systems.</figcaption>
</figure>


All systems in *BSim* are controlled on the basis of an operative temperature in the thermal zone to which they are attached.

All the installations and loads that impact on the thermal indoor climate must be defined for a building model. In what follows they are all covered by the term components.

Components are described by simplified models of the physical installations, loads, etc. The relevant variations, control strategies, etc., are described separately as a *control action* on the component. By way of an example, [people load](11_13_Systems_Persons.md), i.e. the heat and moisture load from people in a zone, is described as the maximum number of people of a given type, is specified as one person's heat and moisture emissions at a given activity level. Variations in the people load over the year and day are specified as a control action, in this instance a day profile, i.e. a percentage daily variation in the people load.

The following table provides a summary of elements with their possible attached components and control actions. In cases where a component can have more than one type of control, control types that can be used when choosing the control action are also specified.

One or no component of a given type can be specified for each system in a building model. In cases where a component has been selected, the control action on the component is specified using a [schedule](11_02_Systems_schedule.md). A schedule generally consists of one or more pairs of *control* and [time definition](11_17_Systems_Time.md). The control action specifies how the component is to be controlled or modified at the times that fall within the relevant time definition.

The combination of a component and its schedule is called a *system* and defines the impact on the building in terms of indoor climate at any time during a simulation.


| **Element**      | **Component** | **Control** | **Type** |
|--------------|--------|--------|--------|           
| **Zone**         |                                                                            |                                                                                                                   |                         |
|              | [People load](11_13_Systems_Persons.md)       | [Day profile](11_04_Systems_DayProfile.md)                                      | -                       |
|              | [Equipment load](11_19_Systems_Equipment.md)        | [Day profile](11_04_Systems_DayProfile.md)                                      | -                       |
|              | [Moisture load](11_05_Systems_Moisture.md)          | [Day profile](11_04_Systems_DayProfile.md)                                      | -                       |
|              | [Infiltration](11_08_Systems_Infiltration.md)    | [Day profile](11_04_Systems_DayProfile.md)                                      | -                       |
|              | [Lighting](11_03_Systems_Lighting.md)           | [Lighting control](11_03_Systems_Lighting.md)                                   | Sun / temperature      |
|              |                                                                            | [Daylight control](11_03_Systems_Lighting.md)                                   | Daylight               |
|              | [Venting](11_18_Systems_Venting.md)           | [Venting control](11_18_Systems_Venting.md)                                    | -                       |
|              | [Heating](11_12_Systems_Heating.md)          | [Heating](11_12_Systems_Heating.md)-/cooling control                           | Radiator               |
|              |                                                                            | [Floor heating control](11_07_Floor_Heating_Control.md)                     | Floor heating          |
|              | [Cooling](11_09_Systems_cooling.md)              | Heating-/[cooling control](11_09_Systems_cooling.md)                              | -                       |
|              | [Ventilation system](11_21_Systems_Ventilation.md) | [Supply control](11_23_Ventilation_Inlet_Control.md)                                   | Supply                 |
|              |                                                                            | [Room temperature control](11_25_Ventilation_Zone_Temperature_control.md) | Room temperature       |
|              |                                                                            | [Moisture control](11_22_Ventilation_Moisture_control.md)                 | Moisture               |
|              |                                                                            | [VAV control](11_26_Ventilation_VAV_control.md)                     | VAV                    |
|              |                                                                            | [Night cooling](11_24_Ventilation_Night_Cooling_Control.md)            | Night cooling          |
|              |                                                                            | [Return air](11_28_Ventilation_Recirculation.md)                        | Recirculation of air   |
|              | [Mixing](11_10_systems_mixing.md)            | [Day profile](11_04_Systems_DayProfile.md)                                      | .                      |
| **WinDoor**      |                                                                            |                                                                                                                   |                         |
|              | [Shutters](11_15_Systems_shutter.md)           | [Temperature control](11_15_Systems_shutter.md)                                   | -                       |
|              | [Shading](11_16_Systems_shading.md)     | [Shading control](11_16_Systems_shading.md)                               | -                       |
| **Virtual zone** |                                                                            |                                                                                                                   |                         |
|              | -                                                                          | Temp./moisture variation                                                                                             | -                       |

*Summary of elements in the building model to which systems consisting of a component and a schedule can be attached.*

Systems can be attached to thermal zones and selected by "checking" them in the *ThermalZone* Property dialog box, which is opened by right-clicking the icon for a thermal zone in the tree summary on the left of the screen. Control and schedule then have to be defined for the selected systems.

<figure id="center_img">
<img src="./assets/system_add.gif" alt="Dialog box for selecting, deactivating and deselecting systems to be attached to a thermal zone.">
<figcaption>Dialog box for selecting, deactivating and deselecting systems to be attached to a thermal zone.</figcaption>
</figure>


The check boxes next to the individual systems have three functions:

*   The first time an empty box is clicked, the system is added to the thermal zone, with this being indicated by a black tick in a white box, e.g. *Cooling, Equipment* and *Heating.* The system appears in the tree summary <u> without </u> a "+" in front of it as long as a schedule has not been defined.

*   The second time the box is clicked, the system is deactivated in the tsbi5 simulation, with this being indicated by a grey tick in a grey box, e.g. Mixing. When a system has been deactivated it will <u>not</u> be checked for faults and will not appear in [ModelList](../10Thermal_zones/10_09_SimView_Printing_a_model.md) The system is displayed in the tree structure as the existing icon with a red cross through it..

*   At third click in the box, the tick mark is removed and the box left empty. When OK is pressed, existing systems without tick-marks, will be suggested deleted as systems for the thermal zone.

The selected systems are displayed as sub-items under the thermal zone in the tree summary. The order that the systems occurs in the tree structure is the same as the order in the tsbi5 simulation. If the order need to be changed, it can be done by dragging one system to the system that is to follow the current.


<figure id="center_img">
<img src="./assets/systems_in_zone.gif" alt="The systems are displayed as sub-items under the thermal zone.">
<figcaption>The systems are displayed as sub-items under the thermal zone.</figcaption>
</figure>


In the user interface this structure is reflected in the dialog boxes for the individual components, with all components having a [Schedule](11_02_Systems_schedule.md) tab, which can be selected to define the schedule to be used for the specific component. In the *Schedule* dialog box the schedule is displayed as a connected pair of [time definition](11_17_Systems_Time.md) and control.

The order of the control/schedule pairs in the summary dialog box is very important, with it being used in a simulation to determine which control action has to be used together with the particular component. At a given time (at the beginning of each hour) the schedule is run through in the order in which it is shown on the summary tab *(Schedule).* In the case of the first pair where the specified time falls within the time definition, the relevant control action will be used together with its component. If, of the other hand, the specified time does not fall within any time definition in the schedule, the relevant component will not be activated at all, i.e. there will be no impact on indoor climate at the time in question.

Once the desired systems have been added to the thermal zone, the definitions can be edited by right-clicking the system in the tree summary. This opens a dialog box for defining the particular system.

Two types of system, which are selected via the respective options in the WinDoor dialog box, can be attached to a WinDoor: shutters and shading. It is also possible to enter information on solar light factors affecting daylight conditions in connection with control of the lighting system.

See also:

*   [Tab *Schedule*](11_02_Systems_schedule.md)
*   [Tab *Time*](11_17_Systems_Time.md) 
*   [Control priority for systems](11_14_Control_priority_for_systems.md)

Systems (no control) connected to the building model:
*   [Shadows from surroundings](../10Thermal_zones/10_05_Shadows_from_the_surroundings.md)

Systems connected to thermal zones:
*   [Mixing](11_10_systems_mixing.md)
*   [Persons](11_13_Systems_Persons.md)
*   [Equipment](11_19_Systems_Equipment.md)
*   [Moisture](11_05_Systems_Moisture.md)
*   [Infiltration](11_08_Systems_Infiltration.md)

*   [Lighting](11_03_Systems_Lighting.md)
*   [Venting](11_18_Systems_Venting.md)
*   [Heating](11_12_Systems_Heating.md)
*   [Cooling](11_09_Systems_cooling.md)
*   [Ventilation](11_21_Systems_Ventilation.md)

To a WinDoor two types of systems can be selected via their respective entries in the WinDoor dialog: [Shutter](11_15_Systems_shutter.md) and [Shading](11_16_Systems_shading.md). In additions to this, information about solar light factors concerning daylight conditions can be defined in connection to the control of the system [Lighting](11_03_Systems_Lighting.md).

Systems connected to WinDoor:
*   [Shutter](11_15_Systems_shutter.md)
*   [Shading](11_16_Systems_shading.md)
