import Script from "next/script";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (<>
        {
            process.env.ENABLE_IN_CONTEXT_TRANSLATIONS === 'true' ? (
                <>
                    <Script id="tms">
                        {
                            `var _jipt = [];
                             _jipt.push(['project', 'tms-next-intl-crowdin' ])`
                        }
                    </Script>
                    <Script src="//cdn.crowdin.com/jipt/jipt.js" />
                </>
            ) : null
        }
        {children}
    </>);
}