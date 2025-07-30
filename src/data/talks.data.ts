import { TalkInfo } from "@/types/talk.types";

export const talks: TalkInfo[] = [
  {
    image: "/images/talk-git.png",
    date: new Date("2023-04-08"),
    duration: 40,
    title: "GIT: A Deep Dive into Principal Concepts and Commands",
    hint: "Learn Git essentials and key commands with practical tips to master version control",
    link: "https://www.linkedin.com/events/session2-git-adeepdiveintoprinc7050453518297501697/",
  },
  {
    image: "/images/talk-kmp.png",
    date: new Date("2020-06-01"),
    duration: 60,
    title: "First Step with Kotlin Multiplatform",
    hint: "Intro to Kotlin Multiplatform: share code across Android & iOS for faster development",
    link: "https://www.youtube.com/watch?v=Mwtz62-eCTs",
  },
  {
    image: "/images/talk-web-trends.png",
    date: new Date("2020-05-24"),
    duration: 60,
    title: "2020 web development trends",
    hint: "A quick look at 2020's hottest dev trends and tools every web developer should explore",
    link: "https://docs.google.com/presentation/d/1AWOScoHJUazf2jJ44POJJdmGdZm4-zjtn6PiA-o1Atk/edit?usp=sharing",
  },
];
