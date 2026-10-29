export interface CategoryGroup {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  products: {
    name: string;
    slug: string;
    shortDesc: string;
  }[];
}

export const categories: CategoryGroup[] = [
  {
    id: "pouch-packing",
    name: "Pouch Packaging Machines",
    slug: "pouch-packaging-machine",
    description: "High-speed Form-Fill-Seal (FFS), collar type, and multi-track automated pouch packaging systems.",
    image: "/images/avm/clean/product/automatic-pouch-packing-machine.jpg",
    products: [
      { name: "Potato Chips Packing Machine", slug: "potato-chips-packing-machine", shortDesc: "Nitrogen flushing snack packaging" },
      { name: "Pouch Packaging Machine", slug: "pouch-packaging-machine", shortDesc: "Versatile industrial FFS machinery" },
      { name: "Automatic Pouch Packing Machine", slug: "automatic-pouch-packing-machine", shortDesc: "High speed PLC automation" },
      { name: "Collar Type Packaging Machine", slug: "collar-type-packaging-machine", shortDesc: "Center-seal collar pouch maker" },
      { name: "Form Filling Machine", slug: "form-filling-machine", shortDesc: "Vertical form-fill-seal FFS system" },
      { name: "Dry Fruit Packing Machine", slug: "dry-fruit-packing-machine", shortDesc: "Cashew, almond & nut packager" },
      { name: "Packaging Machine", slug: "packaging-machine", shortDesc: "Heavy duty industrial packaging line" },
      { name: "Automatic Packing Machine", slug: "packing-machine", shortDesc: "Multi-purpose pouch packer" },
      { name: "Pouch Sealing Machine", slug: "pouch-sealing-machine", shortDesc: "Pneumatic high-integrity sealer" }
    ]
  },
  {
    id: "sealing-machines",
    name: "Sealing & Capping Machines",
    slug: "sealing-machine",
    description: "Continuous band sealers, industrial vacuum chambers, electromagnetic induction, and tube sealers.",
    image: "/images/avm/clean/printing/horizontal-continuous-sealing-machine.jpg",
    products: [
      { name: "Sealing Machine", slug: "sealing-machine", shortDesc: "All-purpose heat sealing machines" },
      { name: "Continuous Sealing Machine", slug: "continuous-sealing-machine", shortDesc: "High-speed motorized conveyor sealer" },
      { name: "Band Sealing Machine", slug: "band-sealing-machine", shortDesc: "Horizontal/vertical band sealer" },
      { name: "Vacuum Sealing Machine", slug: "vacuum-sealing-machine", shortDesc: "Commercial tabletop & chamber sealer" },
      { name: "Vacuum Sealers", slug: "vacuum-sealers", shortDesc: "Portable heavy-duty vacuum machines" },
      { name: "Pedal Sealing Machine", slug: "pedal-sealing-machine", shortDesc: "Foot operated heavy bag sealer" },
      { name: "Plastic Tube Sealing Machine", slug: "plastic-tube-sealing-machine", shortDesc: "Cosmetic & pharma tube sealer" },
      { name: "Tube Sealing Machine", slug: "tube-sealing-machine", shortDesc: "Ultrasonic / heat tube sealer" },
      { name: "Induction Sealing Machine", slug: "induction-sealing-machine", shortDesc: "Cap aluminum foil hermetic sealer" },
      { name: "Crown Cap Sealing Machine", slug: "crown-cap-sealing-machine", shortDesc: "Glass bottle crown capper" },
      { name: "Manual Crown Capping Machine", slug: "manual-crown-capping-machine", shortDesc: "Beverage bottle capping equipment" }
    ]
  },
  {
    id: "filling-machines",
    name: "Filling & Dosing Machinery",
    slug: "auger-filling-machine",
    description: "Precision servo auger powder fillers, pneumatic piston liquid fillers, and viscous paste dosing lines.",
    image: "/images/avm/clean/all/auger-filling-machine.jpg",
    products: [
      { name: "Auger Filling Machine", slug: "auger-filling-machine", shortDesc: "Servo powder filling with ±1% accuracy" },
      { name: "Powder Filling Machine", slug: "powder-filling-machine", shortDesc: "Free-flowing & fine powder filler" },
      { name: "Weigh Filling Machine", slug: "weigh-filling-machine", shortDesc: "Load-cell electronic weigh filler" },
      { name: "Liquid Filling Machine", slug: "liquid-filling-machine", shortDesc: "Volumetric piston liquid filler" },
      { name: "Paste Filling Machine", slug: "paste-filling-machine", shortDesc: "Viscous cream, paste & gel filler" },
      { name: "Liquid Paste Packing Machine", slug: "liquid-paste-packing-machine", shortDesc: "Semi-automatic liquid & paste unit" }
    ]
  },
  {
    id: "coding-marking",
    name: "Coding & Marking Equipment",
    slug: "pad-printing-machine",
    description: "Industrial pad printing machines and automatic bottle sticker labelers for containers, bottles, and products.",
    image: "/images/avm/clean/all/pad-printing-machine-header.png",
    products: [
      { name: "Pad Printing Machine", slug: "pad-printing-machine", shortDesc: "1-2 color precision logo printer" },
      { name: "Bottle Sticker Labeling Machine", slug: "bottle-sticker-labeling-machine", shortDesc: "Round bottle self-adhesive labeler" }
    ]
  },
  {
    id: "end-of-line",
    name: "Carton Taping, Strapping & End-of-Line",
    slug: "carton-taping-machine",
    description: "Automatic carton box sealers, semi-automatic strapping systems, conveyors, shrink tunnels, and flow wrappers.",
    image: "/images/avm/clean/all/carton-taping-machine.jpg",
    products: [
      { name: "Carton Taping Machine", slug: "carton-taping-machine", shortDesc: "Top & bottom carton flap taping" },
      { name: "Box Strapping Machine", slug: "box-strapping-machine", shortDesc: "Tension-controlled carton strapping" },
      { name: "Strapping Machine", slug: "strapping-machine", shortDesc: "Semi-automatic low/high table strapper" },
      { name: "Conveyor Systems", slug: "conveyor-systems", shortDesc: "Custom motorized belt & roller conveyors" },
      { name: "Shrink Tunnel Machine", slug: "shrink-tunnel-machine", shortDesc: "Thermal shrink wrap packaging tunnel" },
      { name: "Wrapping Machine", slug: "wrapping-machine", shortDesc: "Industrial film wrapping line" },
      { name: "Horizontal Flow Wrap Machine", slug: "horizontal-flow-wrap-machine", shortDesc: "Biscuit, bar & soap flow wrapper" }
    ]
  }
];
