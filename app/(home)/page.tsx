'use client';
import {  Suspense, useState } from 'react';
import { modules } from '../data';
import Module from '@/components/module';
import { useSearchParams } from 'next/navigation';

const FormationProgram = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };
  const openAllModules = useSearchParams().get('openAllModules');
  console.log('openAllModules', openAllModules);

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <Module module={module} key={index} toggleModule={toggleModule} expandedModule={openAllModules === 'yes' ? module.semaine : expandedModule} />
      ))}
    </div>)
};

const WrappedFormationProgram = () => {
  return <Suspense>
    <FormationProgram />
  </Suspense>;
}

export default WrappedFormationProgram;