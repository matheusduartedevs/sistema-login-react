import React from 'react'
import Button from '../../components/Button/Button'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import * as C from './styles'

const Home = () => {
  const { signout } = useAuth()
  const navigate = useNavigate()

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text='Sair' onClick={() => [signout(), navigate('/')]} >
        Sair
      </Button>
    </C.Container>
  )
}

export default Home