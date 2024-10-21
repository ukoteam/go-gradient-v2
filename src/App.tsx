
import './App.css';
import { Header } from './components/header/header';
import { MainBody } from './components/main-body/main-body';
import { Provider } from 'react-redux';
import { store } from './services/root-reducer';
import { Footer } from './components/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ServicePage } from './components/service-page/service-page';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<MainBody />} />
            <Route path=":id" element={<ServicePage />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
