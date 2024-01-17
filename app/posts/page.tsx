import Link from 'next/link'

export default function Posts() {
    return (

    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-[#9fb8ad]">
                <nav className="flex justify-center space-x-8 mb-20">
        <Link className="text-lg font-semibold hover:underline" href="/">
        Nikki Coll
      </Link>
      </nav>
      <article className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">This is huge.</h1>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
          <time dateTime="2024-01-03">January 03, 2024</time>
          <div className="flex space-x-2">
            <span>#blogging</span>
            <span>#writing</span>
            <span>#firstpost</span>
          </div>
        </div>
        <p className="mb-4">
          I can’t even tell you the number of times I’ve designed a personal site, created and wrote out ideas to share,
          and then never followed through with any of it. Look at me now - I finally got over myself and just went for it.
        </p>
        <p className="mb-4">
          Thanks for being here. I hope to write about cool things like what I learned during my 1.5 year sabbatical, why
          focaccia is the ultimate carb, how to be nicer to yourself, how I learned to code, and which hikes are really
          hard and to avoid at all costs.
        </p>
        <p>
          Really I just want a creative and fun corner of the internet that feels like mine and if you happen to enjoy it,
          that’s just extra icing on the cake.
        </p>
      </article>
    </div>
    )
  }
  
  