import React, { useEffect, useState, useCallback } from 'react';
// import {
//     ArticleMeta,
//     Summary,
//     Button,
//     Switch,
//     VerticalCard3,
//     TextInput,
//     LinkCard,
// } from '@fdmg/design-system';
import { Menu } from '@fdmg/design-system/components/menu/Menu';
import { ArticleMeta } from '@fdmg/design-system/components/article-meta/ArticleMeta';
import { ArticleTags } from '@fdmg/design-system/components/article-tags/ArticleTags';
import { AuthorInfo } from '@fdmg/design-system/components/author-info/AuthorInfo';
import { Button } from '@fdmg/design-system/components/button/Button';
import { ButtonCta } from '@fdmg/design-system/components/button/ButtonCta';
import { ButtonGhost } from '@fdmg/design-system/components/button/ButtonGhost';
import { LinkBlock } from '@fdmg/design-system/components/article-link-block/LinkBlock';
import { LinkCard } from '@fdmg/design-system/components/card/LinkCard';
import { Modal } from '@fdmg/design-system/components/modal/Modal';
import { Summary } from '@fdmg/design-system/components/article-summary/Summary';
import { TextArea } from '@fdmg/design-system/components/input/TextArea';
import { TextInput } from '@fdmg/design-system/components/input/TextInput';
import { Select } from '@fdmg/design-system/components/input/Select';
import { Switch } from '@fdmg/design-system/components/input/Switch';
import { HorizontalCard1 } from '@fdmg/design-system/components/card/HorizontalCard1';
import { VerticalCard3 } from '@fdmg/design-system/components/card/VerticalCard3';
import { VerticalToolbar } from '@fdmg/design-system/components/toolbar/VerticalToolbar';
import { HorizontalToolbar } from '@fdmg/design-system/components/toolbar/HorizontalToolbar';
import {
    Experiment,
    Variant,
    ABProvider,
} from '@fdmg/design-system/components/ab/ab';
import {
    CookieConsent,
    LockedContent,
    CookieConsentStore,
    CookieConsentApi,
} from '@fdmg/design-system/components/cookieconsent/CookieConsent';
import Head from 'next/head';

const cookieConsentApi = new CookieConsentApi();

function Index() {
    const [cookieConsentOpened, setCookieConsentOpened] = useState(false);
    const [opened, setOpened] = useState(false);
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
        const subscriptionId = CookieConsentStore.subscribe(() => {
            console.table(CookieConsentStore.getVendorNames());
        });

        cookieConsentApi.init({ hostname: 'design-system.fd.nl' }).then(() => {
            cookieConsentApi.get().then((event) => {
                if (!event?.data?.consents) {
                    setCookieConsentOpened(true);
                }
                CookieConsentStore.setVendorNames(event?.data?.consents || []);
            });
        });

        return () => {
            CookieConsentStore.unsubscribe(subscriptionId);
        };
    }, []);

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(mode);
    }, [mode]);

    const handleCookieConsentToggle = useCallback(() => {
        setCookieConsentOpened(!cookieConsentOpened);
    }, [cookieConsentOpened]);

    const handleCookieConsentClose = useCallback(() => {
        setCookieConsentOpened(false);
    }, [cookieConsentOpened]);

    const handleModalToggle = useCallback(() => {
        setOpened(!opened);
    }, [opened]);

    const handleModalClose = useCallback(() => {
        setOpened(false);
    }, [opened]);

    const handleSwitch = useCallback(() => {
        setMode(mode === 'light' ? 'dark' : 'light');
    }, [mode]);

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
            <Head>
                <meta name="robots" content="noindex" />
            </Head>

            <Menu
                ariaLabel="Test menu"
                moreLabel="More"
                menuItems={[
                    {
                        text: 'menu item 1',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'menu item 1.1',
                                href: '/',
                            },
                        ],
                    },
                    {
                        text: 'menu item 2',
                        isToggle: true,
                        menuItems: [
                            {
                                text: 'menu item 2.1',
                                href: '/',
                            },
                            {
                                text: 'menu item 2.2',
                                isToggle: true,
                                menuItems: [
                                    {
                                        text: 'menu item 2.2.1',
                                        href: '/',
                                    },
                                    {
                                        text: 'menu item 2.2.2',
                                        href: '/',
                                    },
                                ],
                            },
                        ],
                    },
                ]}
            />
            <hr />

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

            <ButtonCta onClick={handleSwitch}>Test button</ButtonCta>

            <hr />

            <ButtonGhost onClick={handleSwitch}>Test button</ButtonGhost>

            <hr />

            <TextInput id="textinput" required={true} />

            <hr />

            <TextArea id="textarea" required={true} />

            <hr />

            <Select id="select" label="Geslacht" required={true}>
                <option value="">-- geslacht --</option>
                <option value="m">Man</option>
                <option value="v">Vrouw</option>
                <option value="non-binary">Non-binary</option>
            </Select>

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

            <HorizontalCard1
                id="1343811"
                url="https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58"
                imageUrl="https://images.fd.nl/C_yJRp_QqzybEdlK4D6SibEUxiA.jpg?rect=.0,.0,.73375,.9999999999999999&fit=crop&crop=faces&auto=format&q=45&w=300"
                label="Energie"
                time="08:10"
                title="Omzet Alfen stijgt in eerste coronakwartaal met 58%"
            />

            <hr />

            <HorizontalCard1
                id="1343811"
                url="https://fd.nl/ondernemen/1343811/omzet-alfen-in-eerste-coronakwartaal-58"
                label="Energie"
                time="08:10"
                title="Omzet Alfen stijgt in eerste coronakwartaal met 58%"
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
            />

            <hr />

            <VerticalToolbar id="12345" onClick={console.log} />

            <hr />

            <HorizontalToolbar id="12345" onClick={console.log} />

            <hr />

            <Switch
                id="modalSwitch"
                label={opened ? 'Hide modal' : 'Show modal'}
                onChange={handleModalToggle}
                checked={opened}
            />

            <Modal opened={opened} onClose={handleModalClose}>
                <>
                    <h2>Abonnement wijzigen of opzeggen</h2>
                    <p>
                        Voor wijzigingen kunt u elk moment bellen. Voor opzeggen
                        geeft u dit uiterlijk 1 maand voor het einde van de
                        abonnements- of actieperiode telefonisch door aan
                        Klantenservice
                    </p>
                    <p>
                        <a href="tel:0800 666 6667">0800 666 6667</a> (gratis,
                        ma t/m vr 07.30 - 18.00 uur en za 07.30 - 11.30 uur).
                    </p>
                    <p>
                        Ook kijken we graag samen met u naar een abonnementsvorm
                        die wellicht beter bij u past.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla
                        vel, aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer tincidunt.
                        Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in, viverra quis, feugiat a, tellus.
                        Phasellus viverra nulla ut metus varius laoreet. Quisque
                        rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                        augue. Curabitur ullamcorper ultricies nisi. Nam eget
                        dui.
                    </p>
                    <p>
                        Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                        rhoncus, sem quam semper libero, sit amet adipiscing sem
                        neque sed ipsum. Nam quam nunc, blandit vel, luctus
                        pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                        tincidunt tempus. Donec vitae sapien ut libero venenatis
                        faucibus. Nullam quis ante. Etiam sit amet orci eget
                        eros faucibus tincidunt. Duis leo. Sed fringilla mauris
                        sit amet nibh. Donec sodales sagittis magna. Sed
                        consequat, leo eget bibendum sodales, augue velit cursus
                        nunc, quis gravida magna mi a libero. Fusce vulputate
                        eleifend sapien. Vestibulum purus quam, scelerisque ut,
                        mollis sed, nonummy id, metus. Nullam accumsan lorem in
                        dui. Cras ultricies mi eu turpis hendrerit fringilla.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; In ac dui quis mi
                        consectetuer lacinia.
                    </p>
                </>
            </Modal>

            <hr />

            <Switch
                id="cookieConsentSwitch"
                label={
                    cookieConsentOpened ? 'Hide cookiewall' : 'Show cookiewall'
                }
                onChange={handleCookieConsentToggle}
                checked={cookieConsentOpened}
            />

            <CookieConsent
                onAcceptAll={() => console.log('accept all')}
                onDenyAll={() => console.log('deny all')}
                description={
                    <>
                        <p>
                            FD Mediagroep (FDMG) en de daarbij horende website:
                            FD.nl en door haar geselecteerde Partners hebben
                            toegang tot uw gegevens en gebruiken deze informatie
                            voor de onderstaande doeleinden. Klik op een doel om
                            uw voorkeuren aan te passen en om meer te weten te
                            komen over wie er om uw toestemming vraagt en/of
                            rechtmatig belang claimt om uw gegevens voor dat
                            doel te verwerken. Houd er rekening mee dat wanneer
                            alle doeleinden zijn geweigerd, dit een negatief
                            effect op bepaalde functies van de website kan
                            hebben.
                        </p>
                        <p>
                            Voor sommige doeleinden kunnen jouw persoonsgegevens
                            worden verwerkt op de juridische grond van
                            rechtmatig belang
                        </p>
                    </>
                }
                title={<h1>Cookies</h1>}
                opened={cookieConsentOpened}
                onClose={handleCookieConsentClose}
            />

            <LockedContent
                vendorName="youtube"
                lockDescription={
                    <p>
                        In verband met de door u gekozen cookievoorkeuren kunnen
                        wij deze Youtube-video niet tonen. Klik hier om akkoord
                        te gaan met de cookievoorkeuren die nodig zijn om deze
                        Youtube-video te laden.
                    </p>
                }
            >
                <div className="embed-container">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/T_tN4CnushY"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </LockedContent>

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
