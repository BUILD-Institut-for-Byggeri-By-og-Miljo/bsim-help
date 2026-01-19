<link rel="stylesheet" href="../style.css">

# Dictionary

| Term              | Definition |
|-------------------|------------|
| Animate           | It is possible to display an *animated* calculation of solar gains and shadows for a model in [Xsun](https://help.bsim.dk/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun). |
| Building element  | A description of a [building element](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement) defined in the database (e.g. constructions or windoor). Can be used directly as a description of a construction, a window, or a door. |
| Building material | A [building material](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial) is used to build up building elements layer by layer. |
| Cell              | The geometric description of a room. |
| Construction layer| A building element or a construction is built up of layers. Each layer consists of a building material. For windows and doors, it is a description of: glazing, frame, and infill. |
| Construction      | Construction. A wall, a floor, or a roof. |
| Cooling           | [Mechanical cooling](https://help.bsim.dk/support/kb/articles/y9gBNGQM/cooling-system). In tsbi5, mechanical cooling is carried out using a cooling radiator, e.g. a cooling ceiling. **No** consideration is given to the cooling demand in the event of condensation forming on the surface. |
| Dayprofile        | A [day profile](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile-system) is a description (distribution) of the load from a system over a day. |
| Edge              | An edge of a surface. |
| Environment       | Entry point for the definition of *[environmental impacts](https://help.bsim.dk/support/kb/articles/nmDBzx9y/simdb---buildingmaterial-environment)* for building materials in the database. The *environmental impacts* are used **only** for LCA calculations, which are **not** part of the current software package. |
| Equipment         | [Equipment](https://help.bsim.dk/support/kb/articles/vW5a8pW4/equipment-system). |
| Face              | The geometric description of a *construction*. |
| Finish            | The *surface* of the material facing the two sides of a construction. |
| Frame             | *Frame* around a window or a door. |
| Ground            | *Ground*. A surface can face the ground, which must be assigned a temperature that can vary throughout the year. |
| Heating           | [Heating](https://help.bsim.dk/support/kb/articles/wmjnq7mV/heating-system). In tsbi5, heating is carried out by a radiator. |
| Kill animate      | *Stops* the animation in [XSun](https://help.bsim.dk/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun) at the current point in time. It is possible to jump back and forth one time step at a time. |
| Lighting          | [Lighting](https://help.bsim.dk/support/kb/articles/wQXxbnQK/lighting-system). |
| Moisture          | [Moisture](https://help.bsim.dk/support/kb/articles/xmere5QV/moisture-system). |
| Node              | The temperature is calculated at the constructions’ [*nodes*](https://help.bsim.dk/support/kb/articles/BWzd4NQE/det-matematiske-grundlag) during simulation with tsbi5. |
| Options           | *Options*, typically for defining various default values for the model and the programs. |
| People            | The [*people*](https://help.bsim.dk/support/kb/articles/XQYdjgmP/persons-system) system provides a heat load to the thermal zone to which they are assigned. |
| Recess            | *Recessing* of the glazing in a window or door relative to the outer face of the façade. |
| Room              | A room in the model. A *room* **can** be located in a thermal zone, and only *rooms* in thermal zones are included in simulations with tsbi5. All *rooms*, also those outside thermal zones, are included in the model when it is imported into the [Be10](https://help.bsim.dk/support/kb/articles/wmjnRomV/eksport-til-be10) program. |
| Schedule          | A schedule is a collection of pairs of control settings and time indications that together make up the control strategy for a system. |
| Shading           | [Solar shading](https://help.bsim.dk/support/kb/articles/7maw8X9E/shading-system). |
| Shutter           | [Shutters](https://help.bsim.dk/support/kb/articles/ZmNrMxm2/shutter-system), normally perceived as night shutters, but can also be used to completely or partially block solar gains within a given [time period](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time-system). |
| Sidefin           | Around windows and doors, there may be side fins. A side fin is a shading device, in addition to any recessing of the glazing relative to the outer face of the façade. |
| Site              | The *geographical location* of the model. When climate data is selected, this information is retrieved from the climate file. |
| Split             | The split command is used, for example, to divide an edge of a surface into two equal parts. |
| Thermal zone      | *Thermal zone*. System control is carried out at the level of thermal zones. A thermal zone can contain several rooms, which will then have the same simulated temperature. |
| Transmittance     | *Solar energy transmittance* for a pane at normal incidence on the plane of the pane. Often stated as the pane’s g-value. |
| Venting           | [Venting](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system). |
| Windoor           | A collective term for [windows](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor) and doors. |
| Wizard            | A *“wizard”* that sets up a wide range of standard parameters with just a few clicks. |
