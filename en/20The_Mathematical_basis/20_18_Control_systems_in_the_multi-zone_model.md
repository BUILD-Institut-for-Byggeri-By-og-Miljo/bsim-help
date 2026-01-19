<link rel="stylesheet" href="../style.css">

# Control systems in the multi-zone model

The openings used in the multi-zone model consist of two types. The first type comprises windows and doors (WinDoor) that can be shut and opened as needed. The other types comprise openings that always are fully open when they are activated.

The control only includes windows and doors. The objective of the control is to get as close as possible to the desired set-points in the individual zones.

### **Control of openings**

The controllable openings can in turn be subdivided into two groups - external and internal ones. The external opening provides airflow between the thermal zone and the ambient. while the internal opening provides airflow between two thermal zones.

#### **Control of external openings**

Per definition external openings belong to the thermal zone where they are physically located. Like for most other systems in BSim, it is possible to control the openings according to a set-point measured in a random thermal zone. Figure 1 specifies which-what zone the openings are controlled according to.

<figure id="center_img">
<img src="./assets/mzm_fig20_1.jpg" alt="Figure 1. Specification of which thermal zone the sensor should be placed in.">
<figcaption>Figure 1. Specification of which thermal zone the sensor should be placed in.</figcaption>
</figure>


#### **Control of internal openings**

The internal openings connect two thermal zones and it is therefore necessary to have a convention governing how they are controlled. The openings are chosen to belong to one of the zones and thus be controlled by it. This was chosen in order to give a simple and unambiguous definition of how the openings are controlled.

The sequence of the thermal zones in the BSim hierarchical tree structure determines their sequence in the calculation. The sequence was chosen also to be used to determine the ownership of the two internal openings. The thermal zone that is the uppermost of the two in the tree structure controlled the internal openings between the two thermal zones, Figure 2.

<figure id="center_img">
<img src="./assets/mzm_fig20_2.gif" alt="Figure 2. Display of the BSim sequenced tree structure. The thermal zone Tz1 is placed over Tz2, and thus Tz1 regulates the internal opening(s) between the two zones.">
<figcaption>Figure 2. Display of the BSim sequenced tree structure. The thermal zone Tz1 is placed over Tz2, and thus Tz1 regulates the internal opening(s) between the two zones.</figcaption>
</figure>


### **Opening fractions**

This section describes how the two types of openings can be controlled.

#### **Opening fraction for controllable openings**

All controllable openings (windows and doors) have an unambiguous number of opening fractions. The number is the same for all controllable openings and the standard number is 20. The number of opening fractions can be changed under[ tsbi - Edit - Options](https://help.bsim.dk/support/kb/articles/EWBOvOmr/tsbi5-general-options), Figure 3.

<figure id="center_img">
<img src="./assets/mzm_fig20_3.jpg" alt="Figure 3. The number of opening fractions is the same for all controllable openings and can be determined by the user.">
<figcaption>Figure 3. The number of opening fractions is the same for all controllable openings and can be determined by the user.</figcaption>
</figure>


#### **Opening fraction of non-controllable openings**

Per definition all non-controllable openings are always fully open. However, they are only active during periods, when [Venting](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system) is activated. When [Venting](https://help.bsim.dk/support/kb/articles/gWKDJlmp/venting-system) is not activated, tsbi5 calculates as if the openings do not exist.

 

### **Calculation sequence for mzm airflow**

The calculation sequence for the mzm airflow is as follows:

*   Decide the demand-controlled airflow

    *   Determine whether air is needed (heat balance with loads, fixed systems)

    *   Determine the directions of the airflows: Multi-zone model with all openings fully open and temperature and set-points as given by BSim

    *   Determine the desired air volumes: heat balance with airflow directions from the calculation of the multi-zone model

*   Adjust the opening fractions to the desired air volumes: change of opening fractions and calculation of air volumes using the multi-zone model with set points from the heat balance until one of the stop criteria has been reached

*   Find the exact air volumes and temperature with the obtained opening fractions: iteration between multi-zone model and heat balance until one of the stop criteria has been reached.