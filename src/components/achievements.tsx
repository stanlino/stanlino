import Image from "next/image"

export function Achievements() {
  return (
    <div className="flex flex-col border-t border-t-zinc-700 mt-6 py-4 gap-4">
      <strong className="text-md">Achievements</strong>
      <div className="flex gap-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="relative group">
            <div className="absolute bottom-16 left-[50%] w-56 translate-x-[-50%] flex-col gap-2 bg-zinc-700 p-3 rounded-md transform border border-zinc-600 rotate-3 group-hover:rotate-0 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none">
              <strong className="text-sm">{achievement.name}</strong>
              <p className="text-xs">{achievement.description}</p>
            </div>
            <Image src={achievement.img} alt={achievement.name} className="w-12 h-12 rounded-full" width={48} height={48} />
          </div>
        ))}
      </div>
    </div>
  )
}

const achievements = [
  {
    name: 'Ignite ReactJS',
    description: 'Completed the Ignite ReactJS course by Rocketseat',
    img: '/svg/reactJS-ignite.svg',
  },
  {
    name: 'Ignite React Native',
    description: 'Completed the Ignite React Native course by Rocketseat',
    img: '/svg/react-native-ignite.svg',
  },
  {
    name: 'Ignite NodeJS',
    description: 'Completed the Ignite NodeJS course by Rocketseat',
    img: '/svg/nodeJS-ignite.svg',
  }
]