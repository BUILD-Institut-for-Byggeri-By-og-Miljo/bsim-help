# Mouse operations in SimView

### **Operations in the tree structure**

*Left-clicking* one of the objects in the tree will cause the object to be displayed in red in the graphics. This applies to geometric objects, i.e. a building, a thermal zone, a space and a face. A face is the geometric description of a wall, floor, ceiling, WinDoor or opening. When a *face* is selected, the boundary edges of the *face* are displayed and the *corner points* (vertex) are marked with a black square.

*Right-clicking* in the tree structure reveals the properties of the actual object, and the properties can be altered. By right-clicking a building construction or a building material the database dialog will open with the actual building construction or material in focus.

By *dragging, <u>with</u> the left mouse button pressed* the order for the thermal zones can be changed. The order determines the simulation order of the thermal zones.
 

**Geometry**

A building can be added to an existing building (i.e. an new story) by dragging - using the mouse - an existing (in the model) building to the building to be extended. The moved building can only be recreated by using the Undo-function.

A [room is moved to a thermal zone](https://help.bsim.dk/support/kb/articles/amRGJpQJ/tilfoje-rum-til-termiske-zoner) by dragging it to an existing thermal zone. A room in a thermal zone can be removed by dragging it back to the building where it belongs. If a thermal zone is deleted using the Delete-button, the rooms are automatic moved back to the building where it belongs.

 
**Constructions and materials**

Building elements (constructions, windows and doors) as well as finish materials can be dragged using the mouse to any other face in the building. If the Ctrl-button is pressed during the dragging, a copy will be made. Likewise a building element or a finish material can be copied using the Edit/Copy (Ctrl+c) function. Move to the new position in the tree using the mouse or the arrow buttons, and paste using the Edit/Paste (Shift-Insert or Ctrl+v) function. A selected building element or finish material can be removed from the model by using the Delete-button.
 

**Systems**

Systems in a thermal zone or connected to a WinDoor can be moved or copied to an other thermal zone by using the mouse to drag the object to a new position. Only systems of the same type (thermal zone or WinDoor) can be dropped in a new position. If the Ctrl-button is pressed during the dragging, a copy is created. If an equivalent system already exists in the thermal zone where the system is dropped, it will only be overwritten after active acceptance.

The order that the systems occurs in the tree structure is the same as the order in the tsbi5 simulation. If the order need to be changed, it can be done by dragging one system to the system that is to follow the current. A system can be removed from the model by pressing the Delete-button.
 

### **Operations in the graphics**

*Left-clicking* in the graphics causes the cursor coordinates to be displayed on the status bar.

If the *mouse cursor is held over a marked corner point, the name and coordinates of the point are displayed*.

*Double-clicking* selects a *reference point*. A reference point is used when creating a new building, when inserting a building from another project in the model and as a reference point in daylight calculations.

*Double-clicking an edge* of a face selects it (shown in green). If the edge is already selected, it is deselected. As an alternative *Shift + left-click* can be used.

*Double-clicking* a marked corner point selects it (marked with a frame around the point). If the corner point is already selected, it is deselected.

*Right-clicking* (outside a marked corner point) causes the most frequently used menu options to be displayed.

*Right-clicking a marked corner point* brings up a dialog box in which the point's coordinates can be edited. Changing the coordinates in this way can make faces of which the point is part skew, i.e. not all the points defining the face are in the same plane. *Skew faces will be displayed in yellow*. It is assumed in all the calculation programs that all the faces in the model are plane.

By *holding Ctrl down, a marked corner point can be dragged* to another position with the mouse. This can also cause faces to become skew. A corner point <u>cannot</u> be dragged in the spatial view.

With *Ctrl held down* it is possible to *left-click an edge* of a face to select the face in the graphics and locate it in the tree. As an edge normally forms part of more than one face, all the faces in which the edge is included can be selected one by one by *repeating Ctrl+left click*. Once the mouse cursor has been moved to another position – without Ctrl held down – a new edge can be selected.

In the plan and elevation graphics it is possible to highlight a *rectangular area* by putting the mouse cursor on the corner point of the desired rectangle and moving it to the opposite corner point with the *left mouse button held down*. It is then possible to zoom in on the selected area by pressing + (or clicking the Zoom In icon).
