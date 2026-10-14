---
layout: software
title: SimpleX
subtitle: Physics simulation, optimisation and visualisation
description: A shared C++ research framework for developing, solving and visualising physical simulations.
permalink: /proj/simplex/
software_id: simplex
img: assets/img/publication_preview/clebsch-preview.png
importance: 3
category: research-software
github: https://gitlab.com/boolzhu/simplex
---

SimpleX is a shared C++ research framework for physics simulation, optimisation and visualisation. It brings together geometric representations, numerical solvers, physical models and an interactive OpenGL viewer, with OpenMP and CUDA support for parallel computation. The same foundation supports research across free-surface flows, thin films, elastic and rigid bodies, and computational design.

The framework separates reusable infrastructure from project-specific algorithms, allowing new methods to build on common simulation and visualisation tools.

## Research built with SimpleX

These three projects show how a common software foundation can support distinct physical representations and numerical methods. They span vortical flow on Cartesian grids, particle-based thin films, and coupled film and foam dynamics. Each links to the published research; the thin-film projects also provide public implementations.

{% include software-research.liquid %}

## Architecture

<figure class="software-architecture">
  <a href="{{ '/assets/img/software/simplex-structure.png' | relative_url }}"><img src="{{ '/assets/img/software/simplex-structure.png' | relative_url }}" alt="SimpleX module dependencies, organised into language basics, data structures, discretised algorithms and physical simulators." loading="lazy"></a>
  <figcaption>Original architecture diagram from the SimpleX README. Select to view at full size.</figcaption>
</figure>

SimpleX organises reusable functionality into four layers: language basics, data structures, discretised algorithms and physical simulators. Common utilities and data containers underpin modules for geometry, solvers, optimisation, parallel computation and viewing. Physical simulators assemble these capabilities into specific models. The arrows in the original diagram show how modules depend on one another.

The library includes MAC grids, simplicial meshes, particle systems and level sets, allowing projects to choose representations suited to their physics. Shared linear solvers, including multigrid components, support the computational work beneath these models. The viewer provides a common way to inspect simulation output during development.

Application code remains separate from the reusable library and build infrastructure. This makes SimpleX useful as a research foundation: an individual project can introduce a new formulation while reusing established data structures, solvers and visualisation tools. Maintenance of those shared components therefore supports work beyond a single paper.

## Supporting a wider research programme

SimpleX also supports computational design and topology optimisation. Examples include:

- [Cellular Topology Optimization on Differentiable Voronoi Diagrams](https://sking8.github.io/TopoVoronoi/) (IJNME, 2023), which explores continuously optimisable cellular structures.
- [A Marker-and-Cell Method for Large-Scale Flow-Based Topology Optimization on GPU](https://doi.org/10.1007/s00158-022-03214-z) (SMO, 2022), whose [public implementation](https://github.com/jyl-pages/Stokes_TO) includes SimpleX and uses its build and viewing tools.

Additional applications are documented in the [software overview](https://faculty.cc.gatech.edu/~bozhu/software.html).

## Getting started

Start with the [SimpleX repository and README](https://gitlab.com/boolzhu/simplex) for its structure, examples and build documentation. For focused research implementations, see [SPH thin-film fluid](https://github.com/wang-mengdi/sph-thin-film) and [MELP thin-film and foam simulation](https://github.com/wang-mengdi/melp-thin-film), each with its own usage instructions.
