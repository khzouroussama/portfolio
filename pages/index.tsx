import tw from 'twin.macro'
import { Button, Logo } from '../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-primary to-secondery`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: false })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <h1 tw="text-9xl font-bold">Hi i am khezour mohamed oussama</h1>
    </div>
    <Logo />
  </div>
)

export default App
