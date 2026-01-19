<link rel="stylesheet" href="../style.css">

# Kopier bygningselementer

Det er muligt at oprette en kopi af et eksisterende bygningselement fra [databasen](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement) som grundlag for opbygning af egne bygningselementer som ligner det kopierede.

<figure id="center_img">
<img src="./assets/copy_buildingelement.gif" alt="Dialog (Copy BuildingElement) til kopiering af bygningselementer i databasen.">
<figcaption>Dialog (Copy BuildingElement) til kopiering af bygningselementer i databasen.</figcaption>
</figure>

Dialogen giver mulighed for at angive det sidste tal i det unikke [SfB-nummer](https://help.bsim.dk/support/kb/articles/DQ2xwBWV/sfb-i-bsim). Det er vigtigt at der angives et tal som definerer et nyt unikt SfB-nummer.

Nederst i dialogen er det desuden muligt at vælge hvad der skal medtages i kopien af bygningselementet. *MaterialLayers* medtager de enkelte materialelag og deres tykkelse og *MaterialAmount* medtager desuden information om materialeforbruget til 1 m² af konstruktionen (benyttes i forbindelse med evt. fremtidige livscyklusanalyser).

Dialogens øvrige felter er information om det bygningselement der kopieres fra og er dels dets SfB-nummer (her 21.10.31) og dels dets navn (her Br 39I100 Br).

Når der er oprettet en kopi skal denne herefter redigeres og dialogen herfor åbnes.

<figure id="center_img">
<img src="./assets/edit_buildingelement.gif" alt="Dialog for redigering af et kopieret bygningselement.">
<figcaption>Dialog for redigering af et kopieret bygningselement.</figcaption>
</figure>

Ved redigeringen bør navnet ændres så det afspejler den ændrede konstruktion. Data på fanebladene [*ConstructionLayer*](https://help.bsim.dk/support/kb/articles/OW4NdAQg/simdb---buildingelement-constructionlayer)og [*MaterialAmount* ](https://help.bsim.dk/support/kb/articles/Rm8JaZ94/simdb---buildingelement-materialamount)skal ændres så den passer til den nye konstruktion.

*Unit* angiver den regningsmæssige enhed og *Lifetime* den forventede levetid af elementet i forbindelse med angivelse af materialemængder på sidste faneblad (MaterialAmount).