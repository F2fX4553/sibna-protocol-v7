# Sibna Dart SDK

This is the Dart/Flutter SDK for the Sibna Protocol - a secure end-to-end encrypted messaging protocol.

## Building from Source

This SDK is self-contained and can be built independently.

### Prerequisites

- Rust toolchain (1.70+)
- Dart SDK 2.17+
- Flutter (for mobile development)

### Build Steps

1. Build the Rust core library:
```bash
cd core
cargo build --release
```

2. Add to your `pubspec.yaml`:
```yaml
dependencies:
  sibna_dart:
    path: ./
```

## Usage

```dart
import 'package:sibna_dart/sibna_dart.dart';

final ctx = SecureContext(Config(), password: "...");
final enc = await ctx.encrypt("peer_id", "Hello Flutter");
final dec = await ctx.decrypt("peer_id", enc);
```

## Testing

Run the core library tests:
```bash
cd core
cargo test
```

## License

Apache-2.0 OR MIT
