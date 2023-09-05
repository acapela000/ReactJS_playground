import logo from './logo.svg';
import './App.css';
import ScrollToSectionNav from './scrollToViewSectionNavBar/scrollIntoView'; 
import SearchWordInText from './searchWordInText/searchWordInText';


function App() {
  return (
    <div className="App">
     <ScrollToSectionNav/>
     <SearchWordInText/>
    </div>
  );
}

export default App;
