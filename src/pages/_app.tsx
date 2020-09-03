import React, { useEffect } from 'react';
import './_app.scss';
import Head from 'next/head';
// import '@fdmg/design-system/main.css';

import '@fdmg/design-system/components/design-tokens/design-tokens.css';
import '@fdmg/design-system/components/ab/ab.css';
import '@fdmg/design-system/components/button/Button.css';
import '@fdmg/design-system/components/article-link-block/LinkBlock.css';
import '@fdmg/design-system/components/article-meta/ArticleMeta.css';
import '@fdmg/design-system/components/article-tags/ArticleTags.css';
import '@fdmg/design-system/components/article-summary/Summary.css';
import '@fdmg/design-system/components/author-info/AuthorInfo.css';
import '@fdmg/design-system/components/input/TextInput.css';
import '@fdmg/design-system/components/input/Switch.css';
import '@fdmg/design-system/components/card/LinkCard.css';
import '@fdmg/design-system/components/card/HorizontalCard1.css';
import '@fdmg/design-system/components/card/VerticalCard3.css';
import '@fdmg/design-system/components/modal/Modal.css';
import '@fdmg/design-system/components/cookieconsent/CookieConsent.css';

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
