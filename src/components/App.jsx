import './generales.css'
import './normalize.css'

import Header from './Header/Header'
import SideBar from './Main/SideBar/SideBar'
import Footer from './Footer/Footer'
import Seccion from './Main/Seccion/ListElements/Seccion'
import LastUser from './Main/Seccion/ListElements/Last/LastUser'
import LastProduct from './Main/Seccion/ListElements/Last/LastProduct'
import ProductsTable from './Main/Seccion/ProductsTable/ProductsTable'

function App() {

  return (
    <>
      <Header />
      <main>
        <SideBar />

        <Seccion 
          key={1}
          icon= {<i className="fa-solid fa-user"/>}
          concept="Usuarios"
          Children={<LastUser/>}
        />
        <Seccion 
          key={2}
          icon={<i className="fa-solid fa-box"/>}
          concept="Productos"
          Children={<LastProduct/>}
        />
        <Seccion
          key={3}
          icon={<i className="fa-solid fa-table"></i>} 
          concept="Tablas"
          Children={<ProductsTable/>}
        />

      </main>
      <Footer />

    </>
  )
}

export default App
