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
        try {
            const upcoming = await movieApi.getUpcoming();
            const popular = await movieApi.getPopular();
            const nowPlaying = await movieApi.getNowPlaying();
            console.log( upcoming, popular, nowPlaying);
        } catch(error) {
            console.log(error);
            this.setState({ error: "Can't get Movies." });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { loading } = this.state;
        return (
            <MoviesPresenter loading={loading}/>
        );
    }
}