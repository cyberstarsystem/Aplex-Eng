const productsData = [
  {
    category: "Drying Systems",
    categorySlug: "drying-systems",
    icon: "bi-wind",
    items: [
      {
        title: "Spray Dryers",
        slug: "spray-dryers",
        image: "https://www.aplexengg.com/static/media/spray_dryers_346a.d23f2f70.jpg",
        icon: "bi-fan",

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
        icon: "bi-layers",
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
      }
      ,
      {
        title: "Closed-Loop Spray Dryer",
        slug: "closed-loop-spray-dryer",
        icon: "bi-shield-lock",
        shortDescription:
          "Closed-loop inert gas spray dryer for solvent-based or flammable materials.",
        fullDescription:
          "A Closed-Loop Spray Dryer is a thermal drying system designed for converting liquid feed (solutions, emulsions, suspensions) into a dry powder under oxygen-free/controlled atmosphere.It operates in a sealed drying chamber, where inert gas (usually nitrogen) circulates in a loop rather thanventing to the atmosphere",
        workingPrinciple: [
          "Feed Preparation : Liquid feed is pumped to the atomizer.",
          "Atomization : A rotary or nozzle atomizer converts liquid into fine droplets.",
          "Inert Gas Heating : Nitrogen/inert gas is heated through a heater.",
          "Droplet Drying (Closed Chamber) : Hot inert gas contacts droplets → moisture evaporates.",
          "Powder Separation : Cyclone separator, filter, or bag filter collects powder.",
          "Solvent Recovery : Evaporated solvent condenses in a condenser and is collected.",
          "Gas Recirculation : Clean inert gas returns to the heater, restarting the loop.",

        ],
        mainComponents: [
          "Drying Chamber",
          "Nitrogen Circulation System",
          "Condenser",
          "Solvent Recovery Unit",
          "Explosion-proof Control Panel"
        ],
        features: [
          "Explosion-proof design",
          "Solvent recovery",
          "Safe for hazardous materials"
        ],
        applications: [
          "Pharmaceutical APIs",
          "Battery materials",
          "Chemical solvents"
        ],
        industries: [
          "Pharmaceutical",
          "Chemical",
          "Advanced Materials"
        ],
        
      }
      ,
      {
        title: "Rotary Dryers",
        slug: "rotary-dryers",
        icon: "bi-arrow-repeat",
        shortDescription:
          "Heavy-duty rotary dryer for bulk solids and minerals.",
        fullDescription:
          "Rotary Dryer is used for drying bulk materials like minerals, fertilizers, and chemicals using rotating cylindrical drum.",
        workingPrinciple: [
          "Material fed into rotating drum.",
          "Hot air passes through drum.",
          "Moisture evaporates during rotation."
        ],
        mainComponents: [
          "Rotary Drum",
          "Burner / Heater",
          "Drive Mechanism",
          "Cyclone Separator"
        ],
        features: [
          "Robust design",
          "Large capacity",
          "Suitable for heavy materials"
        ],
        applications: [
          "Minerals",
          "Fertilizers",
          "Chemical powders"
        ],
        industries: [
          "Mining",
          "Chemical",
          "Fertilizer"
        ]
      },
      {
        title: "Flash Dryers",
        slug: "flash-dryers",
        icon: "bi-lightning-charge",
        shortDescription:
          "Instant drying system for fine powders.",
        fullDescription:
          "Flash Dryer dries wet cake or slurry instantly using high-velocity hot air stream.",
        workingPrinciple: [
          "Wet feed introduced into hot air stream.",
          "Instant moisture evaporation.",
          "Cyclone separation of dry powder."
        ],
        features: [
          "Very fast drying",
          "Compact system",
          "Continuous operation"
        ],
        industries: [
          "Chemical",
          "Pharma",
          "Food"
        ]
      }
      ,
      {
        title: "Cage Mill Flash Dryer",
        slug: "cage-mill-flash-dryer",
        icon: "bi-grid",
        fullDescription:
          "Flash drying system with integrated cage mill for particle size control.",
      },
      {
        title: "Spin Flash Dryer",
        slug: "spin-flash-dryer",
        icon: "bi-arrow-clockwise",
        fullDescription:
          "High-speed spin flash dryer for continuous and efficient drying.",
      },
      {
        title: "Pilot Spray Dryer",
        slug: "pilot-spray-dryer",
        icon: "bi-beaker",
        fullDescription:
          "Small-scale spray dryer for R&D and laboratory applications.",
      },
      {
        title: "Continuous Fluid Bed Dryer (CFBD)",
        slug: "continuous-fluid-bed-dryer",
        icon: "bi-box",
        fullDescription:
          "Continuous fluid bed drying system for granular materials.",
      },
      {
        title: "Vibratory Fluid Bed Dryers (VFBD)",
        slug: "vibratory-fluid-bed-dryer",
        icon: "bi-vibrate",
        fullDescription:
          "Vibratory fluid bed dryer for improved drying uniformity and flow control.",
      },
      {
        title: "Hygienic Spray Dryers",
        slug: "hygienic-spray-dryers",
        icon: "bi-shield-check",
        fullDescription:
          "Sanitary spray dryers designed for pharmaceutical and food-grade applications.",
      },
      {
        title: "Product-Specific Dryers",
        slug: "product-specific-dryers",
        icon: "bi-gear",
        fullDescription:
          "Customized drying systems tailored to specific product requirements.",
      },
      {
        title: "Mini Spray Dryers",
        slug: "mini-spray-dryers",
        icon: "bi-droplet",
        fullDescription:
          "Compact mini spray dryer for small-scale production and testing.",
      },
    ],
  },

  {
    category: "Atomization Technologies",
    categorySlug: "atomization-technologies",
    icon: "bi-gear-wide-connected",
    items: [
      {
        title: "Rotary Disc Atomizer",
        slug: "rotary-disc-atomizer",
        icon: "bi-disc",
        fullDescription:
          "Centrifugal rotary disc atomizer producing uniform droplet distribution.",
      },
      {
        title: "Spray Nozzle Atomization",
        slug: "spray-nozzle-atomization",
        icon: "bi-bullseye",
        fullDescription:
          "Pressure-based spray nozzle atomization system for controlled droplet formation.",
      },
    ],
  },

  {
    category: "Spray Dryer Accessories",
    categorySlug: "spray-dryer-accessories",
    icon: "bi-tools",
    items: [
      {
        title: "Dryer Chamber",
        slug: "dryer-chamber",
        icon: "bi-box-seam",
        fullDescription:
          "High-grade stainless steel drying chamber for spray dryers.",
      },
      {
        title: "Cyclone Separator",
        slug: "cyclone-separator",
        icon: "bi-filter",
        fullDescription:
          "Efficient cyclone separator for powder recovery.",
      },
      {
        title: "Bag Filter",
        slug: "bag-filter",
        icon: "bi-funnel",
        fullDescription:
          "Industrial bag filter system for fine particle separation.",
      },
    ],
  },

  {
    category: "Sustainability Solutions",
    categorySlug: "sustainability-solutions",
    icon: "bi-recycle",
    items: [
      {
        title: "Zero Liquid Discharge (ZLD) Dryers",
        slug: "zld-dryers",
        icon: "bi-droplet-half",
        fullDescription:
          "ZLD drying system converting wastewater into reusable solids and clean water.",
      },
    ],
  },

  {
    category: "Evaporators",
    categorySlug: "evaporators",
    icon: "bi-droplet",
    items: [
      {
        title: "Falling Film Evaporator",
        slug: "falling-film-evaporator",
        icon: "bi-water",
        fullDescription:
          "Energy-efficient falling film evaporator for liquid concentration.",
      },
      {
        title: "Forced Circulation Evaporator",
        slug: "forced-circulation-evaporator",
        icon: "bi-arrow-repeat",
        fullDescription:
          "High-efficiency forced circulation evaporator for viscous liquids.",
      },
      {
        title: "Multiple Effect Evaporator",
        slug: "multiple-effect-evaporator",
        icon: "bi-layers",
        fullDescription:
          "Multiple-effect evaporator system for energy savings.",
      },
    ],
  },

  {
    category: "Process Equipments",
    categorySlug: "process-equipments",
    icon: "bi-diagram-3",
    items: [
      {
        title: "Chemical Reactors",
        slug: "chemical-reactors",
        icon: "bi-beaker",
        fullDescription:
          "Jacketed chemical reactors for industrial processing.",
      },
      {
        title: "Crystallizers",
        slug: "crystallizers",
        icon: "bi-gem",
        fullDescription:
          "Industrial crystallizers for controlled crystal formation.",
      },
      {
        title: "Mixers & Agitators",
        slug: "mixers-agitators",
        icon: "bi-arrow-clockwise",
        fullDescription:
          "High-performance industrial mixing equipment.",
      },
    ],
  },

  {
    category: "Bio Plant",
    categorySlug: "bio-plant",
    icon: "bi-tree",
    items: [
      {
        title: "Bio Fertilizer Plant",
        slug: "bio-fertilizer-plant",
        icon: "bi-flower1",
        fullDescription:
          "Complete bio fertilizer production plant setup.",
      },
      {
        title: "Bio Pesticide Plant",
        slug: "bio-pesticide-plant",
        icon: "bi-bug",
        fullDescription:
          "Industrial bio pesticide manufacturing plant.",
      },
    ],
  },
];

export default productsData;
