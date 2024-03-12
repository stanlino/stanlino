import { GithubProfile } from "@/types/github"

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
      <ul className="flex md:flex-col gap-6 md:gap-1 text-sm text-zinc-300">
        <li className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="rgb(212 212 216)" fill="none">
            <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          Palmas, TO
        </li>
        <li className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="rgb(212 212 216)" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {Intl.DateTimeFormat('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date())} <span className="text-zinc-400">(UTC -03:00)</span>
        </li>
      </ul>
    </div>
  )
}