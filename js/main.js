jQuery(document).ready(function()
{
    "use strict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
                items:1,
                duration:1000,
                pauseOnHonver:true

        },
        auto:true,
        items:
        {
            visible:{
                min:1,
                max:1
            },
            height: "variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
    });
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >=70){
            $("header").addClass('secondary');
        }
        else 
        if ($("header").addClass('secondary')){
            $("header").removeClass('secondary');
        }

    });

});