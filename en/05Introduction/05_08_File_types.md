# File types

The BSim program package uses the following file types:

|       |  |
|----------------------|-------------|
| *model_name*.dis       | *BSim* model files. |
| *model_name*.disdb     | New (2006) extension for BSim databases allowing the database to be sent as an attached file to an e-mail. |
| *model_name*.mdb       | Component database for a model – normally created as a copy of *SbiData.mdb*, but can also be created as a copy of a private database. |
| *model_name*.s97       | Heat balance results, created during simulation with *tsbi5*. |
| *model_name*.g97       | Hour result values, created during simulation with *tsbi5*. |
| *model_name.dbk*       | Back-up of the model. A new back-up will be created when opening a model and when using the functions *Save* and *Save as*. |
| *.dxf                | CAD drawings saved from CAD program in DXF format. |
| *.arc                | Model files generated from CAD drawings using *SimDXF*. Can be used as a basis for further detailing of new models of the same building. Can be opened from *SimDXF*. |
| *.ts3                | Model exported to *tsbi3*. This export facility can only be activated when *tsbi5* is active. |
| *.geo                | Export of text file with information on model geometry to be used in CFD programs. This export facility can only be activated when *tsbi5* is active. |
| *.cfd                | Export of boundary conditions to be used in CFD calculations. This export facility can only be activated when *tsbi5* | *Tables* is active. |
| *.rad                | Export of model geometry to be used in *Radiance*. This export facility can only be activated when *SimView* is active. |
| *.rif                | Export of controls for the use of the model in *Radiance*. This export facility can only be activated when *SimView* is active. |
| *.wdf                | Definition file for conversion of climate data in text format (ASCII) to the binary format used by BSim. |
| *.epw                | Text file with climate data in EnergyPlus format. This format can be converted directly to the binary format used by BSim, using a build-in function in BSim from version 2002. |
| *model_name*.b98       | Models saved from the *Bv98* program. |

<br>

<br>

In addition to this, two database files are distributed with the program package: 

|         |  |
|-----------------|-------------|
| *BSim2003.mdb*    | Database that comes with *BSim* and in addition to the content of *MoistDat.mdb* holds updated values for glass and tables with information for simulation of solar cells. |
| *MoistDat.mdb*    | Contains the standard database for the *BSim*. This database contains the same information as the *SbiData* database, plus information on the moisture properties of all building materials. |
| *SbiData.mdb*     | Contains the standard database. This database will be updated (overwritten) with updates of the program. The database is write protected and **no** new components or materials must be added in this database. |
| *Empty.mdb*       | Empty database containing the structure used in *BSim*. |
