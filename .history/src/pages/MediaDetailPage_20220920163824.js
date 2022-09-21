import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import BottomMediaDetail from '../components/layout/Bottom/BottomMediaDetail';
import Layout from '../components/layout/Layout';
import { getDataMercy } from '../graphql-client/queries';
import MediaDetailContent from '../modules/media/MediaDetailContent';
import MyFavoritesContent from '../modules/media/MyFavoritesContent';


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
            <MyFavoritesContent dataMediaContent={data}></MyFavoritesContent>
            <BottomMediaDetail dataItemB={data}></BottomMediaDetail>
        </Layout>
    );
};

export default MediaDetailPage;