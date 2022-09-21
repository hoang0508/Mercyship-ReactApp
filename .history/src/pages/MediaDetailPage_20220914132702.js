import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MediaDetailContent from '../modules/media/MediaDetailContent';


const MediaDetailPage = () => {
    let { id } = useParams();
    console.log(id)
    return (
        <Layout isTabMediaDetail>
            <MediaDetailContent></MediaDetailContent>
        </Layout>
    );
};

export default MediaDetailPage;