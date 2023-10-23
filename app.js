const endDate = "18 september 2023 01:00 PM"
// document.getElementById("end-date").innerText = endDate;   ----------Not working
const input = document.querySelectorAll("input")

function clock()
{
    const end  = new Date(endDate)      
    const now = new Date()
    // console.log(end);
    // console.log(now);
    const diff = (now - end) / 1000;
    //console.log(diff);

    //........Numbers of days
    input[0].value = Math.floor(diff/3600/24);

    //input[1].value = Math.floor(diff/3600)% 24;  
    //console.log(Math.floor(diff/3600)%24);

    //..................Number of hours
    input[1].value = Math.floor(diff/3600)%24; 

    //................Number of minutes
    input[2].value = Math.floor(diff/60)%60;
    //console.log(Math.floor(diff/60)%60);

    //..........Numbers of second
    input[3].value = Math.floor(diff)%60;
    console.log(Math.floor(diff %60 ));
}
clock()

setInterval(
    () =>{
        clock()
    },
    1000
)


