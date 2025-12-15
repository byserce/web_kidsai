import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white/50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
            <h1 className="font-headline text-4xl font-bold text-foreground">
              Gizlilik Politikası
            </h1>
            <p className="text-sm text-muted-foreground">Son Güncelleme: 29 Mayıs 2024</p>
            
            <h2 className="font-headline">1. Giriş (Introduction)</h2>
            <p>
              Bu gizlilik politikası, [Şirket/Geliştirici Adınız] tarafından geliştirilen 'KidsAI' mobil uygulaması için geçerlidir. KidsAI, 3 yaş ve üzeri çocukların çevrelerindeki nesneleri kamera ve yapay zeka yardımıyla öğrenmelerini sağlayan eğitici bir oyundur. Kullanıcılarımızın, özellikle de çocuklarımızın gizliliğine son derece önem veriyoruz. Bu politika, uygulamamızı kullanırken hangi verileri topladığımızı, bu verileri neden ve nasıl kullandığımızı ve bu verilerle ilgili haklarınızı şeffaf bir şekilde açıklamaktadır.
            </p>

            <h2 className="font-headline">2. Topladığımız Veriler (Data We Collect)</h2>
            <p>
              Hangi veriyi, hangi teknolojiyle ve hangi amaçla topladığımızı aşağıda detaylı olarak açıklıyoruz.
            </p>
            <h3>a. Kamera ve Görüntü Verileri (Camera and Image Data)</h3>
            <ul>
              <li>Uygulamamızın 'Akıllı Göz' ve 'Evde Bulmaca' gibi temel özelliklerinin çalışabilmesi için cihazınızın kamerasına erişim izni istemekteyiz.</li>
              <li>Oyun sırasında, nesneleri tanımlamak amacıyla kameranızla anlık görüntüler yakalarsınız. Bu görüntüler, nesnenin ne olduğunu analiz etmek için kullanılır.</li>
              <li><strong>'Serbest Mod'da</strong> görüntü analizi, Google'ın ML Kit Image Labeling teknolojisi kullanılarak tamamen <strong>cihazınızın üzerinde</strong> yapılır. Bu görüntüler cihazınızdan asla ayrılmaz.</li>
              <li><strong>'Akıllı Mod'</strong> ve <strong>'Evde Bulmaca'</strong> oyunlarında ise, görüntü, nesneyi daha yaratıcı bir şekilde tanımlayabilmek ve doğruluğu sağlamak amacıyla Google'ın Firebase Vertex AI (Gemini) servisine güvenli bir bağlantı üzerinden gönderilir. Görüntüler, analiz tamamlandıktan sonra sunuculardan <strong>derhal silinir</strong> ve kalıcı olarak saklanmaz.</li>
              <li>Uygulama, çektiğiniz fotoğrafları cihazınızın galerisine kaydetmez veya başka hiçbir platformda paylaşmaz.</li>
            </ul>

            <h3>b. Mikrofon ve Ses Verileri (Microphone and Audio Data)</h3>
            <ul>
              <li>'Akıllı Göz' oyununun telaffuz doğrulama özelliği için cihazınızın mikrofonuna erişim izni talep ediyoruz.</li>
              <li>Bu özellik, söylediğiniz nesne isminin doğruluğunu kontrol etmek amacıyla kısa bir ses kaydı alır. Bu ses kaydı, metne dönüştürülmek üzere Google'ın Konuşma Tanıma (Speech-to-Text) servisine gönderilir.</li>
              <li>Ses verileriniz, analiz işlemi tamamlandıktan hemen sonra <strong>kalıcı olarak silinir</strong>. Bu veriler kimliğinizle ilişkilendirilmez ve profil oluşturma amacıyla kullanılmaz.</li>
            </ul>

            <h3>c. Oyun İlerleme Verileri (Game Progression Data)</h3>
            <ul>
              <li>Oyunlarda kazandığınız puanları ve başarılarınızı takip etmek için oyun ilerleme verilerinizi (örneğin, toplam puanınız) cihazınızda yerel olarak saklıyoruz. Bu veriler, oyun deneyiminizi kişiselleştirmek için kullanılır ve başka hiçbir üçüncü tarafla paylaşılmaz.</li>
            </ul>

            <h2 className="font-headline">3. Verilerinizi Nasıl Kullanıyoruz? (How We Use Your Data)</h2>
            <p>
              Topladığımız verileri yalnızca aşağıdaki amaçlar için kullanırız:
            </p>
            <ul>
              <li><strong>Uygulamanın temel işlevlerini sağlamak:</strong> Nesne tanıma, telaffuz kontrolü ve oyun mekaniklerini çalıştırmak.</li>
              <li><strong>Eğitici ve eğlenceli bir deneyim sunmak:</strong> Yapay zeka modelleriyle nesneler hakkında yaratıcı açıklamalar üretmek.</li>
              <li><strong>Oyun ilerlemesini takip etmek:</strong> Kazandığınız puanları kaydederek başarı hissini yaşatmak.</li>
              <li><strong>Uygulamayı iyileştirmek:</strong> Hata tespiti ve performans analizi yapmak (bu analizler anonim verilerle yapılır).</li>
            </ul>

            <h2 className="font-headline">4. Veri Paylaşımı ve Üçüncü Taraflar (Data Sharing and Third Parties)</h2>
            <p>
              Kullanıcılarımızın verilerini satmaz veya kiralamayız. Veri paylaşımını yalnızca uygulamanın çalışması için zorunlu olan durumlarda ve aşağıda belirtilen güvenilir iş ortaklarımızla yaparız:
            </p>
            <ul>
              <li><strong>Google (Firebase ve Google Cloud):</strong> Uygulamamızın 'Akıllı Mod' (Vertex AI - Gemini), 'Konuşma Tanıma' (Speech-to-Text) ve 'Serbest Mod' (ML Kit) gibi özellikleri için Google'ın altyapısını kullanmaktadır. Görüntü ve ses verileri, yalnızca analiz amacıyla bu servislere gönderilir ve analiz sonrası saklanmaz. Google'ın gizlilik politikasına <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">buradan</a> ulaşabilirsiniz.</li>
              <li><strong>Yasal Zorunluluklar:</strong> Yasal bir talep veya mahkeme kararı olması durumunda, verilerinizi yetkili mercilerle paylaşabiliriz.</li>
            </ul>

            <h2 className="font-headline">5. Çocukların Gizliliği (Children's Privacy)</h2>
            <p>
              Uygulamamız 3 yaş ve üzeri çocuklar için tasarlanmıştır ve COPPA, GDPR gibi çocukların çevrimiçi gizliliğini koruyan yasalara tam uyum göstermeyi hedefler.
            </p>
            <ul>
                <li>Uygulamamız, çocuklardan bilinçli olarak ad, soyad, e-posta adresi, coğrafi konum gibi doğrudan kişisel tanımlayıcı bilgiler (PII) <strong>toplamaz</strong>.</li>
                <li>Kamera ve mikrofon aracılığıyla toplanan görüntü ve ses verileri, çocuğun kişisel kimliğini belirlemek için kullanılmaz. Bu veriler sadece anlık oyun mekaniği için kullanılır ve sonrasında <strong>derhal silinir</strong>.</li>
                <li>Ebeveynler, çocuklarının verileriyle ilgili bilgi talep etme, bu verilerin silinmesini isteme veya daha fazla veri toplanmasını engelleme hakkına sahiptir. Bu tür talepleriniz için lütfen bizimle <strong>[destek_email_adresiniz@example.com]</strong> adresi üzerinden iletişime geçin.</li>
            </ul>

            <h2 className="font-headline">6. Veri Güvenliği (Data Security)</h2>
            <p>
              Verilerinizin güvenliğini ciddiye alıyoruz. Veri aktarımı sırasında endüstri standardı şifreleme (SSL/TLS) yöntemleri kullanıyoruz. Verilerinize yetkisiz erişimi, değiştirilmesini veya ifşa edilmesini önlemek için makul teknik ve idari önlemleri alıyoruz. Ancak hiçbir internet tabanlı servisin %100 güvenli olmadığını unutmamanız önemlidir.
            </p>

            <h2 className="font-headline">7. Bu Politikadaki Değişiklikler (Changes to This Policy)</h2>
            <p>
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli bir değişiklik yaptığımızda, uygulama içinde bir bildirimle veya politikanın 'Son Güncelleme' tarihini değiştirerek sizi bilgilendireceğiz. Uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelecektir.
            </p>

            <h2 className="font-headline">8. Bize Ulaşın (Contact Us)</h2>
            <p>
              Gizlilik politikamızla ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen bize <strong>[destek_email_adresiniz@example.com]</strong> e-posta adresi üzerinden ulaşmaktan çekinmeyin.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
