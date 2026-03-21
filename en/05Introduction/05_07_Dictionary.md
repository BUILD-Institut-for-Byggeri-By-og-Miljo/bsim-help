<link rel="stylesheet" href="../style.css">

# Dictionary

| Term              | Definition |
|-------------------|------------|
| Animate           | It is possible to display an *animated* calculation of solar gains and shadows for a model in [Xsun](../14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.md). |
| Building element  | A description of a [building element](../07SimDB_Database/07_02_SimDB_BuildingElement.md) defined in the database (e.g. constructions or windoor). Can be used directly as a description of a construction, a window, or a door. |
| Building material | A [building material](../07SimDB_Database/07_06_SimDB_BuildingMaterial.md) is used to build up building elements layer by layer. |
| Cell              | The geometric description of a room. |
| Construction layer| A building element or a construction is built up of layers. Each layer consists of a building material. For windows and doors, it is a description of: glazing, frame, and infill. |
| Construction      | Construction. A wall, a floor, or a roof. |
| Cooling           | [Mechanical cooling](../11Systems/11_09_Systems_cooling.md). In tsbi5, mechanical cooling is carried out using a cooling radiator, e.g. a cooling ceiling. **No** consideration is given to the cooling demand in the event of condensation forming on the surface. |
| Dayprofile        | A [day profile](../11Systems/11_04_Systems_DayProfile.md) is a description (distribution) of the load from a system over a day. |
| Edge              | An edge of a surface. |
| Environment       | Entry point for the definition of *[environmental impacts](../07SimDB_Database/07_07_SimDB_BuildingMaterial_Environment.md)* for building materials in the database. The *environmental impacts* are used **only** for LCA calculations, which are **not** part of the current software package. |
| Equipment         | [Equipment](../11Systems/11_19_Systems_Equipment.md). |
| Face              | The geometric description of a *construction*. |
| Finish            | The *surface* of the material facing the two sides of a construction. |
| Frame             | *Frame* around a window or a door. |
| Ground            | *Ground*. A surface can face the ground, which must be assigned a temperature that can vary throughout the year. |
| Heating           | [Heating](../11Systems/11_12_Systems_Heating.md). In tsbi5, heating is carried out by a radiator. |
| Kill animate      | *Stops* the animation in [XSun](../14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.md) at the current point in time. It is possible to jump back and forth one time step at a time. |
| Lighting          | [Lighting](../11Systems/11_03_Systems_Lighting.md). |
| Moisture          | [Moisture](../11Systems/11_05_Systems_Moisture.md). |
| Node              | The temperature is calculated at the constructions’ [*nodes*](../20The_Mathematical_basis/20_01_The_Mathematical_basis.md) during simulation with tsbi5. |
| Options           | *Options*, typically for defining various default values for the model and the programs. |
| People            | The [*people*](../11Systems/11_13_Systems_Persons.md) system provides a heat load to the thermal zone to which they are assigned. |
| Recess            | *Recessing* of the glazing in a window or door relative to the outer face of the façade. |
| Room              | A room in the model. A *room* **can** be located in a thermal zone, and only *rooms* in thermal zones are included in simulations with tsbi5. All *rooms*, also those outside thermal zones, are included in the model when it is imported into the [Be10](../20The_Mathematical_basis/20_01_The_Mathematical_basis.md) program. |
| Schedule          | A schedule is a collection of pairs of control settings and time indications that together make up the control strategy for a system. |
| Shading           | [Solar shading](../11Systems/11_16_Systems_shading.md). |
| Shutter           | [Shutters](../11Systems/11_15_Systems_shutter.md), normally perceived as night shutters, but can also be used to completely or partially block solar gains within a given [time period](../11Systems/11_17_Systems_Time.md). |
| Sidefin           | Around windows and doors, there may be side fins. A side fin is a shading device, in addition to any recessing of the glazing relative to the outer face of the façade. |
| Site              | The *geographical location* of the model. When climate data is selected, this information is retrieved from the climate file. |
| Split             | The split command is used, for example, to divide an edge of a surface into two equal parts. |
| Thermal zone      | *Thermal zone*. System control is carried out at the level of thermal zones. A thermal zone can contain several rooms, which will then have the same simulated temperature. |
| Transmittance     | *Solar energy transmittance* for a pane at normal incidence on the plane of the pane. Often stated as the pane’s g-value. |
| Venting           | [Venting](../11Systems/11_18_Systems_Venting.md). |
| Windoor           | A collective term for [windows](../10Thermal_zones/10_08_SimView_Adding_an_opening_or_WinDoor.md) and doors. |
| Wizard            | A *“wizard”* that sets up a wide range of standard parameters with just a few clicks. |
