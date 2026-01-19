# SfB i BSim
SfB-systemet er benyttet til klassificering af byggematerialer og bygningselementer i BSim. I de følgende tabeller vises en oversigt med de dele af SfB-systemet som benyttes i BSim.

*   [BuildingElements](https://help.bsim.dk/support/kb/articles/dQG2dzm4/simdb---buildingelement)

*   [BuildingMaterials](https://help.bsim.dk/support/kb/articles/A93zR3Q0/simdb---buildingmaterial)

#### **BuildingElements**

I BSim benyttes kun en del af klassifikationen i SfB-systemet. I nedenstående tabel ses hele SfB-systemet og hvilke dele, der benyttes i BSim.


|  |                    |        |                                       |
|--------|--------------------------|--------------|---------------------------------------------------|
| **1x** | **Prepared site**        | 11           | Ground, earth shapes                              |
|        |                          | 13           | Floor beds                                        |
|        |                          | 16           | Foundations                                       |
|        |                          | 17           | Pile foundations                                  |
|        |                          | 19           | Summary substructure                              |
| **2x** | **Site structures**      | 21           | Walls, external walls                             |
|        |                          | 22           | Internal walls, partitions                        |
|        |                          | 23           | Floors, galleries                                 |
|        |                          | 24           | Stairs, ramps                                     |
|        |                          | 27           | Roofs                                             |
|        |                          | 29           | Summary structure                                 |
| **3x** | **Site enclosures**      | 31           | External walls completion                         |
|        |                          | 32           | Internal walls completion                         |
|        |                          | 33           | Floors, galleries completion                      |
|        |                          | 34           | Stairs, ramps completion                          |
|        |                          | 35           | Suspended ceilings                                |
|        |                          | 37           | Roofs completion                                  |
|        |                          | 39           | Summary completion                                |
| **4x** | **Roads, paths, pavings**| 41           | Wall finishes externally                          |
|        |                          | 42           | Wall finishes internally                          |
|        |                          | 43           | Floor finishes                                    |
|        |                          | 44           | Stair, ramp finishes                              |
|        |                          | 45           | Ceiling finishes                                  |
|        |                          | 47           | Roof finishes                                     |
|        |                          | 49           | Summary finishes                                  |
| **5x** | **Site services**        | 51           | Services centre                                   |
|        |                          | 52           | Drainage, refuse, disposal                        |
|        |                          | 53           | Liquids supply services                           |
|        |                          | 54           | Gasses supply services                            |
|        |                          | 55           | Space cooling services                            |
|        |                          | 56           | Space heating services                            |
|        |                          | 57           | Ventilation and air conditioning services         |
|        |                          | 59           | Summary services                                  |
| **6x** | **Site services**        | 61           | Electrical centre                                 |
|        |                          | 62           | Power distribution services                       |
|        |                          | 63           | Lighting services                                 |
|        |                          | 64           | Communications services                           |
|        |                          | 66           | Transport services                                |
|        |                          | 69           | Summary services                                   |
| **7x** | **Site fittings**        | 71           | Display, circulation fittings                     |
|        |                          | 72           | Rest, work, play fittings                         |
|        |                          | 73           | Culinary, eating, drinking fittings               |
|        |                          | 74           | Sanitary, hygiene fittings                        |
|        |                          | 75           | Cleaning, maintenance fittings                    |
|        |                          | 76           | Storage, screening fittings                       |
|        |                          | 79           | Summary fittings                                  |

#### **BuildingMaterials**
I BSim er materialerne inddelt i de grupper efter SfB-systemet. De fleste grupper er underinddelt, men ikke alle underinddelingerne er implementeret (markeret med grå baggrund). Enkelte af grupperne tjener et særligt formål i BSim og respekterer således ikke SfB-systemet fuldt ud. Det drejer sig om grupperne a, b og c gruppe o samt grupperne 0 til 5.


|  |                                    |  |
|------|----------------------------------------------|---------|
| a    | Glazing units                                | Special purpose |
| b    | Frames                                       | Special purpose |
| c    | Panels                                       | Special purpose |
| e    | Natural stone                                | e0 General<br>e1 Granite, Basalt, other igneous<br>e2 Marble<br>e3 Limestone<br>e4 Sandstone<br>e5 Slate<br>e9 Other formed natural stone materials |
| f    | Precast elements                             | f0 General<br>f1 Sandlime Concrete (precast)<br>f2 All-in aggregate concrete<br>f3 Terrazzo<br>f4 Lightweight, cellular concrete<br>f5 Lightweight aggregate concrete<br>f6 Asbestos-based materials<br>f7 Gypsum<br>f8 Magnesian materials<br>f9 Other materials pre-cast with binder |
| g    | Brick, clay                                  | g0 General<br>g1 Dried clay<br>g2 Fired clay, unglazed fired clay<br>g3 Glazed fired clay, vitrified clay<br>g6 Refractory materials, heat resistant materials<br>g9 Other dried or fired clays |
| h    | Metals                                       | h0 General<br>h1 Cast iron, wrought iron<br>h2 Steel, mild steel<br>h3 Steel alloy<br>h4 Aluminium<br>h5 Copper<br>h6 Copper alloys<br>h7 Zinc<br>h8 Lead<br>h9 Other metals |
| i    | Wood                                         | i0 General<br>i1 Timber<br>i2 Softwood<br>i3 Hardwood<br>i4 Wood laminates<br>i5 Wood veneers<br>i9 Other wood materials |
| j    | Organic materials                            | j0 General<br>j1 Wood fibres<br>j2 Paper, corrugated paper<br>j3 Vegetable fibres<br>j5 Bark, cork<br>j6 Animal fibres, leather<br>j7 Wood particles<br>j8 Wood wool-cement<br>j9 Other formed vegetable and animal materials |
| k    | Soil materials                               | *(ingen tekst)* |
| m    | Inorganic materials                          | m0 General<br>m1 Mineral wool/fibres, glass wool etc<br>m2 Asbestos wool/fibres<br>m9 Other formed inorganic fibrous materials |
| n    | Rubber, plastics etc                         | n0 General<br>n1 Asphalt<br>n2 Impregnated fibre and felt<br>n4 Linoleum<br>n5 Rubbers<br>n6 Plastics, synthetic fibres<br>n7 Cellular plastics<br>n9 Other rubber, plastics etc |
| o    | Glass materials                              | Glass as a building material – NOT transparent |
| p    | Aggregates, loose fills                      | p0 General<br>p1 Natural fills, aggregates<br>p2 Artificial aggregates in general<br>p3 Artificial granular<br>p4 Artificial ash<br>p5 Shavings<br>p6 Powder<br>p7 Fibres<br>p9 Other aggregates, loose fills |
| q    | Lime and cement binders, mortars, concretes  | q0 General<br>q1 Lime<br>q2 Cement<br>q3 Lime-cement<br>q4 Mortars, concretes in general<br>q5 Terrazzo, granolithic mixes<br>q6 Lightweight, cellular concrete mixes<br>q7 Lightweight aggregate concrete mixes<br>q9 Other lime-cement, aggregate mixes; Asbestos cement |
| r    | Clay, gypsum, magnesia and plastics (binders/mortars) | r0 General<br>r1 Clay mortar mixes<br>r2 Gypsum, gypsum mixes<br>r3 Magnesia, magnesia mixes<br>r4 Plastics binders and mortar mixes<br>r9 Other binders and mortar mixes |
| s    | Bituminous materials                         | s0 General<br>s1 Bitumen, pitch, tar, asphalt<br>s4 Mastic asphalt<br>s5 Stone/bitumen mixes<br>s9 Other bituminous materials |
| t    | Fixing and jointing agents                   | t0 General<br>t1 Welding materials<br>t2 Soldering materials<br>t3 Adhesives, bonding materials<br>t4 Joint fillers, putty, mastics<br>t5 Fasteners<br>t7 Ironmongery<br>t9 Other fixing and jointing agents |
| u    | Protective/progress/property modifying agents | u0 General<br>u1 Anti-corrosive materials<br>u2 Modifying agents, admixtures<br>u3 Rot proofers, fungicides, germicides, insecticides<br>u4 Flame retardants<br>u5 Polishes, seals, hardeners, size<br>u6 Water repellents<br>u9 Other protective/progress/property modifying agents |
|  | Paints                                  | Moisture resistance |
| w    | Ancillary materials                          | w0 General<br>w1 Rust removing agents<br>w3 Fuels<br>w4 Water<br>w5 Acid, alkalis<br>w6 Fertilisers<br>w7 Cleaning materials, abrasives<br>w9 Other ancillary materials |
| 0    | Metallics                                    | Surface characteristics |
| 1    | Paints                                       | Surface characteristics |
| 2    | Wood surfaces                                | Surface characteristics |
| 3    | Stone surfaces                               | Surface characteristics |
| 4    | Glass surfaces                               | Surface characteristics |
| 5    | Coatings                                     | Surface characteristics |