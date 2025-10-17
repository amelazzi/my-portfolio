"use client";
import Image from "next/image";
import "./talk-card.css";
import { TalkInfo } from "@/types/talk.types";
import { formatDate } from "@/utils/date";
import Link from "next/link";
import { useDevice } from "@/app/contexts/useDeviceSelector";

function TalkCard({ talk }: { talk: TalkInfo }) {
  const { isMobile } = useDevice();
  const imageWidth = isMobile ? 210 : 300;
  const imageHeight = isMobile ? 120 : 180;

  return (
    <Link href={talk.link} target="_blank">
      <div className="talk card">
        <div className="talk-picture">
          <Image
            src={talk.image}
            width={imageWidth}
            height={imageHeight}
            style={{ objectFit: "fill" }}
            alt={`${talk.title} picture`}
          />
        </div>
        <p>
          {formatDate(talk.date)} • {talk.duration} min
        </p>
        <div className="talk-title">
          <h4> {talk.title}</h4>
        </div>
        <p> {talk.hint} </p>
      </div>
    </Link>
  );
}

export default TalkCard;
