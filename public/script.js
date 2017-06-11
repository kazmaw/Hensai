const hoge = () => {
    console.log("hoge");
}
const submit = (e) => {
    const str = $('.textarea').val();
    appendSelfMessage(str);
    fetchBotReply(str, function(reply) {
        console.log(reply);
        appendBotMessage(reply);
    });
    $('.textarea').val('');
}

const appendSelfMessage = (str) => {
    let message = '<li class="self"><div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}

const fetchBotReply = (str, callback) => {
    callApi(str ,callback);
}

var callApi = (query, callback) => {
    $.ajax({
        type: "POST",
        url: "https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk",
        data: {
            "apikey": "SeN4GaLXYy9jCrJksJYQsSquKVgmWiBO",
            "query" : query
        }
        , success(data) {
            callback(data.results[0].reply);
        }
    });
}

const appendBotMessage = (str) => {
    let message = '<li class="other"><div class="avatar"><img src="https://i.imgur.com/DY6gND0.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}
