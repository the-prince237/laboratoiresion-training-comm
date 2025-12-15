'use client';
import { BookOpen, Clock, Menu, Target, Users, X } from 'lucide-react'
import Image from 'next/image';
import { useState } from 'react';
import Tabs, { tabs } from './tabs';
import logo from '../app/favicon.ico'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className='fixed z-50 shadow-2xl top-0 h-20 flex justify-between items-center px-6 bg-white w-full lg:max-w-7xl lg:m-auto'>
          <Image src={logo} alt='sion' width={50} height={50} />
          <Tabs />
          <button className='cursor-pointer lg:hidden hover:bg-gray-200 p-2 rounded-full' onClick={() => setMenuOpen(true)}><Menu color='black' /></button>
          <menu className={`fixed lg:hidden w-screen flex flex-col px-3 py-6 h-screen bg-white top-0 right-0 ${!menuOpen && 'translate-x-1000'}`}>
            <div className='w-full flex justify-end'>
              <button className='cursor-pointer hover:bg-gray-200 p-2 rounded-full' onClick={() => setMenuOpen(false)}><X color='black' /></button>
            </div>
            <div className='w-full flex flex-col'>
              {
                tabs.map(({ tag, label }) => (
                  <a href={`/${tag}#content`} onClick={() => {
                      setMenuOpen(false)
                    }}
                    key={label}
                    className='w-full text-left px-4 py-4 text-black bg-gray-50 hover:bg-gray-200 cursor-pointer'
                  >
                    {label}
                  </a>
                ))
              }
            </div>
          </menu>
        </div>
      <div className="max-w-7xl relative mx-auto lg:mb-0">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-900 mb-2">
            Programme de Formation des Commerciaux
          </h1>
          <h2 className="text-lg md:text-xl text-purple-700 mb-4">
            Laboratoire d'Analyses Médicales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="text-purple-800" size={20} />
                <span className="font-semibold text-purple-900">Durée</span>
              </div>
              <p className="text-2xl font-bold text-purple-700">8 semaines</p>
              <p className="text-sm text-gray-600">1 mois intensif</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="text-green-600" size={20} />
                <span className="font-semibold text-green-900">Leçons</span>
              </div>
              <p className="text-2xl font-bold text-green-700">23 leçons</p>
              <p className="text-sm text-gray-600">2h chacune</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-orange-600" size={20} />
                <span className="font-semibold text-orange-900">Rythme</span>
              </div>
              <p className="text-2xl font-bold text-orange-700">6h/semaine</p>
              <p className="text-sm text-gray-600">3h cours + 3h TP</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="text-purple-600" size={20} />
                <span className="font-semibold text-purple-900">Objectif</span>
              </div>
              <p className="text-2xl font-bold text-purple-700">Opérationnel</p>
              <p className="text-sm text-gray-600">Suivi continu après</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header