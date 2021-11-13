let request = new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v3.1/all",true);
request.send();
request.onload=()=>{
    let data = JSON.parse(request.response);
    console.log(data);
    for(i in data){
        console.log(`Name : ${data[i].name.common} \nRegion : ${data[i].region} \nSubregion : ${data[i].subregion} \nPopulation :${data[i].population} \nFlags :${data[i].flags.png}`);
    }
}