import sb from "../soundbank";

const Controls = ({
  display,
  volume,
  setVolume,
  soundBankClick,
  powerButtonClick,
  power,
  soundBank,
}) => {
  const pcls = power ? "goright" : "goleft";
  let scls;
  if (!power) {
    scls = "gocenter";
  } else {
    scls = soundBank === sb[1] ? "goright" : "goleft";
  }
  
  // const secondaryBgColor = 'purple'
  // const min ='0';
  // const max ='100';
  // const percentage = 100 * (value - min) / (max - min)
  // const rangerStyle = {
  //   background: `linear-gradient(90deg, var( - primary-600) 0, var( - orange-500) ${percentage}%, ${secondaryBgColor ? secondaryBgColor : 'var( - defaut-color)'} ${percentage + 0.1}%)`
  // }
  // if (power && soundBank === sb[0]) {
  //   scls = "goleft";
  // } else if (power && soundBank === sb[1]) {
  //   scls = "goright";
  // }
  // const scls =  ? "goright" : "goleft";
  return (
    <div className="controls">
      <div id="display" className=" grid-item" value={display}>
        {display}
      </div>
      <div id="power-control" className="control grid-item">
        <p>power</p>
        <div className={`select ${pcls}`} onClick={powerButtonClick}>
          <div className="inner"></div>
        </div>
      </div>
      <div id="volume" className="grid-item">
        <input 
        type='range' 
        min='0.0'
        max='1.0' 
        step='0.05'
        onChange={(e) => setVolume(+e.target.value)}
        value={volume}
        id='cont'
        />
      </div>
      <div id="pads-switch" className="control grid-item">
        <p>Bank</p>
        <div className={`select ${scls}`} onClick={soundBankClick}>
          <div className="inner"></div>
        </div>
      </div>
    </div>
  );
};
export default Controls;
