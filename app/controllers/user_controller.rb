class UserController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update]

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :phone_provider, :prefered_contact, :password, :check_day_of_month)
  end
end
