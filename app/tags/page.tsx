import Link from 'next/link'

export default function Tags() {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-[#9fb8ad]">
                      <nav className="flex justify-center space-x-8 mb-20">
        <Link className="text-lg font-semibold hover:underline" href="/">
        Nikki Coll
      </Link>
      </nav>
      <article className="max-w-2xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Coming soon!</h1>
      </article>
    </div>
    )
  }