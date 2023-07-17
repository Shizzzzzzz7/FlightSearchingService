function compareTime(dateTime1,dateTime2){
    let cDateTime1=new Date(dateTime1);
    let cDateTime2=new Date(dateTime2);

    return cDateTime1.getTime() < cDateTime2.getTime();
}

module.exports={
    compareTime
}