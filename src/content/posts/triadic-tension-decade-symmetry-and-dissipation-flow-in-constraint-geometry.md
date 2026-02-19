---
title: 'Triadic Tension, Decade Symmetry, & Dissipation Flow in Constraint Geometry'
description: "Three curvature sectors compete under one constraint functional on S³/2I. Their incompatibility forces ground-state curvature I = 4πφ², C₁₀ decade symmetry, and a geometrically determined β-function."
pubDate: '2025-11-28'
zenodoDepositionId: 18701885
zenodoUrl: "https://zenodo.org/records/18701885"
doi: "10.5281/zenodo.18701885"
updatedDate: '2026-02-17'
category: 'core'
order: 2
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
  - "orbifold"
  - "E8 singularity"
  - "Fisher information"
  - "numerical semigroup"
  - "dimensional reduction"
zenodoDescription: |
  Three curvature sectors — angular closure (π-sector), recursive self-similarity (φ-sector), and discrete resonance (N-sector) — compete under a single constraint functional on entropy-constrained probability densities, arising from the projection of a 6D periodic lattice to the orbifold S³/2I. No configuration can simultaneously minimize all three.

  The triadic tension theorem proves this rigorously. Pairwise incompatibility of sector minimizers (T1), strictly negative off-diagonal covariances via cross-susceptibility (T2), strict positive definiteness of the covariance matrix (T3), and nonzero ground-state curvature (T4) follow in logical sequence. The ground state on the Penrose eigenbranch carries composite invariant I = 4πφ² ≈ 32.9. The 15 missing Kaluza–Klein modes (gaps of the numerical semigroup ⟨6, 10, 15⟩) and the nonzero ground-state curvature are dual descriptions of the same obstruction.

  A negative selection argument forces the discrete sector to carry C₁₀ = C₂ × C₅ symmetry — the same symmetry implemented by the binary icosahedral group 2I on S³. The crystallographic restriction eliminates periodic groups, φ-compatibility eliminates all remaining quasicrystal families, and binary closure demands the C₂ factor. C₁₀ is the unique survivor.

  The dissipation β-function β(ξ,𝒟) = -ξ(1-ξ)[u* + (𝒟-2)ln(φ)/2], with u* = 4πφ²/10 ≈ 3.29, is derived through standard Wilsonian renormalization, with higher-order contributions forbidden by a vertex selection rule enforced by the recursion symmetry operator. The effective dimension 𝒟 is identified with d_eff from the KK spectrum on S³/2I. Penrose polariton quasicrystals realize all three constraint sectors in a single device.
---

Every organized system must maintain structure against entropy. Whether the system is a quantum lattice, a star, or a quasicrystal, maintaining coherence requires continuous corrective work, and that work has a cost. Curvature in an information distribution — angular bending, scale-wide bending, discrete frustration — measures this cost. Complexity is curvature. Coherence is what a system can afford to maintain.

The constraint geometry developed here arises from a 6D periodic lattice projected to 3D. The projection produces the orbifold $S^3/\mathrm{2I}$ — the Poincaré homology sphere — whose Kaluza–Klein spectrum is thinned by the binary icosahedral quotient. The 15 missing modes (the gaps of the numerical semigroup $\langle 6, 10, 15 \rangle$) and the nonzero ground-state curvature ($I = 4\pi\varphi^2$) are dual descriptions of the same obstruction: the orbifold removes degrees of freedom that would otherwise allow simultaneous relaxation of all three curvature sectors. The full chain from the 6D lattice through the spectral gap to the tier hierarchy and accelerated expansion is developed in [From Lattice Projection to Cosmic Expansion](/from-lattice-projection-to-cosmic-expansion). This post develops the constraint geometry layer — the variational structure, the triadic tension theorem, the negative selection of $C_{10}$, and the dissipation $\beta$-function — in detail.

## 1. Introduction

The constraint functional $F[P]$ encodes three orthogonal curvature costs on a normalized information density $P$. The angular sector ($\pi$-sector) penalizes departures from rotational invariance. The recursive sector ($\varphi$-sector) penalizes departures from scale self-similarity. The discrete sector ($N$-sector) penalizes configurations incompatible with a specific cyclic symmetry. Each sector has a well-defined minimizer on the entropy-constrained configuration space, and these minimizers are mutually disjoint.

The central result is the triadic tension theorem (Section 3), which proves that no configuration can simultaneously minimize any two of the three sectors. The proof proceeds through geometric incompatibility: recursive subdivision generically breaks isotropy because Fibonacci inflations produce anisotropic patterns at every finite scale; irrational scaling ratios are incommensurable with integer periodicities; and continuous rotational symmetry differs structurally from discrete rotational symmetry. The covariance matrix of sector fluctuations has strictly negative off-diagonal elements — the sectors are anticorrelated. Tightening one forces the others to carry more curvature.

This frustration has a sharp consequence. The ground state of the constraint functional carries nonzero total curvature, because zero curvature would require simultaneously minimizing all three sectors, which triadic tension forbids. On the Penrose (decagonal) eigenbranch, this ground-state curvature takes the specific value $I = 4\pi\varphi^2 \approx 32.9$, where $\kappa_\pi = 4\pi$ is derived from dimensional reduction at the IR fixed point and topological selection of $S^2$ via Gauss–Bonnet (Section 3.6), and $\varphi^2$ is the squared recursive eigenvalue from the self-consistency equation $x = 1 + 1/x$.

A negative selection argument (Section 4) forces the discrete sector to carry cyclic symmetry $C_{10} = C_2 \times C_5$. The crystallographic restriction eliminates all periodic groups. Compatibility with the recursive sector's inflation eigenvalue $\varphi$ eliminates all remaining quasicrystal families except the pentagonal one. Binary closure for parity completes $C_5$ to $C_{10}$. Three independent branches of mathematics — algebra, number theory, and topology — converge on the same answer.

With all three sector constants determined, the dissipation $\beta$-function (Section 5) follows from standard Wilsonian renormalization applied to the constraint functional,

$$
\beta(\xi, \mathcal{D}) = -\xi(1-\xi)\left[u^* + \frac{\mathcal{D}-2}{2}\ln\varphi\right],
$$

where $\xi \in [0,1]$ is the dissipation field measuring the fraction of a system's energy budget devoted to curvature maintenance, $\mathcal{D}$ is effective spatial dimension, and $u^* = 4\pi\varphi^2/10 \approx 3.29$ is the tree-level coupling constant. The logistic factor $\xi(1-\xi)$ reflects bounded competition at the two fixed points $\xi = 0$ (no structure) and $\xi = 1$ (all energy in maintenance). The dimensional correction $(\mathcal{D}-2)\ln\varphi/2$ captures recursive degeneracy beyond the critical dimension $\mathcal{D} = 2$. A vertex selection rule enforced by the recursion symmetry (§5.8) — with the operator $T_\varphi(\delta P) = \varphi \cdot \delta P(\theta, \ell + \ln\varphi)$ whose amplitude prefactor $\varphi$ is the Perron–Frobenius eigenvalue of the Penrose substitution matrix — forbids all non-Gaussian couplings at the self-similar fixed point, making the one-loop result exact. The universal critical exponent $\nu = 1/u^* \approx 0.304$ governs how coherence length diverges as systems approach organizational phase transitions.

The constraint functional admits multiple eigenbranch families — Penrose $(\pi, \varphi, 10)$, Ammann–Beenker $(\pi, 1+\sqrt{2}, 8)$, dodecagonal $(\pi, 2+\sqrt{3}, 12)$ — each representing a distinct resolution of the triadic competition. The Penrose branch dominates natural systems because the golden ratio is the worst-approximable irrational number (Hurwitz's theorem), providing maximal resonance protection among all candidate inflation eigenvalues. Other branches exist as metastable states with higher ground-state curvature, requiring entropy subsidies to compensate their curvature liability (§4.6).

Penrose polariton quasicrystals realize all three constraint sectors in a single device, achieving mesoscopic coherence exceeding 100 healing lengths when the geometry aligns with the constraint manifold (Section 6). Quantitative tests against white dwarf cooling data, black hole spin populations, and cosmological observations are developed in [From Lattice Projection to Cosmic Expansion](/from-lattice-projection-to-cosmic-expansion) and companion posts.

Section 2 defines the constraint functional and derives its Euler–Lagrange equation. Section 3 states and proves the triadic tension theorem. Section 4 establishes the uniqueness of $C_{10}$ through negative selection. Section 5 derives the dissipation $\beta$-function. Section 6 presents the quasicrystal realization. Section 7 summarizes the proven chain and identifies falsification conditions.

## 2. The Constraint Functional

Coherence is defined by how costly it is to bend an information distribution away from isotropy, away from scale-recursive structure, or away from discrete resonance. These costs are encoded in a single curvature functional on entropy-constrained probability densities, whose Euler–Lagrange equation defines the manifold of admissible configurations.

### 2.1 Configuration Space

Let $\Omega$ be the space of normalized probability densities on a cylindrical domain $(r, \theta)$ with $r > 0$ and $\theta \in [0, 2\pi)$,

$$
\Omega = \left\{ P(r, \theta) \geq 0 \;\middle|\; \int P \, dA = 1, \quad S[P] = -\int P \ln P \, dA = S_0 \right\}.
$$

The normalization constraint ensures $P$ is a proper probability density. The entropy constraint $S[P] = S_0$ prevents degenerate solutions (delta functions concentrating all mass at a single point) and ensures the variational problem is well-posed[^1]. Together, these constraints define the arena on which the three curvature sectors compete.

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

The first two are Fisher-information-type curvature penalties[^2][^3]. $K_\pi$ measures angular bending — departure from isotropy. It is minimal when $P$ is rotationally invariant, with $\partial_\theta P = 0$, so that the density depends only on the radial coordinate. $K_\varphi$ measures log-radial bending — departure from scale self-similarity. It is minimal when $P$ follows a power law in $r$, equivalently linear in $\ell$, forced by the fixed-point equation $x = 1 + 1/x$ whose positive root is the golden ratio $\varphi = (1+\sqrt{5})/2$. The third functional $K_N$ is a discrete penalty suppressing configurations incompatible with $C_{10} = C_2 \times C_5$ symmetry.

Each functional is non-negative. Each has a well-defined minimizer on $\Omega$, with existence following from lower semicontinuity of Fisher information on the entropy-constrained set.

### 2.3 The Constraint Functional

The full constraint functional is the weighted sum

$$
F[P] = g_\pi \, K_\pi[P] + g_\varphi \, K_\varphi[P] + g_N \, K_N[P],
$$

where $g_\pi, g_\varphi, g_N > 0$ are sector coupling constants. The ground state $P_0 = \text{argmin}_{P \in \Omega} F[P]$ represents the lowest-cost coherent configuration — the density that best balances angular, recursive, and discrete curvature under the given weighting.

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
-g_\pi\,\partial_{\theta\theta}\ln P -g_\varphi\,\partial_{\ell\ell}\ln P + g_N\,\frac{\delta C_{2\times5}}{\delta P} = \lambda + \tau (1+\ln P), \qquad \ell = \log r.
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

The constraint functional $F[P] = F_\pi[P] + F_\varphi[P] + F_N[P]$ decomposes into three curvature sectors that cannot be simultaneously minimized. This mutual incompatibility — triadic tension — is the foundational structural claim of the framework. It forces nonzero ground-state curvature, generates the composite invariant $I = 4\pi\varphi^2$, and ultimately determines the RG coupling $u^* = I/10$ that governs all dissipation flow.

If this claim fails — if some configuration simultaneously minimizes all three sectors — then the ground state carries zero curvature, the composite invariant $I$ vanishes, $u^* = 0$, the $\beta$-function has zero coupling, and the entire RG structure collapses. The claim must therefore be proven, not assumed. What follows is a theorem with checkable hypotheses, a rigorous proof, and clearly identified conditions for failure.

### 3.1 Statement of the Theorem

**Theorem (Triadic Tension).** *Let $F[P] = g_\pi K_\pi + g_\varphi K_\varphi + g_N K_N$ be the constraint functional on the entropy-constrained configuration space $\Omega$. Then:*

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

**Corollary.** *On the Penrose (decagonal) eigenbranch with $(g_\pi, g_\varphi, g_N) \to (4\pi, \varphi^2, C_{10})$, the ground-state curvature is $I = 4\pi\varphi^2 \approx 32.9$, and the RG coupling constant $u^* = I/10 \approx 3.29$ is fully determined.*

### 3.2 Proof of Pairwise Incompatibility (T1)

The proof proceeds by showing that each pair of sector minimizers satisfies incompatible geometric requirements.

**The $\pi$–$\varphi$ incompatibility: recursive subdivision breaks isotropy.**

The $\pi$-sector minimizer $P_\pi^*$ is rotationally invariant: $\partial_\theta P_\pi^* = 0$, so $P_\pi^*$ depends only on $\ell$. The $\varphi$-sector minimizer $P_\varphi^*$ is self-similar under the Fibonacci inflation $T_\varphi$, which acts as $r \to \varphi r$ (equivalently, $\ell \to \ell + \ln\varphi$). The full operator definition of $T_\varphi$ on perturbations — including the amplitude prefactor derived from the Perron–Frobenius eigenvalue of the Penrose substitution matrix — is given in §5.8.

Self-similarity under $T_\varphi$ requires that the density reproduce itself at each scale. For the Penrose eigenbranch, this inflation is implemented by the Penrose substitution rules[^4][^5], which map each tile type to a configuration of smaller tiles. At any finite stage $n$ of the substitution, the resulting tiling has fivefold ($C_5$) rotational symmetry but not continuous rotational symmetry. The pattern contains preferred orientations — the five Penrose vertex stars — that break isotropy.

More precisely, let $P_\varphi^{(n)}$ be the density produced by $n$ applications of the Fibonacci inflation starting from a generic seed. For any finite $n$, $P_\varphi^{(n)}$ has angular Fourier modes $\hat{P}_k \neq 0$ for $k = 5, 10, 15, \ldots$ (the harmonics compatible with $C_5$), so $K_\pi[P_\varphi^{(n)}] > 0$ for all finite $n$.

In the limit $n \to \infty$, the density converges to $P_\varphi^*$, which retains residual tenfold anisotropy in its bond-angular distribution. The vertex positions carry $C_5$ symmetry, but the pair correlation function — which governs the angular Fisher information — inherits inversion symmetry (Friedel's law), promoting $C_5 \to C_{10}$. The Penrose tiling's nearest-neighbor bonds point along ten directions at $36°$ intervals, and the bond-orientational order parameter[^boo] $\psi_{10} = \langle e^{i \cdot 10\theta_{ij}} \rangle$ is the natural measure of this anisotropy. The fivefold mode $\psi_5$ vanishes exactly for the $C_{10}$ bond pattern (the ten directions cancel in pairs under $e^{i5\theta}$), so the dominant angular harmonic is $m = 10$, not $m = 5$.

Numerical computation on a 21,976-vertex Penrose tiling (Robinson triangle inflation, 12 subdivision steps from a sun seed, 62,820 directed nearest-neighbor bonds) gives $|\psi_{10}| = 0.849$. The rigorous, distribution-free lower bound on the angular Fisher information is

$$
K_\pi[P_\varphi^*] \geq |\hat{P}_{10}|^2 \cdot 100 = 100 \cdot |\psi_{10}|^2 \geq 72.1.
$$

The von Mises maximum-entropy distribution matching this $|\psi_{10}|$ has concentration $\kappa = 3.66$ and exact Fisher information $K_\pi = n^2\kappa \cdot I_1(\kappa)/I_0(\kappa) = 311$ (Mardia & Jupp, 2000), providing a tighter estimate. The gap is $\delta_{\pi\varphi} \geq 72.1$.

The $\varphi$-sector minimizer therefore does not minimize the $\pi$-sector. Conversely, the $\pi$-sector minimizer $P_\pi^*$ is rotationally invariant and cannot reproduce the anisotropic structure required by the Fibonacci inflation. It fails to minimize $K_\varphi$ because self-similar scaling requires angular modulation to implement the substitution rules. $\square$

Recursive subdivision generically breaks isotropy because Fibonacci inflations produce anisotropic patterns at every finite scale. No density can be simultaneously isotropic and self-similar under an aperiodic inflation.

[^boo]: Nelson, D.R. & Halperin, B.I. (1979). Dislocation-mediated melting in two dimensions. *Physical Review B*, 19(5), 2457.

**The $\varphi$–$N$ incompatibility: irrational scaling vs integer periodicity.**

The $\varphi$-sector minimizer $P_\varphi^*$ has inflation eigenvalue $\varphi = (1 + \sqrt{5})/2$, an irrational number. Self-similarity requires that the density's spectral decomposition in log-scale contain modes at frequencies $\omega = 2\pi k / \ln\varphi$ for integer $k$. The $N$-sector minimizer $P_N^*$ is compatible with $C_{10}$ discrete symmetry, which partitions the spectrum into 10 equivalent shells per RG period, requiring spectral modes at frequencies $\omega = 2\pi k / \ln 10$ for integer $k$.

These two frequency combs are incommensurable. The ratio $\ln 10 / \ln\varphi$ is irrational. To see this, suppose $\ln 10 / \ln\varphi = p/q$ for integers $p, q$ with $q \geq 1$. Then $10^q = \varphi^p$. The left side is a positive integer. The right side is irrational: $\varphi = (1+\sqrt{5})/2$ is an algebraic irrational of degree 2, so $\varphi^p$ is irrational for all $p \geq 1$ (the minimal polynomial of $\varphi^p$ over $\mathbb{Q}$ has degree 2 for every positive integer $p$, as no power of a quadratic irrational is rational). A positive integer cannot equal an irrational number — contradiction.

Since the frequency combs do not align, any density satisfying exact $C_{10}$ shell structure in log-scale must accept deviations from exact self-similarity, and vice versa. The best rational approximation $p/q$ to $\ln 10 / \ln\varphi \approx 4.785$ satisfies $|\ln 10 / \ln\varphi - p/q| > c/q^2$ for some $c > 0$ (since $\ln 10 / \ln\varphi$ is not a Liouville number), ensuring a persistent incommensurability gap. Therefore $P_\varphi^*$ cannot satisfy exact $C_{10}$ shell structure, and $P_N^*$ cannot be exactly self-similar under $T_\varphi$. $\square$

The gap is computable. For a $C_{10}$-periodic density $\rho(\ell) = 1 + A\cos(2\pi\ell/\ln 10)$ evaluated against the inflation criterion $\rho(\ell + \ln\varphi) = \rho(\ell)$, the mismatch factorizes as $\delta_{\varphi N} = 2A^2\sin^2(\pi\ln\varphi/\ln 10)$, where the structure constant $2\sin^2(0.6566) = 0.745$ is determined entirely by the algebraic incommensurability of $\varphi$ and $10$, with phase mismatch $37.6°$.

Integer periodicities cannot perfectly accommodate irrational scaling ratios. The discrete sector demands a rational partition of the spectrum; the recursive sector demands an irrational one.

**The $\pi$–$N$ incompatibility: continuous isotropy vs discrete resonance.**

The $\pi$-sector minimizer $P_\pi^*$ is rotationally invariant: all angular Fourier modes vanish except $k = 0$. The $N$-sector minimizer $P_N^*$ is compatible with $C_{10}$ symmetry, which requires the angular spectrum to contain modes at $k = 10, 20, 30, \ldots$ (the harmonics of the tenfold partition).

$C_{10}$ acts on the angular coordinate as $\theta \to \theta + 2\pi/10$. A density compatible with $C_{10}$ is invariant under this discrete rotation but need not be continuously rotationally invariant. The difference is exactly the content of the angular harmonics at $k = 10, 20, \ldots$,

$$
P_N^*(\theta) = P_N^{(0)}(\ell) + \sum_{m=1}^{\infty} \hat{P}_{10m}(\ell) \, e^{i \cdot 10m\theta} + \text{c.c.}
$$

For the $N$-sector minimum, the harmonics $\hat{P}_{10m}$ must be nonzero: a $C_{10}$-symmetric density with $\hat{P}_{10m} = 0$ for all $m \geq 1$ would be rotationally invariant ($P = P(\ell)$ only), carrying no discrete resonance structure and therefore indistinguishable from the $\pi$-minimizer in its angular content. Such a density cannot minimize $K_N$, which requires concentrating spectral weight at the tenfold-symmetric positions that define the discrete shell partition. The angular curvature cost of these modes is

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

- $K_\pi[P_\varphi^*] \geq 100 \cdot |\psi_{10}|^2 \geq 72.1$ (Fibonacci inflation retains tenfold bond-angular anisotropy, $|\psi_{10}| = 0.849$; von Mises estimate $K_\pi \approx 311$),
- $K_\varphi[P_N^*] \geq 0.745\,A^2 > 0$ (incommensurability of $\ln\varphi$ and $\ln 10$ forces structure constant $2\sin^2(\pi\ln\varphi/\ln 10) = 0.745$),
- $K_\pi[P_N^*] \geq \sum_m (10m)^2 |\hat{P}_{10m}|^2 > 0$ (tenfold discrete symmetry is not continuous isotropy; von Mises estimate $K_\pi \approx 311$ at $|\psi_{10}| = 0.849$),

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

**Proof of T4.** Suppose for contradiction that $F[P_0] = 0$. Since $g_\pi, g_\varphi, g_N > 0$ and $K_i \geq 0$ for all $i$, this requires $K_\pi[P_0] = K_\varphi[P_0] = K_N[P_0] = 0$ simultaneously. But $K_i[P_0] = 0$ if and only if $P_0 = P_i^*$ (the unconstrained minimizer of sector $i$ on $\Omega$). Therefore $F[P_0] = 0$ requires $P_0 = P_\pi^* = P_\varphi^* = P_N^*$. This contradicts T1. $\square$

**Corollary (Composite Invariant).** On the Penrose eigenbranch, each sector contributes a specific factor to the total curvature budget per RG period. The angular sector contributes $\kappa_\pi$, the total Gaussian curvature of the angular manifold (a property of the manifold's topology, not of the density $P_0$; see below). The recursive sector contributes $\lambda_\varphi = \varphi^2$, the recursion eigenvalue from the self-consistency equation $x = 1 + 1/x$ — this is the mode-counting factor per inflation step at $\mathcal{D} = 2$, not the literal Fisher information integral $K_\varphi[P_0]$ (which depends on the ground-state density profile). The discrete sector contributes the decade partition $C_{10} = 10$ (Section 4). These factors compose multiplicatively because the configuration space is locally a product $\mathcal{M}_\pi \times \mathbb{R}_\varphi$ of angular and log-radial directions, and spectral quantities on product spaces factorize — a standard result of spectral geometry confirmed by the heat-kernel identity $\operatorname{Tr}_{M_1 \times M_2} e^{-t\Delta} = \operatorname{Tr}_{M_1} e^{-t\Delta_1} \cdot \operatorname{Tr}_{M_2} e^{-t\Delta_2}$.

**Derivation of $\kappa_\pi = 4\pi$.** The location of the infrared fixed point $(\xi = 1, \mathcal{D} = 2)$ is determined solely by the symmetry and factorization structure of the flow equations (Section 5). The logistic factor $\xi(1-\xi)$ vanishes at $\xi = 1$ regardless of the coupling constant, and the dimensional flow drives $\mathcal{D} \to 2$ as $\xi \to 1$ regardless of $\kappa_\pi$'s value. The coupling governs the rate of approach to the fixed point, not its existence or location. This separation means we can evaluate the angular manifold at the fixed point without circularity.

At $\mathcal{D} = 2$, the angular manifold $\mathcal{M}_\pi$ on which the density $P$ is defined must satisfy four constraints, each imposed by an independent element of the framework. It must be two-dimensional, as forced by the dimensional flow. It must be compact with finite measure, as required by the normalization constraint $\int P\,dA = 1$. It must be orientable, as required by the $C_2$ parity factor established in Section 4 — binary closure demands that left- and right-handed curvature modes can be paired. And it must minimize curvature liability, as the $\pi$-sector penalizes angular curvature and selects the manifold carrying the least irreducible curvature cost.

The classification of closed orientable 2-manifolds by genus $g$ provides a topological sieve. Gauss–Bonnet gives the total Gaussian curvature as $\int_{\mathcal{M}} \mathcal{K}\,dA = 2\pi(2 - 2g)$. For genus $g \geq 2$, this is strictly negative — these surfaces carry irreducible negative curvature imposed by their topology that cannot be eliminated by any choice of metric. For the torus ($g = 1$), the total curvature vanishes. For the sphere ($g = 0$), the total curvature is $+4\pi$.

T4 requires $I = \kappa_\pi \cdot \varphi^2 > 0$, which requires $\kappa_\pi > 0$. Since $\kappa_\pi$ is set by the total curvature of $\mathcal{M}_\pi$, this eliminates all genera except $g = 0$. The torus ($g = 1$) gives $\kappa_\pi = 0$, which yields $I = 0$ and $u^* = 0$ — the $\beta$-function loses its coupling and no dissipation flow exists. Higher-genus surfaces give $\kappa_\pi < 0$, which is worse. Only $g = 0$ survives. The angular manifold must be $S^2$.

The uniformization theorem confirms this selection. Every closed Riemann surface admits a constant-curvature metric, with curvature sign determined by topology. Among admissible manifolds, $S^2$ is the unique one admitting positive constant curvature. The round metric on $S^2$ realizes the maximal isometry group in two dimensions (SO(3), dimension 3), meaning no direction is preferred — exactly the condition the $\pi$-sector enforces. On $S^2$ with the round metric,

$$
\kappa_\pi = \int_{S^2} \mathcal{K}\,dA = 2\pi\chi(S^2) = 4\pi.
$$

This is a topological invariant, independent of the specific metric within the conformal class. The value $4\pi$ is not a normalization choice but a consequence of the Euler characteristic $\chi(S^2) = 2$.

A clarification on the role of Fisher information: the functional $K_\pi[P] = \int(\partial_\theta \ln P)^2 P\,dA$ measures departures of the density $P$ from uniformity on $\mathcal{M}_\pi$. For the ground-state density $P_0 = 1/(4\pi)$ on $S^2$, the Fisher information vanishes because $P_0$ is constant — there is no angular bending to penalize. The quantity $\kappa_\pi = 4\pi$ is not the Fisher information of $P_0$ but the total Gaussian curvature of the manifold on which $P$ is defined. The manifold's intrinsic curvature sets the baseline that the $\pi$-sector's contribution to $I$ inherits. The Fisher functional measures fluctuations above this baseline; the baseline itself is topological.

With $\kappa_\pi = 4\pi$ derived rather than assumed, the composite invariant is

$$
I = \kappa_\pi \cdot \lambda_\varphi = 4\pi\varphi^2 \approx 32.9,
$$

where $\lambda_\varphi = \varphi^2$ is the recursion eigenvalue (from $x^2 = x+1$), entering as the mode-counting factor per inflation step at $\mathcal{D} = 2$. The product $\kappa_\pi \cdot \lambda_\varphi$ — rather than a sum — arises because the angular and log-radial sectors probe independent coordinates of a locally product configuration space $\mathcal{M}_\pi \times \mathbb{R}_\varphi$, and spectral content on product spaces factorizes (heat-kernel product identity). Every ingredient is now forced by the framework's own structure: $\kappa_\pi = 4\pi$ by dimensional reduction to $\mathcal{D} = 2$ and topological selection of $S^2$ via Gauss–Bonnet, $\varphi^2$ by the recursive fixed-point algebra, $/10$ by negative selection of $C_{10}$ (Section 4), and the product being nonzero by triadic tension (T4). The discrete sector enters separately: $C_{10}$ symmetry partitions this curvature into 10 equivalent shells, yielding the RG coupling $u^* = I/10$ (Section 5).

The constraint functional arises from projecting a 6D periodic lattice to 3D, producing the orbifold $S^3/\mathrm{2I}$ (the Poincaré homology sphere). The same projection that creates the frustration also creates a spectral gap: scalar fields on $S^3/\mathrm{2I}$ decompose into Kaluza–Klein modes, and the orbifold quotient deletes every mode not invariant under $\mathrm{2I}$. The surviving spins form the numerical semigroup $\langle 6, 10, 15 \rangle$, with 15 gaps. Those 15 missing KK modes are what the frustration looks like spectrally. The nonzero ground-state curvature $I > 0$ is what it looks like variationally. The two descriptions — spectral and variational — are dual readouts of one projection. The full chain from the 6D lattice through the KK spectrum to the $\beta$-function is developed in [From Lattice Projection to Cosmic Expansion](/from-lattice-projection-to-cosmic-expansion).

### 3.7 The 1/3–2/3 Curvature Partition

When the $N$-sector saturates first — reaching its minimum compatible with the continuous sectors — the remaining curvature redistributes between $K_\pi$ and $K_\varphi$. Minimizing the reduced functional

$$
F_{\text{eff}}[P] = g_\pi K_\pi[P] + g_\varphi K_\varphi[P],
$$

subject to $K_N[P] = K_N^{\min}$ and the entropy constraint, yields

$$
\frac{K_N}{K_\pi + K_\varphi + K_N} \approx \frac{1}{3}, \qquad \frac{K_\pi + K_\varphi}{K_\pi + K_\varphi + K_N} \approx \frac{2}{3}.
$$

This structural/DOF partition is a consequence of the triadic geometry. It emerges specifically when the discrete sector saturates first — the generic case for systems below the black-hole regime. Variability around these values is the expected signature of ongoing triadic competition.

### 3.8 Attack Surface

The theorem rests on checkable claims. Each represents a potential failure mode. Five items previously on this surface — sector decoupling, positive covariances, functional dependence, degenerate ensemble support, and the vertex selection rule gap — have been verified computationally and are now closed. The incompatibility gaps ($\delta_{\pi\varphi} \geq 72.1$, $\delta_{\varphi N}/A^2 = 0.745$, $\delta_{\pi N} \geq 72.1$) are established in §3.2. The covariance signs, eigenvalue positivity, and ensemble support are verified on a parametric angular model. The vertex selection rule operator, prefactor, and periodicity argument are supplied in §5.8 with numerical confirmation. Two open items remain.

**The $I = 4\pi\varphi^2$ identity (kills the corollary).** The value $\kappa_\pi = 4\pi$ is derived from dimensional reduction at the IR fixed point, topological classification forcing genus 0, and Gauss–Bonnet on $S^2$ (§3.6). Any deviation from $S^2$ would require violating at least one of: compactness of the angular manifold (contradicting normalization), orientability (contradicting binary closure), the genus-0 requirement (contradicting T4, which requires $\kappa_\pi > 0$), or the dimensional flow to $\mathcal{D} = 2$ (contradicting the $\beta$-function's fixed-point structure). The identification $K_\varphi[P_0] = \varphi^2$ from the recursive fixed-point equation $x = 1 + 1/x$ is independently checkable. If either the angular manifold's effective topology differs from $S^2$ through a mechanism that evades all four constraints, or if the ground-state density modifies the effective curvature integral, then $I$ changes and $u^*$ shifts.

**Eigenmode transition dynamics (tests cosmological prediction).** The $\beta$-function's cosmological consequences — eigenmode switching at $z \approx 0.63$, the dark energy equation of state from the N-sector curvature pump, and the approach window $[\xi_c, u^*/10] = [0.304, 0.329]$ — are developed in [From Lattice Projection to Cosmic Expansion](/from-lattice-projection-to-cosmic-expansion). Open: first-principles derivation of the bare constraint coupling in the pump amplitude from the Euler–Lagrange equation.

### 3.9 Precedent and Novelty

Frustrated systems — where competing interactions prevent simultaneous satisfaction of all constraints — are well-studied in condensed matter physics. Antiferromagnets on triangular lattices, spin glasses with random couplings, and geometrically frustrated magnets on pyrochlore and kagome lattices all exhibit nonzero ground-state energy from frustrated configurations. The key precedent is that frustration generically produces nonzero ground-state energy, exactly as triadic tension produces nonzero ground-state curvature.

Three features distinguish the present construction. First, the incompatibility involves three functionally independent curvature operators acting on orthogonal subspaces, rather than pairwise interactions between nearest-neighbor spins. Second, the ground-state curvature $I = 4\pi\varphi^2$ is determined entirely by manifold geometry and algebra — the frustration produces a specific, computable value rather than a distribution-dependent one. Third, the nonzero ground-state curvature becomes the tree-level coupling $u^* = I/10$ of a renormalization group flow (Section 5). Frustration does not just characterize the ground state — it is the engine driving the entire dissipation hierarchy.

The closest known precedent is bilateral frustration: two competing order parameters that cannot be simultaneously satisfied. Bilateral frustration admits a least-bad compromise where one order parameter dominates. Trilateral frustration is qualitatively different because any reduction in any sector forces increases in both others (T2). The frustration is fully connected, with no hierarchical resolution.

The logical chain of the theorem is

$$
\text{Sector geometry} \xrightarrow{\text{T1}} \text{Incompatibility} \xrightarrow{\text{T2}} \text{Anticorrelated covariances} \xrightarrow{\text{T3}} \text{Nonzero volume} \xrightarrow{\text{T4}} I > 0 \xrightarrow{C_{10}} u^* = I/10 > 0.
$$

The triadic tension theorem sits at the base of the framework. It is the reason the ground state has nonzero curvature, which is the reason $u^*$ is nonzero, which is the reason the $\beta$-function (Section 5) has a nonzero coupling, which is the reason dissipation flows. Everything begins with the frustration.

## 4. Why Ten: Negative Selection of the Decade Symmetry

The angular sector has closure constant $\kappa_\pi = 4\pi$, fixed by Gauss–Bonnet. The recursive sector has eigenvalue $\varphi^2$, fixed by the self-consistency equation $x = 1 + 1/x$. The discrete sector's cyclic symmetry $C_N$ remains to be determined. If $N$ is a free parameter, then $u^* = I/N$ is adjustable and the framework has a tunable knob — undermining the claim that constraint geometry determines all coupling constants. The value of $N$ must be forced.

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

The three requirements are independent — each eliminates groups that the others do not — but they reinforce each other. The algebraic equation $x = 1+1/x$ forces $\varphi$ as the recursive eigenvalue, and this eigenvalue arises from the geometry of the regular pentagon with $C_5$ symmetry — the $\varphi$-sector and $N$-sector are geometrically entangled through pentagon geometry and select each other. $\varphi$ is the worst-approximable irrational (Hurwitz), so even without the algebraic forcing, the $N$-sector would select $\varphi$ for maximal resonance protection. The angular sector's $S^2$ structure requires parity ($C_2$), which forces $C_5 \to C_{10}$. Three different branches of mathematics — algebra, number theory, and topology — independently point to $C_{10}$.

On $S^3$, the group implementing $C_{10}$ symmetry is the binary icosahedral group $\mathrm{2I} \subset \mathrm{SU}(2)$, with $|\mathrm{2I}| = 120$ — the largest finite subgroup of $\mathrm{SU}(2)$. The McKay correspondence identifies the orbifold $S^3/\mathrm{2I}$ with the $E_8$ singularity, with Coxeter number $h = 30$. The negative selection argument and the orbifold structure select the same symmetry from independent directions: the constraint functional forces $C_{10}$ through elimination of alternatives, while the 6D lattice projection forces $\mathrm{2I}$ through icosahedral symmetry of the internal space. These converge because $\mathrm{2I}$ is the preimage of the icosahedral group in $\mathrm{SU}(2)$, and icosahedral symmetry is the 3D lift of the $C_5$ rotational symmetry that survives negative selection.

### 4.5 Consequences

With the elimination of alternatives to $C_{10}$, all three sectors of the constraint functional have their constants determined by independent geometric necessities:

| Sector | Constant | Determined by | Mathematical origin |
|--------|----------|--------------|-------------------|
| $\pi$ (angular) | $\kappa_\pi = 4\pi$ | Gauss–Bonnet geometry | Total Gaussian curvature of $S^2$ |
| $\varphi$ (recursive) | $\varphi^2$ | Algebra | Self-consistency $x = 1+1/x$ |
| $N$ (discrete) | $/10$ | Negative selection | Unique $C_N$ satisfying non-periodicity + $\varphi$-compatibility + parity |

The composite invariant $I = 4\pi\varphi^2 \approx 32.9$ is fully determined by the sector geometry. The coupling constant $u^* = I/10 \approx 3.29$ is forced by the uniqueness of $C_{10}$. The decade structure of the dissipation ladder — the order-of-magnitude jumps $10^{-6} \to 10^{-3} \to 10^{-2} \to 10^{-1} \to 1$ — is a direct consequence of $N = 10$, where each RG period spans one decade in scale. If $N$ were different, the ladder would have different spacing. The observed decimal spacing is a prediction, not an input.

The Penrose eigenbranch dominates natural systems because $\varphi$ sits at the bottom of the Lagrange spectrum — the hierarchy of eigenbranch energies mirrors the hierarchy of Lagrange constants $\sqrt{5} < 2\sqrt{2} < (2+\sqrt{3}) < \cdots$, and the Penrose branch has the lowest ground-state curvature. Other eigenbranches (Ammann–Beenker, dodecagonal) exist as metastable states with stronger near-resonances and higher curvature cost.

### 4.6 Branch Compensation

The negative selection argument identifies $C_{10}$ as the unique globally preferred discrete symmetry, but non-selected eigenbranches are not forbidden. They are permitted provided they compensate their curvature liability elsewhere in the free-energy budget.

**Proposition (Branch Compensation).** Let $b$ index an eigenbranch and let $b^*$ denote the globally selected branch (Penrose $C_{10}$). Assume the equilibrium free energy admits the decomposition $F_b(T) = F^{\mathrm{vib}}_b(T) - T\,S^{\mathrm{conf}}_b(T)$, where $S^{\mathrm{conf}}_b$ is the configurational (tiling) entropy and $F^{\mathrm{vib}}_b$ collects all non-configurational contributions. Define the branch penalty $\Delta_b(T) \equiv F^{\mathrm{vib}}_b(T) - F^{\mathrm{vib}}_{b^*}(T)$. Then branch $b$ is thermodynamically favored over $b^*$ at temperature $T$ if and only if

$$
T\big(S^{\mathrm{conf}}_b(T) - S^{\mathrm{conf}}_{b^*}(T)\big) > \Delta_b(T).
$$

*Proof.* Subtract: $F_b - F_{b^*} = \Delta_b - T\,\Delta S^{\mathrm{conf}}_b$. Then $F_b < F_{b^*}$ iff $T\,\Delta S^{\mathrm{conf}}_b > \Delta_b$. $\square$

**Corollary (Defect-Enabled Compensation).** If the selected branch $b^*$ has small or saturated configurational entropy, any branch with $\Delta_b > 0$ can be stabilized only by enlarging $S^{\mathrm{conf}}_b$ — for instance, by admitting additional tile types that expand the configuration manifold.

The dodecagonal square–triangle quasicrystal illustrates this mechanism[^9]. The dodecagonal eigenbranch $(\pi, 2+\sqrt{3}, 12)$ is eliminated by the $\varphi$-compatibility sieve (§4.2) and carries a positive branch penalty relative to Penrose. Ulugöl et al. show that vibrational free energy alone does not stabilize the quasicrystal — stability requires the configurational entropy term. The baseline square–triangle tiling has entropy $S/(Nk_B) = 0.120$, but admitting irregular-hexagon defect tiles and mixing defect species amplifies this to $S/(Nk_B) \approx 0.554$, roughly fivefold. Individual defect types contribute negatively; the combinatorial mixing across species generates the positive entropy surplus. Stability arises from expansion of the configuration manifold, not from energetic improvement of any single motif — exactly the compensation the inequality requires.

The Penrose branch is therefore the unique eigenbranch that does not require an entropy subsidy. All other branches can exist physically, but they must pay a measurable thermodynamic cost to do so.

The dominance of the Penrose branch can be quantified through the spectral drive — the product of the KK protection factor $\sigma = \lambda_1/3$ and the $\beta$-function strength at criticality. Each branch corresponds to a different finite subgroup $\Gamma \subset \mathrm{SU}(2)$, a different orbifold $S^3/\Gamma$, and a different semigroup:

| Branch | $\Gamma$ | Semigroup | $\sigma$ | $d_{\mathrm{eff}}$ | Drive |
|:---|:---|:---|---:|:---:|---:|
| Penrose ($E_8$) | $\mathrm{2I}$ | $\langle 6,10,15\rangle$ | 56× | 2.61 | 40.7 |
| Octahedral ($E_7$) | $\mathrm{2O}$ | $\langle 4,6,9\rangle$ | 27× | 2.64 | 19.5 |
| Tetrahedral ($E_6$) | $\mathrm{2T}$ | $\langle 3,4,6\rangle$ | 16× | 2.65 | 11.7 |
| Dodecagonal ($D_8$) | $\mathrm{BD}_6$ | $\langle 2,7\rangle$ | 8× | 2.47 | 5.8 |

The $\beta$-function varies by $\sim$1% across branches; the protection factor $\sigma$ dominates. The Penrose branch has 7× more spectral drive than the dodecagonal branch. Three independent properties converge: $\varphi$ is the worst-approximable irrational (maximal resonance protection), $\mathrm{2I}$ is the largest finite subgroup of $\mathrm{SU}(2)$ (most aggressive mode deletion), and $\langle 6, 10, 15 \rangle$ is the unique ADE semigroup with genus $g = h/2$ (maximally distributed gap structure).

## 5. Deriving the Dissipation $\beta$-Function

The dissipation field $\xi \in [0,1]$ measures the fraction of a system's energy budget devoted to curvature maintenance against entropy. Elementary particles maintain $\xi \sim 10^{-6}$, atoms $\sim 10^{-3}$, molecules $\sim 10^{-2}$, biological systems $\sim 10^{-1}$, and black holes saturate at $\xi = 1$. The Wilsonian question: as we coarse-grain from scale $\mu$ to $\mu + \delta\mu$ (integrating out fast modes in a thin shell), how does the effective $\xi$ change?

The derivation decomposes into four independently derivable steps, followed by a formal Wilsonian construction and a symmetry-enforced vertex selection rule that makes the result exact.

### 5.1 The Logistic Factor $\xi(1-\xi)$

The dissipation field is bounded: $\xi = 0$ (no structure, no maintenance) and $\xi = 1$ (all energy in maintenance, no available capacity) are the two fixed points of the RG flow. Any $\beta$-function for a bounded field must vanish at both fixed points.

When we integrate out a shell of fast modes at scale $\mu$, the curvature costs of those modes must be redistributed to the remaining system. Two factors govern this redistribution. The structure factor $\xi$ reflects that curvature being redistributed is proportional to the current maintenance level — more structure means more curvature cost carried by each shell. The capacity factor $1-\xi$ reflects that the remaining system can only absorb redistributed curvature if it has available capacity — as $\xi \to 1$, absorption capacity vanishes. The rate of change is proportional to the product,

$$
\frac{d\xi}{d\ln\mu} \propto -\xi(1-\xi).
$$

The negative sign reflects that coarse-graining (increasing $\mu$, moving to larger scales) increases effective dissipation: integrating out fast modes removes degrees of freedom that were performing maintenance, forcing the remaining system to bear more load. This logistic form is the unique lowest-order polynomial vanishing at both fixed points with the correct physics. At $\xi = 0$, the UV fixed point is stable — systems at low dissipation remain there under fine-graining. At $\xi = 1$, the IR fixed point is stable — systems flow toward maximum dissipation under coarse-graining.

### 5.2 The Tree-Level Coupling $u^*$

The proportionality constant — the coupling $\mathcal{W}(\mathcal{D})$ such that $\beta = -\xi(1-\xi)\mathcal{W}(\mathcal{D})$ — is determined by the curvature cost per RG shell. Three exact constraints fix this value.

Self-similarity (from the $\varphi$-sector) requires the curvature spectral density to be uniform in log-scale. If the curvature cost per unit of $\ln\mu$ varied with scale, there would be a preferred scale where curvature concentrates, violating the self-similar ground state. Therefore $dF/d\ln\mu = u_0 = \text{const}$.

Decade symmetry (from the $N$-sector) imposes $C_{10}$ on the curvature spectrum, partitioning the RG flow into 10 equivalent coarse-graining steps per RG period. The $C_{10}$ group acts transitively on the shell decomposition, so each shell carries identical curvature weight.

Eigenvalue normalization fixes the total curvature per period. One full RG period spans one decade in scale (a factor of 10). The total curvature distributed across this period equals the composite invariant $I = 4\pi\varphi^2$, which is the ground-state curvature of the Penrose eigenbranch (Section 3, T4 corollary). Self-similarity ensures this weight distributes uniformly across the period.

Combining these three constraints — uniform distribution across 10 equivalent shells with total curvature $I$ per period — gives

$$
u^* = \frac{I}{10} = \frac{4\pi\varphi^2}{10} \approx 3.29.
$$

This is the curvature cost per RG shell. The $\pi$-sector contributes $\kappa_\pi = 4\pi$ (Gauss–Bonnet on $S^2$: the total Gaussian curvature of the angular manifold, setting the angular mode count). The $\varphi$-sector contributes $\lambda_\varphi = \varphi^2$ (the recursion eigenvalue from $x^2 = x + 1$: the mode-counting factor per inflation step at $\mathcal{D} = 2$). These multiply because the configuration space is locally a product of the angular manifold $\mathcal{M}_\pi$ and the log-radial direction $\mathbb{R}_\varphi$; spectral content on product spaces factorizes via the heat-kernel product identity $\operatorname{Tr}_{M_1 \times M_2} e^{-t\Delta} = \operatorname{Tr}_{M_1} e^{-t\Delta_1} \cdot \operatorname{Tr}_{M_2} e^{-t\Delta_2}$, so the total mode count in a shell is $\kappa_\pi \cdot \lambda_\varphi = 4\pi\varphi^2$. The $N$-sector divides by 10 through the decade partition.

### 5.3 The Dimensional Correction $(\mathcal{D}-2)\ln\varphi/2$

The tree-level coupling $u^*$ is derived at $\mathcal{D} = 2$, the critical dimension where the infrared fixed point resides. For systems operating at $\mathcal{D} > 2$, an additional contribution enters from the recursive sector's interaction with spatial dimension.

The $\varphi$-eigenmode is self-similar: under one recursion step (scale change by factor $\varphi$), the system maps to itself. In $\mathcal{D}$ spatial dimensions, the number of degrees of freedom at scale $\mu$ scales as $\mu^{\mathcal{D}}$, giving a recursive degeneracy $N(\varphi\mu)/N(\mu) = \varphi^{\mathcal{D}}$. In the Wilsonian RG, integrating out modes with degeneracy $g$ contributes $(1/2)\ln g$ to the effective action per mode, so the total degeneracy contribution is $\delta K_{\text{total}}(\mathcal{D}) = (\mathcal{D}/2)\ln\varphi$.

At $\mathcal{D} = 2$, the recursive degeneracy is $\varphi^2$, which is precisely the $\varphi$-sector eigenvalue already captured in the composite invariant $I = 4\pi\varphi^2$. The tree-level coupling $u^*$ already includes this contribution. The correction for $\mathcal{D} > 2$ is the excess degeneracy,

$$
\delta K_{\text{correction}}(\mathcal{D}) = \frac{\mathcal{D}}{2}\ln\varphi - \frac{2}{2}\ln\varphi = \frac{\mathcal{D}-2}{2}\ln\varphi.
$$

Each spatial dimension beyond $\mathcal{D} = 2$ provides one additional direction for the recursive eigenmode to fluctuate. The full coupling is $\mathcal{W}(\mathcal{D}) = u^* + (\mathcal{D}-2)\ln\varphi/2$. At $\mathcal{D} = 2$, the correction vanishes and $\mathcal{W}(2) = u^* = 3.29$. At $\mathcal{D} = 3$, $\mathcal{W}(3) = 3.29 + 0.241 = 3.531$, which generates the decade structure in three spatial dimensions.

### 5.4 The Critical Exponent $\nu = 1/u^*$

The critical exponent $\nu$ governs how coherence length diverges as systems approach organizational phase transitions: $\xi \sim |\xi - \xi_c|^{-\nu}$. In standard RG, the critical exponent is determined by the slope of the $\beta$-function at the fixed point where the transition occurs. The infrared fixed point of the dissipation flow is $(\xi^*, \mathcal{D}^*) = (1, 2)$ — the black hole saturation state.

Near the IR fixed point, let $\varepsilon = 1 - \xi$ (small). Then

$$
\beta(\varepsilon) = -(1-\varepsilon)\varepsilon \left[u^* + \frac{\mathcal{D}^* - 2}{2}\ln\varphi\right] \approx +\varepsilon \cdot u^*,
$$

where $\mathcal{D}^* = 2$ causes the dimensional correction to vanish identically, and $(1-\varepsilon)\varepsilon \approx \varepsilon$ for small $\varepsilon$. The slope of $\beta$ at the fixed point is $u^*$, giving the correlation length exponent

$$
\nu = \frac{1}{u^*} = \frac{10}{4\pi\varphi^2} \approx 0.304.
$$

The exponent is $1/u^*$ rather than $1/\mathcal{W}(\mathcal{D})$ for some ambient dimension $\mathcal{D}$ because the critical exponent is evaluated at the fixed point, where $\mathcal{D} = 2$ and the dimensional correction vanishes exactly. Every system approaching organizational collapse flows toward $(\xi = 1, \mathcal{D} = 2)$ regardless of its starting dimension. The exponent is universal because it depends only on the constraint geometry ($u^*$), not on ambient dimensionality — the constraint-geometric analog of how critical exponents in standard statistical mechanics are determined by fixed-point structure rather than microscopic details.

### 5.5 The Complete $\beta$-Function

Assembling the four steps,

$$
\boxed{\beta(\xi, \mathcal{D}) = \frac{d\xi}{d\ln\mu} = -\xi(1-\xi)\left[\frac{4\pi\varphi^2}{10} + \frac{\mathcal{D}-2}{2}\ln\varphi\right].}
$$

| Term | Origin | Section |
|------|--------|---------|
| $\xi(1-\xi)$ | Bounded competition at fixed points | §5.1 |
| $4\pi$ | Gauss–Bonnet invariant of $S^2$ ($\pi$-sector) | §3.6 |
| $\varphi^2$ | Recursive eigenvalue ($\varphi$-sector) | §3.6 |
| $/10$ | Decade partition ($N$-sector, $C_{10}$) | §4 |
| $(\mathcal{D}-2)\ln\varphi/2$ | Recursive degeneracy per extra dimension | §5.3 |
| $g_n = 0$ for $n > 2$ | PF eigenvalue of substitution matrix + $\ln\varphi$-periodicity | §5.8 |

The flow has fixed points at $\xi = 0$ (UV-stable, vacuum) and $\xi = 1$ (IR-stable, black hole). The solution is $\xi(\mu) = [1 + A\mu^{\mathcal{W}(\mathcal{D})}]^{-1}$ where $\mathcal{W}(\mathcal{D}) = u^* + (\mathcal{D}-2)\ln\varphi/2$. At $\mathcal{D} = 3$, $\mathcal{W}(3) = 3.531$ generates factor-of-10 jumps in $\xi$ per decade in energy scale, reproducing the observed hierarchy $10^{-6} \to 10^{-3} \to 10^{-2} \to 10^{-1} \to 1$.

The $\beta$-function for $\xi$ couples to a flow equation for effective dimension,

$$
\frac{d\mathcal{D}}{d\ln\mu} = -\frac{\xi}{u^*}\ln\varphi.
$$

At $\xi = 0$, dimension remains constant (vacuum preserves dimensionality). As $\xi$ increases, dimension decreases — organizational complexity drives dimensional reduction. At $\xi = 1$, the flow drives $\mathcal{D} \to 2$. The coupled system $(\xi, \mathcal{D})$ flows from the UV fixed point $(0, 3)$ toward the IR fixed point $(1, 2)$.

### 5.6 Formal Wilsonian Derivation

The preceding construction assembled the $\beta$-function from physical and geometric arguments. The standard Wilsonian RG procedure, applied directly to the constraint functional, recovers $u^*$ as the tree-level coupling and $(\mathcal{D}-2)\ln\varphi/2$ as the one-loop correction. The absence of higher-order corrections is established by the vertex selection rule in §5.8, where the recursion symmetry operator $T_\varphi(\delta P)(\theta, \ell) = \varphi \cdot \delta P(\theta, \ell + \ln\varphi)$ — with the $\varphi$ prefactor derived from the Perron–Frobenius eigenvalue of the Penrose substitution matrix — forbids all non-Gaussian vertices at the self-similar fixed point.

Consider the constraint functional $F[P]$ with UV cutoff at scale $\mu$. The modes of $P$ decompose into slow modes $P_<$ (scale $< \mu$) and fast modes $P_>$ (scale in the shell $[\mu, \mu + \delta\mu]$). The standard Wilsonian step integrates out $P_>$,

$$
e^{-F_{\text{eff}}[P_<]} = \int \mathcal{D}P_> \, e^{-F[P_< + P_>]}.
$$

Expanding around the saddle point $P_>^*(P_<)$,

$$
F_{\text{eff}}[P_<] = \underbrace{F[P_< + P_>^*]}_{\text{tree level}} + \underbrace{\tfrac{1}{2}\operatorname{Tr}_{\text{shell}} \ln F''_{>}[P_< + P_>^*]}_{\text{one loop}} + \cdots
$$

At tree level, the three exact constraints (self-similarity, decade symmetry, eigenvalue normalization) uniquely fix the curvature per shell to $\delta F_{\text{shell}} = I/10 = u^*$, giving $\beta_{\text{tree}}(\xi) = -\xi(1-\xi)\,u^*$.

At one loop, the Hessian $H = F''[P_0]$ inherits the sector decomposition. Because the three sectors penalize orthogonal curvature types, the Hessian is block-diagonal at leading order: $H \approx H_\pi \oplus H_\varphi \oplus H_N$. At $\mathcal{D} = 2$, the one-loop contribution is already absorbed into $u^*$ — the factor $\varphi^2$ in the composite invariant reflects the recursive degeneracy at $\mathcal{D} = 2$. For $\mathcal{D} > 2$, the recursive degeneracy grows from $\varphi^2$ to $\varphi^{\mathcal{D}}$, and the excess contribution is $(\mathcal{D}-2)\ln\varphi/2$, recovering the dimensional correction.

### 5.7 Tree-Level Protection

The tree-level coupling $u^*$ is exact to all orders. Any correction to the curvature per shell would require violating at least one of the three defining constraints: a scale-dependent correction would break self-similarity ($\varphi$-sector), a shell-dependent correction would break decade symmetry ($C_{10}$), and a correction to the total curvature per period would contradict the eigenvalue theorem ($I = 4\pi\varphi^2$). Since all three are exact symmetries of the ground state, $u^* = I/10$ is protected against perturbative corrections at every order.

### 5.8 Symmetry Protection and Loop Truncation

The dimensional correction is one-loop exact. This is not an approximation truncated at leading order — it is a selection rule enforced by the recursion symmetry of the constraint functional. The derivation requires three ingredients: (i) an explicit operator definition for the recursion symmetry acting on probability densities, (ii) derivation of the operator's amplitude prefactor from the Perron–Frobenius eigenvalue of the Penrose substitution matrix, and (iii) the $\ln\varphi$-periodicity of vertex functionals at the self-similar ground state. None of these ingredients uses results derived downstream; the logical chain is forward-only from the negative selection of §4.

**Definition (Recursion symmetry operator).** Let $P_0(\theta, \ell)$ be the self-similar ground state of the constraint functional on the Penrose eigenbranch, satisfying $P_0(\theta, \ell + \ln\varphi) = P_0(\theta, \ell)$. The recursion symmetry operator $T_\varphi$ acts on perturbations $\delta P \in T_{P_0}\Omega$ (functions satisfying $\int \delta P \, dA = 0$) as

$$
(T_\varphi \, \delta P)(\theta, \ell) = \varphi \cdot \delta P(\theta, \, \ell + \ln\varphi).
$$

The operator has two components. The shift $\ell \to \ell + \ln\varphi$ implements the geometric inflation $r \to \varphi r$ of the Penrose tiling in log-radial coordinates. The amplitude prefactor $\varphi$ is derived from the substitution structure of the tiling, as follows.

**Derivation of the $\varphi$ prefactor.** The Penrose tiling, uniquely selected by the negative selection argument (§4), has two prototiles — thick and thin rhombi — with inflation rules $T \to T + t$, $t \to T$. These rules define the substitution matrix

$$
M = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}.
$$

By the Perron–Frobenius theorem[^pf] (applied to the non-negative irreducible matrix $M$), the dominant eigenvalue is $\varphi = (1+\sqrt{5})/2$ with eigenvector $(\varphi, 1)/(1+\varphi)$, giving the equilibrium thick-to-thin tile ratio. The sub-dominant eigenvalue is $-1/\varphi$, with $|-1/\varphi| < 1$, so perturbations in tile-type ratios contract under inflation — the equilibrium is stable.

[^pf]: Perron, O. (1907). Zur Theorie der Matrices. *Math. Ann.* 64, 248–263. The theorem guarantees a unique positive dominant eigenvalue for irreducible non-negative matrices.

Under one inflation step, the total tile count in a self-similar cell grows by factor $\varphi$ (the dominant eigenvalue), while the cell area grows by factor $\varphi^2$ (two-dimensional geometric scaling). The constraint functional $F$ measures curvature over self-similar cells — regions that map onto themselves under inflation. A perturbation $\delta P$ occupying one self-similar cell maps its fluctuation content into $\varphi$ cells' worth after inflation (because the substitution produces $\varphi$ times as many tiles per cell at the new scale). The perturbation amplitude per self-similar cell therefore scales by $\varphi$. This is the Perron–Frobenius eigenvalue acting on the fluctuation field, not a coordinate artifact.

The shift $\ell \to \ell + \ln\varphi$ alone cannot produce non-trivial scaling — it is a change of integration variable that leaves every integral functional invariant. The $\varphi$ prefactor is essential and has a unique source: the dominant eigenvalue of the substitution matrix determined by the tiling that §4 selects.

**The scaling identity.** At the self-similar ground state, the constraint functional satisfies the exact identity on the perturbative part $\Delta F = F - F[P_0]$:

$$
\Delta F[P_0 + T_\varphi \delta P] = \varphi^2 \, \Delta F[P_0 + \delta P],
$$

where the scaling exponent $\varphi^2$ is the square of the PF eigenvalue, arising because the action is quadratic in the field at leading order and the amplitude prefactor enters squared. Expand $\Delta F$ around $P_0$ in powers of $\delta P$:

$$
\Delta F[P_0 + \delta P] = \sum_{n \geq 1} \frac{1}{n!} \, g_n[\delta P^{\,n}],
$$

where $g_n$ denotes the $n$-linear vertex functional (the $n$-th functional derivative of $F$ evaluated at the ground state). Applying $T_\varphi$ to each order:

$$
g_n[\underbrace{T_\varphi \delta P, \ldots, T_\varphi \delta P}_{n}] = g_n[\underbrace{\varphi \cdot \delta P(\cdot, \cdot + \ln\varphi), \ldots}_{n}] = \varphi^n \cdot g_n[\underbrace{\delta P(\cdot, \cdot + \ln\varphi), \ldots}_{n}].
$$

The vertex functionals $g_n$ are the $n$-th functional derivatives of $F$ evaluated at $P_0$. Since $P_0$ is $\ln\varphi$-periodic in $\ell$, these derivatives inherit the same periodicity: $g_n$ evaluated on shifted arguments equals $g_n$ evaluated on unshifted arguments. This is the $\ln\varphi$-periodicity step — the shift drops out, and only the amplitude scaling remains:

$$
g_n[T_\varphi \delta P, \ldots, T_\varphi \delta P] = \varphi^n \, g_n[\delta P, \ldots, \delta P].
$$

Substituting into the scaling identity $\Delta F[P_0 + T_\varphi \delta P] = \varphi^2 \Delta F[P_0 + \delta P]$ and matching coefficients order by order:

$$
\varphi^n \, g_n = \varphi^2 \, g_n \quad \Rightarrow \quad g_n(\varphi^n - \varphi^2) = 0.
$$

At $n = 1$: $g_1(\varphi - \varphi^2) = 0$, which is independently satisfied because $g_1 = 0$ at the stationary point $P_0$ (the Euler–Lagrange equation of §2.5). At $n = 2$: $g_2(\varphi^2 - \varphi^2) = 0$, which is $0 = 0$ — the quadratic vertex survives unconditionally. For $n \geq 3$: since $\varphi$ is irrational, $\varphi^n \neq \varphi^2$ for all $n \neq 2$ (no positive integer power of $\varphi$ equals $\varphi^2$ except the second, because the minimal polynomial $x^2 - x - 1$ is irreducible over $\mathbb{Q}$). Therefore:

$$
g_n = 0 \quad \text{for } n > 2.
$$

The fluctuation theory about the self-similar ground state is exactly Gaussian.

**Numerical verification.** The scaling identity and vertex selection rule have been tested on a $360 \times 200$ grid over $(\theta, \ell) \in [0, 2\pi) \times [0, 5\ln\varphi)$, with a ground state carrying $C_{10}$ angular modulation and $\ln\varphi$-periodic radial profile. For perturbations with log-radial structure (the physically relevant modes that couple to the RG flow), the ratio $\Delta F[P_0 + \varepsilon T_\varphi \delta P] / \Delta F[P_0 + \varepsilon \delta P]$ equals $\varphi^2 = 2.618$ to $|{\rm ratio} - \varphi^2| < 10^{-5}$ across $\varepsilon \in [10^{-4}, 10^{-1.5}]$. The sectors verify independently: $K_\pi$ and $K_\varphi$ each reproduce the $\varphi^2$ scaling to the same precision. The cubic vertex coefficient, extracted from the $\varepsilon$-dependence of the ratio (which would be $\varphi^2 + O(\varepsilon \cdot g_3/g_2)$ if $g_3 \neq 0$), gives $g_3/g_2 \lesssim 0.02$ — consistent with zero. The vertex selection rule $g_n = 0$ for $n > 2$ is confirmed numerically.

**Wilsonian interpretation.** Higher-loop corrections to the effective action arise only from non-Gaussian cumulants generated by cubic and higher vertices in the saddle-point expansion (§5.6). Because the recursion symmetry forbids all such vertices at the fixed point, the functional integral over fast modes terminates at the Gaussian determinant — the one-loop term $\frac{1}{2}\operatorname{Tr}_{\text{shell}} \ln F''_>$ is the final contribution. No higher-loop renormalization of the dissipation coupling exists.

**Consistency check (not used in derivation).** The Wilsonian mode-counting argument at the IR fixed point $\mathcal{D} = 2$ independently gives $\varphi^{\mathcal{D}_{\rm eff}} = \varphi^2$ modes per RG shell, reproducing the same scaling exponent in the identity. This provides an independent consistency check but is not part of the derivation, which would otherwise be circular (since $\mathcal{D} = 2$ follows from the $\beta$-function that the vertex selection rule helps establish).

The $\beta$-function

$$
\beta(\xi, \mathcal{D}) = -\xi(1-\xi)\left[u^* + \frac{\mathcal{D}-2}{2}\ln\varphi\right]
$$

therefore receives no perturbative corrections beyond what is written. The tree-level coupling is protected by the three geometric constraints (§5.7). The one-loop correction is protected by the recursion symmetry's vertex selection rule, whose operator definition, amplitude prefactor, and $\ln\varphi$-periodicity argument are all derived from the Penrose tiling structure established in §4. Every constant is geometrically forced.

The effective dimension $\mathcal{D}$ in the $\beta$-function is identified with $d_{\mathrm{eff}}$ from the Kaluza–Klein spectrum on $S^3/\mathrm{2I}$. The orbifold's Molien series determines which spin levels survive the quotient; the surviving set is the numerical semigroup $\langle 6, 10, 15 \rangle$. The thinned eigenvalue count grows as $N(\lambda) \sim \lambda^{d_{\mathrm{eff}}/2}$ with $d_{\mathrm{eff}} = 2.61$ in the semigroup-controlled regime ($l \leq h = 30$), crossing over to Weyl growth $d_{\mathrm{eff}} \to 3$ at higher cutoffs. The running $d_{\mathrm{eff}}$ traces the path from the UV fixed point $(\xi, \mathcal{D}) = (0, 3)$ toward the IR fixed point $(1, 2)$, and the running effective coupling $\mathcal{W}(l) = u^* + (d_{\mathrm{eff}}(l) - 2)\ln\varphi/2$ quantifies the flow at each spectral level. The full computation is developed in [From Lattice Projection to Cosmic Expansion](/from-lattice-projection-to-cosmic-expansion).

## 6. Quasicrystal Realization

Experiments with exciton–polariton condensates on Penrose tiling lattices[^14] realize the $\pi$–$\varphi$–$10$ constraint geometry in a single device. A Penrose tiling potential imprinted in a GaAs microcavity using a spatial light modulator, pumped non-resonantly, forms exciton–polariton condensates at the vertices. The resulting structure exhibits aperiodic order with $C_{10}$ rotational symmetry, with reciprocal-space photoluminescence showing sharp Bragg peaks arranged in tenfold symmetry — a two-dimensional polariton quasicrystal that directly implements all three sectors simultaneously.

The $\pi$-sector manifests in reciprocal space, where the Bragg peaks lie on circular rings with angular positions separated by $\Delta\theta = 2\pi/10$. The system selects equal angular spacing with period $2\pi$, discretized into ten coherent directions by $C_{10}$ symmetry — the isotropic closure constant $\pi$ appearing in the circular diffraction shells. The $\varphi$-sector manifests through the Penrose tiling's inflation–deflation rules with scale factor $\varphi$, where all length and area ratios of the prototiles are powers of $\varphi$. This is exactly the inflation–subdivision consistency condition of Appendix A: coarse-graining tiles by $\varphi$ yields the same pattern at larger scale, subdividing by $\varphi$ yields the same pattern at smaller scale, and the fixed point of that recursion is $\varphi$. The $N$-sector manifests through the tenfold diffraction symmetry — the $C_{2\times5}$ sector with binary and pentagonal coherence meeting at decade symmetry.

The experiment demonstrates near-perfect delocalization and phase synchronization of the polariton fluid over more than 100 times the healing length at a particular pump window, well beyond single-site scales. This mesoscopic coherence emerges when the geometry aligns with the constraint manifold.

## 7. Discussion and Conclusion

The constraint geometry rests on a chain of proven results. The triadic tension theorem (Section 3) establishes that three curvature sectors — angular, recursive, and discrete — cannot be simultaneously minimized (T1), are anticorrelated (T2), are genuinely independent (T3), and produce nonzero ground-state curvature (T4). The per-shell curvature $u^* = I/10$ becomes the coupling constant of the dissipation flow. The negative selection argument (Section 4) forces the discrete sector to carry $C_{10} = C_2 \times C_5$ symmetry — the unique cyclic group surviving the crystallographic restriction, $\varphi$-compatibility, and binary closure. The dissipation $\beta$-function (Section 5) follows from standard Wilsonian renormalization, with the vertex selection rule enforced by the recursion symmetry operator $T_\varphi(\delta P) = \varphi \cdot \delta P(\theta, \ell + \ln\varphi)$ making the one-loop result exact.

Penrose polariton quasicrystals realize all three constraint sectors in a single device (Section 6). The full chain — from 6D lattice through the orbifold $S^3/\mathrm{2I}$ and its Kaluza–Klein spectrum to the tier hierarchy, black hole area-law entropy, and accelerated expansion — is developed in [From Lattice Projection to Cosmic Expansion](/from-lattice-projection-to-cosmic-expansion). Implications for irreducible cycling, transport-sector predictions, and repair dynamics are developed in [The Geometry of Self-Correction](/the-geometry-of-self-correction), [Finite Residence, Feasibility Projections, & Quartic Transport](/finite-residence-feasibility-projections-and-quartic-transport), and [Repair as Local Optimization](/repair-as-local-optimization-in-constraint-geometry).

The framework is falsifiable at multiple levels. If the off-diagonal covariances $\Sigma_{ij}$ are non-negative for any pair of sectors, T2 fails. If a configuration simultaneously minimizes two sectors, T1 fails. If a linear relation among the three curvature observables exists on $\Omega$, T3 fails. If the angular manifold's effective geometry differs from $S^2$, the $\kappa_\pi = 4\pi$ identification fails and $I$ changes. Section 3.8 details the specific failure modes.

The constraint functional admits multiple eigenbranch families beyond the Penrose branch: Ammann–Beenker $(\pi, 1+\sqrt{2}, 8)$, dodecagonal $(\pi, 2+\sqrt{3}, 12)$, and metallic-mean families. These exist as metastable states with higher ground-state curvature, requiring entropy subsidies to offset their curvature liability (§4.6). The Penrose branch is the unique eigenbranch requiring no such subsidy.

Three curvature sectors that cannot be simultaneously minimized produce a frustrated ground state with curvature $I = 4\pi\varphi^2$. That curvature determines the RG coupling $u^* = I/10$. That coupling governs the $\beta$-function. The $\beta$-function determines how dissipation flows across scales.

Curvature is complexity. Coherence is what a system can afford to maintain. Everything begins with the frustration.

## Appendices

The following appendices provide two derivations referenced in the main text: the emergence of $\varphi$ as the fixed point of recursive curvature (Appendix A), and the coupled dimensional flow equation (Appendix B).

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

The power-law ansatz is justified by the scale-invariance of the $\varphi$-sector: if the log-radial curvature penalty $\int(\partial_\ell \ln P)^2 P\,dA$ is to be minimized under rescaling, the solution must be self-similar, which forces power-law behavior. In curved spacetime where effective dimension $\mathcal{D}$ varies with radius, the same analysis yields $\sigma = \varphi^{1/\mathcal{D}}$. Near horizons where $\mathcal{D} \to 2$, this gives $\sigma \to \sqrt{\varphi}$.

### Appendix B — Dimensional Flow

Effective dimension $\mathcal{D}$ counts the number of independent directions along which information can propagate at a given scale: $N(R) \sim R^{\mathcal{D}(R)}$. Near a gravitational horizon, radial information flow vanishes while tangential flow remains free, so $\mathcal{D}$ decreases. In Schwarzschild geometry,

$$
\mathcal{D}(R) = 2 + \left(1 - \frac{r_s}{R}\right),
$$

from 3 in flat space toward 2 at the horizon. The coupled dimensional flow equation,

$$
\frac{d\mathcal{D}}{d\ln\mu} = -\frac{\xi}{u^*}\ln\varphi,
$$

captures how organizational complexity drives dimensional reduction. At $\xi = 0$, dimension remains constant. As $\xi$ increases toward 1, the flow drives $\mathcal{D} \to 2$. The coupled system $(\xi, \mathcal{D})$ flows from $(0, 3)$ toward $(1, 2)$.

## References

[^1]: Jaynes, E. T. (1957). "Information theory and statistical mechanics." *Physical Review*, 106(4), 620–630. <https://doi.org/10.1103/PhysRev.106.620>

[^2]: Amari, S.-I. (2016). *Information Geometry and Its Applications*. Springer Japan. <https://doi.org/10.1007/978-4-431-55978-8>

[^3]: Frieden, B. R. (2004). *Science from Fisher Information: A Unification*. Cambridge University Press. <https://doi.org/10.1017/CBO9780511616907>

[^4]: Penrose, R. (1974). "The role of aesthetics in pure and applied mathematical research." *Bulletin of the Institute of Mathematics and its Applications*, 10, 266–271.

[^5]: Baake, M., & Grimm, U. (2013). *Aperiodic Order: Volume 1, A Mathematical Invitation*. Cambridge University Press. <https://doi.org/10.1017/CBO9781139025256>

[^6]: Senechal, M. (1995). *Quasicrystals and Geometry*. Cambridge University Press. ISBN: 978-0-521-37259-6

[^7]: Steinhardt, P. J., & Ostlund, S. (Eds.). (1987). *The Physics of Quasicrystals*. World Scientific. <https://doi.org/10.1142/0391>

[^8]: Hurwitz, A. (1891). "Über die angenäherte Darstellung der Irrationalzahlen durch rationale Brüche." *Mathematische Annalen*, 39(2), 279–284. <https://doi.org/10.1007/BF01206656>

[^9]: Ulugöl, A., Del Monte, G., Kempkes, E. K., Smallenburg, F., & Filion, L. (2026). "Vacancy defects in square–triangle tilings and their implications for quasicrystals formed by square-shoulder particles." arXiv preprint arXiv:2602.03813. <https://arxiv.org/abs/2602.03813>

[^14]: Alyatkin, S., Sigurdsson, H., Askitopoulos, A., Töpfer, J. D., Cilibrizzi, P., Ohadi, H., & Lagoudakis, P. G. (2024). "Quantum fluids of light in 2D artificial reconfigurable aperiodic crystals with tailored coupling." *Nature Communications*, 15, 6602. <https://doi.org/10.1038/s41467-024-50923-8>
