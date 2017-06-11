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

const pushNotification = (cmd) => {
    const mockName = "借金太郎";
    const mockAmount = 200;
    const mockLimitDay = 60;
    var lines = [];
    lines.push("おはようございます。");
    lines.push(mockName+"さんの借金返済日まで、あと"+mockLimitDay+"日です。");
    lines.push("返済額は、残り"+mockAmount+"万円です。");
    switch (cmd) {
        case 'dby':
            lines.push("あさってが返済日ですけど、まだ2日もあるから大丈夫！");
            break;
        case 'y':
            lines.push("明日が返済日です。お金の準備は大丈夫ですか？");
            break;
        case 't':
            lines.push("今日が返済日当日です。ようやく借金返済の日々から抜けられますね！");
            break;
        default:
            lines.push("今日もお仕事頑張りましょう！");
            break;
    }
    for(let i = 0; i < lines.length; i++) {
        appendBotMessage(lines[i]);
    }
}

const appendSelfMessage = (str) => {
    const message = '<li class="self"><div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}

const appendBotMessage = (str) => {
    const message = '<li class="other"><div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}
