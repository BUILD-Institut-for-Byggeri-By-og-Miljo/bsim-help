<link rel="stylesheet" href="../style.css">

# Mathematical basis, Natural ventilation
Simulation of natural ventilation in the module for BSim requires</span>[ input at various locations](https://help.bsim.dk/support/kb/articles/49EdKkQ7/naturlig-ventilation-system)<span style="letter-spacing: -0.01em;"> of the model.</span>

Natural ventilation can be activated at thermal zone level.

In the calculations BSim considers only Windoors/opening to the exterior.

The model to use can be automatically selected by BSim.

Natural ventilation is implemented as a special form of Venting in a module for BSim.

 

### **Calculation methods for natural ventilation**

$$ 
q_v = \left| \pm q_{Vv}^2 \pm q_{\text{VT}}^2 \right|^{\frac{1}{2}} = \left| \frac{c_v}{|c_v|} \left( c_v v_{10} \right)^2 + \frac{\Delta T}{|\Delta T|} \left( c_T |\Delta T|^{\frac{1}{2}} \right)^2 \right|^{\frac{1}{2}} \tag{1} 
$$

<br>
<br>


#### **Single Sided One Level**
One pair of openings in one face, in the same vertical level. <br>
Thermal buoyancy and wind:
$$
c_V = 0{,}03A
$$

$$
c_T = 0{,}05 h^{1/2} A
$$

<figure id="center_img">
<img src="./assets/nv_image1.gif" alt="">
<figcaption></figcaption>
</figure>


#### **Single Sided Horizontal**
One pair of openings in a non vertical face. <br>
Thermal buoyancy:

$$
c_T = 0{,}06A \left( \frac{gA^{1/2}}{T_i} \right)^{1/2} \quad \text{for } h/A^{1/2} < 0{,}1
$$

$$
c_T = 0{,}18A \left( \frac{gh}{T_i} \right)^{1/2} \quad \text{for } 0{,}1 < h/A^{1/2} < 0{,}7
$$

Wind:

$$
c_V = 0
$$

<figure id="center_img">
<img src="./assets/nv_image2.gif" alt="">
<figcaption></figcaption>
</figure>

#### **Single Sided Dif Level**
Several pairs of openings in one face in different vertical levels.  <br>
Uniform temperature distribution in the thermal zone.<br>
Thermal buoyancy:
$$
c_T = \sum_{j=1}^{n_0} C_{d,j} A_j \left( \frac{2(H_0 - H_j)g}{T_i} \right)^{1/2}
$$

$$
\sum_{j=1}^{n} C_{d,j} A_j |H_0 - H_j|^{1/2} \frac{H_0 - H_j}{|H_0 - H_j|} = 0
$$

Wind:

$$
c_V = 0{,}03A
$$

<figure id="center_img">
<img src="./assets/nv_image3.gif" alt="">
<figcaption></figcaption>
</figure>

#### **Cross**
Openings in two faces in the same vertical level (cross ventilation) <br>
Thermal buoyancy:

$$
c_T = 0
$$

Wind:

$$
c_v = \sum_{j=1}^{n_v} C_{d,j} A_j \left( C_{p,j} - \frac{2p_i}{\rho_u (k h^{\alpha} v_{10})^2} \right)^{1/2} k h^{\alpha}
$$

$$
\sum_{j=1}^{n} C_{d,j} A_j \left( \frac{ |2\Delta p_j| }{ \rho } \right)^{1/2} \frac{ \Delta p_j }{ |\Delta p_j| } = 0
$$

$$
\Delta p_j = p_{v,j} - p_i = \frac{1}{2} C_{p,j} \rho_u v_{\text{ref}}^2 - p_i \neq 0
$$

<figure id="center_img">
<img src="./assets/nv_image4.gif" alt="">
<figcaption></figcaption>
</figure>

#### **Combined Two Level**
Openings in several levels in two non parallel faces.
<br>
Thermal buoyancy:
$$
c_T = \sum_{j=1}^{n_0} C_{d,j} A_j \left( \frac{2(H_0 - H_j)g}{T_i} \right)^{1/2}
$$

$$
\sum_{j=1}^{n} C_{d,j} A_j |H_0 - H_j|^{1/2} \frac{H_0 - H_j}{|H_0 - H_j|} = 0
$$

Wind:

$$
c_v = \sum_{j=1}^{n_v} C_{d,j} A_j \left( C_{p,j} - \frac{2p_i}{\rho_u (k h^{\alpha} v_{10})^2} \right)^{1/2} k h^{\alpha}
$$

$$
\sum_{j=1}^{n} C_{d,j} A_j \left( \frac{2|\Delta p_j|}{\rho} \right)^{1/2} \frac{\Delta p_j}{|\Delta p_j|} = 0
$$

$$
\Delta p_j = P_{v,j} - p_i = \frac{1}{2} C_{p,j} \rho_u v_{\text{ref}}^2 - p_i \neq 0
$$

<figure id="center_img">
<img src="./assets/nv_image5.gif" alt="">
<figcaption></figcaption>
</figure>

#### **Combined**
Openings in more levels in more than two faces (combined buoyancy- and cross ventilation).
$$
q_v = \sum_{j=1}^{n_1} C_{d,j} A_j \left( \frac{2\Delta p_j}{\rho} \right)^{1/2}
$$

$$
\Delta p_j = p_j - p_i = \left( \frac{1}{2} \rho_u C_{p_j} \cdot v_{\text{ref}}^2 + \rho_u g (H_{0,\text{ref}} - H_j) \frac{\Delta T}{T_i} \right) - p_i \neq 0
$$

<figure id="center_img">
<img src="./assets/nv_image6.gif" alt="">
<figcaption></figcaption>
</figure>