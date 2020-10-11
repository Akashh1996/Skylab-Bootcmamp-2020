$(document).ready(function () {
    $('#carousel__tall-1').lightSlider({
        autoWidth: true,
        loop: false,
        onSliderLoad: function () {
            $('#carousel__tall-1').removeClass('cS-hidden');
        }
    });

    $('#carousel__tall-2').lightSlider({
        autoWidth: true,
        loop: false,
        onSliderLoad: function () {
            $('#autoWidth2').removeClass('cS-hidden');
        }
    });
    $('#carousel__wide-1').lightSlider({
        autoWidth: true,
        loop: false,
        onSliderLoad: function () {
            $('#carousel__wide-1').removeClass('cS-hidden');
        }
    });

    $('#carousel__tall-3').lightSlider({
        autoWidth: true,
        loop: false,
        onSliderLoad: function () {
            $('#carousel__tall-3').removeClass('cS-hidden');
        }
    });

    $('#carousel__tall-4').lightSlider({
        autoWidth: true,
        loop: false,
        onSliderLoad: function () {
            $('#carousel__tall-4').removeClass('cS-hidden');
        }
    });

    $('#carousel__generos').lightSlider({
        autoWidth: true,
        loop: false,
        onSliderLoad: function () {
            $('#carousel__generos').removeClass('cS-hidden');
        }
    });
});