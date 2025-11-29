import styled from "styled-components"
import type { Team } from "../types"

type PropsTeam =  {
    team: Team
}
const StyledTeam = styled.p`
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.textPrimary}
`

export const SingleTeam = ({team}: PropsTeam) => {
return (
    
    <StyledTeam>
       {team.name} 
    
       
    </StyledTeam>
    
)
}