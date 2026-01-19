<link rel="stylesheet" href="../style.css">

# Control priority for systems

The desired operative temperature can be achieved using several of the systems described above, which can work independently or simultaneously. The order of priority of the possible control systems is determined by the selected temperature set points and is dependent on whether there is a need for heating or cooling at a given time.

**Control priority for heating (temperature to be raised)**

The following systems can help to raise the temperature:

*   [Radiator](https://help.bsim.dk/support/kb/articles/wmjnq7mV/opvarmning)

*   [Ventilation system (heat recovery, heating coil)](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation)

The system with the highest set point is activated first, but in such a way that the limits on the available powers and on supply temperatures are always complied with (if possible).

**Example**

In the 'heating control' for a [radiator](https://help.bsim.dk/support/kb/articles/wmjnq7mV/opvarmning) the set point is 21.5°C, while the '[room temperature control](https://help.bsim.dk/support/kb/articles/DQ2x0yWV/ventilation---rumtemperaturregulering)' for a [ventilation system](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation) specifies a minimum supply temperature of 16.0°C and a heating set point of 21.0°C. What will happen is that the temperature of the supply air will be 16.0°C, while more and more heat will be given off by the radiator to keep the room temperature to 21.5°C as the heating requirement increases. If the radiator's available power is insufficient to maintain 21.0°C, the supply temperature will be increased to maintain this room temperature.

**Control priority for cooling (temperature to be lowered)**

The following systems can help to lower the temperature:

*   [Shading](https://help.bsim.dk/support/kb/articles/7maw8X9E/solafskarmning)

*   [Venting](https://help.bsim.dk/support/kb/articles/gWKDJlmp/udluftning)

*   [Cooling](https://help.bsim.dk/support/kb/articles/y9gBNGQM/koling) (cooling radiator)

*   [Ventilation system](https://help.bsim.dk/support/kb/articles/OW4N5AQg/ventilation) (cold recovery, [VAV](https://help.bsim.dk/support/kb/articles/j9b8kamn/ventilation---vav-regulering), cooling coil)

*   ([Lighting](https://help.bsim.dk/support/kb/articles/wQXxbnQK/belysning))

In this case the individual systems/components are activated on the basis of the lowest set point.

**Example**

There follows an example of the set points that determine the control priority for the systems in a model where there is a cooling requirement.

<table class="tg">
<thead>
<tr>
<th class="tg-oevy">System</th>
<th class="tg-oevy">Control</th>
<th class="tg-oevy">Set points Value</th>
<th class="tg-oevy">Priority</th>
</tr>
</thead>
<tbody>
<tr>
<td class="tg-gvcd">Shading</td>
<td class="tg-gvcd">Shading control</td>
<td class="tg-gvcd">Max. sun 200 W/m<sup>2</sup></td>
<td class="tg-v0nz">(1)</td>
</tr>
<tr>
<td class="tg-gvcd">Venting</td>
<td class="tg-gvcd">Venting control</td>
<td class="tg-gvcd">Temp limit 21,5 °C</td>
<td class="tg-v0nz">1 or 2</td>
</tr>
<tr>
<td class="tg-gvcd">Cooling radiator</td>
<td class="tg-gvcd">Heating/cooling ctrl</td>
<td class="tg-gvcd">Set point 22,0 °C</td>
<td class="tg-v0nz">3</td>
</tr>
<tr>
<td class="tg-gvcd">Ventilation system</td>
<td class="tg-gvcd">VAV control</td>
<td class="tg-gvcd">Set point 24,0 °C  

Min. supply temp. 16,0 °C  

VAV set point 21,0 °C  

Cooling set point 25,0 °C</td>
<td class="tg-v0nz">4  

(0)  

1  

5</td>
</tr>
<tr>
<td class="tg-gvcd">Lighting</td>
<td class="tg-gvcd">Lighting control</td>
<td class="tg-gvcd">Temp. limit 27,0 °C  

(Sun limit 0,25 kW)</td>
<td class="tg-v0nz">(6)  

-</td>
</tr>
</tbody>
</table>

 

The controller for the ventilation system will try to keep the supply temperature down to 16.0°C, but initially without switching on the cooling coil. This supply temperature can therefore only be maintained as long as the outdoor temperature is lower than 16.0°C less the temperature rise in the system.

Shading is not included in the prioritization of the control functions in quite the same way as the other systems. In the first place shading will always be activated if the incident solar radiation through the window to which it is attached would otherwise exceed the Max. sun limit value. The shading will also always be activated if the calculated room temperature without control exceeds the shading's Temp. Max. temperature limit, irrespective of whether this set point is higher than another.

The control priority will therefore be as follows:

1.  If the operative temperature calculated without control exceeds 21.5°C, the *shading* will be drawn as far as necessary to maintain 21.5 °C.

2.  If the operative temperature calculated without control exceeds 21.0°C, but not 21.5°C, the first control action with the specified set points will be for the *ventilation* system to increase the volume flow rate in an attempt to achieve 21.0°C.

3.  If the volume flow rate reaches the maximum (determined by VAV control's max factor) without it being possible to keep the operative temperature down to 21.0°C, the software will check the next set point. In this example it is the *shading* set point of 21.5°C. If the operative temperature is between 21.0 and 21.5°C, there will be no further control action. If the operative temperature exceeds 21.5°C, on the other hand, the *shading* will be drawn if this has not already happened, cf. point 1.

4.  If neither this nor the subsequent set points can be maintained, the systems will be controlled in the specified order of priority: *venting, cooling radiator,* the ventilation system's *cooling coil* and, if appropriate, *lighting.* Lighting control consists in the general lighting being switched off to reduce the room's heat load. This priority appears in brackets because it is also dependent on the total solar radiation in the zone exceeding the value selected for *Sun limit.*
