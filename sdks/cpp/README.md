# Sibna C++ Bindings

This directory contains C++ bindings for the Sibna Protocol - a secure end-to-end encrypted messaging protocol.

## Building from Source

This SDK is self-contained and can be built independently.

### Prerequisites

- Rust toolchain (1.70+)
- CMake 3.15+
- C++17 compatible compiler

### Build Steps

1. Build the Rust core library:
```bash
cd core
cargo build --release
```

2. Use CMake to build the C++ bindings:
```bash
mkdir build
cd build
cmake ..
cmake --build .
```

## Usage

```cpp
#include "sibna.h"

// Initialize and use the Sibna protocol
// See examples for detailed usage
```

## Testing

Run the core library tests:
```bash
cd core
cargo test
```

## License

Apache-2.0 OR MIT
