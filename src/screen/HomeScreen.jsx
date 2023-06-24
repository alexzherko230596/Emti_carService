import AboutStudio from "../components/AboutStudio/AboutStudio";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainPage from "../components/MainPage/MainPage";
import Map from "../components/Map/Map";
import Photo from "../components/Photo/Photo";
import Teacher from "../components/Teacher/Teacher";


const HomeScreen = () => {
    return(
        <div className='g-wrapperScreens'>
            <Header />
            <MainPage />
            <AboutStudio />
            <Teacher />
            <Photo />
            <Map />
            <Footer />
        </div>
    )
}

export default HomeScreen