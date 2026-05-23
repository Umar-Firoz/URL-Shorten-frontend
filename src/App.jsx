import './index.css'
import {Header} from "./components/layout/Header.jsx";
import {Layout} from "./components/layout/Layout.jsx";
import {Home} from "./pages/Home.jsx";

function App() {
  return (
    <>
     <Header/>
     <Layout>
         <Home/>
     </Layout>
    </>
  )
}

export default App
