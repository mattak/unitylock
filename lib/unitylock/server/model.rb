require 'json'

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
        @data = JSON.parse(File.read(@file))
      end

      def save
        File.write(@file, JSON.generate(@data))
      end

      def delete(file)
        @data.delete(file)
        save
      end

      def create(user)
        { user: user, updated_at: Time.now.to_i }
      end

      def lock(file, user)
        can_lock = @data[file] == nil
        @data[file] = create(user) if can_lock
        save
        can_lock
      end

      def unlock(file, user)
        can_unlock = @data.has_key?(file) && @data[file]['user'] == user
        @data[file] = nil if can_unlock
        save
        can_unlock
      end

      def update(file, user)
        @data[file] = create(user)
        save
      end

      def search_by_user(user)
        @data.select {|k,v| v != nil && v['user'] == user}
      end

      def search_by_file(file)
        @data[file]
      end
    end
  end
end
