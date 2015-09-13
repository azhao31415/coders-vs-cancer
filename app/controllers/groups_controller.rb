class GroupsController < ApplicationController
  def show
    render partial: 'groups/show', locals: {group: Group.find(params[:id])}
  end
end
