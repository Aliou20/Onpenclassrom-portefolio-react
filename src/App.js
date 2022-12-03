import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Body from './Components/Boby/Boby';
import Categories from './Components/Categories/Categories';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Page from './Components/Page/Page';
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <div className="App">
        <Header />
        <div className='d-flex'>
          <Body />
          <div className='d-flex flex-column align-items-center mx-auto'>
            <Categories />
            <ShoppingList />
          </div>
        </div>
          <Footer/>
          <Page />
    </div>
  );
}

export default App;
