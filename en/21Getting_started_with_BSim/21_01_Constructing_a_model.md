<link rel="stylesheet" href="../style.css">

# Constructing a model
Abstraction, describing the essence of the problem in the syntax used by a simulation tool, is one of the most difficult tasks for novice and expert alike. There are rarely resources or grounds for implementing a one-to-one description of reality in the software. It may be useful to describe a PC as a heat source, whereas no one would think of describing the box of disks or the book on the table. A general rule for abstraction is to endeavor to retain the volume, surface area and thermal mass of a thermal zone. This guide is too short for an exhaustive explanation of this subject.

The learning curve for using BSim, which is able to model a wide range of different types of problem, is not trivial. As with the majority of advanced engineering programs there is the problem of syntax – expressed with dialog boxes and menus that control the software and its data, which together make up its input data and output data. A further problem for new users is the meaning of the system with regard to how the software requires the various physical phenomena to be modeled.

The strength, and at the same time the weakness, of BSim is its ability to offer the user different ways of describing and analyzing a problem. BSim not only expects a description of the problem that is systematically correct (there are of course a number of built-in probability checks), but also assumes that the problem is meaningful in a thermodynamic sense. In other words, the software has no way of checking the meaning of the constructed model.

To be effective, learning requires more than just access to a PC, some documentation and enough time to work things out by trial and error. This user's guide is a step along the road to making this learning curve less painful. It can in no way replace access to an experienced user of the software or proper training, but rather provides help with implementing this process. This is not to say that it is impossible to become an expert by self tuition, but that the non-technical aspects of the simulation process are difficult to communicate.

There are a number of golden rules that should be observed when constructing models for simulating the thermal conditions in buildings:

*   Spend the necessary [time](../24Miscellaneous/24_46_Time_consumption.md) gathering knowledge (drawings, materials data, loads, etc.) of the building.

*   Think about the problem and the questions to be answered by the simulation in advance.

*   Construct the model as simply as possible while taking the above into account.

*   Assess whether the results are probable on a continuous basis (while constructing the model).

In the section with [learning examples](21_02_Learning_examples.md) three examples are found. These examples guides the first-time user through a simple creation of a building geometry, over addition of systems to the model and the first simulation with the tsbi5 program.

Before using the program it is recommended to get aquatinted with the [structure of BSim](../06BSim_Program_structure/06_01_BSim_Program_structure.md).

*   A number of [short-cuts](../05Introduction/05_06_Shortcut_keys.md) exists in *BSim*.

*   Models can be edited using the [menu](../06BSim_Program_structure/06_06_SimView_Menu.md) in *SimView*.

*   The [mouse](../09SimView/09_02_Mouse_operations_in_SimView.md) is a tool that can be used in different ways within *SimView*.

*   At the top of the user interface there is a [toolbar](../06BSim_Program_structure/06_05_SimView_Toolbar.md) giving easy access to different functions in *BSim*.

*   The [menus](../06BSim_Program_structure/06_04_Program_menus_in_BSim.md) in BSim is interactive and **only** those entries valid for the actual selections or location are accessible.

The following ordered list of links to different pages in the user's guide runs through a typical work sequence from the start of a project, through editing the model geometry, to final simulation using *tsbi5*.

The BSim program to which the specified description belongs is indicated at the end of each line in *italics*.

*   A new project is created with a *[wizard](../09SimView/09_12_Model_wizard_creating_a_new_model.md)*.

*   A [building model](../09SimView/09_13_Creating_a_building.md) is created in the project with *SimView*.

*   More [spaces](../09SimView/09_14_Creating_a_space.md) are added to the model in *SimView*.

*   The model geometry is [edited](../09SimView/09_15_Editing_the_model_geometry.md) with *SimView*.

*   [Default constructions](../10Thermal_zones/10_06_SimView_Default_constructions.md) are attached from the database *SimDB*.

*   [New materials](../07SimDB_Database/07_06_SimDB_BuildingMaterial.md) are created for use in new constructions in the database *SimDB*.

*   [New constructions](../07SimDB_Database/07_02_SimDB_BuildingElement.md) are created from the materials in the database *SimDB*.

*   Some [default constructions are overwritten](../09SimView/09_09_SimView_Non_default_constructions.md) with constructions from *SimDB*.

*   [Windows, doors and openings in the faces are added](../09SimView/09_05_Adding_windows_doors_and_openings_WinDoor.md) in *SimView*.

*   Systems are added to the windows.
    *   [Shading](../11Systems/11_23_Systems_Shading.md)
    *   [Shutters](../11Systems/11_24_Systems_Shutters.md)

*   A face is [filled](../24Miscellaneous/24_30_SimView_Insert_WinDoor.md)  with a window or opening in *SimView*.

*   [Shadows from the surroundings](../10Thermal_zones/10_05_Shadows_from_the_surroundings.md) are added to the model in *SimView*.

*   Incident solar radiation in the model is simulated in [*XSun*](../14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.md).

*   The [daylight conditions](../15SimLight_Daylight_calculations/15_01_Daylight_calculations_with_SimLight.md) in a space are calculated with *SimLight*.

*   [Thermal zones are created](../10Thermal_zones/10_01_Thermal_Zone_property.md) for simulation in *tsbi5*.

*   [The spaces in the model are attached to the thermal zones](../10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.md) in *SimView*.

*   [Systems are added](../11Systems/11_01_Systems.md) to the thermal zones in *SimView*.
    *   [Cooling](../11Systems/11_09_Systems_cooling.md)
    *   [Equipment](../11Systems/11_19_Systems_Equipment.md)
    *   [Heating](../11Systems/11_12_Systems_Heating.md)
    *   [Infiltration](../11Systems/11_08_Systems_Infiltration.md)
    *   [Lighting](../11Systems/11_03_Systems_Lighting.md)
    *   [Mixing](../11Systems/11_10_systems_mixing.md) (air transfer between thermal zones)
    *   [Moisture](../11Systems/11_05_Systems_Moisture.md)
    *   [People](../11Systems/11_13_Systems_Persons.md)
    *   [Ventilation](../11Systems/11_21_Systems_Ventilation.md)
    *   [Venting](../11Systems/11_18_Systems_Venting.md)
*   [Simulation](../13tsbi5_thermal_simulation/13_04_tsbi5_simulation.md) with tsbi5.

*   The [graphical presentation of the results](../13tsbi5_thermal_simulation/13_12_Modifying_the_graphical_presentation_of_results.md) can be modified and the graphics can be [imported](../19BSim_and_other_windows_programs/19_01_BSim_and_other_Windows_programs.md) into other Windows programs.
