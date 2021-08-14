$(document).ready(function () {
    function getNewUser() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function (data) {
                var resultsData = data.results[0];

                var date = resultsData.dob.date.split("T");
                var dateArray = date[0].split("-");
                var month = dateArray[1];
                var day = dateArray[2];
                var year = dateArray[0];


                $(".user_photo img").attr('src', resultsData.picture.large)
                $("ul").find(`[data-label='name']`).attr('data-value', resultsData.name.first + ' ' + resultsData.name.last);
                $("ul").find(`[data-label='email']`).attr('data-value', resultsData.email);
                $("ul").find(`[data-label='birthday']`).attr('data-value', month + '/' + day + '/' + year);
                $("ul").find(`[data-label='location']`).attr('data-value', resultsData.location.street.number + ' ' + resultsData.location.street.name);
                $("ul").find(`[data-label='phone']`).attr('data-value', resultsData.phone);
                $("ul").find(`[data-label='pass']`).attr('data-value', resultsData.login.password);

                var value = $("ul li.active").attr('data-value');
                $("#user_value").html(value);
            }
        });
    }

    getNewUser();

    $(".refresh").click(function () {
        getNewUser();
    });

    $("ul li").hover(function () {
        $(".values_list li.active").removeClass("active");
        $(this).addClass("active");
        $("#user_title").html($(this).attr('data-title'));
        $("#user_value").html($(this).attr('data-value'));
    });
});