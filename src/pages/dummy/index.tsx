import React from 'react';
import styles from './dummy.module.scss';
import { GetStaticPropsContext, GetStaticProps } from 'next';

function Page(props: any) {
    return (
        <h1 className={styles.dummy}>
            {props?.params ? JSON.stringify(props.params, null, 2) : 'Dummy'}
        </h1>
    );
}

export const getStaticProps: GetStaticProps = async (
    context: GetStaticPropsContext
) => {
    return {
        props: {
            params: context?.params ?? null,
        },
    };
};

export default Page;
