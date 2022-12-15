const endData = "1 January 2023 12:00 AM";

document.getElementById("end-date").innerText = endData;

// const clock = () => {

// }

function clock(){
    const end = new Date(endData);
    const now = new Date();
    const diff = (end - now) / 1000;
    console.log(diff);
    // convert into days
    console.log(Math.floor(diff / 3600 / 24));

}


// initial call
clock();


/*
*  1 day = 24 hrs
*  1hr = 60 mins
*  60 min = 3600 sec
*/