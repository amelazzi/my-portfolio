import Image from "next/image";
import "./talk.css";
import { TalkInfo } from "@/types/talk.types";
import { formatDate } from "@/utils/date";
import Link from "next/link";

function Talk({ talk }: { talk: TalkInfo }) {
  return (
    <Link href={talk.link} target="_blank">
      <div className="talk">
        <div className="talk-picture">
          <Image
            src={talk.image}
            width={301}
            height={180}
            style={{ objectFit: "contain" }}
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

export default Talk;
