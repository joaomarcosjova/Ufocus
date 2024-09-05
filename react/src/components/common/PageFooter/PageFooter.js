import React from 'react'
import styled from 'styled-components'
import DarkModeButton from './../DarkModeButton/DarkModeButton'
import { AiOutlineCode } from 'react-icons/ai'
import { FaCode } from 'react-icons/fa'

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`
const Credits = styled.div``

const Options = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Text = styled.p`
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  place-items: center;
  gap: var(--default-grid-gap);

  & > a {
    color: inherit;
    text-decoration: none;
    font-weight: bold;
  }

  & > a:hover{
    color: var(--color-secondary);
  }
`

const PageFooter = () => {
  return (
    <Footer>
      <Credits>
        <Text><AiOutlineCode />Developed by <a href="https://marcosjova.netlify.app/" target='blank'>Marcos Jova</a> </Text>
        {/* <Text><AiOutlineCode />A product of <a href="https://kadoshsoftwares.com" target='blank'>Kadosh Softwares</a> </Text> */}
        <Text><FaCode />A product of <a href="https://kadoshsoftwares.com" target='blank'>Kadosh Softwares</a></Text>
        {/* <Text><FaCode />Source code on <a href="https://github.com/arixpsy/wasd" target='blank'>Github</a></Text> */}
      </Credits>
      <Options>
        <DarkModeButton />
      </Options>
    </Footer>
  )
}

export default PageFooter