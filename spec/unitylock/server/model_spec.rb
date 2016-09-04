require 'spec_helper'

include Unitylock::Server
describe Unitylock::Server::Model do
  let(:model) { Model.new(@file) }

  before :each do
    @file  = "test.lock"
  end

  after :each do
    File.delete(@file)
  end

  it 'can search' do
    expect(model.search.length).to eq(0)
    model.create_or_update(file: "hoge1")
    model.create_or_update(file: "hoge2")
    
    result = model.search
    expect(result.length).to eq(2)
    expect(result[0].file).to eq("hoge1")
    expect(result[1].file).to eq("hoge2")
  end

  it 'can insert_or_update' do
    model.create_or_update(file: "file1")
    model.create_or_update(file: "file1")
    expect(model.search.length).to eq(1)

    model.create_or_update(file: "file2")
    expect(model.search.length).to eq(2)
  end

  it 'can delete' do
    model.create_or_update(file: "file1")
    expect(model.search.length).to eq(1)
    
    model.delete(file: "file1")
    expect(model.search.length).to eq(0)
  end

  it 'can fetch' do
    model.create_or_update(file: "file1")
    expect(model.fetch(file: "file1")).not_to be nil
    expect(model.fetch(file: "file2")).to be nil
  end

  it 'can lock' do
    model.create_or_update(file: "file1")
    expect(model.fetch(file: "file1")).not_to be nil

    expect(model.lock(file: "file1", user: "user1").user).to eq("user1")

    expect { model.lock(file: "file1", user: "user1") }.to raise_error("lock failure")
  end

  it 'can unlock' do
    model.create_or_update(file: "file1")
    expect(model.fetch(file: "file1")).not_to be nil
    expect(model.fetch(file: "file1").user).to be nil

    expect { model.unlock(file: "file1", user: "user1") }.to raise_error("unlock failure")

    model.lock(file: "file1", user: "user1")
    expect(model.fetch(file: "file1").user).to eq("user1")

    expect { model.unlock(file: "file1", user: "user2") }.to raise_error("unlock failure")
    expect(model.unlock(file: "file1", user: "user1").user).to be nil
  end

  it 'can load' do
    model.create_or_update(file: "file1")
    model.lock(file: "file1", user: "user1")
    expect(model.fetch(file: "file1").user).to eq("user1")

    model.load

    expect(model.fetch(file: "file1").user).to eq("user1")
  end
end
