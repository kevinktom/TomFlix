class Api::MyListController < ApplicationController

    def show
        @mylist = MyList.find(params[:id])
    end

end

