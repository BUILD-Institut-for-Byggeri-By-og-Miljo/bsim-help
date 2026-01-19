<link rel="stylesheet" href="../style.css">

# Revisioner af BSim
<div id="da">

*Informationer på denne side er primært ment som en dokumentation af de ændringer som er sket med programmet for udviklerne, men kan også bruges til bedre at forstå forskelle i resultatet opnået med forskellige versioner af programmet.*

 

**7,13,9,24** 

*   SimView: File/Browse, rettet fejl i Win 7.

*   SimView: Rettet About: bsim-support@sbi.aau.dk

**7,13,9,24**

*   Modellen: Dimensionerende varmetab: Fjernet 15 % tillæg for tab gennem tag.

**7,12,9,4** 

*   Version 7. Skiftet til Visual Studio 2010 (version 7, xx, xx, xx).

**6,12,1,16** 

*   Tsbi5: FloorHeat: Tilføjet parameteren WaterMassFlowSupply.

**6,11,12,7**

*   Tsbi5: PerezModel::DifSky, kun positive værdier returneres.

**6,11,11,7**

*   SimView: ModelDoc: Rettet beregning af orientering.

**6,11,5,3**

*   SimView: Rettet fejl ved eksport til Be10.

**6,11,4,12**

*   Tsbi5: Tilføjet link til PackCalc.

**6,11,1,14** 

*   Tsbi5 Ny option: Reg. System Time Step. Valg om systemer reguleres ved start af time, eller på tidsstep niveau.

**6,10,11,18**

*   SimLight Hvis referencepunkt ikke ligger indenfor 'inner shell' forsøges med 'outer shell', dvs systemlinierne.

**6,10,10,20**

*   tsbi5 Valg af aktive systemer flyttet fra starten af en time til hvert tidsstep.

**6,10,9,24**

*   tsbi5 Enkeltzone natvent: rettet beregningen i Combined tilfældet.

**6,10,7,5** 

*   tsbi5 Rettelse 4,6,2,13 qHeating mm fjernet.

**6,10,5,27** 

*   DisMdl FloorHeatCtrl: Vælger nu mode for den aktive komponent.

**6,10,4,13**

*   XSun, tsbi5: Rettet algoritmen *Behind* til bestemmelse af om en flade skygger for solen.

**6,10,4,9** 

*   tsbi5 Solafskærmning: rettet *ActivateShading.*

**6,10,3,15** 

*   tsbi5 Gulvvarme: Check at FloorHeatCtrl ikke er oprettet i den gamle version af gulvvarmemodellen.

**6,10,1,26** 

*   tsbi5 Modellens navn er max. 63 tegn ved parametre fra eksterne modeller.

**6,9,12,1** 

*   tsbi5 Solafskærmning, SolarCtrl: Hvis *Shading Coeff* er opgivet anvendes denne, ellers benyttes værdien fra *SolarShading.*

**6,9,11,30** 

*   tsbi5 Naturlig ventilation: Rettet at værdien *CntFraction* for åbninger var udefineret.

**6,9,11,18** 

*   SimView ModelDoc: Tilføjet construction gross area - opening/windor arealer.   
bullet Tilføjet View/ConstDoc: gem tekstfil med oversigt over bygningens konstruktioner.

**6,9,10,30** 

*   XSun: Flader uden vinduer/åbninger blev ikke vist med eksterne skygger (ændret).

**6,9,10,12** 

*   tsbi5 SunAz: rettet til nord = 0 (solens az + 180).

*   Vejrdata ASHRAE: rettelse for nye parametre.

*   Tilføjet CO<sub>2</sub> regulering i VAVCtrl.

**6,9,9,23** 

*   tsbi5 ExtIllum nulstilles når solen ikke er over horisonten.

**6,9,9,3** 

*   SimLight: Tilføjet check at WinDoors er firkantede (går ned med trekantede).

**6,9,8,20** 

*   tsbi5 Enkeltzone natvent: Rettet CO<sub>2</sub> regulering.

**6,9,7,17** 

*   tsbi5 Enkeltzone natvent: Rettet regulering.

**6,9,7,16** 

*   SimView ModelDoc: rettet beregning af orientering for WinDoors.

**6,9,7,9** 

*   DisDb5, DisMdl: Tilføjet tabel for solenergitransmittans (BSim2009.mdb).

**6,9,6,18** 

*   BSimFht: Ny version af gulvvarme, Max.

**6,9,5,11** 

*   tsbi5: PCM tilføjet med moisture/latent heat

**6,9,3,23** 

*   StepXml: Hvis dis-model ikke kan læses forsøges læsning som xml.

**6,9,3,17** 

*   tsbi5 Moist, Latent Heat, LossCoeff: check for div med 0.

**6,9,3,11** 

*   DisMdl, tsbi5: Tilføjet Solar Limit på LightCtrl, og SwitchOff på DaylightCtrl.

**6,9,3,11** 

*   DisDb5: Graf for Pcm på PcmPage (JRO).

**6,9,2,17** 

*   tsbi5 Vent. ReturnAirCtrl: nulstilling af 'return fraction'.

**6,9,2,13** 

*   tsbi5, Langbølget stråling: varialbelt overgangstal kun for vægge (ikke vinduer).

*   tsbi5: Rettet beregning af glastemperatur.

**6,9,2,12**

*   tsbi5 ZoneTempCtrl: tilføjet styring efter master zone.

**6,9,2,9** 

*   SimView: Export til be06, rettet vægarealer (reduceres med vinduesarealer).

**6,9,1,21** 

*   DisView, DisMdl: Redigeringsfunktioner tilpasset Windows Vista.

**6,9,1,9** 

*   DisMdl: Tilføjet oprydning for PcmMaterial (ConstructionMaterialDestruct).

**6,9,1,7** 

*   DisView: Rettet Model Doc.

**6,8,12,17** 

*   tsbi5 Simulation/Trace: tilføjet udskrift af konstruktioners opdeling i lag.

**6,8,12,10** 

*   tsbi5 XSun: recess for windoor implementeret. Recess=0 (standardværdi) ruden er placeret inderst i åbningen. Recess > 0 måles fra ydersiden (side 2).

**6,8,12,3** 

*   SimView, tsbi5: Under Room Properties er tilføjet mulighed for at vælge bygningens site som Thermal Properties, dvs udeklima fra vejrdata.

**6,8,11,20** 

*   tsbi5 XSun/SunRad: rettet pointer til ukendt zone.

**6,8,11,10** 

*   tsbi5: Simulering af pcm materialer.

**6,8,10,8** 

*   dismdl, tsbi5 NightCoolCtrl: sensor zone, fjernet valg af outdoor, ændret til current zone.

**6,8,10,7** 

*   tsbi5 NightCoolCtrl: check at sensor zone refererer til tz i current building.

**6,8,10,3** 

*   tsbi5: Alle simuleringsoptions gemmes i modellen, incl. simuleringsperiode, tilføjet Save Options i Options fanebladet.

**6,8,10,1** 

*   tsbi5 NightCoolCtrl: rettet kriterium for aktivering (vp.active ved skift mellem reguleringsformer).

**6,8,9,24** 

*   SimView: Check af MDAC rettet for version > 2.

**6,8,9,23** 

*   DisMdl: Tilføjet PcmMaterial.

**6,8,9,22** 

*   DisDb5: Tilføjet PCM materialer (BSim2008.mdb)

**6,8,9,8** 

*   tsbi5: Rettet regulering i BlindCtrl.

**6,8,9,3** 

*   tsbi5: Advarsel ved indsvingning i simulering, temp. ikke stabiliseret, mulighed for at fortsætte indsvingningen.

**6,8,8,14** 

*   tsbi5 BlindCtrl: udefineret reference til vejrdata (z0->rfy).

**6,8,8,5** 

*   tsbi5: WinDoor parameter NetSun korrigeret for solarLost (fra termisk zone).

**6,8,6,16** 

*   tsbi5 SimFace: CalcRsurf, pow(x, y) fejler når x -> 0.

**6,8,6,4** 

*   SimView File/Mail Project To: check for xml, og databasen omdøbes fra .mdb til .disdb, så den ikke slettes i mailen.

**6,8,6,4** 

*   tsbi5: Rettet OnOff regulering DaylightCtrl for belysning.

**6,8,6,3** 

*   tsbi5: Rettet SolarCtrl for solafskærmning så den er bagud-kombatibel.

**6,8,5,28** 

*   tsbi5: Rettet XSun solfordeling (cos indfaldsvinkel begrænset til -1 : 1).

**6,8,5,23** 

*   tsbi5: Gemning af tekst filer fra HeatBalance og Tables (Alt+X).

**6,8,5,13** 

*   SimView: Bounding box kan gøres mindre end den automatisk beregnede.

**6,8,5,8** 

*   tsbi5 Fugtmodel: rettet automatisk lagdelig ved accept af foreslået tidsstep.

**6,8,3,14** 

*   tsbi5: TryConvert: rettet beregning af solhøjde ved konvertering af verjdata.

**6,8,1,23** 

*   tsbi5: Tilføjet ny regulering af solafskærmning: SensorCtrl og BlindCtrl.

**6,7,12,6** 

*   Modellen: Tilføjet BlindCtrl for solafskærmning.

**6,7,12,4** 

*   Modellen: Tilføjet HeatPump system.

**6,7,11,30** 

*   tsbi5: Vinkelfaktorer: beregnes for inner shell. Hvis det mislykkes, beregnes for systemlinier, og der udskrives advarsel.

**6,7,10,22** 

*   DisView: Tilføjet eksport til Be06.

**6,7,8,9** 

*   Modellen: Nyt system: FloorHeating, vandbaseret gulvvarme system.

**6,7,6,26** 

*   tsbi5: HeatCoolCtrl og FloorHeatCtrl: check at Te Min != Design Temp.

**6,7,2,26** 

*   SimLight: Rettet beregning af Sf1.

**6,7,2,26** 

*   tsbi5: Tilføjet TiMean til zone-loggen.

**6,7,1,25** 

*  <span id="red_text"> BSim: Version 6. Skift til Visual Studio 2005 (version 6,x,xx,xx). Kræver installation af komplet opdatering. </span>

**4,7,1,18** 

*   tsbi5: Termisk zone: Tilføjet Ti fraction, andel af Ti og tMrt for beregning af tOp. Ny input parameter.

**4,7,1,4**

*   tsbi5: Model for filtration af konstruktioner mod det fri.

*   tsbi5: Ny option for valg for skift af vejrdata ved simulering over flere år.

**4,7,1,3** 

*   tsbi5 Fugtmodel: Forbedret beregning af latent heat.

**4,6,11,24** 

*   SimView: Hvis vejrdata ikke kan findes, søges der i undermappen Climate.

**4,6,8,24** 

*   XSun: Rettet algoritme til bestemmelse af om en ekstern flade er en mulig skyggegiver.

**4,6,7,12** 

*   SimView, DisDb5, Modellen: Fejl ved udefineret materiale i fugtegenskaber i databasen (et materiale findes i thermal-tabellen men ikke i moisture-tabellen). Se [begrænsninger](https://help.bsim.dk/support/kb/articles/rQV5b8m6/begransninger).

**4,6,6,23** 

*   SimView: Rettet dimensionerende varmetab mod fiktiv zone.

**4,6,4,24** 

*   tsbi5: På flade: DirRad, SkyRad og GroundRad, enhed ændret til W/m2, qRad2 nulstilles når solindfaldet bliver 0.

**4,6,3,28** 

*   tsbi5: Beregning af vinkelstrålingsforhold rettet ved langbølget stråling.

**4,6,2,13** 

*   tsbi5: ZoneTempCtrl: ændret regulering når top mellem min- og max inletqHeating, qCooling manglede bidrag for sidste tidsstep (rettet midlertidigt).

**4,5,12,1** 

*   tsbi5: Rettet at solafskærmninger i rum udenfor en termisk zone fik tsbi5 til at gå ned med xsun slået til.

**4,5,11,24**

*   tsbi5: Ventilation + ZoneTempCtrl: rettet fejl i genopvarmning og -køling for befugtning.

*   tsbi5: Standard overgangstal rettet til værdier fra DS418.

*   tsbi5: Standardværdier for dimensionerende varmetab rettet til værdier fra DS418

*   tsbi5: Vægge mod fiktive zoner medregnes ikke længere i det dimensionerende varmetab.

*   Bv98: Vægge mod fiktive zoner overføres nu ikke til Bv98.

**4,5,10,12** 

*   tsbi5: Glazing temp option: hvis glasareal = 0 division med 0. Rettet så den gamle glasmodel bruges når glasareal = 0.

**4,5,7,7** 

*   tsbi5: Natvent: Reguleringsfaktor regulerer "max airchange". CO<sub>2</sub> tilfælde starter komponenterne til opvarmning.

**4,5,6,21** 

*   STEP: Rettet at filnavn ikke måtte indeholde ' (apostrof).

**4,5,5,30** 

*   tsbi5: Ventilation: rettet beregning af ExtractHum.

**4,5,5,18** 

*   tsbi5: NightCoolCtrl: Fans kan til- og fravælges som aktive komponenter.

**4,5,5,13** 

*   SimView: Link til F1-hjælp for opening property rettet.

*   tsbi5: Kondensations risiko tilføjet til konstruktioner, ændret til indikator for hvor tæt overfladen er på kondens i et interval på 5 °C over dugpunktet. Gælder også for WinDoors.

*   tsbi5: Check for tilstedeværelse af sollysfaktorer indført for dagslysstyring.

**4,5,5,3** 

*   SimView: Hvis hjælpeteksten var åben når BSim blev afsluttet blev processen (DisView) ikke afsluttet, men kørte videre i baggrunden og brugte processortid. Fejlen er rettet.

**4,5,5,3** 

*   SimView: Ved højre-klik i tsbi5-grafik vises kun relevante valgmuligheder.

**4,5,5,2** 

*   tsbi5: Forbedret beregning af vinkelstrålingstal ved langbølget stråling.

*   SimView: Visning af grafer på HeatCoolCtrl for opvarmning og køling rettet.

**4,5,4,7** 

*   tsbi5: Tilføjet navn for termiske zoner på grafer under simuleringen.

*   SimView: Højreklik i træet på udefineret konstruktion, WinDoor mm. åbner databasen.

**4,5,4,1** 

*   tsbi5: Natvent: check at vejrdata indeholder vindhastighed.

**4,5,3,31** 

*   SimView: Site property: Tilføjet højde over havet (elevation).

**4,5,3,29** 

*   SimView: Site property: tilføjet oplysning om vejrdata, wind speed og pressure.

**4,5,3,18** 

*   tsbi5: Udvidet vejrdata med vindhastighed (m/s) og barometertryk (Pa).

*   tsbi5: Barometertryk tilføjet som parameter AtmPress for udeklima.

**4,5,3,17** 

*   modellen: VAVctrl: VAV max factor skal være >= 1, check indlagt.

**4,5,3,1** 

*   tsbi5: Ctrl-C (kopier) virker i Heat balance og Tables fanebladene.

**4,5,2,28** 

*   SimDxf: Tilføjet XP style brugergrænseflade.

**4,5,2,25** 

*   SimView: Tilføjet XP style brugergrænseflade.

**4,5,2,23** 

*   DisMdl: Heating/Cooling/Venting/Ventilation: valg af Air Source/ Sensor Zone kun fra termiske zoner som tilhører den aktuelle bygning.

**4,5,2,16** 

*   tsbi5: Regulering af ZoneTempCtrl rettet tilbage til før version 4,4,12,4.

**4,5,2,2** 

*   tsbi5: Efter minimering af graf placeres knapper korrekt.

**4,4,12,21**

*   tsbi5: Valg af placering af legend (titler) for grafer tilføjet under Yscale.

**4,4,12,20** 

*   tsbi5: Gulvvarme tilladt i demo-versioner.

*   tsbi5: Kalender for valg af datoer tilføjet ugenummer.

**4,4,12,9** 

*   tsbi5: XSun: aktivering af skodde/solafskærmning kun når der var sol, rettet.

**4,4,12,4** 

*   SimView: XSun: viser mørk baggrund når solen er gået ned.

*   SimView: ZoneTempCtrl: Rettet køling til min. indblæsningstemperatur også under køle-setpunkt.

**4,4,11,10** 

*   BSim: Officielt skiftet navn til BSim efterfulgt af primært versionsnummer (4).

**3,4,10,18** 

*   tsbi5: Kappa-modellen: ved beregning af indblæsningstemperaturen indgår infiltration ikke længere.

**3,4,10,18** 

*   tsbi5: MoistureLoad: tilføjet model for Swimming Bath.

**3,4,8,6** 

*   tsbi5: Natvent: Åbningsgrad/vindhastighed tilføjet på WinDoors.

**3,4,8,3** 

*   tsbi5: Der kan højst gemmes 32767 parametre pr. time i en resultatlog! Grænsen kan overskrides i forbindelse med uhensigtsmæssig valg af resultater i store modeller med fugtsimulering. Indført check så simulering afbrydes hvis grænsen overskrides.

**3,4,7,28** 

*   SimView: Clean model og geometry: rettet fejl for referencer til Ground.

**3,4,7,22** 

*   SimView: Ny option: Save "undo" filer på lokal pc. Undo/redo filer gemmes på lokal pc i stien defineret ved TMP/TEMP variablen (typisk C:\TEMP). Hurtigere når BSim køres fra netværksdrev. Ellers anvendes samme sti som den aktuelle model.

*   SimView: "Redo" implementeret, et niveau, dvs. seneste "undo" kan fortrydes.

**3,4,6,22** 

*   tsbi5/xsun: Fordeling af diffus stråling til bagvedliggende zoner.

**3,4,6,11** 

*   tsbi5: Natvent: Ved udefineret vindretning (990°) sættes cp = 0.

**3,4,4,20** 

*   tsbi5: Simulering kan gå galt hvis der accepteres et større antal tidsstep som anbefalet af tsbi5 (fx 13 som ikke giver et lige antal step/halvtime).

**3,4,3,16** 

*   tsbi5: Konv. Af vejrdata: longitude interval rettet fra –90 -+90 til –180 – +180.

**3,4,3,10** 

*   DisMdl: Solafskærmning: valg af placering blokkeret (bruges ikke endnu).

**3,4,3,9** 

*   SimView: About support: licenser BS4xxx sendes til support@alware.de.

**3,4,2,17** 

*   tsbi5: Natkøling: tilføjet mulighed for placering af føler i konstruktion.

**3,4,1,28** 

*   tsbi5: Natvent: check af åbningers placering for Combined Two Levels.

**3,4,1,19** 

*   tsbi5: Parameters/Open New Model: problem med ÆØÅ på netværksdrev rettet.

**3,4,1,13** 

*   tsbi5: Fugtbalance justeret.

**3,4,1,9** 

*   SimView: 2000-brugere: spærret for DirectX export, ny glasmodel og gulvvarme.

**3,4,1,8** 

*   Modellen: Rettet beregning af natvent cond.

**3,3,12,17** 

*   tsbi5: Mixing: Udetemperatur kriteriet har højest prioritet.

**3,3,11,27** 

*   Modellen: Check for entydige navne for systemer.

**3,3,11,26** 

*   SimDB: Ved ny/kopi tildeles automatisk næste ledige sfb-nummer.

**3,3,11,24** 

*   SimView: Ny option: Auto check for update.

**3,3,11,14** 

*   Tsbi5: Langbølget stråling: stop hvis vinkelstrålingstal < 0 (kan skyldes windoor går ind i nabokonstruktioner).

**3,3,11,13** 

*   Tsbi5: TzInlet beregnes også for kappa = 1.0.

**3,3,10,30** 

*   Tsbi5: Geometriske kuldebroer.

**3,3,10,22** 

*   Tsbi5: Fordeling af direkte solindfald på flader, kun XSun uden langbølget stråling.

**3,3,10,20** 

*   Modellen: Venting tilføjet MaxWind (kun for natvent), aktiv når MaxWind > 0.

**3,3,10,4** 

*   Tsbi5: Rettet fugtlast bidraget i fugtmodellen.

**3,3,8,23** 

*   SimView: Tilføjet File/Browse for visuelt at finde model.

**3,3,7,31** 

*   tsbi5: Fejl hvis konstruktions lagtykkelse = 0 rettet.

**3,3,7,28** 

*   tsbi5: Natvent tilføjet logparametre VentSpeed og VentCp for Windoors.

**3,3,7,18** 

*   SimView/XSun: Resultatlog for SimPv.

**3,3,6,19** 

*   SimView: Ved indsætning af flere Windoor’s genereres forskellige navne.

**3,3,6,6** 

*   Modellen: Venting tilføjet Sensor Zone.

**3,3,6,5** 

*   SimView: Termiske zoner kan trækkes i træet (med venstre knap på musen trykket ned) for ændret simuleringsrækkefølgen (oppefra og ned).

**3,3,5,13** 

*   SimDB: Database tabel glazing_material_ex udvidet med refl2 og absorp2.

*   tsbi5: Beregning af glastemp. Rettet tilsvarende.

**3,3,5,2** 

*   SimView: Finish property tilføjet valg af Wind Exposure (for natvent). Kan kun vælges for den finish som vender mod det fri.

**3,3,4,10** 

*   SimView: Dynamisk placering af Default dialogen.

*   tsbi5: Langbølget stråling, direkte solindfald fordeles til alle flader.

**3,3,3,20** 

*   SimDxf: Rettet mindre fejl ved indlæsning af arc-fil.

**3,3,3,14** 

*   tsbi5: Rettet fejl ved registrering af luftstrømme.

**3,3,3,12** 

*   SimView: Insert Windoor: i dialog tilføjet dt0, minimum afstand fra kant til konstruktion.

**3,3,3,7** 

*   SimView: Valg af Edge: hvis en flade, windoor, åbning eller pv er valgt søges kanten kun i disse.

**3,3,3,4** 

*   SimView: Split Edge funktion: hvis en vertex i kanten er valgt skal der angives en længde fra den valgte vertex til den nye vertex.

*   SimView: Sletning af vertex som deler en lige kant kan ske med delete funktionen.

**3,3,2,24** 

*   tsbi5: Under tables kan en logfil ikke åbnes flere gange.

**3,3,2,19** 

*   SimLight: Tilføjet valg mellem to forskellige formfactor beregningsmåder (interreflekteret bidrag).

**3,3,2,14** 

*   tsbi5: Luftmængder i loggen (mixing, infiltration, venting og ventilation) ændret til middelværdi for timen.

**3,3,2,13** 

*   Modellen: Beregning af inner shell: hvis vinkel mellem fladenormaler < 5 ° er fladerne parallelle.

**3,3,2,10** 

*   tsbi5: Tables/graf/autoscale: valg mellem to forskellige metoder.

**3,3,2,9** 

*   tsbi5: NightCoolCtrl: rettet beregning af energiforbrug (var forkert hvis aktiv første halvtime og ikke i sidste halvtime).

**3,3,2,6** 

*   tsbi5: Ny parameter for WinDoor: VentDPi. Trykdifferens (Pa), kun NatVent.

**3,3,1,31** 

*   tsbi5: Ny parameter for termisk zone: VentPi. Det interne tryk (Pa), som kun beregnes i forbindelse med naturlig ventilation.

**3,3,1,29** 

*   Modellen/tsbi5: Valg af natvent model i venting dialog, og ikke længere i tsbi5/options.

**3,3,1,28** 

*   tsbi5: Ny parameter for termisk zone: VentFrac. Middel andel af max venting.

**3,3,1,22** 

*   tsbi5: VAVCtrl tilføjet MaxInletTemp.

**3,3,1,21** 

*   SimView: Demo tillader brug af alle tillægsmoduler (fugt, pv, natvent).

**3,3,1,20** 

*   tsbi5: Forbedret autoscale i grafik.

**3,3,1,14** 

*   SimView: Vejrdata søges (1) absolut sti (2) projekt folder (3) BSim folder.

**3,3,1,9** 

*   tsbi5: Ændret beregning af ny glastemp.

**3,2,12,18** 

*   tsbi5: Varmebalance tilføjet Co2, PAQ og FloorHeat.

**3,2,12,12** 

*   SimView: Understøttelse af nyt format for f1-hjælp.

**3,2,12,10** 

*   SimView: Windoor/Opening property dialog tilføjet data for naturlig ventilation.

**3,2,12,5** 

*   tsbi5: Rettet negativ NetSun med Xsun.

**3,2,12,3** 

*   SimView: Use current model flyttet til hver enkelt applikation.

**3,2,11,21** 

*   SimLight: Rettet fejl ved beregning af interreflekteret bidrag (mulighed for division med 0).

*   SimView: Ny option: Recent Files (mellem 4 og 16).

*   SimView: File open filter opdelt for valg af dis og backup filer.

**3,2,11,2** 

*   DisMdl/tsbi5: Check at tidsangivelse og døgnprofil er aktive.

**3,2,10,29** 

*   tsbi5: Tidsplaner defineret med ugenumre blev mandag forskudt en uge.

*   XSun: Ved skift til SimView/tsbi5 under capture blev fokus fastholdt i forgrunden.

**3,2,10,24** 

*   tsbi5: Venting tilføjet CO<sub>2</sub>-styring.

**3,2,10,21** 

*   SimView: Systemer kan slettes fra ThermalZone/Windoor property ved at fjerne afkrydsning.

**3,2,10,18** 

*   SimView: ThermalZone property tilføjet floor area.

**3,2,10,17** 

*   SimView: Site tilføjet valg af terræntype.

**3,2,10,8** 

*   tsbi5: Beregning af CO<sub>2</sub> niveau.

*   SimView: Scroll når et element i træet trækkes til top eller bund.

**3,2,10,3** 

*   SimView: Tilføjet kopi af parameterliste (tsbi5/Parameters).

*   SimView: Ny XSun-option: Show Inner Shell.

**3,2,10,2** 

*   SimView: Beregning af CO<sub>2</sub> koncentration for termiske zoner.

*   DisMdl: Tilføjet CO<sub>2</sub> koncentration for udeluften på Site.

**3,2,9,25** 

*   tsbi5: Tilføjet kondens risiko for Windoors.

**3,2,9,24** 

*   SimView: Rettet scroll i grafiken.

**3,2,9,23** 

*   DisMdl: Tidsangivelser, døgnprofiler og people hentet fra en profil er beskyttet mod rettelser.

**3,2,9,6** 

*   tsbi5: Tilføjet PAQ til termiske zoner (Perceived indoor air quality).

*   tsbi5: Temperatur på begge sider af glas.

**3,2,8,16** 

*   tsbi5: Indført tarif-system for energiforbrug.

**3,2,8,15** 

*   tsbi5: Rettet fejl ved regulering af skodde/solafskærmning med XSun valgt, og når er termisk zone indeholder mere end et rum.

**3,2,8,14** 

*   SimView: Forbedret funktion til lokalisering af flade ved Ctrl+klik på kant.

**3,2,8,9** 

*   SimView: Genvej for property: Alt+Enter (svarer til højreklik i træet).

**3,2,8,2** 

*   SimView: Check for MDAC installeret og version mindst 2.50.

*   Setup02: Den engelske version af Bv98 (Hd98) tilføjet.

*   Update02: Engelsk brugervejledning mangler fortsat.

**3,2,8,1** 

*   SimView: Ny option: ’Auto Update View’ for automatisk opdatering af modellen når der trækkes et nyt element fra databasen til træet (som standard slået fra).

**3,2,7,31** 

*   tsbi5: F1-hjælp i skemaer: hjælpen dirigeres til dialogen/fanebladet som indeholder skemaet.

*   tsbi5: Horisontal scroll-bar for vejrdatakonverterings-dialogen.

*   tsbi5: For åbninger tilføjet initiering af sidefinner.

**3,2,7,25** 

*   SimView/tsbi5: Tilføjet døgnprofil til Mixing.

*   SimView/tsbi5: Dynamisk grafik i System/Controls.

*   SimView/tsbi5: Rettet GrossSun/NetSun for WinDoors.

*  <span id="red_text"> **BSim2002: Version 3.** </span>

[Tidligere revisioner i BSim2000](https://help.bsim.dk/support/kb/articles/vWyPBM9b/tidligere-revisioner-i-bsim2000)

 