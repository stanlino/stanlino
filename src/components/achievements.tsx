import Image from "next/image"

export function Achievements() {
  return (
    <div className="flex flex-col md:mt-6 py-6 border-neutral-600 md:border-t gap-4 w-full pl-8 md:pl-0">
      <div className="flex gap-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="relative group">
            <div className="absolute bottom-20 left-[50%] w-56 translate-x-[-50%] flex flex-col gap-2 bg-zinc-800 p-3 rounded-md transform border border-zinc-700 rotate-3 group-hover:rotate-0 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
              <strong className="text-sm">{achievement.name}</strong>
              <p className="text-xs">{achievement.description}</p>
            </div>
            <a href={achievement.link} target="_blank" rel="noopener noreferrer">
              <Image src={achievement.img} alt={achievement.name} className="w-16 h-16 rounded-full" width={48} height={48} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

const achievements = [
  {
    name: 'Ignite ReactJS',
    description: 'Completou o curso Ignite ReactJS pela Rocketseat',
    img: '/svg/reactJS-ignite.svg',
    link: 'https://app.rocketseat.com.br/certificates/f4584d47-a958-4586-9995-693374666752',
  },
  {
    name: 'Ignite React Native',
    description: 'Completou o curso Ignite React Native pela Rocketseat',
    img: '/svg/react-native-ignite.svg',
    link: 'https://app.rocketseat.com.br/certificates/0e20cc6d-f91c-4e7b-ba2b-704270a3dd5e',
  },
  {
    name: 'Ignite NodeJS',
    description: 'Completou o curso Ignite NodeJS pela Rocketseat',
    img: '/svg/nodeJS-ignite.svg',
    link: 'https://app.rocketseat.com.br/certificates/fc5823b6-9dc1-418e-b5da-0962b01e1d9f',
  }
]