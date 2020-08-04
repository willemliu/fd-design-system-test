import React, { useEffect, useState } from 'react';
// import {
//     ArticleMeta,
//     Summary,
//     Button,
//     Switch,
//     VerticalCard3,
//     TextInput,
//     LinkCard,
// } from '@fdmg/design-system';
import { ArticleMeta } from '@fdmg/design-system/components/article-meta/ArticleMeta';
import { ArticleTags } from '@fdmg/design-system/components/article-tags/ArticleTags';
import { AuthorInfo } from '@fdmg/design-system/components/author-info/AuthorInfo';
import { LinkBlock } from '@fdmg/design-system/components/article-link-block/LinkBlock';
import { LinkCard } from '@fdmg/design-system/components/card/LinkCard';
import { Summary } from '@fdmg/design-system/components/article-summary/Summary';
import { Button } from '@fdmg/design-system/components/button/Button';
import { TextInput } from '@fdmg/design-system/components/input/TextInput';
import { Switch } from '@fdmg/design-system/components/input/Switch';
import { VerticalCard3 } from '@fdmg/design-system/components/card/VerticalCard3';
import {
    Experiment,
    Variant,
    ABProvider,
} from '@fdmg/design-system/components/ab/ab';

function Index() {
    const [mode, setMode] = useState('light');
    const [tags, setTags] = useState([
        {
            tag: 'Detailhandel',
            uuid: '1',
        },
        {
            selected: true,
            tag: 'Eten & Drinken',
            uuid: '2',
        },
        {
            alertSelected: true,
            selected: true,
            tag: 'Supermarkt',
            uuid: '3',
        },
    ]);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(mode);
    }, [mode]);

    function handleSwitch() {
        setMode(mode === 'light' ? 'dark' : 'light');
    }

    function handleAuthorInfo(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(e);
    }
    function handleFollow(follow: boolean) {
        setMode(follow ? 'dark' : 'light');
    }

    const onDisableAlertClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return { ...tag, alertSelected: false };
                } else {
                    return tag;
                }
            })
        );
    };

    const onEnableAlertClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return { ...tag, alertSelected: true };
                } else {
                    return tag;
                }
            })
        );
    };

    const onFollowClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return { ...tag, selected: true };
                } else {
                    return tag;
                }
            })
        );
    };

    const onUnfollowClick = (theTag: string) => {
        setTags(
            tags.map((tag: any) => {
                if (tag.tag === theTag) {
                    return {
                        ...tag,
                        selected: false,
                        alertSelected: false,
                    };
                } else {
                    return tag;
                }
            })
        );
    };

    return (
        <section>
            <ArticleMeta authors={[{ fullName: 'Willem L.' }]} />
            <hr />

            <Switch
                id="switchId"
                label="Label of the switch"
                onChange={handleSwitch}
                checked={mode === 'dark'}
            />

            <hr />
            <Summary
                title="In het kort"
                summaries={['Samenvatting 1', 'Samenvatting 2']}
            />
            <hr />

            <Button onClick={handleSwitch}>Test button</Button>

            <hr />

            <TextInput id="textinput" required={true} />

            <hr />

            <LinkBlock
                title="Read more"
                description="Click here to read all about it"
                url="https://fd.nl"
            />

            <hr />

            <LinkCard
                link="/mijn-nieuws"
                title="Beheer"
                linkText="Ga naar laatste nieuws"
            />

            <hr />

            <AuthorInfo
                description={
                    <p>
                        Nelleke Trappenburg schrijft bij het FD over pensioenen:
                        dekkingsgraden, beleggingskosten, nieuwe wetgeving etc.
                        Eerder werkte zij onder meer op de beursredactie.
                    </p>
                }
                imageUrl="https://images.fd.nl/ffa583e0c7fbc666934ecc326a88defc2773f4e9.jpeg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;cs=tinysrgb&amp;w=640&amp;h=640&amp;fm=jpg"
                title="Nelleke Trappenburg"
                followed={mode === 'dark'}
                onEmailClick={handleAuthorInfo}
                onFollowAuthorClick={handleFollow}
                onLinkedInClick={handleAuthorInfo}
                onTwitterClick={handleAuthorInfo}
            />

            <hr />

            <ArticleTags
                onDisableAlertClick={onDisableAlertClick}
                onEnableAlertClick={onEnableAlertClick}
                onFollowClick={onFollowClick}
                onUnfollowClick={onUnfollowClick}
                title="Volgen via mijn nieuws"
                titleLink="https://fd.nl/mijn-nieuws"
                tags={tags}
            />

            <hr />

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
                readingTime={7}
            />

            <hr />

            <ABProvider>
                <Experiment
                    name="Globally-unique-experiment-name"
                    debugUriParam="ABdebug=true"
                    onClick={console.log}
                    onRunExperiment={console.log}
                >
                    <Variant name="A" onClick={console.log}>
                        <h1>Headline 1 (variant A)</h1>
                    </Variant>
                    <Variant name="B" onClick={console.log}>
                        <h1>Headline 2 (variant B)</h1>
                    </Variant>
                </Experiment>
            </ABProvider>
        </section>
    );
}

export default Index;
