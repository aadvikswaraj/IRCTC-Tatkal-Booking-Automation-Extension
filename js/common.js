function updateTime() {
    let date = new Date();
    function beautifyTime(time) {
        if (time<10) {
            return "0"+String(time);
        };
        return time;
    };
    try {
        // if (serverSyncTimeDelay) {
        //     date.setTime(date.getTime());
        // };
    } catch (error) {};
    let innerText = `${beautifyTime(date.getHours())}:${beautifyTime(date.getMinutes())}:${beautifyTime(date.getSeconds())}`;
    document.querySelectorAll('.time').forEach(element => {
        element.innerText = innerText;
    });
};
setInterval(updateTime, 1000);