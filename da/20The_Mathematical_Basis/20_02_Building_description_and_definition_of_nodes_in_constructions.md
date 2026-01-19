<link rel="stylesheet" href="../style.css">

# Bygningsopfattelse, knudepunktsinddeling

En bygning består af et vilkårligt antal lukkede termiske zoner, der hver er afgrænset af et vilkårligt antal flader. Desuden haves mindst én såkaldt fiktiv zone, nemlig udeluften, hvis tilstand ikke skal beregnes, men er givet ved data fra en fil eller fra en tidsplan, defineret af brugeren.

<figure id="center_img">
<img src="./assets/NET_BYGN.GIF" alt="Bygning med 4 termiske zoner med angivelse af knudepunkter og kontrolvolumener for zoneluft (ét knudepunkt) og konstruktioner (flere knudepunkter).">
<figcaption>Bygning med 4 termiske zoner med angivelse af knudepunkter og kontrolvolumener for zoneluft (ét knudepunkt) og konstruktioner (flere knudepunkter).</figcaption>
</figure>

Zoneluften er i bygningsbeskrivelsen repræsenteret ved ét knudepunkt, for hvilket der beregnes lufttemperatur og vandindhold. Der regnes med fuld opblanding af luften i en zone, og det er således ikke muligt direkte at foretage analyse af fx temperaturstratificering (temperaturlagdeling) i den enkelte zone. Der kan dog beregnes en tilnærmet temperaturstratificering ved at benytte kappa-modellen. Balanceligningerne, der giver tilstanden af zoneluftens knudepunkt, beskrives i et efterfølgende afsnit.

Konstruktionerne består af ét eller flere lag, som forudsættes at være homogene, bestående af ét materiale, der karakteriseres ved termiske materialeværdier. For at få en tilstrækkelig nøjagtig beregning, inddeles tykke materialelag i flere tyndere lag (kontrolvolumener). Dette gøres ved, at programmet automatisk vælger en knudepunktsafstand på ikke over 0,05 m (5 cm). For hvert konstruktionslag placerer BSim knudepunkterne med lige stor afstand, således at hvert knudepunkt repræsenterer den samme termiske masse. Særlige forhold gælder for de yderste lag i hver side af konstruktionen, idet der altid defineres et knudepunkt i de to overflader af konstruktionen, hver repræsenterende et kontrolvolumen med den halve tykkelse af den, der normalt udregnes for disse lag. En konstruktion vil således altid have mindst 3 knudepunkter.
