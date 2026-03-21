<link rel="stylesheet" href="../style.css">

# SimDB - BuildingMaterial, Thermal

Fanebladet *Thermal* indeholder oplysninger om materialets termiske egenskaber, og vises for alle andre materialer end dem som er beliggende i [SfB-grupperne](../24Miscellaneous/24_08_SfB_building_classification.md) a, b, c og 0, 1, ... .

De termiske egenskaber er den termiske kapacitet C<sub>p  </sub>[J/kg K] og varmeledningsevnen l [W/m K]. Disse informationer benyttes kun, hvis materialet indgår i en bygningskonstruktion (ikke *WinDoor*), som benyttes i en simulering med *tsbi5*.

<div id="gray_background">
Uanset om "Moisture Transport" er slået til eller fra på "Options" fanebladet under simuleringer med tsbi5, benyttes den lambda-værdi som er givet på dette faneblad. Se også <a href="../07SimDB_Database/07_14_SimDB_BuildingMaterial_Moisture.md">Moisture</a>

<br>
Oprettes der nye materialer i en database med information om egenskaber for fugttransport <u>skal</u> der angives data for fugttransporten, også selvom der ikke skal simuleres fugttransport.<a href="../05Introduction/05_05_Limitations.md"> Se begrænsninger</a>. 
</div>  

<figure id="center_img">
<img src="./assets/dbthermal.gif " alt="Termiske data (ud over densiteten) for materialet på Edit Material | Thermal. Edit Material | Thermal.">
<figcaption>Termiske data (ud over densiteten) for materialet på Edit Material | Thermal. Edit Material | Thermal.</figcaption>
</figure>

 
Se også:

*   [Faneblad Material](../07SimDB_Database/07_11_SimDB_BuildingMaterial_Material.md)

*   [Faneblad PCM](../07SimDB_Database/07_13_SimDB_BuildingMaterial_PCM.md)

*   [Faneblad Moisture](../07SimDB_Database/07_14_SimDB_BuildingMaterial_Moisture.md)

*   [Faneblad Environment](../07SimDB_Database/07_07_SimDB_BuildingMaterial_Environment.md)

*   [Faneblad Glazing](../07SimDB_Database/07_10_SimDB_BuildingMaterial_Glazing.md)

*   [Faneblad UserDefined](../07SimDB_Database/07_16_SimDB_BuildingMaterial_UserDefined.md)

*   [Faneblad Frame](../07SimDB_Database/07_09_SimDB_BuildingMaterial_Frame.md)

*   [Faneblad Finish](../07SimDB_Database/07_08_SimDB_BuildingMaterial_Finish.md)

