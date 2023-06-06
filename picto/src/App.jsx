import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="Home">
        <div className="left">
          <Link to= "/pictototext"> 
          <button  className='toPictoText'>
            WEB-TRANSLATOR
            </button>
          </Link>
      

        </div>
        <div className="middle">

            <h1 id='speak'>SPEAK THROUGH PICTOS</h1>
            <div className="big-squars">
                <div className="text">
                    <h1>
                     <span>Picto</span>  is a friendly-user translator targeted to <br/> people with <br/> communication <br/> difficulties.
                    </h1>
                </div>
            </div>
            <div className="big-squars">
                <div className="text rigth-font">
                    <h1>
                    A pictogram-to-text based translation application introducing over a  <br/> <span>+ 1000</span>  <br/> images. 
                    </h1>
                </div>

            </div>

            <div className="small-squars">
                <h1> 
                Featuring Open-Dyslexic Font.
                </h1>
            </div>

            <div className="big-squars">
                <div className="text">
                    <h1>
                    <span>Downloads</span> “Picto App”for  <br/>
                    extra customization <br/>
                    allowing you to<br/>
                    add Pictos.<br/>

                    </h1>
                </div>

            </div>

            <div className="small-squars">
                <h1> Or use our web translator <br/>
by clicking  here.
                </h1>
            </div>

        </div>
        <div className="right"></div>
    </div>
  );
}

export default App;
