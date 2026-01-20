<link rel="stylesheet" href="../style.css">

# SimDXF - Flader

I *SimDXF* konstrueres flader (*Faces*) som linier mellem to knudepunkter (*Nodes*).

Vælg to *Nodes* og tryk Ctrl+F, eller tegn et rektangel omkring de nodes, hvorimellem der skal tegnes *Faces* + Ctrl+F.

<figure id="center_img">
<img src="./assets/DXF06.GIF " alt="Markering af Nodes for generering af flader (Faces).">
<figcaption>Markering af Nodes for generering af flader (Faces).</figcaption>
</figure>


**NOTE:**

*   Hvis der skal oprettes flader omkring et rum hvor linierne i cad-tegningen ikke umiddelbart kan vælges som gennemgående centerlinier kan der opstå en situation hvor det ikke er muligt at oprette flader mellem knudepunkterne. Årsagen til dette er, at en flade <span style="text-decoration: underline;">kun</span> kan oprettes mellem to knudepunkter som er oprettet ved hjælp af en fælles linie fra cad-tegningen.

*   Det er muligt at komme uden om dette problem. Opret et knudepunkt (Ctrl+Q) udfra to linier som skærer hinanden. Når det næste knudepunkt skal oprettes, skal man genbruge ét af de to liniestykker, som blev benyttet til oprettelsen af det foregående knudepunkt. Ud fra to knudepunkter, oprettet ud fra én fælles linie i cad-tegningen, er det herefter muligt at oprette en flade i BSim-tegningen (til højre på skærmen) ved, at indramme (træk med musen med venstre knap holdt nede) de to knudepunkter og trykke Ctrl+F.

Redigeringsfunktioner findes i menuen, der fremkommer ved højreklik på musen. Vælg *Faces* / *Nodes* før menupunktet vælges.

 

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
