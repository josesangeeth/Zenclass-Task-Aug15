// XMLHTTP request
// link for getting all countris -  https://restcountries.eu/rest/v2/all
const getcountries= () =>
{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://restcountries.eu/rest/v2/all');
    xhr.responseType = "json";

    xhr.onload = () =>
    {
        const data = xhr.response;
        //console.log(data);
        const morepopcountry = data.filter((x)=> x.population>=100000000).map((x)=>x.name+","+x.population);
        console.log(morepopcountry);
    }
  xhr.send();
}
getcountries();

