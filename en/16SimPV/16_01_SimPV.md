<link rel="stylesheet" href="../style.css">

# SimPV
SimPv is a tool for making a simple calculation of the electrical yield from a building integrated solar cell (PV) system.

SimPv has been implemented as a module in BSim as an integrated part of XSun.

Areas with solar cells is [added to the model](https://help.bsim.dk/support/kb/articles/E9LwrZQw/indsatte-solceller-i-modellen) in the same way as WinDoors.

<figure id="center_img">
<img src="./assets/SIMPV.JPG" alt="Calculation of the power output from a building integrated pv-system is summarised over the months of the calculation period for each construction with PV.">
<figcaption>Calculation of the power output from a building integrated pv-system is summarised over the months of the calculation period for each construction with PV.</figcaption>
</figure>

**Calculation Period**

*   *Start* gives the first day of the calculation period.

*   *End* gives the last day of the calculation period.

*   *Time-step* gives the number of time-steps in each hour of the calculation period. Climate data are given as constant values hour by hour. It is thus only the shaded part of the PV-panels which changes from timestep to timestep within the same hour.

**Calculation**

*   *Start* initiates the calculation of yield from solar cells in the model.

*   *Stop* terminates the calculation before the *End*-date.

*   *No shading reduction* offers the possibility of calculating the yeld from the PV-panels as if no shadows strikes the cells. The difference between the yeld with and without shadows express the *performance ratio*.

*   *Create Hour Log* offers the possibility to save the results from *SimPv* in a results file (*modelname#pv*) that can be merged into the ordinary results handling routines for *tsbi5* using the *Open New Model* function from the [*Parametres*](https://help.bsim.dk/support/kb/articles/nmDBAR9y/tsbi5---parameters) tab.

*   At the botton of the field the process of the calculation is shown.

**Note:** If no PV-material have been attributed to the PV-areas of the model, data for standard poly-chrystalline silicon is used in the calculations (system efficiency 10 % and no proportional reduction of yield because of partial shading).

*Copy to Clipboard* saves the contents of the table to the working memory of the PC. The copy can be used in other programs, e.g. spreadsheet programs, using the *Insert* function for further handling.

*Finish* closes the dialog.

Table shows in the first collumn the monthly yeald from all constructions with PV in the model. The following collumns shows the yield from the individual costructions with PV. At the bottom the sum over the calculation period is shown for each collumn.