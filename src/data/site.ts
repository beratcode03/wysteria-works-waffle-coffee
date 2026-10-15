export const brandLogo = '/wysteria-clear.png';

export const brandMark = '/mark.png';

export const siteConfig = {

  name: 'Wysteria Works',

  tagline: 'Waffle keyfi, iyi kahveyle tamamlanır.',

  address: 'Çark Caddesi No. 54, Adapazarı, Sakarya',

  addressShort: 'Çark Caddesi, Adapazarı, Sakarya',

  phone: '+90 554 054 54',

  phoneDisplay: '+90 554 054 54',

  email: 'merhaba@wysteriaworks.com',

  instagram: '@wysteriaworks',

  instagramUrl: 'https://www.instagram.com/wysteriaworks',

  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Çark+Caddesi+No.+54+Adapazarı+Sakarya',

  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Çark+Caddesi+No.+54+Adapazarı+Sakarya',

  mapEmbedUrl: 'https://www.google.com/maps?q=Çark+Caddesi+No.+54+Adapazarı+Sakarya&output=embed',

  hours: [

    { day: 'Pazartesi – Cuma', time: '08:00 – 22:00' },

    { day: 'Cumartesi', time: '09:00 – 23:00' },

    { day: 'Pazar', time: '09:00 – 21:00' },

  ],

  menuUrl: '/menu',

  qrUrl: '/menu',

};

export type Product = {

  id: string;

  name: string;

  category: string;

  description: string;

  price: number;

  image: string;

  alt: string;

  featured?: boolean;

};

export const products: Product[] = [

  {

    id: 'flat-white',

    name: 'Flat White',

    category: 'Kahveler',

    description: 'Yoğun espresso ve ipeksi mikroköpük, kadifemsi bitiriş.',

    price: 95,

    image: '/assets/site/img-01.jpg',

    alt: 'Flat white kahve',

    featured: true,

  },

  {

    id: 'v60',

    name: 'V60 Filtre Kahve',

    category: 'Kahveler',

    description: 'Tek köken Etiyopya, pour-over demleme; çiçeksi asidite.',

    price: 110,

    image: '/assets/site/img-02.jpg',

    alt: 'V60 pour-over kahve',

    featured: true,

  },

  {

    id: 'cappuccino',

    name: 'Cappuccino',

    category: 'Kahveler',

    description: 'Klasik İtalyan oranı; zengin espresso, yoğun köpük.',

    price: 80,

    image: '/assets/site/img-03.jpg',

    alt: 'Cappuccino',

  },

  {

    id: 'espresso',

    name: 'Espresso',

    category: 'Kahveler',

    description: 'Tek shot; yoğun, koyu, kısa ve kremalı.',

    price: 55,

    image: '/assets/site/img-04.jpg',

    alt: 'Espresso çekimi',

  },

  {

    id: 'latte',

    name: 'Sütlü Latte',

    category: 'Kahveler',

    description: 'Espresso, buharla ısıtılmış süt, ince köpük katmanı.',

    price: 90,

    image: '/assets/site/img-05.jpg',

    alt: 'Sütlü latte',

  },

  {

    id: 'americano',

    name: 'Americano',

    category: 'Kahveler',

    description: 'Espresso üzerine sıcak su; uzun, yumuşak içim.',

    price: 75,

    image: '/assets/site/img-06.jpg',

    alt: 'Americano kahve',

  },

  {

    id: 'cold-brew',

    name: 'Cold Brew',

    category: 'Soğuk İçecekler',

    description: '12 saat soğuk demleme; pürüzsüz, az asitli.',

    price: 100,

    image: '/assets/site/img-07.jpg',

    alt: 'Cold brew kahve',

  },

  {

    id: 'iced-latte',

    name: 'Buzlu Latte',

    category: 'Soğuk İçecekler',

    description: 'Espresso, soğuk süt ve buz; hafif ve ferahlatıcı.',

    price: 90,

    image: '/assets/site/img-08.jpg',

    alt: 'Buzlu latte',

  },

  {

    id: 'iced-caramel',

    name: 'Karamelli Buzlu Kahve',

    category: 'Soğuk İçecekler',

    description: 'Espresso, karamel şerbeti, süt ve buz.',

    price: 115,

    image: '/assets/site/img-09.jpg',

    alt: 'Karamelli buzlu kahve',

  },

  {

    id: 'iced-mocha',

    name: 'Buzlu Mocha',

    category: 'Soğuk İçecekler',

    description: 'Espresso, çikolata sosu, soğuk süt ve buz.',

    price: 110,

    image: '/assets/site/img-10.jpg',

    alt: 'Buzlu mocha',

  },

  {

    id: 'turkish-tea',

    name: 'Türk Çayı',

    category: 'Sıcak İçecekler',

    description: 'Geleneksel ince belli bardakta, taze demlenmiş Rize çayı.',

    price: 35,

    image: '/assets/site/img-11.jpg',

    alt: 'Türk çayı ince belli bardakta',

  },

  {

    id: 'salep',

    name: 'Salep',

    category: 'Sıcak İçecekler',

    description: 'Geleneksel salep, üzeri tarçın tozu; sıcak ve kremsi.',

    price: 65,

    image: '/assets/site/img-12.jpg',

    alt: 'Salep içeceği',

    featured: true,

  },

  {

    id: 'hot-chocolate',

    name: 'Sıcak Çikolata',

    category: 'Sıcak İçecekler',

    description: 'Eriyen bitter çikolata, süt ve tarçın; kalın ve kadifemsi.',

    price: 80,

    image: '/assets/site/img-13.jpg',

    alt: 'Sıcak çikolata',

  },

  {

    id: 'waffle',

    name: 'Çilekli Meyveli Waffle',

    category: 'Waffle\'lar',

    description: 'Çıtır waffle, muz, çilek, vanilyalı dondurma ve akçaağaç şurubu.',

    price: 145,

    image: '/assets/site/img-14.jpg',

    alt: 'Muz, çilek ve dondurmalı waffle',

    featured: true,

  },

  {

    id: 'chocolate-waffle',

    name: 'Bitter Çikolatalı Waffle',

    category: 'Waffle\'lar',

    description: 'Bitter çikolata sosu, muz, çilek ve kavrulmuş fındıkla servis edilir.',

    price: 155,

    image: '/assets/site/img-15.jpg',

    alt: 'Çikolata soslu waffle ve dondurma',

    featured: true,

  },

  {

    id: 'classic-waffle',

    name: 'Klasik Brüksel Waffle',

    category: 'Waffle\'lar',

    description: 'Ilık waffle, pudra şekeri ve seçtiğiniz meyve sosuyla sade bir klasik.',

    price: 125,

    image: '/assets/site/img-16.jpg',

    alt: 'Pudra şekerli klasik waffle',

  },

  {

    id: 'chocolate-cake',

    name: 'Bitter Çikolatalı Kek',

    category: 'Tatlılar',

    description: 'Tek köken ganaj, nemli kek katları.',

    price: 110,

    image: '/assets/site/img-17.jpg',

    alt: 'Bitter çikolatalı kek',

  },

  {

    id: 'lemon-cheesecake',

    name: 'Limonlu Cheesecake',

    category: 'Tatlılar',

    description: 'Taze limon kabuğu, hafif krema, tuzlu bisküvi tabanı.',

    price: 105,

    image: '/assets/site/img-18.jpg',

    alt: 'Limonlu cheesecake',

  },

  {

    id: 'tiramisu',

    name: 'Tiramisu',

    category: 'Tatlılar',

    description: 'İtalyan mascarpone, kahve emdirilmiş kek katları.',

    price: 125,

    image: '/assets/site/img-19.jpg',

    alt: 'Tiramisu',

  },

  {

    id: 'pistachio-dessert',

    name: 'Fıstıklı Tatlı',

    category: 'Tatlılar',

    description: 'Kremamsı fıstık ganaj, karamelize çıra fıstığı.',

    price: 130,

    image: '/assets/site/img-20.jpg',

    alt: 'Fıstıklı tatlı',

  },

];

export const categories = ['Kahveler', 'Waffle\'lar', 'Soğuk İçecekler', 'Sıcak İçecekler', 'Tatlılar'];

const toMinutes = (t: string) => {

  const [h, m] = t.split(':').map(Number);

  return h * 60 + m;

};

export function getOpenStatus(now: Date = new Date()) {

  const day = now.getDay();

  const idx = day === 0 ? 2 : day === 6 ? 1 : 0;

  const [opensAt, closesAt] = siteConfig.hours[idx].time.split('–').map((s) => s.trim());

  const current = now.getHours() * 60 + now.getMinutes();

  const open = current >= toMinutes(opensAt) && current < toMinutes(closesAt);

  return { open, opensAt, closesAt };

}

export const galleryImages = [

  {

    url: '/assets/site/img-21.jpg',

    alt: 'Ahşap raflar ve sıcak ışıkla döşenmiş vintage kafe iç mekanı',

    label: 'Mekan',

  },

  {

    url: '/assets/site/img-22.jpg',

    alt: 'Baristanın fincana latte sanatı dökmesi',

    label: 'Barista',

  },

  {

    url: '/assets/site/img-23.jpg',

    alt: 'Vintage detaylarla dekore edilmiş sıcak ve rustik kafe',

    label: 'Atmosfer',

  },

  {

    url: '/assets/site/img-24.jpg',

    alt: 'Sepette servis edilen taze kruvasanlar',

    label: 'Fırından',

  },

  {

    url: '/assets/site/img-25.jpg',

    alt: 'Pencereleri ve masaları olan aydınlık, davetkâr kafe oturma alanı',

    label: 'Oturma',

  },

  {

    url: '/assets/site/img-26.jpg',

    alt: 'Baristanın sütü kahveye dökerek latte sanatı hazırlaması',

    label: 'El sanatı',

  },

];

export const storyImages = {

  primary: '/assets/site/img-27.jpg',

  secondary: '/assets/site/img-28.jpg',

  barista: '/assets/site/img-29.jpg',

  interior: '/assets/site/img-30.jpg',

  pour: '/assets/site/img-31.jpg',

  detail: '/assets/site/img-32.jpg',

};

export const aboutImages = {

  hero: '/assets/site/img-33.jpg',

  story1: '/assets/site/img-34.jpg',

  story2: '/assets/site/img-35.jpg',

};
