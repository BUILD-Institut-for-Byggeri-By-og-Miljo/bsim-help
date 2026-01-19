<link rel="stylesheet" href="../style.css">

# SfB in BSim

The SfB-system is used for classification of building materialials and  building elements in BSim. In the following tables an overview of those parts of the SfB-system used in BSim are shown.

*   [BuildingElements](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)

*   [BuildingMaterials](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial)

#### **BuildingElements**

In BSim only parts of the classification system is used. In the table below those parts used (marked with white background) in BSim are shown with the rest of the SfB-system.


| **1x** | **Prepared site** |  |
|--------|-----------------|----------------|
|        | 11<br>13<br>16<br>17<br>19 | Ground, earth shapes<br>Floor beds<br>Foundations<br>Pile foundations<br>Summary substructure |

| **2x** | **Site structures** |  |
|--------|-----------------|----------------|
|        | 21<br>22<br>23<br>24<br>27 | Walls, external walls<br>Internal walls, partitions<br>Floors, galleries<br>Stairs, ramps<br>Roofs |
|        | 29 | Summary structure |

| **3x** | **Site enclosures** |  |
|--------|-----------------|----------------|
|        | 31<br>32 | External walls completion<br>Internal walls completion |
|        | 33<br>34<br>35<br>37<br>39 | Floors, galleries completion<br>Stairs, ramps completion<br>Suspendes ceilings<br>Roofs completion<br>Summary completion |

| **4x** | **Roads, paths, pavings** |  |
|--------|-----------------|----------------|
|        | 41<br>42<br>43<br>44<br>45<br>47<br>49 | Wall finishes externally<br>Wall finishes internally<br>Floor finishes<br>Stair, ramp finishes<br>Ceiling finishes<br>Roof finishes<br>Summary finishes |

| **5x** | **Site services** |  |
|--------|-----------------|----------------|
|        | 51<br>52<br>53<br>54<br>55<br>56<br>57<br>59 | Services centre<br>Drainage, refuse, disposal<br>Liquids supply services<br>Gases supply services<br>Space cooling services<br>Space heating services<br>Ventilation and air conditioning services<br>Summary services |

| **6x** | **Site services** |  |
|--------|-----------------|----------------|
|        | 61<br>62<br>63<br>64<br>66<br>69 | Electrical centre<br>Power distribution services<br>Lighting services<br>Communications services<br>Transport services<br>Summary services |

| **7x** | **Site fittings** |  |
|--------|-----------------|----------------|
|        | 71<br>72<br>73<br>74<br>75<br>76<br>79 | Display, circulation fittings<br>Rest, work, play fittings<br>Culinary, eating, drinking fittings<br>Sanitary, hygiene fittings<br>Cleaning, maintenance fittings<br>Storage, screening fittings<br>Summary fittings |


 

### **BuildingMaterials**

In BSim the materials are grouped according to the SfB-system. Most groups are sub-divided, but not all sub divisions are implemented (marked with gray ) in BSim. Some groups serves a special purpose in BSim and do thus not fully respect the SfB-system. Theses groups are: a, b and c group o and the groups 0 to 5.


| **a** | **Glazing units** | *Special purpose* |
|-------|-----------------|-----------------|
| **b** | **Frames** | *Special purpose* |
| **c** | **Panels** | *Special purpose* |
| **e** | **Natural stone** | e0. General<br>e1. Granite, Basalt, other igneous<br>e2. Marble<br>e3. Limestone<br>e4. Sandstone<br>e5. Slate<br>e9. Other formed natural stone materials |
| **f** | **Precast elements** | f0. General<br>f1. Sandlime Concrete (precast)<br>f2. All-in aggregate concrete<br>f3. Terrazzo<br>f4. Leightweight, cellular concrete<br>f5. Leightweight aggregate concrete<br>f6. Asbestos-based materials<br>f7. Gypsum<br>f8. Magnesian materials<br>f9. Other materials pre-cast with binder |
| **g** | **Brick, clay** | g0. General<br>g1. Dried clay<br>g2. Fired clay, unglazed fired clay<br>g3. Glazed fired clay, vitrified clay<br>g6. Refractory materials, heat resistant materials<br>g9. Other dried or fired clays |
| **h** | **Metals** | h0. General<br>h1. Cast iron, wrought iron<br>h2. Steel, mild steel<br>h3. Steel alloy<br>h4. Alluminium<br>h5. Copper<br>h6. Copper alloys<br>h7. Zinc<br>h8. Lead<br>h9. Other metals |
| **i** | **Wood** | i0. General<br>i1. Timber<br>i2. Soft wood<br>i3. Hardwood<br>i4. Wood laminates<br>i5. Wood veneers<br>i9. Other wood materials |
| **j** | **Organic materials** | j0. General<br>j1. Wood fibres<br>j2. Paper, corrugated paper<br>j3. Vegetable fibres<br>j5. Bark, cork<br>j6. Animal fibres, leather<br>j7. Wood particles<br>j8. Wood wool-cement<br>j9. Other formed vegetables and animal materials |
| **k** | **Soil materials** |  |
| **m** | **Inorganic materials** | m0. General<br>m1. Mineral wool/fibres, glass wool etc.<br>m2. Asbestos wool/fibres<br>m9. Other formed inorganic fibrous materials |
| **n** | **Rubber, plastics etc** | n0. General<br>n1. Asphalt<br>n2. Impregnated fibre and flet<br>n4. Lenoleum<br>n5. Rubbers<br>n6. Plastics, synthetic fibres<br>n7. Celluar plastics<br>n9. Other rubber rubber, plastics etc. |
| **o** | **Glass materials** | *Glass as a building material - NOT transparent* |
| **p** | **Aggregates, loose fills** | p0 General<br>p1 Natural fills, aggregates<br>p2 Artificial aggregates in general<br>p3 Artificial granular<br>p4 Artificial ash<br>p5 Shavings<br>p6 Powder<br>p7 Fibres<br>p9 Other aggregates, loose fills |
| **q** | **Lime and cement binders, mortars, concretes** | q0. General<br>q1. Lime<br>q2. Cement<br>q3. Lime-cement<br>q4. Mortars, concretes in general<br>q5. Terrazzo, granolithic mixes<br>q6. Leightweight, cellular concrete mixes<br>q7. Leightweight aggregate concrete mixes<br>q9. Other lime-cement, aggregete mixes and Asbestos cement |
| **r** | **Clay, gypsum, magnesia and plastics, binders, mortars** | r0. General<br>r1. Clay mortar mixes<br>r2. Gypsum, gypsum mixes<br>r3. Magnesia, magnesia mixes<br>r4. Plastics binders and mortar mixes<br>r9. Other binders and mortar mixes |
| **s** | **Bituminous materials** | s0 General<br>s1 Bitumen, pitch, tar, asphalt<br>s4 Mastic asphalt<br>s5 Stone/bitumen mixes<br>s9 Other bituminous materials |
| **t** | **Fixing and jointing agents** | t0. General<br>t1. Welding materials<br>t2. Soldering materials<br>t3. Adhesives bonding materials<br>t4. Joint fillers, putty, mastics<br>t6. Fasteners<br>t7. Ironmongery<br>t9. Other fixing and jointing agents |
| **u** | **Protective, progress/property modifying agents** | u0. General<br>u1. Anti-corrosive materials<br>u2. Modifying agents, admixtures<br>u3. Rot proofers, fungicides, germicides, insecticides<br>u4. Flame retardents<br>u5. Polishes, seals, hardeners, size<br>u6. Water repellents<br>u9. Other protective progress/property modifying agents |
|       | **Paints** | *Moisture resistance* |
| **w** | **Ancillary materials** | w0. General<br>w1. Rust removing agents<br>w3. Fuels<br>w4. Water<br>w5. Acid, alkalis<br>w6. Fertilisers<br>w7. Cleaning materials, abrasives<br>w9. Other Ancillary materials |
| **0** | **Metallics** | *Surface characteristics* |
| **1** | **Paints** | *Surface characteristics* |
| **2** | **Wood surfaces** | *Surface characteristics* |
| **3** | **Stone surfaces** | *Surface characteristics* |
| **4** | **Glass surfaces** | *Surface characteristics* |
| **5** | **Coatings** | *Surface characteristics* |



