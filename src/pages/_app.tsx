import React, { useEffect } from 'react';
import './_app.scss';
import Head from 'next/head';
import '@fdmg/design-system/main.css';

// import '@fdmg/design-system/design-tokens/design-tokens.css';
// import '@fdmg/design-system/button/Button.css';
// import '@fdmg/design-system/article-meta/ArticleMeta.css';
// import '@fdmg/design-system/article-summary/Summary.css';
// import '@fdmg/design-system/input/Switch.css';
// import '@fdmg/design-system/card/VerticalCard3.css';

declare let process: any;

function App({ Component, pageProps }: any) {
    useEffect(() => {
        document.documentElement.style.backgroundColor = '';
    }, []);

    return (
        <>
            <Head>
                <title>
                    FD Design System Test | {process.env.ENVIRONMENT_DEV}
                </title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric: any) {
    // These metrics can be sent to any analytics service
    console.table(metric);
}

export default App;
