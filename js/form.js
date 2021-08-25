$(document).ready(function(){

   var phoneChack = false;
    $('.introduce_phone').inputmask("(999)999-9999", {
        oncomplete: function(e) {
            let tab_index = $(e.target).attr('tabindex');
            console.log(e.target.value)
            $('input').attr('tabindex', tab_index++).focus()
            phoneChack = true;

        }
    });  

    $('#form').bind("submit",checkForm);
    function checkForm(e){
        e.preventDefault()

        var el = document.getElementById('form')

        var f_name = el.f_name.value;
        var l_name = el.l_name.value;
        var phone = el.phone.value;
        var zip_code = el.zip_code.value;
        var fail = "";
        var acept = "Форма заполнена";
        
        if(f_name == "" || l_name == "" ||  phone == "" || zip_code == "")
        fail = "All fields must be filled in correctly";

        else if(f_name.length <= 1 )
        fail = "Enter a valid name";

        else if(l_name.length <= 1 )
        fail = "enter a valid last name";

        else if(zip_code.length < 5 || zip_code.length > 5)
        fail = "Enter a valid zip code"

        else if (phoneChack == false)
        fail = "Enter a valid phone number"

        console.log(phoneChack)
        console.log("Name:" + " " + f_name + ";")
        console.log("L_Name:" + " " + l_name + ";")
        console.log("Phone"  + " " + phone + ";");
        console.log("zip_code"  + " " + zip_code + ";");
        
        if( fail != ""){
            $("#error").html(fail)
            $("#acept").html("")
        }else{
            $("#acept").html(acept)
            $("#error").html("")
            $('.user_name').html(f_name)
            setTimeout(() => {
                $('.content').addClass('right_block-active')
                $('.footer').addClass('footer-active')
                if( window.innerWidth < 600 ){
                    $('.left_block h1').html("SuperHome")
                }
            }, 1000);
            setTimeout(() => {
                $('.assistent_message').addClass('assistent_message-active')
            }, 4000);
        }
    }



    $('#form2').bind("submit",checkForm);
    function checkForm(e){
        e.preventDefault()

        var el = document.getElementById('form2')

       
        var zip_code = el.zip_code.value;
        var fail = "";
        var acept = "Форма заполнена";
        
        if(zip_code == "")
        fail = "All fields must be filled in correctly";
        
        else if(zip_code.length < 5 || zip_code.length > 5)
        fail = "Enter a valid zip code"
    

       
        console.log("zip_code"  + " " + zip_code + ";");
        
        if( fail != ""){
            $("#error").html(fail);
            $("#acept").html("");
        }else{
            $("#acept").html(acept);
            $("#error").html("");
            location.assign('sms:3100001111&body=Hello%20SuperHome!%20I\'m%20interested%20in%20getting%20a%20solar%20panel%20install%20quote%20for%20my%20home.');
            
        }
    }



    
  

})