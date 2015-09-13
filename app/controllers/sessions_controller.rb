class SessionsController < ApplicationController

	def new
		respond_to do |format| 
		  	format.html { render layout: !request.xhr? }
		end
	end

	def create
		@user = User.find_by email: user_params[:email]
		respond_to do |format|
			if @user && @user.authenticate(user_params[:password])
				session[:user_id] = @user.id
				@html = render_to_string('users/show', layout: false)
				format.html { redirect_to root_path, notice: 'Welcome.' }
				format.json { render json: {status: :created, name: @user.first_name, html: @html } }

			else
				format.html { render :new }
				format.json { render json: {status: :failed} }
			end
		end
	end

	def destroy
		session[:user_id] = nil
		respond_to do |format|
			@html = render_to_string('welcome/index', layout: false)
			format.html { redirect_to root_path, notice: 'Goodbye.' }
			format.json { render json: {status: "log out successful", html: @html} }
		end
	end

	private

	def user_params
		params.require(:session).permit(:email, :password)
	end

end
