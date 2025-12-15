import Module from '@/components/module';
import { modules } from '@/app/data';

const page = async ({ params }: { params: Promise<{ moduleTag: string }> }) => {
  const { moduleTag } = await params;
  const module = modules.find((m) => m.slug === moduleTag);

  if (!module) {
    return <div>Module N'existe Pas</div>;
  }
  return (
    <Module module={module} />
  )
}

export default page