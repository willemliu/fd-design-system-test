import Page, { getStaticProps } from './index';
import { GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { params: ['index'] } }],
        fallback: true,
    };
};

export { getStaticProps };

export default Page;
