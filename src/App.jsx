
import {CallToAction, Hero, Services, Stats, Footer} from './components';

function App() {

  return (
    <>
      <div className="overflow-hidden w-full lg:max-w-1400px">
        <div className="mt-6">
          <Hero/>
          <Stats/>
          <Services/>
          <CallToAction/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App;
