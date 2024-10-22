---
layout: default
---

# An interface tracking method with triangle edge cuts

[Mengdi Wang<sup>1</sup>](https://wang-mengdi.github.io/), [Matthew Cong<sup>2</sup>](https://physbam.stanford.edu/~mdcong/), [Bo Zhu<sup>1</sup>](https://faculty.cc.gatech.edu/~bozhu/)  
<sup>1</sup>Georgia Institute of Technology
<sup>2</sup>NVIDIA Corporation

## Paper
<img src="./resources/cases-nofix.png" align="left" width="30%" style="margin: 0% 5% 2.5% 0%">
**An interface tracking method with triangle edge cuts**  
Journal of Computational Physics (Volume 520, 1 January 2025, 113504) 

[Mengdi Wang](https://wang-mengdi.github.io/), [Matthew Cong](https://physbam.stanford.edu/~mdcong/), [Bo Zhu](https://faculty.cc.gatech.edu/~bozhu/)  
**[[paper](https://wang-mengdi.github.io/proj/triangle-edge-cuts/resources/preprint.pdf)]**  **[[webpage](https://wang-mengdi.github.io/proj/triangle-edge-cuts/)]**
<br />
<br />

## Abstract

We propose a particle-based method to simulate thin-film fluid that jointly facilitates aggressive surface deformation and vigorous tangential flows. We build our dynamics model from the surface tension driven Navier-Stokes equation with the dimensionality reduced using the asymptotic lubrication theory and customize a set of differential operators based on the weakly compressible Smoothed Particle Hydrodynamics (SPH) for evolving pointset surfaces. The key insight is that the compressible nature of SPH, which is unfavorable in its typical usage, is helpful in our application to co-evolve the thickness, calculate the surface tension, and enforce the fluid incompressibility on a thin film. In this way, we are able to two-way couple the surface deformation with the in-plane flows in a physically based manner. We can simulate complex vortical swirls, fingering effects due to Rayleigh-Taylor instability, capillary waves, Newton’s interference fringes, and the Marangoni effect on liberally deforming surfaces by presenting both realistic visual results and numerical validations. The particle-based nature of our system also enables it to conveniently handle topology changes and codimension transitions, allowing us to marry the thin-film simulation with a wide gamut of 3D phenomena, such as pinch-off of unstable catenoids, dripping under gravity, merging of droplets, as well as bubble rupture.


## Video / Results

#### Static Reconstruction

<img src="./resources/static-recon.png" width="60%">

#### Single Vortex

<img src="./resources/single-vortex.png" width="60%">

#### Zalesak's Disk

<img src="./resources/zalesak-disk.png" width="60%">

#### Deformation Test

<img src="./resources/deformation-test.png" width="60%">


## Citation
```
@article{wang2024interface,
  title={An Interface Tracking Method with Triangle Edge Cuts},
  author={Wang, Mengdi and Cong, Matthew and Zhu, Bo},
  journal={Journal of Computational Physics},
  pages={113504},
  year={2024},
  publisher={Elsevier}
}
```
