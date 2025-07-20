// Gráfico de barras - Progreso por etapa
const ctxBarras = document.getElementById('graficoBarras').getContext('2d');
new Chart(ctxBarras, {
  type: 'bar',
  data: {
    labels: ['Planificación', 'Análisis', 'Desarrollo', 'Implementación'],
    datasets: [{
      label: 'Porcentaje Completado (%)',
      data: [100, 90, 70, 40],
      backgroundColor: [
        '#3ab66b',
        '#63d88b',
        '#a4e9ba',
        '#c2f0d2'
      ],
      borderRadius: 8
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

const avance = 70; // Porcentaje de avance del proyecto

const ctxGauge = document.getElementById('gaugeChart').getContext('2d');
const gaugeChart = new Chart(ctxGauge, {
  type: 'doughnut',
  data: {
    labels: ['Avance', 'Pendiente'],
    datasets: [{
      data: [avance, 100 - avance],
      backgroundColor: ['#3ab66b', '#e6f4e6'],
      borderWidth: 0,
      cutout: '80%',
      rotation: -90,
      circumference: 180
    }]
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      // Plugin personalizado para mostrar el texto en el centro
      centerText: {
        display: true,
        text: `${avance}%`
      }
    }
  },
  plugins: [{
    id: 'centerText',
    beforeDraw: function(chart) {
      const width = chart.width;
      const height = chart.height;
      const ctx = chart.ctx;
      const text = chart.options.plugins.centerText.text;

      ctx.restore();
      const fontSize = (height / 5).toFixed(2);
      ctx.font = `${fontSize}px Montserrat`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillStyle = "#1e3d2f";
      ctx.fillText(text, width / 2, height / 1.2);
      ctx.save();
    }
  }]
});
