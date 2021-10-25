import react from "react";
import Navbar from '../components/Navbar';
import ItemListContainer from '../components/container/ItemListContainer'

const Home = () =>{
    return(
        <>
            <Navbar/>
            <ItemListContainer/>
        </>
    );
};

export default Home;