document.addEventListener("DOMContentLoaded", function() {
  console.log("script.js loaded at: ", new Date().toISOString());

  // Initialize Swiper for Recommended Treks with autoplay enabled
  try {
    var trekSwiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });

    document.querySelectorAll('.mySwiper .swiper-slide').forEach(slide => {
      slide.addEventListener('mouseenter', () => trekSwiper.autoplay.stop());
      slide.addEventListener('mouseleave', () => trekSwiper.autoplay.start());
    });
    console.log("Trek Swiper initialized successfully");
  } catch (error) {
    console.error("Trek Swiper initialization failed: ", error);
  }

  // Initialize Swiper for Services with autoplay enabled
  try {
    const servicesSwiper = new Swiper(".services-swiper", {
      slidesPerView: 'auto',       // each .swiper‑slide widths come from CSS (auto)
      centeredSlides: true,        // always center the active slide
      spaceBetween: 20,            // gap between cards
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".services-swiper .swiper-button-next",
        prevEl: ".services-swiper .swiper-button-prev",
      },
      pagination: {
        el: ".services-swiper .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });  

    // Pause autoplay on mouseenter, resume on mouseleave
    document.querySelectorAll('.services-swiper .swiper-slide').forEach(slide => {
      slide.addEventListener('mouseenter', () => servicesSwiper.autoplay.stop());
      slide.addEventListener('mouseleave', () => servicesSwiper.autoplay.start());
    });

    console.log("Services Swiper initialized successfully");
  } catch (error) {
    console.error("Services Swiper initialization failed: ", error);
  }

  // Header hide on scroll
  try {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".site-header");
      const recommendedSection = document.getElementById("recommended-treks");
      if (recommendedSection) {
        const recommendedTop = recommendedSection.getBoundingClientRect().top;
        if (recommendedTop <= 100) {
          header.classList.add("hide-header");
        } else {
          header.classList.remove("hide-header");
        }
      }
    });
    console.log("Scroll event listener added");
  } catch (error) {
    console.error("Scroll event listener failed: ", error);
  }
});





// Alpine.js component for dynamic Destinations Roadmap
function destinationHandler() {
  return {
    activeDestination: 0, // auto-select first
    destinations: [
      {
        name: 'Shimla',
        tagline: 'Queen of the Hills with snowy escapes.',
        bookingLink: '/book/shimla',
        roadmap: [
          {
            image: '/assets/shimla-kufri.jpg',
            title: 'Kufri',
            description: 'Ski down snowy slopes or ride yaks in this winter wonderland near Shimla. Known as the Switzerland of Himachal, Kufri offers panoramic views of the snow-capped Himalayas, winding forest trails, and charming apple orchards. Explore the Himalayan Nature Park, enjoy thrilling activities like tobogganing and snowboarding, or simply relax in cozy hillside cafés. Whether you are seeking adventure or a peaceful retreat, Kufri blends scenic beauty with unforgettable experiences for couples, families, and solo travelers alike.',
            duration: 'Day 1'
          },
          {
            image: '/assets/shimla-narkanda.jpg',
            title: 'Narkanda',
            description: 'Nestled at 2,700 meters above sea level, Narkanda is one of Himachals best-kept secrets — a serene escape wrapped in thick pine forests and panoramic Himalayan views. Visit the majestic Hatu Peak for 360° views and spiritual calm at the ancient Hatu Mata Temple, or stroll through sprawling apple orchards that paint the valley in shades of red and green. Less crowded than Shimla, yet just as enchanting, Narkanda offers luxury in simplicity and tranquility in every breath. Ideal for couples, families, and solo travelers looking to disconnect and rediscover the magic of the mountains.',
            duration: 'Day 2'
          },
          {
            image: '/assets/shimla-naldehra.jpg',
            title: 'Naldehra',
            description: 'Naldehra is a tranquil hill retreat near Shimla, known for its lush cedar forests, rolling meadows, and one of India’s oldest and most scenic golf courses. Perched at 2,200 meters, it offers panoramic views of the Himalayan ranges and a refreshing escape from city life. Whether you’re teeing off on the historic Naldehra Golf Course, horse-riding through pine trails, or simply soaking in the serenity at a luxury resort, Naldehra offers the perfect balance of leisure and nature. Ideal for families, couples, and weekend travelers seeking peace, elegance, and unforgettable mountain views without the crowds of mainstream hill stations.',
            duration: 'Day 3'
          }
        ]
      },
      {
        name: 'Manali',
        tagline: 'Adventure hub of the Himalayas.',
        bookingLink: '/book/manali',
        roadmap: [
          {
            image: '/assets/manali-solang.jpg',
            title: 'Solang Valley',
            description: 'Solang Valley, nestled near Manali in Himachal Pradesh, is a haven for nature lovers and adventure seekers. Our travel company offers curated experiences to help you explore the best of this scenic paradise. From thrilling activities like skiing, paragliding, zorbing, and snowmobiling to serene camping, horse riding, and ropeway rides, we provide everything you need for a perfect getaway. Whether its the snowy charm of winter or the vibrant energy of summer, Solang Valley promises unforgettable memories. Let us handle the details while you enjoy a hassle-free and adventure-packed trip to one of India’s most stunning destinations.',
            duration: 'Day 1'
          },
          {
            image: '/assets/manali-atal.jpg',
            title: 'Atal Tunnel',
            description: 'Atal Tunnel, the world’s longest highway tunnel above 10,000 feet, is a remarkable feat of engineering connecting Manali to Lahaul Valley in Himachal Pradesh. Our travel packages include seamless visits through this iconic tunnel, offering breathtaking views and smooth access to high-altitude adventures. Whether you are chasing snow in winter or lush valleys in summer, the tunnel opens the gateway to wonders like Keylong, Sissu, and beyond. Enjoy guided drives, sightseeing stops, and curated photo spots along the route. With us, experience the thrill, beauty, and convenience of exploring the epic Himalayas through this historic and scenic mountain pass.',
            duration: 'Day 2'
          },
          {
            image: '/assets/manali-sissu.jpg',
            title: 'Sissu Village',
            description: 'Sissu Village, located in the Lahaul Valley just beyond the Atal Tunnel, is a hidden gem known for its tranquil charm, majestic waterfalls, and panoramic mountain views. With our curated travel experiences, you can explore this peaceful Himalayan village like never before. Enjoy nature walks, riverside picnics, and visits to local monasteries, or simply relax amidst apple orchards and traditional wooden homes. During winter, the snow-covered landscape turns Sissu into a magical wonderland, perfect for photography and peaceful retreats. Let us take you off the beaten path and into the heart of Himachal’s untouched natural beauty.',
            duration: 'Day 2'
          },
          {
            image: '/assets/manali-rohtang.jpg',
            title: 'Rohtang Pass',
            description: 'Rohtang Pass, perched at 13,050 feet, is one of Himachal Pradesh’s most iconic high-altitude destinations, offering awe-inspiring views of snow-clad peaks, glaciers, and lush valleys. As your travel partner, we ensure a smooth and thrilling journey to this legendary mountain pass. From snow adventures like sledding and biking to serene moments amidst towering Himalayan ranges, Rohtang promises an experience like no other. The route itself is a scenic marvel, with cascading waterfalls and dramatic landscapes at every turn. With permits, transport, and expert guides taken care of, all you have to do is soak in the breathtaking beauty.',
            duration: 'Day 3'
          },
          {
            image: '/assets/manali-vashisht.jpg',
            title: 'Vashisht Hot Spring',
            description: 'Located just a few kilometers from Manali, Vashisht Hot Spring is a sacred and soothing retreat nestled within the quaint Vashisht village. Known for its natural thermal springs believed to have healing properties, this spot is perfect for travelers seeking relaxation and spiritual refreshment. Our travel packages include guided visits to the hot springs, the ancient Vashisht Temple, and nearby local markets. Whether you are soaking in the warm waters or exploring the cultural charm of the village, the experience is both calming and enriching. Let us guide you to this peaceful Himalayan gem for a truly rejuvenating escape.',
            duration: 'Day 4'
          },
          {
            image: '/assets/manali-tirthen.jpg',
            title: 'Tirthan Valley',
            description: 'Tirthan Valley, tucked away in the Kullu district of Himachal Pradesh, is a serene and lesser-explored destination ideal for nature lovers and peace seekers. Known for its crystal-clear Tirthan River, dense pine forests, and charming mountain villages, the valley offers a perfect blend of adventure and relaxation. With us, explore hidden waterfalls, trek to the Great Himalayan National Park, enjoy trout fishing, and unwind in cozy riverside stays. Whether you are chasing misty mornings or stargazing by the fire, Tirthan Valley promises a soulful retreat. Let us craft your escape into this untouched Himalayan haven with comfort and care.',
            duration: 'Day 5'
          },
          {
            image: '/assets/manali-kasol.jpg',
            title: 'Kasol',
            description: 'Kasol, a quaint hamlet on the banks of the Parvati River, is a backpacker’s paradise nestled in Himachal Pradesh’s Parvati Valley. Known for its scenic beauty, laid-back vibes, and vibrant café culture, Kasol is the perfect destination for those seeking a mix of adventure and chill. Our travel experiences include guided treks to Kheerganga, riverside camping, village walks to Tosh and Malana, and cultural exploration of the local Himachali and Israeli influences. Whether you’re here for the music, the food, or the mountain magic, Kasol offers a refreshing escape into nature with a touch of bohemian charm.',
            duration: 'Day 6'
          },
          {
            image: '/assets/manali-tosh.jpg',
            title: 'Tosh',
            description: 'Tosh is a serene mountain village perched high in the Parvati Valley, offering panoramic views, peaceful vibes, and a deep connection with nature. Known for its traditional wooden homes, vibrant culture, and breathtaking sunsets, Tosh is a favorite among trekkers and travelers seeking solitude. Our curated trips include scenic treks from Kasol, comfortable stays with local hospitality, and time to explore the beauty of the surrounding peaks and forests. Whether you are sipping chai on a balcony or hiking through alpine trails, Tosh offers a perfect blend of calm and adventure—an ideal Himalayan escape off the beaten path.',
            duration: 'Day 6'
          },
          {
            image: '/assets/manali-malana.jpg',
            title: 'Malana',
            description: 'Malana, an ancient and isolated village in Himachal Pradesh, is famed for its unique culture, untouched beauty, and spiritual aura. Nestled deep in the Parvati Valley, it is home to a self-governed community with customs and traditions unlike anywhere else. Our guided treks to Malana take you through lush forests, scenic ridges, and into a world steeped in legend and mystery. Experience breathtaking mountain views, learn about the village’s distinct heritage, and explore responsibly with our expert team. For those seeking something truly different, Malana offers a rare glimpse into a hidden world amidst the Himalayas.',
            duration: 'Day 7'
          }
        ]
      },
      {
        name: 'Kinnaur',
        tagline: 'Land of fairy-tale villages and orchards.',
        bookingLink: '/book/kinnaur',
        roadmap: [
          {
            image: '/assets/kinnaur-sarahan.jpg',
            title: 'Sarahan',
            description: 'Sarahan, a beautiful village in the Kinnaur district of Himachal Pradesh, is known as the "Gateway to Kinnaur" and is famed for its stunning views, apple orchards, and the sacred Bhimakali Temple. With snow-covered peaks in the backdrop and traditional Himachali architecture all around, Sarahan offers a peaceful and culturally rich experience. Our travel plans include visits to local temples, heritage walks, orchard stays, and scenic drives through lush mountain roads. Whether you are soaking in the spiritual vibes or capturing postcard-perfect views, Sarahan is a must-visit gem before exploring deeper into the magical land of Kinnaur.',
            duration: 'Day 1'
          },
          {
            image: '/assets/kinnaur-sangla.avif',
            title: 'Sangla',
            description: 'Sangla, nestled in the Baspa Valley of Kinnaur, is a breathtaking destination known for its rich green landscapes, traditional wooden homes, and the flowing Baspa River. Surrounded by snow-capped mountains and dense forests, Sangla is a paradise for nature lovers and explorers. With our expertly curated trips, enjoy riverside camping, trout fishing, heritage walks, and visits to the historic Kamru Fort. Spring and summer bring blooming apple orchards, while winter paints the valley white with snow. Whether you are looking for adventure or peaceful Himalayan serenity, Sangla offers an unforgettable experience wrapped in nature and culture.',
            duration: 'Day 2'
          },
          {
            image: '/assets/kinnaur-chitkul.jpg',
            title: 'Chitkul',
            description: 'Chitkul, the last inhabited village near the Indo-Tibetan border, is a dream destination tucked deep within Himachal’s Kinnaur district. Known for its untouched beauty, crystal-clear Baspa River, and towering Himalayan peaks, Chitkul offers a surreal escape from the chaos of city life. Our travel experiences include scenic drives through Sangla Valley, cozy homestays, riverside picnics, and peaceful walks through this charming village. With its clean air, rustic wooden houses, and postcard-perfect landscapes, Chitkul is perfect for nature lovers, photographers, and wanderers seeking tranquility. Come explore the “last village of India” with us—where the road ends, but the magic begins.',
            duration: 'Day 3'
          },
          {
            image: '/assets/kinnaur-kalpa.jpg',
            title: 'Kalpa',
            description: 'Kalpa, a scenic village in Kinnaur, Himachal Pradesh, is known for its panoramic views of the snow-covered Kinnaur Kailash range. Perched above the Sutlej River, this peaceful destination is perfect for those who want to experience the Himalayas in their raw and majestic form. Our travel packages to Kalpa include comfortable stays with mountain views, visits to ancient temples, village explorations, and sunrise viewpoints that leave you breathless. Surrounded by apple orchards, pine forests, and serene silence, Kalpa offers a perfect mix of spiritual calm and natural beauty—ideal for slow travelers and soul seekers alike.',
            duration: 'Day 4'
          },
          {
            image: '/assets/kinnaur-nako.jpg',
            title: 'Nako',
            description: 'Nako, a peaceful village nestled at 12,000 feet in the Hangrang Valley of Himachal Pradesh, is a hidden gem on the route to Spiti. Set beside a serene lake and surrounded by barren mountains, Nako offers an experience of untouched Himalayan life. Our curated journeys include visits to the sacred Nako Monastery, lakeside strolls, and insights into the village’s unique Tibetan-influenced culture. With its quiet charm, ancient legends, and spellbinding views, Nako is perfect for travelers seeking solitude, spirituality, and raw mountain beauty. Let us take you to this mystical high-altitude haven where time seems to slow down.',
            duration: 'Day 5'
          }
        ]
      },
      {
        name: 'Lahaul Spiti',
        tagline: 'Mystical desert valleys and ancient monasteries.',
        bookingLink: '/book/lahaul-spiti',
        roadmap: [
          {
            image: '/assets/spiti-tabo.jpg',
            title: 'Tabo',
            description: 'Tabo, often called the "Ajanta of the Himalayas," is a sacred village in the Spiti Valley, known for its ancient Tabo Monastery, which dates back to 996 AD. Surrounded by dramatic rock formations and stark desert landscapes, Tabo offers a unique spiritual and cultural experience. Our guided tours include monastery visits, meditation caves, village walks, and insight into Tibetan Buddhist traditions. The peaceful aura, stunning murals, and quiet surroundings make Tabo an unforgettable stop on your Spiti journey. Whether you are a history lover or a seeker of silence, Tabo invites you into a world of deep calm and heritage.',
            duration: 'Day 1'
          },
          {
            image: '/assets/spiti-dhankar.jpg',
            title: 'Dhankar',
            description: 'Perched dramatically on a cliffside at over 12,000 feet, Dhankar is one of Spiti Valley’s most awe-inspiring villages. Home to the ancient Dhankar Monastery—once the capital of the Spiti kingdom—this spot offers breathtaking views of the confluence of the Spiti and Pin rivers. Our travel experiences include visits to the monastery, short treks to the beautiful Dhankar Lake, and immersive cultural moments with the local community. With its spiritual vibe, stunning natural backdrop, and historical charm, Dhankar is a must-visit for explorers and seekers alike. Let us guide you through this magical Himalayan marvel suspended between earth and sky.',
            duration: 'Day 2'
          },
          {
            image: '/assets/spiti-kaza.jpg',
            title: 'Kaza',
            description: 'Kaza, the vibrant capital of Spiti Valley, is a high-altitude town that blends rugged beauty with rich Tibetan culture. Surrounded by stark mountains and deep blue skies, Kaza serves as the perfect base for exploring Spiti’s wonders. Our travel packages offer stays in cozy homestays, visits to ancient monasteries like Key and Sakya Tangyud, local markets, and cultural exchanges with the warm-hearted locals. From here, you can venture to nearby gems like Langza, Hikkim, and Komic. Whether you seek adventure, spirituality, or breathtaking landscapes, Kaza welcomes you with open arms and the soul of the mountains.',
            duration: 'Day 3'
          },
          {
            image: '/assets/spiti-chandertal.avif',
            title: 'Chandertal Lake',
            description: 'Chandratal Lake, meaning “Lake of the Moon,” is a stunning high-altitude lake nestled in the Spiti region at 14,100 feet. Famous for its crystal-clear waters that reflect the surrounding peaks, it’s a dream destination for trekkers, campers, and nature lovers. Our travel experiences include guided drives or treks to the lake, overnight camping under starry skies, and moments of pure solitude in this surreal landscape. With its changing hues through the day and mystical calm, Chandratal offers an experience like no other. Let us take you to this magical Himalayan jewel where silence speaks and nature mesmerizes.',
            duration: 'Day 4'
          },
          {
            image: '/assets/spiti-keylong.jpg',
            title: 'Keylong',
            description: 'Keylong, the administrative and cultural heart of the Lahaul region, is a charming town nestled amidst snow-capped peaks and lush valleys. Located along the Leh-Manali Highway, it serves as a perfect stopover for travelers heading to Leh or exploring the Lahaul-Spiti region. With our curated experiences, discover ancient monasteries like Kardang and Shashur, stroll through apple orchards, and soak in the tranquil beauty of this Himalayan haven. Keylong offers a peaceful blend of culture, spirituality, and nature. Whether you are an explorer or a seeker of serenity, Keylong invites you to slow down and take in the magic of the mountains.',
            duration: 'Day 5'
          },
          {
            image: '/assets/spiti-baralacha.webp',
            title: 'Baralacha La Pass',
            description: 'Baralacha La, one of the most stunning high-altitude mountain passes in the Indian Himalayas, sits at a staggering 16,040 feet and connects Lahaul in Himachal Pradesh to Ladakh. Known for its raw beauty and dramatic landscapes, the pass is a favorite among bikers, trekkers, and adventure lovers. Our journeys through Baralacha La offer surreal views of snow-draped peaks, glacial streams, and vast open skies. The nearby Suraj Tal, one of India’s highest lakes, adds to the mystical charm of the route. Traverse this breathtaking pass with us and experience the thrill of being truly on top of the world.',
            duration: 'Day 6'
          },
          {
            image: '/assets/spiti-shrinkle.jpg',
            title: 'Shrinkhula Pass',
            description: 'Shinkula Pass, sitting at an altitude of over 16,580 feet, is a relatively new and lesser-explored gateway connecting the Lahaul Valley in Himachal Pradesh to the remote Zanskar region of Ladakh. Ideal for offbeat travelers, this high mountain pass offers raw, untouched beauty—rugged terrain, snow patches even in summer, and wide, open vistas. Our guided expeditions to Shinkula include thrilling drives, immersive nature experiences, and opportunities to witness the unfiltered majesty of the Himalayas. For those seeking paths less traveled and views that few have seen, Shinkula Pass promises an unforgettable journey into the wild heart of the mountains.',
            duration: 'Day 6'
          },
          {
            image: '/assets/spiti-trikolinath.jpg',
            title: 'Trikolinath Temple',
            description: 'Trilokinath Temple, located near Udaipur in Himachal Pradesh’s Lahaul region, is a revered pilgrimage site worshipped by both Hindus and Buddhists. Dedicated to Lord Shiva (as Trilokinath, meaning "Lord of the Three Worlds"), the temple exudes a rare spiritual harmony and ancient Himalayan charm. Set against a backdrop of snow-capped peaks and serene valleys, it offers visitors not only religious significance but also breathtaking views and peaceful vibes. Our travel experiences include guided visits, cultural insights, and scenic drives to this sacred site. Whether for faith, history, or tranquility, Trilokinath is a soulful stop on your Lahaul-Spiti journey.',
            duration: 'Day 7'
          }
        ]
      },
      {
        name: 'Kashmir',
        tagline: 'Paradise on Earth with lakes and peaks.',
        bookingLink: '/book/kashmir',
        roadmap: [
          {
            image: '/assets/kashmir-katra.jpg',
            title: 'Katra',
            description: 'Katra, nestled in the foothills of the Trikuta Mountains in Jammu, is the gateway to the sacred Vaishno Devi Shrine—one of India’s most revered pilgrimage sites. Every year, millions of devotees start their spiritual trek from Katra to seek blessings at the holy cave temple. Our travel services offer everything from comfortable stays and yatra registration to guided treks, pony rides, and helicopter bookings. Beyond the pilgrimage, Katra also charms visitors with serene landscapes, local cuisine, and a peaceful vibe. Whether you are here for devotion or a serene Himalayan break, Katra welcomes you with open arms and divine grace.',
            duration: 'Day 1'
          },
          {
            image: '/assets/kashmir-srinagar.jpg',
            title: 'Srinagar',
            description: 'Srinagar, the crown jewel of Kashmir, is a breathtaking destination known for its pristine Dal Lake, vibrant houseboats, and the timeless charm of Mughal gardens. Set against the backdrop of the mighty Himalayas, Srinagar offers a unique blend of nature, culture, and tradition. Our travel experiences include Shikara rides on Dal Lake, stays in heritage houseboats, strolls through Nishat and Shalimar Bagh, and visits to iconic landmarks like Hazratbal Shrine and Shankaracharya Temple. With snow in winter and blossoms in spring, Srinagar enchants in every season. Let us help you explore the soul of Kashmir in style and serenity.',
            duration: 'Day 2'
          },
          {
            image: '/assets/kashmir-sonmarg.jpg',
            title: 'Sonmarg',
            description: 'Sonmarg, meaning “Meadow of Gold,” is a breathtaking valley located about 80 km from Srinagar, known for its alpine beauty, snow-covered peaks, and glistening glaciers. Surrounded by lush meadows and towering mountains, Sonmarg is a haven for nature lovers and adventure seekers. Our curated travel experiences include pony rides to Thajiwas Glacier, river rafting in the Sindh River, and scenic drives through winding mountain roads. In winter, the valley turns into a snowy wonderland perfect for sledding and snow trekking. Whether you are chasing snow, serenity, or summer blooms, Sonmarg promises unforgettable moments in the heart of Kashmir.',
            duration: 'Day 3'
          },
          {
            image: '/assets/kashmir-gulmarg.jpg',
            title: 'Gulmarg',
            description: 'Gulmarg, known as the “Meadow of Flowers,” is a world-renowned hill station in Kashmir famed for its lush green slopes, snow-covered meadows, and thrilling adventures. Whether you are visiting in summer for serene landscapes or in winter for world-class skiing, Gulmarg offers something magical year-round. Our travel plans include rides on the iconic Gulmarg Gondola (one of the highest in the world), guided treks, golf at the highest green golf course, and snow activities like skiing and snowboarding. With panoramic views of the Himalayas and unforgettable outdoor experiences, Gulmarg is the perfect blend of thrill and tranquility.',
            duration: 'Day 4'
          },
          {
            image: '/assets/kashmir-pahalgam.jpg',
            title: 'Pahalgam',
            description: 'Pahalgam, often called the "Valley of Shepherds," is a serene and picturesque town nestled in the Lidder Valley of Kashmir. Surrounded by dense pine forests, snow-capped peaks, and the sparkling Lidder River, it’s an ideal retreat for nature lovers and peace seekers. Our travel offerings include riverside stays, scenic hikes to Aru and Betaab Valley, pony rides in Baisaran (Mini Switzerland), and trout fishing in crystal-clear streams. Also serving as the base for the sacred Amarnath Yatra, Pahalgam blends spirituality, adventure, and unmatched natural beauty. Let us guide you through this charming Kashmiri gem where every view feels like a painting.',
            duration: 'Day 5'
          },
          {
            image: '/assets/kashmir-shivkhori.jpg',
            title: 'Shiv Khori',
            description: 'Shiv Khori, a revered cave shrine dedicated to Lord Shiva, is one of the most spiritual and awe-inspiring destinations in Jammu. Located about 80 km from Katra, this natural cave houses a self-formed lingam and extends over 200 meters, filled with stunning rock formations and sacred energy. Our travel experiences include guided treks through scenic mountain paths, spiritual storytelling, and visits to nearby temples and viewpoints. The journey to Shiv Khori blends devotion with adventure, attracting pilgrims and nature lovers alike. Let us take you on this divine path where myth, faith, and the magic of the mountains come together.',
            duration: 'Day 6'
          }
        ]
      },
      {
        name: 'Leh – Ladakh',
        tagline: 'Rugged beauty of the high desert.',
        bookingLink: '/book/leh-ladakh',
        roadmap: [
          {
            image: '/assets/ladakh-leh.jpg',
            title: 'Leh',
            description: 'Leh, the heart of Ladakh, is a high-altitude desert town brimming with adventure, culture, and spiritual calm. Surrounded by dramatic mountains and ancient monasteries, Leh is your gateway to some of India’s most breathtaking landscapes. Our curated experiences include visits to Leh Palace, Shanti Stupa, and bustling local markets, along with cultural immersion in traditional Ladakhi life. Whether you are exploring nearby monasteries like Thiksey and Hemis, or preparing for journeys to Nubra Valley and Pangong Lake, Leh offers a perfect mix of serenity and excitement. With us, explore the magic of Leh—where the sky feels closer, and every moment feels timeless.',
            duration: 'Day 1'
          },
          {
            image: '/assets/ladakh-sham.jpg',
            title: 'Sham Valley',
            description: 'Sham Valley, often called the “Apricot Valley,” is one of the most beautiful and accessible regions near Leh, ideal for first-time visitors to Ladakh. Known for its gentle terrain, traditional villages, and spiritual landmarks, it offers a peaceful yet enriching experience. Our travel itineraries include visits to the famous Magnetic Hill, Gurudwara Pathar Sahib, Likir and Alchi Monasteries, and the confluence of the Indus and Zanskar Rivers. Sham Valley is perfect for short treks, cultural immersion, and scenic drives through Ladakh’s breathtaking landscapes. Let us take you through this serene stretch where every corner tells a story of heritage and harmony.',
            duration: 'Day 2'
          },
          {
            image: '/assets/ladakh-lamayuru.jpg',
            title: 'Lamayuru',
            description: 'Lamayuru, often called the “Moonland of Ladakh,” is a surreal village known for its otherworldly landscapes and ancient Buddhist heritage. Set against eroded hills that resemble the surface of the moon, Lamayuru is home to one of Ladakh’s oldest and most revered monasteries—Lamayuru Monastery. Our travel experiences include monastery visits, meditation with monks, and exploration of the unique lunar-like terrain. The village’s calm atmosphere and stunning vistas make it perfect for soul-searchers, photographers, and nature lovers alike. Let us guide you through this mystical Himalayan destination where spirituality and nature come together in the most magical way.',
            duration: 'Day 3'
          },
          {
            image: '/assets/ladakh-nubra.jpg',
            title: 'Nubra Valley',
            description: 'Nubra Valley, a high-altitude desert beyond the Khardung La Pass, is one of Ladakh’s most enchanting destinations. With its golden sand dunes, lush villages, and majestic mountains, Nubra offers a surreal blend of landscapes. Our curated journeys include camel rides on Bactrian double-humped camels in Hunder, visits to the stunning Diskit Monastery, and stays in charming local homestays. The Shyok River adds a ribbon of blue to the valley’s earthy tones, making it a photographer’s dream. Whether its adventure, tranquility, or culture you seek, Nubra Valley invites you to experience Ladakh’s beauty in its purest form.',
            duration: 'Day 4'
          },
          {
            image: '/assets/ladakh-khardungla.jpg',
            title: 'Khardungla Pass',
            description: 'Khardung La, one of the highest motorable passes in the world at 18,380 feet, is an iconic gateway to Ladakh’s Nubra and Shyok valleys. This legendary mountain pass offers thrilling drives, jaw-dropping views of snow-clad peaks, and a sense of achievement that few roads can match. Our travel packages include comfortable acclimatized drives, scenic photo stops, and guided experiences to ensure safety at high altitude. Whether you are a biker chasing the thrill or a traveler seeking the extraordinary, Khardung La is a must-visit milestone on your Ladakh journey—where every breath feels like a victory and the sky seems just an arm’s length away.',
            duration: 'Day 5'
          },
          {
            image: '/assets/ladakh-pangong.jpg',
            title: 'Pangong Lake',
            description: 'Pangong Lake, famously featured in Bollywood films, is one of Ladakh’s most mesmerizing natural wonders. Stretching across India and into Tibet, this high-altitude lake sits at 14,270 feet and changes color throughout the day—from deep blue to turquoise and emerald. Our curated journeys include lakeside camping, photography stops, and stargazing experiences under crystal-clear skies. The silence, serenity, and surreal beauty of Pangong make it a bucket-list destination for every traveler. Whether you are watching the sunrise over the still waters or simply soaking in the silence, Pangong Lake promises a soul-stirring experience unlike any other.',
            duration: 'Day 6'
          },
          {
            image: '/assets/ladakh-tsomoriri.webp',
            title: 'Tso-Moriri Lake',
            description: 'Tso Moriri Lake, nestled at an altitude of over 15,000 feet in the Changthang region of Ladakh, is a pristine high-altitude lake surrounded by snow-capped peaks and endless silence. Far less crowded than Pangong, Tso Moriri offers raw, untouched beauty and a deep sense of solitude. Our travel experiences include scenic drives through remote Himalayan landscapes, lakeside camping, and opportunities to spot rare wildlife like migratory birds and Himalayan marmots. With its calm blue waters reflecting the sky and mountains, Tso Moriri is a paradise for peace-seekers, nature lovers, and offbeat explorers looking to reconnect with nature.',
            duration: 'Day 7'
          },
          {
            image: '/assets/ladakh-rangdum.jpg',
            title: 'Rangdum',
            description: 'Rangdum, a remote village nestled between Kargil and Padum in the Suru Valley, is a hidden treasure of the greater Zanskar region. Surrounded by stark, dramatic mountains and glaciers, Rangdum offers surreal beauty and a deep sense of isolation that’s rare and refreshing. Our offbeat travel experiences include visits to the iconic 18th-century Rangdum Monastery, peaceful village walks, and stays in cozy local homestays. It’s the perfect place for photographers, bikers, and soul-searchers yearning for silence and raw Himalayan beauty. Let us take you off the grid and into the heart of Ladakh’s wild, untouched highlands.',
            duration: 'Day 8'
          },
          {
            image: '/assets/ladakh-padum.jpg',
            title: 'Padum',
            description: 'Padum, the administrative center of Zanskar Valley, is a remote yet culturally rich town nestled amidst the mighty Himalayas. Surrounded by ancient monasteries, sprawling valleys, and icy rivers, Padum is the gateway to some of Ladakh’s most soul-stirring experiences. Our curated journeys include visits to revered sites like Karsha and Stongdey Monasteries, cultural walks through traditional Zanskari villages, and stunning drives through surreal landscapes. Whether you are trekking to Phuktal Monastery or simply absorbing the peace and simplicity of mountain life, Padum offers a rare window into Ladakh’s spiritual and untouched highland culture.',
            duration: 'Day 9'
          },
          {
            image: '/assets/ladakh-suru.jpg',
            title: 'Suru Valley',
            description: 'Suru Valley, one of the most picturesque regions in Ladakh, stretches from Kargil to the rugged terrains of Zanskar. Unlike Ladakh’s typical arid landscapes, Suru is lush and vibrant, with green meadows, flowing rivers, and views of towering peaks like Nun and Kun. Our travel experiences include scenic drives, cultural interactions in villages like Panikhar and Parkachik, and visits to ancient monasteries nestled amidst the mountains. Ideal for photographers, nature lovers, and offbeat explorers, Suru Valley offers a refreshing contrast to Ladakh’s stark desert beauty—a hidden gem where nature flourishes and tradition thrives.',
            duration: 'Day 10'
          }
        ]
      },
      {
        name: 'Uttarakhand',
        tagline: 'Spiritual and scenic Himalayan retreat.',
        bookingLink: '/book/uttarakhand',
        roadmap: [
          {
            image: '/assets/uttarakhand-rishikesh.webp',
            title: 'Rishikesh',
            description: 'Rishikesh, nestled along the banks of the Ganges and framed by the Himalayan foothills, is a vibrant blend of spirituality, adventure, and natural beauty. Known as the “Yoga Capital of the World,” it offers serene ashrams, sacred ghats, and iconic temples like Trayambakeshwar. Our travel experiences include river rafting, bungee jumping, yoga retreats, Ganga aarti ceremonies, and peaceful walks across the famous Laxman Jhula. Whether you are seeking inner peace or heart-racing thrills, Rishikesh has it all. Let us guide you through this soulful destination where ancient traditions meet modern adventure on the sacred banks of the Ganga.',
            duration: 'Day 1'
          },
          {
            image: '/assets/uttarakhand-haridwar.jpg',
            title: 'Haridwar',
            description: 'Haridwar, one of India’s holiest cities, sits at the point where the sacred Ganga River emerges from the Himalayas. A spiritual epicenter for centuries, it draws millions of pilgrims to its ghats, temples, and vibrant festivals. Our travel offerings include guided visits to Har Ki Pauri for the mesmerizing Ganga Aarti, temple tours to Mansa Devi and Chandi Devi, and cultural walks through bustling bazaars. With its timeless rituals, serene riverbanks, and a deeply devotional atmosphere, Haridwar offers a profound experience of India’s spiritual soul. Join us to witness faith, tradition, and tranquility in their purest form.',
            duration: 'Day 2'
          },
          {
            image: '/assets/uttarakhand-mussoorie.jpg',
            title: 'Mussoorie',
            description: 'Mussoorie, fondly known as the "Queen of Hills," is a timeless hill station nestled in the Garhwal Himalayas, offering misty mornings, colonial charm, and sweeping mountain views. Just a short drive from Dehradun, this picturesque retreat is perfect for couples, families, and nature lovers. Our travel experiences include strolls on Mall Road, scenic rides to Gun Hill, visits to Kempty Falls, and peaceful walks through Landour. Whether you are sipping chai with a view or exploring heritage churches and quaint cafes, Mussoorie promises a refreshing escape from the everyday. Let us craft your perfect hill getaway in this mountain paradise.',
            duration: 'Day 3'
          },
          {
            image: '/assets/uttarakhand-nainital.jpg',
            title: 'Nainital',
            description: 'Nainital, a charming hill station built around the emerald Naini Lake, is one of Uttarakhand’s most beloved getaways. Surrounded by pine-covered hills and colonial-era charm, Nainital offers a perfect mix of natural beauty and lively culture. Our curated travel experiences include boating on Naini Lake, exploring the bustling Mall Road, cable car rides to Snow View Point, and peaceful visits to Naina Devi Temple. Whether you are enjoying the cool mountain air, panoramic views, or lakeside café moments, Nainital is ideal for families, honeymooners, and solo travelers alike. Let us plan your perfect escape to this serene Himalayan jewel.',
            duration: 'Day 4'
          },
          {
            image: '/assets/uttarakhand-kasauni.webp',
            title: 'Kasauni',
            description: 'Kausani, perched at 6,200 feet in the Kumaon region of Uttarakhand, is a peaceful hill station known for its spectacular 300-km-wide views of the Himalayas, including peaks like Nanda Devi, Trishul, and Panchachuli. Often called the “Switzerland of India,” Kausani is ideal for those seeking tranquility, natural beauty, and spiritual connection. Our travel offerings include stays in scenic resorts, visits to Anasakti Ashram (where Mahatma Gandhi once stayed), tea estate tours, and serene nature walks. With its pine forests, sunrise points, and quiet village life, Kausani is the perfect escape for soul-searchers and mountain lovers alike.',
            duration: 'Day 5'
          },
          {
            image: '/assets/uttarakhand-corbett.jpg',
            title: 'Corbett',
            description: 'Jim Corbett National Park, India’s oldest and most iconic wildlife sanctuary, is a paradise for nature lovers and adventure seekers. Nestled in the foothills of the Himalayas, Corbett is home to majestic Bengal tigers, elephants, leopards, and over 600 species of birds. Our curated wildlife experiences include thrilling jeep safaris, elephant rides, nature walks, and riverside stays amidst the jungle. Whether you are tracking tigers through tall sal forests or relaxing by the Ramganga River, Corbett offers the perfect blend of thrill and tranquility. Let us take you deep into the wild where the roar of nature echoes with every heartbeat.',
            duration: 'Day 6'
          },
          {
            image: '/assets/uttarakhand-yamunotri.jpg',
            title: 'Yamunotri',
            description: 'Yamunotri, the sacred source of the Yamuna River, marks the starting point of the revered Char Dham Yatra in Uttarakhand. Nestled in the Garhwal Himalayas at an altitude of 3,293 meters, it is surrounded by majestic peaks and serene natural beauty. Our spiritual journeys to Yamunotri include guided treks from Janki Chatti, visits to the Yamunotri Temple, and refreshing dips in the thermal springs of Surya Kund. Ideal for pilgrims and nature lovers alike, Yamunotri offers a soulful blend of devotion and Himalayan charm. Let us guide your first step on this divine journey into the heart of the mountains.',
            duration: 'Day 7'
          },
          {
            image: '/assets/uttarakhand-gangotri.jpg',
            title: 'Gangotri',
            description: 'Gangotri, the origin of the holy River Ganga, is a spiritually powerful and visually stunning destination nestled in the Garhwal Himalayas at 3,100 meters. Home to the revered Gangotri Temple, this sacred town draws pilgrims and trekkers alike. Our journeys to Gangotri include visits to the temple, scenic stops at Bhagirath Shila and Pandava Gufa, and treks toward Gaumukh—the glacier source of the Ganga. Surrounded by snow-covered peaks and pine forests, Gangotri offers a deep connection to nature and divinity. Let us take you on this soulful journey where faith flows as freely as the river it honors.',
            duration: 'Day 8'
          },
          {
            image: '/assets/uttarakhand-kedarnath.jpg',
            title: 'Kedarnath',
            description: 'Kedarnath, one of the holiest shrines in India and a key pillar of the Char Dham Yatra, is dedicated to Lord Shiva and nestled at an altitude of 3,583 meters in the majestic Garhwal Himalayas. Surrounded by snow-capped peaks and spiritual energy, the ancient Kedarnath Temple offers a deeply moving experience for devotees and travelers alike. Our packages include guided treks or helicopter services from Gaurikund, comfortable stays, and spiritual orientation. Whether you are seeking blessings, peace, or simply awe-inspiring views, Kedarnath is a journey of devotion and resilience—where every step feels like a step closer to the divine.',
            duration: 'Day 9'
          },
          {
            image: '/assets/uttarakhand-badrinath.webp',
            title: 'Badrinath',
            description: 'Badrinath, a sacred jewel in the Char Dham circuit, is nestled in the Nar-Narayan range of the Garhwal Himalayas at 3,300 meters. Home to the revered Badrinath Temple dedicated to Lord Vishnu, this holy town is set against stunning backdrops of snow-laden peaks and the Alaknanda River. Our spiritual journeys include temple darshan, visits to Mana—the last Indian village, and stops at Tapt Kund and Vasudhara Falls. Whether you seek divine connection or alpine beauty, Badrinath offers a perfect blend of devotion and Himalayan majesty. Let us guide you on this soul-stirring pilgrimage to the heart of Uttarakhand.',
            duration: 'Day 10'
          }
        ]
      },
      {
        name: 'Goa',
        tagline: 'Sun, sand, and vibrant nightlife.',
        bookingLink: '/book/goa',
        roadmap: [
          {
            image: '/assets/goa-beaches.webp',
            title: 'Goa Beaches',
            description: 'Goa, India’s premier beach destination, is home to a vibrant coastline dotted with golden sands, swaying palms, and a carefree spirit. From the lively shores of Baga and Calangute to the tranquil vibes of Palolem and Agonda, Goa’s beaches cater to every kind of traveler. Our curated experiences include beachside stays, water sports like parasailing and jet skiing, sunset cruises, seafood feasts, and vibrant beach parties. Whether you are chasing waves, peace, or nightlife, Goa’s beaches promise the perfect coastal escape. Let us plan your sun-kissed getaway to India’s tropical paradise where every shoreline tells a story.',
            duration: 'Day 1-2'
          },
          {
            image: '/assets/goa-oldgoa.webp',
            title: 'Old Goa',
            description: 'Old Goa, once the grand capital of Portuguese India, is a treasure trove of colonial architecture, baroque churches, and timeless charm. Known for its UNESCO World Heritage Sites, it houses iconic landmarks like the Basilica of Bom Jesus (resting place of St. Francis Xavier), Sé Cathedral, and Church of St. Cajetan. Our guided experiences include heritage walks, visits to ancient convents, museums, and riverside viewpoints that narrate centuries of rich history. With its serene ambiance, cultural depth, and stunning architecture, Old Goa offers a peaceful yet enlightening detour from the beach life—where every corner echoes the past.',
            duration: 'Day 3'
          },
          {
            image: '/assets/goa-dudhsagar.jpg',
            title: 'Dudhsagar Falls',
            description: 'Dudhsagar Falls, meaning “Sea of Milk,” is one of India’s tallest and most breathtaking waterfalls, cascading from a height of over 300 meters on the Goa-Karnataka border. Surrounded by lush forests of the Western Ghats, this natural wonder is a must-visit for nature lovers and adventure seekers. Our travel experiences include thrilling jeep safaris through the Bhagwan Mahavir Wildlife Sanctuary, guided treks, and scenic rail journeys passing by the falls. Whether you visit during the monsoon or cooler months, Dudhsagar’s roaring waters and emerald surroundings promise a magical escape into the wild heart of Goa’s hinterland.',
            duration: 'Day 4'
          }
        ]
      },
      {
        name: 'Kerala',
        tagline: 'God’s Own Country with backwaters and hills.',
        bookingLink: '/book/kerala',
        roadmap: [
          {
            image: '/assets/kerala-cochin.jpg',
            title: 'Cochin',
            description: 'Cochin, now known as Kochi, is a vibrant port city that perfectly blends colonial charm with modern flair on Kerala’s stunning Malabar Coast. Known as the “Queen of the Arabian Sea,” Cochin offers a rich mix of Portuguese, Dutch, and British influences seen in landmarks like Fort Kochi, Mattancherry Palace, and the iconic Chinese fishing nets. Our travel experiences include heritage walks, Kathakali dance performances, spice market tours, and backwater cruises. With its eclectic culture, coastal beauty, and historic depth, Cochin is the ideal starting point for a memorable journey through Kerala’s timeless landscapes and traditions.',
            duration: 'Day 1'
          },
          {
            image: '/assets/kerala-munnar.jpg',
            title: 'Munnar',
            description: 'Munnar, a picturesque hill station in Kerala’s Western Ghats, is known for its endless rolling tea gardens, misty mountains, and cool, refreshing climate. Once the summer retreat of British officers, it’s now a haven for honeymooners, nature lovers, and adventure seekers. Our curated experiences include visits to lush tea estates, scenic drives to Top Station, treks through Eravikulam National Park (home to the rare Nilgiri Tahr), and unforgettable camping under the stars in the hills. Enjoy bonfires, mountain views, and the pure mountain air as you unwind in nature. Munnar promises a peaceful escape into Kerala’s green paradise.',
            duration: 'Day 2'
          },
          {
            image: '/assets/kerala-thekkady.webp',
            title: 'Thekkady',
            description: 'Thekkady, famous for the Periyar Wildlife Sanctuary, is a lush green paradise that brings you face-to-face with Kerala’s raw natural beauty. Set in the Western Ghats, it’s the perfect escape for wildlife lovers, with experiences like boat safaris on Periyar Lake, guided nature walks, bamboo rafting, and spice plantation tours. Visitors can spot elephants, bison, and exotic birds in their natural habitat. Explore vibrant markets, savor authentic Kerala cuisine, and unwind in scenic jungle lodges and eco-resorts. Thekkady offers the perfect mix of adventure and serenity, all wrapped in the refreshing embrace of the forest.',
            duration: 'Day 3'
          },
          {
            image: '/assets/kerala-alleppy.jpg',
            title: 'Alleppey',
            description: 'Alleppey, often called the “Venice of the East,” is famous for its enchanting backwaters, lush paddy fields, and serene village life. This iconic destination in Kerala is best known for its traditional houseboat cruises along tranquil canals and Vembanad Lake. Our curated experiences include overnight stays in fully equipped houseboats, canoe rides through narrow canals, village walks, and visits to coir-making and toddy-tapping spots. Whether you are watching the sunset from a deck or enjoying a freshly prepared Kerala meal on board, Alleppey offers a peaceful escape into the heart of Kerala’s timeless backwater charm.',
            duration: 'Day 4'
          },
          {
            image: '/assets/kerala-kanyakumari.webp',
            title: 'Kanyakumari',
            description: 'Kanyakumari, the southernmost tip of India, is where the Arabian Sea, Bay of Bengal, and Indian Ocean meet in a breathtaking convergence. Known for its spiritual significance and stunning coastal views, it offers unforgettable sunrises and sunsets over the water. Our travel experiences include visits to the iconic Vivekananda Rock Memorial, Thiruvalluvar Statue, Kanyakumari Temple, and peaceful walks along the seaside promenade. Explore local markets, taste fresh coastal cuisine, and feel the power of nature at the confluence point. Kanyakumari is more than a destination—it’s an experience where spirituality, history, and nature meet at land’s end.',
            duration: 'Day 5'
          },
          {
            image: '/assets/kerala-kovalam.webp',
            title: 'Kovalam',
            description: 'Kovalam, one of Kerala’s most iconic beach destinations, is famed for its crescent-shaped shores, swaying palms, and laid-back vibe. Just a short drive from Thiruvananthapuram, Kovalam offers the perfect blend of relaxation and seaside adventure. Our curated experiences include sunbathing on Lighthouse Beach, swimming in the gentle surf, indulging in Ayurvedic massages, and enjoying fresh seafood by the shore. You can also take a catamaran ride with local fishermen or explore nearby cultural sites. Whether you are a beach lover, wellness seeker, or romantic traveler, Kovalam promises a warm, sandy escape with the charm of Kerala’s coastline.',
            duration: 'Day 6'
          },
          {
            image: '/assets/kerala-trivandrum.avif',
            title: 'Trivandrum',
            description: 'Trivandrum, officially known as Thiruvananthapuram, is the capital of Kerala and a city where heritage meets serenity. This coastal city offers a perfect blend of cultural landmarks, colonial charm, and natural beauty. Our travel experiences include visits to the sacred Padmanabhaswamy Temple, the Napier Museum, and Kuthiramalika Palace, along with peaceful walks through lush gardens and vibrant markets. Just a short drive from Kovalam Beach and Varkala, Trivandrum is also a gateway to coastal escapes. Whether you’re exploring royal history or savoring Kerala cuisine, Trivandrum is a well-rounded destination that offers tradition, tranquility, and tropical charm.',
            duration: 'Day 7'
          }
        ]
      },
      {
        name: 'Golden Triangle',
        tagline: 'India’s cultural and historical heart.',
        bookingLink: '/book/golden-triangle',
        roadmap: [
          {
            image: '/assets/goldentriangle-delhi.jpg',
            title: 'Delhi',
            description: 'Delhi, the dynamic capital of India, is a captivating blend of ancient heritage and modern vibrance. From the grandeur of Mughal landmarks like Red Fort, Jama Masjid, and Humayun’s Tomb to the colonial charm of India Gate and Rashtrapati Bhavan, every corner tells a story. Our curated experiences include heritage walks in Old Delhi, street food tours in Chandni Chowk, visits to spiritual sites like Akshardham and Lotus Temple, and shopping in bustling markets like Sarojini and Dilli Haat. Whether you are a history buff, foodie, or culture explorer, Delhi offers a whirlwind of flavors, stories, and timeless energy.',
            duration: 'Day 1'
          },
          {
            image: '/assets/goldentriangle-agra.jpg',
            title: 'Agra',
            description: 'Agra, the crown jewel of Mughal India, is best known for the Taj Mahal—an eternal symbol of love and architectural perfection. Our travel experiences offer multiple ways to witness its beauty: admire the sunrise from inside the monument, view its reflection from Mehtab Bagh across the Yamuna River, or enjoy peaceful moments at Taj Viewpoint Park. We also include guided tours of Agra Fort, the “Baby Taj” (Itimad-ud-Daulah), and heritage walks through the old city. Whether gazing at the Taj from a rooftop café or catching its glow in the moonlight, Agra promises a truly unforgettable journey.',
            duration: 'Day 2'
          },
          {
            image: '/assets/goldentriangle-jaipur.jpg',
            title: 'Jaipur',
            description: 'Jaipur, Rajasthan’s vibrant capital, is a royal blend of history, culture, and color. Known as the Pink City, it boasts stunning architecture, bustling bazaars, and majestic forts. Our travel experiences include exploring the grand Amber Fort with its hilltop views, strolling through the opulent City Palace, marveling at the intricate Hawa Mahal, and visiting Jantar Mantar—an astronomical wonder. Shop for traditional crafts in Johari and Bapu Bazaar, enjoy authentic Rajasthani cuisine, and take an evening ride to Nahargarh Fort for a panoramic sunset. Jaipur offers an unforgettable taste of regal India with a warm, colorful welcome.',
            duration: 'Day 3'
          }
        ]
      },
      {
        name: 'Rajasthan',
        tagline: 'Land of forts, deserts, and royalty.',
        bookingLink: '/book/rajasthan',
        roadmap: [
          {
            image: '/assets/rajasthan-jaipur.webp',
            title: 'Jaipur',
            description: 'Jaipur, Rajasthan’s vibrant capital, is a royal blend of history, culture, and color. Known as the Pink City, it boasts stunning architecture, bustling bazaars, and majestic forts. Our travel experiences include exploring the grand Amber Fort with its hilltop views, strolling through the opulent City Palace, marveling at the intricate Hawa Mahal, and visiting Jantar Mantar—an astronomical wonder. Shop for traditional crafts in Johari and Bapu Bazaar, enjoy authentic Rajasthani cuisine, and take an evening ride to Nahargarh Fort for a panoramic sunset. Jaipur offers an unforgettable taste of regal India with a warm, colorful welcome.',
            duration: 'Day 1'
          },
          {
            image: '/assets/rajasthan-ajmer.jpg',
            title: 'Ajmer',
            description: 'Ajmer, nestled in the Aravalli Hills of Rajasthan, is a city of deep spiritual significance and cultural unity. Best known for the revered Ajmer Sharif Dargah of Sufi saint Khwaja Moinuddin Chishti, it draws pilgrims from all faiths. Our travel experiences include guided visits to the Dargah, Adhai Din Ka Jhonpra, and Ana Sagar Lake, as well as a peaceful drive to the nearby Jain pilgrimage site, Nareli. Ajmer also serves as a gateway to the holy town of Pushkar. Whether you are visiting for devotion, reflection, or heritage, Ajmer offers a soulful journey wrapped in peace and tradition.',
            duration: 'Day 2'
          },
          {
            image: '/assets/rajasthan-pushkar.jpg',
            title: 'Pushkar',
            description: 'Pushkar, a sacred town nestled beside a tranquil lake and surrounded by desert hills, is one of India’s oldest pilgrimage destinations. Known for the rare Brahma Temple and its serene ghats, Pushkar offers a peaceful blend of devotion and bohemian charm. Our travel experiences include aarti ceremonies by Pushkar Lake, camel rides through the dunes, and exploration of vibrant bazaars filled with handicrafts and spiritual items. Time your visit with the famous Pushkar Camel Fair for a burst of color and culture. Whether you seek spiritual calm or artistic energy, Pushkar is a soulful stop on your Rajasthan journey.',
            duration: 'Day 2'
          },
          {
            image: '/assets/rajasthan-udaipur.jpg',
            title: 'Udaipur',
            description: 'Udaipur, often called the “City of Lakes,” is a dreamy blend of regal palaces, shimmering waters, and timeless Rajasthani elegance. Surrounded by the Aravalli Hills, this romantic city invites you to explore the majestic City Palace, take boat rides on Lake Pichola, and watch the sun dip behind the stunning Lake Palace and Jag Mandir. Our curated experiences include cultural shows at Bagore Ki Haveli, strolls through Saheliyon Ki Bari, and visits to traditional markets for art and jewelry. Whether you are planning a royal retreat or a honeymoon escape, Udaipur offers grace, history, and heart-stirring beauty at every turn.',
            duration: 'Day 3'
          },
          {
            image: '/assets/rajasthan-mountabu.webp',
            title: 'Mount Abu',
            description: 'Mount Abu, the only hill station in Rajasthan, offers a cool, green escape amidst the arid desert state. Nestled in the Aravalli Range, this charming retreat is known for its scenic landscapes, peaceful atmosphere, and stunning viewpoints. Our travel experiences include a visit to the magnificent Dilwara Jain Temples, boating on Nakki Lake, and sunset views from Honeymoon Point and Guru Shikhar—the highest peak in Rajasthan. Explore lush trails, local markets, and serene gardens. Whether you’re seeking spiritual calm or a refreshing mountain break, Mount Abu provides a perfect balance of nature, culture, and quiet charm.',
            duration: 'Day 4'
          },
          {
            image: '/assets/rajasthan-jodhpur.webp',
            title: 'Jodhpur',
            description: 'Jodhpur, known as the “Blue City” of Rajasthan, is a striking blend of mighty forts, royal palaces, and blue-painted old town streets. Towering above the city is the majestic Mehrangarh Fort, offering panoramic views and a glimpse into Rajput history. Our curated experiences include visiting the elegant Umaid Bhawan Palace, exploring the vibrant Sardar Market near the Clock Tower, and enjoying a zip-line ride over the fort. Wander through ancient stepwells, taste authentic Marwari cuisine, and soak in the desert charm. Jodhpur is where heritage, color, and culture come together under the golden glow of the desert sun.',
            duration: 'Day 5'
          },
          {
            image: '/assets/rajasthan-jaisalmer.jpg',
            title: 'Jaisalmer',
            description: 'Jaisalmer, rising from the heart of the Thar Desert, is a golden dream of forts, dunes, and timeless charm. Dominated by the majestic Jaisalmer Fort—one of the few “living forts” in the world—the city is a labyrinth of havelis, temples, and sandstone lanes. Our travel experiences include exploring Patwon Ki Haveli, camel safaris across Sam Sand Dunes, cultural performances under starlit skies, and desert camping with traditional Rajasthani hospitality. Whether you are chasing sunrises over the dunes or wandering through history-steeped walls, Jaisalmer promises an unforgettable journey into Rajasthan’s royal desert soul.',
            duration: 'Day 6'
          },
          {
            image: '/assets/rajasthan-bikaner.jpg',
            title: 'Bikaner',
            description: 'Bikaner, a vibrant city in the heart of the Thar Desert, is known for its grand palaces, richly carved temples, and world-famous camel culture. Dominated by the magnificent Junagarh Fort, the city also boasts stunning havelis, bustling bazaars, and the unique Karni Mata Temple—home to thousands of sacred rats. Our curated experiences include guided fort tours, visits to the National Research Centre on Camels, and a taste of authentic Bikaneri snacks. With a rich blend of history, desert charm, and local flavor, Bikaner offers a royal escape into Rajasthan’s less-traveled but deeply rewarding cultural heart.',
            duration: 'Day 7'
          }
        ]
      }
    ],
    setActiveDestination(index) {
      this.activeDestination = index;
    }
  };
}







// Toggle the details widget display
function toggleDetails(button) {
  try {
    var card = button.closest('.trek-card');
    var widget = card.querySelector('.card-widget');
    widget.classList.toggle('open');
    
    var altitude = card.getAttribute('data-altitude');
    var altitudeElem = widget.querySelector('.widget-item.altitude');
    if (altitude && altitudeElem) {
      altitudeElem.innerText = `Altitude: ${altitude}m`;
    }
    
    var climateElem = widget.querySelector('.widget-item.climate');
    if (widget.classList.contains('open') && climateElem && climateElem.getAttribute('data-fetched') !== 'true') {
      var lat = card.getAttribute('data-lat');
      var lon = card.getAttribute('data-lon');
      if (lat && lon) {
        fetchWeather(lat, lon).then(data => {
          if (data) {
            const temperature = Math.round(data.main.temp);
            const description = data.weather[0].description;
            climateElem.innerText = `Recent Climate: ${description}, ${temperature}°C`;
            climateElem.setAttribute('data-fetched', 'true');
          } else {
            climateElem.innerText = 'Recent Climate: Not available';
          }
        });
      }
    }
  } catch (error) {
    console.error("Toggle details failed: ", error);
  }
}

// Updated fetchWeather function to use latitude & longitude
function fetchWeather(lat, lon) {
  const API_KEY = '1c8dc94f1016223c8391a051d0c52d5e';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      return Promise.reject('Error: ' + response.status);
    })
    .catch(error => {
      console.error('Weather API error:', error);
      return null;
    });
}



// MUSIC

document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('bg-music');
  const btn   = document.getElementById('toggleMusic');
  const wrap  = document.getElementById('music-control');
  const icon  = document.getElementById('speakerIcon');
  const vol   = document.getElementById('volumeSlider');

  let isPlaying = false;
  let hideTimer;
  const isMobile = window.matchMedia('(max-width:640px)').matches;

  // Set initial volume & try muted autoplay
  music.volume = vol.value;
  music.play().catch(() => {});
  
  // Unmute on first interaction
  ['click','keydown','scroll'].forEach(evt =>
    window.addEventListener(evt, () => music.muted = false, { once: true })
  );

  // Play/pause toggle
  btn.addEventListener('click', () => {
    if (isPlaying) {
      music.pause();
      wrap.classList.remove('playing');
      icon.innerHTML = `
        <path d="M9.586 3.586A2 2 0 0 0 8 4.414v11.172a2 2
                 0 0 0 1.586 1.828l4.828 1.207A1 1 0 0 0
                 15.5 17V3a1 1 0 0 0-1.086-.993l-4.828
                 1.207z"/>
      `;
    } else {
      music.play();
      wrap.classList.add('playing');
      icon.innerHTML = `
        <path d="M8.707 5.293A1 1 0 0 0 7 6v8a1 1
                 0 0 0 1.707.707L13 10l-4.293-4.293z"/>
      `;
    }
    isPlaying = !isPlaying;

    // On mobile: show slider for 3s then hide again
    if (isMobile) {
      vol.classList.remove('hidden');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => vol.classList.add('hidden'), 3000);
    }
  });

  // Volume slider control
  vol.addEventListener('input', e => {
    music.volume = e.target.value;
  });
});


// ABOUT US Section Counters
document.addEventListener('DOMContentLoaded', () => {
  const counterSection = document.querySelector('.about-counters');
  const counters = document.querySelectorAll('.counter-number');
  const options = { rootMargin: '0px', threshold: 0.5 };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      counters.forEach(counter => {
        const raw     = counter.getAttribute('data-target');       // e.g. "750+"
        const target  = parseInt(raw, 10) || 0;                    // numeric part
        const suffix  = raw.replace(/\d/g, '');                    // any non‑digits
        const step    = Math.ceil(target / 200);
        const update  = () => {
          const curr = parseInt(counter.innerText.replace(/\D/g,''), 10) || 0;
          if (curr < target) {
            counter.innerText = (curr + step) + suffix;
            setTimeout(update, 15);
          } else {
            counter.innerText = target + suffix;
          }
        };
        update();
      });
      observer.unobserve(counterSection);
    });
  };

  new IntersectionObserver(callback, options)
    .observe(counterSection);
});




// SCROLL UP Button
document.addEventListener('scroll', function() {
  const scrollToTop = document.querySelector('.scroll-to-top');
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;
  const halfwayPoint = pageHeight * 0.5;

  if (scrollPosition > halfwayPoint) {
    scrollToTop.classList.add('visible');
  } else {
    scrollToTop.classList.remove('visible');
  }
});

document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor behavior
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth' // Smooth scrolling
  });
});


// HEADER ANIMATION

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelector('.nav-items');
  if (navItems) {
    // Duplicate the nav items for seamless scrolling
    navItems.innerHTML += navItems.innerHTML;
  }
});



// Booking-modal open/close logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('booking-modal');
  const openBtns = document.querySelectorAll('[data-modal-trigger]');
  const closeBtn = document.getElementById('modal-close');
  const form = document.querySelector('.booking-form');

  // Initialize intl-tel-input
  const phoneInput = document.getElementById('phone');
  const phoneFullInput = document.getElementById('phone-full');
  const iti = window.intlTelInput(phoneInput, {
    initialCountry: 'us',
    separateDialCode: true,
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  });

  openBtns.forEach(btn => {
    btn.addEventListener('click', ev => {
      ev.preventDefault();
      modal.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Click outside form to close
  modal.addEventListener('click', ev => {
    if (ev.target === modal) {
      modal.classList.add('hidden');
    }
  });

  // ESC key to close
  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });

  // Reset form on close
  closeBtn.addEventListener('click', () => {
    form.reset();
    iti.setNumber(''); // Reset phone input
    phoneFullInput.value = '';
  });

  modal.addEventListener('click', ev => {
    if (ev.target === modal) {
      form.reset();
      iti.setNumber(''); // Reset phone input
      phoneFullInput.value = '';
    }
  });
});

// Sanitization functions
function sanitizeInput(element) {
  // Remove HTML tags and dangerous characters
  element.value = element.value.replace(/[<>\&;]/g, '');
}

function validateForm(event) {
  event.preventDefault();
  const phoneInput = document.getElementById('phone');
  const phoneFullInput = document.getElementById('phone-full');
  const phoneError = document.getElementById('phone-error');

  // Validate phone number using intl-tel-input
  const phoneNumber = window.intlTelInputGlobals.getInstance(phoneInput).getNumber();
  if (!window.intlTelInputGlobals.getInstance(phoneInput).isValidNumber()) {
    phoneError.classList.remove('hidden');
    return false;
  } else {
    phoneError.classList.add('hidden');
    phoneFullInput.value = phoneNumber; // Store full number with country code
  }

  // Submit the form
  document.getElementById('bookingForm').submit();
  return true;
}