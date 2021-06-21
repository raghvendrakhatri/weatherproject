const temp=document.getElementById('tempdata');
// const temp_status=document.getElementById('temp_status');
const submitbtn=document.getElementById('submitbtn');
const cityName=document.getElementById('cityname');
const  get_city=document.getElementById('city_name');
const  img=document.getElementById('weatherimg');
const getInfo= async(event)=>
{
    event.preventDefault();
    // alert("ghiugi");
    let cityval=cityName.value;
    console.log(cityval)
    if(cityval=='')
    {
        get_city.innerText="Please enter the name before you search";
    }
    else
    {  let url=`http://api.weatherstack.com/current?access_key=37be9d6ae2a4b901c30e6794c38aa603&query=${cityval}`;
    console.log(url);
    fetch(url).then((response)=>
    {
        // console.log(response);
        return response.json();
    }).then((data)=>
    {
        const arrData=[data];
        temp.innerText=arrData[0].current.temperature;
        img.src=arrData[0].current.weather_icons;
        get_city.innerText=arrData[0].location.name+', '+arrData[0].location.country;
    })
}
    }
submitbtn.addEventListener('click',getInfo);
setInterval(()=>
{
    var mydate=new Date();
const day=mydate.getDay();
const mon=mydate.getMonth();
const date=mydate.getDate();
var time=mydate.getHours();
var crt_min=mydate.getMinutes();
const weekday=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const setdate=document.getElementById('today_data');
    const setday=document.getElementById('day');
    const myt=document.getElementById('crt_time');
    setday.innerHTML=weekday[day];
    setdate.innerHTML=`${date} ${months[mon]}`;
    let time_stat="AM";
    if(time>=12)
    {
        time_stat="PM"
    }
    if(time>12)
    {
        time=time-12;
    }
    if(crt_min<10)
    {
        crt_min='0'+crt_min;
    }
    myt.innerHTML=`${time}:${crt_min} ${time_stat}`;
},1000)