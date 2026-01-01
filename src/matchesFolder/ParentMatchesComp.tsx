import { useState } from "react"
import { AddMatch } from "./AddMatch"
import { ListMatches } from "./ListMatches"
import styled from "styled-components"

export const ParentMatchesComp = () => {
const StyledDiv = styled.div`
    display: flex;
    gap: 20px; 
    align-items: flex-start;
`
    const [isAdding, setIsAdding] = useState(false)
    
    const handleVisible = () => {
setIsAdding(prev => !prev);
    }

    
    return(
        <StyledDiv>
             <ListMatches/> 
       {!isAdding && <button type="button" onClick={handleVisible}>{"Add Match" }</button>}
{isAdding && <AddMatch handleVisible={handleVisible}/>}
        </StyledDiv>
  
     
        
       
      
    )
  
}