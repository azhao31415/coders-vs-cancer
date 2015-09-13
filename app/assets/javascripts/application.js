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

$(document).foundation();
var signup, login, logout,accountModalOpen,accountModalTypeSelect,loadSignup,loadLogin
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
		dataType: "json"
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
		$("#login-link").addClass('active');
		$('#login').addClass('active');
		$("#signup-link").removeClass('active');
		$("#signup").removeClass('active');
	} else if (type === "signup") {
		$("#login-link").removeClass('active');
		$('#login').removeClass('active');
		$("#signup-link").addClass('active');
		$("#signup").addClass('active');
	};
	$(document).foundation('reflow');
};

loadSignup = function(){
	$.ajax({
		url: "/signup",
		dataType: "html"
	}).done(function(response){
		$('#signup').html(response);
		$(document).foundation('reflow');
	}).fail(function(){
		console.log('failed');
	});
};

loadLogin = function(){
	$.ajax({
		url: "/login",
		dataType: "html"
	}).done(function(response){
		$('#login').html(response);
		$(document).foundation('reflow');
	}).fail(function(){
		console.log('failed');
	});
};

$(document).on('ready page:load', function(){
	loadSignup();
	loadLogin();
	$('#login').on('submit', '#login_form', function(event){
		event.preventDefault();
		$contact_data = $(event.target);
		$.ajax({
			url: $contact_data.attr("action"),
			type: $contact_data.attr("method"),
			data: $contact_data.serialize(),
			dataType: 'json'
		}).done(function(response) {
			login(response);
		});
	});
	$('#signup').on('submit' , '#signup_form', function(event){
		event.preventDefault();
		$contact_data = $(event.target);
		$.ajax({
			url: $contact_data.attr("action"),
			type: $contact_data.attr("method"),
			data: $contact_data.serialize(),
			dataType: 'json'
		}).done(function(response) {
			signup(response);
		});
	});
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
	$('#panel1').on('toggled', function (event, tab) {
		$(document).foundation('reflow');    
	});
	$('#panel2').on('toggled', function (event, tab) {
		$(document).foundation('reflow');	
	});
	$('#panel3').on('toggled', function (event, tab) {
		$(document).foundation('reflow');	
	});
});