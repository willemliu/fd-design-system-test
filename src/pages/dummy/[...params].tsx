import Page, { getStaticProps } from './index';
import { GetStaticPaths } from 'next';

export function getStaticPaths(): GetStaticPaths {
    return {
        paths: [{ params: { params: ['index'] } }],
        fallback: true,
    };
}

export { getStaticProps };

export default Page;
