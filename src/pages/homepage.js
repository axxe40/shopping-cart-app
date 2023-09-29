import Coresystem from "@/Components/Homepage/Coresystem";
import Footer from "@/Components/Homepage/Footer";
import Header from "@/Components/Homepage/Header";




function homepage() {
    
    return (<div className="App">
        <Header />
        <div style={{ minHeight: "70vh" }}>
            <Coresystem/>
        </div>
        <Footer />
    </div>) 
       
    
}


export default homepage;