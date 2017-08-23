$(document).ready(function(){
		$(".beach").mouseover(function(){
		$(".img01").show()
	})
		$(".beach").mouseout(function(){
		$(".img01").hide()
	})
		$(".beach").click(function(){
			$(this).unbind("mouseout");
			$(".wire01title").hide();
			$(".img01").css({"position":"relative","top":"160px"});
			$(".secondselect").show();

		})

		$(".plant").mouseover(function(){
		$(".img02").show()
	})
		$(".plant").mouseout(function(){
		$(".img02").hide()
	})
		$(".plant").click(function(){
			$(this).unbind("mouseout");
			$(".wire01title").hide();
			$(".img02").css({"position":"relative","top":"160px"})
		})

		$(".dojo").mouseover(function(){
		$(".img03").show()
	})
		$(".dojo").mouseout(function(){
		$(".img03").hide()
	})
		$(".dojo").click(function(){
			$(this).unbind("mouseout");
			$(".wire01title").hide();
			$(".img03").css({"position":"relative","top":"160px"})
		})


		$(".forest").mouseover(function(){
		$(".img06").show()
	})
		$(".forest").mouseout(function(){
		$(".img06").hide()
	})
		$(".forest").click(function(){
			$(this).unbind("mouseout");
			$(".wire01title").hide();
			$(".img06").css({"position":"relative","top":"160px"})
		})

		$(".matrix").mouseover(function(){
		$(".img04").show()
	})
		$(".matrix").mouseout(function(){
		$(".img04").hide()
	})
		$(".matrix").click(function(){
			$(this).unbind("mouseout");
			$(".wire01title").hide();
			$(".img04").css({"position":"relative","top":"160px"})
		})

		$(".snow").mouseover(function(){
		$(".img05").show()
	})
		$(".snow").mouseout(function(){
		$(".img05").hide()
	})
		$(".snow").click(function(){
			$(this).unbind("mouseout");
			$(".wire01title").hide();
			$(".img05").css({"position":"relative","top":"160px"})
		})



		var ninjaimg = ["mikey.png", "raphael.png", "leo.png", "donny.png"];
            $(".leftselect").change(function() {
                var val = parseInt($(".leftselect").val());
                $("#leftimg").attr("src", ninjaimg[val]).css({"width":"100px","height":"100px"});
            })

            $(".rightselect").change(function() {
                var val2 = parseInt($(".rightselect").val());
                $("#rightimg").attr("src", ninjaimg[val2]).css({"width":"100px","height":"100px"});
            })

	})

	




    
        
                 
        
    
