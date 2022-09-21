import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import Bottom2 from '../components/layout/Bottom/Bottom2';
import BottomMediaDetail from '../components/layout/Bottom/BottomMediaDetail';
import Layout from '../components/layout/Layout';
import { getDataMercy } from '../graphql-client/queries';
import MediaDetailContent from '../modules/media/MediaDetailContent';


const MediaDetailPage = () => {
    let { id } = useParams();
    const { loading, data, error} = useQuery(getDataMercy,{
        variables:{
            where:{
                id: Number(id),
            },
        },
    });
    
    return (
        <Layout isTabMediaDetail>
            <MediaDetailContent dataMediaContent={data}></MediaDetailContent>
            <Bottom2 ></Bottom2>
        </Layout>
    );
};

export default MediaDetailPage;