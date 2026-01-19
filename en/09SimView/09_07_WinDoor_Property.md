<link rel="stylesheet" href="../style.css">

# WinDoor Property

<figure id="center_img">
<img src="./assets/WindoorProperty.gif" alt="WinDoor Property.">
<figcaption>WinDoor Property.</figcaption>
</figure>

The *Area* field displays the information that the software has calculated from the opening's geometry and information from the database. The calculated quantities are: the area of the opening (*Opening*), the area of the glass (*GlassArea*), the area of the frame (*FrameArea*), the area of the panel (*PanelArea*), which is used in connection with simulating doors, and the length of the spacer profile (*SpacerLength*).

Please note that, the first time the dialog box is opened, the message *Impossible Geometry* will appear instead of *SpacerLength* and a stop sign will be displayed to the right of the *Override* button if the opening is not a rectangle or if the window was not selected from the database. The area of the frame and panel and the length of the spacer profile can be changed by clicking the [*Override* button](https://help.bsim.dk/support/kb/articles/A93zORQ0/windoor-override). The information fields in the dialog box describe the area of the opening, which face it belongs to, the U value for the attached WinDoors, and its entry in the database.

The message *Impossible Geometry* may also be caused by a wrong location of the actual Windoor, stretching into the *Inner Shell*, i.e. the constructions of the faces that meets the face that contains the Windoor. Can occur if the thickness of the constructions are increased e.g. by selecting new constructions from the database. It is not possible to run a simulation when impossible geometry is shown for any Windoor.

The following characteristics can be defined to describe a WinDoor:

*   *Recess (m)*: The retraction of the glass in relation to the outside of the wall in meters. If Recess = 0 is given, shading will be calculated as if the glazing was located parallel to the inner face of the construction. If the glass is to be placed parallel to the outer face of the construction, a small value (larger than 0.0001) must be given. <span id="red_text"> **NB**: Recess <u>only</u> works if [XSun solar distribution](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options) is turned on. </span>

*   *Select Systems* It is possible to select three systems to be linked to the WinDoor object:  
[Regulation](https://help.bsim.dk/support/kb/articles/y9gB57QM/regulation) (of natural ventilation),  
[Shutter](https://help.bsim.dk/support/kb/articles/ZmNrMxm2/shutter-system) (for night insulation) and  
[SolarShading](https://help.bsim.dk/support/kb/articles/7maw8X9E/shading-system) (for reducing the risk of overheating).   
These systems are defined by right-clicking the objects in the tree summary, which will open the relevant dialog box.

*   *DayLight*: Here three [solar light factors](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors) can be defined for the window ([Sf1](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors), [Sf2](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors) and [Sf3](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors)) manually. The solar light factors can be calculated and transferred automatic to the windoor dialog from [SimLight](https://help.bsim.dk/support/kb/articles/DQ2xz6WV/dagslysberegning-i-et-punkt).

*   *Side and Overhang*: The local geometry surrounding the object can be described by clicking the *Left, Right and Top buttons, which open [dialog boxes](https://help.bsim.dk/support/kb/articles/ZmNrw7m2/udhang-og-sidefinner) for defining the geometry of side fins and overhang*.  
<span id="red_text"> **NB:** Overhang and Sidefin **now** work in combination with [XSun solar distribution](https://help.bsim.dk/support/kb/articles/nmDBKR9y/tsbi5---options) but are not shown in [XSun](https://help.bsim.dk/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun) visualizations. If an overhang or side-fin are to be simulated using the XSun solar distribution these obstacles should preferabely be defined geometrically in the model.   
If Overhang or Sidefin is used **in combination with** XSun solar distribution, there is a risk for dubble shading on Windoor and thus very reduced solar incidence on the model. </span>

Based on this information the software calculates the frame area, panel area and the area of the caulking joint. The total U-value for a *WinDoor* is calculated in accordance with the instructions contained in the appendix to [DS418](https://help.bsim.dk/support/kb/articles/A93zbqQ0/litteratur) relating to the calculation of heat loss through windows and doors.

The [dialog boxes for defining overhang and side fins](https://help.bsim.dk/support/kb/articles/ZmNrw7m2/udhang-og-sidefinner) describe the shadow source relatively in relation to the window using the distance from the nearest edge of the glass and the distance from the outside of the wall to the front edge of the shadow source.

The [*Daylight* ](https://help.bsim.dk/support/kb/articles/A93zORQ0/windoor-override)button allows three solar light factors to be defined for the window ([Sf1](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors), [Sf2](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors) and [Sf3](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors)) manually. The solar light factors can be calculated and transferred automatic to the WinDoor dialog from [SimLight](https://help.bsim.dk/support/kb/articles/DQ2xz6WV/dagslysberegning-i-et-punkt).
