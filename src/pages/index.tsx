import React, { useEffect } from 'react';
// import { ArticleMeta, Summary, Switch } from "@fdmg/design-system";
import { ArticleMeta } from '@fdmg/design-system/article-meta/ArticleMeta';
import { Summary } from '@fdmg/design-system/article-summary/Summary';
import { Switch } from '@fdmg/design-system/input/Switch';

function Index() {
    useEffect(() => {
        document.documentElement.classList.add('light');
    }, []);

    function handleSwitch(e: React.ChangeEvent<HTMLInputElement>) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add(
            e.currentTarget.checked ? 'dark' : 'light'
        );
    }

    return (
        <section>
            <ArticleMeta authors={['Willem L.']} />

            <Switch
                id="switchId"
                label="Label of the switch"
                onChange={handleSwitch}
            />

            <Summary
                title="In het kort"
                summaries={['Samenvatting 1', 'Samenvatting 2']}
            />
        </section>
    );
}

export default Index;
