import { facilitateurs, modules, ressources } from '@/app/data';
import { ProgramTab } from './tabs';
import { ModuleLink } from '@/components/module';

const page = async ({ params }: { params : Promise<{ tabTag: string }>}) => {
  const { tabTag = "" } = (await params);

  return (
    <>
      {/* Contenu Facilitateurs */}
      {tabTag === 'facilitateurs' 
        ? (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">
              Équipe de Facilitateurs
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {facilitateurs.map((facilitateur, index) => (
                <div key={index} className="border-l-4 border-purple-400 bg-purple-50 p-4 rounded-r-lg">
                  <h4 className="font-bold text-purple-900 mb-2">{facilitateur.nom} ({facilitateur.titre})</h4>
                  <div className="flex flex-wrap gap-3">
                    {facilitateur.modules
                      .map((module) => modules.find(({ semaine }) => semaine === module))
                      .map((mod, mIndex) => (
                        mod && <ModuleLink key={mIndex} module={mod} />
                    ))}
                    <a href={`/facilitateur/${facilitateur.slug}`} className="px-2 text-xl py-1 border-purple-800 border-solid border-2 text-purple-800 rounded font-semibold">
                      Voir toutes les leçons de {facilitateur.nom}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
              <h4 className="font-bold text-yellow-900 mb-2">💡 Note importante</h4>
              <p className="text-yellow-800 text-sm">
                Les facilitateurs ont été identifiés à partir du personnel présent lors de la réunion. 
                Certains rôles nécessitent des intervenants externes (formateur commercial, psychologue, 
                pasteur) qui devront être recrutés ou contractualisés avant le début de la formation.
              </p>
            </div>
          </div>
        ) 
          : tabTag === 'ressources' ? (
            <div className="space-y-6">
              {ressources.map((ressource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">
                    {ressource.categorie}
                  </h3>
                  <ul className="space-y-2">
                    {(ressource.titres || ressource.items).map((item, iIndex) => (
                      <li key={iIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4">
                  📅 Suivi Post-Formation
                </h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Révisions Mensuelles</h4>
                    <p className="text-blue-700 text-sm">
                      Sessions pratiques mensuelles de 2h : cas réels, objections nouvelles, partage d'expériences
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Coaching Ciblé</h4>
                    <p className="text-green-700 text-sm">
                      Accompagnement spécifique pour commerciaux en difficulté ou stagnation de performance
                    </p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Évaluation Continue</h4>
                    <p className="text-purple-700 text-sm">
                      Rapports de visite hebdomadaires, analyse trimestrielle des performances, ajustements du programme
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
            : <ProgramTab />
      }
    </>
  )
}

export default page