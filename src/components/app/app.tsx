import {BrowserRouter, Route, Routes} from 'react-router-dom';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <WelcomeScreen placesCount = {placesCount} />
  );
}

export default App;
