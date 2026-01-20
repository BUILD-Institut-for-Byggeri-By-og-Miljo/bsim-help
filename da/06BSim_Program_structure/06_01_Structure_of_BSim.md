<link rel="stylesheet" href="../style.css">

# Strukturen i BSim

Programmerne i *BSim*-pakken er opbygget omkring et centralt program og brugerinterface *SimView* med modeleditor. I *SimView* vises modellen i en hierarkisk træ-oversigt - som kendes fra fx stifinderen i Windows - langs den venstre side af billedet. Her er det muligt at komprimere eller udvide træ-oversigten, så større eller mindre dele af modellen er synlige ad gangen. Hvis en tekst er for lang til at vises i sin fulde længde, kan den ses ved at holde musemarkøren stille over tekststrengen. Den fulde tekst vises som en bobletekst. Generelt gives der overalt i programpakken på denne måde information om det objekt musemarkøren aktuelt er placeret over.

I SimView vises en bygningsmodel dels som en hierarkisk træ-oversigt til venstre i skærmbilledet, og dels som en grafisk afbildning til højre i skærmbilledet. Den grafiske afbildning er delt op i en grundplan, to opstalter samt en rumlig afbildning. I grundplanens nederste højre hjørne vises *nordretningen* svarende til rotationen af den aktuelle bygning.

Skærmens højre side er således inddelt i fire felter, der viser modellen som:

*   opstalt vinkelret på X-aksen eller fra nord mod syd hvis modellen ikke er roteret (øverst til venstre)

*   opstalt vinkelret på Y-aksen eller fra øst mod vest hvis modellen ikke er roteret (øverst til højre)

*   plantegning (for neden til venstre)

*   rumlig afbildning (for neden til højre).

 

I plantegningen vises tillige en nordpil som indikator for rotation af modellen.

Modellerne defineres i et rumligt koordinatsystem, hvor <span id="red_text"> **x-aksen** er positiv mod øst, **y-aksen** er positiv mod nord, og **z-aksen** er positiv opad. </span>

Modellens bygninger kan afsættes med flader som har negativ z-værdi. Det betyder **ikke** at modellen ligger under jorden, selvom det ser sådan ud i den rumlige afbildning. Der vil således stadig kunne komme sol gennem vinduer som ligger helt eller delvist under koordinatsystemets nulpunkt.

Modelens systemlinjer tegnes i [SimView](/09SimView/09_01_SimView.html) eller importers fra en CAD tegning ved hjælp af [SimDXF](/08SimDXF_CAD_drawings_as_basis_for_geometry/08_01_CAD_drawings_as_a_basis_for_geometry.html) programmet.

Når der tilknyttes konstruktioner til modellens flader afsættes de således:

*   Konstruktioner der vender imod det fri (*Outdoor*) eller imod jord (*Ground*) afsættes fra systemlinjerne og <u>indefter</u>.

*   Konstruktioner som adskiller to rum afsættes symmetrisk om systemlinjen.

<figure id="center_img">
<img src="./assets/Structure.GIF " alt="Programvinduet i SimView med træ-oversigten til venstre og fire visninger af modellen til højre.">
<figcaption>Programvinduet i SimView med træ-oversigten til venstre og fire visninger af modellen til højre.</figcaption>
</figure>

Modellens enkelte objekter kan [bearbejdes og undersøges](/06BSim_Program_structure/06_03_Mouse_operations_in_SimView.html) ved hjælp af klik med musen i kombination med tastaturets Ctrl-tast og Shift-tast. Et klik med musens venstre tast kaldes et venstre-klik (eller blot et klik), mens et klik med musens højre tast kaldes en højre-klik.

Det er generelt muligt at ændre visningen af bygningsmodellen. Der kan zoomes ind eller ud ved tryk på knappen "+" eller "-" og modellen kan drejes ved at trykke på "pil-højre" eller "pil-venstre". De samme funktioner findes også på værktøjsbjælken eller via menuindgangen *<u>V</u>iew* | *<u>V</u>iew* efterfulgt af *Zoom-In*, *Zoom-Out* eller *ViewPoint*.

Der kan foretages en simpel redigering direkte i træ-oversigten. Ved at trække fx et system fra en termisk zone til en anden flyttes systemet. Rum [tilføjes til termiske zoner](/10Thermal_zones/10_02_SimView_Adding_spaces_to_thermal_zones.html) ved at trække dem ind i zonen.

I alle programmerne i BSimpakken er det muligt at kalde en menu frem ved at klikke på musens højre knap. Menuen er forskellig i de forskellige programmer ([*SimView*](/09SimView/09_01_SimView.html), [*Xsun*](/14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.html), *tsbi5* og [*SimLight*](/15SimLight_Daylight_calculations/15_01_Daylight_calculations_with_SimLight.html)) og indeholder de mest benyttede funktioner på det aktuelle sted.

Det er muligt at vælge (udpege) flader (konstruktioner) direkte i den geometriske visning ved at flytte musemarkøren til det ønskede objekt og trykke på *Ctrl + "venstre klik"* i 3D-visningen. Derved markeres objektet med rød farve i den geometriske visning og den aktuelle konstruktion markeres i træ-oversigten. Det er også muligt at vælge et objekt direkte ved klik i træ-oversigten (se: [Tilføje et rum](/09SimView/09_15_SimView_Creating_a_space.html)). Det er ofte lettere at udpege den ønskede konstruktion i træ-oversigten, end i 3D geometrien.

Se også:

*   [Værktøjsbjælken](/06BSim_Program_structure/06_05_SimView_Toolbar.html)

*   [*SimView*-menuen](/06BSim_Program_structure/06_06_SimView_Menu.html)

*   [Programmenuerne](/06BSim_Program_structure/06_04_Program_menus_in_BSim.html)