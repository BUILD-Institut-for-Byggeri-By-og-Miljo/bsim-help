<link rel="stylesheet" href="../style.css">

# Parametre i resultatloggen

De værdier som vises i resultatloggen er et øjebliksbillede af forholdene i det sidste tidsskridt (ved timens slutning) i hver time, med mindre andet er angivet for den enkelte parameter.

<br>

Middelværdier for timen er markeret med et "M" efter parameternavnet, fx *AdjacSun<sup>M </sup>*.

*   [Udeklima - *Outdoors*]()

*   [Termiske Zoner]()

    *   [Indeklima - *Indoor Climate*]()

    *   [Luftbalance - *Air Balance*]()

    *   [Varmebalance - *Energy balance*]()

    *   [Fugtbalance - *Moisture Balance*]()

    *   [Ventilationsanlæg - *Ventilation components*]()

    *   [Luft - *Ventilation air*]()

    *   [Tarif-fordeling - Tariff Distribution]()

*   [Konstruktioner - *Constructions*]()

*   [WinDoor]()

<br>

### Parametre i gruppen *Outdoors*

Inddata fra klimafil og beregnet position af solen.

Disse parametre er **kun** tilgængelige i resultatloggen hvis der er sat "hak" ud for *Weather* på [*Options*-fanebladet]() for simuleringen.

| Parameter  | Beskrivelse |
|-----------|-------------|
| *AtmPres* | Lufttrykket, Pascal. Hvis lufttrykket er konstant 0 kan der stadig simuleres naturlig ventilation med multizone-modellen, men med reduceret præcision. |
| *CldCover* | Skydække, ottendedele (8 = helt overskyet, 0 = skyfrit) |
| *DifRad* | Diffus solstråling på vandret, kW/m² |
| *ExtTmp* | Temperaturen af udeluften (tør), °C |
| *HumRatio* | Absolut fugtindhold i udeluften, kg/kg tør luft |
| *NormRad* | Direkte solindfald ved vinkelret indstråling, kW/m² |
| *RelHumid* | Relativ fugtighed i udeluften, % |
| *SkyTemp* | Himmeltemperatur, °C |
| *SunAz* | Solens position regnet fra nord (nord = 0°) og positiv mod øst (øst = 90°), grader |
| *SunH* | Solhøjde i forhold til vandret (zenit = 90°), grader |
| *WindDir* | Vindretning (nord = 0°), grader |
| *WindSpeed* | Vindhastighed, m/s |

<br>

<br>

### Parametre i gruppen *Thermal Zones*

Indeklimaparametre for termiske zoner.  
**OBS:** Alle sæt-punkter for systemer relaterer til den termiske zones operative temperatur Top.

Disse parametre er **kun** tilgængelige i resultatloggen hvis der er sat "hak" ud for *ThermalZones* på [Options-fanebladet]() for simuleringen.

| Parameter | Beskrivelse |
|----------|-------------|
| *AdjacSun* <sup>M</sup> | Solvarmetilskud/tab gennem WinDoors til naborum, kW. |
| *AirChange* | Luftskifte i zonen, 1/h. |
| *Co2* | CO₂-indhold i indeluften, ppm (parts per million). |
| *DayIllum* <sup>M</sup>| Illuminans fra dagslys i et referencepunkt i en given plan, lux. |
| *ElecLight* | Illuminans fra elbelysningen i referencepunktet i en given plan, lux. |
| *GrossSun* <sup>M</sup> | Total solindfald gennem alle WinDoors i den termiske zone, kW. |
| *HumRatio* | Fugtindhold i indeluften, kg vanddamp pr. kg tør luft. |
| *PAQ* | Oplevet luftkvalitet af indeluften, –. |
| *RelHumid* | Relativ luftfugtighed, %. |
| *Ti* | Temperatur af indeluften, °C i højden TopHeight over gulvet. |
| *Tmrt* | Middelstrålingstemperatur (arealvægtet overfladetemperatur), °C. |
| *Top* | Operativ (oplevet) indetemperatur ved udgangen af timen (middelværdien af Ti og Tmrt), °C. |
| *TopMean* | Operativ indetemperatur, middelværdi over timen, °C. |
| *TotIllum* <sup>M</sup> | Total illuminans fra dags- og kunstlys i et valgt referencepunkt i en plan, lux. |
| *Tzfloor* | Lufttemperaturen ved gulvet beregnet efter *Kappa-modellen*, °C |
| *TzInlet* | Den gennemsnitlige indblæsningstemperatur for *Kappa-modellen*, °C. |
| *TzReturn* | Udsugningstemperaturen ved loftet beregnet efter *Kappa-modellen*, °C. |

<br>

<br>

#### Parametre for luftbalancen i en termisk zone - *Air balance*
| Parameter | Beskrivelse |
|---|---|
| *Exfilt <sup>M</sup>* | Luftstrømning ud af den termiske zone ved eksfiltration, m³/s. |
| *Infilt <sup>M</sup>* | Tilskud af udeluft til den termiske zone, forårsaget af infiltration, m³/s. |
| *MixIn <sup>M</sup>* | Lufttilskud (mixing) fra naborum gennem åbninger, m³/s. |
| *MixOut <sup>M</sup>* | Luftoverførsel (mixing) til naborum gennem åbninger, m³/s. |
| *VentilIn <sup>M</sup>* | Luftstrømning ind i den termiske zone gennem et lokalt ventilationssystem, m³/s. |
| *VentilOut <sup>M</sup>* | Luftstrømning ud af den termiske zone gennem et lokalt ventilationssystem, m³/s. |
| *VentIn <sup>M</sup>* | Lufttilskud til den termiske zone på grund af udluftning, m³/s. |
| *VentOut <sup>M</sup>* | Luftstrømning ud af den termiske zone på grund af udluftning, m³/s. |
| *VentPi <sup>M</sup>* *) | Beregnet middeltryk i den termiske zone, Pa. |
| *VentFrac <sup>M</sup>* *) | Middel andel af det totale åbningsareal der er i brug, -. |

Parametre markeret med *) optræder <u>kun</u> hvis der er gennemført en simulering med udvidelsesmodulet til BSim for simulering af naturlig ventilation.

<br>

<br>

#### Parametre for energibalancen i en termisk zone - *Energy Balance*
| Parameter | Beskrivelse |
|---|---|
| *qCooling* | Energi afsat til køling (negativ) i den termiske zone, kWh. |
| *qEquipment* | Energi afsat af udstyr i den termiske zone, kWh. |
| *qHeating* | Energi afsat til opvarmning i varmeanlæg i den termiske zone, kWh. |
| *qHeatPump* | Energi tilført fra varmepumpen, kWh. |
| *qHeatPumpEl* | Elektrisk energi tilført varmepumpen, kWh. |
| *qInfilt* | Energi tilført eller fjernet ved infiltration i den termiske zone, kWh. |
| *qLighting* | Energi afsat til kunstig belysning i den termiske zone, kWh. |
| *qMixing* | Energi overført (positiv eller negativ) ved luftudveksling med andre tilstødende termiske zoner eller rum, kWh. |
| *qPeople* | Energi afsat fra personer i den termiske zone, kWh. |
| *qSunRad* | Energi afsat sol gennem WinDoors i den termiske zone minus sol som [tabes inden den kommer ind i zonen]() og minus sol som passerer videre til andre rum, kWh. |
| *qTransmis* | Energi overført (positiv eller negativ) ved transmission gennem den termiske zones konstruktioner og WinDoors, kWh. qTransmis beregnes som varmestrømmen fra luften i den termiske zone til det første knudepunkt i samtlige flader som begrænser den termiske zone. Det er således muligt at der samlet set er et transmissionstab fra en termisk zone, selv om udeluften er varmere end luften i den termiske zone. |
| *qVentilat* | Energi overført (positiv eller negativ) ved lufttransport gennem ventilationsanlæg i den termiske zone – inkl. energioverførsel i ventilationsanlæggets komponenter (varmeflade, køleflade osv.), kWh. |
| *qVenting* | Energi overført ved udluftning i den termiske zone, kWh. |

Bidrag til varmebalancen for termiske zoner. Bidrag til varmetab og køling regnes negative.

<br>

<br>

#### Parametre for fugtbalancen i en termisk zone - *Moisture Balance*


| Parameter | Beskrivelse |
|---|---|
| *xInfilt* | Fugt tilført på grund af infiltration, kg/time. |
| *xLoad* | Fugt afgivet fra udstyr eller processer i den termiske zone, kg/time. |
| *xMixing* | Fugt tilført fra naborum på grund af luftoverførsel (mixing), kg/time. |
| *xPeople* | Fugt afgivet fra personer i den termiske zone, kg/time. |
| *xVentilat* | Fugt tilført gennem ventilationssystemet, kg/time. |
| *xVenting* | Fugt tilført fra udeluften på grund af udluftning, kg/time. |

Bidrag til fugtbalancen for den termiske zone. Tilført fugt er regnet positiv, fjernet (eller tabt) fugt er regnet negativ.

<br>

<br>

#### Parametre for komponenterne i ventilationsanlæg - *Ventilation Components*


| Parameter       | Beskrivelse                                                           |
|----------------|------------------------------------------------------------------------|
| *ClCoil*         | Effekt afsat i kølefladen, kW (negativ).                               |
| *ClRec*          | Køleeffekt vundet i genvinder, kW (negativ).                           |
| *FanPow*         | Total krævet effekt for motorer, ventilatorer og transmission, kW.     |
| *HtCoil*         | Effekt afsat i varmefladen, kW.                                        |
| *HtRec*          | Varmeeffekt vundet i varmegenvinder, kW.                               |
| *Humidif*        | Tilført vanddamp fra beføgteren til ventilationsluften, kg/time.       |
| *HumRec*         | Genvundet vanddamp i genvinder, kg/time.                                |
| *NvWaterTemp*    | Vandtemperatur i ventilation NvCoolCtrl, °C.                           |

<br>

<br>

#### Parametre for luften i ventilationssystemet - *Ventilation Air*


| Parameter        | Beskrivelse                                                                  |
|------------------|-------------------------------------------------------------------------------|
| *ExtractHum*     | Absolut fugtindhold i afkastluften, kg vand / kg tør luft.                    |
| *ExtractTmp*     | Temperatur af afkastluften når den forlader zonen, °C.                        |
| *ExVol*          | Udblæsningsluftmængde, m³/s.                                                   |
| *InletHum*       | Absolut fugtindhold i indblæsningsluften, kg vand / kg tør luft.              |
| *InletTmp*       | Temperatur af indblæsningsluften til den termiske zone, °C.                   |
| *InVol*          | Indblæsningsluftmængde, m³/s.                                                  |
| *RtnFrac*        | Andelen af luftstrømmen som recirkuleres, -.                                   |

<br>

<br>


#### Parametre for *tarif-inddelt* energiforbrug i systemer
| Parameter        | Beskrivelse                                                                  |
|------------------|-------------------------------------------------------------------------------|
| *qPow0..qPow7*     | Sammentælling af den termiske zones energiforbrug i systemer på op til 8 forskellige tarif-klasser. Tarif-klasserne er afhængige af de tilhørende tidsangivelser.                    |

<br>

<br>

<br>

<br>

### Parametre i gruppen konstruktioner - *Constructions*

Parametre for overfladetemperaturer og solstråling på modellens konstruktioner.

Disse parametre er **kun** tilgængelige i resultatloggen hvis der er sat "hak" ud for *Constructions* på [Options fanebladet]() før simuleringen.


| Parameter                 | Beskrivelse                                                                                                                                                             |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *CondRisk1 <sup>M</sup>*             | Indikator for [kondensrisiko]() på den side, der vender mod den termiske zone. -.                                                                                           |
| *CondRisk2 <sup>M</sup>*             | Indikator for [kondensrisiko]() på den side, der vender væk fra den termiske zone. -.                                                                                       |
| *DirRad <sup>M</sup>*                | Direkte solstråling på overflader der vender mod det fri, kW/m².                                                                                                          |
| *GroundRad <sup>M</sup>*             | Solstråling reflekteret fra jorden og andre omgivelser til flader der vender mod det fri, kW/m².                                                                         |
| *Filtration*             | Luftstrømmen gennem utætheder i konstruktionen, m/s.                                                                                                                     |
| *WaterTempMean*          | Middel-vandtemperaturen i et vandbaseret gulvvarme/kølesystem (WaterTempSupply + Water Temp i timens sidste tidsskridt), °C                                             |
| *WaterTempSupply*        | Temperaturen af vandet i et gulvvarme/kølesystem ved indløb til slangerne i konstruktionen, °C                                                                           |
| *NyDuct*                 | Luftskifttal i det yderste luftlag i konstruktionen, 1/s.                                                                                                                |
| *qCon1* & *qCon2*        | Konvektive bidrag på side 1 hhv. 2 af en konstruktion, W/m² (Kan overføres som randbetingelse til CFD-program). qCon er positiv når den termiske zone tilføres energi. <br> qCon beregnes ikke for den side af en flade der vender mod det fri.  |
| *qHeat*                  | Energi afsat inde i konstruktioner fra gulvvarme, kWh.                                                                                                                   |
| *qRad1* & *qRad2*        | Strålingsbidrag fra alle (udstyr, opvarmning, køling, personer, belysning og solstråling gennem WinDoors) strålingskilder i zonen på side 1 hhv. 2 af konstruktionen, , W/m². qRad er positiv når fladen tilføres energi.    |
| *qPvGross* *)               | Ydelsen fra solceller integreret i konstruktionen <u>uden</u> lignende reduktion på grund af skygger, kW.                                                                       |
|                          | Parameteren vises <u>kun</u> hvis fladen indeholder solceller <u>og</u> resultatfilen fra simulering af solceller er åbnet via *Open New Model* på Parameters fanebladet i *tsbi5*. Resultatfilen fra simuleringen af solceller har samme navn som modellen efterfulgt af "*#pv*".        |
| *qPvNet* *)                 | Ydelsen fra solceller integreret i konstruktionen, kW.                                                                                                                   |
|                          | Parameteren vises <u>kun</u> hvis fladen indeholder solceller <u>og</u> resultatfilen fra simulering af solceller er åbnet via *Open New Model* på Parameters fanebladet i *tsbi5*. Resultatfilen fra simuleringen af solceller har samme navn som modellen efterfulgt af "*#pv*".        |
| *RSurfr1* & *RSurfr2*    | Den kombinerede (stråling og konvektion) overgangsmodstand for fladen, m²K/W.                                                                                           |
|                          | Hvis der regnes med langbølget strålingsudveksling vil strålingsmodstandene variere; i modsat fald vil BSim benytte de værdier som er defineret for den enkelte flade - evt. [standardværdier]() hvis intet andet er givet.   |
| *SensorTmp*              | Er temperaturen for sensoren placeret i en konstruktion med gulvvarme, °C.                                                                                               |
| *SkyRad <sup>M</sup>*                | Diffus solstråling på overflader der vender mod det fri, kW/m²                                                                                                           |
| *SurfMoist1* & *SurfMoist2* | Fugtindhold i materialerne ved side 1 hhv. 2 af konstruktionen, kg/kg.                                                                                               |
| *SurfTemp1* & *SurfTemp2*   | Overfladetemperatur på side 1 (vender normalt mod den termiske zone hvor konstruktionen er oprettet) hhv. på side 2 af konstruktionen, °C                             |
| *T02, T03, ...*          | Temperaturen i knudepunkterne gennem konstruktionen, °C.                                                                                                                 |
| *MC01, MC02, ...* *)       | Fugtindhold i knudepunkterne gennem konstruktionen, kg/kg.                                                                                                               |
| *RH01, RH02, ...*  *)      | Relativt fugtindhold i knudepunkterne gennem konstruktionen, -.                                                                                                          |

Parametre markeret med *) optræder <u>kun</u> hvis der er gennemført en simulering med den udvidede fugtmodel eller model for beregning af solceller i BSim.


<br>

<br>

<br>

<br>

#### Parametre i gruppen WinDoors 
Disse parametre er **kun** tilgængelige i resultatloggen hvis der er sat "hak" ud for *Windoors* på [Options fanebladet]() før simuleringen.


| Parameter        | Beskrivelse                                                                                                                                     |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| *CondRisk1 <sup>M</sup>*     | Indikator for [kondensrisiko]() på den side, der vender mod den termiske zone, -.                                                                   |
| *CondRisk2 <sup>M</sup>*     | Indikator for [kondensrisiko]() på den side, der vender bort fra den termiske zone, ofte imod udeluften, -.                                         |
| *ExtIllum*       | Udvendige belysningsstyrke på vinduets plan. Denne værdi bruges til solafskærmningsregulering SensorCtrl, -.                                    |
| *GrossSun <sup>M</sup>*      | Solstråling på ydersiden af WinDoors transparente areal, kW.                                                                                     |
| *NetSun <sup>M</sup>*        | Solstråling transmitteret gennem WinDoors transparente areal, kW.                                                                                |
| *ShadFrac <sup>M</sup>*      | Andel af WinDoor, der er skygget af udhæng, sidefinner og eksterne skygger, -.                                                                  |
| *Shutter <sup>M</sup>*       | Position af skodder, – (1=lukket, 0=åben).                                                                                                       |
| *SolarShd <sup>M</sup>*      | Solafskærmningsfaktor, – (1=fuld skygge, 0=fuld sol).                                                                                            |
| *SurfTmp1 <sup>M</sup>*      | Overfladetemperatur på den side, der vender mod den termiske zone, °C.                                                                           |
| *SurfTmp2 <sup>M</sup>*      | Overfladetemperatur på den side, der vender bort fra den termiske zone – ofte udeluften, °C.                                                    |
| *VentCp <sup>M</sup>* *)        | Vindtrykskoefficient, -.                                                                                                                         |
| *VentDPi <sup>M</sup>* *)      | Trykforskel med fortegn, Pa.                                                                                                                     |
| *VentOfrac <sup>M</sup>* *)     | Åbningsgraden af det oplukkelige areal, -.                                                                                                       |
| *VentSpeed <sup>M</sup>* *)    | Indblæsningshastighed, m/s. *Hvis luftretningen er <u>ud</u> af den termiske zone vises lufthastigheden som "0".*                                       |
| *WinIllum* <sup>M</sup>      | Illuminans i referencepunktet på grund af dagslys gennem det aktuelle WinDoor, lux.                                                             |
| *WinIllum2*      | Illuminans i sekundære <sup>1)</sup> referencepunkt på grund af dagslys gennem det aktuelle WinDoor, lux.                                                      |

Parametre markeret med *) optræder kun hvis der er gennemført en simulering med den udvidelsesmodulet til BSim for simulering af naturlig ventilation. 

 1): Det sekundære referencepunkt defineres og benyttes i forbindelse med overførsel af sollysfaktorer fra en beregning med [SimLight](). 
