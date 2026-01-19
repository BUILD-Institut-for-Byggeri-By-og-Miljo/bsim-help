<link rel="stylesheet" href="../style.css">

# Room temperature

When you right-click a room in the tree structure the following dialog is revealed for definition of the thermal properties of the room when being outside any thermal zone.

<figure id="center_img">
<img src="./assets/room_property_ok.jpg" alt="The thermal properties of a space (Room Property) can be given as a real thermal zone or a fixed temerature profile by clicking Room Temp.">
<figcaption>The thermal properties of a space (Room Property) can be given as a real thermal zone or a fixed temerature profile by clicking Room Temp.</figcaption>
</figure>


In the selection menu ROOM the condition (Unknown/Heated/Unheated) of the space can be selected. Selection of the space condition is **only** necessary if the model is to be transferred to the Be18-program for energy frame calculations.

If the space alvays have the same indoor conditions as a real thermal zone, this zone can be selecetd from *Thermal Properties*.

The idoor climate variation in a space can also be descriped as a cosinus shaped variation over the year and day.

<figure id="center_img">
<img src="./assets/roomtemp.gif" alt="The dialog RoomTemp gives the possibility for definition of a temperature variation in a space outside the thermal zones. This spaces can be interpreted as virtual zones.">
<figcaption>The dialog RoomTemp gives the possibility for definition of a temperature variation in a space outside the thermal zones. This spaces can be interpreted as virtual zones.</figcaption>
</figure>


Annual variation of the temperature in a space is calculated as daily average temperatures from:

$$  
t_d = t_0 + \Delta t \cdot \left( \cos\left(\left(\text{dn} - \text{dn}_{\text{max}}\right) \cdot \left(\frac{2\pi}{365}\right)\right)\right) \tag{1}  
$$

where:

*t<sub>0</sub>* is the annual average space temperature in °C,

*Δt* is the half difference between maximum and minimum space temperature in °C,

*dn* is the actual day number,

*dn<sub>max</sub>* is the number of the day with the maximum space temperature (i.e.. 21. June = 172).

<figure id="center_img">
<img src="./assets/roomtempgraph.gif" alt="Annual variation of the temperature in a space. Here the annual average temperature is 20 °C. the variation is 4 °C (Maximum - Minimum) with a maximum on 21. June (day number 172).">
<figcaption>Annual variation of the temperature in a space. Here the annual average temperature is 20 °C. the variation is 4 °C (Maximum - Minimum) with a maximum on 21. June (day number 172).</figcaption>
</figure>


<span style="letter-spacing: -0.01em;">As a daily variation on the calculated daily space temperature, a daily variation can be forced on to of each daily average temperature. The variation is step-vies for each hour:</span>

$$  
t_h = t_d + \Delta t_h \cdot \left( \cos\left(\left(h - h_{\text{max}}\right) \cdot \left(\frac{\pi}{12}\right)\right)\right) \tag{2}  
$$

where:

*t<sub>d</sub>* is the calculated daily average space temperature for the actual day in °C,

*Δt<sub>h</sub>* is the half value of the daily variation (Day Variation) in °C,

*h* is the actual hour,

*h<sub>max</sub>* is the hour where the maximum temperature occurs.

<figure id="center_img">
<img src="./assets/dswing.jpg" alt="Daily variation of the temperature in a space with a average day- temperature of 21 °C, a maximum temperature in hour 13 and a daily temperature variation of 4 °C.">
<figcaption>Daily variation of the temperature in a space with a average day- temperature of 21 °C, a maximum temperature in hour 13 and a daily temperature variation of 4 °C.</figcaption>
</figure>

A corresponding variation can be forced on the moisture content in a space.