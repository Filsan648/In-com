import { useState } from "react"
import amina from "app/asset/team/amina.png"
import mohamed from "app/asset/team/mohamed.png"
import yasmin from "app/asset/team/yasmin.png"
import abdallah from "app/asset/team/abdallah.png"
import abdisamed from "app/asset/team/abdisamd.png"
import mohamed_bedri from "app/asset/team/mohamed badri.png"
import said from "app/asset/team/said.png"
import farhan from "app/asset/team/farhan.png"
import Scroll from "../asset/scroll"
import Title from "../asset/Tile"
export default function Team() {
  const service = [
  {
    title: "Amina Houmed",
    description:
      " Cofondatrice & CEO",
    image: amina
  },
  {
    title: "Mohamed Gohar",
    description:
      "Cofondateur & COO",
    image: mohamed
  },
  {
    title: "Yasmine Said Bachir",
    description:
      "Chief Marketing Manager",
    image: yasmin
  },
  {
    title: "Abdallah Adou",
    description:
      "Ingénieur Audiovisuel & Technique",
    image: abdallah
  },
  {
    title: "Abdisamad Jama",
    description:
      "Creative Graphic Designer ",
    image: abdisamed
  },
  {
    title: "Mohamed Badri",
    description:"Videographer & Motion Creator ",
   image: mohamed_bedri
  },
  {
    title: "Said Mohamud Ali",
    description:"Videographer & Storytelling Artist ",
   image: said
  },
   {
    title: "Farhan Mohamed",
    description:"Creative Photographer",
   image: farhan
  },
]


  

  return (
    <div>
          <div className="md:w-1/2 px-6">
    <Title title="Une équipe, un seul brief, une exigence continue." subtitle="Team"/>

    <p className="text-justify text-black/85  text-lg mt-5">
     De la stratégie à la diffusion, nous intégrons création, production et mesure dans un parcours clair et centralisé, ajusté à vos objectifs — institutionnels, sociaux, événementiels ou digitaux.
    </p>
    </div>
       <Scroll content={service} /></div>
  )
}
