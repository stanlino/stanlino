import Image from "next/image";

import { Achievements } from "@/components/achievements";
import { Profile } from "@/components/profile";
import { Readme } from "@/components/readme";
import { GithubProfile } from "@/types/github";
import { Timeline } from "@/components/timeline";

const GITHUB_PROFILE_URL = "https://api.github.com/users/stanlino";

export default async function Home() {

  const response = await fetch(GITHUB_PROFILE_URL);
  const profile: GithubProfile = await response.json();

  return (
    <div className="py-8 md:py-24 bg-zinc-900 min-h-screen">
      <div className="container max-w-7xl mx-auto sm:px-6 grid grid-cols-8 gap-6 md:gap-2">
        <div className="col-span-8 md:col-span-3 lg:col-span-2 flex flex-col items-center md:items-start">
          <Image src={profile.avatar_url} width={296} height={296} alt="Stanley Filipe" className="rounded-full border border-zinc-700" />
          <Profile data={profile} />
          <Achievements />
        </div>
        <div className="col-span-8 md:col-span-5 lg:col-span-6 px-3 gap-8 flex flex-col">
          <Readme />
          <Timeline />
        </div>
      </div>
    </div>
  );
}

