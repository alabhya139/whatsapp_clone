$(document).ready(function () {

    /*Nav Bar disappear after one click*/
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });

    var isclicked = false;
    /*Handle smaller devices screen render*/
    $('.chat-messages').click(function () {
        isclicked = true;
        if ($(window).width() <= 767) {
            $('#chatbar').hide();
            $('#sidebar-container').show();
            $('#sidebar').show();
            $('#chatbox').show();
            $('#sidebar-header').show();
        } else {
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

    /*Handle Page Reloads and resizes */
    $(window).on('resize', function () {
        var win = $(this);
        if ($(window).width() <= 767) {
            if (isclicked == true) {
                $('#sidebar-container1').hide();
                $('#sidebar-container').show();
                $('#chatbar').hide();
                $('#sidebar').show();
                $('#chatbox').show();
                $('#sidebar-header').show();
                $('#chat-boxes').hide();
                $('.profile').hide();
                $('#home').hide();
            } else {
                $('#sidebar-container1').hide();
                $('#sidebar-container').hide();
            }
        }
        if ($(win).width() >= 767) {
            if (isclicked == true) {
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
    /*executes on page first load */
    $('.profile').hide();
    $('#chat-boxes').hide();
    $('#contact-boxes').hide();
    $('#sidebar').hide();
    $('#chatbox').hide();
    $('#sidebar-header').hide();

    /* Handles profile page*/
    $('#profiles').click(function () {
        isclicked = false;
        $('.navbar-brand').html('<strong>Profile</strong>');
        $('#home').hide();
        $('#chat-boxes').hide();
        $('#contact-boxes').hide();
        $('.profile').show();
    });

    /*Handles Chats Page*/
    $('#chats').click(function () {
        $('.navbar-brand').html('<strong>Chats</strong>');
        $('#home').hide();
        $('.profile').hide();
        $('#contact-boxes').hide();
        $('#chat-boxes').show();
    });

    /*Handles Home page*/
    $('#homes').click(function () {
        $('.navbar-brand').html('<strong>Home</strong>');
        isclicked = false;
        $('#chat-boxes').hide();
        $('#contact-boxes').hide();
        $('.profile').hide();
        $('#home').show();
    });

    /*Handle Contacts Page*/
    $('#contacts').click(function () {
        $('.navbar-brand').html('<strong>Contact</strong>');
        isclicked = false;
        $('#home').hide();
        $('#chat-boxes').hide();
        $('.profile').hide();
        $('#contact-boxes').show();
    });

    /*Handles back button click on chat display area*/
    $('.backbtn').click(function () {
        isclicked = false;
        $('#sidebar-container1').hide();
        $('#sidebar-container').hide();
        $('#sidebar').hide();
        $('#chatbar').show();
        $('#chat-boxes').show();
    });

});