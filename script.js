var date = $('#datedata');

var img = $(document.createElement('img')).appendTo('#img');

function showImg(){
    $.ajax({
        url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method: 'get',
        success: function(data){
            //----------For multiple random pics of that day

            /*var index = Math.floor(Math.random()* data.photos.length);
            var imgUrl = data.photos[index].img_src;*/

            //--------For a single pic
            var imgUrl = data.photos[0].img_src;
            console.log(imgUrl);
            img.attr({
                src: imgUrl,
                width: '50%',
                height: '100%'
            });
        },
        data: {
            earth_date: date.val(),
            api_key: 'DEMO_KEY'
        }
    });
}




$('#getImg').click(showImg);