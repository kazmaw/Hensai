const onKeyDown = () => {
    // Enterキー押下時
    if (event.keyCode == 13) {
        submit()
    }
}
const submit = () => {
    const str = $('.textarea').val();
    appendSelfMessage(str);
    $('.textarea').val('');
    // fetchBotReply(str, function(reply) {
    //     appendBotMessage(reply);
    // });
}

const appendSelfMessage = (str) => {
    let message = '<li class="self"><div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}

const appendBotMessage = (str) => {
    let message = '<li class="other"><div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}
