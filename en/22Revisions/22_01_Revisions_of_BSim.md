<link rel="stylesheet" href="../style.css">

# Revisions of BSim

<div style="text-align:center">

*Information on this page is primarily intended for the developers, as documentation of changes made to the programs, but can also be used to explain differences between results obtained using different versions of the program.*

</div>

<br>

**7,13,9,24** 

*   *SimView*: File/Browse, corrected error under Windows 7.

*   *SimView*: Corrected e-mail address in About: bsim-support@sbi.aau.dk

**7,13,9,24** 

*   *Model*: Dimensioning heat transfer: Removed 15 % rise for heat loss through roofs.

**7,12,9,4** 

*   Version 7. Moved to Visual Studio 2010 (version 7, xx, xx, xx).

**6,12,1,16** 

*   *Tsbi5*: FloorHeat: Added the parameter WaterMassFlowSupply.

**6,11,12,7**

*   *Tsbi5*: PerezModel: DifSky, only positive values are returned.

**6,11,11,7** 

*   *SimView*: ModelDoc: Corrected calculation of orientation.

**6,11,5,3** 

*   *SimView*: Corrected error in export to Be10.

**6,11,4,12** 

*   *Tsbi5*: Added link to PackCalc.

**6,11,1,14** 

*   *Tsbi5* New option: Reg. System Time Step. Choice between control of systems on hourly basis or on time-step basis.

**6,10,11,18** 

*   *SimLight*: If the reference-point is not located inside 'inner shell' area is extended 'outer shell', i.e. system lines.

**6,10,10,20** 

*   *tsbi5*: Choice of active systems moved from the start of each hour to the start of each time-step.

**6,10,9,24** 

*   *tsbi5*: Single zone natural ventilation: corrected calculation for the Combined case.

**6,10,7,5** 

*   *tsbi5*: Previous correction 4,6,2,13 qHeating etc. removed.

**6,10,5,27** 

*   *DisMdl FloorHeatCtrl*: Now choose mode for the active component.

**6,10,4,13** 

*   XSun, tsbi5: Corrected algorithm *Behind* that determines if a face blocks the direct sun.

**6,10,4,9** 

*   tsbi5 Solar shading: Corrected *ActivateShading*.

**6,10,3,15** 

*   tsbi5 Floor-heating: Check that *FloorHeatCtrl* is not defined in the old version of the floor heating model.

**6,10,1,26** 

*   tsbi5 Model names lengths must not exceed 63 characters if results are to be compared across models.

**6,9,12,1** 

*   tsbi5 Solar shading, SolarCtrl: If *Shading Coeff* is given this value is being used, if not - the value from *SolarShading* is being used.

**6,9,11,30** 

*   tsbi5 Natural ventilation: Corrected that the value *CntFraction* for openings was undefined.

**6,9,11,18**

*   SimView ModelDoc: Added construction gross area - opening/windor areas.

*   Added View/ConstDoc: Save text file with an overview of all constructions.

**6,9,10,30** 

*   XSun: Surfaces without WinDoors/openings was not shown with external shadows (changed).

**6,9,10,12** 

*   tsbi5 SunAz: corrected output to North = 0 (solar azimuth + 180°).

*   Weather data ASHRAE: Conversion corrected for new parameters.

*   Added CO<sub>2</sub> control for VAVCtrl.

**6,9,9,23** 

*   tsbi5 ExtIllum set to zero when the sun is below the horizon.

**6,9,9,3** 

*   SimLight: Added check that WinDoors are squared (crash in case of triangular shapes).

**6,9,8,20** 

*   tsbi5 Single zone natural ventilation: Corrected CO<sub>2</sub> control.

**6,9,7,17** 

*   tsbi5 Single zone natural ventilation: Corrected control.

**6,9,7,16** 

*   SimView ModelDoc: Corrected calculation of orientation for WinDoors.

**6,9,7,9** 

*   DisDb5, DisMdl: Added table for solar energy transmittance (BSim2009.mdb).

**6,9,6,18** 

*   BSimFht: New version if floor heating systems, Max.

**6,9,5,11** 

*   tsbi5: PCM added moisture/latent heat.

**6,9,3,23** 

*   StepXml: If dis-model can not be read, BSim try to read same xml-model.

**6,9,3,17** 

*   tsbi5 Moist, Latent Heat, LossCoeff: Check for division by 0.

**6,9,3,11** 

*   DisMdl, tsbi5: Added Solar Limit at LightCtrl tab, and SwitchOff at DaylightCtrl tab.

**6,9,3,11** 

*   DisDb5: Graph for Pcm at PcmPage (JRO).

**6,9,2,17** 

*   tsbi5 Vent. ReturnAirCtrl: Corrected zero-ising of 'return fraction'.

**6,9,2,13** 

*   tsbi5, long-wave radiation: Variable surface resistance for walls (not WinDoors).

*   tsbi5: Corrected calculation of glazing temperatures.

**6,9,2,12** 

*   tsbi5 ZoneTempCtrl: Added control after master zone.

**6,9,2,9**

*   SimView: Export to Be06 (Building code compliance checker), corrected wall areas (reduced by WinDoor areas).

**6,9,1,21** 

*   DisView, DisMdl: Edit functions adapted to Windows Vista.

**6,9,1,9** 

*   DisMdl: Added clean-up for PcmMaterial (ConstructionMaterialDestruct).

**6,9,1,7** 

*   DisView: Corrected Model Doc.

**6,8,12,17** 

*   tsbi5 Simulation/Trace: Added print-out of constructions sub-layers.

**6,8,12,10** 

*   tsbi5 XSun: Recess for WinDoor implemented. Recess=0 (standard value) glazing placed innermost in the opening. Recess > 0 measured from the outer surface (face 2).

**6,8,12,3** 

*   SimView, tsbi5: Added possibility at Room Properties to select the model site as Thermal Properties, i.e. outdoors from climate data.

**6,8,11,20** 

*   tsbi5 XSun/SunRad: Corrected pointer to uknown zone.

**6,8,11,10** 

*   tsbi5: Simulation of pcm materials.

**6,8,10,8** 

*   dismdl, tsbi5 NightCoolCtrl: Sensor zone, removed possibility for selecting "Outdoor", changed to current zone.

**6,8,10,7** 

*   tsbi5 NightCoolCtrl: Check that sensor zone referrers to thermal zone in current building.

**6,8,10,3** 

*   tsbi5: All simulation options are saved in the model, incl. simulation period,

*   tabi5: Added Save Options at the Options tab.

**6,8,10,1** 

*   tsbi5 NightCoolCtrl: Corrected criteria for activating (vp.active when shifting among control strategies).

**6,8,9,24** 

*   SimView: Check for MDAC corrected for version > 2.

**6,8,9,23** 

*   DisMdl: Added PcmMaterial.

**6,8,9,22** 

*   DisDb5: Added PCM materials (BSim2008.mdb)

**6,8,9,8** 

*   tsbi5: Corrected control in BlindCtrl.

**6,8,9,3** 

*   tsbi5: Warning during stabilisation period for simulations, temperature not stable, possibility to continue stabilisations.

**6,8,8,14** 

*   tsbi5 BlindCtrl: Undefined reference to climate data (z0->rfy).

**6,8,8,5**

*   tsbi5: WinDoor parameter NetSun corrected for solarLost (from thermal zone).

**6,8,6,16** 

*   tsbi5 SimFace: CalcRsurf, pow(x, y) fails when x -> 0.

**6,8,6,4** 

SimView File/Mail Project To: check for xml, and database renamed from .mdb to .disdb, to avoid removal by mail security systems.

**6,8,6,4** 

*   tsbi5: Corrected OnOff control DaylightCtrl for lighting.

**6,8,6,3** 

*   tsbi5: Corrected SolarCtrl for solar shading ensuring backward compatibility.

**6,8,5,28** 

*   tsbi5: Corrected XSun solar distribution (cosine to angle of incidence limited to -1 : 1).

**6,8,5,23** 

*   tsbi5: Saving text files from HeatBalance and Tables (Alt+X).

**6,8,5,13** 

*   SimView: Bounding box can be made smaller that the automatically calculated size.

**6,8,5,8** 

*   tsbi5 Moisture model: Corrected automatically division into sub-layers when accepting suggested new time-spet.

**6,8,3,14**

*   *tsbi5*: TryConvert: corrected calculation of solar height in conversion of climate data.

**6,8,1,23** 

*   *tsbi5*: Added new controls for solar shading: SensorCtrl and BlindCtrl.

**6,7,12,6** 

*   *Model*: Added BlindCtrl for solar shading.

**6,7,12,4** 

*   *Model*: Added HeatPump system.

**6,7,11,30** 

*   *tsbi5*: Form factors: calculated for inner shell. If it fails, then calculated for system lines, and a warning is shown.

**6,7,10,22** 

*   *DisView*: Added export to Danish building code compliance checker, Be06. Will be available in English in the first half of 2008.

**6,7,8,9** 

*   *Model*: New system: FloorHeating, hydronic floor heating/cooling system.

**6,7,6,26** 

*   *tsbi5*: HeatCoolCtrl and FloorHeatCtrl: check that Te Min != Design Temp.

**6,7,2,26**

*   *SimLight*: Corrected calculation of solar light factor Sf1.

**6,7,2,26** 

*   *tsbi5*: Added TiMean to zone-log.

<span id="red_text">

**6,7,1,25** 

*   *BSim*: Version 6. Change to Visual Studio 2005 (version 6,x,xx,xx). Requires installation of full BSim-program package.

</span>

**4,7,1,18** 

*   *tsbi5*: Thermal zone: Added *Ti fraction*, part of Ti and tMrt for calculation of tOp.<span id="red_text">
 NB: New input parameter. </span>

**4,7,1,4** 

*   *tsbi5*: Model for filtration (air pass through) of constructions facing the ambient.

*   *tsbi5*: New option for changing weather data in simulations over multiple years.

**4,7,1,3** 

*   *tsbi5 Moisture model*: Improved calculation of latent heat.

**4,6,11,24** 

*   *SimView*: If the weather data can not be found, search will start in the sub-folder *Climate*.

**4,6,8,24** 

*   *XSun*: Corrected algorithm for determination if an external surface is a possible shading object.

**4,6,7,12** 

*   *SimView, DisDb5, Model*: Error if a material was undefined in the moisture part of the database (a exist in the thermal-table but not in the moisture-table). See [limitations](https://help.bsim.dk/support/kb/articles/rQV5b8m6/begransninger).

**4,6,6,23** 

*   *SimView*: Corrected dimensioning heat loss towards fictive zones.

**4,6,4,24** 

*   *tsbi5*: On faces: DirRad, SkyRad and GroundRad, unit changed to W/m², qRad2 zero when solar irradiation is 0.

**4,6,3,28** 

*   *tsbi5*: Calculation of view factors for long wave radiation corrected.

**4,6,2,13** 

*   *tsbi5*: ZoneTempCtrl: changed control when tOp was between min- and max inletqHeating, qCooling missing contribution from previous time-step (temporary correction).

**4,5,12,1** 

*   *tsbi5*: Corrected that solar shading in rooms outside thermal zones made tsbi5 crash when XSun was turned on.

**4,5,11,24** 

*   *tsbi5*: Ventilation + ZoneTempCtrl: corrected error in re-heating and -cooling for humidification.

*   *tsbi5*: Standard surface resistance corrected to values corresponding to Danish Standard, DS418.

*   *tsbi5*: Standard values for dimensioning heat loss corrected to values from DS418.

*   *tsbi5*: Walls facing fictive zones are not part of the calculation any longer.

*   *Hd*: Walls facing fictive zones are not transferred to Hd98.

**4,5,10,12** 

*   *tsbi5*: Glazing temp option: if glass area = 0 division with 0. Corrected, so old glazing model is used if glass area = 0.

**4,5,7,7** 

*   *tsbi5*: NatVent: Control factors controls "max air-change". CO<sub>2</sub> case starts components for heating.

**4,5,6,21** 

*   *STEP*: Corrected that filenames could not contain ' (apostrophe).

**4,5,5,30** 

*   *tsbi5*: Ventilation: corrected calculation of ExtractHum.

**4,5,5,18** 

*   *tsbi5*: NightCoolCtrl: Fans can be selected and deselected as active components.

**4,5,5,13** 

*   *SimView*: Link to F1-help for opening property corrected.

*   *tsbi5*: Risk of condensation added to constructions, changed indicator for how close the surface is to condensation in an interval of 5 °C above the dew point temperature. The same goes for WinDoors.

*   *tsbi5*: Check for presence of solar light factors implemented for daylight control of artificial light.

**4,5,5,3** 

*   *SimView*: If help was open when *BSim* was closed, the process *DisView* was not stopped, but kept running in background, using much processor time. Error corrected.

**4,5,5,3** 

*   *SimView*: Right-clicking in the *tsbi5*-graphic, only relevant choices are shown.

**4,5,5,2** 

*   *tsbi5*: Improved calculation of view-factors in conjunction with long-wave radiation.

*   *SimView*: Graphs at *HeatCoolCtrl* for heating and cooling corrected.

**4,5,4,7**

*   *tsbi5*: Added name for thermal zones on graphs during simulation.

*   *SimView*: Right-click in the tree on an undefined construction, WinDoor etc. opens the database.

**4,5,4,1** 

*   *tsbi5*: Natvent: Check that weather data contains wind speed.

**4,5,3,31** 

*   *SimView*: *Site property*: Added height above sea level (*Elevation*).

**4,5,3,29**

*   *SimView*: Site *property*: Added information about weather data, *wind speed* and *pressure*.

**4,5,3,18** 

*   *tsbi5*: Extended weather data with wind speed in m/s (previous in knots) and barometric pressure (Pa).

*   *tsbi5*: Barometric pressure added as parameter *AtmPress* for outdoor climate.

**4,5,3,17** 

*   *model*: VAVctrl: VAV max factor must be >= 1, check implemented.

**4,5,3,1** 

*   *tsbi5*: Ctrl-C (copy) works in the *Heat balance* and *Tables* tabs.

**4,5,2,28** 

*   *SimDxf*: Added XP style user interface.

**4,5,2,25** 

*   *SimView*: Added XP style user interface.

**4,5,2,23** 

*   *DisMdl*: *Heating/Cooling/Venting/Ventilation*: choice of Air Source/ Sensor Zone only from thermal zones belonging to current building.

**4,5,2,16** 

*   *tsbi5*: Control as *ZoneTempCtrl* corrected <span style="text-decoration: underline;">back </span>to the control method used before version 4,4,12,4.

**4,5,2,2** 

*   *tsbi5*: After minimizing the graph, buttons are located correct.

**4,4,12,21** 

*   *tsbi5*: Choice of location for *legend* for graphs added under *Yscale*.

**4,4,12,20** 

*   *tsbi5*: Floor heating now available in demo-versions.

*   *tsbi5*: Calendar for choice of dates added week number.

**4,4,12,9** 

*   *tsbi5*: XSun: activation of shutter/solar shading only during sunshine, corrected.

**4,4,12,4** 

*   *SimView*: XSun: shows dark background after sunset.

*   *SimView*: ZoneTempCtrl: Corrected cooling to min. inlet temperature also when below cooling set-point.

**4,4,11,10** 

*   *BSim*: Officially changed name to BSim followed by the primary version number (4).

**3,4,10,20** 

*   *tsbi5*: Cappa-model: Infiltration air is no longer part of the calculated inlet air temperature.

**3,4,10,18** 

*   *tsbi5*: MoistureLoad: Added model for moisture liberation from Swimming Bath.

**3,4,8,6** 

*   *tsbi5*: NatVent: Opening degree/Wind speed added at WinDoors.

**3,4,8,3** 

*   *tsbi5*: No more than 32767 parameters can be saved per. hour in the result log! The limit can be exceeded when making unsuitable choice of results from moisture simulation in large models. Implemented a check that will stop the simulation if the limit is exceeded.

**3,4,7,28** 

*   *SimView*: "Clean model" and "Clean geometry": corrected error for references to Ground.

**3,4,7,22** 

*   *SimView*: New option: Save "undo" files on local PC. Undo/redo files are saved on the local PC in the path defined by the TMP/TEMP variable (typically C:\TEMP). Faster when BSim is running from a network folder. If not given, the files will be saved in the same path as the actual model.

*   *SimView*: "Redo" implemented, one level, say latest "undo" can be redone.

**3,4,6,22** 

*   *tsbi5/XSun*: Distribution of diffuse radiation to level two (via internal WinDoors) zones.

**3,4,6,11** 

*   *tsbi5*: NatVent: If wind direction is undefined (990°), cp = 0.

**3,4,4,20** 

*   *tsbi5*: Simulation can go wrong if the selected number of time-steps (>2) accepted do not give an even number of steps per half hour, e.g. 13 time-steps per hour.

**3,4,3,16** 

*   *tsbi5*: Conv. of weather data: longitude interval corrected from –90 -+90 to –180 – +180.

**3,4,3,10** 

*   *Model*: Solar shading: choice of location blocked (not yet in use).

**3,4,3,9** 

*   *SimView*: About support: licenses BS4xxx redirected to support@alware.de.

**3,4,2,17** 

*   *tsbi5*: Night cooling: added possibility for location of sensor inside a construction.

**3,4,1,28** 

*   *tsbi5*: Natural Vent: check of opening location for *Combined Two Levels*.

**3,4,1,19** 

*   *tsbi5*: Parameters/Open New Model: problem with Danish letters on local networks corrected.

**3,4,1,13** 

*   *tsbi5*: Moisture balance corrected.

**3,4,1,9** 

*   *SimView*: 2000-users: no access to DirectX export, new glass temperature model and floor heating.

**3,4,1,8** 

*   *Model*: Corrected calculation of natvent cond.

**3,3,12,17** 

*   *tsbi5*: Mixing: Outdoor temperature criteria have now first priority.

**3,3,11,27** 

*   *Model*: Check for unique system names.

**3,3,11,26** 

*   *SimDB*: Using New/Copy next free sfb-number will be suggested.

**3,3,11,24** 

*   *SimView*: New option: Auto check for update.

**3,3,11,14** 

*   *Tsbi5*: Long wave radiation: stop if configuration factor < 0 (can be caused by WinDoor into adjacent constructions).

**3,3,11,13** 

*   *Tsbi5*: TzInlet calculated for cappa = 1.0 also.

**3,3,10,30** 

*   *Tsbi5*: Geometric thermal bridges.

**3,3,10,22** 

*   *Tsbi5*: Distribution of direct solar incidence on faces, only in XSun without long wave radiation.

**3,3,10,20** 

*   *Model*: Venting added MaxWind (only for NatVent), active when MaxWind > 0.

**3,3,10,4** 

*   *Tsbi5*: Corrected moisture load contribution in the moisture model.

**3,3,8,23** 

*   *SimView*: Added File/Browse for visual localisation of model.

**3,3,7,31** 

*   *tsbi5*: Error if construction layer thickness = 0 corrected.

**3,3,7,28** 

*   *tsbi5*: Natvent added log parameters VentSpeed and VentCp for WinDoors.

**3,3,7,18** 

*   *SimView/XSun*: Result log for SimPv.

**3,3,6,19** 

*   *SimView*: Inserting more WinDoors at the same time generates different names.

**3,3,6,6** 

*   *DisMdl*: Venting added Sensor Zone.

**3,3,6,5** 

*   *SimView*: Thermal zones can be moved (drag and drop) in tree for changed simulation order (top-down).

**3,3,5,13** 

*   *SimDB*: Database table glazing_material_ex extended with *refl2* and *absorp2*.

*   *tsbi5*: Calculation of glazing temperature corrected accordingly.

**3,3,5,2** 

*   SimView: Finish property added choice of Wind Exposure (for NatVent). Can only be selected for finishes facing outdoor.

**3,3,4,10** 

*   *SimView*: Dynamic location of Default dialog.

*   *tsbi5*: Long wave radiation, direct solar distributed to all faces.

**3,3,3,20** 

*   *SimDxf*: Corrected minor error in reading arc-files.

**3,3,3,14** 

*   *tsbi5*: Corrected error in registration of air-flows.

**3,3,3,12** 

*   *SimView*: Insert WinDoor: dialog added dt0. dt0 = minimum distance from edge of WinDoor to adjacent constructions.

**3,3,3,7** 

*   *SimView*: Choice of Edge: if a face, WinDoor, opening or PV is selected edges are chosen among those belonging to the actual object.

**3,3,3,4**

*   *SimView*: Split Edge function: if a vertex in the edge is selected, a distance must be given from the selected vertex to the new vertex.

*   *SimView*: Deleting a vertex splitting an edge (straight) can be done using the Delete function.

**3,3,2,24** 

*   *tsbi5*: From tables, a log-file can not be opened more than once.

**3,3,2,19** 

*   *SimLight*: Added choice between two different form factor calculation methods (inter-reflected part).

**3,3,2,14** 

*   *tsbi5*: Air volumes in log (mixing, infiltration, venting and ventilation) changed to average value for the hour.

**3,3,2,13** 

*   *Model*: Calculation of inner shell: if angle between face normal's < 5 ° the faces are assumed parallel.

**3,3,2,10** 

*   *tsbi5*: Tables/graph/autoscale: Choice between two different methods.

**3,3,2,9** 

*   *tsbi5*: NightCoolCtrl: Corrected calculation of energy consumption (was wrong if active in first half-hour and not in last half-hour).

**3,3,2,6** 

*   *tsbi5*: New parameter for WinDoor: VentDPi. Pressure difference (Pa), ONLY NatVent.

**3,3,1,31** 

*   *tsbi5*: New parameter for thermal zone: VentPi. The internal pressure (Pa), which is ONLY calculated in connection with natural ventilation.

**3,3,1,29** 

*   *Modellen/tsbi5*: Choice of natural ventilation model in venting dialog, and not in tsbi5/options any more.

**3,3,1,28** 

*   *tsbi5*: New parameter for thermal zone: VentFrac. Average part of max venting.

**3,3,1,22** 

*   *tsbi5*: VAVCtrl added MaxInletTemp.

**3,3,1,21** 

*   *SimView*: Demo allows use of all extension modules (moisture, PV, natural ventilation).

**3,3,1,20** 

*   *tsbi5*: Improved autoscale in graphic.

**3,3,1,14** 

*   *SimView*: Weather data search: (1) absolute path (2) project folder (3) BSim folder.

**3,3,1,9** 

*   *tsbi5*: New calculation method for glazing temperature.

**3,2,12,18** 

*   *tsbi5*: Heat balance added Co2, PAQ and FloorHeat.

**3,2,12,12** 

*   *SimView*: Support of new format for f1-help.

**3,2,12,10** 

*   *SimView*: WinDoor/Opening property dialog added data for natural ventilation.

**3,2,12,5** 

*   *tsbi5*: Corrected negative NetSun with XSun.

**3,2,12,3** 

*   *SimView*: Use current model moved to the individual applications.

**3,2,11,21** 

*   *SimLight*: Corrected error in calculation of inter reflected part (possibility for division with 0).

*   *SimView*: New option: Recent Files (4 to 16).

*   *SimView*: File open filter divided for choice of model (*.dis) and backup (*.dbk) files.

**3,2,11,2** 

*   *DisMdl/tsbi5*: Check of active time definitions and day profiles.

**3,2,10,29** 

*   *tsbi5*: Schedules defined as week-numbers, Mondays was moved one week.

*   *XSun*: Change to SimView/tsbi5 during capture, focus was kept at the foreground.

**3,2,10,24** 

*   *tsbi5*: Venting added CO<sub>2</sub>-control.

**3,2,10,21** 

*   *SimView*: Systems can be deleted from ThermalZone/WinDoor property by removing a tick mark.

**3,2,10,18** 

*   *SimView*: ThermalZone property added floor area.

**3,2,10,17** 

*   *SimView*: Site added choice of landscape type.

**3,2,10,8** 

*   *tsbi5*: Calculation of CO<sub>2</sub> level.

*   *SimView*: Scroll when an element in the tree is dragged beyond top or bottom of tree in display.

**3,2,10,3** 

*   *SimView*: Added copy of parameter list (tsbi5/Parameters).

*   *SimView*: New XSun-option: Show Inner Shell.

**3,2,10,2** 

*   *SimView*: Calculation of CO<sub>2</sub> concentration for thermal zones.

*   *DisMdl*: Added CO<sub>2</sub> concentration for ambient air on Site.

**3,2,9,25** 

*   tsbi5: Added risk for condensation on WinDoors.

**3,2,9,24** 

*   *SimView*: Corrected scroll in graphics.

**3,2,9,23** 

*   *DisMdl*: Default schedules, day profiles and people is now protected from changes.

**3,2,9,6** 

*   *tsbi5*: Added PAQ to thermal zones (**P**erceived indoor **A**ir **Q**uality).

*   *tsbi5*: Temperature on both faces of glass.

**3,2,8,16** 

*   *tsbi5*: Introduced tariff-system for energy consuming systems.

**3,2,8,15** 

*   *tsbi5*: Corrected error in control of shutter/solar shading when XSun is active, and when the thermal zone contains more than one space.

**3,2,8,14**

*   *SimView*: Improved function for finding a face by Ctrl+click on an edge.

**3,2,8,9** 

*   *SimView*: Short cut for property: Alt+Enter (equal to right-click in the tree).

**3,2,8,2** 

*   *SimView*: Check for presence of MDAC version 2.50 or more recent.

*   *Setup02*: English version of Bv98 (Hd98) added.

*   *Update02*: English Hd98 users guide still missing!

**3,2,8,1** 

*   *SimView*: New option: ’Auto Update View’ for automatic update of model when dragging a new element from the database to the tree (by default the option is off).

**3,2,7,31** 

*   *tsbi5*: F1-help in sheets/tables: help redirected to the help page informing about the sheet/table.

*   *tsbi5*: Horizontal scroll-bar for weather conversion dialog.

*   *tsbi5*: Initiation of side-fins added to openings.

**3,2,7,25** 

*   *SimView/tsbi5*: Added day profile to Mixing.

*   *SimView/tsbi5*: Dynamic graphs in System/Controls.

*   *SimView/tsbi5*: Corrected GrossSun/NetSun for WinDoors.

*  <span id="red_text"> ***BSim2002*: Version 3.** </span>

[Previous revisions of BSim2000](https://help.bsim.dk/support/kb/articles/vWyPBM9b/tidligere-revisioner-i-bsim2000)
