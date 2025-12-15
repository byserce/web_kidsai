import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Cloud, Star, ShieldCheck, Mail, ArrowLeft } from 'lucide-react';
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-kids-bg relative overflow-x-hidden font-sans">
      
      {/* --- ARKA PLAN SÜSLEMELERİ (Home ile tutarlılık için) --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[5%] -left-[5%] animate-pulse duration-[4000ms]">
          <Cloud className="w-[200px] h-[200px] text-white/60 fill-white/40" />
        </div>
        <div className="absolute top-[10%] -right-[5%] animate-pulse duration-[5000ms]">
          <Cloud className="w-[250px] h-[250px] text-white/50 fill-white/30" />
        </div>
        <div className="absolute bottom-[20%] left-[10%] animate-bounce duration-[8000ms]">
          <Cloud className="w-[120px] h-[120px] text-white/40 fill-white/20" />
        </div>
        <div className="absolute top-[15%] right-[20%] animate-spin-slow opacity-40">
          <Star className="w-10 h-10 text-kids-yellow fill-kids-yellow" />
        </div>
      </div>

      <Header />

      <main className="flex-1 py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4">
          
          {/* Geri Dön Butonu (Opsiyonel ama UX için iyi) */}
          <div className="max-w-4xl mx-auto mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-kids-primaryShadow font-luckiest hover:underline">
              <ArrowLeft className="w-5 h-5" />
              Ana Sayfaya Dön
            </Link>
          </div>

          {/* --- ANA İÇERİK KARTI --- */}
          <div className="mx-auto max-w-4xl bg-white rounded-[40px] border-4 border-white shadow-kids-lg shadow-black/5 p-6 md:p-12">
            
            {/* Başlık Bölümü */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-kids-bg rounded-full mb-4 border-4 border-white shadow-sm">
                <ShieldCheck className="w-8 h-8 text-kids-accent" />
              </div>
              <h1 className="font-luckiest text-4xl md:text-5xl text-kids-primary drop-shadow-sm mb-2">
                Gizlilik Politikası
              </h1>
              <p className="text-slate-400 font-medium bg-slate-50 inline-block px-4 py-1 rounded-full text-sm">
                Son Güncelleme: 29 Mayıs 2024
              </p>
            </div>
            
            {/* Metin İçeriği */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-luckiest prose-headings:tracking-wide">
              
              <h2 className="text-kids-secondary text-2xl md:text-3xl">1. Giriş (Introduction)</h2>
              <p className="text-slate-600 leading-relaxed">
                Bu gizlilik politikası, [Şirket/Geliştirici Adınız] tarafından geliştirilen <strong className="text-kids-primary">KidsAI</strong> mobil uygulaması için geçerlidir. KidsAI, 3 yaş ve üzeri çocukların çevrelerindeki nesneleri kamera ve yapay zeka yardımıyla öğrenmelerini sağlayan eğitici bir oyundur. Kullanıcılarımızın, özellikle de çocuklarımızın gizliliğine son derece önem veriyoruz. Bu politika, uygulamamızı kullanırken hangi verileri topladığımızı, bu verileri neden ve nasıl kullandığımızı ve bu verilerle ilgili haklarınızı şeffaf bir şekilde açıklamaktadır.
              </p>

              <div className="my-8 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-kids-accent/30 rounded-full"></div>
              </div>

              <h2 className="text-kids-secondary text-2xl md:text-3xl">2. Topladığımız Veriler (Data We Collect)</h2>
              <p className="text-slate-600">
                Hangi veriyi, hangi teknolojiyle ve hangi amaçla topladığımızı aşağıda detaylı olarak açıklıyoruz.
              </p>
              
              <div className="bg-kids-bg/30 p-6 rounded-3xl border-2 border-kids-bg my-6">
                <h3 className="text-kids-accent text-xl mt-0">a. Kamera ve Görüntü Verileri</h3>
                <ul className="text-slate-600 list-disc pl-5 space-y-2 marker:text-kids-accent">
                  <li>Uygulamamızın 'Akıllı Göz' ve 'Evde Bulmaca' gibi temel özelliklerinin çalışabilmesi için cihazınızın kamerasına erişim izni istemekteyiz.</li>
                  <li>Oyun sırasında, nesneleri tanımlamak amacıyla kameranızla anlık görüntüler yakalarsınız. Bu görüntüler, nesnenin ne olduğunu analiz etmek için kullanılır.</li>
                  <li><strong>'Serbest Mod'da</strong> görüntü analizi, Google'ın ML Kit Image Labeling teknolojisi kullanılarak tamamen <strong>cihazınızın üzerinde</strong> yapılır. Bu görüntüler cihazınızdan asla ayrılmaz.</li>
                  <li><strong>'Akıllı Mod'</strong> ve <strong>'Evde Bulmaca'</strong> oyunlarında ise, görüntü, nesneyi daha yaratıcı bir şekilde tanımlayabilmek ve doğruluğu sağlamak amacıyla Google'ın Firebase Vertex AI (Gemini) servisine güvenli bir bağlantı üzerinden gönderilir. Görüntüler, analiz tamamlandıktan sonra sunuculardan <strong>derhal silinir</strong> ve kalıcı olarak saklanmaz.</li>
                  <li>Uygulama, çektiğiniz fotoğrafları cihazınızın galerisine kaydetmez veya başka hiçbir platformda paylaşmaz.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-3xl border-2 border-purple-100 my-6">
                <h3 className="text-kids-secondary text-xl mt-0">b. Mikrofon ve Ses Verileri</h3>
                <ul className="text-slate-600 list-disc pl-5 space-y-2 marker:text-kids-secondary">
                  <li>'Akıllı Göz' oyununun telaffuz doğrulama özelliği için cihazınızın mikrofonuna erişim izni talep ediyoruz.</li>
                  <li>Bu özellik, söylediğiniz nesne isminin doğruluğunu kontrol etmek amacıyla kısa bir ses kaydı alır. Bu ses kaydı, metne dönüştürülmek üzere Google'ın Konuşma Tanıma (Speech-to-Text) servisine gönderilir.</li>
                  <li>Ses verileriniz, analiz işlemi tamamlandıktan hemen sonra <strong>kalıcı olarak silinir</strong>. Bu veriler kimliğinizle ilişkilendirilmez ve profil oluşturma amacıyla kullanılmaz.</li>
                </ul>
              </div>

              <h3 className="text-kids-warning text-xl">c. Oyun İlerleme Verileri</h3>
              <ul className="text-slate-600 list-disc pl-5 space-y-2 marker:text-kids-warning">
                <li>Oyunlarda kazandığınız puanları ve başarılarınızı takip etmek için oyun ilerleme verilerinizi (örneğin, toplam puanınız) cihazınızda yerel olarak saklıyoruz. Bu veriler, oyun deneyiminizi kişiselleştirmek için kullanılır ve başka hiçbir üçüncü tarafla paylaşılmaz.</li>
              </ul>

              <h2 className="text-kids-secondary text-2xl md:text-3xl mt-10">3. Verilerinizi Nasıl Kullanıyoruz?</h2>
              <ul className="text-slate-600 list-disc pl-5 space-y-2 marker:text-slate-300">
                <li><strong>Uygulamanın temel işlevlerini sağlamak:</strong> Nesne tanıma, telaffuz kontrolü ve oyun mekaniklerini çalıştırmak.</li>
                <li><strong>Eğitici ve eğlenceli bir deneyim sunmak:</strong> Yapay zeka modelleriyle nesneler hakkında yaratıcı açıklamalar üretmek.</li>
                <li><strong>Oyun ilerlemesini takip etmek:</strong> Kazandığınız puanları kaydederek başarı hissini yaşatmak.</li>
                <li><strong>Uygulamayı iyileştirmek:</strong> Hata tespiti ve performans analizi yapmak (bu analizler anonim verilerle yapılır).</li>
              </ul>

              <h2 className="text-kids-secondary text-2xl md:text-3xl mt-10">4. Veri Paylaşımı ve Üçüncü Taraflar</h2>
              <p className="text-slate-600">
                Kullanıcılarımızın verilerini satmaz veya kiralamayız. Veri paylaşımını yalnızca uygulamanın çalışması için zorunlu olan durumlarda ve aşağıda belirtilen güvenilir iş ortaklarımızla yaparız:
              </p>
              <ul className="text-slate-600 list-disc pl-5 space-y-2 marker:text-slate-300">
                <li>
                    <strong>Google (Firebase ve Google Cloud):</strong> Uygulamamızın 'Akıllı Mod', 'Konuşma Tanıma' ve 'Serbest Mod' gibi özellikleri için Google'ın altyapısını kullanmaktadır. Görüntü ve ses verileri, yalnızca analiz amacıyla bu servislere gönderilir ve analiz sonrası saklanmaz. Google'ın gizlilik politikasına <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-kids-accent font-bold hover:underline decoration-2">buradan</a> ulaşabilirsiniz.
                </li>
                <li><strong>Yasal Zorunluluklar:</strong> Yasal bir talep veya mahkeme kararı olması durumunda, verilerinizi yetkili mercilerle paylaşabiliriz.</li>
              </ul>

              <div className="bg-green-50 p-8 rounded-[30px] border-2 border-green-100 my-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-xl"></div>
                <h2 className="text-kids-success text-2xl md:text-3xl mt-0 relative z-10">5. Çocukların Gizliliği</h2>
                <p className="text-slate-600 relative z-10">
                  Uygulamamız 3 yaş ve üzeri çocuklar için tasarlanmıştır ve COPPA, GDPR gibi çocukların çevrimiçi gizliliğini koruyan yasalara tam uyum göstermeyi hedefler.
                </p>
                <ul className="text-slate-600 list-disc pl-5 space-y-2 mt-4 marker:text-kids-success relative z-10">
                    <li>Uygulamamız, çocuklardan bilinçli olarak ad, soyad, e-posta adresi, coğrafi konum gibi doğrudan kişisel tanımlayıcı bilgiler (PII) <strong>toplamaz</strong>.</li>
                    <li>Kamera ve mikrofon aracılığıyla toplanan görüntü ve ses verileri, çocuğun kişisel kimliğini belirlemek için kullanılmaz. Bu veriler sadece anlık oyun mekaniği için kullanılır ve sonrasında <strong>derhal silinir</strong>.</li>
                    <li>Ebeveynler, çocuklarının verileriyle ilgili bilgi talep etme, bu verilerin silinmesini isteme veya daha fazla veri toplanmasını engelleme hakkına sahiptir.</li>
                </ul>
              </div>

              <h2 className="text-kids-secondary text-2xl md:text-3xl">6. Veri Güvenliği</h2>
              <p className="text-slate-600">
                Verilerinizin güvenliğini ciddiye alıyoruz. Veri aktarımı sırasında endüstri standardı şifreleme (SSL/TLS) yöntemleri kullanıyoruz. Verilerinize yetkisiz erişimi, değiştirilmesini veya ifşa edilmesini önlemek için makul teknik ve idari önlemleri alıyoruz. Ancak hiçbir internet tabanlı servisin %100 güvenli olmadığını unutmamanız önemlidir.
              </p>

              <h2 className="text-kids-secondary text-2xl md:text-3xl mt-10">7. Bu Politikadaki Değişiklikler</h2>
              <p className="text-slate-600">
                Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli bir değişiklik yaptığımızda, uygulama içinde bir bildirimle veya politikanın 'Son Güncelleme' tarihini değiştirerek sizi bilgilendireceğiz. Uygulamayı kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelecektir.
              </p>

              <hr className="my-10 border-slate-200" />

              <div className="flex flex-col items-center justify-center text-center p-8 bg-kids-yellow/20 rounded-3xl border-2 border-kids-yellow/50">
                <Mail className="w-10 h-10 text-kids-warning mb-4" />
                <h2 className="text-kids-warningShadow text-2xl md:text-3xl mt-0 font-luckiest">8. Bize Ulaşın</h2>
                <p className="text-slate-600 mb-4">
                  Gizlilik politikamızla ilgili herhangi bir sorunuz veya endişeniz varsa, lütfen bize ulaşmaktan çekinmeyin.
                </p>
                <a href="mailto:destek_email_adresiniz@example.com" className="bg-white text-kids-warningShadow font-luckiest py-3 px-8 rounded-full border-2 border-kids-warningShadow hover:bg-kids-warning hover:text-white transition-colors shadow-kids-sm">
                  destek_email_adresiniz@example.com
                </a>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}