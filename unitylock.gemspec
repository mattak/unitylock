# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'unitylock/version'

Gem::Specification.new do |spec|
  spec.name          = "unitylock"
  spec.version       = Unitylock::VERSION
  spec.authors       = ["mattak"]
  spec.email         = ["mattak.me@gmail.com"]

  spec.summary       = %q{Unitylock boost your Unity3D development}
  spec.description   = %q{lock Unity3D files and share with team members}
  spec.homepage      = "https://github.com/mattak/unitylock"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
