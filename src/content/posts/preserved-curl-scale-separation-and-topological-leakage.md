---
title: 'Preserved Curl, Scale Separation, & Topological Leakage'
description: "Magnetic helicity provides a physical curl inventory whose decay timescale exceeds energy's by a factor controlled entirely by scale separation — until topology-change events breach the protection boundary."
pubDate: '2026-02-08'
zenodoDepositionId: 18529502
zenodoUrl: "https://zenodo.org/records/18529502"
doi: "10.5281/zenodo.18529502"
zenodoDescription: |
  Magnetic helicity — the integral measuring linkage and twist of divergence-free field lines — serves as a physical curl inventory whose decay timescale exceeds the energy decay timescale by a factor controlled entirely by scale separation. A Monte Carlo sweep across carrier and dissipative scales produces a universal stiffness collapse onto the linear law τ_H/τ_U ≈ 0.97X + 0.03, where X = (k_rms/k_c)². Introducing stochastic topology-change events produces a phase boundary separating regimes where topological protection holds from regimes where it leaks. The results provide a concrete field-theoretic model for the curl-maintenance functional established in the geometry of self-correction framework.
keywords:
  - "magnetic helicity"
  - "curl"
  - "scale separation"
  - "topological protection"
  - "constraint geometry"
  - "dissipation"
  - "stiffness ratio"
  - "phase boundary"
  - "circulation"
  - "Hodge theory"
  - "field theory"
---

The [geometry of self-correction](/the-geometry-of-self-correction) establishes that when feasibility projections are state-dependent and non-integrable, the curl-maintenance functional $\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}\int|d\alpha|^2 \, dV$ is bounded below by the spectral gap of the Hodge Laplacian times the persistent projection defect magnitude. The result is general and coordinate-free. What it does not supply is a physical model in which the curl floor can be measured, the stiffness quantified, and the conditions for breakdown mapped explicitly.

This paper provides that model. Magnetic helicity — the integral $\int \mathbf{A} \cdot \mathbf{B} \, d^3r$ measuring linkage and twist of field lines — serves as a physical curl inventory in a divergence-free vector field. Under pure resistive diffusion, helicity decays on a timescale that exceeds the energy decay timescale by a factor controlled entirely by scale separation. A Monte Carlo sweep across carrier and dissipative scales produces a universal collapse onto a single linear law. Introducing stochastic topology-change events produces a genuine phase boundary between regimes where curl is protected and regimes where it leaks. The control parameters are minimal and explicit: scale separation and leakage strength.

## Helicity as Curl Inventory

Magnetic helicity is defined on a periodic domain as

$$
H = \int_V \mathbf{A} \cdot \mathbf{B} \, d^3r, \qquad \mathbf{B} = \nabla \times \mathbf{A},
$$

where $\mathbf{A}$ is the vector potential and $\mathbf{B}$ the magnetic field. The periodicity eliminates gauge ambiguity, making $H$ a well-defined global invariant of the field's topological content: the total linkage, twist, and writhe of field lines[^1].

Helicity encodes what amplitude alone cannot. Two magnetic field configurations with identical energy $U = \frac{1}{2}\int|\mathbf{B}|^2 \, d^3r$ may have completely different topological structure — one knotted and linked, the other smooth and unlinked. Energy measures how strong the field is; helicity measures how tangled it is. In the language of constraint geometry, energy is a fast variable and helicity is a slow one. The question is how much slower, and under what conditions the slowness fails.

## The Minimal Dissipative Model

The simplest dynamics that preserve the essential structure are pure resistive diffusion,

$$
\partial_t \mathbf{B} = \eta \nabla^2 \mathbf{B},
$$

with no velocity field, no forcing, and no nonlinear terms. In Fourier space, each mode evolves independently as $\mathbf{B}_{\mathbf{k}}(t) = \mathbf{B}_{\mathbf{k}}(0) e^{-\eta k^2 t}$, so dissipation is explicit and scale-dependent.

This model is deliberately austere. Any helicity persistence that appears cannot be attributed to nonlinear cascades, turbulent inverse transfers, or external driving. Whatever stiffness emerges is geometric — a consequence of the spectral structure of the initial condition and the $k^2$ weighting of diffusion.

The initial magnetic field decomposes into two sectors. A single maximally helical Fourier mode at wavenumber $k_c$ carries essentially all of the net helicity and defines the circulation scale. A collection of helicity-neutral modes in a shell $k \in [k_{\min}, k_{\max}]$ contributes energy but no net helicity, and dissipates rapidly because its characteristic wavenumber $k_{\mathrm{rms}}$ exceeds $k_c$. The total initial energy in the neutral sector is held fixed across all runs; only its scale is varied.

The analytic expectation follows directly. The helical carrier decays on a timescale $\tau_H = 1/(2\eta k_c^2)$, while the neutral energy decays on $\tau_U \sim 1/(2\eta k_{\mathrm{rms}}^2)$. Their ratio is therefore

$$
\frac{\tau_H}{\tau_U} \sim \left(\frac{k_{\mathrm{rms}}}{k_c}\right)^2.
$$

Circulation should outlast energy by a factor equal to the square of the scale separation.

## The Scale-Separation Law

A systematic Monte Carlo sweep tests this prediction across carrier scales $k_c = 1, 2, 3, 4, 5$ and junk shells $[3,4], [4,5], [5,6], [6,8], [8,10], [10,12]$, with 25 random seeds per configuration point to average over junk microstructure. The stiffness ratio $\mathcal{S} \equiv \tau_H / \tau_U$ is measured numerically from the exact Fourier evolution.

Defining $X = (k_{\mathrm{rms}}/k_c)^2$ as the dimensionless scale-separation parameter, all 150 data points collapse onto a single curve,

$$
\frac{\tau_H}{\tau_U} \approx 0.97X + 0.03,
$$

with small statistical scatter across the full range $X \in [0.5, 120]$.

![Stiffness ratio collapse. All carrier–shell combinations fall on a single linear law relating helicity stiffness to scale separation. Error bars show standard deviation across 25 Monte Carlo seeds per point.](/images/helicity/stiffness-collapse.png)

The collapse is the central quantitative result. Helicity behaves as a slow manifold, energy as a fast one, and the size of the resulting "organization window" — the period during which topological structure persists after most amplitude has dissipated — is controlled almost entirely by the ratio of characteristic scales. A system with $k_{\mathrm{rms}}/k_c = 10$ retains its curl inventory roughly 100 times longer than its energy inventory.

This realizes, in a concrete and measurable field theory, the abstract claim that irreducible curl persists under dissipation. The curl-maintenance functional from [Theorem 4](/the-geometry-of-self-correction) predicts a floor; the stiffness ratio quantifies its magnitude. The spectral gap that bounds the floor in the abstract theory becomes, in this model, the square of the scale-separation ratio.

## Topological Leakage and the Phase Boundary

The protected regime assumes that topology can change only through diffusion — the smooth, scale-by-scale erosion of field structure by resistivity. Real systems have additional mechanisms: magnetic reconnection, boundary effects, mode mixing, turbulent interactions. The question is whether topological protection survives when these mechanisms are present, and if so, up to what strength.

To model this without introducing the full complexity of MHD turbulence, the framework adds stochastic topology-change events to the diffusive evolution. A current-squared proxy $J^2(t) \propto k_c^2 U_c(t) + k_{\mathrm{rms}}^2 U_j(t)$ measures geometric stress in the field. An integrated-exposure hazard model with rate parameter $\gamma_0$ determines the probability of a topology-change event in each timestep. When an event occurs, the helicity fraction is reduced by a fixed factor while the energy evolution continues unchanged. Only topology is affected; amplitude is not.

The failure criterion measures helicity retention at an energy milestone: when $U/U_0 = 0.2$ (80% of energy dissipated), how much helicity remains? For a chosen retention threshold $h_{\min}$, the critical leakage strength $\gamma_{\mathrm{crit}}(X; h_{\min})$ is the smallest $\gamma_0$ at which the failure probability reaches 50%, estimated by bisection search over up to 220 Monte Carlo realizations per boundary point.

The resulting sweep across the same $(k_c, \text{shell})$ grid as the stiffness study reveals two regimes separated by a boundary that depends on both scale separation and retention strictness. Below $\gamma_{\mathrm{crit}}$, helicity remains largely intact even after most energy has dissipated — the topological content rides out the amplitude decay. Above $\gamma_{\mathrm{crit}}$, helicity is lost through punctuated drops well before the energy milestone. At weak scale separation ($X \lesssim 10$), the critical leakage strength is modest — roughly $\gamma_{\mathrm{crit}} \sim 0.2\text{–}0.5$ — meaning even moderate topology-change rates breach protection. At strong scale separation ($X \gtrsim 50$), the boundary rises, tolerating leakage strengths several times larger before helicity collapses. Stricter retention thresholds shift the boundary downward, as expected: demanding that 80% of helicity survive ($h_{\min} = 0.8$) is harder to achieve than demanding 60% ($h_{\min} = 0.6$). The full boundary data are available as [supplementary tables](/data/helicity-2B-phase-boundary.csv).

Three features of this result merit emphasis. Scale separation creates topological protection, quantified by the stiffness law derived in the previous section. Topology change, when it occurs, is punctuated rather than smooth — helicity drops in discrete events rather than eroding continuously, consistent with the reconnection phenomenology observed in both laboratory plasmas and astrophysical contexts[^2]. And protection is conditional: above the critical leakage strength, the circulation inventory collapses regardless of scale separation. Irreducible curl exists, but only within a bounded region of parameter space.

## Connection to Triadic Tension

The [triadic tension framework](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) establishes that incompatible curvature sectors produce state-dependent constraints, state-dependent constraints produce non-integrable feasibility projections, and non-integrable projections produce irreducible curl. The helicity model makes the final link in that chain concrete and measurable.

The curl-maintenance functional $\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}\int|d\alpha|^2 \, dV$ from [The Geometry of Self-Correction](/the-geometry-of-self-correction) measures the total vorticity energy of a correction field. Theorem 4 of that paper proves this quantity is bounded below by the spectral gap times the persistent projection defect, making the curl floor structural rather than parametric. The helicity stiffness ratio is the physical instantiation of that floor: it measures, in a concrete field theory, how much stiffer the topological (curl) content is relative to the amplitude (energy) content. The phase boundary $\gamma_{\mathrm{crit}}(X)$ maps the conditions under which Theorem 4's hypotheses — compact manifold, trivial first cohomology — are effectively violated by topology-change events that alter the field's global structure.

The [Navier–Stokes finite-residence result](/navier-stokes-vorticity-growth-and-finite-residence-of-balanced-states) finds that balanced states — configurations where stretching and recursive scale-feeding are locally matched — are crossed but not occupied, with escape occurring preferentially via loss of recursive coherence rather than collapse of stretching. The helicity model exhibits the same asymmetry from the opposite direction: energy dissipates faster than helicity, so amplitude is lost before topology. In both settings, the topological or recursive structure is the last thing to go. The punctuated character of topology change in the helicity model parallels the 1–2 timestep residence times observed in the DNS — balance is broken in discrete events, not eroded smoothly.

The [compressor instantiation](/compressors-curl-and-constraint-geometry) of these ideas — rotating stall as curl made visible, the surge line as a finite-residence manifold — gains a field-theoretic underpinning. The stiffness ratio explains why compressor stall cells persist even as mean energy in the flow field dissipates: the topological content of the circulation pattern is stiffer than the amplitude, and clearing it requires an architectural intervention (changing the constraint geometry via variable stators or bleed valves) rather than a parametric one (retuning the controller). The phase boundary explains why active surge control works in some regimes and fails in others: below $\gamma_{\mathrm{crit}}$, the constraint architecture is topologically protected; above it, the protection breaks and the system transitions to global cycling.

## Attack Surface

The stiffness law $\tau_H/\tau_U \approx 0.97X + 0.03$ is derived in a linear, non-interacting Fourier model. Any nonlinear coupling — turbulent cascades, inverse helicity transfer, reconnection-driven redistribution — would alter the quantitative relationship, potentially strengthening protection (as inverse cascades in 3D MHD are known to do[^3]) or weakening it (as reconnection events do). The law establishes a lower bound on topological stiffness in the simplest possible setting; whether it survives as an approximate scaling in more complex dynamics is an empirical question addressable by MHD simulation.

The topology-change model is a proxy, not a derivation. The integrated-exposure hazard with fixed fractional reduction $\delta = 0.3$ captures the phenomenology of punctuated reconnection but does not derive the reconnection rate from first principles. The phase boundary $\gamma_{\mathrm{crit}}(X)$ is therefore a structural prediction — topology-change strength versus scale separation determines protection — with the specific numerical values tied to the proxy model's parameters. Different reconnection models would shift the boundary quantitatively while preserving the qualitative structure.

The Monte Carlo phase boundary exhibits scatter that reflects both the stochastic nature of the topology-change events and the finite resolution of the bisection search ($\gamma_0$ values are quantized). The trends are robust across all three retention thresholds, but individual boundary points should be read as estimates within a factor of roughly two rather than precise critical values.

The most important scope limitation is that this is a linear field theory with no back-reaction. In physical plasmas, helicity conservation constrains the dynamics — the Taylor relaxation principle holds that turbulent plasmas relax toward force-free states that minimize energy at fixed helicity[^4]. This back-reaction strengthens topological protection beyond what the passive diffusion model predicts. The present results therefore underestimate the stiffness of curl in systems where helicity actively constrains the evolution, making the linear model a conservative baseline rather than an optimistic projection.

[^1]: Moffatt, H. K. (1969). "The degree of knottedness of tangled vortex lines." *Journal of Fluid Mechanics*, 35(1), 117–129. <https://doi.org/10.1017/S0022112069000991>

[^2]: Priest, E. R., & Forbes, T. G. (2000). *Magnetic Reconnection: MHD Theory and Applications*. Cambridge University Press.

[^3]: Brandenburg, A. (2001). "The inverse cascade and nonlinear alpha-effect in simulations of isotropic helical hydromagnetic turbulence." *The Astrophysical Journal*, 550(2), 824–840. <https://doi.org/10.1086/319783>

[^4]: Taylor, J. B. (1974). "Relaxation of toroidal plasma and generation of reverse magnetic fields." *Physical Review Letters*, 33(19), 1139–1141. <https://doi.org/10.1103/PhysRevLett.33.1139>
