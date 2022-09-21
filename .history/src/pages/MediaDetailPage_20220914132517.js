import React from 'react';
import Layout from '../components/layout/Layout';
import MediaDetailContent from '../modules/media/MediaDetailContent';


const MediaDetailPage = () => {
    return (
        <Layout isTabDetail>
            <MediaDetailContent></MediaDetailContent>
        </Layout>
    );
};

export default MediaDetailPage;