<link rel="stylesheet" href="../style.css">

# Gulvvarmeregulering

Det er muligt at definere en regulering af varmeafgivelsen i en termisk zone som gulvvarme eller snarere konstruktionsvarme. Det vil sige at effekten fra et varmeafgivende system kan afsættes inde i en af den termiske zones konstruktioner.

*Da reguleringen af dette gulvvarmesystem er knyttet til den konstruktion som varmen skal afsættes i, er det nødvendigt at oprette en **individuel** **regulering for hver termisk zone**. Det er således ikke som for andre reguleringer i BSim muligt at benytte den samme regulering i flere termiske zoner.*

Gulvvarmen defineres lige som et almindeligt varmeanlæg i en termisk zone. Det er muligt at definere både en radiator og et gulvvarmeanlæg som værende aktive på samme tid.

Et gulvvarmeanlæg er defineret ved en installeret effekt (på fanebladet *Heating*) samt en regulering på fanebladet *FloorHeatCtrl*. Det er også muligt at at angive en negativ værdi for *Max Power* samt *Min*. *Power* og således simulere konstruktiv køling.

Systemet aktiveres ved opvarmning når:   
temperaturen ved sensoren *< Max. Surf. Temp.* **og** Top < *Set Point*

I tilfælde af konstruktiv køling aktiveres systemet når:   
temperaturen ved sensoren > *Max. Surf. Temp* **og** Top *> Set Point*

<figure id="center_img">
<img src="./assets/floor_heat_ctrl.jpg " alt="Regulering (FloorHeatCtrl) af varmeafgivelsen i en termisk zone som gulvvarme.">
<figcaption>Regulering (FloorHeatCtrl) af varmeafgivelsen i en termisk zone som gulvvarme.</figcaption>
</figure>


*   Reguleringen af gulvvarmeanlægget sker ved følgende parametre:   
*Factor*: Angiver hvor stor en del (0-1) af den installerede effekt (defineret på faneblad *Heating*) som er til rådighed for reguleringen af gulvvarmen.

*   *Set Point*: Er den operative temperatur som søges opretholdt i den termiske zone hvor gulvvarmeanlægget er defineret.

*   *Max Surf. Temp*: Er en øvre begrænsning på overfladetemperaturen for den konstruktion hvor effekten fra gulvvarmeanlægget afsættes. Hvis overfladetemperaturen overskrider *Max Surf. Temp.* vil effektafgivelsen blive nul.

*   *Design Temp*: Er den udetemperatur hvorunder varmeanlægget opnår sin maksimale effekt (*= Factor * MaxPower* - fra faneblad *Heating*).

*   *Min. Power*: Er den minimale effekt som kan afsættes i anlægget. Beregnes der et effektbehov som er under *Min. Power* afbrydes anlægget. Imellem *Factor*MaxPower* og *Min. Power* reguleres efter udetemperaturen i overensstemmelse med den skrå kurve som vises i dialogen.

*   *Te Min*: Er den udetemperatur hvorover gulvvarmeanlægget afbrydes. *Te Min.* danner sammen med *Min. Power* knækpunktet længst til højre på reguleringskurven.

*   *Destination*: I valgboksen vælges den konstruktion hvor effekten fra gulvvarmeanlægget skal afsættes. Der er vigtigt at give fornuftige navne til konstruktionerne i den termiske zone for entydigt at kunne bestemme i hvilken konstruktion varmen skal afsættes. Højre-klik på konstruktionens navn i træstrukturen for at ændre navnet.  
Når der er valgt en konstruktion vises dens opbygning set indefra den aktuelle termiske zone. Opbygningen vises lag for lag med angivelse af tykkelse (m) og materialebetegnelse. I afkrydsningsfeltet ud for hvert materialelag kan vælges et lag hvor effekten skal afsættes. Effekten vil blive afsat mellem det afkrydsede lag og det foregående. Konstruktionens opbygning i lag skal således foretages så det er muligt at vælge korrekt lag, hvor effekten afgives. Det er således <u>ikke</u> muligt at vælge det første lag som destination for gulvvarmen.  
Den afsatte effekt ses i resultatloggen som qHeat for konstruktionen hvis gemning af resultater for *Constructions* er slået til på [tsbi5 + Options](/13tsbi5_thermal_simulation/13_02_tsbi5_options.html) fanebladet.

*   *Floor Sensor Placement:* Varmeafgivelsen antages at blive afgivet i et netværk af parallelle varmekilder (rør eller eltråde), og der findes en temperaturføler placeret i samme lag som varmen afgives i. Der vil således være en forsinkelse i følerens temperatur i forhold til temperaturen i det lag hvor varmen afgives. Afstanden mellem de enkelte varmekilder angives som L (m), og afstanden fra en varmekilde til følerens placering angives som Ls (m). Endelig kan der angives en ekstra overgangsmodstand Resist (m<sup>2</sup>K/W) på varmeovergangen mellem konstruktionen og føleren.

*   *User Control*: Det er muligt for den enkelte bruger selv at definere sin egen reguleringsfunktion, som kan vælges i listen af User Controls. En brugerdefineret reguleringsfunktion kan installeres på den enkelte pc som en plug-in, og det kræver således ikke ændringer i BSim. En reguleringsfunktion skal programmeres i C++, og følge givne retningslinjer. Vælges (None) vil den indbyggede reguleringsfunktion blive anvendt.  

Når der klikkes på *Apply*-knappen overføres den definerede regulering af gulvvarmesystemet til *Schedule*-fanebladet. Hvis fanebladet forlades uden at der klikkes på *Anvend* vil eventuelle ændringer i *Schedule* ikke blive registreret.

Med *New*-knappen er det muligt at oprette nye reguleringer af gulvvarmeanlæg, fx til forskellige tidspunkter eller i forskellige termiske zoner.

*Copy*-knappen anvendes til at oprette en kopi af den viste regulering. Hvis der skal ændres i en regulering som anvendes i andre termiske zoner, er det nødvendigt at tage en kopi og redigere denne, da reguleringen i den termiske zone hvor den bliver brugt ellers vil blive ændret.

*Delete*-knappen sletter den regulering som aktuelt vises i dialogen.

It is possible to define a control of the heat emission in a thermal zone as a floor heating system, or rather a construction heating system. This means that the power from a heat emitting system can be placed on one of the constructions of the thermal zone.