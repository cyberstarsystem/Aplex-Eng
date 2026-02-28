const productsData = [
  {
    category: "Drying Systems",
    categorySlug: "drying-systems",
    icon: "bi bi-chevron-right",
    items: [
      {
        title: "Spray Dryers",
        slug: "spray-dryers",
        image: "/images/SPRAY DRYER PLANT.jpeg",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-efficiency spray drying system converting liquid feed into uniform dry powder using hot air atomization.",

        fullDescription:
          "A Spray Dryer is a high-efficiency drying system that converts liquid feed such as slurry, solution, emulsion, or suspension into a dry powder by atomizing the liquid and rapidly evaporating moisture using hot air. It is widely used in food, dairy, pharmaceutical, chemical, ceramic, and environmental industries for producing uniform, free-flowing powders with controlled particle size.",

        workingPrinciple: [
          "Atomization: Liquid feed is converted into tiny droplets using rotary disc atomizers, pressure nozzles, or two-fluid nozzles.",
          "Hot Air Contact: Droplets mix with hot air inside the drying chamber, rapidly evaporating moisture.",
          "Powder Collection: Dried powder is separated using cyclones, bag filters, wet scrubbers, or electrostatic collectors.",
          "Optional Fluid Bed: Powder may pass through a fluidized bed dryer for final drying or cooling."
        ],

        mainComponents: [
          "Drying Chamber (SS304 / SS316 / Duplex Steel)",
          "Atomization System (Rotary Disc / Pressure Nozzle / Two-Fluid Nozzle)",
          "Air Heating System (Steam Coil / Electric Heater / Gas Fired)",
          "Powder Collection System (Cyclone / Bag Filter / Cartridge Filter)",
          "Air Exhaust & Pollution Control (ID Fan / Wet Scrubber / ESP)",
          "PLC / SCADA Automation Control Panel"
        ],

        types: [
          "Single-Stage Spray Dryer",
          "Two-Stage Spray Dryer",
          "Closed-Loop Spray Dryer",
          "Spray Dryer with Fines Agglomeration",
          "Laboratory & Pilot Spray Dryers"
        ],

        features: [
          "Uniform particle size",
          "Continuous production",
          "Heat-sensitive material handling",
          "Automation compatible",
          "Fast drying (seconds)",
          "Closed-loop option for solvents",
          "Low labor cost",
          "Produces free-flowing powders"
        ],

        applications: {
          foodAndDairy: [
            "Milk powder / Whey",
            "Coffee & Tea Extract",
            "Flavors & Starches",
            "Protein Powders",
            "Spices & Herbal Extracts"
          ],
          pharmaceutical: [
            "APIs",
            "Enzyme powders",
            "Nutraceuticals",
            "Heat-sensitive compounds"
          ],
          chemical: [
            "Detergents",
            "Polymers",
            "Resins",
            "Pigments & Dyes",
            "Catalysts"
          ],
          ceramics: [
            "Ferrites",
            "Ceramic powders",
            "Battery materials",
            "Metal oxides"
          ],
          environmental: [
            "Concentrated brine drying",
            "Zero Liquid Discharge (ZLD)",
            "Effluent solidification"
          ]
        },

        advantages: [
          "Uniform powder with controlled particle size",
          "Continuous large-scale operation",
          "Ideal for heat-sensitive materials",
          "Improved product stability and shelf life",
          "Automation-friendly",
          "Energy-efficient for large-scale production"
        ],

        limitations: [
          "Higher energy consumption",
          "Requires pre-concentrated feed",
          "Not suitable for very high-viscosity liquids",
          "Rotary atomizers need periodic maintenance"
        ],

        optionalFeatures: [
          "Bag Filter / Cartridge Filter",
          "Explosion-proof design",
          "CIP (Clean-in-Place) system",
          "Agglomeration chamber",
          "Solvent recovery system",
          "Heat recovery unit",
          "Multi-cyclone dust collectors",
          "VFD controls"
        ],

        industries: [
          "Dairy & Food",
          "Pharmaceuticals",
          "Chemicals & Petrochemicals",
          "Ceramics & Metallurgy",
          "Environmental / ZLD systems",
          "Agrochemicals",
          "Battery & Advanced Materials"
        ]
      },

      {
        title: "Multistage Spray Dryer (MSD)",
        slug: "multistage-spray-dryer",
        icon: "bi bi-chevron-right",
        image: "/images/SPRAY DRYER PLANT.jpeg",
        shortDescription:
          "Advanced spray dryer with integrated fluid bed for improved powder density and solubility.",
        fullDescription:
          "A Multistage Spray Dryer (MSD) is an advanced spray drying system engineered for high-quality powders, especially those requiring narrow particle size distribution, excellent instant properties, low dusting, and improved bulk density. Unlike single-stage spray dryers, an MSD uses multiple drying zones—typically a primary drying chambercombined with integrated or external fluidized beds—to achieve controlled drying, agglomeration, and superior powder functionality.",
        // workingPrinciple: [
        //   "Primary spray drying chamber removes initial moisture.",
        //   "Integrated fluid bed ensures secondary drying and agglomeration.",
        //   "Final cooling improves powder stability."
        // ],
        // mainComponents: [
        //   "Drying Chamber",
        //   "Integrated Fluid Bed",
        //   "Cyclone Separator",
        //   "Air Heater",
        //   "Control Panel"
        // ],
        features: [
          "High bulk density or low bulk density based on requirement.",
          "Instantizing options (agglomeration).",
          "Reduced fines and improved powder structure.",
          "EBetter solubility, dispersibility, and flowability.",
          "Suitable for large production capacities."
        ],
        applications: [
          "Milk powder",
          "Baby Food",
          "Protein powders",
          "Instant beverage mixes",
          "Coffee whiteners",
          "Malt extract",
          "Cocoa mixes",

        ],
        // advantages: [
        //   "High-quality instant powder",
        //   "Reduced fines generation",
        //   "Better product stability"
        // ],
        // industries: [
        //   "Dairy",
        //   "Food Processing",
        //   "Nutraceutical"
        // ]
      },
      {
        title: "Closed-Loop Spray Dryer",
        slug: "closed-loop-spray-dryer",
        icon: "bi bi-chevron-right",
        image: "/images/SPRAY DRYER PLANT.jpeg",

        shortDescription:
          "Thermal drying system operating under oxygen-free atmosphere for solvent-based and hazardous materials.",

        fullDescription:
          "A Closed-Loop Spray Dryer is a thermal drying system designed for converting liquid feed (solutions, emulsions, suspensions) into a dry powder under oxygen-free/controlled atmosphere. It operates in a sealed drying chamber, where inert gas (usually nitrogen) circulates in a loop rather than venting to the atmosphere.",

        workingPrinciple: [
          "Feed Preparation: Liquid feed is pumped to the atomizer.",
          "Atomization: A rotary or nozzle atomizer converts liquid into fine droplets.",
          "Inert Gas Heating: Nitrogen/inert gas is heated through a heater.",
          "Droplet Drying (Closed Chamber): Hot inert gas contacts droplets and moisture evaporates.",
          "Powder Separation: Cyclone separator, filter, or bag filter collects powder.",
          "Solvent Recovery: Evaporated solvent condenses in a condenser and is collected.",
          "Gas Recirculation: Clean inert gas returns to the heater, restarting the loop."
        ],

        whyUse: [
          "The feed contains flammable, explosive, or toxic solvents (e.g., ethanol, acetone, IPA).",
          "When product requires oxygen-free drying.",
          "To recover expensive solvents.",
          "To comply with safety and environmental regulations."
        ],

        features: [
          "Fully sealed system (no oxygen entry)",
          "Uses inert gas (N₂ or CO₂)",
          "Integrated solvent recovery unit",
          "ATEX/Explosion-proof design",
          "Precise temperature control",
          "HEPA/ULPA filtration options",
          "Customizable atomizers (nozzle/rotary/ultrasonic)",
          "Continuous or batch operation"
        ],

        applications: {
          pharmaceuticals: [
            "APIs",
            "Heat-sensitive drugs",
            "Herbal extracts (using ethanol)"
          ],
          foodAndBeverage: [
            "Flavors",
            "Coffee extracts",
            "Dairy products"
          ],
          chemicalIndustry: [
            "Resins",
            "Polymers",
            "Catalysts"
          ],
          biotechnology: [
            "Enzymes",
            "Probiotics",
            "Proteins"
          ],
          cosmeticsAndFragrance: [
            "Essential oils",
            "Perfume encapsulation"
          ],
          batteryAndEnergy: [
            "Cathode material drying",
            "Anode material drying"
          ]
        },

        advantages: [
          "Safe for flammable/solvent-based feeds",
          "High product purity (no oxygen)",
          "Solvent recovery reduces cost",
          "Prevents oxidation & degradation",
          "Environmentally friendly",
          "Produces uniform particle size",
          "Suitable for heat-sensitive materials"
        ],

        disadvantages: [
          "Higher cost vs. open-loop dryers",
          "Requires sophisticated controls",
          "More complex maintenance",
          "Inert gas consumption needed (especially during startup)",
          "Larger footprint for condenser/solvent recovery units"
        ],

        variants: [
          "Lab-scale closed-loop spray dryer (0.5–5 kg/h capacity)",
          "Pilot-scale closed-loop system (5–50 kg/h)",
          "Industrial closed-loop spray dryer (50–2000+ kg/h)",
          "High-pressure closed-loop dryer for alcohol/solvent extracts",
          "Low-temperature freeze-spray closed-loop dryer"
        ],

        keySelectionParameters: [
          "Type of solvent (ethanol, acetone, IPA, etc.)",
          "Solids concentration in feed",
          "Required particle size",
          "Final product moisture",
          "Heat sensitivity",
          "Required solvent recovery %",
          "Production capacity (kg/h)"
        ]
      },
      {
        title: "Rotary Dryers",
        slug: "rotary-dryers",
       icon: "bi bi-chevron-right",

        shortDescription:
          "Continuous thermal drying system for bulk solids such as minerals, fertilizers, biomass, chemicals, and food materials.",

        fullDescription:
          "A Rotary Dryer is a continuous thermal drying system used for reducing moisture content in bulk solids such as minerals, biomass, chemicals, fertilizers, and food materials. It consists of a rotating cylindrical drum that gently tumbles the feed while hot gas passes through it, enabling uniform and efficient moisture removal. Rotary dryers are known for high durability, ability to process large quantities, and compatibility with coarse, sticky, or abrasive materials.",

        workingPrinciple: [
          "Material Feeding: Moist solid material is fed into the rotating drum via a feeder or conveyor.",
          "Rotary Motion: The drum rotates continuously, lifting and cascading the material through internal lifters.",
          "Hot Gas Flow: Hot air or gas (from a burner or steam/heat exchanger) flows through the drum in co-current or counter-current direction.",
          "Moisture Evaporation: As the material tumbles and contacts the hot gas, moisture evaporates.",
          "Dry Material Discharge: Dried product exits through the discharge end of the drum.",
          "Dust Collection: Cyclones, bag filters, or scrubbers capture fine particles from the exhaust gas."
        ],

        whyUse: [
          "The material is bulk, granular, lumpy, or abrasive.",
          "High throughput is required (tons per hour).",
          "Simple, robust, low-maintenance drying is needed.",
          "Variable particle size is acceptable.",
          "Long drying residence time improves efficiency.",
          "High-temperature drying is required."
        ],

        features: [
          "Heavy-duty rotating drum",
          "Direct or indirect heating options",
          "Co-current or counter-current airflow",
          "Customizable internal lifters",
          "Dust control system (cyclone, bag filter, scrubber)",
          "Low maintenance design",
          "High thermal efficiency",
          "Suitable for continuous 24/7 operation"
        ],

        applications: {
          mineralsAndMining: [
            "Sand",
            "Limestone",
            "Clay",
            "Silica",
            "Ores"
          ],
          biomassAndEnergy: [
            "Sawdust",
            "Wood chips",
            "Bagasse",
            "RDF",
            "Biomass pellets"
          ],
          fertilizersAndAgriculture: [
            "Urea",
            "NPK",
            "Potash",
            "Ammonium sulfate",
            "Animal feed ingredients"
          ],
          chemicalsAndPetrochemicals: [
            "Catalyst",
            "Activated carbon",
            "Polymers",
            "Salt",
            "Soda ash",
            "Gypsum"
          ],
          foodAndProcessing: [
            "Grains",
            "Cereals",
            "Coffee grounds",
            "Starch"
          ],
          wasteManagement: [
            "Sludge",
            "Filter cake",
            "By-products"
          ]
        },

        advantages: [
          "High throughput (excellent for large-scale operations)",
          "Handles coarse, lumpy, abrasive, or irregular materials",
          "Simple and robust mechanical design",
          "Low operating cost",
          "Long equipment lifespan",
          "Easy to maintain and operate",
          "Can use various heat sources (gas, steam, biomass, waste heat)",
          "Suitable for high-temperature drying"
        ],

        disadvantages: [
          "Larger footprint compared to fluid bed dryers",
          "Less suitable for heat-sensitive materials",
          "Final moisture control is less precise",
          "Generates dust and requires dust-handling equipment",
          "Longer residence time (not ideal for small-scale precision drying)"
        ],

        variants: [
          "Direct Rotary Dryer (hot gas directly contacts material)",
          "Indirect Rotary Dryer (heated drum walls, no direct gas contact)",
          "Rotary Drum Dryer with Hot Air Generator",
          "Triple-Pass (3-pass) Rotary Dryer (higher efficiency)",
          "Rotary Kiln Dryer (for high-temperature processing)",
          "Steam Tube Rotary Dryer (indirect heating using steam)"
        ],

        keySelectionParameters: [
          "Material type (granular, sticky, abrasive)",
          "Initial and final moisture content",
          "Required drying capacity (tons/hour)",
          "Temperature sensitivity of material",
          "Particle size distribution",
          "Required residence time",
          "Available heat source (gas, steam, biomass, etc.)",
          "Space limitations / available footprint",
          "Airflow preference (co-current vs counter-current)"
        ]
      },
      {
        title: "Flash Dryers",
        slug: "flash-dryers",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-speed convective drying system for rapid moisture removal from powders, cakes, slurries, and pastes.",

        fullDescription:
          "A Flash Dryer is a high-speed convective drying system used to rapidly remove surface moisture from powders, pastes, cakes, and slurry-type materials. It uses a stream of high-velocity hot air to suspend and dry fine particles within seconds. Flash dryers are known for ultra-fast drying time, high thermal efficiency, suitability for heat-sensitive materials due to short exposure time, and production of fine, uniform powder.",

        workingPrinciple: [
          "Material Feeding: Wet material (slurry/cake/paste) is fed to a disperser, screw feeder, or rotary valve.",
          "Disintegration / Dispersion: A high-speed air stream instantly disperses the wet feed into fine particles.",
          "Hot Air Flow: Hot air (from a hot air generator or heat exchanger) enters the drying duct at high velocity.",
          "Instant Moisture Evaporation: Fine particles contact the hot air and lose moisture rapidly within seconds.",
          "Drying in Vertical / Horizontal Duct: Material is pneumatically conveyed through the drying duct where drying is completed.",
          "Particle Separation: Cyclone separator, bag filter, or scrubber separates dry product from exhaust air.",
          "Dry Product Collection: Dry fine powder is collected at the bottom of the cyclone or bag filter hopper."
        ],

        whyUse: [
          "Material is fine, lightweight, crystalline, or paste-like.",
          "Extremely fast drying is needed.",
          "Heat-sensitive materials must be dried.",
          "Space is limited (compact design).",
          "Uniform fine powder output is required.",
          "Energy-efficient drying is desired.",
          "Continuous, controlled moisture removal is needed."
        ],

        features: [
          "High-velocity hot air drying system",
          "Instant moisture removal within seconds",
          "Compact, space-saving design",
          "Suitable for slurries, pastes, cakes, and powders",
          "Energy-efficient due to short residence time",
          "Direct or indirect heating options",
          "Adjustable product fineness",
          "Dust handling system included (cyclone, bag filter)",
          "Fully continuous operation"
        ],

        applications: {
          foodAndAgro: [
            "Starch",
            "Protein powders",
            "Milk derivatives",
            "Spices",
            "Fruit pulp residue",
            "Wheat gluten"
          ],
          chemicals: [
            "Pigments",
            "Dyes",
            "Titanium dioxide",
            "Calcium carbonate",
            "Sodium chloride",
            "Silica",
            "Alumina",
            "Magnesium compounds"
          ],
          pharmaceuticals: [
            "APIs",
            "Herbal extracts",
            "Fine powders"
          ],
          minerals: [
            "Clay",
            "Ceramic powders",
            "Kaolin",
            "Bentonite"
          ],
          biomassAndWaste: [
            "Sludges",
            "Effluent cake",
            "Biomass slurry",
            "Organic waste paste drying"
          ]
        },

        advantages: [
          "Ultra-fast drying (fractions of a second to a few seconds)",
          "High thermal efficiency",
          "Suitable for heat-sensitive materials",
          "Produces fine, uniform powder",
          "Compact system footprint",
          "Continuous and automated operation"
        ],

        disadvantages: [
          "Not suitable for large, lumpy, or coarse materials",
          "Feed must be pumpable or dispersible",
          "Higher dust generation (requires bag filters/cyclones)",
          "Particle size control limited compared to spray dryers",
          "Not ideal for very high moisture (>60%) without premixing"
        ],

        variants: [
          "Single-pass flash dryer",
          "Multi-pass flash dryer",
          "Agitated flash dryer (with cage mill)",
          "Pneumatic flash dryer",
          "Spin-flash dryer (with disintegrator)",
          "Indirect flash dryer (for toxic/solvent materials)",
          "Steam-powered flash dryer"
        ],

        keySelectionParameters: [
          "Initial feed type (slurry, cake, paste, powder)",
          "Initial and final moisture content",
          "Required drying rate (kg/hr or tons/hr)",
          "Material heat sensitivity",
          "Particle size requirement",
          "Stickiness or melting tendency",
          "Available heat source",
          "Space limitations",
          "Environmental & dust control needs"
        ]
      },
      {
        title: "Cage Mill Flash Dryer",
        slug: "cage-mill-flash-dryer",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-speed flash drying system with integrated cage mill for drying sticky, lumpy, and high-moisture materials.",

        fullDescription:
          "A Cage Mill Flash Dryer (also called Spin Flash Dryer with Cage Mill) is a high-speed drying system used to dry pastes, cakes, slurries, and non-free-flowing wet materials. It combines mechanical disintegration (cage mill) and flash drying in one system, making it ideal for difficult-to-dry materials. It handles sticky, lumpy, filter cakes and high moisture materials while producing uniform fine powder with ultra-fast drying within seconds.",

        workingPrinciple: [
          "Material Feeding: Wet feed (cake/paste/slurry) enters through a screw feeder or rotary valve.",
          "Cage Mill Disintegration: A high-speed rotating cage mill shatters lumps and disperses material into fine particles.",
          "High-Velocity Hot Air Entry: Hot air enters the drying chamber at high speed, creating a turbulent environment.",
          "Instant Moisture Evaporation: Fine particles come into direct contact with hot air, causing instant flash drying.",
          "Pneumatic Transport Drying: Drying continues as particles travel upward through the drying duct.",
          "Particle Separation: Cyclone separator and/or bag filter separates fine powder from exhaust air.",
          "Final Product Discharge: Dry powder is continuously collected from the cyclone/bag filter hopper."
        ],

        whyUse: [
          "Material is sticky, lumpy, or difficult to atomize.",
          "Conventional flash dryers fail due to feed consistency.",
          "Fast drying of high-moisture content material is required.",
          "Uniform fine powder output is required.",
          "Energy-efficient system with integrated grinding is needed."
        ],

        features: [
          "Built-in high-speed cage mill for lump breaking",
          "Ideal for pastes, cakes, and slurries",
          "Instant drying within seconds",
          "High turbulence for rapid moisture removal",
          "Compact and efficient design",
          "Adjustable particle size via mill speed",
          "Gas or steam heating options",
          "Dust control with cyclone & bag filter",
          "Very low residence time (suitable for heat-sensitive materials)",
          "Continuous 24/7 operation"
        ],

        applications: {
          foodAndAgro: [
            "Starch",
            "Spices paste residues",
            "Gluten",
            "Protein slurry",
            "Fruit pulp cake"
          ],
          minerals: [
            "Kaolin",
            "Bentonite",
            "Ceramic powders"
          ],
          chemicals: [
            "Calcium carbonate",
            "Silica",
            "Titanium dioxide",
            "Chemical sludge",
            "Dyes & pigments"
          ],
          pharmaceuticals: [
            "Herbal extracts",
            "Pharma residues",
            "Fine chemical intermediates"
          ],
          biomassAndWaste: [
            "Effluent treatment plant (ETP) sludge",
            "Waste slurry",
            "Biomass cake",
            "Sewage sludge"
          ]
        },

        advantages: [
          "Designed for difficult-to-dry materials",
          "Handles sticky, pasty, non-flowable feed easily",
          "Integrated milling ensures uniform powder",
          "Reduced drying time compared to tray or rotary dryers",
          "Highly energy efficient",
          "Suitable for heat-sensitive materials",
          "Compact footprint",
          "Low maintenance (simple design)"
        ],

        disadvantages: [
          "Not suitable for large solid chunks",
          "Higher dust generation (requires good filtration)",
          "Wear and tear on cage mill for highly abrasive materials",
          "Feed must be deliverable (via screw/pump)",
          "Fine powder may need further classification depending on use"
        ],

        variants: [
          "Standard Cage Mill Flash Dryer",
          "Agitated Flash Dryer with Cage Mill",
          "Horizontal Spin Flash Dryer",
          "Vertical Flash Dryer with Integrated Mill",
          "Indirect Flash Dryer (for solvent/toxic materials)",
          "Multi-pass drying system for very wet feeds"
        ],

        keySelectionParameters: [
          "Type of feed (slurry, paste, cake, viscosity)",
          "Initial and final moisture requirements",
          "Particle hardness (affects mill wear)",
          "Required particle size of final powder",
          "Heat sensitivity of the product",
          "Bulk density & flowability",
          "Available heat source (steam/gas/biomass)",
          "Environmental regulations (dust emission)",
          "Space availability",
          "Required capacity (kg/hr to tons/hr)"
        ]
      },
      {
        title: "Spin Flash Dryer",
        slug: "spin-flash-dryer",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-speed vertical drying system combining mechanical agitation and flash drying for sticky and non-free-flowing materials.",

        fullDescription:
          "A Spin Flash Dryer is a high-speed drying system designed to dry pastes, cakes, slurries, and non-free-flowing materials into fine, free-flowing powders. It combines mechanical agitation (rotor) and flash drying inside a vertical drying chamber, providing instant moisture removal and uniform particle size. Spin Flash Dryers are known for ultra-fast drying, ability to handle sticky and difficult materials, high thermal efficiency, and compact footprint.",

        workingPrinciple: [
          "Material Feeding: Wet feed (paste, cake, slurry) is introduced through a screw feeder or rotary airlock.",
          "High-Speed Rotor / Disintegrator: A rotating agitator at the bottom of the drying chamber breaks lumps and disperses the material into fine particles.",
          "Hot Air Injection: High-velocity hot air enters tangentially, creating a swirling (spinning) airflow.",
          "Flash Drying: Dispersed particles are suspended in spinning hot air stream causing instant moisture evaporation.",
          "Pneumatic Conveying: Dried particles rise through the drying duct along with hot air.",
          "Particle Separation: Cyclone separators or bag filters collect dry powder from air stream.",
          "Final Product Discharge: Dry powder is discharged through hoppers and collection systems."
        ],

        whyUse: [
          "Material is sticky, pasty, or non-free flowing.",
          "Rapid drying is required.",
          "Heat-sensitive materials need short exposure.",
          "Uniform fine powder is required.",
          "Space-saving design is needed.",
          "Low energy consumption is a priority.",
          "Continuous, controlled operation is required."
        ],

        features: [
          "High-speed rotor ensures complete dispersion of wet feed",
          "Instant drying with residence time of 1–10 seconds",
          "Handles pastes, slurries, cakes effectively",
          "Tangential hot air inlet for spinning airflow",
          "Compact vertical drying chamber",
          "Adjustable rotor speed for controlling powder fineness",
          "Efficient cyclone/bag filter dust separation",
          "Direct or indirect heating options",
          "Suitable for continuous 24/7 operation"
        ],

        applications: {
          foodAndAgro: [
            "Starch",
            "Spices residue",
            "Fruit pulp waste",
            "Proteins & plant extracts",
            "Gluten"
          ],
          chemicals: [
            "Calcium carbonate",
            "Magnesium compounds",
            "Sodium silicate",
            "Dyes & pigments",
            "Titanium dioxide",
            "Silica & alumina"
          ],
          pharmaceuticals: [
            "API intermediates",
            "Herbal extracts",
            "Pharma crusts/cakes"
          ],
          wasteAndBiomass: [
            "ETP sludge",
            "Biomass slurry",
            "Industrial waste cake"
          ],
          mineralsAndCeramics: [
            "Clay",
            "Kaolin",
            "Bentonite",
            "Ceramic powders"
          ]
        },

        advantages: [
          "Excellent for sticky, semi-solid, pasty materials",
          "Instant drying suitable for heat-sensitive products",
          "Produces consistent fine powder",
          "High thermal efficiency",
          "Compact and space-saving design",
          "Low maintenance with minimal moving parts",
          "High drying capacity",
          "Energy-efficient air distribution",
          "Continuous operation"
        ],

        disadvantages: [
          "Not suitable for large solid lumps",
          "Wear on rotor for abrasive materials",
          "Dust control required (cyclone/bag filter)",
          "Not suitable for very high-moisture slurries without pre-thickening",
          "Fine powder may require classification"
        ],

        variants: [
          "Standard Spin Flash Dryer",
          "Agitated Spin Flash Dryer",
          "Indirect Spin Flash Dryer",
          "High-Turbulence Spin Flash Dryer",
          "Multi-Stage Spin Flash Dryer",
          "Low-Temperature Spin Flash Dryer (for heat-sensitive materials)"
        ],

        keySelectionParameters: [
          "Feed type (slurry, paste, cake)",
          "Initial and final moisture content",
          "Material stickiness / melting point",
          "Particle size requirement",
          "Rotor design & required speed",
          "Heat sensitivity of product",
          "Bulk density & flowability",
          "Heating medium (steam, gas, biomass)",
          "Environmental control requirements (dust emission)",
          "Required capacity & space availability"
        ]
      },
      {
        title: "Pilot Spray Dryer",
        slug: "pilot-spray-dryer",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Compact small-to-medium capacity spray drying system for R&D, sampling, scale-up trials, and formulation development.",

        fullDescription:
          "A Pilot Spray Dryer is a compact, small-to-medium capacity spray drying system used for product development, R&D, sampling, and scale-up before full-scale industrial production. It converts liquid feed (solution, slurry, emulsion) into fine, free-flowing powder through atomization and rapid hot-air drying. Pilot spray dryers are known for precise control of particle size and moisture, reproducible drying performance, high thermal efficiency, and flexibility to test various formulations.",

        workingPrinciple: [
          "Feed Preparation: Solution, suspension, or emulsion is prepared in a feed tank.",
          "Atomization: Feed is atomized into fine droplets using two-fluid nozzle, pressure nozzle, or optional rotary atomizer in larger pilot units.",
          "Hot Air Drying: Heated air enters the drying chamber and instantly evaporates moisture from droplets.",
          "Particle Formation: Dry powder forms as hot air contacts atomized droplets.",
          "Powder Separation: Cyclone separator or bag filter collects the dried powder.",
          "Exhaust Air Handling: Filtered clean air exits through an exhaust blower.",
          "Powder Collection: Final powder is discharged into containers or receivers."
        ],

        whyUse: [
          "R&D trials are needed for new formulations.",
          "Scaling up from lab to industrial spray drying.",
          "Producing small quantities (batches) for testing.",
          "Validating process parameters.",
          "Improving product stability and solubility.",
          "Creating fine, consistent powders."
        ],

        features: [
          "Compact R&D-friendly design",
          "Precise control of inlet and outlet temperature",
          "Multiple atomizer options",
          "Adjustable particle size (10–200 microns)",
          "SS304 / SS316 construction",
          "Digital or PLC-based control system",
          "Easy cleaning and quick changeover",
          "Suitable for heat-sensitive products",
          "Cyclone + bag filter for high powder recovery",
          "Fully automatic or semi-automatic operation"
        ],

        applications: {
          pharmaceuticals: [
            "API spray drying",
            "Herbal extracts",
            "Enzymes",
            "Vitamins",
            "Controlled-release powders"
          ],
          biotechnology: [
            "Probiotics",
            "Enzyme formulations",
            "Fermentation extracts",
            "Bioactive compounds"
          ],
          foodAndDairy: [
            "Milk powder",
            "Coffee and tea extract",
            "Flavors & essences",
            "Proteins and starch derivatives",
            "Infant food formulations"
          ],
          chemicals: [
            "Pigments",
            "Detergents",
            "Polymers & resins",
            "Ceramic slurries",
            "Catalysts"
          ]
        },

        advantages: [
          "Ideal for R&D, formulation development & testing",
          "Low feed requirement (small batches)",
          "Excellent process control",
          "Uniform particle shape and moisture content",
          "Highly reproducible results",
          "Easy scale-up to industrial spray dryers",
          "Suitable for heat-sensitive materials",
          "Quick cleaning and product changeover"
        ],

        disadvantages: [
          "Higher cost per kg product compared to industrial dryers",
          "Limited capacity (not suitable for mass production)",
          "Requires skilled operation",
          "Powder fines may require additional recovery systems",
          "Sensitive to nozzle clogging with viscous feeds"
        ]
      }
      ,
      {
        title: "Continuous Fluid Bed Dryer (CFBD)",
        slug: "continuous-fluid-bed-dryer",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Continuous fluidization-based drying system for powders, granules, pellets, and crystalline materials with precise moisture control.",

        fullDescription:
          "A Continuous Fluid Bed Dryer (CFBD) is a continuous thermal drying system used for drying powders, granules, pellets, and crystalline materials by suspending them in an upward flow of hot air or gas. In a CFBD, wet material is continuously fed, fluidized, dried, and discharged, making it ideal for large-scale and high-throughput operations requiring uniform moisture removal. CFBDs are known for high drying efficiency, uniform heat and mass transfer, short drying time, continuous automated operation, and excellent final moisture control.",

        workingPrinciple: [
          "Material Feeding: Wet material is fed continuously using screw feeder, rotary valve, or belt feeder.",
          "Air Distribution: Hot air is supplied from the bottom through a perforated distributor plate ensuring uniform fluidization.",
          "Fluidization: Air velocity lifts and suspends particles, creating intense mixing and large surface area contact.",
          "Moisture Evaporation: Heat transfer by convection removes moisture rapidly from particle surfaces.",
          "Material Conveyance: Material moves forward through bed slope, internal weirs/baffles, or vibratory motion (in vibrating CFBD).",
          "Product Discharge: Dried product exits continuously through overflow weir or rotary valve.",
          "Exhaust & Dust Collection: Moist exhaust air passes through cyclone separator and bag filter."
        ],

        whyUse: [
          "Uniform drying is critical.",
          "Continuous production is required.",
          "Material is free-flowing powders or granules.",
          "Precise moisture control is needed.",
          "Low residence time is beneficial.",
          "Heat-sensitive materials must be protected.",
          "Automation and GMP compliance are important."
        ],

        features: [
          "Continuous feed and discharge",
          "Perforated air distributor plate",
          "Multiple drying zones (optional)",
          "Co-current airflow",
          "High heat and mass transfer efficiency",
          "Low product degradation",
          "Compact design compared to rotary dryers",
          "Easy integration with upstream and downstream equipment",
          "PLC + HMI automation (optional)"
        ],

        applications: {
          pharmaceuticalIndustry: [
            "Granules",
            "Pellets",
            "Crystalline APIs"
          ],
          chemicalIndustry: [
            "Detergent powders",
            "Polymers",
            "Salts",
            "Fertilizers"
          ],
          foodIndustry: [
            "Sugar",
            "Starch",
            "Cereals",
            "Milk powder",
            "Instant foods"
          ],
          mineralsAndIndustrialMaterials: [
            "Sand",
            "Fine ores",
            "Catalyst particles"
          ]
        },

        advantages: [
          "Excellent heat and mass transfer",
          "Uniform and controlled drying",
          "Short drying time",
          "Suitable for heat-sensitive materials",
          "Continuous and automated operation",
          "Energy efficient",
          "Compact design",
          "Easy scale-up"
        ],

        disadvantages: [
          "Not suitable for sticky or cohesive materials",
          "Particle attrition may occur",
          "Higher capital cost than rotary dryers",
          "Requires precise airflow control",
          "Fine powders may need advanced dust control"
        ],

        variants: [
          "Single-stage Continuous Fluid Bed Dryer",
          "Multi-stage Continuous Fluid Bed Dryer",
          "Vibrating Fluid Bed Dryer",
          "Spouted Bed Dryer",
          "Drying + Cooling Fluid Bed Dryer",
          "Agglomeration Fluid Bed Dryer"
        ],

        keySelectionParameters: [
          "Material flowability",
          "Particle size distribution",
          "Initial and final moisture content",
          "Throughput requirement",
          "Heat sensitivity of material",
          "Required residence time",
          "Dusting tendency",
          "GMP or hygienic design requirements",
          "Energy efficiency needs",
          "Integration with process line"
        ]
      }
      ,
      {
        title: "Vibratory Fluid Bed Dryer (VFBD)",
        slug: "vibratory-fluid-bed-dryer",
       icon: "bi bi-chevron-right",

        shortDescription:
          "Continuous drying system combining fluidization and mechanical vibration for uniform moisture removal and gentle material handling.",

        fullDescription:
          "A Vibratory Fluid Bed Dryer (VFBD) is a continuous drying system that combines fluidization and mechanical vibration to dry powders, granules, crystals, and particulate solids. Unlike conventional fluid bed dryers, VFBD uses controlled vibration to assist material movement, enabling uniform drying, stable fluidization, and gentle handling, even for difficult-to-fluidize materials. VFBDs are known for continuous operation, uniform moisture removal, controlled residence time, gentle product handling, and compact efficient design.",

        workingPrinciple: [
          "Material Feeding: Wet material is fed continuously using screw feeder, rotary valve, or belt feeder.",
          "Air Distribution: Heated air enters from the bottom through a perforated distributor plate with controlled velocity.",
          "Vibration Mechanism: Dryer is mounted on springs and vibratory motors generate controlled vibration.",
          "Fluidization & Drying: Particles are suspended and gently agitated while hot air uniformly removes moisture.",
          "Material Conveyance: Forward movement occurs due to vibration direction, amplitude, and slight bed inclination.",
          "Product Discharge: Dried material exits continuously through the outlet with controlled discharge rate.",
          "Exhaust & Dust Collection: Moist exhaust air passes through cyclone separator and bag filter."
        ],

        whyUse: [
          "Gentle handling is required.",
          "Material is fragile, heat-sensitive, or prone to degradation.",
          "Consistent residence time is needed.",
          "Uniform drying is critical.",
          "Low bed depth and short drying time are desired.",
          "Sticky or fine materials need better movement control."
        ],

        features: [
          "Continuous feed and discharge",
          "Integrated vibration system",
          "Perforated air distributor plate",
          "Precise residence time control",
          "Low air velocity requirement",
          "Minimal particle attrition",
          "Compact footprint",
          "High thermal efficiency",
          "Easy cleaning and maintenance"
        ],

        applications: {
          pharmaceuticalIndustry: [
            "Granules",
            "Pellets",
            "APIs",
            "Intermediates"
          ],
          chemicalIndustry: [
            "Polymers",
            "Detergents",
            "Salts",
            "Catalysts"
          ],
          foodIndustry: [
            "Sugar",
            "Starch",
            "Cereals",
            "Instant foods"
          ],
          mineralsAndIndustrialMaterials: [
            "Sand",
            "Fine ores",
            "Industrial powders"
          ],
          fertilizersAndAgriculture: [
            "Urea",
            "NPK granules",
            "Ammonium sulfate"
          ]
        },

        advantages: [
          "Uniform drying and temperature distribution",
          "Controlled and adjustable residence time",
          "Suitable for heat-sensitive and fragile materials",
          "Reduced fluidization air requirement",
          "Lower pressure drop than conventional FBD",
          "Continuous and scalable operation",
          "Compact design",
          "Improved product quality"
        ],

        disadvantages: [
          "Higher capital cost than static fluid bed dryers",
          "Requires vibration maintenance",
          "Not ideal for very sticky materials",
          "Dust generation possible",
          "Noise and vibration isolation required"
        ],

        variants: [
          "Single-deck Vibratory Fluid Bed Dryer",
          "Multi-deck Vibratory Fluid Bed Dryer",
          "Drying & Cooling Vibratory Fluid Bed",
          "Vibratory Fluid Bed Cooler",
          "Vibratory Fluid Bed with Classifier"
        ],

        keySelectionParameters: [
          "Material flowability and friability",
          "Particle size distribution",
          "Initial and final moisture content",
          "Required capacity",
          "Heat sensitivity of product",
          "Desired residence time",
          "Dusting tendency",
          "Space availability",
          "Energy efficiency requirements",
          "Noise and vibration control needs"
        ]
      }
      ,
      {
        title: "Hygienic Spray Dryers",
        slug: "hygienic-spray-dryers",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Sanitary spray drying system designed for food, dairy, pharmaceutical, and nutraceutical industries with strict hygiene compliance.",

        fullDescription:
          "A Hygienic Spray Dryer is a continuous drying system designed specifically for food, dairy, pharmaceutical, and nutraceutical applications where product safety, cleanliness, and regulatory compliance are critical. It converts liquid or slurry feed into dry powder by atomizing the liquid into fine droplets and instantly drying them with hot, sterile air under strict hygienic conditions. Hygienic Spray Dryers are known for high product purity, sanitary contamination-free operation, rapid drying, uniform particle size, and compliance with GMP, FDA, EHEDG, and 3-A standards.",

        workingPrinciple: [
          "Feed Preparation: Liquid feed (solution, emulsion, or slurry) is filtered, homogenized if required, and fed at controlled temperature and viscosity.",
          "Atomization: Liquid is atomized into fine droplets using rotary atomizer, pressure nozzle, or two-fluid nozzle.",
          "Hot Air Supply: Heated, filtered, and HEPA-filtered sterile air enters the drying chamber in co-current, counter-current, or mixed flow configuration.",
          "Drying & Moisture Evaporation: Droplets contact hot air and moisture evaporates instantly forming dry particles.",
          "Powder Separation: Dried powder is separated using cyclone separator, bag filter, or optional wet scrubber.",
          "Product Collection: Powder is collected in bins or passed to a fluid bed for secondary drying/cooling.",
          "Exhaust Air Handling: Moist air exits through filtration and exhaust systems ensuring environmental and hygienic compliance."
        ],

        whyUse: [
          "Product safety and hygiene are critical.",
          "Liquid feed must be converted into powder.",
          "Heat-sensitive materials require short exposure time.",
          "Consistent particle size and moisture are required.",
          "Regulatory compliance (GMP/FDA) is mandatory.",
          "Easy cleaning and validation are needed."
        ],

        hygienicDesignFeatures: [
          "Smooth, crevice-free internal surfaces",
          "Stainless steel (SS304 / SS316L) construction",
          "Welds ground and polished",
          "No dead zones or product hold-up areas",
          "CIP (Clean-in-Place) and SIP (Sterilize-in-Place)",
          "HEPA-filtered inlet air",
          "Hygienic seals and gaskets (FDA approved)",
          "Fully drainable design",
          "Enclosed and contamination-free operation"
        ],

        features: [
          "Extremely fast drying",
          "Excellent product hygiene",
          "Suitable for heat-sensitive materials",
          "Uniform particle size distribution",
          "Continuous and scalable process",
          "Low thermal degradation",
          "Easy cleaning and validation",
          "High product quality and shelf life"
        ],

        applications: {
          dairyIndustry: [
            "Milk powder",
            "Whey powder",
            "Infant formula",
            "Caseinates"
          ],
          foodAndBeverage: [
            "Coffee",
            "Tea extracts",
            "Flavors and aromas",
            "Egg powder",
            "Fruit and vegetable powders"
          ],
          pharmaceuticalIndustry: [
            "APIs",
            "Excipients",
            "Vaccines (carrier powders)",
            "Inhalation powders"
          ],
          nutraceuticals: [
            "Protein powders",
            "Probiotics",
            "Herbal extracts",
            "Vitamins and supplements"
          ]
        },

        advantages: [
          "Extremely fast drying",
          "Excellent product hygiene",
          "Suitable for heat-sensitive materials",
          "Uniform particle size distribution",
          "Continuous and scalable process",
          "Low thermal degradation",
          "Easy cleaning and validation",
          "High product quality and shelf life"
        ],

        disadvantages: [
          "High capital cost",
          "High energy consumption",
          "Requires liquid feed preparation",
          "Fine powder handling challenges",
          "Skilled operation and maintenance required"
        ],

        variants: [
          "Co-current Hygienic Spray Dryer",
          "Counter-current Hygienic Spray Dryer",
          "Mixed-flow Spray Dryer",
          "Spray Dryer with Integrated Fluid Bed",
          "Closed-loop Spray Dryer (for solvents)",
          "Pharmaceutical Spray Dryer",
          "Dairy Spray Dryer"
        ],

        keySelectionParameters: [
          "Nature of liquid feed (viscosity, solids content)",
          "Heat sensitivity of product",
          "Required particle size and bulk density",
          "Hygiene and regulatory requirements",
          "Capacity and evaporation rate",
          "Available utilities (steam, electricity, air)",
          "Cleaning and validation needs",
          "Explosion safety (for organic powders)",
          "Integration with upstream/downstream processes"
        ],

        hygieneStandards: [
          "GMP (Good Manufacturing Practice)",
          "FDA compliance",
          "EHEDG guidelines",
          "3-A Sanitary Standards",
          "ATEX (for combustible powders)",
          "ISO standards (as applicable)"
        ]
      }
      ,
      {
        title: "Product-Specific Dryers",
        slug: "product-specific-dryers",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Customized drying systems engineered for specific product characteristics, ensuring optimized performance and quality output.",

        fullDescription:
          "Product-Specific Dryers are customized drying systems designed to meet the unique physical, chemical, and functional requirements of specific products. These dryers are engineered with specialized atomization, airflow, chamber design, and material handling configurations to ensure optimized drying efficiency, product stability, and consistent quality output.",

        productCategories: [
          {
            name: "Food & Flavours Dryers",
            features: [
              "Aroma retention technology",
              "Low thermal degradation",
              "Agglomerated instant powders"
            ]
          },
          {
            name: "Non-Dairy Creamer (NDC) Dryers",
            features: [
              "High free-fat encapsulation system",
              "Agglomeration for instant dissolving",
              "Consistent bulk density"
            ]
          },
          {
            name: "Soy Lecithin Dryers",
            features: [
              "Tailored atomization for viscous feeds",
              "Sticky-product drying chamber design",
              "Prevents wall deposition"
            ]
          },
          {
            name: "Calcium Chloride Granule Dryers",
            features: [
              "Corrosion-resistant materials",
              "Uniform granule size",
              "Controlled moisture reduction"
            ]
          }
        ],

        advantages: [
          "Customized design for specific product requirements",
          "Improved product quality and stability",
          "Optimized drying efficiency",
          "Better control over bulk density and particle structure",
          "Reduced product degradation",
          "Enhanced operational reliability"
        ],

        whyUse: [
          "Standard dryers cannot meet specific product requirements.",
          "Precise control over aroma, bulk density, or encapsulation is needed.",
          "Product stickiness or special physical properties require custom chamber design.",
          "High-value or sensitive products demand optimized drying conditions."
        ],

        keySelectionParameters: [
          "Product physical characteristics (viscosity, stickiness, granule size)",
          "Required moisture content",
          "Bulk density requirements",
          "Thermal sensitivity",
          "Production capacity",
          "Material compatibility and corrosion resistance",
          "Hygienic or regulatory requirements (if applicable)"
        ]
      }
      ,
      {
        title: "Mini Spray Dryers",
        slug: "mini-spray-dryers",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Compact laboratory-scale spray drying system for small batch production, R&D, and educational applications.",

        fullDescription:
          "A Mini Spray Dryer is a compact laboratory-scale spray drying system designed for small batch production, research & development, formulation testing, and academic purposes. It converts liquid feed (solution, suspension, or emulsion) into fine dry powder through atomization and rapid hot-air drying. Mini Spray Dryers are known for low feed requirement, precise temperature control, ease of operation, and suitability for heat-sensitive materials.",

        workingPrinciple: [
          "Feed Preparation: Liquid feed is prepared in small quantities and transferred to feed tank.",
          "Atomization: A two-fluid nozzle atomizes liquid into fine droplets.",
          "Hot Air Entry: Heated air enters drying chamber and contacts droplets.",
          "Rapid Drying: Moisture evaporates instantly forming dry particles.",
          "Powder Collection: Cyclone separator collects dried powder.",
          "Exhaust Handling: Clean air exits through filtration system."
        ],

        whyUse: [
          "Small batch production is required.",
          "Formulation development and R&D trials.",
          "Academic or laboratory research.",
          "Testing product feasibility before pilot scale.",
          "Heat-sensitive materials require short exposure time.",
          "Limited material availability."
        ],

        features: [
          "Compact tabletop design",
          "Low feed requirement (50 ml to few liters)",
          "Precise temperature control",
          "Digital display & control panel",
          "Two-fluid atomization system",
          "Easy cleaning and maintenance",
          "SS304 / SS316 construction",
          "Safe operation with built-in protection",
          "Quick setup and shutdown"
        ],

        applications: {
          pharmaceuticals: [
            "API trials",
            "Drug formulation studies",
            "Controlled-release powders"
          ],
          foodAndBeverage: [
            "Flavor testing",
            "Milk powder samples",
            "Herbal extract drying"
          ],
          biotechnology: [
            "Enzymes",
            "Probiotics",
            "Fermentation samples"
          ],
          chemicals: [
            "Fine chemical trials",
            "Pigments",
            "Specialty powders"
          ],
          academicAndResearch: [
            "University research projects",
            "Product feasibility testing"
          ]
        },

        advantages: [
          "Very low feed consumption",
          "Ideal for R&D and small-scale trials",
          "Easy installation and operation",
          "Compact and space-saving",
          "Fast drying with consistent powder formation",
          "Suitable for heat-sensitive materials",
          "Cost-effective for lab-scale use"
        ],

        disadvantages: [
          "Limited production capacity",
          "Not suitable for industrial-scale manufacturing",
          "Small cyclone may reduce powder recovery",
          "Limited automation compared to pilot systems",
          "Not suitable for highly viscous or sticky feeds without modification"
        ],

        variants: [
          "Standard Mini Spray Dryer",
          "Glass Chamber Mini Spray Dryer (visual observation)",
          "Closed-Loop Mini Spray Dryer (for solvents)",
          "Mini Spray Dryer with Inert Gas Option",
          "Mini Spray Dryer with Built-in Compressor"
        ],

        keySelectionParameters: [
          "Required batch size",
          "Feed viscosity and solids content",
          "Desired particle size",
          "Heat sensitivity of product",
          "Available utilities (electricity, compressed air)",
          "Solvent or water-based system",
          "Required temperature range",
          "Research or academic purpose"
        ]
      }
      ,
    ],
  },

  {
    category: "Atomization Technologies",
    categorySlug: "atomization-technologies",
    icon: "bi bi-chevron-right",
    items: [
      {
        title: "Rotary Disc Atomizer",
        slug: "rotary-disc-atomizer",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-speed centrifugal atomization system producing uniform droplets for large-capacity spray drying applications.",

        fullDescription:
          "A Rotary Disc Atomizer is a high-speed centrifugal atomization device used in spray dryers to convert liquid feed into fine droplets. The liquid is fed onto a rapidly rotating disc or wheel, where centrifugal force spreads it into a thin film and breaks it into uniform droplets. Rotary Disc Atomizers are widely used in large-scale industrial spray dryers due to their ability to handle high feed rates, viscous liquids, and produce consistent particle size distribution.",

        workingPrinciple: [
          "Liquid Feeding: Liquid feed is supplied to the center of the rotating disc.",
          "Centrifugal Acceleration: The disc rotates at high speed (5,000–25,000 RPM).",
          "Film Formation: Liquid spreads outward forming a thin film on disc surface.",
          "Droplet Formation: Centrifugal force causes the liquid film to break into fine droplets.",
          "Spray Pattern: Droplets are uniformly distributed into the drying chamber.",
          "Drying Process: Hot air contacts droplets causing rapid moisture evaporation."
        ],

        whyUse: [
          "High feed rate is required.",
          "Uniform droplet size distribution is needed.",
          "Viscous or high-solid liquids must be atomized.",
          "Large-capacity industrial spray dryer is used.",
          "Low nozzle clogging risk is desired."
        ],

        features: [
          "High rotational speed (up to 25,000 RPM)",
          "Uniform droplet size distribution",
          "Handles high-viscosity liquids",
          "High throughput capacity",
          "Adjustable disc speed for particle control",
          "Low risk of blockage compared to pressure nozzles",
          "Heavy-duty motor and bearing system",
          "Available in stainless steel construction",
          "Long operational life"
        ],

        applications: {
          dairyIndustry: [
            "Milk powder",
            "Whey powder",
            "Infant formula"
          ],
          foodIndustry: [
            "Coffee extract",
            "Flavors",
            "Starches",
            "Egg powder"
          ],
          chemicalIndustry: [
            "Detergents",
            "Resins",
            "Polymers",
            "Catalysts",
            "Pigments"
          ],
          ceramicsAndMinerals: [
            "Ceramic slurries",
            "Ferrites",
            "Metal oxides"
          ],
          environmental: [
            "Wastewater concentrate drying",
            "ZLD applications"
          ]
        },

        advantages: [
          "Handles large feed capacity",
          "Suitable for high-solids and viscous feeds",
          "Uniform particle size distribution",
          "Reduced nozzle clogging",
          "Suitable for continuous industrial production",
          "Adjustable particle size via RPM control"
        ],

        disadvantages: [
          "Higher capital cost compared to nozzles",
          "Mechanical wear due to high speed",
          "Requires regular bearing maintenance",
          "Energy consumption due to motor power",
          "Not suitable for very low production rates"
        ],

        variants: [
          "Standard Rotary Disc Atomizer",
          "High-Speed Industrial Atomizer",
          "Explosion-Proof Rotary Atomizer",
          "Hygienic Design Atomizer",
          "Dual-Drive Rotary Atomizer"
        ],

        keySelectionParameters: [
          "Required feed rate",
          "Liquid viscosity and solids content",
          "Desired droplet size",
          "Spray dryer chamber size",
          "Motor power requirement",
          "Material compatibility (corrosion resistance)",
          "Maintenance accessibility",
          "Operational hours per day"
        ]
      }
      ,
      {
        title: "Spray Nozzle Atomization",
        slug: "spray-nozzle-atomization",
       icon: "bi bi-chevron-right",

        shortDescription:
          "Pressure-based atomization system converting liquid feed into controlled droplet sizes for precise spray drying applications.",

        fullDescription:
          "Spray Nozzle Atomization is a pressure-based droplet formation system used in spray dryers to convert liquid feed into fine droplets. The liquid is pumped at high pressure through a specially designed nozzle orifice, creating atomized droplets due to hydraulic pressure energy. This method provides precise control over droplet size and is widely used in applications requiring narrow particle size distribution and uniform powder characteristics.",

        workingPrinciple: [
          "High-Pressure Pumping: Liquid feed is pressurized using a high-pressure pump.",
          "Nozzle Entry: Pressurized liquid passes through a precision-engineered nozzle orifice.",
          "Atomization: Sudden pressure drop causes the liquid stream to break into fine droplets.",
          "Spray Pattern Formation: Nozzle design determines droplet size and spray angle.",
          "Drying Interaction: Hot air contacts droplets inside the drying chamber.",
          "Moisture Removal: Rapid evaporation forms dry powder particles."
        ],

        whyUse: [
          "Precise particle size control is required.",
          "Narrow droplet size distribution is needed.",
          "Lower equipment cost compared to rotary atomizers.",
          "Medium to high-pressure systems are available.",
          "Application requires uniform powder quality."
        ],

        features: [
          "High-pressure atomization (up to 300 bar or more)",
          "Narrow droplet size distribution",
          "Various spray angles available",
          "Interchangeable nozzle tips",
          "Compact and simple design",
          "Suitable for different liquid viscosities (within limit)",
          "Easy integration with industrial spray dryers",
          "Lower mechanical wear compared to rotary atomizers"
        ],

        types: [
          "Single-Fluid Pressure Nozzle",
          "Two-Fluid Nozzle (Air-Assisted)",
          "Hydraulic Pressure Nozzle",
          "Hollow Cone Nozzle",
          "Full Cone Nozzle",
          "Flat Spray Nozzle"
        ],

        applications: {
          dairyIndustry: [
            "Milk powder",
            "Whey powder"
          ],
          foodIndustry: [
            "Flavors",
            "Instant beverages",
            "Egg powder"
          ],
          pharmaceuticalIndustry: [
            "APIs",
            "Inhalation powders",
            "Controlled-release formulations"
          ],
          chemicalIndustry: [
            "Detergents",
            "Pigments",
            "Resins",
            "Polymers"
          ],
          ceramicsAndAdvancedMaterials: [
            "Ceramic slurries",
            "Battery materials"
          ]
        },

        advantages: [
          "Precise droplet size control",
          "Lower capital cost than rotary atomizers",
          "Compact and simple construction",
          "Interchangeable nozzle options",
          "Suitable for smaller capacity spray dryers",
          "Lower power consumption"
        ],

        disadvantages: [
          "Nozzle clogging possible with high solids or viscous feeds",
          "Wear of nozzle orifice over time",
          "Limited maximum feed capacity compared to rotary disc atomizer",
          "Requires high-pressure pump system",
          "Particle size sensitive to pressure fluctuations"
        ],

        keySelectionParameters: [
          "Liquid viscosity and solids concentration",
          "Required droplet size",
          "Operating pressure range",
          "Spray angle requirement",
          "Feed rate",
          "Maintenance accessibility",
          "Material compatibility",
          "Required particle size distribution"
        ]
      }
      ,
    ],
  },

  {
    category: "Spray Dryer Accessories",
    categorySlug: "spray-dryer-accessories",
    icon: "bi bi-chevron-right",
    items: [
      {
        title: "Dryer Chamber",
        slug: "dryer-chamber",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Core spray drying enclosure designed for controlled hot air–droplet interaction and efficient moisture evaporation.",

        fullDescription:
          "A Dryer Chamber is the primary enclosure of a spray drying system where atomized liquid droplets come into contact with hot air, resulting in rapid moisture evaporation and powder formation. The chamber is engineered to provide controlled airflow patterns, optimal residence time, and efficient heat transfer while preventing product degradation or wall deposition. It is constructed with hygienic and corrosion-resistant materials suitable for industrial, food, pharmaceutical, and chemical applications.",

        workingPrinciple: [
          "Atomized droplets enter the chamber from the top or centrally mounted atomizer.",
          "Heated air is introduced in co-current, counter-current, or mixed-flow configuration.",
          "Hot air and droplets interact inside the chamber, causing rapid moisture evaporation.",
          "Dry particles settle toward the bottom due to gravity.",
          "Fine particles are carried to cyclone or bag filter for separation.",
          "Exhaust air exits through filtration system."
        ],

        designFeatures: [
          "Cylindrical or cylindrical-conical geometry",
          "Optimized air distribution system",
          "SS304 / SS316 / Duplex steel construction",
          "Polished internal surface to reduce wall sticking",
          "Thermal insulation for heat retention",
          "Manholes and inspection ports",
          "Explosion vent panels (optional)",
          "CIP (Clean-in-Place) compatibility",
          "Fully drainable bottom cone"
        ],

        types: [
          "Co-Current Dryer Chamber",
          "Counter-Current Dryer Chamber",
          "Mixed-Flow Dryer Chamber",
          "Tall-Form Dryer Chamber",
          "Short-Form Dryer Chamber"
        ],

        applications: {
          dairyIndustry: [
            "Milk powder",
            "Whey powder"
          ],
          foodIndustry: [
            "Flavors",
            "Coffee extract",
            "Starches"
          ],
          pharmaceuticalIndustry: [
            "APIs",
            "Excipients",
            "Inhalation powders"
          ],
          chemicalIndustry: [
            "Polymers",
            "Pigments",
            "Catalysts"
          ]
        },

        advantages: [
          "Uniform heat and mass transfer",
          "Efficient moisture removal",
          "Controlled particle residence time",
          "Minimized wall deposition",
          "Suitable for large-scale industrial production",
          "Customizable design based on product requirements"
        ],

        keySelectionParameters: [
          "Required evaporation capacity",
          "Airflow configuration (co-current/counter-current)",
          "Feed properties (stickiness, solids content)",
          "Chamber height-to-diameter ratio",
          "Thermal insulation requirements",
          "Hygienic standards (food/pharma)",
          "Explosion safety requirements",
          "Available plant space"
        ]
      }
      ,
      {
        title: "Cyclone Separator",
        slug: "cyclone-separator",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-efficiency centrifugal separation system used for recovering fine powder particles from exhaust air streams.",

        fullDescription:
          "A Cyclone Separator is a mechanical separation device used in spray drying and other industrial processes to remove fine solid particles from air or gas streams. It operates on the principle of centrifugal force, separating particles from the exhaust airflow without the need for filters. Cyclone separators are widely used in spray dryers to recover powder efficiently before exhaust air is discharged into the atmosphere.",

        workingPrinciple: [
          "Tangential Inlet: Air containing powder enters the cyclone tangentially at high velocity.",
          "Vortex Formation: The incoming air creates a high-speed circular vortex inside the cylindrical body.",
          "Centrifugal Separation: Centrifugal force pushes heavier solid particles toward the cyclone wall.",
          "Particle Settlement: Particles lose velocity and fall downward into the conical bottom hopper.",
          "Clean Air Exit: Cleaned air moves upward through the inner vortex and exits via the top outlet."
        ],

        designFeatures: [
          "Cylindrical body with conical bottom",
          "Tangential air inlet design",
          "Optimized vortex finder for better separation",
          "SS304 / SS316 / Carbon Steel construction",
          "Abrasion-resistant lining (optional)",
          "High-efficiency powder recovery",
          "Low pressure drop design",
          "Single or multi-cyclone configuration"
        ],

        types: [
          "Single Cyclone Separator",
          "Multi-Cyclone Separator",
          "High-Efficiency Cyclone",
          "Reverse Flow Cyclone",
          "High-Temperature Cyclone"
        ],

        applications: {
          sprayDrying: [
            "Powder recovery from spray dryers"
          ],
          chemicalIndustry: [
            "Pigments",
            "Polymers",
            "Detergents"
          ],
          foodIndustry: [
            "Milk powder",
            "Coffee powder",
            "Spices"
          ],
          mineralsAndCement: [
            "Cement dust",
            "Limestone powder",
            "Silica dust"
          ],
          environmentalControl: [
            "Dust collection",
            "Air pollution control"
          ]
        },

        advantages: [
          "No moving parts (low maintenance)",
          "High durability and long life",
          "Low operational cost",
          "Efficient powder recovery",
          "Suitable for high-temperature gases",
          "Simple and robust design",
          "Continuous operation capability"
        ],

        limitations: [
          "Lower efficiency for extremely fine particles (<5 microns)",
          "Cannot achieve ultra-high filtration like bag filters",
          "Efficiency depends on particle density and airflow velocity",
          "May require secondary dust collection system"
        ],

        keySelectionParameters: [
          "Particle size distribution",
          "Airflow rate",
          "Operating temperature",
          "Required separation efficiency",
          "Pressure drop limits",
          "Material of construction",
          "Dust loading concentration",
          "Space constraints"
        ]
      }
      ,
      {
        title: "Bag Filter",
        slug: "bag-filter",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-efficiency fabric filtration system for fine particle separation and air pollution control in spray drying applications.",

        fullDescription:
          "A Bag Filter is a high-efficiency dust collection and air filtration system used in spray drying and industrial processes to capture fine particles from exhaust air streams. It operates using fabric filter bags that trap dust and powder while allowing clean air to pass through. Bag filters provide superior filtration efficiency compared to cyclones and are essential for environmental compliance and maximum powder recovery.",

        workingPrinciple: [
          "Dust-Laden Air Entry: Exhaust air containing fine particles enters the bag filter housing.",
          "Filtration Process: Air passes through fabric filter bags, trapping dust particles on the outer surface.",
          "Dust Cake Formation: A layer of dust forms on the bag surface, enhancing filtration efficiency.",
          "Pulse Jet Cleaning: Compressed air pulses periodically clean the bags by dislodging accumulated dust.",
          "Dust Collection: Collected dust falls into hopper at the bottom.",
          "Clean Air Exit: Filtered air exits through the clean air outlet."
        ],

        designFeatures: [
          "Fabric filter bags (polyester, polypropylene, PTFE, etc.)",
          "Pulse jet cleaning system",
          "Heavy-duty housing structure",
          "Hopper for dust collection",
          "Automatic cleaning control panel",
          "Explosion vent panels (optional)",
          "SS / Carbon steel construction",
          "High filtration efficiency (>99%)"
        ],

        types: [
          "Pulse Jet Bag Filter",
          "Reverse Air Bag Filter",
          "Shaker Type Bag Filter",
          "Cartridge Filter System",
          "Modular Bag Filter System"
        ],

        applications: {
          sprayDrying: [
            "Fine powder recovery",
            "Milk powder collection",
            "Detergent powder recovery"
          ],
          chemicalIndustry: [
            "Pigments",
            "Polymers",
            "Resins",
            "Catalysts"
          ],
          foodIndustry: [
            "Spices",
            "Starch",
            "Flour dust collection"
          ],
          cementAndMining: [
            "Cement dust",
            "Limestone powder",
            "Mineral dust"
          ],
          environmentalControl: [
            "Air pollution control",
            "Emission compliance"
          ]
        },

        advantages: [
          "Very high filtration efficiency",
          "Effective fine particle recovery",
          "Environmental compliance support",
          "Continuous automatic cleaning",
          "Suitable for large industrial systems",
          "Improves overall product recovery"
        ],

        limitations: [
          "Higher pressure drop compared to cyclones",
          "Requires periodic bag replacement",
          "Sensitive to very high temperature unless special fabric used",
          "Higher initial investment",
          "Requires compressed air for pulse cleaning"
        ],

        keySelectionParameters: [
          "Particle size distribution",
          "Airflow rate",
          "Operating temperature",
          "Dust loading concentration",
          "Required emission standards",
          "Fabric compatibility with product",
          "Pressure drop limits",
          "Maintenance accessibility",
          "Explosion safety requirements"
        ]
      }
      ,
    ],
  },

  {
    category: "Sustainability Solutions",
    categorySlug: "sustainability-solutions",
    icon: "bi bi-chevron-right",
    items: [
      {
        title: "Zero Liquid Discharge (ZLD) Dryers",
        slug: "zld-dryers",
       icon: "bi bi-chevron-right",

        shortDescription:
          "Advanced drying system designed to convert industrial wastewater into solid residue and recover reusable water, achieving zero liquid discharge.",

        fullDescription:
          "A Zero Liquid Discharge (ZLD) Dryer is an advanced industrial drying system used to treat industrial effluents and wastewater by converting them into solid residues while recovering clean reusable water. ZLD systems eliminate liquid discharge from the plant, ensuring full environmental compliance and sustainability. These dryers are widely used in chemical, pharmaceutical, textile, power, and food industries to manage high-TDS wastewater streams and minimize environmental impact.",

        workingPrinciple: [
          "Effluent Collection: Industrial wastewater is collected and pre-treated.",
          "Pre-Concentration: Water is partially removed using evaporators or RO systems.",
          "Feed to Dryer: Concentrated slurry is fed into spray dryer, flash dryer, or other thermal dryer.",
          "Moisture Evaporation: Hot air rapidly evaporates remaining water content.",
          "Solid Residue Formation: Dry solids are collected for disposal or reuse.",
          "Water Recovery: Condensed vapor is collected and reused in plant operations.",
          "Air Handling: Exhaust air passes through cyclone/bag filter before discharge."
        ],

        whyUse: [
          "Strict environmental regulations must be followed.",
          "No liquid discharge is permitted.",
          "High TDS or hazardous wastewater is generated.",
          "Water reuse and sustainability are priorities.",
          "Industrial compliance and pollution control are required."
        ],

        features: [
          "Complete zero liquid discharge solution",
          "Integration with evaporator systems",
          "High evaporation efficiency",
          "Automated operation with PLC control",
          "Handles high-salinity wastewater",
          "Corrosion-resistant construction",
          "Continuous solid discharge",
          "Energy-efficient heat recovery options",
          "Environmentally compliant design"
        ],

        applications: {
          chemicalIndustry: [
            "High-TDS effluent treatment",
            "Salt recovery",
            "Chemical wastewater drying"
          ],
          pharmaceuticalIndustry: [
            "API effluent treatment",
            "Solvent-laden wastewater drying"
          ],
          textileIndustry: [
            "Dye wastewater",
            "High COD effluent"
          ],
          powerPlants: [
            "Cooling tower blowdown",
            "Boiler wastewater treatment"
          ],
          foodAndBeverage: [
            "Process wastewater",
            "High organic effluent"
          ]
        },

        advantages: [
          "Complete elimination of liquid discharge",
          "Water recovery and reuse",
          "Compliance with environmental norms",
          "Reduced waste disposal cost",
          "Sustainable and eco-friendly solution",
          "Solid waste easier to handle and transport"
        ],

        limitations: [
          "High capital investment",
          "Energy-intensive process",
          "Requires pre-treatment and concentration",
          "Maintenance of evaporator + dryer systems",
          "Scaling and fouling risks with high salts"
        ],

        variants: [
          "Spray Dryer-based ZLD System",
          "Flash Dryer-based ZLD System",
          "Agitated Thin Film Dryer (ATFD) ZLD",
          "Crystallizer + Dryer ZLD System",
          "Multi-Effect Evaporator (MEE) + Dryer ZLD"
        ],

        keySelectionParameters: [
          "Wastewater TDS level",
          "Initial moisture content",
          "Salt and chemical composition",
          "Required water recovery percentage",
          "Energy consumption limits",
          "Available utilities (steam, gas, electricity)",
          "Environmental compliance requirements",
          "Space availability",
          "Disposal method for solid residue"
        ]
      }
      ,
    ],
  },

  {
    category: "Evaporators",
    categorySlug: "evaporators",
    icon: "bi bi-chevron-right",
    items: [
      {
        title: "Falling Film Evaporator",
        slug: "falling-film-evaporator",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-efficiency evaporator system for concentrating heat-sensitive liquids with minimal residence time and high energy savings.",

        fullDescription:
          "A Falling Film Evaporator (FFE) is an energy-efficient evaporator system used for concentrating liquids by evaporating solvents under controlled conditions. In this system, liquid flows downward as a thin film along the inner walls of vertical tubes while heat is applied externally. Due to thin film formation and short residence time, Falling Film Evaporators are ideal for heat-sensitive products and large-capacity continuous operations. They are widely used in chemical, pharmaceutical, dairy, and food industries for solvent recovery and liquid concentration.",

        workingPrinciple: [
          "Feed Distribution: Liquid feed enters at the top of the evaporator tubes through a distributor.",
          "Film Formation: Liquid forms a thin film along the inner tube walls.",
          "Heat Transfer: Steam or heating medium flows outside the tubes, providing heat.",
          "Evaporation: Solvent evaporates as liquid flows downward.",
          "Vapor Separation: Vapor and concentrated liquid exit at the bottom.",
          "Condensation: Vapor is condensed in a condenser for recovery.",
          "Concentrate Collection: Concentrated liquid is collected or passed to next stage."
        ],

        whyUse: [
          "Heat-sensitive liquids must be concentrated.",
          "High energy efficiency is required.",
          "Large capacity continuous operation is needed.",
          "Short residence time is critical.",
          "Low fouling tendency liquids are processed."
        ],

        features: [
          "Vertical tube heat exchanger design",
          "Thin film evaporation",
          "Low residence time",
          "High heat transfer efficiency",
          "Multi-effect configuration possible",
          "Vacuum operation capability",
          "Energy-efficient steam utilization",
          "Suitable for large-scale operation"
        ],

        applications: {
          dairyIndustry: [
            "Milk concentration",
            "Whey concentration"
          ],
          foodIndustry: [
            "Fruit juice concentration",
            "Sugar solution concentration"
          ],
          pharmaceuticalIndustry: [
            "API solution concentration",
            "Herbal extract concentration"
          ],
          chemicalIndustry: [
            "Solvent recovery",
            "Salt solution concentration",
            "Caustic concentration"
          ],
          environmental: [
            "Wastewater concentration",
            "Effluent pre-treatment for ZLD"
          ]
        },

        advantages: [
          "High thermal efficiency",
          "Low product degradation",
          "Suitable for heat-sensitive materials",
          "Short residence time",
          "Continuous operation",
          "Can be used in multi-effect systems",
          "Lower operating cost compared to batch evaporators"
        ],

        limitations: [
          "Not suitable for highly viscous liquids",
          "Performance affected by fouling",
          "Requires uniform feed distribution",
          "Higher initial investment",
          "Pre-treatment may be required for solids-containing feeds"
        ],

        variants: [
          "Single-Effect Falling Film Evaporator",
          "Multi-Effect Falling Film Evaporator",
          "Vacuum Falling Film Evaporator",
          "Steam Heated Falling Film Evaporator",
          "Forced Circulation + Falling Film Hybrid System"
        ],

        keySelectionParameters: [
          "Feed concentration and viscosity",
          "Desired final concentration",
          "Heat sensitivity of product",
          "Required evaporation capacity",
          "Steam availability",
          "Vacuum level requirement",
          "Scaling/fouling tendency",
          "Integration with MEE/ZLD system"
        ]
      }
      ,
      {
        title: "Forced Circulation Evaporator",
        slug: "forced-circulation-evaporator",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Robust evaporator system designed for high-viscosity, scaling, and crystallizing liquids requiring strong circulation and controlled evaporation.",

        fullDescription:
          "A Forced Circulation Evaporator (FCE) is a heavy-duty evaporation system designed for concentrating high-viscosity, scaling, or crystallizing liquids. Unlike falling film systems, this evaporator uses a circulation pump to force liquid through heat exchanger tubes at high velocity, preventing fouling and enabling efficient evaporation. It is widely used in chemical, pharmaceutical, wastewater treatment, and high-salt applications where stable and reliable concentration is required.",

        workingPrinciple: [
          "Feed Entry: Liquid feed enters the evaporator circulation loop.",
          "Forced Pump Circulation: A high-capacity pump forces liquid through the heat exchanger tubes.",
          "Heat Transfer: Steam or heating medium supplies heat externally to the tubes.",
          "Evaporation Zone: Heated liquid enters flash chamber where pressure drop causes evaporation.",
          "Vapor-Liquid Separation: Vapor separates from concentrated liquid.",
          "Condensation: Vapor is condensed in condenser for recovery.",
          "Concentrate Discharge: Thickened concentrate is withdrawn continuously."
        ],

        whyUse: [
          "Liquid is highly viscous.",
          "Solution has high scaling or fouling tendency.",
          "Crystallization during concentration is expected.",
          "High TDS wastewater must be concentrated.",
          "Stable operation under harsh conditions is required."
        ],

        features: [
          "High-velocity circulation pump",
          "Robust heat exchanger design",
          "Handles scaling and crystallizing fluids",
          "Reduced fouling compared to falling film",
          "Vacuum operation capability",
          "Suitable for high-solid content",
          "Continuous heavy-duty operation",
          "Integration with crystallizer systems"
        ],

        applications: {
          chemicalIndustry: [
            "Salt concentration",
            "Caustic soda concentration",
            "Chemical slurry processing"
          ],
          pharmaceuticalIndustry: [
            "API mother liquor concentration",
            "Solvent recovery systems"
          ],
          wastewaterTreatment: [
            "High TDS effluent concentration",
            "Brine concentration",
            "ZLD systems"
          ],
          sugarAndFoodIndustry: [
            "Molasses concentration",
            "Syrup concentration"
          ],
          powerAndDesalination: [
            "Reject brine concentration",
            "Cooling tower blowdown treatment"
          ]
        },

        advantages: [
          "Suitable for high-viscosity and scaling liquids",
          "Reduced fouling due to forced flow",
          "Handles crystallizing solutions",
          "Stable and reliable operation",
          "Suitable for high-temperature operation",
          "Works effectively in ZLD systems"
        ],

        limitations: [
          "Higher energy consumption due to circulation pump",
          "Higher capital cost",
          "More complex system design",
          "Requires strong mechanical components",
          "Maintenance of pump system required"
        ],

        variants: [
          "Single-Effect Forced Circulation Evaporator",
          "Multi-Effect Forced Circulation Evaporator",
          "Vacuum Forced Circulation Evaporator",
          "Forced Circulation + Crystallizer System",
          "Steam Heated Forced Circulation System"
        ],

        keySelectionParameters: [
          "Feed viscosity",
          "Scaling and fouling tendency",
          "Crystallization potential",
          "Required final concentration",
          "Evaporation capacity",
          "Steam and energy availability",
          "Integration with ZLD system",
          "Material of construction (corrosion resistance)",
          "Maintenance accessibility"
        ]
      }
      ,
      {
        title: "Multiple Effect Evaporator (MEE)",
        slug: "multiple-effect-evaporator",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Energy-efficient multi-stage evaporation system designed to concentrate liquids using vapor reuse across multiple effects.",

        fullDescription:
          "A Multiple Effect Evaporator (MEE) is an advanced evaporation system designed to improve energy efficiency by utilizing vapor generated from one stage (effect) as the heating medium for the next stage. This cascading vapor reuse significantly reduces steam consumption and operating cost. MEEs are widely used in chemical, pharmaceutical, food, and wastewater treatment industries for large-scale concentration and solvent recovery applications.",

        workingPrinciple: [
          "Feed Entry: Liquid feed enters the first effect where steam provides heat.",
          "Primary Evaporation: Solvent evaporates in first effect producing vapor.",
          "Vapor Reuse: Generated vapor is used as heating medium for the second effect.",
          "Multi-Stage Evaporation: Process continues across multiple effects (2–7 stages typically).",
          "Vacuum Operation: Subsequent effects operate under lower pressure to facilitate evaporation at lower temperatures.",
          "Vapor Condensation: Final vapor is condensed in a condenser.",
          "Concentrate Collection: Concentrated liquid is discharged from final stage."
        ],

        whyUse: [
          "Energy savings are critical.",
          "Large-scale continuous evaporation is required.",
          "Steam cost must be minimized.",
          "High TDS wastewater concentration is needed.",
          "ZLD integration is planned.",
          "Heat-sensitive liquids must be processed under vacuum."
        ],

        features: [
          "Multi-effect (2 to 7 stages typical)",
          "Significant steam savings",
          "Vacuum-assisted operation",
          "High evaporation efficiency",
          "Automatic process control (PLC/SCADA)",
          "Suitable for integration with ZLD systems",
          "Customizable number of effects",
          "Corrosion-resistant material options"
        ],

        applications: {
          chemicalIndustry: [
            "Salt recovery",
            "Chemical concentration",
            "Caustic soda concentration"
          ],
          pharmaceuticalIndustry: [
            "API mother liquor concentration",
            "Solvent recovery"
          ],
          wastewaterTreatment: [
            "High TDS effluent treatment",
            "Brine concentration",
            "ZLD systems"
          ],
          foodAndBeverage: [
            "Juice concentration",
            "Milk concentration",
            "Sugar syrup concentration"
          ],
          textileIndustry: [
            "Dye effluent treatment",
            "Process wastewater concentration"
          ]
        },

        advantages: [
          "High energy efficiency",
          "Reduced steam consumption",
          "Lower operating cost",
          "Suitable for large-scale operations",
          "Integration with crystallizers and dryers",
          "Environmentally compliant",
          "Flexible design based on requirement"
        ],

        limitations: [
          "Higher initial capital investment",
          "Requires skilled operation",
          "Complex piping and vacuum system",
          "Fouling and scaling may reduce efficiency",
          "Maintenance required across multiple stages"
        ],

        variants: [
          "Two-Effect Evaporator",
          "Three-Effect Evaporator",
          "Four-Effect Evaporator",
          "Five-Effect Evaporator",
          "Six/Seven-Effect Evaporator",
          "Falling Film MEE",
          "Forced Circulation MEE",
          "MEE + Crystallizer System"
        ],

        keySelectionParameters: [
          "Required evaporation capacity",
          "Steam availability",
          "Feed TDS level",
          "Desired final concentration",
          "Number of effects required",
          "Heat sensitivity of product",
          "Vacuum requirement",
          "Scaling tendency",
          "Integration with ZLD/dryer systems",
          "Energy cost considerations"
        ]
      }
      ,
    ],
  },

  {
    category: "Process Equipments",
    categorySlug: "process-equipments",
   icon: "bi bi-chevron-right",
    items: [
      {
        title: "Chemical Reactors",
        slug: "chemical-reactors",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Industrial jacketed reactors designed for controlled chemical reactions, mixing, heating, cooling, and pressure operations.",

        fullDescription:
          "Chemical Reactors are industrial process vessels designed to carry out controlled chemical reactions under specified temperature, pressure, and mixing conditions. These reactors are widely used in chemical, pharmaceutical, petrochemical, food, and specialty process industries. They are engineered for precise heat transfer, efficient mixing, and safe handling of reactive or hazardous materials. Reactors are available in various configurations including batch, semi-batch, and continuous systems.",

        workingPrinciple: [
          "Charging: Raw materials or reactants are charged into the reactor vessel.",
          "Agitation: Internal agitator or stirrer ensures proper mixing and uniform reaction.",
          "Heating/Cooling: Jacket or coil circulates heating or cooling media (steam, hot oil, chilled water).",
          "Reaction Phase: Controlled temperature and pressure allow chemical reaction to proceed.",
          "Monitoring & Control: Sensors monitor temperature, pressure, and reaction time.",
          "Discharge: Finished product is discharged after completion of reaction."
        ],

        types: [
          "Jacketed Reactor",
          "Limpet Coil Reactor",
          "High-Pressure Reactor",
          "Glass-Lined Reactor (GLR)",
          "Stainless Steel Reactor (SS304 / SS316)",
          "Batch Reactor",
          "Continuous Stirred Tank Reactor (CSTR)"
        ],

        designFeatures: [
          "Robust cylindrical vessel design",
          "Heating/Cooling jacket or coil system",
          "Top or bottom-mounted agitator",
          "Mechanical seal or magnetic drive system",
          "Manhole and nozzles for charging/discharge",
          "Pressure relief valves",
          "Instrumentation ports",
          "Corrosion-resistant material options",
          "Explosion-proof design (optional)"
        ],

        applications: {
          chemicalIndustry: [
            "Polymerization",
            "Resin manufacturing",
            "Specialty chemical production"
          ],
          pharmaceuticalIndustry: [
            "API synthesis",
            "Intermediates manufacturing"
          ],
          petrochemicalIndustry: [
            "Catalytic reactions",
            "Solvent-based reactions"
          ],
          foodIndustry: [
            "Syrup preparation",
            "Flavor mixing"
          ],
          agrochemicalIndustry: [
            "Pesticide production",
            "Fertilizer intermediates"
          ]
        },

        advantages: [
          "Precise temperature and pressure control",
          "Efficient mixing and heat transfer",
          "Customizable design based on reaction requirement",
          "Safe operation with pressure safety systems",
          "Suitable for hazardous and corrosive chemicals",
          "Available in various capacities"
        ],

        limitations: [
          "High capital investment",
          "Requires skilled operation",
          "Regular maintenance of seals and agitators",
          "Material selection critical for corrosion resistance",
          "Energy consumption for heating/cooling"
        ],

        keySelectionParameters: [
          "Reaction type (exothermic/endothermic)",
          "Operating pressure and temperature",
          "Material compatibility",
          "Required batch size or capacity",
          "Viscosity of reaction mixture",
          "Agitation speed and type",
          "Heating/cooling requirements",
          "Safety and explosion-proof standards",
          "Automation level required"
        ]
      }
      ,
      {
        title: "Crystallizers",
        slug: "crystallizers",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Industrial crystallization systems designed for controlled crystal formation, size uniformity, and high-purity solid product recovery.",

        fullDescription:
          "Crystallizers are industrial process vessels designed to convert dissolved substances into solid crystalline form through controlled cooling, evaporation, or chemical reaction. They are widely used in chemical, pharmaceutical, food, fertilizer, and wastewater industries for producing high-purity crystals with uniform particle size. Crystallizers ensure precise control of supersaturation, nucleation, and crystal growth to achieve desired product quality.",

        workingPrinciple: [
          "Solution Preparation: Saturated or supersaturated solution is prepared.",
          "Supersaturation Creation: Cooling, evaporation, or chemical reaction creates supersaturation.",
          "Nucleation: Initial crystal nuclei are formed.",
          "Crystal Growth: Controlled conditions promote uniform crystal growth.",
          "Separation: Crystals are separated from mother liquor.",
          "Drying/Recovery: Crystals are dried or further processed."
        ],

        types: [
          "Forced Circulation Crystallizer",
          "Cooling Crystallizer",
          "Vacuum Crystallizer",
          "Evaporative Crystallizer",
          "Draft Tube Baffle (DTB) Crystallizer",
          "Agitated Batch Crystallizer",
          "Oslo Crystallizer"
        ],

        designFeatures: [
          "Robust vessel with internal circulation system",
          "Agitation system for uniform mixing",
          "Heating or cooling jacket/coil",
          "Vacuum operation capability",
          "Slurry handling and discharge system",
          "Corrosion-resistant materials (SS316, Duplex, etc.)",
          "Crystal classification system (optional)",
          "Instrumentation for temperature and pressure control"
        ],

        applications: {
          chemicalIndustry: [
            "Salt crystallization",
            "Sodium sulfate",
            "Ammonium sulfate",
            "Caustic recovery"
          ],
          pharmaceuticalIndustry: [
            "API crystallization",
            "Intermediate purification"
          ],
          fertilizerIndustry: [
            "NPK production",
            "Urea crystallization"
          ],
          foodIndustry: [
            "Sugar crystallization",
            "Lactose production"
          ],
          wastewaterTreatment: [
            "High TDS brine crystallization",
            "ZLD systems integration"
          ]
        },

        advantages: [
          "High product purity",
          "Uniform crystal size control",
          "Efficient separation of solids",
          "Suitable for continuous or batch operation",
          "Integration with evaporators and ZLD systems",
          "Scalable for large industrial capacity"
        ],

        limitations: [
          "Scaling and fouling risk",
          "Requires precise control of supersaturation",
          "Higher capital cost",
          "Energy consumption for heating/cooling",
          "Complex operation for multi-stage systems"
        ],

        keySelectionParameters: [
          "Solubility characteristics",
          "Desired crystal size distribution",
          "Operating temperature and pressure",
          "Evaporation vs cooling method",
          "Feed concentration",
          "Material compatibility",
          "Integration with evaporator/ZLD system",
          "Production capacity requirement"
        ]
      }
      ,
      {
        title: "Mixers & Agitators",
        slug: "mixers-agitators",
        icon: "bi bi-chevron-right",

        shortDescription:
          "High-performance industrial mixing systems designed for efficient blending, homogenization, suspension, and reaction support.",

        fullDescription:
          "Mixers & Agitators are industrial mechanical systems used to blend, homogenize, suspend, and mix liquids, slurries, and semi-solids in process industries. These systems are engineered to ensure uniform mixing, efficient heat transfer, and stable process performance. They are widely used in chemical, pharmaceutical, food, cosmetic, and wastewater treatment industries for batch and continuous operations.",

        workingPrinciple: [
          "Material Charging: Liquids or solids are introduced into mixing vessel.",
          "Agitation: Rotating impeller generates flow pattern inside vessel.",
          "Flow Circulation: Radial, axial, or mixed flow ensures uniform distribution.",
          "Shear & Dispersion: Depending on impeller design, materials are blended or dispersed.",
          "Heat/Mass Transfer Support: Agitation enhances heat and mass transfer.",
          "Discharge: Homogenized mixture is discharged after required mixing time."
        ],

        types: [
          "Top Mounted Agitator",
          "Side Entry Agitator",
          "Bottom Entry Agitator",
          "Anchor Agitator",
          "Paddle Agitator",
          "Propeller Agitator",
          "Turbine Agitator",
          "High Shear Mixer",
          "Ribbon Blender",
          "Planetary Mixer"
        ],

        designFeatures: [
          "Heavy-duty motor and gearbox",
          "Custom impeller design",
          "Mechanical seal or gland packing",
          "Variable speed control (VFD)",
          "SS304 / SS316 / Carbon Steel construction",
          "Explosion-proof motor option",
          "Jacketed vessel compatibility",
          "Easy maintenance design"
        ],

        applications: {
          chemicalIndustry: [
            "Polymer blending",
            "Chemical reaction support",
            "Slurry mixing"
          ],
          pharmaceuticalIndustry: [
            "Syrup preparation",
            "API mixing",
            "Suspension preparation"
          ],
          foodIndustry: [
            "Sauce mixing",
            "Flavor blending",
            "Dairy processing"
          ],
          cosmeticsIndustry: [
            "Cream preparation",
            "Gel mixing",
            "Lotion blending"
          ],
          wastewaterTreatment: [
            "Sludge mixing",
            "Chemical dosing preparation"
          ]
        },

        advantages: [
          "Efficient and uniform mixing",
          "Customizable for different viscosities",
          "Supports heat and mass transfer",
          "Wide range of impeller options",
          "Scalable for different capacities",
          "Energy-efficient designs available"
        ],

        limitations: [
          "Mechanical wear over time",
          "Seal maintenance required",
          "Higher power requirement for high-viscosity materials",
          "Improper design may cause dead zones",
          "Noise and vibration in large systems"
        ],

        keySelectionParameters: [
          "Material viscosity",
          "Required mixing intensity",
          "Batch size or vessel volume",
          "Temperature and pressure conditions",
          "Corrosion resistance requirement",
          "Shear sensitivity of product",
          "Motor power requirement",
          "Speed control requirement",
          "Explosion-proof safety needs"
        ]
      }
      ,
    ],
  },

  {
    category: "Bio Plant",
    categorySlug: "bio-plant",
    icon: "bi bi-chevron-right",
    items: [
      {
        title: "Bio Fertilizer Plant",
        slug: "bio-fertilizer-plant",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Complete integrated plant setup for production of high-quality bio fertilizers using controlled fermentation and microbial processing systems.",

        fullDescription:
          "A Bio Fertilizer Plant is a fully integrated production system designed for manufacturing eco-friendly bio fertilizers using beneficial microorganisms. The plant includes fermentation systems, sterilization units, mixing systems, drying units, and packaging solutions. Bio fertilizers improve soil fertility by enhancing nutrient availability, nitrogen fixation, phosphate solubilization, and overall plant growth. These plants are widely used in sustainable agriculture and organic farming initiatives.",

        workingPrinciple: [
          "Culture Preparation: Selected beneficial microbial strains are prepared in laboratory conditions.",
          "Sterilization: Growth media and fermentation vessels are sterilized to prevent contamination.",
          "Fermentation: Microorganisms are cultivated in fermenters under controlled temperature, pH, and aeration.",
          "Mass Multiplication: Biomass increases during fermentation process.",
          "Carrier Mixing: Microbial culture is mixed with suitable carrier material (peat, lignite, compost, etc.).",
          "Drying (if required): Moisture content is controlled through drying system.",
          "Packaging: Final bio fertilizer product is packed in moisture-proof packaging."
        ],

        plantComponents: [
          "Laboratory setup for culture development",
          "Fermenters / Bioreactors",
          "Air compressor and aeration system",
          "Sterilization unit (Autoclave/Steam sterilizer)",
          "Mixing & blending system",
          "Drying unit (optional)",
          "Sieving and grading system",
          "Packaging machine",
          "Utilities (boiler, water treatment, power supply)"
        ],

        typesOfBioFertilizersProduced: [
          "Nitrogen Fixing Bio Fertilizers (Rhizobium, Azotobacter)",
          "Phosphate Solubilizing Bacteria (PSB)",
          "Potash Mobilizing Bacteria (KMB)",
          "Mycorrhiza",
          "Zinc Solubilizing Bacteria",
          "Liquid Bio Fertilizers",
          "Granular Bio Fertilizers"
        ],

        applications: {
          agriculture: [
            "Crop nutrient enhancement",
            "Soil fertility improvement",
            "Yield improvement"
          ],
          horticulture: [
            "Fruit crops",
            "Vegetable crops",
            "Plantation crops"
          ],
          organicFarming: [
            "Chemical-free farming",
            "Sustainable agriculture"
          ],
          governmentSchemes: [
            "Subsidized agriculture programs",
            "Soil health improvement initiatives"
          ]
        },

        advantages: [
          "Eco-friendly and sustainable solution",
          "Improves soil health naturally",
          "Reduces chemical fertilizer dependency",
          "Cost-effective for farmers",
          "Supports organic farming initiatives",
          "Lower environmental impact"
        ],

        limitations: [
          "Shelf life depends on storage conditions",
          "Sensitive to high temperature and sunlight",
          "Requires controlled production environment",
          "Lower immediate effect compared to chemical fertilizers",
          "Quality depends on microbial viability"
        ],

        plantCapacityOptions: [
          "Small-scale bio fertilizer plant",
          "Medium-scale commercial plant",
          "Large-scale industrial production plant"
        ],

        keySelectionParameters: [
          "Required production capacity",
          "Type of bio fertilizer to be produced",
          "Fermentation capacity requirement",
          "Available utilities (power, steam, water)",
          "Automation level",
          "Regulatory compliance (FCO guidelines)",
          "Available space and layout",
          "Budget and investment planning"
        ]
      }
      ,
      {
        title: "Bio Pesticide Plant",
        slug: "bio-pesticide-plant",
        icon: "bi bi-chevron-right",

        shortDescription:
          "Integrated production plant for manufacturing eco-friendly bio pesticides using microbial and botanical formulations.",

        fullDescription:
          "A Bio Pesticide Plant is a fully integrated manufacturing facility designed to produce environmentally friendly bio pesticides derived from beneficial microorganisms, plant extracts, and biological agents. These plants are engineered to support fermentation, formulation, blending, drying, and packaging processes under controlled hygienic conditions. Bio pesticides provide effective pest control while reducing environmental impact and chemical residue in crops.",

        workingPrinciple: [
          "Microbial/Active Culture Selection: Beneficial bacteria, fungi, or botanical extracts are selected.",
          "Sterilization: Media and fermentation systems are sterilized to prevent contamination.",
          "Fermentation: Active microbial cultures are grown in fermenters under controlled temperature, aeration, and pH.",
          "Harvesting: Biomass or active ingredients are harvested after fermentation cycle.",
          "Formulation: Active culture is blended with carriers, stabilizers, or liquid base.",
          "Drying (for powder type): Moisture is reduced using drying systems if required.",
          "Quality Testing: Final product undergoes QC checks for potency and viability.",
          "Packaging: Bio pesticide is packed in liquid or powder form."
        ],

        plantComponents: [
          "Microbiology laboratory setup",
          "Fermenters / Bioreactors",
          "Sterilization unit (Autoclave/Steam system)",
          "Air compressor and aeration system",
          "Mixing and formulation tanks",
          "Filtration system",
          "Drying unit (optional for powder type)",
          "Filling and packaging machine",
          "Quality control laboratory",
          "Utilities (boiler, water treatment, power system)"
        ],

        typesOfBioPesticidesProduced: [
          "Bacterial Bio Pesticides (Bacillus thuringiensis)",
          "Fungal Bio Pesticides (Trichoderma, Beauveria)",
          "Viral Bio Pesticides (NPV)",
          "Botanical Extract-Based Pesticides (Neem-based)",
          "Liquid Bio Pesticides",
          "Powder Formulations"
        ],

        applications: {
          agriculture: [
            "Crop protection from insects and pests",
            "Soil-borne disease control",
            "Integrated Pest Management (IPM)"
          ],
          horticulture: [
            "Fruit crop pest control",
            "Vegetable pest management"
          ],
          organicFarming: [
            "Chemical-free pest management",
            "Residue-free crop production"
          ],
          greenhouseFarming: [
            "Controlled pest control systems",
            "High-value crop protection"
          ]
        },

        advantages: [
          "Environmentally safe and biodegradable",
          "Low toxicity to humans and animals",
          "Suitable for organic farming",
          "Reduces chemical pesticide usage",
          "Improves long-term soil health",
          "Supports sustainable agriculture"
        ],

        limitations: [
          "Shorter shelf life compared to chemical pesticides",
          "Sensitive to storage temperature",
          "Slower action compared to synthetic pesticides",
          "Requires proper handling and application",
          "Quality dependent on microbial viability"
        ],

        plantCapacityOptions: [
          "Small-scale bio pesticide unit",
          "Medium-scale commercial production plant",
          "Large-scale industrial production facility"
        ],

        keySelectionParameters: [
          "Type of bio pesticide formulation",
          "Required production capacity",
          "Fermentation volume requirement",
          "Regulatory compliance (CIB & RC guidelines)",
          "Available utilities (power, steam, water)",
          "Automation level",
          "Quality control standards",
          "Space and layout planning",
          "Budget and investment requirement"
        ]
      }
      ,
    ],
  },
];

export default productsData;
