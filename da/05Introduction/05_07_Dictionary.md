# Ordbog

| Term              | Definition |
|-------------------|------------|
| Animate           | Det er muligt at vise en *animeret* beregning af solindfald og skygger for en model i [Xsun](../14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.md). |
| Building element  | En beskrivelse af et [bygningselement](../07SimDB_Database/07_02_SimDB_BuildingElement.md) defineret i databasen (fx konstruktioner eller windoor). Kan benyttes direkte som beskrivelse af en konstruktion, et vindue eller en dør. |
| Building material | Et [bygningsmateriale](../07SimDB_Database/07_06_SimDB_BuildingMaterial.md) benyttes til, lag for lag, at opbygge bygningselementer. |
| Cell              | Den geometriske beskrivelse af et rum. |
| Construction layer| Et bygningselement eller en konstruktion er opbygget af lag. Hvert lag består af et bygningsmateriale. For vinduer og døre er det en beskrivelse af: glas ramme og fyldning. |
| Construction      | Konstruktion. En væg, et gulv eller et tag. |
| Cooling           | [Mekanisk køling](../11Systems/11_09_Systems_cooling.md). I tsbi5 forgår den mekaniske køling ved brug af en køleradiator, fx et køleloft. Der tages **ikke** hensyn til kølebehovet ved eventuel udfaldelse af kondens på overfladen. |
| Dayprofile        | Et [døgnprofil](../11Systems/11_04_Systems_DayProfile.md) er en beskrivelse (fordeling) af belastningen fra et system hen over et døgn. |
| Edge              | En kant af en flade. |
| Environment       | Indgang til definition af *[miljøbelastningerne](../07SimDB_Database/07_07_SimDB_BuildingMaterial_Environment.md)* for byggematerialer i databasen. *Miljøbelastningerne* benyttes **kun** ved LCA beregninger, som **ikke** er en del af den aktuelle programpakke. |
| Equipment         | [Udstyr](../11Systems/11_19_Systems_Equipment.md). |
| Face              | Den geometriske beskrivelse af en *konstruktion*. |
| Finish            | *Overfladen* af det materiale som vender imod de to sider af en konstruktion. |
| Frame             | *Ramme* omkring et vindue eller en dør. |
| Ground            | *Jord*. En flade kan vende imod jorden, som skal have tilknyttet en temperatur der kan varierer hen over året. |
| Heating           | [Opvarmning](../11Systems/11_12_Systems_Heating.md). I tsbi5 foregår opvarmningen ved en radiator. |
| Kill animate      | *Afbryder* animationen i [XSun](../14XSun_Analysis_of_incident_solar_radiation/14_01_Analysis_of_incident_solar_radiation_with_XSun.md) på det aktuelle tidspunkt. Det er muligt at hoppe frem og tilbage, et tidsskridt ad gangen. |
| Lighting          | [Belysning](../11Systems/11_03_Systems_Lighting.md). |
| Moisture          | [Fugt](../11Systems/11_05_Systems_Moisture.md). |
| Node              | Temperaturen beregnes i konstruktionernes [*knudepunkter*](../20The_Mathematical_Basis/20_01_The_Mathematical_Basis.md) under simuleringen med tsbi5. |
| Options           | *Muligheder*, normalt for definition af diverse standardværdier for modellen og for programmerne. |
| People            | Systemet [*personer*](../11Systems/11_13_Systems_Persons.md) giver en varmebelastning til den termiske zone hvor de er tilknyttet. |
| Recess            | *Tilbagetrækning* af glasset i et vindue eller dør i forhold til facadens yderside. |
| Room              | Et rum i modellen. Et *rum* **kan** ligge i en termisk zone, og kun *rum* i termiske zoner medtages i simuleringer med tsbi5. Alle *rum*, også uden for termiske zoner, medtages i modellen når den hentes ind i [Be10](../19BSim_and_other_windows_programs/19_01_BSim_and_other_Windows_programs.md)-programmet. |
| Schedule          | En tidsplan er en samling af par af reguleringer og tidsangivelser, der tilsammen udgør reguleringsstrategien for et system. |
| Shading           | [Solafskærmning](../11Systems/11_16_Systems_shading.md). |
| Shutter           | [Skodder](../11Systems/11_15_Systems_shutter.md), normalt opfattet som natskodder, men kan også bruges til at afskære solindfaldet helt eller delvist inden for en given [tidsangivelse](../11Systems/11_17_Systems_Time.md). |
| Sidefin           | Omkring vinduer og døre kan der sidefinner. En sidefinne er en skyggegiver, ud over en eventuel tilbagetrækning af glasset i forholde til facadens yderside. |
| Site              | Den *geografiske placering* af modellen. Når der vælges klimadata hentes denne information fra klimafilen. |
| Split             | Kommandoen opdel benyttes fx til inddeling af en kant af en flade i to lige lange stykker. |
| Thermal zone      | *Termisk zone*. Styringen af systemerne sker på niveau af termiske zoner. En termisk zone kan indeholde flere rum, som derved får samme simulerede temperatur. |
| Transmittance     | *Solenergitransmittans* for en rude ved en normal indstråling på rudens plan. Angives ofte som rudens G-værdi. |
| Venting           | [Udluftning](../11Systems/11_18_Systems_Venting.md). |
| Windoor           | En fælles betegnelse for [vinduer](../08SimDXF_CAD_drawings_as_basis_for_geometry/08_08_SimDXF_WinDoor.md) og døre. |
| Wizard            | En *"troldmand"* som sørger for opsætning af en lang række standardparametre ved nogle få klik med