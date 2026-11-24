export type PoolLiner = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  galleryImages: string[];
  collection: string;
  features: string[];
  fabricators?: string[];
  finishLogo?: string;
  finishIcon?: string;
  discontinued?: boolean;
  sortOrder?: number;
  isNew?: boolean;
  exclusive?: boolean;
}

export const poolLiners: PoolLiner[] = [
  // ── Mosaic ──────────────────────────────────────────────────────────
  {
    id: 'dolomiti',
    name: 'Dolomiti',
    shortDescription: 'AquaMate exclusive herringbone glass mosaic in deep blue, charcoal and slate.',
    longDescription: 'Available only from AquaMate, Dolomiti is a herringbone glass mosaic that layers deep ocean blue, charcoal and slate grey tiles with a pearlescent, hand-glazed sheen. Crisp grey grout lines frame every tile, giving your pool the look of a custom-tiled finish, and once filled the water takes on a rich, deep-blue tone with brilliant sparkle in the sun. Printed by Poolside by CGT exclusively for AquaMate.',
    imageUrl: '/assets/gallery/dolomiti/dolomiti-0.jpg',
    galleryImages: [
      '/assets/gallery/dolomiti/dolomiti-0.jpg',
      '/assets/gallery/dolomiti/dolomiti-1.jpg',
      '/assets/gallery/dolomiti/dolomiti-2.jpg',
      '/assets/gallery/dolomiti/dolomiti-3.jpg',
      '/assets/gallery/dolomiti/dolomiti-4.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 0,
    isNew: true,
    exclusive: true
  },
  {
    id: 'butterfly-effect',
    name: 'Butterfly Effect',
    shortDescription: 'Intricate mosaic pattern with shimmering finish and dynamic movement.',
    longDescription: 'The Butterfly Effect creates a stunning visual display with its intricate mosaic pattern and shimmering finish. The dynamic design brings movement and life to your pool, with light playing across the surface to create an ever-changing appearance. Enhanced with our aquashimmer technology for added sparkle and exceptional UV protection.',
    imageUrl: '/assets/gallery/butterfly-effect/butterfly-effect-0.jpg',
    galleryImages: [
      '/assets/gallery/butterfly-effect/butterfly-effect-0.jpg',
      '/assets/gallery/butterfly-effect/butterfly-effect-1.jpg',
      '/assets/gallery/butterfly-effect/butterfly-effect-2.jpg',
      '/assets/gallery/butterfly-effect/butterfly-effect-3.jpg',
      '/assets/gallery/butterfly-effect/butterfly-effect-4.jpg',
      '/assets/gallery/butterfly-effect/butterfly-effect-5.jpg',
      '/assets/gallery/butterfly-effect/butterfly-effect-6.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer'],
    finishLogo: '/assets/brand/aquashimmer-logo.png',
    finishIcon: '/assets/brand/aquashimmer-icon.png',
    sortOrder: 1
  },
  {
    id: 'silver-lake',
    name: 'Silver Lake',
    shortDescription: 'Shimmering silver mosaic design for modern pools with contemporary appeal.',
    longDescription: 'Silver Lake offers a contemporary mosaic design with shimmering silver tones that bring a sophisticated modern appeal to any pool. The premium vinyl material features a subtle metallic finish that catches the light for an ever-changing appearance. Enhanced with our exclusive aquafinish for superior chemical resistance and UV protection.',
    imageUrl: '/assets/gallery/silver-lake/silver-lake-0.jpg',
    galleryImages: [
      '/assets/gallery/silver-lake/silver-lake-0.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish'],
    sortOrder: 2
  },
  {
    id: 'disco',
    name: 'Disco',
    shortDescription: 'Shimmering and dancing mosaic design with sparkling effect.',
    longDescription: 'Shimmering and dancing mosaic design. Printed on pale blue pool liner material enhanced with Poolside\'s exclusive aquashimmer feature for sparkling effect. Engineered with added chemical and UV protection.',
    imageUrl: '/assets/gallery/disco/disco-0.jpg',
    galleryImages: [
      '/assets/gallery/disco/disco-0.jpg',
      '/assets/gallery/disco/disco-1.jpg',
      '/assets/gallery/disco/disco-2.jpg',
      '/assets/gallery/disco/disco-3.jpg',
      '/assets/gallery/disco/disco-4.jpg',
      '/assets/gallery/disco/disco-5.jpg',
      '/assets/gallery/disco/disco-6.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer'],
    finishLogo: '/assets/brand/aquashimmer-logo.png',
    finishIcon: '/assets/brand/aquashimmer-icon.png',
    sortOrder: 3
  },
  {
    id: 'esagono',
    name: 'Esagono',
    shortDescription: 'Fiery blue-grey hexagonal mosaic with rustic motif.',
    longDescription: 'A fiery blue-grey hexagonal mosaic with a rustic motif creating beautiful blue waters. Printed on stone clay coloured pool liner material enhanced with Poolside\'s exclusive aquashimmer feature for sparkling effect. Engineered with added chemical and UV protection.',
    imageUrl: '/assets/gallery/esagono/esagono-0.jpg',
    galleryImages: [
      '/assets/gallery/esagono/esagono-0.jpg',
      '/assets/gallery/esagono/esagono-1.jpg',
      '/assets/gallery/esagono/esagono-2.jpg',
      '/assets/gallery/esagono/esagono-3.jpg',
      '/assets/gallery/esagono/esagono-4.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer'],
    finishLogo: '/assets/brand/aquashimmer-logo.png',
    finishIcon: '/assets/brand/aquashimmer-icon.png',
    sortOrder: 4
  },
  {
    id: 'caspian',
    name: 'Caspian',
    shortDescription: 'Shimmering mosaic of classic blue stone with golden swirling accents.',
    longDescription: 'Inspired by the timeless beauty of stone and sea, Caspian unveils a shimmering mosaic of classic blue stone intricately inlaid with swirling spirals. Golden accents swirl and flow through the design like hidden treasures, catching the sunlight and evoking warmth, elegance, and discovery. Enhanced with our exclusive aquashimmer for a sparkling gemstone-like effect.',
    imageUrl: '/assets/gallery/caspian/caspian-0.jpg',
    galleryImages: [
      '/assets/gallery/caspian/caspian-0.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer'],
    finishLogo: '/assets/brand/aquashimmer-logo.png',
    finishIcon: '/assets/brand/aquashimmer-icon.png',
    sortOrder: 5,
    isNew: true
  },
  {
    id: 'gladstone',
    name: 'Gladstone',
    shortDescription: 'Elegant mosaic pattern with traditional appeal and refined details.',
    longDescription: 'Gladstone offers an elegant mosaic pattern with traditional appeal and refined detailing. This pattern brings a sense of timeless sophistication to your pool with its carefully balanced design elements and soothing color palette. The premium vinyl material includes our exclusive aquafinish protective coating for exceptional chemical resistance and UV protection.',
    imageUrl: '/assets/gallery/gladstone/gladstone-0.jpg',
    galleryImages: [
      '/assets/gallery/gladstone/gladstone-0.jpg',
      '/assets/gallery/gladstone/gladstone-1.jpg',
      '/assets/gallery/gladstone/gladstone-2.jpg',
      '/assets/gallery/gladstone/gladstone-3.jpg',
      '/assets/gallery/gladstone/gladstone-4.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 6
  },

  // ── Pebble ──────────────────────────────────────────────────────────
  {
    id: 'blue-pebble',
    name: 'Blue Pebble',
    shortDescription: 'Classic blue pebble pattern reminiscent of natural shorelines.',
    longDescription: 'Blue Pebble brings the natural beauty of shoreline pebbles to your swimming pool. Each carefully designed pebble creates a soothing visual texture with brilliant blue tones. Perfect for creating a natural look with modern durability, enhanced with our exclusive aquafinish for UV and chemical protection.',
    imageUrl: '/assets/gallery/blue-pebble/blue-pebble-0.jpg',
    galleryImages: [
      '/assets/gallery/blue-pebble/blue-pebble-0.jpg',
      '/assets/gallery/blue-pebble/blue-pebble-1.jpg',
      '/assets/gallery/blue-pebble/blue-pebble-2.jpg',
      '/assets/gallery/blue-pebble/blue-pebble-3.jpg',
      '/assets/gallery/blue-pebble/blue-pebble-4.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 1
  },
  {
    id: 'raleigh-blue',
    name: 'Raleigh Blue',
    shortDescription: 'Bold serpentine mosaic border in cool blue-teal stone tiles.',
    longDescription: 'A bold serpentine mosaic border in cool blue-teal stone mosaic tiles. Paired with CGT\'s Blue Beach Pebble floor on medium blue pool liner material with CGT\'s exclusive aquafinish for chemical and UV protection. Raleigh Blue brings a Mediterranean-inspired elegance to any poolscape.',
    imageUrl: '/assets/gallery/raleigh-blue/raleigh-blue-0.jpg',
    galleryImages: [
      '/assets/gallery/raleigh-blue/raleigh-blue-0.jpg',
      '/assets/gallery/raleigh-blue/raleigh-blue-1.jpg',
      '/assets/gallery/raleigh-blue/raleigh-blue-2.jpg',
      '/assets/gallery/raleigh-blue/raleigh-blue-3.jpg',
      '/assets/gallery/raleigh-blue/raleigh-blue-4.jpg',
      '/assets/gallery/raleigh-blue/raleigh-blue-5.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    sortOrder: 2
  },
  {
    id: 'hamlin-blue',
    name: 'Hamlin Blue',
    shortDescription: 'Modern stone border with interlinked blue and white motif.',
    longDescription: 'A modern stone border with an interlinked blue and white motif. Paired with CGT\'s Blue Beach Pebble floor on medium blue pool liner material with CGT\'s exclusive aquafinish for chemical and UV protection. Hamlin Blue creates a sophisticated contemporary look for modern poolscapes.',
    imageUrl: '/assets/gallery/hamlin-blue/hamlin-blue-0.jpg',
    galleryImages: [
      '/assets/gallery/hamlin-blue/hamlin-blue-0.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    sortOrder: 3
  },
  {
    id: 'white-pebble',
    name: 'White Pebble',
    shortDescription: 'Clean and bright pebble pattern for a fresh pool appearance.',
    longDescription: 'White Pebble delivers a clean, bright appearance with its natural pebble pattern and fresh aesthetic. This premium liner creates a light, airy atmosphere that makes your pool look larger and more inviting. Printed on white liner material and enhanced with our exclusive aquafinish for superior chemical resistance and UV protection.',
    imageUrl: '/assets/gallery/white-pebble/white-pebble-0.jpg',
    galleryImages: [
      '/assets/gallery/white-pebble/white-pebble-0.jpg',
      '/assets/gallery/white-pebble/white-pebble-1.jpg',
      '/assets/gallery/white-pebble/white-pebble-2.jpg',
      '/assets/gallery/white-pebble/white-pebble-3.jpg',
      '/assets/gallery/white-pebble/white-pebble-4.jpg',
      '/assets/gallery/white-pebble/white-pebble-5.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    sortOrder: 4
  },
  {
    id: 'raleigh-grey',
    name: 'Raleigh Grey',
    shortDescription: 'Sophisticated grey pebble design with modern aesthetic and versatile appeal.',
    longDescription: 'Raleigh Grey offers a sophisticated pebble design with a versatile grey color palette that complements modern architectural styles. This premium pattern brings a contemporary aesthetic to your pool with its refined appearance and subtle natural texture. Enhanced with our exclusive aquafinish for exceptional durability and UV protection.',
    imageUrl: '/assets/gallery/raleigh-grey/raleigh-grey-0.jpg',
    galleryImages: [
      '/assets/gallery/raleigh-grey/raleigh-grey-0.jpg',
      '/assets/gallery/raleigh-grey/raleigh-grey-1.jpg',
      '/assets/gallery/raleigh-grey/raleigh-grey-2.jpg',
      '/assets/gallery/raleigh-grey/raleigh-grey-3.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    sortOrder: 5
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    shortDescription: 'Warm pebble floor that enhances architectural beauty with natural tones.',
    longDescription: 'A warm pebble floor to enhance the architectural beauty of your backyard. Printed on tan pool liner material enhanced with our exclusive aquafinish for chemical and UV protection. Sandstone creates a natural, inviting atmosphere with its earthy tones and organic texture.',
    imageUrl: '/assets/gallery/sandstone/sandstone-0.jpg',
    galleryImages: [
      '/assets/gallery/sandstone/sandstone-0.jpg',
      '/assets/gallery/sandstone/sandstone-1.jpg',
      '/assets/gallery/sandstone/sandstone-2.jpg',
      '/assets/gallery/sandstone/sandstone-3.jpg',
      '/assets/gallery/sandstone/sandstone-4.jpg',
      '/assets/gallery/sandstone/sandstone-5.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    sortOrder: 6
  },
  {
    id: 'cirali-beach',
    name: 'Cirali Beach',
    shortDescription: 'Natural stone with shimmering gold pebbles for a luxurious effect.',
    longDescription: 'Enhanced with aquashimmer gold ink from Poolside by CGT. Cirali Beach combines the appearance of soft natural stone with a galaxy of shimmering gold pebbles for a luxurious sparkling effect.',
    imageUrl: '/assets/gallery/cirali-beach/cirali-beach-0.jpg',
    galleryImages: [
      '/assets/gallery/cirali-beach/cirali-beach-0.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-1.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-2.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-3.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-4.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-5.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-6.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-7.jpg',
      '/assets/gallery/cirali-beach/cirali-beach-8.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquashimmer'],
    finishLogo: '/assets/brand/aquashimmer-logo.png',
    finishIcon: '/assets/brand/aquashimmer-icon.png',
    sortOrder: 7
  },
  {
    id: 'ocean-midnight',
    name: 'Ocean Midnight',
    shortDescription: 'Detailed grey-blue pebble floor that enhances architectural beauty.',
    longDescription: 'A detailed grey-blue pebble floor to enhance the architectural beauty of your backyard. Ocean Midnight is available as an all-floor print or paired with Poolside\'s Harlo border print. Printed on white liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/gallery/ocean-midnight/ocean-midnight-0.jpg',
    galleryImages: [
      '/assets/gallery/ocean-midnight/ocean-midnight-0.jpg',
      '/assets/gallery/ocean-midnight/ocean-midnight-1.jpg',
      '/assets/gallery/ocean-midnight/ocean-midnight-2.jpg',
      '/assets/gallery/ocean-midnight/ocean-midnight-3.jpg',
      '/assets/gallery/ocean-midnight/ocean-midnight-4.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 8
  },
  {
    id: 'catalina-sandstone',
    name: 'Catalina Sandstone',
    shortDescription: 'Warm sandstone texture creating a natural pool environment. While quantities last.',
    longDescription: 'Catalina Sandstone brings the warm, inviting texture of natural sandstone to your pool environment. The earthy tones and subtle variation create a serene, natural setting that is perfect for relaxed outdoor living. This premium pattern is printed on tan pool liner material enhanced with our exclusive aquafinish for chemical and UV protection. This pattern is being discontinued - available while quantities last.',
    imageUrl: '/assets/gallery/catalina-sandstone/catalina-sandstone-0.jpg',
    galleryImages: [
      '/assets/gallery/catalina-sandstone/catalina-sandstone-0.jpg',
      '/assets/gallery/catalina-sandstone/catalina-sandstone-1.jpg',
      '/assets/gallery/catalina-sandstone/catalina-sandstone-2.jpg',
      '/assets/gallery/catalina-sandstone/catalina-sandstone-3.jpg',
      '/assets/gallery/catalina-sandstone/catalina-sandstone-4.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    discontinued: true,
    sortOrder: 98
  },
  {
    id: 'clarkson-blue',
    name: 'Clarkson Blue',
    shortDescription: 'Beautiful artistic glass mosaic tile with soft highlights and sophisticated appeal. While quantities last.',
    longDescription: 'A beautiful artistic glass mosaic tile with soft highlights, perfect for gatherings around the pool. Paired with Poolside\'s Blue Beach Pebble floor on medium blue pool liner material enhanced with our exclusive aquafinish for chemical and UV protection. Clarkson Blue brings a touch of artistic sophistication to your poolscape. This pattern is being discontinued - available while quantities last.',
    imageUrl: '/assets/gallery/clarkson-blue/clarkson-blue-0.jpg',
    galleryImages: [
      '/assets/gallery/clarkson-blue/clarkson-blue-0.jpg',
      '/assets/gallery/clarkson-blue/clarkson-blue-1.jpg',
      '/assets/gallery/clarkson-blue/clarkson-blue-2.jpg',
      '/assets/gallery/clarkson-blue/clarkson-blue-3.jpg',
      '/assets/gallery/clarkson-blue/clarkson-blue-4.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    discontinued: true,
    sortOrder: 99
  },

  // ── Water Scape ─────────────────────────────────────────────────────
  {
    id: 'lake-tahoe',
    name: 'Lake Tahoe',
    shortDescription: 'Vibrant blue design with teal waves inspired by sparkling clear waters.',
    longDescription: 'Inspired by sparkling clear waters, the Lake Tahoe all-over is the perfect center piece for every backyard. The vibrant blue Lake Tahoe liner features teal waves at the water line for a unique all-over style. Available with the Water Street border print, or as an allover print with the companion Lake Tahoe Wall.',
    imageUrl: '/assets/gallery/lake-tahoe/lake-tahoe-0.jpg',
    galleryImages: [
      '/assets/gallery/lake-tahoe/lake-tahoe-0.jpg',
      '/assets/gallery/lake-tahoe/lake-tahoe-1.jpg',
      '/assets/gallery/lake-tahoe/lake-tahoe-2.jpg',
      '/assets/gallery/lake-tahoe/lake-tahoe-3.jpg',
      '/assets/gallery/lake-tahoe/lake-tahoe-4.jpg'
    ],
    collection: 'Water Scape',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 1
  },
  {
    id: 'water-street',
    name: 'Water Street',
    shortDescription: 'Detailed stone border with sculpted blue tiles for a balanced look.',
    longDescription: 'Style and tradition meet at Water Street. A detailed stone border embedded with sculpted blue tiles for a balanced border print and endless styling options. Water Street is printed on medium blue base film and complemented by the vibrant blue Lake Tahoe floor design.',
    imageUrl: '/assets/gallery/water-street/water-street-0.jpg',
    galleryImages: [
      '/assets/gallery/water-street/water-street-0.jpg'
    ],
    collection: 'Water Scape',
    features: ['Aquafinish'],
    sortOrder: 2
  },
  {
    id: 'sonata',
    name: 'Sonata',
    shortDescription: 'Rhythmic water pattern creating visual movement and dynamic flow.',
    longDescription: 'Sonata creates a sense of rhythm and movement with its flowing water pattern design. This premium liner brings dynamic visual interest to your pool with its carefully composed waves and ripples. The high-quality vinyl material includes our exclusive aquafinish for exceptional chemical resistance and UV protection.',
    imageUrl: '/assets/gallery/sonata/sonata-0.jpg',
    galleryImages: [
      '/assets/gallery/sonata/sonata-0.jpg',
      '/assets/gallery/sonata/sonata-1.jpg',
      '/assets/gallery/sonata/sonata-2.jpg'
    ],
    collection: 'Water Scape',
    features: ['Aquafinish'],
    sortOrder: 3
  },

  // ── Natural Stone ───────────────────────────────────────────────────
  {
    id: 'blue-slate',
    name: 'Blue Slate',
    shortDescription: 'Natural stone pattern with cool blue tones for a serene atmosphere.',
    longDescription: 'Blue Slate combines the elegance of natural slate with soothing blue tones. This sophisticated pattern presents the rustic texture of slate in refreshing aquatic colors, creating a serene atmosphere in any pool. The premium material is enhanced with our aquafinish technology for superior longevity and resistance to pool chemicals.',
    imageUrl: '/assets/gallery/blue-slate/blue-slate-0.jpg',
    galleryImages: [
      '/assets/gallery/blue-slate/blue-slate-0.jpg',
      '/assets/gallery/blue-slate/blue-slate-1.jpg',
      '/assets/gallery/blue-slate/blue-slate-2.jpg',
      '/assets/gallery/blue-slate/blue-slate-3.jpg',
      '/assets/gallery/blue-slate/blue-slate-4.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 1
  },
  {
    id: 'black-slate',
    name: 'Black Slate',
    shortDescription: 'Dramatic black slate pattern for sophisticated pools.',
    longDescription: 'An elegant black slate design that brings modern luxury to your pool. The deep rich tones create a sophisticated appearance while maintaining a natural stone aesthetic. Enhanced with our exclusive aquafinish for exceptional chemical resistance and UV protection.',
    imageUrl: '/assets/gallery/black-slate/black-slate-0.jpg',
    galleryImages: [
      '/assets/gallery/black-slate/black-slate-0.jpg',
      '/assets/gallery/black-slate/black-slate-1.jpg',
      '/assets/gallery/black-slate/black-slate-2.jpg',
      '/assets/gallery/black-slate/black-slate-3.jpg',
      '/assets/gallery/black-slate/black-slate-4.jpg',
      '/assets/gallery/black-slate/black-slate-5.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 2
  },
  {
    id: 'maui',
    name: 'Maui',
    shortDescription: 'Tropical-inspired natural stone pattern with exotic appeal.',
    longDescription: 'Maui brings the exotic beauty of tropical stonework to your poolscape. This premium pattern captures the essence of island aesthetics with its natural stone appearance and vibrant undertones. The high-quality vinyl material is enhanced with our exclusive aquafinish for superior chemical resistance and UV protection.',
    imageUrl: '/assets/gallery/maui/maui-0.jpg',
    galleryImages: [
      '/assets/gallery/maui/maui-0.jpg',
      '/assets/gallery/maui/maui-1.jpg',
      '/assets/gallery/maui/maui-2.jpg',
      '/assets/gallery/maui/maui-3.jpg',
      '/assets/gallery/maui/maui-4.jpg',
      '/assets/gallery/maui/maui-5.jpg',
      '/assets/gallery/maui/maui-6.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 3
  },
  {
    id: 'maui-grey',
    name: 'Maui Grey',
    shortDescription: 'Subtle grey stone pattern with island charm and sophisticated tone.',
    longDescription: 'Maui Grey offers a sophisticated take on tropical stonework with its subtle grey tones and refined appearance. This premium pattern combines island-inspired design with a contemporary color palette for a versatile poolscape that complements modern architecture. Enhanced with our exclusive aquafinish for exceptional durability and UV protection.',
    imageUrl: '/assets/gallery/maui-grey/maui-grey-0.jpg',
    galleryImages: [
      '/assets/gallery/maui-grey/maui-grey-0.jpg',
      '/assets/gallery/maui-grey/maui-grey-1.jpg',
      '/assets/gallery/maui-grey/maui-grey-2.jpg',
      '/assets/gallery/maui-grey/maui-grey-3.jpg',
      '/assets/gallery/maui-grey/maui-grey-4.jpg',
      '/assets/gallery/maui-grey/maui-grey-5.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 4
  },
  {
    id: 'quartz-garden',
    name: 'Quartz Garden',
    shortDescription: 'Calm tropical water colour with airy quartz textures and soft hues.',
    longDescription: 'Quartz Garden brings a calm, tropical water colour to the lineup with airy quartz textures and soft hues that reflect the sky and surrounding landscape. This serene pattern creates a tranquil poolscape with its natural stone appearance and gentle colour palette.',
    imageUrl: '/assets/gallery/quartz-garden/quartz-garden-0.jpg',
    galleryImages: [
      '/assets/gallery/quartz-garden/quartz-garden-0.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 5,
    isNew: true
  },
  {
    id: 'blue-marble',
    name: 'Blue Marble',
    shortDescription: 'Refined blue marble design for luxury pools with classic elegance.',
    longDescription: 'Blue Marble offers a refined marble design in stunning blue tones. This pattern combines the classic elegance of marble with a contemporary color palette for a truly luxurious pool. The premium material includes our exclusive aquafinish protective coating for exceptional chemical resistance and industry-leading UV protection.',
    imageUrl: '/assets/gallery/blue-marble/blue-marble-0.jpg',
    galleryImages: [
      '/assets/gallery/blue-marble/blue-marble-0.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 6
  },
  {
    id: 'oxford-blue-marble',
    name: 'Oxford Blue Marble',
    shortDescription: 'Deep blue marble pattern with classic appeal and sophisticated aesthetic.',
    longDescription: 'Oxford Blue Marble delivers a sophisticated aesthetic with its deep blue marble pattern and classic appeal. This premium design brings the elegance of fine marble to your poolscape with rich blue tones and subtle veining. Paired with our exclusive aquafinish for superior chemical resistance and industry-leading UV protection.',
    imageUrl: '/assets/gallery/oxford-blue-marble/oxford-blue-marble-0.jpg',
    galleryImages: [
      '/assets/gallery/oxford-blue-marble/oxford-blue-marble-0.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oxford-slide3.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 7
  },
  {
    id: 'cambridge-blue-marble',
    name: 'Cambridge Blue Marble',
    shortDescription: 'Refined blue marble design for luxury pools with classic elegance.',
    longDescription: 'Cambridge Blue Marble offers a refined marble design in stunning blue tones. This pattern combines the classic elegance of marble with a contemporary color palette for a truly luxurious pool. The premium material includes our exclusive aquafinish protective coating for exceptional chemical resistance and industry-leading UV protection.',
    imageUrl: '/assets/gallery/cambridge-blue-marble/cambridge-blue-marble-0.jpg',
    galleryImages: [
      '/assets/gallery/cambridge-blue-marble/cambridge-blue-marble-0.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 8
  },

  // ── Terrazzo ─────────────────────────────────────────────────────────
  {
    id: 'silver-antiqua',
    name: 'Silver Antiqua',
    shortDescription: 'Serene natural quartz design in a blend of grey tones for modern pools.',
    longDescription: 'The sparkling Silver Antigua is a serene natural quartz design printed in a blend of grey tones perfect for modern architectural styles. Available as an all-floor print or paired with Poolside\'s Silver Horizon border design. Printed on silver grey pool liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/gallery/silver-antigua/silver-antigua-0.jpg',
    galleryImages: [
      '/assets/gallery/silver-antigua/silver-antigua-0.jpg',
      '/assets/gallery/silver-antigua/silver-antigua-1.jpg',
      '/assets/gallery/silver-antigua/silver-antigua-2.jpg',
      '/assets/gallery/silver-antigua/silver-antigua-3.jpg',
      '/assets/gallery/silver-antigua/silver-antigua-4.jpg',
      '/assets/gallery/silver-antigua/silver-antigua-5.jpg'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish'],
    sortOrder: 1
  },
  {
    id: 'silver-horizon',
    name: 'Silver Horizon',
    shortDescription: 'Stylish glass mosaic with detailed gray tones for a sophisticated look.',
    longDescription: 'A stylish glass mosaic with unmatched detail printed in sophisticated grey tones. Paired with Poolside\'s Silver Antigua floor on silver grey pool liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/gallery/silver-horizon/silver-horizon-0.jpg',
    galleryImages: [
      '/assets/gallery/silver-horizon/silver-horizon-0.jpg',
      '/assets/gallery/silver-horizon/silver-horizon-1.jpg',
      '/assets/gallery/silver-horizon/silver-horizon-2.jpg',
      '/assets/gallery/silver-horizon/silver-horizon-3.jpg',
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish'],
    sortOrder: 2
  },
  {
    id: 'antigua',
    name: 'Antigua',
    shortDescription: 'Traditional terrazzo pattern with refreshing Caribbean blue and teal colors.',
    longDescription: 'Inspired by natural quartz granite surfaces and energized with a blend of refreshing Caribbean blue and teal colours. The Antigua is available as an all-floor print or paired with Poolside\'s Horizon, and Gemini borders. Printed on pale blue pool liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/gallery/antigua/antigua-0.jpg',
    galleryImages: [
      '/assets/gallery/antigua/antigua-0.jpg',
      '/assets/gallery/antigua/antigua-1.jpg',
      '/assets/gallery/antigua/antigua-2.jpg',
      '/assets/gallery/antigua/antigua-3.jpg',
      '/assets/gallery/antigua/antigua-4.jpg'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish', 'Aquasense'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 3
  },
  {
    id: 'caterbury-antigua',
    name: 'Canterbury Antigua',
    shortDescription: 'Elegant terrazzo design with intricate detailing and sophisticated appeal.',
    longDescription: 'Canterbury Antigua elevates the classic terrazzo look with sophisticated detailing and an elegant color palette. This pattern combines the timeless appeal of terrazzo with modern design sensibilities for a truly distinctive pool liner. Printed on premium vinyl material with our exclusive aquafinish for superior durability and UV protection.',
    imageUrl: '/assets/gallery/canterbury-antigua/canterbury-antigua-0.jpg',
    galleryImages: [
      '/assets/gallery/canterbury-antigua/canterbury-antigua-0.jpg',
      '/assets/gallery/canterbury-antigua/canterbury-antigua-1.jpg',
      '/assets/gallery/canterbury-antigua/canterbury-antigua-2.jpg',
      '/assets/gallery/canterbury-antigua/canterbury-antigua-3.jpg',
      '/assets/gallery/canterbury-antigua/canterbury-antigua-4.jpg'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 4
  },
  {
    id: 'blue-horizon',
    name: 'Blue Horizon',
    shortDescription: 'Stunning blue terrazzo pattern with bold waterscapes.',
    longDescription: 'The Blue Horizon creates a stunning water effect with a blend of deep and light blue tones. This premium pattern delivers an immersive swimming experience with its natural waterscape appearance. Printed on premium vinyl with our exclusive aquafinish for superior durability and UV protection.',
    imageUrl: '/assets/gallery/blue-horizon/blue-horizon-0.jpg',
    galleryImages: [
      '/assets/gallery/blue-horizon/blue-horizon-0.jpg',
      '/assets/gallery/blue-horizon/blue-horizon-1.jpg',
      '/assets/gallery/blue-horizon/blue-horizon-2.jpg',
      '/assets/gallery/blue-horizon/blue-horizon-3.jpg',
      '/assets/gallery/blue-horizon/blue-horizon-4.jpg'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish'],
    finishLogo: '/assets/brand/aquafinish-logo.png',
    finishIcon: '/assets/brand/aquafinish-icon.png',
    sortOrder: 5
  },
  {
    id: 'twilight',
    name: 'Antigua Twilight',
    shortDescription: 'Bold colour-shifting terrazzo with teal and starlight accents.',
    longDescription: 'A bold statement in pool design, Antigua Twilight is where artistry meets innovation. Crafted with our exclusive colour shift light-interactive ink and Deep Royal Navy base film, this pattern delivers a brilliant colour-shifting terrazzo effect that shimmers with teal and starlight accents. Enhanced with our exclusive aquashift for a next-level colour shifting effect with shimmering detail.',
    imageUrl: '/assets/gallery/twilight/twilight-0.jpg',
    galleryImages: [
      '/assets/gallery/twilight/twilight-0.jpg'
    ],
    collection: 'Terrazzo',
    features: ['Aquashift'],
    finishLogo: '/assets/brand/aquashift-logo.png',
    finishIcon: '/assets/brand/aquashift-icon.png',
    sortOrder: 6,
    isNew: true
  },
];

export const collections = ['All', 'New', 'Mosaic', 'Pebble', 'Water Scape', 'Natural Stone', 'Terrazzo'];

export const features = ['Aquafinish', 'Aquasense', 'Aquashimmer', 'Aquashift', 'Aquasense Signature', 'HD'];

const sortBySortOrder = (a: PoolLiner, b: PoolLiner) => {
  if (a.discontinued !== b.discontinued) return a.discontinued ? 1 : -1;
  return (a.sortOrder ?? 50) - (b.sortOrder ?? 50);
};

export const getPoolLinersByCollection = (collection: string): PoolLiner[] => {
  if (collection === 'All') {
    return [...poolLiners].sort(sortBySortOrder);
  }
  if (collection === 'New') {
    return poolLiners.filter(liner => liner.isNew).sort(sortBySortOrder);
  }
  return poolLiners.filter(liner => liner.collection === collection).sort(sortBySortOrder);
};

export const getPoolLinersByFeature = (feature: string): PoolLiner[] => {
  return poolLiners.filter(liner => liner.features.includes(feature)).sort(sortBySortOrder);
};

export const getPoolLinerById = (id: string): PoolLiner | undefined => {
  return poolLiners.find(liner => liner.id === id);
};

export const getRelatedPoolLiners = (liner: PoolLiner, limit: number = 4): PoolLiner[] => {
  return poolLiners
    .filter(item => item.collection === liner.collection && item.id !== liner.id)
    .sort(sortBySortOrder)
    .slice(0, limit);
};
