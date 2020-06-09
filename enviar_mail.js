$(document).ready(function(){
    $("#benviar").click(function() {
        var email=$("#email1").val();
        var nom=$("#pers").val();
        var obser=$("#obs").val();
        //alert(email+nom+obser);
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "juandavidpaternina504@gmail.com",
            Password : "a6d88825-6de7-4145-8826-41226be5c1a0",
            To : email,
            From : "juandavidpaternina504@gmail.com",
            Subject : "Notificación",
            Body : "Sr(a):"+nom+"Notificación: "+obser
        }).then(
          message => alert(message)
        );   
    })})