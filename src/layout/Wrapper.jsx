import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width:50%;
    min-width:800px;
    margin: 0 auto;
`
function wrapper({children}){
    return <Wrapper>{children}</Wrapper>    
}

export default wrapper;