<link rel="stylesheet" href="../style.css">

# Blind control
This shading type can be used in the control of venetian blinds or other types of solar shading with hinged slats. The shading is controlled depending in the intensity of the solar incidence through the system: glazing + slats. The control is determined by the threshold value for the solar incidence for when the shading is being closed, and when it is being deactivated (opened more). At the beginning of the actual time schedule it is assumed that the solar shading will be in the position *"Open".* If the solar incidence in this position exceeds the value of *"Close"* (W/m²), the slats will turn to close more until the value of the solar incidence through the system reaches the value of *Close.* The solar incidence is being calculated from look-ups for the g-value in a table valid for the actual profile angle. As there are different g-values for direct and diffuse radiation (the latter independent of the profile angle), the optimum tilt of the slats must be determined by iterations.

It is important to notice that the shading factor for the solar shading is the actual factor, which is valid for the shading alone, but in combination with the actual glazing type. Typical g-values for different glazing types are found in the <a href="#daylight-reduction-venetian-blinds">graph</a> at the bottom of the page.

<figure id="center_img">
<img src="./assets/shd_blind_ctrl.gif" alt="Dialog for defining shading control of Venetian Blinds - BlindCtrl.">
<figcaption>Dialog for defining shading control of Venetian Blinds - BlindCtrl.</figcaption>
</figure>

<h4 id="blindctrl-parameters"></h4>
 
| Parameter | Description | Variants / interval, unit | Standard value |
|-----------|-------------|--------------------------|----------------|
| Close | Limit for solar incidence through shading above which the shading system is activated (closes more) | 50–800 W/m² | 150 |
| Open | Limit for solar incidence through shading, below which the shading system is activated (opens more) | 20–500 W/m² | 80 |
| SlatAngle Open | Angle for maximum opening of slats (measured from horizontal = 0°). | 0–45 | 0 |
| SlatAngle Close | Angle for slats in maximum closed position. | 30–90 | 90 |
| OverClose Angle | Extra closing angle. Used only in combination with <a href="#cut-off-control">CutOff control strategy</a>. | 0–5 | 0 |
| <a href="#cut-off-control">CutOff Strategy</a> | Slat closing strategy that exactly ensures cut-off of direct solar incidence. | on / off | off |
| [Ref. Point](https://bsim.outseta.com/support/kb/articles/79O3J49E/referencepunkt) | Gives a possibility of selecting already defined [reference points](https://bsim.outseta.com/support/kb/articles/79O3J49E/referencepunkt) where the level of daylight determines the control of the solar shading. |  |  |


The total solar transmittance a any given angle (β) of the slats in the solar shading is determined by: 

$$ E_{total} = E_{dif} \cdot g_{s, dif}(\beta) \cdot g_{g, dif} + E_{dir} \cdot g_{s, dir}(\beta, \theta_p) \cdot g_{g, dir}(\theta_i) $$

*   E<sub>total</sub> is the total amount of transmitted solar radiation, W/m²,

*   E<sub>dif</sub>  is the external diffuse solar radiation, W/m²,

*   E<sub>dir</sub> is the external solar radiation intensity, W/m²,

*   g<sub>s,dif</sub> is the total solar radiation transmittance for the shading device for diffuse radiation at the actual tilt (β) of the slats,

*   g<sub>s,dir</sub> is the total solar radiation transmittance for the shading device for direct radiation at the actual tilt (β) of the slats and the actual profile angle Θ<sub>p</sub>,

*   g<sub>g,dif</sub> is the solar transmittance for the glazing for direct radiation at the actual angle of incidence (Θ<sub>i</sub>),

*   β is the tilt of the slats in the shading device, measured from horizontal,

*   Θ<sub>p</sub> is the [profile angle](https://help.bsim.dk/support/kb/articles/7mawb19E/profilvinkel),

*   Θ<sub>i</sub> is the angle of incidence for direct solar radiation.

<figure id="center_img">
<img src="./assets/blind_fig1.gif" alt="g-values for glazing as a function of the angle of incidence. The four glazing types is (from above): A traditional double thermo pane glazing (U-value approx. 2.6 W/m²K), two low energy glazings with a low E-coating on the exterior and interior glass pane respectively, and a solar reducing glazing. The U-value for the three lower glazings is approx. 1.2 W/m²K.">
<figcaption>g-values for glazing as a function of the angle of incidence. The four glazing types is (from above): A traditional double thermo pane glazing (U-value approx. 2.6 W/m²K), two low energy glazings with a low E-coating on the exterior and interior glass pane respectively, and a solar reducing glazing. The U-value for the three lower glazings is approx. 1.2 W/m²K.</figcaption>
</figure>

<h3 id="daylight-reduction-venetian-blinds"><strong>Reduction of daylight when using venetian blinds</strong></h3>

When the actual angle of the slats in the shading device is calculated, then the daylight reduction in a given reference point can be calculated. The light calculations do not distinguish between internally and externally located blinds. The development of the reduction factor for a white shading device is shown in the figure below, of which it is clear that the light reduction is highest near the window and decreases with increased distance from the window. The reduction factor can be used in the simulation of daylight control for the artificial lighting in BSim, as it is also being used as an approximation for calculated solar light factors.

<figure id="center_img">
<img src="./assets/blind_fig2.gif" alt="Typical reduction of the daylight when using solar shading with white venetian blinds. The reduction factor can be used in the simulation of daylight control of the artificial light in BSim, as it is also being used as an approximation for calculated solar light factors.">
<figcaption>Typical reduction of the daylight when using solar shading with white venetian blinds. The reduction factor can be used in the simulation of daylight control of the artificial light in BSim, as it is also being used as an approximation for calculated solar light factors.</figcaption>
</figure>

<h4 id="cut-off-control"><strong>Cut-off control</strong></h4>   
Cut-off control is a special control strategy for solar shading devices with slats. In this control strategy the slats is adjusted to an angle that just cut off direct solar light from penetrating the shading device.

<figure id="center_img">
<img src="./assets/blind_fig3.gif" alt="Cut-off.">
<figcaption>Cut-off.</figcaption>
</figure>

The critical opening angle (cut-off) depends on the profile angle of the sun and the proportion between distance and width of the slats in the shading device. The cut-off angle is determined by:

$$ \beta_c = \arctan\left\{ \frac{\tan\theta \pm d \cdot \sqrt{1 + \tan^2\theta - d^2}}{d^2 - 1} \right\} \; \text{where minus must be used} $$

*   Θ is the [profile angle](https://bsim.outseta.com/support/kb/articles/79O3J49E/referencepunkt) calculated from the solar-window azimuth and the solar height,

*   d is the proportion between the distance and the width of the slats.

For a traditional (internal) venetian blind there is a typical overlap of the slats on approx. 20 % when the blind is closed, which gives a value of d = 1 / 1.2 = 0.83. The next figure show curves for the cut-off angle as a function of the profile angle at different proportions between width and distance if the slats.

<figure id="center_img">
<img src="./assets/blind_fig4.gif" alt="Variation of the Cut-Off angle for venetian blind based solar shading as a function of the solar profile angle and different proportions (d) between slat distance and slat width.">
<figcaption>Variation of the Cut-Off angle for venetian blind based solar shading as a function of the solar profile angle and different proportions (d) between slat distance and slat width.</figcaption>
</figure>

When the flag for CutOff Strategy is On in the <a href="#blindctrl-parameters">*BlindCtrl* dialog</a>, it is being examined if there will be direct solar incidence with the actual position of the slats. If there is direct solar on the facade, defined by the value of *Close* being exceeded, the slats are being turned to the critical β<sub>c</sub> plus an eventual value of OverCloseAngle. If OverCloseAngle have a value larger than 0, the number possible changes of the slat positions during the will be reduced. The next figure show how the CutOff angel vary for a venetian blind type solar shading on a South facing facade over the day in those months where the angle is above 0.

<figure id="center_img">
<img src="./assets/blind_fig5.gif" alt="Variation of the CutOff angle for a South facing facade during the day and for different months (the 15. in each month). The diagram is valid for Danish latitude (55.4 °N) and for proportions of slat with and slat distance of 0.83. For all times not shown on the figure, the CutOff angle is 0 or less.">
<figcaption>Variation of the CutOff angle for a South facing facade during the day and for different months (the 15. in each month). The diagram is valid for Danish latitude (55.4 °N) and for proportions of slat with and slat distance of 0.83. For all times not shown on the figure, the CutOff angle is 0 or less.</figcaption>
</figure>