# Automatisk netinddeling

<p align="center">
Carsten Rode<br>
Department of Civil Engineering<br>
Technical University of Denmark<br>
www.byg.dtu.dk<br>
November, 2002
</p>

#### **Fugtberegning ved flere materialer og/eller dampbremsende lag**

Der sker en automatisk netinddeling til i forbindelse med fugtberegninger, der betragter forholdene, når der er flere materialer nær den indvendige overflade, og/eller når der er dampspærre eller malingslag inde før eller imellem lagene.

1. Ved overgang fra et materiale til et andet i lagfølgen fortsættes den automatiske kontrolvolumen inddeling (som nu), men med en anden udvikling i lagtykkelsen. Laggrænsen mellem materiale I og II betragtes. Hvis sI er den tykkelse det første kontrolvolumen efter laggrænsen vil have fået, hvis materiale I var fortsat, skal tykkelsen af det første kontrolvolumen i materiale II i stedet sættes til:

$$ S_{II} = \frac{s_{36.7 \%, II}}{s_{36.7 \%, I}} \cdot s_I \tag{1} $$

hvor s<sub>36,7% </sub>er materialernes effektive fugtindtrængningsdybde.   
Fx vil mineraluld bag en gipsplade få meget større kontrolvolumener (og det er ikke nogen skade til for beregningerne).

2. For materialer bag "enkeltfugtmodstande", fx malingslag på overfladen mod indeklimaet eller dampspærre beliggende mellem to materialelag i konstruktionen behøver lagtykkelsen af kontrolvolumenerne ikke væres så fin som ellers. Der foreslås følgende lagtykkelse for første kontrolvolumen bag en enkeltfugtmodstand:

$$ s_{II} = first \cdot Z_{VR} \cdot \delta_{II} \tag{2} $$

hvor s<sub>II</sub> er lagtykkelsen af første kontrolvolumen efter fugtmodstanden.  
*first* er den andel af den effektive indtrængningsdybde, som det første kontrolvolumen normalt skal have i henhold til tidligere definitioner i den automatiske netgenereringsalgoritme.   
Z<sub>VR</sub> er fugtmodstanden (af maling, dampspærre eller lign.), Pa·m²·s/kg   
δ<sub>II</sub> er damppermeabiliteten af laget bag diffusionsmodstanden, kg/(m·s·Pa)

Derefter kan kontrolvolumen tykkelsen skaleres op som sædvanligt efter den valgte "Factor".

s<sub>II</sub> kan sættes til den maksimale af den således beregnede størrelse og den under 1. fundne værdi (hvis der er et andet materiale foran dampspærren).

Endelig skal kontrolvolumenets tykkelse sættes til den minimale af den ovenfor fundne værdi og den værdi tsbi5 normalt ville have fundet (i henhold til ønsket "Layer thick").
