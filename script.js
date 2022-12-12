function allMenu() {
    $.getJSON('iphone.json', function (data) {
        let menu = data.menu;
    
        $.each(menu, function (i, data){
            $('#daftar-menu').append('<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-md-4"><img src="image/'+ data.img +' " class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">'+ data.name +'</h5><p class="card-text">'+ data.release +'</p><p class="card-text">'+ data.storage +'</p><p class="card-text">'+ data.ram +'</p><p class="card-text">'+ data.chipset +'</p><p class="card-text">'+ data.battery +'</p></div></div></div></div>')
        });
    });
};

allMenu();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let category = $(this).html();
    $('h1').html(category);

    if (category == 'All Type') {
        $('#daftar-menu').html('');
        allMenu();
        return;
    }; 

    $.getJSON('iphone.json',function (data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data){
            if(data.category == category.toLowerCase()) {
                content += '<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-md-4"><img src="image/'+ data.img +' " class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">'+ data.name +'</h5><p class="card-text">'+ data.release +'</p><p class="card-text">'+ data.storage +'</p><p class="card-text">'+ data.ram +'</p><p class="card-text">'+ data.chipset +'</p><p class="card-text">'+ data.battery +'</p></div></div></div></div>';
            }
        });   
        $('#daftar-menu').html(content);
    })
    
});