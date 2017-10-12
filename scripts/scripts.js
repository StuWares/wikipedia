// https://en.wikipedia.org/w/api.php - English wikipedia api end point

$(document).ready(function(){


	$("#search-button").on("click", function(){

		var searchTerm = $("#search-input").val();
		// TODO convert user input to an array

		$.ajax({
			type: "GET",
			url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?",
			//url: "https://en.wikipedia.org/w/api.php",
			contentType: "application/json; charset=utf-8",
			async: false,
			dataType: "json",
			success: function (data, textStatus, jqXHR) {
				console.log(data);
			},
			error: function(errorMessage){

			}

		})

	})



})