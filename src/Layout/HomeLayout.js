import Footer from '../components/Footer'
import Header from '../components/Header'

const HomeLayout = ({children}) =>{
    return(
        <>
            <div className="homeLayout">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default HomeLayout