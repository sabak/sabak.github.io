---
layout: page
title: MAISE Software
description: Neural network interatomic potentials and molecular dynamics implementation
img: 
importance: 3
category: software
related_publications: true
---

## Overview

MAISE (Machine learning Ab Initio Structure Explorer) is an in-house atomic simulation software package developed by the Kolmogorov group at Binghamton University. My contribution focused on implementing the NPT barostat module for molecular dynamics simulations.

## My Contributions

### NPT Barostat Implementation

- Implemented NPT (constant Number of particles, Pressure, and Temperature) barostat in C
- Enables molecular dynamics simulations at controlled pressure and temperature
- Module is now part of the publicly available MAISE software

### Validation

- Tested the module by calculating thermal expansion coefficients
- Obtained values for silver, copper, and sodium within **10% of experimental values**
- Validated accuracy of the implementation against known materials properties

### Documentation

- Developed documentation wiki using Python and Sphinx library
- Wrote comprehensive documentation for the molecular dynamics module
- Documentation hosted at [maise.binghamton.edu/wiki](https://maise.binghamton.edu/wiki/)

## Software Availability

MAISE is open source and available on GitHub:
- Repository: [github.com/maise-guide/maise](https://github.com/maise-guide/maise)

## Publication

> Hajinazar, S., Thorn, A., Sandoval, E. D., Kharabadze, S., Kolmogorov, A. N. (2021). MAISE: Construction of neural network interatomic models and evolutionary structure optimization. Computer Physics Communications, 259, 107679.
