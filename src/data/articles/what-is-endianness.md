---
title: "endianess in software"
description: "The size of data chunks that can be handled by a CPU during an operation is
known as its word size and is determined primarily by the size of its registers.
In an 8-bit architecture, the CPU registers are 8-bits (1 byte) wide allowing them to
hold values within that range (2⌃8 -1). In 16-bit, 32-bit and 64 bit
architectures, their registers are correspondingly wider, allowing them to hold
even bigger values."
pubDate: "02 November 2024"
keywords: "endianness, computer architecture, binary representation, hexadecimal, cpu registers, data storage"
tags: ["computer architecture", "binary representation"]
draft: true
---

The size of data chunks that can be handled by a CPU during an operation is 😀
known as its word size and is determined primarily by the size of its registers.
In an 8-bit architecture, the CPU registers are 8-bits (1 byte) wide allowing them to
hold values within that range (2⌃8 -1). In 16-bit, 32-bit and 64 bit
architectures, their registers are correspondingly wider, allowing them to hold
even bigger values.


The memory of a computer can be thought of as a long consecutive sequence of byte-sized
(8-bit wide) boxes each identified by a unique address that represents its
position in the sequence. Multi byte data take up more thatn one box and the
endianess of the system determines the order in whciht ath data is placed in the
box.


In big-endian systems, the **most significant byte (MSB)** is stored at the lowest available memory address and the ****least significant byte (LSB)**.
- Address 0 (AL): `0x12` - `0001 0010` (the MSB)
- Address 1 (AH): `0x34` - `0011 0100` (the LSB)

In little-endian systems, the **least significant byte (LSB)** is stored at the lowest memory address.
- Address 0 (AL): `0x34` - `0011 0100` (the LSB)
- Address 1 (AH): `0x12` -  `0001 0010` (the MSB)

Why is this important? Knowledge of endianness can help us ensure consistency when proccessing data, particularly across systems that use different byte ordering formats.

