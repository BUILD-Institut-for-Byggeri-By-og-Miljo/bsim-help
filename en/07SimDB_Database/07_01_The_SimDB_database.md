<link rel="stylesheet" href="../style.css">

# The SimDB database
One of the central elements in *BSim* is the *SimDB* database, which contains default information on materials, constructions and windows. *SimDB* is a relational database with the same structure as that used in Danish Building Research Institute's "Energy and Environment Database", described in SBI report 278. The energy and environment database and the supplementary program can be downloaded from Danish Building Research Institute's website.

In principle the database contains two databases, one of materials ([*BuildingMaterial*](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial)) and one of building elements ([*BuildingElement*](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)), which are made up of a combination of materials.

All building elements and materials are named in accordance with the [SfB system](https://help.bsim.dk/support/kb/articles/DQ2xwBWV/sfb-i-bsim), and it is <span id="red_text"> important </span>  to conform to the convention when defining new data in the database, as the building elements are sorted according to the SfB system and the database displays different tabs with data, depending on the SfB number.

Wherever "Edit" appears in the dialog boxes, right-clicking an SfB number will open the dialog box for editing data for the object.

The database is a relational database created using Microsoft Access 97. To edit the databases without employing the dialog boxes in *BSim*, use Microsoft Access 97.

The software comes with two databases. The "SbiData.mdb" file contains the standard data that accompanies the software suite and is write-protected. The "empty.mdb" file contains the structure for the database and can be employed to create the user's own databases. Both databases **must** be on the PC and will normally be overwritten when the software is updated.

If the standard database, or an other write-protected database is selected, this is indicated at the title bar of the database dialogs using the text *Read Only* immediately after the name of the database.

See also:

*   [BuildingElement](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)

*   [BuildingMaterial](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial)
