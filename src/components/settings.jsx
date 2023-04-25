export function Settings() {
    return(
        <section className="container mx-auto flex gap-y-20  mt-[80px] flex-wrap">
            <img src="images/admin-settings.png" alt="Admin Settings" loading="lazy" className="md:w-1/2 shadow-md w-full"/>
            <div className="self-center md:w-1/2 w-full md:pl-[40px] sm:pl-[0px]">
                <h2 className={'text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl'}>Admin Settings</h2>
                <ul className={'mt-[30px] list-disc text-lg max-w-screen-md mx-auto flex flex-col gap-y-3 pl-[20px]'}>
                    <li>Admin can customize listen button color and highlighted text color</li>
                    <li>Admin can enable this functionality on custom post types</li>
                    <li>Admin can enable/disable floating listen button</li>
                    <li>Admin can set floating button position</li>
                    <li>Admin can render stylist button in blog using `shortcode` with multiple style</li>
                </ul>
            </div>
        </section>
    )
}