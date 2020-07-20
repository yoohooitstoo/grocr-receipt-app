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
  
  function veryfiAjaxCall(name, data) {
    const settings = {
      url:
        'https://cors-anywhere.herokuapp.com/https://api.veryfi.com/api/v7/partner/documents/',
      method: 'POST',
      timeout: 0,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'CLIENT-ID': 'vrfAnYyPg6fcrIC5GdMJ0pv3ngkav3tD47SOkUW',
        AUTHORIZATION: 'apikey colella.peter.j:d0e350e31a8b3494cf1c70761bd44eb6'
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
       })
       $("#total").append(response.total);
        $("#store").append(response.vendor.name);
        console.log(response.vendor.vendor_logo);
        $("#storeLogoUrl").attr("src", response.vendor.vendor_logo);
      })
      .catch(function (err) {
        console.log(err.responseJSON);
      });
  }
  
  