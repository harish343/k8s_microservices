var api = "http://hostname.com" // get the API Gateway from the environment



$(document).ready(function() {
    $("#btn").click(function() {
        $.ajax({
            url: api + "/api/randomquote",
            type: "GET",
            dataType: "json",
            timeout: 3000,
            success: function(data) {
                $("#quote").removeClass('is-danger') 
                $("#quote").addClass('is-link')
                $( "#quote" ).html(data.quote.quote + '</br><b>'+ data.quote.by +'</b>'); 
            },
            error: function(xmlhttprequest, textstatus, message) {
                $("#quote").removeClass('is-link')
                $("#quote").addClass('is-danger')
                if(textstatus==="timeout") {
                    $( "#quote" ).html("got timeout");
                } else {
                    $( "#quote" ).html(message);
                }
            }
        })
    })
})
$(document).ready(function() {
    $("#btn1").click(function() {
        $.ajax({
            // url: api + "/api/randomjoke",
            url: "http://hostname.com/api/randomjoke",
            type: "GET",
            dataType: "json",
            timeout: 3000,
            success: function(data) {
                $("#joke").removeClass('is-danger') 
                $("#joke").addClass('is-link')
                $( "#joke" ).html(data.joke.question + '</br><b>'+ data.joke.answer +'</b>'); 
            },
            error: function(xmlhttprequest, textstatus, message) {
                $("#joke").removeClass('is-link')
                $("#joke").addClass('is-danger')
                if(textstatus==="timeout") {
                    $( "#joke" ).html("got timeout");
                } else {
                    $( "#joke" ).html(message);
                }
            }
        })
    })
})