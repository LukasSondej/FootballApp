import styled from "styled-components"

import { ListPlayers } from "./features/players/ListPlayers"
import { AddPlayer } from "./features/players/AddPlayer"

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