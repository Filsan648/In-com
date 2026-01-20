import { useState } from "react"
import event from "app/asset/service/event.png"
import design from "app/asset/service/design.png"
import voice from "app/asset/service/voice.png"
import connect from "app/asset/service/connect.png"
import prod from "app/asset/service/prod.png"
import print from "app/asset/service/print.png"
import Scroll from "../asset/scroll"
export default function ScrollServices() {
  const service = [
  {
    title: "In Event",
    description:
      "Événementiel clé en main : conception créative, régie générale, scénographie, scènes mobiles, écrans LED et déploiement terrain maîtrisé de bout en bout.",
    image: event
  },
  {
    title: "In Design",
    description:
      "Identité visuelle et direction artistique : logos, chartes graphiques et univers créatifs conçus pour durer et marquer les esprits.",
    image: design
  },
  {
    title: "In Connect",
    description:
      "Communication digitale stratégique : gestion des réseaux sociaux, création de contenus, calendriers éditoriaux et animation de communautés engagées.",
    image: connect
  },
  {
    title: "In Voice",
    description:
      "Formats incarnés et médias narratifs : talk-shows, interviews, podcasts et contenus portés par des voix locales authentiques et influentes.",
    image: voice
  },
  {
    title: "In Prod",
    description:
      "Production audiovisuelle complète : films institutionnels, publicités, aftermovies, contenus digitaux et captations multicaméras.",
    image: prod
  },
  {
    title: "In Print",
    description:
      "Impression et signalétique : bâches, adhésifs, panneaux et objets personnalisés, produits en interne avec une exigence de qualité constante.",
    image: print
  }
]


  

  return (
       <Scroll content={service} />
  )
}
