async function atualizarContador() {
    const response = await fetch('https://contador-visitas.ctfalci.workers.dev/');
      const text = await response.text();
      document.getElementById('contador').innerText = text;
    }
    
    // Chame a função ao carregar a página
    window.onload = atualizarContador;