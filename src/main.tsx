import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// #region agent log
window.addEventListener('error', (event) => {
  fetch('http://127.0.0.1:7269/ingest/84807476-fed3-41b7-9849-31e6e463764c',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7937f1'},body:JSON.stringify({sessionId:'7937f1',location:'main.tsx:error',message:'window error',data:{message:event.message,filename:event.filename,lineno:event.lineno},timestamp:Date.now(),hypothesisId:'A',runId:'post-fix'})}).catch(()=>{});
});
window.addEventListener('unhandledrejection', (event) => {
  fetch('http://127.0.0.1:7269/ingest/84807476-fed3-41b7-9849-31e6e463764c',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7937f1'},body:JSON.stringify({sessionId:'7937f1',location:'main.tsx:unhandledrejection',message:'unhandled promise rejection',data:{reason:String(event.reason)},timestamp:Date.now(),hypothesisId:'A',runId:'post-fix'})}).catch(()=>{});
});
// #endregion

const rootEl = document.getElementById('root');
// #region agent log
fetch('http://127.0.0.1:7269/ingest/84807476-fed3-41b7-9849-31e6e463764c',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'7937f1'},body:JSON.stringify({sessionId:'7937f1',location:'main.tsx:bootstrap',message:'app bootstrap',data:{hasRoot:!!rootEl,port:window.location.port,pathname:window.location.pathname},timestamp:Date.now(),hypothesisId:'B',runId:'post-fix'})}).catch(()=>{});
// #endregion

createRoot(rootEl!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
