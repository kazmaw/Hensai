var state = "getNamePhase";
var name;
var price;
var date;

const hoge = () => {
    console.log("hoge");
}

$(document).ready(function(){
    if (state == "getNamePhase") {
        appendBotMessage("こんにちは。はじめに、あなたの名前を教えてね。");
    }
});

const submit = (e) => {
    const str = $('.textarea').val();
    appendSelfMessage(str);
    if (state == "finishInit") {
        if (str=="パチンコ") {
            appendBotMessage("パチンコ行ったのかよ！");
        } else {
            fetchBotReply(str, function(reply) {
                appendBotMessage(reply);
            });
        }
    }

    if (state=="getNamePhase") {
        name = str;
        appendBotMessage(str + "さんですね。");
        appendBotMessage("次に借りた額を教えてください。");
        state = "getPricePhase"
    } else if (state=="getPricePhase") {
        price = str;
        appendBotMessage(str + "も借りてるんですか!?");
        appendBotMessage("では、何年何月何日までに返す予定ですか？");
        state = "getDatePhase"
    } else if (state=="getDatePhase") {
        date = str;
        appendBotMessage(str + "ですね。それまでに頑張って返しましょう！");
        state = "finishInit";
    }
    $('.textarea').val('');
}

const appendSelfMessage = (str) => {
    let message = '<li class="self"><div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}

const fetchBotReply = (str, callback) => {
    callApi(str ,callback);
}

const callApi = (query, callback) => {
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
