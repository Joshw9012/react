export default function Tabs({buttons, children, ButtonContainer = 'menu'}) {
    // const ButtonContainer = buttonContainer

  return (<>
    <ButtonContainer>{buttons}</ButtonContainer>
    {children}
  </>)
}
