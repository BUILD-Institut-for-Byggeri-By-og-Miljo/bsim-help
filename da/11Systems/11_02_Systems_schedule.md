<link rel="stylesheet" href="../style.css">

# Schedule, System
I brugergrænsefladen afspejles strukturen at systemerne i dialogerne for de enkelte komponenter, idet der for alle komponenter findes et faneblad Schedule, som definerer tidsplanen, der skal anvendes for den konkrete komponent.

Rækkefølgen af regulering/tidsplan-parrene (*DayProfile/Time*) på oversigtsfanebladet er af stor betydning, idet den under en simulering bestemmer den regulering, der skal anvendes sammen med den aktuelle komponent. Til et givet tidspunkt (ved starten af hver time) gennemløbes tidsplanen i den rækkefølge, der er vist i oversigtsfanebladet. Ved det første par af regulering/tidsangivelse, hvor det givne tidspunkt falder inden for tidsangivelsen, vil den tilhørende regulering blive anvendt sammen med dens komponent. Hvis det givne tidspunkt derimod ikke falder inden for nogen tidsangivelse i tidsplanen, vil det bevirke, at den tilhørende komponent ikke aktiveres, hvorfor der ikke vil være nogen indeklimamæssig påvirkning på det pågældende tidspunkt.

Den samlede oversigt for et system ses på fanen tidsplan *(Schedule).*

<figure id="center_img">
<img src="./assets/Schedule.GIF" alt="Dialogen tidsplan (Schedule) viser de kombinationer af reguleringer (DayProfile eller regulering) og tidsangivelse (Time), der er tilknyttet det aktuelle system."> 
<figcaption>Dialogen tidsplan (Schedule) viser de kombinationer af reguleringer (DayProfile eller regulering) og tidsangivelse (Time), der er tilknyttet det aktuelle system.</figcaption>
</figure>

*tsbi5 gennemløber listen oppefra (se følgende figur), hvorfor det kan være nyttigt, at kunne bytte om på rækkefølgen af systemerne. Det gøres med tryk på knapperne "Move Up" (flyt op) og "Move Down" (flyt ned).*

<figure id="center_img">
<img src="./assets/schedule_time.gif" alt="Listen med de forskellige tidsangivelser (schedules) gennemløbes fra toppen."> 
<figcaption>Listen med de forskellige tidsangivelser (schedules) gennemløbes fra toppen.</figcaption>
</figure>

Det er således **kun** den regulering som ligger inden for den første tidsangivelse som tsbi5 møder der kommer i funktion (markeret med en tyk ramme). Reguleringen som er tilknyttet tidsangivelsen *Always* vil kun blive benyttet i det tidsrum som ikke er "optaget" af de tidsangivelser som er placeret højere oppe i schedule tabellen.

Tidsangivelser som indeholder **hele** året (simuleringsperioden) skal derfor altid være placeret nederst i schedule tabellen, og bruges normalt til at "fange" de tidspunkter som falder uden for de øvrige tidsangivelser.

Se også tidsangivelse ([Time](/11Systems/11_17_Systems_Time.html)).

