<link rel="stylesheet" href="../style.css">

# Recirkulation, Ventilation

Regulering af ventilationen med henblik på udnyttelse af recirkulation.

<figure id="center_img">
<img src="./assets/ventilation_rac.jpg " alt="Regulering af ventilationen med recirkulering af luften.">
<figcaption>Regulering af ventilationen med recirkulering af luften.</figcaption>
</figure>


*   *Min Supply Ratio* er den mindst tilladelige andel (af *Supply* givet på fanebladet [Ventilation](/11Systems/11_21_Systems_Ventilation.html)) af luft (udeluft + recirkuleret luft) som anlægget forsyner zonen med.

*   *Min Return Ratio* er den mindste andel af recirkuleret luft i anlægget.

*   *Max Return Ratio* er den maksimale andel af recirkuleret luft i anlægget.

*   *Setp CO2* er setpunktet for CO2-niveauet i zonen som anlægget skal styre efter. Hvis *Setp CO2* = 0 styres der ikke efter CO2-niveauet.

*   *Setp Humid* er setpunktet for fugtindholdet i zonens indeluft som anlægget skal styre efter. Hvis fugtindholdet er under setpunktet startes befugteren for igen at bringe fugtindholdet op på det ønskede niveau. Hvis *Setp Humid* = 0 styres der ikke efter en nedre grænse for fugtindholdet i indeluften. Reguleringen tilstræber at holde den relative fugtighed i zonen over setpunktet. Setpunktet bør altid være mindre end setpunktet for affugtning.

*   *Setp Dehumid* er setpunktet for fugtindholdet i zonens indeluft som anlægget skal styre efter. Hvis fugtindholdet er over setpunktet startes affugteren for igen at bringe fugtindholdet ned på det ønskede niveau. Hvis *Setp Dehumid* = 0 styres der ikke efter en øvre grænse for fugtindholdet i indeluften. Reguleringen tilstræber at holde den relative fugtighed i zonen under setpunktet. Setpunktet bør altid være større end setpunktet for befugtning.

*   *Min Inlet Temp* er den mindste indblæsningstemperatur som accepteres i zonen. Indblæsningstemperaturen vil opnå *Min Inlet Temp* hvis der er aggregater tilgængelige i ventilationssystemet (faneblad [Ventilation](/11Systems/11_21_Systems_Ventilation.html)) som kan hæve lufttemperaturen.

*   *Max Inlet Temp* er den højeste indblæsningstemperatur som accepteres i zonen. Indblæsningstemperaturen vil opnå *Max Inlet Temp* hvis der er aggregater tilgængelige i ventilationssystemet (faneblad [Ventilation](/11Systems/11_21_Systems_Ventilation.html)) som kan sænke lufttemperaturen.

*   *Setp Temp* er den ønskede operative temperatur for zonen.

Reguleringen af ventilationsluften med recirkulation af ventilationsluften sker i henhold til beskrivelsen i [teoriafsnittet](/11Systems/11_28_Ventilation_Recirculation.html).


