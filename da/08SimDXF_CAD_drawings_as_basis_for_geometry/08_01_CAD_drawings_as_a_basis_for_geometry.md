<link rel="stylesheet" href="../style.css">

# Cad-tegninger som grundlag for geometri

<center>

*SimDXF er et simpelt værktøj til import af cad tegninger i DXF-format som grundlag for opbygning af den geometriske beskrivelse af bygningsmodeller i BSim.*
</center>

<center>

*Der kan importeres en etage ad gangen via SimDXF. Hvis der ønskes oprettet en model med mere end en etage er det nødvendigt at oprette hver etage for sig i SimDXF, og [importere](/10Thermal_zones/10_05_Shadows_from_the_surroundings.html) etage nummer 2 og følgende i SimView. Herved fås en model med flere bygninger (en for hver etage). Det er **kun** muligt at simulere en bygning ad gangen (current building) med tsbi5. Ved at trække (i træstrukturen i [SimView](/09SimView/09_01_SimView.html)) den eller de nye bygninger ind i den først oprettede bygning (etage), tilføjes disse til modellen for den aktuelle bygning, og kan simuleres samtidigt i [tsbi5](/13tsbi5_thermal_simulation/13_01_tsbi5.html). Det kan være nødvendigt at flytte nye etager (fx. opad) i modellen med kommandoen [Move](/09SimView/09_13_SimView_Move.html) fra SimView-menuen.*

</center>
 

Cad-tegninger af en bygnings etageplaner kan benyttes som grundlag for opbygning af datamodellerne i *BSim*. Cad-tegninger skal være gemt i *dxf*-format og bør for overskuelighedens skyld indeholde så få overflødige informationer som muligt.

Læsningen af en cad-tegning sker i det eksterne modul *SimDXF*, som er leveret sammen med programpakken.

*SimDXF* startes - når programmet er sat op - ved tryk på ikonet i værktøjsbjælken og en *dxf*-tegning indlæses.

<figure id="center_img">
<img src="./assets/dxf_no_filter.gif" alt="SimDXF med en cad-tegning åbnet.">
<figcaption>SimDXF med en cad-tegning åbnet.</figcaption>
</figure>


### **Redigering af flade, vindue eller dør**

Vælg en flade, vindue eller dør (klik, så den markeres rød), vælg Edit Current i menuen (højreklik + valg) eller Ctrl + r. Her kan evt. indtastes et navn, og andre data kan ændres.

### **Standarder - Options**

Under menupunktet *Edit* | *Options* kan visse standardværdier (fx vindueshøjde) ændres.


### **Gemme i BSim-format**

Modellen kan gemmes i en STEP-fil (*.dis), som herefter kan hentes ind i *BSim*. Bemærk, at oplysning om bygningselementer ikke indeholder detaljer (fx om lagdeling og materialer). Disse hentes fra databasen af den applikation, der skal anvende dem.

Den redigerede DXF-model kan også gemmes som en arkivfil (*.arc), som senere kan indlæses for videre redigering og skrivning af STEP-fil.

Det er en god ide altid at gemme en arkivfil samtidig med at der gemmes en STEP-fil, således at STEP filen let kan regenereres.


### **Programversion**

Via menu-indgangen *Help* | *About SimDXF* ... kan information om programversionen ses.

 

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

 