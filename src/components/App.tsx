import "../styles/App.css";
import Vid from "../../public/rain-drops-on-window.1920x1080.mp4";

function App() {
  return (
    <div className="main-box">
      <video className="vidfondo" autoPlay loop muted src={Vid}></video>
      <div className="products">
        <h1>Producto</h1>
        <div className="productdata"></div>
      </div>
    </div>
  );
}

export default App;
