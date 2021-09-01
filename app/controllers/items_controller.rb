class ItemsController < ApplicationController

  def app
    render component: 'App' 
  end

  def index
     items = Item.all.order(likes: :desc)
     #  render Component 'Items', props:{items:items}
   render json: items
  end

  def create
    item = Item.new(items_params)
    item.likes = 0
    if(item.save)
      render json: item
    else
      # this will cause a 422 error
      render json: {errors: item.errors, look:'Hello'}, status: :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    render json: @item.destroy
  end

  private

  def items_params
    params.require(:item).permit(:name, :description, :category)
  end
end
