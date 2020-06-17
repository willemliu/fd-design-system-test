import React, { useEffect } from 'react';
// import { Button } from '@fdmg/design-system';
// import { ArticleMeta } from '@fdmg/design-system/article-meta/ArticleMeta';
// import { Summary } from '@fdmg/design-system/article-summary/Summary';
// import { Switch } from '@fdmg/design-system/input/Switch';
// import { VerticalCard3 } from '@fdmg/design-system/card/VerticalCard3';
import {
    ArticleMeta,
    Summary,
    Button,
    Switch,
    VerticalCard3,
} from '@fdmg/design-system';

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
            <ArticleMeta authors={[{ fullName: 'Willem L.' }]} />

            <Switch
                id="switchId"
                label="Label of the switch"
                onChange={handleSwitch}
            />

            <Summary
                title="In het kort"
                summaries={['Samenvatting 1', 'Samenvatting 2']}
            />

            <Button>Test button</Button>

            <VerticalCard3
                id="1321841"
                url="https://fd.nl/ondernemen/1321841/den-haag-zet-druk-op-pandeigenaren-om-huurverlaging-winkeliers-te-slikken"
                imageUrl="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315"
                imageUrlS="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0018761726078799%2c.9999999999999999%2c.99812382739212&fit=crop&crop=faces&auto=format&q=45&w=560&h=315"
                imageUrlM="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531"
                imageUrlL="https://fd-external-development.imgix.net/b2ee977d67c3a1b815ed2855a5ae02f2357e6062.jpg?rect=.0%2c.0637898686679174%2c.9999999999999999%2c.8442776735459663&fit=crop&crop=faces&auto=format&q=45&w=944&h=531"
                label="Detailhandel"
                title="Den Haag zet druk op verhuurders om huurverlaging te slikken"
                intro="Het Rijk sluit overheidsingrijpen niet uit om een akkoord tussen verhuurders en winkeliers af te dwingen, nu onderhandelingen moeizaam verlopen."
            />
        </section>
    );
}

export default Index;
