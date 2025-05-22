import GitHubCalendar from 'react-github-calendar'

const GithubContributionSection = () => {

  // https://github-readme-stats.vercel.app/api/wakatime?username=the_t3ch_wizard

  // https://github-readme-stats.vercel.app/api/top-langs/?username=the_t3ch_wizard&size_weight=0.5&count_weight=0.

  // https://github-readme-stats.vercel.app/api?username=the_t3ch_wizard

  return (
    <section className="w-full bg-background flex flex-col gap-6 pt-6 pb-8">

      <h3 className="text-2xl px-6 md:px-16">
        Github Contributions
      </h3>

      <div className="flex flex-col justify-center items-center gap-3 px-2 md:px-[6.5rem]">
        <GitHubCalendar username="the-t3ch-wizard" blockSize={12} fontSize={16} 
        // theme={{
        //     "light": [
        //       "hsl(0, 0%, 92%)",
        //       "oklch(0.97 0 0)"
        //     ],
        //     "dark": [
        //       "oklch(0.269 0 0)",
        //       "oklch(1 0 0)"
        //     ]
        //   }}
        />
      </div>

    </section>
  )
}

export default GithubContributionSection
