export type LayoutType = "pd1" | "pd2" | "pd3";

export interface ProjectData {
  slug: string;
  title: string;
  discipline: string;
  scope: string;
  client?: string;
  description: string;
  narrative: string;
  closingLine: string;
  year: string;
  layout: LayoutType;
  images: string[]; // [0]=hero [1]=split-left [2]=duo-a [3]=duo-b [4]=full(pd2/3) [5]=portrait(pd2)
}

export const projects: ProjectData[] = [
  // ── Layout pd1: hero + split + duo + closing ────────────────────
  {
    slug: "RAL-1011-FIVE-PARK-APARTMENT",
    title: "RAL 1011 // FIVE PARK APARTMENT",
    discipline: "Architectural Visualization & 3D Modeling",
    scope: "3D Modeling · Interior Visualization · Material Development · Lighting Setup · Still Rendering",
    description:
      "An apartment in Five Park Miami Beach defined by light wood, veined gray stone, neutral surfaces, and visual openness to the outdoors.",
    narrative:
      "The visualization depicts an open-plan apartment where the living room, dining room, and kitchen are connected along a single spatial axis. Light wood is combined with veined gray stone, neutral walls, and dark framing to define a contrast between warm, mineral, and transparent surfaces. Natural light enters through large glass panels and is complemented by artificial lighting integrated into the ceiling, kitchen, and furniture. Borsoga developed the 3D modeling and visualization to represent the interior scale, materiality, and the apartment's relationship with its exterior views.",
    closingLine:
      "Interior visualization defined by perimeter openness, warm materiality, and the control of natural light over neutral surfaces.",
    year: "2025",
    layout: "pd1",
    images: [
      "/projects/RAL-1011-FIVE-PARK-APARTMENT/cristinzio-b.jpg",
      "/projects/RAL-1011-FIVE-PARK-APARTMENT/5.jpg",
      "/projects/RAL-1011-FIVE-PARK-APARTMENT/cristinzio-c.jpg",
      "/projects/RAL-1011-FIVE-PARK-APARTMENT/cristinzio-d.jpg",
    ],
  },

  // ── Layout pd2: hero + split + duo + full + portrait+closing ────
  {
    slug: "RAL-8003-WOOD-VEIN-KITCHEN-CLOSET",
    title: "RAL-8003-WOOD-VEIN-KITCHEN-CLOSET",
    discipline: "Architectural Visualization & 3D Modeling",
    scope: "Interior Design · 3D Modeling · Material Selection · Lighting Design · Interior Visualization · Still Rendering",
    description:
      "Residential bathroom defined by light oak wood, white veined marble, and grey stone-textured cladding.",
    narrative:
      "The design organizes the bathroom through a longitudinal composition where the vanity, storage, and shower are aligned along the same visual axis. Light oak wood is combined with white veined marble and grey stone-textured panels to establish contrast between warm, mineral, and neutral surfaces. Linear lighting on the ceiling, mirrors, and furniture defines the main edges of the space and reinforces the depth of the vertical planes. Borsoga developed the interior design, 3D modeling, and visualization to control the relationship between layout, materiality, and artificial light.",
    closingLine:
      "Spatial articulation based on visual continuity, material contrast, and linear light emission.",
    year: "2024",
    layout: "pd2",
    images: [
      "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6461.jpg",
      "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6414.jpg",
      "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6415.jpg",
      "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6416.jpg",
      "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6458.jpg",
      "/projects/RAL-8003-WOOD-VEIN-KITCHEN-CLOSET/img-6459.jpg",
    ],
  },

  // ── Layout pd3: hero + split + duo + full + closing ─────────────
  {
    slug: "kitchen-3",
    title: "RAL 9002 // CORNER RESIDENTIAL BUILDING",
    discipline: "Architectural Visualization & 3D Modeling",
    scope: "Interior Design · 3D Modeling · Material Selection · Lighting Design · Interior Visualization · Still Rendering",
    client: "3Design Architecture",
    description:
      "Three-level residential building defined by white volumes, exposed concrete slabs, and vertical black window frames.",
    narrative:
      "The visualization represents a corner residential building organized through horizontal concrete planes and vertically oriented white volumes. Narrow glass openings and black window frames reinforce the façade proportion and define the rhythm between levels. Exterior lighting activates the building base and surrounding vegetation to separate the main volume from its immediate urban context. Borsoga developed the 3D modeling and visualization to represent the project's scale, materiality, and urban presence.",
    closingLine:
      "Vertical massing controlled by horizontal planes, narrow openings, and contrast between concrete, glass, and white surfaces.",
    year: "2025",
    layout: "pd3",
    images: [
      "/projects/RAL-9002-CORNER-RESIDENTIAL-BUILDING/1.jpg",
      "/projects/RAL-9002-CORNER-RESIDENTIAL-BUILDING/1_2.jpg",
      "/projects/RAL-9002-CORNER-RESIDENTIAL-BUILDING/1_3.jpg",
      "/projects/RAL-9002-CORNER-RESIDENTIAL-BUILDING/1_4.jpg",
      "/projects/RAL-9002-CORNER-RESIDENTIAL-BUILDING/1_5.jpg",
      "/projects/RAL-9002-CORNER-RESIDENTIAL-BUILDING/1_6.jpg",
    ],
  },

  // ── Remaining projects — pd1 layout ─────────────────────────────
  {
    slug: "residence-2",
    title: "RAL 7006 // COCONUT GROVE RESIDENCE",
    discipline: "Architectural Visualization & 3D Modeling",
    scope: "3D Modeling · Interior Visualization · Material Development · Lighting Setup · Still Rendering",
    description:
      "A complete interior visualization of a high-end residential project, documenting each space through atmosphere and material storytelling.",
    narrative:
      "The visualization documents the residence through a series of spatial perspectives that reveal the relationship between layout, materiality, and natural light. Each view captures the integration of custom furniture, stone surfaces, and warm finishes that define the spatial character of the project. Borsoga developed the 3D modeling and visualization to represent the interior scale and the quality of the residential environment.",
    closingLine:
      "Interior visualization defined by spatial continuity, material depth, and the control of natural and artificial light.",
    year: "2025",
    layout: "pd1",
    images: [
      "/projects/RAL-7006-COCONUT-GROVE-RESIDENCE/1.jpg",
      "/projects/RAL-7006-COCONUT-GROVE-RESIDENCE/2.jpg",
      "/projects/RAL-7006-COCONUT-GROVE-RESIDENCE/5.jpg",
      "/projects/RAL-7006-COCONUT-GROVE-RESIDENCE/7.jpg",
    ],
  },
  {
    slug: "residence-4",
    title: "RAL 1013 // CRYSTAL RIVER RESIDENCE",
    discipline: "Architectural Visualization & Photography",
    scope: "Photography · Interior Documentation · Material Study · Still Rendering",
    description:
      "A residential interior project blending photography and CGI to document the material and atmospheric qualities of a completed space.",
    narrative:
      "The project documents a completed residential interior through a combination of photography and CGI, capturing the material quality and spatial atmosphere of each area. The work focuses on the relationship between natural light, surface texture, and the scale of the spaces. Borsoga developed the documentation and visualization to represent the project's final material state and spatial presence.",
    closingLine:
      "Spatial documentation defined by material presence, light quality, and the character of the completed interior.",
    year: "2024",
    layout: "pd1",
    images: [
      "/projects/RAL-1013-CRYSTAL-RIVER-RESIDENCE/rlzw8338.jpeg",
      "/projects/RAL-1013-CRYSTAL-RIVER-RESIDENCE/img-6984.jpg",
      "/projects/RAL-1013-CRYSTAL-RIVER-RESIDENCE/vfdb4845.jpeg",
      "/projects/RAL-1013-CRYSTAL-RIVER-RESIDENCE/img-e6985.jpg",
    ],
  },
  {
    slug: "RAL-1002-DOUBLE-ISLAND-KITCHEN",
    title: "RAL 1002 // DOUBLE ISLAND KITCHEN",
    discipline: "Architectural Visualization & 3D Modeling",
    scope: "3D Modeling · Interior Visualization · Material Development · Lighting Setup · Still Rendering",
    description:
      "High-resolution CGI rendering of a luxury kitchen, exploring the interplay of light, material and spatial composition.",
    narrative:
      "The visualization focuses on the kitchen as a precision object within the interior, where material quality and lighting define the spatial experience. Dark surfaces, metal hardware, and controlled artificial lighting create a composition that balances functional clarity with visual depth. Borsoga developed the 3D modeling and rendering to represent the kitchen's materiality, proportion, and spatial integration.",
    closingLine:
      "Kitchen visualization defined by material precision, controlled lighting, and the integration of function and spatial quality.",
    year: "2025",
    layout: "pd1",
    images: [
      "/projects/RAL-1002-DOUBLE-ISLAND-KITCHEN/2.jpg",
      "/projects/RAL-1002-DOUBLE-ISLAND-KITCHEN/3.jpg",
      "/projects/RAL-1002-DOUBLE-ISLAND-KITCHEN/4.jpg",
      "/projects/RAL-1002-DOUBLE-ISLAND-KITCHEN/6.jpg",
    ],
  },
  {
    slug: "RAL-7022-UMBRA-STONE-KITCHEN",
    title: "RAL 7022 // UMBRA STONE KITCHEN",
    discipline: "Architectural Visualization & 3D Modeling",
    scope: "3D Modeling · Interior Visualization · Material Development · Lighting Setup · Still Rendering",
    description:
      "A material and detail study for a contemporary kitchen, exploring how finishes and textures contribute to spatial quality.",
    narrative:
      "The visualization explores the kitchen through a series of perspectives that reveal the relationship between material selection, surface finish, and spatial proportion. Warm wood tones are combined with stone and metal elements to define a composition that is both functional and visually precise. Borsoga developed the 3D modeling and visualization to represent the project's material character and spatial integration.",
    closingLine:
      "Kitchen visualization defined by material harmony, spatial proportion, and the integration of warm and mineral finishes.",
    year: "2025",
    layout: "pd1",
    images: [
      "/projects/RAL-7022-UMBRA-STONE-KITCHEN/1.jpg",
      "/projects/RAL-7022-UMBRA-STONE-KITCHEN/2.jpg",
      "/projects/RAL-7022-UMBRA-STONE-KITCHEN/3.jpg",
      "/projects/RAL-7022-UMBRA-STONE-KITCHEN/4.jpg",
    ],
  },
  {
    slug: "kitchen-8",
    title: "KITCHEN VIII",
    discipline: "Architectural Visualization & 3D Modeling",
    scope: "3D Modeling · Interior Visualization · Viewport Documentation · Material Study · Still Rendering",
    description:
      "A kitchen visualization project combining photorealistic CGI with viewport captures to present the design from multiple perspectives.",
    narrative:
      "The project documents a kitchen design through a combination of photorealistic renders and viewport captures, presenting the spatial character from multiple angles and lighting conditions. The visualization focuses on the relationship between surface materials, natural light entry, and the spatial organization of the kitchen volume. Borsoga developed the 3D modeling and rendering to represent the project's material and spatial qualities.",
    closingLine:
      "Kitchen documentation defined by spatial clarity, material quality, and the control of natural and artificial lighting conditions.",
    year: "2026",
    layout: "pd1",
    images: [
      "/projects/KITCHEN-VIII/1.jpg",
      "/projects/KITCHEN-VIII/2.jpg",
      "/projects/KITCHEN-VIII/3.jpg",
      "/projects/KITCHEN-VIII/4.jpg",
    ],
  },
  {
    slug: "RAL-1015-POOL-PAVILION",
    title: "RAL 1015 // POOL PAVILION",
    discipline: "Concept Design, Architectural Visualization & 3D Modeling",
    scope: "Concept Design · 3D Modeling · Exterior Visualization · Pool Area Design · Material Study · Landscape Integration · Lighting Setup · Still Rendering",
    description:
      "Exterior pool area defined by an ivory pavilion, light metal roof, beige surfaces, reflective water, and tropical vegetation.",
    narrative:
      "The concept organizes the exterior area through a central pool, lounge zones, service bars, and a covered pavilion oriented toward the water. The ivory structure is combined with a light metal roof, vertical panels, beige surfaces, and light furniture to maintain a unified reading of the composition. Point lighting across the pavilion, pool edges, and landscape reinforces spatial depth during afternoon and evening scenes. Borsoga developed the concept design, 3D modeling, and exterior visualization to represent the relationship between pool, light structure, functional areas, and perimeter vegetation.",
    closingLine:
      "Exterior area defined by light structure, shade control, and visual continuity between pool, pavilion, and tropical landscape.",
    year: "2025",
    layout: "pd3",
    images: [
      "/projects/RAL-1015-POOL-PAVILION/1.jpg",
      "/projects/RAL-1015-POOL-PAVILION/2.jpg",
      "/projects/RAL-1015-POOL-PAVILION/3.jpg",
      "/projects/RAL-1015-POOL-PAVILION/4.jpg",
      "/projects/RAL-1015-POOL-PAVILION/5.jpg",
    ],
  },
];
