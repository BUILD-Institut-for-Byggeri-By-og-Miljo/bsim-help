<link rel="stylesheet" href="../style.css">

# tsbi5 - Parameters


The *Parameters* tab contains lists of the [parameters that have been saved on an hourly basis during the simulation](https://help.bsim.dk/support/kb/articles/vW5a6gW4/parametre-i-resultatloggen) for subsequent analysis.




<div id="gray_background">
Values saved in the result log represents snap-shots of the calculated conditions at the end of the last time step in each hour unless anything else is given for the individual parameter.
</div>


<figure id="center_img">
<img src="./assets/tsbi5Parametres.GIF" alt="The Parameters tab contains a list of saved parameters that can be displayed on an hourly basis.">
<figcaption>The Parameters tab contains a list of saved parameters that can be displayed on an hourly basis.</figcaption>
</figure>


The drop-down list box at the top left of the tab is used to select different groups of parameters, which are displayed in the list immediately below. Here the individual parameters can be checked in the box next to them. This will bring the selected parameters up in the list on the right. Parameter lists can be saved under a name. The drop-down list box at the top right of the tab contains the existing parameter lists, and a new list can be created by clicking the *New* button.

There is no limitation in the number of parameters in a parameter list - however it is recommended that the number is kept low as the graphs will be difficult to read with too many parameters. The parameter list is saved when one changes to an other tab in *tsbi5*. If one change directly to *SimView* or *XSun*, the parameter list is not saved.

The button *Open New Model* gives the opportunity of selecting results from other models to be shown in the same table or graphic representation. The foreign models **must** be located in the same folder as the current model. It is possible to distinguish between the different model parameters by the preceding *model_name@* at each parameter (see the parameter list at the left in the figure above).



<div id="gray_background"> <em>
In some cases BSim shows the error message like "The selected file must be located in the folder 'x:\xxxxxxxxxxx' like the current log". BSim think that the two result files are located in different folders and can thus <u>not</u> be compared. The phenomenon occurs on some types of local networks. It is possible to work around the problem by ensuring that all folders in the actual path is named by no more than 8 characters and without spaces or special characters.
If the model name is too long, it is not possible to compare results from different models at the Tables tab.
</div> </em>





Result files from simulations with [SimPv](https://help.bsim.dk/support/kb/articles/pWrnRaWn/simpv) can be analyzed using the normal result analyses functions. These result files are named as *model name#pv*. Results occurs as two parameters (*qPvGross og qPvNet*) at all constructions with solar cells. There <u>must</u> thus be a check-mark next to *Constructions* at the [*Options* ](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options)tab to be able to see these parameters.

If a simulation over several years have been performed, results from each year will occour as individual result files. These result files are named after the model followed by a "#yy", where yy are the last two digits of the year. *tsbi5* automatically shows the first year in a series of years. Additional years must be opened as individual result files.

Parameters from other models will be removed automatically when leaving the tab, if parameters from the model do not occur in a parameter list.

The existing parameter list can easily be modified by double-clicking an entry in the list (window at the right of tsbi5). This changes focus to the actual parameter in the global parameter list (window to the left in tsbi5) and the tick-mark can be removed manually.

If results from *Construction* is chosen to be saved on the [*Options* tab](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options), a group with these data will occur in the results log. The results contains calculated temperatures from the surfaces and in all nodes in the constructions. This means that the parameters T1, T2, T3 etc. indicates the node temperature counting from face 1 of a construction. The surface temperatures are denoted SurfTmp1 and SurfTmp2 for surface 1 (normally inside) and surface 2 (normally outside). Data for the relative humidity in the constructions will <u>only</u> occur if a database with moisture information on the building materials have been used.

Below the parameter list three buttons are located: *New, Delete and Copy*. The buttons are used for creating a new, empty parameter list, deleting the current list and making a copy of the current list.

See also:

*   [Tab Options](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options)
*   [Tab Moisture](https://help.bsim.dk/support/kb/articles/XQYdbPmP/tsbi5---fugt)
*   [Tab Simulation](https://help.bsim.dk/support/kb/articles/DQ2xjyWV/tsbi5---simulation)
*   [Tab HeatBalance](https://help.bsim.dk/support/kb/articles/wmjn57mV/tsbi5---heatbalance)
*   [Tab Parameters](https://help.bsim.dk/support/kb/articles/nmDBAR9y/tsbi5---parameters)
*   [Tab Tables](https://help.bsim.dk/support/kb/articles/BWzdLlQE/tsbi5---tables)

