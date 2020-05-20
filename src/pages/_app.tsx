import React, { useEffect } from 'react';
import './_app.scss';
import Head from 'next/head';
// import "@fdmg/design-system/main.css";
import '@fdmg/design-system/design-tokens/design-tokens.css';
import '@fdmg/design-system/button/Button.css';
import '@fdmg/design-system/article-meta/ArticleMeta.css';
import '@fdmg/design-system/article-summary/Summary.css';
import '@fdmg/design-system/input/Switch.css';

function App({ Component, pageProps }: any) {
    useEffect(() => {
        document.documentElement.style.backgroundColor = '';
    }, []);

    return (
        <>
            <Head>
                <title>FD Design System Test</title>

                <script
                    dangerouslySetInnerHTML={{
                        __html: `try {
    var query = window.matchMedia("(prefers-color-scheme: dark)");
    var preference = window.localStorage.getItem("theme");
    if (preference) {
        if ((preference === "system" && query.matches) || preference === "dark") {
            document.documentElement.style.backgroundColor = "#191919";
        } else {
            document.documentElement.style.backgroundColor = "#f1ded2";
        }
    }
} catch (e) {}`,
                    }}
                />
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
