<link rel="stylesheet" href="../style.css">

# Stabilitetskriterie for indsvingning

Inden start af en simulering sættes alle temperaturer i modellen til 20 °C.

Modellen gennemregnes gentagne gange (op til det [maksimale antal iterationer/dage](https://bsim.outseta.com/support/kb/articles/EWBOvOmr/tsbi5-general-options)) indtil stabilitetskriteriet er opnået med udeklima svarende til den første dag i simuleringsperioden og temperaturen af indeluften i alle termiske zone registreres i time 14.

Lufttemperaturen i de termiske zoner i time 14 sammenlignes med de tilsvarende temperaturer for den foregående dag (samme udeklima) og den største forskel registreres som **dt**. Desuden registreres **delta**, som er dt for den aktuelle dag minus dt for den foregående dag.

Stabilitetskriteriet er opfyldt når:

*   dt < 0,1 °C  
og

*   delta < 0,01 °C

og den egentlige simulering starter med brug af klimadata som varierer fra dag til dag.
