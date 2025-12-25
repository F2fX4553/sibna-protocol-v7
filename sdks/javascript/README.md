# Sibna JavaScript SDK

This is the JavaScript/TypeScript SDK for the Sibna Protocol - a secure end-to-end encrypted messaging protocol.

## Building from Source

This SDK is self-contained and can be built independently.

### Prerequisites

- Rust toolchain (1.70+)
- Node.js 16+
- npm or yarn

### Build Steps

1. Build the Rust core library:
```bash
cd core
cargo build --release
```

2. Install dependencies and build:
```bash
cd ..
npm install
npm run build
```

## Usage

```javascript
import { SibnaKernel } from 'sibna-js';

const kernel = new SibnaKernel();
await kernel.initialize({ masterKey: '...' });

const encrypted = await kernel.encryptMessage('alice_99', 'Hello Web');
const decrypted = await kernel.decryptMessage('alice_99', encrypted);

console.log(decrypted); // Expected: Hello Web
```

## Testing

Run the core library tests:
```bash
cd core
cargo test
```

## License

Apache-2.0 OR MIT
