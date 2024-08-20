$(document).ready(function(){
    $(".ib-ctrl").click(function(){
        let trigger = $(this).attr("id");
        
        $(".ib-ctrl").each(function(){
            $(this).removeClass("ib-ctrl-focused");
        });
        
        $("#"+trigger).addClass("ib-ctrl-focused");

        $(".ib-table-background").css("display","none");

        let n = trigger.match(/\d+/g);
        let table = $(".ib-table-background");

        $(table[n[0]]).css("display","block");
    });

    $("#ib-ctrl-1").click();
});