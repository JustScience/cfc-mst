import React from 'react'
import styled from "styled-components"

const FullscreenWrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    height: 100vh;
    width: 100%;
`
export default function Fullscreen({children}) {
    return (
        <FullscreenWrap>
            {children}
        </FullscreenWrap>
    )
}
