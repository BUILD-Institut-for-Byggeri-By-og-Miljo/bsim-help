<link rel="stylesheet" href="../style.css">

# System for air exchange

### **General description of the multi-zone model**

The theory behind the multi-zone model is outlined in the section about the theoretical background for multi-zone models. On the basis of this outline, the implementation of a multi-zone model (mzm) was chosen based on the loop method and a new control structure.

Requirements and needs that the multi-zone model must satisfy The basis for the integration of natural and mechanical ventilation should be situations that in practice need modeling, i.e. users can chose to simulate different ventilation strategies. Simplifications have also to be made on account of the calculation. The following ventilation strategies can be simulated:

1.  Balanced mechanical ventilation with exhaust/natural ventilation. With balanced mechanical ventilation it is assumed that the supplied and exhausted air volume is the same; for this reason the mechanical systems does not affect the distribution of ventilation in the building. It should be possible to reduce the mechanical ventilation automatically as airing of the room/natural ventilation takes over the airflow rate.

2.  Natural ventilation with mechanical exhaust. Most buildings with natural ventilation are provided with mechanical exhaust, where a major or minor part of the air volume is exhausted constantly (bathrooms, photocopying rooms, etc.) or at different times (meeting rooms, kitchens etc.)

### **General changes in BSim**

The implementation of mzm has necessitated the introduction of three iterations. As previously described, BSim has not used iterations before, and therefore this is a major program change that also has a relatively big impact on the calculation velocity.

The three iterations are:

1.  Multi-zone model iteration

2.  Iteration between mzm and change of the opening fractions of the openings

3.  Iteration between mzm and the heat balance (BSim)

Every time the multi-zone model is called during a simulation, it must iterate to ensure a satisfactory accuracy of the solution of the non-linear system of equations.

In order to find the opening fraction of the openings that provides the desired air change rate in the zones, iteration are made by changing the opening fractions and solving the multi-zone model.

When the best possible setting has been found, iterations should be made between mzm and the heat balance. The multi-zone model calculates the air volumes on the basis of temperatures; the heat balance calculates the temperatures on the basis of air volumes.

*   [Implementation of the multi-zone model](https://help.bsim.dk/support/kb/articles/7mawyJ9E/regulering-af-multizone-modellen)

