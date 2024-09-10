import { BrowserRouter } from "react-router-dom"
import { Header , AppRouter} from "./components/"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
