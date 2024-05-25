import './App.css';
import { LampContainer } from "./components/ui/lamp.tsx";
import { TypewriterEffectSmoothDemo } from './components/ui/typeWritterEffectdSmoothDemo.tsx';

function App() {
  return (
    <div id="container">
      <div id="profileContent">
        <TypewriterEffectSmoothDemo />
      </div>
      <div id="profileImage">
        <LampContainer>
        </LampContainer>
      </div>
    </div>
  );
}

export default App;
