const hoge = () => {
    console.log("hoge");
}
const submit = (e) => {
    const str = $('.textarea').val();
    appendSelfMessage(str);
    fetchBotReply(str, function(message) {
        console.log(message);
    });
    $('.textarea').val('');
}

const appendSelfMessage = (str) => {
    let message = '<li class="self"><div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}

const fetchBotReply = (str, callback) => {
    callApi(str);
    callback();
}

const callApi = (query) => {
    $.ajax({
        type: "POST",
        url: "https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk",
        data: {
            "apikey": "SeN4GaLXYy9jCrJksJYQsSquKVgmWiBO",
            "query" : query
        },
        success: function(data){
            console.log(data.results[0].reply);
            return data.results[0].reply;
        }
    });
}
