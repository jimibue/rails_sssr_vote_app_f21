class ItemsController < ApplicationController

  def app
    render component: 'App' 
  end

  def index
     items = Item.all.order(likes: :desc)
     #  render Component 'Items', props:{items:items}
   render json: items
  end
end
