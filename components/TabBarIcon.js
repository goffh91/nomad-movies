import React from 'react';
import propTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../constants/Colors';

const TabBarIcon = ({name, focused}) => <Ionicons size={26} name={name} color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}/>

TabBarIcon.propTypes = {
    name: propTypes.string.isRequired,
    focused: propTypes.bool.isRequired
};

export default TabBarIcon;