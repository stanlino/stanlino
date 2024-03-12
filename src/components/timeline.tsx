import { cn } from "@/utils/cn";
import { IoSchool } from "react-icons/io5";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdWork } from "react-icons/md";

export function Timeline() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.title}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-zinc-800" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span className='h-8 w-8 bg-zinc-600 rounded-full flex items-center justify-center ring-8 ring-zinc-900'>
                    <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-zinc-100">
                      {event.title}
                    </p>
                    <p className="text-sm text-zinc-400">
                      {event.description}
                    </p>
                  </div>
                  <div className="whitespace-nowrap text-right text-sm text-zinc-500">
                    <time>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const timeline = [
  {
    date: '2023',
    title: 'Ingressou na Sharenergy como Desenvolvedor Full Stack',
    description: 'A Sharenergy é uma empresa que fornece soluções de software para o setor de energia fotovoltaica.',
    icon: MdWork
  },
  {
    date: '2020',
    title: 'Concluiu Curso Técnico em Informática',
    description: 'Completou com êxito um curso técnico em Informática integrado ao ensino médio no IFTO (Instituto Federal de Educação, Ciência e Tecnologia).',
    icon: IoSchool
  },
  {
    date: '2002',
    title: 'Nascido no Brasil',
    description: 'Nasci em uma pequena cidade no interior de Minas Gerais no Brasil.',
    icon: LiaBirthdayCakeSolid
  }
];