
import './App.css';
import { appRoutes } from "./routes/approutes";
import GenerateRoutes from './components/GenerateRoutes';



function App() {
  return (
    <div className="bg-green-200  p-3 rounded-2xl ">
      <GenerateRoutes routes={appRoutes} />
    </div>
   );
}

export default App;

