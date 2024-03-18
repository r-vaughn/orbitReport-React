import satData from "./satData";
import './styling.css';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  console.log(displaySats);
  return (
    <div className="flex-container">
    
    {displaySats.map((sat, id) => {
      console.log(displaySats)
      return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      <button onClick={() => setSat(satData, setSat)}>All Orbits</button>

    </div>
  );
};

export default Buttons;