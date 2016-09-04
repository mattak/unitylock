require 'unitylock/server/model'

module Unitylock::Server
  class Service
    attr_accessor :model

    def initialize(model)
      @model = model
    end

    def search
      @model.search.collect {|it| it.to_hash}
    end

    def search_by_files(*files)
      @model.search
        .select {|it| files.include? it.file }
        .collect {|it| it.to_hash }
    end

    def touches(*files)
      files.each do |file|
        @model.create_or_update(file: file)
      end
    end

    def deletes(*files)
      files.each do |file|
        @model.delete(file: file)
      end
    end

    def lock(file:,user:)
      @model.lock(file: file, user: user)
    end

    def unlock(file:,user:)
      @model.unlock(file: file, user: user)
    end
  end
end
