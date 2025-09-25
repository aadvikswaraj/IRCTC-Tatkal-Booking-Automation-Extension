chrome.runtime.connect();

// Send Runtime Msg
var sent = false;
function sendRuntimeMsg(msg_type, msg_body) {
    let senderName = "popup";
    chrome.runtime.sendMessage({
        msg: {
            type: msg_type,
            data: msg_body
        },
        sender: senderName,
        id: "pigeon"
    });
};

document.querySelector('button').addEventListener('click', async (e)=>{
    sendRuntimeMsg("openPigeon");
});