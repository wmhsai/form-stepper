import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import '../src/style/index.css'
import { queryClient } from './reactQuery/QueryClient'
import { createRoutes } from './routes/routes'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={createRoutes()} />
    </QueryClientProvider>

  )
}

export default App
