export function HeroSection() {
    return(
        <section>
            <div className="container flex mx-auto md:flex-nowrap flex-wrap py-20 items-center gap-9">
                <div className="hero-content-wrap py-10 w-full md:w-2/4 text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl flex gap-2 items-center md:justify-start justify-center">
                        ReadAloud
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" className={'text-indigo-600 mt-2'} fill={'currentColor'}><path d="M140 976q-24.75 0-42.375-17.625T80 916V236q0-24.75 17.625-42.375T140 176h380l-60 60H140v680h480V776h60v140q0 24.75-17.625 42.375T620 976H140Zm100-170v-60h280v60H240Zm0-120v-60h200v60H240Zm380 10L460 536H320V336h140l160-160v520Zm60-92V258q56 21 88 74t32 104q0 51-35 101t-85 67Zm0 142v-62q70-25 125-90t55-158q0-93-55-158t-125-90v-62q102 27 171 112.5T920 436q0 112-69 197.5T680 746Z"/></svg>
                    </h1>
                    
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Listen blog and highlight</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Enable users to listen to your blog content with automatic highlighting of the text as it is spoken. Enhance accessibility and engagement on your website with this easy-to-use tool.</p>
                    
                    <div className="mt-10 flex gap-x-4 justify-center md:justify-start">
                        <a href="/documentation.pdf" className="rounded-md px-3.5 py-2 text-sm font-semibold text-indigo-600 border-solid border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white self-center" target="_blank" rel="noreferrer noopener">Documentation</a>
                        
                        <a href="https://codecanyon.net/user/hrtdesign/portfolio" className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-center border-transparent border-2">Buy Now</a>
                    </div>
                </div>
                <div className="hero-image-wrap w-full md:w-2/4">
                    <img src="/images/hero.png" alt="ReadAloud" className="ml-auto shadow-lg rounded" loading="lazy"/>
                </div>
            </div>
        </section>
    )
}