<link rel="stylesheet" href="../style.css">

# Revisions of BSim

<div style="text-align:center">

*Information on this page is primarily intended for the developers, as documentation of changes made to the programs, but can also be used to explain differences between results obtained using different versions of the program.*

 </div>

**2,2,5,2** 

*   *tsbi5*: Hourly mean value for top saved in log.

**2,2,4,22** 

*   *SimView*: Scale and Grid saved in model.

**2,2,4,12**

*   *tsbi5*: Added menu-item File/Weather Data/ASHRAE for downloading and corversion of ASHRAE weather data from approx. 550 locations all over the world.

**2,2,4,3** 

*   *SimView*: Corrected missing collumn in printout of heat balance.

**2,2,3,29** 

*   *tsbi5*: Conversion of climate data, format of wind direction corrected.

**2,2,3,5** 

*   *tsbi5*: Error when saving simulation options in the project has been corrected.

**2,2,2,7** 

*   *SimView*: Split Edge function has been corrected.

**2,2,2,4** 

*   *tsbi5*: Conversion of climate data, overcast/fraction has been corrected.

**2,2,1,24** 

*   *tsbi5*: Simulation options is saved with the project.

**2,2,1,9** 

*   *tsbi5*: Calculation of daylight contribution from window has been corrected.

**2,2,1,7** 

*   *tsbi5*: Log file cannot be opned if it is being used in simulation.

**2,2,1,4** 

*   *SimView*: Xsun: Check-function for shading from external surfaces has been corrected.

**2,2,1,2** 

*   *Trans5.dll*: XSun tolerance has been corrected.

**2,1,12,12** 

*   *DisView*: New icon added in the tree structure for surfaces, indicating if a construction has not been connected to an object from the database. Different icons for *.dis- and *.dbk-files.

**2,1,12,10** 

*   *Bv98Dis.dll*: b-value for roofs have been corrected to 0.

*   *SimLight*: Inter-reflected contribution (form factor calculation) has been corrected.

**2,1,12,5**

*   *tsbi5*: Long wave radiation, calculation of temperature depended surface resistance has been corrected.

**2,1,12,3** 

*   *tsbi5*: Under-floor heating, improved heating control (temporary version).

**2,1,12,1** 

*   *tsbi5*: Air change calculation has been corrected (time step depended).

**2,1,11,24** 

*   *tsbi5*: On tabs "Heat Balance" and "Tables": Period selection, "Year" has been corrected to "Total". From "Tables" tab: New function "File/Export/Tables" for saving time values as tab-delimited text files.

**2,1,11,19** 

*   *Step5.dll*: Length of file name has been extended from 128 to 256 characters.

*   *tsbi5*: No control of "Heating/Cooling" to meet top when sensor zone is different from the current. "Ventilation/Fan/Total Effect" must be > 0 (if 0 then 1 is used).

**2,1,11,8** 

*   *SimView*: "File/Mail Project To" has been added to the menu.

**2,1,11,6** 

*   *tsbi5*: The calculation of solar through openings has been corrected.

**2,1,11,2**

*   *SimView*: Using the "File/Copy Project to" the database name is changed to the project name.

**2,1,10,22**

*   *SimView*: When zooming is repeated (16 bit limitation) the program has locked in Windows 95, 98 and ME. This has been corrected.

**2,1,10,18** 

*   *SimView*: Search function in the tree structure added. The function is found in the Edit menu.

*   *DisMdl*: Move function for WinDoor's when having vertices common with other objects is corrected.

*   *tsbi5*: Parameter names extended from max. 31 to 63 characters. <span id="red_text"> Result files from previous simulations **cannot** be read but has to be re-simulated. </span>

**2,1,10,17** 

*   *DisMdl*: If absolute moisture content in climate data < 0.1 g/kg, 0.1 g/kg is used.

**2.1.10.15** 

*   *SimView*: If climate data file is not found, a search for it is made in the folder, where BSim is installed. Add Face function for a concave room has been corrected (by parallel surfaces to the new surface).

**2,1,10,2** 

*   *tsbi5*: Improved calculation of long waved radiance (new and improved algorithm for calculating angle radiation figures).

**2,1,9,27** 

*   *tsbi5*: The Kappa-model: added TzReturn = outlet temperature, Ti = air temperature in TopHeight above floor.

**2,1,9,21** 

*   *SimView*: If a database of a model is not found, a search for it is made in the same folder as used for the model. If the database is found in this folder, it will be used.

**2,1,9,15** 

*   *Bv98Dis.dll*: Corrected calculation of orientation and slope.

**2,1,9,13** 

*   *tsbi5*: Corrected calculation of the parameters AdjacSun, NetSun and GrossSun for WinDoors.

**2,1,9,7** 

*   *SimLight*: Changed selection of precision in calculations, calculation of contribution from openings and improved graphics.

**2,1,9,6** 

*   *SimLight*: Corrected calculation of the inter-reflected contribution.

**2,1,8,31** 

*   *SimView*: Insert ThermalZone, Insert Defaults and Site moved from Building Property to entry in new pop-up menu when right clicking a building in the tree-structure. Add Windoor (Opening) extended with a fuction for adding a number of WinDoors in the Y-direction.

**2,1,8,27** 

*   *tsbi5*: Reflektion factor for solar radiation ReflSolar on Site was not used, but constantly 0,1.

**2,1,8,13** 

*   *tsbi5*: Improved kappa-model. VAV-control corrected.

**2,1,8,10**

*   *Model*: Negative mixing Air Flow gave error in *tsbi5*.

**2,1,8,8** 

*   *SimView*: Reference point for calculation of solar light factors saved for each space.

*   *SimLight*: Corrected error when the model contains sidefins/overhangs.

**2,1,8,7** 

*   *SimView*: Improved function for finding a face using ctrl+click near an edge.

*   *SimView* | : added function to remove surplus faces.

**2,1,8,6** 

*   *SimLight*: Corrected calculation of inter reflected contribution in graph. Resets solar light factors in other spaces of the same thermal zone (after prompt).

**2,1,8,5** 

*   *SimView*: Corrected error when deleting a vertex (drag a vertex to an other vertex at the same edge).

**2,1,8,1**

*   *SimView*: In Help | BSim2000 on the Web menu added new function *Check for new update*.

**2,1,7,26** 

*   *tsbi5*: Corrected calculation of NetSun for WinDoors, and heat balance sum != 0 in some cases when using XSun and longwave rad. Calculated surface resistance when using long-wave radiation max. 0,3. New default climate data file (Danmark.dry - Danish climate data) with cloud cover in all hours of the day and wind direction.

**2,1,7,25**

*   *tsbi5*: Error in solar shading if using XSun corrected.

**2,1,7,23** 

*   *SimView*: Improved function for deleting faces and edges.

**2,1,7,20** 

*   *SimView*: Fixed calculation of Design Heat Loss (contribution from WinDoors counted twice) and now uses external areas.

*   *Bv98dis.dll*: External areas now transferred to Bv98.

**2,1,7,14** 

*   *tsbi5*: Simulation tab added Check-button.

*   *tsbi5*: Moisture: automatic calculation of layer sub-division in constructions.

**2,1,7,11** 

*   *tsbi5*: New option: Longwave Rad. to Sky. SkyTmp (sky temperature) added to results log.

*   *Model*: Site added emissivity for long-wave radiation to the sky.

**2,1,6,26** 

*   *tsbi5*: Results log can now be saved from the Simulation tab of tsbi5.

*   *SimView*: Keeps window location and scroll-position after activating XSun or tsbi5.

**2,1,6,13** 

*   *tsbi5*: Corrected error: A construction with layer thickness of 0 could in certain circumstances make the program break down.

**2,1,6,8** 

*   *XSun*: Added period for video-recordings.

**2,1,6,2** 

*   *SimView*: "Add Room" function added "Copy of whole Storey" functionality.

*   *XSun*: Implemented video-recordings of sun/shadows.

*   *tsbi5*. Implemented new curve types: Cumulated curves, pct/hours above.

**2,1,5,9** 

*   *Bv98*: New version 2 (2,1,5,9). Corrected because of addendum 2 to BR95, addendum 1 to BR-S98 and addendum to DS418.

**2,1,5,4** 

*   *tsbi5*: Check for area of openings+WinDoors < facearea (min. 0,01 m2 left).

**2,1,4,25** 

*   *tsbi5*: Automatic generation of layers in constructions for moisture model calculations.

**2,1,4,24** 

*   *tsbi5*: Corrected error in ventilation/VAVCtrl, which made the heat balance not equalize.

**2,1,4,20** 

*   *tsbi5*: Corrected error at mixing from spaces outside thermal zones, and calculation of air-change, saved in the results log.

**2,1,4,9** 

*   *SimLight*: Graphs now with logarithmic scale.

**2,1,3,30** 

*   *tsbi5*: Improved XSun and solar shading/shutter for internal WinDoors.

**2,1,3,22** 

*   *SimView*: Added possibility for writing to and joining the English mailing list.

**2,1,3,21** 

*   *model/tsbi5*: Mixing control added factor.

**2,1,3,20** 

*   *tsbi5*: Corrected time when shutters are closed.

**2,1,3,19** 

*   *tsbi5*: Corrected calculation of long wave radiation exchange. Calculation of surface resistance must be checked further!

**2,1,3,15**

*   *SimView/DisMdl/SimDB/SimLight/tsbi5 *Implemented F1-help for dialogs.

**2,1,3,14** 

*   *model*: Calculation of inner shell, center when virtual zones.

**2,1,3,13** 

*   <div id="red_text"> *BSim2000*: Service pack 5. Requires full installation. </div>

*   *tsbi5*: For faces, facing a virtual zone on solar incidence on side 2 (exterior).

**2,1,3,12** 

*   *tsbi5*: Print-out of cumulated curves, program break-down fixed.

**2,1,3,9** 

*   *SimView*: ThermalZone property added design heat loss.

**2,1,3,6** 

*   *SimLight*: Changed layout, push-button for transferring Sf1-Sf3 to the WinDoors of the room.

*   *SimView*: Sf1-Sf3 added in WinDoor property dialog.

**2,1,3,5** 

*   *Trans5.dll*: XSun algorithm corrected.

**2,1,3,1** 

*   *SimView/tsbi5*: Virtual zones, connected from Finish Property, can ONLY be ground or a thermal zone (NOT a room).

*   *Model*: Data model expanded for Finish (gives step-error when opening old models but not important).

**2,1,2,22** 

*   *tsbi5*: Corrected calculation of WinDoor NetSun, XSun option.

**2,1,2,21** 

*   *Model*: Corrected error in editing day profiles.

**2,1,2,20** 

*   *SimView/tsbi5*: From Options the result log can be saved, using *File* | *Save Log As*, with a new name, which eases the result comparison when performing parametric variations.

**2,1,2,16** 

*   *SimView*: Corrected error in Edit and improved calculation of Inner Shell.

**2,1,2,15** 

*   *tsbi5*: Changed start conditions for activating solar shading/KJJ.

**2,1,2,14** 

*   *SImDxf*: Error corrected, which could make the program crash when opening an arc-file.

**2,1,2,13** 

*   *SimView*: Corrected that copy of database could crash when File | .

**2,1,2,9** 

*   *SimLight*: Automatic calculation of the solar light factors sf1, sf2 and sf3 for all WinDoors from a selected reference point in a room.

**2,1,2,7** 

*   *step5.dll*: Expanded maximum length of text in step-file from 128 to 256 characters.

**2,1,2,5** 

*   *SimDB*: Order of layers can be altered by dragging a layer to a new position. MaterialAmount tabs are only shown if new option Show Amount is selected.

*   *SimLight*: Model always updated in advance of calculations.

**2,1,2,2** 

*   *SimDXF*: Localization that ’.’ is used as decimal separator in the dxf-file.

**2,1,2,1** 

*   *SimView/model*: Calculation and showing the floor area in RoomProperty.

*   *SimDB*: Corrected localization of ComboBox dropdown list after move.

*   *SimView*: Move Face corrected for unintentional removal of a face.

**2,1,1,26** 

*   *SimLight*: New user interface for graphs because of problems with 800 * 600 display resolution.

**2,1,1,25** 

*   *SimLight*: Misc. corrections and new user interface.

**2,1,1,24** 

*   *Bv98*: Imports models even with STEP-errors.

**2,1,1,18** 

*   *Model*: Calculation of Inner Shell generalized and improved.

**2,1,1,17** 

*   *Bv98*: Corrected calculation of built-up area and total floor area.

**2,1,1,16** 

*   *SimView/Model*: Improved *Edit* | *Clean* | *Geometry* with split edge if a vertex is inside the borders, which is important when calculating *inner* *shells*.

**2,1,1,15** 

*   *SimView/tsbi5*: Choice of constructions saved in log.

**2,1,1,14** 

*   *SimLight*: Reflectance from Finish, if defined else walls 0,4, ceiling 0,7, floor 0,1, glass 0,92. GroundReflectance from Site, if defined, else 0,1.

**2,1,1,11** 

*   *SimView*: New option: Auto Arrange FaceSide (default=0).

*   *SimLight* improved, reference plan now given as center of the plane and the distance from the center to the edges of the plane in two directions.

**2,1,1,10** 

*   *SimView/tsbi5*: Printing heat balance, corrected hour statistic.

**2,1,1,9** 

*   *SimLight*: Improved user interface.

**2,1,1,7** 

*   *SimView*: For internal floors (divisions) Finish1 (face 1) always faces the upper room (see 2,1,1,11).

**2,1,1,5** 

*   *tsbi5*: If the first day of a simulation period do not exist in the climate data file, a message about the possible period is shown.

*   *Setup*: Input field for Serial protected as password field, and not limitation on the length of the company name.

**2,1,1,4** 

*   *tsbi5*: New algorithm for moisture balance (the old one is used if the option Moisture Transport is NOT selected).

**2,0,12,28** 

*   *SimView*: Finish, facing outdoor or ground will always be face 2 (see 2,1,1,11).

*   *tsbi5*: Moisture model expanded with moisture content.

**2,0,12,21** 

*   *tsbi5*: Start conditions for night cooling corrected.

**2,0,12,19** 

*   *model*: New object MoistInit for initiation of constructions when de-humidification.

*   *SimView*: New moisture page in tsbi5 for definition of start conditions when moisture simulations.

**2,0,12,13** 

*   *tsbi5*: Could not always find current building.

**2,0,12,11** 

*   *XSun*: New option: View the Building from the Sun.

*   *tsbi5*: In constructions layers without reference to materials in database can be used. The thickness of the layer is counted in the total thickness of the construction. An additional resistance on this types of layers is a <span style="text-decoration: underline;">MOISTURE</span> resistance. An additional thermal resistance must then be given on a neighbor layer that have reference to a material in the database.

*   *Model*: Move all WinDoor/openings in the same construction (option on Move WinDoor).

**2,0,12,8** 

*   *tsbi5*: Error in ventilation if air-flow = 0, corrected.

**2,0,12,7** 

*   *SimView*: Systems are placed at the end of the tree structure of the thermal zone when inserted.

*   *SimView*: Added File/Save Project As. Saves the model and the appropriate database.

**2,0,12,2**

*   *SimView*: Corrected Move-error, that could make the program break down.

*   *SimView*: Copy of current room: created a room with a face when no face parallel with the current face or no face with the same area could be located.

**2,0,12,1** 

*   *BV98*: Corrected localization when importing BSim2000 models (decimal full-stop in stead of comma).

**2,0,11,29** 

*   *tsbi5*: XSun distribution through internal WinDoors and openings.

**2,0,11,28** 

*   *SimView*: Drag systems in the tree structure, keeps focus and no collapse.

**2,0,11,24** 

*   *Model*: System line in faces to Ground.

**2,0,11,22** 

*   *SimView*: Copy of room: Corrected algorithm for check of overlapping faces.

**2,0,11,20** 

*   *tsbi5*: Ventilation, ExtractTmp corrected to air temperature under ceiling + evt. gains from lighting equipment.

**2,0,11,17** 

*   *SimDB*: SetFocus from tree structure crashed if SfB was not in the format xx.xx.xxx.

**2,0,11,16** 

*   *Model*: Shading: MaxWind=10 for old models, before introduction of MaxWind. Ensures that shading is working when opening an "old" model.

**2,0,11,15** 

*   *SimView/DisMdl*: HeatingCtrl added sensor for thermal zone.

**2,0,11,14** 

*   *SimView/DisMdl*: Corrected dialogs for lighting and the connected control dialogs.

**2,0,11,8** 

*   *SimView*: Corrected, that dragging (moving) a vertex to an other vertex could influence the location of WinDoors in the face.

**2,0,11,6** 

*   SimView, SimDB: Right-click in tree structure on construction/WinDoor type or finish material opens the database and shows properties for the actual object.

**2,0,11,2** 

*   *SimView, Tsbi5*: XSun solar distribution did not send sun to neighbor room (error introduced in version 2,0,10,19).

**2,0,10,31** 

*   *SimLight* : Reflectance from finish, and light transmittance from glass properties.

**2,0,10,30** 

*   *SimView*: Reference point can be dragged using the mouse and is shown as a hotspot.

**2,0,10,28** 

*   *DisMdl Spac2*: Calculation of inner shell (Length(n0 cross n1) < 1 => n0 = n1).

**2,0,10,27** 

*   *Tsbi5*: Corrected error in DaylightControl.

*   *SimLight*: Corrected error in calculation of Total illumination in graphic representation.

**2,0,10,26** 

*   *SimLight*: Copy to Clipboard incl. graphics (EMF).

**2,0,10,25** 

*   *SimView*: Added option: Show STEP Error. (default = 0). For not showing STEP errors when opening models created in an old program version, i.e. when the data model is extended with MaxWind.

**2,0,10,24** 

*   *Model*: Solar shading added MaxWind. Solar shading will only be in use when wind speed < MaxWind and solar gains > MaxSun.

**2,0,10,23** 

*   *SimView*: Saves backup file during Save and Save As operations. File type: *.dbk.

**2,0,10,20** 

*   *SimView*: Radiance export - building rotation added.

**2,0,10,19** 

*   *XSun/tsbi5*: Calculation of solar, where the sun goes into a neighbor space, and from this back again to the initial space end up in a never ending loop. This special case is found, and the sun will **not** be send into the neighbor space, say calculations will be wrong.

**2,0,9,22** 

*   *tsbi5*: Hour values for ventilation inlet air, temperature and moisture corrected.

**2,0,9,21** 

*   *SimView*: Add Room, corrected in case of coincident faces.

*   *tsbi5*: Limitation of max. 14 days simulation in demo version.

**2,0,9,20** 

*   *tsbi5*: Standard values implemented for Finish.

**2,0,9,15** 

*   *SimReg*: Installation of demo, which expires after 30 days. Can not be re-installed on the same PC after expiration. Name: Demo, Company: Arbitrary choice, Serial: 1234.

**2,0,9,12** 

*   *SimView*: Improved edit functions, especially Add Room.

**2,0,9,7** 

*   *SimView*: Tsbi5: if no parameters is chooses when Table-tab is activated the Parameters-tab is shown.

**2,0,9,4** 

*   *SimView*: Added English User's Guide. Corrected install script, that Danish and/or English User's Guide can be selected during custom installation.

**2,0,9,1** 

*   *SimView*: Tsbi5: new option ’Dynamic update of Tables’ and new button in Tables ’Apply’.

**2,0,8,30** 

*   *SimView*: Error corrected in tsbi5/Parameters with parameters from other models.

**2,0,8,28** 

*   *SimView*: Corrected, that XSun made a break-down when noSite was defined in the model.

*   *trans5.dll*: Xpol2d: changed algorithm for calculation of intersection between two vectors.

**2,0,8,25** 

*   *tsbi5*: REMEMBER: Lighting/GeneralLux > 0 (division by 0).

**2,0,8,23** 

*   *SimView*: CleanModel extended: check for double Vertex and FaceSide, same Face appears several times in the same Cell, and both FaceSide’s facing the same Cell.

*   *tsbi5*: Stop simulation during start-up corrected.

**2,0,8,22** 

*   *Bv98*: Error in new sheet for walls and windows corrected.

**2,0,8,21** 

*   *tsbi5*: Converting weather data UI.

**2,0,8,18** 

*   *Model*: Expanded format for weather data: Header: id, latitude and longitude, timezone and height above sea level.

*   *tsbi5*: Hour values added for wind direction. tsbi3 format can still be used. Moisture: function to set partial pressure (pb) as a function of the height above sea level.

**2,0,8,17** 

*   *SimView* - HeatBalance graph - choice of type added (Bar, Pie 2D and 3D, Doughnut).

**2,0,8,16** 

*   *SimDxf* - Option maxLine removed.

*   *SimView* - Graphs extended with a possibility of fixing the Y-scale from period to period.

**2,0,8,15** 

*   *tsbi5* - Tsbi5/Tables: shows now parameters from other models.

**2,0,8,14** 

*   *SimView - Tsbi5/Parameters*: Choice of parameters from other models. Log file must be located in the same folder as the actual model (to avoid too long parameter names). Parameter names from other models: model@parametre. In principle there is no limitations in the number of models.

**2,0,8,10** 

*   *SimView* - XSun misc. minor changes and improvements.

*   *The model* - Volume of building corrected and CurvePoints removed by CleanDB (moisture).

**2,0,8,9** 

*   *SimView*: ModelList: check layer thickness in constructions > 0.

*   *SimView*: Error, if construction layer thickness = 0.

*   *Model*: Calculation of net. volume for thermal zones corrected.

**2,0,8,8** 

*   *SimView*: Disable of SimView and XSun during tsbi5/simulation.

*   *SimView*: SimLight only active from SimView.

*   *tsbi5*: Filename added by copy of sheets to clipboard.

**2,0,8,7** 

*   *SimView*: ModelList: filename and timestamp added, and RoomTemp documented.

*   *tsbi5*: Ventilation: correct inlet temperature to time log (before ventilator).

*   *SimView*: STEPerror by mixing when air comes from a room (non thermal zone) corrected.

**2,0,8,5** 

*   During tsbi5 simulation fixed focus on Simulation Page.

**2,0,7,17** 

*   *SimView*: tsbi5/Options: added layer thickness (maximum layer thickness) as a declaration of maximum thickness for sub-division of material layers (especially used in connection with simulation of moisture in constructions).

**2,0,7,15** 

*   *tsbi5*: Temperature/moisture through constructions saved in the hour-log if moisture simulation is chosen.

*   *SimView*: Drag-and-drop implemented to change the order in tsbi5 parameter list.

**2,0,7,14**

*   *SimView*: CleanModel improved further.

**2,0,7,13** 

*   *SimView*: CleanModel: function which adds missing faces in spaces.

*   *SimView*: Added in tsbi5/option Moisture Distribution (only active if the database contains parameters for moisture).

**2,0,7,11** 

*   *tsbi5*: Algorithms for moisture transportation through constructions implemented - is being tested and corrected.

**2,0,7,8** 

*   *tsbi5*: File name, containing '.', gave wrong file name for log files.

**2,0,7,7** 

*   *SimView*: Function for check/edit at FaceSides facing towards a real space added in Edit/CleanModel.

*   *SimView*: Delete ThermalZone now saved for Undo.

*   *SimView*: Windoor property: disable Override when no type is chosen and show NoType (not Impossible geometry).

*   *SimView*: Improved delete (Delete current object).

**2,0,7,6** 

*   *tsbi5*: Insolation through openings added.

*   *tsbi5/XSun* solar distribution through WinDoors and openings corrected to make the heat balance balance.

*   *tsbi5*: Distribution through WinDoors and openings between rooms corrected.

**2,0,7,4** 

*   *SimDB*: Editing Material during editing BuildingElement corrected.

**2,0,7,2** 

*   *SimView*: CleanModel: check and correct faces for Edges not belonging to the face.

**2,0,6,30** 

*   *Model*: Calculation of InnerShell, degenerate of edge with one vertex corrected. (Could make the program break down).

*   *System*: New version of Mfc42.dll and Msvcrt.dll in connection with an update of VC++ to Service Pack 4.

**2,0,6,27** 

*   *tsbi5*: Check for number of time steps. New warning: Ask user if the recommended number of time steps is to be used if the given number of time steps is too small.

**2,0,6,26** 

*   *Model, DisDB*: MoistMaterial re-defined to be a sub-type of ConstructionMaterial, meaning if moisture data exists in the database they are added.

**2,0,6,24** 

*   *SimView, Model, tsbi5*: Mixing from spaces outside thermal zones added. (Note: Can not be exported to tsbi3). Mixing via a space, which is analogue to the thermal zone receiving the mixing, can not be simulated (gives an error message before the simulation).

**2,0,6,23** 

*   *tsbi5*: Added error message when constructions are missing at the start of the simulation.

*   *SimView*: Copy/Paste in the tree structure now keeps focus.

**2,0,6,22** 

*   *tsbi5*: Export to tsbi3: corrected day profile.

*   *tsbi5*: Mixing corrected, unintended reset of volIn and olOut, must happen collectively for all zones before control, as volOut is registered in the thermal zone where air comes from by the thermal zone receiving the air.

**2,0,6,21** 

*   *SimView*: User interface for Ventilation and lighting systems improved.

*   *tsbi5*: Corrected error in shadow calculation, could make the program break down.

**2,0,6,20** 

*   *SimView*: Non referred Layers removed by CleanModel. DaylightCtrl added to ModelList.

*   *Model*: Ventilation and Lighting UI, choice and change of control corrected in dialog.

**Version 2.0.4.27 - 2.0.6.14** 

*   *SimView* have been optimized, including minor corrections, especially in the edit functions.

*   In *tsbi5* shutters and solar shading have been checked and corrected.

*   *SimDxf* have been optimized and a control function for saving models as *.dis files holding rooms without a complete description have been implemented. When a model is saved as an *.arc file, 'nodes' are also saved, which was not the case in earlier versions.

*   The *SimDB* database module has been extended to support moisture properties for building materials. The changes are not visible when using the existing databases. The moisture model is being developed and will not be available until later.
