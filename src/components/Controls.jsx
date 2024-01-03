import sb from "../soundbank";

const Controls = ({
  display,
  volume,
  handleVolume,
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
          max="1"
          min="0"
          step="0.1"
          type="range"
          id="cont"
          onChange={handleVolume}
          value={volume}
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
