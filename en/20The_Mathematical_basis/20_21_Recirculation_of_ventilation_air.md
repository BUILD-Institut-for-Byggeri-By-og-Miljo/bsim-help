<link rel="stylesheet" href="../style.css">

# Recirculation

This page is currently under construction <img src="./assets/SIGN.gif" width=25>

<div id="gray_background">
Recirculation of ventilation air happens according to the pseudo-code shown below.
</div>
<br>

<figure id="center_img">
<img src="./assets/recirculation system.gif" alt="Principle diagram for ventilation systems with recirculation of air">
<figcaption>Principle diagram for ventilation systems with recirculation of air.</figcaption>
</figure>


The numbers in the figure refers to the general description of the state of the air in ventilation the system and building. Recirculation (Return air) can control the conditions in the thermal zone by:

*   changing the share of return air (the share between the air flows 5a/11)

*   change the (total) inlet air flow (11)

*   humidifier (9 → 10)

*   de-humidifier (cooling coil) (6 → 7)

### **Input to ventilation systems**

In the present general data, the existing fan equals fan 1: supply and 2: exhaust. Two additional fans must be added: 3: return and 4: intake. Normally the current return fan will be placed as fan 2 in the figure above.

It should be considered if MinHeatRec and MaxCoolRec should be moved to the control tab later on (in some cases they can be considered being control parameters).

### **Input to recirculation: ReturnairCtrl**

| **Parameter**       | **Unit** | **Meaning** |
|---------------------|----------|-------------|
| MinSupplyRatio      | 0–1,0    | Lower value for share of nominal inlet air flow. The proportion between SupplyAir and Exhaust is kept constant when Supply is being changed. |
| MinReturnRatio      | 0–1,0    | Lower limit for share of recirculated air compared to Supply |
| MaxReturnRatio      | 0–1,0    | Upper limit for share of recirculated air compared to Supply |
| SetP CO₂            | ppm      | Upper limit for CO₂ content in zone air |
| SetPHumid           | %        | Lower limit for relative humidity in zone air |
| SetPDehumid         | %        | Upper limit for relative humidity in zone air |
| MinInletTemp        | °C       | Lower limit for inlet air temperature |
| MaxInletTemp        | °C       | Upper limit for inlet air temperature |
| SetPTemp            | °C       | Desired set-point for operative temperature in the thermal zone |



### **Start conditions for first time-step**


| **Parameter** | **Value in first time-step** | **Explanation** |
|--------------|------------------------------|-----------------|
| SupplyRatio  | MinSupplyRatio               | The lowest possible air flow is blown into the thermal zone |
| ReturnRatio  | MaxReturnRatio               | The highest share (compared to Supply) of recirculation is being used |
| InletTemp    | ZoneAirTemp                  | The zone air temperature in the previous time-step |


 

### **Start conditions for next time-steps**

| **Parameter** | **Value in next time-step** | **Explanation** |
|--------------|-----------------------------|-----------------|
| SupplyRatio  | SupplyRatio                 | Value in previous time-step |
| ReturnRatio  | ReturnRatio                 | Value in previous time-step |
| InletTemp    | ZoneAirTemp                 | Zone air temperature in previous time-step |
 

**Control priority**

1.  CO<sub>2</sub>

2.  Moisture

3.  Temperature

 

### **Control of CO<sub>2</sub>**

value in the zone (4) below SetP CO<sub>2</sub>: *no control*

value in the zone (4) above SetP CO<sub>2</sub>:   
*control:*

1.  if ZoneAirCO<sub>2</sub> > OutdoorAir CO<sub>2</sub>: reduction of ReturnRatio

2.  when/if ReturnRatio=MinReturnRatio: increase of SupplyRatio

*Intern parameter*: calculate MinOutdoorAir to obtain SetP CO<sub>2</sub> (minimum outdoor air-flow to keep the CO<sub>2</sub> level below CO<sub>2</sub> SetPoint).

 

### **Control of moisture**

Conversion of SetPHumid and SetPDehumid to values of relative humidity at temperature SetPTemp. If the value in the zone (4) is above SetPHumid and below SetPDehumid: no control

value in the zone (4) below SetPHumid:   
control

1.  (increase of ReturnRatio - can hardly be a situation that occurs)

2.  humidification via Humidifier (9 → 10) with a check that the state of the indoor air do not go above the saturation curve for air state 9

3.  if the saturation curve is reached: increase of SupplyRatio (- calculate how much!)

4.  humidification via Humidifier (9 → 10) with a check that the state of the indoor air do not go above the saturation curve for air state 9

value in zone (4) above SetPDehumid:   
control

1.  if ZoneAirHum > OutdoorAirHum: reduction of ReturnRatio

2.  when/if ReturnRatio = MinReturnRatio: increase of SupplyRatio

3.  when/if SupplyRatio = 1: start cooling coil for de-humidification (6 → 7)

 

### **Control of temperature**

Value in zone (4) is below (ZoneAirTemp - DeltaT):   
*Control*

1.  start heating coil until ZoneAirTemp = SetPTemp (7 → 8)

2.  start radiator until ZoneAirTemp = SetPTemp

Value in zone (4) is above (ZoneAirTemp + DeltaT):

*Control*

1.  if ClCoil > MaxCoolPower (negative): increase cooling power (6 → 7)

2.  if the zone indoor air humidity goes below SetPHumid: start humidifier (9 → 10)
