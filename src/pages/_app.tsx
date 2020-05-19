import "./_app.scss";
// import "@fdmg/design-system/main.css";
import "@fdmg/design-system/design-tokens/design-tokens.css";
import "@fdmg/design-system/article-meta/ArticleMeta.css";
import "@fdmg/design-system/article-summary/Summary.css";
import "@fdmg/design-system/input/Switch.css";

function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

// Will be called once for every metric that has to be reported.
export function reportWebVitals(metric: any) {
    // These metrics can be sent to any analytics service
    console.table(metric);
}

export default App;
