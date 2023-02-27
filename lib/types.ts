import { Variants } from "framer-motion";
import React from "react";
import { IconType } from "react-icons/lib";

/* Custom Animated Components types */
export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};

export type ProjectType = {
  id: string;
  name: string;
  coverImage: string;
  description: string;
  githubURL: string;
  previewURL?: string;
  tools?: string[];
  pinned?: boolean;
};

export type SkillType = {
  name: string;
  Icon: IconType;
};

export type CertificateType = {
  id: string;
  title: string;
  issuedDate: string;
  orgName: string;
  orgLogo: string;
  url: string;
  pinned: boolean;
};

export type SocialPlatform = {
  title: string;
  Icon: IconType;
  url: string;
};

export type UtilityType = {
  title: string;
  data: {
    name: string;
    description: string;
    Icon: IconType | JSX.Element;
    link: string;
  }[];
};

export type FormInput = {
  to_name: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

export type PageData = {
  title: string;
  description: string;
  image: string;
  keywords: string;
};

export type PageMeta = {
  home: PageData;
};

export type FrontMatter = {
  slug: string;  
  excerpt: string;
  title: string;
  date: string;
  keywords: string;
  image: string;
};
