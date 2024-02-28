import logo from './logo.svg';
import './App.css';
import ProfC from './Profile';
import Alexa from './images/alexa.png'
import Coratana from './images/cortana.png'
import Siri from './images/siri.png'
import 'bulma/css/bulma.css'



function App() {
  return (
    
    <div>

      <div className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'> Techhhhh</p>
        </div>
      </div>

<div className='container'>
  <section className='section'>
  <div className='columns'>
    <div className='column is-4'>
    <ProfC title="Java" time="1Y" img={Alexa}></ProfC>
     
    </div>

    <div className='column is-4'>
    <ProfC title="Spring" time="1y" img={Coratana}/>

</div>
<div className='column is-4'>
<ProfC title="React" time="Fresher" img={Siri} />

</div>
  </div>
  
  </section>

</div>
    

    </div>
  );
}

export default App;
