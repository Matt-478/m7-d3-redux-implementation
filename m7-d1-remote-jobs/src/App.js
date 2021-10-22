import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MainSeaarch from './components/MainSearch'
import CompanySearchResults from "./components/CompanySearchResults"
import { BrowserRouter, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainSeaarch} />
      <Route exact path="/:companyName" component={CompanySearchResults} />
    </BrowserRouter>
  )
}

export default App;
