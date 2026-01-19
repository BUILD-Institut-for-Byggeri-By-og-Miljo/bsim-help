# Parametre til naturlig ventilation

<p align="center">
Modulet til simulering af naturlig ventilation med multi-zone modellen (mzm) er i øjeblikket udsendt i beta-test og resultater opnået med modulet skal, som altid, betragtes med sund skepsis.
</p>

<p align="center">
Feed-back til modulet på bsim-support@sbi.dk er meget velkommen!
</p>

Parameteren Cd er central for simulering af naturlig ventilation med multizone modellen (mzm) og kan bestemmes i henhold til [By og Byg (SBi), Anvisning 202](https://bsim.outseta.com/support/kb/articles/yW1xrD9B/uddrag-fra-by-og-byg-anvisning-202). Indblæsningstemperaturkonstanten Ka benyttes størrelsen af det areal hvor der er tvungen strømning og udetemperatur i modsætning til resten af loftet hvor der er fri strømning/konvektion og indetemperatur og kan findes i henhold til [Danvak grundbogen, kapitel 7.](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur) 

## **Cd - Udstrømningskoefficienten**

Værdien bestemmes i henhold til [By og Byg (SBi), Anvisning 202](https://bsim.outseta.com/support/kb/articles/yW1xrD9B/uddrag-fra-by-og-byg-anvisning-202), side 70-71:

### **Modstandstal samt kontraktions- og udstrømningskoefficienter**  
Volumenstrømmen gennem en åbning er ikke blot afhængig af trykdifferensen, men også af friktionen, kontraktionen og åbningsarealet.

Friktionen kan karakteriseres ved et modstandstal ζ. Kendes modstandstallet, kan hastighedskoefficienten bestemmes af:

$$ C_v = \frac{1}{\sqrt{1+\zeta}} \tag{9.29} $$

For udstrømningskoefficienten fås da, jf. ligning 9.30:

$$ C_d = C_v C_k = \frac{C_k}{\sqrt{1+\zeta}} \tag{9.30} $$

For en almindelig ventilationsåbning uden kanaler vil friktionen være beskeden og svare til et modstandstal på 0,05-0,1. Kontraktionskoefficienten er 0,6-0,7, hvis åbningen er skarpkantet, og den nærmer sig 1,0 hvis åbningen er godt afrundet.

For mere komplicerede åbninger kan friktions-, kontraktions- og udstrømningskoefficienten bestemmes ud fra middelstrømningshastigheder eller volumenstrømme, der er målt i afhængighed af trykdifferensen over åbningen. Middelstrømningshastigheden v<sub>m</sub> i åbningen kan bestemme af:

$$ v_m = v_k \left( \frac{A_k}{A} \right) = v_k C_k = \frac{q_v}{A} \tag{9.31} $$

Af ligningerne 9.1, 9.23 og 9.31 fås da følgende sammenhæng mellem modstandstal, trykdifferens og hastighed:

$$ \Delta p = ½ \rho \left( \frac{v_k}{C_v} \right)^2 = ½ \rho v_{k}^2 (1+\zeta) = ½ \rho \frac{v_m^2 (1+\zeta)}{C_k^2} $$

eller: 

$$ 1 + \zeta = \frac{2 \Delta p}{\rho} \cdot \frac{1}{v_k} = \frac{2 \Delta p}{\rho} \left( \frac{C_k^2}{v_m} \right)^2 \tag{9.32} $$

For udstrømningskoefficienten fås ved indsættelse af ligning 9.32 i ligning 9.30:

$$ C_d = C_k \frac{v_k}{\sqrt{\frac{2 \Delta p}{\rho}}} = \frac{v_m}{\sqrt{\frac{2 \Delta p}{\rho}}} \tag{9.33} $$

Ud fra volumenstrømmen kan der ved indsættelse af ligning 9.31 i ligning 9.32 og 9.33 fås følgende sammenhæng mellem modstandstal, udstrømningskoefficient, trykdifferens og volumenstrøm:

$$ 1 + \zeta = \frac{2 \Delta p}{\rho} \left( \frac{C_k A}{q_v} \right)^2 \tag{9.34} $$

$$ C_d = \frac{1}{\sqrt{\frac{2 \Delta p}{\rho}}} \cdot \frac{q_v}{A} \tag{9.35} $$

For vinduesåbninger, hvor volumenstrømmen reguleres med den oplukkelige del af vinduet, angives i faglitteraturen undertiden meget store modstandstal, der samtidig varierer med åbningsgraden, således at største modstandstal optræder ved mindste åbningsgrad. De høje, varierende værdier skyldes, at modstandstallet i disse tilfælde er defineret, således at der i modstandstallet ikke alene indgår friktionen, men også det resterende dynamiske tryk i strålen samt kontraktionskoefficienten og reduktionen i volumenstrømmen i forhold til volumenstrømmen gennem det fuldt åbne vindue.

For vinduesåbninger antages ofte en udstrømningskoefficient på C<sub>d</sub> = 0,7.

For indtags- og afkaståbninger bestemmes udstrømningskoefficienten ud fra sammenhængen mellem trykdifferens og middellufthastighed. Afkaståbningerne består fx af en rist ind mod rummet, en afkastkanal samt en rist i skorstenen. Med en målt middellufthastighed på 1,0 m/s ved en trykdifferens på 11 Pa fås af ligning 9.33:

$$ C_d = \frac{1,0}{\sqrt{\frac{2 \cdot 11}{1,2}}} = 0,23 $$

Indtagsåbninger, hvor luften passerer forbi en radiator, har samme middellufthastighed for samme trykdifferens som afkaståbninger og dermed samme udstrømningskoefficient.

Læs yderligere i [By og Byg Anvisning 202](https://bsim.outseta.com/support/kb/articles/yW1xrD9B/uddrag-fra-by-og-byg-anvisning-202).

## **Indblæsningstemperaturkonstanten Ka**

Værdien bestemmes i henhold til [Danvak grundbogen, kapitel 7](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur) hvor yderligere forklaring og koefficienter kan findes i kapitlet *Luftfordeling i rum* afsnittet *Luftstråler.*

| **Åbning**      | **Betingelser**                       | **Ka**      |
|-----------------|---------------------------------------|-------------|
| Cirkulær        | 2,5 m/s < v₀ < 7,5 m/s                | 8,0         |
|                 | 7,5 m/s < v₀ < 50 m/s                 | 10,0        |
| Rektangulær afstand x > 6 gange bredden     | bredde/højde = 1                      | 9,2         |
|     | bredde/højde = 5                      | 8,8         |
|   | bredde/højde = 10                     | 8,5         |
|                 | bredde/højde = 20                     | 7,9         |

Læs yderligere i [Danvak grundbogen, kapitel 7](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur).
