import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Rotas from './rotas.jsx';
import "./styles/global.css";

console.log("Agendei app starting...");

createRoot(document.getElementById('root')).render(
  <>
    <Rotas />
  </>
)

