$(document).ready(function() {
    // toggle menu/navbar script 
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});


function submitForm() {
    document.form1.submit();
    document.form1.reset();
}