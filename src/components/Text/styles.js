/* eslint-disable linebreak-style */
// /* eslint-disable no-undef */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import styled, { css } from 'styled-components';

export const Title = styled.p`
    
    ${({ as }) => css`

        ${as === 'h1' && css`
            font-size: 42px;
            color: black;
        `}

    `}

`;
