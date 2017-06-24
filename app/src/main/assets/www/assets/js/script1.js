


!function ($) {

$(document).ready(function($){

     
   $('.page-header').html('<span class="custom_box_shadow_header body_font" id="my_medicine"><a href="#">My Medications</a></span><span class="custom_box_shadow_header body_font"id="recent_view"><a href="#" style="float:right;">Recently Viewed</a></span>');    

 
    alert('i am custom_search_medicines'); 
    $('input').keypress(function(event){
       
       var enterOkClass =  jQuery(this).attr('class');
        if (event.which == 13) {
            var input_data=$("#medicine_search").val();	
var data=get_medicine(input_data);

            event.preventDefault();
            return false;   
        }
    });
    





var input_data=$("#medicine_search").val();	

 
 
$("#submit").click(function(){
   
var input_data=$("#medicine_search").val();	
var data=get_medicine(input_data);

return false;
	
});






function get_medicine(input_data){
 
     $('#medicine_count').show();
    $('#list_medicine').show();
  if(input_data.length<3)
{
  var input_data=$("#medicine_search").val();
  if(input_data.length<3)
{
   
document.getElementById("bootstrap").innerHTML = "<div class='// alert // alert-danger' role='// alert'>Type atleast 3 characters</div>";
  
$("#medicine_count").html("Type atleast 3characters");
$("#list_medicine").html("");
$("#medicines").hide();
return false;
}

return false;
}




$("#recent_heading").hide()
 $("#Recently_Viewed").hide();
//// alert("Function Inside");

   var baseUrl = 'http://183.82.97.23:8080';
   
   
var url=baseUrl+'/get_medicine_list/'+encodeURIComponent(input_data)+'/4429b9cf3a455a39fdd7d009aab891/1000?_format=json';
 
 
 
 
 
 

	$.ajax({
            
                   url :url,
                    type: 'GET',
//                contentType: "application/x-www-form-urlencoded",
		dataType: 'json',
                              crossDomain: true,
		//jsonpCallback: 'jsonCallback',
		 success: function(data) {
                    alert('');
                    
        if(!data.response.suggestions)
        { 
            
            $("#medicine_count").hide();
           $("#list_medicine").hide();
            $("#list_medicines_div").show();
           $("#list_heading").removeClass("hide");
            $("#list_heading1").removeClass("hide");
            $("#list_medicines_div").removeClass("hide");
            $("#div_add_medicine").removeClass("hide");
	
	return false;
        }	
        else{

            $("#list_heading").addClass("hide");
            $("#list_heading1").addClass("hide");
             $("#list_medicines_div").addClass("hide");
             $("#div_add_medicine").addClass("hide");
             $("#list_medicines").html('');
        }
	var get_data='';
	var new_date='';	
//	var json='[';
        var medicine_class='';
        
        
        for(i=0;i<data.response.suggestions.length;i++)
        {
        
        
         var cons='';

                       for(j=0;j<data.response.suggestions[i].constituents.length;j++)
              {
                  if(cons)
                  {
                          cons=data.response.suggestions[i].constituents[j].name+' ('+data.response.suggestions[i].constituents[j].strength.trim()+') + '+cons;
              
                  }
                  else
                  {  
                  cons=data.response.suggestions[i].constituents[j].name+' ('+data.response.suggestions[i].constituents[j].strength.trim()+')';
              }
              }
              
              
        if(data.response.suggestions[i].category=="Syrup")
        {
         medicine_class='custom-icon-syrup'; 
        
         }
         else if(data.response.suggestions[i].category=="Tablet")
         {
             medicine_class='custom-icon-tablet'; 
         }
         else if(data.response.suggestions[i].category=="Capsule")
         {
             medicine_class='custom-icon-capsule';
         }
         else if(data.response.suggestions[i].category=="Injection")
         {
             medicine_class='custom-icon-injection';
         }
         else if(data.response.suggestions[i].category== "Suspension")
           {
           medicine_class='custom-icon-suspension'; 
            }
           else if(data.response.suggestions[i].category== "Cream")
           {
             medicine_class='custom-icon-cream'; 
            }
            else if(data.response.suggestions[i].category== "Lotion")
             {
               medicine_class='custom-icon-lotion'; 
           }
         else {
             medicine_class='custom-icon-medicalkit';
         }
        
//        
//        get_data=get_data+"<div class='row custom_box_shadow'  style='margin-bottom:5px;'><div class='"+medicine_class+" pull-left col-xs-1'></div><div  class='col-xs-8 col-md-9 body_font' style='padding-top: 12px;'><a href='/custom_medicine_details?med="+encodeURIComponent(data.response.suggestions[i].suggestion)+"' >"+data.response.suggestions[i].suggestion+"</a></div><div class='pull-right col-md-1 col-xs-1'><a href='\custom_add_medications?mode=Add&med="+encodeURIComponent(data.response.suggestions[i].suggestion)+"'><br>"+cons+"<i id='add_medicine' style='float:right;margin-bottom:8px;'class='fa fa-plus-circle fa-3x custom_success_circle'></i></a></div></div>";
//  


 get_data1='<div class="col-xs-2 col-sm-1  padding-0"><div class="'+medicine_class+' pull-left"></div></div>\n\
<div class="col-xs-8 col-sm-10 padding-0"><a href="/custom_medicine_details?med='+encodeURIComponent(data.response.suggestions[i].suggestion)+'" >'+data.response.suggestions[i].suggestion+'</a><br>'+cons+'<br></div>\n\
<div class="col-xs-2 col-sm-1 padding-0"><i id='+encodeURIComponent(data.response.suggestions[i].suggestion)+' class="fa fa-plus-circle fa-3x custom_success_circle pull-right add_medicine"></i></div>';

 get_data=get_data+'<div class="col-xs-12 custom_box_shadow custom_box_shadow_header custom_box_shadow_body">'+get_data1+'</div>';
 
        }

	$("#list_medicine").html(get_data);
	
	$("#medicine_count").html(i+ " medicines found!");
	 document.getElementById("bootstrap").innerHTML = " ";
	 
	$("#medicines").show();

		},
		
		
    error: function(e) {
//        ("error");
    }
	});
        
  	
   }

   
   
});
}(window.jQuery);
