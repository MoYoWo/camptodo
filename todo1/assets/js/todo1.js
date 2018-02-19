//add click listeners so that when you click on a list item
//it grays out and get strikethrough

// $("li").click(function(){
// 	//if li is gray
// 	console.log($(this).css("color"));
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		//turn it black with no line through
// 		//this is an object where you can set multiple css properties
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"			
// 		});
// 	}else{
// 		//otherwise make it gray with line through
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"			
// 		});
// 	}
// });
//OR instead of the above... create a class in css and then do this one line
//new todos aren't deleting...need to use on() rather than click()
//and need to do at UL level because... we need to add listeners that exist
//at the time we add the listener
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//now add a click listener so that clicking on the X removes the item with fadeout
//later we'll make a slide out on hover that reveals a fontawesome trash icon 
//test with an alert. on dismiss, you get the LI function 
//and the event bubbles up through the layers. To prevent: say "stop prop"
//use .parent to the the span's parent LI
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

//click listener on button icon to show/hide the input
//this selector isn't working 
//fix
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

