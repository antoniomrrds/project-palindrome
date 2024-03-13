import {
  List,
  ListContainer,
  ListItem,
  Title
} from '@/components/palindrome-list/styled'

type Props = {
  palindromes: number[]
}
const PalindromeList = ({ palindromes }: Props) => {
  return (
    <ListContainer>
      <Title>Números Palíndromos</Title>
      <List>
        {palindromes.map((palindrome, index) => (
          <ListItem key={index}>{palindrome}</ListItem>
        ))}
      </List>
    </ListContainer>
  )
}
export default PalindromeList
