$(function () {
    $(".ZQjhuakuai").css("width", $('.active').css('width'));
    $('#ZQjfamily').on('mouseenter', 'select', function (e) {
        $('.ZQjhuakuai').css("left", e.currentTarget.offsetLeft + "px");
        $('.ZQjhuakuai').css("width", $(this).css("width"))
    })
    $('#ZQjfamily').on('mouseleave', 'select', function (e) {
        $(".ZQjhuakuai").css("left", $('.active')[0].offsetLeft + "px");
        $('.ZQjhuakuai').css("width", $('.active').css('width'))
    })
    $("#ZQjfamily").on("click", 'select', function (e) {
        $("select").removeClass("active");
        $(this).addClass("active");
        $('.ZQjhuakuai').css("width", $(this).css("width"))
        $(".ZQjhuakuai").css("left", e.currentTarget.offsetLeft + "px");
    })
    var information = null
    var cityList = null
    $.getJSON('./sanji.json', function (data) {
        information = data
        $.each(data, function (index, value) {
            var provinceZQj = document.createElement('option')
            $(provinceZQj).text(value.value)
            $(provinceZQj).val(value.value)
            $(provinceZQj).attr('data-index', index)
            $('#provinceZQj').append(provinceZQj)
        })
    })
    $('#provinceZQj').change(function () {
        $('#cityZQJ>option').remove(0)
        const cityIndex = $(this).children("option:selected").attr('data-index')
        cityList = information[cityIndex]['child']
        $.each(cityList, function (index, value) {
            var cityZQJ = document.createElement('option')
            $(cityZQJ).text(value.value)
            $(cityZQJ).val(value.value)
            $(cityZQJ).attr('data-index', index)
            $('#cityZQJ').append(cityZQJ)
        })
    })
    $('#cityZQJ').change(function () {
        $('#districtZQJ>option').remove(0)
        const cityIndex = $(this).children("option:selected").attr('data-index')
        // console.log(cityList);
        var districtList = cityList[cityIndex]['child']
        // console.log(districtList);
        $.each(districtList, function (index, value) {
            var districtZQJ = document.createElement('option')
            $(districtZQJ).text(value.value)
            $(districtZQJ).val(value.value)
            $('#districtZQJ').append(districtZQJ)
        })
    })
})