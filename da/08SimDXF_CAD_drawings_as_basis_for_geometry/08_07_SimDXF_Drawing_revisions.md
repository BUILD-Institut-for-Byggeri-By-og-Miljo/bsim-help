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

*   [Vælg DXF-filter - Edit DXF-filter](https://help.bsim.dk/support/kb/articles/ZmNrexm2/simdxf---valg-dxf-filter)

*   [Hent DXF-fil - Open DXF-file](https://help.bsim.dk/support/kb/articles/BWzdblQE/simdxf---abne-dxf-tegning)

*   [Oprette hjælpelinier](https://help.bsim.dk/support/kb/articles/amRGMZQJ/simdxf---oprette-hjalpelinier)

*   [Knudepunkter (nodes)](https://help.bsim.dk/support/kb/articles/XQYdOMmP/simdxf---oprette-knuder-nodes)

*   [Flade - Face](https://help.bsim.dk/support/kb/articles/4966zA9X/simdxf---flader)

*   [Rum - Room](https://help.bsim.dk/support/kb/articles/y9q8DNQA/simdxf---rum)

*   [WinDoor](https://help.bsim.dk/support/kb/articles/OW4N0pQg/simdxf---windoor)

*   [Tegningsrevisioner](https://help.bsim.dk/support/kb/articles/dQG2xem4/simdxf---tegningsrevisioner)

*   [Tilføjelse af SimDXF som applikation](https://help.bsim.dk/support/kb/articles/7maw2X9E/simdxf---tilfoje-som-applikation)
