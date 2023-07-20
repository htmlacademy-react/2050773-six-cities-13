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
