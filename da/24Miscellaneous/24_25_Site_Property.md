<link rel="stylesheet" href="../style.css">

# Site Property

Dialogen åbnes ved at højre klikke på Site ikonen <img src="./assets/Site.gif" width=15> i træet. Hvis Site ikke findes kan det oprettes ved at højre-klikke på bygningen i træet og vælge "Add Site".

<figure id="center_img">
<img src="./assets/SiteProperty.GIF" alt="Site Property.">
<figcaption>Site Property.</figcaption>
</figure>

*   *Weather file*: Viser stien til den valgte klimadatafil.

*   *Browse*: Åbner en dialog for valg af klimadatafil. Ved siden af *Browse*-knappen vises information om de valgte klimadata. Hvis der ikke er valgt en klimadatafil eller BSim ikke kan finde filen, åbner dialogen i mappen *Climate*, som er/skal være en undermappe til den mappe hvor BSim er installeret.

*   [Ground](/24Miscellaneous/24_26_Ground.html): Åbner en dialog for definition af den fiktive zone jord.

*   *Location* indeholder information, hentet fra klimadatafilen hvis en sådan er valgt, om placeringen af klimadata.

    *   *Latitude*: Viser breddegraden fra klimadatafilen **eller** giver mulighed for at vælge en breddegrad når der ikke er valgt en klimadatafil. Dette kan benyttes hvis kun skal foretages XSun beregninger.

    *   *Longitude*: Viser længdegraden fra klimadatafilen **eller** giver mulighed for at vælge en længdegrad når der ikke er valgt en klimadatafil. Dette kan benyttes hvis kun skal foretages XSun beregninger.

    *   *TimeZone*: Angiver hvor mange timer den aktuelle placering (klimadatafil) er placeret øst (positiv) eller vest (negativ) for Greenwich.

    *   *Elevation*: Viser højden over havet for den station hvor klimadata er målt.

*   *Site Proterties* indeholder forskellige standardværdier for siten som benyttes i simuleringerne med tsbi5.

    *   *Horizon*: Højdevinklen (vinklen mellem vandret og horisonten) for bygningen generelt.

    *   CO<sub>2</sub> er indholdet af CO<sub>2</sub> i udeluften (baggrundsniveau for simulering af CO<sub>2</sub> i indeluften).

    *   *ReflSolar* er jordoverfladens reflektion af solstråling.

    *   *ReflLight* er jordoverfladens reflektion af dagslys.

    *   *Emmisivity* er jordoverfladens/omgivelsenes emmisivitet.

*   *Terrain Type* angiver hvor udsat bygningen er for vindpåvirkning. Informationen benyttes i forbindelse med [simulering af naturlig ventilation](/11Systems/11_11_Natural_ventilation.html) (udvidelsesmodul til BSim). Der kan vælges følgende terræntyper:

    *   Åbent, fladt land.

    *   Landskab med spredt bevoksning.

    *   Forstadsområder.

    *   Bycentrum.
