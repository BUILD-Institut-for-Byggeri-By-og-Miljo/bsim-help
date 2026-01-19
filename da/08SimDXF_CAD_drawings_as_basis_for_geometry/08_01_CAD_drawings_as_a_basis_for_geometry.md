<link rel="stylesheet" href="../style.css">

# Cad-tegninger som grundlag for geometri

<center>

*SimDXF er et simpelt værktøj til import af cad tegninger i DXF-format som grundlag for opbygning af den geometriske beskrivelse af bygningsmodeller i BSim.*
</center>

<center>

*Der kan importeres en etage ad gangen via SimDXF. Hvis der ønskes oprettet en model med mere end en etage er det nødvendigt at oprette hver etage for sig i SimDXF, og [importere](https://bsim.outseta.com/support/kb/articles/E9LwJGQw/skygger-fra-omgivelser) etage nummer 2 og følgende i SimView. Herved fås en model med flere bygninger (en for hver etage). Det er **kun** muligt at simulere en bygning ad gangen (current building) med tsbi5. Ved at trække (i træstrukturen i [SimView](https://bsim.outseta.com/support/kb/articles/wQXx2xQK/simview)) den eller de nye bygninger ind i den først oprettede bygning (etage), tilføjes disse til modellen for den aktuelle bygning, og kan simuleres samtidigt i [tsbi5](https://bsim.outseta.com/support/kb/articles/A93z0lQ0/tsbi5). Det kan være nødvendigt at flytte nye etager (fx. opad) i modellen med kommandoen [Move](https://help.bsim.dk/support/kb/articles/DmwA8o94/simview---move) fra SimView-menuen.*
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

Via menu-indgangen [*Help* | *About SimDXF* ...](https://help.bsim.dk/support/kb/articles/1QpnypWE/about-simdxf) kan information om programversionen ses.

 

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

 