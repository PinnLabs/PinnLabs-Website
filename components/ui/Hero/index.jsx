import { TagFeature } from "./TagFeature"
import NavLink from "../NavLink"

import { Playfair_Display } from '@next/font/google'

const playfair = Playfair_Display({
    weight: ['400', '700'],
    subsets: ['latin'],
    style: ['normal', 'italic'],
})

const Hero = () => (
    <section>
        <TagFeature />
        <div className="custom-screen py-28 text-gray-600">
            <div className={`space-y-5 max-w-4xl mx-auto text-center`}>
                <h1 className="text-4xl text-gray-100 font-extrabold mx-auto sm:text-6xl">
                    Empower your vision with <em className={`${playfair.className} text-lime-300`}>custom-built software</em>
                </h1>
                <p className="max-w-xl mx-auto text-gray-100">
                    We design and develop high-performance digital solutions — from tailored software and SaaS platforms to open-source tools
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink href="/get-started" className="text-gray-900 bg-lime-300">
                        Start building
                    </NavLink>
                    <NavLink href="#cta" className="text-gray-100 border" scroll={false}>
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
