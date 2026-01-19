<link rel="stylesheet" href="../style.css">

# Klimadata definition

<figure id="center_img">
<img src="./assets/CLIMATE2.GIF" alt="Dialog (Weather Data Definition Row) for definition af de enkelte parametre i rådata (ASCII) som ønskes konverteret til BSim's binære format. Delete-knappen sletter informationen for en linje i definitionsfilen.">
<figcaption>Dialog (Weather Data Definition Row) for definition af de enkelte parametre i rådata (ASCII) som ønskes konverteret til BSim's binære format. Delete-knappen sletter informationen for en linje i definitionsfilen.</figcaption>
</figure>


Dialogen definerer hvordan inddata skal opfattes og behandles inden konvertering til binært format. Hver linie har formen:

* 'parameter' nummer konstant faktor 'enhed'*

og kan læses: værdien i position nummer i en linie tildeles parameter som:

* Parameter = faktor * (værdi - konstant) [*enhed*]

<br> 

Parameter kan angives i en af enhederne (i parentes).

*   *Ambient Temp.* - Udetemperatur (C) eller (F).

*   *Dew Point Temp.* - Dugpunktstemperatur (C) eller (F).

*   *Rel. Humidity* - Relativ fugtighed, angivet som (%) eller rent tal (-).

*   *Humidity Ratio* - Absolut fugtindhold (kg/kg).

*   *Entalphy* - Enthalpi (kJ/kg).

*   *Normal Radiation* - Normal stråling (W/m2) eller (J/cm²).

*   *Diffuce Radiation* - Diffus stråling på vandret (W/m²) eller (J/cm²).

*   *Global Radiation* - Global stråling på vandret (W/m²) eller (J/cm²).

*   *Direct Radiation on Horizontal* - Direkte stråling på vandret (W/m²) eller (J/cm²).

    *   Der **skal** gives en af følgende kombinationer af data for solstråling:

    *   Normal stråling + Diffus stråling på vandret.

    *   Normal stråling + Global stråling på vandret.

    *   Global stråling på vandret + Diffus stråling på vandret.

    *   Diffus stråling + Direkte stråling på vandret.

*   *Cloud cover* - Skydække, angivet som (oktas), dvs. 0-8 eller rent tal (-).

*   *Wind Speed* - Vind hastighed (m/s) eller (knob).

*   *Wind Direction* - Vindretning i grader (nord = 0°, øst = 90°).

*   *AtmPressure* - Lufttrykket i pascal (Pa).

*   *Month* - Måned (-), 1-12.

*   *Day* - Dag (-), 1-31.

*   *Hour* - Time nummer (-), 1-24.