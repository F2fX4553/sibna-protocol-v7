#!/bin/bash

# Build script for Sibna Dart SDK

echo "Building Sibna Core Library for Dart FFI..."
cd core
cargo build --release
cd ..

echo "Core library built successfully!"
echo "Library location: core/target/release/"
