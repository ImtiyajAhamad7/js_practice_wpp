const getdyaTime = () => {
  const dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let prefix = 'AM';
  const data = new Date();

  const day = data.getDay();
  let originalDay = dayName[day];
  console.log(originalDay);

  let hours = data.getHours();
  let minutes = data.getMinutes();
  let seconds = data.getSeconds();

  if(hours >12){
        hours = hours - 12;
        prefix = 'PM';
  }
  console.log(`today is: ${originalDay}`)
  console.log(`Current time is ${hours} ${prefix} : ${minutes} : ${seconds}`);
};

getdyaTime();


