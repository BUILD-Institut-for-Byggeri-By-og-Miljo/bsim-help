<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Frame
Dette faneblad indeholder alene en U-værdi og fremkommer kun, når der er valgt materialer fra en af [SfB-materialegrupperne](/24Miscellaneous/24_39_SfB_in_BSim.html) "b" eller "c". Værdien benyttes, hvis materialet indgår som en ramme-/karmkonstruktion (*frame*) eller en fyldning (*panel*) i en WinDoor.

<figure id="center_img">
<img src="./assets/DBFRAME.GIF" alt="U-værdien for en ramme-/karmkonstruktion (Edit Material | Frame) eller en fyldning. Benyttes, når materialet indgår som en del af en WinDoor.">
<figcaption>U-værdien for en ramme-/karmkonstruktion (Edit Material | Frame) eller en fyldning. Benyttes, når materialet indgår som en del af en WinDoor.</figcaption>
</figure>

I henhold til [DS418, tillæg 1](/20The_Mathematical_Basis/20_02_References.html) kan følgende værdier benyttes for U-værdien af vinduesrammer.

For rammer og karme af træ eller beklædt træ anvendes transmissionskoefficienten angivet i nedenstående figur, medmindre der er bestemt en nøjagtigere værdi. Ved bestemmelse af tykkelsen af rammer og karme af træ ses der bort fra eventuelle inddækninger af metal eller plast. ved forskellig tykkelse af fx ramme og karm anvendes middelværdien. Ved koblede rammer anvendes den samlede tykkelse af rammerne.

<figure id="center_img">
<img src="./assets/U-FRAME.GIF" alt="Transmissionskoefficient U_ramme i W/m2K for rammer og karme af træ og beklædt træ.">
<figcaption>Transmissionskoefficient U<sub>ramme</sub> i W/m²K for rammer og karme af træ og beklædt træ.</figcaption>
</figure>

For rammer og karme af plast eller metal anvendes transmissionskoefficienterne angives i følgende tabel, medmindre der er bestemt en nøjagtigere værdi. For PUR-profiler forudsættes metalforstærkningen dækket af mindst 5 mm polyuretanskum. Ved PVC-profiler forudsættes, at der højst er metalforstærkning i ét kammer, og at afstanden mellem vægoverfladerne i alle kamre er mindst 5 mm. Transmissionskoefficienten for metalprofiler med brudt kuldebro afhænger meget af detailudformningen og må derfor bestemmes specifikt for det enkelte profil.

|                              | **W/m²K** |
|------------------------------|:---------:|
| **Plastprofiler**            |           |
| PUR-profiler           | 2,6       |
| 2-kammer PVC-profiler  | 2,1       |
| 3-kammer PVC-profiler  | 1,9       |
| **Metalprofiler**
| uden brudt kuldebro  | 5,9       |
*Transmissionskoefficient* *U<sub>ramme  </sub>i W/m²K for rammer og karme af plast- eller metalprofiler*.

For vinduer med selvstændige rammer og en afstand mellem rammerne på mindst 10 mm beregnes transmissionskoefficienten som:

$$
U = \frac{1}{\frac{1}{U_u} + \frac{1}{U_i}}
$$

hvor *U<sub>u</sub>*  og *U<sub>i</sub>*  er transmissionskoefficienten for henholdsvis den udvendige og den indvendige del af vinduet.

 

Se også:

*   [Faneblad Material](/07SimDB_Database/07_11_SimDB_BuildingMaterial_Material.html)

*   [Faneblad Moisture](/07SimDB_Database/07_14_SimDB_BuildingMaterial_Moisture.html)

*   [Faneblad Thermal](/07SimDB_Database/07_12_SimDB_BuildingMaterial_Thermal.html)

*   [Faneblad Environment](/07SimDB_Database/07_07_SimDB_BuildingMaterial_Environment.html)

*   [Faneblad Glazing](/07SimDB_Database/07_10_SimDB_BuildingMaterial_Glazing.html)

*   [Faneblad UserDefined](/07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.html)

*   [Faneblad Frame](/07SimDB_Database/07_09_SimDB_BuildingMaterial_Frame.html)