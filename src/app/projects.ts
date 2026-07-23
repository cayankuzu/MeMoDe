export type PortfolioProject = {
  id: string;
  number: string;
  name: string;
  type: string;
  status: string;
  purpose: string;
  summary: string;
  tags: string[];
  primaryUrl: string;
  primaryLabel: string;
  githubUrl: string;
  accent: "orange" | "violet" | "blue" | "green" | "red" | "pink";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "remember-you-must-die",
    number: "01",
    name: "Remember You Must Die",
    type: "Etkileşimli 3B web anlatısı",
    status: "Canlı",
    purpose: "Memento mori düşüncesini okunan bir metinden, kullanıcının yön verdiği duyusal bir web deneyimine dönüştürmek.",
    summary: "Kafatası, kum saati, DNA ve ouroboros gibi 3B sembolleri; pencere etkileşimleri ve müzik çalarla bir araya getiren karanlık bir dijital anlatı.",
    tags: ["Three.js", "3B anlatı", "Müzik"],
    primaryUrl: "https://remember-you-must-die-web.vercel.app/",
    primaryLabel: "Canlı deneyim",
    githubUrl: "https://github.com/cayankuzu/remember_you_must_die_web",
    accent: "orange",
  },
  {
    id: "desain",
    number: "02",
    name: "desAIn",
    type: "3B mekân planlama aracı",
    status: "Canlı",
    purpose: "Bir oda fikrini teknik çizim yazılımı öğrenmeden ölçülebilir, düzenlenebilir ve kaydedilebilir hâle getirmek.",
    summary: "Oda ölçüleri, duvar açıklıkları, mobilya üreticileri ve çakışma kurallarını birleştiren masaüstü 3B editörü; hesap ve proje saklama akışlarını da içerir.",
    tags: ["Next.js", "React Three Fiber", "Kalıcı projeler"],
    primaryUrl: "https://des-ai-n.vercel.app/",
    primaryLabel: "Canlı editör",
    githubUrl: "https://github.com/cayankuzu/desAIn",
    accent: "violet",
  },
  {
    id: "audioroom",
    number: "03",
    name: "AudioRoom",
    type: "Etkileşimli albüm kütüphanesi",
    status: "Canlı",
    purpose: "Albümü yalnızca listelenen bir içerik değil, görsel dili ve hikâyesi keşfedilen bir dünya olarak yeniden yorumlamak.",
    summary: "Sanatçı, albüm, yayın türü ve erişilebilirliğe göre aranabilen bir kütüphane; seçili albümler için gezilebilir Three.js evrenleri sunar.",
    tags: ["TypeScript", "Three.js", "Vite"],
    primaryUrl: "https://audio-room-ecru.vercel.app/",
    primaryLabel: "Canlı deneyim",
    githubUrl: "https://github.com/cayankuzu/AudioRoom",
    accent: "blue",
  },
  {
    id: "universe",
    number: "04",
    name: "UniVerse",
    type: "Üniversite sosyal ağı",
    status: "Geliştiriliyor",
    purpose: "Kampüs yaşamındaki insanları, içerikleri ve etkinlikleri tek, güvenli ve hızlı bir mobil sosyal alanda buluşturmak.",
    summary: "Kimlik doğrulama, kişisel akış, içerik kartları, etkinlikler, arama, bildirimler ve profil deneyimlerinden oluşan mobil kampüs ağı.",
    tags: ["React Native", "Expo", "Supabase"],
    primaryUrl: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?t=cbNifD4dZ23MK9QJ-1&preview-route=%2Fwelcome",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/UniVerse",
    accent: "green",
  },
  {
    id: "sorita",
    number: "05",
    name: "SoRita",
    type: "Sosyal mekân keşfi",
    status: "Geliştiriliyor",
    purpose: "İnsanların sevdikleri yerleri düzenlemesini ve güvendikleri kişilerin önerileriyle yeni mekânlar keşfetmesini kolaylaştırmak.",
    summary: "Google Maps tabanlı keşfi; kişisel listeler, mekân fotoğrafları, sosyal akış, yorum, beğeni, takip ve bildirimlerle birleştiren mobil ürün.",
    tags: ["React Native", "Google Maps", "Supabase"],
    primaryUrl: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?t=HfSuWJdD0yi1kJcW-1",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/SoRita",
    accent: "red",
  },
  {
    id: "wmatch",
    number: "06",
    name: "WMatch",
    type: "Film odaklı sosyal eşleşme",
    status: "Geliştiriliyor",
    purpose: "İnsanlar arasındaki ilk ortak noktayı film ve dizi zevkleri üzerinden daha doğal ve açıklanabilir biçimde kurmak.",
    summary: "TMDB destekli içerik keşfi, izleme durumu, uyum ekranı, beğeni, eşleşme, canlılık göstergesi ve sohbet akışlarını bir araya getiren mobil uygulama.",
    tags: ["React Native", "Supabase", "TMDB"],
    primaryUrl: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?t=XDorh8gcStuSfQ3j-1",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/WMatch",
    accent: "pink",
  },
];
