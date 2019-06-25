import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BG_COLOR } from '../../constants/Colors';

const Container = styled.View`
    flex: 1;
    background-color: ${BG_COLOR};
`;

const Input = styled.TextInput`
    background-color: white;
    height: 50px;
`;

const SearchPresenter = ({
    loading,
    movieResults,
    tvResults,
    searchTerm,
    handleSearchUpdate
}) => (
    <Container>
        <Input 
            onChangeText={handleSearchUpdate} 
            value={searchTerm} 
            autoFocus 
            returnKeyType={"search"} 
            keyboardType={"number-pad"} 
        />
    </Container>
);

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    handleSearchUpdate: PropTypes.func.isRequired
}

export default SearchPresenter;