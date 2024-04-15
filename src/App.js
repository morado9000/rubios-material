import './App.css';
import "@fontsource/libre-franklin";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/common/Header/Header';
import NewItem from './components/common/NewItem/NewItem';
import SignDivider from './components/common/SignDivider/SignDivider';
import Splash from './components/common/Splash/Splash';
import CurrentMenu from './components/common/CurrentMenu/CurrentMenu'
import OrderCatering from './components/common/OrderCatering/OrderCatering';
import NewsLetter from './components/common/NewsLetter/NewsLetter';
import JoinBox from './components/common/JoinBox/JoinBox';
import SignUpNews from './components/common/SignUpNews/SignUpNews';
import Footer from './components/common/Footer/Footer';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Libre Franklin',
      'Arial',
      'Roboto',
    ].join(','),
    bold: {
      fontSize: '14px',
      color: "#196db6",
      fontWeight: "1000"
    },
    boldInvert: {
      fontSize: '14px',
      color: "#FFF",
      fontWeight: "1000"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header 
        logo="https://rubios.com/wp-content/uploads/2021/12/rubios-logo-rebrand.png"
        midLinks={["Menu", "Catering", "Rewards", "Careers", "About Us", "Nutrition"]}
        midEndLinks={["Locations", "Sign In"]}
        button="Order Now" />
      <Splash />
      <SignDivider />
      <NewItem />
      <CurrentMenu />
      <OrderCatering />
      <NewsLetter />
      <JoinBox />
      <Footer 
        logo="https://rubios.com/wp-content/uploads/2021/12/logo-footer.png"
        midLinks={["Weekly Deals", "Download Menu", "Locations", "Gift Cards", "Fundraisers", "Press", "Blog", "Contact Us"]}
        copyrightLinks={["Do Not Sell My Personal Infomation", "Website Accessibility", "Terms of Use", "Privacy", "Cookies"]}
      />
    </ThemeProvider>
  );
}

export default App;
