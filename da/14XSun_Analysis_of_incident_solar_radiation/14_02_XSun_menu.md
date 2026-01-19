<link rel="stylesheet" href="../style.css">

# XSun menu

Menuen i *XSun* kaldes frem ved at højre-klikke i den grafiske visning.

<figure id="center_img">
<img src="./assets/image42.gif" alt="XSun-visning af model (klik på figuren for at se en animation).">
<figcaption>XSun-visning af model (klik på figuren for at se en animation).</figcaption>
</figure>


Højre-klik menuen er ændret, så den er direkte relateret til funktionerne i *XSun*. Indgangene i menuen er:

*   *SunDate and Options*: Åbner en dialog til definition af datoen for analyse af direkte solindfald med følgende felter:

    *   *Site* giver information (hentes normalt fra klimadatafilen) om placeringen af bygningen.

    *   *Sun Position* viser solens placering himlen (Azimut og Højdevinkel) på det valgte tidspunkt - dato og klokkeslæt - af året samt tidspunktet for solopgang (*Rise*.) og solnedgang (*Set*.).

    *   *Hour* angiver hvilken time den stationære beregning skal vise i timer,minutter.

    *   *Hour Step* angiver, med hvor store spring (timer,minutter) XSun skal vise "solpletternes" placering ved animation af solfordelingen.

    *   *Day Step* giver mulighed for at vælge hvor mang dage programmet skal springe frem efter afslutningen af en animation inden der startes en ny animation (kan være 0).

    *   *Animation period* felterne angiver start og stoptidspunktet på den enkelte dag for animation af solpletternes placering i modellen. Tidspunkterne angives som timer,minutter med 2 decimaler.

    *   *Under Options* er der tre muligheder for tilpasning af den grafiske visning.

        *   Ved afkrydsning i feltet *View the Building from the Sun* ses modellen hele tiden fra et punkt på den rette linje mellem solen og bygningen.

        *   Hvis der er sat "hak" ved *Self shadows* vises skygger på bygningen forårsaget af bygningen selv.

        *   *Show inner shell* giver mulighed for at fjerne eller vise de streger som repræsenterer indersiden af konstruktionerne, og på den måde reducere antallet af streger for at lette overskueligheden i komplicerede modeller.

*   *Next Timestep*: Skifter solens position et tidsstep frem (defineret i *Hour Step*) når en eventuel animation er standset - genvej: *Alt-n*

*   *Previous Timestep*: Skifter solens position et tidsstep tilbage (defineret i *Hour Step*) når en eventuel animation er standset - genvej: *Alt-p*

*   *Refresh*: Viser en grafisk fremstilling af hvor solen rammer i modellen for det aktuelle tidspunkt.

*   *Animate*: Starter en animation af den direkte solstrålings placering i modellen et tidsstep af gangen fra solopgang til solnedgang.

*   *Kill animate*: Standser animationen af solens vandring i bygningen på det aktuelle tidspunkt - genvej: *Esc*.

*   *Capture Screen*: Gemmer det aktuelle skærmbillede i video-filen. Kan først startes når der er valgt et [navn for en video-fil](https://help.bsim.dk/support/kb/articles/nmDBw09y/xsun) og en komprimeringsteknik.

*   *Capture Animation*: Starter optagelsen af en video-sekvens af animationen. Kan først startes når der er valgt et [navn for en video-fil](https://help.bsim.dk/support/kb/articles/nmDBw09y/xsun) og en komprimeringstenkik.

*   *SimPv*: Kalder udvidelsesmodulet [SimPv](https://help.bsim.dk/support/kb/articles/pWrnRaWn/simpv) til beregning af el-ydelsen fra bygningsintegrerede solceller i BSim.

 