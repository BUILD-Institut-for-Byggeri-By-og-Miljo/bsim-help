<link rel="stylesheet" href="../style.css">

**# SimView - Toolbar**
<figure id="image_linewidth">
<img src="./assets/ToolBar.GIF " alt="Toolbar in BSim.">
<figcaption>Toolbar in BSim.</figcaption>
</figure>


The toolbar in **BSim** contains a number of buttons with the following functions (from left to right):


| <img src="./assets/1SimView - Værktøjsbjælken.png" width=50> | [Create new project (shortcut: **Ctrl + N**)](../09SimView/09_12_Model_wizard_creating_a_new_model.md) |
|---|:---|
| <img src="./assets/2SimView - Værktøjsbjælken.png" width=50> | Open existing project (shortcut: **Ctrl + O**). In the open dialog box, models (from version 1.1.12.12) are shown with a coloured icon <img src="./assets/OPEN_DIS.GIF" width=15> and backup-models with a grey icon <img src="./assets/grå hus.gif" width=15>. |
| <img src="./assets/3SimView - Værktøjsbjælken.png" width=50> | Save current project (shortcut: **Ctrl + S**) |
| <img src="./assets/4SimView - Værktøjsbjælken.png" width=50> | Expand tree summary from current level down |
| <img src="./assets/5SimView - Værktøjsbjælken.png" width=50> | Collapse tree summary from current level down |
| <img src="./assets/6SimView - Værktøjsbjælken.png" width=50> | Undo last action (shortcut: **Ctrl + Z**) |
| <img src="./assets/7SimView - Værktøjsbjælken.png" width=50> | Redo the last undo |
| <img src="./assets/8SimView - Værktøjsbjælken.png" width=50> | Cut (shortcut: **Ctrl + X**) |
| <img src="./assets/9SimView - Værktøjsbjælken.png" width=50> | Copy (shortcut: **Ctrl + C**) |
| <img src="./assets/10SimView - Værktøjsbjælken.png" width=50> | Paste (shortcut: **Ctrl + V**) |
| <img src="./assets/17SimView - Værktøjsbjælken.png" width=50> | [Calculation of daylight with **SimLight**](../15SimLight_Daylight_calculations/15_01_Daylight_calculations_with_SimLight.md) |
| <img src="./assets/18SimView - Værktøjsbjælken.png" width=50> | [Switch to **SimView**](../09SimView/09_01_SimView.md) |
| <img src="./assets/19SimView - Værktøjsbjælken.png" width=50> | [Switch to **XSun**](../14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.md) |
| <img src="./assets/20SimView - Værktøjsbjælken.png" width=50> | [Switch to **tsbi5**](../13tsbi5_thermal_simulation/13_04_tsbi5_simulation.md) |
| <img src="./assets/22SimView - Værktøjsbjælken.png" width=50> | Start plug-in application 1, in this case [**SimDXF**](../24Miscellaneous/24_47_About_SimDXF.md) (install via **Application** | **Setup**) |
| <img src="./assets/23SimView - Værktøjsbjælken.png" width=50> | Start plug-in application 2, in this case **Notepad** (install via **Application** | **Setup**) |
| <img src="./assets/24SimView - Værktøjsbjælken.png" width=50> | [Start **SimDB**](../24Miscellaneous/24_42_About_SimDB.md) |
| <img src="./assets/25SimView - Værktøjsbjælken.png" width=50> | Update view |
| <img src="./assets/26SimView - Værktøjsbjælken.png" width=50> | Zoom in (shortcut: "+") |
| <img src="./assets/27SimView - Værktøjsbjælken.png" width=50> | Zoom out (shortcut: "-") |
| <img src="./assets/28SimView - Værktøjsbjælken.png" width=50> | Expand bounding box by 20 % in all directions to show a larger area around the model |
| <img src="./assets/29SimView - Værktøjsbjælken.png" width=50> | Collapse bounding box by 20 % in all directions to show a smaller area around the model |
| <img src="./assets/30SimView - Værktøjsbjælken.png" width=50> | Move viewpoint (rotate the model) to the left (shortcut: "left arrow") |
| <img src="./assets/31SimView - Værktøjsbjælken.png" width=50> | Move viewpoint down (view the model more from above) (shortcut: "up arrow") |
| <img src="./assets/32SimView - Værktøjsbjælken.png" width=50> | Move viewpoint up (view the model more from below) (shortcut: "down arrow") |
| <img src="./assets/33SimView - Værktøjsbjælken.png" width=50> | Move viewpoint (rotate the model) to the right (shortcut: "right arrow") |
| <img src="./assets/34SimView - Værktøjsbjælken.png" width=50> | Shows the **About BSim** dialog |
| <img src="./assets/clean_model.png" width=50> | Clean the model of redundant geometry |
| <img src="./assets/????????" width=50> | Export the model to Radiance |


<br>

The following functions had dedicated buttons in the toolbar in the classic version of BSim. In the current version, the functions are still available, but are accessed via the menus in the upper-left corner of the program window.

| <img src="./assets/11SimView - Værktøjsbjælken.png" width=50> | Print preview |
|---|:---|
| <img src="./assets/12SimView - Værktøjsbjælken.png" width=50> | Print (shortcut: **Ctrl + P**) |
| <img src="./assets/13SimView - Værktøjsbjælken.png" width=50> | Show the model using the standard internet browser in [model DOC](../24Miscellaneous/24_29_Model_DOC.md) format |
| <img src="./assets/14SimView - Værktøjsbjælken.png" width=50> | Show listing (documentation) for current view, [**ModelList**](../06BSim_Program_structure/06_07_SimView_Printing_a_model.md) |
| <img src="./assets/15SimView - Værktøjsbjælken.png" width=50> | Convert the building model to be used in the Danish building code energy frame compliance checker, Be18 (available in English and using customized weather data) |


<br>

<img src="./assets/35SimView - Værktøjsbjælken.png" width=20> Select the **View/ModelList** menu option or click the corresponding icon. This will open a window in which the model's data is displayed line by line. Each line starts with an icon indicating the type of information. As long as this window is displayed, the model can be printed.


Related subjects:

* [Creating a new model](../09SimView/09_12_Model_wizard_creating_a_new_model.md)
* [Toolbar](../06BSim_Program_structure/06_05_SimView_Toolbar.md)
* [Creating a building](../09SimView/09_14_SimView_Creating_a_building.md)
* [Creating a space](../09SimView/09_15_SimView_Creating_a_space.md)
* [Default constructions](../24Miscellaneous/24_28_Insert_Default_Options.md)
* [Creating thermal zones](../10Thermal_zones/10_01_Thermal_Zone_property.md)
* [Adding spaces to thermal zones](../10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.md)
* [Adding systems to thermal zones](../11Systems/11_01_Systems.md)
* [Editing the model geometry](../09SimView/09_02_SimView_Editing_the_model_geometry.md)
* [Adding an opening or WinDoor](../09SimView/09_07_Windoor_property.md)
* [Virtual zones](../09SimView/09_05_Sim_View_Virtual_zones.md)
* [Climate data and ground](../09SimView/09_10_Climate_data.md)
* [Printing a model](../06BSim_Program_structure/06_07_SimView_Printing_a_model.md)


See also:

* [SimView menu](../06BSim_Program_structure/06_06_SimView_Menu.md)