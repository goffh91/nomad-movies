import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';
import { GREY_COLOR } from '../constants/Colors';
import { TouchableWithoutFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: white;
    font-size: ${props => (!props.big ? "12px" : "14px")};
`;

const HContainer = styled.View`
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
`;

const Column = styled.View`
    margin-left: 20px;
    width: 60%;
`;

const Overview = styled.Text`
    color: ${GREY_COLOR};
    font-size: 12px;
    margin-vertical: 10px;
`;

const MovieItem = ({
    id, posterPhoto, title, voteAvg, 
    overview, horizontal=false, isMovie=true, navigation
}) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate({
            routeName: "Detail", 
            params: {
                isMovie, id, 
                posterPhoto, title, 
                voteAvg, overview, 
                backgroundPhoto: null
            }
        })}>
        {horizontal ? (
        <HContainer>
            <MoviePoster path={posterPhoto} />
            <Column>
                <Title big={true}>{title}</Title>
                <MovieRating votes={voteAvg} />
                {overview ? (
                    <Overview>
                    {overview.length > 150
                        ? `${overview.substring(0, 147)}...` 
                        : overview}
                    </Overview>
                ) : null}
            </Column>
        </HContainer>
    ) : (
        <Container>
            <MoviePoster path={posterPhoto} />
            <Title>{title.length > 13 ? `${title.substring(0, 10)}...` : title}</Title>
            <MovieRating votes={voteAvg} />
        </Container>
    )}
    </TouchableWithoutFeedback>
    )
}

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired,
    overview: PropTypes.string,
    isMovie: PropTypes.bool
}

export default withNavigation(MovieItem);