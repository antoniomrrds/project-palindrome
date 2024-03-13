// pages/palindrome.tsx
import React, { useState } from 'react'
import Head from 'next/head'
import {
  Container,
  Title,
  InputContainer,
  InputLabel,
  Input,
  Button
} from '@/containers/PalindromePage/styled'
import PalindromeList from '@/components/palindrome-list'

const PalindromePage: React.FC = () => {
  const [start, setStart] = useState<string>('')
  const [end, setEnd] = useState<string>('')
  const [palindromes, setPalindromes] = useState<number[]>([])

  const findPalindromes = () => {
    const startNum = parseInt(start, 10)
    const endNum = parseInt(end, 10)

    if (isNaN(startNum) || isNaN(endNum)) {
      alert('Por favor, insira números válidos.')
      return
    }

    const palindromeList = []
    for (let i = startNum; i <= endNum; i++) {
      if (isPalindrome(i)) {
        palindromeList.push(i)
      }
    }

    setPalindromes(palindromeList)
  }

  const isPalindrome = (number: number): boolean => {
    const strNumber = String(number)
    return strNumber === strNumber.split('').reverse().join('')
  }

  return (
    <Container>
      <Head>
        <title>Verificador de Palíndromos</title>
      </Head>
      <Title>Verificador de Palíndromos</Title>
      <InputContainer>
        <InputLabel>
          Início do intervalo:
          <Input
            type="text"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </InputLabel>
        <InputLabel>
          Fim do intervalo:
          <Input
            type="text"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </InputLabel>
      </InputContainer>
      <Button onClick={findPalindromes}>Encontrar Palíndromos</Button>
      {palindromes.length > 0 && <PalindromeList palindromes={palindromes} />}
    </Container>
  )
}

export default PalindromePage
