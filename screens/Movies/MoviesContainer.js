import React from 'react';
import MoviesPresenter from './MoviesPresenter';
import { movieApi } from '../../api';

export default class extends React.Component {
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount () {
        let upcoming, popular, nowPlaying, error;
        try {
            ({ data: { results: upcoming }} = await movieApi.getUpcoming());
            ({ data: { results: popular }} = await movieApi.getPopular());
            ({ data: { results: nowPlaying }} = await movieApi.getNowPlaying());
        } catch(error) {
            error = "Can't get Movies.";
        } finally {
            this.setState({
                loading: false,
                error,
                upcoming,
                popular,
                nowPlaying
            });
        }
    }

    render() {
        const { loading, upcoming, popular, nowPlaying } = this.state;
        return (
            <MoviesPresenter 
                loading={loading}
                upcoming={upcoming} 
                popular={popular} 
                nowPlaying={nowPlaying}
            />
        );
    }
}