$(document).ready(runContent);

function runContent(){
    
    let rota = window.location.search.substring(1)
    if(rota == ""){
        rota = "_index"
    }

        $.get(rota + ".html", function (data){
            $("#content").html(data);
        } )
        
}