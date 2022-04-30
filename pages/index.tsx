import tw from 'twin.macro'
import { Button, Logo } from '../components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
  ],
  blob: tw`absolute duration-1000 origin-center scale-[2] rounded-full opacity-10 w-96 h-96 blur-xl animate-blob bg-gradient-to-br from-pink-500 to-yellow-500`,
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex items-center justify-center min-h-screen relative w-screen overflow-hidden p-8">
      <div css={styles.blob}></div>
      <div>
        <div tw="relative max-w-screen-xl mx-auto align-top shadow-lg bg-opacity-50 border border-gray-200 rounded-2xl p-8 bg-white">
          <h1 tw="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
            Hello 👋 i not a frontend developer but i can help you with your
            project 🤓
          </h1>
          <div>
            <p tw="text-center text-gray-600">wdf</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App
