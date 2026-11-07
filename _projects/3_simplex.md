---
layout: software
title: SimpleX
subtitle: Numerical methods for fluids and solids
description: A C++ library for Eulerian and particle-based fluid simulation, finite element elasticity and rigid-body dynamics.
permalink: /proj/simplex/
software_id: simplex
img: assets/img/publication_preview/clebsch-preview.png
importance: 3
category: research-software
github: https://gitlab.com/boolzhu/simplex
---

SimpleX includes C++ solvers for free-surface flow on staggered grids, smoothed particle hydrodynamics (SPH), rigid-body dynamics and finite element elasticity. At Dartmouth, we used it as the common library for research code in our companion repository, Complex. The Clebsch, SPH Bubble and MELP solvers in Complex all build against SimpleX.

I took over maintenance and development of SimpleX at Dartmouth and continued that work at Georgia Tech.

## Research built with SimpleX

{% include software-research.liquid %}

## Architecture

<figure class="software-architecture">
  <a href="{{ '/assets/img/software/simplex-structure.png' | relative_url }}"><img src="{{ '/assets/img/software/simplex-structure.png' | relative_url }}" alt="SimpleX module dependencies, organised into language basics, data structures, discretised algorithms and physical simulators." loading="lazy"></a>
  <figcaption>Original architecture diagram from the SimpleX README. Select to view at full size.</figcaption>
</figure>

SimpleX separates data structures, numerical algorithms and simulators. Different simulators share the same geometry and solver code.

The library includes MAC grids, simplicial meshes, particle systems and level sets, allowing projects to choose representations suited to their physics. Shared linear solvers, including multigrid components, support the computational work beneath these models. The viewer provides a common way to inspect simulation output during development.

## Topology optimisation

- [Cellular Topology Optimization on Differentiable Voronoi Diagrams](https://sking8.github.io/TopoVoronoi/) (IJNME, 2023), which explores continuously optimisable cellular structures.
- [A Marker-and-Cell Method for Large-Scale Flow-Based Topology Optimization on GPU](https://doi.org/10.1007/s00158-022-03214-z) (SMO, 2022), whose [public implementation](https://github.com/jyl-pages/Stokes_TO) includes SimpleX and uses its build and viewing tools.

Additional applications are documented in the [software overview](https://faculty.cc.gatech.edu/~bozhu/software.html).

## Getting started

Start with the [SimpleX repository and README](https://gitlab.com/boolzhu/simplex) for its structure, examples and build documentation. For focused research implementations, see [SPH thin-film fluid](https://github.com/wang-mengdi/sph-thin-film) and [MELP thin-film and foam simulation](https://github.com/wang-mengdi/melp-thin-film), each with its own usage instructions.
