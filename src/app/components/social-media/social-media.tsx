import Link from "next/link";
import "./social-media.css";
import Image from "next/image";
import { socialMedia } from "@/types/social-media.type";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export const SocialMedia = ({ socialMedia }: { socialMedia: socialMedia }) => {
  const isMobile = useIsMobile();
  const logoSize = isMobile ? 20 : 25;
  return (
    <div
      className="social-media"
      style={{ backgroundColor: `${socialMedia.color}` }}
    >
      <Link href={socialMedia.link} target="_blank">
        <Image
          src={socialMedia.logo}
          width={logoSize}
          height={logoSize}
          alt="X icon"
        />
      </Link>
    </div>
  );
};
