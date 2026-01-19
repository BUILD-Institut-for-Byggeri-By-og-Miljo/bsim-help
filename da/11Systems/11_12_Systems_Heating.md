<link rel="stylesheet" href="../style.css">

# Heating, System

Modellen simulerer en termostatreguleret radiator eller konvektor. Den primære funktion i modellen er at bestemme hvor stor en effekt, radiatoren skal afgive for at hæve temperaturen til den ønskede setpunktstemperatur, defineret i reguleringen. Termostatens føler påvirkes dels af indelufttemperaturen og dels af overfladetemperaturerne.

Radiatoreffekten regnes styret efter udetemperaturen, lineært fra maksimalydelse *(MaxPower)* ved den dimensionerende udetemperatur *(Design Temp),* til en mindsteydelse *(Min Power),* der er til rådighed, når udetemperaturen er *Te Min*, eller derover, jf. figuren for reguleringskurven på *HeatCoolCtrl* fanebladet.

<figure id="center_img">
<img src="./assets/HEATING.GIF " alt="Definition af en radiator.">
<figcaption>Definition af en radiator.</figcaption>
</figure>


*Unit:* Ved at sætte et "hak" ud for *Unit* er det muligt at skifte fra angivelse af den termiske zones absolutte installerede effekt til den installerede effekt pr. m<sup>2</sup> gulvareal. Dette er især nyttigt hvis det samme varmesystem ønskes benyttet (kopieret) i flere termiske zoner med forskelligt varmetab.

*Max Power* er den maksimale varmeeffekt ved udetemperaturen *Design Temp.* Ved alle udetemperaturer under den dimensionerende udetemperatur vil den maksimale effekt være til rådighed i radiatoren, fx svarende til den højeste fremløbstemperatur i radiatorsystemet. Ved højere udetemperaturer antages det, at fremløbstemperaturen sænkes, hvilket simuleres ved en lineært aftagende radiatorydelse.  
I forbindelse med [gulvvarme](https://bsim.outseta.com/support/kb/articles/L9nr6e9Z/gulvvarmeregulering) (BSim) er det også muligt at angive en negativ værdi for *Max Power* og således simulere konstruktiv køling.

*Fixed Part* er den andel af den til rådighed værende effekt, der ikke er regulerbar (mellem 0 og 1). Kan fx angive et rørtab fra systemet. Det bemærkes, at der er tale om en fast andel, dvs. en uregulerbar varmeafgivelse, som er en konstant procentdel af den til rådighed værende effekt.

*Part to Air* angiver hvor stor en del af radiatorens varmeafgivelse, som tilføres indeluften ved konvektion. Den resterende varmeafgivelse sker ved stråling til zonens overflader. Andelen der afgives til luften afhænger af den aktuelle type radiator / konvektor, men tallet bør normalt ikke sættes lavere end 0,5. For en normal radiator placeret ved en ydervæg (brystning) under et vindue, kan en værdi mellem 0,5 og 0,7 antages.

*Central Heat Pump* angiver at varmen til varmeanlægget kommer fra en central varmepumpe. Varmepumen kan først aktiveres som kilde til varmetsystemet når programmet [PackCalc](https://bsim.outseta.com/support/kb/articles/Nmdd3wm0/packcalc) er installeret. PackCalc er udviklet af IPU Teknologiudvikling og kan hentes fra SBi's hjemmeside.

*Heat Pump data:* Åbner en dialog som giver mulighed for at give data for en central varmepumpe.

I [tidsplanen](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) (Schedule) defineres, hvorledes radiatoren reguleres på forskellige tidspunkter af dagen, ugen og året. For systemer med nat- eller weekendsænkning af indetemperaturen vil det være nødvendigt at specificere mindst to forskellige tidsplaner svarende til regulering efter forskellige temperatursetpunkter.

Reguleringen af et varmeanlæg kan ske som traditionel [radiatorregulering](https://help.bsim.dk/support/kb/articles/y9gBMjQM/opvarmning---varmeregulering) eller som [gulvvarmeregulering](https://help.bsim.dk/support/kb/articles/L9nr6e9Z/gulvvarmeregulering).

Se også

*   Faneblad [Schedule](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---tidsplan)
*   Faneblad [HeatCoolCtrl](https://help.bsim.dk/support/kb/articles/y9gBMjQM/opvarmning---varmeregulering)
*   Faneblad [FloorHeatCtrl](https://help.bsim.dk/support/kb/articles/L9nr6e9Z/gulvvarmeregulering)
*   Faneblad [Time](https://help.bsim.dk/support/kb/articles/VmAOwo9a/tidsangivelse)