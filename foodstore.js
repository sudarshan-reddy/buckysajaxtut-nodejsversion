var xmlHttp = new XMLHttpRequest();
//window.addEventListener("load" , process , true);
function process(){
    if(xmlHttp.readyState === 4 || xmlHttp.readyState === 0){
        var food = encodeURIComponent(document.getElementById("foodtext").value);
        xmlHttp.open("GET" , "http://localhost:8001/" + food ,true );
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
    }else{
        setTimeout("process()" , 1000);
    }
}

function handleServerResponse(){
    if(xmlHttp.readyState === 4){
        if(xmlHttp.status === 200){
            //var xmlResponse = xmlHttp.responseXML;
            //var xmlDocumentElement = xmlResponse.documentElement;
            //var message = xmlDocumentElement.firstChild.data;
            document.getElementById("changer").innerHTML = '<span style = color:blue>' + xmlHttp.responseText + '</span>';
            setTimeout("process()" , 1000);
        }else{
            alert('Something went wrong');
        }
    }
}
