import { FC } from 'react';
import styled from '@emotion/styled/macro';
import colors from 'styles/colors';

const StyledDiv = styled.div({
    border: `1px solid ${colors.lightAlto}`,
    borderRadius: 10,
    padding: '30px 45px'
});

const Well: FC = ({ children }) => {
    return (
        <StyledDiv>
            { children }
        </StyledDiv>
    )
};

export default Well;
