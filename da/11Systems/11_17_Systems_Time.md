<link rel="stylesheet" href="../style.css">

# Time, System

I alle former for tidsplaner til systemer indgår der én eller flere tidsangivelser. Hver tidsangivelse er knyttet sammen med netop én regulering og angiver, hvornår systemet skal fungere med denne regulering.

Af tidsangivelsen fremgår, i hvilke uger (eller måneder), hvilke dage og hvilke timer den aktuelle komponent skal være aktiv og fungere med den tilknyttede regulering.

Driftstiden for et ventilationsanlæg på en skole kan fx være beskrevet ved en tidsangivelse, hvor udeladte uger fx kan svare til jule-, påske-, sommer- eller efterårsferie. Dagene svarer til alle hverdage (mandag til fredag) og timeangivelse kan fx være normal skoletid samt fire timer aftenskole.

Ugerne nummereres fra 1-53 og dagene fra 1 (= mandag) til 7 (= søndag). Timerne angives fra time 1 til time 24, således at time 1 svarer til tidsrummet klokken 0:00 - 1:00. Der kan ikke angives timeperioder på mindre end 1 time.

I tidsangivelsen bestemmes på hvilke tidspunkte systemer kan være i drift. Om systemet er i drift, bestemmes af reguleringen, der kan være et døgnprofil eller en mere kompleks regulering, som afhænger af en eller flere parametre i modellen.

<figure id="center_img">
<img src="./assets/Time.GIF " alt="Dialog for definition af tidsangivelse for, hvornår systemet kan være i drift i løbet af året (Time).">
<figcaption>Dialog for definition af tidsangivelse for, hvornår systemet kan være i drift i løbet af året (Time).</figcaption>
</figure>


Tidsangivelsen er inddelt i fire felter, markeret *Month, Week, Day* og *Hour.* Felterne *Month* og *Week* supplerer hinanden, idet der enten skal vælges de måneder eller uger, som systemet skal være aktivt. I feltet *Day* vælges hvilke ugedage, systemet skal kunne være aktivt (mandag *(Mo)* til søndag *(Su).* Tilsvarende vælges i feltet *Hour* i hvilke timer i løbet af en dag, systemet skal kunne være aktivt.

Der findes tre særlige knapper i dialogen: *Heating* (under *Month)* og *Work* (under *Day* og *Hour).* Den første sætter en markering i fyringssæsonen og de to sidste i arbejdstiden for ugen hhv. dagen.

Fra BSim version 3,2,8,16 er der indført et tarif-system på energiforbruget, således at energiforbruget på termisk zone niveau kan opgøres i op til otte forskellige tarif-klasser (Tariff 0 - Tariff 7). Tarif-systemet knytter sig til systemer som er energiforbrugende, dvs. [Heating](https://help.bsim.dk/support/kb/articles/wmjnq7mV/opvarmning), [Cooling](https://help.bsim.dk/support/kb/articles/y9gBNGQM/koling), [Equipment](https://help.bsim.dk/support/kb/articles/vW5a8pW4/udstyr), [Lighting](https://help.bsim.dk/support/kb/articles/wQXxbnQK/belysning) og [Ventilation](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation).

Tarif-klassen knyttes til en tidsangivelse:

<figure id="center_img">
<img src="./assets/TARIFF.JPG " alt="Tariffen er knyttet til en tidsangivelse.">
<figcaption>Tariffen er knyttet til en tidsangivelse.</figcaption>
</figure>


Som standard tilhører en tidsangivelse Tariff 0.

Et energiforbrug fra et system som er betinget af en given tidsangivelse bliver tilskrevet tidsangivelsens tarif-klasse.

Energiforbrug opgjort efter tarif kan analyseres fra tsbi5/Tables.

Under tsbi5/Parameters er der indført en ny parameter-gruppe 'Tariff Distribution', hvorfra der kan vælges *qPow0* - *qPow7,* svarende til energiforbrug opgjort for tarif-klasserne 0 - 7.

<figure id="center_img">
<img src="./assets/tariff_param.jpg " alt="Det beregnede forbrug i tarif-klasserne for den termiske zone findes under 'Tariff Distribution'.">
<figcaption>Det beregnede forbrug i tarif-klasserne for den termiske zone findes under 'Tariff Distribution'.</figcaption>
</figure>


Se også [tidsplan](https://help.bsim.dk/support/kb/articles/79O3DZ9E/systemer---schedule) (Schedule).


