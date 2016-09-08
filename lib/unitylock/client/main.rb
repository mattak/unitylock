require 'faraday'
require 'json'
require 'find'

module Unitylock
  module Client
    class Main
      def initialize(urlbase)
        @conn = Faraday.new(:url => urlbase) do |faraday|
          faraday.request  :url_encoded
          # faraday.response :logger
          faraday.adapter  Faraday.default_adapter
        end
      end

      def search
        @conn.get '/files'
      end

      def touches(files)
        @conn.post do |req|
          req.url '/files'
          req.headers['Content-Type'] = 'application/json'
          req.body = JSON.generate(files)
        end
      end

      def deletes(files)
        @conn.delete do |req|
          req.url '/files'
          req.headers['Content-Type'] = 'application/json'
          req.body = JSON.generate(files)
        end
      end

      def delete_all
        files = JSON.parse(search.body).collect {|it| it['file']}
        deletes(files)
      end

      def locks(user:, files:)
        # TODO: requests at once
        results = []
        files.each do |file|
          results << @conn.put do |req|
            req.url "/user/#{user}/lock"
            req.headers['Content-Type'] = 'application/json'
            req.body = JSON.generate({file: file})
          end.body
        end
        results
      end

      def unlocks(user:, files:)
        # TODO: requests at once
        results = []
        files.each do |file|
          results << @conn.put do |req|
            req.url "/user/#{user}/unlock"
            req.headers['Content-Type'] = 'application/json'
            req.body = JSON.generate({file: file})
          end.body
        end
        results
      end

      def sync(dir: '.', force: false, includes: /\.(unity|prefab)$/, excludes: /^$/)
        files = Find.find(dir).select{|it| it =~ includes}.select{|it| it !~ excludes}

        puts "touched:"
        puts files

        touches(files)
        touched_files = JSON.parse(search.body).collect {|it| it['file']}

        if force
          remove_files = touched_files.select{|it| !files.include?(it) }

          puts "removed:"
          puts remove_files

          deletes(remove_files)
          return (touched_files - remove_files)
        end

        return touched_files
      end
    end
  end
end
