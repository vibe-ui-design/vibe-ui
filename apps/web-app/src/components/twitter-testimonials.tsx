import Image from "next/image"
import { Twitter } from "lucide-react"

interface Tweet {
  id: string
  author: {
    name: string
    username: string
    avatar: string
    verified: boolean
  }
  content: string
  image?: string
}

const tweets: Tweet[] = [
  {
    id: "1",
    author: {
      name: "Steven Tey",
      username: "@steventey",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content: "bruh this is so good 😂",
  },
  {
    id: "2",
    author: {
      name: "Guillermo Rauch",
      username: "@rauchg",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content: "beautiful site 👇",
  },
  {
    id: "3",
    author: {
      name: "Mckay Wrigley",
      username: "@mckaywrigley",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content:
      "Need a beautiful landing page? Use Cursor + Magic UI. Install components with 1-line of code and tag them with Cursor Composer to have AI do 100% of the work for you. Watch my workflow - it's this easy.",
    image: "/placeholder.svg?height=400&width=600&text=UI+Screenshot",
  },
  {
    id: "4",
    author: {
      name: "chronark — oss/acc",
      username: "@chronark_",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content:
      "I think our designer just convinced me to buy @magicuidesign I can't be bothered to figure out the comets and border beam, it's cheaper to just buy",
  },
  {
    id: "5",
    author: {
      name: "Aiden Bai",
      username: "@aidenybai",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content: "we use magicui.design for million.dev 🧙‍♂️",
  },
  {
    id: "6",
    author: {
      name: "Ray Fernando",
      username: "@RayFernando1337",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content:
      "I'm loving this Portfolio Site and I'm going to use it as the starting point for my Notion blog. Template by: @dillionverma UI: @magicuidesign Shoutout to @hqasmei for the heads up on Magic UI. github.com/dillionverma/p...",
  },
  {
    id: "7",
    author: {
      name: "Minh-Phuc Tran",
      username: "@phuctm97",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content: "Oh man, these are so good, thanks for making it open-source ❤️",
  },
  {
    id: "8",
    author: {
      name: "Sully",
      username: "@SullyOmarr",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content: "Bro these are cleeeaann",
  },
  {
    id: "9",
    author: {
      name: "Alex",
      username: "@vahaaah",
      avatar: "/placeholder.svg?height=80&width=80",
      verified: true,
    },
    content: "This is exactly what I've been looking for!",
  },
]

export function TwitterTestimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <h2 className="text-5xl font-bold text-center text-white mb-16">What People Are Saying on Twitter</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tweets.map((tweet) => (
            <div key={tweet.id} className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={tweet.author.avatar || "/placeholder.svg"}
                    alt={tweet.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="font-semibold text-white">{tweet.author.name}</p>
                    {tweet.author.verified && (
                      <svg className="ml-1 h-4 w-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-neutral-400">{tweet.author.username}</p>
                </div>
                <div className="ml-auto">
                  <Twitter className="h-5 w-5 text-blue-400" />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-white mb-4">{tweet.content}</p>
                {tweet.image && (
                  <div className="relative rounded-md overflow-hidden mt-3 border border-neutral-800">
                    <Image
                      src={tweet.image || "/placeholder.svg"}
                      alt="Tweet image"
                      width={500}
                      height={300}
                      className="w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

