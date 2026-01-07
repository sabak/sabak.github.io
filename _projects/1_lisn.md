---
layout: page
title: Li–Sn Phase Discovery
description: Neural-network potentials + large-scale structure search to accelerate DFT-grade materials discovery
img: assets/img/lisn_project_preview.png
importance: 1
category: selected PhD research
related_publications: false
---

## Overview

This project combines a neural-network interatomic potential (NNP) with evolutionary structure prediction to explore the Li–Sn alloy system at a scale that would be impractical with DFT alone. The core idea is a two-tier workflow: use the NNP to perform high-throughput relaxations and ranking over a massive candidate set, then validate only the most promising structures with targeted DFT re-optimization and phonon calculations.

In practice, this meant building a robust training dataset of DFT energies and forces, training and iterating on an NNP that stays stable inside geometry-optimization loops, and deploying it for large-scale screening (on the order of a million relaxations) with systematic escalation to DFT for final decisions.

---

## Approach

### Data generation & curation

- Generated DFT reference data (energies + forces) across Li–Sn compositions and diverse structural motifs (cells up to ~32 atoms).
- Managed a large training corpus (over 1 TB of energy–force data accumulated through iterative expansion).
- Used elemental Li and Sn models as a base and trained a dedicated binary model on curated binary structures.

### Model & training

- **Model type:** Behler–Parrinello–style NNP (atomic environment descriptors → atomic energies → total energy).
- **Binary architecture:** 145–10–10–1 (~1880 parameters).
- **Descriptors:** symmetry functions with a 7.5 Å cutoff.
- **Training target:** energies and forces (forces strongly improve relaxation behavior and local geometry fidelity).
- **Held-out accuracy (reported):** ~10 meV/atom energy RMSE and ~49 meV/Å force RMSE.

### Using the model in the loop (screening + verification)

A surrogate model is most useful when it behaves well *during* relaxations and preserves ranking quality near the stability boundary. The workflow was built around that constraint:

- Run evolutionary searches at fixed compositions to generate candidate pools.
- Perform the bulk of local relaxations with the NNP (high throughput).
- Re-optimize a filtered subset with DFT (high precision).
- Audit near-hull candidates carefully, where small errors can change convex-hull membership.

---

## Scale

- **NNP relaxations:** ~1.16 million local relaxations (≈952k CPU hours).
- **DFT re-optimizations:** 4450 selected structures.
- **Estimated DFT-only equivalent:** ~100 million CPU hours.

This split made it feasible to explore broad composition/structure space while keeping final stability claims anchored in DFT.

---

## Finite-temperature stability (phonon workflow)

To go beyond 0 K enthalpies, we incorporated vibrational contributions using a staged strategy:

1. Compute NNP vibrational free energies for low-energy candidate sets (within ~20 meV/atom).
2. Build a finite-T hull at 600 K using **G = H(DFT) + ΔF_vib(NNP)**.
3. Promote only the most competitive finalists (within ~10 meV/atom of tie-lines) to **DFT phonons**.
4. Evaluate stability across 0–800 K (10 K steps), removing dynamically unstable phases.

Scale:
- **NNP phonons:** 2300 structures
- **DFT phonons:** 233 structures

---

## Key Results

### Ambient pressure (0 GPa)

- Identified overlooked low-energy phases that refine the convex hull, including a new stable **hR48–Li₃Sn** candidate.
- Predicted a competitive **mS40–LiSn₄** polymorph that becomes stable at elevated temperature in the Gibbs analysis.
- Constructed and validated a stable Li-rich BCC-derived phase **hR75–Li₁₉Sn₆** extremely close to the tie-line.

### High pressure (20 GPa)

At 20 GPa, the search yielded revised Li-rich stability with new/updated ground states:

- **aP26–Li₁₁Sn₂** as the most Li-rich ground state (with a near-degenerate polymorph).
- Improved **mS48–Li₅Sn** configuration.
- Newly stable **mS44–Li₉Sn₂**.

---

## Tools & Stack

- **NN training & iteration:** In-house developed NN software MAISE for training loops. MAISE-NET for automated dataset generation and active learning and hyperparameter tuning.
- **Hardware:** HPC clusters with Intel Xeon CPUs for NN training and CPU nodes for DFT calculations. All using slurm workload manager.
- **DFT:** VASP
- **Global optimization:** evolutionary structure prediction driven by NNP relaxations
- **Phonons:** NNP screening + targeted DFT phonons

---

## Publication

Kharabadze, S., Thorn, A., Koulakova, E. A., & Kolmogorov, A. N. (2022).
*Prediction of stable Li-Sn compounds: boosting ab initio searches with neural network potentials.*
**npj Computational Materials**, 8, 136.