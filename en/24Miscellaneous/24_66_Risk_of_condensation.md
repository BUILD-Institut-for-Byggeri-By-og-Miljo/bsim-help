<link rel="stylesheet" href="../style.css">

# Risk of condensation


In the list with result parameters from thermal simulations with *tsbi5*, the risk of condensation on the surfaces of *WinDoors* and constructions are given as indicated below.


| **CondRisc** | **Condition** |
|--------------|---------------|
| 0 | The surface temperature is more than 5 °C higher than the dew point temperature of the surrounding air. |
| 0–1 | The surface temperature is 0–5 °C above the dew point temperature of the surrounding air and *CondRisc* is calculated as:  <br><br>$$ \text{CondRisc} = 1 - \frac{\Delta T}{5} \tag{1} $$ |
| 1 | The surface temperature is the same as or lower than the dew point temperature of the surrounding air. |
