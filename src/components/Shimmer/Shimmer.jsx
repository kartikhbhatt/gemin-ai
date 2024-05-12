import './Shimmer.css';

const SHIMMER_ROW = 3;

function Shimmer() {
  return (
    <div className="loader">
      {Array.from({ length: SHIMMER_ROW }, (_, index) => (
        <hr key={index} />
      ))}
    </div>
  );
}

export default Shimmer;
