import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import { BG_COLOR, TINT_COLOR } from '../../constants/Colors';
import Layout from '../../constants/Layout';
import makePhotoUrl from '../../utils/makePhotoUrl';
import MoviePoster from '../../components/MoviePoster';
import MovieRating from '../../components/MovieRating';
import Loader from '../../components/Loader';

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;

const Header = styled.View`
    position: relative;
    justify-content: center;
`;

const BgImage = styled.Image`
    width: ${Layout.width};
    height: ${Layout.height / 3.5};
    position: absolute;
    top: 0;
`;

const Content = styled.View`
    flex-direction: row;
    align-items: flex-end;
    padding-horizontal: 20px;
    height: ${Layout.height / 3.5};
`;

const Column = styled.View`
    margin-left: 30px;
`;

const Title = styled.Text`
    color: ${TINT_COLOR};
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    width: 80%;
`;

const MainContent = styled.View`
    padding-horizontal: 20px;
    margin-top: 25px;
`;

const ContentTitle = styled.Text`
    color: ${TINT_COLOR};
    font-weight: 600;
    margin-bottom: 10px;
`;

const ContentValue = styled.Text`
    width: 80%;
    color: ${TINT_COLOR};
    font-size: 12px;
    margin-bottom: 10px;
`;

const DataContainer = styled.View`
    margin-bottom: 10px;
`;

const Genres = styled.Text`
    color: ${TINT_COLOR};
    font-size: 12px;
    margin-top: 10px;
    width: 95%;
`;

const DetailPreventer = ({
    id, isMovie, posterPhoto, backgroundPhoto, 
    title, genres, voteAvg, overview, date, status, loading
}) => {
    return (
        <Container>
            <Header>
                <BgImage source={{ uri: makePhotoUrl(backgroundPhoto) }} />
                <LinearGradient 
                    colors={['transparent', BG_COLOR]} 
                    start={Platform.select({ ios: [0, 0] })}
                    end={Platform.select({ ios: [0, 0.5], android: [0, 0.9] })}
                >
                    <Content>
                        <MoviePoster path={posterPhoto} />
                        <Column>
                            <Title>{title}</Title>
                            <MovieRating votes={voteAvg} inSlide={true} />
                            {genres ? (
                                <Genres>
                                {genres.map((genre, index) => 
                                    index === genres.length - 1 ? 
                                        genre.name : `${genre.name} / `)}
                                </Genres>
                            ) : null }
                        </Column>
                    </Content>
                </LinearGradient>
            </Header>
            <MainContent>
                <DataContainer>
                    {overview ? (
                        <>
                            <ContentTitle>OverView</ContentTitle>
                            <ContentValue>{overview}</ContentValue>
                        </>
                    ) : null}
                </DataContainer>
                <DataContainer>
                    {status ? (
                        <>
                            <ContentTitle>Status</ContentTitle>
                            <ContentValue>{status}</ContentValue>
                        </>
                    ) : null}
                </DataContainer>
                <DataContainer>
                    {date ? (
                        <>
                            <ContentTitle>{isMovie ? "Release Date" : "First Episode"}</ContentTitle>
                            <ContentValue>{date}</ContentValue>
                        </>
                    ) : null}
                </DataContainer>
                {loading ? <Loader /> : null}
            </MainContent>
        </Container>
    );
}

DetailPreventer.propTypes = {
    id: PropTypes.number.isRequired,
    isMovie: PropTypes.bool.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array,
    voteAvg: PropTypes.number,
    overview: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPreventer;