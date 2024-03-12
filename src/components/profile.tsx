import { GithubProfile } from "@/types/github"
import { FaClock, FaMapLocation } from "react-icons/fa6"

interface Props {
  data: GithubProfile
}

export function Profile({ data }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-3xl font-bold mt-5">Stanley Filipe</h1>
        <p className="text-zinc-400">
          {data.bio}
        </p>
      </div>
      <ul className="flex md:flex-col gap-6 md:gap-2 text-sm text-zinc-300">
        <li className="flex gap-2 items-center">
          <FaMapLocation className="text-zinc-400 text-md" />
          Palmas, TO
        </li>
        <li className="flex gap-2 items-center">
          <FaClock className="text-zinc-400 text-md" />
          {Intl.DateTimeFormat('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date())} <span className="text-zinc-400">(UTC -03:00)</span>
        </li>
      </ul>
    </div>
  )
}