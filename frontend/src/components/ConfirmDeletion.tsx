import styled from "styled-components"

const BackDrop = styled.div`
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
z-index: 1000;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(4px);
`
const ModalContent = styled.div`
width: 400px;
padding: 40px;
background-color: white;
border-radius: 12px;
color: #666;
font-size: 24px;
`;
const StyledCancel = styled.button`
padding: 12px;
color: #5a4d4dff;
background: #3cbd5cff;
margin-left: 24px;
`
const StyledConfirm = styled.button`
padding: 12px;
color: #5a4d4dff;
background: #b92828ff;
margin-left: 24px;
`
type PropsNoti = {
    handleDeleteTeam?: () => void;
    onClose: () => void;
    message: string;
}
export const ConfirmDeletion = ({onClose, message,handleDeleteTeam}: PropsNoti) => {
    return (
    <BackDrop>
          <ModalContent>
        {message}
       <StyledConfirm onClick={handleDeleteTeam}>Confirm</StyledConfirm>
       <StyledCancel onClick={onClose}>Cancel</StyledCancel>
    </ModalContent>

    </BackDrop>
  
    )

}