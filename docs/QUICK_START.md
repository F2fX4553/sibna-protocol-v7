# Quick Start Guide - Sibna Protocol v7

Get started with Sibna Protocol in 5 minutes! This guide will walk you through your first encrypted message.

## Prerequisites

Before you begin, ensure you have:
- **Rust** 1.70+ installed ([rustup.rs](https://rustup.rs/))
- Your preferred language runtime (Python 3.8+, Node.js 16+, Dart 2.17+, or C++17 compiler)

## Step 1: Choose Your SDK

Sibna provides independent SDKs for multiple languages. Choose the one that fits your project:

- **Python**: Best for backend services, data processing, and scripting
- **JavaScript**: Perfect for web applications and Node.js servers
- **Dart/Flutter**: Ideal for mobile apps (iOS/Android)
- **C++**: For high-performance applications and embedded systems

## Step 2: Build the Core Library

All SDKs share the same Rust core. Navigate to your chosen SDK and build it:

### For Python:
```bash
cd sdks/python
make build
```

### For JavaScript:
```bash
cd sdks/javascript
./build.sh
```

### For Dart:
```bash
cd sdks/dart
./build.sh
```

### For C++:
```bash
cd sdks/cpp
mkdir build && cd build
cmake ..
cmake --build .
```

## Step 3: Your First Encrypted Message

### Python Example

```python
from sibna import SecureContext, Config

# 1. Initialize the secure context with a master password
ctx = SecureContext(Config(), password=b"my_secure_password")

# 2. Create a session with a peer
session = ctx.get_or_create_session(peer_id="alice@example.com")

# 3. Encrypt a message
message = b"Hello, Alice! This is a secret message."
ciphertext = session.encrypt(message)
print(f"Encrypted: {ciphertext.hex()[:50]}...")

# 4. Decrypt the message
plaintext = session.decrypt(session.peer_id, ciphertext)
print(f"Decrypted: {plaintext.decode()}")
```

### JavaScript Example

```javascript
import { SibnaKernel } from 'sibna-js';

// 1. Initialize the kernel
const kernel = new SibnaKernel();
await kernel.initialize({ masterKey: 'my_secure_password' });

// 2. Encrypt a message to Alice
const message = 'Hello, Alice! This is a secret message.';
const encrypted = await kernel.encryptMessage('alice@example.com', message);
console.log(`Encrypted: ${encrypted.substring(0, 50)}...`);

// 3. Decrypt the message
const decrypted = await kernel.decryptMessage('alice@example.com', encrypted);
console.log(`Decrypted: ${decrypted}`);
```

### Dart Example

```dart
import 'package:sibna_dart/sibna_dart.dart';

void main() async {
  // 1. Initialize the secure context
  final ctx = SecureContext(Config(), password: "my_secure_password");
  
  // 2. Encrypt a message to Alice
  final message = "Hello, Alice! This is a secret message.";
  final encrypted = await ctx.encrypt("alice@example.com", message);
  print('Encrypted: ${encrypted.substring(0, 50)}...');
  
  // 3. Decrypt the message
  final decrypted = await ctx.decrypt("alice@example.com", encrypted);
  print('Decrypted: $decrypted');
}
```

## Step 4: Understanding the Flow

Here's what happens behind the scenes:

1. **Initialization**: Creates a secure context with your master password
2. **Session Creation**: Establishes a Double Ratchet session with the peer
3. **Encryption**: Uses ChaCha20-Poly1305 AEAD to encrypt your message
4. **Decryption**: Verifies and decrypts the ciphertext

## Step 5: Next Steps

### Run the Tests

Verify everything works correctly:

```bash
# Core library tests
cd core
cargo test

# Integration tests
cd tests
python integration_test_full.py
```

### Explore Examples

Check out the `examples/` directory for more advanced use cases:
- Group messaging
- File encryption
- Real-time chat
- Server integration

### Read the Documentation

- **[Developer Guide](../DEVELOPER_GUIDE.md)**: Architecture and internals
- **[API Reference](api-reference.md)**: Complete API documentation
- **[Deployment Guide](../DEPLOYMENT.md)**: Production deployment
- **[Security Policy](../SECURITY.md)**: Security best practices

## Common Use Cases

### Secure Messaging App

```python
# Alice sends a message to Bob
alice_ctx = SecureContext(Config(), password=b"alice_password")
alice_session = alice_ctx.get_or_create_session("bob@example.com")
ciphertext = alice_session.encrypt(b"Hi Bob!")

# Bob receives and decrypts
bob_ctx = SecureContext(Config(), password=b"bob_password")
bob_session = bob_ctx.get_or_create_session("alice@example.com")
plaintext = bob_session.decrypt("alice@example.com", ciphertext)
```

### File Encryption

```python
# Encrypt a file
with open("secret.txt", "rb") as f:
    data = f.read()

session = ctx.get_or_create_session("file_encryption")
encrypted_data = session.encrypt(data)

with open("secret.txt.encrypted", "wb") as f:
    f.write(encrypted_data)
```

### Real-Time Chat

```javascript
// WebSocket integration
socket.on('message', async (data) => {
  const decrypted = await kernel.decryptMessage(data.sender, data.ciphertext);
  displayMessage(data.sender, decrypted);
});

// Send encrypted message
const encrypted = await kernel.encryptMessage(recipient, message);
socket.emit('message', { recipient, ciphertext: encrypted });
```

## Troubleshooting

### Build Errors

**Problem**: `cargo build` fails
**Solution**: Ensure Rust 1.70+ is installed: `rustc --version`

**Problem**: Missing dependencies
**Solution**: Install build tools for your platform:
- **Linux**: `sudo apt-get install build-essential`
- **macOS**: `xcode-select --install`
- **Windows**: Install Visual Studio Build Tools

### Runtime Errors

**Problem**: "Session not found"
**Solution**: Ensure you create a session before encrypting/decrypting

**Problem**: "Decryption failed"
**Solution**: Verify you're using the correct peer ID and the message wasn't tampered with

## Getting Help

- **Documentation**: Check the [docs/](.) directory
- **Issues**: Open an issue on GitHub
- **Community**: Join our discussions

## What's Next?

- **Deploy a Server**: See [DEPLOYMENT.md](../DEPLOYMENT.md)
- **Contribute**: Read [CONTRIBUTING.md](../CONTRIBUTING.md)
- **Security**: Review [SECURITY.md](../SECURITY.md)

---

**Congratulations!** 🎉 You've successfully encrypted your first message with Sibna Protocol!
