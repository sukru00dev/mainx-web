import os

translations = {
    'ReferencesMarquee.tsx': [
        ('GÜVENİLEN KURUMLAR & TEKNOLOJİLER', '{t("ref_label")}')
    ],
    'ServicesBento.tsx': [
        ('Uzmanlık Alanlarımız', '{t("services_label")}'),
        ('Yenilikçi <span className="text-primary font-bold">Mühendislik.</span>', '{t("services_title")} <span className="text-primary font-bold">{t("services_title2")}</span>'),
        ('Kurumsal ihtiyaçlarınıza özel olarak tasarlanmış, performansı ve güvenliği merkeze alan uçtan uca yazılım mimarileri.', '{t("services_desc")}')
    ],
    'ProductsShowcase.tsx': [
        ('Proje Vitrini', '{t("products_label")}'),
        ('Geliştirdiğimiz <span className="text-primary font-bold">Dijital Ürünler.</span>', '{t("products_title")} <span className="text-primary font-bold">{t("products_title2")}</span>'),
        ('Her biri belirli bir problemi çözmek için tasarlanmış, B2B ve B2C odaklı aktif projelerimiz ve Ar-Ge çalışmalarımız.', '{t("products_desc")}'),
        ('Karşılaşılan Zorluk', '{t("products_challenge")}'),
        ('Üretilen Çözüm', '{t("products_solution")}'),
        ('Projeyi İncele', '{t("products_view")}'),
        ('Kaynak Kod', '{t("products_source")}')
    ],
    'Testimonials.tsx': [
        ('Partner Görüşleri', '{t("testimonials_label")}'),
        ('Müşterilerimiz <span className="text-primary font-bold">Ne Diyor?</span>', '{t("testimonials_title")} <span className="text-primary font-bold">{t("testimonials_title2")}</span>')
    ],
    'Workflow.tsx': [
        ('Nasıl Çalışıyoruz?', '{t("workflow_label")}'),
        ('Fikirden Ürüne <span className="text-primary font-bold">4 Adım.</span>', '{t("workflow_title")} <span className="text-primary font-bold">{t("workflow_title2")}</span>'),
        ('1. Keşif & Analiz', '{t("w1_title")}'),
        ('Projenizin ihtiyaçlarını, hedef kitlesini ve teknik gereksinimlerini derinlemesine analiz ediyoruz.', '{t("w1_desc")}'),
        ('2. Sistem Tasarımı', '{t("w2_title")}'),
        ('Ölçeklenebilir mimariyi kuruyor, veritabanı şemalarını ve kullanıcı arayüzü (UI/UX) prototiplerini hazırlıyoruz.', '{t("w2_desc")}'),
        ('3. Çevik Geliştirme', '{t("w3_title")}'),
        ('Modern teknolojiler (React, Go, Flutter) ile temiz ve performanslı kod yazarak projeyi hayata geçiriyoruz.', '{t("w3_desc")}'),
        ('4. Test & Canlıya Alma', '{t("w4_title")}'),
        ('Güvenlik ve performans testlerini tamamlayıp, CI/CD süreçleri ile projeyi bulut sunuculara deploy ediyoruz.', '{t("w4_desc")}')
    ],
    'Architecture.tsx': [
        ('Teknik Mimari (Tech Stack Pipeline)', '{t("arch_label")}'),
        ('Sadece Kod Değil, <span className="text-primary font-bold">Ölçeklenebilir Sistemler.</span>', '{t("arch_title")} <span className="text-primary font-bold">{t("arch_title2")}</span>'),
        ('Sistem Tasarımı', '{t("arch1_title")}'),
        ('Geliştirme', '{t("arch2_title")}'),
        ('Konteynerizasyon', '{t("arch3_title")}'),
        ('Cloud Ölçekleme', '{t("arch4_title")}')
    ],
    'FAQ.tsx': [
        ('Aklınıza Takılanlar', '{t("faq_label")}'),
        ('Sıkça Sorulan <span className="text-primary font-bold">Sorular.</span>', '{t("faq_title")} <span className="text-primary font-bold">{t("faq_title2")}</span>'),
        ('Çalışma prensiplerimiz, kullandığımız teknolojiler ve süreçlerimiz hakkında aklınıza takılan soruların cevapları.', '{t("faq_desc")}'),
        ('Ortalama bir projenin teslim süresi nedir?', '{t("faq1_q")}'),
        ('Projenin kapsamına göre değişmekle birlikte, standart bir kurumsal web sitesi 2-3 hafta, gelişmiş bir SaaS veya Mobil Uygulama ise 6-12 hafta arasında canlıya alınmaktadır.', '{t("faq1_a")}'),
        ('Sadece tasarım mı yapıyorsunuz yoksa kodlama da dahil mi?', '{t("faq2_q")}'),
        ('Biz uçtan uca (End-to-End) hizmet veren bir geliştirme stüdyosuyuz. UI/UX tasarımından başlayıp, veritabanı mimarisinin kurulması, kodlanması ve sunucuya deploy edilmesine kadar tüm süreci yönetiyoruz.', '{t("faq2_a")}'),
        ('Projelerde hangi teknolojileri kullanıyorsunuz?', '{t("faq3_q")}'),
        ('Web tarafında React, Next.js, Node.js; mobil tarafta Flutter; veritabanında PostgreSQL, MongoDB; Web3 projelerinde ise Go ve Hyperledger/Solidity kullanıyoruz.', '{t("faq3_a")}'),
        ('Yapay zeka (AI) entegrasyonu hizmetiniz neleri kapsıyor?', '{t("faq4_q")}'),
        ('Şirket içi verilerinizi analiz eden özel LLM ajanları, müşteri hizmetleri chatbotları, RAG sistemleri ve n8n ile otonom iş akışları kurabiliyoruz.', '{t("faq4_a")}'),
        ('Proje tesliminden sonra teknik destek veriyor musunuz?', '{t("faq5_q")}'),
        ('Evet. Tüm projelerimizde teslimat sonrası 1-3 ay arasında ücretsiz hata düzeltme ve sistem izleme desteği sunuyoruz.', '{t("faq5_a")}')
    ],
    'Contact.tsx': [
        ('Akıllı Asistan', '{t("contact_label")}'),
        ('Sıradan Formları Unutun. <br className="hidden md:block" /><span className="text-primary font-bold">Hemen Konuşalım.</span>', '{t("contact_title1")} <br className="hidden md:block" /><span className="text-primary font-bold">{t("contact_title2")}</span>'),
        ('Zamanınızın değerli olduğunu biliyoruz. Akıllı asistanımızla 3 adımda projenizin taslağını oluşturun.', '{t("contact_desc")}'),
        ('müsait ve projeleri değerlendiriyor', '{t("contact_status")}'),
        ('MainX AI Asistan', '{t("contact_bot")}'),
        ('Çevrimiçi', '{t("contact_online")}'),
        ('Yeni Bir Proje Başlatmak', '{t("contact_q1")}'),
        ('Teknik Danışmanlık', '{t("contact_q2")}'),
        ('Sadece Merhaba Demek', '{t("contact_q3")}'),
        ('Merhaba! MainX Stüdyolarına hoş geldiniz. Size nasıl yardımcı olabilirim?', '{t("contact_welcome")}')
    ]
}

def add_import(content):
    if 'useLanguage' not in content:
        import_stmt = 'import { useLanguage } from "@/context/LanguageContext";\n'
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.startswith('import '):
                lines.insert(i+1, import_stmt)
                break
        return '\n'.join(lines)
    return content

def add_hook(content):
    if 'const { t } = useLanguage();' not in content:
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if 'export default function' in line or 'export function' in line:
                lines.insert(i+1, '  const { t } = useLanguage();')
                break
        return '\n'.join(lines)
    return content

for filename, pairs in translations.items():
    filepath = os.path.join('src', 'components', filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = add_import(content)
        content = add_hook(content)
        
        for old, new in pairs:
            content = content.replace(old, new)
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filename}")
