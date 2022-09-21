import React from 'react';
import Layout from '../components/layout/Layout';
import TabCategory from '../components/layout/Tab/TabCategory';
import TabMediaDetail from '../components/layout/Tab/TabMediaDetail';

const MediaDetailPage = () => {
    return (
        <Layout>
            <TabMediaDetail></TabMediaDetail>
        </Layout>
    );
};

export default MediaDetailPage;