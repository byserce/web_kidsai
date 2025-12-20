export type Language = "en" | "tr" | "de" | "ja" | "ko" | "fr" | "es" | "ar";

const en = {
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
      lastUpdated: "Last Updated: December 20, 2025",
      intro: "1. Introduction\n\nWelcome to KidsAI (\"we,\" \"our,\" or \"us\"). We are committed to protecting the privacy of our users (\"you\" or \"your\"), especially children. This Privacy Policy explains how we collect, use, and safeguard information when you use our mobile application, KidsAI.\n\nKidsAI is designed for children and families. We adhere to the Children’s Online Privacy Protection Act (COPPA) and the General Data Protection Regulation (GDPR).",
      sections: [
        {
          title: "2. Information We Collect",
          content: "A. Personal Information\nWe DO NOT collect, store, or share any personally identifiable information (PII) from children or parents. We do not ask for:\n• Names\n• Email addresses\n• Phone numbers\n• Physical addresses\n• Location data (GPS)\n\nB. Non-Personal Information\nWe may collect non-personal, technical information automatically to ensure the app functions correctly. This includes:\n• Device type and model.\n• Operating system version (iOS/Android).\n• Language preference.\n• Crash reports (anonymized) to help us fix bugs."
        },
        {
          title: "3. Permissions and Feature Usage",
          content: "A. Camera\nUsage: The app uses the device's camera to enable the \"Object Recognition,\" \"Smart Eye,\" and \"Scavenger Hunt\" features.\nData Handling: Images captured by the camera are processed in real-time.\n• For Classic Mode (Offline): Images are processed locally on your device using Google ML Kit.\n• For Smart Mode (AI): Images are temporarily transmitted to Google's Gemini (Vertex AI) servers solely for analysis to identify the object.\nStorage: We DO NOT save, record, or store any photos or videos taken within the app on our servers or the device's gallery. Once the analysis is complete, the image data is immediately discarded.\n\nB. Microphone\nUsage: The app uses the microphone for the \"Speech Recognition\" feature to allow children to say the names of objects.\nData Handling: Audio data is processed locally on the device (iOS Speech / Android Speech) or temporarily sent to Google Cloud Speech-to-Text services for conversion.\nStorage: We DO NOT record or store voice data."
        },
        {
          title: "4. Third-Party Services and Data Processing",
          content: "We use trusted third-party services to provide the app's core functionality. These services are configured to respect children's privacy.\n\nA. Google Gemini (Firebase Vertex AI)\nPurpose: To provide advanced AI descriptions of objects seen by the camera.\nPrivacy: Image data sent to Gemini is used only for the immediate request and is not used by Google to train their AI models for other users (Enterprise/API data privacy standards apply).\n\nB. Google Cloud Text-to-Speech\nPurpose: To generate high-quality voiceovers for the app.\nPrivacy: Text is sent to Google servers to generate audio files, which are played back and then deleted from the device cache.\n\nC. Google Mobile Ads (AdMob)\nPurpose: To display age-appropriate advertisements to support the app.\nChild Safety: We have configured AdMob to strictly serve Non-Personalized Ads.\n• We have enabled the \"Tag for Child Directed Treatment\" (COPPA).\n• We have set the \"Max Ad Content Rating\" to \"G\" (General Audiences).\n• We do not use behavioral targeting or tracking cookies for ads.\n\nD. Google ML Kit\nPurpose: For offline object recognition.\nPrivacy: All processing happens locally on your device. No data is sent to the cloud."
        },
        {
          title: "5. Data Retention",
          content: "Game Progress: Scores, unlocked animals, and inventory items are stored locally on your device using SharedPreferences. If you uninstall the app, this data will be lost. We do not sync this data to any cloud server.\n\nTemporary Files: Any temporary audio or image files created during gameplay are deleted immediately after use or when the app is closed."
        },
        {
          title: "6. Parental Gate",
          content: "To protect children, we have implemented a \"Parental Gate\" (a mathematical challenge) for any features that link out of the app, such as:\n• Viewing this Privacy Policy.\n• Visiting our social media pages.\n• Accessing settings that might change the app experience."
        },
        {
          title: "7. Security",
          content: "We take reasonable measures to protect the limited non-personal information we handle. However, please be aware that no method of transmission over the internet is 100% secure."
        },
        {
          title: "8. Changes to This Privacy Policy",
          content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date."
        },
        {
          title: "9. Contact Us",
          content: "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:\n\nEmail: game.kidsai.app@gmail.com"
        }
      ]
    }
};

const de = {
  ...en,
  header: {
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  hero: {
    badge: "#1 KI-Lernspiel für Kinder",
    titlePrefix: "Das ultimative",
    titleHighlight: "Lernabenteuer",
    description: "Wecken Sie die Neugier Ihres Kindes mit KidsAI! Eine magische Welt, in der das Erkennen von Objekten zum Spiel wird.",
    getStarted: "Loslegen",
    learnMore: "Mehr erfahren",
    trust: "Verfügbar auf iOS & Android • 100% Kindersicher",
  },
  features: {
    ...en.features,
    title: "Eine Welt voller Spaß & Lernen",
    subtitle: "KidsAI ist vollgepackt mit Funktionen, die das Lernen zu einem aufregenden Abenteuer machen.",
  },
  footer: {
    ...en.footer,
    slogan: "Entdecken, Lernen und Spaß haben! 🚀",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    contact: "Kontakt",
    madeWith: "Gemacht mit",
    forKids: "für Kinder",
  },
  privacyPolicy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: 20. Dezember 2025",
    intro: "1. Einführung\n\nWillkommen bei KidsAI (\"wir\", \"unser\" oder \"uns\"). Wir verpflichten uns, die Privatsphäre unserer Nutzer (\"Sie\" oder \"Ihr\"), insbesondere von Kindern, zu schützen. Diese Datenschutzerklärung erläutert, wie wir Informationen sammeln, verwenden und schützen, wenn Sie unsere mobile Anwendung KidsAI nutzen.\n\nKidsAI ist für Kinder und Familien konzipiert. Wir halten uns an den Children’s Online Privacy Protection Act (COPPA) und die Datenschutz-Grundverordnung (DSGVO).",
    sections: [
      {
        title: "2. Informationen, die wir sammeln",
        content: "A. Persönliche Informationen\nWir sammeln, speichern oder teilen KEINE persönlich identifizierbaren Informationen (PII) von Kindern oder Eltern. Wir fragen nicht nach:\n• Namen\n• E-Mail-Adressen\n• Telefonnummern\n• Physischen Adressen\n• Standortdaten (GPS)\n\nB. Nicht-persönliche Informationen\nWir können automatisch nicht-persönliche, technische Informationen sammeln, um sicherzustellen, dass die App ordnungsgemäß funktioniert. Dazu gehören:\n• Gerätetyp und Modell.\n• Betriebssystemversion (iOS/Android).\n• Sprachpräferenz.\n• Absturzberichte (über Google Firebase Crashlytics), um Fehler zu beheben."
      },
      {
        title: "3. Berechtigungen und Funktionsnutzung",
        content: "A. Kamera\nNutzung: Die App verwendet die Kamera des Geräts, um die Funktionen \"Objekterkennung\", \"Smart Eye\" und \"Schnitzeljagd\" zu ermöglichen.\nDatenverarbeitung: Von der Kamera aufgenommene Bilder werden in Echtzeit verarbeitet.\n• Für den klassischen Modus (Offline): Bilder werden lokal auf Ihrem Gerät mit Google ML Kit verarbeitet.\n• Für den Smart-Modus (KI): Bilder werden vorübergehend an die Google Gemini (Vertex AI) Server gesendet, ausschließlich zur Analyse, um das Objekt zu identifizieren.\nSpeicherung: Wir speichern, zeichnen auf oder sichern KEINE Fotos oder Videos, die in der App aufgenommen wurden, auf unseren Servern oder in der Galerie des Geräts. Sobald die Analyse abgeschlossen ist, werden die Bilddaten sofort verworfen.\n\nB. Mikrofon\nNutzung: Die App verwendet das Mikrofon für die Funktion \"Spracherkennung\", damit Kinder die Namen von Objekten sagen können.\nDatenverarbeitung: Audiodaten werden lokal auf dem Gerät (iOS Speech / Android Speech) verarbeitet oder vorübergehend an Google Cloud Speech-to-Text-Dienste zur Umwandlung gesendet.\nSpeicherung: Wir zeichnen keine Sprachdaten auf und speichern sie nicht."
      },
      {
        title: "4. Dienste von Drittanbietern und Datenverarbeitung",
        content: "Wir nutzen vertrauenswürdige Dienste von Drittanbietern, um die Kernfunktionalität der App bereitzustellen. Diese Dienste sind so konfiguriert, dass sie die Privatsphäre von Kindern respektieren.\n\nA. Google Gemini (Firebase Vertex AI)\nZweck: Um fortschrittliche KI-Beschreibungen von Objekten bereitzustellen, die von der Kamera gesehen werden.\nDatenschutz: Bilddaten, die an Gemini gesendet werden, werden nur für die unmittelbare Anfrage verwendet und nicht von Google verwendet, um ihre KI-Modelle für andere Nutzer zu trainieren (Es gelten die Datenschutzstandards für Unternehmens-/API-Daten).\n\nB. Google Cloud Text-to-Speech\nZweck: Um hochwertige Sprachausgaben für die App zu generieren.\nDatenschutz: Text wird an Google-Server gesendet, um Audiodateien zu generieren, die abgespielt und dann aus dem Geräte-Cache gelöscht werden.\n\nC. Google Mobile Ads (AdMob)\nZweck: Um altersgerechte Werbung anzuzeigen, um die App zu unterstützen.\nKindersicherheit: Wir haben AdMob so konfiguriert, dass streng nicht-personalisierte Anzeigen geschaltet werden.\n• Wir haben das \"Tag for Child Directed Treatment\" (COPPA) aktiviert.\n• Wir haben das \"Max Ad Content Rating\" auf \"G\" (Allgemeines Publikum) gesetzt.\n• Wir verwenden kein verhaltensbasiertes Targeting oder Tracking-Cookies für Anzeigen.\n• Wir halten uns an die Google Play-Familienrichtlinien bezüglich der Android-Werbe-ID (AAID) und übermitteln diese nicht für interessenbezogene Werbung.\n\nD. Google ML Kit\nZweck: Für die Offline-Objekterkennung.\nDatenschutz: Die gesamte Verarbeitung erfolgt lokal auf Ihrem Gerät. Es werden keine Daten an die Cloud gesendet."
      },
      {
        title: "5. Datenspeicherung",
        content: "Spielfortschritt: Spielstände, freigeschaltete Tiere und Inventargegenstände werden lokal auf Ihrem Gerät mit SharedPreferences gespeichert. Wenn Sie die App deinstallieren, gehen diese Daten verloren. Wir synchronisieren diese Daten nicht mit einem Cloud-Server.\n\nTemporäre Dateien: Alle temporären Audio- oder Bilddateien, die während des Spiels erstellt wurden, werden sofort nach Gebrauch oder beim Schließen der App gelöscht."
      },
      {
        title: "6. Elterngate (Parental Gate)",
        content: "Um Kinder zu schützen, haben wir ein \"Elterngate\" (eine mathematische Herausforderung) für alle Funktionen implementiert, die aus der App herausführen, wie z. B.:\n• Anzeigen dieser Datenschutzerklärung.\n• Besuch unserer Social-Media-Seiten.\n• Zugriff auf Einstellungen, die das App-Erlebnis verändern könnten."
      },
      {
        title: "7. Sicherheit",
        content: "Wir ergreifen angemessene Maßnahmen, um die begrenzten nicht-persönlichen Informationen, die wir verarbeiten, zu schützen. Bitte beachten Sie jedoch, dass keine Übertragungsmethode über das Internet zu 100 % sicher ist."
      },
      {
        title: "8. Änderungen an dieser Datenschutzerklärung",
        content: "Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen und das Datum \"Zuletzt aktualisiert\" aktualisieren."
      },
      {
        title: "9. Kontakt",
        content: "Wenn Sie Fragen oder Anregungen zu unserer Datenschutzerklärung haben, zögern Sie nicht, uns zu kontaktieren unter:\n\nE-Mail: game.kidsai.app@gmail.com"
      }
    ]
  }
};

const es = {
  ...en,
  header: {
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  hero: {
    badge: "#1 Juego de aprendizaje con IA",
    titlePrefix: "La Aventura de",
    titleHighlight: "Aprendizaje Definitiva",
    description: "¡Despierta la curiosidad de tu hijo con KidsAI! Un mundo mágico donde aprender a identificar objetos es un juego divertido.",
    getStarted: "Empezar",
    learnMore: "Saber más",
    trust: "Disponible en iOS y Android • 100% Seguro para niños",
  },
  features: {
    ...en.features,
    title: "Un Mundo de Diversión y Aprendizaje",
    subtitle: "KidsAI está lleno de funciones que hacen del aprendizaje una aventura emocionante.",
  },
  footer: {
    ...en.footer,
    slogan: "¡Descubre, Aprende y Diviértete! 🚀",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
    madeWith: "Hecho con",
    forKids: "para Niños",
  },
  privacyPolicy: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: 20 de diciembre de 2025",
    intro: "1. Introducción\n\nBienvenido a KidsAI (\"nosotros\", \"nuestro\" o \"nos\"). Estamos comprometidos a proteger la privacidad de nuestros usuarios (\"usted\" o \"su\"), especialmente los niños. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos la información cuando utiliza nuestra aplicación móvil, KidsAI.\n\nKidsAI está diseñado para niños y familias. Cumplimos con la Ley de Protección de la Privacidad Infantil en Línea (COPPA) y el Reglamento General de Protección de Datos (GDPR).",
    sections: [
      {
        title: "2. Información que Recopilamos",
        content: "A. Información Personal\nNO recopilamos, almacenamos ni compartimos ninguna información de identificación personal (PII) de niños o padres. No solicitamos:\n• Nombres\n• Direcciones de correo electrónico\n• Números de teléfono\n• Direcciones físicas\n• Datos de ubicación (GPS)\n\nB. Información No Personal\nPodemos recopilar información técnica no personal automáticamente para garantizar que la aplicación funcione correctamente. Esto incluye:\n• Tipo y modelo de dispositivo.\n• Versión del sistema operativo (iOS/Android).\n• Preferencia de idioma.\n• Informes de fallos (a través de Google Firebase Crashlytics) para ayudarnos a corregir errores."
      },
      {
        title: "3. Permisos y Uso de Funciones",
        content: "A. Cámara\nUso: La aplicación utiliza la cámara del dispositivo para habilitar las funciones \"Reconocimiento de Objetos\", \"Ojo Inteligente\" y \"Búsqueda del Tesoro\".\nManejo de Datos: Las imágenes capturadas por la cámara se procesan en tiempo real.\n• Para el Modo Clásico (Sin conexión): Las imágenes se procesan localmente en su dispositivo utilizando Google ML Kit.\n• Para el Modo Inteligente (IA): Las imágenes se transmiten temporalmente a los servidores de Google Gemini (Vertex AI) únicamente para su análisis e identificación del objeto.\nAlmacenamiento: NO guardamos, grabamos ni almacenamos fotos o videos tomados dentro de la aplicación en nuestros servidores o en la galería del dispositivo. Una vez completado el análisis, los datos de la imagen se descartan inmediatamente.\n\nB. Micrófono\nUso: La aplicación utiliza el micrófono para la función \"Reconocimiento de Voz\" para permitir que los niños digan los nombres de los objetos.\nManejo de Datos: Los datos de audio se procesan localmente en el dispositivo (iOS Speech / Android Speech) o se envían temporalmente a los servicios de Google Cloud Speech-to-Text para su conversión.\nAlmacenamiento: NO grabamos ni almacenamos datos de voz."
      },
      {
        title: "4. Servicios de Terceros y Procesamiento de Datos",
        content: "Utilizamos servicios de terceros de confianza para proporcionar la funcionalidad principal de la aplicación. Estos servicios están configurados para respetar la privacidad de los niños.\n\nA. Google Gemini (Firebase Vertex AI)\nPropósito: Proporcionar descripciones avanzadas de IA de los objetos vistos por la cámara.\nPrivacidad: Los datos de imagen enviados a Gemini se utilizan solo para la solicitud inmediata y no son utilizados por Google para entrenar sus modelos de IA para otros usuarios (se aplican los estándares de privacidad de datos empresariales/API).\n\nB. Google Cloud Text-to-Speech\nPropósito: Generar voces en off de alta calidad para la aplicación.\nPrivacidad: El texto se envía a los servidores de Google para generar archivos de audio, que se reproducen y luego se eliminan de la caché del dispositivo.\n\nC. Google Mobile Ads (AdMob)\nPropósito: Mostrar anuncios apropiados para la edad para apoyar la aplicación.\nSeguridad Infantil: Hemos configurado AdMob para servir estrictamente Anuncios No Personalizados.\n• Hemos habilitado la \"Etiqueta para tratamiento dirigido a niños\" (COPPA).\n• Hemos establecido la \"Clasificación máxima de contenido de anuncios\" en \"G\" (Público General).\n• No utilizamos segmentación por comportamiento ni cookies de seguimiento para anuncios.\n• Cumplimos con la Política de Familias de Google Play con respecto a la ID de publicidad de Android (AAID) y no la transmitimos para publicidad basada en intereses.\n\nD. Google ML Kit\nPropósito: Para el reconocimiento de objetos sin conexión.\nPrivacidad: Todo el procesamiento ocurre localmente en su dispositivo. No se envían datos a la nube."
      },
      {
        title: "5. Retención de Datos",
        content: "Progreso del Juego: Las puntuaciones, los animales desbloqueados y los artículos del inventario se almacenan localmente en su dispositivo utilizando SharedPreferences. Si desinstala la aplicación, estos datos se perderán. No sincronizamos estos datos con ningún servidor en la nube.\n\nArchivos Temporales: Cualquier archivo de audio o imagen temporal creado durante el juego se elimina inmediatamente después de su uso o cuando se cierra la aplicación."
      },
      {
        title: "6. Puerta Parental (Parental Gate)",
        content: "Para proteger a los niños, hemos implementado una \"Puerta Parental\" (un desafío matemático) para cualquier función que enlace fuera de la aplicación, como:\n• Ver esta Política de Privacidad.\n• Visitar nuestras páginas de redes sociales.\n• Acceder a configuraciones que podrían cambiar la experiencia de la aplicación."
      },
      {
        title: "7. Seguridad",
        content: "Tomamos medidas razonables para proteger la información no personal limitada que manejamos. Sin embargo, tenga en cuenta que ningún método de transmisión a través de Internet es 100% seguro."
      },
      {
        title: "8. Cambios en esta Política de Privacidad",
        content: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de \"Última actualización\"."
      },
      {
        title: "9. Contáctenos",
        content: "Si tiene alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dude en contactarnos en:\n\nCorreo electrónico: game.kidsai.app@gmail.com"
      }
    ]
  }
};

const fr = {
  ...en,
  header: {
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  hero: {
    badge: "#1 Jeu d'apprentissage IA",
    titlePrefix: "L'Aventure",
    titleHighlight: "d'Apprentissage Ultime",
    description: "Éveillez la curiosité de votre enfant avec KidsAI ! Un monde magique où apprendre à identifier les objets devient un jeu.",
    getStarted: "Commencer",
    learnMore: "En savoir plus",
    trust: "Disponible sur iOS et Android • 100% Sécurisé",
  },
  features: {
    ...en.features,
    title: "Un Monde de Plaisir et d'Apprentissage",
    subtitle: "KidsAI regorge de fonctionnalités qui font de l'apprentissage une aventure passionnante.",
  },
  footer: {
    ...en.footer,
    slogan: "Découvre, Apprends et Amuse-toi ! 🚀",
    privacy: "Confidentialité",
    terms: "Conditions",
    contact: "Contact",
    madeWith: "Fait avec",
    forKids: "pour les Enfants",
  },
  privacyPolicy: {
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : 20 décembre 2025",
    intro: "1. Introduction\n\nBienvenue sur KidsAI (« nous », « notre » ou « nos »). Nous nous engageons à protéger la vie privée de nos utilisateurs (« vous » ou « votre »), en particulier les enfants. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons les informations lorsque vous utilisez notre application mobile, KidsAI.\n\nKidsAI est conçu pour les enfants et les familles. Nous respectons la loi sur la protection de la vie privée des enfants en ligne (COPPA) et le règlement général sur la protection des données (RGPD).",
    sections: [
      {
        title: "2. Informations que nous collectons",
        content: "A. Informations Personnelles\nNous NE collectons, NE stockons et NE partageons AUCUNE information personnellement identifiable (PII) des enfants ou des parents. Nous ne demandons pas :\n• Noms\n• Adresses e-mail\n• Numéros de téléphone\n• Adresses physiques\n• Données de localisation (GPS)\n\nB. Informations Non Personnelles\nNous pouvons collecter automatiquement des informations techniques non personnelles pour garantir le bon fonctionnement de l'application. Cela inclut :\n• Type et modèle de l'appareil.\n• Version du système d'exploitation (iOS/Android).\n• Préférence de langue.\n• Rapports de plantage (via Google Firebase Crashlytics) pour nous aider à corriger les bugs."
      },
      {
        title: "3. Autorisations et Utilisation des Fonctionnalités",
        content: "A. Caméra\nUtilisation : L'application utilise la caméra de l'appareil pour activer les fonctionnalités « Reconnaissance d'objets », « Œil intelligent » et « Chasse au trésor ».\nTraitement des données : Les images capturées par la caméra sont traitées en temps réel.\n• Pour le mode Classique (Hors ligne) : Les images sont traitées localement sur votre appareil à l'aide de Google ML Kit.\n• Pour le mode Intelligent (IA) : Les images sont temporairement transmises aux serveurs Google Gemini (Vertex AI) uniquement pour analyse afin d'identifier l'objet.\nStockage : Nous NE sauvegardons, N'enregistrons et NE stockons AUCUNE photo ou vidéo prise dans l'application sur nos serveurs ou dans la galerie de l'appareil. Une fois l'analyse terminée, les données d'image sont immédiatement supprimées.\n\nB. Microphone\nUtilisation : L'application utilise le microphone pour la fonctionnalité « Reconnaissance vocale » afin de permettre aux enfants de dire le nom des objets.\nTraitement des données : Les données audio sont traitées localement sur l'appareil (iOS Speech / Android Speech) ou temporairement envoyées aux services Google Cloud Speech-to-Text pour conversion.\nStockage : Nous N'enregistrons et NE stockons PAS de données vocales."
      },
      {
        title: "4. Services Tiers et Traitement des Données",
        content: "Nous utilisons des services tiers de confiance pour fournir les fonctionnalités principales de l'application. Ces services sont configurés pour respecter la vie privée des enfants.\n\nA. Google Gemini (Firebase Vertex AI)\nObjectif : Fournir des descriptions IA avancées des objets vus par la caméra.\nConfidentialité : Les données d'image envoyées à Gemini sont utilisées uniquement pour la demande immédiate et ne sont pas utilisées par Google pour entraîner leurs modèles d'IA pour d'autres utilisateurs (les normes de confidentialité des données Entreprise/API s'appliquent).\n\nB. Google Cloud Text-to-Speech\nObjectif : Générer des voix off de haute qualité pour l'application.\nConfidentialité : Le texte est envoyé aux serveurs Google pour générer des fichiers audio, qui sont lus puis supprimés du cache de l'appareil.\n\nC. Google Mobile Ads (AdMob)\nObjectif : Afficher des publicités adaptées à l'âge pour soutenir l'application.\nSécurité des enfants : Nous avons configuré AdMob pour diffuser strictement des publicités non personnalisées.\n• Nous avons activé le « Tag for Child Directed Treatment » (COPPA).\n• Nous avons défini le « Max Ad Content Rating » sur « G » (Tout public).\n• Nous n'utilisons pas de ciblage comportemental ni de cookies de suivi pour les publicités.\n• Nous respectons la politique familiale de Google Play concernant l'identifiant publicitaire Android (AAID) et ne le transmettons pas pour la publicité ciblée par centres d'intérêt.\n\nD. Google ML Kit\nObjectif : Pour la reconnaissance d'objets hors ligne.\nConfidentialité : Tout le traitement se fait localement sur votre appareil. Aucune donnée n'est envoyée vers le cloud."
      },
      {
        title: "5. Conservation des Données",
        content: "Progression du jeu : Les scores, les animaux débloqués et les objets de l'inventaire sont stockés localement sur votre appareil à l'aide de SharedPreferences. Si vous désinstallez l'application, ces données seront perdues. Nous ne synchronisons pas ces données avec un serveur cloud.\n\nFichiers temporaires : Tous les fichiers audio ou image temporaires créés pendant le jeu sont supprimés immédiatement après utilisation ou lorsque l'application est fermée."
      },
      {
        title: "6. Portail Parental (Parental Gate)",
        content: "Pour protéger les enfants, nous avons mis en place un « Portail Parental » (un défi mathématique) pour toutes les fonctionnalités qui mènent hors de l'application, telles que :\n• Consulter cette politique de confidentialité.\n• Visiter nos pages de réseaux sociaux.\n• Accéder aux paramètres susceptibles de modifier l'expérience de l'application."
      },
      {
        title: "7. Sécurité",
        content: "Nous prenons des mesures raisonnables pour protéger les informations non personnelles limitées que nous traitons. Cependant, sachez qu'aucune méthode de transmission sur Internet n'est sécurisée à 100 %."
      },
      {
        title: "8. Modifications de cette Politique de Confidentialité",
        content: "Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de « Dernière mise à jour »."
      },
      {
        title: "9. Nous Contacter",
        content: "Si vous avez des questions ou des suggestions concernant notre politique de confidentialité, n'hésitez pas à nous contacter à :\n\nE-mail : game.kidsai.app@gmail.com"
      }
    ]
  }
};

const ja = {
  ...en,
  header: {
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  hero: {
    badge: "子供向けNo.1 AI学習ゲーム",
    titlePrefix: "究極の",
    titleHighlight: "学習アドベンチャー",
    description: "KidsAIでお子様の好奇心を刺激しましょう！物の名前を覚えるのが楽しいゲームになる魔法の世界。",
    getStarted: "はじめる",
    learnMore: "もっと詳しく",
    trust: "iOS & Androidで利用可能 • 100% 子供に安全",
  },
  features: {
    ...en.features,
    title: "楽しさと学びの世界",
    subtitle: "KidsAIには、学習をエキサイティングな冒険にする機能が満載です。",
  },
  footer: {
    ...en.footer,
    slogan: "発見、学習、そして楽しもう！ 🚀",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    contact: "お問い合わせ",
    madeWith: "子供たちのために",
    forKids: "作られました",
  },
  privacyPolicy: {
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日：2025年12月20日",
    intro: "1. はじめに\n\nKidsAI（以下「私たち」）へようこそ。私たちは、ユーザー（以下「あなた」）、特に子供たちのプライバシーを保護することに尽力しています。このプライバシーポリシーは、モバイルアプリケーションKidsAIを使用する際に、私たちがどのように情報を収集、使用、保護するかを説明します。\n\nKidsAIは子供と家族向けに設計されています。私たちは児童オンラインプライバシー保護法（COPPA）および一般データ保護規則（GDPR）を遵守しています。",
    sections: [
      {
        title: "2. 私たちが収集する情報",
        content: "A. 個人情報\n私たちは、子供や親から個人を特定できる情報（PII）を収集、保存、または共有しません。以下のような情報は求めません：\n• 名前\n• メールアドレス\n• 電話番号\n• 住所\n• 位置情報（GPS）\n\nB. 非個人情報\nアプリが正しく機能することを確認するために、非個人的な技術情報を自動的に収集する場合があります。これには以下が含まれます：\n• デバイスの種類とモデル。\n• オペレーティングシステムのバージョン（iOS/Android）。\n• 言語設定。\n• バグ修正に役立つクラッシュレポート（Google Firebase Crashlytics経由）。"
      },
      {
        title: "3. 権限と機能の使用",
        content: "A. カメラ\n使用：アプリはデバイスのカメラを使用して、「物体認識」、「スマートアイ」、「スカベンジャーハント」機能を有効にします。\nデータ処理：カメラで撮影された画像はリアルタイムで処理されます。\n• クラシックモード（オフライン）の場合：画像はGoogle ML Kitを使用してデバイス上でローカルに処理されます。\n• スマートモード（AI）の場合：画像は物体を特定するための分析のみを目的として、Google Gemini（Vertex AI）サーバーに一時的に送信されます。\n保存：私たちは、アプリ内で撮影された写真やビデオをサーバーやデバイスのギャラリーに保存、録画、保管しません。分析が完了すると、画像データは即座に破棄されます。\n\nB. マイク\n使用：アプリは「音声認識」機能のためにマイクを使用し、子供たちが物の名前を言えるようにします。\nデータ処理：音声データはデバイス上でローカルに処理されるか（iOS Speech / Android Speech）、変換のためにGoogle Cloud Speech-to-Textサービスに一時的に送信されます。\n保存：私たちは音声データを録音または保存しません。"
      },
      {
        title: "4. サードパーティサービスとデータ処理",
        content: "私たちは、アプリの主要機能を提供するために信頼できるサードパーティサービスを使用しています。これらのサービスは、子供のプライバシーを尊重するように構成されています。\n\nA. Google Gemini (Firebase Vertex AI)\n目的：カメラで見える物体の高度なAI説明を提供するため。\nプライバシー：Geminiに送信される画像データは、即時のリクエストにのみ使用され、Googleが他のユーザーのためにAIモデルをトレーニングするために使用されることはありません（エンタープライズ/APIデータプライバシー基準が適用されます）。\n\nB. Google Cloud Text-to-Speech\n目的：アプリ用の高品質なナレーションを生成するため。\nプライバシー：テキストは音声ファイルを生成するためにGoogleサーバーに送信され、再生された後にデバイスのキャッシュから削除されます。\n\nC. Google Mobile Ads (AdMob)\n目的：アプリをサポートするために年齢に適した広告を表示するため。\n子供の安全性：私たちはAdMobを厳密に非パーソナライズド広告を配信するように設定しています。\n• 「子供向け取り扱いのタグ」（COPPA）を有効にしました。\n• 「最大広告コンテンツ評価」を「G」（一般視聴者）に設定しました。\n• 広告に行動ターゲティングや追跡クッキーを使用しません。\n• Android広告ID（AAID）に関するGoogle Playのファミリーポリシーに準拠しており、インタレストベース広告のために送信することはありません。\n\nD. Google ML Kit\n目的：オフラインの物体認識のため。\nプライバシー：すべての処理はデバイス上でローカルに行われます。データはクラウドに送信されません。"
      },
      {
        title: "5. データの保持",
        content: "ゲームの進行状況：スコア、ロック解除された動物、インベントリアイテムは、SharedPreferencesを使用してデバイスにローカルに保存されます。アプリをアンインストールすると、このデータは失われます。このデータをクラウドサーバーに同期することはありません。\n\n一時ファイル：ゲームプレイ中に作成された一時的な音声または画像ファイルは、使用後またはアプリを閉じたときに即座に削除されます。"
      },
      {
        title: "6. ペアレンタルゲート",
        content: "子供たちを保護するために、アプリ外にリンクする機能（以下のような）には「ペアレンタルゲート」（数学的な課題）を実装しています：\n• このプライバシーポリシーの表示。\n• ソーシャルメディアページへのアクセス。\n• アプリ体験を変更する可能性のある設定へのアクセス。"
      },
      {
        title: "7. セキュリティ",
        content: "私たちは、取り扱う限られた非個人情報を保護するために合理的な措置を講じています。ただし、インターネット上の送信方法は100％安全ではないことにご注意ください。"
      },
      {
        title: "8. このプライバシーポリシーの変更",
        content: "私たちは、プライバシーポリシーを随時更新する場合があります。変更があった場合は、このページに新しいプライバシーポリシーを掲載し、「最終更新日」を更新してお知らせします。"
      },
      {
        title: "9. お問い合わせ",
        content: "私たちのプライバシーポリシーについてご質問やご提案がある場合は、お気軽にお問い合わせください：\n\nメール：game.kidsai.app@gmail.com"
      }
    ]
  }
};

const ko = {
  ...en,
  header: {
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  hero: {
    badge: "어린이를 위한 최고의 AI 학습 게임",
    titlePrefix: "최고의",
    titleHighlight: "학습 모험",
    description: "KidsAI로 아이의 호기심을 자극하세요! 사물을 배우는 것이 즐거운 게임이 되는 마법 같은 세상.",
    getStarted: "시작하기",
    learnMore: "더 알아보기",
    trust: "iOS 및 Android 지원 • 100% 어린이 안전",
  },
  features: {
    ...en.features,
    title: "재미와 배움의 세상",
    subtitle: "KidsAI는 학습을 흥미진진한 모험으로 만드는 기능들로 가득합니다.",
  },
  footer: {
    ...en.footer,
    slogan: "발견하고, 배우고, 즐기세요! 🚀",
    privacy: "개인정보 처리방침",
    terms: "이용약관",
    contact: "문의하기",
    madeWith: "아이들을 위해",
    forKids: "만들어졌습니다",
  },
  privacyPolicy: {
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트: 2025년 12월 20일",
    intro: "1. 소개\n\nKidsAI(\"우리\")에 오신 것을 환영합니다. 우리는 사용자(\"귀하\"), 특히 어린이의 개인정보를 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 처리방침은 귀하가 모바일 애플리케이션 KidsAI를 사용할 때 우리가 정보를 수집, 사용 및 보호하는 방법을 설명합니다.\n\nKidsAI는 어린이와 가족을 위해 설계되었습니다. 우리는 어린이 온라인 개인정보 보호법(COPPA) 및 일반 데이터 보호 규정(GDPR)을 준수합니다.",
    sections: [
      {
        title: "2. 수집하는 정보",
        content: "A. 개인 정보\n우리는 어린이 또는 부모로부터 개인 식별 정보(PII)를 수집, 저장 또는 공유하지 않습니다. 우리는 다음을 요청하지 않습니다:\n• 이름\n• 이메일 주소\n• 전화번호\n• 실제 주소\n• 위치 데이터(GPS)\n\nB. 비개인 정보\n앱이 올바르게 작동하도록 하기 위해 비개인적이고 기술적인 정보를 자동으로 수집할 수 있습니다. 여기에는 다음이 포함됩니다:\n• 기기 유형 및 모델.\n• 운영 체제 버전(iOS/Android).\n• 언어 기본 설정.\n• 버그 수정을 돕기 위한 충돌 보고서(Google Firebase Crashlytics를 통해)."
      },
      {
        title: "3. 권한 및 기능 사용",
        content: "A. 카메라\n사용: 앱은 기기의 카메라를 사용하여 \"사물 인식\", \"스마트 아이\", \"보물 찾기\" 기능을 활성화합니다.\n데이터 처리: 카메라로 캡처한 이미지는 실시간으로 처리됩니다.\n• 클래식 모드(오프라인)의 경우: 이미지는 Google ML Kit를 사용하여 기기에서 로컬로 처리됩니다.\n• 스마트 모드(AI)의 경우: 이미지는 사물을 식별하기 위한 분석 목적으로만 Google Gemini(Vertex AI) 서버로 일시적으로 전송됩니다.\n저장: 우리는 앱 내에서 찍은 사진이나 비디오를 서버나 기기의 갤러리에 저장, 녹화 또는 보관하지 않습니다. 분석이 완료되면 이미지 데이터는 즉시 폐기됩니다.\n\nB. 마이크\n사용: 앱은 어린이가 사물의 이름을 말할 수 있도록 \"음성 인식\" 기능을 위해 마이크를 사용합니다.\n데이터 처리: 오디오 데이터는 기기에서 로컬로 처리되거나(iOS Speech / Android Speech) 변환을 위해 Google Cloud Speech-to-Text 서비스로 일시적으로 전송됩니다.\n저장: 우리는 음성 데이터를 녹음하거나 저장하지 않습니다."
      },
      {
        title: "4. 제3자 서비스 및 데이터 처리",
        content: "우리는 앱의 핵심 기능을 제공하기 위해 신뢰할 수 있는 제3자 서비스를 사용합니다. 이러한 서비스는 어린이의 개인정보를 존중하도록 구성되어 있습니다.\n\nA. Google Gemini (Firebase Vertex AI)\n목적: 카메라에 보이는 사물에 대한 고급 AI 설명을 제공하기 위함.\n개인정보 보호: Gemini로 전송된 이미지 데이터는 즉각적인 요청에만 사용되며 Google이 다른 사용자를 위해 AI 모델을 훈련하는 데 사용되지 않습니다(엔터프라이즈/API 데이터 개인정보 보호 표준 적용).\n\nB. Google Cloud Text-to-Speech\n목적: 앱을 위한 고품질 음성 해설을 생성하기 위함.\n개인정보 보호: 텍스트는 오디오 파일을 생성하기 위해 Google 서버로 전송되며, 재생된 후 기기 캐시에서 삭제됩니다.\n\nC. Google Mobile Ads (AdMob)\n목적: 앱을 지원하기 위해 연령에 적합한 광고를 표시하기 위함.\n어린이 안전: 우리는 AdMob이 엄격하게 비맞춤형 광고를 제공하도록 구성했습니다.\n• \"아동 대상 취급 태그\"(COPPA)를 활성화했습니다.\n• \"최대 광고 콘텐츠 등급\"을 \"G\"(전체 이용가)로 설정했습니다.\n• 광고에 행동 타겟팅이나 추적 쿠키를 사용하지 않습니다.\n• Android 광고 ID(AAID)에 관한 Google Play 가족 정책을 준수하며 관심기반 광고를 위해 전송하지 않습니다.\n\nD. Google ML Kit\n목적: 오프라인 사물 인식을 위함.\n개인정보 보호: 모든 처리는 기기에서 로컬로 이루어집니다. 데이터는 클라우드로 전송되지 않습니다."
      },
      {
        title: "5. 데이터 보존",
        content: "게임 진행 상황: 점수, 잠금 해제된 동물 및 인벤토리 아이템은 SharedPreferences를 사용하여 기기에 로컬로 저장됩니다. 앱을 제거하면 이 데이터는 손실됩니다. 우리는 이 데이터를 클라우드 서버와 동기화하지 않습니다.\n\n임시 파일: 게임 플레이 중에 생성된 임시 오디오 또는 이미지 파일은 사용 후 또는 앱이 종료될 때 즉시 삭제됩니다."
      },
      {
        title: "6. 부모 확인(Parental Gate)",
        content: "어린이를 보호하기 위해 앱 외부로 연결되는 모든 기능(예: 다음)에 대해 \"부모 확인\"(수학적 과제)을 구현했습니다:\n• 이 개인정보 처리방침 보기.\n• 소셜 미디어 페이지 방문.\n• 앱 경험을 변경할 수 있는 설정 액세스."
      },
      {
        title: "7. 보안",
        content: "우리는 우리가 처리하는 제한된 비개인 정보를 보호하기 위해 합리적인 조치를 취합니다. 그러나 인터넷을 통한 전송 방법은 100% 안전하지 않다는 점을 유의하십시오."
      },
      {
        title: "8. 이 개인정보 처리방침의 변경",
        content: "우리는 때때로 개인정보 처리방침을 업데이트할 수 있습니다. 변경 사항이 있을 경우 이 페이지에 새로운 개인정보 처리방침을 게시하고 \"최종 업데이트\" 날짜를 업데이트하여 알려드립니다."
      },
      {
        title: "9. 문의하기",
        content: "개인정보 처리방침에 대해 질문이나 제안이 있는 경우 주저하지 말고 다음으로 문의하십시오:\n\n이메일: game.kidsai.app@gmail.com"
      }
    ]
  }
};

const ar = {
  ...en,
  // Arapça için RTL (Sağdan Sola) desteği gerekebilir, ancak şimdilik metinleri ekliyoruz.
  header: {
    appStore: "App Store",
    googlePlay: "Google Play",
  },
  hero: {
    badge: "لعبة الذكاء الاصطناعي التعليمية رقم 1 للأطفال",
    titlePrefix: "مغامرة",
    titleHighlight: "التعلم القصوى",
    description: "أشعل فضول طفلك مع KidsAI! عالم سحري حيث يصبح تعلم التعرف على الأشياء لعبة مليئة بالمرح.",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",
    trust: "متاح على iOS و Android • آمن للأطفال 100٪",
  },
  features: {
    ...en.features,
    title: "عالم من المرح والتعلم",
    subtitle: "KidsAI مليء بالميزات التي تجعل التعلم مغامرة مثيرة.",
  },
  footer: {
    ...en.footer,
    slogan: "اكتشف، تعلم واستمتع! 🚀",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    contact: "اتصل بنا",
    madeWith: "صنع بـ",
    forKids: "للأطفال",
  },
  privacyPolicy: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: 20 ديسمبر 2025",
    intro: "1. مقدمة\n\nمرحبًا بكم في KidsAI (\"نحن\" أو \"نا\"). نحن ملتزمون بحماية خصوصية مستخدمينا (\"أنت\" أو \"الخاص بك\")، وخاصة الأطفال. تشرح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا للمعلومات عند استخدام تطبيق الهاتف المحمول الخاص بنا، KidsAI.\n\nتم تصميم KidsAI للأطفال والعائلات. نحن نلتزم بقانون حماية خصوصية الأطفال على الإنترنت (COPPA) واللائحة العامة لحماية البيانات (GDPR).",
    sections: [
      {
        title: "2. المعلومات التي نجمعها",
        content: "أ. المعلومات الشخصية\nنحن لا نجمع أو نخزن أو نشارك أي معلومات تعريف شخصية (PII) من الأطفال أو الآباء. نحن لا نطلب:\n• الأسماء\n• عناوين البريد الإلكتروني\n• أرقام الهواتف\n• العناوين الفعلية\n• بيانات الموقع (GPS)\n\nب. المعلومات غير الشخصية\nقد نجمع معلومات فنية غير شخصية تلقائيًا لضمان عمل التطبيق بشكل صحيح. ويشمل ذلك:\n• نوع الجهاز وطرازه.\n• إصدار نظام التشغيل (iOS/Android).\n• تفضيل اللغة.\n• تقارير الأعطال (عبر Google Firebase Crashlytics) لمساعدتنا في إصلاح الأخطاء."
      },
      {
        title: "3. الأذونات واستخدام الميزات",
        content: "أ. الكاميرا\nالاستخدام: يستخدم التطبيق كاميرا الجهاز لتمكين ميزات \"التعرف على الأشياء\" و\"العين الذكية\" و\"البحث عن الكنز\".\nمعالجة البيانات: تتم معالجة الصور التي تلتقطها الكاميرا في الوقت الفعلي.\n• بالنسبة للوضع الكلاسيكي (دون اتصال): تتم معالجة الصور محليًا على جهازك باستخدام Google ML Kit.\n• بالنسبة للوضع الذكي (AI): يتم نقل الصور مؤقتًا إلى خوادم Google Gemini (Vertex AI) فقط للتحليل لتحديد الكائن.\nالتخزين: نحن لا نحفظ أو نسجل أو نخزن أي صور أو مقاطع فيديو تم التقاطها داخل التطبيق على خوادمنا أو في معرض الجهاز. بمجرد اكتمال التحليل، يتم التخلص من بيانات الصورة على الفور.\n\nب. الميكروفون\nالاستخدام: يستخدم التطبيق الميكروفون لميزة \"التعرف على الكلام\" للسماح للأطفال بنطق أسماء الأشياء.\nمعالجة البيانات: تتم معالجة البيانات الصوتية محليًا على الجهاز (iOS Speech / Android Speech) أو إرسالها مؤقتًا إلى خدمات Google Cloud Speech-to-Text للتحويل.\nالتخزين: نحن لا نسجل أو نخزن البيانات الصوتية."
      },
      {
        title: "4. خدمات الطرف الثالث ومعالجة البيانات",
        content: "نحن نستخدم خدمات طرف ثالث موثوقة لتوفير الوظائف الأساسية للتطبيق. تم تكوين هذه الخدمات لاحترام خصوصية الأطفال.\n\nأ. Google Gemini (Firebase Vertex AI)\nالغرض: توفير أوصاف متقدمة بالذكاء الاصطناعي للأشياء التي تراها الكاميرا.\nالخصوصية: يتم استخدام بيانات الصور المرسلة إلى Gemini فقط للطلب الفوري ولا تستخدمها Google لتدريب نماذج الذكاء الاصطناعي الخاصة بها للمستخدمين الآخرين (تطبق معايير خصوصية بيانات المؤسسة/API).\n\nب. Google Cloud Text-to-Speech\nالغرض: إنشاء تعليقات صوتية عالية الجودة للتطبيق.\nالخصوصية: يتم إرسال النص إلى خوادم Google لإنشاء ملفات صوتية، يتم تشغيلها ثم حذفها من ذاكرة التخزين المؤقت للجهاز.\n\nج. Google Mobile Ads (AdMob)\nالغرض: عرض إعلانات مناسبة للعمر لدعم التطبيق.\nسلامة الطفل: لقد قمنا بتكوين AdMob لخدمة الإعلانات غير المخصصة بصرامة.\n• لقد قمنا بتمكين \"علامة المعالجة الموجهة للأطفال\" (COPPA).\n• لقد قمنا بتعيين \"الحد الأقصى لتصنيف محتوى الإعلان\" على \"G\" (الجماهير العامة).\n• نحن لا نستخدم الاستهداف السلوكي أو ملفات تعريف الارتباط للتتبع للإعلانات.\n• نحن نلتزم بسياسة عائلات Google Play فيما يتعلق بمعرف إعلانات Android (AAID) ولا نرسله للإعلانات القائمة على الاهتمامات.\n\nد. Google ML Kit\nالغرض: للتعرف على الأشياء دون اتصال بالإنترنت.\nالخصوصية: تتم جميع المعالجات محليًا على جهازك. لا يتم إرسال أي بيانات إلى السحابة."
      },
      {
        title: "5. الاحتفاظ بالبيانات",
        content: "تقدم اللعبة: يتم تخزين النتائج والحيوانات غير المقفلة وعناصر المخزون محليًا على جهازك باستخدام SharedPreferences. إذا قمت بإلغاء تثبيت التطبيق، فستفقد هذه البيانات. نحن لا نقوم بمزامنة هذه البيانات مع أي خادم سحابي.\n\nالملفات المؤقتة: يتم حذف أي ملفات صوتية أو صور مؤقتة تم إنشاؤها أثناء اللعب فورًا بعد الاستخدام أو عند إغلاق التطبيق."
      },
      {
        title: "6. بوابة الوالدين (Parental Gate)",
        content: "لحماية الأطفال، قمنا بتنفيذ \"بوابة الوالدين\" (تحدي رياضي) لأي ميزات ترتبط خارج التطبيق، مثل:\n• عرض سياسة الخصوصية هذه.\n• زيارة صفحات وسائل التواصل الاجتماعي الخاصة بنا.\n• الوصول إلى الإعدادات التي قد تغير تجربة التطبيق."
      },
      {
        title: "7. الأمان",
        content: "نحن نتخذ تدابير معقولة لحماية المعلومات غير الشخصية المحدودة التي نتعامل معها. ومع ذلك، يرجى العلم أنه لا توجد طريقة نقل عبر الإنترنت آمنة بنسبة 100٪."
      },
      {
        title: "8. التغييرات في سياسة الخصوصية هذه",
        content: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ \"آخر تحديث\"."
      },
      {
        title: "9. اتصل بنا",
        content: "إذا كان لديك أي أسئلة أو اقتراحات حول سياسة الخصوصية الخاصة بنا، فلا تتردد في الاتصال بنا على:\n\nالبريد الإلكتروني: game.kidsai.app@gmail.com"
      }
    ]
  }
};

const tr = {
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
      lastUpdated: "Son Güncelleme: 20 Aralık 2025",
      intro: "1. Giriş\n\nKidsAI (\"biz\") olarak, kullanıcılarımızın (\"siz\"), özellikle de çocukların gizliliğini korumaya büyük önem veriyoruz. Bu Gizlilik Politikası, KidsAI mobil uygulamasını kullandığınızda bilgilerin nasıl toplandığını ve korunduğunu açıklar.\n\nKidsAI çocuklar ve aileler için tasarlanmıştır. COPPA (Çocukların Çevrimiçi Gizliliğini Koruma Yasası) standartlarına tam uyumluluk gösteriyoruz.",
      sections: [
        {
          title: "2. Topladığımız Bilgiler",
          content: "A. Kişisel Bilgiler\nÇocuklardan veya ebeveynlerden HİÇBİR kişisel tanımlayıcı bilgi (PII) toplamıyoruz, saklamıyoruz veya paylaşmıyoruz. Şunları istemiyoruz:\n• İsimler\n• E-posta adresleri\n• Telefon numaraları\n• Fiziksel adresler\n• Konum verileri (GPS)\n\nB. Kişisel Olmayan Bilgiler\nUygulamanın düzgün çalışmasını sağlamak için kişisel olmayan, teknik bilgileri otomatik olarak toplayabiliriz. Buna şunlar dahildir:\n• Cihaz türü ve modeli.\n• İşletim sistemi sürümü (iOS/Android).\n• Dil tercihi.\n• Hataları düzeltmemize yardımcı olması için kilitlenme raporları (Google Firebase Crashlytics aracılığıyla)."
        },
        {
          title: "3. İzinler ve Özellik Kullanımı",
          content: "A. Kamera\nKullanım: Uygulama, \"Nesne Tanıma\", \"Akıllı Göz\" ve \"Hazine Avı\" özelliklerini etkinleştirmek için cihazın kamerasını kullanır.\nVeri İşleme: Kamera tarafından çekilen görüntüler gerçek zamanlı olarak işlenir.\n• Klasik Mod (Çevrimdışı) için: Görüntüler Google ML Kit kullanılarak cihazınızda yerel olarak işlenir.\n• Akıllı Mod (AI) için: Görüntüler, yalnızca nesneyi tanımlamak amacıyla analiz edilmek üzere geçici olarak Google Gemini (Vertex AI) sunucularına iletilir.\nDepolama: Uygulama içinde çekilen hiçbir fotoğrafı veya videoyu sunucularımıza veya cihazın galerisine KAYDETMİYORUZ, saklamıyoruz veya depolamıyoruz. Analiz tamamlandıktan sonra görüntü verileri derhal silinir.\n\nB. Mikrofon\nKullanım: Uygulama, çocukların nesnelerin isimlerini söylemesine izin vermek için \"Konuşma Tanıma\" özelliği için mikrofonu kullanır.\nVeri İşleme: Ses verileri cihazda yerel olarak işlenir (iOS Speech / Android Speech) veya dönüştürme için geçici olarak Google Cloud Speech-to-Text hizmetlerine gönderilir.\nDepolama: Ses verilerini kaydetmiyoruz veya saklamıyoruz."
        },
        {
          title: "4. Üçüncü Taraf Hizmetleri ve Veri İşleme",
          content: "Uygulamanın temel işlevlerini sağlamak için güvenilir üçüncü taraf hizmetleri kullanıyoruz. Bu hizmetler çocukların gizliliğine saygı duyacak şekilde yapılandırılmıştır.\n\nA. Google Gemini (Firebase Vertex AI)\nAmacı: Kamera tarafından görülen nesnelerin gelişmiş yapay zeka tanımlarını sağlamak.\nGizlilik: Gemini'ye gönderilen görüntü verileri yalnızca anlık istek için kullanılır ve Google tarafından diğer kullanıcılar için yapay zeka modellerini eğitmek amacıyla kullanılmaz (Kurumsal/API veri gizliliği standartları geçerlidir).\n\nB. Google Cloud Text-to-Speech\nAmacı: Uygulama için yüksek kaliteli seslendirmeler oluşturmak.\nGizlilik: Metin, ses dosyaları oluşturmak için Google sunucularına gönderilir, bu dosyalar oynatılır ve ardından cihaz önbelleğinden silinir.\n\nC. Google Mobile Ads (AdMob)\nAmacı: Uygulamayı desteklemek için yaşa uygun reklamlar göstermek.\nÇocuk Güvenliği: AdMob'u kesinlikle Kişiselleştirilmemiş Reklamlar sunacak şekilde yapılandırdık.\n• \"Çocuklara Yönelik Muamele Etiketi\"ni (COPPA) etkinleştirdik.\n• \"Maksimum Reklam İçeriği Derecelendirmesi\"ni \"G\" (Genel İzleyici) olarak ayarladık.\n• Reklamlar için davranışsal hedefleme veya izleme çerezleri kullanmıyoruz.\n• Android Reklam Kimliği (AAID) ile ilgili Google Play Aile Politikası'na uyuyoruz ve bunu ilgi alanına dayalı reklamcılık için iletmiyoruz.\n\nD. Google ML Kit\nAmacı: Çevrimdışı nesne tanıma için.\nGizlilik: Tüm işlemler yerel olarak cihazınızda gerçekleşir. Buluta hiçbir veri gönderilmez."
        },
        {
          title: "5. Veri Saklama",
          content: "Oyun İlerlemesi: Puanlar, kilidi açılan hayvanlar ve envanter öğeleri, SharedPreferences kullanılarak cihazınızda yerel olarak saklanır. Uygulamayı kaldırırsanız bu veriler kaybolur. Bu verileri herhangi bir bulut sunucusuyla senkronize etmiyoruz.\n\nGeçici Dosyalar: Oyun sırasında oluşturulan geçici ses veya görüntü dosyaları, kullanımdan hemen sonra veya uygulama kapatıldığında silinir."
        },
        {
          title: "6. Ebeveyn Kilidi (Parental Gate)",
          content: "Çocukları korumak için, uygulama dışına bağlantı veren tüm özellikler (örneğin aşağıdakiler) için bir \"Ebeveyn Kilidi\" (matematiksel bir meydan okuma) uyguladık:\n• Bu Gizlilik Politikasını görüntüleme.\n• Sosyal medya sayfalarımızı ziyaret etme.\n• Uygulama deneyimini değiştirebilecek ayarlara erişme."
        },
        {
          title: "7. Güvenlik",
          content: "İşlediğimiz sınırlı kişisel olmayan bilgileri korumak için makul önlemler alıyoruz. Ancak, internet üzerinden hiçbir iletim yönteminin %100 güvenli olmadığını lütfen unutmayın."
        },
        {
          title: "8. Bu Gizlilik Politikasındaki Değişiklikler",
          content: "Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Herhangi bir değişikliği, yeni Gizlilik Politikasını bu sayfada yayınlayarak ve \"Son Güncelleme\" tarihini güncelleyerek size bildireceğiz."
        },
        {
          title: "9. İletişim",
          content: "Gizlilik Politikamızla ilgili herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçmekten çekinmeyin:\n\nE-posta: game.kidsai.app@gmail.com"
        }
      ]
    }
};

export const translations = {
  en,
  tr,
  de,
  es,
  fr,
  ja,
  ko,
  ar,
};