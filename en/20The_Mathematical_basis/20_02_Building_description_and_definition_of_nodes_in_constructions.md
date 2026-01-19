<link rel="stylesheet" href="../style.css">

# Building description and definition of nodes in constructions

Building description and definition of nodes in constructions  
A building consists of an arbitrary number of zones, which are limited by an arbitrary number of surfaces. Furthermore, the model normally has at least one so-called virtual zone, e.g. the outside air, the condition of which is not to be calculated, but is given by data from a file or a timetable, defined by the user.

The zone air is represented in the building description at a nodal point, for which air temperature and water vapor content are calculated. It is assumed that the air in a zone is fully mixed, and it is thus not possible to carry out an analysis of, for example, temperature stratification in an individual zone. The balance equations which give the condition of the zone air's nodal point are described in a subsequent section.  

 <figure id="center_img">
<img src="./assets/net_bygn.gif" alt="Building with four zones showing nodal points and control volumes for zone air (one nodal point), constructions (several nodal points).">
<figcaption>Building with four zones showing nodal points and control volumes for zone air (one nodal point), constructions (several nodal points).</figcaption>
</figure>


The constructions consist of one or more layers, which are assumed to be homogeneous, consisting of one material, which is characterised by thermal material values. To achieve a sufficiently accurate calculation, thick material layers are divided into several thinner layers (control volumes). This is done by the program automatically selecting a nodal point distance not exceeding 0.05 m (5 cm). The user can, however, change the nodal point distance, by typing in a (maximum) distance in the layer menu under construction types. For each construction layer, BSim places the nodal points at an equal distance, so that each nodal point represents the same thermal mass. Special conditions are valid for the outer layer in each side of the construction, as a nodal point is always defined in the two surfaces of the construction, each representing a control volume, with half the thickness of that which is normally calculated for these layers. A construction will thus always have at least 3 nodal points.
