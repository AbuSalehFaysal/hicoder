import logo from './logo.svg';
import './App.css';
import Info from './components/Info/Info';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import SubHeading from './components/SubHeading/SubHeading';
import Features from './components/Features/Features';
import Accompliments from './components/Accomplishments/Accompliments';
import WhyHiCoder from './components/WhyHiCoder/WhyHiCoder';
import Learn from './components/Learn/Learn';
import Testimonials from './components/Testimonials/Testimonials';
import Partners from './components/Partners/Partners';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Info></Info>
      <NavBar></NavBar>
      <Banner></Banner>
      <SubHeading></SubHeading>
      <Features></Features>
      <Accompliments></Accompliments>
      <WhyHiCoder></WhyHiCoder>
      <Learn></Learn>
      <Testimonials></Testimonials>
      <Partners></Partners>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
