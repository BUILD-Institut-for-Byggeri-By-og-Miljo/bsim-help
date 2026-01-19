<link rel="stylesheet" href="../style.css">

# Naturlig Ventilation

<div id="center_img">
*Modulet til simulering af naturlig ventilation med multi-zone modellen (mzm) er i øjeblikket udsendt i beta-test og resultater opnået med modulet skal, som altid, betragtes med sund skepsis.*
</div>

<br>

Fanebladet Natural Vententilation (*vises kun hvis der er erhvervet licens til udvidelsesmodulet Natural Ventilation under BSim*) giver adgang til definition af parametre for vinduet til [simulering af naturlig ventilation](https://help.bsim.dk/support/kb/articles/49EdKkQ7/naturlig-ventilation-system) (udluftning) på grundlag af forskel i ude- indetemperatur samt vindhastighed og vindretning.

<figure id="center_img">
<img src="./assets/nat_vent.gif" alt="Faneblad under WinDoor property dialogen som giver mulighed for at definere parametre til simulering af naturlig ventilation.">
<figcaption>Faneblad under WinDoor property dialogen som giver mulighed for at definere parametre til simulering af naturlig ventilation.</figcaption>
</figure>


*   *Cd*: [Udstrømningskoefficient](https://help.bsim.dk/support/kb/articles/DmwAjy94/parametre-til-naturlig-ventilation) (discharge coefficient) som er bestemt af vinduets udformning.

*   *Cnt*: Angiver åbningens geometriske center (0-1). Centeret er placeret i afstanden *Cnt*H* over vinduets underkant, hvor *H* er vinduets totale højde.   
*Eksempel*: For et vindue med vandret åbning og hængsling i toppen af vinduet, vil åbningens centrum være placeret ca. 20 % af vinduets højde fra vinduets underkant (rektangulær, vandret åbning langs vinduets bund og trekantede, lodrette åbning langs siderne) og *Cnt*-værdien sættes til 0,2.

*   *Afrac*: Er den andel af vinduets det aktuelle WinDoor's totale areal som kan åbnes. Hvis *Afrac* = *0* kan vinduet WinDoor ikke åbnes og således ikke bidrage til den naturlige ventilation af den termiske zone.

    *   Skitsen til højre illustrer BSim's opfattelse af åbningen og inddata.

*   *Ka:* [Koefficienten](https://help.bsim.dk/support/kb/articles/DmwAjy94/parametre-til-naturlig-ventilation) bruges i forbindelse med bestemmelse af størrelsen af det areal hvor der er tvungen strømning og udetemperatur i modsætning til resten af loftet hvor der er fri strømning/konvektion og indetemperatur.

 
