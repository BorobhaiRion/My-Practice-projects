let chartData = {
    labels:[],
    datasets:[{
        label:'# of Values',
        data: [],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1

    }]
};

function createChart(TypeError, height=400){
    const canvasContainer =document.getElementById('canvas-container');

    canvasContainer.innerHTML = `<canvas id="myChart"></canvas>`;
    canvasContainer.style.height =`${height}px`;
    

}