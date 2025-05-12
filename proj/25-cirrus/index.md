---
layout: default
---

# *Cirrus*: Adaptive Hybrid Particle-Grid Flow Maps on GPU


[**Mengdi Wang<sup>1</sup>** ](https://wang-mengdi.github.io/), [Fan Feng<sup>2</sup>](https://sking8.github.io/), Junlin Li<sup>1</sup>, [Bo Zhu<sup>1</sup>](https://www.cs.dartmouth.edu/~bozhu/)  
<sup>1</sup>Georgia Institute of Technology
<sup>2</sup>Dartmouth College

## Paper
<img src="./representative-image.jpg" align="left" width="30%" style="margin: 0% 5% 2.5% 0%">
**Cirrus: Adaptive Hybrid Particle-Grid Flow Maps on GPU**  
ACM Transactions on Graphics (Proceedings of SIGGRAPH 2025)
[**Mengdi Wang**](https://wang-mengdi.github.io/), [Fan Feng](https://sking8.github.io/), Junlin Li, [Bo Zhu](https://faculty.cc.gatech.edu/~bozhu/)
<br />
**[[preprint](cirrus-preprint.pdf)]**  **[[webpage](.)]**
<br />
<br />

## Abstract

We propose the adaptive hybrid particle-grid flow map method, a novel flow-map approach that leverages Lagrangian particles to simultaneously transport impulse and guide grid adaptation, introducing a fully adaptive flow map-based fluid simulation framework. The core idea of our method is to maintain flow-map trajectories separately on grid nodes and particles: the grid-based representation tracks long-range flow maps at a coarse spatial resolution, while the particle-based representation tracks both long and short-range flow maps, enhanced by their gradients, at a fine resolution. This hybrid Eulerian-Lagrangian flow-map representation naturally enables adaptivity for both advection and projection steps. We implement this method in Cirrus, a GPU-based fluid simulation framework designed for octree-like adaptive grids enhanced with particle trackers. The efficacy of our system is demonstrated through numerical tests and various simulation examples, achieving up to 512x512x2048 effective resolution on an RTX 4090 GPU. We achieve a 1.5 to 2x speedup with our GPU optimization over the Particle Flow Map method on the same hardware, while the adaptive grid implementation offers efficiency gains of one to two orders of magnitude by reducing computational resource requirements.

## Video

## Results

<img src="./representative-image.jpg" align="left" width="100%" style="margin: 0% 5% 2.5% 0%">


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
