require 'pry'

get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end


get '/horses/new' do
  @horse = Horse.new
  if request.xhr?
    erb :"/horses/new", layout: false
  else
    erb :"/horses/new"
  end
end


post '/horses' do
  @horse = Horse.new(params[:horse])
    if @horse.save

      if request.xhr?
        # binding.pry
        erb :'/horses/_horse_partial', layout: false, locals: {horse: @horse}
      else
        redirect '/horses'
      end

    else
        erb :"/horses/new"
      end
  end


get '/horses/:id' do
  @horse = Horse.find(params[:id])
    if request.xhr?
      erb :"/horses/_horse_details_partial", layout: false, locals: {horse: @horse}
    else
      erb :'/horses/show'
    end
end
