import styled from "styled-components"

import { ListPlayers } from "./playerFolder/ListPlayers"
import { AddPlayer } from "./playerFolder/AddPlayer"

const StyledDiv = styled.div`
display: flex;

`
export const ParentPlayerComp = () => {
    return (
        <StyledDiv>
          <ListPlayers/>
          <AddPlayer/>
        </StyledDiv>
    )
}