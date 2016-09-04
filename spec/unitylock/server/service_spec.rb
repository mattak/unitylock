require 'spec_helper'
require 'unitylock/server/model'
require 'unitylock/server/service'

include Unitylock::Server
describe Unitylock::Server::Service do
  before :each do
    @file    = "test.lock"
    @model   = Model.new(@file)
    @service = Service.new(@model)
  end

  after :each do
    File.delete(@file)
  end

  it 'can search' do
    result = @service.search
    expect(result.length).to be 0

    @model.create_or_update(file: "file1")
    @model.create_or_update(file: "file2")
    @model.lock(file: "file1", user: "user1")

    result = @service.search
    expect(result.length).to be 2
    expect(result[0][:file]).to eq("file1")
    expect(result[0][:user]).to eq("user1")
    expect(result[1][:file]).to eq("file2")
    expect(result[1][:user]).to be nil
  end

  it 'can search_by_files' do
    result = @service.search_by_files
    expect(result.length).to be 0

    @model.create_or_update(file: "file1")
    @model.create_or_update(file: "file2")

    result = @service.search_by_files("file1","file3")
    expect(result.length).to eq(1)
  end

  it 'can touches' do
    result = @service.search
    expect(result.length).to be 0

    @service.touches("file1","file2")
    result = @service.search
    expect(result.length).to be 2
    expect(result[0][:file]).to eq("file1")
    expect(result[1][:file]).to eq("file2")
  end
end

