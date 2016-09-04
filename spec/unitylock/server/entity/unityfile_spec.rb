require 'spec_helper'
require 'unitylock/server/entity/unityfile'

include Unitylock::Server::Entity
describe UnityFile do
  it 'create' do
    unityfile = UnityFile.create(file: "file1")
    expect(unityfile.file).to eq("file1")
    expect(unityfile.updated_at).not_to be nil
  end
end

