import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
// GitHub Pages SPA fallback: 404.html stores the path in ?p=
const p = new URLSearchParams(location.search).get('p')
if (p) history.replaceState(null, '', import.meta.env.BASE_URL + p.replace(/^\//, ''))
createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
