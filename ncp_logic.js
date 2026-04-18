// ncp_logic.js
export function runDiagnostic(symptom) {
  const diagnosticMap = {
    'tela_preta': { action: 'backlight_check', component: 'F1_Fuse' },
    'sem_som': { action: 'audio_amp_check', component: 'Capacitor_C12' }
  };

  const diagnosis = diagnosticMap[symptom] || { action: 'unknown', component: 'none' };
  
  return {
    timestamp: new Date().toISOString(),
    ...diagnosis,
    recommendation: `Verificar ${diagnosis.component}`
  };
}
