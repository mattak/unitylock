require 'json/add/core'

module Unitylock
  module Server
    module Entity
      class UnityFile < Struct.new(:user,:file,:updated_at)
        def update
          self.updated_at = Time.now
          self
        end

        def to_hash
          {
            user: self.user,
            file: self.file,
            updated_at: self.updated_at.strftime("%Y-%m-%d %H:%M:%S")
          }
        end

        class << self
          def json_create(o)
            new(*o['v'])
          end

          def create(hash)
            unityfile = UnityFile.new
            default_values = { updated_at: Time.now }
            default_values.merge(hash).each do |key,value|
              unityfile[key] = value
            end

            unityfile
          end
        end
      end
    end
  end
end
