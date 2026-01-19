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

*   [Vælg DXF-filter - Edit DXF-filter](https://help.bsim.dk/support/kb/articles/ZmNrexm2/simdxf---valg-dxf-filter)

*   [Hent DXF-fil - Open DXF-file](https://help.bsim.dk/support/kb/articles/BWzdblQE/simdxf---abne-dxf-tegning)

*   [Oprette hjælpelinier](https://help.bsim.dk/support/kb/articles/amRGMZQJ/simdxf---oprette-hjalpelinier)

*   [Knudepunkter (nodes)](https://help.bsim.dk/support/kb/articles/XQYdOMmP/simdxf---oprette-knuder-nodes)

*   [Flade - Face](https://help.bsim.dk/support/kb/articles/4966zA9X/simdxf---flader)

*   [Rum - Room](https://help.bsim.dk/support/kb/articles/y9q8DNQA/simdxf---rum)

*   [WinDoor](https://help.bsim.dk/support/kb/articles/OW4N0pQg/simdxf---windoor)

*   [Tegningsrevisioner](https://help.bsim.dk/support/kb/articles/dQG2xem4/simdxf---tegningsrevisioner)

*   [Tilføjelse af SimDXF som applikation](https://help.bsim.dk/support/kb/articles/7maw2X9E/simdxf---tilfoje-som-applikation)
