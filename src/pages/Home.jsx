import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, ShoppingBag, Phone, Mail, MapPin, ArrowRight, Star, Sparkles, Globe, ChevronDown } from 'lucide-react';
import Loader from '../components/Loader';

// Lazy load images
const chiliImg = new URL('../Img/chili1.png', import.meta.url).href;
const turmericImg = new URL('../Img/haldar.jpg', import.meta.url).href;
const corianderCuminImg = new URL('../Img/jeerapowder.png', import.meta.url).href;
const asafoetidaImg = new URL('../Img/hing.png', import.meta.url).href;

const floatingChili = new URL('../Img/chili.png', import.meta.url).href;
const floatingTurmeric = new URL('../Img/Turmeric.png', import.meta.url).href;
const floatingCoriander = new URL('../Img/Coriander-Cumin.png', import.meta.url).href;
const floatingAsafoetida = new URL('../Img/Asafoetida.png', import.meta.url).href;

const products = [
  {
    name: "Premium Chili Powder",
    nameGu: "ઉચ્ચ ગુણવત્તાવાળું મરચું પાવડર",
    image: chiliImg,
    description: "A premium selection of finely ground red chili powder, offering an intense spicy flavor with a rich red color.",
    descriptionGu: "ઉચ્ચ ગુણવત્તાવાળું મસાલેદાર અને તેજસ્વી લાલ રંગવાળું મરચું પાવડર.",
    price: "₹350/kg",
    highlight: "Deep Red & Spicy"
  },
  {
    name: "Organic Turmeric",
    nameGu: "શુદ્ધ ઓર્ગેનિક હળદર",
    image: turmericImg,
    description: "100% pure and organic turmeric powder, naturally rich in curcumin to boost immunity and improve digestion.",
    descriptionGu: "100% શુદ્ધ અને ઓર્ગેનિક હળદર પાવડર, જે પ્રાકૃતિક રીતે ક્યુરક્યુમિનથી ભરપૂર છે.",
    price: "₹280/kg",
    highlight: "100% Natural"
  },
  {
    name: "Coriander-Cumin Blend",
    nameGu: "અતરંગી ધાણા-જીરું મિશ્રણ",
    image: corianderCuminImg,
    description: "A perfectly balanced blend of coriander and cumin, enhancing the aroma and taste of Indian cuisine.",
    descriptionGu: "સુગંધિત ધાણા-જીરું મિશ્રણ, જે ભારતીય વાનગીઓના સ્વાદ અને સુગંધને વધુ મજબૂત બનાવે છે.",
    price: "₹300/kg",
    highlight: "Rich Aroma"
  },
  {
    name: "Pure Asafoetida",
    nameGu: "ઉચ્ચ ગુણવત્તાવાળો શુદ્ધ હીંગ",
    image: asafoetidaImg,
    description: "Highly aromatic and pure asafoetida (hing), known for its strong pungent flavor that enhances curries.",
    descriptionGu: "ઉચ્ચ ગુણવત્તાવાળો શુદ્ધ હીંગ, જે તેની તીવ્ર સુગંધ અને સ્વાદ વધારવા માટે જાણીતો છે.",
    price: "₹400/kg",
    highlight: "Strong Essence"
  }
];

const floatingSpices = [
  { top: '10%', left: '5%', delay: 0, image: floatingChili },
  { top: '30%', left: '15%', delay: 0.2, image: floatingTurmeric },
  { top: '50%', left: '8%', delay: 0.4, image: floatingCoriander },
  { top: '15%', right: '5%', delay: 0.3, image: floatingAsafoetida },
  { top: '35%', right: '12%', delay: 0.5, image: floatingChili },
  { top: '55%', right: '8%', delay: 0.7, image: floatingTurmeric }
];

const mobileFloatingSpices = [
  { top: '10%', left: '5%', delay: 0, image: floatingChili },
  { top: '22%', right: '5%', delay: 0.2, image: floatingTurmeric },
  { top: '42%', left: '0%', delay: 0.4, image: floatingCoriander },
  { top: '70%', right: '10%', delay: 0.6, image: floatingAsafoetida },
];

function Home() {
  const [isGujarati, setIsGujarati] = useState(false);
  const [showSpices, setShowSpices] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    const imageUrls = [
      chiliImg, turmericImg, corianderCuminImg, asafoetidaImg,
      floatingChili, floatingTurmeric, floatingCoriander, floatingAsafoetida
    ];

    Promise.all(
      imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    )
      .then(() => {
        setImagesLoaded(true);
        setTimeout(() => setShowSpices(true), 1000);
      })
      .catch(error => console.error('Error loading images:', error));
  }, []);

  const handleOrder = () => {
    window.open('https://wa.me/919913604063', '_blank');
  };

  if (!imagesLoaded) {
    return <Loader />;
  }


  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Language Switcher */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 right-4 z-50"
      >
        <button
          onClick={() => setIsGujarati(!isGujarati)}
          className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-full transition-all duration-300"
        >
          <Globe className="w-5 h-5" />
          {isGujarati ? 'English' : 'ગુજરાતી'}
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen bg-black relative flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent"></div>
        
        {/* Desktop Floating Spices */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <AnimatePresence>
            {showSpices && floatingSpices.map((spice, index) => (
              <motion.div
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ 
                  type: "spring",
                  duration: 1.5,
                  delay: spice.delay
                }}
                className="absolute"
                style={{
                  top: spice.top,
                  left: spice.left,
                  right: spice.right
                }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                >
                  <img
                    src={spice.image}
                    alt="Floating Spice"
                    className="w-20 h-20 md:w-32 md:h-32 object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Floating Spices */}
        <div className="absolute inset-0 pointer-events-none md:hidden">
          <AnimatePresence>
            {showSpices && mobileFloatingSpices.map((spice, index) => (
              <motion.div
                key={index}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ 
                  type: "spring",
                  duration: 1.5,
                  delay: spice.delay
                }}
                className="absolute"
                style={{
                  top: spice.top,
                  left: spice.left,
                  right: spice.right
                }}
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 3, -3, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2
                  }}
                >
                  <img
                    src={spice.image}
                    alt="Floating Spice"
                    className="w-28 h-32 object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:pt-8 pt-6 md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 text-gradient">
              {isGujarati ? 'મહાકાળી' : 'Mahakali'}
            </h1>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-8 text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {isGujarati ? 'મસાલા ભંડાર' : 'Masala Bhandar'}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {isGujarati
                ? 'પરંપરા અને શ્રેષ્ઠતા સાથે બનાવેલા અમારા પ્રીમિયમ મસાલા મિશ્રણો સાથે ભારતીય સ્વાદનો અનુભવ કરો'
                : 'Experience the authentic taste of India with our premium spice blends, crafted with tradition and excellence'}
            </motion.p>

            <motion.button
              onClick={handleOrder}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="group flex items-center gap-3 bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-105 mx-auto"
            >
              <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
              {isGujarati ? 'હવે ઓર્ડર કરો' : 'Order Now'}
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Sparkles className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl lg:pt-4 sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
              {isGujarati ? 'અમારા ઉત્પાદનો' : 'Our Products'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-red-950/20 to-black/50 rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="inline-block px-3 py-1 bg-red-500/20 backdrop-blur-sm rounded-full text-sm">
                      {product.highlight}
                    </span>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
                    {isGujarati ? product.nameGu : product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {isGujarati ? product.descriptionGu : product.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-red-500">{product.price}</span>
                  </div>
                  <motion.button
                    onClick={handleOrder}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    {isGujarati ? 'ઓર્ડર કરો' : 'Order Now'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:pt-4 pt-4 sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text"
          >
            {isGujarati ? 'સંપર્ક' : 'Contact Us'}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 bg-red-950/10 rounded-xl border border-red-500/10">
                <Phone className="w-6 h-6 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  {isGujarati ? 'ફોન' : 'Phone'}
                </h3>
                <div className="space-y-2">
                  {['9913604063', '8758035295'].map((number) => (
                    <p key={number} className="text-gray-400">
                      +91 {number}
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-red-950/10 rounded-xl border border-red-500/10">
                <Mail className="w-6 h-6 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  {isGujarati ? 'ઇમેઇલ' : 'Email'}
                </h3>
                <p className="text-gray-400">
                  pandavprakash144@gmail.com
                </p>
              </div>

              <div className="p-6 bg-red-950/10 rounded-xl border border-red-500/10">
                <MapPin className="w-6 h-6 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">
                  {isGujarati ? 'સરનામું' : 'Address'}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {isGujarati ? (
                    '૭૮, હરિ હરિ સોસાયટી - ૨, અનાથ આશ્રમ રોડ પાછળ, કતારગામ, સુરત - ૩૯૫૦૦૪'
                  ) : (
                    '78, Hari Hari Society - 2, BH Anath Ashram Road, Katargam, Surat - 395004'
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <motion.img
                src="../public/logo.png"
                alt="Mahakali Logo"
                className="max-w-full h-auto rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;