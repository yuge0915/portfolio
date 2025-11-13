import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'  // ← 変更
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>  {/* ← 変更（basename削除） */}
      <App />
    </HashRouter>  {/* ← 変更 */}
  </StrictMode>
)
