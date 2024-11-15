import pbeImg from "../public/pbeCover.png";
import pbeImg2 from "../public/pbe2.jpeg";
import drSparkyImg from "../public/DrSparkysBlack.jpeg";
import moonlightDinerImg from "../public/moonlightDiner.jpeg";
import justiceArchImg from "../public/justicearch.png";
import skuyImg from "../public/skuy.png";
import Image, { StaticImageData } from "next/image";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

export interface Release {
  name: string;
  img: StaticImageData;
  logline?: String;
  description?: string;
  credits?: string[];
  url?: string;
  embedPlayer?: ReactJSXElement;
  released?: boolean;
  descriptionImgs?: StaticImageData[];
  artCredits?: string[];
  featured: boolean;
}

export const releases: Release[] = [
  {
    name: "The Moonlight Diner",
    img: moonlightDinerImg,
    logline:
      "Stories, dreams, and dark secrets all collide at The Moonlight Diner, a 1950s establishment in the middle of the Arizona desert.",
    description:
      "Stories, dreams, and dark secrets all collide at The Moonlight Diner, a 1950s establishment in the middle of the Arizona desert.",
    descriptionImgs: [moonlightDinerImg],
    released: false,
    artCredits: ["Gavin Shaub"],
    featured: true,
  },
  {
    name: "Pursuit of the Bitter End",
    img: pbeImg2,
    descriptionImgs: [pbeImg2, pbeImg],
    logline:
      "Back in the Old West, two men are fated to hunt each other, both seeing themselves as the hero.",
    description:
      "Henry Alhborn has been accused of a crime he's adamant he didn't commit, and Walter Hall is determined to bring him to justice. When the stakes turn personal, it becomes clear that only one man will walk away.",
    released: true,
    artCredits: ["Tiffany Chung", "Gavin Shaub"],
    featured: true,
    // embedPlayer: (
    //   <iframe src="https://podcasters.spotify.com/pod/show/pursuitofthebitterend/embed" frameBorder="0" scrolling="no"></iframe>
    // ),
    //credits: ["Drew Alvarez", "Zachary Braffman", "Adam Durr", "Baz Holifield", "Alex Morgan", "Gavin Shaub"]
    url: 'https://creators.spotify.com/pod/show/pursuitofthebitterend'
  },
  {
    name: "Doctor Sparky's Rocket Fuel",
    img: drSparkyImg,
    descriptionImgs: [drSparkyImg],
    logline:
      "The hosts of Hollywood's Best Idea Yet conduct an ad read for Doctor Sparky's Rocket Fuel, an energy drink with a \"daring new mix of vitamins,\" and a growing list of side effects.",
    description:
      "The hosts of Hollywood's Best Idea Yet conduct an ad read for Doctor Sparky's Rocket Fuel, an energy drink with a \"daring new mix of vitamins,\" and a growing list of side effects.",
    embedPlayer: (
    <iframe
        src="https://embed.acast.com/653f005b18e0ae0011387407?feed=true"
        frameBorder="0"
        width="100%"
        height="280px"
      ></iframe>
    ),
    artCredits: ["@NyazureDreams"],
    featured: true,
  },
  {
    name: "Justice Arch Advertisement",
    img: justiceArchImg,
    description: "",
    featured: false,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7166489053930962944/"
  },
  {
    name: "Skuy Advertisement",
    img: skuyImg,
    description: "",
    featured: false,
    url: "https://www.instagram.com/reel/C4_J0qXu5hi/?igsh=NTc4MTIwNjQ2YQ=="
  },
];

export const featured = releases.filter((release) => release.featured);
