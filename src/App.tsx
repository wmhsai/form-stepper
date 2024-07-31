import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from "sonner"
import '../src/style/index.css'
import { AlertProvider } from './context/AlertContext'
import { queryClient } from './reactQuery/QueryClient'
import { createRoutes } from './routes/routes'
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster visibleToasts={1} position={'top-center'} />
      <AlertProvider>
        <RouterProvider router={createRoutes()} />
      </AlertProvider>
    </QueryClientProvider>

  )
}

export default App
