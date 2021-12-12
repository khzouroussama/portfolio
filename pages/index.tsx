import tw from 'twin.macro'
import { Button, Logo } from '../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center min-h-full relative">
      <div tw="relative w-full max-w-lg overflow-hidden">
        <div tw="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full opacity-50 mix-blend-multiply blur-3xl animate-blob"></div>
        <div tw="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full opacity-50 mix-blend-multiply blur-3xl animate-blob delay-[2000s]"></div>
        <div tw="absolute -bottom-8 left-28 w-96 h-96 bg-pink-300 rounded-full opacity-50 mix-blend-multiply blur-3xl animate-blob delay-[4000s]"></div>
        <div tw="absolute -bottom-8 right-28 w-96 h-96 bg-green-300 rounded-full opacity-50 mix-blend-multiply blur-3xl animate-blob delay-[4000s]"></div>
      </div>
    </div>
  </div>
)

export default App
