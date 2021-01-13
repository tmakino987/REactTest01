import { BrowserRouter, Route } from 'react-router-dom';
import TopPage from './js/Pages/TopPage'
import MapPage from './js/Pages/MapPage'

const TopPageComp = () => {
  return (
    <div>
      <TopPage />
    </div>
  );  
}

const MapPageComp = () => {
  return (
    <div>
      <MapPage />
    </div>
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={TopPageComp} />
          <Route path="/Map"  component={MapPageComp} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
