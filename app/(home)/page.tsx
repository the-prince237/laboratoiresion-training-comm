'use client';
import {  useState } from 'react';
import { modules } from '../data';
import Module from '@/components/module';

const FormationProgram = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <Module module={module} key={index} toggleModule={toggleModule} expandedModule={module.semaine} />
      ))}
    </div>)
};

export default FormationProgram;