require 'ostruct'
require 'json'
require 'unitylock/server/entity/unityfile'

include Unitylock::Server::Entity
module Unitylock
  module Server
    class Model
      attr_accessor :data, :file

      def initialize(file)
        @file = file
        File.write(@file, '{}') unless File.exists? @file
        load
      end

      def load
        @data = JSON.parse(File.read(@file), create_additions: true)
      end

      def save
        File.write(@file, JSON.generate(@data))
      end

      def delete(file:)
        @data.delete(file)
        save
      end

      def lock(file:, user:)
        raise "lock failure" unless @data.has_key?(file) && @data[file].user == nil
        @data[file] = UnityFile.create(file: file, user: user)
        save
        @data[file]
      end

      def unlock(file:, user:) 
        raise "unlock failure" unless @data.has_key?(file) && @data[file].user == user
        @data[file] = UnityFile.create(file: file, user: nil)
        save
        @data[file]
      end

      def create_or_update(file:)
        @data[file] ||= UnityFile.create(file: file)
        @data[file].update
        save
      end

      def search
        @data.map {|key,value| value}
      end

      def fetch(file:)
        @data[file]
      end
    end
  end
end
