<link rel="stylesheet" href="../style.css">

# SimDXF - Tegningsrevisioner

En arkivfil indeholder alle hjælpelinier samt afledede flader, vinduer, døre og zoner. Fra hjælpelinierne kan der konstrueres *Nodes*. Ved indlæsning af arkivfilen indlæses ovenstående information, men også den oprindelige DXF-fil, som optegnes sammen med de oprindelige hjælpelinier.

Hvis der er foretaget ændringer i DXF-filen, vil afvigelserne vise sig ved, at hjælpelinierne ikke længere ligger rigtigt. Den oprindelige model kan rettes på følgende måde:

1.  Konstruer *Nodes* i den gamle model for punkter, der skal flyttes

2.  Konstruer *Nodes* i den nye model for de tilsvarende punkter

3.  Træk *Nodes* i den gamle model over i de tilsvarende i den nye model.

*Nodes* trækkes med musens venstre tast (vælg *Node* med musen, hold tasten nede og træk til den dækker den nye *Node*, slip musetasten).

*Nodes* kan ikke trækkes til en anden *Node* hvis det bevirker, at den tilsvarende flade får bredden 0. Vinduer og døre flytter ikke med den flade, de tilhører.

<figure id="center_img">
<img src="./assets/DXF11.GIF" alt="Modellen vist med SimView.">
<figcaption>Modellen vist med SimView.</figcaption>
</figure>


Se også:

*   [Vælg DXF-filter - Edit DXF-filter](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_03_SimDXF_Selecting_the_DXF_filter.html)

*   [Hent DXF-fil - Open DXF-file](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_02_SimDXF_Opening_a_DXF_drawing.html)

*   [Oprette hjælpelinier](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_09_SimDXF_Creating_nodes.html)

*   [Knudepunkter (nodes)](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_09_SimDXF_Creating_nodes.html)

*   [Flade - Face](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_05_SimDXF_Faces.html)

*   [Rum - Room](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_06_SimDXF_Spaces.html)

*   [WinDoor](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_08_SimDXF_WinDoor.html)

*   [Tegningsrevisioner](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_07_SimDXF_Drawing_revisions.html)

*   [Tilføjelse af SimDXF som applikation](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_04_SimDXF_Adding_as_an_application.html)
