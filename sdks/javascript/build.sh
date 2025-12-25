#!/bin/bash

# Build script for Sibna JavaScript SDK

echo "Building Sibna Core Library..."
cd core
cargo build --release
cd ..

echo "Core library built successfully!"
echo "Library location: core/target/release/"
