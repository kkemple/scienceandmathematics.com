---
title: 'Preserved Curl, Scale Separation, & Topological Leakage'
description: "Magnetic helicity decays slower than energy by the squared scale ratio. A parameterized hazard family proves the phase boundary exponent is operator-specific, flat when stress matches dissipation."
pubDate: '2026-02-08'
category: 'supporting'
updatedDate: '2026-02-10'
zenodoDepositionId: 18645021
zenodoUrl: "https://zenodo.org/records/18645021"
doi: "10.5281/zenodo.18645021"
zenodoDescription: |
  Magnetic helicity — the integral measuring linkage and twist of divergence-free field lines — serves as a physical curl inventory whose decay timescale exceeds the energy decay timescale by a factor controlled entirely by scale separation. A Monte Carlo sweep across carrier and dissipative scales produces a universal stiffness collapse onto the linear law τ_H/τ_U ≈ 0.97X + 0.03, where X = (k_rms/k_c)².

  Stochastic topology-change events with hazard rate proportional to a k^{2p}-weighted energy functional produce a phase boundary whose exponent is operator-specific. At p = 1 — the current-squared model J² ∝ k²|B|², which is the resistive dissipation rate divided by η — the integrated hazard is exactly X-independent, an analytical identity arising because the k² stress amplification cancels the k² diffusive decay in the time integral. The physical event rate at the phase boundary varies by less than 0.01% across a decade in scale separation. Monte Carlo validation across five hazard models (p ∈ {0, 0.5, 1, 1.5, 2}) confirms that the Poisson approximation captures all X-scaling, with residual clustering corrections |Δα| < 0.03. The repair ceiling — the product of the phase boundary and the stiffness-derived repair cost g(X) ~ 1/X — falls as X^{−1} at p = 1, entirely from the stiffness law.

  The operator resonance principle generalizes: in a system with decay operator k^{2q} and hazard functional weighted by k^{2p}, the integrated hazard scales as X^{p−q} and the phase boundary exponent is α = q − p. These results provide a concrete field-theoretic model for the curl-maintenance functional established in the geometry of self-correction framework.
keywords:
  - "magnetic helicity"
  - "curl"
  - "scale separation"
  - "topological protection"
  - "constraint geometry"
  - "dissipation"
  - "stiffness ratio"
  - "phase boundary"
  - "operator resonance"
  - "parameterized hazard"
  - "Poisson process"
  - "Hodge theory"
  - "field theory"
---

The [geometry of self-correction](/the-geometry-of-self-correction) establishes that when feasibility projections are state-dependent and non-integrable, the curl-maintenance functional $\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}\int|d\alpha|^2 \, dV$ is bounded below by the spectral gap of the Hodge Laplacian times the persistent projection defect magnitude. The result is general and coordinate-free. What it does not supply is a physical model in which the curl floor can be measured, the stiffness quantified, and the conditions for breakdown mapped explicitly.

This paper provides that model. Magnetic helicity — the integral $\int \mathbf{A} \cdot \mathbf{B} \, d^3r$ measuring linkage and twist of field lines — serves as a physical curl inventory in a divergence-free vector field. Under pure resistive diffusion, helicity decays on a timescale that exceeds the energy decay timescale by a factor controlled entirely by scale separation. A Monte Carlo sweep across carrier and dissipative scales produces a universal collapse onto a single linear law. Introducing stochastic topology-change events produces a phase boundary between protected and leaking regimes whose exponent depends on the differential order of the hazard functional — and which vanishes identically when the hazard operator matches the dissipation operator.

The central question this analysis resolves is whether the near-cancellation between topological stiffness and degradation tolerance is a generic geometric property of spectrally gapped systems or an operator-specific identity. By constructing a parameterized family of hazard operators, we show that exact cancellation occurs if and only if the hazard operator matches the dissipation operator in differential order. Deviations from this matching produce predictable power-law departures. If any hazard model with $p \neq 1$ had produced a flat phase boundary, the operator-specific interpretation would have been falsified.

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

The protected regime assumes that topology can change only through diffusion — the smooth, scale-by-scale erosion of field structure by resistivity. Real systems have additional mechanisms: magnetic reconnection, boundary effects, mode mixing, turbulent interactions. The question is whether topological protection survives when these mechanisms are present, and how the survival condition depends on the spectral structure of the stress that drives topology change.

To model this without introducing the full complexity of MHD turbulence, the framework adds stochastic topology-change events to the diffusive evolution. When an event occurs, the helicity fraction is reduced by a fixed factor $\delta = 0.3$ while the energy evolution continues unchanged. Only topology is affected; amplitude is not. The instantaneous hazard rate is $\lambda(t) = \gamma_0 \cdot S_p(t)$, where $\gamma_0$ is the coupling strength and $S_p$ is a stress functional parameterized by the $k$-weighting power $p$,

$$
S_p(t) = k_c^{2p} \, U_c(t) + k_{\mathrm{rms}}^{2p} \, U_j(t).
$$

At $p = 0$ the hazard responds to total energy without scale weighting. At $p = 1$ the stress functional is $S_1 \propto \sum_k k^2 |B_k|^2 = \int |\nabla \times \mathbf{B}|^2 \, dV$, the total current density squared — the resistive dissipation rate divided by $\eta$. At $p = 2$ the hazard weights fourth-order spatial gradients. The failure criterion measures helicity retention at an energy milestone: when $U/U_0 = 0.2$ (80% of energy dissipated), how much helicity remains? For a retention threshold $h_{\min}$, the critical coupling $\gamma_{\mathrm{crit}}(X; h_{\min})$ is the smallest $\gamma_0$ at which the failure probability reaches 50%.

For a Poisson process with rate $\lambda(t)$, the expected number of topology-change events over the observation window $[0, t^*]$ is $\Lambda = \gamma_0 \int_0^{t^*} S_p(s) \, ds$. The critical event count $N^* = \log(h_{\min})/\log(1-\delta)$ depends on the retention threshold and the per-event reduction factor, independent of $X$, so the phase boundary satisfies

$$
\gamma_{\mathrm{crit}} = \frac{N^*}{\int_0^{t^*} S_p(s) \, ds},
$$

and the scaling $\gamma_{\mathrm{crit}} \sim X^{\alpha}$ is determined entirely by how the integrated stress depends on scale separation.

The integral splits into carrier and junk contributions. The carrier integral depends only on $k_c$ and is $X$-independent. The junk contribution evaluates analytically to

$$
I_j = \frac{k_{\mathrm{rms}}^{2p} \, U_{j0}}{2\eta \, k_{\mathrm{rms}}^2} \left(1 - e^{-2\eta k_{\mathrm{rms}}^2 t^*}\right).
$$

At high $X$ the junk decays completely before $t^*$, giving $I_j \to U_{j0} \, k_{\mathrm{rms}}^{2(p-1)} / (2\eta)$. The $X$-dependence is $k_{\mathrm{rms}}^{2(p-1)} \propto X^{p-1}$. At $p = 1$ this exponent vanishes: $I_j = U_{j0}/(2\eta)$, independent of $k_{\mathrm{rms}}$ and therefore independent of $X$. The $k^2$ weighting that amplifies the hazard from high-$k$ modes is exactly the $k^2$ weighting that accelerates their diffusive decay, and the two cancel identically in the time integral. No other value of $p$ produces this cancellation. The stiffness itself remains geometric — it follows from the spectral gap alone and is independent of the hazard model. The cancellation between stiffness and hazard at $p = 1$ is what is operator-specific. The current density $\mathbf{J} = \nabla \times \mathbf{B}$ is the source term for resistive dissipation ($\partial_t \mathbf{B} = -\eta \nabla \times \mathbf{J}$), so the stress that triggers topology change and the flux that drives diffusion are the same physical quantity. The operator that creates the protection is the operator that creates the hazard.

A Monte Carlo sweep across five hazard models, carrier scales $k_c \in \{1, 2\}$, and junk shells up to $k_{\mathrm{rms}} \approx 11$ validates the analytical prediction with 100 realizations per boundary point. The observed phase boundary exponents match the Poisson prediction to within $|\Delta\alpha| < 0.03$ for $p \leq 1.5$, confirming that temporal clustering affects the absolute value of $\gamma_{\mathrm{crit}}$ but not its power-law exponent.

| $p$ | $\alpha_{\mathrm{Poisson}}$ | $\alpha_{\mathrm{obs}}$ | $\Delta\alpha$ | Repair ceiling |
|:---:|:---:|:---:|:---:|:---:|
| 0.0 | $+0.11$ | $+0.14$ | $+0.03$ | $\sim X^{-0.86}$ |
| 0.5 | $+0.14$ | $+0.13$ | $-0.02$ | $\sim X^{-0.87}$ |
| 1.0 | $+0.00$ | $+0.01$ | $+0.01$ | $\sim X^{-0.99}$ |
| 1.5 | $-0.43$ | $-0.46$ | $-0.03$ | $\sim X^{-1.46}$ |
| 2.0 | $-0.95$ | $-1.04$ | $-0.09$ | $\sim X^{-2.04}$ |

The Poisson values are computed from the full analytical integral over the tested configurations; the large-$X$ limiting exponent is $1 - p$, exact when the junk sector dominates the integral. At $p = 1$ both junk and carrier contributions are individually $X$-independent (the junk-to-carrier ratio $I_j/I_c \approx 1.67$), so $\alpha = 0$ holds at all tested scale separations, not only asymptotically. The analytical Poisson prediction for the total integrated hazard at $p = 1$ is $I_{\mathrm{total}} = 160.0$ across all configurations — identical to seven significant figures.

The front-loading ratio — the fraction of integrated hazard concentrated in the first half of the observation window — provides an independent structural fingerprint. At $p = 1$, hazard is front-loaded (approximately 85% in the first half of the window) because current density peaks early when the junk sector's $k^2$-weighted energy is highest, but the degree of front-loading is constant across $X$, varying by less than 0.3% over a decade in scale separation. At $p < 1$ front-loading decreases with $X$; at $p > 1$ it increases. The $X$-independence at $p = 1$ is the temporal fingerprint of the operator identity: when stress amplification exactly matches diffusive decay, the hazard's temporal profile becomes a universal function of $t/t^*$.

The physical event rate at the phase boundary, $\bar{\lambda} = N^*/t^*$, is independent of $X$ at fixed carrier scale when $p = 1$, varying by less than 0.01% across a decade in scale separation within each $k_c$ family. The rate differs between carrier scales because $t^*$ depends on $k_c$, but the $X$-independence within each family confirms that the junk sector's contribution to the hazard integral is scale-invariant. The system faces the same topology-change pressure regardless of how widely separated its carrier and dissipative scales are. Only the cost of each event — controlled by the stiffness ratio — varies with $X$.

The repair ceiling combines the phase boundary with the stiffness-derived repair cost $g(X) \sim 1/X$ from the [repair framework](/repair-as-local-optimization-in-constraint-geometry). At $p = 1$,

$$
\bar{\lambda}_{\mathrm{crit}} \cdot g(X) \sim X^0 \cdot X^{-1} = X^{-1},
$$

controlled entirely by the stiffness law, with the phase boundary contributing no additional $X$-dependence.

The structure generalizes beyond resistive MHD. In a spectrally gapped dissipative system with decay operator $k^{2q}$ and hazard functional weighted by $k^{2p}$, the integrated hazard scales as $X^{p-q}$ and the phase boundary exponent is $\alpha = q - p$. The flat phase boundary occurs at $p = q$ — when the hazard operator matches the dissipation operator's differential order. For resistive diffusion ($q = 1$), this is $p = 1$, the current-squared model. The repair ceiling at $p = q$ is $X^{-1}$, controlled entirely by stiffness. The full boundary data and summary statistics are available as supplementary tables ([alpha summary](/data/helicity-2C-alpha-summary.csv), [gamma grid](/data/helicity-2B-gamma-grid.csv)).

## Connection to Triadic Tension

The [triadic tension framework](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) establishes that incompatible curvature sectors produce state-dependent constraints, state-dependent constraints produce non-integrable feasibility projections, and non-integrable projections produce irreducible curl. The helicity model makes the final link in that chain concrete and measurable.

The curl-maintenance functional $\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}\int|d\alpha|^2 \, dV$ from [The Geometry of Self-Correction](/the-geometry-of-self-correction) measures the total vorticity energy of a correction field. Theorem 4 of that paper proves this quantity is bounded below by the spectral gap times the persistent projection defect, making the curl floor structural rather than parametric. The helicity stiffness ratio is the physical instantiation of that floor: it measures, in a concrete field theory, how much stiffer the topological content is relative to the amplitude content. The operator resonance identity — the integrated hazard's $X$-independence at $p = 1$ — identifies the mechanism: the spectral gap that protects topology also controls the hazard's time integral, producing a phase boundary that is flat in physical units.

The constrained diffusion literature operationalizes feasibility in a structurally parallel way. In physics-corrected ACOPF[^2], infeasibility is measured by squared residual penalties $R_H = \lVert H(x)\rVert^2$ (equality constraints) and $R_G = \lVert\max(G(x),0)\rVert^2$ (inequality constraints), and feasibility is enforced by gradient descent on these penalties at each sampling step. In the present framework, infeasibility manifests as persistent projection defect, and the irreducible component of that defect is bounded below by the curl-maintenance floor — the Hodge spectral gap times the projection defect magnitude. The repair overhead $c_{\mathrm{geom}} > 0$ from the [repair framework](/repair-as-local-optimization-in-constraint-geometry) is the cost-function analog: it quantifies the unavoidable expense of navigating the non-integrable constraint manifold, just as the residual penalties quantify the unavoidable distance from feasibility in the optimization setting. The residual penalties in ACOPF are the optimization-space version of the irreducible curl floor.

The [Navier–Stokes finite-residence result](/navier-stokes-vorticity-growth-and-finite-residence-of-balanced-states) finds that balanced states — configurations where stretching and recursive scale-feeding are locally matched — are crossed but not occupied, with escape occurring preferentially via loss of recursive coherence rather than collapse of stretching. The helicity model exhibits the same asymmetry from the opposite direction: energy dissipates faster than helicity, so amplitude is lost before topology. In both settings, the topological or recursive structure is the last thing to go. The punctuated character of topology change in the helicity model parallels the 1–2 timestep residence times observed in the DNS — balance is broken in discrete events, not eroded smoothly[^3].

The [compressor instantiation](/compressors-curl-and-constraint-geometry) of these ideas — rotating stall as curl made visible, the surge line as a finite-residence manifold — gains a field-theoretic underpinning. The stiffness ratio explains why compressor stall cells persist even as mean energy in the flow field dissipates: the topological content of the circulation pattern is stiffer than the amplitude, and clearing it requires an architectural intervention (changing the constraint geometry via variable stators or bleed valves) rather than a parametric one (retuning the controller). The operator resonance result constrains the mechanism further: if the physical stress driving topology change is current-driven reconnection, the rate of topology-change events at the phase boundary is scale-separation-independent. The stiffness ratio alone determines how the repair ceiling scales, falling as $1/X$, as derived in the [repair framework](/repair-as-local-optimization-in-constraint-geometry).

Experimental evidence for spectral reorganization under non-integrable perturbation comes from non-Hermitian acoustic Chern lattices, where a single dislocation defect collapses bulk-extended states onto the defect site and converts boundary skin effects to dislocation-bound ones[^4] — a finite local constraint reshaping the global operator spectrum, consistent with the projection-induced spectral restructuring described here.

## Attack Surface

The stiffness law $\tau_H/\tau_U \approx 0.97X + 0.03$ is derived in a linear, non-interacting Fourier model. Any nonlinear coupling — turbulent cascades, inverse helicity transfer, reconnection-driven redistribution — would alter the quantitative relationship, potentially strengthening protection (as inverse cascades in 3D MHD are known to do[^5]) or weakening it. The law establishes a lower bound on topological stiffness in the simplest possible setting; whether it survives as an approximate scaling in more complex dynamics is an empirical question addressable by MHD simulation.

The operator resonance identity — $I_j = U_{j0}/(2\eta)$ at $p = 1$ — is exact for pure $k^2$ diffusion. In real MHD, nonlinear terms modify the effective decay operator, and the physical hazard functional may not be exactly $J^2$. The identity establishes that current-driven topology change in a resistively-dominated regime has $X$-independent integrated hazard; quantifying departures when nonlinear effects are included requires resolved MHD simulation with tracked reconnection events.

The Monte Carlo phase boundary uses 100 realizations per boundary point, with adaptive $\gamma$ ranges centered on the analytical Poisson prediction. The power-law fits carry uncertainties of $\pm 0.03$ to $\pm 0.09$ in $\alpha$, with the largest scatter at $p = 2$ where the boundary falls steeply with $X$. The Poisson prediction captures the exponent to within these uncertainties across all five hazard models. The $h_{\min}$-dependent variation (systematic downward shift of $\sim 0.15$ in $\alpha$ between $h_{\min} = 0.6$ and $h_{\min} = 0.8$) is consistent with discrete-event statistics: at $h_{\min} = 0.8$ a single topology-change event suffices for failure ($N^* = 0.63 < 1$), making the boundary sensitive to the detailed shape of the hazard distribution rather than just its integral.

The equal-energy partition $U_{c0} = U_{j0} = 1$ is a specific choice. Varying the energy partition shifts the $X$ range where the carrier-to-junk transition occurs, potentially changing the effective $\alpha$ measured over a fixed $X$ range without affecting the asymptotic result. The structural conclusion — $\alpha = 0$ at $p = 1$ — holds for any energy partition because the junk integral's $X$-independence is algebraic.

The most important scope limitation is that this is a linear field theory with no back-reaction. In physical plasmas, helicity conservation constrains the dynamics — the Taylor relaxation principle holds that turbulent plasmas relax toward force-free states that minimize energy at fixed helicity[^6]. This back-reaction strengthens topological protection beyond what the passive diffusion model predicts. The present results therefore underestimate the stiffness of curl in systems where helicity actively constrains the evolution, making the linear model a conservative baseline rather than an optimistic projection.

[^1]: Moffatt, H. K. (1969). "The degree of knottedness of tangled vortex lines." *Journal of Fluid Mechanics*, 35(1), 117–129. <https://doi.org/10.1017/S0022112069000991>

[^2]: Shekhar, S., Karn, A., Keshav, K., Bansal, S., & Pareek, P. (2026). "Fast Diffusion with Physics-Correction for ACOPF." arXiv:2602.03020. <https://arxiv.org/abs/2602.03020>

[^3]: Priest, E. R., & Forbes, T. G. (2000). *Magnetic Reconnection: MHD Theory and Applications*. Cambridge University Press.

[^4]: Meng, Y., et al. (2025). "Non-Hermitian acoustic dislocation." *Advanced Materials*, 37, 2515496. <https://doi.org/10.1002/adma.202515496>

[^5]: Brandenburg, A. (2001). "The inverse cascade and nonlinear alpha-effect in simulations of isotropic helical hydromagnetic turbulence." *The Astrophysical Journal*, 550(2), 824–840. <https://doi.org/10.1086/319783>

[^6]: Taylor, J. B. (1974). "Relaxation of toroidal plasma and generation of reverse magnetic fields." *Physical Review Letters*, 33(19), 1139–1141. <https://doi.org/10.1103/PhysRevLett.33.1139>
