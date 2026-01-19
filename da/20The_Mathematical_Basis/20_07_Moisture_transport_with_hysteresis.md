# Moisture Transport with Hysteresis

<p align="center">
Carsten Rode<br>
Department of Civil Engineering<br>
Technical University of Denmark<br>
www.byg.dtu.dk<br>
July, 2002
</p>


In the sorption diagram the differential change of moisture content per change of relative humidity is the specific moisture capacity:

 $$ \xi = \frac{\partial u}{\partial \varphi} $$

The state function shows some hysteresis between moistening (absorption) and drying (desoprtion). Empirical formulas are used two describe the moisture capacities on the scanning curves between moistening and drying.

For instance, in the sorption diagram, when the two most recent values of the moisture content show an increase, i.e. a wetting scanning curve is followed, the following expression is used to weigh ξ between the values from the desorption curve and the absorption curve. u is the current moisture content, while u<sub>a</sub> and u<sub>d</sub> are the moisture contents on the absorption and desorption curve, respectively, corresponding to the current relative humidity.

$$   
\xi_{\text{hys}} = \frac{0.1(u - u_a)^2 \, \xi_d + (u - u_d)^2 \, \xi_a}{(u_d - u_a)^2}  
$$

In the opposite situation, when the two most recent values of the moisture content show an decrease, i.e. a drying scanning curve is followed,

 

$$ \xi_{\text{hys}} = \frac{(u - u_a)^2 \, \xi_d + 0.1 \, (u - u_d)^2 \, \xi_a}{(u_d - u_a)^2} $$

 

Thus, in the calculations, it is necessary to keep track of the moisture content in the two most recent time steps, so it is possible to determine whether things are getting more dry or moist.

u is the most recently determined moisture content, and ua and ud are the moisture contents according to the most recently known relative humidity and the absorption and desorption curves repectively.
