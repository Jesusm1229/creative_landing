import { SocialPlatform } from "@lib/types";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { SiCodepen } from "react-icons/si";

const socialMedia: SocialPlatform[] = [
  {
    title: "Twitter",
    Icon: AiOutlineTwitter,
    url: "",
  },
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "",
  },
  {
    title: "Instagram",
    Icon: AiOutlineInstagram,
    url: "",
  },
  {
    title: "Facebook",
    Icon: BsFacebook,
    url: "",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:@gmail.com",
  },
];

export default socialMedia;
