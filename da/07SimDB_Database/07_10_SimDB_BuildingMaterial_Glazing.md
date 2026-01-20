<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Glazing
Fanebladene *Glazing* og [*UserDefined* ](/07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.html)hører sammen og indeholder informationer, som knytter sig til transparente materialer, der benyttes som en del af en WinDoor og indgår i simuleringer med *tsbi5*. Disse faneblade vises **kun** for materialer fra [SfB-materialegruppe](/24Miscellaneous/24_39_SfB_in_BSim.html) "a".

<figure id="center_img">
<img src="./assets/dbglazing.gif " alt="Data for glasdelen at vinduet (Edit Material | Glazing). Nederst vises kurven for varme- og lystransmittansens afhængighed af indfaldsvinklen.">
<figcaption>Data for glasdelen at vinduet (Edit Material | Glazing). Nederst vises kurven for varme- og lystransmittansens afhængighed af indfaldsvinklen.</figcaption>
</figure>

Betydningen af de enkelte felter er:

*   *Heat Transmittance*:

    *   *Normal*: Solenergitransmittansen ([g-værdien](/20The_Mathematical_Basis/20_02_References.html)) for indstråling vinkelret på glassets plan. Hvis man kender mere detaljerede data (benyttes fx. ved transparente isoleringsmaterialer) for energitransmittansen for forskellige indfaldsvinkler, **kan** de gives på fanebladet [*UserDefined*](/07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.html).

    *   *Diffuse*: Solenergitransmittansen for diffus stråling. Hvis der ikke kendes en bedre værdi, bør "0", opgives som værdi. Derved antager programmet at transmittansen for diffus stråling (reflekteret fra omgivelser, fx nabobygninger, jorden, skyer osv.) er den samme som for direkte stråling, men ved en indfaldsvinkel på 60° i forhold til glassets normal. Gives der en værdi for transmittansen af diffus stråling bør denne altid være mindre end transmittansen for direkte stråling vinkelret på glassets plan (normalstråling).

*   *Light Transmittance - Normal*: Angiver glassets transmittans for dagslys ved indstråling vinkelret på glasset.

*   *Uvalue* - Center: Rudens center U-værdi [W/m²K].

*   *User Defined Curve*: Inaktivt felt som ved "hak" angiver at transmittanskurven er beregnet på baggrund af detaljerede data, givet på fanebladet [*UserDefined*](/07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.html).

*   *Clear Transmittance*: Ved tryk på knappen ryddes data fra *UserDefined* og den normale formel som beregner transmittansen ved en given indfaldsvinkel ud fra transmittansen for normalstråling.

Nederst på fanebladet vises kurven for transmittansens afhængighed af indfaldsvinklen som en hjælp til at vurdere, om inddata for kurven er korrekte. Transmittansen for direkte stråling er givet ved en rød kurve og transmittansen for dagslys med en gul kurve.

Se også:

*   [Faneblad Material](/07SimDB_Database/07_11_SimDB_BuildingMaterial_Material.html)

*   [Faneblad Moisture](/07SimDB_Database/07_14_SimDB_BuildingMaterial_Moisture.html)

*   [Faneblad Thermal](/07SimDB_Database/07_12_SimDB_BuildingMaterial_Thermal.html)

*   [Faneblad Environment](/07SimDB_Database/07_07_SimDB_BuildingMaterial_Environment.html)

 

For transparente materialer til WinDoors

*   [Faneblad Additional](/07SimDB_Database/07_10_SimDB_BuildingMaterial_Glazing.html)

*   [Faneblad UserDefined](/07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.html)

*   [Faneblad Frame](/07SimDB_Database/07_09_SimDB_BuildingMaterial_Frame.html)

*   [Faneblad Finish](/07SimDB_Database/07_08_SimDB_BuildingMaterial_Finish.html)