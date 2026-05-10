import LanguageProvider from "./LanguageProvider";
import Greeting from "./Greeting";
import LanguageButton from "./LanguageButton";

function App() {
  return (
    <LanguageProvider>
      <Greeting />
      <LanguageButton />
    </LanguageProvider>
  );
}

export default App;