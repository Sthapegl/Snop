import { Product, Category } from '../types';
import JewelryIcon from '../components/icons/JewelryIcon';
import FashionIcon from '../components/icons/FashionIcon';
import LightingIcon from '../components/icons/LightingIcon';
import HomeIcon from '../components/icons/HomeIcon';
import ElectronicsIcon from '../components/icons/ElectronicsIcon';
import BeautyIcon from '../components/icons/BeautyIcon';
import SportsIcon from '../components/icons/SportsIcon';
import KitchenIcon from '../components/icons/KitchenIcon';
import PetsIcon from '../components/icons/PetsIcon';
import AutomotiveIcon from '../components/icons/AutomotiveIcon';
import ToolsIcon from '../components/icons/ToolsIcon';
import ToysIcon from '../components/icons/ToysIcon';
import SeasonalIcon from '../components/icons/SeasonalIcon';
import OfficeIcon from '../components/icons/OfficeIcon';


export const categories: Category[] = [
  { id: 'electronics', name: 'Electronics', icon: ElectronicsIcon },
  { id: 'fashion', name: 'Fashion', icon: FashionIcon },
  { id: 'home', name: 'Home & Living', icon: HomeIcon },
  { id: 'beauty', name: 'Beauty', icon: BeautyIcon },
  { id: 'jewelry', name: 'Jewelry & Watches', icon: JewelryIcon },
  { id: 'kitchen', name: 'Kitchen & Dining', icon: KitchenIcon },
  { id: 'sports', name: 'Sports & Fitness', icon: SportsIcon },
  { id: 'pets', name: 'Pet Supplies', icon: PetsIcon },
  { id: 'toys', name: 'Toys & Games', icon: ToysIcon },
  { id: 'automotive', name: 'Automotive', icon: AutomotiveIcon },
  { id: 'tools', name: 'Tools & DIY', icon: ToolsIcon },
  { id: 'office', name: 'Office Supplies', icon: OfficeIcon },
  { id: 'seasonal', name: 'Seasonal Deals', icon: SeasonalIcon },
  { id: 'lighting', name: 'Lighting', icon: LightingIcon },
];

export const products: Product[] = [
  // Existing Jewelry
  {
    id: 1,
    name: 'Elegant Gold Hoop Earrings',
    price: 29.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviewCount: 1254,
    imageUrl: 'https://source.unsplash.com/400x400/?gold,hoop,earrings',
    images: [
        'https://source.unsplash.com/800x800/?gold,hoop,earrings',
        'https://source.unsplash.com/800x800/?earrings,model',
        'https://source.unsplash.com/800x800/?jewelry,lifestyle',
    ],
    category: 'jewelry',
    isHot: true,
    dealEnds: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'Stunning 18k gold plated hoop earrings, perfect for any occasion. Lightweight and hypoallergenic.'
  },
  {
    id: 5,
    name: 'Minimalist Silver Watch',
    price: 120.50,
    originalPrice: 250.00,
    rating: 4.9,
    reviewCount: 1800,
    imageUrl: 'https://source.unsplash.com/400x400/?silver,watch',
    images: [
        'https://source.unsplash.com/800x800/?silver,watch,wrist',
        'https://source.unsplash.com/800x800/?minimalist,watch',
        'https://source.unsplash.com/800x800/?watch,product',
    ],
    category: 'jewelry',
    dealEnds: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'A sleek and modern timepiece with a stainless steel mesh strap. Water-resistant and built to last.'
  },
  // Existing Fashion
   {
    id: 2,
    name: 'Modern Floral Print Dress',
    price: 45.00,
    originalPrice: 75.00,
    rating: 4.5,
    reviewCount: 890,
    imageUrl: 'https://source.unsplash.com/400x400/?floral,dress',
    images: [
        'https://source.unsplash.com/800x800/?floral,dress,model',
        'https://source.unsplash.com/800x800/?summer,dress',
        'https://source.unsplash.com/800x800/?fashion,dress',
    ],
    category: 'fashion',
    isNew: true,
    description: 'A beautiful and comfortable floral dress, ideal for summer outings. Made from breathable cotton.'
  },
  {
    id: 6,
    name: 'Cozy Knit Cardigan',
    price: 55.00,
    rating: 4.6,
    reviewCount: 720,
    imageUrl: 'https://source.unsplash.com/400x400/?knit,cardigan',
    images: [
        'https://source.unsplash.com/800x800/?knit,cardigan,model',
        'https://source.unsplash.com/800x800/?cozy,cardigan',
        'https://source.unsplash.com/800x800/?autumn,fashion',
    ],
    category: 'fashion',
    isNew: true,
    description: 'Stay warm and stylish with this oversized knit cardigan. Perfect for layering in cooler weather.'
  },
  // Existing Lighting
  {
    id: 3,
    name: 'Industrial Style Pendant Light',
    price: 89.90,
    originalPrice: 150.00,
    rating: 4.9,
    reviewCount: 2103,
    imageUrl: 'https://source.unsplash.com/400x400/?pendant,light,interior',
    images: [
        'https://source.unsplash.com/800x800/?pendant,light,interior',
        'https://source.unsplash.com/800x800/?industrial,lighting',
        'https://source.unsplash.com/800x800/?kitchen,light',
    ],
    category: 'lighting',
    isHot: true,
    description: 'Add a touch of vintage charm to your home with this industrial-style pendant light. Bulb not included.'
  },
  {
    id: 7,
    name: 'Smart LED Desk Lamp',
    price: 39.99,
    originalPrice: 60.00,
    rating: 4.8,
    reviewCount: 950,
    imageUrl: 'https://source.unsplash.com/400x400/?desk,lamp',
    images: [
        'https://source.unsplash.com/800x800/?desk,lamp,office',
        'https://source.unsplash.com/800x800/?led,lamp',
        'https://source.unsplash.com/800x800/?modern,desk',
    ],
    category: 'lighting',
    isHot: true,
    description: 'A modern desk lamp with adjustable brightness and color temperature. Includes a USB charging port.'
  },
  // Existing Home
  {
    id: 4,
    name: 'Plush Velvet Throw Pillow',
    price: 19.99,
    rating: 4.7,
    reviewCount: 560,
    imageUrl: 'https://source.unsplash.com/400x400/?velvet,pillow',
    images: [
        'https://source.unsplash.com/800x800/?velvet,pillow,sofa',
        'https://source.unsplash.com/800x800/?plush,pillow',
        'https://source.unsplash.com/800x800/?cushion,decor',
    ],
    category: 'home',
    description: 'Incredibly soft and luxurious, this velvet throw pillow adds comfort and style to any sofa or bed.'
  },
  {
    id: 8,
    name: 'Woven Storage Basket Set',
    price: 34.50,
    rating: 4.9,
    reviewCount: 1100,
    imageUrl: 'https://source.unsplash.com/400x400/?woven,basket',
    images: [
        'https://source.unsplash.com/800x800/?storage,basket,home',
        'https://source.unsplash.com/800x800/?basket,decor',
        'https://source.unsplash.com/800x800/?home,organization',
    ],
    category: 'home',
    description: 'Set of three beautiful and functional woven baskets, perfect for organizing toys, blankets, or magazines.'
  },
  
  // NEW PRODUCTS START HERE
  ...[
    { name: 'Wireless Earbuds', kw: 'wireless,earbuds', price: 39.99, ogPrice: 79.99 },
    { name: 'Smartwatch Series 8', kw: 'smartwatch', price: 189.00, ogPrice: 299.00 },
    { name: 'Portable Bluetooth Speaker', kw: 'bluetooth,speaker', price: 49.50, ogPrice: 89.00 },
    { name: '100W GaN Fast Charger', kw: 'gan,charger', price: 35.00, ogPrice: 50.00 },
    { name: '4K Streaming Dongle', kw: 'streaming,stick', price: 29.99, ogPrice: 49.99 },
    { name: 'Ergonomic Wireless Mouse', kw: 'wireless,mouse', price: 24.99, ogPrice: 40.00 },
    { name: 'Mechanical Keyboard', kw: 'mechanical,keyboard', price: 79.90, ogPrice: 120.00 },
    { name: 'HD Webcam', kw: 'webcam', price: 45.00, ogPrice: 65.00 },
    { name: '20,000mAh Power Bank', kw: 'power,bank', price: 32.00, ogPrice: 55.00 },
    { name: 'Adjustable Laptop Stand', kw: 'laptop,stand', price: 28.50, ogPrice: 45.00 },
    { name: 'USB-C Hub 8-in-1', kw: 'usb-c,hub', price: 42.99, ogPrice: 69.99 },
    { name: 'Smart LED Light Strip', kw: 'led,light,strip', price: 22.99, ogPrice: 35.99 },
  ].map((p, i) => ({
    id: 100 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.5 + Math.random() * 0.4).toFixed(1)),
    reviewCount: Math.floor(200 + Math.random() * 2000),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${100+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},product&sig=${100+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},lifestyle&sig=${100+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},tech&sig=${100+i+3000}`
    ],
    category: 'electronics',
    description: 'High-quality electronic accessory to enhance your digital life.',
    ...(i < 2 && { isHot: true, dealEnds: new Date(Date.now() + (i + 1) * 12 * 60 * 60 * 1000).toISOString() }),
  })),

  ...[
    { name: 'Vitamin C Face Serum', kw: 'face,serum', price: 18.99, ogPrice: 35.00 },
    { name: 'Hydrating Hyaluronic Acid Moisturizer', kw: 'moisturizer,cream', price: 22.50, ogPrice: 40.00 },
    { name: 'Electric Facial Cleansing Brush', kw: 'facial,brush', price: 29.99, ogPrice: 55.00 },
    { name: 'Professional Makeup Brush Set', kw: 'makeup,brushes', price: 15.99, ogPrice: 30.00 },
    { name: 'UV LED Nail Lamp', kw: 'uv,nail,lamp', price: 25.00, ogPrice: 45.00 },
    { name: 'Anti-Aging Retinol Cream', kw: 'retinol,cream', price: 28.00, ogPrice: 50.00 },
    { name: 'Matte Liquid Lipstick Set', kw: 'liquid,lipstick', price: 19.99, ogPrice: 38.00 },
    { name: 'Collagen Under-Eye Patches', kw: 'eye,patches,skincare', price: 12.50, ogPrice: 25.00 },
    { name: 'Hair Dryer with Diffuser', kw: 'hair,dryer', price: 45.99, ogPrice: 75.00 },
    { name: 'Waterproof Gel Eyeliner', kw: 'eyeliner,makeup', price: 8.99, ogPrice: 15.00 },
  ].map((p, i) => ({
    id: 200 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.4 + Math.random() * 0.5).toFixed(1)),
    reviewCount: Math.floor(300 + Math.random() * 1500),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${200+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},product&sig=${200+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},beauty&sig=${200+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},skincare&sig=${200+i+3000}`
    ],
    category: 'beauty',
    description: 'Essential beauty product for your daily self-care routine.',
    ...(i === 1 && { isNew: true }),
  })),

  ...[
      { name: '15-Piece Kitchen Knife Set', kw: 'knife,set', price: 49.99, ogPrice: 99.99 },
      { name: 'Electric Gooseneck Kettle', kw: 'electric,kettle', price: 38.00, ogPrice: 65.00 },
      { name: 'Non-Stick Cookware Set', kw: 'cookware,set', price: 89.90, ogPrice: 150.00 },
      { name: 'Digital Air Fryer Oven', kw: 'air,fryer', price: 99.00, ogPrice: 149.00 },
      { name: 'High-Speed Blender', kw: 'blender,kitchen', price: 119.99, ogPrice: 180.00 },
      { name: 'Acacia Wood Cutting Board', kw: 'cutting,board', price: 24.50, ogPrice: 40.00 },
      { name: 'Glass Food Storage Containers', kw: 'food,storage,containers', price: 32.99, ogPrice: 55.00 },
      { name: 'Automatic Milk Frother', kw: 'milk,frother', price: 35.00, ogPrice: 50.00 },
      { name: 'Silicone Utensil Set', kw: 'kitchen,utensils', price: 22.99, ogPrice: 35.00 },
      { name: 'Spice Rack Organizer', kw: 'spice,rack', price: 19.99, ogPrice: 30.00 },
  ].map((p, i) => ({
      id: 300 + i,
      name: p.name,
      price: p.price,
      originalPrice: p.ogPrice,
      rating: parseFloat((4.6 + Math.random() * 0.3).toFixed(1)),
      reviewCount: Math.floor(500 + Math.random() * 2500),
      imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${300+i}`,
      images: [
        `https://source.unsplash.com/800x800/?${p.kw},kitchen&sig=${300+i+1000}`,
        `https://source.unsplash.com/800x800/?${p.kw},food&sig=${300+i+2000}`,
        `https://source.unsplash.com/800x800/?${p.kw},cooking&sig=${300+i+3000}`
      ],
      category: 'kitchen',
      description: 'Upgrade your kitchen with these high-quality tools and appliances.',
      ...(i === 3 && { isHot: true }),
  })),

  ...[
    { name: 'Adjustable Dumbbell Set', kw: 'adjustable,dumbbell', price: 79.99, ogPrice: 150.00 },
    { name: 'High-Density Foam Roller', kw: 'foam,roller', price: 18.50, ogPrice: 30.00 },
    { name: 'Resistance Loop Bands (Set of 5)', kw: 'resistance,bands', price: 12.99, ogPrice: 25.00 },
    { name: 'Smart Fitness Tracker', kw: 'fitness,tracker', price: 34.90, ogPrice: 60.00 },
    { name: 'Non-Slip Yoga Mat', kw: 'yoga,mat', price: 25.00, ogPrice: 40.00 },
    { name: 'Portable Massage Gun', kw: 'massage,gun', price: 69.00, ogPrice: 120.00 },
    { name: 'Insulated Stainless Steel Water Bottle', kw: 'water,bottle', price: 19.99, ogPrice: 32.00 },
    { name: 'Jump Rope with Counter', kw: 'jump,rope', price: 15.50, ogPrice: 28.00 },
    { name: 'Breathable Running Shoes', kw: 'running,shoes', price: 65.00, ogPrice: 110.00 },
    { name: 'Compression Socks for Recovery', kw: 'compression,socks', price: 16.99, ogPrice: 30.00 },
  ].map((p, i) => ({
    id: 400 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.5 + Math.random() * 0.4).toFixed(1)),
    reviewCount: Math.floor(400 + Math.random() * 1800),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${400+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},fitness&sig=${400+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},gym&sig=${400+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},workout&sig=${400+i+3000}`
    ],
    category: 'sports',
    description: 'Achieve your fitness goals with our top-rated sports equipment.',
  })),

  ...[
    { name: 'Orthopedic Memory Foam Dog Bed', kw: 'dog,bed', price: 45.00, ogPrice: 80.00 },
    { name: 'Automatic Pet Feeder with Timer', kw: 'automatic,pet,feeder', price: 55.99, ogPrice: 90.00 },
    { name: 'Interactive Cat Toy Ball', kw: 'cat,toy', price: 14.99, ogPrice: 25.00 },
    { name: 'Pet Grooming Glove', kw: 'pet,grooming,glove', price: 9.99, ogPrice: 18.00 },
    { name: 'Stainless Steel Pet Fountain', kw: 'pet,water,fountain', price: 28.50, ogPrice: 45.00 },
    { name: 'Heavy-Duty Retractable Dog Leash', kw: 'dog,leash', price: 18.99, ogPrice: 30.00 },
    { name: 'Cozy Cat Cave Bed', kw: 'cat,bed', price: 22.00, ogPrice: 35.00 },
    { name: 'Portable Pet Water Bottle', kw: 'pet,water,bottle', price: 13.99, ogPrice: 22.00 },
  ].map((p, i) => ({
    id: 500 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.7 + Math.random() * 0.2).toFixed(1)),
    reviewCount: Math.floor(600 + Math.random() * 3000),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${500+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},pet&sig=${500+i+1000}`,
      `https://source.unsplash.com/800x800/?dog,cat,cute&sig=${500+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},animal&sig=${500+i+3000}`
    ],
    category: 'pets',
    description: 'Everything you need to keep your furry friends happy and healthy.',
    ...(i === 1 && { isHot: true, dealEnds: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() }),
  })),

  ...[
    { name: '3D Wooden Puzzle Globe', kw: 'wooden,puzzle,globe', price: 29.99, ogPrice: 50.00 },
    { name: 'Remote Control Stunt Car', kw: 'rc,stunt,car', price: 38.90, ogPrice: 60.00 },
    { name: 'Magnetic Building Blocks Set', kw: 'magnetic,blocks,toy', price: 42.00, ogPrice: 70.00 },
    { name: 'Strategy Board Game: Catan', kw: 'catan,board,game', price: 45.00, ogPrice: 55.00 },
    { name: '1000-Piece Jigsaw Puzzle', kw: 'jigsaw,puzzle', price: 19.99, ogPrice: 30.00 },
    { name: 'Plush Stuffed Animal Avocado', kw: 'avocado,plush,toy', price: 22.50, ogPrice: 35.00 },
    { name: 'DIY Slime Making Kit', kw: 'slime,kit', price: 16.99, ogPrice: 28.00 },
    { name: 'Mini Drone for Kids', kw: 'mini,drone', price: 49.99, ogPrice: 80.00 },
    { name: 'Water Rocket Kit', kw: 'water,rocket,toy', price: 24.99, ogPrice: 40.00 },
  ].map((p, i) => ({
    id: 600 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.6 + Math.random() * 0.3).toFixed(1)),
    reviewCount: Math.floor(350 + Math.random() * 1200),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${600+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},toy&sig=${600+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},kids&sig=${600+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},game&sig=${600+i+3000}`
    ],
    category: 'toys',
    description: 'Fun and engaging toys and games for all ages.',
  })),

  ...[
    { name: 'Wireless Car Charger Mount', kw: 'car,phone,mount', price: 26.99, ogPrice: 45.00 },
    { name: 'Portable Tire Inflator Air Compressor', kw: 'tire,inflator', price: 39.99, ogPrice: 65.00 },
    { name: 'High-Pressure Car Wash Foam Gun', kw: 'car,wash,foam', price: 22.50, ogPrice: 38.00 },
    { name: 'Car Trunk Organizer', kw: 'car,trunk,organizer', price: 18.99, ogPrice: 30.00 },
    { name: 'Magnetic Dashboard Phone Holder', kw: 'car,phone,holder', price: 12.99, ogPrice: 22.00 },
    { name: 'Car Vacuum Cleaner High Power', kw: 'car,vacuum', price: 32.00, ogPrice: 55.00 },
    { name: 'Interior LED Atmosphere Lights', kw: 'car,led,lights', price: 19.99, ogPrice: 35.00 },
    { name: 'Blind Spot Mirrors (2-Pack)', kw: 'blind,spot,mirror', price: 8.99, ogPrice: 15.00 },
  ].map((p, i) => ({
    id: 700 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.4 + Math.random() * 0.5).toFixed(1)),
    reviewCount: Math.floor(700 + Math.random() * 2200),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${700+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},car&sig=${700+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},auto&sig=${700+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},vehicle&sig=${700+i+3000}`
    ],
    category: 'automotive',
    description: 'Essential accessories to keep your vehicle clean, safe, and organized.',
  })),

  ...[
    { name: '20V Cordless Drill Driver Kit', kw: 'cordless,drill', price: 69.99, ogPrice: 120.00 },
    { name: '145-Piece Home Repair Tool Set', kw: 'tool,set', price: 48.90, ogPrice: 80.00 },
    { name: 'Digital Laser Measure 165ft', kw: 'laser,measure', price: 35.00, ogPrice: 60.00 },
    { name: 'Magnetic Wristband for Screws', kw: 'magnetic,wristband,tools', price: 11.99, ogPrice: 20.00 },
    { name: 'Precision Screwdriver Set', kw: 'screwdriver,set', price: 21.99, ogPrice: 35.00 },
    { name: 'Self-Leveling Laser Level', kw: 'laser,level', price: 45.00, ogPrice: 75.00 },
    { name: 'Heat Gun with Nozzles', kw: 'heat,gun', price: 25.99, ogPrice: 40.00 },
    { name: 'Utility Knife Set', kw: 'utility,knife', price: 14.99, ogPrice: 25.00 },
  ].map((p, i) => ({
    id: 800 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.7 + Math.random() * 0.2).toFixed(1)),
    reviewCount: Math.floor(800 + Math.random() * 1900),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${800+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},tool&sig=${800+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},diy&sig=${800+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},hardware&sig=${800+i+3000}`
    ],
    category: 'tools',
    description: 'High-quality tools for all your home improvement and DIY projects.',
    ...(i === 0 && { isHot: true }),
  })),

  ...[
    { name: 'Ergonomic Mesh Office Chair', kw: 'office,chair', price: 129.99, ogPrice: 220.00 },
    { name: 'Under Desk Cable Management Tray', kw: 'cable,management', price: 19.99, ogPrice: 35.00 },
    { name: 'Gel Pen Set (24 Colors)', kw: 'gel,pens', price: 15.50, ogPrice: 28.00 },
    { name: 'Desktop Whiteboard with Stand', kw: 'desktop,whiteboard', price: 24.99, ogPrice: 40.00 },
    { name: 'High-Speed Paper Shredder', kw: 'paper,shredder', price: 49.90, ogPrice: 80.00 },
    { name: 'Adjustable Footrest', kw: 'office,footrest', price: 28.00, ogPrice: 45.00 },
    { name: 'Acrylic Desk Organizer Set', kw: 'desk,organizer', price: 22.99, ogPrice: 38.00 },
    { name: 'Daily Planner Notebook', kw: 'planner,notebook', price: 14.99, ogPrice: 25.00 },
  ].map((p, i) => ({
    id: 900 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.5 + Math.random() * 0.4).toFixed(1)),
    reviewCount: Math.floor(450 + Math.random() * 1300),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${900+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},office&sig=${900+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},desk&sig=${900+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},work&sig=${900+i+3000}`
    ],
    category: 'office',
    description: 'Boost your productivity with our smart office solutions.',
  })),

  ...[
    { name: 'Plush Lined Winter Beanie', kw: 'winter,beanie', price: 14.99, ogPrice: 25.00 },
    { name: 'Waterproof Ski Gloves', kw: 'ski,gloves', price: 24.99, ogPrice: 45.00 },
    { name: 'Cozy Fleece Throw Blanket', kw: 'fleece,blanket', price: 28.00, ogPrice: 50.00 },
    { name: 'Outdoor String Lights', kw: 'string,lights', price: 35.90, ogPrice: 60.00 },
    { name: 'Inflatable Snow Tube', kw: 'snow,tube', price: 29.99, ogPrice: 50.00 },
    { name: 'Portable Patio Heater', kw: 'patio,heater', price: 119.00, ogPrice: 180.00 },
    { name: 'Christmas Tree Ornament Set', kw: 'christmas,ornament', price: 22.50, ogPrice: 40.00 },
    { name: 'Holiday-Themed Cookie Cutters', kw: 'cookie,cutters,holiday', price: 9.99, ogPrice: 18.00 },
  ].map((p, i) => ({
    id: 1000 + i,
    name: p.name,
    price: p.price,
    originalPrice: p.ogPrice,
    rating: parseFloat((4.6 + Math.random() * 0.3).toFixed(1)),
    reviewCount: Math.floor(550 + Math.random() * 1500),
    imageUrl: `https://source.unsplash.com/400x400/?${p.kw}&sig=${1000+i}`,
    images: [
      `https://source.unsplash.com/800x800/?${p.kw},seasonal&sig=${1000+i+1000}`,
      `https://source.unsplash.com/800x800/?${p.kw},holiday&sig=${1000+i+2000}`,
      `https://source.unsplash.com/800x800/?${p.kw},winter&sig=${1000+i+3000}`
    ],
    category: 'seasonal',
    description: 'Get ready for the season with these amazing deals!',
    isHot: true,
    dealEnds: new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).toISOString(),
  })),
].map(p => ({ ...p, rating: parseFloat(p.rating.toFixed(1)) }));


export const heroSlides = [
    {
      id: 1,
      image: 'https://source.unsplash.com/1200x600/?shopping,sale,style',
      title: 'Flash Sale Frenzy',
      subtitle: 'Up to 70% Off Everything!',
      buttonText: 'Shop Now',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/1200x600/?fashion,model,stylish',
      title: 'New Arrivals Daily',
      subtitle: 'Discover Your New Favorite Style',
      buttonText: 'Explore',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/1200x600/?shipping,box,delivery',
      title: 'Free Shipping On All Orders',
      subtitle: 'Get It Delivered, On Us!',
      buttonText: 'Learn More',
    },
];

export const flashSaleProducts = products.filter(p => p.dealEnds).slice(0, 10);
