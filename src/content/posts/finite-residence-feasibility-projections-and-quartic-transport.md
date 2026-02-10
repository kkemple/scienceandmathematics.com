---
title: 'Finite Residence, Feasibility Projections, & Quartic Transport'
description: "A state-dependent feasibility projection annihilates the first-order shear operator, forcing hydrodynamic relaxation from k² to k⁴. Finite residence of balanced Navier–Stokes states is the dynamical realization."
pubDate: '2026-02-09'
draft: true
zenodoDepositionId: 18576053
zenodoUrl: "https://zenodo.org/records/18576053"
doi: "10.5281/zenodo.18576053"
zenodoDescription: |
  When a state-dependent feasibility projection acts on the constitutive stress tensor and places the first-order shear operator in its nullspace, the k² diffusive pole is structurally forbidden — not parametrically suppressed. The leading admissible relaxation shifts to k⁴ via a Burnett-type operator, with k³ excluded by stress tensor symmetry σ_ij = σ_ji. The selection rule Π_x[σ_ij] = 0 is an operator-level statement whose dynamical realization is the finite residence of balanced Navier–Stokes states: DNS shows these configurations are crossed but not occupied, with escape occurring preferentially through loss of recursive coherence rather than collapse of stretching. The mechanism unifies independent k⁴ observations across non-relativistic Lifshitz holography (where bulk couplings cancel k² contributions), fracton and dipole-conserving fluids (where enhanced symmetry constraints forbid first-order kinetics), and photonic quasicrystal spectral reorganization under irrational projection methods. The framework situates quartic transport within constraint geometry as a transport-sector instantiation of the curl-maintenance floor established in the self-correction framework.
keywords:
  - "hydrodynamics"
  - "transport"
  - "shear diffusion"
  - "subdiffusion"
  - "feasibility projection"
  - "constraint geometry"
  - "finite residence"
  - "Navier-Stokes"
  - "dispersion relation"
  - "Burnett"
  - "operator nullspace"
  - "quartic transport"
  - "Lifshitz holography"
  - "fracton hydrodynamics"
  - "dipole conservation"
---

Subdiffusive shear modes — relaxation scaling as $k^4$ rather than the standard $k^2$ — appear in systems with no disorder, no exotic symmetries, and no fine-tuning. The phenomenon arises independently in non-relativistic holographic field theories dual to Lifshitz spacetimes[^3], in dipole-conserving and fracton fluids where enhanced symmetry constraints suppress first-order kinetics[^4][^5], and in fully classical Navier–Stokes turbulence where the [finite-residence observation](/navier-stokes-vorticity-growth-and-finite-residence-of-balanced-states) shows balanced configurations are crossed but not occupied. The diversity of settings suggests a structural origin: the configurations that would support standard diffusive transport cannot persist dynamically. This paper makes the mechanism precise. When a state-dependent feasibility projection acts on the constitutive stress tensor and annihilates the first-order shear operator, the $k^2$ pole is removed from the hydrodynamic spectrum. The leading admissible relaxation is then quartic, arising from the next operator in the gradient expansion that survives the projection. The result is a selection rule — the first-order transport operator is structurally forbidden, not parametrically suppressed — and finite residence of balanced states is its dynamical signature.

## The Shear Channel and Standard Diffusion

Take a translationally invariant theory with conserved momentum density $\pi_i \equiv T^{0i}$. Conservation gives

$$
\partial_t \pi_i + \partial_j T_{ij} = 0.
$$

Linearize around equilibrium and isolate the transverse (shear) channel: choose $k$ along $x$ and track $i = y$. The transverse component $\pi_y$ decouples from compression, and

$$
\partial_t \pi_y + ik\, T_{xy} = 0.
$$

Everything reduces to the constitutive content of $T_{xy}$.

In standard first-order hydrodynamics[^1], the leading dissipative correction to the stress tensor is the Navier–Stokes piece,

$$
\Pi^{(1)}_{ij} = -\eta\,\sigma_{ij} - \zeta\,\delta_{ij}\,\nabla\!\cdot v, \qquad \sigma_{ij} = \partial_i v_j + \partial_j v_i - \tfrac{2}{d}\delta_{ij}\partial_k v_k,
$$

where $\eta$ is the shear viscosity and $\sigma_{ij}$ the traceless strain rate. In the transverse channel, $\partial_k v_k = 0$ and $\sigma_{xy} = \partial_x v_y$. Using the momentum susceptibility $\chi_\pi$ (relating $\pi_y = \chi_\pi v_y$), the first-order stress contribution is

$$
T_{xy}^{(1)} = -\eta\,\partial_x v_y = -\frac{\eta}{\chi_\pi}\,\partial_x \pi_y.
$$

Substituting into the conservation equation:

$$
\partial_t \pi_y = -ik\left(-\frac{\eta}{\chi_\pi}(ik)\pi_y\right) = -\frac{\eta}{\chi_\pi}\,k^2\,\pi_y,
$$

giving the standard diffusive dispersion,

$$
\omega = -i\,D\,k^2, \qquad D = \frac{\eta}{\chi_\pi}.
$$

This is the $k^2$ shear pole that appears universally in first-order hydrodynamics. Its existence depends on a single structural assumption: that the first-order shear operator $\sigma_{ij}$ contributes to the implemented stress.

## Constitutive Feasibility and the Projection Framework

The standard derivation assumes that the gradient-driven constitutive proposal is what the system actually implements. In systems with state-dependent constraints, this need not hold. Define the implemented stress as

$$
T_{ij} = \Pi_x\!\left[T^{(0)}_{ij}\right],
$$

where $T^{(0)}_{ij}$ is the nominal constitutive proposal (the gradient-driven response) and $\Pi_x$ is a state-dependent feasibility projection. The subscript $x$ indicates that admissible stress configurations depend on the local state — a structure that arises naturally when constraints are themselves functions of the dynamical variables, as established in the [triadic tension framework](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry).

The projection defect $\delta T_{ij} \equiv T_{ij} - T^{(0)}_{ij}$ measures how far the implemented dynamics depart from the proposed ones. When $\Pi_x$ is non-integrable — when its composition along different paths yields path-dependent results — the implemented object cannot be represented as coming from a global scalar potential. This is the same structural pattern that produces irreducible curl in the [self-correction framework](/the-geometry-of-self-correction): constraints that depend on where you are in configuration space induce corrections that cannot be undone by retracing.

The critical distinction is between suppressing a coefficient and forbidding an operator. Standard renormalization modifies $\eta$ — the viscosity changes, but the shear operator $\sigma_{ij}$ still contributes to transport. A feasibility projection can do something stronger: place the entire first-order operator in its nullspace, so that $\sigma_{ij}$ is not merely weakened but structurally inadmissible in the implemented dynamics.

## The Selection Rule

Assume the constraint architecture enforces that the first-order shear tensor is infeasible in the transverse sector near equilibrium:

$$
\Pi_x\!\left[\sigma_{ij}\right] = 0.
$$

This is the constitutive analog of "the feasibility map turns a gradient proposal into a non-integrable implemented field." The usual Navier–Stokes operator lies in the nullspace of the projection — not suppressed, but forbidden.

The implemented first-order stress vanishes:

$$
T_{xy}^{(1)} = -\eta\,\Pi_x[\sigma_{xy}] = 0,
$$

and with it the $k^2$ contribution to the dispersion relation.

What survives is the next admissible operator in the gradient expansion consistent with feasibility. In the transverse channel, rotational invariance constrains the allowed structures: the stress tensor is symmetric and traceless, and the transverse projection eliminates longitudinal terms. The next rotationally invariant operator contributing to $T_{xy}$ is second order in gradients on $\sigma$ — a Burnett-type term[^2],

$$
\Pi^{(2)}_{xy} = -\eta_4\,\partial_x^2\,\sigma_{xy}.
$$

In the transverse channel, $\sigma_{xy} = \partial_x v_y$, so

$$
\Pi^{(2)}_{xy} = -\eta_4\,\partial_x^3 v_y = -\frac{\eta_4}{\chi_\pi}\,\partial_x^3\,\pi_y.
$$

Substituting back into conservation:

$$
\partial_t \pi_y = -ik\left(-\frac{\eta_4}{\chi_\pi}(ik)^3\,\pi_y\right) = -\frac{\eta_4}{\chi_\pi}\,k^4\,\pi_y,
$$

yielding the quartic dispersion,

$$
\omega = -i\,D_4\,k^4, \qquad D_4 = \frac{\eta_4}{\chi_\pi}.
$$

The result requires three conditions in the transverse sector: (1) momentum is conserved, (2) $\Pi_x[\sigma_{xy}] = 0$ (first-order shear operator is infeasible), and (3) $\Pi_x[\partial_x^2\,\sigma_{xy}] \neq 0$ (the next operator survives). Under these conditions, the leading hydrodynamic relaxation must be quartic.

The shift is by two derivative orders because rotational invariance of the stress tensor restricts the allowed structures: odd-order terms in the transverse shear gradient expansion vanish by the symmetry $\sigma_{ij} = \sigma_{ji}$, so the tower of admissible operators steps as $k^2, k^4, k^6, \ldots$ rather than $k^2, k^3, k^4, \ldots$.

## Finite Residence as the Dynamical Realization

The selection rule $\Pi_x[\sigma_{ij}] = 0$ is an operator statement. The [finite-residence observation](/navier-stokes-vorticity-growth-and-finite-residence-of-balanced-states) is the dynamical evidence that this condition holds in Navier–Stokes turbulence.

In ordinary hydrodynamics, the Navier–Stokes shear term $\Pi^{(1)}_{ij} = -\eta\,\sigma_{ij}$ is exactly the local, integrable transport operator that produces $k^2$ diffusion. It assumes stretching and dissipation are locally matched, multiscale recursion remains coherent, and the stress response is representable as a gradient-driven constitutive law. In the DNS language of the finite-residence paper, this corresponds to regions where the stretching–dissipation ratio $R_\Omega$ and the recursion coherence $L_\Omega$ are comparable — precisely the balanced states studied there.

The empirical result is not that balanced states do not occur, but that they cannot persist. Trajectories pass through $R_\Omega \approx L_\Omega$ but escape within 1–2 timesteps, and escape occurs preferentially by loss of recursive coherence (drop in $L_\Omega$) rather than collapse of stretching ($R_\Omega$). This asymmetry is structurally significant: stretching remains dynamically allowed, but the recursive coherence needed to close a first-order constitutive law is not. The shear gradient exists, but shear transport is not realizable through the first-order channel.

The correspondence between the DNS observations and the operator framework is direct. Balanced states crossed but not occupied means the first-order shear operator has no dynamically persistent invariant manifold — no set of states on which integrable first-order response is sustained. The absence of a coercive functional trapping trajectories near balance means no local Lyapunov potential exists for $k^2$ transport. And escape preferentially through loss of recursion, not stretching, means that higher-order derivative terms — which do not rely on coherent multiscale recursion — dominate the implemented dynamics.

A clarification on the logical status of this correspondence: the DNS motivates the hypothesis $\Pi_x[\sigma_{ij}] = 0$ by providing empirical evidence that the configurations supporting first-order transport are dynamically infeasible. The derivation of quartic dispersion from that hypothesis is the operator-level proof. The DNS does not prove the nullspace condition directly; it identifies the dynamical mechanism (finite residence of balanced states) whose constitutive consequence is the nullspace condition.

## Connection to Constraint Geometry

The selection rule $\Pi_x[\sigma_{ij}] = 0$ is a sectorized version of the same obstruction that appears throughout the constraint geometry framework.

The [triadic tension analysis](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) establishes that incompatible curvature sectors produce state-dependent constraints, and state-dependent constraints produce non-integrable feasibility projections. Applied to the stress sector: the system proposes a lowest-order "downhill" correction (Navier–Stokes shear), and the constraint geometry encodes that this operator is infeasible in the transverse channel. The system cannot realize the usual integrable relaxation, and the leading admissible channel must route through a higher-order operator.

The [self-correction framework](/the-geometry-of-self-correction) proves (Theorem 4) that when a gradient proposal passes through a non-integrable feasibility map, the curl-maintenance functional is bounded below by the spectral gap of the Hodge Laplacian times the projection defect. The shear selection rule is a transport-sector instantiation of this floor: the first-order gradient operator lies in the nullspace of the projection, producing irreducible curl in the correction field and forcing the dynamics through a non-integrable channel. The quartic dispersion is the spectral footprint of this obstruction. Spectral reorganization under non-integrable projections is observed independently in exact solutions for one-dimensional photonic quasicrystals, where embedding via an irrational projection method produces band fragmentation, gap-edge localization, and linear spectral dominance laws[^6] — the same class of embedding-and-projecting operations that define $\Pi_x$, operating on an operator spectrum rather than a transport channel.

The [helicity stiffness data](/preserved-curl-scale-separation-and-topological-leakage) provide a complementary view from field theory. The stiffness ratio $\tau_H/\tau_U \approx 0.97X + 0.03$ shows that topological content outlives amplitude by a factor proportional to scale separation — the same asymmetry that appears here, where the first-order (amplitude-like) operator is annihilated while higher-order (topology-dependent) operators survive. The [phase boundary](/preserved-curl-scale-separation-and-topological-leakage) $\gamma_{\mathrm{crit}} \sim X^{0.84}$ maps the conditions under which topological protection fails, paralleling the conditions under which the nullspace condition could break.

The [compressor instantiation](/compressors-curl-and-constraint-geometry) exhibits the same selection from the engineering side: rotating stall cells persist because the topological content of the circulation pattern is stiffer than the amplitude, and clearing them requires architectural intervention rather than parametric adjustment — the system cannot access the first-order correction channel.

The independent emergence of $k^4$ shear across multiple settings admits a unified reading through the feasibility projection mechanism. In Lifshitz holography[^3], the Lifshitz scaling exponent and bulk couplings cause the $k^2$ contributions from the two coupled perturbation channels (metric and gauge/momentum) to cancel in the matched asymptotic expansion, leaving quartic dispersion as the leading survivor — a cancellation that the selection rule identifies as structural rather than algebraic. In dipole-conserving fluids[^4][^5], the conservation of dipole moment imposes kinematic constraints that forbid the first-order transport operator at the level of symmetry, producing subdiffusive shear as the generic outcome — precisely the operator-nullspace mechanism formalized here. In each case, some constraint (Lifshitz scaling, dipole conservation, feasibility projection) removes the first-order shear operator from the implemented dynamics, and the leading admissible channel shifts to $k^4$. The feasibility projection framework provides the operator-level account of why this shift occurs: the constraint architecture places $\sigma_{ij}$ in the nullspace of the implementation map, regardless of the specific physical mechanism that enforces the constraint.

## Attack Surface

The derivation of quartic dispersion from the nullspace condition $\Pi_x[\sigma_{ij}] = 0$ is an operator-level result that does not depend on Navier–Stokes specifically. The interpretive step — identifying finite residence of balanced DNS states with the nullspace condition — is where the argument is most exposed.

The finite-residence observation is empirical, at a single Reynolds number ($Re_\lambda \approx 430$). If balanced states become persistent at higher Reynolds numbers, the dynamical motivation for the nullspace condition weakens. The [attack surface of the finite-residence paper](/navier-stokes-vorticity-growth-and-finite-residence-of-balanced-states) discusses this in detail: Reynolds number dependence, definition sensitivity of $L_\Omega$, and subdomain size effects are all testable failure modes.

The mapping from "balanced states are transient" to "$\Pi_x[\sigma_{ij}] = 0$" involves an interpretive identification: balanced Navier–Stokes configurations are treated as the dynamical states that would support integrable first-order shear transport. This identification is natural but not proven from first principles within Navier–Stokes. An independent derivation showing that the NS nonlinearity forces the first-order shear operator into the nullspace of the self-consistent stress — without passing through the finite-residence observation — would close this gap deductively.

The Burnett-type operator $\partial_x^2\,\sigma_{xy}$ is identified as the leading survivor by rotational invariance and stress-tensor symmetry. In systems where additional symmetries or constraints are present, further operators could also be annihilated, pushing the leading dispersion to $k^6$ or higher. The quartic result is the generic case under the stated assumptions; it is not the unique possibility.

The framework applies to systems where stress transport is mediated by a constitutive law subject to feasibility constraints. Systems with fundamentally different transport mechanisms — ballistic, anomalous, or driven — fall outside its scope.

[^1]: Landau, L. D., & Lifshitz, E. M. (1987). *Fluid Mechanics* (2nd ed.). Pergamon Press.

[^2]: Burnett, D. (1936). "The distribution of molecular velocities and the mean motion in a non-uniform gas." *Proceedings of the London Mathematical Society*, s2-40(1), 382–435. <https://doi.org/10.1112/plms/s2-40.1.382>

[^3]: Liu, Y., & Wu, X.-M. (2026). "Shear subdiffusion in non-relativistic holography." arXiv:2602.01971. <https://arxiv.org/abs/2602.01971>

[^4]: Gromov, A., Lucas, A., & Nandkishore, R. M. (2020). "Fracton hydrodynamics." *Physical Review Research*, 2, 033124. <https://doi.org/10.1103/PhysRevResearch.2.033124>

[^5]: Głódkowski, A., Peña-Benítez, F., & Surówka, P. (2023). "Hydrodynamics of dipole-conserving fluids." *Physical Review E*, 107, 034142. <https://doi.org/10.1103/PhysRevE.107.034142>

[^6]: Quan, H., Si, W., & Jiang, K. (2026). "Spectral Distribution of one-dimensional Photonic Quasicrystals: The Role of Irrational Numbers." arXiv:2601.06482. <https://arxiv.org/abs/2601.06482>
