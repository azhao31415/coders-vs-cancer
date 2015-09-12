class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]

  def show
    # @user = User.find(session[:user_id])  
    @user = User.find(params[:id])
    @invite = Invite.new
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
		respond_to do |format| 
	  	if @user.save        
		 		session[:user_id] = @user.id    
		  	format.html { redirect_to root_path, notice: 'Thanks for signing up.' }
				format.json { render json: {status: :created, name: @user.first_name} }
			else
				format.html { render :new }
				format.json { render json: {status: "failed to create account"} }
			end
		end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :phone_provider, :prefered_contact, :password, :check_day_of_month)
  end
end
