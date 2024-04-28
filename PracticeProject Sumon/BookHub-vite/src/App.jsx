import BookList from "./components/Books/BookList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SitBar from "./components/SitBar/SitBar";
import Sorting from "./components/Sorting/Sorting";

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <section className="container mt-2">
          <div className="row">
          <div className="col-3">
              <SitBar/>
            </div>
            <div className="col-9">
              <Sorting/>
              <BookList/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>

    </div>
  );
};

export default App;
