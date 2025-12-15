import { facilitateurs, modules } from "@/app/data"
import Module, { ModuleLink } from "@/components/module"

const page = async ({ params }: { params: Promise<{ facilitateurSlug: string }>}) => {
  const facilitateurSlug = (await params).facilitateurSlug

  const facilitateur = facilitateurs.find(({ slug }) => slug === facilitateurSlug)

  if(!facilitateur) {
    return <div>
      Facilitateur Inexistant !
    </div>
  }

  const facilitateurModules = modules.filter(({ facilitateurs }) => facilitateurs.includes(facilitateur.id) )
  
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-black text-2xl my-5 px-5">Leçons de <span className="font-black">{facilitateur.nom}</span> ({facilitateur.titre})</h2>

      <div className="flex gap-1.5 flex-wrap my-5 px-5">
        {
          facilitateurModules.map((mod) => <ModuleLink module={mod} key={mod.slug}/>)
        }
      </div>

      <div className="flex flex-col gap-3">
        {
          facilitateurModules.map((module, index) => <Module mainFacilitateurSlug={facilitateurSlug} key={index} module={module} /> )
        }
      </div>
    </div>
  )
}

export default page