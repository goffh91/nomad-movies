import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../components/Loader';
import styled from 'styled-components';
import { BG_COLOR } from '../../constants/Colors';
import Section from '../../components/Section';
import MovieItem from '../../components/MovieItem';

const Container = styled.ScrollView`
    background-color: ${BG_COLOR};
`;

const TVPresenter = ({ loading, popular, topRated, airingToday }) => {
    return (
        loading ? <Loader /> : (
            <Container>
                {topRated ? 
                (
                    <Section title="Top Rated">
                        {topRated
                            .filter(tv => tv.poster_path !== null)
                            .map(tv => (
                                <MovieItem 
                                    key={tv.id} 
                                    id={tv.id} 
                                    posterPhoto={tv.poster_path} 
                                    title={tv.name} 
                                    voteAvg={tv.vote_average} 
                                    isMovie={false} 
                                />
                            )
                        )}
                    </Section>
                ) : null}
                {airingToday ? 
                (
                    <Section title="Airing Today">
                        {airingToday
                            .filter(tv => tv.poster_path !== null)
                            .map(tv => (
                                <MovieItem 
                                    key={tv.id} 
                                    id={tv.id} 
                                    posterPhoto={tv.poster_path} 
                                    title={tv.name} 
                                    voteAvg={tv.vote_average} 
                                    isMovie={false} 
                                />
                            )
                        )}
                    </Section>
                ) : null}
                {popular ? 
                (
                    <Section title="Popular" horizontal={false}>
                        {popular
                            .filter(tv => tv.poster_path !== null)
                            .map(tv => (
                                <MovieItem 
                                    horizontal={true}
                                    key={tv.id} 
                                    id={tv.id} 
                                    posterPhoto={tv.poster_path} 
                                    title={tv.name} 
                                    voteAvg={tv.vote_average} 
                                    isMovie={false} 
                                />
                            )
                        )}
                    </Section>
                ) : null}
            </Container>
        )
    );
};

TVPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    popular: PropTypes.array,
    topRated: PropTypes.array,
    airingToday: PropTypes.array
};

export default TVPresenter;