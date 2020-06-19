import React from 'react';

export default function Page() {
    return (
        <>
            <h1>About</h1>
            <p>
                This repo tests the integration with the{' '}
                <a href="https://fd-design-system.now.sh">FD Design System</a>.
            </p>
            <p>
                Besides that this repo is also build and deployed using Github
                Actions.
            </p>
            <p>This repo is deployed to the following locations:</p>
            <ul>
                <li>
                    <a href="https://fd-design-system-test.azurewebsites.net">
                        Azure App Service (free-tier)
                    </a>
                </li>
                <li>
                    <a href="https://fd-design-system-test.willim.nl">
                        Azure Static Web App (preview)
                    </a>
                </li>
            </ul>
        </>
    );
}
