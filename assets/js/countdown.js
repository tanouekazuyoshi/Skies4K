window.onload = function(e){

        // Set the date we're counting down to
        var countDownDate = new Date("Mar 24, 2019 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
            
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
            
        // Time calculations for days, hours, minutes and seconds
        var month = Math.floor( (distance / (1000 * 60 * 60 * 24))/30);
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));

        var ddd = (days > 30 ) ? (days % 30): '';
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        var datecontainer = [
            document.getElementById('month'),
            document.getElementById('days'),
            document.getElementById('hours'),
            document.getElementById('minutes'),
            document.getElementById('seconds')
        ];
        

           if( !null ==  datecontainer[0]  ){
            datecontainer.innerHTML = month;
            datecontainer.innerHTML = ddd;
            datecontainer.innerHTML = hours;
            datecontainer.innerHTML = minutes;
            datecontainer.innerHTML = seconds;
           }

        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}
