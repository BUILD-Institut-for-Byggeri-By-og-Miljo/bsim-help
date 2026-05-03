# Filtyper

BSim programpakken anvender følgende filtyper:

| Filformat            | Beskrivelse |
|----------------------|-------------|
| *modelnavn.dis*      | *BSim* model. |
| *modelnavn.disdb*    | Ny (2006) ekstension til *BSim* databaser, som sikrer at databasen kan sendes som vedhæftet fil i en e-mail. |
| *modelnavn.mdb*      | Komponentdatabase for en bestemt model - oprettes standardmæssigt som en kopi af *SbiData.mdb*, men kan også dannes som en kopi af egne databaser. |
| *modelnavn.s97*      | Varmebalancen dannet ved simulering med *tsbi5*. |
| *modelnavn.g97*      | Timeværdier af resultaterne fra simulering med *tsbi5*. |
| *modelnavn.dbk*      | Backup af modellen. Dannes ved åbning og ved brug af funktionerne *Save* og *Save as*. |
| *.dxf*               | CAD tegninger gemt fra CAD-program i DXF-format. |
| *.arc*               | Modelfiler genereret ud fra CAD tegninger i *SimDxf*. Kan benyttes som grundlag for videre detaljering af nye modeller af den samme bygning. Kaldes fra *SimDxf*. |
| *.ts3*               | Model eksporteret til *tsbi3*. Kan kun aktiveres når *tsbi5* er aktiv. |
| *.geo*               | Eksport af tekstfil med information om modellens geometri til brug i CFD-programmer. Kan kun aktiveres når *tsbi5* er aktiv. |
| *.cfd*               | Eksport af randbetingelser til brug i CFD beregninger. Kan kun aktiveres når *tsbi5 &#124; Tables* er aktiv. |
| *.rad*               | Eksport af modellens geometri til brug i *Radiance*. Kan kun aktiveres når *SimView* er aktiv. |
| *.rif*               | Eksport af kontrol for modellens anvendelse i *Radiance*. Kan kun aktiveres når *SimView* er aktiv. |
| *.wdf*               | Definitionsfil til konvertering af klimadata fra tekstformat (ASCII) til *BSim's* binære format. |
| *.epw*               | Tekstfil med klimadata i EnergyPlus format. Dette format kan umiddelbart konverteres til *BSim*'s binære format med en indbygget funktion i *BSim* fra version 2002. |

Der er desuden tilknyttet to databasefiler til programpakken:

| Database         | Beskrivelse |
|------------------|-------------|
| *BSim2003.mdb*   | Database der følger med *BSim* og som ud over indholdet i *MoistDat.mdb* indeholder opdaterede værdier for glas og tabeller med information om solceller. |
| *MoistDat.mdb*   | Database der følger med *BSim* og som ud over indholdet i *SbiData.mdb* indeholder fugegenskaber for de materialer der ligger i databasen. |
| *SbiData.mdb*    | Indeholder den standarddatabase som leveres sammen med programmet og opdateres (overskrives) ved programopdateringer. Databasen er skrivebeskyttet og der må **ikke** tilføjes nye komponenter eller materialer i denne database. |
| *Empty.mdb*      | Tom database der indeholder den databasestruktur