import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviePoster from './MoviePoster';
import MovieRating from './MovieRating';

const Container = styled.View`
    align-items: center;
    margin-right: 20px;
`;

const Title = styled.Text`
    color: white;
    font-size: 12px;
`;

const MovieItem = ({ id, posterPhoto, title, voteAvg }) => {
    return (
        <Container>
            <MoviePoster path={posterPhoto} />
            <Title>{title.length > 13 ? `${title.substring(0, 10)}...` : title}</Title>
            <MovieRating votes={voteAvg} />
        </Container>
    );
}

MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.number.isRequired
}

export default MovieItem;