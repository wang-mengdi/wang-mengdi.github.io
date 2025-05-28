---
layout: default
---

# Thin-Film Smoothed Particle Hydrodynamics Fluid

[Mengdi Wang<sup>1</sup>](https://wang-mengdi.github.io/), [Yitong Deng<sup>1</sup>](https://yitongdeng.github.io/), Xiangxin Kong<sup>1</sup>, Aditya H. Prasad<sup>1</sup>, [Shiying Xiong<sup>1</sup>](https://shiyingxiong.github.io/),  and [Bo Zhu<sup>1</sup>](https://faculty.cc.gatech.edu/~bozhu/)
<br />
<sup>1</sup>Dartmouth College
<br />
[![webpage](https://img.shields.io/badge/Project-Homepage-green)](.)
[![paper](https://img.shields.io/badge/Paper-Public-red)](https://cs.dartmouth.edu/~bozhu/papers/sph_bubble.pdf)

<figure>
  <img src="./resources/represent3000.jpg" align="left" width="100%" style="margin: 0% 5% 2.5% 0%">
  <figcaption>Several thin-film phenomena as simulated using our proposed method. Counting from left to right: (1) surface flow on a oscillating soap bubble, (2) pinched-off droplets between two circular rims pulling away from one another, (3) a soap bubble bursting into tiny droplets and filaments after being poked from the right, (4) the vibrant, opal-like color pattern caused by Rayleigh-Taylor instability on a large-deforming, wet thin-film surface.</figcaption>
</figure>

## Abstract

We propose a particle-based method to simulate thin-film fluid that jointly facilitates aggressive surface deformation and vigorous tangential flows. We build our dynamics model from the surface tension driven Navier-Stokes equation with the dimensionality reduced using the asymptotic lubrication theory and customize a set of differential operators based on the weakly compressible Smoothed Particle Hydrodynamics (SPH) for evolving pointset surfaces. The key insight is that the compressible nature of SPH, which is unfavorable in its typical usage, is helpful in our application to co-evolve the thickness, calculate the surface tension, and enforce the fluid incompressibility on a thin film. In this way, we are able to two-way couple the surface deformation with the in-plane flows in a physically based manner. We can simulate complex vortical swirls, fingering effects due to Rayleigh-Taylor instability, capillary waves, Newton’s interference fringes, and the Marangoni effect on liberally deforming surfaces by presenting both realistic visual results and numerical validations. The particle-based nature of our system also enables it to conveniently handle topology changes and codimension transitions, allowing us to marry the thin-film simulation with a wide gamut of 3D phenomena, such as pinch-off of unstable catenoids, dripping under gravity, merging of droplets, as well as bubble rupture.


## Video

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <video src="https://dl.acm.org/doi/suppl/10.1145/3450626.3459864/suppl_file/a110-wang.mp4"
         style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
         controls muted>
  </video>
</div>



## Citation
```
@article{wang2021thin,
  title={Thin-Film Smoothed Particle Hydrodynamics Fluid},
  author = {Mengdi Wang and Yitong Deng and Xiangxin Kong and Aditya H. Prasad and Shiying Xiong and Bo Zhu},
  itle = {Thin-Film Smoothed Particle Hydrodynamics Fluid},
  journal={ACM Transactions on Graphics (TOG)},
  volume={40},
  number={4},
  pages={1--16},
  year={2021},
  publisher={ACM},
  address = {New York, NY, USA}
}
```
