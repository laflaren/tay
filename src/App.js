import './App.css';
import Form from './components/Form.js';

function App() {
  return (
    <div className="App">

      <header>
      <div className='grid-container'> 
      <div className='share-mem'> 
      <a className='memories' href="Form.js"> Share a memory </a>
    
    </div>

      <a className="App-link" href="http://taylormarieh.com/i-was-busy-thinking-about-boys"> Zine </a>
      </div>
      </header>

        <h1>
        <span className='c1'> T </span>
        <span className='c2'> a </span>
        <span className='c3'> y </span>
        <span className='c4'> l </span>
        <span className='c5'> o </span>
        <span className='c6'> r </span>
        <span className='c7'> &nbsp; </span>
        <span className='c8'> H </span>
        <span className='c9'> e </span>
        <span className='c10'> a </span>
        <span className='c11'> g </span>
        <span className='c12'> l </span>
        <span className='c13'> e </span>
        <span className='c14'> r </span>
        </h1>

        <h2> Artist, Curator, Advocate, Traveler </h2>

        <h3> 1995 - 2022 </h3>

        <footer> 
          <div className="holder">
            <div className="candle">
              <div className="blinking-glow"> </div>
                <div className="thread"> </div>
                  <div className="glow"> </div>
                    <div className="flame"> </div>
            </div>
          </div>
        
         <Form />
        
          </footer>
        </div>
    );
}

export default App;


