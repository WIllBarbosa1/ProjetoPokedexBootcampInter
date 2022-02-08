/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React from 'react';
import * as S from './styles';

function Text({ children, as }) {
    return (
        <S.Title as={as}>
            {children}
        </S.Title>
    );
}

export default Text;
