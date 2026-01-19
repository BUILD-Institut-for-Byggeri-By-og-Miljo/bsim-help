# Ordbog

| Term              | Definition |
|-------------------|------------|
| Animate           | Det er muligt at vise en *animeret* beregning af solindfald og skygger for en model i [Xsun](https://help.bsim.dk/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun). |
| Building element  | En beskrivelse af et [bygningselement](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement) defineret i databasen (fx konstruktioner eller windoor). Kan benyttes direkte som beskrivelse af en konstruktion, et vindue eller en dør. |
| Building material | Et [bygningsmateriale](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial) benyttes til, lag for lag, at opbygge bygningselementer. |
| Cell              | Den geometriske beskrivelse af et rum. |
| Construction layer| Et bygningselement eller en konstruktion er opbygget af lag. Hvert lag består af et bygningsmateriale. For vinduer og døre er det en beskrivelse af: glas ramme og fyldning. |
| Construction      | Konstruktion. En væg, et gulv eller et tag. |
| Cooling           | [Mekanisk køling](https://help.bsim.dk/support/kb/articles/y9gBNGQM/cooling-system). I tsbi5 foregår den mekaniske køling ved brug af en køleradiator, fx et køleloft. Der tages **ikke** hensyn til kølebehovet ved eventuel udfældelse af kondens på overfladen. |
| Dayprofile        | Et [døgnprofil](https://help.bsim.dk/support/kb/articles/L9PwDAQJ/dayprofile-system) er en beskrivelse (fordeling) af belastningen fra et system hen over et døgn. |
| Edge              | En kant af en flade. |
| Environment       | Indgang til definition af *[miljøbelastningerne](https://help.bsim.dk/support/kb/articles/nmDBzx9y/simdb---buildingmaterial-environment)* for byggematerialer i databasen. *Miljøbelastningerne* benyttes **kun** ved LCA beregninger, som **ikke** er en del af den aktuelle programpakke. |
| Equipment         | [Udstyr](https://help.bsim.dk/support/kb/articles/vW5a8pW4/equipment-system). |
| Face              | Den geometriske beskrivelse af en *konstruktion*. |
| Finish            | *Overfladen* af det materiale som vender imod de to sider af en konstruktion. |
| Frame             | *Ramme* omkring et vindue eller en dør. |
| Ground            | *Jord*. En flade kan vende imod jorden, som skal have tilknyttet en temperatur der kan varierer hen over året. |
| Heating           | [Opvarmning](https://help.bsim.dk/support/kb/articles/wmjnq7mV/heating-system). I tsbi5 foregår opvarmningen ved en radiator. |
| Kill animate      | *Afbryder* animationen i [XSun](https://help.bsim.dk/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun) på det aktuelle tidspunkt. Det er muligt at hoppe frem og tilbage, et tidsskridt ad gangen. |
| Lighting          | [Belysning](https://help.bsim.dk/support/kb/articles/wQXxbnQK/lighting-system). |
| Moisture          | [Fugt](https://help.bsim.dk/support/kb/articles/xmere5QV/moisture-system). |
| Node              | Temperaturen beregnes i konstruktionernes [*knudepunkter*](https://help.bsim.dk/support/kb/articles/BWzd4NQE/det-matematiske-grundlag) under simuleringen med tsbi5. |
| Options           | *Muligheder*, normalt for definition af diverse standardværdier for modellen og for programmerne. |
| People            | Systemet [*personer*](https://help.bsim.dk/support/kb/articles/XQYdjgmP/persons-system) giver en varmebelastning til den termiske zone hvor de er tilknyttet. |
| Recess            | *Tilbagetrækning* af glasset i et vindue eller dør i forhold til facadens yderside. |
| Room              | Et rum i modellen. Et *rum* **kan** ligge i en termisk zone, og kun *rum* i termiske zoner medtages i simuleringer med tsbi5. Alle *rum*, også uden for termiske zoner, medtages i modellen når den hentes ind i [Be10](https://help.bsim.dk/support/kb/articles/wmjnRomV/eksport-til-be10)-programmet. |
| Schedule          | En tidsplan er en samling af par af reguleringer og tidsangivelser, der tilsammen udgør reguleringsstrategien for et system. |
| Shading           | [Solafskærmning](https://help.bsim.dk/support/kb/articles/7maw8X9E/shading-system). |
| Shutter           | [Skodder](https://help.bsim.dk/support/kb/articles/ZmNrMxm2/shutter-system), normalt opfattet som natskodder, men kan også bruges til at afskære solindfaldet helt eller delvist inden for en given [tidsangivelse](https://help.bsim.dk/support/kb/articles/VmAOwo9a/time-system). |
| Sidefin           | Omkring vinduer og døre kan der sidefinner. En sidefinne er en skyggegiver, ud over en eventuel tilbagetrækning af glasset i forholde til facadens yderside. |
| Site              | Den *geografiske placering* af modellen. Når der vælges klimadata hentes denne information fra klimafilen. |
| Split             | Kommandoen opdel benyttes fx til inddeling af en kant af en flade i to lige lange stykker. |
| Thermal zone      | *Termisk zone*. Styringen af systemerne sker på niveau af termiske zoner. En termisk zone kan indeholde flere rum, som derved får samme simulerede temperatur. |
| Transmittance     | *Solenergitransmittans* for en rude ved en normal indstråling på rudens plan. Angives ofte som rudens G-værdi. |
| Venting           | [Udluftning](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system). |
| Windoor           | En fælles betegnelse for [vinduer](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor) og døre. |
| Wizard            | En *"troldmand"* som sørger for opsætning af en lang række standardparametre ved nogle få klik med