// Put your application javascript here


if( document.getElementById('sort_by') != null){
    document.querySelector('#sort_by').addEventListener('change', function(e) {
        var url = new URL (window.location.href);
        url.searchParams.set('sort_by', e.currentTarget.value);
    
        window.location = url.href;
    });
}

if( document.getElementById('AddressCountryNew') != null){
    document.getElementById('AddressCountryNew').addEventListener('change', function(e){
        var provinces = this.options[this.selectedIndex].getAttribute('data-provinces');
        var provincesSelector = document.getElementById('AddressProvinceNew');
        var provincesArray = JSON.parse(provinces);

        //console.log(provincesArray)
        if(provincesArray.length < 1){
            provincesSelector.setAttribute('disabled', 'disabled');

        }else{
            provincesSelector.removeAttribute('disabled')
        }
        provincesSelector.innerHTML = '';
        var option = '';
        for(var i = 0; i < provincesArray.length; i++){
            option += '<option value="' + provincesArray[i][0] + '">'+ provincesArray[i][0] + '</option>';
        }

        provincesSelector.innerHTML = option;
    })
}

if(document.getElementById("forgotPassword") != null ){
    document.getElementById("forgotPassword").addEventListener("click", function(e){

        const element = document.querySelector("#forgot_password_form");
        if(element.classList.contains("d-none")){
            element.classList.remove("d-none");
            element.classList.add("d-block");
        }
    }); 
}
