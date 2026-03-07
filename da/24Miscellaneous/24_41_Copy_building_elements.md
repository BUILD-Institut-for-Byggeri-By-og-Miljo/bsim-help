<link rel="stylesheet" href="../style.css">

# Kopier bygningselementer

Det er muligt at oprette en kopi af et eksisterende bygningselement fra [databasen](/07SimDB_Database/07_02_SimDB_BuildingElement.html) som grundlag for opbygning af egne bygningselementer som ligner det kopierede.

<figure id="center_img">
<img src="./assets/copy_buildingelement.gif" alt="Dialog (Copy BuildingElement) til kopiering af bygningselementer i databasen.">
<figcaption>Dialog (Copy BuildingElement) til kopiering af bygningselementer i databasen.</figcaption>
</figure>

Dialogen giver mulighed for at angive det sidste tal i det unikke [SfB-nummer](/24Miscellaneous/24_39_SfB_in_BSim.html). Det er vigtigt at der angives et tal som definerer et nyt unikt SfB-nummer.

Nederst i dialogen er det desuden muligt at vælge hvad der skal medtages i kopien af bygningselementet. *MaterialLayers* medtager de enkelte materialelag og deres tykkelse og *MaterialAmount* medtager desuden information om materialeforbruget til 1 m² af konstruktionen (benyttes i forbindelse med evt. fremtidige livscyklusanalyser).

Dialogens øvrige felter er information om det bygningselement der kopieres fra og er dels dets SfB-nummer (her 21.10.31) og dels dets navn (her Br 39I100 Br).

Når der er oprettet en kopi skal denne herefter redigeres og dialogen herfor åbnes.

<figure id="center_img">
<img src="./assets/edit_buildingelement.gif" alt="Dialog for redigering af et kopieret bygningselement.">
<figcaption>Dialog for redigering af et kopieret bygningselement.</figcaption>
</figure>

Ved redigeringen bør navnet ændres så det afspejler den ændrede konstruktion. Data på fanebladene [*ConstructionLayer*](/07SimDB_Database/07_03_SimDB_BuildingElement_ConstructionLayer.html)og [*MaterialAmount* ](/07SimDB_Database/07_04_SimDB_BuildingElement_MaterialAmount.html)skal ændres så den passer til den nye konstruktion.

*Unit* angiver den regningsmæssige enhed og *Lifetime* den forventede levetid af elementet i forbindelse med angivelse af materialemængder på sidste faneblad (MaterialAmount).