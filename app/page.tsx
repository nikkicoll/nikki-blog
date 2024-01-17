import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-[#9fb8ad]">
      <nav className="flex justify-center space-x-8 mb-20">
        <Link className="text-lg font-semibold hover:underline" href="/posts">
          POSTS
        </Link>
        <Link className="text-lg font-semibold hover:underline" href="/tags">
          TAGS
        </Link>
        <Link className="text-lg font-semibold hover:underline" href="/now">
          NOW
        </Link>
        <Link className="text-lg font-semibold hover:underline" href="/links">
          LINKS
        </Link>
      </nav>
      <Image
        src="/nikki_face.png"
        width={200}
        height={160}
        className="hidden md:block"
        alt="Professional image of woman's face with brown hair"
      />
      <header className="text-center">
        <h1 className="text-6xl mb-4">Hi, I'm Nikki.</h1>
        <div className="text-base text-left max-w-lg">I live in Seattle and work in solutions engineering. I’m passionate about building meaningful relationships and bread.<br></br><br></br>
        When I’m not selling dreams built on bits and bytes, I can be found reading literature on mental health, cooking, painting, climbing mountains, and showing my husband where that thing is that he couldn’t find.<br></br><br></br>
        Welcome to my online journal, a cozy corner where tech musings mingle with hiking tales, kitchen experiments, and exploring what it means to be 'well'. Pull up a virtual chair, grab a (digital) cookie, and join the journey.<br></br><br></br>
        </div>
      </header>
      <footer className="flex justify-center space-x-4 mt-20">
        <LinkedinIcon className="h-6 w-6" />
        <MailIcon className="h-6 w-6" />
        <MediumIcon className="h-6 w-6" />
        <GithubIcon className="h-6 w-6" />
      </footer>
    </div>
  )
}

function GithubIcon(props) {
  return (
      <a href='https://github.com/nikkicoll' target='_blank'>
          <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
          >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
      </a>
  )
}


function LinkedinIcon(props) {
  return (
      <a href='https://www.linkedin.com/in/nikkicoll/' target='_blank'>
          <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
          >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
          </svg>
      </a>
  )
}


function MailIcon(props) {
  return (
      <a href='https://www.linkedin.com/in/nikkicoll/' target='_blank'>
          <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
          >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
      </a>
  )
}


function MediumIcon(props) {
  return (
      <a href='https://medium.com/@nikki_91132' target='_blank'>
          <svg
              {...props}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
          >
          <path d="M7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15 16C16.1046 16 17 14.2091 17 12C17 9.79086 16.1046 8 15 8C13.8954 8 13 9.79086 13 12C13 14.2091 13.8954 16 15 16Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 16C20.5523 16 21 14.2091 21 12C21 9.79086 20.5523 8 20 8C19.4477 8 19 9.79086 19 12C19 14.2091 19.4477 16 20 16Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </a>
  )
}

