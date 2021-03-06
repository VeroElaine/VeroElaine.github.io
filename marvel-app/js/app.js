//console.log("hola");

$(() => {

    const ajaxCharacter=() => {

   $.ajax({
       url:"https://gateway.marvel.com/v1/public/characters?name="+ $userInput + "&ts=07161992&apikey=2041cbab149d8b960f5c52270af4d24f&hash=5864d380d3d5c963472ce9003cb6fdea"
   }).then(
       (data) => {
           console.log(data);
            //Get comic character name
            id = (data.data.results[0].id)
           $("#name").html(data.data.results[0].name);
           //Get character Image
           const $finalImage = $("<img>");
           $finalImage.attr("src", data.data.results[0].thumbnail.path +  "/portrait_uncanny." + data.data.results[0].thumbnail.extension)
           $("#image").append($finalImage)
           //get character description
           $("#description").html(data.data.results[0].description);
           // $("#learnMore").html(data.data.results[0].urls[0].url);

  $.ajax({
      url: "https://gateway.marvel.com:443/v1/public/comics?characters="+id+"&ts=07161992&apikey=2041cbab149d8b960f5c52270af4d24f&hash=5864d380d3d5c963472ce9003cb6fdea",
  }).then(
      (data) => {
            for(i=0; i < data.data.results.length; i++){

                const $comicDiv = $("<div>").addClass("comicDiv").attr("id", "div" + i);
                $(".carousel-images").append($comicDiv);
                $comicDiv.css("display", "none")
                $("#comics").append($(".carousel-images"))
                const $finalImage = $("<img>")
                $finalImage.attr("src", data.data.results[i].thumbnail.path +  "/portrait_uncanny." + data.data.results[i].thumbnail.extension)
                $comicDiv.append($finalImage)
                const $comicLink = $("<ul>");
                $("#urls").append($comicLink);
                const $link = $("<a>");
                $comicLink.append($link);
                $link.attr("href", data.data.results[i].urls[0].url)
                $link.html(data.data.results[i].urls[0].url).text("More Info");
                $comicDiv.append($link)
               }
               $("h6").remove()


                 $(".comicDiv").eq(0).css("display", "block");
                 $(".comicDiv").eq(1).css("display", "block");
                 $(".comicDiv").eq(2).css("display", "block");
                 //defining index for click function at end of code
                 currentImageIndex = 0;
                 // console.log(currentImageIndex);
                 highestIndex = $(".comicDiv").length-1;
                // console.log(highestIndex);

            })
    $.ajax({
        url:"https://gateway.marvel.com/v1/public/events?characters="+id+"&ts=07161992&apikey=2041cbab149d8b960f5c52270af4d24f&hash=5864d380d3d5c963472ce9003cb6fdea"
   }).then(
        (data) => {
            //console.log(data.data.results[0].name);
             //Get comic character name
             for(i=0; i < data.data.results.length; i++){
                 const $crossDiv = $("<div>").addClass("crossDiv").attr("id", "div" + i);
                 $(".events-images").append($crossDiv);
                 $crossDiv.css("display", "none")
                 $("#events").append($(".events-images"))
                 const $crossImage = $("<img>")
                 $crossImage.attr("src", data.data.results[i].thumbnail.path +  "/portrait_uncanny." + data.data.results[i].thumbnail.extension)
                 $crossDiv.append($crossImage)
                 const $crossLink = $("<ul>");
                 $("#urls").append($crossLink);
                 const $cLink = $("<a>");
                 $crossLink.append($cLink);
                 $cLink.attr("href", data.data.results[i].urls[0].url);
                 $cLink.html(data.data.results[i].urls[0].url).text("More Info");
                 $crossDiv.append($cLink)
                 }
                 $("h5").remove()


                 $(".crossDiv").eq(0).css("display", "block");
                 $(".crossDiv").eq(1).css("display", "block");
                 $(".crossDiv").eq(2).css("display", "block");

                 currentEventIndex = 0;
                 // console.log(currentImageIndex);
                 highestEventIndex = $(".crossDiv").length-1;

        },

       (error) => {
           console.log(error);
       }
   )

       $("form").trigger("reset");

   })
}/////////end of ajax function

//%%%%%%%%%here make it call random character on load %%%%%%%%%%/////
   let $userInput = "thor";
//call function to run thor on load
   ajaxCharacter();
    $("form").on("submit", (event) => {

        event.preventDefault();

        $userInput = $('input[type="text"]').val();
        //empty content per each user input
        $("#image").empty();
        // $("#description").empty();
        $(".carousel-images").empty();
        $(".events-images").empty();

//call ajax function again but now with user input
        ajaxCharacter();

    //console.log($userInput);

})
////click global variables for comic carousel
    let currentImageIndex = 0;
    console.log($(".comicDiv"));
    let highestIndex = $(".comicDiv").length;
    console.log($(".next"));
//comic carousel
$(".next").on("click", () => {


        $(".comicDiv").eq(currentImageIndex).css("display", "none");
        $(".comicDiv").eq(currentImageIndex-1).css("display", "none");
        // $(".comicDiv").children().eq(0).css("display", "none");
        if(currentImageIndex < highestIndex) {
        currentImageIndex++;
        }else{
        currentImageIndex = 0;
        }
        $(".comicDiv").eq(currentImageIndex).css("display", "block");
        $(".comicDiv").eq(currentImageIndex + 1).css("display", "block");
        $(".comicDiv").eq(currentImageIndex + 2).css("display", "block");

        // console.log(currentImageIndex);
        // console.log(highestIndex);
    })
    $(".previous").on("click", () => {

        $(".comicDiv").eq(currentImageIndex).css("display", "none");
        $(".comicDiv").eq(currentImageIndex+1).css("display", "none");
        $(".comicDiv").eq(currentImageIndex+2).css("display", "none");

        if(currentImageIndex > 0){
            currentImageIndex --;
        } else {
            currentImageIndex = highestIndex
        };

        $(".comicDiv").eq(currentImageIndex ).css("display", "block");
        $(".comicDiv").eq(currentImageIndex+1).css("display", "block");
        $(".comicDiv").eq(currentImageIndex+2).css("display", "block");
        // console.log(currentImageIndex);
        // console.log(highestIndex);

    })
    ///create global variable for cross-over carousel
    let currentEventIndex = 0;
    console.log($(".crossDiv"));
    let highestEventIndex = $(".crossDiv").length;
    console.log($(".eventsnext"));
    //click function for cross-over carousel
    $(".eventsNext").on("click", () => {


        $(".crossDiv").eq(currentEventIndex).css("display", "none");
        $(".crossDiv").eq(currentEventIndex-1).css("display", "none");
            // $(".comicDiv").children().eq(0).css("display", "none");
            if(currentEventIndex < highestEventIndex) {
            currentEventIndex++;
            }else{
            currentEventIndex = 0;
            }
            $(".crossDiv").eq(currentEventIndex).css("display", "block");
            $(".crossDiv").eq(currentEventIndex + 1).css("display", "block");
            $(".crossDiv").eq(currentEventIndex + 2).css("display", "block");

            // console.log(currentImageIndex);
            // console.log(highestIndex);
        })
        $(".eventsPrevious").on("click", () => {

            $(".crossDiv").eq(currentEventIndex).css("display", "none");
            $(".crossDiv").eq(currentEventIndex+1).css("display", "none");
            $(".crossDiv").eq(currentEventIndex+2).css("display", "none");

            if(currentEventIndex > 0){
                currentEventIndex --;
            } else {
                currentEventIndex = highestEventIndex
            };

            $(".crossDiv").eq(currentEventIndex).css("display", "block");
            $(".crossDiv").eq(currentEventIndex+1).css("display", "block");
            $(".crossDiv").eq(currentEventIndex+2).css("display", "block");
            // console.log(currentImageIndex);
            // console.log(highestIndex);

        })




}) //closing jQuery on document load




//code graveyard
//trying to loop through array and put it in li within ul within #comics
//$("#comics").html(data.data.results[0].comics.items[i].name);
//const $div = $("<div>");
//$("#comics").append($div);
//$div.append($comicBooks);
//$("#comics").appendTo($comicList)
//$("body").append($("#comics"))

//changed lists to divs, no longer need lists below
//const $movieList = $("<li>")
//$movies.append($movieList);
//const $comicList = $("<li>");
//$comicBooks.append($comicList)

//creating image link
//const $characterImage = $("<div>")
//const $div = $("<div>");
//$("#image").append($div);
//const $imagePath = $("#image").html(data.data.results[0].thumbnail.path);
//$div.append($imagePath);
//const $imageExtension =$("#image").html(data.data.results[0].thumbnail.extension);
//$div.append($imageExtension);
//const $div = $("<img>").append($("#imagePath"));
//$div.append($characterImage);
//$characterImage.html(data.data.results[0].thumbnail.extension);
//$("#image").attr("src", $div);
//console.log($div);
// const $characterImage = $("<div>");
// $characterImage.html(data.data.results[0].thumbnail.path);
// $("#image").append($characterImage);
// const $jpg = $("<div>")
// $jpg.html(data.data.results[0].thumbnail.extension)
// $("#image").append($jpg)
// //const $characterImage = $("<div>")
// const $div = $("<div>");
// $("#image").append($div);
// //const $imagePath = $("#image").html(data.data.results[0].thumbnail.path);
// //$div.append($imagePath);
// const $imageExtension =$("#image").html(data.data.results[0].thumbnail.extension);
// $div.append($imageExtension);
// //const $div = $("<img>").append($("#imagePath"));
// //$div.append($characterImage);
// //$characterImage.html(data.data.results[0].thumbnail.extension);
// $("#image").attr("src", $("#image"));
// console.log($div);
//$characterImage.append($finalImage)
// $finalImage.append($jpg)
//console.log($characterImage.html(data.data.results[0].thumbnail.path).text("/portrait_xlarge.jpg"));



//old code get each comic and events
//loops through to get each comic
// for(i=0; i < data.data.results[0].comics.items.length; i++){
//     const $comicBooks = $("<div>").css("color", "red");
//     $("#comics").append($comicBooks);
//     $comicBooks.html(data.data.results[0].comics.items[i].name);
// }
//loops thorugh to get each movie appearance
// for(i=0; i < data.data.results[0].events.items.length; i++){
    // const $movies = $("<div>");
    // $("#movies").append($movies);
    // $movies.html(data.data.results[0].events.items[i].name);



    // const $eventsLink = $("<ul>");
    // $("#urls").append($eventsLink);
    // const $eLink = $("<a>");
    // $eventsLink.append($eLink);
    // $eLink.attr("href", data.data.results[0].events.items[i].resourceURI)
    // $eLink.html(data.data.results[0].events.items[i].resourceURI).text("More Info")
    // $("#movies").append($eLink)
    // let $userInput = $('input[type="text"]').val();
        // if($('input[type="text"]').val("")){
        //     let $userInput = "thor"
        // }

// }
