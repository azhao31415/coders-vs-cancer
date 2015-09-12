// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });
var signup, login, logout
login = function(response) {
	if (response.status == "failed") {
		$('#login_warning').show();
	} else if (response.status == "created") {
		$('#login_warning').hide();
		$('#user_profile_link').text(response["name"]);
		$('.user_links').toggle();
		$("#account_modal").foundation('reveal', 'close');
	};
};

logout = function() {
	$.ajax({
		url: "/logout",
		dataType: "json",
	}).done(function(saveMessage){
		$('#user_profile_link').text("no user");
		$('.user_links').toggle();
	}).fail(function(saveMessage){
	 	console.log("logout failed");
	});
};

signup = function(response) {
	$('#user_profile_link').text(response["name"]);
	$('.user_links').toggle();
	$("#account_modal").foundation('reveal', 'close');
};

accountModalOpen = function(type) {
	$("#account_modal").foundation('reveal', 'open');
	accountModalTypeSelect(type);
};

accountModalTypeSelect = function(type) {
	if (type === "login") {
		$("#account_modal_login").show();
		$("#account_modal_signup").hide();
	} else if (type === "signup") {
		$("#account_modal_login").hide();
		$("#account_modal_signup").show();
	};
};

$(document).on('ready page:load', function(){
	$(document).on('click', '#logout_link', function(event){
		event.preventDefault();
		logout();
	});
	$(document).on('click', '#login_link', function(event){
		event.preventDefault();
		accountModalOpen("login");
	});
	$(document).on('click', '#signup_link', function(event){
		event.preventDefault();
		accountModalOpen("signup");
	});

});
