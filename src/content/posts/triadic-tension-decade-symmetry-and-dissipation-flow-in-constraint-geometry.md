---
title: 'Triadic Tension, Decade Symmetry, & Dissipation Flow in Constraint Geometry'
description: "Three incompatible curvature sectors compete under one constraint functional, forcing ground-state curvature I = 4πφ², C₁₀ decade symmetry, and a dissipation β-function with zero free parameters."
pubDate: '2025-11-28'
zenodoDepositionId: 18571151
zenodoUrl: "https://zenodo.org/records/18571151"
doi: "10.5281/zenodo.18571151"
updatedDate: '2026-02-06'
keywords:
  - "constraint geometry"
  - "triadic tension"
  - "curvature frustration"
  - "golden ratio"
  - "renormalization group"
  - "beta function"
  - "dissipation"
  - "decade symmetry"
  - "Penrose tiling"
  - "quasicrystal"
  - "white dwarf"
  - "black holes"
  - "Fisher information"
  - "Hodge theory"
  - "dimensional reduction"
zenodoDescription: |
  Three curvature sectors — angular closure (π-sector), recursive self-similarity (φ-sector), and discrete resonance (N-sector) — compete under a single constraint functional on entropy-constrained probability densities. No configuration can simultaneously minimize all three.

  The triadic tension theorem proves this rigorously. Pairwise incompatibility of sector minimizers (T1), strictly negative off-diagonal covariances via cross-susceptibility (T2), strict positive definiteness of the covariance matrix (T3), and nonzero ground-state curvature (T4) follow in logical sequence. The ground state on the Penrose eigenbranch carries composite invariant I = 4πφ² ≈ 32.9.

  A negative selection argument forces the discrete sector to carry C₁₀ = C₂ × C₅ symmetry. The crystallographic restriction eliminates periodic groups, φ-compatibility eliminates all remaining quasicrystal families, and binary closure demands the C₂ factor. C₁₀ is the unique survivor. All three sector constants are now geometrically determined.

  The dissipation β-function β(η,d) = -η(1-η)[ρ* + (d-2)ln(φ)/2], with ρ* = 4πφ²/10 ≈ 3.29, is derived through standard Wilsonian renormalization, with higher-order contributions forbidden by a vertex selection rule enforced by the exact recursion symmetry of the constraint functional. The universal critical exponent ν = 1/ρ* ≈ 0.304 governs coherence-length divergence at organizational phase transitions.

  Quantitative evidence: white dwarf cooling anomalies at R/R_S = 10³ matching the structural saturation threshold (7,515 Gaia DR3 objects, 14.5σ), Type Ia supernova energies matching Landauer bit-counting predictions (4.3 × 10⁴⁴ J), Penrose polariton quasicrystals realizing all three sectors in a single device, and black hole spin population fractions from GWTC catalogs matching predictions derived from ρ* (164 BBH mergers, deviation 0.1σ).
---

Every organized system must maintain structure against entropy. Whether the system is a quantum lattice, a star, or a quasicrystal, maintaining coherence requires continuous corrective work, and that work has a cost. Curvature in an information distribution — angular bending, scale-wide bending, discrete frustration — measures this cost. Complexity is curvature. Coherence is what a system can afford to maintain.

This monograph develops a constraint geometry in which three curvature sectors compete under a single variational functional. Their mutual incompatibility — triadic tension — forces nonzero ground-state curvature. Negative selection forces decade symmetry. The resulting dissipation flow has zero free parameters.

## 1. Introduction

The constraint functional $F[P]$ encodes three orthogonal curvature costs on a normalized information density $P$. The angular sector ($\pi$-sector) penalizes departures from rotational invariance. The recursive sector ($\varphi$-sector) penalizes departures from scale self-similarity. The discrete sector ($N$-sector) penalizes configurations incompatible with a specific cyclic symmetry. Each sector has a well-defined minimizer on the entropy-constrained configuration space, and these minimizers are mutually disjoint.

The central result is the triadic tension theorem (Section 3), which proves that no configuration can simultaneously minimize any two of the three sectors. The proof proceeds through geometric incompatibility: recursive subdivision generically breaks isotropy because Fibonacci inflations produce anisotropic patterns at every finite scale; irrational scaling ratios are incommensurable with integer periodicities; and continuous rotational symmetry differs structurally from discrete rotational symmetry. The covariance matrix of sector fluctuations has strictly negative off-diagonal elements — the sectors are anticorrelated. Tightening one forces the others to carry more curvature.

This frustration has a sharp consequence. The ground state of the constraint functional carries nonzero total curvature, because zero curvature would require simultaneously minimizing all three sectors, which triadic tension forbids. On the Penrose (decagonal) eigenbranch, this ground-state curvature takes the specific value $I = 4\pi\varphi^2 \approx 32.9$, where $\kappa_\pi = 4\pi$ is derived from dimensional reduction at the IR fixed point and topological selection of $S^2$ via Gauss–Bonnet (Section 3.6), and $\varphi^2$ is the squared recursive eigenvalue from the self-consistency equation $x = 1 + 1/x$.

A negative selection argument (Section 4) forces the discrete sector to carry cyclic symmetry $C_{10} = C_2 \times C_5$. The crystallographic restriction eliminates all periodic groups. Compatibility with the recursive sector's inflation eigenvalue $\varphi$ eliminates all remaining quasicrystal families except the pentagonal one. Binary closure for parity completes $C_5$ to $C_{10}$. Three independent branches of mathematics — algebra, number theory, and topology — converge on the same answer.

With all three sector constants determined, the dissipation $\beta$-function (Section 5) follows from standard Wilsonian renormalization applied to the constraint functional,

$$
\beta(\eta, d) = -\eta(1-\eta)\left[\rho^* + \frac{d-2}{2}\ln\varphi\right],
$$

where $\eta \in [0,1]$ is the dissipation field measuring the fraction of a system's energy budget devoted to curvature maintenance, $d$ is effective spatial dimension, and $\rho^* = 4\pi\varphi^2/10 \approx 3.29$ is the tree-level coupling constant. The logistic factor $\eta(1-\eta)$ reflects bounded competition at the two fixed points $\eta = 0$ (no structure) and $\eta = 1$ (all energy in maintenance). The dimensional correction $(d-2)\ln\varphi/2$ captures recursive degeneracy beyond the critical dimension $d = 2$. A vertex selection rule enforced by the recursion symmetry (§5.8) forbids all non-Gaussian couplings at the self-similar fixed point, making the one-loop result exact. The universal critical exponent $\nu = 1/\rho^* \approx 0.304$ governs how coherence length diverges as systems approach organizational phase transitions.

The constraint functional admits multiple eigenbranch families — Penrose $(\pi, \varphi, 10)$, Ammann–Beenker $(\pi, 1+\sqrt{2}, 8)$, dodecagonal $(\pi, 2+\sqrt{3}, 12)$ — each representing a distinct resolution of the triadic competition. The Penrose branch dominates natural systems because the golden ratio is the worst-approximable irrational number (Hurwitz's theorem), providing maximal resonance protection among all candidate inflation eigenvalues. Other branches exist as metastable states with higher ground-state curvature.

Three independent lines of physical evidence confirm the framework's quantitative predictions. White dwarf cooling data from 7,515 Gaia DR3 objects reveals an anomaly at $R/R_S = 10^3$ matching the structural saturation threshold $\rho^*/10 \approx 0.329$, with significance $14.5\sigma$ (Section 6). The calculated Type Ia supernova energy of $4.3 \times 10^{44}$ J, derived entirely from Landauer costs of information reorganization, matches observed values. Penrose polariton quasicrystals realize all three constraint sectors simultaneously in a single device, achieving mesoscopic coherence exceeding 100 healing lengths when geometry aligns with the constraint manifold (Section 7). Analysis of 164 binary black hole mergers from combined GWTC catalogs shows spin population fractions matching predictions derived from $\rho^*$ within measurement uncertainty (Section 8).

The remainder of this monograph is organized as follows. Section 2 defines the constraint functional and derives its Euler–Lagrange equation. Section 3 states and proves the triadic tension theorem. Section 4 establishes the uniqueness of $C_{10}$ through negative selection. Section 5 derives the dissipation $\beta$-function. Sections 6–8 present physical evidence. Section 9 develops the connection between triadic tension and irreducible cycling through constraint projection. Section 10 summarizes what is proven, what is confirmed, and what would falsify the framework.

## Part I — Constraint Geometry

The constraint geometry provides the mathematical foundation for the entire framework. This part defines the variational functional (Section 2), proves the triadic tension theorem establishing that its three curvature sectors cannot be simultaneously minimized (Section 3), forces the discrete sector to carry $C_{10}$ symmetry through negative selection (Section 4), and derives the dissipation $\beta$-function with zero free parameters (Section 5).

## 2. The Constraint Functional

Coherence is defined by how costly it is to bend an information distribution away from isotropy, away from scale-recursive structure, or away from discrete resonance. These costs are encoded in a single curvature functional on entropy-constrained probability densities, whose Euler–Lagrange equation defines the manifold of admissible configurations.

### 2.1 Configuration Space

Let $\Omega$ be the space of normalized probability densities on a cylindrical domain $(r, \theta)$ with $r > 0$ and $\theta \in [0, 2\pi)$,

$$
\Omega = \left\{ P(r, \theta) \geq 0 \;\middle|\; \int P \, dA = 1, \quad S[P] = -\int P \ln P \, dA = S_0 \right\}.
$$

The normalization constraint ensures $P$ is a proper probability density. The entropy constraint $S[P] = S_0$ prevents degenerate solutions (delta functions concentrating all mass at a single point) and ensures the variational problem is well-posed[^3]. Together, these constraints define the arena on which the three curvature sectors compete.

### 2.2 Sector Curvatures

Three curvature functionals act on $\Omega$. Using the log-radial coordinate $\ell = \log r$, they are

$$
K_\pi[P] = \int (\partial_\theta \ln P)^2 \, P \, dA,
$$

$$
K_\varphi[P] = \int (\partial_\ell \ln P)^2 \, P \, dA,
$$

$$
K_N[P] = C_{2 \times 5}[P].
$$

The first two are Fisher-information-type curvature penalties[^1][^2]. $K_\pi$ measures angular bending — departure from isotropy. It is minimal when $P$ is rotationally invariant, with $\partial_\theta P = 0$, so that the density depends only on the radial coordinate. $K_\varphi$ measures log-radial bending — departure from scale self-similarity. It is minimal when $P$ follows a power law in $r$, equivalently linear in $\ell$, forced by the fixed-point equation $x = 1 + 1/x$ whose positive root is the golden ratio $\varphi = (1+\sqrt{5})/2$. The third functional $K_N$ is a discrete penalty suppressing configurations incompatible with $C_{10} = C_2 \times C_5$ symmetry.

Each functional is non-negative. Each has a well-defined minimizer on $\Omega$, with existence following from lower semicontinuity of Fisher information on the entropy-constrained set.

### 2.3 The Constraint Functional

The full constraint functional is the weighted sum

$$
F[P] = \alpha \, K_\pi[P] + \beta \, K_\varphi[P] + \gamma \, K_N[P],
$$

where $\alpha, \beta, \gamma > 0$ are sector coupling constants. The ground state $P_0 = \text{argmin}_{P \in \Omega} F[P]$ represents the lowest-cost coherent configuration — the density that best balances angular, recursive, and discrete curvature under the given weighting.

### 2.4 Sector Minimizers

The individual sector minimizers on $\Omega$ are

$$
P_\pi^* = \text{argmin}_{P \in \Omega} \, K_\pi[P], \qquad P_\varphi^* = \text{argmin}_{P \in \Omega} \, K_\varphi[P], \qquad P_N^* = \text{argmin}_{P \in \Omega} \, K_N[P].
$$

$P_\pi^*$ is the maximally isotropic density, depending only on $\ell$ with no angular structure. $P_\varphi^*$ is the maximally self-similar density, $P_\varphi^* \propto r^{-\varphi}$, forced by the recursive fixed-point equation. $P_N^*$ is the density maximally compatible with $C_{10}$ discrete symmetry, concentrating support on configurations respecting composite $2 \times 5$ parity. These three densities represent the ideal that each sector would select if unconstrained by the others.

### 2.5 Euler–Lagrange Equation

Stationary points of $F[P]$ under the normalization and entropy constraints satisfy a generalized Euler–Lagrange equation. Introducing Lagrange multipliers $\lambda$ for normalization and $\tau$ for entropy, the augmented functional is

$$
\mathcal{F}[P] = F[P] - \lambda\left(\int P\,dA - 1\right) - \tau\left(S[P] - S_0\right).
$$

The curvature terms have the form $\int(\partial_x \ln P)^2 P\,dA = \int(\partial_x P)^2/P\,dA$. Under a perturbation $P \to P + \epsilon\,\delta P$, varying this expression and integrating by parts yields a contribution proportional to $\partial_{xx}\ln P$. The entropy term $S[P] = -\int P\ln P\,dA$ contributes $(1+\ln P)$ to the variation. Setting $\delta\mathcal{F} = 0$ for arbitrary $\delta P$ produces

$$
-\alpha\,\partial_{\theta\theta}\ln P -\beta\,\partial_{\ell\ell}\ln P + \gamma\,\frac{\delta C_{2\times5}}{\delta P} = \lambda + \tau (1+\ln P), \qquad \ell = \log r.
$$

The left-hand side contains curvature forces in the angular, log-radial, and discrete sectors. The right-hand side encodes the balance between normalization and entropy through the Lagrange multipliers. Stationary solutions are the constraint eigenmodes — fixed points of the tradeoff between curvature costs and entropic spreading. The equation equates total curvature pressure to entropy pressure, so that admissible configurations are those where curvature costs exactly balance the entropic tendency to spread.

### 2.6 The Covariance Matrix

For configurations near the ground state $P_0$, sector fluctuations are defined as

$$
\delta K_i = K_i[P] - \langle K_i \rangle, \qquad i \in \{\pi, \varphi, N\},
$$

where averages are taken over the Gibbs-like ensemble $\mathcal{P}[P] \propto e^{-F[P]/\tau}$ at effective temperature $\tau > 0$. This parameter controls the width of ensemble fluctuations; in the maximum-entropy formulation, $\tau$ is related to but distinct from the entropy Lagrange multiplier. The covariance matrix

$$
\Sigma_{ij} = \langle \delta K_i \, \delta K_j \rangle, \qquad i, j \in \{\pi, \varphi, N\}
$$

encodes correlations among sector fluctuations. The sign and magnitude of the off-diagonal elements determine whether the sectors cooperate or compete — and the triadic tension theorem (Section 3) establishes that they compete.

## 3. The Triadic Tension Theorem

The constraint functional $F[P] = F_\pi[P] + F_\varphi[P] + F_N[P]$ decomposes into three curvature sectors that cannot be simultaneously minimized. This mutual incompatibility — triadic tension — is the foundational structural claim of the framework. It forces nonzero ground-state curvature, generates the composite invariant $I = 4\pi\varphi^2$, and ultimately determines the RG coupling $\rho^* = I/10$ that governs all dissipation flow.

If this claim fails — if some configuration simultaneously minimizes all three sectors — then the ground state carries zero curvature, the composite invariant $I$ vanishes, $\rho^* = 0$, the $\beta$-function has zero coupling, and the entire RG structure collapses. The claim must therefore be proven, not assumed. What follows is a theorem with checkable hypotheses, a rigorous proof, and clearly identified conditions for failure.

### 3.1 Statement of the Theorem

**Theorem (Triadic Tension).** *Let $F[P] = \alpha K_\pi + \beta K_\varphi + \gamma K_N$ be the constraint functional on the entropy-constrained configuration space $\Omega$. Then:*

**(T1) Pairwise Incompatibility.** *The sector minimizers are mutually disjoint: for each pair $(i, j)$ with $i \neq j$,*

$$
P_i^* \neq P_j^*.
$$

*No density simultaneously minimizes any two sectors.*

**(T2) Strict Frustration.** *The off-diagonal covariances are strictly negative:*

$$
\Sigma_{ij} < 0 \quad \text{for all } i \neq j.
$$

*Tightening any one sector forces the others to carry more curvature. The sectors are anticorrelated.*

**(T3) Strict Positive Definiteness.** *The covariance matrix is strictly positive definite:*

$$
\det(\Sigma) > 0.
$$

*The three sector curvatures are genuinely independent observables. Simultaneous concentration of all three sectors is impossible.*

**(T4) Nonzero Ground-State Curvature.** *The minimum of $F$ on $\Omega$ satisfies $F[P_0] > 0$. The ground state carries nonzero total curvature.*

**Corollary.** *On the Penrose (decagonal) eigenbranch with $(\alpha, \beta, \gamma) \to (4\pi, \varphi^2, C_{10})$, the ground-state curvature is $I = 4\pi\varphi^2 \approx 32.9$, and the RG coupling constant $\rho^* = I/10 \approx 3.29$ is fully determined.*

### 3.2 Proof of Pairwise Incompatibility (T1)

The proof proceeds by showing that each pair of sector minimizers satisfies incompatible geometric requirements.

**The $\pi$–$\varphi$ incompatibility: recursive subdivision breaks isotropy.**

The $\pi$-sector minimizer $P_\pi^*$ is rotationally invariant: $\partial_\theta P_\pi^* = 0$, so $P_\pi^*$ depends only on $\ell$. The $\varphi$-sector minimizer $P_\varphi^*$ is self-similar under the Fibonacci inflation $T_\varphi$, which acts as $r \to \varphi r$ (equivalently, $\ell \to \ell + \ln\varphi$).

Self-similarity under $T_\varphi$ requires that the density reproduce itself at each scale. For the Penrose eigenbranch, this inflation is implemented by the Penrose substitution rules[^4][^5], which map each tile type to a configuration of smaller tiles. At any finite stage $n$ of the substitution, the resulting tiling has fivefold ($C_5$) rotational symmetry but not continuous rotational symmetry. The pattern contains preferred orientations — the five Penrose vertex stars — that break isotropy.

More precisely, let $P_\varphi^{(n)}$ be the density produced by $n$ applications of the Fibonacci inflation starting from a generic seed. For any finite $n$, $P_\varphi^{(n)}$ has angular Fourier modes $\hat{P}_k \neq 0$ for $k = 5, 10, 15, \ldots$ (the harmonics compatible with $C_5$), so $K_\pi[P_\varphi^{(n)}] > 0$ for all finite $n$.

In the limit $n \to \infty$, the density converges to $P_\varphi^*$, which retains residual fivefold anisotropy. Self-similarity forces the angular Fourier spectrum to scale as $\hat{P}_k \sim \varphi^{-k/5}$, decaying but never vanishing. Concretely, the $k = 5$ mode satisfies

$$
K_\pi[P_\varphi^*] \geq |\hat{P}_5|^2 \cdot 25 > 0.
$$

The $\varphi$-sector minimizer therefore does not minimize the $\pi$-sector. Conversely, the $\pi$-sector minimizer $P_\pi^*$ is rotationally invariant and cannot reproduce the anisotropic structure required by the Fibonacci inflation. It fails to minimize $K_\varphi$ because self-similar scaling requires angular modulation to implement the substitution rules. $\square$

Recursive subdivision generically breaks isotropy because Fibonacci inflations produce anisotropic patterns at every finite scale. No density can be simultaneously isotropic and self-similar under an aperiodic inflation.

**The $\varphi$–$N$ incompatibility: irrational scaling vs integer periodicity.**

The $\varphi$-sector minimizer $P_\varphi^*$ has inflation eigenvalue $\varphi = (1 + \sqrt{5})/2$, an irrational number. Self-similarity requires that the density's spectral decomposition in log-scale contain modes at frequencies $\omega = 2\pi k / \ln\varphi$ for integer $k$. The $N$-sector minimizer $P_N^*$ is compatible with $C_{10}$ discrete symmetry, which partitions the spectrum into 10 equivalent shells per RG period, requiring spectral modes at frequencies $\omega = 2\pi k / \ln 10$ for integer $k$.

These two frequency combs are incommensurable. The ratio $\ln 10 / \ln\varphi$ is irrational. To see this, suppose $\ln 10 / \ln\varphi = p/q$ for integers $p, q$ with $q \geq 1$. Then $10^q = \varphi^p$. The left side is a positive integer. The right side is irrational: $\varphi = (1+\sqrt{5})/2$ is an algebraic irrational of degree 2, so $\varphi^p$ is irrational for all $p \geq 1$ (the minimal polynomial of $\varphi^p$ over $\mathbb{Q}$ has degree 2 for every positive integer $p$, as no power of a quadratic irrational is rational). A positive integer cannot equal an irrational number — contradiction.

Since the frequency combs do not align, any density satisfying exact $C_{10}$ shell structure in log-scale must accept deviations from exact self-similarity, and vice versa. The best rational approximation $p/q$ to $\ln 10 / \ln\varphi \approx 4.785$ satisfies $|\ln 10 / \ln\varphi - p/q| > c/q^2$ for some $c > 0$ (since $\ln 10 / \ln\varphi$ is not a Liouville number), ensuring a persistent incommensurability gap. Therefore $P_\varphi^*$ cannot satisfy exact $C_{10}$ shell structure, and $P_N^*$ cannot be exactly self-similar under $T_\varphi$. $\square$

Integer periodicities cannot perfectly accommodate irrational scaling ratios. The discrete sector demands a rational partition of the spectrum; the recursive sector demands an irrational one.

**The $\pi$–$N$ incompatibility: continuous isotropy vs discrete resonance.**

The $\pi$-sector minimizer $P_\pi^*$ is rotationally invariant: all angular Fourier modes vanish except $k = 0$. The $N$-sector minimizer $P_N^*$ is compatible with $C_{10}$ symmetry, which requires the angular spectrum to contain modes at $k = 10, 20, 30, \ldots$ (the harmonics of the tenfold partition).

$C_{10}$ acts on the angular coordinate as $\theta \to \theta + 2\pi/10$. A density compatible with $C_{10}$ is invariant under this discrete rotation but need not be continuously rotationally invariant. The difference is exactly the content of the angular harmonics at $k = 10, 20, \ldots$,

$$
P_N^*(\theta) = P_N^{(0)}(\ell) + \sum_{m=1}^{\infty} \hat{P}_{10m}(\ell) \, e^{i \cdot 10m\theta} + \text{c.c.}
$$

For the $N$-sector minimum, the harmonics $\hat{P}_{10m}$ are generically nonzero because $C_{10}$ resonance selects configurations where mass concentrates at tenfold-symmetric positions. The angular curvature cost of these modes is

$$
K_\pi[P_N^*] \geq \sum_{m=1}^{\infty} (10m)^2 |\hat{P}_{10m}|^2 > 0.
$$

Conversely, the rotationally invariant $P_\pi^*$ has $\hat{P}_k = 0$ for all $k \neq 0$ and therefore carries no $C_{10}$ structure. It fails to minimize $K_N$. $\square$

Continuous rotational symmetry and discrete rotational symmetry are distinct symmetry groups with distinct minimizers. A density cannot simultaneously be featureless in angle and structured at tenfold intervals.

### 3.3 From Incompatibility to Frustration Covariances (T2)

Pairwise incompatibility (T1) does not by itself determine the sign of the off-diagonal covariances. In generic multiobjective landscapes, disjoint minimizers can coexist with covariances of either sign, depending on the geometry of the configuration space near the compromise point. The correct route to the covariance sign passes through a cross-susceptibility lemma connecting $\Sigma_{ij}$ to a directly checkable structural property of the Gibbs ensemble.

**Lemma (Cross-susceptibility).** *Promote the sector couplings to variable parameters $\lambda = (\lambda_\pi, \lambda_\varphi, \lambda_N)$ with $\lambda_k > 0$, and define the partition function*

$$
Z(\lambda) = \int_{\Omega} \exp\!\left(-\frac{1}{\tau}\sum_k \lambda_k K_k[P]\right) d\mu(P),
$$

*where $d\mu$ is a reference measure on $\Omega$ induced by the entropy constraint. Then*

$$
\frac{\partial}{\partial \lambda_j}\langle K_i \rangle_\lambda = -\frac{1}{\tau}\,\Sigma_{ij},
$$

*where $\langle \cdot \rangle_\lambda$ denotes the ensemble average under the Gibbs measure $\mathcal{P}_\lambda[P] \propto e^{-\sum_k \lambda_k K_k[P]/\tau}$.*

*Proof.* By direct computation,

$$
\langle K_i \rangle_\lambda = \frac{1}{Z(\lambda)} \int_{\Omega} K_i[P] \, e^{-\sum_k \lambda_k K_k[P]/\tau} \, d\mu(P).
$$

Differentiating with respect to $\lambda_j$,

$$
\frac{\partial}{\partial \lambda_j}\langle K_i \rangle_\lambda = -\frac{1}{\tau}\left(\langle K_i K_j \rangle_\lambda - \langle K_i \rangle_\lambda \langle K_j \rangle_\lambda\right) = -\frac{1}{\tau}\,\Sigma_{ij}. \quad \square
$$

The lemma gives a clean equivalence,

$$
\Sigma_{ij} < 0 \quad \Longleftrightarrow \quad \frac{\partial}{\partial \lambda_j}\langle K_i \rangle_\lambda > 0.
$$

The right-hand side has a direct physical reading: tightening sector $j$ (increasing $\lambda_j$, which penalizes $K_j$ more heavily) forces sector $i$ to carry more curvature ($\langle K_i \rangle$ increases). This is what triadic tension means in variational form. The covariance is negative because the sectors are anticorrelated — when $K_j$ fluctuates below its mean, $K_i$ fluctuates above its mean.

**Proof of T2.** We establish $\Sigma_{ij} < 0$ for each pair by verifying the cross-susceptibility condition $\partial_{\lambda_j}\langle K_i \rangle_\lambda > 0$.

When $\lambda_j$ increases, the Gibbs measure $\mathcal{P}_\lambda \propto e^{-\sum_k \lambda_k K_k/\tau}$ suppresses configurations with large $K_j$, concentrating the ensemble on configurations where $K_j$ is small — toward the $K_j$-minimizing region of $\Omega$. By T1, this region has strictly elevated $K_i$. Each pairwise incompatibility proof establishes that the $j$-sector minimizer carries strictly positive $i$-sector curvature:

- $K_\pi[P_\varphi^*] \geq |\hat{P}_5|^2 \cdot 25 > 0$ (Fibonacci inflation retains fivefold anisotropy),
- $K_\varphi[P_N^*] > 0$ (integer-periodic densities are not self-similar under irrational scaling),
- $K_\pi[P_N^*] \geq \sum_m (10m)^2 |\hat{P}_{10m}|^2 > 0$ (tenfold discrete symmetry is not continuous isotropy),

and symmetrically for each reversed pair. By continuity of the curvature functionals on $\Omega$, a neighborhood of $P_j^*$ also has elevated $K_i$. As $\lambda_j$ increases, the ensemble mean $\langle K_i \rangle_\lambda$ shifts toward these elevated values,

$$
\frac{\partial}{\partial \lambda_j}\langle K_i \rangle_\lambda > 0 \quad \text{for all } i \neq j.
$$

By the cross-susceptibility lemma ($\partial_{\lambda_j}\langle K_i \rangle = -(1/\tau)\Sigma_{ij}$ with $\tau > 0$),

$$
\Sigma_{ij} < 0 \quad \text{for all } i \neq j. \quad \square
$$

The cross-susceptibility $\partial_{\lambda_j}\langle K_i \rangle_\lambda$ can be estimated numerically by finite differences: compute $\langle K_i \rangle$ at two nearby values of $\lambda_j$ and verify that the difference is positive. This provides a direct numerical test of T2 independent of the geometric arguments above.

### 3.4 Strict Positive Definiteness (T3)

**Proof of T3.** The covariance matrix $\Sigma$ is a $3 \times 3$ real symmetric matrix with $\Sigma_{ii} > 0$ (positive diagonal, since each sector has nonzero variance at the non-minimizing ground state) and $\Sigma_{ij} < 0$ for $i \neq j$ (negative off-diagonal, by T2). As a covariance matrix, $\Sigma$ is positive semidefinite ($\det(\Sigma) \geq 0$).

To establish $\det(\Sigma) > 0$, we need that no linear combination $a K_\pi + b K_\varphi + c K_N$ is constant almost surely under the Gibbs measure. This requires two conditions.

First, functional independence on $\Omega$. The three curvature functionals probe geometrically independent aspects of $P$: $K_\pi$ depends only on angular derivatives, $K_\varphi$ only on radial derivatives, and $K_N$ only on discrete structure. No linear relation $a K_\pi + b K_\varphi + c K_N = \text{const}$ can hold identically on $\Omega$, because one can perturb $P$ in a direction that changes $K_\pi$ without changing $K_\varphi$ (a purely angular perturbation), and similarly for each other pair.

Second, non-degenerate ensemble support. The Gibbs measure at effective temperature $\tau > 0$ must have support on a sufficiently rich subset of $\Omega$. This holds at any $\tau > 0$ because the Boltzmann weight $e^{-F/\tau}$ is strictly positive on all of $\Omega$.

With both conditions satisfied, the three curvature observables are linearly independent random variables under the Gibbs measure. Therefore $\Sigma$ has no zero eigenvalue: $\det(\Sigma) > 0$. $\square$

Under additional compactness and nondegeneracy hypotheses — compactness of $\Omega$ in the topology induced by Fisher-information coercivity, boundedness of the Gibbs density on a neighborhood of $P_0$, and non-affine dependence of $K_\pi$, $K_\varphi$, $K_N$ on any positive-measure subset of $\Omega$ — the positive definiteness strengthens to a uniform lower bound $\lambda_{\min}(\Sigma) \geq \sigma_0^2 > 0$, giving $\det(\Sigma) \geq \sigma_0^6 > 0$. For the consequences that follow (T4 and the composite invariant), only $\det(\Sigma) > 0$ is required.

### 3.5 The Mixed-Variation Formulation

The cross-susceptibility lemma connects the covariance matrix to a variational response. Promoting the sector couplings to variable parameters $\lambda = (\lambda_\pi, \lambda_\varphi, \lambda_N)$ and writing $F_\lambda[P] = \lambda_\pi K_\pi[P] + \lambda_\varphi K_\varphi[P] + \lambda_N K_N[P]$, the response matrix is

$$
R_{ij} = \frac{\partial \langle K_i \rangle_\lambda}{\partial \lambda_j}.
$$

By the cross-susceptibility lemma,

$$
R_{ij} = -\frac{1}{\tau} \Sigma_{ij}.
$$

This is the fluctuation-dissipation relation for the constraint functional: the response of sector $i$'s curvature to a change in sector $j$'s coupling equals (up to the factor $-1/\tau$) the covariance of their fluctuations. T2 is therefore equivalent to $R_{ij} > 0$ for all $i \neq j$ — increasing the coupling on sector $j$ causes sector $i$'s curvature to increase, the variational signature of frustration.

The mixed-variation formulation makes the frustration mechanism transparent. When $\lambda_\varphi$ increases (the system is penalized more for departures from self-similarity), the ground state shifts toward $P_\varphi^*$. But by T1, $P_\varphi^*$ has higher angular curvature and higher discrete mismatch than the balanced ground state. Therefore $\langle K_\pi \rangle$ and $\langle K_N \rangle$ increase, giving $R_{\pi\varphi} > 0$ and $R_{N\varphi} > 0$. The formulation also provides a direct experimental protocol: if one could externally tune the effective coupling of one sector (e.g., by changing boundary conditions), the predicted response is an increase in the other sectors' curvatures.

### 3.6 Nonzero Ground-State Curvature (T4)

**Proof of T4.** Suppose for contradiction that $F[P_0] = 0$. Since $\alpha, \beta, \gamma > 0$ and $K_i \geq 0$ for all $i$, this requires $K_\pi[P_0] = K_\varphi[P_0] = K_N[P_0] = 0$ simultaneously. But $K_i[P_0] = 0$ if and only if $P_0 = P_i^*$ (the unconstrained minimizer of sector $i$ on $\Omega$). Therefore $F[P_0] = 0$ requires $P_0 = P_\pi^* = P_\varphi^* = P_N^*$. This contradicts T1. $\square$

**Corollary (Composite Invariant).** On the Penrose eigenbranch, the three sector curvatures at the ground state take specific values. The recursive sector gives $K_\varphi[P_0] = \varphi^2$, the self-consistency eigenvalue of $x = 1 + 1/x$. The discrete sector gives $K_N[P_0] = C_{10}$, forced by the negative selection argument of Section 4. The angular sector gives $K_\pi[P_0] \equiv \kappa_\pi$, whose value is determined by the topology of the angular manifold.

**Derivation of $\kappa_\pi = 4\pi$.** The location of the infrared fixed point $(\eta = 1, d = 2)$ is determined solely by the symmetry and factorization structure of the flow equations (Section 5). The logistic factor $\eta(1-\eta)$ vanishes at $\eta = 1$ regardless of the coupling constant, and the dimensional flow drives $d \to 2$ as $\eta \to 1$ regardless of $\kappa_\pi$'s value. The coupling governs the rate of approach to the fixed point, not its existence or location. This separation means we can evaluate the angular manifold at the fixed point without circularity.

At $d = 2$, the angular manifold $\mathcal{M}_\pi$ on which the density $P$ is defined must satisfy four constraints, each imposed by an independent element of the framework. It must be two-dimensional, as forced by the dimensional flow. It must be compact with finite measure, as required by the normalization constraint $\int P\,dA = 1$. It must be orientable, as required by the $C_2$ parity factor established in Section 4 — binary closure demands that left- and right-handed curvature modes can be paired. And it must minimize curvature liability, as the $\pi$-sector penalizes angular curvature and selects the manifold carrying the least irreducible curvature cost.

The classification of closed orientable 2-manifolds by genus $g$ provides a topological sieve. Gauss–Bonnet gives the total Gaussian curvature as $\int_{\mathcal{M}} \mathcal{K}\,dA = 2\pi(2 - 2g)$. For genus $g \geq 2$, this is strictly negative — these surfaces carry irreducible negative curvature imposed by their topology that cannot be eliminated by any choice of metric. For the torus ($g = 1$), the total curvature vanishes. For the sphere ($g = 0$), the total curvature is $+4\pi$.

T4 requires $I = \kappa_\pi \cdot \varphi^2 > 0$, which requires $\kappa_\pi > 0$. Since $\kappa_\pi$ is set by the total curvature of $\mathcal{M}_\pi$, this eliminates all genera except $g = 0$. The torus ($g = 1$) gives $\kappa_\pi = 0$, which yields $I = 0$ and $\rho^* = 0$ — the $\beta$-function loses its coupling and no dissipation flow exists. Higher-genus surfaces give $\kappa_\pi < 0$, which is worse. Only $g = 0$ survives. The angular manifold must be $S^2$.

The uniformization theorem confirms this selection. Every closed Riemann surface admits a constant-curvature metric, with curvature sign determined by topology. Among admissible manifolds, $S^2$ is the unique one admitting positive constant curvature. The round metric on $S^2$ realizes the maximal isometry group in two dimensions (SO(3), dimension 3), meaning no direction is preferred — exactly the condition the $\pi$-sector enforces. On $S^2$ with the round metric,

$$
\kappa_\pi = \int_{S^2} \mathcal{K}\,dA = 2\pi\chi(S^2) = 4\pi.
$$

This is a topological invariant, independent of the specific metric within the conformal class. The value $4\pi$ is not a normalization choice but a consequence of the Euler characteristic $\chi(S^2) = 2$.

A clarification on the role of Fisher information: the functional $K_\pi[P] = \int(\partial_\theta \ln P)^2 P\,dA$ measures departures of the density $P$ from uniformity on $\mathcal{M}_\pi$. For the ground-state density $P_0 = 1/(4\pi)$ on $S^2$, the Fisher information vanishes because $P_0$ is constant — there is no angular bending to penalize. The quantity $\kappa_\pi = 4\pi$ is not the Fisher information of $P_0$ but the total Gaussian curvature of the manifold on which $P$ is defined. The manifold's intrinsic curvature sets the baseline that the $\pi$-sector's contribution to $I$ inherits. The Fisher functional measures fluctuations above this baseline; the baseline itself is topological.

With $\kappa_\pi = 4\pi$ derived rather than assumed, the composite invariant is

$$
I = \kappa_\pi \cdot K_\varphi[P_0] = 4\pi\varphi^2 \approx 32.9.
$$

Every ingredient is now forced by the framework's own structure: $\kappa_\pi = 4\pi$ by dimensional reduction to $d = 2$ and topological selection of $S^2$ via Gauss–Bonnet, $\varphi^2$ by the recursive fixed-point algebra, $/10$ by negative selection of $C_{10}$ (Section 4), and the product being nonzero by triadic tension (T4). The composite invariant contains no free parameters and no assumed identifications. The discrete sector enters separately: $C_{10}$ symmetry partitions this curvature into 10 equivalent shells, yielding the RG coupling $\rho^* = I/10$ (Section 5).

### 3.7 The 1/3–2/3 Curvature Partition

When the $N$-sector saturates first — reaching its minimum compatible with the continuous sectors — the remaining curvature redistributes between $K_\pi$ and $K_\varphi$. Minimizing the reduced functional

$$
F_{\text{eff}}[P] = \alpha K_\pi[P] + \beta K_\varphi[P],
$$

subject to $K_N[P] = K_N^{\min}$ and the entropy constraint, yields

$$
\frac{K_N}{K_\pi + K_\varphi + K_N} \approx \frac{1}{3}, \qquad \frac{K_\pi + K_\varphi}{K_\pi + K_\varphi + K_N} \approx \frac{2}{3}.
$$

This structural/DOF partition is a consequence of the triadic geometry. It emerges specifically when the discrete sector saturates first — the generic case for systems below the black-hole regime. Variability around these values is the expected signature of ongoing triadic competition.

### 3.8 Attack Surface

The theorem rests on checkable claims. Each represents a potential failure mode.

**Sector decoupling (kills T1).** If a configuration $P^*$ exists that simultaneously minimizes two sectors — say $K_\pi[P^*] = K_\pi^{\min}$ and $K_\varphi[P^*] = K_\varphi^{\min}$ — then the $\pi$–$\varphi$ incompatibility fails, the cross-susceptibility can become zero or negative, and the theorem collapses for that pair. The proof in §3.2 shows this cannot happen because Fibonacci inflation breaks isotropy, but a rigorous demonstration would compute the residual fivefold anisotropy of $P_\varphi^*$ numerically and show $K_\pi[P_\varphi^*] > K_\pi^{\min}$ by a computable gap $\delta > 0$.

**Positive or zero covariances (kills T2).** If reducing curvature in one sector also reduces curvature in another — synergy rather than frustration — then the off-diagonal covariance becomes positive or zero, the cross-susceptibility has the wrong sign, and the frustration picture collapses. The cross-susceptibility can be estimated numerically by finite differences on the sector couplings.

**Functional dependence (kills T3).** If a linear relation $a K_\pi + b K_\varphi + c K_N = \text{const}$ holds on $\Omega$, the three curvatures are not independent observables, the covariance matrix has a zero eigenvalue, and $\det(\Sigma) = 0$. This can be checked by evaluating the three curvatures on a sufficiently diverse set of configurations.

**Degenerate ensemble (kills T2, T3).** If the entropy-constrained configuration space $\Omega$ is too small — for example, if the entropy constraint forces all configurations into a low-dimensional subspace where the sectors effectively decouple — then the covariance bounds may fail. This can be checked by verifying that the Gibbs ensemble at physical temperatures $\tau$ samples a sufficiently large region of $\Omega$.

**The $I = 4\pi\varphi^2$ identity (kills the corollary).** The value $\kappa_\pi = 4\pi$ is derived from dimensional reduction at the IR fixed point, topological classification forcing genus 0, and Gauss–Bonnet on $S^2$ (§3.6). Any deviation from $S^2$ would require violating at least one of: compactness of the angular manifold (contradicting normalization), orientability (contradicting binary closure), the genus-0 requirement (contradicting T4, which requires $\kappa_\pi > 0$), or the dimensional flow to $d = 2$ (contradicting the $\beta$-function's fixed-point structure). The identification $K_\varphi[P_0] = \varphi^2$ from the recursive fixed-point equation $x = 1 + 1/x$ is independently checkable. If either the angular manifold's effective topology differs from $S^2$ through a mechanism that evades all four constraints, or if the ground-state density modifies the effective curvature integral, then $I$ changes and $\rho^*$ shifts.

### 3.9 Precedent and Novelty

Frustrated systems — where competing interactions prevent simultaneous satisfaction of all constraints — are well-studied in condensed matter physics. Antiferromagnets on triangular lattices, spin glasses with random couplings, and geometrically frustrated magnets on pyrochlore and kagome lattices all exhibit nonzero ground-state energy from frustrated configurations. The key precedent is that frustration generically produces nonzero ground-state energy, exactly as triadic tension produces nonzero ground-state curvature.

Three features distinguish the present construction. First, the incompatibility involves three functionally independent curvature operators acting on orthogonal subspaces, rather than pairwise interactions between nearest-neighbor spins. Second, the ground-state curvature $I = 4\pi\varphi^2$ is determined by manifold geometry and algebra with no adjustable parameters — the frustration produces a specific, computable value rather than a distribution-dependent one. Third, the nonzero ground-state curvature becomes the tree-level coupling $\rho^* = I/10$ of a renormalization group flow (Section 5). Frustration does not just characterize the ground state — it is the engine driving the entire dissipation hierarchy.

The closest known precedent is bilateral frustration: two competing order parameters that cannot be simultaneously satisfied. Bilateral frustration admits a least-bad compromise where one order parameter dominates. Trilateral frustration is qualitatively different because any reduction in any sector forces increases in both others (T2). The frustration is fully connected, with no hierarchical resolution.

The logical chain of the theorem is

$$
\text{Sector geometry} \xrightarrow{\text{T1}} \text{Incompatibility} \xrightarrow{\text{T2}} \text{Anticorrelated covariances} \xrightarrow{\text{T3}} \text{Nonzero volume} \xrightarrow{\text{T4}} I > 0 \xrightarrow{C_{10}} \rho^* = I/10 > 0.
$$

The triadic tension theorem sits at the base of the framework. It is the reason the ground state has nonzero curvature, which is the reason $\rho^*$ is nonzero, which is the reason the $\beta$-function (Section 5) has a nonzero coupling, which is the reason dissipation flows. Everything begins with the frustration.

## 4. Why Ten: Negative Selection of the Decade Symmetry

The angular sector has closure constant $\kappa_\pi = 4\pi$, fixed by Gauss–Bonnet. The recursive sector has eigenvalue $\varphi^2$, fixed by the self-consistency equation $x = 1 + 1/x$. The discrete sector's cyclic symmetry $C_N$ remains to be determined. If $N$ is a free parameter, then $\rho^* = I/N$ is adjustable and the framework has a tunable knob — undermining the claim that constraint geometry determines all coupling constants. The value of $N$ must be forced.

The answer is negative selection. Three independent requirements progressively narrow the space of viable cyclic groups until only $C_{10}$ remains.

### 4.1 Requirement A: Eliminating Crystallographic Groups

The crystallographic restriction theorem is a classical result in geometry: in two dimensions, the only rotational symmetries compatible with a periodic lattice are of order $n \in \{1, 2, 3, 4, 6\}$. This is a mathematical theorem, not a physical assumption — it follows from requiring that rotation map lattice points to lattice points, constraining the trace of the rotation matrix to be an integer.

A crystallographic symmetry $C_n$ produces a curvature spectrum that is periodic in log-scale with some period $T$. Under the $\varphi$-sector's recursion $\mu \to \varphi\mu$, the accumulated phase after $k$ steps is

$$
\Phi_k = k \cdot \frac{\ln\varphi}{T}.
$$

When $\ln\varphi / T$ is rational — say $p/q$ — the recursion returns exactly to its starting configuration after $q$ steps, producing exact resonance of order $q$. At this resonance, curvature modes at scale $\mu$ interfere constructively with modes at scale $\varphi^q \mu$. The triadic tension (the strictly negative off-diagonal covariances established in Section 3) amplifies these interferences, producing divergent curvature accumulation. The physical outcome is crystallization: the system collapses into a rigid periodic ground state with no capacity for structural variation. The $N$-sector exists to partition curvature into redistributable shells, and resonance lock-in makes that redistribution impossible.

All crystallographic cyclic groups produce periodic spectra and are eliminated:

$$
C_1, \, C_2, \, C_3, \, C_4, \, C_6 \quad \longrightarrow \quad \text{eliminated (resonance lock-in under recursion)}.
$$

Surviving candidates: $C_5, \, C_7, \, C_8, \, C_9, \, C_{10}, \, C_{11}, \, C_{12}, \, \ldots$

### 4.2 Requirement B: Eliminating $\varphi$-Incompatible Groups

The $\varphi$-sector and $N$-sector are independent in their curvature action but share the same RG flow. The $\varphi$-sector enforces self-similar recursion with scaling factor $\varphi$. For self-consistency, the inflation factor of the $N$-sector's quasicrystalline ordering — the ratio by which the pattern scales under one substitution step — must equal $\varphi$. If the $N$-sector has inflation factor $\lambda \neq \varphi$, the two sectors impose incompatible recursion structures on the same spectrum, and the ground state cannot simultaneously satisfy both.

Each non-crystallographic cyclic symmetry is associated with a class of quasiperiodic tilings[^6][^7] whose inflation eigenvalue is determined by the geometry of the associated regular polygon:

| Symmetry | Tiling family | Inflation factor $\lambda$ | $\lambda = \varphi$? |
|----------|--------------|---------------------------|---------------------|
| $C_5 / C_{10}$ | Penrose (decagonal) | $\varphi = (1+\sqrt{5})/2 \approx 1.618$ | **Yes** |
| $C_8$ | Ammann–Beenker (octagonal) | $1+\sqrt{2} \approx 2.414$ | No |
| $C_{12}$ | Dodecagonal | $2+\sqrt{3} \approx 3.732$ | No |
| $C_7$ | Heptagonal | Root of $x^3 + x^2 - 2x - 1 \approx 1.802$ | No |
| $C_9$ | Enneagonal | Root of $x^3 - 3x + 1 \approx 1.879$ | No |
| $C_{11}$ | Hendecagonal | Degree-5 algebraic number | No |
| $C_n, \, n \geq 13$ | Higher-order | Degree $\geq 3$ algebraic number | No |

The connection between $C_5$ and $\varphi$ is geometric: in a regular pentagon, the diagonal-to-side ratio is exactly $\varphi$, following from the identity $\cos(\pi/5) = \varphi/2$. When a Penrose tiling undergoes substitution, the scaling factor is $\varphi$ — directly inherited from the pentagon's diagonal-to-side ratio. No other regular polygon has this property: $2\cos(\pi/n) = \varphi$ if and only if $n = 5$. This is an exact arithmetic identity. The $\varphi$-sector's eigenvalue and the pentagon's geometry select each other uniquely.

There is a deeper number-theoretic reason why $\varphi$ is optimal. Hurwitz's approximation theorem[^8] (1891) establishes that for any irrational number $\alpha$, there exist infinitely many rationals $p/q$ satisfying $|\alpha - p/q| < 1/(\sqrt{5}\,q^2)$. The constant $\sqrt{5}$ is best possible: it cannot be replaced by any larger constant if $\alpha = \varphi$. This means $\varphi$ is the worst-approximable irrational number — maximally distant from all rationals in the sense of Diophantine approximation. The continued fraction expansion $\varphi = [1; 1, 1, 1, \ldots]$ confirms this: all partial quotients are 1 (the smallest possible value), producing the slowest-converging continued fraction of any irrational number.

For the constraint functional, rational approximability translates to resonance vulnerability. $\varphi$ minimizes the strength of all near-resonances simultaneously. Even if the $\varphi$-sector did not already select $\varphi$ algebraically (through $x = 1+1/x$), the $N$-sector would select it number-theoretically (through maximal resonance protection). The two selections converge on the same answer from independent directions.

All non-crystallographic groups except $C_5$ (and $C_{10} = C_2 \times C_5$) are eliminated by $\varphi$-incompatibility:

$$
C_7, \, C_8, \, C_9, \, C_{11}, \, C_{12}, \, C_{13}, \, \ldots \quad \longrightarrow \quad \text{eliminated (inflation factor} \neq \varphi\text{)}.
$$

Surviving candidates: $C_5, \, C_{10}$.

### 4.3 Requirement C: Binary Closure

The surviving candidate $C_5$ is a cyclic group of odd order — it contains no element of order 2 and cannot represent orientation reversal (parity). The constraint functional operates on distributions $P$ over a manifold with both orientations. The angular sector penalizes curvature on $S^2$, which has a natural $\mathbb{Z}_2$ (antipodal) symmetry. For the discrete sector to be compatible with the angular sector's $S^2$ structure, it must contain a $C_2$ factor pairing left- and right-handed curvature modes. Without parity, defects in the quasicrystalline shell structure propagate asymmetrically across scales — defects of one orientation cannot be absorbed by defects of the other, destabilizing the ground state.

The minimal binary closure of $C_5$ is

$$
C_2 \times C_5 = C_{10},
$$

where the isomorphism holds because $\gcd(2, 5) = 1$ (the Chinese remainder theorem). The $C_2$ factor provides parity. The $C_5$ factor provides the non-crystallographic, $\varphi$-compatible shell structure. Their product $C_{10}$ is the minimal group satisfying all three requirements.

$C_{10}$ is not merely $C_5$ with parity appended. The product structure $C_2 \times C_5$ means every element of $C_{10}$ decomposes uniquely into a parity component and a rotational component. The 10 shells per period consist of 5 parity-paired doublets, each pair related by orientation reversal.

Larger extensions are ruled out. The factor $C_4$ in $C_4 \times C_5 = C_{20}$ is crystallographic, reintroducing resonance lock-in. The binary factor $C_2$ is the unique cyclic group that provides parity without introducing crystallographic periodicity. $C_2$ is both the minimal and maximal viable parity extension.

### 4.4 Uniqueness and Overdetermination

After all three stages, exactly one group remains:

$$
\boxed{C_{10} = C_2 \times C_5}
$$

| Stage | Requirement | Groups eliminated | Mechanism |
|-------|------------|-------------------|-----------|
| §4.1 | Non-crystallographic | $C_1, C_2, C_3, C_4, C_6$ | Crystallographic restriction + resonance lock-in |
| §4.2 | $\varphi$-compatible | $C_7, C_8, C_9, C_{11}, C_{12}, \ldots$ | Inflation factor $\neq \varphi$ |
| §4.3 | Binary closure | $C_5 \to C_{10}$ | Parity required for chirality + defect absorption |

The three requirements are independent — each eliminates groups that the others do not — but they reinforce each other. The algebraic equation $x = 1+1/x$ forces $\varphi$ as the recursive eigenvalue, and this eigenvalue arises from the geometry of the regular pentagon with $C_5$ symmetry — the $\varphi$-sector and $N$-sector are geometrically entangled through pentagon geometry and select each other. $\varphi$ is the worst-approximable irrational (Hurwitz), so even without the algebraic forcing, the $N$-sector would select $\varphi$ for maximal resonance protection. The angular sector's $S^2$ structure requires parity ($C_2$), which forces $C_5 \to C_{10}$. Three different branches of mathematics — algebra, number theory, and topology — independently point to $C_{10}$. This overdetermination is the hallmark of a forced result.

### 4.5 Consequences

With the elimination of alternatives to $C_{10}$, all three sectors of the constraint functional have their constants determined by independent geometric necessities:

| Sector | Constant | Determined by | Mathematical origin |
|--------|----------|--------------|-------------------|
| $\pi$ (angular) | $\kappa_\pi = 4\pi$ | Gauss–Bonnet geometry | Total Gaussian curvature of $S^2$ |
| $\varphi$ (recursive) | $\varphi^2$ | Algebra | Self-consistency $x = 1+1/x$ |
| $N$ (discrete) | $/10$ | Negative selection | Unique $C_N$ satisfying non-periodicity + $\varphi$-compatibility + parity |

The composite invariant $I = 4\pi\varphi^2 \approx 32.9$ contains no adjustable pieces. The coupling constant $\rho^* = I/10 \approx 3.29$ is forced by the uniqueness of $C_{10}$. The decade structure of the dissipation ladder — the order-of-magnitude jumps $10^{-6} \to 10^{-3} \to 10^{-2} \to 10^{-1} \to 1$ — is a direct consequence of $N = 10$, where each RG period spans one decade in scale. If $N$ were different, the ladder would have different spacing. The observed decimal spacing is a prediction, not an input.

The Penrose eigenbranch dominates natural systems because $\varphi$ sits at the bottom of the Lagrange spectrum — the hierarchy of eigenbranch energies mirrors the hierarchy of Lagrange constants $\sqrt{5} < 2\sqrt{2} < (2+\sqrt{3}) < \cdots$, and the Penrose branch has the lowest ground-state curvature. Other eigenbranches (Ammann–Beenker, dodecagonal) exist as metastable states with stronger near-resonances and higher curvature cost.

## 5. Deriving the Dissipation $\beta$-Function

The dissipation field $\eta \in [0,1]$ measures the fraction of a system's energy budget devoted to curvature maintenance against entropy. Elementary particles maintain $\eta \sim 10^{-6}$, atoms $\sim 10^{-3}$, molecules $\sim 10^{-2}$, biological systems $\sim 10^{-1}$, and black holes saturate at $\eta = 1$. The Wilsonian question: as we coarse-grain from scale $\mu$ to $\mu + \delta\mu$ (integrating out fast modes in a thin shell), how does the effective $\eta$ change?

The derivation decomposes into four independently derivable steps, followed by a formal Wilsonian construction and a symmetry-enforced vertex selection rule that makes the result exact.

### 5.1 The Logistic Factor $\eta(1-\eta)$

The dissipation field is bounded: $\eta = 0$ (no structure, no maintenance) and $\eta = 1$ (all energy in maintenance, no available capacity) are the two fixed points of the RG flow. Any $\beta$-function for a bounded field must vanish at both fixed points.

When we integrate out a shell of fast modes at scale $\mu$, the curvature costs of those modes must be redistributed to the remaining system. Two factors govern this redistribution. The structure factor $\eta$ reflects that curvature being redistributed is proportional to the current maintenance level — more structure means more curvature cost carried by each shell. The capacity factor $1-\eta$ reflects that the remaining system can only absorb redistributed curvature if it has available capacity — as $\eta \to 1$, absorption capacity vanishes. The rate of change is proportional to the product,

$$
\frac{d\eta}{d\ln\mu} \propto -\eta(1-\eta).
$$

The negative sign reflects that coarse-graining (increasing $\mu$, moving to larger scales) increases effective dissipation: integrating out fast modes removes degrees of freedom that were performing maintenance, forcing the remaining system to bear more load. This logistic form is the unique lowest-order polynomial vanishing at both fixed points with the correct physics. At $\eta = 0$, the UV fixed point is stable — systems at low dissipation remain there under fine-graining. At $\eta = 1$, the IR fixed point is stable — systems flow toward maximum dissipation under coarse-graining.

### 5.2 The Tree-Level Coupling $\rho^*$

The proportionality constant — the coupling $K(d)$ such that $\beta = -\eta(1-\eta)K(d)$ — is determined by the curvature cost per RG shell. Three exact constraints fix this value.

Self-similarity (from the $\varphi$-sector) requires the curvature spectral density to be uniform in log-scale. If the curvature cost per unit of $\ln\mu$ varied with scale, there would be a preferred scale where curvature concentrates, violating the self-similar ground state. Therefore $dF/d\ln\mu = \rho_0 = \text{const}$.

Decade symmetry (from the $N$-sector) imposes $C_{10}$ on the curvature spectrum, partitioning the RG flow into 10 equivalent coarse-graining steps per RG period. The $C_{10}$ group acts transitively on the shell decomposition, so each shell carries identical curvature weight.

Eigenvalue normalization fixes the total curvature per period. One full RG period spans one decade in scale (a factor of 10). The total curvature distributed across this period equals the composite invariant $I = 4\pi\varphi^2$, which is the ground-state curvature of the Penrose eigenbranch (Section 3, T4 corollary). Self-similarity ensures this weight distributes uniformly across the period.

Combining these three constraints — uniform distribution across 10 equivalent shells with total curvature $I$ per period — gives

$$
\rho^* = \frac{I}{10} = \frac{4\pi\varphi^2}{10} \approx 3.29.
$$

This is the curvature cost per RG shell. The $\pi$-sector contributes $\kappa_\pi = 4\pi$ (angular closure on $S^2$). The $\varphi$-sector contributes $\varphi^2$ (the squared recursive eigenvalue). These multiply because the sectors operate in orthogonal subspaces of the curvature spectrum, composing multiplicatively as eigenvalues of a block-diagonal operator. The $N$-sector divides by 10 through the decade partition.

### 5.3 The Dimensional Correction $(d-2)\ln\varphi/2$

The tree-level coupling $\rho^*$ is derived at $d = 2$, the critical dimension where the infrared fixed point resides. For systems operating at $d > 2$, an additional contribution enters from the recursive sector's interaction with spatial dimension.

The $\varphi$-eigenmode is self-similar: under one recursion step (scale change by factor $\varphi$), the system maps to itself. In $d$ spatial dimensions, the number of degrees of freedom at scale $\mu$ scales as $\mu^d$, giving a recursive degeneracy $N(\varphi\mu)/N(\mu) = \varphi^d$. In the Wilsonian RG, integrating out modes with degeneracy $g$ contributes $(1/2)\ln g$ to the effective action per mode, so the total degeneracy contribution is $\delta K_{\text{total}}(d) = (d/2)\ln\varphi$.

At $d = 2$, the recursive degeneracy is $\varphi^2$, which is precisely the $\varphi$-sector eigenvalue already captured in the composite invariant $I = 4\pi\varphi^2$. The tree-level coupling $\rho^*$ already includes this contribution. The correction for $d > 2$ is the excess degeneracy,

$$
\delta K_{\text{correction}}(d) = \frac{d}{2}\ln\varphi - \frac{2}{2}\ln\varphi = \frac{d-2}{2}\ln\varphi.
$$

Each spatial dimension beyond $d = 2$ provides one additional direction for the recursive eigenmode to fluctuate. The full coupling is $K(d) = \rho^* + (d-2)\ln\varphi/2$. At $d = 2$, the correction vanishes and $K(2) = \rho^* = 3.29$. At $d = 3$, $K(3) = 3.29 + 0.241 = 3.531$, which generates the decade structure in three spatial dimensions.

### 5.4 The Critical Exponent $\nu = 1/\rho^*$

The critical exponent $\nu$ governs how coherence length diverges as systems approach organizational phase transitions: $\xi \sim |\eta - \eta_c|^{-\nu}$. In standard RG, the critical exponent is determined by the slope of the $\beta$-function at the fixed point where the transition occurs. The infrared fixed point of the dissipation flow is $(\eta^*, d^*) = (1, 2)$ — the black hole saturation state.

Near the IR fixed point, let $\varepsilon = 1 - \eta$ (small). Then

$$
\beta(\varepsilon) = -(1-\varepsilon)\varepsilon \left[\rho^* + \frac{d^* - 2}{2}\ln\varphi\right] \approx +\varepsilon \cdot \rho^*,
$$

where $d^* = 2$ causes the dimensional correction to vanish identically, and $(1-\varepsilon)\varepsilon \approx \varepsilon$ for small $\varepsilon$. The slope of $\beta$ at the fixed point is $\rho^*$, giving the correlation length exponent

$$
\nu = \frac{1}{\rho^*} = \frac{10}{4\pi\varphi^2} \approx 0.304.
$$

The exponent is $1/\rho^*$ rather than $1/K(d)$ for some ambient dimension $d$ because the critical exponent is evaluated at the fixed point, where $d = 2$ and the dimensional correction vanishes exactly. Every system approaching organizational collapse flows toward $(\eta = 1, d = 2)$ regardless of its starting dimension. The exponent is universal because it depends only on the constraint geometry ($\rho^*$), not on ambient dimensionality — the constraint-geometric analog of how critical exponents in standard statistical mechanics are determined by fixed-point structure rather than microscopic details.

### 5.5 The Complete $\beta$-Function

Assembling the four steps,

$$
\boxed{\beta(\eta, d) = \frac{d\eta}{d\ln\mu} = -\eta(1-\eta)\left[\frac{4\pi\varphi^2}{10} + \frac{d-2}{2}\ln\varphi\right].}
$$

| Term | Origin | Section |
|------|--------|---------|
| $\eta(1-\eta)$ | Bounded competition at fixed points | §5.1 |
| $4\pi$ | Gauss–Bonnet invariant of $S^2$ ($\pi$-sector) | §3.6 |
| $\varphi^2$ | Recursive eigenvalue ($\varphi$-sector) | §3.6 |
| $/10$ | Decade partition ($N$-sector, $C_{10}$) | §4 |
| $(d-2)\ln\varphi/2$ | Recursive degeneracy per extra dimension | §5.3 |

The flow has fixed points at $\eta = 0$ (UV-stable, vacuum) and $\eta = 1$ (IR-stable, black hole). The solution is $\eta(\mu) = [1 + A\mu^{K(d)}]^{-1}$ where $K(d) = \rho^* + (d-2)\ln\varphi/2$. At $d = 3$, $K(3) = 3.531$ generates factor-of-10 jumps in $\eta$ per decade in energy scale, reproducing the observed hierarchy $10^{-6} \to 10^{-3} \to 10^{-2} \to 10^{-1} \to 1$.

The $\beta$-function for $\eta$ couples to a flow equation for effective dimension,

$$
\frac{dd}{d\ln\mu} = -\frac{\eta}{\rho^*}\ln\varphi.
$$

At $\eta = 0$, dimension remains constant (vacuum preserves dimensionality). As $\eta$ increases, dimension decreases — organizational complexity drives dimensional reduction. At $\eta = 1$, the flow drives $d \to 2$. The coupled system $(\eta, d)$ flows from the UV fixed point $(0, 3)$ toward the IR fixed point $(1, 2)$.

### 5.6 Formal Wilsonian Derivation

The preceding construction assembled the $\beta$-function from physical and geometric arguments. The standard Wilsonian RG procedure, applied directly to the constraint functional, recovers $\rho^*$ as the tree-level coupling and $(d-2)\ln\varphi/2$ as the one-loop correction. The absence of higher-order corrections is established by the vertex selection rule in §5.8.

Consider the constraint functional $F[P]$ with UV cutoff at scale $\mu$. The modes of $P$ decompose into slow modes $P_<$ (scale $< \mu$) and fast modes $P_>$ (scale in the shell $[\mu, \mu + \delta\mu]$). The standard Wilsonian step integrates out $P_>$,

$$
e^{-F_{\text{eff}}[P_<]} = \int \mathcal{D}P_> \, e^{-F[P_< + P_>]}.
$$

Expanding around the saddle point $P_>^*(P_<)$,

$$
F_{\text{eff}}[P_<] = \underbrace{F[P_< + P_>^*]}_{\text{tree level}} + \underbrace{\tfrac{1}{2}\operatorname{Tr}_{\text{shell}} \ln F''_{>}[P_< + P_>^*]}_{\text{one loop}} + \cdots
$$

At tree level, the three exact constraints (self-similarity, decade symmetry, eigenvalue normalization) uniquely fix the curvature per shell to $\delta F_{\text{shell}} = I/10 = \rho^*$, giving $\beta_{\text{tree}}(\eta) = -\eta(1-\eta)\,\rho^*$.

At one loop, the Hessian $H = F''[P_0]$ inherits the sector decomposition. Because the three sectors penalize orthogonal curvature types, the Hessian is block-diagonal at leading order: $H \approx H_\pi \oplus H_\varphi \oplus H_N$. At $d = 2$, the one-loop contribution is already absorbed into $\rho^*$ — the factor $\varphi^2$ in the composite invariant reflects the recursive degeneracy at $d = 2$. For $d > 2$, the recursive degeneracy grows from $\varphi^2$ to $\varphi^d$, and the excess contribution is $(d-2)\ln\varphi/2$, recovering the dimensional correction.

### 5.7 Tree-Level Protection

The tree-level coupling $\rho^*$ is exact to all orders. Any correction to the curvature per shell would require violating at least one of the three defining constraints: a scale-dependent correction would break self-similarity ($\varphi$-sector), a shell-dependent correction would break decade symmetry ($C_{10}$), and a correction to the total curvature per period would contradict the eigenvalue theorem ($I = 4\pi\varphi^2$). Since all three are exact symmetries of the ground state, $\rho^* = I/10$ is protected against perturbative corrections at every order.

### 5.8 Symmetry Protection and Loop Truncation

The dimensional correction is one-loop exact. This is not an approximation truncated at leading order — it is a selection rule enforced by the recursion symmetry of the constraint functional.

The recursion $T_\varphi: \mu \to \varphi\mu$ is an exact symmetry of the constraint functional on the Penrose eigenbranch: it maps the ground state $P_0$ to itself and modes to modes with eigenvalue scaled by $\varphi^2$, the recursive sector's eigenvalue derived from the self-consistency equation $x = 1 + 1/x$ (§2.2). At the self-similar ground state, the constraint functional therefore satisfies the exact identity

$$
F[P_0 + T_\varphi \delta P] = \varphi^2 \, F[P_0 + \delta P],
$$

where the scaling exponent $\varphi^2$ is inherited from the $\varphi$-sector eigenvalue. Now expand $F$ around $P_0$ in powers of the fluctuation $\delta P$,

$$
F[P_0 + \delta P] = F[P_0] + \sum_{n \geq 1} \frac{1}{n!} \, g_n[\delta P^{\,n}],
$$

where $g_n$ denotes the $n$-linear vertex functional (the $n$-th functional derivative of $F$ evaluated at the ground state). Under the recursion symmetry, $T_\varphi$ scales $\delta P$ so that each $n$-th order term picks up a factor $\varphi^n$. Applying the exact identity and matching coefficients order by order,

$$
\varphi^n \, g_n = \varphi^2 \, g_n \quad \Rightarrow \quad g_n(\varphi^n - \varphi^2) = 0.
$$

Since $\varphi$ is irrational, $\varphi^n \neq \varphi^2$ for all $n \neq 2$. Therefore all vertices beyond quadratic order vanish identically at the self-similar ground state:

$$
g_n = 0 \quad \text{for } n > 2.
$$

The fluctuation theory about the self-similar ground state is exactly Gaussian.

This has a direct Wilsonian interpretation. Higher-loop corrections to the effective action arise only from non-Gaussian cumulants generated by cubic and higher vertices in the saddle-point expansion (§5.6). Because the recursion symmetry forbids all such vertices at the fixed point, the functional integral over fast modes terminates at the Gaussian determinant — the one-loop term $\frac{1}{2}\operatorname{Tr}_{\text{shell}} \ln F''_>$ is the final contribution. No higher-loop renormalization of the dissipation coupling exists.

The $\beta$-function

$$
\beta(\eta, d) = -\eta(1-\eta)\left[\rho^* + \frac{d-2}{2}\ln\varphi\right]
$$

therefore receives no perturbative corrections beyond what is written. The tree-level coupling is protected by the three geometric constraints (§5.7). The one-loop correction is protected by the recursion symmetry's vertex selection rule. Every constant is geometrically forced, and no free parameters enter.

## Part II — Physical Evidence

The constraint geometry makes quantitative predictions with no adjustable parameters. This part tests three of them against independent datasets: white dwarf collapse trajectories and cooling anomalies (Section 6), quasicrystal experiments realizing all three sectors in a single device (Section 7), and black hole spin populations from gravitational wave catalogs (Section 8).

## 6. White Dwarf Collapse

White dwarfs accreting toward the Chandrasekhar limit[^9] $M_{\text{Ch}} = 1.36 M_{\odot}$ provide a quantitative test of the framework's two distinct thresholds. The RG flow solution $\eta(\mu) = [1 + A\mu^{K(d)}]^{-1}$ from Section 5 determines $\eta$ and $d$ at each mass, and the total organizational overhead follows from how the constraint functional's curvature cost scales with these parameters. The complexity multiplier quantifying this overhead is

$$
M(\eta,d) = \varphi^{2^{d-2}} \times (1-\eta)^{-\rho^*},
$$

where the dimensional factor $\varphi^{2^{d-2}}$ captures how recursive degeneracy compounds across dimensions (each dimension contributes a factor of $\varphi$ to the mode count, and these compound exponentially), and the bankruptcy factor $(1-\eta)^{-\rho^*}$ captures how the remaining capacity $(1-\eta)$ to absorb curvature vanishes with exponent $\rho^*$ — the same coupling constant that governs the $\beta$-function. The first factor decreases mildly as $d$ drops from 3 toward 2. The second diverges catastrophically as $\eta$ approaches unity.

Numerical integration from stable white dwarfs through collapse yields the following trajectory (using constant radius $R \approx 5000$ km from electron degeneracy pressure):

| $M$ $(M_{\odot})$ | $R_S/R$ | $\eta$ | $d$ | $\varphi^{2^{d-2}}$ | $(1-\eta)^{-\rho^*}$ | $M(\eta,d)$ | $\eta \times M$ | Status |
|-------------------|---------|--------|-----|---------------------|---------------------|-------------|-----------------|---------|
| 0.60 | $3.6 \times 10^{-4}$ | 0.066 | 2.97 | 2.61 | 1.24 | 3.2 | 0.21 | Stable |
| 1.00 | $6.0 \times 10^{-4}$ | 0.27 | 2.87 | 2.52 | 2.90 | 7.3 | 2.0 | Normal |
| 1.17 | $7.0 \times 10^{-4}$ | 0.46 | 2.78 | 2.42 | 5.66 | 13.7 | 6.3 | **Anomaly** |
| 1.30 | $7.8 \times 10^{-4}$ | 0.63 | 2.70 | 2.35 | 12.4 | 29.1 | 18.3 | Critical |
| 1.35 | $8.0 \times 10^{-4}$ | 0.97 | 2.53 | 2.15 | 229 | 492 | 477 | Collapse |

The trajectory reveals the mechanism. Geometric compression $R_S/R$ increases by a factor of 2.2 from $M = 0.60$ to $1.35 M_{\odot}$ — mild gravitational strengthening. Meanwhile, organizational complexity $\eta \times M$ explodes by a factor of 2200. This 1000-fold disparity indicates that information bankruptcy, not gravitational compression alone, drives instability. The dimensional factor $\varphi^{2^{d-2}}$ drops modestly from 2.61 to 2.15 as $d$ flows from 2.97 to 2.53 — barely 20% variation. The bankruptcy factor $(1-\eta)^{-\rho^*}$ generates the explosion: from 1.24 at stable masses to 229 near collapse, a 185-fold increase.

The trajectory passes through two distinct thresholds. The observational anomaly at $R/R_S = 10^3$ from analysis of 7,515 Gaia DR3 white dwarfs[^10] corresponds to $M \approx 1.17 M_{\odot}$ where $\eta = 0.46$ and $(1-\eta)^{-\rho^*} = 5.66$. This marks the structural saturation threshold $\rho^*/10 \approx 0.329$, where discrete closure can no longer remain soft. Before this threshold, complexity overhead grows by a factor of 3.6 from $M = 0.6$ to $1.17 M_{\odot}$. After crossing it, overhead explodes by a factor of 36 from $M = 1.17$ to $1.35 M_{\odot}$. The 995 objects in the anomaly zone ($R/R_S \in [700, 1000)$) exhibit a median cooling-age excess of $+76$ Myr ($14.5\sigma$, Wilcoxon $p = 4.27 \times 10^{-84}$), appearing systematically older than mass- and temperature-matched references — consistent with a cooling delay in which the object remains hotter than expected for its true age. Extension to ultra-massive tracks reveals a $+345$ Myr excess in the 500–700 bin ($p = 1.5 \times 10^{-6}$). The full analysis, including dual methodology for different mass regimes and systematic checks on core composition, is developed in [Repair as Local Optimization in Constraint Geometry](/repair-as-local-optimization-in-constraint-geometry). Candidate mechanisms include enhanced neutrino emission, crystallization energy release, $^{22}$Ne settling[^11], and GR corrections to the cooling rate — the framework predicts the threshold location and sharpness without committing to a specific microphysical channel.

The collapse at $\eta \approx 0.97$ marks approach to true maintenance bankruptcy at $\nu = 1/\rho^* \approx 0.304$, where no sector can absorb further curvature. White dwarfs do not smoothly flow to the $(\eta=1, d=2)$ black hole fixed point. Instead, information bankruptcy forces a discontinuous organizational jump — the white dwarf transitions to neutron degeneracy at $\eta \sim 0.3$, $d \sim 2.5$, with organizational complexity dropping by a factor of 207.

The energy cost of this reorganization follows from Landauer's principle. Counting the bits required to reorganize phase space information from electron to neutron degeneracy ($\Delta N_{\text{bits}} \approx 4.5 \times 10^{58}$) at the shock temperature $T \sim 10^9$ K observed during supernova breakout gives a transition energy of $E_{\text{trans}} = 4.3 \times 10^{44}$ J, matching observed Type Ia supernova energies[^12] to within measurement uncertainty. The full derivation is developed in a [companion paper](/type-ia-supernova-information-theoretic-energetics) and requires only four observational inputs (Chandrasekhar mass, white dwarf radius, neutron star radius, and shock temperature). No parameters from the constraint geometry enter the energy calculation — it is a pure Landauer counting argument. The framework's role is to predict *when* the transition occurs (at the $(1-\eta)^{-\rho^*}$ divergence) and *why* (information bankruptcy under triadic tension).

## 7. Quasicrystal Realization

Experiments with exciton–polariton condensates on Penrose tiling lattices[^13] realize the $\pi$–$\varphi$–$10$ constraint geometry in a single device. A Penrose tiling potential imprinted in a GaAs microcavity using a spatial light modulator, pumped non-resonantly, forms exciton–polariton condensates at the vertices. The resulting structure exhibits aperiodic order with $C_{10}$ rotational symmetry, with reciprocal-space photoluminescence showing sharp Bragg peaks arranged in tenfold symmetry — a two-dimensional polariton quasicrystal that directly implements all three sectors simultaneously.

The $\pi$-sector manifests in reciprocal space, where the Bragg peaks lie on circular rings with angular positions separated by $\Delta\theta = 2\pi/10$. The system selects equal angular spacing with period $2\pi$, discretized into ten coherent directions by $C_{10}$ symmetry — the isotropic closure constant $\pi$ appearing in the circular diffraction shells. The $\varphi$-sector manifests through the Penrose tiling's inflation–deflation rules with scale factor $\varphi$, where all length and area ratios of the prototiles are powers of $\varphi$. This is exactly the inflation–subdivision consistency condition of Appendix A: coarse-graining tiles by $\varphi$ yields the same pattern at larger scale, subdividing by $\varphi$ yields the same pattern at smaller scale, and the fixed point of that recursion is $\varphi$. The $N$-sector manifests through the tenfold diffraction symmetry — the $C_{2\times5}$ sector with binary and pentagonal coherence meeting at decade symmetry.

The experiment demonstrates near-perfect delocalization and phase synchronization of the polariton fluid over more than 100 times the healing length at a particular pump window, well beyond single-site scales. This mesoscopic coherence emerges exactly when the geometry aligns with the constraint manifold — the system rides the $\pi$–$\varphi$–$10$ structure rather than fighting it.

Two additional platforms corroborate this convergence. In solid-state quasicrystals, decagonal Al–Co–Ni alloys grown in the presence of rigid obstacles exhibit defect-free engulfment[^14] through phasonic flexibility[^15] — internal rearrangements unique to aperiodic structures that allow local reconfiguration without breaking global symmetry. Phasonic strain enables the quasicrystal to locally adjust the inflation–subdivision balance while preserving the global fixed point $\varphi$, providing a materials-level demonstration that the $(\pi, \varphi, 10)$ constraint manifold acts as a geometric attractor. In programmable optomechanical lattices[^16], nanomechanical resonators coupled by optically driven synthetic magnetic flux reproduce the full triplet structure: synthetic Lorentz curvature induces the $\pi$-sector, recursive minibands realize the $\varphi$-sector, and discrete chiral activation windows align with the decade structure — transition points lying near fractional partitions $\alpha \approx 0.329$ and $0.671$.

Across three radically different substrates — tight-binding electrons, driven-dissipative quantum fluids, and programmable mechanical resonators — the same eigenvalue skeleton appears.

## 8. Black Hole Spin Populations

The dissipation field naturally produces a bimodal spin distribution in black hole populations. Systems that undergo coherent collapse or hierarchical mergers achieve the high-coherence fixed point ($\eta \approx 1$, $d \to 2$), yielding high-spin black holes. Systems with weak compression or common-envelope damping remain at the low-coherence attractor ($\eta < 1$, $d \approx 3$), producing low-spin remnants. The relative population of the two attractors is governed by the RG coupling $\rho^*$, which sets the barrier height between them: the $\beta$-function's coupling determines how strongly the flow drives systems toward the IR fixed point, and the fraction that reaches it follows a Boltzmann-like partition where $\rho^*$ plays the role of the effective energy barrier in units of the flow's "temperature." This gives

$$
f_{\text{high}} \approx \frac{1}{1 + \rho^*} = \frac{1}{1 + 3.29} \approx 0.233,
$$

with mass-weighted corrections pushing this into the 0.28–0.34 range for equal-mass binaries, yielding a central expectation of 0.329.

Analysis of 164 binary black hole mergers from combined GWTC catalogs[^17] (GWTC-1 through GWTC-4.0, 219 total events) shows consistency with both predictions within measurement uncertainty. The base prediction (0.233) aligns with the observed fraction at $\chi_{\text{eff}} > 0.15$, where 23.8% $\pm$ 3.3% of systems show aligned high spins — a deviation of 0.1$\sigma$. The mass-weighted prediction (0.329) matches at $\chi_{\text{eff}} > 0.10$, where 32.9% $\pm$ 3.7% of systems qualify.

The distribution's shape supports the framework's predictions. D'Agostino-Pearson testing rejects Gaussian normality ($p < 0.0001$), with positive kurtosis (1.79) indicating heavier tails and positive skew (0.96) indicating asymmetry toward higher spins — statistics supporting discrete constraint-governed behavior rather than continuous dynamics. The spin population structure shows 56.7% at low spin ($|\chi| < 0.1$), 34.8% at mid spin ($0.1 \leq |\chi| < 0.3$), and 8.5% at high spin ($|\chi| \geq 0.3$), consistent with bimodal dynamics from dissipation field competition between high-coherence and low-coherence attractors.

Strong compression (massive stars, second-generation black holes, gas-rich collapsars) follows rapid approach to $d = 2$ with high spin retention ($\chi \approx 0.7$–$1.0$), while weak compression (common-envelope remnants, low-mass cores) exhibits slow approach with damped spin ($\chi \approx 0$–$0.2$). The dimensional flow exponent $1/\rho^* \approx 0.304$ determines how rapidly objects converge to the $d = 2$ fixed point, predicting the tail shape of spin distributions.

## Part III — Implications

Triadic tension has consequences beyond the $\beta$-function and its empirical confirmations. This part develops two: the irreducible cycling that frustration forces on any system attempting to correct across all three sectors (Section 9), and a summary of what is proven, what is confirmed, and what would falsify the framework (Section 10).

## 9. Curl, Cycling, and Transient Balance

Triadic tension (Section 3) establishes that the three curvature sectors are anticorrelated: tightening any one forces the others to carry more curvature. A direct consequence is that balanced states — configurations where all three sector curvatures are comparable — are transversely unstable. The system cycles through such configurations rather than settling into them, because adjusting any one sector redistributes curvature to the others.

The mechanism connecting triadic tension to cycling has a rigorous expression through the curl-maintenance functional developed in [The Geometry of Self-Correction](/the-geometry-of-self-correction). When constraints are state-dependent — when admissible correction directions depend on where the system currently sits in configuration space — projection of a gradient proposal onto the feasible set generically introduces curl into the effective dynamics. The curl-maintenance functional,

$$
\mathcal{M}_{\text{curl}}(F) = \frac{1}{2} \int |d\alpha|^2 \, dV,
$$

where $\alpha = F^\flat$ is the 1-form dual to the correction field, quantifies the $L^2$-size of the exterior derivative of the implemented correction. On compact manifolds with trivial first cohomology ($H^1(M) = 0$), the Hodge Laplacian on 1-forms has a positive spectral gap $\lambda_1 > 0$, and when the projection defect has persistent magnitude that cannot be represented purely as divergence, the curl-maintenance satisfies

$$
\mathcal{M}_{\text{curl}}(F) \geq \frac{\kappa}{2} |\delta\alpha|^2_{L^2} > 0,
$$

for some $\kappa > 0$ determined by the spectral gap. This is the formal statement that cycling is structural rather than parametric: the curl floor is set by the Hodge spectral gap, and no gain scheduling, local smoothing, or parameter tuning can eliminate cycling without changing the feasibility map itself.

The connection to triadic tension is direct. Incompatible minima (T1) force state-dependent constraints — the admissible correction directions depend on which sector is currently dominant. These state-dependent constraints produce non-integrable projections: the implemented correction field cannot be written as the gradient of any scalar function. Non-integrable projections force irreducible curl. Irreducible curl forces continuous maintenance cost. The chain is

$$
\text{Incompatible minima} \to \text{State-dependent constraints} \to \text{Non-integrable projection} \to \text{Irreducible curl} \to \text{Cycling.}
$$

Empirical confirmation comes from direct numerical simulation of three-dimensional Navier–Stokes turbulence at Reynolds number $Re_\lambda \approx 430$. In regions of high vorticity, states where stretching and multiscale recursion are locally balanced show residence times of 1–2 timesteps across all tested thresholds $\varepsilon \in \{0.03, 0.05, 0.08, 0.10\}$. Escape from balance typically occurs by loss of local recursive coherence rather than immediate collapse of stretching — consistent with the triadic mechanism where correction in one sector destabilizes another. In a minimal field-theoretic setting, [magnetic helicity as a curl inventory](/preserved-curl-scale-separation-and-topological-leakage) exhibits the same asymmetry quantitatively: helicity (topology) decays slower than energy (amplitude) by a factor controlled entirely by scale separation, and a phase boundary separates regimes where topological protection holds from regimes where it leaks. The repair-augmented RG system developed in [Repair as Local Optimization in Constraint Geometry](/repair-as-local-optimization-in-constraint-geometry) gives this cycling dynamical teeth: a coupled $(\eta, d, r)$ system whose oscillatory solutions arise generically from irreducible curl, delayed repair actuation, and the geometric overhead floor, with empirical validation from white dwarf cooling thresholds.

The preceding sections establish four distinct objects. It is worth separating them cleanly, because their logical roles differ:

| Concept | Scope | Status |
|---------|-------|--------|
| Triadic tension | Global structural theorem | Proved (Section 3): no configuration minimizes two sectors simultaneously |
| Dissipation flow | Global dynamical law | Derived (Section 5): exact $\beta$-function with no free parameters |
| Cycling | Local dynamical consequence | Proved (above): irreducible curl from state-dependent constraints |
| Critical approach regime | Where cycling becomes dominant | Defined below |

The **critical approach regime** is the interval of the dissipation flow in which curvature tradeoffs are binding, absorption capacity remains nonzero, and no integrable correction exists. It is bounded by two thresholds. The entry condition is structural saturation at $\rho^*/10 \approx 0.329$, where the discrete sector becomes binding and $C_{10}$ closure can no longer remain soft (Section 6). The exit condition is maintenance bankruptcy at $\eta \to 1$, where the logistic factor $\eta(1-\eta)$ drives absorption capacity to zero. Between these thresholds, $\eta$ is large enough that sector tradeoffs are binding, yet $1-\eta$ is not negligible — the system lingers.

Inside this regime, the coexistence of slowing flow and irreducible frustration produces oscillatory dynamics as a structural consequence, not a modeling choice. Near $\eta \to 1$, the $\beta$-function behaves as $\beta \sim -(1-\eta)[\rho^* + (d-2)\ln\varphi/2]$, so changes in $\eta$ become small per unit RG time. Simultaneously, strict frustration (T2) prevents convergence to any stable compromise — corrections that reduce one sector increase pressure in the other two. The result is cycling through transient balance configurations under a slowing flow: oscillation as the normal form of frustrated correction. This is the structural reason that the richest dynamics concentrate in approach rather than at equilibrium or after collapse.

The triadic competition also explains why dimensionality is an energetic liability. Each additional degree of freedom introduces new curvature modes requiring continuous maintenance, and these penalties scale superlinearly with dimension. Finite systems cannot afford high-dimensional curvature indefinitely. When maintenance cost rises beyond sustainable levels, coherent systems reduce dimensionality by projection onto lower-dimensional manifolds — curvature minimization finding the lowest-maintenance configuration compatible with the constraints. Near gravitational horizons, effective dimension flows from 3 to 2 as radial information flow freezes while tangential flow remains free (Appendix B). The holographic principle[^18][^19][^20] — entropy scaling with area rather than volume — reflects this dimensional economics. Systems consistently flow toward the lowest dimension their constraints permit.

## 10. Discussion and Conclusion

The framework rests on a chain of proven results. The triadic tension theorem (Section 3) establishes that three curvature sectors — angular, recursive, and discrete — cannot be simultaneously minimized (T1), are anticorrelated (T2), are genuinely independent (T3), and produce nonzero ground-state curvature (T4) — the irreducible curvature cost that every coherent configuration must continuously maintain, and whose per-shell value $\rho^* = I/10$ becomes the coupling constant of the dissipation flow. The negative selection argument (Section 4) forces the discrete sector to carry $C_{10} = C_2 \times C_5$ symmetry — the unique cyclic group surviving the crystallographic restriction, $\varphi$-compatibility, and binary closure. The dissipation $\beta$-function (Section 5) follows from standard Wilsonian renormalization, with every constant tracing to a geometric necessity and a vertex selection rule enforced by the recursion symmetry (§5.8) making the one-loop result exact.

Three independent lines of quantitative evidence support the framework's predictions. The white dwarf cooling anomaly at $R/R_S = 10^3$ in 7,515 Gaia DR3 objects matches the structural saturation threshold $\rho^*/10 \approx 0.329$ at $14.5\sigma$ significance (Section 6). The Type Ia supernova energy of $4.3 \times 10^{44}$ J derived from Landauer bit-counting matches observed values. Penrose polariton quasicrystals realize all three constraint sectors in a single device, with corroboration from solid-state quasicrystal growth and optomechanical synthetic flux lattices (Section 7). Black hole spin population fractions from 164 GWTC binary mergers match predictions derived from $\rho^*$ within measurement uncertainty (Section 8).

The framework is falsifiable at multiple levels. If the off-diagonal covariances $\Sigma_{ij}$ are measured to be non-negative for any pair of sectors, T2 fails and the frustration picture collapses. If a configuration is found that simultaneously minimizes two sectors, T1 fails. If a linear relation among the three curvature observables exists on $\Omega$, T3 fails. If the angular manifold's effective geometry differs from $S^2$, the $\kappa_\pi = 4\pi$ identification fails and $I$ changes. Each of these is checkable, and Section 3.8 details the specific failure modes and how to test them.

The constraint functional admits multiple eigenbranch families beyond the Penrose branch: Ammann–Beenker $(\pi, 1+\sqrt{2}, 8)$, dodecagonal $(\pi, 2+\sqrt{3}, 12)$, and metallic-mean families. These exist as metastable states with higher ground-state curvature. The Penrose branch dominates because $\varphi$ achieves the global minimum of the Lagrange spectrum (Hurwitz's theorem), providing maximal resonance protection among all irrationals. Whether this dominance is fundamental or reflects observational selection remains an open question, though the number-theoretic argument is strong.

The framework's deepest claim is that constraint, not freedom, generates complexity. Most frameworks start with symmetry and ask what it permits. The triadic tension theorem starts with incompatibility and asks what it forces. Three curvature sectors that cannot be simultaneously minimized produce a frustrated ground state with nonzero curvature $I = 4\pi\varphi^2$. That curvature determines the RG coupling $\rho^* = I/10$. That coupling governs the $\beta$-function. The $\beta$-function determines how dissipation flows across scales. And the flow produces the organizational hierarchy — from elementary particles at $\eta \sim 10^{-6}$ through biological systems at $\eta \sim 10^{-1}$ to black holes at $\eta = 1$ — as a sequence of approximately stable plateaus in a renormalization group trajectory.

Curvature is complexity. Coherence is what a system can afford to maintain. Everything begins with the frustration.

## Appendices

The following appendices provide two derivations referenced in the main text: the emergence of $\varphi$ as the fixed point of recursive curvature (Appendix A), and the dimensional flow equation governing effective dimension near gravitational horizons (Appendix B).

### Appendix A — Derivation of $\varphi$ from Recursive Curvature

The golden ratio emerges as the fixed point of recursive curvature when inflation and subdivision are required to commute. Working with separable solutions $P(r,\theta) = R(r)\Theta(\theta)$ and focusing on the log-radial sector, the key requirement is inflation–subdivision consistency: coarse-graining by a factor $\sigma$ and then subdividing by $\sigma$ should reproduce the same radial profile as subdividing first and inflating afterwards. This translates to the functional relation

$$
R(\sigma r) = R(r) + R(r/\sigma).
$$

The information content at scale $\sigma r$ equals the sum of contributions from scale $r$ and scale $r/\sigma$ — a recursive decomposition across scales. Assuming a power-law ansatz $R(r) \propto r^s$ and substituting,

$$
(\sigma r)^s = r^s + (r/\sigma)^s,
$$

which simplifies to $\sigma^s = 1 + \sigma^{-s}$. Multiplying both sides by $\sigma^s$ and defining $x = \sigma^s$ gives

$$
x^2 = x + 1,
$$

the defining equation of the golden ratio. The positive solution is

$$
x = \frac{1 + \sqrt{5}}{2} = \varphi \approx 1.618.
$$

The power-law ansatz is justified by the scale-invariance of the $\varphi$-sector: if the log-radial curvature penalty $\int(\partial_\ell \ln P)^2 P\,dA$ is to be minimized under rescaling, the solution must be self-similar, which forces power-law behavior. In curved spacetime where effective dimension $d_{\text{eff}}$ varies with radius, the same analysis yields $\sigma = \varphi^{1/d_{\text{eff}}}$. Near horizons where $d_{\text{eff}} \to 2$, this gives $\sigma \to \sqrt{\varphi}$.

### Appendix B — Dimensional Flow

Effective dimension $d_{\text{eff}}$ counts the number of independent directions along which information can propagate at a given scale, defined operationally through the scaling of active information channels: $N(R) \sim R^{d_{\text{eff}}(R)}$. In flat space far from gravitational sources, $d_{\text{eff}} = 3$. Near a gravitational horizon, radial information flow becomes increasingly constrained while tangential flow remains free, causing $d_{\text{eff}}$ to decrease.

The Schwarzschild metric makes this explicit. Proper radial distance diverges as $ds_r = dr/\sqrt{1 - r_s/r}$ while tangential spacing $ds_\theta = r\,d\theta$ remains finite. The radial information flow rate follows $I_r(r) = c(1 - r_s/r)$, which vanishes at the horizon. The effective dimension flows as

$$
d_{\text{eff}}(R) = 2 + \left(1 - \frac{r_s}{R}\right),
$$

from 3 in flat space toward 2 at the horizon. This dimensional flow connects to holographic behavior: entropy scaling with area rather than volume reflects the reduction to an effective 2D surface. Dimensional flow reduces curvature — by projecting from 3D to 2D, the system eliminates the radial curvature contribution entirely, achieving a minimal-curvature configuration through dimensional collapse.

The coupled dimensional flow equation,

$$
\frac{dd}{d\ln\mu} = -\frac{\eta}{\rho^*}\ln\varphi,
$$

captures how organizational complexity drives dimensional reduction. At $\eta = 0$, dimension remains constant. As $\eta$ increases toward 1, the flow drives $d \to 2$, consistent with holographic dimensional reduction at horizons. The coupled system $(\eta, d)$ flows from $(0, 3)$ toward $(1, 2)$, and the trajectory through this space determines the organizational state of any system.

## References

[^1]: Amari, S.-I. (2016). *Information Geometry and Its Applications*. Springer Japan. <https://doi.org/10.1007/978-4-431-55978-8>

[^2]: Frieden, B. R. (2004). *Science from Fisher Information: A Unification*. Cambridge University Press. <https://doi.org/10.1017/CBO9780511616907>

[^3]: Jaynes, E. T. (1957). "Information theory and statistical mechanics." *Physical Review*, 106(4), 620–630. <https://doi.org/10.1103/PhysRev.106.620>

[^4]: Penrose, R. (1974). "The role of aesthetics in pure and applied mathematical research." *Bulletin of the Institute of Mathematics and its Applications*, 10, 266–271.

[^5]: Baake, M., & Grimm, U. (2013). *Aperiodic Order: Volume 1, A Mathematical Invitation*. Cambridge University Press. <https://doi.org/10.1017/CBO9781139025256>

[^6]: Senechal, M. (1995). *Quasicrystals and Geometry*. Cambridge University Press. ISBN: 978-0-521-37259-6

[^7]: Steinhardt, P. J., & Ostlund, S. (Eds.). (1987). *The Physics of Quasicrystals*. World Scientific. <https://doi.org/10.1142/0391>

[^8]: Hurwitz, A. (1891). "Über die angenäherte Darstellung der Irrationalzahlen durch rationale Brüche." *Mathematische Annalen*, 39(2), 279–284. <https://doi.org/10.1007/BF01206656>

[^9]: Chandrasekhar, S. (1931). "The maximum mass of ideal white dwarfs." *Astrophysical Journal*, 74, 81–82. <https://doi.org/10.1086/143324>

[^10]: Gentile Fusillo, N. P., Tremblay, P.-E., Cukanovaite, E., et al. (2021). "A catalogue of white dwarfs in Gaia EDR3." *Monthly Notices of the Royal Astronomical Society*, 508(3), 3877–3896. <https://doi.org/10.1093/mnras/stab2672>

[^11]: Camisassa, M. E., Althaus, L. G., Córsico, A. H., et al. (2016). "The impact of 22Ne diffusion in white dwarf cooling." *Astronomy & Astrophysics*, 595, A1. <https://doi.org/10.1051/0004-6361/201628303>

[^12]: Hillebrandt, W., & Niemeyer, J. C. (2000). "Type Ia supernova explosion models." *Annual Review of Astronomy and Astrophysics*, 38, 191–230. <https://doi.org/10.1146/annurev.astro.38.1.191>

[^13]: Alyatkin, S., Sigurdsson, H., Askitopoulos, A., Töpfer, J. D., Cilibrizzi, P., Ohadi, H., & Lagoudakis, P. G. (2024). "Quantum fluids of light in 2D artificial reconfigurable aperiodic crystals with tailored coupling." *Nature Communications*, 15, 6602. <https://doi.org/10.1038/s41467-024-50923-8>

[^14]: Wang, J., Gastaldi, J., Durand, A., Meresse, Y., & Zurkirchen, M. (2024). "Defect-Free Growth of Decagonal Quasicrystals around Obstacles." *Physical Review Materials*, 8(12), 125601. <https://doi.org/10.1103/PhysRevMaterials.8.125601>

[^15]: Lubensky, T. C., Socolar, J. E. S., Steinhardt, P. J., Bancel, P. A., & Heiney, P. A. (1986). "Distortion and peak broadening in quasicrystal diffraction patterns." *Physical Review Letters*, 57(12), 1440–1443. <https://doi.org/10.1103/PhysRevLett.57.1440>

[^16]: del Pino, J., Slim, J. J., & Verhagen, E. (2022). "Synthetic magnetism for photon fluids." *Nature*, 606, 82–87. <https://doi.org/10.1038/s41586-022-04720-2>

[^17]: The LIGO Scientific Collaboration, the Virgo Collaboration, & the KAGRA Collaboration (2023). "Population of merging compact binaries inferred using gravitational waves through GWTC-3." *Physical Review X*, 13, 011048. <https://doi.org/10.1103/PhysRevX.13.011048>. Analysis here uses combined GWTC-1 through GWTC-4.0 catalogs (219 events, 164 BBH mergers) from GWOSC.

[^18]: 't Hooft, G. (1993). "Dimensional reduction in quantum gravity." arXiv preprint gr-qc/9310026. <https://doi.org/10.48550/arXiv.gr-qc/9310026>

[^19]: Susskind, L. (1995). "The world as a hologram." *Journal of Mathematical Physics*, 36(11), 6377–6396. <https://doi.org/10.1063/1.531249>

[^20]: Bousso, R. (2002). "The holographic principle." *Reviews of Modern Physics*, 74(3), 825–874. <https://doi.org/10.1103/RevModPhys.74.829>
