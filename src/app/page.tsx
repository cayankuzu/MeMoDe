import Image from "next/image";
import { FloatingPortal } from "./_components/FloatingPortal";
import { PrintButton } from "./_components/PrintButton";
import { portfolioProjects } from "./projects";

const fikkisUrl = process.env.NEXT_PUBLIC_FIKKIS_URL ?? "http://localhost:3000";

export default function Home() {
  return (
    <>
      <main id="top">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="MeMoDe ana sayfa">MeMoDe<span>®</span></a>
          <nav aria-label="Ana menü">
            <a href="#projeler">Projeler</a>
            <a href="#profil">Profil</a>
            <a href="#yetkinlikler">Yetkinlikler</a>
            <a href="#iletisim">İletişim</a>
          </nav>
          <a className="topContact" href="mailto:memodee333@gmail.com">Birlikte çalışalım ↗</a>
        </header>

        <section className="portfolioHero">
          <div className="availability"><span /> Staj ve junior roller için açık</div>
          <p className="heroRole">Çayan Kuzu<br />Creative developer<br />&amp; product builder</p>
          <h1>Fikirleri çalışan, <em>görülen</em> ve hatırlanan dijital ürünlere dönüştürüyorum.</h1>
          <div className="heroActions">
            <p>Web, mobil ve 3B deneyimleri; ürün düşüncesi, arayüz tasarımı ve yazılımla uçtan uca geliştiriyorum.</p>
            <div>
              <a className="primaryButton" href="#projeler">Projeleri incele ↓</a>
              <PrintButton />
            </div>
          </div>
        </section>

        <section className="proofStrip" aria-label="Portföy özeti">
          <p>Bağımsız ürün portföyü</p>
          <dl>
            <div><dt>06</dt><dd>Seçili proje</dd></div>
            <div><dt>03</dt><dd>Canlı web ürünü</dd></div>
            <div><dt>03</dt><dd>Mobil ürün</dd></div>
          </dl>
        </section>

        <section className="workSection" id="projeler">
          <div className="sectionIntro">
            <p className="sectionIndex">01 / Seçili işler</p>
            <h2>Gerçek projeler.<br />Gerçek ürün kararları.</h2>
            <p>Her çalışma; problem tanımından arayüze, koddan yayına kadar kendi üretim sürecimi gösterir.</p>
          </div>

          <div className="caseGrid">
            {portfolioProjects.map((project) => (
              <article className={`caseCard accent-${project.accent}`} key={project.id}>
                <a className="caseVisual" href={project.primaryUrl} target="_blank" rel="noreferrer" aria-label={`${project.name} projesini aç`}>
                  <Image
                    src={project.preview}
                    alt={`${project.name} gerçek proje önizlemesi`}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 36px), 48vw"
                    style={{ objectPosition: project.previewPosition ?? "center" }}
                  />
                  <span>{project.primaryLabel} ↗</span>
                </a>
                <div className="caseInfo">
                  <div className="caseEyebrow">
                    <span>{project.number}</span>
                    <p>{project.category}</p>
                    <small>{project.status}</small>
                  </div>
                  <h3>{project.name}</h3>
                  <dl className="caseStory">
                    <div><dt>Amaç</dt><dd>{project.purpose}</dd></div>
                    <div><dt>Katkım</dt><dd>{project.contribution}</dd></div>
                  </dl>
                  <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <div className="caseLinks">
                    <a href={project.primaryUrl} target="_blank" rel="noreferrer">{project.primaryLabel} ↗</a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="profileSection" id="profil">
          <div className="sectionIntro profileIntro">
            <p className="sectionIndex">02 / Profil</p>
            <h2>Ürün gözüyle tasarlayan, tasarladığını kodlayan.</h2>
          </div>
          <div className="profileBody">
            <div className="profileName">
              <span>CK</span>
              <p>Çayan Kuzu</p>
              <small>Creative Developer<br />Product Builder</small>
            </div>
            <div className="profileCopy">
              <p>Bir fikri yalnızca ekran olarak değil; amacı, davranışı, teknik sistemi ve kullanıcıya bıraktığı hisle birlikte ele alıyorum.</p>
              <p>Odağım; etkileşimli web deneyimleri, kullanışlı 3B araçlar ve insanları ortak ilgi alanlarında buluşturan mobil ürünler. Hızlı prototip üretip, çalışan ürüne dönüştürmeyi seviyorum.</p>
              <div className="profileLinks">
                <a href="https://github.com/cayankuzu" target="_blank" rel="noreferrer">GitHub profili ↗</a>
                <a href="mailto:memodee333@gmail.com">E-posta gönder ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="skillsSection" id="yetkinlikler">
          <div className="skillsHeading">
            <p className="sectionIndex">03 / Yetkinlikler</p>
            <h2>Fikirden yayına tek üretim hattı.</h2>
          </div>
          <div className="skillGrid">
            <article><span>01</span><h3>Ürün &amp; UX</h3><p>Problem tanımı, kapsam, kullanıcı akışları, bilgi mimarisi, prototipleme ve arayüz sistemi.</p></article>
            <article><span>02</span><h3>Web</h3><p>Next.js, React, TypeScript, erişilebilir ve responsive arayüzler, Vercel dağıtımı.</p></article>
            <article><span>03</span><h3>Mobil</h3><p>React Native, Expo, mobil tasarım kalıpları, sosyal ürün akışları ve cihaz uyumluluğu.</p></article>
            <article><span>04</span><h3>3B &amp; yaratıcı kod</h3><p>Three.js, React Three Fiber, etkileşimli sahneler, Web Audio ve deneysel web anlatıları.</p></article>
            <article><span>05</span><h3>Veri &amp; servisler</h3><p>Supabase, kimlik doğrulama, gerçek zamanlı akışlar, harita ve içerik API entegrasyonları.</p></article>
            <article><span>06</span><h3>Üretim</h3><p>Git/GitHub, test edilebilir iterasyon, performans iyileştirme ve canlı ürün bakımı.</p></article>
          </div>
        </section>

        <section className="contactSection" id="iletisim">
          <p className="sectionIndex">04 / İletişim</p>
          <div>
            <p>Bir staj, junior rol veya birlikte üreteceğimiz bir fikir için:</p>
            <h2>Merhaba<br />diyelim.</h2>
            <a href="mailto:memodee333@gmail.com">memodee333@gmail.com ↗</a>
          </div>
        </section>

        <footer className="portfolioFooter">
          <p>MeMoDe® / Çayan Kuzu / 2026</p>
          <a href="https://github.com/cayankuzu" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={fikkisUrl}>Fikkis deney alanı ↗</a>
        </footer>
      </main>

      <FloatingPortal
        href={fikkisUrl}
        destination="fikkis"
        eyebrow="deney alanı"
        previewSrc="/portal-fikkis.png"
        storageKey="memode-portal-v2"
      />
    </>
  );
}
