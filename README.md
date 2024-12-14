# Cool Frontend for Proxmox :)

This application provides a frontend interface designed to simplify the creation and management of LXC containers on Proxmox servers. With a focus on usability, it enables users to configure containers quickly and efficiently by selecting resources, templates, and specific settings without needing to use the command line.  

Designed and built for my HomeLab to easily give my friends access to my compute resources. **PRs accepted!**

## Key Features
- **Resource Selection**: Easily configure CPU, RAM, storage, and networking.
- **Template Management**: Access and select templates from the Proxmox server.
- **Automation**: Generate predefined configurations for common use cases.
- **Remote Control**: Support for managing multiple Proxmox nodes from a single interface.
- **User-Friendly Interface**: Designed to be intuitive and efficient.

## Environment Variables

To run this project, you will need to create a `.env` file at the root of the project with the following variables:

### Environment Variables Setup

- `PUBLIC_API_BASE_URL`: Base URL for the Proxmox VE API server. It must include the protocol (`https://`) and port.
  - Example: `https://192.168.68.131:8006`
  - Do not include a trailing slash (`/`) at the end of the URL.

### Important Notes
- The `.env` file should not be shared or committed to the repository for security reasons.
- Ensure that the provided URL is accessible from your network.
- The `PUBLIC_` prefix is required for Vite to expose the variable to the client.


