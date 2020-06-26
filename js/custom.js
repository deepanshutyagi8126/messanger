
$('.talkAll').scroll(function () {

	if ($('.talkAll').scrollTop() >= 1) {
		$('.bottomArrow').show();
	}
	else{
	$('.bottomArrow').hide();	
	}
});
$(document).on('click','.bottomArrow' ,function(){
	   $('.talkAll').animate({
        scrollTop: $('.imcomingHead').offset().top
    }, 100);
});

$(document).on('click' ,'.chatSearch .form-group .form-control.form-controlShow ,.chatSearch span' ,function(){
$('.chatSearch .form-group .form-control').removeClass('form-controlShow').addClass('form-controlActive');
	$('.chatSearch .form-group span.show').hide();
	$('.chatSearch .form-group span.active ,.chatSearch span.arrow').show();
	$('.chatSearch .form-group span.active').css('transform','rotate(0deg)')
	$(this).attr('placeholder','');
});
$(document).on('click','.chatSearch span.active , .chatSearch span.arrow ,.chatSearch .form-group .form-control',function(){
	$('.chatSearch .form-group .form-control').addClass('form-controlShow').removeClass('form-controlActive');
		$('.chatSearch .form-group span.active ,.chatSearch span.arrow').hide();
	$('.chatSearch .form-group span.show').show();
	$('chatSearch .form-group .form-control.form-controlShow').attr('value',' ');
	$('chatSearch .form-group .form-control.form-controlShow').attr('placeholder','Search for chat');
});

$(document).on('click','.incomeDots ' ,function(){
	$('.contactAll').slideDown();
});
document.addEventListener("mousedown", function (event) {
	if (event.target.closest(".incomeDots ,.contactAll"))
		return;
	$('.contactAll').slideUp();
});


$(document).on('click','a.arrow' ,function(){
		$('.dropdownAll').hide();
	$(this).siblings('.dropdownAll').slideDown();
});
document.addEventListener("mousedown", function (event) {
	if (event.target.closest(".dropdownAll"))
		return;
	$('.dropdownAll').slideUp();
});
$(document).on('click','.contactInfo ,.statusAll' , function(){
	$('.contactInformation').show();
	$('.contactInformation').animate({'width':'75%'});
	$('.contactAll').hide();
});
$(document).on('click','.contactAllIn a' , function(){
	$('.contactInformation').animate({'width':'0%'});
		$('.contactInformation').hide();
});
$(document).on('click','.selectMess' , function(){
$('.profileStatus').hide();
	$('.deletFordeww').show();
});
$(document).on('click','.leftsidedel a' , function(){
	$('.messangerHover').removeClass('.activebk');
$('.deletFordeww').hide();
	$('.profileStatus').show();
});
$(document).on('click' ,'.contactAttachment a' ,function(){
	$('.contactInfoShow').hide();
	$('.attachmentAll').show();
});
$(document).on('click' ,'.Attachments' ,function(){
	$('.attachmentAll').hide();
	$('.contactInfoShow').show();
});
$(document).on('click','.atachmentHead ul li a' ,function(){
	var id =$(this).data('id');
	$(".attach").removeClass('active');
	$(".attachfile"+ id).addClass('active');
});
$(document).on('click' ,'.atachmentHead ul li a' ,function(){
	$('.atachmentHead ul li a').removeClass('active');
	$(this).addClass('active');
});

$(document).on('click' ,'.createGroup' ,function(){
	$('.messageChat').hide();
	$('.messagegroup').show();
});
$(document).on('click' ,'.creaGrop' ,function(){
	$('.messageChat').show();
	$('.messagegroup').hide();
});
$(document).on('click' ,'.searchGroup' ,function(){
	$('.creaGrop ,.searchGroup').hide();
	$('.searchInput').show();
})
$(document).on('click' ,'.searchInput' ,function(){
	$('.creaGrop ,.searchGroup').show();
	$('.searchInput').hide();
})
$(document).on('click' ,'.dotsOpen' ,function(){
	$('.dotsShow').slideDown();
});
document.addEventListener("mousedown", function (event) {
	if (event.target.closest(".dotsOpen ,.dotsShow"))
		return;
	$('.dotsShow').slideUp();
});
$(document).on('click' ,'.showSetting' ,function(){
	$('.messageChat').hide();
	$('.setUp').show();
});
$(document).on('click' ,'.setting' ,function(){
	$('.messageChat').show();
	$('.setUp').hide();
});
$(document).on('click' ,'.inputEdit' ,function(){
	$(this).siblings('.form-control').attr('readonly',false);
});
$(document).on('click' ,'.profileShow' ,function(){
	$('.memberProfile').show();
	$('.messageChat').hide();
});
$(document).on('click' ,'.profilee' ,function(){
	$('.memberProfile').hide();
	$('.messageChat').show();
});
$(document).on('click' ,'.accountOpen' ,function(){
	$('.accountPervixy').show();
	$('.setUp,.chatAlin,.blockIn,.notificatioAllll,.HelpIn,.groupNamee').hide();
});
$(document).on('click' ,'.accountPr' ,function(){
	$('.accountPervixy').hide();
	$('.setUp').show();
});
$(document).on('click' ,'.chats' ,function(){
	$('.setUp').hide();
	$('.accountPervixy.chatAlin ').show();
});
$(document).on('click','.accountPr.accountPrChat' ,function(){
		$('.setUp').show();
	$('.accountPervixy.chatAlin ').hide();
});
$(document).on('click','.bloShow' ,function(){
$('.blockIn').show();	
	$('.accccpr,.notificatioAllll ').hide();
});
$(document).on('click' ,'.help' ,function(){
	$('.setUp ,.messageInner ,.contactInformation ,.messageRight').hide();
	$('.accountPervixy.HelpIn,.faqAll').show();
});
$(document).on('click' ,'.accountPr.helpin' ,function(){
	$('.setUp ,.messageInner ,.contactInformation').show();
	$('.accountPervixy.HelpIn,.faqAll').hide();
});
$(document).on('click' ,'.faqQuestion a' ,function(){
	$(this).removeClass('active').addClass('active');
$(this).siblings('p').slideDown();
});
document.addEventListener("mousedown", function (event) {
	if (event.target.closest(".faqQuestion p"))
		return;
	$('.faqQuestion p').slideUp();
	$('.faqQuestion a').removeClass('active');
});
$(document).on('click','.allSettings.helpSetting ul li a' ,function(){
	var id =$(this).data('id');
	$(".helpShow").removeClass('active');
	$(".help"+ id).addClass('active');
});
$(document).on('click' ,'.allSettings.helpSetting ul li a' ,function(){
	$('.allSettings.helpSetting ul li a').removeClass('active');
	$(this).addClass('active');
});

$(document).on('click' ,'.notification',function(){
	$('.setUp').hide();
	$('.accountPervixy.blockIn.notificatioAllll').show();
});
$(document).on('click','.chatAll ul li a' ,function(){
	$(this).removeClass('active').addClass('active');
	$('.messageRight').hide();
	$('.messageInner').show();
});
$(document).on('click' ,'.messageCheck .form-group label', function(){
	$(this).addClass('active');
		$(this).parents('.messangerHover').addClass('active');		  
 });
$(document).on('click' ,'.messageCheck .form-group label.active', function(){
		$(this).removeClass('active');
		$(this).parents('.messangerHover').removeClass('active');
 });
$(document).on('click','.selectMess' ,function(){
	$('.messangerHover').addClass('activebk');
	$('.messageCheck').show();
});
$(document).on('click','.leftsidedel a' ,function(){
	$('.messageCheck').hide();
	$('.messangerHover').removeClass('active');
});

$(document).on('click' ,'.contactProfile a' ,function(){
	$('.messanger').hide();
	$('.profileShowImg').show();
});
$(document).on('click' ,'.blackClose' ,function(){
	$('.messanger').show();
	$('.profileShowImg').hide();
});
$(document).on('click','.profileBottom ul li a,.prImg',function(){
	$(this).removeClass('active').addClass('active');
	
	if($('.profileBottom ul li a').hasClass('active')){
	var x = $(this).children('img').attr('src');
		$('.prImg').children('img').attr('src' , x);
	   }
	else{
		$(this).removeClass('active');
	}
	
});
$(document).on('click','.searchChat',function(){
	$('.imcomingHead').hide();
	$('.searchHeadAl').show();
});
$(document).on('click','.closeHead',function(){
	$('.imcomingHead').show();
	$('.searchHeadAl').hide();
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = $(input).parent("div").siblings('.avatar-preview').children('div');
//            alert((img).attr("id"))
            $(img).css('background-image', 'url('+e.target.result +')');
            $(img).hide();
            $(img).fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(document).on('change', "#imageUpload2, #imageUpload, #imageUpload3 ,#imageUpload4 ,#imageUpload5 ,#imageUpload6 ,#imageUpload8", function() {
    readURL(this);
});

$(document).on('click','.createBtn a',function(){
	$('.messagegroup').hide();
	$('.groupNamee').show();
});

$(document).on('click','.gpropy',function(){
		$('.groupNamee, .setUp').hide();
	$('.messagegroup').show();
});

document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
};

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview,#imagePreview2').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview,#imagePreview2').hide();
            $('#imagePreview,#imagePreview2').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload,#imageUpload2").change(function() {
    readURL(this);
});

//$(document).on('click' ,'' ,function(){
//	$('.notificatioAllll').show();
//});
$(document).ready(function() {
    if ($(window).width() <= 1199) {
		$(document).on('click','.contactInfo' ,function(){
			$('.contactInformation').animate({'right' : '0'});
		});
	}
});
$(document).ready(function() {
    if ($(window).width() <= 767) {
$(document).on('click','.chatAll ul li a',function(){
	$('.messageInner').show();
	$('.messageLeft').hide();
});
		$(document).on('click','.backMob',function(){
	$('.messageInner').hide();
	$('.messageLeft').show();
});
		$(document).on('click','.help' ,function(){
			$('.HelpIn').show();
			$('.faqAll').hide();
		});
		$(document).on('click','.allSettings.helpSetting ul li a' ,function(){
	$(".helpShow").removeClass('active').addClass('active');
			if($('.helpShow').hasClass('active')){
				$('.helpShow').show();
				$('.HelpIn').hide();
			}
});
	}
});