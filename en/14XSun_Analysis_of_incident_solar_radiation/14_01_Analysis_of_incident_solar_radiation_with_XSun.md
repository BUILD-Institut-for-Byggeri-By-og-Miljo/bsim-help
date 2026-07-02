<link rel="stylesheet" href="../style.css">

# Analysis of incident solar radiation with XSun

*XSun*, which forms part of the *BSim* software suite, can be used for detailed analyses of the path of direct solar radiation through a building. It is possible to see where and when the sun strikes any face in the model.

Clicking the *XSun* button on the toolbar calls up the *XSun* view. Only a window for the geometric view and the [right-click menu](14_02_XSun_menu.md) are specific to this program.

When XSun is active the [XSun-menu](14_02_XSun_menu.md) appears in the user interface of BSim and contains, apart from the normal functions of the right-click menu, an option to capture a [video](14_03_XSun_video.md) sequence of an XSun animation.

If the cursor (mouse) is held over one of the yellow "sunspots", its area will be displayed in a speech bubble. Clicking the "sunspot" highlights it or the windows and openings through which the rays of the sun have passed.

If a model allows the sun to travel from one space to a neighboring space and back to the initial space, an infinite loop may occur. This special case is detected, and the error is eliminated by preventing the sun from re-entering the neighboring space once it has returned to the original space. If this occurs, the calculations may still contain an unresolved error.