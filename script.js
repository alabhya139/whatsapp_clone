$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    $('.profile').hide();
    $('#chat-boxes').hide();
    $('#sidebar').hide();
    $('#chatbox').hide();
    $('#sidebar-header').hide();
    

    $('#profiles').click(function(){
        $('#home').hide();
        $('#chat-boxes').hide();
        $('.profile').show();
    });

    $('#chats').click(function(){
        $('#home').hide();
        $('.profile').hide();
        $('#chat-boxes').show();
    });

    $('#homes').click(function(){
        $('#chat-boxes').hide();
        $('.profile').hide();
        $('#home').show();
    });

    $('.chat-messages').click(function(){
        $('#sidebar').show();
        $('#chatbox').show();
        $('#sidebar-header').show();
    });
});



