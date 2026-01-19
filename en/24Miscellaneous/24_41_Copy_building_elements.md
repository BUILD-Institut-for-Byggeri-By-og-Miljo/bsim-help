<link rel="stylesheet" href="../style.css">

# Copy building elements

It is possible to create a copy of an existing building element from the [database](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement) as basis for creation of private building elements, almost similar to the copied one.

<figure id="center_img">
<img src="./assets/copy_buildingelement.gif" alt="Dialog (Copy BuildingElement) for copying building elements in the database.">
<figcaption>Dialog (Copy BuildingElement) for copying building elements in the database.</figcaption>
</figure>


The dialog offers the possibility of giving a number to create a new unique [SfB number](https://help.bsim.dk/support/kb/articles/DQ2xwBWV/sfb-i-bsim). It is important to give a number which creates a new unique SfB number in the database.

At the bottom of the dialog it is possible to select what should occur in the copy of the building element. A tick-mark on *MaterialLayers* will include the individual material layers and their thickness, and a tick-mark at *MaterialAmount* will further include information on the material consumption for 1 m² of the construction (used in conjunction with eventual future life cycle analyses).

The rest of the fields in the dialog is information on the building element to be copied as it's SfB-number (here: 21.10.31) and it's name (here: Br 39I100 Br).

When the copy have been created it must be edited and a dialog offering this opportunity will open.

<figure id="center_img">
<img src="./assets/edit_buildingelement.jpg" alt="Dialog for editing a copied building element.">
<figcaption>Dialog for editing a copied building element.</figcaption>
</figure>


First of all the name of the new building element should be changed to reflect the new construction. Data on the tabs [*ConstructionLayer* ](https://help.bsim.dk/support/kb/articles/OW4NdAQg/simdb---buildingelement-constructionlayer)and [*MaterialAmount* ](https://help.bsim.dk/support/kb/articles/Rm8JaZ94/simdb---buildingelement-materialamount)must be changed in a way that they matches the new construction.

*Unit* gives the unit and *Lifetime* the expected lifetime for the new construction in relation to the material amount data given on the *MaterialAmount* tab.
