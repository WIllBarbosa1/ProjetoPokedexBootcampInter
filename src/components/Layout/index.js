/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import * as S from './styles';

function Layout({ children }) {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    );
}

export default Layout;
