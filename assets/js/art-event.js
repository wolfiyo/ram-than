$(document).ready(function() {
    var $thumbnail = $('#thumbnail');
    $('[data-target="#thumbnail"]').on('click', function(event) {
        var $img = $(this).find('img'), 
            src = $img.attr('src'),
            alt = $img.attr('alt');
           
        $thumbnail.find('img').attr('src', src);
        $thumbnail.find('img').attr('alt', alt);
    
    });
    $thumbnail.on('shown.bs.modal', function (e) {
        var $img = $thumbnail.find('img');
        $thumbnail.find('.modal-dialog').addClass('image');
        $thumbnail.find('.close').removeClass('hidden');
    });
  });