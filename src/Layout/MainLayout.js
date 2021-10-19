import Header from '../components/Header'
import Footer from '../components/Footer'
const MainLayout = ({children}) =>{
    return(
        <>
            <div className="homeLayout">
                <Header />
                <div className="main">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default MainLayout