const DrumPad = ({ id, trigKey, url, drumPadClick }) => {
  return (
    <div className="drum-pad" id={id} onClick={drumPadClick}>
      <audio src={url} className="clip" id={trigKey}></audio>
      {trigKey}
    </div>
  );
};

export default DrumPad;
