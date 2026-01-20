<link rel="stylesheet" href="../style.css">

# SimDB - BuildingElement, ConstructionLayer
Andet faneblad indeholder information om de enkelte lag, et bygningselement er opbygget af. Der er følgende inddatafelter på fanebladet:

*   *Type*: Der kan vælges bygningsmaterialer fra de forskellige [SfB-basisgrupper](/24Miscellaneous/24_39_SfB_in_BSim.html) (isoleringsmaterialer er fx placeret i gruppen m. *Inorganic* materials), som de er defineret i *BuildingMaterial*-delen af databasen.

*   *ConstructionMaterial*: Bygningsmaterialet vælges fra en liste, som indeholder materialer svarende til den type, som er valgt i feltet *Type*.

*   Tre unavngivne felter som har forskellig betydning afhængigt af bygningselementets type - [WinDoor](/07SimDB_Database/07_05_Material_layers_for_BuildingConstruction_WinDoor.html) eller Construction.

    *   Felt 1 viser SfB-indgangen for det materialelag som aktuelt vises.

    *   Felt 2 angiver tykkelsen af det valgte materiale. Vises i kolonnen *Thickness* i tabellen nederst på fanebladet. Hvis der vælges "No material" som materiale vil laget blive opfattet som et luftlag med en termisk modstand svarende til værdien på det foregående materialelag. Tykkelsen af luftlaget kommer på denne måde med i den geometriske optegning af modellen.

    *   Felt 3 angiver en ekstra modstand mellem to materialelag. Modstanden har forskellig betydning afhængig af hvordan laget defineres:

    *   Hvis der er valgt et materiale for det aktuelle lag er modstanden den **termiske modstand** [m²K/W], fx af et lukket luftmellemrum mellem to materialer.

    *   Er der derimod **ikke** valgt et materiale for det aktuelle lag er modstanden en **fugtmodstand** [m²sPa/kg], svarende til en dampspærre. En oversigt over typiske fugtmodstande kan ses i på siden om [sorption/desorption](/24Miscellaneous/24_43_Sorption_desorption.html).

    *   Hvis der **ikke** er valgt et materiale **og** der **ikke** er givet en modstand, beskriver laget geometrien for et luftlag i konstruktionen, fx et nedhængt loft. Modstanden for et sådant luftlag **skal** gives som en termisk modstand på det foregående materialelag (regnet fra side 1 af konstruktionen).

Ønskes der regnet på fugttransport over et sådan luftlag, fx et nedhængt køleloft kan følgende antagelse benyttes:

1.  Hvis luften er stillestående, hvilket kan være en rimelig tilnærmelse, hvis den nederste afgrænsning er den koldeste, og der i øvrigt ikke er nogen påtvungen konvektion, så vil diffusionsmodstanden være luftlagstykkelsen (meter) divideret med vanddamppermeabiliteten for stillestående luft, som er 1.85e-10 kg/m·s·Pa.

2.  I andre tilfælde (fx om vinteren, når køleloftet er slukket og tagfladen er den koldeste), vil den ækvivalente diffusionsmodstand skønsmæssigt være noget mindre, fx 0.1e+9 m²s·Pa/kg, men antageligt noget varierende.

3.  Det er normalt kun af interesse at kende værdien nogenlunde korrekt, når køleloftet er tændt, svarende til tilfælde 1.

*   Tabel (nederst til venstre) med oversigt over elementets enkelte lag.

*   Informationsfelt (nederst til højre) som giver vejledning til udvalgte felter i dialogen.

Det er muligt at ændre rækkefølgen af lagene i en konstruktion ved at trække et materialelag til en anden placering. Materialelagene optræder i samme rækkefølge som i tabellen, regnet fra side 1 af konstruktionen. Det anbefales at der oprettes en **kopi** af en konstruktion, hvis der skal ændres på materialelagene, da ændringen ellers vil slå igennem alle steder hvor konstruktionen er brugt.

Et luftlag, som fx i et nedhængt loft, kan angives geometrisk ved ikke at vælge et materiale (vises som "No material" i tabellen) med en tilhørende tykkelse. Den termiske modstand af luftlaget skal gives på det materiale som ligger umiddelbart inden for (nærmere side 1 af konstruktionen) luftlaget.

Et nyt lag tilføjes ved at vælge New Layer, klikke på "?" i kolonnen *Material*, vælge *Type* og *ConstructionMaterial* og derefter definere tykkelse og isoleringsevnen af eventuelle hulrum på ydersiden af det aktuelle materialelag.

<figure id="center_img">
<img src="./assets/DBBE3.GIF " alt="Definition af en konstruktioner opbygget af materialelag (Edit BuildingElement | ConstructionLayer) i databasen.">
<figcaption>Definition af en konstruktioner opbygget af materialelag (Edit BuildingElement | ConstructionLayer) i databasen.</figcaption>
</figure>

Klik på *Delete-knappen* sletter det aktuelle materialelag.

Ved højre-klik på materialet åbnes dialogen for redigering af [materialets egenskaber](/07SimDB_Database/07_06_SimDB_BuildingMaterial.html).

WinDoors defineres i samme struktur i databasen som de øvrige konstruktioner, men de tre unavngivne felter og kolonnerne i tabellen har en lidt anden betydning.

Se også:

*   [Materialelag for WinDoor](/07SimDB_Database/07_05_Material_layers_for_BuildingConstruction_WinDoor.html)

*   [Faneblad BuildingElement](/07SimDB_Database/07_02_SimDB_BuildingElement.html)

*   [Faneblad MaterialAmount](/07SimDB_Database/07_04_SimDB_BuildingElement_MaterialAmount.html)
