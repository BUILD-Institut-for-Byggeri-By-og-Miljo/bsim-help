<link rel="stylesheet" href="../style.css">

# Indblæsningsstyring, Ventilation

Indblæsningsstyring er en styring af indblæsningstemperaturen som funktion af udetemperaturen (udekompensering). Reguleringskurven består af tre sammenhængende liniestykker, og fastlægges ved definition af to punkter samt hældningen på linierne uden for disse punkter, jf. figuren i dialogen. Regulering af komponenternes ydelse sker i serie, således at den ønskede indblæsningstemperatur søges opnået ved først at regulere genvinderen, dernæst varme- eller kølefladen.

<figure id="center_img">
<img src="./assets/ventilation-inletctrl.gif " alt="Definition af reguleringsstrategien for indblæsningsstyring (InletCtrl). Kurven viser reguleringen af indblæsningstemperaturen efter de givne inddata. Kurven opdateres når fokus flyttes fra et inddatafelt til et andet.">
<figcaption>Definition af reguleringsstrategien for indblæsningsstyring (InletCtrl). Kurven viser reguleringen af indblæsningstemperaturen efter de givne inddata. Kurven opdateres når fokus flyttes fra et inddatafelt til et andet.</figcaption>
</figure>


*Part of nom. flow:* Angiver, at anlæggets ydelse inden for den til denne regulering knyttede tidsangivelse er reduceret i forhold til den nominelle ydelse med faktoren *Part of nom. flow.*

*Regul. kurve, Te1, Tinl1, Te2, Tinl2:* Angiver de to knækpunkter (*Point 1* og *Point 2*) for reguleringskurven. På figuren i dialogen er punkterne defineret som: (-10, 30) og (10, 17).

*Slope before 1* og *Slope after 2*: Angiver hældningen af reguleringskurvens liniestykker ved udetemperaturer lavere end *Te1* og højere end *Te2*, som vist på figuren. Eksemplet i figuren har hældningen 0 før *P1* og 0,4 efter *P2*.

*Air Hum*: Angiver det ønskede absolutte fugtindhold i indblæsningsluften. Denne parameter har kun betydning, såfremt der er defineret en befugter i anlægget. Der vil således ikke foregå en affugtning i denne reguleringstype.

Se også:

*   [Rumtemperaturregulering](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/ventilation---rumtemperaturregulering)
*   [Fugtregulering](https://help.bsim.dk/support/kb/articles/E9LwjGQw/ventilation---fugtregulering)
*   [VAV-regulering](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering)
*   [Natkøling](https://help.bsim.dk/support/kb/articles/L9nrXz9Z/ventilation---natkoling-ventilation)