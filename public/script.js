const hoge = () => {
    console.log("hoge");
}
const submit = (e) => {
    console.log("hogehoge");
    const str = $('.textarea').val();
    appendSelfMessage(str);
    $('.textarea').val('');
}

const appendSelfMessage = (str) => {
    let message = '<li class="self"><div class="avatar"><img src="https://i.imgur.com/HYcn9xO.png" draggable="false"/></div><div class="msg"><p>'+str+'</p><time>20:18</time></div></li>'
    $(".chat").append(message);
}