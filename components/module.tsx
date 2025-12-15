'use client'
import type { ModuleProps } from '@/types'
import { facilitateurs } from '@/app/data'
import {  ArrowRightFromLineIcon, ChevronDown, ChevronRight, Download, Eye } from 'lucide-react'
import Link from 'next/link'

const Module = (
  {
    module, 
    mainFacilitateurSlug, 
    toggleModule, 
    expandedModule 
  }: { 
    module: ModuleProps, 
    mainFacilitateurSlug?: string, 
    toggleModule?: (key: number) => void, 
    expandedModule?: number | null
  }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <button
        onClick={() => toggleModule && toggleModule(module.semaine)}
        className="w-full p-6 gap-5 flex items-center justify-between hover:bg-gray-50 transition"
      >
        <div className="flex items-center gap-4">
          <div className="bg-primary text-white font-bold rounded-full min-w-12 min-h-12 w-12 h-12 flex items-center justify-center text-lg">
            M{module.semaine}
          </div>
          <div className="text-left">
            <h3 className="text-sm md:text-lg lg:text-xl font-bold text-gray-900">{module.titre}</h3>
            <p className="text-sm text-gray-600">
              {module.lecons.length} leçons • Semaine {module.semaine}
            </p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Link tabIndex={1} href={module.doc ? module.doc : "#"} className='flex z-10 relative gap-3 p-3 md:px-4 md:py-1.5 md:bg-primary text-primary md:text-white rounded-full items-center'>
            <span className='hidden md:inline'>Ressources</span> 
            <Download />
          </Link>
          {expandedModule === undefined 
            ? null 
            : <>
                <Link tabIndex={1} href={`/module/${module.slug}`} className='flex z-10 relative gap-3 p-3 md:px-4 md:py-1.5 md:bg-primary text-primary md:text-white rounded-full items-center'>
                  <span className='hidden md:inline'>Ouvrir</span> 
                  <Eye />
                </Link>
                {expandedModule === module.semaine 
                ? <ChevronDown color='black' size={24} /> 
                : <ChevronRight color='black' size={24} />}
              </>
          }
        </div>
      </button>

      {(expandedModule === module.semaine || expandedModule === undefined) && (
        <div className="p-6 pt-0 space-y-6">
          <div className='flex flex-col gap-4'>
            <h2 className="text-xl text-gray-700">👥 Facilitateurs :</h2>
            
            <div className="text-gray-600 flex gap-1 flex-wrap">
              {module.facilitateurs
                .map((fId) => facilitateurs.find((f) => f.id === fId))
                .map((facilitateur) => 
                  facilitateur && 
                  <a key={facilitateur.nom} href={`/facilitateur/${facilitateur.slug}`} className={`text-black flex gap-2 items-center border-2 py-2 px-5 text-sm border-gray-200 opacity-80 hover:opacity-100 bg-gray-100 rounded-full max-w-fit ${facilitateur.slug === mainFacilitateurSlug && "bg-primary text-white font-black"}`}>
                    <span className='font-black'>{facilitateur.nom}:</span> <span className='italic text-xs'>({facilitateur.titre})</span>
                  </a> 
              )}
            </div>
          </div>
          {module.lecons.map((lecon, lIndex) => (
            <div key={lIndex} className="border-l-4 border-purple-300 pl-6 py-4 bg-gray-50 rounded-r-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold text-purple-900">
                    Leçon {lecon.numero} : {lecon.titre}
                  </h4>
                  <span className="inline-block mt-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    {lecon.duree}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">🎯 Objectifs</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {lecon.objectifs.map((obj, oIndex) => (
                      <li key={oIndex}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-2">📚 Contenu</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {lecon.contenu.map((cont, cIndex) => (
                      <li key={cIndex}>{cont}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">📋 Stratégie :</span>
                    <p className="text-gray-600">{lecon.strategie}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <span className="font-semibold text-green-700">🛠️ Travaux Pratiques :</span>
                    <p className="text-green-600 text-xs mt-1">{lecon.tp}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export const ModuleLink = ({ module }: { module: ModuleProps }) => {
  return (<Link href={`/module/${module.slug}`} className="p-2 bg-purple-200 text-purple-800 rounded text-xs font-semibold flex items-center gap-5">
      <span>Module {module.semaine}: {module.titre}</span>
      <ArrowRightFromLineIcon className='-rotate-45' size={18} />
    </Link>)
}

export default Module