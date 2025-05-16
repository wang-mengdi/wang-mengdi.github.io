---
layout: default
---

# *Cirrus*: Adaptive Hybrid Particle-Grid Flow Maps on GPU


[**Mengdi Wang<sup>1</sup>** ](https://wang-mengdi.github.io/), [Fan Feng<sup>2</sup>](https://sking8.github.io/), Junlin Li<sup>1</sup>, [Bo Zhu<sup>1</sup>](https://www.cs.dartmouth.edu/~bozhu/)
<br />
<sup>1</sup>Georgia Institute of Technology
<br />
<sup>2</sup>Dartmouth College
<br />
ACM Transactions on Graphics (Proceedings of SIGGRAPH 2025)
<br />
**[[preprint](cirrus-preprint.pdf)]**  **[[webpage](.)]** **[[source code](https://github.com/wang-mengdi/Cirrus)]**

<figure>
  <img src="./representative-image.jpg" align="left" width="100%" style="margin: 0% 5% 2.5% 0%">
  <figcaption>Left: smoke (large) passing a racing car and its vorticity field (small). Right: smoke (large) passing an aircraft with 4 rotating propellers at a 15-degree angle of attack and its vorticity field (small). The wingtip vortices are captured by our algorithm in the vorticity field. Effective resolutions are 512x512x1024 on our adaptive grid implemented on GPU.</figcaption>
</figure>
<br />

## Abstract

We propose the adaptive hybrid particle-grid flow map method, a novel flow-map approach that leverages Lagrangian particles to simultaneously transport impulse and guide grid adaptation, introducing a fully adaptive flow map-based fluid simulation framework. The core idea of our method is to maintain flow-map trajectories separately on grid nodes and particles: the grid-based representation tracks long-range flow maps at a coarse spatial resolution, while the particle-based representation tracks both long and short-range flow maps, enhanced by their gradients, at a fine resolution. This hybrid Eulerian-Lagrangian flow-map representation naturally enables adaptivity for both advection and projection steps. We implement this method in Cirrus, a GPU-based fluid simulation framework designed for octree-like adaptive grids enhanced with particle trackers. The efficacy of our system is demonstrated through numerical tests and various simulation examples, achieving up to 512x512x2048 effective resolution on an RTX 4090 GPU. We achieve a 1.5 to 2x speedup with our GPU optimization over the Particle Flow Map method on the same hardware, while the adaptive grid implementation offers efficiency gains of one to two orders of magnitude by reducing computational resource requirements.

## Method

<video width="100%" controls autoplay muted playsinline>
  <source src="./flamingo1.0-tile-particles.mp4" type="video/mp4">
  Flamingo with grid structure
</video>

We construct an octree-based adaptive grid on the GPU using 8×8×8 tiles as the fundamental building blocks. A particle system serves both as a medium for convective flow mapping and as an oracle to guide grid refinement, enabling fine resolution in regions with critical flow features.


## Video

<div style="position: relative; width: 100%; padding-bottom: 56.25%;">
  <iframe src="https://www.youtube.com/embed/cANbIa_m3mY"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
</div>


## Citation
```
@article{Wang2025Cirrus,
 title={Cirrus: Adaptive Hybrid Particle-Grid Flow Maps on GPU},
 author={Mengdi Wang and Fan Feng and Junlin Li and Bo Zhu},
 journal={ACM Trans. Graph.},
 volume={44},
 number={4},
 year={2025}
} 
```
