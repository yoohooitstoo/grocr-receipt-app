$("#ajax-veryfi").on("click", function (e) {
    e.preventDefault();
    const file_data = $('#file').prop('files')[0];
    const file_name = $('#file').prop('files')[0].name;
    const reader = new FileReader();
  
    reader.addEventListener('load', function () {
      veryfiAjaxCall(file_name, reader.result);
    });
  
    if (file_data) {
      reader.readAsDataURL(file_data);
    }
  });

  $("#storeLogoUrl").attr("src", localStorage.getItem("storeurl"));
  
  function veryfiAjaxCall(name, data) {
    const settings = {
      url:
        'https://cors-anywhere.herokuapp.com/https://api.veryfi.com/api/v7/partner/documents/',
      method: 'POST',
      timeout: 0,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'CLIENT-ID': 'vrfKw87DawYezvC395lkAI6WRlPZrg8fUZGjdoL',
        AUTHORIZATION: 'apikey ccopeland900:2c5525d02474e4a354b176f9456e9172'
    },
      data: JSON.stringify({
        file_name: name,
        file_data: data
      })
    };
  
    $.ajax(settings)
      .then(function (response) {
       response.line_items.map(function(currentvalue, index) {
        const description = currentvalue.description;
        const sku = currentvalue.sku;
        const total = currentvalue.total;
        const listItem = `<li>Description: ${description} Sku: ${sku} Price: ${total} </li>`
        $(".purchase").append(listItem);
        localStorage.setItem("storeurl", response.vendor.vendor_logo);
       })
       response.line_items.forEach(item => {
         console.log(item);
         const newItem = {
           description: item.description,
           sku: item.sku,
           item_price: item.total,
          }
          $.post("/api/purchases", newItem).then(function (data) {
            console.log(data);
            window.location.reload();
            
          })
          .catch(function(err){
            console.log(err);
          })
       });
      //  $("#total").append(response.total);
      //   $("#store").append(response.vendor.name);
      //   console.log(response.vendor.vendor_logo);
      
       })
      .catch(function (err) {
        console.log(err.responseJSON);
      });

  }
  
  