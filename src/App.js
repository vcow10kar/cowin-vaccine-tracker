import Search from './components/Search/Search';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {ThemeProvider} from '@mui/material';
import customTheme from './assets/theme';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider theme = {customTheme}>
      <div className="App">
      <Navbar/>

      <Search/>

      <Footer/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;