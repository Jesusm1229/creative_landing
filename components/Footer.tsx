import Link from "next/link";
import Image from "next/image";
import socialMedia from "@content/socialMedia";
import {
    FadeContainer,
    opacityVariant,
    popUp,
} from "../content/FramerMotionVariants";
import { navigationRoutes } from "../utils/utils";
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { HiOutlineQrcode } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import { Song } from "@lib/types";

export default function Footer() {
    return (
        <div>Footer</div>
    )
}

