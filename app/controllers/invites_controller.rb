class InvitesController < ApplicationController
  def create
    invitee = User.find_by(email: params[:invite][:email])
    invitee.groups.first.id = params[:group_id]

    redirect_to user_path(params[:user_id])
  end
end