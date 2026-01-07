---
layout: page
title: Li–B–C Thermodynamic Stability Map
description: First-principles stability audit of LiBC delithiation and proposed lithium borocarbide phases
img: assets/img/publication_preview/libc_preview.png
importance: 2
category: selected PhD research
related_publications: false
---

## Overview

Lithium borocarbides sit at an interesting intersection of energy materials and fundamental solid-state chemistry: **LiBC was proposed as a route toward high-*T*<sub>c</sub> superconductivity via hole-doping**, yet experimentally **delithiation produces metastable, hard-to-control LixBC derivatives** rather than a clean equilibrium pathway.

In this project, we performed an **ab initio thermodynamics + stability audit** of reported and proposed **Li–B–C compounds**, connecting:

- **(T, P) delithiation conditions** for LiBC in equilibrium with Li<sub>2</sub> gas  
- stability of **BC<sub>3</sub>** polymorphs (including kinetic/dynamical feasibility)  
- reassessments of **LiBC<sub>3</sub>** and the proposed **Li<sub>2</sub>B<sub>2</sub>C** phase  

---

## My Role

I was the **main author and technical coordinator** for the study. My responsibilities included:

- Coordinating efforts among multiple collaborators (structure candidates, analysis ownership, and manuscript integration)
- Designing the computational plan and **baselines**, and defining **rubrics** used to draw conclusions
- Launching and monitoring large batches of DFT calculations across multiple HPC systems (consistent settings, job recovery, and reruns)
- Synthesizing results into a coherent, reproducible stability narrative

---

## Approach & Stability Rubric

Rather than relying on a single energy ranking, the conclusions were drawn using a layered rubric:

### 1) Thermodynamic stability

- Computed formation energies and evaluated **convex-hull stability** against competing phases across the Li–B–C system.
- Used distance-to-hull as the primary criterion for equilibrium stability.

### 2) Finite-temperature corrections

- Incorporated **configurational entropy** for disordered Li in LixBC and **harmonic vibrational contributions** where relevant.
- Evaluated how free-energy corrections shift relative stability and delithiation boundaries.

### 3) Delithiation thermodynamics

- Modeled equilibrium with **Li<sub>2</sub>** gas and mapped **x-dependent (T,P) phase boundaries** by comparing Gibbs free energies over a broad temperature range.
- Quantified sensitivity of predicted boundaries to systematic DFT uncertainties and neglected terms.

### 4) Dynamical stability checks

- Used phonon-based screening to rule out candidates with **imaginary modes**, separating “thermodynamically plausible” from “dynamically unstable.”

---

## Structure Discovery & Verification

For phases where literature models proved unstable or inconsistent, we expanded the search beyond reported prototypes:

- Performed **unconstrained evolutionary searches** initialized from random structures
- Applied **motif-driven construction** when evolutionary operators struggled with particular structural families
- Re-optimized and cross-checked the best candidates under consistent computational settings

---

## Key Results

### LiBC delithiation: a narrow thermodynamic window shaped by Li<sub>2</sub> gas entropy

Delithiation is largely driven by entropy gain in the diatomic Li<sub>2</sub> gas phase, and equilibrium boundaries can be mapped by matching free energies of LiBC vs. LixBC + Li<sub>2</sub> mixtures. The resulting stability regions for intermediate x are narrow, helping explain why experimentally accessible compositions are strongly influenced by kinetics and process history.

### BC<sub>3</sub>: layered h-BC<sub>3</sub> is dynamically unstable

The commonly discussed layered h-BC<sub>3</sub> model exhibits imaginary phonon modes, indicating dynamical instability and undermining its feasibility as a stable or even metastable target.

### LiBC<sub>3</sub>: Li intercalation stabilizes one polymorph more effectively

Li intercalation brings one LiBC<sub>3</sub> polymorph substantially closer to stability, while other proposed variants inherit the energetic penalty of their parent frameworks and remain unfavorable; some reported structures are also dynamically unstable.

### Li<sub>2</sub>B<sub>2</sub>C: improved candidates still remain far above the convex hull

Evolutionary searches and motif-driven construction produced significantly improved polymorphs compared to earlier proposals. However, the best candidates still remain well above the convex hull, indicating that Li<sub>2</sub>B<sub>2</sub>C is unlikely to form under equilibrium conditions.

---

## Publication

> Kharabadze, S., Thorn, A., Sandoval, E. D., Hajinazar, S., Kolmogorov, A. N. *Thermodynamic stability of Li–B–C compounds from first principles.* (Physical Chemistry Chemical Physics).