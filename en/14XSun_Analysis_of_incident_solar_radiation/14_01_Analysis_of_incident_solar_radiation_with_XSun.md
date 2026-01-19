<link rel="stylesheet" href="../style.css">

# Analysis of incident solar radiation with XSun

*XSun*, which forms part of the *BSim* software suite, can be used for detailed analyses of the path of direct solar radiation through a building. It is possible to se where and when the sun strikes any face in the model.

Clicking the *XSun* button on the toolbar calls up the *XSun* view. Only a window for the geometric view and the [right-click menu](https://help.bsim.dk/support/kb/articles/j9b8Vwmn/xsun-menu) are specific to this program.

When XSun is active the [XSun-menu](https://help.bsim.dk/support/kb/articles/nmDBw09y/xsun) appears in user interface of BSim and contains, apart from the normal functions of the right-click menu, an option to capture a [video]() sequence of a XSun animation.

If the cursor (mouse) is held over one of the yellow "sunspots", its area will be displayed in a speech bubble. Clicking the "sunspot" highlights it or the windows and openings through which the rays of the sun have passed.

If a model is made in a way that it is possible for the sun to travel from one space to a neighbor space and back to the initial space, it will cause an infinite loop. This special case will be found and the error eliminated by stopping the sun from going into the neighbor space and back to the original space again. Doing this causes an unfixed error in the calculations.