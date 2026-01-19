<link rel="stylesheet" href="../style.css">

# Constructing a model
Abstraction, describing the essence of the problem in the syntax used by a simulation tool, is one of the most difficult tasks for novice and expert alike. There are rarely resources or grounds for implementing a one-to-one description of reality in the software. It may be useful to describe a PC as a heat source, whereas no one would think of describing the box of disks or the book on the table. A general rule for abstraction is to endeavor to retain the volume, surface area and thermal mass of a thermal zone. This guide is too short for an exhaustive explanation of this subject.

The learning curve for using BSim, which is able to model a wide range of different types of problem, is not trivial. As with the majority of advanced engineering programs there is the problem of syntax – expressed with dialog boxes and menus that control the software and its data, which together make up its input data and output data. A further problem for new users is the meaning of the system with regard to how the software requires the various physical phenomena to be modeled.

The strength, and at the same time the weakness, of BSim is its ability to offer the user different ways of describing and analyzing a problem. BSim not only expects a description of the problem that is systematically correct (there are of course a number of built-in probability checks), but also assumes that the problem is meaningful in a thermodynamic sense. In other words, the software has no way of checking the meaning of the constructed model.

To be effective, learning requires more than just access to a PC, some documentation and enough time to work things out by trial and error. This user's guide is a step along the road to making this learning curve less painful. It can in no way replace access to an experienced user of the software or proper training, but rather provides help with implementing this process. This is not to say that it is impossible to become an expert by self tuition, but that the non-technical aspects of the simulation process are difficult to communicate.

There are a number of golden rules that should be observed when constructing models for simulating the thermal conditions in buildings:

*   Spend the necessary [time](https://help.bsim.dk/support/kb/articles/dQG2Okm4/tidsforbrug) gathering knowledge (drawings, materials data, loads, etc.) of the building.

*   Think about the problem and the questions to be answered by the simulation in advance.

*   Construct the model as simply as possible while taking the above into account.

*   Assess whether the results are probable on a continuous basis (while constructing the model).

In the section with [learning examples](https://help.bsim.dk/support/kb/articles/BWzd7LQE/indlaringseksempler) three examples are found. These examples guides the first-time user through a simple creation of a building geometry, over addition of systems to the model and the first simulation with the tsbi5 program.

Before using the program it is recommended to get aquatinted with the [structure of BSim](https://bsim.outseta.com/support/kb/articles/wmjnBKmV/strukturen-i-bsim).

*   A number of [short-cuts](https://bsim.outseta.com/support/kb/articles/vWyPMJ9b/genvejstaster) exists in *BSim*.

*   Models can be edited using the [menu](https://help.bsim.dk/support/kb/articles/49EdrJQ7/simview---menu) in *SimView*.

*   The [mouse](https://bsim.outseta.com/support/kb/articles/DQ2xp4WV/operationer-med-musen-i-simview) is a tool that can be used in different ways within *SimView*.

*   At the top of the user interface there is a [toolbar](https://help.bsim.dk/support/kb/articles/E9Lw5nQw/simview---varktojsbjalken) giving easy access to different functions in *BSim*.

*   The [menus](https://bsim.outseta.com/support/kb/articles/pWrnYLWn/programmenuer-i-bsim) in BSim is interactive and **only** those entries valid for the actual selections or location are accessible.

The following ordered list of links to different pages in the user's guide runs through a typical work sequence from the start of a project, through editing the model geometry, to final simulation using *tsbi5*.

The BSim program to which the specified description belongs is indicated at the end of each line in *italics*.

*   A new project is created with a *[wizard](https://help.bsim.dk/support/kb/articles/yWogPPWD/model-wizard---oprette-en-ny-model)*.

*   A [building model](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning) is created in the project with *SimView*.

*   More [spaces](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum) are added to the model in *SimView*.

*   The model geometry is [edited](https://help.bsim.dk/support/kb/articles/L9PwMrQJ/simview---redigere-modelgeometrien) with *SimView*.

*   [Default constructions](https://bsim.outseta.com/support/kb/articles/y9gBKGQM/standardkonstruktioner) are attached from the database *SimDB*.

*   [New materials](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial) are created for use in new constructions in the database *SimDB*.

*   [New constructions](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement) are created from the materials in the database *SimDB*.

*   Some [default constructions are overwritten](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner) with constructions from *SimDB*.

*   [Windows, doors and openings in the faces are added](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor) in *SimView*.

*   Systems are added to the windows.
    *   [Shading](https://help.bsim.dk/support/kb/articles/7maw8X9E/systemer-shading)
    *   [Shutters](https://help.bsim.dk/support/kb/articles/ZmNrMxm2/systemer-shutter)

*   A face is [filled](https://help.bsim.dk/support/kb/articles/xmer2wQV/simview---insert-windoor) with a window or opening in *SimView*.

*   [Shadows from the surroundings](https://bsim.outseta.com/support/kb/articles/E9LwJGQw/skygger-fra-omgivelser) are added to the model in *SimView*.

*   Incident solar radiation in the model is simulated in [*XSun*](https://bsim.outseta.com/support/kb/articles/amRGdMQJ/analyse-af-solindfald-med-xsun).

*   The [daylight conditions](https://bsim.outseta.com/support/kb/articles/LmJvYAmP/dagslysberegninger-med-simlight) in a space are calculated with *SimLight*.

*   [Thermal zones are created](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/termisk-zone---egenskaber) for simulation in *tsbi5*.

*   [The spaces in the model are attached to the thermal zones](https://help.bsim.dk/support/kb/articles/amRGJpQJ/tilfoje-rum-til-termiske-zoner) in *SimView*.

*   [Systems are added](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer) to the thermal zones in *SimView*.
    *   [Cooling](https://help.bsim.dk/support/kb/articles/y9gBNGQM/systemer-cooling)
    *   [Equipment](https://help.bsim.dk/support/kb/articles/vW5a8pW4/systemer-equipment)
    *   [Heating](https://help.bsim.dk/support/kb/articles/wmjnq7mV/systemer-heating)
    *   [Infiltration](https://help.bsim.dk/support/kb/articles/Rm8JRZ94/systemer-infiltration)
    *   [Lighting](https://help.bsim.dk/support/kb/articles/wQXxbnQK/systemer-lighting)
    *   [Mixing](https://help.bsim.dk/support/kb/articles/Rm8JEd94/systemer-mixing) (air transfer between thermal zones)
    *   [Moisture](https://help.bsim.dk/support/kb/articles/xmere5QV/systemer-moisture)
    *   [People](https://help.bsim.dk/support/kb/articles/XQYdjgmP/systemer-persons)
    *   [Ventilation](https://help.bsim.dk/support/kb/articles/OW4N5AQg/systemer-ventilation)
    *   [Venting](https://help.bsim.dk/support/kb/articles/gWKDJlmp/systemer-venting)
*   [Simulation](https://bsim.outseta.com/support/kb/articles/A93z0lQ0/tsbi5) with tsbi5.

*   The [graphical presentation of the results](https://help.bsim.dk/support/kb/articles/aWxnxAQV/andring-af-den-grafiske-afbildning-af-resultater) can be modified and the graphics can be [imported](https://bsim.outseta.com/support/kb/articles/nmDBo29y/bsim-og-andre-windows-programmer) into other Windows programs.
