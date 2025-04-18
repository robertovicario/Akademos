---
sidebar_position: 1
---

# Introduction

---

## 🔗 Blockchain

_Blockchain_ is a special kind of database that stores information in a chain of blocks. Each block contains a list of transactions, and these blocks are linked together in the order they were added—like a digital ledger.

### 🧱 Features

- **Decentralized:** No single person or company controls it. It's maintained by a network of computers (called nodes) around the world.
- **Immutable:** Once data is added to the blockchain, it's almost impossible to change. This creates a permanent, tamper-proof record.
- **Transparent:** Everyone on the network can view the blockchain. It's public and verifiable (in most cases).
- **Secure:** It uses cryptography to keep transactions safe and to ensure that only authorized changes are made.

---

## 🌐 Decentralization

_Decentralization_ means that control and decision-making aren't held by a single entity, like a company or government. Instead, power is distributed across a network of independent participants.

### 🏛️ Centralized vs Decentralized

| Feature | Centralized System | Decentralized System |
|-|-|-|
| Control | One authority | Shared among network participants |
| Risk of Failure | Single point of failure | Highly resilient |
| Censorship | Possible | Very hard to enforce |
| Transparency | Limited or none | Often fully open |
| Speed | Usually faster | Sometimes slower |

### 🧩 Key Components

- **Nodes:** Independent computers that keep a copy of the entire blockchain and help validate transactions.
- **Consensus Mechanisms:** Rules that help the network agree on what's true.
- **Peer-to-Peer Networking:** Nodes talk directly to each other, rather than through a central server.

---

## 🧠 The Consensus Problem

In decentralized systems, no single person or computer is in charge, so how do all the independent nodes agree on what’s true? That’s the _Consensus Problem_:

:::warning Problem

_How can a group of participants, who don't fully trust each other, agree on a single version of the truth?_

:::

---

🔄 State Machine Replication (SMR)

...

Here’s a natural continuation that adds a **State Machine Replication (SMR)** section under the **Consensus Problem** heading:

---

## 🔄 State Machine Replication (SMR)

_State Machine Replication_ is a foundational technique used to solve the _Consensus Problem_ in distributed systems. It ensures that multiple nodes stay in sync, even if some fail or act maliciously.

### ⚙️ Working

1. **Deterministic Machines:** Each node runs the same state machine—a program that, given the same input, always produces the same output and transitions to the same next state.
2. **Same Inputs, Same Order:** Nodes must agree on the exact same sequence of inputs (typically transactions).
3. **Consensus Algorithm:** A protocol (like Paxos, Raft, or a blockchain consensus like Proof of Work) ensures that all honest nodes agree on the input order.

If all nodes receive and process the same inputs in the same order, they'll all end up in the same state replicating the same behavior.








• Two kinds of parties:
• Nodes
• Run the program and a Consensus protocol. For keeping them in sync
• Clients
• Don’t run the Consensus protocol but read/write the state
• Transactions
• Messages among clients and nodes
• e.g. currency transfer from an account to the other
• Function call to a smart contract
• What a node is responsible of doing?
• Each node maintains a local, append-only data structure called history
• The history stores transactions that have been submitted previously to the
node
• History: local, ordered sequence of transactions maintained by a node
• Desideratum: nodes must have identical histories
• This is achieved by keeping them in sync, despite failures, delays, attacks
• Protocol:
Procedure that is run locally by each (honest) node
• The procedure is event-driven: local computation steps + send/receive msgs
to/from other nodes/clients
• Goals:
Liveness: something good eventually happens (more on this later)
Safety: bad things never happen
Consistency: all histories are composed by the same Txs sequence
• Weaker notion of Consistency:
• Either all local histories have same Tx ordering or some local histories may be
prefixes of other histories
• Nodes may not execute in lockstep and some of them may ‘lag behind’
• No two local histories order two diﬀerent transactions in opposite way
