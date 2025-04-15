import sb from "./soundbank";
import DrumPad from "./components/DrumPad";
import Controls from "./components/Controls";
import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("WELCOME");
  const [volume, setVolume] = useState(0.5);
  const [sbToggle, setSbToggle] = useState(true);
  const [soundBank, setSoundBank] = useState(sb[0]);
  const [power, setPower] = useState(true);

  const powerButtonClick = () => {
    setPower(!power);
    setDisplay(power? 'POWER ON': 'POWER OFF' ) 
  };
  const drumPadClick = (e) => {
    if (power === true) {
      setDisplay(e.target.id);
      e.target.firstElementChild.play();
      console.log(e.target.id);
    }
  };
  const soundBankClick = () => {
    if (power) {
      setSbToggle(!sbToggle);
      setSoundBank(sb[+sbToggle]);
      setDisplay(`soundbank ${+sbToggle + 1}`);
    }
  };
  let auds = document.querySelectorAll("audio");
  const handleKeyDown = (e) => {
    for (const aud of auds) {
      if (e.key.toUpperCase() === aud.id) {
        aud.play();
        setDisplay(aud.parentElement.getAttribute("id"));
      }
    }
  };
  window.addEventListener("keydown", handleKeyDown);

  const handleVolume = (e) => {
    let vol = document.getElementById("cont");
    console.log(vol.value);
  };

  return (
    <div id="drum-machine">
      <div className="pads">
        {soundBank.map((p) => {
          return (
            <DrumPad
              key={p.keyCode}
              id={p.id}
              trigKey={p.trigKey}
              url={p.url} 
              drumPadClick={drumPadClick}
            />
          );
        })}
      </div>

      <Controls
        display={display}
        volume={volume}
        handleVolume={handleVolume}
        soundBankClick={soundBankClick}
        powerButtonClick={powerButtonClick}
        power={power}
        soundBank={soundBank}
      />
    </div>
  );
};

export default App;
