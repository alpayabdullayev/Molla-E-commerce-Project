import './App.css'
import Home from './pages/Home'
import "./assets/scss/main.scss"
import MainProvider from './context/MainContext'
import BasketProvider from './context/BasketContext'
import WishlistProvider from './context/WishlistContext'
import DarkModeProvider from './context/DarkModeContext'

function App() {

  return (
    <>

    <MainProvider>
      <BasketProvider>

      
      
      <WishlistProvider>

        <DarkModeProvider>
        <Home/>
        </DarkModeProvider>

      </WishlistProvider>
      </BasketProvider>
    </MainProvider>
    </>
  )
}

export default App
