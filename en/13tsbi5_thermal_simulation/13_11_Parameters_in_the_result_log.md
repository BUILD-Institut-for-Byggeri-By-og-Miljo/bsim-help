<link rel="stylesheet" href="../style.css">

# Parameters in the result log


<div id="gray_background">
Values saved in the result log represent snap-shots of the calculated conditions at the end of the last time step in each hour, unless anything else is given for the individual parameter.
</div>


<br>

Parameters saved as average values for the hour are marked with an “M” after the name of the parameter, e.g. *AdjacSun<sup>M</sup>*.

*   <a href="#outdoors">Parameters of weather data and calculated solar position</a>
*   <a href="#thermalzones">Thermal Zones</a>
    *   <a href="#indoorclimate">Indoor Climate</a>
    *   <a href="#airbalance">Air balance</a>
    *   <a href="#energybalance">Energy balance</a>
    *   <a href="#moisturebalance">Moisture balance</a>
    *   <a href="#ventilationcomponents">Ventilation system components</a>
    *   <a href="#ventilationair">Ventilation air</a>
    *   <a href="#tariffconsumption">Tariff energy consumption</a>
*   <a href="#constructions">Constructions</a>
*   <a href="#windoors">WinDoor</a>

<br>

---

<h3 id="outdoors">Parameters in the group <em>Outdoors</em></h3>

Input data from the climate file and calculated solar position.

These parameters are **only** accessible in the results log if a tick mark has been placed next to *Weather* on the [*Options* tab]() in advance of the simulation.

| Parameter | Description |
|---------|-------------|
| *AtmPres* | Atmospheric pressure, Pascal. If the atmospheric pressure is constant equal to 0, natural ventilation can still be simulated using the [multi-zone model](), but with reduced accuracy. |
| *CldCover* | Cloud cover, octas (8 = fully overcast, 0 = clear sky). |
| *DifRad* | Diffuse solar radiation on horizontal, kW/m². |
| *ExtTmp* | Outdoor (dry bulb) air temperature, °C. |
| *HumRatio* | Outdoor humidity ratio, kg/kg. |
| *NormRad* | Direct solar radiation at normal incidence, kW/m². |
| *SkyTemp* | Sky temperature, °C. |
| *SunAz* | Solar azimuth measured from North (North = 0°), positive towards East (East = 90°), deg. |
| *SunH* | Solar height angle (Zenith = 90°), deg. |
| *WindDir* | Wind direction (North = 0°), deg. |
| *WindSpeed* | Wind speed, m/s. |

<br>

---

<h3 id="thermalzones">Parameters in the group <em>Thermal Zones</em></h3>

<span id="indoorclimate"></span>  
**Note:** All system set-points relate to the operative temperature (Top) of the thermal zone.

These parameters are **only** accessible in the result log if a tick mark has been placed next to *ThermalZones* on the [Options tab]() prior to the simulation.

| Parameter | Description |
|----------|-------------|
| *AdjacSun*<sup>M</sup> | Solar radiation gained/lost through WinDoors to adjacent zones, kW. |
| *AirChange* | Air change in the zone, 1/h. |
| *CO2* | CO₂ content in indoor air, ppm. |
| *DayIllum*<sup>M</sup> | Illuminance from daylight in a reference point of a given plane, lux. |
| *ElecLight* | Illuminance from electric lighting in a reference point of a given plane, lux. |
| *GrossSun*<sup>M</sup> | Total solar radiation through WinDoors in the zone, kW. |
| *HumRatio* | Humidity ratio, kg water vapor / kg dry air. |
| *PAQ* | [Perceived indoor air quality](), –. |
| *RelHumid* | Relative humidity, %. |
| *Ti* | Indoor air temperature, °C in the height TopHeight above floor level, °C. |
| *Tmrt* | Mean radiant (area-weighted surface temperature) temperature , °C. |
| *Top* | Operative (experienced) indoor temperature at the end of the hour (average of Ti and Tmrt), °C. |
| *TopMean* | Operative (experience) indoor temperature, mean over the hour (average of Ti and Tmrt), °C. |
| *TotIllum*<sup>M</sup> | Total illuminance from daylight and artificial lighting in a chosen reference point of a plane, lux. |
| *Tzfloor* | Air temperature at floor level, calculated using the *Cappa model*, °C. |
| *TzInlet* | The average inlet air temperature used in the *Cappa model*, °C. |
| *TzReturn* | Exhaust air temperature under the ceiling calculated using the *Cappa model*, °C. |

<br>

---

<h4 id="airbalance">Parameters for air balance in a thermal zone – <em>Air Balance</em></h4>

| Parameter | Description |
|---|---|
| *Exfilt <sup>M</sup>* | Air flow out of the zone caused by exfiltration, m³/s |
| *Infilt <sup>M</sup>* | Air flow to the zone caused by infiltration, m³/s |
| *MixIn <sup>M</sup>* | Air flow (mixing) to the zone through "openings" to adjacent zones, m³/s |
| *MixOut <sup>M</sup>* | Air flow (mixing) out of the zone to adjacent zones, m³/s |
| *VentilIn <sup>M</sup>* | Inlet air flow from a local ventilation system, m³/s |
| *VentilOut <sup>M</sup>* | Extract air to a local ventilation system, m³/s |
| *VentIn <sup>M</sup>* | Air flow to the zone caused by venting (window opening), m³/s |
| *VentOut <sup>M</sup>* | Air-flow out of the zone caused by venting, m³/s |
| *VentPi <sup>M</sup>* *) | Calculated average internal pressure in the thermal zone, Pa. |
| *VentFrac <sup>M</sup>* *) | Average part of the total opening area which is in use, -. |

Parameters marked with *) do <u> only</u> occur if the simulation has been performed using the BSim module for simulation of natural ventilation.

<br>

---

<h4 id="energybalance">Parameters in the heat balance for a thermal zone or a building – <em>Energy Balance</em></h4>

| Parameter | Description |
|---|---|
| *qCooling* | Energy used for cooling (negative) in the thermal zone, kWh. |
| *qEquipment* | Energy used in equipment in the thermal zone, kWh. |
| *qHeating* | Energy used for heating in the thermal zone, kWh. |
| *qHeatPump* | Energy added to the zone from a heat pump, kWh. |
| *qHeatPumpEl* | Electric energy used in the heat pump, kWh. |
| *qInfilt* | Energy added or removed by infiltration of air from the ambient to the thermal zone, kWh. |
| *qLighting* | Energy used for artificial lighting in the thermal zone, kWh. |
| *qMixing* | Energy moved (positive or negative) by exchange of air between the thermal zone and other neighboring thermal zones or rooms, kWh. |
| *qPeople* | Energy from persons in the thermal zone, kWh. |
| *qSunRad* | Energy from solar through WinDoors in the thermal zone minus solar which is [lost before it enters the zone](), and minus solar that passes on to other rooms, kWh. |
| *qTransmis* | Energy transferred (positive or negative) by transmission through the constructions and WinDoors of the thermal zone, kWh. *qTransmis* is calculated as the heat flow from the air in the thermal zone to the <u>first</u> node in all faces surrounding the thermal zone. It is thus possible to have an overall transmission loss from a thermal zone, even if the outdoor air has a higher temperature than the air in the thermal zone. |
| *qVentilat* | Energy transferred (positive or negative) by air-transport through the ventilation system in the thermal zone - incl. energy used in the components of the ventilation system (heating coil, cooling coil, etc.), kWh. |
| *qVenting* | Energy transferred by opening windows or similar in the thermal zone, kWh. |

Contributions to the thermal balance of zones. Terms of heat losses and cooling contributions are counted negative.


<br>

---

<h4 id="moisturebalance">Parameters for moisture balance in a thermal zone – <em>Moisture Balance</em></h4>

| Parameter | Description |
|---|---|
| *xInfilt* | Moisture supplied by infiltration, kg/h. |
| *xLoad* | Moisture emitted from equipment or processes in the zone, kg/h. |
| *xMixing* | Moisture supplied from adjacent zones, kg/h. |
| *xPeople* | Moisture from persons in the zone, kg/h. |
| *xVentilat* | Moisture supplied in inlet air of ventilation system, kg/h. |
| *xVenting* | Moisture supplied from outdoors by venting, kg/h. |

Contributions to moisture balance of zones. Supplied moisture is counted positive, removed or lost moisture is counted negative.

<br>

---

<h4 id="ventilationcomponents">Parameters for the components in the ventilation system – <em>Ventilation components</em></h4>

| Parameter | Description |
|---|---|
| *ClCoil* | Cooling power output of heating coil, kW (negative). |
| *ClRec* | Cooling power gained in recovery unit, kW (negative). |
| *FanPow* | Total power needed for motors, fans and transmission, kW. |
| *HtCoil* | Heating power output of heating coil, kW. |
| *HtRec* | Heat (power) gained in recovery unit, kW. |
| *Humidif* | Water vapor supplied from humidifier to ventilation air, kg/h. |
| *HumRec* | Water vapor gained in recovery unit, kg/h. |
| *NvWaterTemp* | Water temperature in ventilation NvCoolCtrl, °C |


<br>

---

<h4 id="ventilationair">Parameters for the air in the ventilation system – <em>Ventilation Air</em></h4>

| Parameter | Description |
|---|---|
| *ExtractHum* | Extract air humidity ratio, kg water vapor / kg dry air. |
| *ExtractTmp* | Extract air temperature when leaving the thermal zone, °C. |
| *ExVol*      | Extract air volume flow, m³/s. |
| *InletHum*   | Inlet air humidity ratio, kg water vapor / kg dry air. |
| *InletTmp*   | Inlet air temperature when entering the thermal zone, °C. |
| *InVol*      | Inlet air volume flow, m³/s. |
| *RtnFrac*    | Share of the air-flow that is being re-circulated, -. |

<br>

---

<h4 id="tariffconsumption">Parameters for <em>tariff-divided</em> energy consumption in systems</h4>

| Parameter | Description |
|---|---|
| *qPow0..qPow7* | The summation of energy consumption in thermal zones from systems can be made in up to 8 different tariff classes. The tariff classes depends on the attached time definitions. 
 |

<br>

---

<h3 id="constructions">Parameters in the group <em>Constructions</em></h3>

Parameters for surface temperatures and solar radiation on the model constructions.

These parameters are **only** accessible in the results log if a tick mark has been placed next to *Constructions* on the [Options tab]() in advance of the simulation.

| Parameter | Description |
|---|---|
| *CondRisk1* <sup>M</sup> | Indicator for [risk of condensation]() at the surface facing the thermal zone, –. |
| *CondRisk2* <sup>M</sup> | Indicator for [risk of condensation]() at the surface facing away from the thermal zone, –. |
| *DirRad* <sup>M</sup> | Direct solar irradiation (on side facing outdoors), kW/m². |
| *GroundRad* <sup>M</sup> | Solar irradiation reflected from ground and surroundings, kW/m². |
| *NyDuct* | Wind speed in ventilated, vertical crevice inside the construction, m/s. |
| *Filtration* | Air-flow through leakages in the construction, m<sup>3</sup>/s. |
| *WaterTempMean* | Average water temperature in a water based heating/cooling system (WaterTempSupply + WaterTemp for the last time-step of the hour), °C. |
| *WaterTempSupply* | Water temperature at entry point to the construction, °C. |
| *qCon1* & *qCon2* | Convective contribution on surface 1 respectively 2 of the construction, W/m². (Can be exported as boundary conditions for CFD programs). *qCon* is positive if the thermal zone gains energy. *qCon* is not calculated for face sides facing outdoors. |
| *qHeat* | Energy emitted inside constructions from floor heating systems, kWh. |
| *qRad1* & *qRad2* | Long-wave radiative contribution on face 1 and 2 of constructions from all radiative sources (equipment, heating, cooling, people, lighting and sun through WinDoors) of the thermal zone, W/m². *qRad* is positive if the surface gains energy. |
| *qPvGross* *) | Electrical yield from solar cells integrated in the construction <u>without</u> considering reduction because of shading, kW. The parameter will <u>only</u> be shown if the construction contains solar cells <u>and</u> the result log from the PV simulation in *SimPv* is open via the *Open New Model* function on the *Parameters* tab in *tsbi5*. The results file from the PV simulation has the same name as the model followed by *"#pv"*. |
| *qPvNet* *) | Electrical yield from solar cells integrated in the construction, kW. The parameter will <u>only</u> be shown if the construction contains solar cells <u>and</u> the result log from the PV simulation in *SimPv* is open via the *Open New Model* function on the *Parameters* tab in *tsbi5*. The results file from the PV simulation has the same name as the model followed by *"#pv"*.|
| *RSurf1* & *RSurf2* | The combined (radiation and convection) thermal surface resistance for the face, m²K/W. If the option long wave radiation was turned on during the simulation, the values will vary. If this is not the case, BSim will use the values defined for the individual face, or the [default values]() if nothing is given.|
| *SensorTmp* | Is the temperature of the sensor, located in a construction with floor heating, °C. |
| *SkyRad* <sup>M</sup> | Diffuse solar irradiation (on side facing outdoors), kW/m². |
| *SurfMoist1* & *SurfMoist2* | Moisture content in surface 1 and 2 of constructions, kg/kg. |
| *SurfTmp1* & *SurfTmp2* | Surface temperature on face 1 (normally facing the thermal zone which first defined the surface) respectively surface temperature on surface no. 2, °C. |
| *T02, T03, …* | The temperature in nodes through the constructions, °C. |
| *MC01, MC02, …* *) | Moisture content in nodes through constructions, kg/kg. |
| *RH01, RH02, …* *) | Relative moisture content in nodes through constructions, –. |

Parameters marked with *) do <u>only</u> occur if the simulation have been performed using the moisture model or the module for calculation of electric yield from solar cells.



<br>

---

<h3 id="windoors">Parameters in the group <em>WinDoors</em></h3>

These parameters are **only** accessible in the result log if a tick mark has been placed next to *WinDoor* on the [Options tab]() in advance of the simulation.

| Parameter | Description |
|---|---|
| CondRisc1<sup>M</sup> | Indicator for [risk of condensation]() at the surface facing the thermal zone, -. |
| CondRisc2<sup>M</sup> | Indicator for [risk of condensation]() at the surface not facing the thermal zone, often towards the outdoor, -. |
| ExtIllum | External lighting level at the surface of the WinDoor. The value is being used for the solar shading control SensorCtrl, - |
| GrossSun<sup>M</sup> | Solar irradiation on the exterior side of WinDoors transparent area, kW. |
| NetSun<sup>M</sup> | Solar radiation transmitted through WinDoors transparent area, kW. |
| ShadFrac<sup>M</sup> | Fraction of WinDoor shaded by overhangs, side-fins and shadows, -. |
| Shutter<sup>M</sup> | Position of shutter, - (1=closed, 0=open). |
| SolarShd<sup>M</sup> | Solar shading factor, - (1=fully shaded, 0=exposed). |
| SurfTmp1<sup>M</sup> | Surface temperature on the surface facing the thermal zone, °C. |
| SurfTmp2<sup>M</sup> | Surface temperature on the surface facing away from the thermal zone (often outdoor), °C. |
| VentCp<sup>M</sup> *) | Wind pressure coefficient, -. |
| VentDPi<sup>M</sup> *) | Pressure difference with sign, Pa. |
| VentOfrac<sup>M</sup> *) | The open fraction of the open-able area, -. |
| VentSpeed<sup>M</sup> *) | Inlet speed, m/s. *The air speed is given as "0" if the air-flow direction is out of the thermal zone.* |
| WinIllum<sup>M</sup> | Illuminance in the reference point from daylight through the actual WinDoor, lux. |
| WinIllum2 | Illuminance in the secondary<sup>1)</sup> reference point from daylight through the actual WinDoor, lux. |

Parameters marked with *) do only occur if the simulation has been performed using the BSim module (NatVent) for simulation of natural ventilation.

1\) The secondary reference point is defined and used in combination with calculation and transfer of solar light factors using [SimLight]().
