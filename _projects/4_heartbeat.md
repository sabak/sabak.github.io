---
layout: page
title: Radar Heartbeat Monitoring with Transformers
description: Hybrid radar signal processing + Transformer fusion for robust heartbeat/HRV under random body motion (RBM)
img: assets/img/heartbeat_project_preview.png
importance: 1
category: current
related_publications: false
---

## Overview

This is an ongoing, funded project developed for **IEEE AESS Challenge Problem I**: *Radar-Based Heartbeat Monitoring in Dynamic Scenarios*. The goal is robust estimation of **average heart rate (AHR)** and **heart rate variability (HRV)** from FMCW radar, even when the subject exhibits **random body motion (RBM)**, which can easily overwhelm the much smaller cardiac micro-motions.  

Our approach is a hybrid pipeline: conventional radar processing to stabilize and isolate the chest signal, followed by a **multi-stream Transformer** that fuses physics-guided features and produces (i) a super-resolved ECG-like waveform and (ii) AHR/HRV metrics aligned with the official challenge scoring.  

---

## Technical Approach (Proposal Summary)

### 1) Radar processing block (stabilize the chest signal)

Starting from raw FMCW radar data, the signal-processing front-end forms range/slow-time representations, removes clutter, detects the chest range cell, and compensates for range migration so that downstream learning sees a stabilized time series.  

### 2) Physics-guided feature construction (multi-stream time series)

From the stabilized chest signal, we construct a feature tensor that includes complementary views of motion:

- Displacement slow-time series **R[k]**
- Increment **ΔR[k]**
- Amplitude at the chest bin and neighboring range bins
- Band-pass filtered views of R[k] for respiration **[0.2, 0.5] Hz**, heartbeat **[0.7, 2.0] Hz**, and heart sound **[20, 200] Hz**
- A coarse RBM indicator derived from spectral energy spreading  

This is designed so each stream is interpretable on its own, while still giving the model enough context to handle motion corruption.  

### 3) Multi-stream Transformer fusion + temporal super-resolution

The model concatenates the streams into a multidimensional time series x[k], adds positional encoding, then uses a **multi-head Transformer decoder with cross-attention** to dynamically re-weight streams under RBM (e.g., down-weight corrupted displacement while attending to the RBM indicator). 

### 4) Outputs aligned with the challenge metrics

The network outputs:
1) a reconstructed **ECG-like** waveform highlighting heartbeat micro-motions, and  
2) cardiac metrics: **AHR** and **HRV**, matching the official challenge evaluation.  

---

## Robustness via Synthetic RBM Augmentation

RBM is treated as the dominant interference source, so the proposal includes a targeted augmentation strategy: generate synthetic RBM displacement sequences using a **Markov stochastic process**, then add them to the clean displacement signal to increase training diversity.  

Two parametric RBM models are described:
- **Random-walk RBM** (piecewise-constant velocity subframes + noise) for abrupt shifts/jerks
- **AR(1) RBM** for band-limited, temporally correlated jitter  

These augmentation parameters can be treated as tunable training hyperparameters.  

---

## My Implementation Work (In Progress)

My contributions are focused on the training/experimentation infrastructure and the end-to-end ML pipeline:

### Data pipeline (raw radar → model-ready tensors)

- Implemented the data flow from **raw radar captures** through a clean **Dataset abstraction** and **DataLoader abstraction**
- Modular feature construction so the same dataset can feed multiple model families (baselines + Transformer variants)
- Reproducible preprocessing with explicit configuration of CPI/windowing, stream definitions, and augmentation toggles (real + synthetic RBM)

### Training + experimentation framework

- Prototyped a general **ModelTrainer** that standardizes:
  - logging/metrics per CPI
  - checkpointing
  - evaluation hooks consistent with the challenge deliverables
- Integrated with **Ray Tune** to run hyperparameter sweeps (model size, attention settings, augmentation parameters, optimization schedule)
- Support for **multi-device training** and controlled experimentation (repeatable runs, comparable configs across models)

---

## Challenge Context & Organizers

This work targets **IEEE AESS Challenge Problem I: Radar-Based Heartbeat Monitoring in Dynamic Scenarios**. Official pages:
- IEEE AESS Radar Challenge hub: [https://ieee-aess.org/radar-challenge](https://ieee-aess.org/radar-challenge)
- Call / overview post for Challenge Problem I:  [ieee-aess.org](https://ieee-aess.org/post/announcement/call-solutions-ieee-aess-challenge-problem-i-radar-based-heartbeat-monitoring)

The challenge problem itself was proposed/developed by **Yu Rong, Daniel Bliss (Arizona State University), Kawon Han, and Christos Masouros (University College London)**.  [ieee-aess.org](https://ieee-aess.org/files/ieeeaess/2025-09/Request%20for%20Proposals%20for%20Soutions%20%20to%20AESS%20Challenge%20Problem%20I%20%281%29.pdf?utm_source=chatgpt.com)

---

## Status

- Funded through the IEEE AESS Challenge program; currently under active development and evaluation against the official scoring pipeline.  