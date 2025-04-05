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
}

export const poolLiners: PoolLiner[] = [
  {
    id: 'antigua',
    name: 'Antigua',
    shortDescription: 'Traditional terrazzo pattern with refreshing Caribbean blue and teal colors.',
    longDescription: 'Inspired by natural quartz granite surfaces and energized with a blend of refreshing Caribbean blue and teal colours. The Antigua is available as an all-floor print or paired with Poolside\'s Horizon, and Gemini borders. Printed on pale blue pool liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/patterns/antigua.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/antigua-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/antigua-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/antigua-slide3.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/antigua-slide4.webp'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish', 'Aquasense']
  },
  {
    id: 'black-slate',
    name: 'Black Slate',
    shortDescription: 'Dramatic black slate pattern for sophisticated pools.',
    longDescription: 'An elegant black slate design that brings modern luxury to your pool. The deep rich tones create a sophisticated appearance while maintaining a natural stone aesthetic. Enhanced with our exclusive aquafinish for exceptional chemical resistance and UV protection.',
    imageUrl: '/assets/patterns/black-slate.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/black-slate-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/black-slate-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/black-slate-slide3.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'blue-horizon',
    name: 'Blue Horizon',
    shortDescription: 'Stunning blue terrazzo pattern with bold waterscapes.',
    longDescription: 'The Blue Horizon creates a stunning water effect with a blend of deep and light blue tones. This premium pattern delivers an immersive swimming experience with its natural waterscape appearance. Printed on premium vinyl with our exclusive aquafinish for superior durability and UV protection.',
    imageUrl: '/assets/patterns/blue-horizon.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/horizon-slide1.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/horizon-slide2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/05/Horizon_Blue_europe_068.jpg'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish']
  },
  {
    id: 'blue-pebble',
    name: 'Blue Pebble',
    shortDescription: 'Classic blue pebble pattern reminiscent of natural shorelines.',
    longDescription: 'Blue Pebble brings the natural beauty of shoreline pebbles to your swimming pool. Each carefully designed pebble creates a soothing visual texture with brilliant blue tones. Perfect for creating a natural look with modern durability, enhanced with our exclusive aquafinish for UV and chemical protection.',
    imageUrl: '/assets/patterns/blue-pebble.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/08/IMG_7004-copy-2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/08/IMG_6942-copy-2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/bluebeachpebble-slide3.webp'
    ],
    collection: 'Pebble',
    features: ['Aquafinish']
  },
  {
    id: 'blue-slate',
    name: 'Blue Slate',
    shortDescription: 'Natural stone pattern with cool blue tones for a serene atmosphere.',
    longDescription: 'Blue Slate combines the elegance of natural slate with soothing blue tones. This sophisticated pattern presents the rustic texture of slate in refreshing aquatic colors, creating a serene atmosphere in any pool. The premium material is enhanced with our aquafinish technology for superior longevity and resistance to pool chemicals.',
    imageUrl: '/assets/patterns/blue-slate.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/blue-slate-slide1.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/blue-slate-slide2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/blue-slate-slide3.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'butterfly-effect',
    name: 'Butterfly Effect',
    shortDescription: 'Intricate mosaic pattern with shimmering finish and dynamic movement.',
    longDescription: 'The Butterfly Effect creates a stunning visual display with its intricate mosaic pattern and shimmering finish. The dynamic design brings movement and life to your pool, with light playing across the surface to create an ever-changing appearance. Enhanced with our aquashimmer technology for added sparkle and exceptional UV protection.',
    imageUrl: '/assets/patterns/butterfly-effect.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/butterfly-effect-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/butterfly-effect-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/butterfly-effect-slide3.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer']
  },
  {
    id: 'cambridge-blue-marble',
    name: 'Cambridge Blue Marble',
    shortDescription: 'Refined blue marble design for luxury pools with classic elegance.',
    longDescription: 'Cambridge Blue Marble offers a refined marble design in stunning blue tones. This pattern combines the classic elegance of marble with a contemporary color palette for a truly luxurious pool. The premium material includes our exclusive aquafinish protective coating for exceptional chemical resistance and industry-leading UV protection.',
    imageUrl: '/assets/patterns/cambridge-blue-marble.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/05/CGT-IMG_0368-copy-2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/cambridge-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/05/CGT-IMG_0366-copy-2.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'carnival',
    name: 'Carnival',
    shortDescription: 'Vibrant mosaic design full of color and life for a festive pool atmosphere.',
    longDescription: 'Carnival brings a celebration of color to your pool with its vibrant mosaic design. This lively pattern creates a festive atmosphere with its playful blend of bright colors and dynamic visual elements. The premium vinyl material is enhanced with our exclusive aquashimmer technology for added sparkle and exceptional durability.',
    imageUrl: '/assets/patterns/carnival.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/carnival-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/carnival-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/carnival-slide3.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer']
  },
  {
    id: 'carrara-white-marble',
    name: 'Carrara White Marble',
    shortDescription: 'Luxurious white marble pattern for elegant pools with timeless appeal.',
    longDescription: 'A timeless marble design for a luxurious look and feel to your pool. Printed on white liner material with our exclusive aquasense finish for full emboss texture. Engineered with added chemical resistance and industry leading UV protection. The Carrara White Marble pattern brings the elegance of Italian marble to your pool with its distinctive veining and pristine appearance.',
    imageUrl: '/assets/patterns/carrara-white-marble.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/07/Calacatta-Marble_33-copy.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/07/Calacatta-Marble_37-copy.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/07/Calacatta-Marble_38-copy.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/calacattamarble-slide2.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquasense Signature']
  },
  {
    id: 'catalina-sandstone',
    name: 'Catalina Sandstone',
    shortDescription: 'Warm sandstone texture creating a natural pool environment.',
    longDescription: 'Catalina Sandstone brings the warm, inviting texture of natural sandstone to your pool environment. The earthy tones and subtle variation create a serene, natural setting that is perfect for relaxed outdoor living. This premium pattern is printed on tan pool liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/patterns/catalina-sandstone.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sandstone-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sandstone-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/05/Sandstone-edited-copy.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish']
  },
  {
    id: 'caterbury-antigua',
    name: 'Canterbury Antigua',
    shortDescription: 'Elegant terrazzo design with intricate detailing and sophisticated appeal.',
    longDescription: 'Canterbury Antigua elevates the classic terrazzo look with sophisticated detailing and an elegant color palette. This pattern combines the timeless appeal of terrazzo with modern design sensibilities for a truly distinctive pool liner. Printed on premium vinyl material with our exclusive aquafinish for superior durability and UV protection.',
    imageUrl: '/assets/patterns/canterbury-antigua.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/canterbury-antigua-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/canterbury-antigua-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/canterbury-antigua-slide3.webp'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish']
  },
  {
    id: 'cirali-beach',
    name: 'Cirali Beach', 
    shortDescription: 'Natural stone with shimmering gold pebbles for a luxurious effect.',
    longDescription: 'Enhanced with aquashimmer gold ink from Poolside by CGT. Cirali Beach combines the appearance of soft natural stone with a galaxy of shimmering gold pebbles for a luxurious sparkling effect.',
    imageUrl: '/assets/patterns/cirali-beach.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/06/Cirali-Beach6.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/06/Cirali-Beach7.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/06/Cirali-Beach4.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/06/Cirali-Beach5.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/06/Cirali-Beach3.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/06/Cirali-Beach1.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/06/DSC06693-copy-3.jpg'
    ],
    collection: 'Natural Stone',
    features: ['Aquashimmer']
  },
  {
    id: 'clarkson-blue',
    name: 'Clarkson Blue',
    shortDescription: 'Beautiful artistic glass mosaic tile with soft highlights and sophisticated appeal.',
    longDescription: 'A beautiful artistic glass mosaic tile with soft highlights, perfect for gatherings around the pool. Paired with Poolside\'s Blue Beach Pebble floor on medium blue pool liner material enhanced with our exclusive aquafinish for chemical and UV protection. Clarkson Blue brings a touch of artistic sophistication to your poolscape.',
    imageUrl: '/assets/patterns/clarkson-blue.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/clarkson-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/clarkson-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/clarkson-slide3.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish']
  },
  {
    id: 'disco',
    name: 'Disco',
    shortDescription: 'Shimmering and dancing mosaic design with sparkling effect.',
    longDescription: 'Shimmering and dancing mosaic design. Printed on pale blue pool liner material enhanced with Poolside\'s exclusive aquashimmer feature for sparkling effect. Engineered with added chemical and UV protection.',
    imageUrl: '/assets/patterns/disco.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/09/IMG_7474-copy-2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/09/IMG_7489-copy-2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/09/IMG_7483-copy.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/disco-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/disco-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/disco-slide3.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/disco-slide5.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer']
  },
  {
    id: 'esagono',
    name: 'Esagono',
    shortDescription: 'Fiery blue-grey hexagonal mosaic with rustic motif.',
    longDescription: 'A fiery blue-grey hexagonal mosaic with a rustic motif creating beautiful blue waters. Printed on stone clay coloured pool liner material enhanced with Poolside\'s exclusive aquashimmer feature for sparkling effect. Engineered with added chemical and UV protection.',
    imageUrl: '/assets/patterns/esagono.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/02/Esagono2-Website-1.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/esagono-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/esagono-slide5.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/02/Esagono_Freeform_website-1.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/esagono-slide6.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquashimmer']
  },
  {
    id: 'gladstone',
    name: 'Gladstone',
    shortDescription: 'Elegant mosaic pattern with traditional appeal and refined details.',
    longDescription: 'Gladstone offers an elegant mosaic pattern with traditional appeal and refined detailing. This pattern brings a sense of timeless sophistication to your pool with its carefully balanced design elements and soothing color palette. The premium vinyl material includes our exclusive aquafinish protective coating for exceptional chemical resistance and UV protection.',
    imageUrl: '/assets/patterns/gladstone.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/gladstone-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/gladstone-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/gladstone-slide3.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish']
  },
  {
    id: 'hamlin-blue',
    name: 'Hamlin Blue',
    shortDescription: 'Modern stone border with interlinked blue and white motif.',
    longDescription: 'A modern stone border with an interlinked blue and white motif. Paired with CGT\'s Blue Beach Pebble floor on medium blue pool liner material with CGT\'s exclusive aquafinish for chemical and UV protection. Hamlin Blue creates a sophisticated contemporary look for modern poolscapes.',
    imageUrl: '/assets/patterns/hamlin-blue.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/hamlin-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/hamlin-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/04/HamlinBBP_3-scaled-e1681410853471.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/hamlin-slide4.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'lake-tahoe',
    name: 'Lake Tahoe',
    shortDescription: 'Vibrant blue design with teal waves inspired by sparkling clear waters.',
    longDescription: 'Inspired by sparkling clear waters, the Lake Tahoe all-over is the perfect center piece for every backyard. The vibrant blue Lake Tahoe liner features teal waves at the water line for a unique all-over style. Available with the Water Street border print, or as an allover print with the companion Lake Tahoe Wall.',
    imageUrl: '/assets/patterns/lake-tahoe.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-LakeTahoeWall-1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-LakeTahoeWall-2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-LakeTahoeWall-3.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-LakeTahoeWall-4.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-LakeTahoeWall-5.webp'
    ],
    collection: 'Water Scape',
    features: ['Aquafinish']
  },
  {
    id: 'maui',
    name: 'Maui',
    shortDescription: 'Tropical-inspired natural stone pattern with exotic appeal.',
    longDescription: 'Maui brings the exotic beauty of tropical stonework to your poolscape. This premium pattern captures the essence of island aesthetics with its natural stone appearance and vibrant undertones. The high-quality vinyl material is enhanced with our exclusive aquafinish for superior chemical resistance and UV protection.',
    imageUrl: '/assets/patterns/maui.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/maui-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/maui-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/maui-slide3.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'maui-grey',
    name: 'Maui Grey',
    shortDescription: 'Subtle grey stone pattern with island charm and sophisticated tone.',
    longDescription: 'Maui Grey offers a sophisticated take on tropical stonework with its subtle grey tones and refined appearance. This premium pattern combines island-inspired design with a contemporary color palette for a versatile poolscape that complements modern architecture. Enhanced with our exclusive aquafinish for exceptional durability and UV protection.',
    imageUrl: '/assets/patterns/maui-grey.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/maui-grey-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/maui-grey-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/maui-grey-slide3.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'ocean-midnight',
    name: 'Ocean Midnight',
    shortDescription: 'Detailed grey-blue pebble floor that enhances architectural beauty.',
    longDescription: 'A detailed grey-blue pebble floor to enhance the architectural beauty of your backyard. Ocean Midnight is available as an all-floor print or paired with Poolside\'s Harlo border print. Printed on white liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/patterns/ocean-midnight.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oceanmidnight-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oceanmidnight-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oceanmidnight-slide3.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oceanmidnight-slide5.webp'
    ],
    collection: 'Pebble',
    features: ['Aquafinish']
  },
  {
    id: 'oxford-blue-marble',
    name: 'Oxford Blue Marble',
    shortDescription: 'Deep blue marble pattern with classic appeal and sophisticated aesthetic.',
    longDescription: 'Oxford Blue Marble delivers a sophisticated aesthetic with its deep blue marble pattern and classic appeal. This premium design brings the elegance of fine marble to your poolscape with rich blue tones and subtle veining. Paired with our exclusive aquafinish for superior chemical resistance and industry-leading UV protection.',
    imageUrl: '/assets/patterns/oxford-blue-marble.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oxford-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oxford-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/oxford-slide3.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'raleigh-blue',
    name: 'Raleigh Blue',
    shortDescription: 'Bold serpentine mosaic border in cool blue-teal stone tiles.',
    longDescription: 'A bold serpentine mosaic border in cool blue-teal stone mosaic tiles. Paired with CGT\'s Blue Beach Pebble floor on medium blue pool liner material with CGT\'s exclusive aquafinish for chemical and UV protection. Raleigh Blue brings a Mediterranean-inspired elegance to any poolscape.',
    imageUrl: '/assets/patterns/raleigh-blue.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/08/Blue-Raleigh6.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/08/Blue-Raleigh4.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/08/Blue-Raleigh5.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/08/Blue-Raleigh3.jpg'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish']
  },
  {
    id: 'raleigh-grey',
    name: 'Raleigh Grey',
    shortDescription: 'Sophisticated grey pebble design with modern aesthetic and versatile appeal.',
    longDescription: 'Raleigh Grey offers a sophisticated pebble design with a versatile grey color palette that complements modern architectural styles. This premium pattern brings a contemporary aesthetic to your pool with its refined appearance and subtle natural texture. Enhanced with our exclusive aquafinish for exceptional durability and UV protection.',
    imageUrl: '/assets/patterns/raleigh-grey.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/raleigh-grey-slide1.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/raleigh-grey-slide2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/raleigh-grey-slide3.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish']
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    shortDescription: 'Warm pebble floor that enhances architectural beauty with natural tones.',
    longDescription: 'A warm pebble floor to enhance the architectural beauty of your backyard. Printed on tan pool liner material enhanced with our exclusive aquafinish for chemical and UV protection. Sandstone creates a natural, inviting atmosphere with its earthy tones and organic texture.',
    imageUrl: '/assets/patterns/sandstone.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sandstone-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sandstone-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2023/05/Sandstone-edited-copy.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sandstone-slide4.webp'
    ],
    collection: 'Pebble',
    features: ['Aquafinish']
  },
  {
    id: 'silver-antiqua',
    name: 'Silver Antiqua',
    shortDescription: 'Serene natural quartz design in a blend of grey tones for modern pools.',
    longDescription: 'The sparkling Silver Antigua is a serene natural quartz design printed in a blend of grey tones perfect for modern architectural styles. Available as an all-floor print or paired with Poolside\'s Silver Horizon border design. Printed on silver grey pool liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/patterns/silver-antigua.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silverantigua-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silverantigua-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silverantigua-slide3.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silverantigua-slide4.webp'
    ],
    collection: 'Terrazzo',
    features: ['Aquafinish']
  },
  {
    id: 'silver-horizon',
    name: 'Silver Horizon',
    shortDescription: 'Stylish glass mosaic with detailed gray tones for a sophisticated look.',
    longDescription: 'A stylish glass mosaic with unmatched detail printed in sophisticated grey tones. Paired with Poolside\'s Silver Antigua floor on silver grey pool liner material enhanced with our exclusive aquafinish for chemical and UV protection.',
    imageUrl: '/assets/patterns/silver-horizon.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silverhorizon-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silverhorizon-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silverhorizon-slide3.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish']
  },
  {
    id: 'silver-lake',
    name: 'Silver Lake',
    shortDescription: 'Shimmering silver mosaic design for modern pools with contemporary appeal.',
    longDescription: 'Silver Lake offers a contemporary mosaic design with shimmering silver tones that bring a sophisticated modern appeal to any pool. The premium vinyl material features a subtle metallic finish that catches the light for an ever-changing appearance. Enhanced with our exclusive aquafinish for superior chemical resistance and UV protection.',
    imageUrl: '/assets/patterns/silver-lake.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silver-lake-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silver-lake-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/silver-lake-slide3.webp'
    ],
    collection: 'Mosaic',
    features: ['Aquafinish']
  },
  {
    id: 'sonata',
    name: 'Sonata',
    shortDescription: 'Rhythmic water pattern creating visual movement and dynamic flow.',
    longDescription: 'Sonata creates a sense of rhythm and movement with its flowing water pattern design. This premium liner brings dynamic visual interest to your pool with its carefully composed waves and ripples. The high-quality vinyl material includes our exclusive aquafinish for exceptional chemical resistance and UV protection.',
    imageUrl: '/assets/patterns/sonata.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sonata-slide1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sonata-slide2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/sonata-slide3.webp'
    ],
    collection: 'Water Scape',
    features: ['Aquafinish']
  },
  {
    id: 'water-street',
    name: 'Water Street',
    shortDescription: 'Detailed stone border with sculpted blue tiles for a balanced look.',
    longDescription: 'Style and tradition meet at Water Street. A detailed stone border embedded with sculpted blue tiles for a balanced border print and endless styling options. Water Street is printed on medium blue base film and complemented by the vibrant blue Lake Tahoe floor design.',
    imageUrl: '/assets/patterns/water-street.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-WaterStreet-1.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-WaterStreet-2.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-WaterStreet-3.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-WaterStreet-4.webp',
      'https://www.poolsidebycgt.com/wp-content/uploads/2024/01/Slide-Aquafinish-WaterStreet-5.webp'
    ],
    collection: 'Natural Stone',
    features: ['Aquafinish']
  },
  {
    id: 'white-pebble',
    name: 'White Pebble',
    shortDescription: 'Clean and bright pebble pattern for a fresh pool appearance.',
    longDescription: 'White Pebble delivers a clean, bright appearance with its natural pebble pattern and fresh aesthetic. This premium liner creates a light, airy atmosphere that makes your pool look larger and more inviting. Printed on white liner material and enhanced with our exclusive aquafinish for superior chemical resistance and UV protection.',
    imageUrl: '/assets/patterns/white-pebble.jpg',
    galleryImages: [
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/beachpebble-slide1.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/beachpebble-slide2.jpg',
      'https://www.poolsidebycgt.com/wp-content/uploads/2022/01/WhiteBeachPebble_011-copy-2-scaled.jpg'
    ],
    collection: 'Pebble',
    features: ['Aquafinish']
  }
];

export const collections = ['All', 'Terrazzo', 'Mosaic', 'Pebble', 'Water Scape', 'Natural Stone'];

export const features = ['Aquafinish', 'Aquasense', 'Aquashimmer', 'Aquashift', 'Aquasense Signature', 'HD'];

// Helper function to filter pool liners by collection
export const getPoolLinersByCollection = (collection: string): PoolLiner[] => {
  if (collection === 'All') {
    return poolLiners;
  }
  return poolLiners.filter(liner => liner.collection === collection);
};

// Helper function to filter pool liners by feature
export const getPoolLinersByFeature = (feature: string): PoolLiner[] => {
  return poolLiners.filter(liner => liner.features.includes(feature));
};

// Helper function to get a pool liner by ID
export const getPoolLinerById = (id: string): PoolLiner | undefined => {
  return poolLiners.find(liner => liner.id === id);
};

// Helper function to get related pool liners (same collection)
export const getRelatedPoolLiners = (liner: PoolLiner, limit: number = 4): PoolLiner[] => {
  return poolLiners
    .filter(item => item.collection === liner.collection && item.id !== liner.id)
    .slice(0, limit);
};