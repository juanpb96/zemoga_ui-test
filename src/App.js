import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { BannerTop } from './components/banner/banner-top/banner-top';
import { BannerBottom } from './components/banner/banner-bottom/banner-bottom';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="max-centered">
        <BannerTop />
        <BannerBottom />
        <hr className="separator"/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
