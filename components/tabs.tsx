'use client'
import { useParams } from "next/navigation"

export const tabs = [
  {
    tag: 'programme',
    label: "Programme Détaillé"
  },
  {
    tag: 'facilitateurs',
    label: "Facilitateurs"
  },
  {
    tag: "ressources",
    label: "Ressources"
  }
]

const Tabs = () => {
  const {tabTag = ""} = useParams<{ tabTag: string }>()
  return (
    <div className="md:flex hidden border-b">
      {tabs.map(({ tag, label }) => (
        <a key={tag} href={`/${tag}#content`}>
          <button
            key={tag}
            className={`px-6 cursor-pointer py-3 font-semibold ${(tabTag === tag || tag === "programme") ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}
          >
            {label}
          </button>
        </a>
      ))}
    </div>
  )
}

export default Tabs