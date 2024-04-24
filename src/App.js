import './App.css';
import Testimonio from './component/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='container-principal'>
      <h1>AUTOS DEPORTIVOS Y EXOTICOS</h1>
      <Testimonio 
      marca='Lamborghinni'
      estilo='Coche de carrera'
      descripcion='Los Lamborghini son autos deportivos rápidos que utilizan un mecanismo de presión para generar más potencia. Algunos modelos de Lamborghini incluyen:
        Lamborghini Aventador SVJ'
      imagen='auto1'
      />
      <Testimonio
      marca='ferrari'
      estilo='Coche de carrera'
      descripcion='Los Lamborghini son autos deportivos rápidos que utilizan un mecanismo de presión para generar más potencia. Algunos modelos de Lamborghini incluyen:
        Lamborghini Aventador SVJ'
      imagen='auto2'
        
      />
      <Testimonio 
      marca='Chevron'
      estilo='Coche de carrera'
      descripcion='Los Lamborghini son autos deportivos rápidos que utilizan un mecanismo de presión para generar más potencia. Algunos modelos de Lamborghini incluyen:
        Lamborghini Aventador SVJ'
      imagen='auto3'
        
      />
      </div>
    </div>
  );
}

export default App;
