<link rel="stylesheet" href="../style.css">

# Climate data

A calculation cannot be carried out with either *tsbi5*, *XSun* or *SimLight* without an attached climate file. The climate file is attached to the building by right-clicking the building in the tree summary and clicking the *Site* button, which brings up the dialog box for selecting climate data.

<figure id="center_img">
<img src="./assets/SiteProperty.GIF" alt="Selecting or defining climate data.">
<figcaption>Selecting or defining climate data.</figcaption>
</figure>

It is possible to search the computer manually for files containing climate data by clicking the *Browse* button. *New* has to be clicked before a climate file can be selected. At the right of the *Browse*-button, information about the content of the selected weather file is shown.

If an analysis of incident solar radiation with *XSun* is all that is to be carried out, it will be sufficient to complete the data in the Location group instead of selecting a weather data file.

If a weather data file is selected, information for the *Location* group is taken from it and the data fields are displayed in gray. The geographical position of the building is specified in *Location* using *Latitude*, *Longitude* and *TimeZone*. The time zone is positive moving eastwards, i.e. Denmark is in time zone 1. *Elevation* is the height above sea level for the station where the climate data have been measured.

The general horizon cut-off (*Horizon*), reflection of solar radiation (*SolarRad*.) and reflection of daylight (*Light*) from the surroundings can be specified in the *Ground Reflectance* group of data.

Clicking the [Ground](https://help.bsim.dk/support/kb/articles/OW4NqGQg/jord-ground) button opens the dialog box for defining outdoor conditions for the ground under the building.

Climate data can be [generated](https://help.bsim.dk/support/kb/articles/1Qpng0WE/konvertering-af-vejrdata-til-tsbi5) from a text (ASCII) file with hourly values for relevant climatic parameters.

See also:

*   [Creating a building](https://help.bsim.dk/support/kb/articles/yW1x059B/simview---oprette-en-bygning)
*   [Creating a space](https://help.bsim.dk/support/kb/articles/gWKDMlmp/simview---oprette-et-rum)
*   [Default constructions](https://help.bsim.dk/support/kb/articles/y9gBKGQM/standardkonstruktioner)
*   [Non-default constructions](https://help.bsim.dk/support/kb/articles/rmklGkQg/simview---ikke-standard-konstruktioner)
*   [Creating thermal zones](https://help.bsim.dk/support/kb/articles/rm0x8ZmX/thermal-zone-property)
*   [Systems in thermal zones](https://help.bsim.dk/support/kb/articles/amRGrOQJ/simview---systemer)
*   [Editing the model geometry](https://help.bsim.dk/support/kb/articles/L9PwMrQJ/simview---redigere-modelgeometrien)
*   [Solar light factors for WinDoors](https://help.bsim.dk/support/kb/articles/49EdwkQ7/sollysfaktorer-for-windoors)
*   [Adding an opening or WinDoor](https://help.bsim.dk/support/kb/articles/A93z8lQ0/tilfoje-abning-eller-windoor)
*   [Virtual zones](https://help.bsim.dk/support/kb/articles/EWBOKNmr/simview---fiktive-zoner)
*   [Climate data and ground](https://help.bsim.dk/support/kb/articles/vWyP8M9b/klimadata)
*   [Printing a model](https://help.bsim.dk/support/kb/articles/ZmNr2Em2/simview---udskrift-af-model)
