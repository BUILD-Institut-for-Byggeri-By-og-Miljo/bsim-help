<link rel="stylesheet" href="../style.css">

# XSun menu
The XSun menu is revealed by right-clicking the graphic part of the window.

<figure id="center_img">
<img src="./assets/XSunLayout.gif" alt="XSun view of model (click figure to see an animation).">
<figcaption>XSun view of model (click figure to see an animation).</figcaption>
</figure>

The right-click menu has changed so that it relates directly to the functions in XSun. The menu options are as follows:

*   *SunDate*: Opens a dialog box for defining the date for the analysis of direct solar radiation with the following fields:

    *   *The Site* box gives information (normally taken from the climate data file) on the location of the building.

    *   *Sun Position* shows the position of the sun (azimuth and solar height) at the chosen time – date and hour – of the year. Further the time of sunrise and sunset for the selected day are shown.

    *   The *Hour* input field specifies the hour for which the stationary calculation is to be displayed (hours,minutes).

    *   The *Hour Step* field specifies the size of jump (hours,mintes) XSun should display the position of the "sunspots" with in the animation of solar distribution.

    *   *Day Step* offers the possibility of selecting how many days the program will jump from ending the animation of one day to the beginning of animation of the next day (can be 0).

    *   *Animation* *period* makes it possible to select a period of each day to anaimate. The format is hours,minutes.

    *   Options offers three possibilities for modifying the graphic view:

        *   A tick-mark in the *View the Building from the Sun* field will place the eye-point on the line connecting the building with the sun.

        *   Removing a tick-mark in the *Self Shadows* box, will remove shadows caused by the geometry of the building. Only direct solar radiation through WinDoors and openings plus shadows from other building in the model are shown.

        *   Removing the tick-mark from *Show inner shell* will hide the lines indicating the internal faces of the constructions and thus ease the view in complex models.

*   *Next Timestep*: Moves the position of the sun one step forward (defined in *Hour Step*) if an eventual animation has been stopped – shortcut: Alt-n

*   *Previous Timestep*: Moves the position one step back (defined in *Hour Step*) if an eventual animation has been stopped – shortcut: Alt-p.

*   *Refresh* redraws the location of the solar spots at the selected time.

*   *Animate*: Starts an animation of the position of direct solar radiation in the model one time step at a time from dawn to sunset.

*   *Kill animate*: Stops the animation of the course of the sun in the building at the current time - short cut: *Esc*.

*   *Capture Screen Shot*: Records the current screen picture in the video (*.avi) file. Initiated in the [XSun program menu](https://help.bsim.dk/support/kb/articles/nmDBw09y/xsun).

*   *Capture Animation*: Records the animation at the given date to the end of a video (*.avi) file. Initiated in the [XSun program menu](https://help.bsim.dk/support/kb/articles/nmDBw09y/xsun).

*   *SimPv*: Opens [SimPv](https://help.bsim.dk/support/kb/articles/pWrnRaWn/simpv) for calculation of the electrical yield from building integrated solar cell systems in BSim.

