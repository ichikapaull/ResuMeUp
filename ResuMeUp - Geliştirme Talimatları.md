
## 1. Frontend Geliştirme Talimatları (React + TypeScript + Tailwind CSS)

**Görev:** "ResuMeUp" uygulamasının kullanıcı arayüzünü (UI) React, TypeScript ve Tailwind CSS kullanarak geliştirmek. Bu arayüz, kullanıcıların ATS uyumlu CV'ler oluşturmasını, yönetmesini, önizlemesini ve indirmesini sağlamalıdır. Backend API ile sorunsuz entegrasyon, yüksek performans, erişilebilirlik (WCAG AA) ve duyarlılık (responsive design) temel hedeflerdir.

**Genel Bakış ve Hedefler:**

- **Ana Amaç:** Kullanıcı dostu, etkileşimli ve ATS uyumlu CV oluşturma deneyimi sunmak.
- **Teknolojik Odak:** React (v18+), TypeScript, Tailwind CSS, React Router, State Management (Redux Toolkit veya React Query), Form Yönetimi (Formik + Yup).
- **Entegrasyon:** Backend (Rails API) tarafından sağlanan endpoint'leri kullanarak veri alışverişi yapmak ve JWT tabanlı kimlik doğrulama yönetmek.
- **Kalite:** Yüksek test kapsamı (Unit, Integration, E2E), performans optimizasyonu (Lighthouse > 90), WCAG AA erişilebilirlik standartlarına uyum ve tüm cihazlarda kusursuz çalışan duyarlı tasarım.

**Mimari ve Yapı:**

1. **Klasör Yapısı (Öneri):**
    
    ```
    /frontend
    ├── public/
    ├── src/
    │   ├── assets/         # Statik varlıklar (resim, font vb.)
    │   ├── components/     # Tekrar kullanılabilir UI bileşenleri (Atomik Tasarım prensibi önerilir)
    │   │   ├── common/     # Genel bileşenler (Button, Input, Modal...)
    │   │   ├── layout/     # Sayfa düzeni bileşenleri (Header, Footer, Sidebar...)
    │   │   ├── forms/      # Form elemanları ve ilgili bileşenler
    │   │   └── cv/         # CV özelindeki bileşenler (SectionEditor, Preview...)
    │   ├── features/       # Belirli özelliklere ait modüller (Auth, CVBuilder, Dashboard...)
    │   │   ├── auth/
    │   │   │   ├── components/
    │   │   │   ├── hooks/
    │   │   │   └── store/ (veya services/)
    │   │   └── cvBuilder/
    │   │       ├── components/
    │   │       ├── steps/      # Sihirbaz adımları
    │   │       ├── hooks/
    │   │       └── store/ (veya services/)
    │   ├── hooks/          # Genel custom hook'lar
    │   ├── layouts/        # Ana sayfa layout'ları (örn: AuthLayout, AppLayout)
    │   ├── pages/          # Rota bileşenleri (ekranlar)
    │   ├── router/         # Rota tanımları ve yönetimi (React Router)
    │   ├── services/       # API çağrıları ve dış servisler (axios instance vb.)
    │   ├── store/          # Global state yönetimi (Redux Toolkit / React Query setup)
    │   ├── styles/         # Global stiller, Tailwind config/base
    │   ├── types/          # TypeScript arayüzleri ve tipleri (özellikle API kontratları için)
    │   ├── utils/          # Yardımcı fonksiyonlar
    │   └── App.tsx         # Ana uygulama bileşeni
    │   └── index.tsx       # Uygulama giriş noktası
    ├── .env                # Ortam değişkenleri (API URL vb.)
    ├── .eslintrc.js
    ├── .prettierrc.js
    ├── jest.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    └── package.json
    ```
    
2. **Bileşen Felsefesi:** Atomik Tasarım veya benzeri bir metodoloji ile küçük, tekrar kullanılabilir ve test edilebilir bileşenler oluşturmaya odaklanılmalı. `features` klasörü altında özellik bazlı gruplama yapılmalı.
3. **State Management:**
    - **React Query (Önerilen):** Sunucu durumu (API verileri, önbellekleme, geçersiz kılma) için ideal. Fetching, caching, senkronizasyon ve güncelleme işlemlerini basitleştirir.
    - **Redux Toolkit:** Global UI durumu veya React Query'nin uygun olmadığı karmaşık durum yönetimi senaryoları için kullanılabilir.
    - Lokal bileşen durumu için `useState` ve `useReducer` kullanılabilir.
4. **Styling:** Tailwind CSS'in utility-first yaklaşımı benimsenecek. Özel veya karmaşık stiller için `@apply` veya CSS modülleri kullanılabilir. Tema (`tailwind.config.js`) üzerinden renkler, fontlar vb. merkezileştirilmeli.

**Temel Özellikler ve Görevler (TODO Listesi):**

1. **Proje Kurulumu:** `create-react-app --template typescript`, Tailwind CSS, React Router, State Management Kütüphanesi, Formik/Yup, Axios kurulumu. Linting (ESLint, Prettier) ve temel yapılandırma.
2. **Kimlik Doğrulama (Auth):**
    - [ ] Giriş Yap (Login) sayfası/formu (E-posta/Şifre).
    - [ ] Kayıt Ol (Signup) sayfası/formu.
    - [ ] (Opsiyonel) OAuth ile giriş butonları (Google/LinkedIn vb. - Backend desteği gerektirir).
    - [ ] JWT'yi alma, localStorage/sessionStorage'da güvenli saklama ve API isteklerinde kullanma (Axios interceptor).
    - [ ] Oturum yönetimi (token süresi kontrolü, otomatik çıkış).
    - [ ] Şifre sıfırlama akışı (UI kısmı).
    - [ ] Korumalı Rotalar (Auth Guard) implementasyonu.
3. **CV Oluşturma Sihirbazı (CV Builder):**
    - [ ] Çok adımlı form yapısı (örn: Kişisel Bilgiler, Deneyim, Eğitim, Beceriler, Referanslar...).
    - [ ] Her adım için Formik formları ve Yup ile detaylı validasyonlar.
    - [ ] Dinamik form elemanları (örn: birden fazla iş deneyimi/eğitim ekleme).
    - [ ] Zengin Metin Editörü (isteğe bağlı, ATS uyumluluğunu bozmamalı, basit tutulmalı).
    - [ ] Verilerin adım adım veya sonunda API'ye gönderilmesi.
4. **Şablon Seçimi ve Önizleme:**
    - [ ] Kullanılabilir CV şablonlarını listeleyen arayüz.
    - [ ] Şablon seçimi mekanizması.
    - [ ] Seçilen şablona göre CV verilerinin gerçek zamanlı önizlemesini gösteren bileşen (`<iframe>` veya güvenli HTML render eden bir yapı).
    - [ ] Önizlemenin 5 saniyeden kısa sürede yüklenmesi için optimizasyon (API'dan sadece gerekli veriyi çekme, verimli render).
5. **CV Yönetimi (Dashboard):**
    - [ ] Kullanıcının kaydettiği CV'leri listeleyen sayfa.
    - [ ] CV'leri düzenleme, silme ve kopyalama işlevleri için butonlar/linkler.
    - [ ] Yeni CV oluşturma butonu.
6. **İndirme İşlemleri:**
    - [ ] Önizleme veya dashboard üzerinden PDF, DOCX, TXT formatlarında indirme butonları.
    - [ ] Backend API'nin ilgili (`/generate/pdf`, `/generate/docx`, `/generate/txt`) endpoint'lerine istek atma.
    - [ ] API'den dönen dosya verisini (Blob) alıp kullanıcıya indirme istemi sunma.
7. **Genel UI Bileşenleri:** Header, Footer, Navigation, Buttons, Inputs, Modals, Spinners/Loaders vb. Tailwind ile stilize edilmiş şekilde oluşturma.
8. **Erişilebilirlik (WCAG AA):**
    - [ ] Semantik HTML kullanımı (`<nav>`, `<main>`, `<header>`, `<article>`, `<aside>` vb.).
    - [ ] Tüm interaktif elemanlar için klavye navigasyonu ve odak yönetimi.
    - [ ] `aria-*` attribute'larının doğru kullanımı (özellikle dinamik bileşenler ve formlar için).
    - [ ] Yeterli renk kontrastı (Tailwind tema renkleri buna göre seçilmeli).
    - [ ] Resimler için `alt` metinleri (varsa).
9. **Duyarlı Tasarım (Responsive):** Tailwind'in breakpoint (`sm`, `md`, `lg`, `xl`) direktiflerini kullanarak tüm ekran boyutlarında (mobil, tablet, desktop) düzgün görünüm ve kullanılabilirlik sağlama.
10. **Performans:**
    - [ ] Code Splitting (Rota bazlı veya bileşen bazlı).
    - [ ] Lazy Loading (özellikle resimler ve ağır bileşenler için).
    - [ ] Gereksiz render'ları önlemek için `React.memo`, `useCallback`, `useMemo` kullanımı.
    - [ ] API çağrılarının optimize edilmesi (gereksiz veri çekmemek, React Query caching).
    - [ ] Lighthouse ile düzenli denetimler.

**API Entegrasyonu:**

- **Base URL:** Ortam değişkeninden (`.env`) alınmalı (`REACT_APP_API_URL`).
- **Axios Instance:** Base URL, timeout ve header'ları (özellikle `Authorization` için Bearer token) yönetecek merkezi bir Axios instance oluşturulmalı.
- **API Servis Katmanı:** `src/services/` altında her kaynak (auth, resumes, templates vb.) için ayrı dosyalar oluşturulmalı ve API çağrı fonksiyonları burada tanımlanmalı.
- **TypeScript Tipleri:** API'den dönen ve API'ye gönderilen veriler için `src/types/api.ts` gibi bir dosyada arayüzler (interface) tanımlanmalı. Bu tipler servis katmanında ve state management'ta kullanılmalı.
- **Hata Yönetimi:** API hataları (4xx, 5xx) yakalanmalı ve kullanıcıya anlamlı geri bildirimler gösterilmeli (örn: toast notification, form hataları).

**Örnek API Çağrısı (React Query ile):**

TypeScript
```
// src/services/resumeService.ts
import apiClient from './apiClient'; // Axios instance
import { ResumeData, Resume } from '../types/api';

export const getResumes = async (): Promise<Resume[]> => {
  const response = await apiClient.get('/resumes');
  return response.data;
};

export const createResume = async (data: ResumeData): Promise<Resume> => {
  const response = await apiClient.post('/resumes', data);
  return response.data;
};

// src/features/dashboard/hooks/useResumes.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as resumeService from '../../../services/resumeService';
import { ResumeData } from '../../../types/api';

export const useGetResumes = () => {
  return useQuery<Resume[], Error>({
    queryKey: ['resumes'],
    queryFn: resumeService.getResumes,
  });
};

export const useCreateResume = () => {
  const queryClient = useQueryClient();
  return useMutation<Resume, Error, ResumeData>({
    mutationFn: resumeService.createResume,
    onSuccess: () => {
      // Başarılı olursa 'resumes' sorgusunu geçersiz kıl ve yeniden fetch et
      queryClient.invalidateQueries({ queryKey: ['resumes'] });
    },
  });
};
```

**Validasyon:**

- Formik ve Yup ikilisi kullanılacak.
- Gerekli alanlar, e-posta formatı, şifre gücü, metin uzunlukları gibi standart validasyonlar eklenecek.
- Backend ile tutarlı validasyon kuralları belirlenmeli. Hata mesajları kullanıcı dostu olmalı.

**ATS Uyumluluğu İçin Dikkat Edilmesi Gerekenler (UI Tarafı):**

- Form alanlarında kullanıcıyı yönlendir: "Başlıklarınızı kısa ve net tutun", "Standart bölüm başlıkları kullanın (Deneyim, Eğitim vb.)".
- Zengin Metin Editörleri kullanılıyorsa, çıktısının basit ve semantik HTML olmasına dikkat et (kalın, italik, listeler yeterli olabilir; karmaşık stiller, tablolar, font değişikliklerinden kaçınılmalı).
- Şablon önizlemesi, ATS'nin göreceği yapıya (basit HTML) yakın olmalı.

**Kullanıcı Akışları:**

1. **Yeni Kullanıcı Kayıt & İlk CV Oluşturma:** Kayıt Ol -> Giriş Yap -> Dashboard -> Yeni CV Oluştur -> Sihirbazı Tamamla -> Şablon Seç -> Önizle -> İndir.
2. **Mevcut Kullanıcı CV Düzenleme:** Giriş Yap -> Dashboard -> CV Seç -> Düzenle (Sihirbaz veya Form) -> Kaydet -> Önizle -> İndir.

**Test Stratejisi:**

- **Unit Tests (Birim Testleri):** Jest + React Testing Library (RTL). Yardımcı fonksiyonlar, custom hook'lar ve basit bileşenler test edilmeli. Mock Service Worker (MSW) ile API çağrıları mocklanabilir.
- **Integration Tests (Entegrasyon Testleri):** Jest + RTL. Birden fazla bileşenin birlikte çalışmasını (örn: form gönderme, state güncellemeleri) test etme.
- **End-to-End (E2E) Tests:** Cypress. Ana kullanıcı akışları (kayıt, giriş, CV oluşturma, indirme) baştan sona test edilmeli.
- **Linting & Formatting:** ESLint ve Prettier zorunlu tutulmalı ve CI'da kontrol edilmeli.
- **TypeScript:** Tip güvenliğini en üst düzeyde tutmak için `strict` mod aktif olmalı, `any` tipinden mümkün olduğunca kaçınılmalı.

**Deployment:**

- Statik dosyalar (build çıktısı) bir CDN veya web sunucusu (Nginx vb.) üzerinden sunulmalı.
- Ortam değişkenleri (`.env`) ile API adresi ve diğer konfigürasyonlar yönetilmeli.
- GitHub Actions ile CI/CD pipeline'ı kurulmalı: Push -> Lint & Test -> Build -> Deploy (Staging/Production).
- Deployment hedefleri: Netlify, Vercel, AWS S3/CloudFront, Heroku (web dyno ile).

**Önemli Notlar ve Uyarılar:**

- **API Kontratı:** Backend ekibi ile API endpoint'leri, request/response formatları ve veri tipleri konusunda net bir anlaşma yapılmalı ve bu `src/types/api.ts` içine yansıtılmalı.
- **JWT Güvenliği:** Token'ları XSS saldırılarına karşı korumak için dikkatli olunmalı (örn: `HttpOnly` cookie backend tarafından ayarlanıyorsa ek önlemler). Token'ları localStorage'da saklamak yaygındır ancak riskleri vardır. Güvenlik gereksinimlerini netleştirin.
- **Performans:** Büyük formlar veya listelerle çalışırken sanallaştırma (react-window, react-virtualized) gibi teknikler değerlendirilebilir. Bundle boyutunu analiz etmek için `source-map-explorer` gibi araçlar kullanılabilir.
- **Erişilebilirlik:** Geliştirme sırasında `eslint-plugin-jsx-a11y` gibi araçlar ve tarayıcı eklentileri (axe DevTools) ile sürekli kontrol yapılmalı.

**Kontrol Listesi:**

- [ ] Proje kurulumu tamamlandı mı?
- [ ] Temel UI layout (Header, Footer, Nav) hazır mı?
- [ ] Rotalama (React Router) ayarlandı mı?
- [ ] State Management (React Query/Redux) entegre edildi mi?
- [ ] Kimlik doğrulama akışları (Login, Signup, Guard) çalışıyor mu?
- [ ] CV oluşturma sihirbazı adımları ve formları tamamlandı mı?
- [ ] Form validasyonları (Yup) eksiksiz mi?
- [ ] Şablon seçimi ve önizleme işlevselliği çalışıyor mu?
- [ ] CV listeleme, düzenleme, silme (Dashboard) işlevleri tamamlandı mı?
- [ ] PDF/DOCX/TXT indirme mekanizması çalışıyor mu?
- [ ] Backend API ile tüm entegrasyonlar başarılı mı?
- [ ] TypeScript tipleri doğru ve eksiksiz tanımlandı mı?
- [ ] Tüm arayüz duyarlı (responsive) mı?
- [ ] Erişilebilirlik (WCAG AA) standartları karşılanıyor mu? Klavye navigasyonu ve ekran okuyucu testleri yapıldı mı?
- [ ] Performans hedefleri (Lighthouse) tutturuldu mu?
- [ ] Birim, entegrasyon ve E2E testleri yazıldı mı? Test kapsamı yeterli mi?
- [ ] Linting ve formatlama kuralları uygulanıyor mu?
- [ ] CI/CD pipeline'ı çalışıyor mu?
- [ ] Kod tekrarı minimumda mı? Tekrar kullanılabilir bileşenler ve hook'lar etkin kullanıldı mı?
- [ ] Hata yönetimi kullanıcı dostu mu?

----------------------------

---

## 2. Backend Geliştirme Talimatları (Ruby on Rails API + JWT)

**Görev:** "ResuMeUp" uygulamasının backend API'sini Ruby on Rails (API modu) kullanarak geliştirmek. Bu API, kullanıcı yönetimi, kimlik doğrulama (JWT), CV verilerinin CRUD işlemleri, şablon yönetimi ve Node.js microservice'i ile PDF/DOCX/TXT oluşturma süreçlerini yönetmelidir. PostgreSQL veritabanı kullanılacaktır.

**Genel Bakış ve Hedefler:**

- **Ana Amaç:** Güvenli, ölçeklenebilir ve verimli bir API sağlayarak frontend uygulamasının ihtiyaç duyduğu verileri ve işlevselliği sunmak. CV verilerini yönetmek ve belge üretimini koordine etmek.
- **Teknolojik Odak:** Ruby on Rails 7+ (API Modu), PostgreSQL, Devise + devise-jwt (Kimlik Doğrulama), Pundit (Yetkilendirme), ActiveModel::Serializers / Fast JSON API (JSON Serializasyonu), Sidekiq + Redis (Arka Plan İşleri).
- **Entegrasyon:** React frontend ile JWT tabanlı iletişim kurmak. Node.js microservice'ine (PDF/DOCX/TXT üretimi için) HTTP istekleri göndermek.
- **Kalite:** Yüksek test kapsamı (RSpec), temiz kod (RuboCop), güvenli API tasarımı (yetkilendirme, validasyon), verimli veritabanı sorguları.

**Mimari ve Yapı:**

1. **Proje Başlatma:**
    
    Bash
   ```
    rails new resu_me_up_api --api --database=postgresql
    cd resu_me_up_api
    # Gerekli gem'leri Gemfile'a ekle (devise, devise-jwt, pundit, sidekiq, redis, fast_jsonapi/active_model_serializers, rspec-rails, factory_bot_rails, rubocop vb.)
    bundle install
    rails db:create
    ```
    
   ***klasör Yapısı (Standart Rails API):**
    
    ```
    /api
    ├── app/
    │   ├── controllers/
    │   │   └── api/
    │   │       └── v1/         # API versiyonlama
    │   │           ├── auth_controller.rb
    │   │           ├── resumes_controller.rb
    │   │           ├── templates_controller.rb
    │   │           └── base_controller.rb # Ortak işlevler, yetkilendirme
    │   ├── models/           # ActiveRecord modelleri (User, Resume, Section, Template...)
    │   ├── serializers/      # Fast JSON API veya AMS serializer'ları
    │   ├── policies/         # Pundit policy'leri
    │   ├── jobs/             # Sidekiq background job'ları (DocumentGenerationJob)
    │   └── services/         # Kompleks iş mantığı servisleri (örn: DocumentGeneratorService)
    ├── config/
    │   ├── initializers/
    │   │   ├── devise.rb
    │   │   └── devise_jwt.rb
    │   ├── routes.rb         # API rotaları
    │   └── database.yml
    ├── db/
    │   └── migrate/          # Veritabanı migration'ları
    ├── spec/                 # RSpec testleri
    │   ├── controllers/
    │   ├── models/
    │   ├── jobs/
    │   ├── policies/
    │   ├── factories/        # FactoryBot fabrika tanımları
    │   └── requests/         # API endpoint entegrasyon testleri
    ├── .rubocop.yml
    ├── Gemfile
    └── Rakefile
    ```
    
3. 4. PI Versiyonlama:** Rotaları ve controller'ları `api/v1/` altında gruplayarak versiyonlama yapmak iyi bir pratiktir.
4. 5. ervis Katmanı:** Karmaşık iş mantığını (örn: birden fazla modeli veya dış servisi içeren işlemler) controller'lardan çıkarıp `app/services/` altına taşımak kodu temiz tutar.

**Veri Modeli (PostgreSQL):**

- **`users`:**
    - `email` (string, unique, index)
    - `encrypted_password` (string) - Devise
    - `name` (string, nullable)
    - `jti` (string, unique, index) - devise-jwt için revocation strategy
    - Devise'ın diğer alanları (`reset_password_token`, `created_at`, `updated_at` vb.)
- **`resumes`:**
    - `user_id` (integer, foreign_key, index)
    - `title` (string, default: "Untitled Resume")
    - `template_id` (integer, foreign_key, nullable, index) # Kullanılan şablon
    - `cv_data` (jsonb, not null, default: '{}') # Kullanıcının girdiği tüm CV içeriği (kişisel, deneyim, eğitim vb. yapısal JSON olarak)
    - `created_at`, `updated_at`
- **`templates`:**
    - `name` (string, unique)
    - `description` (text, nullable)
    - `preview_image_url` (string, nullable)
    - `identifier` (string, unique, index) # Node.js servisinde şablonu tanımak için kullanılacak anahtar (örn: "classic", "modern")
    - `is_premium` (boolean, default: false) # Gelecek geliştirmeler için
    - `created_at`, `updated_at`
- **`sections` (Opsiyonel - Eğer CV yapısı daha dinamik olacaksa):** `Resume` modelindeki `cv_data` JSONB alanı yerine daha ilişkisel bir yapı tercih edilirse:
    - `resume_id` (integer, foreign_key, index)
    - `type` (string, örn: "personal_info", "experience", "education", "skills")
    - `data` (jsonb) # Bölüme özgü veriler
    - `order` (integer) # Bölümlerin sıralaması
    - _Bu yapı daha esnek ama daha karmaşık sorgular gerektirebilir. Başlangıç için `Resume` modelindeki `cv_data` alanı daha basit olabilir._

**Temel Özellikler ve Görevler (TODO Listesi):**

1. **Proje Kurulumu:** Rails API projesi oluşturma, Gem'leri ekleme, DB konfigürasyonu, RSpec ve RuboCop kurulumu.
2. **Kimlik Doğrulama (Devise + JWT):**
    - [ ] `User` modeli oluşturma ve Devise entegrasyonu (`rails g devise User`).
    - [ ] `devise-jwt` kurulumu ve konfigürasyonu (`config/initializers/devise.rb`, `config/initializers/devise_jwt.rb`, `User` modeline `jwt_revocation_strategy` ekleme). JWT secret key'i güvenli yönetme (credentials veya ENV).
    - [ ] Kayıt (`POST /api/v1/signup`) endpoint'i (örn: ayrı bir `RegistrationsController`).
    - [ ] Giriş (`POST /api/v1/login`) endpoint'i (Devise SessionsController'ı JWT için özelleştirme). Başarılı girişte JWT token'ı `Authorization` header'ında veya response body'de dönme.
    - [ ] Çıkış (`DELETE /api/v1/logout`) endpoint'i (JWT'yi geçersiz kılma - jti tabanlı revocation).
    - [ ] (Opsiyonel) OAuth endpoint'leri (Devise'ın omniauth eklentileri ile).
3. **Yetkilendirme (Pundit):**
    - [ ] Pundit kurulumu ve `ApplicationController`'a dahil etme.
    - [ ] Her controller için policy'ler oluşturma (`ResumePolicy`, `TemplatePolicy` vb.). Sadece kendi verilerine erişim gibi kurallar tanımlama.
    - [ ] Controller action'larında `authorize @resource` ve `policy_scope(Resource)` kullanma.
4. **CV Yönetimi (CRUD):**
    - [ ] `ResumesController` oluşturma (`index`, `show`, `create`, `update`, `destroy`).
    - [ ] `POST /api/v1/resumes`: Yeni CV oluşturma (kullanıcının `cv_data` JSON'ını alır).
    - [ ] `GET /api/v1/resumes`: Kullanıcının tüm CV'lerini listeleme (policy scope ile).
    - [ ] `GET /api/v1/resumes/:id`: Belirli bir CV'yi getirme (authorize ile).
    - [ ] `PUT/PATCH /api/v1/resumes/:id`: CV'yi güncelleme (authorize ile).
    - [ ] `DELETE /api/v1/resumes/:id`: CV'yi silme (authorize ile).
5. **Şablon Yönetimi:**
    - [ ] `TemplatesController` oluşturma (`index`, `show`).
    - [ ] `GET /api/v1/templates`: Tüm kullanılabilir şablonları listeleme.
    - [ ] `GET /api/v1/templates/:id`: Belirli bir şablon detayını getirme.
    - [ ] (Admin arayüzü veya seed data ile) Şablonları (`Template` modeli) veritabanına ekleme.
6. **Belge Üretimi Endpoint'leri:**
    - [ ] `ResumesController` içine ek action'lar: `generate_pdf`, `generate_docx`, `generate_txt`.
    - [ ] `POST /api/v1/resumes/:id/generate_pdf`: İlgili CV verisini ve şablon bilgisini alıp `DocumentGenerationJob`'u tetikleme.
    - [ ] `POST /api/v1/resumes/:id/generate_docx`: Benzer şekilde DOCX için job tetikleme.
    - [ ] `POST /api/v1/resumes/:id/generate_txt`: Benzer şekilde TXT için job tetikleme (bu Node.js servisine gitmeyebilir, Rails'de HTML'den text çıkarılabilir).
    - _Alternatif:_ Ayrı bir `DocumentGenerationController` oluşturulabilir.
7. **Arka Plan İşleri (Sidekiq):**
    - [ ] Sidekiq ve Redis konfigürasyonu.
    - [ ] `DocumentGenerationJob` oluşturma. Bu job, parametre olarak CV ID'si, format (pdf/docx), ve kullanıcı ID'si alabilir.
    - [ ] Job içinde:
        - CV verisini ve şablon bilgisini DB'den çekme.
        - Node.js microservice'inin ilgili endpoint'ine (`/generate/pdf` veya `/generate/docx`) gerekli veriyi (HTML/CSS veya JSON + template identifier) POST isteği ile gönderme. (HTTP client kullan, örn: Faraday).
        - Node.js servisinden dönen dosyayı alma (veya bir saklama alanına - S3 vb. - kaydetme ve URL'ini dönme).
        - Kullanıcıya bildirim gönderme (örn: ActionCable, e-posta) veya frontend'in sorgulayabileceği bir durum güncelleme. _En basit yöntem, generate endpoint'inin job ID'si dönmesi ve frontend'in bu job'un durumunu sorgulaması olabilir._
    - [ ] TXT üretimi: HTML'den metin çıkarma işlemi Rails tarafında `ActionView::Base.full_sanitizer.sanitize(html_content)` gibi yöntemlerle yapılabilir, ayrı bir job veya doğrudan controller içinde halledilebilir.
8. **Serializasyon (Fast JSON API / AMS):**
    - [ ] Modeller için serializer'lar oluşturma (`UserSerializer`, `ResumeSerializer`, `TemplateSerializer`).
    - [ ] Frontend'in ihtiyaç duyduğu alanları seçerek ve ilişkileri (`belongs_to`, `has_many`) yöneterek temiz JSON outputları sağlama. JSON:API standardına uymak iyi bir pratiktir.
9. **Validasyon:**
    - [ ] ActiveRecord validasyonlarını (`validates`) modellerde kullanma (örn: `User` için email formatı ve benzersizliği, `Resume` için `user_id` varlığı).
    - [ ] `cv_data` JSONB alanı için özel validasyonlar gerekebilir (belirli anahtarların varlığı vb.). Bir `Service Object` veya `Form Object` deseni kullanılabilir.

**API Tasarımı ve Kontrat:**

- **Base URL:** `/api/v1/`
- **Kimlik Doğrulama:** Gelen isteklerde `Authorization: Bearer <JWT_TOKEN>` header'ı beklenecek (`authenticate_user!` gibi bir `before_action` ile).
- **İstek/Yanıt Formatı:** JSON. Hata durumlarında standart bir JSON yapısı kullanılmalı (örn: `{ "errors": [{ "status": "422", "title": "Validation Error", "detail": "Email can't be blank" }] }`).
- **Endpoint'ler:**
    - `POST /api/v1/signup` (Body: `user: { email, password, password_confirmation }`) -> `201 Created` + User data (no password)
    - `POST /api/v1/login` (Body: `user: { email, password }`) -> `200 OK` + User data + JWT (Header/Body)
    - `DELETE /api/v1/logout` -> `200 OK`
    - `GET /api/v1/resumes` -> `200 OK` + `[ResumeSerializer]`
    - `POST /api/v1/resumes` (Body: `resume: { title, cv_data, template_id }`) -> `201 Created` + `ResumeSerializer`
    - `GET /api/v1/resumes/:id` -> `200 OK` + `ResumeSerializer`
    - `PUT/PATCH /api/v1/resumes/:id` (Body: `resume: { title, cv_data, template_id }`) -> `200 OK` + `ResumeSerializer`
    - `DELETE /api/v1/resumes/:id` -> `204 No Content`
    - `GET /api/v1/templates` -> `200 OK` + `[TemplateSerializer]`
    - `GET /api/v1/templates/:id` -> `200 OK` + `TemplateSerializer`
    - `POST /api/v1/resumes/:id/generate_pdf` -> `202 Accepted` + `{ "job_id": "..." }` (veya doğrudan dosya/hata)
    - `POST /api/v1/resumes/:id/generate_docx` -> `202 Accepted` + `{ "job_id": "..." }`
    - `POST /api/v1/resumes/:id/generate_txt` -> `200 OK` + TXT content (veya `202 Accepted` + job ID)
    - (Opsiyonel) `GET /api/v1/jobs/:job_id/status` -> `200 OK` + `{ "status": "pending/completed/failed", "result_url": "..." }`


**Node.js Microservice Entegrasyonu:**

- Rails backend, Node.js servisinin `POST /generate/pdf` ve `POST /generate/docx` endpoint'lerine istek yapacak.
- `POST /generate/pdf`'e gönderilecek veri: Muhtemelen CV verisi ve şablon kullanılarak Rails tarafında oluşturulmuş bir HTML + CSS içeriği.
- `POST /generate/docx`'e gönderilecek veri: CV verisi (JSON) ve kullanılacak şablonun `identifier`'ı (Node.js servisinin doğru `.docx` şablonunu bulması için).
- Node.js servisinin adresi (`PDF_SERVICE_URL`, `DOCX_SERVICE_URL`) Rails uygulamasının ortam değişkenlerinden (credentials/ENV) alınmalı.
- Hata yönetimi yapılmalı (Node.js servisi yanıt vermezse veya hata dönerse ne olacak?).

**Test Stratejisi:**

- **Model Testleri (RSpec):** Validasyonlar, ilişkiler, scope'lar ve model metotları test edilmeli (`spec/models`). FactoryBot ile test verisi oluşturulmalı.
- **Request Testleri (RSpec):** API endpoint'leri baştan sona test edilmeli (`spec/requests`). Farklı senaryolar (başarılı istekler, validasyon hataları, yetkilendirme hataları, bulunamayan kayıtlar) kapsanmalı. JWT ile kimlik doğrulama testleri yapılmalı.
- **Job Testleri (RSpec):** Sidekiq job'larının doğru şekilde kuyruğa eklendiği (`have_enqueued_job`) ve `perform` metodunun beklenen iş mantığını (örn: Node.js servisine doğru isteği yapma) yerine getirdiği test edilmeli. Dış servis çağrıları mocklanmalı (örn: `WebMock`).
- **Policy Testleri (RSpec):** Pundit policy'lerinin yetkilendirme kurallarını doğru uyguladığı test edilmeli (`spec/policies`).
- **Linting:** RuboCop zorunlu tutulmalı ve CI'da kontrol edilmeli.

**Deployment:**

- Uygulama Dockerize edilmeli (`Dockerfile`, `docker-compose.yml`).
- Deployment hedefleri: Heroku, AWS Elastic Beanstalk, DigitalOcean App Platform vb. PostgreSQL ve Redis servisleri bu platformlardan sağlanabilir veya ayrı yönetilebilir.
- GitHub Actions ile CI/CD pipeline'ı kurulmalı: Push -> RuboCop & RSpec -> Build Docker Image -> Push to Registry -> Deploy (Staging/Production).
- Veritabanı migration'ları deploy sırasında otomatik çalıştırılmalı.
- Gerekli ortam değişkenleri (SECRET_KEY_BASE, DB credentials, REDIS_URL, JWT_SECRET, PDF_SERVICE_URL vb.) güvenli bir şekilde yönetilmeli.
- Monitoring: Sentry entegrasyonu yapılmalı. Loglama için `Lograge` kullanılabilir.

**Önemli Notlar ve Uyarılar:**

- **Güvenlik:**
    - Tüm endpoint'lerde Pundit ile yetkilendirme kontrolü yapılmalı (`authorize`, `policy_scope`).
    - SQL Injection'a karşı ActiveRecord'ın korumaları yeterlidir, raw SQL'den kaçınılmalı.
    - Mass Assignment'a karşı strong parameters (`require`, `permit`) kullanılmalı.
    - JWT secret key'i çok gizli tutulmalı ve düzenli olarak değiştirilmesi düşünülebilir.
    - Rate limiting (örn: `rack-attack` gem'i ile) brute-force saldırılarına karşı uygulanabilir.
- **Performans:**
    - N+1 sorgularını önlemek için `includes` veya `preload` kullanılmalı (`bullet` gem'i geliştirme ortamında yardımcı olabilir).
    - Gerekli veritabanı indeksleri oluşturulmalı.
    - Karmaşık sorgular için `EXPLAIN ANALYZE` kullanılabilir.
    - Ağır işlemler (belge üretimi, e-posta gönderimi) kesinlikle Sidekiq gibi bir arka plan işleme sistemi ile yapılmalı.
- **Node.js Servis Bağımlılığı:** Node.js servisinin çökmesi veya yavaş yanıt vermesi durumlarına karşı fallback mekanizmaları veya timeout'lar düşünülmeli. Job'ların tekrar deneme (retry) mekanizmaları ayarlanmalı.
- **JSONB Veri Yapısı:** `cv_data` alanı için tutarlı bir JSON şeması belirlenmeli ve mümkünse validasyonu yapılmalı. Bu şema frontend ile paylaşılmalı.

**Kontrol Listesi:**

- [ ] Rails API projesi oluşturuldu mu? Gerekli gem'ler eklendi mi?
- [ ] Veritabanı modelleri ve migration'ları oluşturuldu mu?
- [ ] Devise ve devise-jwt ile kimlik doğrulama (signup, login, logout) çalışıyor mu?
- [ ] Pundit ile yetkilendirme politikaları tanımlandı ve uygulanıyor mu?
- [ ] CV CRUD endpoint'leri çalışıyor ve doğru veriyi dönüyor mu?
- [ ] Şablon listeleme endpoint'i çalışıyor mu?
- [ ] Belge üretimi endpoint'leri (`generate_pdf`, `generate_docx`, `generate_txt`) job'ları tetikliyor mu?
- [ ] Sidekiq job'ları Node.js servisiyle (veya TXT için dahili mantıkla) doğru şekilde etkileşim kuruyor mu?
- [ ] Serializer'lar frontend'in beklediği formatta JSON üretiyor mu?
- [ ] Model ve API seviyesinde validasyonlar eksiksiz mi?
- [ ] API kontratı (endpoint'ler, formatlar) frontend ile uyumlu mu?
- [ ] RSpec testleri (model, request, job, policy) yazıldı mı? Test kapsamı yeterli mi?
- [ ] RuboCop ile kod kalitesi kontrol ediliyor mu?
- [ ] N+1 sorguları kontrol edildi mi? Gerekli indeksler var mı?
- [ ] Güvenlik önlemleri (yetkilendirme, strong params vb.) alındı mı?
- [ ] Docker konfigürasyonu hazır mı?
- [ ] CI/CD pipeline'ı çalışıyor mu?
- [ ] Hata yönetimi ve loglama ayarlandı mı (Sentry, Lograge)?

