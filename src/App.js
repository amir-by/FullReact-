 import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
    {/* Header */}
       <Navbar/>

       {/* content */}
        <main>
        <Home/>
      </main>
     

    {/* Footer */}
      {/* <Footer/> */}
   
    </div>
  );
}

export default App;
