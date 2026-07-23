import Image from "next/image";

type PortalLinkProps = {
  href: string;
};

export function PortalLink({ href }: PortalLinkProps) {
  return (
    <a className="memodePortal" href={href} aria-label="Fikkis deneyim sitesine portal aç">
      <span className="memodePortalCopy">
        <small>Portal / deneysel taraf</small>
        <strong>fikkis</strong>
      </span>
      <span className="memodePortalFrame" aria-hidden="true">
        <span className="memodePortalRim memodePortalRimBack" />
        <span className="memodePortalRim memodePortalRimFront" />
        <span className="memodePortalWindow">
          <Image
            className="memodePortalPreview"
            src="/portal-fikkis.png"
            alt=""
            fill
            priority
            sizes="112px"
          />
          <span className="memodePortalGlass" />
        </span>
        <i className="memodePortalParticle memodePortalParticleOne" />
        <i className="memodePortalParticle memodePortalParticleTwo" />
        <i className="memodePortalParticle memodePortalParticleThree" />
      </span>
    </a>
  );
}
