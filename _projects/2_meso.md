---
layout: software
title: MESO
subtitle: GPU computing for physical simulation research
description: A C++ and CUDA framework supporting research in fluid simulation, interface tracking and physical optimisation.
permalink: /proj/meso/
software_id: meso
img: assets/img/publication_preview/thinshell.png
importance: 2
category: research-software
github: https://github.com/wang-mengdi/meso
---

MESO is a C++ and CUDA library for physical simulation and computational design.

I led the team that started MESO in 2022.

## Research supported by MESO

{% include software-research.liquid %}

## Numerical methods

MESO uses discrete exterior calculus to assemble differential operators on grids. Its fluid and particle simulators share data structures and GPU solvers.

<figure class="software-architecture">
  <a href="{{ '/assets/img/software/meso-design.png' | relative_url }}">
    <img src="{{ '/assets/img/software/meso-design.png' | relative_url }}" alt="MESO design overview: common infrastructure, geometry, data storage and solvers; particle, mesh, grid and DEC algorithms; application simulators." loading="lazy">
  </a>
  <figcaption>MESO architecture, from the project README. Mesh-based extensions are shown as part of the design.</figcaption>
</figure>

## Numerical performance

The repository reports a multigrid-preconditioned conjugate-gradient (MGPCG) Poisson solve benchmark on an NVIDIA RTX 4080. At a convergence tolerance of 10<sup>−5</sup>, the reported Dirichlet case takes **112 ms at 256³** and **757 ms at 512³**. These measurements concern the linear solver used in pressure projection.

<details class="software-details">
  <summary>View the reported solver timings and iteration counts</summary>
  <div class="software-table-wrap">
    <table>
      <caption>MGPCG Poisson solver · NVIDIA RTX 4080 · tolerance 10<sup>−5</sup></caption>
      <thead><tr><th scope="col">Boundary conditions</th><th scope="col">128³</th><th scope="col">256³</th><th scope="col">512³</th></tr></thead>
      <tbody>
        <tr><th scope="row">Dirichlet</th><td>25 ms / 5 iterations</td><td>112 ms / 5 iterations</td><td>757 ms / 5 iterations</td></tr>
        <tr><th scope="row">Neumann</th><td>41 ms / 9 iterations</td><td>244 ms / 13 iterations</td><td>2411 ms / 18 iterations</td></tr>
        <tr><th scope="row">Mixed</th><td>71 ms / 17 iterations</td><td>451 ms / 24 iterations</td><td>4750 ms / 35 iterations</td></tr>
      </tbody>
    </table>
  </div>
  <p>Source: <a href="https://github.com/wang-mengdi/meso#performance-test-on-nvidia-rtx-4080">MESO README</a>. Reported timings for the benchmark configuration above.</p>
</details>

## Contributors

The repository credits [Mengdi Wang]({{ '/' | relative_url }}), [Yuchen Sun](https://yuchen-sun-cg.github.io/), [Yitong Deng](https://yitongdeng.github.io/) and [Fan Feng](https://sking8.github.io/) as contributors.

## Explore the code

The [public repository](https://github.com/wang-mengdi/meso) contains the framework, examples and test scripts. Its [getting-started guide](https://github.com/wang-mengdi/meso#getting-started) introduces the C++/CUDA toolchain, xmake build workflow and ParaView visualisation.
