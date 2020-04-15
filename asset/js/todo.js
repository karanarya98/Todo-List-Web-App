$("ul").on("click","li",function(){
	$(this).toggleClass(".completed");
});

$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); // to avoid deleteing the entire ul and body
});

//To add task to the list and only add it when enter is pressed with .which value 13
$("input[type=text").keypress(function(event){
	if (event.which===13 &&  $(this).val().length != 0){
		var todo = $(this).val();
		$(this).val();
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todo+"</li>");
	}
});

$("#toggle-form").click(function(){
$("input[type=text]").fadeToggle(300);
});
