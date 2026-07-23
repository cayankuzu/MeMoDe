export type PortfolioProject = {
  id: string;
  number: string;
  name: string;
  category: string;
  status: "Canlı" | "Geliştiriliyor";
  purpose: string;
  contribution: string;
  tags: string[];
  primaryUrl: string;
  primaryLabel: string;
  githubUrl: string;
  preview: string;
  previewPosition?: string;
  accent: "orange" | "blue" | "red" | "green" | "violet" | "pink";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "remember-you-must-die",
    number: "01",
    name: "Remember You Must Die",
    category: "Etkileşimli 3B web anlatısı",
    status: "Canlı",
    purpose: "Memento mori fikrini okunan bir metinden, kullanıcının yön verdiği duyusal bir web deneyimine dönüştürmek.",
    contribution: "Kavramsal yön, 3B sahne, pencere etkileşimleri ve müzik katmanını tek bir karanlık anlatıda tasarlayıp geliştirdim.",
    tags: ["Three.js", "Etkileşim tasarımı", "Web Audio"],
    primaryUrl: "https://remember-you-must-die-web.vercel.app/",
    primaryLabel: "Canlı deneyim",
    githubUrl: "https://github.com/cayankuzu/remember_you_must_die_web",
    preview: "/project-previews/remember.png",
    accent: "orange",
  },
  {
    id: "desain",
    number: "02",
    name: "desAIn",
    category: "3B mekân planlama ürünü",
    status: "Canlı",
    purpose: "Bir oda fikrini teknik çizim yazılımı öğrenmeden ölçülebilir, düzenlenebilir ve saklanabilir hâle getirmek.",
    contribution: "3B editör deneyimini; oda, duvar, mobilya ve proje yönetimi akışlarıyla birlikte uçtan uca ürünleştirdim.",
    tags: ["Next.js", "React Three Fiber", "Ürün geliştirme"],
    primaryUrl: "https://des-ai-n.vercel.app/",
    primaryLabel: "Canlı editör",
    githubUrl: "https://github.com/cayankuzu/desAIn",
    preview: "/project-previews/desain.png",
    previewPosition: "36% center",
    accent: "blue",
  },
  {
    id: "audioroom",
    number: "03",
    name: "AudioRoom",
    category: "Etkileşimli albüm kütüphanesi",
    status: "Canlı",
    purpose: "Albümü yalnızca listelenen içerik değil, görsel dili ve hikâyesi keşfedilen bir dünya olarak yeniden yorumlamak.",
    contribution: "Aranabilir albüm arşivini, içerik filtrelerini ve seçili albümlere ait gezilebilir 3B dünyaları geliştirdim.",
    tags: ["TypeScript", "Three.js", "Bilgi mimarisi"],
    primaryUrl: "https://audio-room-ecru.vercel.app/",
    primaryLabel: "Canlı deneyim",
    githubUrl: "https://github.com/cayankuzu/AudioRoom",
    preview: "/project-previews/audioroom.png",
    accent: "red",
  },
  {
    id: "universe",
    number: "04",
    name: "UniVerse",
    category: "Üniversite sosyal ağı",
    status: "Geliştiriliyor",
    purpose: "Kampüs yaşamındaki insanları, içerikleri ve etkinlikleri tek bir hızlı mobil sosyal alanda buluşturmak.",
    contribution: "Kimlik doğrulama, kişisel akış, etkinlik, arama, bildirim ve profil deneyimlerini ortak bir tasarım sisteminde ele aldım.",
    tags: ["React Native", "Expo", "Supabase"],
    primaryUrl: "https://www.figma.com/make/PifHMriFM6plYxEBFp0ziW/%C3%96%C4%9Frenci-Sosyal-A%C4%9F%C4%B1?t=cbNifD4dZ23MK9QJ-1&preview-route=%2Fwelcome",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/UniVerse",
    preview: "/project-previews/universe.png",
    previewPosition: "78% center",
    accent: "green",
  },
  {
    id: "sorita",
    number: "05",
    name: "SoRita",
    category: "Sosyal mekân keşfi",
    status: "Geliştiriliyor",
    purpose: "İnsanların sevdikleri yerleri düzenlemesini ve güvendikleri kişilerin önerileriyle yeni mekânlar keşfetmesini kolaylaştırmak.",
    contribution: "Harita keşfini; kişisel listeler, sosyal akış, yorum, beğeni, takip ve bildirimlerle bir mobil ürün içinde birleştirdim.",
    tags: ["React Native", "Google Maps", "Supabase"],
    primaryUrl: "https://www.figma.com/make/xFI0Mxo8e6GdMVNfWu0eSm/SoRita?t=HfSuWJdD0yi1kJcW-1",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/SoRita",
    preview: "/project-previews/sorita.png",
    previewPosition: "76% center",
    accent: "violet",
  },
  {
    id: "wmatch",
    number: "06",
    name: "WMatch",
    category: "Film odaklı sosyal eşleşme",
    status: "Geliştiriliyor",
    purpose: "İnsanlar arasındaki ilk ortak noktayı film ve dizi zevkleri üzerinden daha doğal ve açıklanabilir biçimde kurmak.",
    contribution: "İçerik keşfi, izleme durumu, uyum, beğeni, eşleşme ve sohbet akışlarını üretim odaklı bir mobil mimaride geliştirdim.",
    tags: ["React Native", "Supabase", "TMDB"],
    primaryUrl: "https://www.figma.com/make/NCkE1gjOXWA78mtbYdgz7z/WMatch?t=XDorh8gcStuSfQ3j-1",
    primaryLabel: "Figma prototipi",
    githubUrl: "https://github.com/cayankuzu/WMatch",
    preview: "/project-previews/wmatch.png",
    accent: "pink",
  },
];
