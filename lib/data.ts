export type Car = {
  slug: string;
  name: string;
  brand: string;
  category: string;
  seats: number;
  transmission: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  highlights: string[];
  available: boolean;
};

export type Brand = {
  name: string;
  image: string;
  headline: string;
  logoSlug?: string;
  logoUrl?: string;
  logoMark?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  publishedAt: string;
  author: string;
  category: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export const siteUrl = "https://dreamrides-dubai.com";

const carPhoto = {
  huracan: "https://upload.wikimedia.org/wikipedia/commons/4/44/Lamborghini_Huracan_Evo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS1010%29.jpg",
  ferrariRoma: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2020_Ferrari_Roma.jpg",
  phantom: "https://upload.wikimedia.org/wikipedia/commons/0/0e/2019_Rolls-Royce_Phantom_VIII.jpg",
  porsche911Turbo: "https://upload.wikimedia.org/wikipedia/commons/a/a3/2013_Porsche_911_Turbo_S.jpg",
  bmwI8: "https://upload.wikimedia.org/wikipedia/commons/3/30/BMW_i8_Roadster%2C_GIMS_2018%2C_Le_Grand-Saconnex_%281X7A1877%29.jpg",
  audiR8: "https://upload.wikimedia.org/wikipedia/commons/d/d2/2018_Audi_R8_Coupe_V10_plus_Front.jpg",
  bentleyGt: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Bentley_Continental_GT_Speed_%283rd_gen.%29_IMG_0014.jpg",
  cadillacEscalade: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Cadillac_Escalade_%28GMTT1XX%29_IMG_0799.jpg",
  corvette: "https://upload.wikimedia.org/wikipedia/commons/3/30/Chevrolet_Corvette_Stingray_C8.jpg",
  hummerEv: "https://upload.wikimedia.org/wikipedia/commons/1/1d/GMC_Hummer_EV.jpg",
  jetourDashing: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Jetour_Dashing_008.jpg",
  rangeRover: "https://upload.wikimedia.org/wikipedia/commons/1/18/Land_Rover_Range_Rover_Autobiography_2016.jpg",
  maybachS650: "https://upload.wikimedia.org/wikipedia/commons/6/63/Black_Mercedes-Maybach_S650_V12.jpg",
  mercedesSClass: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Mercedes-Benz_S-Class_2020_W223.jpg",
  ram1500: "https://upload.wikimedia.org/wikipedia/commons/1/12/2022_Ram_1500_Limited_Crew_Cab_4x4%2C_front_left%2C_05-09-2023.jpg",
  teslaPlaid: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Tesla_Model_S_Plaid_Autofr%C3%BChling_Ulm_IMG_9278.jpg",
  lamborghiniUrus: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Lamborghini_Urus_Performante_1X7A6805.jpg",
  porscheGt3Rs: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Porsche_911_GT3_RS_%282022%29_1X7A7164.jpg",
  ferrariPurosangue: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Ferrari_Purosangue_IMG_9554.jpg",
  mclaren720s: "https://upload.wikimedia.org/wikipedia/commons/d/dd/McLaren_720S%2C_IAA_2017%2C_%281Y7A3405%29.jpg",
  ferrariRomaSpider: "https://upload.wikimedia.org/wikipedia/commons/8/89/Ferrari_Roma_Spider_IMG_9546.jpg",
  mercedesGClass: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Mercedes_G_Class_4.jpg",
  rollsCullinan: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Rolls-Royce_Cullinan_001.jpg",
  astonMartinDb11: "https://upload.wikimedia.org/wikipedia/commons/5/58/Aston_Martin_DB11_AMR_1X7A0202.jpg",
} as const;

export const cars: Car[] = [
  {
    slug: "lamborghini-huracan-evo",
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    category: "Supercar",
    seats: 2,
    transmission: "Automatic",
    price: 1299,
    image: carPhoto.huracan,
    gallery: [carPhoto.huracan],
    description:
      "Feel the roar of Dubai in an iconic Lamborghini Huracán EVO. Ultimate performance, precision handling, and show-stopping design for your luxury drive.",
    features: [
      "V10 engine delivering 640 HP",
      "0-100 km/h in 2.9 seconds",
      "Premium leather interior with carbon fiber trim",
      "Advanced launch control and adaptive suspension",
    ],
    highlights: ["Dubai airport delivery", "Personal chauffeur service available", "Flexible rental packages"],
    available: true,
  },
  {
    slug: "ferrari-roma",
    name: "Ferrari Roma",
    brand: "Ferrari",
    category: "Grand Tourer",
    seats: 2,
    transmission: "Automatic",
    price: 1199,
    image: carPhoto.ferrariRoma,
    gallery: [carPhoto.ferrariRoma],
    description:
      "Reserve the Ferrari Roma for an elegant performance experience across Dubai. Sleek lines, precision engineering, and a luxurious interior await.",
    features: [
      "V8 turbocharged engine",
      "Dual-clutch 8-speed gearbox",
      "Heated/ventilated sport seats",
      "State-of-the-art infotainment system",
    ],
    highlights: ["Exclusive beachside pickup", "Complimentary chauffeur consultation", "VIP concierge support"],
    available: true,
  },
  {
    slug: "rolls-royce-phantom",
    name: "Rolls-Royce Phantom",
    brand: "Rolls Royce",
    category: "Luxury Sedan",
    seats: 4,
    transmission: "Automatic",
    price: 2999,
    image: carPhoto.phantom,
    gallery: [carPhoto.phantom],
    description:
      "Arrive in unmatched elegance with the Rolls-Royce Phantom. The ultimate chauffeur-ready sedan for VIP events, corporate arrivals, and luxury tours.",
    features: [
      "6.75L V12 engine",
      "Starlight headliner and rear-seat entertainment",
      "Bespoke interior finishes",
      "Whisper-quiet cabin insulation",
    ],
    highlights: ["Hotel and airport transfer", "Professional on-demand driver", "Personalized amenity package"],
    available: true,
  },
  {
    slug: "porsche-911-turbo-s",
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    category: "Sports Car",
    seats: 2,
    transmission: "Automatic",
    price: 999,
    image: carPhoto.porsche911Turbo,
    gallery: [carPhoto.porsche911Turbo],
    description:
      "Command the Dubai roadways in a Porsche 911 Turbo S. Precision performance, sculpted aerodynamics, and luxury craftsmanship in one drive.",
    features: [
      "640 HP twin-turbo flat-six",
      "Adaptive aerodynamics",
      "Sports Chrono package",
      "Premium Bose sound system",
    ],
    highlights: ["VIP track day packages", "Sunset city tours", "Custom delivery experience"],
    available: true,
  },
  {
    slug: "bmw-i8",
    name: "BMW i8 Roadster",
    brand: "BMW",
    category: "Hybrid Sports",
    seats: 2,
    transmission: "Automatic",
    price: 849,
    image: carPhoto.bmwI8,
    gallery: [carPhoto.bmwI8],
    description:
      "Explore Dubai in the futuristic BMW i8 Roadster. A hybrid icon with dramatic scissor doors, futuristic design, and sustainable performance.",
    features: [
      "Hybrid powertrain with electric boost",
      "Carbon fiber reinforced plastic body",
      "Driver assistance suite",
      "Luxury sport seating",
    ],
    highlights: ["Eco-luxe experiences", "Personal delivery service", "Exclusive concierge planning"],
    available: true,
  },
  {
    slug: "audi-r8",
    name: "Audi R8 V10",
    brand: "Audi",
    category: "Supercar",
    seats: 2,
    transmission: "Automatic",
    price: 1050,
    image: carPhoto.audiR8,
    gallery: [carPhoto.audiR8],
    description:
      "The Audi R8 blends German engineering with thrilling performance for a memorable Dubai supercar experience.",
    features: [
      "V10 engine with 562 HP",
      "Quattro AWD handling",
      "Carbon fiber interior trim",
      "Premium sport seats",
    ],
    highlights: ["Supercar performance", "Track-capable handling", "Iconic design"],
    available: true,
  },
  {
    slug: "bentley-continental-gt",
    name: "Bentley Continental GT",
    brand: "Bentley",
    category: "Grand Tourer",
    seats: 4,
    transmission: "Automatic",
    price: 1850,
    image: carPhoto.bentleyGt,
    gallery: [carPhoto.bentleyGt],
    description:
      "Travel Dubai in absolute elegance with the Bentley Continental GT, designed for refined journeys and premium experiences.",
    features: [
      "W12 engine delivering 626 HP",
      "Handcrafted interior",
      "Adaptive cruise",
      "Luxury rear seating",
    ],
    highlights: ["VIP arrival style", "Chauffeur optional", "Bespoke luxury"],
    available: true,
  },
  {
    slug: "cadillac-escalade",
    name: "Cadillac Escalade",
    brand: "Cadillac",
    category: "Luxury SUV",
    seats: 7,
    transmission: "Automatic",
    price: 780,
    image: carPhoto.cadillacEscalade,
    gallery: [carPhoto.cadillacEscalade],
    description:
      "Enjoy lavish American luxury with the Cadillac Escalade, a refined full-size SUV ideal for VIP transportation in Dubai.",
    features: [
      "Premium leather cabin",
      "Advanced infotainment",
      "Smart safety features",
      "Smooth V8 performance",
    ],
    highlights: ["Executive travel", "Luxury airport transfers", "Refined comfort"],
    available: true,
  },
  {
    slug: "chevrolet-corvette-stingray",
    name: "Chevrolet Corvette Stingray",
    brand: "Chevrolet",
    category: "Sports Car",
    seats: 2,
    transmission: "Automatic",
    price: 620,
    image: carPhoto.corvette,
    gallery: [carPhoto.corvette],
    description:
      "Feel the pulse of Dubai with the Chevrolet Corvette Stingray, a performance sports car designed for thrilling drives.",
    features: [
      "495 HP V8 engine",
      "Magnetic ride control",
      "Performance exhaust",
      "Sports bucket seats",
    ],
    highlights: ["Track-ready performance", "Bold American muscle", "Sunset drives"],
    available: true,
  },
  {
    slug: "gmc-hummer-ev",
    name: "GMC Hummer EV",
    brand: "GMC",
    category: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    price: 920,
    image: carPhoto.hummerEv,
    gallery: [carPhoto.hummerEv],
    description:
      "The GMC Hummer EV brings electric power and commanding presence to Dubai’s rugged luxury SUV segment.",
    features: [
      "Electric power with 1000 HP",
      "Adaptive air suspension",
      "Off-road capability",
      "Premium cabin tech",
    ],
    highlights: ["Eco-luxury SUV", "Adventure-ready", "Bold Dubai styling"],
    available: true,
  },
  {
    slug: "jetour-dashing",
    name: "Jetour Dashing",
    brand: "Jetour",
    category: "Premium SUV",
    seats: 5,
    transmission: "Automatic",
    price: 560,
    image: carPhoto.jetourDashing,
    gallery: [carPhoto.jetourDashing],
    description:
      "The Jetour Dashing offers accessible premium SUV comfort and a refined interior experience for Dubai travelers.",
    features: [
      "Spacious cabin",
      "Advanced multimedia system",
      "Adaptive cruise control",
      "Luxury seating",
    ],
    highlights: ["City-ready SUV", "Value luxury", "Family comfort"],
    available: true,
  },
  {
    slug: "land-rover-range-rover",
    name: "Land Rover Range Rover",
    brand: "Land Rover",
    category: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    price: 1280,
    image: carPhoto.rangeRover,
    gallery: [carPhoto.rangeRover],
    description:
      "Experience elegant touring and off-road luxury in the Land Rover Range Rover, a favorite for VIP guests in Dubai.",
    features: [
      "Terrain response system",
      "Premium leather interior",
      "Powerful V8 engine",
      "Luxury entertainment",
    ],
    highlights: ["Executive SUV", "City and desert ready", "VIP transport"],
    available: true,
  },
  {
    slug: "maybach-s650",
    name: "Mercedes-Maybach S650",
    brand: "Maybach",
    category: "Luxury Sedan",
    seats: 4,
    transmission: "Automatic",
    price: 2399,
    image: carPhoto.maybachS650,
    gallery: [carPhoto.maybachS650],
    description:
      "The Mercedes-Maybach S650 defines opulent travel with sumptuous luxury, perfect for VIP journeys in Dubai.",
    features: [
      "V12 engine",
      "Executive rear seats",
      "Luxury massage chairs",
      "Premium sound system",
    ],
    highlights: ["Ultimate luxury", "Corporate arrivals", "Red carpet service"],
    available: true,
  },
  {
    slug: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    category: "Luxury Sedan",
    seats: 4,
    transmission: "Automatic",
    price: 1099,
    image: carPhoto.mercedesSClass,
    gallery: [carPhoto.mercedesSClass],
    description:
      "The Mercedes-Benz S-Class combines serene comfort, advanced safety, and luxury technology for Dubai’s discerning executive travelers.",
    features: [
      "Adaptive cruise",
      "Heated and ventilated seats",
      "Premium ambient lighting",
      "Luxury cabin technology",
    ],
    highlights: ["Executive transport", "Luxury meetings", "VIP concierge"],
    available: true,
  },
  {
    slug: "ram-1500-limited",
    name: "Ram 1500 Limited",
    brand: "Ram",
    category: "Luxury Truck",
    seats: 5,
    transmission: "Automatic",
    price: 720,
    image: carPhoto.ram1500,
    gallery: [carPhoto.ram1500],
    description:
      "The Ram 1500 Limited brings premium cabin finishes and impressive power for luxury SUV-style driving in Dubai.",
    features: [
      "Premium leather interior",
      "Advanced towing capability",
      "Uconnect infotainment",
      "Adaptive air suspension",
    ],
    highlights: ["Prestige utility", "Comfortable road trips", "Strong performance"],
    available: true,
  },
  {
    slug: "tesla-model-s-plaid",
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    category: "Electric Performance",
    seats: 5,
    transmission: "Automatic",
    price: 1199,
    image: carPhoto.teslaPlaid,
    gallery: [carPhoto.teslaPlaid],
    description:
      "The Tesla Model S Plaid delivers electric acceleration and futuristic luxury for high-tech driving in Dubai.",
    features: [
      "1020 HP tri-motor system",
      "Autopilot capability",
      "Premium interior tech",
      "Zero emissions performance",
    ],
    highlights: ["Electric luxury", "Future-ready", "Green VIP travel"],
    available: true,
  },
  {
    slug: "lamborghini-urus-performante",
    name: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    category: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    price: 1899,
    image: carPhoto.lamborghiniUrus,
    gallery: [carPhoto.lamborghiniUrus],
    description:
      "The Lamborghini Urus Performante brings supercar energy into a high-riding SUV, built for Dubai city arrivals and desert-edge drives.",
    features: [
      "Twin-turbo V8 performance",
      "Sport-tuned all-wheel drive",
      "Carbon fiber exterior details",
      "Premium Alcantara cabin",
    ],
    highlights: ["Super SUV presence", "City and desert ready", "VIP delivery"],
    available: true,
  },
  {
    slug: "porsche-911-gt3-rs",
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    category: "Sports Car",
    seats: 2,
    transmission: "Automatic",
    price: 1499,
    image: carPhoto.porscheGt3Rs,
    gallery: [carPhoto.porscheGt3Rs],
    description:
      "The Porsche 911 GT3 RS is a focused performance icon for clients who want sharp handling, motorsport styling, and serious road presence.",
    features: [
      "Naturally aspirated flat-six",
      "Track-focused aero package",
      "Lightweight sport cabin",
      "Porsche performance braking",
    ],
    highlights: ["Track-inspired drive", "Precision handling", "Weekend special"],
    available: true,
  },
  {
    slug: "ferrari-purosangue",
    name: "Ferrari Purosangue",
    brand: "Ferrari",
    category: "Luxury SUV",
    seats: 4,
    transmission: "Automatic",
    price: 2650,
    image: carPhoto.ferrariPurosangue,
    gallery: [carPhoto.ferrariPurosangue],
    description:
      "The Ferrari Purosangue combines four-seat comfort with Ferrari performance, perfect for luxury family travel without losing drama.",
    features: [
      "V12 grand touring performance",
      "Four-seat luxury cabin",
      "Advanced suspension control",
      "Premium driver-focused cockpit",
    ],
    highlights: ["Four-seat Ferrari", "Exclusive SUV", "Concierge booking"],
    available: true,
  },
  {
    slug: "mclaren-720s",
    name: "McLaren 720S",
    brand: "McLaren",
    category: "Supercar",
    seats: 2,
    transmission: "Automatic",
    price: 2220,
    image: carPhoto.mclaren720s,
    gallery: [carPhoto.mclaren720s],
    description:
      "The McLaren 720S delivers lightweight supercar performance, sculpted aerodynamics, and a cockpit designed for unforgettable Dubai drives.",
    features: [
      "Twin-turbo V8 engine",
      "Carbon fiber monocoque",
      "Active aerodynamic systems",
      "Dihedral doors",
    ],
    highlights: ["Lightweight supercar", "Photo-ready arrival", "Private delivery"],
    available: true,
  },
  {
    slug: "ferrari-roma-spider",
    name: "Ferrari Roma Spider",
    brand: "Ferrari",
    category: "Grand Tourer",
    seats: 4,
    transmission: "Automatic",
    price: 2160,
    image: carPhoto.ferrariRomaSpider,
    gallery: [carPhoto.ferrariRomaSpider],
    description:
      "The Ferrari Roma Spider adds open-air elegance to Ferrari grand touring, ideal for coastline routes, hotel arrivals, and evening drives.",
    features: [
      "Turbocharged V8 engine",
      "Soft-top convertible roof",
      "Elegant grand touring interior",
      "Modern Ferrari driver display",
    ],
    highlights: ["Open-air touring", "Coastline drives", "Evening arrival"],
    available: true,
  },
  {
    slug: "mercedes-benz-g-class",
    name: "Mercedes-Benz G-Class",
    brand: "Mercedes-Benz",
    category: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    price: 1450,
    image: carPhoto.mercedesGClass,
    gallery: [carPhoto.mercedesGClass],
    description:
      "The Mercedes-Benz G-Class is a Dubai favorite for confident luxury SUV travel, blending iconic design with premium everyday usability.",
    features: [
      "Commanding SUV stance",
      "Premium leather interior",
      "All-wheel-drive capability",
      "Advanced safety technology",
    ],
    highlights: ["Iconic SUV", "City-ready luxury", "Airport delivery"],
    available: true,
  },
  {
    slug: "rolls-royce-cullinan",
    name: "Rolls-Royce Cullinan",
    brand: "Rolls Royce",
    category: "Luxury SUV",
    seats: 5,
    transmission: "Automatic",
    price: 3200,
    image: carPhoto.rollsCullinan,
    gallery: [carPhoto.rollsCullinan],
    description:
      "The Rolls-Royce Cullinan delivers supreme SUV comfort and unmistakable presence for VIP guests, weddings, and private city transfers.",
    features: [
      "V12 luxury SUV performance",
      "Whisper-quiet cabin",
      "Bespoke rear-seat comfort",
      "Premium chauffeur-ready finish",
    ],
    highlights: ["Ultra-luxury SUV", "VIP transfers", "Wedding-ready"],
    available: true,
  },
  {
    slug: "aston-martin-db11-amr",
    name: "Aston Martin DB11 AMR",
    brand: "Aston Martin",
    category: "Grand Tourer",
    seats: 4,
    transmission: "Automatic",
    price: 1350,
    image: carPhoto.astonMartinDb11,
    gallery: [carPhoto.astonMartinDb11],
    description:
      "The Aston Martin DB11 AMR is a refined grand tourer with elegant British styling, powerful performance, and a polished luxury cabin.",
    features: [
      "V12 grand touring power",
      "Hand-finished interior",
      "Adaptive damping",
      "Signature Aston Martin design",
    ],
    highlights: ["British luxury", "Grand touring comfort", "Event arrival"],
    available: true,
  },
];

export const brands: Brand[] = [
  {
    name: "Lamborghini",
    image:
      "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=800&q=80",
    headline: "Exotic speed and dramatic styling",
    logoSlug: "lamborghini",
  },
  {
    name: "Ferrari",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    headline: "Italian luxury for Dubai roads",
    logoSlug: "ferrari",
  },
  {
    name: "Rolls Royce",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    headline: "Supreme comfort and presence",
    logoSlug: "rollsroyce",
  },
  {
    name: "Porsche",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
    headline: "Precision performance and elegance",
    logoSlug: "porsche",
  },
  {
    name: "Audi",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    headline: "German-engineered supercar thrill",
    logoSlug: "audi",
  },
  {
    name: "Aston Martin",
    image: carPhoto.astonMartinDb11,
    headline: "British grand touring elegance",
    logoMark: "ASTON MARTIN",
  },
  {
    name: "BMW",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80",
    headline: "Futuristic hybrid performance",
    logoSlug: "bmw",
  },
  {
    name: "Bentley",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
    headline: "Grand touring luxury",
    logoSlug: "bentley",
  },
  {
    name: "Cadillac",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    headline: "American luxury with crisp style",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/cadillac.svg",
  },
  {
    name: "Chevrolet",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80",
    headline: "Performance and bold presence",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/chevrolet.svg",
  },
  {
    name: "GMC",
    image:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=800&q=80",
    headline: "Electric SUV power and luxury",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/gmc-1.svg",
    logoMark: "GMC",
  },
  {
    name: "Jetour",
    image:
      "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=800&q=80",
    headline: "Premium SUV value and comfort",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Jetour_logomark.svg",
    logoMark: "JETOUR",
  },
  {
    name: "Land Rover",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    headline: "Iconic luxury off-road capability",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/land-rover.svg",
    logoMark: "LAND ROVER",
  },
  {
    name: "Maybach",
    image:
      "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=800&q=80",
    headline: "The highest level of bespoke comfort",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/maybach-1.svg",
    logoMark: "MAYBACH",
  },
  {
    name: "McLaren",
    image: carPhoto.mclaren720s,
    headline: "Lightweight supercar precision",
    logoSlug: "mclaren",
    logoMark: "McLAREN",
  },
  {
    name: "Mercedes-Benz",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80",
    headline: "Refined luxury and advanced technology",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg",
    logoMark: "MERCEDES",
  },
  {
    name: "Ram",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    headline: "Premium utility with commanding style",
    logoUrl: "https://cdn.worldvectorlogo.com/logos/ram.svg",
  },
  {
    name: "Tesla",
    image:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
    headline: "Electric performance for the future",
    logoSlug: "tesla",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "luxury-car-rental-guide-dubai",
    title: "The Ultimate Luxury Car Rental Guide for Dubai",
    excerpt:
      "Discover how to select the perfect luxury car for your Dubai adventure with expert tips on brands, routes, and VIP services.",
    content: [
      "Dubai is the global capital of luxury driving, where exotic brands meet endless skies and iconic city landmarks.",
      "From the Palm Jumeirah to the Sheikh Zayed Road, the right rental car can transform your itinerary into an unforgettable journey.",
      "Our guide covers choosing the ideal supercar, understanding local driving etiquette, and scheduling VIP concierge services.",
    ],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-05-20",
    author: "Ava Lawson",
    category: "Travel",
  },
  {
    slug: "best-sports-car-routes-in-dubai",
    title: "Top Sports Car Routes in Dubai You Can’t Miss",
    excerpt:
      "Plan a perfect day behind the wheel with high-performance drives, runway-quality photo stops, and luxury destinations.",
    content: [
      "Dubai’s coastline and desert highways are ideal for high-speed, scenic driving experiences.",
      "We highlight the best routes for a sports car rental, from Palm Jumeirah to Hatta mountains and city lights.",
      "Pair your drive with premium hospitality stops, private beaches, and sunset views over the Arabian Gulf.",
    ],
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-05-12",
    author: "Noah Bennett",
    category: "Luxury",
  },
];

export const faqs: FAQ[] = [
  {
    question: "How do I book a luxury car in Dubai?",
    answer:
      "Choose your preferred car, select your rental dates, and submit the inquiry form or WhatsApp booking link for immediate confirmation.",
  },
  {
    question: "Do you offer airport delivery and pickup?",
    answer:
      "Yes, we provide seamless airport delivery and pickup services across Dubai with VIP meet-and-greet support.",
  },
  {
    question: "What documents are required to rent a supercar?",
    answer:
      "A valid driver’s license, passport copy, and a security deposit or insurance agreement are required for all luxury rentals.",
  },
  {
    question: "Can I rent a car for a day or longer stays?",
    answer:
      "We offer flexible rental plans from a single day to multi-week luxury packages tailored to your itinerary.",
  },
];

export const brandsList = [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Cadillac",
  "Chevrolet",
  "Ferrari",
  "GMC",
  "Jetour",
  "Lamborghini",
  "Land Rover",
  "Maybach",
  "McLaren",
  "Mercedes-Benz",
  "Porsche",
  "Ram",
  "Rolls Royce",
  "Tesla",
];

export function getCarBySlug(slug: string) {
  return cars.find((car) => car.slug === slug);
}

export function getBlogBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}

export function getRelatedCars(brand: string, slug: string) {
  return cars.filter((car) => car.brand === brand && car.slug !== slug).slice(0, 3);
}

export function filterCars(
  brand?: string,
  category?: string,
  seats?: number,
  transmission?: string,
  maxPrice?: number,
) {
  return cars.filter((car) => {
    if (brand && car.brand !== brand) return false;
    if (category && car.category !== category) return false;
    if (seats && car.seats !== seats) return false;
    if (transmission && car.transmission !== transmission) return false;
    if (maxPrice && car.price > maxPrice) return false;
    return true;
  });
}
