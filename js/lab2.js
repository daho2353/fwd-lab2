function fillOutResults()
{
    //reset
    var name;
    document.getElementById("results").value="";
    //name
    name = document.getElementById("name").value;
    if(name === "")
    {
        document.getElementById("results").value = "Name: N/A \n";
    }
    else
    {
        document.getElementById("results").value = "Name: " + name + "\n";
    
    }    //radio
    if(document.getElementById("freshman").checked === true)
    {
        document.getElementById("results").value += "Year: Freshman\n";
    }
    else if(document.getElementById("sophmore").checked === true)
    {
        document.getElementById("results").value += "Year: Sophmore\n";
    }
    else if(document.getElementById("junior").checked === true)
    {
        document.getElementById("results").value += "Year: Junior\n";
    }
    else if(document.getElementById("senior").checked === true)
    {
        document.getElementById("results").value += "Year: Senior\n";
    }
    else if(document.getElementById("supersenior").checked === true)
    {
        document.getElementById("results").value += "Year: Super Senior\n";
    }
    else
    {
        document.getElementById("results").value += "Year: N/A\n";
    }
    //2nd set of radio buttons
    if(document.getElementById("mitr").checked === true)
    {
        document.getElementById("results").value += "Favorite Course: Meaning of Information Technology\n";
    }
    else if(document.getElementById("dfr").checked === true)
    {
        document.getElementById("results").value += "Favorite Course: Design Foundations\n";
    }
    else if(document.getElementById("imgr").checked === true)
    {
        document.getElementById("results").value += "Favorite Course: Image\n";
    }
    else if(document.getElementById("webr").checked === true)
    {
        document.getElementById("results").value += "Favorite Course: Web\n";
    }
    else if(document.getElementById("textr").checked === true)
    {
        document.getElementById("results").value += "Favorite Course: Text\n";
    }
    else if(document.getElementById("coder").checked === true)
    {
        document.getElementById("results").value += "Favorite Course: Code\n";
    }
    else
    {
        document.getElementById("results").value += "Favorite Course: N/A";
    }
}

$("document").ready(
    function(){
        $("#mithidden").hide();
        $("#dfhidden").hide();
        $("#imghidden").hide();
        $("#webhidden").hide();
        $("#texthidden").hide();
        $("#codehidden").hide();
        $("#mitshow").change(function(){
            if($("#mitcb").is(':checked') === true) //https://api.jquery.com/checked-selector/
            {
                $("#mithidden").show();
            }
            else
            {
                $("#mithidden").hide();
            }   
        });
        $("#dfshow").change(function(){
            if($("#dfcb").is(':checked') === true)
            {
                $("#dfhidden").show();
            }
            else
            {
                $("#dfhidden").hide();
            }
        });
        $("#imgshow").change(function(){
            if($("#imgcb").is(':checked') === true)
            {
                $("#imghidden").show();
            }
            else
            {
                $("#imghidden").hide();
            }
        });
        $("#webshow").change(function(){
            if($("#webcb").is(':checked') === true)
            {
                $("#webhidden").show();
            }
            else
            {
                $("#webhidden").hide();
            }
        });
        $("#textshow").change(function(){
            if($("#textcb").is(':checked') === true)
            {
                $("#texthidden").show();
            }
            else
            {
                $("#texthidden").hide();
            }
        });
        $("#codeshow").change(function(){
            if($("#codecb").is(':checked') === true)
            {
                $("#codehidden").show();
            }
            else
            {
                $("#codehidden").hide();
            }
        });
    }
)

var tam = document.getElementById("submit");
tam.addEventListener("click", fillOutResults);