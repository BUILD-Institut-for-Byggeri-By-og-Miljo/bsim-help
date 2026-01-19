# Databasen SimDB
I *BSim* er et af de centrale elementer databasen *SimDB*, der indeholder standardinformation om materialer, konstruktioner og vinduer. *SimDB* er en relationsdatabase, der har samme struktur, som er benyttet i Statens Byggeforskningsinstituts "Energi og miljødatabase", beskrevet i SBI-rapport 278. Energi og miljødatabasen samt det supplerende program kan hentes fra Statens Byggeforskningsinstituts hjemmeside på Internettet.

Databasen indeholder i princippet to databaser, en med materialer ([*BuildingMaterial*](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial)) og en med bygningselementer ([*BuildingElement*](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)), som er sammensat af en kombination af materialer.

Alle bygningselementer og materialer er navngivet i henhold til [SfB-systemet](https://help.bsim.dk/support/kb/articles/DQ2xwBWV/sfb-i-bsim), og det er vigtigt, at konventionen overholdes, når der defineres nye data i databasen, idet bygningselementerne sorteres efter SfB-systemet, og databasen viser forskellige faneblade med data, afhængig af SfB-nummeret.

Overalt i dialogerne, hvor knappen "Edit" optræder, vil et højre-klik på et SfB-nummer åbne dialogen for redigering af data for objektet.

Databasen er en relationsdatabase oprettet med Microsoft Access 97. Hvis databaserne ønskes redigeret uden om dialogerne i *BSim*, kan Microsoft Access 97 anvendes.

Programmet leveres med to databaser. Filen "SbiData.mdb" indeholder de standarddata, som leveres med programpakken og er skrivebeskyttet. Filen "empty.mdb" indeholder strukturen til databasen og kan benyttes til at oprette egne databaser. Begge databaser **skal** forefindes på pc'en og vil normalt blive overskrevet ved opdateringer af programmet.

Hvis standarddatabasen, eller en anden database som er skrivebeskyttet, er valgt som database for et projekt vises dette i titelbjælken med teksten *Read Only* umiddelbart efter navnet på databasen og alle knapper i databasedialogen vil være inaktive.

 

Se også:

*   [BuildingElement](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)

*   [BuildingMaterial](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial)
