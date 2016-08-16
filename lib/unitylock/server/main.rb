require 'unitylock/server/model'
require 'sinatra'
require 'json'

module Unitylock::Server
  class Main < Sinatra::Base
    JSON_FILE = 'unitylock.json'
    unitylock = Model.new(JSON_FILE)

    get '/' do
      JSON.generate(unitylock.data)
    end

    get '/user/:user' do
      puts params['user']
      JSON.generate(unitylock.search_by_user(params['user']).keys)
    end

    put '/lock' do
      halt '{"error":"lock should be done against unlocked file"}' \
        unless unitylock.lock(params['file'], params['user'])
      JSON.generate(unitylock.data[params['file']])
    end

    put '/unlock' do
      halt '{"error":"unlock should be done by same user"}' \
        unless unitylock.unlock(params['file'], params['user'])
      JSON.generate(unitylock.data)
    end

    post '/create' do
      halt '{"error":"requires user and file parameter"}' \
        unless params.has_key?('file')
      unitylock.update(params['file'], params['user'])

      JSON.generate(unitylock.data[params['file']])
    end

    delete '/delete' do
      halt '{"error":"requires file parameter"}' \
        unless params.has_key?('file')
      unitylock.delete(params['file'])
    end
  end
end
