# Contributing to Sibna Protocol

Thank you for your interest in contributing to Sibna Protocol! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on GitHub with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Rust version, etc.)

### Suggesting Features

We welcome feature suggestions! Please open an issue with:
- A clear description of the feature
- Use cases and benefits
- Any implementation ideas you have

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our code style
3. **Add tests** for any new functionality
4. **Ensure all tests pass** (`cargo test`)
5. **Update documentation** as needed
6. **Submit a pull request** with a clear description

## Code Style

### Rust Code
- Follow standard Rust formatting (`cargo fmt`)
- Run clippy and fix warnings (`cargo clippy`)
- Write clear, documented code
- Add tests for new functionality

### Python Code
- Follow PEP 8 style guide
- Use type hints where appropriate
- Write docstrings for functions and classes

### JavaScript/TypeScript Code
- Use ES6+ features
- Follow standard JavaScript style
- Add JSDoc comments for functions

## Development Setup

See [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) for detailed setup instructions.

## Testing

Before submitting a PR, ensure:
- All Rust tests pass: `cargo test`
- Integration tests pass: `python tests/integration_test_full.py`
- No clippy warnings: `cargo clippy`
- Code is formatted: `cargo fmt`

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Assume good intentions

## License

By contributing, you agree that your contributions will be licensed under the same dual license (Apache-2.0 OR MIT) as the project.

## Questions?

Feel free to open an issue for any questions about contributing!
