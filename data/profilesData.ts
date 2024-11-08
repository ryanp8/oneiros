import { StaticImageData } from "next/image";

import zachImg from "@/public/headshots/zach.jpg";
import reneeImg from "@/public/headshots/renee.jpg";
import adamImg from "@/public/headshots/adam.jpg";
import anthonyImg from "@/public/headshots/anthony.jpg";
import sidImg from "@/public/headshots/sid.jpg";
import breannaImg from "@/public/headshots/KakaoTalk_Photo_2023-06-17-04-07-44 - Breanna Lee.jpeg";
import siannaImg from "@/public/headshots/sianna.jpg";
import ryanImg from "@/public/headshots/ryan.png";
import brodyImg from "@/public/headshots/brody.jpg";
import devanImg from "@/public/headshots/devan.jpg";
import emmaImg from "@/public/headshots/emma.jpg";
import nicoImg from "@/public/headshots/nico.jpg";
import gavinImg from "@/public/headshots/gavin.jpg";
import bazImg from "@/public/headshots/baz.jpeg";
import henryImg from "@/public/headshots/henry.jpeg";


export interface Bio {
  name: String;
  img: StaticImageData;
  role: String;
  description: String;
  alum?: Boolean;
}

export const people: Bio[] = [
  {
    name: "Zachary Braffman",
    img: zachImg,
    role: "Founder",
    description:
      "Zachary is a third-year film and computer science student who founded Fable Mason Studios. He's working in a little bit of each facet of the group, and is looking forward to telling interesting and fun stories!",
  },
  {
    name: "Adam Durr",
    img: adamImg,
    role: "Writer",
    description:
      "Adam is a third-year student studying political science. He has creative writing experience from programs at Interlochen Arts Academy, and joined Fable Mason Studios as a writer in the fall of 2022. He is currently working on several projects, and is very excited to see where they go!",
  },
  // {
  //   name: "Breanna Lee",
  //   role: "Video Editor",
  //   img: breannaImg,
  //   description:
  //     "Breanna is a first-year RTVF student and has recently become part of Fable Mason Studios, taking charge of video editing. She's enthusiastic about our upcoming projects and looks forward to the team's shared excitement!",
  // },
  {
    name: "Gavin Shaub",
    role: "Actor, Performer Liaison, Graphic Designer",
    img: gavinImg,
    description:
      "Shaub is a fourth-year Business Minor and Theater Major with an emphasis on Screen Acting and Costume Design. He works for the Wirtz Performance Center as a graphic designer. Shaub has acted in various short and feature-length films, educational theatre productions, and audio dramas. He works for Fable Mason Studios as an actor, graphic designer, script developer, and liaison to the Northwestern Acting community.",
  },
  {
    name: "Brody Bundis",
    role: "Writer, Director, Production Coordinator",
    description:
      "Brody is an RTVF sophomore who is excited to work on projects in any medium and help students tell their stories.",
    img: brodyImg,
  },
  {
    name: "Baz Holifield",
    role: "Voice Actor",
    description: "Baz is a fourth-year Linguistics and Theatre student from Milwaukee, Wisconsin. He loves doing weird voices, and is excited to collaborate on all these amazing projects!",
    img: bazImg
  },
  {
    name: "Sianna Perez",
    role: "Finances",
    img: siannaImg,
    description:
      "Sianna is a second-year student studying mathematics who joined Fable Mason Studios to help with project funding and financing. She is working on brainstorming ways to commodify and fund new projects. She is excited to see the growth of upcoming projects and our team!",
  },
  {
    name: "Ryan Poon",
    role: "Operations",
    img: ryanImg,
    description:
      "Ryan is a junior studying computer science and math who is excited to see and contribute towards all of the creative projects Fable Mason Studios is working on. He currently maintains the website and helps with funding research.",
  },
  {
    name: "Emma Scally",
    role: "Web Developer",
    description:
      "Emma is a third-year student studying computer science and data science. She joined Fable Masons Studios this year and is helping with web development. She has loved the opportunity to combine her interest in technology and story-telling, and is excited to be a part of Fable Mason Studios' journey!",
    img: emmaImg,
  },
  {
    name: "Devan Chanda",
    role: "Head of Social Marketing & Branding",
    img: devanImg,
    description:
      "My name is Devan Chanda and I am a third-year from La Jolla, CA here studying Computer Engineering and Business Institutions. My primary interests and skills include programming, hardware, product management, business analytics, and marketing. I manage the social media presence and overall branding/marketing for Fable Mason Studios. I’m excited to work each week to bring everyone new content and insights into the amazing work we do here!",
  },
  {
    name: "Nico Antezano",
    role: "Sound Editor/Composer",
    description:
      "Nico is a third-year student studying mechanical engineering who joined Fable Mason Studios as a sound editor and composer. He is very excited to work on upcoming projects with the rest of the team!",
    img: nicoImg,
  },
  {
    name: "Anthony Bartolomei",
    role: "Editor",
    img: anthonyImg,
    description:
      "Anthony is a fourth-year engineering student who's joined Fable Mason Studios this year. He is overseeing and is working in the audio editing pipeline. He is excited about our upcoming projects and hopes everyone else is too!",
  },
  {
    name: "Henry Liu",
    role: "Business Operation",
    img: henryImg,
    description: "Henry is a Co’27 Econ and Math double major. He works on cost management and business operation at Fable Mason Studios. He is excited to apply what he learns in class to real world issues, and become part of a rapidly-growing student business."
  },
  {
    name: "Renee Corriveau",
    img: reneeImg,
    role: "Production Coordinator",
    alum: true,
    description:
      "Renee is a graduate creative leadership student at Northwestern who joined Fable Mason Studios in 2023. She works in a variety of roles including script editor, sound engineer and assists with coordination of all stages of production. Her favorite role is proponent of unsolicited movie recommendations.",
  },
  {
    name: "Siddharth Gupta",
    role: "Project Manager",
    img: sidImg,
    alum: true,
    description:
      "Siddharth is a filmmaker, illustrator, and podcaster currently studying as a Master's student in Northwestern University's Leadership for Creative Enterprises program, designed to provide a comprehensive business administration education tailored to the arts and entertainment field. At Fable Mason Studios, they're leveraging their animation, filmmaking, and podcasting experiences to help manifest our stories through their multimedia production skills, providing research support, script and audio editing, and voice acting. They are also the host and producer of Manga Mavericks, a podcast and media outlet dedicated to discussing manga as a medium and an industry. They love bringing together and collaborating with their fellow creatives, combining their individual talents and expertises to create and share stories with audiences who'll be inspired by them to tell their own.",
  },
];
