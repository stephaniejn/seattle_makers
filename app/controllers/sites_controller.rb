
class SitesController < ApplicationController

  def index
    is_authenticated?
    @current_user
  end

  def about

  end

  def test

  end

end