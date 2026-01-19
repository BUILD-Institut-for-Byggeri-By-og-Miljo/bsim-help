# Analyse af solindfald med XSun

*XSun* er en del af *BSim*-programpakken, som kan benyttes til detaljerede analyser af den direkte solstrålings bane gennem en bygning. Det er muligt at se, hvor og hvornår solen rammer en vilkårlig flade i modellen.

Ved tryk på knappen *XSun* i værktøjsbjælken skiftes der til *XSun*-visning. Der er kun et vindue til den grafiske visning og [højre-klik-menuen](https://help.bsim.dk/support/kb/articles/j9b8Vwmn/xsun-menu?__cf_chl_tk=Vu.OsrbsjEjrKdwp9NaUa2nTRkoAQZsB4M.Q00XXD4Q-1750769564-1.0.1.1-cmkfqK.U1QCjDuY8FgAUU7vWEAKcvMTlE3lQ1xIKN7o) er speciel for dette program.

Når XSun er aktiv fremkommer en [XSun-menu](https://help.bsim.dk/support/kb/articles/nmDBw09y/xsun) i programfladen og indeholder, ud over højre-klik menuen mulighed for optagelse af [video](https://help.bsim.dk/support/kb/articles/zWZA419p/xsun-video) fra en XSun animation.

Når cursoren (musen) holdes over en af de gule "solpletter", vises dens areal i en bobletekst. Hvis der klikkes på "solpletten", markeres den eller de vinduer og åbninger som solstrålerne har passeret gennem.

Hvis der opbygges en model som giver mulighed for at sende solen fra et rum ind i et naborum, gennem dette og tilbage til det oprindelige rum, vil der opstå en uendelig løkke. Dette specialtilfælde findes og fejlen forhindres ved at afskære solen fra at passerer naborummet og tilbage til det oprindelige rum. Herved opstår en fejl i beregningerne.
