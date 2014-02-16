$(document).ready(function(){
  $("a.new_window").attr("target", "_blank");
 
            $(document).ready(function(){
                 $("#cmdComputerLab").click(function(){
                     $("#pic").load("ajax-contents/ccnow.html");
                 });
            
             
                 $("#cmdServerRoom").click(function(){
                     $("#pic").load("ajax-contents/serverRoom.html");
                 });
            
             
                 $("#cmdLAN").click(function(){
                     $("#pic").load("ajax-contents/lantext.html");
                 });
            
          
                 $("#cmdTPRBooking").click(function(){
                     $("#pic").load("ajax-contents/tele.html");
                 });
				 
				 $("#cctimings").click(function(){
                     $("#pic").load("ajax-contents/CCTimings.html");
                 });
				 
				 $("#cmdPDFDownloads").click(function(){
                     $("#pic").load("ajax-contents/new-downloads.html");
                 });
				 
				 $("#server").click(function(){
                     $("#pic").load("ajax-contents/serverRoom.html");
                 });
				 
				 $("#rules").click(function(){
                     $("#pic").load("ajax-contents/Rules.html");
                 });

                 $("#cmdHome").click(function(){
                     location.reload();
                 });
            });


		jQuery(".content").hide();
		  //toggle the componenet with class msg_body
		  jQuery(".CSSTableGenerator").click(function()
		  {
		    jQuery(this).next(".content").slideToggle(500);
		  });

 });