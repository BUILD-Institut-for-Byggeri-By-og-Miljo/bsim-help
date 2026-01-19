<link rel="stylesheet" href="../style.css">

# Error messages

Error messages in ModelList are shown with an icon <img src="./assets/STOP.GIF" width=15> at the beginning of the line. Double-clicking or Ctrl-click on the line shifts the focus to the object in question in the hierarchical summary. Right-click the object in the tree to edit or add data. 

Error messages occurs at:

*  [Thermal simulation with tsbi5 and ModelList]() 
*  [Simulation of direct solar radiation with XSun]() 


| Error message | Explanation |
|--------------|-------------|
| No current building selected | More than one building is defined in the model and it has not been decided which to simulate. Right-click on the building ( <img src="./assets/OPEN_DIS.GIF" width=15> in the tree), choose *Properties* and put a tick marker next to *Current building*. |
| No weather file | No climate data file have been selected as basis for the thermal simulation. Right-click on *Site* (<img src="./assets/Site.gif" width=15> in the tree) and click the *Browse*-button to find a climate data file (*.dry or *.try). |
| Geometry incomplete | The geometry to the thermal zone do not define a closed cell. |
| No rooms | The thermal zone do not contain at least one room. Press and hold the left mouse button while the relevant room is dragged on to the empty thermal zone or delete the superfluous thermal zone. |
| No construction type | The face do not have an attached construction (material layers). [Standard constructions]() can be attached to any face or freely selected [constructions]() from the database. |
| No windoor type | Material properties have not been attached to the WinDoor. [Standard constructions]() can be attached to any face or freely selected [constructions]() from the database. |
| Unknown geometry | The geometry of the WinDoor is undefined, e.g. if the calculated area of the panel becomes negative. The geometry is calculated from knowledge of the width of the frame and the panel percentage. |
| No component | The physical properties of the system is not defined. Right-click on the system and define the physical properties at the first tab. |
| No schedule | The system have not got a [schedule](). Right-click on the system in the tree, jump to the *Schedule* tab and define a schedule for the control of the system. If the system is not to be used in this simulation, it can be turned off by right-clicking the thermal zone and mark it by a grey tick marker. |
| No control | The system do not have a control. Right-click on the system in the tree, jump to the *Control* tab(s) and define a control for the system. If the system is not to be used in this simulation, it can be turned off by right-clicking the thermal zone and mark it by a grey tick marker. |
| No time | The system do not have a [time plan](). Right-click on the system in the tree, jump to the *Time* tab and define a time plan for the control of the system. If the system is not to be used in this simulation, it can be turned off by right-clicking the thermal zone and mark it by a grey tick marker. |
| Unknown (Mixing) | The source for air into the thermal zone via [*Mixing*]() is undefined. |
| General Lux | The general lighting level [lux] is undefined (<= 0). |
| Unknown (Ventilation \| Natkøling) | The sensor zone for controlling the ventilation system for night cooling is undefined. Right-click on the system in the tree, jump to the [*NightCoolCtrl* tab]() and define a sensor zone for the ventilation system. |
| Thickness = x m | The thickness of a material layer in the construction is less than 0.0001 m. |
| Missing material | Material properties are not defined – thermal and/or moisture properties. |
| Spacer = x | The length of the spacer profile in the WinDoor is negative or zero. |
| Frame = x | The area of the frame in the WinDoor is negative. |
| Panel = x % | The panel area of the WinDoor is negative. |
| Dens = x kg/m³ / Cp = x J/kgK / lambda = x W/mK | The properties of the material is not defined correct. |
| U = x W/m²K | The U-value for the panel in the WinDoor is not defined correct. |



### XSun
| Error message | Explanation |
|--------------|-------------|
| Face sides degenerated ??? | ??? |
