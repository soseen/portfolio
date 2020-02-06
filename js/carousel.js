
$(document).on('click', '.next-element', (function() {

    let slider = $(".projects-list");
    var contentPrev =  $(".prev-element").html();

        /* Next slide */
        
    
            $(".prev-element").remove();  
            /* Step */
            
            $(".active-element").addClass("prev-element");
            $(".active-element").removeClass("active-element");
        
            $(".next-element").addClass("active-element");
            $(".next-element").removeClass("next-element");

            let newElement = $("<div/>");
            newElement.append(contentPrev);
            newElement.addClass("next-element");
            slider.prepend(newElement);

}));


$(document).on('click', '.prev-element', (function() {

    let slider = $(".projects-list");
    let contentNext =  $(".next-element").html();
        
        $(".next-element").remove();  
        
        $(".active-element").addClass("next-element");
        $(".active-element").removeClass("active-element");
    
        $(".prev-element").addClass("active-element");
        $(".prev-element").removeClass("prev-element");  
    
        let newElement = $("<div/>");
        newElement.append(contentNext);
        newElement.addClass("prev-element");
        slider.prepend(newElement);

}));


    