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
const StyledOk = styled.button`
padding: 12px;
color: #4f918b;
background: #4f53b1;
margin-left: 24px;
`
type PropsNoti = {
    onClose: () => void;
    message: string;
}
export const Notification = ({onClose, message}: PropsNoti) => {
    return (
    <BackDrop>
          <ModalContent>
        {message}
       <StyledOk onClick={onClose}>OK</StyledOk>
    </ModalContent>

    </BackDrop>
  
    )

}