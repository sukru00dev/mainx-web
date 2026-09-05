import os

translations = {
    'Hero.tsx': [
        ('TÜBİTAK 2209-A Blok Zinciri Projesi Onaylandı', '{t("hero_badge")}'),
        ('Silikon Vadisi Standartlarında', '{t("hero_title1")}'),
        ('Dijital Mühendislik.', '{t("hero_title2")}'),
        ('MainX Stüdyoları by Şükrü BAŞ. Kurumsal firmalar için ölçeklenebilir B2B SaaS panelleri, otonom yapay zeka ajanları ve güvenli blok zinciri mimarileri inşa ediyoruz.', '{t("hero_desc")}'),
        ('Proje Başlat', '{t("hero_cta1")}'),
        ('Hizmet Kataloğu', '{t("hero_cta2")}')
    ],
    'AboutMe.tsx': [
        ('Kurucu / Baş Mühendis', '{t("about_label")}'),
        ('Ben <span className="font-bold">Şükrü BAŞ.</span><br />', '{t("about_title1")} <span className="font-bold">{t("about_title2")}</span><br />'),
        ('Dijital Sistemler İnşa Ediyorum.', '{t("about_title3")}'),
        ('Yazılım dünyasına sadece kod yazmak için değil, insanların hayatını kolaylaştıran, ölçeklenebilir ve kusursuz mimariler kurmak için adım attım.', '{t("about_p1")}'),
        ('TÜBİTAK onaylı blok zinciri araştırmalarından, binlerce kişinin kullandığı mobil uygulamalara ve yapay zeka destekli otonom sistemlere kadar geniş bir yelpazede "uçtan uca" (end-to-end) mühendislik hizmeti sunuyorum.', '{t("about_p2")}'),
        ('Özgeçmiş İndir (CV)', '{t("about_downloadCV")}'),
        ('İletişime Geç', '{t("about_contact")}')
    ],
    'LiveCounter.tsx': [
        ('Satır Temiz Kod', '{t("counter_code")}'),
        ('Başarılı Proje', '{t("counter_projects")}'),
        ('Sistem Uptime', '{t("counter_uptime")}'),
        ('Mutlu Müşteri', '{t("counter_clients")}')
    ]
}

def add_import(content):
    if 'useLanguage' not in content:
        import_stmt = 'import { useLanguage } from "@/context/LanguageContext";\n'
        # Insert after first import
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.startswith('import '):
                lines.insert(i+1, import_stmt)
                break
        return '\n'.join(lines)
    return content

def add_hook(content):
    if 'const { t } = useLanguage();' not in content:
        # Find export default function
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if 'export default function' in line:
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
