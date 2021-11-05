let searchBtn = document.getElementById('submitBtn');
let cityName = document.getElementById('cityName');
let output = document.getElementById('city_name');
let temp = document.getElementById('temp');
let temp_status = document.getElementById('temp_status');
let dataHide = document.querySelector('.middle_layer');
searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    if (cityName.value === "") {
        output.innerHTML = "Enter City that you want temperature of";
        dataHide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=2f99112f4deff33cad9cd8118d08a229`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data]
            output.innerHTML = `${arrData[0].name} ,${arrData[0].sys.country}`;
            temp.innerHTML = arrData[0].main.temp;
            // temp_status.innerHTML = arrData[0].weather[0].main;
            let tempMood = arrData[0].weather[0].main;
            if (tempMood == 'Clear') {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
            } else if (tempMood == 'Snow') {
                temp_status.innerHTML = '<i class="fas fa-snowflake" style="#fff"></i> ';
            } else if (tempMood == 'Rain') {
                temp_status.innerHTML = '<i class="fas fa-cloud-rain style="color: #fff;""></i> ';
            } else if (tempMood == 'Clouds') {
                temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #fff;"></i> ';
            } else {
                temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>'
            }
            dataHide.classList.remove('data_hide');
        } catch {
            output.innerHTML = "Please Enter the city name Properly";
            dataHide.classList.add('hide_data');
        }

    }
})

