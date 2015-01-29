class UsersController < ApplicationController
  require 'rubygems'
    require 'google_chart'

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    Ticket.create([{:user_id => @user.id}, {:user_id => @user.id}])
    if @user.errors.any?
      render :new
    else
      flash[:success] = "Added User"
      redirect_to login_path
      # WHEN COMBINED redirect_to :login
    end
  end

  def other_user_profile
    @user = User.find(params[:id])
    # @userevents = @user.user_events
  end

  def show
    if is_authenticated?
    @user = User.find(params[:id])
     if @current_user.id != @user.id
       redirect_to profile_path(user)
        else


      # ---------- Start Google Chart Gem ---------- #
      pc = GoogleChart::PieChart.new('420x200', "Attended Categories", false) do |pc|
        # returns the total number of events this person is going to
        @attend_count = User.find_by_id(@current_user).attending.count
        # returns an array of event objects
        @event_attend =  User.find_by_id(@current_user).attending.map do |e|
          e
        end

        # returns an array of event category id's the User is attending
        @event_category = @event_attend.map do |e|
          e.category_id
        end

        # returns an array of event category frequency
        counts = Hash.new 0
        @event_category.each do |cat|
          counts[cat] += 1
        end

        # divides event category frequency by total number of attended events
        @frequency_arr = counts.map do |cat, freq|
         freq.fdiv(@attend_count)
        end

        # returns an array of catagories
        @category_arr = counts.map do |cat, freq|
          cat
        end

        # returns a hash of key @category_arr and value @frequency_arr e.g. { "1": 0.5 } --> 50% of your events are Category 1
        @hashed_piechart = Hash[@category_arr.zip(@frequency_arr)]
        @colors = ['726659', '8E6B43', 'AA9781', 'AF9280', 'C4B8AA', 'F2DBBC']
        @hashed_piechart_color = Hash[@hashed_piechart.zip(@colors)]

        # creates the pie cart "pc.data" using the hash values c = category_id and f = frequency
        # @hi = @colors[0..1].each do |color|
          @hashed_piechart.each do |c, f, color|
              pc.data Category.find_by_id(c).name, f, 'C4B8AA'
          end
        # end

        # render json:@hi
        # pc.is_3d = true
        pc.chart_title = nil
        @piechart = pc.to_url
        end
      end
    end

    # ---------- End Google Chart Gem ---------- #
  end

  def edit
    is_authenticated?
    @user = User.find(params[:id])
  end

  def update
    is_authenticated?
    @user = User.find(params[:id])
    @user.update(user_params)
    if @user.errors.any?
      flash[:danger] = "There was an error in your edit - please try again"
      render :edit
    else
      flash[:success] = "Updated"
      redirect_to @user
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

end
