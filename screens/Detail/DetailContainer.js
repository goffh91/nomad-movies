import React from 'react';
import DetailPresenter from './DetailPreventer';
import { movieApi, tvApi } from '../../api';

export default class extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        };
    };

    constructor(props) {
        super(props);
        const {
            navigation: {
                state: {
                    params: {
                        id, isMovie, 
                        posterPhoto, backgroundPhoto, 
                        title, voteAvg, overview
                    }
                }
            }
        } = props;
        this.state = {
            id, isMovie, 
            posterPhoto, backgroundPhoto, 
            title, voteAvg, overview, 
            loading: true
        }
    }

    async componentDidMount() {
        const { isMovie, id } = this.state;
        let error, genres, overview, status, date, backgroundPhoto;
        try {
            if (isMovie) {
                ({
                    data: {
                        genres, overview, release_date: date, 
                        status, backdrop_path: backgroundPhoto
                    }
                } = await movieApi.getMovie(id));
            } else {
                ({
                    data: {
                        genres, overview, first_air_date: date, 
                        status, backdrop_path: backgroundPhoto
                    }
                } = await tvApi.getShow(id));
            }
        } catch {

        } finally {
            this.setState({
                genres, overview, status, date, 
                backgroundPhoto, loading: false
            });
        }
    }

    render() {
        const {
            id, isMovie, posterPhoto, backgroundPhoto, 
            title, genres, voteAvg, overview, date, status, loading
        } = this.state;
        return (
            <DetailPresenter 
                id={id} 
                isMovie={isMovie} 
                posterPhoto={posterPhoto} 
                backgroundPhoto={backgroundPhoto} 
                title={title} 
                genres={genres} 
                voteAvg={voteAvg} 
                overview={overview} 
                date={date} 
                status={status} 
                loading={loading}
            />
        ); 
    }
}