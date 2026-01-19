<link rel="stylesheet" href="../style.css">

# Glare Control
Often it is anticipated that solar shadings are controlled according to the solar incidence or the temperature in the room. Several research surveys do though indicate that the user rather control the shading according to glare from the daylight, e.g. from direct solar incidence or high sky illuminance. Research do also show that the user often let the shading remain closed until the daylight level in the room is inadequate for the actual task. The control type GlareCtrl aims at minimizing the visual discomfort both from glare and from too little daylight. The two criteria for discomfort are expressed by an index giving the probability for a user to endeavor visual discomfort, VDP ([Visual Discomfort Probability]()).

The control is made according to the daylight level in 2 [reference points](https://bsim.outseta.com/support/kb/articles/79O3J49E/referencepunkt), one for the location of the eye and one for a work-plane.

<figure id="center_img">
<img src="./assets/glare_fig1.gif" alt="">
<figcaption></figcaption>
</figure>

<br>

#### **Visual discomfort probability due to high lighting level**  
As basic for calculating the visual discomfort due to glare, a simplified expression for an equation developed in the EU research project[ ECCO-Build](https://vbn.aau.dk/ws/portalfiles/portal/691269896/sbi-2011-15.pdf.pdf) is being used. The simplified formula, expressing the probability that a person will experience discomfort from the lighting level at the eye is:

E<sub>v</sub> < 500:                   VGDP = 0,2  
E<sub>v</sub> > 13.000:               VGDP = 1  
VGDP = 6⋅10<sup>-5</sup> E<sub>v</sub> + 0,2 

*   E<sub>v</sub> is the lighting level at a vertical plan near the eye,

*   VGDP is the probability for experiencing glare.

The expression, shown graphically in the figure below, illustrate that there are large variation in a persons experience of glare. Some persons will experience glare at lighting levels at the eye as low as 1000 lux, while others may tolerate lighting levels up to 13000 lux.

<figure id="center_img">
<img src="./assets/glare_fig2.gif" alt="Visual discomfort probability due to glare, VGDP, is normally defined by the lighting level at a vertical plane located at the same position as the eye of the user.">
<figcaption>Visual discomfort probability due to glare, VGDP, is normally defined by the lighting level at a vertical plane located at the same position as the eye of the user.</figcaption>
</figure>

#### **Visual discomfort probability due to low lighting levels at the working plane**

The probability to experience visual discomfort due to glare must be evaluated in combination with the probability for visual discomfort due to low lighting levels on the working plane. An expression for experienced visual discomfort due to low lighting levels on the working plans is developed by [Lindelöf](https://bsim.outseta.com/support/kb/articles/A93zbqQ0/litteratur):

E<sub>h</sub> < 10 (lux):                VGDP = 1,0

E<sub>h</sub> < E<sub>opt</sub>:                      LDP = (1-VLDP<sub>min</sub>) (E<sub>opt</sub>-E<sub>h</sub>) / E<sub>opt</sub> + VLDP<sub>min</sub>

VGDP = VLDP<sub>min</sub>

*   E<sub>h</sub> is the lighting level on a horizontal plane (working plane),

*   E<sub>opt</sub> is the desired (optimal) lighting level on the working plane (or the working object), which depends on the actual working task,

*   VLDP is the probability for experiencing visual discomfort due to too little light,

*   VLDP<sub>min</sub> is the lowest value of the discomfort index, typically 0.2.

<br>

When control is needed due to glare, the control strategy depends on the type of shading device. For the type Venetian (blind), the lighting level in the selected reference point (normally a vertical plane at the position of the eye) is reduced to a level that the glare limit is just met.

For the types *Curtain* or *Screen* the shading is closed completely, and the new lighting level is calculated from the reduction factors for curtain. The adjustment of he shading at the start of a time-step is the same as at the end of the previous time-step. If the glare criteria is kept, it is being tested if the shading can be opened more to reach a higher lighting level in the second reference point (normally on a horizontal working plane) and to obtain the largest possible view.

<figure id="center_img">
<img src="./assets/glare_fig3.gif" alt="Visual discomfort due to too little light (visual discomfort probability, VLDP), normally defined by the lighting level on the working plane (or the working object). The desired value of the lighting level (Min. Lux) is selected by the user to perform the actual working task. In the figure the value is 500 lux.">
<figcaption>Visual discomfort due to too little light (visual discomfort probability, VLDP), normally defined by the lighting level on the working plane (or the working object). The desired value of the lighting level (Min. Lux) is selected by the user to perform the actual working task. In the figure the value is 500 lux.</figcaption>
</figure>