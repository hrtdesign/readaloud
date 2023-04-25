export function QuerySection() {
    return(
        <section className="container mx-auto">
            <div className="bg-gradient-to-r from-zinc-800 to-black py-16 text-center mt-[80px] mb-[60px] rounded">
                <h2 className="md:text-4xl text-3xl text-white text-center mb-6">Do you have any question?</h2>
                <p className="text-white mt-[16px] text-xl">Please feel free to contact us at <a href="mailto:hrtdesign@outlook.com" className="decoration-underline">hrtdesign@outlook.com</a></p>
                <a href="mailto:hrtdesign@outlook.com" className={'mt-6 inline-flex text-black bg-white px-3.5 py-2 rounded hover:bg-black hover:text-white'}>Send Your Query!</a>
            </div>
        </section>
    )
}