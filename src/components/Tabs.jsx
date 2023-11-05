export default function Tabs({buttons, children, ButtonContainer}) {
    // const ButtonContainer = buttonContainer

  return (<>
    <ButtonContainer>{buttons}</ButtonContainer>
    {children}
  </>)
}
