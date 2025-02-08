async function fetchCryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd');
        const data = await response.json();
        document.getElementById('usdt-balance').innerText = (data.tether.usd * 5026.50048).toFixed(2);
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
}

function updateChart() {
    const ctx = document.getElementById('portfolioChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Portfolio Value',
                data: [100000, 102000, 98000, 105000, 107000, 106000],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchCryptoData();
    updateChart();
    setInterval(fetchCryptoData, 30000);
});
