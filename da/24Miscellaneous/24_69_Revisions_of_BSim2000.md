<link rel="stylesheet" href="../style.css">

# Tidligere revisioner i BSim

*Informationer på denne side er primært ment som en dokumentation af de ændringer som er sket med programmet for udviklerne, men kan også bruges til bedre at forstå forskelle i resultatet opnået med forskellige versioner af programmet.*

 

**2,2,5,2**

*   *tsbi5*: Time middelværdi for top gemmes i loggen.

 

**2,2,4,22**

*   *SimView*: Scale og Grid gemmes sammen med projektet.

 

**2,2,4,12**

*   *tsbi5*: Tilføjet menupunkt File/Weather Data/ASHRAE for at hente og konvertere ASHRAE vejrdata for ca. 550 lokaliteter i hele verden.

 

**2,2,4,3**

*   *SimView*: Rettet, at udskrift af varmebalance mangler kolonne.

 

**2,2,3,29**

*   *tsbi5*: Konvertering vejrdata, format af vindretning rettet.

 

**2,2,3,5**

*   *tsbi5*: Rettet fejl når simuleringsoptions gemmes i projektet.

 

**2,2,2,7**

*   *SimView*: Rettet Split Edge funktion.

 

**2,2,2,4**

*   *tsbi5*: Konvertering af vejrdata, rettes skydække/fraction.

 

**2,2,1,24**

*   *tsbi5*: Simulerings-options gemmes sammen med projektet.

 

**2,2,1,9** 

*   *tsbi5*: Rettet fejl ved beregning af dagslysbidrag fra vindue.

**2,2,1,7** 

*   Tsbi5: Logfil kan ikke åbnes hvis den allerede er i brug under simulering.

**2,2,1,4** 

*   *SimView*: XSun: Funktionen til check for om ekstern flade kan skygge er ændret.

**2,2,1,2** 

*   Trans5.dll: XSun tolerance ændret.

**2,1,12,12** 

*   *DisView*: Ny ikon i træstrukturen for flader, som afspejler om bygningselementer fra databasen ikke er tilknyttet objekter fra databasen. Forskellig ikon for *.dis- og *.dbk-filer.

**2,1,12,10** 

*   *Bv98 Dis.dll*: b-værdi for tage rettet til 0.

*   *SimLight*: Rettet beregning af interreflekteret bidrag (formfaktor beregningen).

**2,1,12,5**

*   *tsbi5*: Langbølget stråling, rettet beregning af temperaturafhængigt overgangstal.

**2,1,12,3** 

*   *tsbi5*: Gulvvarme, ny regulering af opvarmning (foreløbig version).

**2,1,12,1** 

*   *tsbi5*: Beregning af luftskifte rettet (tidsstep afhængig).

**2,1,11,24** 

*   *tsbi5*: HeatBalance og Tables faneblad: Valg af periode, Year ændret til Total. Fra Tables fanebladet: Ny funktion File/Export/Tables for at gemme timeværdier til tabulatorsepareret tekstfil.

**2,1,11,19** 

*   *Step5.dll*: Længde af stinavn til fil udvidet fra 128 til 256 tegn.

*   *tsbi5*: Ingen styring efter top for Heating/Cooling når sensor zone er forskellig fra den aktuelle. Ventilation/Fan/Total Effect skal være > 0 (hvis 0 bruges 1).

**2,1,11,8** 

*   *SimView*: Tilføjet menupunkt File/Mail Project To.

**2,1,11,6** 

*   *tsbi5*: Rettet beregning af solindfald gennem åbninger.

**2,1,11,2** 

*   *SimView*: Ved brug af "File/Copy Project to" funktionen ændres databasenavnet til det samme som projektnavnet.

**2,1,10,22** 

*   *SimView*: Rettet at programmet låste i Windows 95, 98 og Me ved gentagen zoom (16 bit begrænsning).

**2,1,10,18** 

*   *SimView*: Tilføjet søgefunktion i træstrukturen, findes i Edit menuen.

*   *DisMdl*: Rettet flyttefunktion for Windoor’s ved sammenfaldende vertices.

*   *Tsbi5*: Parameterbetegnelser udvidet fra max. 31 til 63 tegn. Resultatfiler fra tidligere simuleringer kan **ikke** læses, men kræver en ny simulering.

**2,1,10,17** 

*   *DisMdl*: Hvis abs. fugtindhold i vejrdata < 0.1 g/kg anvendes 0.1 g/kg.

**2,1,10,15** 

*   *SimView*: Hvis vejrdatafil ikke kan findes søges i den mappe BSim er installeret i. Add Face funktion rettet for konkavt rum (ved parallelle flader til den nye flade).

**2,1,10,2** 

*   *tsbi5*: Forbedret beregning af langbølget stråling (ny og bedre algoritme til beregning af vinkelstrålingstal).

**2,1,9,27** 

*   *tsbi5*: Kappa-modellen: tilføjet TzReturn = udsugningstemperatur, Ti = lufttemperatur i TopHeight over gulv.

**2,1,9,21** 

*   *SimView*: Hvis en models database ikke kan findes søges den i mappen, modellen findes i. Hvis den findes i denne mappe anvendes denne database.

**2,1,9,15** 

*   *Bv98Dis.dll*: Beregning af orientering og hældning rettet.

**2,1,9,13** 

*   *tsbi5*: Rettet beregning af parametrene AdjacSun, samt NetSun og GrossSun for windoors.

**2,1,9,7** 

*   *SimLight*: Ændret valg af præcision, beregning af bidrag fra åbninger og forbedret grafik.

**2,1,9,6** 

*   *SimLight*: Rettet beregning af interreflekteret bidrag.

**2,1,8,31** 

*   *SimView*: Insert ThermalZone, Insert Defaults og Site flyttet fra Building Property til valg i popmenu ved højreklik på bygning i træet. Add Windoor (Opening) udvidet med mulighed for også at oprette et antal Windoors i y-retningen.

**2,1,8,27** 

*   *tsbi5*: Reflektionsfaktor for solstråling ReflSolar på Site blev ikke brugt, men var konstant 0,1.

**2,1,8,13** 

*   *tsbi5*: Forbedret kappa-model. VAV-regulering rettet.

**2,1,8,10** 

*   *Model*: Negativ mixing Air Flow gav fejl i tsbi5.

**2,1,8,8** 

*   *SimView*: Referencepunkt for beregning af sollysfaktorer gemmes for rummet.

*   *SimLight*: Rettet fejl når modellen indeholder sidefinner/overhang.

**2,1,8,7** 

*   *SimView*: Forbedret funktion for at finde flade ved ctrl+klik på kant.

*   *SimView* | : Tilføjet funktion til at fjerne overflødige flader.

**2,1,8,6** 

*   *SimLight*: Rettet beregning af interreflekteret bidrag ved graf. Nulstiller sollysfaktorer i andre rum i den termiske zone (efter prompt).

**2,1,8,5** 

*   *SimView*: Fejl rettet ved sletning af vertex (træk en vertex til en anden i samme edge).

**2,1,8,1** 

*   *SimView*: I Help | BSim2000 on the Web menuen er tilføjet Check for new update.

**2,1,7,26** 

*   *tsbi5*: Rettet beregning af NetSun for vinduer, samt varmebalance sum != 0 i nogle tilfælde ved XSun og longwave rad. Beregnet overgangsmodstand ved langbølget stråling max. 0,3. Nye vejrdata Danmark.dry med skydække hele døgnet og vindretning.

**2,1,7,25** 

*   *tsbi5*: Fejl i solafskærmning ved brug af XSun rettet. Kunne give negativt solindfald.

**2,1,7,23**

*   *SimView*: Forbedret funktion for sletning af flader og kanter.

**2,1,7,20** 

*   *SimView*: Rettet beregning af dimensionerende varmetab (Design Heat Loss) - bidrag fra WinDoors blev medregnet 2 gange - og nu bruges udvendige arealer i beregningen.

*   *Bv98dis.dll*: Udvendige arealer overføres til Bv98.

**2,1,7,14**

*   *tsbi5*: Simulerings faneblad: tilføjet Check-knap.

*   *tsbi5*: Fugttransport: automatisk beregning af lagdeling i konstruktioner.

**2,1,7,11** 

*   *tsbi5*: Ny option: Longwave Rad. to Sky. SkyTmp (himmel temperatur) tilføjet resultatloggen.

*   *Model*: Site tilføjet emissivitet for langbølget strålingsudveksling med himlen.

**2,1,6,26** 

*   *tsbi5*: Loggen kan nu også gemmes fra simulerings fanebladet.

*   *SimView*: Bevarer vinduernes placering og scroll-position efter aktivering af XSun eller tsbi5.

**2,1,6,13** 

*   *tsbi5*: Rettet fejl: En konstruktion med en lagtykkelse = 0 kunne i visse tilfælde få programmet til at gå ned.

**2,1,6,8** 

*   *XSun*: Tilføjet periode for video-optagelser.

**2,1,6,2** 

*   *SimView*: "Add Room" funktionen er tilføjet "Copy of whole Storey" funktionalitet.

*   *XSun*: Implementeret video-optagelser af sol/skygger.

*   *tsbi5*. Implementeret nye kurvetyper: Cumulated curves, pct/hours above.

**2,1,5,9** 

*   *Bv98*: Ny version 2 (2,1,5,9). Rettet som følge af tillæg 2 til BR95, tillæg 1 til BR-S98 og tillæg til DS418.

**2,1,5,4** 

*   *tsbi5*: Check for areal af åbninger+WinDoors < fladeareal (min. 0,01 m2 tilbage).

**2,1,4,25** 

*   *tsbi5*: Automatisk generering af konstruktioners lagdeling for fugtmodel.

**2,1,4,24** 

*   *tsbi5*: Rettet fejl i ventilation/VAVCtrl, som bevirkede at varmebalancen ikke gik op.

**2,1,4,20** 

*   *tsbi5*: Rettet fejl ved mixing fra rum udenfor en termisk zone, og beregning af luftskifte, som gemmes i resultatloggen.

**2,1,4,9** 

*   *SimLight*: Grafer nu med logaritmisk skala.

**2,1,3,30** 

*   *tsbi5*: Forbedret XSun og solafskærmning/skodde for indvendige WinDoors.

**2,1,3,22** 

*   *SimView*: Tilføjet mulighed for e-post og tilmelding til den Engelske mailing liste.

**2,1,3,21** 

*   *SimView*: Tilføjet mulighed for at skrive til den engelske mailing liste og tilmelde sig samme.

**2,1,3,21** 

*   *modellen/tsbi5*: Mixing control har fået tilføjet factor.

**2,1,3,20** 

*   *tsbi5*: Rettet tidspunkt hvor skodde trækkes for.

**2,1,3,19** 

*   *tsbi5*: Rettet beregning af langbølget strålingsudveksling. Beregning af overgangsmodstande skal checkes!

**2,1,3,15** 

*   *SimView/DisMdl/SimDB/SimLight/tsbi5* Implementeret F1-hjælp for dialoger..

**2,1,3,14** 

*   *modellen*: Beregning af inner shell, center ved fiktive zoner.

**2,1,3,13** 

*   <span id="red_text"> *BSim2000*: Service pack 5. Kræver fuld installation. </span>

*   *tsbi5*: For flader, som vender mod fiktiv zone, skal der ikke regnes solindfald på side 2 (ydersiden).

**2,1,3,12** 

*   *tsbi5*: Udskrift af varighedskurver, program går ned rettet.

**2,1,3,9** 

*   *SimView*: ThermalZone property tilføjet design heatloss.

**2,1,3,6** 

*   *SimLight*: Ændret layout, trykknap for overførsel af Sf1-Sf3 til rummets Windoor’s.

*   *SimView*: Sf1-Sf3 tilføjet i Windoor property.

**2,1,3,5** 

*   *Trans5.dll*: Xsun algoritme rettet.

**2,1,3,1** 

*   *SimView/tsbi5*: Fiktive zoner, som tilknyttes fra Finish Property, kan kun være ground eller en termisk zone (ikke et rum).

*   *Modellen*: Datamodellen udvidet for Finish (giver step-fejl ved læsning af gamle modeller, som er uden betydning).

**2,1,2,22** 

*   *tsbi5*: Rettet beregning af windoor NetSun, Xsun option.

**2,1,2,21** 

*   *Modellen*: Rettet redigering af døgnprofil.

**2,1,2,20** 

*   *SimView/tsbi5*: Fra Options kan resultatloggen gemmes med File/Save Log As som et nyt filnavn, hvilket gør det lettere at sammenligne ved parametervariation.

**2,1,2,16** 

*   *SimView*: Rettet fejl i Edit/Clean/Geometry og forbedret beregning af Inner Shell.

**2,1,2,15** 

*   *tsbi5*: Ændrede startbetingelser for aktivering af afskærmning/KJJ.

**2,1,2,14** 

*   *SImDxf*: Fejl rettet, som kunne få programmet til at gå ned ved indlæsning af arc-fil.

**2,1,2,13** 

*   *SimView*: Rettet at kopi af database kunne fejle ved File/Copy Project to.

**2,1,2,9** 

*   *SimLight*: Automatisk beregning af sollysfaktorerne sf1, sf2 og sf3 for alle vinduer fra et valgt referencepunkt i et rum.

**2,1,2,7** 

*   *step5.dll*: Udvidet max længde af tekst i stepfil fra 128 til 256 tegn.

**2,1,2,5** 

*   *SimDB*: Rækkefølge af lag ændres ved at trække lagene til anden rækkefølge. MaterialAmount siderne vises kun hvis ny option Show Amount er valgt.

*   *SimLight*: Modellen opdateres altid før beregning.

**2,1,2,2** 

*   *SimDXF*: Lokalisering, så der bruges ’.’ som decimalkomma i dxf-filen.

**2,1,2,1** 

*   *SimView/modellen*: Beregning og visning af gulvareal i RoomProperty.

*   *SimDB*: Rettet placering af ComboBox dropdown list efter move.

*   *SimView*: Move Face, som utilsigtet kunne fjerne en face, er rettet.

**2,1,1,26**

*   *SimLight*: Ny brugerinterface for grafer pga. problemer med 800 * 600 skærmopløsning.

**2,1,1,25** 

*   *SimLight*: Diverse rettelser og ændret brugerinterface.

**2,1,1,24** 

*   *Bv98*: Importerer modeller selv om der er STEP-fejl.

**2,1,1,18** 

*   *Modellen*: Beregning af Inner Shell generaliseret og forbedret.

**2,1,1,17** 

*   *Bv98*: Rettet beregning af bebygget areal og etageareal.

**2,1,1,16** 

*   *SimView/Modellen*: Forbedret Edit/Clean/Geometry med split edge hvis en vertex er indenfor kanten, som har afgørende betydning når inner shell beregnes.

**2,1,1,15** 

*   *SimView/tsbi5*: Valg af konstruktioner som gemmes i loggen.

**2,1,1,14** 

*   *SimLight*: Reflektanser fra Finish, hvis defineret ellers for væg 0,4, loft 0,7, gulv 0,1, glas 0,92. GroundReflektance fra Site, hvis defineret, ellers 0,1.

**2,1,1,11** 

*   *SimVIew*: Ny option: Auto Arrange FaceSide (default=0).

*   *SimLight* forbedret, ref. plan angives ved center af plan og afstand fra center til planens kanter i de to retninger.

**2,1,1,10**

*   *SimView/tsbi5*: Udskrift af varmebalance, rettet timestatistik.

**2,1,1,9** 

*   *SimLight*: Forbedret brugerinterface.

**2,1,1,7** 

*   *SimView*: For indvendige etageadskillelser vender Finish1 (side 1) altid mod det ovenliggende rum (se 2,1,1,11).

**2,1,1,5** 

*   *tsbi5*: Hvis første dag som simuleres ikke findes i vejrdatafilen, gives meddelelse om hvilken periode, der findes i filen.

*   *Setup*: Serial password beskyttes, og ingen grænse for længden af company

**2,1,1,4** 

*   *tsbi5*: Ny algoritme for fugtbalance (den gamle bruges hvis option Moisture Transport ikke er valgt).

**2,0,12,28** 

*   *SimView*: Finish, som vender mod outdoor eller ground bliver altid side2 (se 2,1,1,11).

*   *tsbi5*: Udbygget fugtmodel med moisture content.

**2,0,12,21**

*   *tsbi5*: Startbetingelse for natkøling rettet.

**2,0,12,19** 

*   *modellen*: Nyt object MoistInit til initiering af konstruktioner ved fugtberegning.

*   *SimView*: Ny moisture page i tsbi5 til def. af startbetingelser ved fugtberegning.

**2,0,12,13** 

*   *tsbi5*: Kunne ikke altid finde current building.

**2,0,12,11** 

*   *XSun*: Ny option: View the Building from the Sun.

*   *tsbi5*: I konstruktioner kan indlægges lag uden reference til materialer. Lagets tykkelse indgår i den samlede konstruktions tykkelse. En ekstra modstand er en <u>FUGT</u>-modstand. En ekstra varmemodstand skal angives på et nabolag som har reference til et materiale.

*   *Modellen*: Flyt alle windoor/openings i samme konstruktion (option til Move Windoor).

**2,0,12,8**

*   *tsbi5*: Fejl i ventilation ved input luftmængde = 0 rettet.

**2,0,12,7** 

*   *SimView*: Systemer indsættes sidst i træstrukturen under termisk zoner. Tilføjet File/Save Project As. Gemmer model og den tilhørende database.

**2,0,12,2** 

*   *SimView*: Rettet Move-fejl, som kunne få programmet til at gå ned. Copy of current room: oprettede et rum med en flade, når der ikke kunne findes en flade parallelt med den aktuelle flade, eller med samme areal, omkreds og antal vertices.

**2,0,12,1** 

*   *BV98*: Rettet lokalisering ved import af BSim2000 modeller (decimalpunktum i stedet for komma).

**2,0,11,29** 

*   *tsbi5*: Xsun fordeling af sol gennem indvendige vinduer og åbninger.

**2,0,11,28** 

*   *SimView*: Drag systemer i træstrukturen, bevarer fokus og ingen collapse.

**2,0,11,24** 

*   *Modellen*: Systemlinie i overflade mod Ground.

**2,0,11,22** 

*   *SimView*: Kopi af rum: rettet algoritme for check af overlappende flader.

**2,0,11,20** 

*   *tsbi5*: Ventilation, ExtractTmp rettet til lufttemp under loftet + evt. tilskud fra belysning.

**2,0,11,17** 

*   *SimDB*: SetFocus fra træstrukturen fejlede hvis sfb ikke var af formen xx.xx.xxx.

**2,0,11,16** 

*   *Modellen*: Shading: MaxWind=10 for gamle modeller fra før MaxWind fandtes. Sikrer imod at afskærmingen aldrig kommer i drift i "gamle" modeller.

**2,0,11,15** 

*   *SimView/DisMdl*: *HeatingCtrl* tilføjet sensor for termisk zone.

**2,0,11,14** 

*   *SimView/DisMdl*: Rettet dialoger til belysning og tilhørende reguleringer.

**2,0,11,8**

*   *SimView*: Rettet, at træk (flyt) vertex til vertex kunne påvirke vinduesplacering.

**2,0,11,6** 

*   *SimView, SimDB*: Højreklik i træstrukturen på konstruktions/vinduestype eller finish material åbner databasen og viser egenskaber.

**2,0,11,2** 

*   *SimView, Tsbi5*: Xsun solfordelingen sendte ikke sol til naborum (fejl introduceret i version 19,10,00).

**2,0,10,31** 

*   *SimLight Vinduer*: reflektans fra finish, og lystransmittans fra glasegenskaber.

**2,0,10,30** 

*   *SimView*: RefPoint kan trækkes med musen og ses som hotspot.

**2,0,10,28** 

*   *DisMdl Spac2*: beregning af inner shell (Length(n0 cross n1) < 1 => n0 = n1).

**2,0,10,27** 

*   *Tsbi5*: Rettet fejl i DaylightControl. SimLight Rettet fejl i beregning af Total illumination ved grafik.

**2,0,10,26** 

*   *SimLight*: Copy to Clipboard incl. graf (EMF).

**2,0,10,25** 

*   *SimView*: Tilføjet option: Show STEP Error. (som standard 0). For at der ikke vises fejl i gamle modeller, når datamodellen udvides (med fx MaxWind).

**2,0,10,24** 

*   *Modellen*: Solafskærmning tilføjet MaxWind. Solafskærmningen trækkes kun for når vindhastigheden < MaxWind og solindfald > MaxSun.

**2,0,10,23** 

*   *SimView*: Gemmer backupfil ved "gem" og "gem som", filtype: *.dbk.

**2,0,10,20** 

*   *SimView*: Radiance eksport - bygningsrotation tilføjet.

**2,0,10,19** 

*   *XSun/tsbi5*: Beregning af solindfald, hvor solen sendes ind i naborum, og herfra tilbage til det oprindelige rum giver en uendelig løkke. Dette specielle tilfælde fanges, og solen sendes ikke ind i naborummet, dvs beregningen bliver forkert.

**2,0,9,22** 

*   *tsbi5*: Timeværdier for ventilation indblæsningsluft, temp. og fugt rettet.

**2,0,9,21** 

*   *SimView*: Add Room, rettet ved sammenfaldende flader.

*   *tsbi5*: Begrænsning på max. 14 dages simulering i demoversion.

**2,0,9,20** 

*   *tsbi5*: Standardværdier indført for Finish.

**2,0,9,15** 

*   *SimReg*: Installering af demo, som udløber efter 30 dage. Kan ikke geninstalleres på samme pc efter udløb. Name: Demo, Company: Vilkårlig, Serial: 1234.

**2,0,9,12** 

*   *SimView*: Forbedrede redigeringsfunktioner, spec. Add Room.

**2,0,9,7** 

*   *SimView*: Tsbi5: hvis parameter ikke er valgt når Table-page aktiveres vælges Parameters-page.

**2,0,9,4** 

*   *SimView*: Tilføjet engelsk brugervejledning. Rettet i install scriptet, så man kan vælge dansk og/eller engelsk brugervejledning.

**2,0,9,1** 

*   *SimView*: Tsbi5: ny option ’Dynamic update of Tables’ og ny knap i Tables ’Apply’.

**2,0,8,30** 

*   *SimView*: Fejl rettet i tsbi5/Parameters med parametre fra andre modeller.

**2,0,8,28** 

*   *SimView*: Rettet, at Xsun gik ned når der ingen Site var i modellen.

*   *trans5.dll*: Xpol2d: ændret algoritme for bestemmelse af skæring mellem 2 vektorer.

**2,0,8,25** 

*   *tsbi5*: HUSK: Lighting/GeneralLux > 0 (division med 0).

**2,0,8,23** 

*   *SimView*: CleanModel udbygget: check for dobbelt Vertex og FaceSide, samme Face optræder flere gange i samme Cell, og begge FaceSide’s mod samme Cell.

*   *tsbi5*: Stop simulering under indsvingning rettet.

**2,0,8,22** 

*   *Bv98*: Fejl ved nyt skema for vægge og vinduer rettet.

**2,0,8,21** 

*   *tsbi5*: Konvertering af vejrdata UI.

**2,0,8,18** 

*   *Model*: Udvidet format for vejrdata: Header: id, bredde- og længdegrad, tidszone og Højde over havet.

*   *tsbi5*: Timeværdier tilføjet vindretning. Tsbi3 formatet kan stadig bruges. Fugt: funktion for at sætte partialtryk pb som funktion af højde over havet.

**2,0,8,17** 

*   *SimView*: Balance graf valg af type tilføjet (Bar, Pie 2D og 3D, Doughnut).

*   *SimView*: Ved File/Save As: skift til SimView for at lukke evt. åben log.

**2,0,8,16** 

*   *SimDXF*: Option maxLine udgået.

*   *SimView*: Grafer udvidet med mulighed for at fastsætte og fastholde y-skala.

**2,0,8,15** 

*   *tsbi5*: Tsbi5/Tables: viser parametre fra andre modeller.

**2,0,8,14** 

*   *SimView*: Tsbi5/Parameters: Valg af parametre fra andre modeller. Logfilen skal ligge i samme kartotek som den aktuelle model (for at undgå for lange parameter--navne). Parameternavn fra en fremmed model: model@parameter. Ingen begrænsninger i antal modeller (i princippet).

**2,0,9,10** 

*   *SimView*: Xsun diverse smårettelser og forbedringer.

*   *Model*: Volumen af bygning rettet, og CurvePoints fjernet ved CleanDB (fugt).

**2,0,8,9** 

*   *SimView*: ModelList: check konstruktions lagtykkelse > 0.

*   *SimView*: Fejl, hvis konstruktions lagtykkelse = 0.

*   *Model*: Beregning af nettovolumen for termiske zoner rettet.

**2,0,8,8** 

*   *SimView*: Under tsbi5/simulering disable SimView og Xsun.

*   *SimView*: SimLight kun aktiv fra SimView.

*   *tsbi5*: Filnavn tilføjet ved kopi af skemaer til clipboard.

**2,0,8,7** 

*   *SimView*: ModelList: filnavn og tidspunkt tilføjet, samt RoomTemp dokumenteret.

*   *tsbi5*: Ventilation: korrekt indblæsningstemp. til timelog (før ventilator).

*   *SimView*: STEPfejl ved mixing når luften tages fra et rum er rettet.

**2,0,8,5** 

*   Under tsbi5 simulering fasthold fokus på Simulation Page.

**2,0,7,17** 

*   *SimView*: tsbi5/Options: tilføjet layer thick (maximum lagtykkelse) som angivelse af maksimal tykkelse for underinddeling af materialelag (bruges især ved simulering af fugt i konstruktioner).

**2,0,7,15** 

*   *tsbi5*: Temp/fugt gennem konstruktioner gemmes i timeloggen hvis der er valgt fugtberegning.

*   *SimView*: Træk implementeret for at ændre rækkefølge i tsbi5 parameterliste.

**2,0,7,14** 

*   *SimView*: CleanModel forbedret yderligere.

**2,0,7,13** 

*   *SimView*: CleanModel: funktion som tilføjer manglende flader i rum.

*   *SimView*: Tilføjet i tsbi5/option Moisture Distribution (er kun aktiv hvis databasen indeholder fugtparametre).

**2,0,7,11** 

*   *tsbi5*: Algoritmer for fugttransport gennem konstruktioner implementeret - er under afprøvning og fejlretning.

**2,0,7,8** 

*   *tsbi5*: Filnavne, som indeholder '.', gav før forkert filnavne for logfiler.

**2,0,7,7** 

*   *SimView*: Funktion for check/ret at FaceSides vender mod det rigtige rum tilføjet i Edit/CleanModel.

*   *SimView*: Ved delete ThermalZone gemmes for Undo.

*   *SimView*: Windoor property: disable Override når der ikke er valgt type og skriv NoType (og ikke Impossible geometry).

*   *SimView*: Forbedret delete (Delete current object).

**2,0,7,6** 

*   *tsbi5*: Solindfald gennem åbninger tilføjet.

*   *tsbi5/XSun* solfordeling gennem windoors og åbninger rettet så varmebalancen går op.

*   *tsbi5*: Fordeling gennem windoors og åbninger mellem rum rettet.

**2,0,7,4** 

*   *SimDB*: Redigering af Material under redigering af BuildingElement rettet.

**2,0,7,2** 

*   *SimView*: CleanModel: check og ret flader for Edges som ikke tilhører fladen.

**2,0,6,30**

*   *Model*: Beregning af InnerShell, degenerering af kant med én vertex rettet. (Kunne få programmet til at gå ned).

*   *System*: Ny version af Mfc42.dll og Msvcrt.dll i forbindelse med opdatering af VC++ til service pack 4.

**2,0,6,27** 

*   *tsbi5*: Check for antal tidsstep. Ny advarsel: Spørg bruger om der skal anvendes det anbefalede tidsstep, hvis der er angivet for få tidsstep.

**2,0,6,26** 

*   *Model, DisDB*: MoistMaterial omdefineret til at være en subtype af ConstructionMaterial, dvs hvis der findes fugtdata i databasen tilføjes disse.

**2,0,6,24** 

*   *SimView, Model, tsbi5*: Mixing fra rum udenfor en termisk zone tilføjet. (NB: Kan ikke exporteres til tsbi3). Mixing via et rum, som er analog med den termiske zone der mixes til, kan ikke simuleres (giver fejlmeddelelse før simulering).

**2,0,6,23** 

*   *tsbi5*: Tilføjet fejlmeddelelser når der mangler konstruktioner ved start af simulering.

*   *SimView*: Copy/Paste i træstrukturen bevarer fokus.

**2,0,6,22**

*   *tsbi5*: Export til tsbi3: rettet døgnprofil.

*   *tsbi5*: Mixing rettet, utilsigtet nulstilling af volIn og volOut, skal ske samlet for alle zoner før regulering, da volOut blever registreret i zonen hvor luften kommer fra af zonen som modtager luften.

**2,0,6,21** 

*   *SimView*: Brugergrænsefladen for Ventilations- og belysningssystemer blevet forbedret.

*   *tsbi5*: Rettet en fejl ved skyggeberegning, som kunne få programmet til at gå ned.

**2,0,6,20** 

*   *SimView*: Ikke refererede Layers fjernes med CleanModel. DaylightCtrl tilføjet til ModelList.

*   *Model*: Ventilation og Lighting UI, valg og ændring af regulering rettet i dialog.

**2,0,4,27 - 2,0,6,14** 

*   *SimView*: Er blevet optimeret og der er foretaget mindre rettelser specielt i redigeringsfunktionerne.

*   *tsbi5*: Skodde og solafskærmning blevet kontrolleret og fejlrettet.

*   *SimDxf*: er blevet optimeret, og der er indført kontrol af, at modeller der indholder rum, som ikke er fuldt defineret, kan gemmes som en *.dis fil. Når en model gemmes som en *.arc fil gemmes 'nodes' også, hvilket ikke var tilfældet tidligere.

*   *SimDB*: Databasemodulet er blevet udbygget til at understøtte fugtegenskaber for byggematerialer. Ændringen er ikke synlig ved brug med de eksisterende databaser. Fugtmodellen er under opbygning og vil først blive tilgængelig senere.