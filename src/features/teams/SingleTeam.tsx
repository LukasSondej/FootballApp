import styled from "styled-components"
import type { Team } from "../../types"

type PropsTeam =  {
    team: Team
   
 setIdEditTeam: (id: string) => void;

}
const StyledTeam = styled.p`
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.textPrimary};
`
const StyledDiv = styled.div`
    display: flex;           
    justify-content: center; 
    align-items: center;      
    gap: 40px;                
`
export const SingleTeam = ({team ,setIdEditTeam}: PropsTeam) => {
return (
    <StyledDiv>
    <StyledTeam>
       {team.name} 
    
       
    </StyledTeam>
    <button type="button" onClick={() => setIdEditTeam(team.id)} >EDIT</button>
  
    </StyledDiv>

    
)
}