export type Language = "en" | "tr";

export const translations = {
  en: {
    header: {
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    hero: {
      badge: "#1 AI Learning Game for Kids",
      titlePrefix: "The Ultimate",
      titleHighlight: "Learning Adventure",
      description: "Spark your child's curiosity with KidsAI! A magical world where learning to identify objects is a fun-filled game.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      trust: "Available on iOS & Android • 100% Kid Safe",
    },
    features: {
      title: "A World of Fun & Learning",
      subtitle: "KidsAI is packed with features that make learning an exciting adventure.",
      items: [
        {
          title: "Classic & Smart Mode",
          description: "Point the camera at objects! AI instantly tells you what it is and teaches pronunciation.",
        },
        {
          title: "Smart Eye Game",
          description: "Can you find the object on the screen? Show the correct item to the camera before time runs out!",
        },
        {
          title: "Scavenger Hunt",
          description: "Go on a treasure hunt inside the house! Find the items on the list and collect points.",
        },
        {
          title: "Collect Animals",
          description: "Unlock new animal friends with your points. Build your own zoo and collect them all.",
        },
      ],
    },
    showcase: {
      title: "See the Magic in Action",
      description: "Explore the bright colors, cartoon-style icons, and playful animations that make KidsAI a joy to use.",
    },
    rewards: {
      badge: "DAILY REWARDS & REFILLS",
      titlePrefix: "Keep the",
      titleHighlight: "Fun",
      titleSuffix: "Going!",
      description: "Running low on energy? Watch short, kid-friendly videos to earn extra \"Smart Shots\" and continue the adventure without interruption.",
      refilled: "Refilled Instantly!",
    },
    cta: {
      title: "Ready for an Adventure?",
      description: "Unlock a world of learning and fun for your child.",
      download: "Download KidsAI",
      today: "today and start the journey!",
      ios: "Download for iOS",
      android: "Download for Android",
      lovedBy: "Loved by kids and parents everywhere!",
      privacyPrefix: "We care about your privacy. Read our",
      privacyLink: "Privacy Policy",
    },
    footer: {
      slogan: "Discover, Learn and Have Fun! 🚀",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      rights: "KidsAI. All rights reserved.",
      madeWith: "Made with",
      forKids: "for Kids",
    },
    languageSupport: {
      title: "Play in Your Language",
      description: "KidsAI is designed for families around the world.",
      english: "English",
      turkish: "Türkçe",
      comingSoon: "More Coming Soon...",
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: December 2023",
      intro: "Welcome to KidsAI! We are committed to protecting the privacy of children and their families. This policy explains how we handle information.",
      sections: [
        {
          title: "Information We Collect",
          content: "We do not collect any personal information from children. The app uses the camera solely for object recognition locally on the device or via secure, anonymous cloud processing where no images are stored."
        },
        {
          title: "How We Use Information",
          content: "Any data processed is used strictly to provide the game experience (identifying objects). We do not sell or share data with third parties."
        },
        {
          title: "Parental Control",
          content: "We encourage parents to guide their children while using the app. Settings and external links are protected by a parental gate."
        },
        {
          title: "Contact Us",
          content: "If you have any questions, please contact us at support@kidsai.com."
        }
      ]
    }
  },
  tr: {
    header: {
      appStore: "App Store",
      googlePlay: "Google Play",
    },
    hero: {
      badge: "#1 Çocuklar İçin Yapay Zeka Oyunu",
      titlePrefix: "En Harika",
      titleHighlight: "Öğrenme Macerası",
      description: "KidsAI ile çocuğunuzun merakını ateşleyin! Nesneleri tanımanın eğlenceli bir oyuna dönüştüğü büyülü bir dünya.",
      getStarted: "Hemen Başla",
      learnMore: "Daha Fazla",
      trust: "iOS ve Android'de Mevcut • %100 Çocuklar İçin Güvenli",
    },
    features: {
      title: "Eğlence ve Öğrenme Dünyası",
      subtitle: "KidsAI, öğrenmeyi heyecan verici bir maceraya dönüştüren özelliklerle doludur.",
      items: [
        {
          title: "Klasik ve Akıllı Mod",
          description: "Kamerayı nesnelere tut! Yapay zeka ne olduğunu anında söylesin ve telaffuzunu öğretsin.",
        },
        {
          title: "Akıllı Göz Oyunu",
          description: "Ekranda çıkan nesneyi bulabilir misin? Süre dolmadan doğru eşyayı kameraya göster!",
        },
        {
          title: "Hazine Avı",
          description: "Evin içinde bir hazine avına çık! Listede istenen eşyaları bul ve puanları topla.",
        },
        {
          title: "Hayvanları Topla",
          description: "Puanlarınla yeni hayvan dostları aç. Kendi hayvanat bahçeni oluştur ve onları biriktir.",
        },
      ],
    },
    showcase: {
      title: "Sihri Harekete Geçir",
      description: "KidsAI'yi kullanmayı keyifli hale getiren parlak renkleri, çizgi film tarzı ikonları ve eğlenceli animasyonları keşfedin.",
    },
    rewards: {
      badge: "GÜNLÜK ÖDÜLLER & DOLUMLAR",
      titlePrefix: "",
      titleHighlight: "Eğlence",
      titleSuffix: "Devam Etsin!",
      description: "Enerjin mi azalıyor? Kısa, çocuk dostu videolar izleyerek ekstra \"Akıllı Haklar\" kazan ve maceraya kesintisiz devam et.",
      refilled: "Anında Doldu!",
    },
    cta: {
      title: "Maceraya Hazır mısın?",
      description: "Çocuğunuz için öğrenme ve eğlence dolu bir dünyanın kilidini açın.",
      download: "KidsAI'yi İndirin",
      today: "ve yolculuğa bugün başlayın!",
      ios: "iOS için İndir",
      android: "Android için İndir",
      lovedBy: "Her yerde çocuklar ve ebeveynler tarafından seviliyor!",
      privacyPrefix: "Gizliliğinize önem veriyoruz. Okuyun:",
      privacyLink: "Gizlilik Politikası",
    },
    footer: {
      slogan: "Keşfet, Öğren ve Eğlen! 🚀",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
      contact: "İletişim",
      rights: "KidsAI. Tüm hakları saklıdır.",
      madeWith: "Sevgiyle",
      forKids: "Çocuklar için yapıldı",
    },
    languageSupport: {
      title: "Kendi Dilinde Oyna",
      description: "KidsAI, dünyanın dört bir yanındaki aileler için tasarlandı.",
      english: "İngilizce",
      turkish: "Türkçe",
      comingSoon: "Daha Fazlası Yakında...",
    },
    privacyPolicy: {
      title: "Gizlilik Politikası",
      lastUpdated: "Son Güncelleme: Aralık 2023",
      intro: "KidsAI'ye hoş geldiniz! Çocukların ve ailelerinin gizliliğini korumaya kararlıyız. Bu politika, bilgileri nasıl ele aldığımızı açıklar.",
      sections: [
        {
          title: "Topladığımız Bilgiler",
          content: "Çocuklardan herhangi bir kişisel bilgi toplamıyoruz. Uygulama, kamerayı yalnızca cihaz üzerinde yerel olarak veya görüntülerin saklanmadığı güvenli, anonim bulut işleme yoluyla nesne tanıma için kullanır."
        },
        {
          title: "Bilgileri Nasıl Kullanıyoruz",
          content: "İşlenen veriler yalnızca oyun deneyimini (nesneleri tanımlama) sağlamak için kullanılır. Verileri üçüncü taraflarla satmayız veya paylaşmayız."
        },
        {
          title: "Ebeveyn Kontrolü",
          content: "Ebeveynleri, uygulamayı kullanırken çocuklarına rehberlik etmeye teşvik ediyoruz. Ayarlar ve dış bağlantılar bir ebeveyn kapısı ile korunmaktadır."
        },
        {
          title: "İletişim",
          content: "Herhangi bir sorunuz varsa, lütfen support@kidsai.com adresinden bizimle iletişime geçin."
        }
      ]
    }
  },
};