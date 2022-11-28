$.getJSON('iphone.json', function (data) {
    let menu = data.menu;

    $.each(menu, function (i, menu){
        $('#daftar-menu').append('<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-md-4"><img src=" '+ menu.img +' " class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">'+ menu.name +'</h5><p class="card-text">'+ menu.release +'</p><p class="card-text">'+ menu.storage +'</p><p class="card-text">'+ menu.ram +'</p><p class="card-text">'+ menu.chipset +'</p><p class="card-text">'+ menu.battery +'</p></div></div></div></div>')
    });
});