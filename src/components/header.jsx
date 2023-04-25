export function Header() {
    return(
        <header className="shadow-sm sticky top-0 bg-white">
            <div className="container mx-auto flex justify-between">
                <div className="header-logo">
                    <img src="/images/logo.jpg" height={'60'} width={'60'} alt={'HRT Design'}/>
                </div>
                <a href="https://codecanyon.net/user/hrtdesign/portfolio" className="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 self-center border-transparent border-2">Buy Now</a>
            </div>
        </header>
    )
}