<link rel="stylesheet" href="../style.css">

# Materialelag for WinDoor
En WinDoor defineres ved at klikke på det "lag" som skal ændres/oprettes efter eventuelt at have klikket "New". Nu vælges materialetypen fra valgmenuen *Type* (NB: Glasset skal vælges fra materialegruppe "a", ramme/karm fra gruppe "b" og fyldningen fra gruppe "c"). Herefter vælges materialet fra valgmenuen *ConstructionMaterial*.

WinDoors defineres i samme struktur i databasen som de øvrige konstruktioner, men de unavngivne felter og kolonnerne i tabellen har en lidt anden betydning.

 

*   *Construction material* definerer de enkelte materialelag i et WinDoor:

    *   Felt 1 viser SfB-nummeret for det valgte materialelag (glas, ramme/karm og fyldning).

    *   Betydningen af felt 2 er afhængig af lagets nummer:

        *   For lag 1 (glas) angiver felt 2 den lineære varmetabskoefficient gennem glassets afstandsprofil (se oversigt).

        *   For lag 2 (ramme/karm) angiver felt 2 bredden af ramme/karm konstruktionen i WinDoor'ets plan (afstanden fra murværket til glasset) og regnes ens hele vejen rundt om glasset.

        *   For lag 3 (fyldningen) angiver felt 2 hvor stor en del af det resterende areal - når ramme/karm er trukket fra - som udgøres af fyldningen.

*   Tabellen nederst i dialogen angiver rækkefølgen af materialerne. I en WinDoor er det **ikke** ligegyldigt, i hvilken rækkefølge lagene kommer. Første "lag" **skal** være glasset, andet "lag" **skal** være ramme/karm, og tredje "lag" **skal** være fyldningen. Fyldningen behøver **kun** at optræde ved bygningselementer, der benyttes med et [layout](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor), som svarer til døre. Det er muligt at ændre på rækkefølgen af "lagene" ved at trække et lag til en anden position i tabellen med venstre knap på musen holdt nede.

*   Nederst til højre findes et felt med information om hvordan tabellen til venstre skal opfattes.

<figure id="center_img">
<img src="./assets/DBBE2.GIF " alt="Definition af en WinDoor (Edit Material | ConstructionLayer) i databasen.">
<figcaption>Definition af en WinDoor (Edit Material | ConstructionLayer) i databasen.</figcaption>
</figure>

Dialogen for redigering af materialedata kan åbnes ved at højre-klikke på materialets navn.

Den lineære transmissionskoefficient (*LinTrCoeff* eller Ψ<sub>g </sub> værdien) i W/m K for afstandsprofiler af aluminium eller almindeligt stål i afhængighed af rudens U-værdi (jvf. [DS 418](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur)). Der kan interpoleres i tabellen.

| **Rudens U-værdi<br>W/m²K** | **Linjetab<br>W/mK** |
|-----------------------------|----------------------|
| 1,0 - 1,2 | 0,10 |
|2,7 - 3,0 | 0,07 |


Se også:

*   [Faneblad BuildingElement](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)

*   [Faneblad MaterialAmount](https://help.bsim.dk/support/kb/articles/Rm8JaZ94/simdb---buildingelement-materialamount)
