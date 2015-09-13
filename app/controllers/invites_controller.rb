class InvitesController < ApplicationController
  def create
    invitee = User.find_by(email: params[:invite][:email])
    group = Group.find(params[:group_id])
    group.users << invitee

    redirect_to user_path(params[:user_id])
  end
end