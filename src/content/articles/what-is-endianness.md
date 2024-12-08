---
title: "What is Endianness?"
description: "Endianness is the order in which bytes of a multi-byte data type is stored within a given architecture. It ensures consistency when proccessing data, particularly across systems that use different byte ordering formats."
pubDate: "02 November 2024"
tags: "endianness, computer architecture, binary representation, hexadecimal, cpu registers, data storage"
draft: false
---

We can think of a computer's memory as a long sequence of bytes that can be accessed using an address (or index) which is often expressed in hexadecimal form. The size of data that can be accessed at one time is determined by the architecture of the computer. In a 16-bit architecture, the CPU can process 16 bits (or 2 bytes) of data in a single operation. This is known as the word size.

The word size is also reflected in the size of the CPU registers. In a 16-bit architecture, the registers (like AX, BX, etc.) are typically 16 bits in size, allowing them to hold values that fit within that range. A multi-byte (16 bits, 32 bits etc) register is made up of multiple smaller parts that are 1 byte in size. For example, the AX register is made of the AL and AH registers which are the lower and upper byte registers respectively. Endianness is the order in which bytes of a multi-byte data type is stored within a given architecture.

Consider a CPU processing a 16-bit value, `0x1234`, using a 16-bit register. It must consider a couple things: first, the size of the value; next, the significance of each digit; and finally, the order in which they will be stored, i.e., which bytes go in the lower byte and which go in the upper byte.

`0x1234` corresponds to `0001 0010 0011 0100` in binary and the significance of each digit is realised from right to left, the right-most digit being the least significant and the left-most digit the most significant. To store this in the AX register, we have to determine which 8-bit value goes in each of the smaller parts (AL, AH).

In big-endian systems, the **most significant byte (MSB)** is stored at the lowest memory address.
- Address 0 (AL): `0x12` - `0001 0010` (the MSB)
- Address 1 (AH): `0x34` - `0011 0100` (the LSB)

In little-endian systems, the **least significant byte (LSB)** is stored at the lowest memory address.
- Address 0 (AL): `0x34` - `0011 0100` (the LSB)
- Address 1 (AH): `0x12` -  `0001 0010` (the MSB)

Why is this important? Knowledge of endianness can help us ensure consistency when proccessing data, particularly across systems that use different byte ordering formats.

> The choice of endianness comes down to preference, historical reasons, or compatibility with existing systems. 
