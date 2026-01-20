<link rel="stylesheet" href="../style.css">

# Default values


Default values are used in a number of locations in BSim if nothing else is given by the user. In the following all standard values used in BSim will be shown.

*   [Surface properties (finish)]()

*   [Room properties (temperature and moisture)]()

*   [Photovoltaic panels (PV)]()

 

### **Surface properties (finish)**

#### **Thermal surface resistance**

If nothing else is given a fixed surface resistances for finishes facing outdoors and respectively a thermal zone is used. The default values for the surface resistances and the convective heat transfer coefficients are shown in the table below.


| **Internal surface resistance**| **Value** | **Unit** |
|-------------------------|-----------|----------|
| Upward heat flow        | 0.10      | m²K/W |
| Vertical heat flow      | 0.13      | m²K/W |
| Downward heat flow      | 0.17      | m²K/W |
 <br>

| **External surface resistance** | **Value** | **Unit** |
|-------------------------|-----------|----------|
| Upward heat flow        | 0.04      | m²K/W |
| Vertical heat flow      | 0.04      | m²K/W |
| Downward heat flow      | 0.04      | m²K/W |

<br>

| **Internal convective resistance** | **Value** | **Unit** |
|------------------|-----------|----------|
| Floors           | 0.40      | m²K/W |
| Ceilings         | 0.50      | m²K/W |
| Walls            | 0.33      | m²K/W |

<br>

If simulation of long wave radiation (in / out) at the *Options* tab of *tsbi5*, a convective surface resistance will be calculated dynamically, dependant on the temperature difference between the surface and the air and the wind speed at the outside surfaces.

#### **Light technical properties**

If no material is selected representing the finish properties, *SimLight* will use the following default values for reflectance in the calculation of daylight conditions in the model:

*   Absorptance: 0.9

*   Reflectance: 0.2

*   Emissivity: 0.8

### **Room properties (temperature and moisture)**

If a space is placed **outside** a *thermal zone*, given the same temperature as a *real thermal zone* or connected to a *temperature profile*, 20 °C is used as a fixed indoor temperature during the entire simulation period.

 

### **Photovoltaic panels (PV)**

If no "material" is selected for areas with PV, a standard system is assumed consisting mono cristalline silicon cells, a good electrical layout and a proper AC/DC inverter. The default values for this are:

| **Variable**                     | **Value** |
|----------------------------------|-----------|
| System efficiency                | 8,12 %. |
| Shaded part efficiency           | 15 %. |
| Proportional shading reduction   | No. |

Photovoltaic panels can be calculated by a module in BSim.
