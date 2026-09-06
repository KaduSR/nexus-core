# Nexus Core ⚙️

> Core engine para automação de infraestrutura de provedores de internet (ISP) · Core engine for ISP infrastructure automation

---

## 🇧🇷 Português

Engine central para automatizar processos operacionais de provedores de internet. Gerencia monitoramento, conciliação financeira, integração com sistemas de terceiros (IXC, Sicoob) e orquestração de serviços.

### 🛠 Stack
- **Linguagem:** TypeScript
- **Runtime:** Node.js
- **Banco:** PostgreSQL
- **Deploy:** Docker

### ✨ Componentes
- Monitoramento de serviços ISP
- Automação de conciliação financeira
- Integração com IXC Soft e Sicoob
- API RESTful para integração com sistemas externos
- Orquestração de serviços de telecom

### 🏗 Arquitetura
```
nexus-core/
├── src/
│   ├── monitoring/     # Monitoramento de serviços
│   ├── financial/      # Conciliação financeira
│   ├── integration/    # Integração IXC/Sicoob
│   └── api/            # API REST
├── tests/
├── docker-compose.yml
└── README.md
```

### 🚀 Como usar
```bash
git clone https://github.com/KaduSR/nexus-core.git
cd nexus-core
npm install
docker-compose up -d
```

---

## 🇺🇸 English

Central engine to automate operational processes for Internet Service Providers. Manages monitoring, financial reconciliation, integration with third-party systems (IXC, Sicoob), and service orchestration.

### 🛠 Stack
- **Language:** TypeScript
- **Runtime:** Node.js
- **Database:** PostgreSQL
- **Deploy:** Docker

### ✨ Components
- ISP service monitoring
- Automated financial reconciliation
- Integration with IXC Soft and Sicoob
- RESTful API for external system integration
- Telecom service orchestration

### 🏗 Architecture
```
nexus-core/
├── src/
│   ├── monitoring/     # Service monitoring
│   ├── financial/      # Financial reconciliation
│   ├── integration/    # IXC/Sicoob integration
│   └── api/            # REST API
├── tests/
├── docker-compose.yml
└── README.md
```

### 🚀 Usage
```bash
git clone https://github.com/KaduSR/nexus-core.git
cd nexus-core
npm install
docker-compose up -d
```

---

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-2579C2?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

</div>
