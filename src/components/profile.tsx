import { GithubProfile } from "@/types/github"
import { FaClock, FaGithub, FaMapLocation } from "react-icons/fa6"
import { DateTime } from "./date"

interface Props {
  data: GithubProfile
}

export function Profile({ data }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 items-center md:items-start">
        <h1 className="text-3xl font-bold mt-5">Stanley Filipe</h1>
        <p className="text-zinc-400">
          {data.bio}
        </p>
      </div>
      <ul className="flex flex-col gap-3 md:gap-2 text-sm text-zinc-300 pl-8 md:pl-0">
        <li className="flex gap-2 items-center">
          <FaMapLocation className="text-zinc-400 text-md" />
          Palmas, TO
        </li>
        <li className="flex gap-2 items-center">
          <FaClock className="text-zinc-400 text-md" />
          <DateTime />
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub className="text-zinc-400 text-md" />
          <a href={data.html_url} className="hover:underline" target="_blank" rel="noreferrer">
            {data.html_url}
          </a>
        </li>
      </ul>
    </div>
  )
}