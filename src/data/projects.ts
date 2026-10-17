export type ProjectCategory =
  | "Villa & Konut"
  | "Kamusal"
  | "Kurumsal"
  | "Eğitim"
  | "İç Mekan"
  | "Etkinlik";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  image: string;
  images: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pegasus-villa",
    title: "Arnavutköy Pegasus Villaları Ü.D. Evi",
    location: "İstanbul Arnavutköy",
    category: "Villa & Konut",
    summary: `Arnavutköy Pegasus Villaları Ü.D. Evi projesinde, ilk keşif aşamasından son uygulama adımına kadar tüm süreçler profesyonel ekibimizce anahtar teslim anlayışıyla yürütülmüştür.`,
    description: `Arnavutköy Pegasus Villaları Ü.D. Evi – Anahtar Teslim Lüks Villa ve Peyzaj Projesi
Arnavutköy Pegasus Villaları Ü.D. Evi projesinde, ilk keşif aşamasından son uygulama adımına kadar tüm süreçler profesyonel ekibimizce anahtar teslim anlayışıyla yürütülmüştür. Modern mimariyi ve doğayı buluşturan bu projede, öncelikle yapının estetiğini ve izolasyonunu güçlendiren yüksek kaliteli bina cephe kaplama uygulaması tamamlanmıştır.
Projeye dört mevsim kullanılabilir bir yaşam alanı kazandıran kış bahçesi ve kış bahçesinin merkezinde konumlanan büyüleyici sonsuzluk havuzu, lüks konut mimarisinin en üst standartlarını yansıtmaktadır. Bahçe genelinde ise doğayla bütünleşik bir yaşam sunmak amacıyla özel hobi bahçesi düzenlemesi yapılmış, açık hava akşamlarına keyif katacak estetik bir ateş çukuru alanı kurgulanmıştır.
Görsel devamlılığı ve fonksiyonelliği sağlamak adına dayanıklı zemin kaplamaları, canlı çim serimi ve yeşil alanların sürekliliğini garantileyen otomatik sulama sistemi kurulumu titizlikle uygulanmıştır. Mimariye uygun seçilen estetik bitki dikimi çalışmalarıyla peyzaj tasarımı taçlandırılırken, gece şıklığını öne çıkaran bütünleşik bina ve peyzaj aydınlatma sistemleri entegre edilmiştir.
Arnavutköy villa peyzaj ve mimari uygulamaları arasında fark yaratan bu çalışma; fonksiyonel çözümleri, kaliteli malzeme kullanımı ve bütünsel tasarım anlayışıyla hayallerdeki yaşam alanını gerçeğe dönüştürmüştür.`,
    image: "/projects/pegasus-villa/01.jpg",
    images: ["/projects/pegasus-villa/01.jpg","/projects/pegasus-villa/02.jpg","/projects/pegasus-villa/03.jpg","/projects/pegasus-villa/04.jpg","/projects/pegasus-villa/05.jpg","/projects/pegasus-villa/06.jpg","/projects/pegasus-villa/07.jpg"],
    featured: true,
  },
  {
    slug: "ozel-eris-anaokulu",
    title: "Özel Eriş Anaokulu",
    location: "İstanbul",
    category: "Eğitim",
    summary: `Özel Eriş Anaokulu için hayata geçirdiğimiz peyzaj projesi, keşif aşamasından uygulamaya kadar tüm süreçleri kapsayan bütüncül bir anahtar teslim çalışmadır.`,
    description: `Özel Eriş Anaokulu Peyzaj Tasarımı ve Uygulama Projesi
Özel Eriş Anaokulu için hayata geçirdiğimiz peyzaj projesi, keşif aşamasından uygulamaya kadar tüm süreçleri kapsayan bütüncül bir anahtar teslim çalışmadır. Tasarım sürecinde hazırlanan 3D peyzaj modellemeleri sayesinde, alanın her bir detayı uygulama öncesinde titizlikle planlanmış ve görselleştirilmiştir. Projenin temel odağında, çocukların erken yaşta doğayla sürdürülebilir bir bağ kurmalarını destekleyen çocuk dostu peyzaj mimarisi ilkeleri yer almaktadır.
Bu doğrultuda tasarlanan hobi bahçesi ve modern sera alanı, miniklerin toprakla temas etmelerine ve bitki yetiştirme deneyimi kazanmalarına imkân tanır. Çocukların zihinsel gelişimini, yön bulma becerilerini ve keşif duygularını pekiştirmek amacıyla projeye özel bir bitki labirenti entegre edilmiştir. Doğal kurgusuyla öne çıkan bitki labirentinin çıkışı, doğrudan hobi bahçesine yönlendirilmiştir. Hobi bahçesi ise akıcı bir geçiş hattı ile çocuk oyun alanına bağlanarak kesintisiz bir açık alan sirkülasyonu oluşturmaktadır.
Bu işlevsel bağlantı kurgusu, çocuklara geleneksel oyun ekipmanlarından bağımsız olarak kendi özgün oyunlarını kurma ve hayal güçlerini geliştirme imkânı sunar. Anaokulu bahçe tasarımı kapsamında sadece öğrenciler değil, veliler ve öğretmenler için de konforlu sosyal alanlar kurgulanmıştır. Alanda konumlandırılan estetik kamelya düzenlemesi, velilerin ve eğitmenlerin doğa içerisinde dinlenebilecekleri keyifli bir dinlenme noktası oluşturmaktadır.
Uygulama sürecinde tercih edilen nitelikli peyzaj malzemeleri ve iklime dayanıklı bitki seçimi, alanın uzun ömürlü ve güvenli kalmasını sağlar. Eğitici ve rekreatif açık alan çözümlerini bir araya getiren Özel Eriş Anaokulu, yenilikçi peyzaj uygulamalarıyla öne çıkmaktadır. Kurumsal peyzaj mimarlığı hizmetlerimizle eğitim kurumlarına değer katan, doğayla barışık ve fonksiyonel açık mekânlar tasarlamaya devam ediyoruz.`,
    image: "/projects/ozel-eris-anaokulu/01.jpg",
    images: ["/projects/ozel-eris-anaokulu/01.jpg","/projects/ozel-eris-anaokulu/02.jpg","/projects/ozel-eris-anaokulu/03.jpg","/projects/ozel-eris-anaokulu/04.jpg","/projects/ozel-eris-anaokulu/05.jpg","/projects/ozel-eris-anaokulu/06.jpg","/projects/ozel-eris-anaokulu/07.jpg","/projects/ozel-eris-anaokulu/08.jpg","/projects/ozel-eris-anaokulu/09.jpg","/projects/ozel-eris-anaokulu/10.jpg","/projects/ozel-eris-anaokulu/11.jpg","/projects/ozel-eris-anaokulu/12.jpg","/projects/ozel-eris-anaokulu/13.jpg","/projects/ozel-eris-anaokulu/14.jpg","/projects/ozel-eris-anaokulu/15.jpg","/projects/ozel-eris-anaokulu/16.jpg"],
    featured: true,
  },
  {
    slug: "aliaga-spor",
    title: "Aliağa Belediyesi Spor ve Yaşam Merkezi",
    location: "İzmir Aliağa",
    category: "Kamusal",
    summary: `İzmir Aliağa’da hayata geçirilen Aliağa Belediyesi Spor ve Yaşam Merkezi projesinde, peyzaj ve çevre uygulamaları baştan sona büyük bir titizlikle yürütülmüştür.`,
    description: `Aliağa Belediyesi Spor ve Yaşam Merkezi Peyzaj ve Çevre Uygulama Projesi
İzmir Aliağa’da hayata geçirilen Aliağa Belediyesi Spor ve Yaşam Merkezi projesinde, peyzaj ve çevre uygulamaları baştan sona büyük bir titizlikle yürütülmüştür. Modern kent mimarisine değer katan bu kapsamlı projede, estetik ve fonksiyonelliği buluşturan geniş ölçekli bir açık alan tasarımı uygulanmıştır. Proje kapsamında imal edilen beton oturma elemanları ahşap kaplamaları, yüksek dayanıklılık ile doğal estetiği bir arada sunmaktadır. Özel tasarım ahşap oturma elemanları, ziyaretçilerin açık havada konforlu vakit geçirmesine olanak tanır. Sosyal etkileşimi ve kültürel aktiviteleri desteklemek amacıyla alana yerleştirilen ahşap kitap okuma birimleri, sakin ve keyifli bir dinlenme deneyimi sağlamaktadır.
Aktif yaşamı teşvik eden açık hava beton masa tenisleri, her yaştan kullanıcının güvenle spor yapabileceği dayanıklı donatılar olarak kurgulanmıştır. Profesyonel standartlarda hazırlanan okçuluk alanı, merkezin spor çeşitliliğini artıran nitelikli açık alanlar arasında yer alır. Tesis genelinde güvenli ve ergonomik bir sirkülasyon hattı oluşturmak adına suni granit plak taş zemin döşemesi uygulamaları gerçekleştirilmiştir. Yolları ve meydan alanlarını bütünsel bir estetikle tamamlayan parke taş zemin döşemesi çalışmaları, alana uzun ömürlü bir zemin yapısı kazandırmıştır.
Projenin yeşil dokusunu oluşturan rulo çim serimi uygulaması ile geniş alanlar canlı ve ferah bir görünüme kavuşturulmuştur. Yeşil alanların her zaman bakımlı kalması ve su kaynaklarının verimli kullanılması amacıyla akıllı otomatik sulama sistemi kurulumu yapılmıştır. Eğimli arazide kurgulanan kademeli amfi oturma düzenlemeleri ve teraslama çözümleri, açık hava etkinlikleri için maksimum kapasite sağlamaktadır. Özel tasarlanan dış mekân peyzaj aydınlatması, tesisin gece saatlerinde de büyüleyici, prestijli ve güvenli bir atmosfer sunmasını sağlar.
Spor sahaları, sosyal alanlar ve dinlenme noktaları peyzajın genel dokusuyla tam bir uyum içerisinde entegre edilmiştir. Sürdürülebilir malzeme seçimi ve nitelikli işçilik ilkeleriyle yürütülen çevre düzenleme çalışmaları, tesisin kullanım ömrünü uzatmaktadır. Bölge halkının sosyal, kültürel ve sportif ihtiyaçlarına yanıt veren proje, Aliağa’nın modern kent kimliğini güçlendirmektedir. Kamusal alan peyzaj uygulamaları ve kentsel donatı imalatları konularında nitelikli bir referans olan bu çalışma, spor ile doğayı tek bir merkezde buluşturarak kentsel yaşam kalitesini üst seviyeye taşımaktadır.`,
    image: "/projects/aliaga-spor/01.jpg",
    images: ["/projects/aliaga-spor/01.jpg","/projects/aliaga-spor/02.jpg","/projects/aliaga-spor/03.jpg","/projects/aliaga-spor/04.jpg","/projects/aliaga-spor/05.jpg","/projects/aliaga-spor/06.jpg","/projects/aliaga-spor/07.jpg","/projects/aliaga-spor/08.jpg","/projects/aliaga-spor/09.jpg","/projects/aliaga-spor/10.jpg","/projects/aliaga-spor/11.jpg","/projects/aliaga-spor/12.jpg","/projects/aliaga-spor/13.jpg","/projects/aliaga-spor/14.jpg","/projects/aliaga-spor/15.jpg","/projects/aliaga-spor/16.jpg"],
    featured: true,
  },
  {
    slug: "ford-golcuk",
    title: "Ford Otosan Gölcük Dinlenme Alanı",
    location: "Kocaeli Gölcük",
    category: "Kurumsal",
    summary: `Ford Otosan Gölcük tesisleri için çizilen bu kapsamlı peyzaj tasarımı projesi, fabrika çalışanlarının serbest zamanlarında dinlenebilecekleri, keyifli vakit geçirebilecekleri ve doğayla olan…`,
    description: `Ford Otosan Gölcük Dinlenme Alanı Peyzaj Tasarımı
Ford Otosan Gölcük tesisleri için çizilen bu kapsamlı peyzaj tasarımı projesi, fabrika çalışanlarının serbest zamanlarında dinlenebilecekleri, keyifli vakit geçirebilecekleri ve doğayla olan bağlarını güçlendirebilecekleri nitelikli bir açık yaşam alanı sunmaktadır. Endüstriyel alanlarda çalışan refahını ve motivasyonunu artırmayı hedefleyen proje, sürdürülebilir peyzaj mimarisi prensipleriyle kurgulanmıştır. Çalışanların fiziksel aktivitelerini desteklemek amacıyla yeşil dokunun içinden geçen organik formlu bir yürüyüş parkuru tasarlanmıştır.
Sosyalleşmeyi teşvik eden ahşap amfi ve hemen önünde yer alan meydan düzenlemesi, açık hava etkinlikleri ve toplu buluşmalar için ideal bir alan oluşturur. Proje kapsamında konumlandırılan sosyal tesis ve çevresindeki dinlenme alanları, alanın dört mevsim işlevsel olarak kullanılmasını sağlar. Mikroklima etkisi yaratan ve alana huzur katan süs havuzu, peyzaj kompozisyonunun estetik odak noktalarından birini teşkil etmektedir. Doğayla doğrudan etkileşimi artıran hobi bahçesi ve ahşap malzeme kulübesi, çalışanlara tarımsal üretim ve toprakla terapi imkânı sunar.
Rekreatif faaliyetler ve spor için özel olarak planlanan gölgelikli açık hava masa tenisi alanı, hareketli bir sosyal alan kurgusunu tamamlar. Alan genelinde kullanılan özel tasarım ahşap oturma elemanları ve bitkilendirilmiş kent mobilyaları, mimari doku ile doğal çevrenin mükemmel uyumunu sergiler. Yoğun ağaçlandırma, renkli çiçek grupları ve mevsimlik çalı düzenlemeleri sayesinde görsel açıdan zengin bir botanik çeşitlilik sağlanmıştır. Kurumsal peyzaj çözümlerinde fonksiyonellik ile estetiği buluşturan bu proje, endüstriyel tesislerde insan odaklı tasarım anlayışına örnek oluşturmaktadır. Fabrika bahçe tasarımı, açık alanda mola çözümleri ve rekreatif peyzaj uygulamalarında fark yaratan çalışma, yerleşkenin genel mimari ve marka değerini yükseltmektedir. Geleceğe dönük, sürdürülebilir ve ekolojik peyzaj altyapısı sayesinde tesis çalışanlarına uzun yıllar hizmet edecek konforlu bir yaşam altyapısı kazandırılması amaçlanmıştır.`,
    image: "/projects/ford-golcuk/01.jpg",
    images: ["/projects/ford-golcuk/01.jpg","/projects/ford-golcuk/02.jpg","/projects/ford-golcuk/03.jpg","/projects/ford-golcuk/04.jpg","/projects/ford-golcuk/05.jpg","/projects/ford-golcuk/06.jpg","/projects/ford-golcuk/07.jpg","/projects/ford-golcuk/08.jpg","/projects/ford-golcuk/09.jpg","/projects/ford-golcuk/10.jpg","/projects/ford-golcuk/11.jpg","/projects/ford-golcuk/12.jpg","/projects/ford-golcuk/13.jpg","/projects/ford-golcuk/14.jpg","/projects/ford-golcuk/15.jpg","/projects/ford-golcuk/16.jpg"],
    featured: true,
  },
  {
    slug: "alemdag-villa",
    title: "Alemdağ Villa Peyzaj Tasarımı",
    location: "İstanbul Çekmeköy",
    category: "Villa & Konut",
    summary: `Çekmeköy Alemdağ’da estetik ile fonksiyonelliği buluşturan prestijli bir açık yaşam alanı projesidir.`,
    description: `Alemdağ Villa Peyzaj Tasarımı
Çekmeköy Alemdağ’da estetik ile fonksiyonelliği buluşturan prestijli bir açık yaşam alanı projesidir. Eğimli arazi yapısına özel olarak geliştirilen profesyonel kot çözümleri sayesinde bahçe, iki farklı kullanım karakterine ayrılmıştır.
Hareketli ve sosyal bir anlayışla kurgulanan üst kot, villanın ana eğlence ve dinlenme merkezi olarak öne çıkmaktadır. Bu alanda yer alan özel tasarım yüzme havuzu, güneşlenme deck'i ve modern açık hava barı, lüks villa yaşamının tüm gereksinimlerini karşılar. Özel kurgulanmış ateş çukuru ve konforlu oturma alanı ise akşam saatlerinde keyifli buluşmalara ev sahipliği yapacak sıcak bir ortam sunmaktadır. Bar yapısının alt kısmında, merdiven hizasında yer alan kulübe ise alan tasarrufu sağlayan işlevsel bir müştemilat olarak projeye entegre edilmiştir.
Üst alanın dinamik atmosferine karşın alt kot, doğayla bütünleşme ihtiyacına yanıt veren son derece sakin ve doğal bir yapıya sahiptir. Bu alanda oluşturulan meyve bahçesi, mekan sakinlerine huzurlu ve yeşille iç içe bir yaşam imkanı vadeder. Katmanlı bahçe düzenlemesi sayesinde arazi eğimi avantaja dönüştürülerek mekânsal derinlik ve kullanım verimliliği artırılmıştır. Çekmeköy villa peyzaj mimarlığı standartlarını yükselten bu proje, modern tasarım ögeleri ile doğal bahçe dokusunu kusursuz bir dengede buluşturmaktadır.`,
    image: "/projects/alemdag-villa/01.png",
    images: ["/projects/alemdag-villa/01.png","/projects/alemdag-villa/02.png","/projects/alemdag-villa/03.png","/projects/alemdag-villa/04.png","/projects/alemdag-villa/05.png","/projects/alemdag-villa/06.png","/projects/alemdag-villa/07.png","/projects/alemdag-villa/08.png","/projects/alemdag-villa/09.png","/projects/alemdag-villa/10.png","/projects/alemdag-villa/11.png","/projects/alemdag-villa/12.png","/projects/alemdag-villa/13.png","/projects/alemdag-villa/14.png","/projects/alemdag-villa/15.png"],
  },
  {
    slug: "ayvacik-tiny-house",
    title: "Ayvacık Tiny House Projesi",
    location: "Çanakkale Ayvacık",
    category: "Villa & Konut",
    summary: `Çanakkale Ayvacık'ın büyüleyici doğasında hayata geçirilen bu Tiny House peyzaj tasarımı projesi, eğimli araziler için geliştirilen özel teraslama çözümleriyle ekolojik yaşamı modern konforl…`,
    description: `Ayvacık Tiny House Peyzaj Tasarımı ve Teraslama Projesi
Çanakkale Ayvacık'ın büyüleyici doğasında hayata geçirilen bu Tiny House peyzaj tasarımı projesi, eğimli araziler için geliştirilen özel teraslama çözümleriyle ekolojik yaşamı modern konforla buluşturmaktadır. Arazi eğimini avantaja dönüştüren kademeli mimari yaklaşım, hem alan kullanımını maksimuma çıkarmakta hem de her platformda kesintisiz bir doğa manzarası sunmaktadır. Bölgenin yerel dokusuna ve mimari kimliğine sadık kalınarak tasarlanan doğal taş duvarlar, projeye otantik bir estetik kazandırırken strüktürel açıdan da uzun ömürlü bir dayanıklılık sağlamaktadır.
Projenin alt kotunda konumlandırılan özel otopark alanı, araç park ihtiyacını düzenli bir şekilde çözerek yerleşke içinde sakin ve güvenli bir atmosfer oluşturur. Otopark alanının hemen yanında planlanan özel hobi bahçeleri, kullanıcıların kendi organik ürünlerini keyifle ekip biçebilecekleri sürdürülebilir bir açık alan deneyimi sunmaktadır. Teraslanmış üst platformlarda konumlanan yerleşke alanları, ahşap veranda ve estetik gölgelik sistemleriyle açık hava yaşam kalitesini yükseltmektedir.
Akşam saatlerinde keyifli sohbetlere ev sahipliği yapmak üzere kurgulanan ateş çukuru konseptli sosyal oturma alanları, projenin en çekici odak noktalarından birini oluşturmaktadır. Mıcır zemin kaplaması ve ergonomik dış mekân mobilyalarıyla tamamlanan ateş çukuru düzenlemesi, açık havada sıcak ve samimi bir sosyalleşme ortamı yaratır. Teras seviyeleri arasındaki geçişi sağlayan doğal taş merdivenler ve yürüyüş hatları, alan içerisinde akıcı ve konforlu bir sirkülasyon sağlar.
Eğimli arazi peyzaj çözümleri ve arazi ıslahı konularında nitelikli bir örnek sunan bu çalışma, Tiny House projeleri arasında fark yaratan bir standart belirlemektedir. Doğayla uyumlu, fonksiyonel ve yaşam kalitesini artıran bu peyzaj tasarımı, minimalist yaşam hayalini doğanın kalbinde ayrıcalıklı bir deneyime dönüştürmektedir.`,
    image: "/projects/ayvacik-tiny-house/01.png",
    images: ["/projects/ayvacik-tiny-house/01.png","/projects/ayvacik-tiny-house/02.png","/projects/ayvacik-tiny-house/03.png","/projects/ayvacik-tiny-house/04.png","/projects/ayvacik-tiny-house/05.png","/projects/ayvacik-tiny-house/06.png","/projects/ayvacik-tiny-house/07.png","/projects/ayvacik-tiny-house/08.png","/projects/ayvacik-tiny-house/09.png","/projects/ayvacik-tiny-house/10.png","/projects/ayvacik-tiny-house/11.png"],
  },
  {
    slug: "eksizade-konaklari",
    title: "Ekşizade Konakları Peyzaj Tasarımı",
    location: "İstanbul",
    category: "Villa & Konut",
    summary: `Ekşizade Konakları için hazırlanan bu özel peyzaj tasarımı, doğayla modern mimariyi estetik bir dengede buluşturan prestijli bir yaşam alanı projesidir.`,
    description: `Ekşizade Konakları Peyzaj Tasarım Projesi: Estetik, Konfor ve Fonksiyonellik
Ekşizade Konakları için hazırlanan bu özel peyzaj tasarımı, doğayla modern mimariyi estetik bir dengede buluşturan prestijli bir yaşam alanı projesidir. Modern peyzaj mimarisi ilkeleri doğrultusunda kurgulanan proje, hem görsel şıklığı hem de fonksiyonel kullanım alanlarını bir arada sunmaktadır. Projenin odak noktasında yer alan açık yüzme havuzu, konut sakinlerine ferah bir serinleme ve sosyalleşme ortamı vadeder. Havuz alanıyla entegre edilen özel tasarım pergola sistemleri, günün her saatinde gölgelik ve konforlu dinlenme imkânı sağlar. Fonksiyonel pergola çözümleri, açık hava yaşam alanlarını şık bir sosyal merkeze dönüştürür.
Çocukların güvenle vakit geçirmesi için planlanan çocuk oyun alanı, darbe emici ve esnek zemin kaplamalarıyla donatılmıştır. Çocuk gelişimini destekleyen modern oyun grubu tasarımları, peyzajın genel dokusuyla tam bir görsel uyum içerisindedir. Alan genelinde kullanılan zengin bitki seçkisi ve geniş çim alanlar, projeye yılın her mevsiminde canlılık katar. Sitenin araç trafiğini ve park ihtiyacını düzenleyen otopark alanı, peyzajın doğal estetiğini bozmayacak şekilde konumlandırılmıştır. Güvenli ve erişilebilir otopark çözümleri, bitkisel perdelemelerle genel peyzaj düzenlemesine entegre edilmiştir. Sürdürülebilir peyzaj tasarımı ve akıllı sulama altyapısı, yeşil alanların her zaman bakımlı ve uzun ömürlü kalmasını sağlar. Yürüyüş yolları ve özel peyzaj aydınlatmaları, gece ve gündüz konforlu bir açık alan kullanımı sunmaktadır. Ekşizade Konakları peyzaj projesi, konutların gayrimenkul değerini artırırken yaşam standartlarını üst seviyeye taşır. Doğa dostu yaklaşımı, konforlu sosyal alanları ve estetik detaylarıyla bu tasarım, nitelikli bir peyzaj mimarisi örneğidir.`,
    image: "/projects/eksizade-konaklari/01.jpg",
    images: ["/projects/eksizade-konaklari/01.jpg","/projects/eksizade-konaklari/02.jpg","/projects/eksizade-konaklari/03.jpg","/projects/eksizade-konaklari/04.jpg","/projects/eksizade-konaklari/05.jpg","/projects/eksizade-konaklari/06.jpg","/projects/eksizade-konaklari/07.jpg"],
  },
  {
    slug: "park-mavera-4",
    title: "Park Mavera 4 Tahsisli Alan Peyzajı",
    location: "İstanbul",
    category: "Villa & Konut",
    summary: `Park Mavera 4 Sitesi bünyesindeki özel tahsisli bahçe alanında hayata geçirilen bu peyzaj projesi, konut sakinlerinin kişisel mahremiyet ihtiyacını ön planda tutan nitelikli bir çevre düzenl…`,
    description: `Park Mavera 4 Sitesi Tahsisli Alan Peyzaj Tasarımı ve Uygulaması
Park Mavera 4 Sitesi bünyesindeki özel tahsisli bahçe alanında hayata geçirilen bu peyzaj projesi, konut sakinlerinin kişisel mahremiyet ihtiyacını ön planda tutan nitelikli bir çevre düzenleme çalışmasıdır. Dış bakışlardan izole, korunaklı ve huzurlu bir açık yaşam alanı oluşturmak amacıyla projede fonksiyonel bitkisel perdeleme çözümleri uygulanmıştır. Yoğun yapraklı ve sütun formlu ibreli ağaç gruplarıyla kurgulanan doğal perdeleme hattı, estetikten ödün vermeden maksimum gizlilik ve mahremiyet sağlar. Yeşil perdenin binaya ve iç yaşam alanına bakan iç cephesinde ise renkli ve renkliliğiyle mevsime canlılık katan özel çiçekli bitki aranjmanları kullanılmıştır.
Doğal ahşap saksı ve bordür sistemleriyle desteklenen bitkilendirme tasarımları, bahçe düzenlemesine sıcak ve organik bir doku kazandırmaktadır. Çiçekli çalılar, mevsimlik çiçekler ve canlı çim dokusu, bina sakinlerinin pencerelerinden baktıklarında görsel bir şölenle karşılaşmalarını sağlar. Proje, alan keşfi ve saha analiziyle başlayıp konsept tasarım, 3D modelleme ve yerinde uygulama aşamalarını kapsayan tam teşekküllü bir süreçle yürütülmüştür. Detaylı 3D peyzaj görselleştirme çalışmaları sayesinde tasarımın her aşaması uygulama öncesinde titizlikle planlanmıştır.
Tüm aşamaları tek elden yönetilen proje, eksiksiz bir işçilikle anahtar teslim olarak kullanıcıya sunulmuştur. Özel konut ve bahçe tahsisli alan peyzaj uygulamalarında referans niteliğinde olan bu çalışma, konfor ve fonksiyonelliği bir arada barındırmaktadır. Mahremiyet odaklı bahçe tasarımı ve villa peyzaj çözümleri arayanlar için yenilikçi bir ilham kaynağı sunulmaktadır. Yeşil alanın sürdürülebilirliği ve bitki sağlığı göz önünde bulundurularak toprağın biyolojik yapısına uygun bir peyzaj altyapısı kurgulanmıştır. Park Mavera 4 projesindeki bu uygulama, yaşam kalitesini artırırken konutun genel estetik ve gayrimenkul değerine doğrudan katkı sağlamaktadır.`,
    image: "/projects/park-mavera-4/01.png",
    images: ["/projects/park-mavera-4/01.png","/projects/park-mavera-4/02.png","/projects/park-mavera-4/03.png","/projects/park-mavera-4/04.png","/projects/park-mavera-4/05.png","/projects/park-mavera-4/06.png","/projects/park-mavera-4/07.png","/projects/park-mavera-4/08.png","/projects/park-mavera-4/09.png","/projects/park-mavera-4/10.png","/projects/park-mavera-4/11.jpeg","/projects/park-mavera-4/12.jpeg","/projects/park-mavera-4/13.jpeg","/projects/park-mavera-4/14.jpeg","/projects/park-mavera-4/15.jpeg","/projects/park-mavera-4/16.jpeg"],
  },
  {
    slug: "diyarbakir-kir-dugun",
    title: "Diyarbakır Kır Düğün Alanı",
    location: "Diyarbakır",
    category: "Etkinlik",
    summary: `Diyarbakır'da sıfırdan hayata geçirilen bu özel kır düğün alanı projesi, geleneksel mimari dokuyu modern açık hava organizasyon konseptiyle kusursuz bir şekilde buluşturuyor.`,
    description: `Diyarbakır Kır Düğün Alanı Peyzaj ve Mimari Tasarım Projesi
Diyarbakır'da sıfırdan hayata geçirilen bu özel kır düğün alanı projesi, geleneksel mimari dokuyu modern açık hava organizasyon konseptiyle kusursuz bir şekilde buluşturuyor. Bölgenin iklimsel ve kültürel gereksinimleri dikkate alınarak tasarlanan mekan, estetik ve fonksiyonelliği üst seviyede sunan kapsamlı bir peyzaj mimarisi örneğidir. Projenin giriş bölümünde yer alan geniş iç avlu, misafirleri karşılayan ferah bir alan sunarken geleneksel çatı ve taş dokularıyla güçlü bir mimari karakter sergiler. İdari bina, organizasyon yönetiminin profesyonelce yürütülmesini sağlarken; gelin ve damat için özel olarak kurgulanan gelin odası yüksek konfor standartlarına sahiptir. Tesis genelinde stratejik noktalara konumlandırılan modern WC alanları, yüksek davetli kapasitelerinde dahi konuklara erişim kolaylığı sağlar.
Yemyeşil çim alan üzerine kurgulanan misafir ağırlama bölümü, özel masa düzeni ve zengin peyzaj detaylarıyla prestijli davetler için ideal bir atmosfer yaratır. Odak noktasına yerleştirilen geniş dans pisti ve sahne alanı, açık hava düğünleri, nişan ve özel kutlamalar için mükemmel bir etkinlik alanı sunar. Alan içerisindeki yürüyüş yolları ve geçiş koridorları, davetlilerin alan içinde rahatça hareket edebileceği ergonomik sirkülasyon hatlarıyla planlanmıştır. Ailelerin organizasyon boyunca keyifli vakit geçirmesi amacıyla tasarlanan çocuk oyun alanı, esnek zemin kaplaması ve güvenli oyun gruplarıyla donatılmıştır. Güvenlik kontrollü giriş ve nizamiye ile desteklenen geniş kapasiteli otopark alanı, araç trafiğini ve park ihtiyacını sorunsuz şekilde çözer.
Bütüncül peyzaj tasarımı kapsamında seçilen gölgecil ağaçlar ve estetik bitki grupları, alanda ferah ve doğal bir mikroklima oluşturur. Özel olarak kurgulanan dış mekân peyzaj aydınlatmaları, gece davetlerinde büyüleyici ve masalsı bir görsel şölen vadeder. Sürdürülebilir altyapı çözümleri ve akıllı sulama sistemleri, yeşil alanların yılın her döneminde canlı ve bakımlı kalmasını sağlar. Tüm mekânsal birimleri birbiriyle tam uyum içinde çalışan bu tasarım, Diyarbakır kır düğün salonu ve açık hava mekan projeleri arasında yenilikçi bir standart belirlemektedir. Estetik, güvenlik ve konforu tek bir konseptte birleştiren proje, unutulmaz anılara ev sahipliği yapacak nitelikli bir organizasyon mekanı sunmaktadır.`,
    image: "/projects/diyarbakir-kir-dugun/01.jpg",
    images: ["/projects/diyarbakir-kir-dugun/01.jpg","/projects/diyarbakir-kir-dugun/02.jpg","/projects/diyarbakir-kir-dugun/03.jpg","/projects/diyarbakir-kir-dugun/04.jpg","/projects/diyarbakir-kir-dugun/05.jpg","/projects/diyarbakir-kir-dugun/06.jpg","/projects/diyarbakir-kir-dugun/07.jpg","/projects/diyarbakir-kir-dugun/08.jpg","/projects/diyarbakir-kir-dugun/09.jpg","/projects/diyarbakir-kir-dugun/10.jpg","/projects/diyarbakir-kir-dugun/11.jpg","/projects/diyarbakir-kir-dugun/12.jpg","/projects/diyarbakir-kir-dugun/13.jpg","/projects/diyarbakir-kir-dugun/14.jpg","/projects/diyarbakir-kir-dugun/15.jpg","/projects/diyarbakir-kir-dugun/16.jpg"],
  },
  {
    slug: "nefes-servi",
    title: "Nefes Servi Düğün Alanı",
    location: "Türkiye",
    category: "Etkinlik",
    summary: `Nefes Servi Düğün Alanı projesinde, doğayla iç içe ve unutulmaz davetlere ev sahipliği yapacak estetik bir açık mekan tasarımı hayata geçirdik.`,
    description: `Nefes Servi Düğün Alanı – Profesyonel Peyzaj Tasarımı ve Çevre Düzenleme
Nefes Servi Düğün Alanı projesinde, doğayla iç içe ve unutulmaz davetlere ev sahipliği yapacak estetik bir açık mekan tasarımı hayata geçirdik. Proje genelinde konsepti tamamlayan profesyonel peyzaj tasarımı ile mekanın modern mimari çizgilerine uygun büyüleyici bir atmosfer oluşturduk. Alanın iklim şartlarına, toprak yapısına ve konseptine en uygun türlerin seçildiği kapsamlı bitki dikimi çalışmalarını titizlikle gerçekleştirdik.
Süs bitkileri, formu verilmiş çalılar ve tırmanıcı türlerle zenginleştirilen peyzaj dokusu, kır düğünleri ve özel organizasyonlar için doğal bir fotoğraf fonu oluşturdu. Bitki parterlerinde kullanılan tamburlanmış beyaz çakıl taşları ve cüruf ile estetik bir görsel kontrast sağlandı. Yeşil alanların ve bitki örtüsünün her mevsim canlı kalmasını garanti altına almak adına akıllı ve yüksek verimli otomatik sulama sistemi kurulumu tamamlandı.
Otomatik sulama altyapısı sayesinde su tasarrufu sağlanırken, peyzajın sürdürülebilirliği ve bitkilerin düzenli nem ihtiyacı güvenceye alındı. Tasarım ve uygulama süreçlerinin yanı sıra, projenin tüm aşamalarında uzman ekibimizle profesyonel peyzaj danışmanlığı hizmeti verdik. Yürüyüş yollarından strüktür çevresindeki dikey yeşillendirmelere kadar her detay, organizasyon konforunu ve görsel şıklığı artıracak teknik çözümlerle kurgulandı. Estetik ile mühendisliğin buluştuğu Nefes Servi Düğün Alanı, bütünsel çevre düzenleme anlayışımızla bölgenin ön plana çıkan nitelikli davet mekanlarından biri haline geldi.`,
    image: "/projects/nefes-servi/01.png",
    images: ["/projects/nefes-servi/01.png","/projects/nefes-servi/02.png","/projects/nefes-servi/03.png","/projects/nefes-servi/04.png","/projects/nefes-servi/05.png","/projects/nefes-servi/06.png","/projects/nefes-servi/07.png","/projects/nefes-servi/08.png","/projects/nefes-servi/09.png","/projects/nefes-servi/10.png","/projects/nefes-servi/11.png","/projects/nefes-servi/12.png","/projects/nefes-servi/13.png","/projects/nefes-servi/14.png","/projects/nefes-servi/15.png","/projects/nefes-servi/16.jpg"],
  },
  {
    slug: "gate-41",
    title: "Gate 41",
    location: "İstanbul",
    category: "Villa & Konut",
    summary: `Gate 41 projesinde, estetik ve fonksiyonelliği bir araya getiren profesyonel peyzaj uygulamaları ile modern ve konforlu bir yaşam alanı kurguladık.`,
    description: `Gate 41 Projesi – Profesyonel Peyzaj Uygulamaları ve Mühendislik Çözümleri
Gate 41 projesinde, estetik ve fonksiyonelliği bir araya getiren profesyonel peyzaj uygulamaları ile modern ve konforlu bir yaşam alanı kurguladık. Proje kapsamında gerçekleştirilen dayanıklı bordür ve estetik plak taş kaplama uygulamaları, yaya yollarına ve açık alanlara şık ve uzun ömürlü bir dokunuş kazandırdı. Eğimli arazi yapısını güvenli ve sürdürülebilir hale getirmek amacıyla yenilikçi Geowebduvar imalatları başarıyla uygulandı. Toprak kaymasını önleyen ve şev stabilitesi sağlayan Geoweb hücresel dolgu sistemleri sayesinde, dik alanlarda estetik yeşil doku entegrasyonu sağlandı.
Bitki örtüsünün ve çim alanların her zaman canlı kalması amacıyla akıllı ve yüksek verimli otomatik sulama sistemi kurulumu eksiksiz olarak tamamlandı. Su tasarrufu ve sürdürülebilirlik ilkelerine uygun tasarlanan bu altyapı, peyzajın kalıcılığını garanti altına almaktadır. Sahadaki arazi şartlarında ideal eğim ve kademelendirmeyi elde etmek adına projeye özel teknik kot çözümleri üretildi. Uygulama sürecinin her aşamasında, doğru malzeme ve doğru teknik kullanımı için profesyonel peyzaj teknikleri danışmanlığı hizmeti sunuldu.
Sert zemin (hardscape) ve yeşil alan (softscape) dengesinin kusursuzca sağlandığı Gate 41, bütünsel çevre düzenleme anlayışıyla bölgesinde fark yaratan nitelikli bir proje olarak öne çıkıyor.`,
    image: "/projects/gate-41/01.jpg",
    images: ["/projects/gate-41/01.jpg","/projects/gate-41/02.jpg","/projects/gate-41/03.jpg","/projects/gate-41/04.jpg","/projects/gate-41/05.jpg","/projects/gate-41/06.jpg","/projects/gate-41/07.jpg","/projects/gate-41/08.jpg","/projects/gate-41/09.jpg","/projects/gate-41/10.jpg","/projects/gate-41/11.jpg","/projects/gate-41/12.jpg","/projects/gate-41/13.jpg","/projects/gate-41/14.jpg","/projects/gate-41/15.jpg","/projects/gate-41/16.jpg"],
  },
  {
    slug: "vet-amerikan-teras",
    title: "Vet Amerikan Hastanesi Teras Kat",
    location: "İstanbul",
    category: "Kurumsal",
    summary: `Bu proje, hastane ziyaretçilerine, çalışanlarına ve sevimli dostlarımıza nefes aldıracak konforlu bir açık yaşam alanı sunmaktadır.`,
    description: `Vet Amerikan Hayvan Hastanesi Teras Kat Peyzaj Tasarımı
Bu proje, hastane ziyaretçilerine, çalışanlarına ve sevimli dostlarımıza nefes aldıracak konforlu bir açık yaşam alanı sunmaktadır. Projede teras kat, kullanıcı etkileşimini artıran işlevsel ve estetik bir sosyal alan olarak yeniden kurgulanmıştır.
Geniş teras alanındaki monoton ve soğuk boşluklar, özel tasarım oturma elemanları ve modüler fiber saksılar aracılığıyla dinamik bir biçimde kırılmıştır. Mekânsal ölçeklendirme ile kullanıcılara çok daha sıcak, samimi ve kuşatıcı bir atmosfer sunulması hedeflenmiştir. Modern peyzaj mimarisi anlayışıyla şekillendirilen projede, hafif ve son derece dayanıklı fiber saksı uygulamaları tercih edilerek yapıya fazla yük bindirmeden zengin bir yeşil doku elde edilmiştir.
Saksı içerisine entegre edilen çalı grupları, mevsimlik çiçekler ve odak noktası oluşturan bodur ağaçlar, terasın her köşesinde ferahlatıcı bir doğa hissi yaratmaktadır. Özel ölçülendirilen ahşap detaylı oturma bankları ve yüksek bar masası kombinasyonları, hem bireysel dinlenme hem de sosyal sohbetler için esnek kullanım alternatifleri sağlar. Evcil hayvan sahiplerinin minik dostlarıyla birlikte vakit geçirebileceği güvenli ve ergonomik bir alan oluşturulmuştur.
Peyzaj düzenlemesinde tercih edilen bitki örtüsü, rüzgar ve güneş gibi açık teras koşullarına yüksek uyum gösteren türlerden özenle seçilmiştir. Estetik yönü güçlü bu teras peyzaj tasarımı, kurumun modern çizgisini ve misafirperver yaklaşımını açık mekanda da hissettirmektedir. Fonksiyonellik ile doğal dokuyu harmanlayan bu çalışma, kent merkezindeki sağlık yapılarında teras kullanımının nitelikli örneklerinden biridir. Yenilikçi dış mekan tasarımı ve profesyonel çevre düzenlemesiyle Vet Amerikan Hayvan Hastanesi teras katı, keyifle vakit geçirilen prestijli bir yaşam alanına dönüşmüştür.`,
    image: "/projects/vet-amerikan-teras/01.png",
    images: ["/projects/vet-amerikan-teras/01.png","/projects/vet-amerikan-teras/02.png","/projects/vet-amerikan-teras/03.png","/projects/vet-amerikan-teras/04.png","/projects/vet-amerikan-teras/05.png","/projects/vet-amerikan-teras/06.png","/projects/vet-amerikan-teras/07.png","/projects/vet-amerikan-teras/08.png","/projects/vet-amerikan-teras/09.png","/projects/vet-amerikan-teras/10.png","/projects/vet-amerikan-teras/11.png","/projects/vet-amerikan-teras/12.png","/projects/vet-amerikan-teras/13.png","/projects/vet-amerikan-teras/14.png","/projects/vet-amerikan-teras/15.png","/projects/vet-amerikan-teras/16.png"],
  },
  {
    slug: "arcelik-cayirova",
    title: "Arçelik Çayırova İç Mekan",
    location: "Kocaeli Çayırova",
    category: "İç Mekan",
    summary: `Bu uygulama kurumsal binaların giriş alanlarına estetik, modern ve nefes alan bir atmosfer kazandırmak amacıyla hayata geçirilmiştir.`,
    description: `Arçelik Çayırova İç Mekan Bitki Uygulaması
Bu uygulama kurumsal binaların giriş alanlarına estetik, modern ve nefes alan bir atmosfer kazandırmak amacıyla hayata geçirilmiştir. Proje kapsamında bina girişinde konumlanan özel alan, doğanın dinginliğini modern mimariyle buluşturan profesyonel bir iç mekan peyzaj tasarımı ile yeniden yorumlanmıştır.
Tasarımın ana omurgasını, farklı renk ve dokulardaki dekoratif doğal taşlar ile ağaç kabuklarının yarattığı zengin görsel kontrast oluşturmaktadır. Siyah tamburlanmış cüruf taşları, beyaz podima taşlarıve doğal çam kabukları zemin katmanlarında bir arada kullanılmıştır. Bu farklı zemin malzemeleri, esnek metal ayraçlar yardımıyla organik ve akıcı kıvrımlarla birbirlerinden özenle ayrılmıştır. Metal sınır elemanları sayesinde elde edilen yumuşak hatlar, mekana geometrik bir düzen ve modern bir dinamizm kazandırmıştır.
Bitki seçiminde, iç mekan iklim koşullarına, doğal ışık açılarına ve hava kalitesini artırma kriterlerine tam uyum sağlayan türler tercih edilmiştir.
Geniş cam cephe boyunca uzanan bu yeşil alan, dış mekandaki manzara ile bina içi arasında kesintisiz bir görsel bütünlük sağlamaktadır. Kurumsal prestiji destekleyen bu profesyonel iç mekan bitkilendirme çalışması, çalışanlar ve ziyaretçiler için son derece ferah ve prestijli bir karşılama alanı sunmaktadır. Sürdürülebilir ve nitelikli peyzaj çözümleriyle Arçelik Çayırova tesisi, doğa dostu modern mimari uygulamalarının başarılı bir örneğini sergilemektedir.`,
    image: "/projects/arcelik-cayirova/01.jpg",
    images: ["/projects/arcelik-cayirova/01.jpg","/projects/arcelik-cayirova/02.jpg","/projects/arcelik-cayirova/03.jpg","/projects/arcelik-cayirova/04.jpg","/projects/arcelik-cayirova/05.jpg","/projects/arcelik-cayirova/06.jpg","/projects/arcelik-cayirova/07.jpg"],
  },
  {
    slug: "rams-bahcelievler",
    title: "Rams Bahçelievler İç Mekan Bitki",
    location: "İstanbul Bahçelievler",
    category: "İç Mekan",
    summary: `Rams Bahçelievler projesinde hayata geçirilen bu özel iç mekân yapay bitki uygulaması, modern mimariyle doğallığın estetik bir bileşimini sunmaktadır.`,
    description: `Rams Bahçelievler İç Mekan Yapay Bitki Uygulaması
Rams Bahçelievler projesinde hayata geçirilen bu özel iç mekân yapay bitki uygulaması, modern mimariyle doğallığın estetik bir bileşimini sunmaktadır. Konut ve sosyal alan girişlerindeki prestijli atmosferi güçlendirmek amacıyla dayanıklı ve modern fiber saksı sistemleri tercih edilmiştir. Ahşap çıta duvar kaplamasıyla mükemmel bir görsel uyum yakalayan fiber saksılar, mekâna mimari bir derinlik kazandırmaktadır. Bitki aranjmanı tasarımında yüksek kaliteli ve gerçekçi dokularıyla öne çıkan Spathiphyllum, Sansevieria ve Bambu türleri bir arada kullanılmıştır. Spathiphyllum’un zarif beyaz çiçek detayları, alanda odak noktası oluşturarak estetik bir zarafet sergiler.
Dikey formuyla mekâna hacim katan Sansevieria (paşa kılıcı) ve ferahlık sağlayan Bambu, son derece dengeli bir bitkisel kompozisyon oluşturmaktadır. Saksı yüzeyinde üst dolgu malzemesi olarak tercih edilen doğal cüruf, tasarımın otantik yapısını tamamlayan şık bir kontrast yaratmaktadır. Volkanik cüruf taşları, bitki kök detaylarını kapatarak saksı üstünde temiz, düzenli ve profesyonel bir peyzaj bitişi sağlar. İç mekân yapay peyzaj uygulamaları, canlı bitkilerin ihtiyaç duyduğu sulama, gün ışığı ve periyodik bakım gereksinimlerini tamamen ortadan kaldırmaktadır. Gün ışığından yoksun kapalı alanlarda bile solma ve deformasyon yaşamayan yapay bitki aranjmanları, uzun ömürlü bir kullanım vadeder.
Kurumsal ve konut projelerinin lobi, karşılama ve koridor alanları için zamansız ve ekonomik bir yeşil alan çözümü elde edilmiştir. Özel ölçü fiber saksı tasarımları ve mekâna özgü bitkilendirme konsepti, projenin genel mimari kimliğiyle bütünlük oluşturmaktadır. Leke tutmayan ve kolay temizlenebilen cüruf ve fiber malzeme kombinasyonu, iç mekânlarda hijyenik ve pratik bir kullanım sunar. Rams Bahçelievler yapay bitki peyzaj projesi, iç mekân dekorasyonunda pratiklik ve şıklığı bir arada arayanlar için referans niteliğindedir. İç mekân peyzaj mimarisi ve yapay tasarım çözümleri, yaşam alanlarına değer katmaya ve ferah bir atmosfer sunmaya devam etmektedir.`,
    image: "/projects/rams-bahcelievler/01.jpg",
    images: ["/projects/rams-bahcelievler/01.jpg","/projects/rams-bahcelievler/02.jpg","/projects/rams-bahcelievler/03.jpg","/projects/rams-bahcelievler/04.jpg","/projects/rams-bahcelievler/05.jpg","/projects/rams-bahcelievler/06.jpg"],
  },
  {
    slug: "zer-as",
    title: "Zer AŞ İç Mekan Yapay Bitki",
    location: "Türkiye",
    category: "İç Mekan",
    summary: `Bu proje, modern çalışma alanlarında doğanın estetiğini ve ferahlığını bakım gerektirmeyen pratik çözümlerle buluşturan özel bir kurumsal projedir.`,
    description: `Zer AŞ İç Mekan Yapay Bitki Uygulaması
Bu proje, modern çalışma alanlarında doğanın estetiğini ve ferahlığını bakım gerektirmeyen pratik çözümlerle buluşturan özel bir kurumsal projedir. Ofis ortamında görsel konforu artırmak ve mekana yeşil bir dokunuş katmak amacıyla kurgulanan çalışmada, ana öge olarak yapay bambu uygulaması tercih edilmiştir.
Özel tasarım ahşap mobilya saksıların içerisine entegre edilen yüksek kaliteli yapay bambular, açık ofis düzeninde işlevsel birer doğal seperatör olarak görev yapmaktadır. Bu sayede masa grupları arasındaki görsel sınır belirlenirken, mekanın ferahlığı ve ışık geçirgenliği korunmuştur. Saksı yüzeylerinde üst dolgu malzemesi olarak tercih edilen doğal kırmızı cüruf bitki dip alanlarını şık bir şekilde kapatarak tasarıma sıcak bir doku ve zengin bir derinlik kazandırmıştır.
İç mekanda yer alan baskın çelik strüktür ve endüstriyel mimari ögeler, bambuların canlı yeşil yaprakları ve ahşap detaylar sayesinde yumuşatılarak dengeli bir estetik kurgulanmıştır. Gün ışığı almayan veya iklimlendirme kaynaklı canlı bitki yetiştirmenin zor olduğu kapalı alanlarda formunu yıllarca koruyan yapay bitkiler, sürdürülebilir kullanım avantajı sunar.
Sulama, budama ve toprak değişimi gibi bakım süreçlerini tamamen ortadan kaldıran bu profesyonel iç mekan yapay peyzaj tasarımı, işletmeler için maliyet etkin ve prestijli bir çözüm üretmektedir. Ahşap gövdeli bambuların ve volkanik cüruf detayının yarattığı doğal atmosfer, çalışan motivasyonunu ve mekanın genel algısını üst seviyeye taşır. Estetik, fonksiyonellik ve modern çizgileri bir arada sunan Zer AŞ projesi, iç mekan yapay bitkilendirme uygulamalarında ilham verici bir referans teşkil etmektedir.`,
    image: "/projects/zer-as/01.jpg",
    images: ["/projects/zer-as/01.jpg","/projects/zer-as/02.jpg","/projects/zer-as/03.jpg","/projects/zer-as/04.jpg","/projects/zer-as/05.jpg","/projects/zer-as/06.jpg","/projects/zer-as/07.jpg","/projects/zer-as/08.jpg","/projects/zer-as/09.jpg","/projects/zer-as/10.jpg"],
  },
];

export const projectCategories: Array<ProjectCategory | "Tümü"> = [
  "Tümü",
  "Villa & Konut",
  "Kamusal",
  "Kurumsal",
  "Eğitim",
  "İç Mekan",
  "Etkinlik",
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
