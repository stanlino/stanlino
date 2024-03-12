import Image from "next/image";

import { Achievements } from "@/components/achievements";
import { Profile } from "@/components/profile";
import { Readme } from "@/components/readme";
import { GithubProfile } from "@/types/github";

const GITHUB_PROFILE_URL = "https://api.github.com/users/stanlino";

export default async function Home() {

  const response = await fetch(GITHUB_PROFILE_URL);
  const profile: GithubProfile = await response.json();

  return (
    <div className="pt-36 bg-zinc-900 min-h-screen">
      <div className="container max-w-7xl mx-auto px-6 grid grid-cols-8 gap-2">
        <div className="col-span-7 sm:col-span-2">
          <Image src={profile.avatar_url} width={296} height={296} alt="Stanley Filipe" className="rounded-full border border-zinc-700" />
          <Profile data={profile} />
          <Achievements />
        </div>
        <div className="col-span-7 sm:col-span-6 px-3">
          <Readme />
        </div>
      </div>
    </div>
  );
}

