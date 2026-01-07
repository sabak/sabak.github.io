---
layout: page
title: MAISE Software
description: Automated neural-network potential training + molecular dynamics (including NPT) in an open-source simulation stack
img: assets/img/maise_project_preview.png
importance: 3
category: software
related_publications: false
---

## Overview

MAISE (Module for Ab Initio Structure Evolution) is an open-source atomic simulation package developed in the Kolmogorov group. It supports automated construction of neural-network interatomic potentials (NNPs), evolutionary structure optimization, and downstream simulation tasks like molecular dynamics and basic phonon analysis.

My work focused on two areas that “close the loop” between modeling and simulation:

1) **Automation for data generation → model training → evaluation**, including a config-driven pipeline for running iterative training cycles and tuning model/training hyperparameters.

2) **Molecular dynamics infrastructure**, including contributions to the **NPT barostat module** and validation against experimental thermophysical properties.

---

## What I Built

### 1) Automated data generation & training pipeline (Python)

I contributed to the workflow that turns *DFT calculations into deployable NNP models* with minimal manual intervention. The pipeline is designed around repeatable cycles:

- **Automatically generating reference data** using user-configured DFT engine for energies and forces on diverse structures
- **Reference data ingestion** known structures along with generated - with sanity checks (only successful DFT jobs are collected)
- **Dataset filtering & labeling** (train/test splits, optional “must-include” subsets)
- **Precomputation of descriptors** to avoid recomputing expensive features during training
- **Automated training + evaluation**, producing clear run logs and summaries
- **Iterative dataset expansion**, where newly sampled structures are added and the model is retrained

In practice, this enabled “set it up once, then let it run” experiments for building models that remain stable in geometry optimization and structure search loops.

---

### 2) Model construction & hyperparameter tuning

A big part of making NNPs usable in real search/MD settings is balancing **accuracy vs robustness**. My contributions included implementing and using tunable controls for:

- **Energy/force training configuration** (including weighting and force subsampling strategies)
- **Cutoffs for filtering high-energy / high-force outliers**
- **Architecture and training settings** (hidden-layer sizes, optimization method, number of steps, regularization)
- **Train/test monitoring** to detect overfitting and failure modes (e.g., “spurious minima” during relaxations)

The end result is a pipeline that supports fast iteration: adjust a few parameters, regenerate a clean dataset snapshot, retrain, and re-test.

---

### 3) Molecular dynamics module: NPT barostat + validation

I also contributed to the molecular dynamics layer, including a new **NPT (constant N, P, T) barostat** implementation and testing/validation work which is a part of the MAISE package written in C.

Validation strategy:
- Run NPT simulations for well-characterized elemental systems
- Extract **thermal expansion coefficients** from temperature-dependent lattice constants
- Compare against published experimental values and quantify agreement

This was a practical “physics-grounded” test that the barostat/thermostat combination behaves correctly and produces realistic thermodynamic response.

---

## Documentation

- Built and maintained user-facing documentation (Python + Sphinx)
- Documented MD setup parameters, typical workflows, and troubleshooting
- Documentation hosted at: https://maise.binghamton.edu/wiki/

---

## Software Availability

MAISE is open source:
- Repository: https://github.com/maise-guide/maise
- Repository for MAISE-NET (training pipeline): https://github.com/maise-guide/maise-net

---

## Publication

Hajinazar, S., Thorn, A., Sandoval, E. D., **Kharabadze, S.**, Kolmogorov, A. N. (2021).
*MAISE: Construction of neural network interatomic models and evolutionary structure optimization.*
Computer Physics Communications, 259, 107679.