require 'unitylock/server/service'
require 'unitylock/server/model'
require 'sinatra'
require 'json'

module Unitylock::Server
  class Main < Sinatra::Base
    JSON_FILE = 'unitylock.json'

    def service
      Service.new(Model.new(JSON_FILE))
    end

    configure do
      set :public_folder, 'public'
    end

    get '/' do
      File.read('app/index.html')
    end

    get '/files' do
      content_type :json
      JSON.generate service.search
    end

    post '/files' do
      content_type :json
      files = JSON.parse(request.body.read)
      service.touches(*files)
      JSON.generate service.search_by_files(*files)
    end

    delete '/files' do
      content_type :json
      files = JSON.parse(request.body.read)
      service.deletes(*files)
      JSON.generate service.search
    end

    put '/user/:user/lock' do
      content_type :json

      user = params['user']
      json = JSON.parse request.body.read
      file = json['file']

      if user == nil || file == nil
        halt '{"error":"missing parameter user and file"}'
      end

      service.lock(file: file, user: user)
      JSON.generate service.search_by_files(file)
    end

    put '/user/:user/unlock' do
      content_type :json

      user = params['user']
      json = JSON.parse request.body.read
      file = json['file']

      if user == nil || file == nil
        halt '{"error":"missing parameter file and user"}' 
      end

      service.unlock(file: file, user: user)
      JSON.generate service.search_by_files(file)
    end
  end
end
