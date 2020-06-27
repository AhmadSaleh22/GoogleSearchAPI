$("#form").submit(function (event){
  event.preventDefault()

  var query =$('#search').val()

  let result =''

  var API_KEY = '4273e84d8cd88032e36373f5b84534a5';
  var url ='http://api.serpstack.com/search?access_key='+ API_KEY + '&type=web&query='+query 
  console.log(url);

  $.get(url, function(data){
    $("#result").html('')

    console.log(data)

    data.organic_results.forEach(res => {
      
      result =`<h1> ${res.title} </h1><br><a href="${res.url}" target="_blank">${res.url}</a><p>${res.snippet}</p>`

      $('#result').append(result)

    });
  })
})
