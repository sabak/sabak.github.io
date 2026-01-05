---
layout: page
title: Li-Sn Phase Discovery
description: Machine learning accelerated discovery of new lithium-tin compounds
img: 
importance: 1
category: research
related_publications: true
---

## Overview

This project focused on accelerating the discovery of stable Li-Sn compounds using neural network potentials combined with evolutionary structure prediction algorithms. The Li-Sn system is of significant interest for battery applications, as tin-based anodes offer high theoretical capacity for lithium-ion batteries.

## Methodology

- **Neural Network Potentials**: Trained neural network models on DFT reference data generated using VASP software to accurately predict energies and forces
- **Evolutionary Algorithms**: Utilized evolutionary structure optimization to explore the configuration space, generating over 1 million candidate structures
- **High-Throughput Screening**: Used trained neural networks to rapidly screen candidates before expensive DFT validation

## Key Results

- Identified **8 new stable structures** that redefine the previously known convex hulls for the Li-Sn system
- Extended predictions to both ambient and elevated pressures
- Confirmed thermodynamic stability through phonon calculations at both ML and DFT levels
- Generated over 1 terabyte of energy-force data for training

## Publication

This work was published in *npj Computational Materials*:

> Kharabadze, S., Thorn, A., Koulakova, E.A., Kolmogorov, A. N. (2022). Prediction of stable Li-Sn compounds: boosting ab initio searches with neural network potentials. npj Comput Mater 8, 136.

## Impact

This methodology demonstrates how machine learning can significantly accelerate materials discovery by reducing the computational cost of ab initio searches by orders of magnitude while maintaining prediction accuracy.
