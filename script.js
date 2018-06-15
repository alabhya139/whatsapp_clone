$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    var isclicked=false;

    $('.chat-messages').click(function(){
        isclicked=true;
        if($(window).width()<=767){
        $('#chatbar').hide();
        $('#sidebar-container').show();
        $('#sidebar').show();
        $('#chatbox').show();
        $('#sidebar-header').show();
        }else {
        $('#sidebar-container').hide();
        $('#sidebar-container1').show();
        $('#chatbar').show();
        $('#sidebar1').show();
        $('#chatbox1').show();
        $('#sidebar-header1').show();
        }
    });
    
    $('#sidebar-container').hide();
    $('#sidebar-container1').hide();
    
    /*Handle Page Reloads */
    $(window).on('resize',function(){
        var win = $(this);
        if($(window).width()<=767){
            if(isclicked==true){
                $('#sidebar-container1').hide();
                $('#sidebar-container').show();
                $('#chatbar').hide();
                $('#sidebar').show();
                $('#chatbox').show();
                $('#sidebar-header').show();
                $('#chat-boxes').hide();
                $('.profile').hide();
                $('#home').hide();
            }else{
                $('#sidebar-container1').hide();
                $('#sidebar-container').hide();
            }
        }
        if($(win).width()>=767){
            if(isclicked==true){
                $('#sidebar-container').hide();
                $('#sidebar-container1').show();
                $('#chatbar').show();
                $('#sidebar1').show();
                $('#chatbox1').show();
                $('#sidebar-header1').show();
                $('#chat-boxes').show();
                $('.profile').hide();
                $('#home').hide();
            }
        }
    });

    $('.profile').hide();
    $('#chat-boxes').hide();
    $('#sidebar').hide();
    $('#chatbox').hide();
    $('#sidebar-header').hide();
    

    $('#profiles').click(function(){
        isclicked=false;
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
        isclicked=false;
        $('#chat-boxes').hide();
        $('.profile').hide();
        $('#home').show();
    });

    $('.backbtn').click(function(){
        isclicked=false;
        $('#sidebar-container1').hide();
        $('#sidebar-container').hide();
        $('#sidebar').hide();
        $('#chatbar').show();
        $('#chat-boxes').show();
    });

});



