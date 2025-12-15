'use client'
import { modules } from "@/app/data"
import Module from "@/components/module"
import { useState } from "react";

export const ProgramTab = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const toggleModule = (index: number) => {
    setExpandedModule(expandedModule === index ? null : index);
  };
  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <Module module={module} key={index} toggleModule={toggleModule} expandedModule={expandedModule} />
      ))}
    </div>
  )
}