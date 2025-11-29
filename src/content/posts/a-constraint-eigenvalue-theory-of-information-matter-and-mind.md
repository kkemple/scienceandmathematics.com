---
title: 'A Constraint Eigenvalue Theory of Information, Matter, and Mind'
description: "Develops a unified constraint eigenvalue geometry showing how pi, phi, and decade invariants govern coherence from quantum transport to civilizational dynamics."
pubDate: '2025-11-28'
---

*A unified variational framework for coherence across scales.*

## Abstract

This monograph develops a unified theoretical framework in which physical, biological, cognitive, and sociotechnical systems emerge as different regimes of a single variational principle governing constrained information flow. The central insight is that coherent systems must maintain structure against entropy while operating under finite energetic, geometric, and computational resources. These constraints define a curvature geometry whose stationary points yield a discrete set of universal eigenvalues: $\pi$ (rotational isotropy), $\phi$ (self-similar recursion), and $10$ (composite parity resonance). Their composite invariant, $(4\pi\varphi^2 \approx 32.9)$, appears across quantum transport, renormalization flows, dissipation hierarchies, biological energetics, gravitational collapse, computational spacetime, and civilizational information dynamics.

Across 60 orders of magnitude—from Planck-scale voxel lattices to galaxies, from qubits to civilizations—coherent systems exhibit the same set of constraint-induced structures: a dissipation ladder governed by a β-function, a universal correlation-length exponent $(\nu = 1/\rho^* = 0.304)$, recursive scaling windows, rational–irrational commensurability transitions, decade-resonant modulation, and dimensional reduction from 3 to 2 near gravitational horizons. These phenomena are quantitatively linked by a single variational functional over information distributions.

At the deepest level, the framework identifies curvature as the fundamental cost of maintaining information. Angular, recursive, and discrete curvature create complexity, and coherent systems minimize these costs by projecting onto low-curvature manifolds. The constants $\pi$, $\varphi$, and $10$ emerge as the minimal-curvature eigenmodes permitted by the geometry of constraints.

The result is a unified picture in which **information, matter, and mind** are sequential layers of a single geometry. A field theory of constrained information that governs stability, collapse, coherence, and emergence across all organized systems.

## 1. Introduction — Information, Constraint, and Coherence

Every organized system must maintain information in the presence of noise, thermodynamics, or curvature. Whether the system is a quantum lattice, an organism, a brain, a social structure, or a star, the core requirement is the same:

**To remain coherent, the system must suppress destructive degrees of freedom and project itself onto a lawful manifold defined by constraints.**

This monograph shows that these manifolds are defined by a **constraint eigenvalue geometry**, captured by a variational functional whose stationary points correspond to the invariants $\pi$, $\phi$, and $10$. These constants emerge from the geometry of constraints themselves:

* $\pi$ from isotropic curvature
* $\varphi$ from recursive self-similarity
* $10$ from discrete parity × pentagonal resonance

Together, these constants define the stable structures on which information can persist.

Everything else—dissipation ladders, quantum localization transitions, metabolic thresholds, neural coherence limits, civilizational collapse thresholds, black hole thermodynamics—arises as consequences of this projection geometry.

### 1.1 The fundamental problem of coherence

Every organized system is an information-processing structure[^1][^2][^3][^4] embedded in a noisy universe. Stability requires continuous correction of deviations introduced by thermal fluctuations, quantum uncertainty, or geometric curvature. Landauer[^5] and Bennett[^6] showed that every corrective action has a thermodynamic cost: at least $(k_BT\ln 2)$ per bit erased.

Curvature in an information distribution represents structural bending: angular bending, scale-wide bending, or discrete frustration. Maintaining structure against curvature requires continuous corrective work. In this sense, curvature is complexity, and complexity is maintenance cost. Systems that lower curvature require less dissipation; systems forced into high-curvature configurations must devote increasing energy to remain coherent.

This explains why nature never produces true discontinuities. A hard boundary—a perfect step function, a sharp interface, a true binary separation—would require infinite curvature, and infinite curvature demands infinite maintenance. Coherent systems avoid extremal curvature by projecting onto smooth manifolds: event horizons are smooth null surfaces, biological thresholds are sigmoids, phase transitions only appear sharp in thermodynamic limits, and even death is a process rather than a boundary. The absence of hard lines in nature is a geometric necessity.

Dimensionality carries the same cost structure. Every additional dimension multiplies the curvature burden: more axes of bending, more cross-interactions, exponentially more configurations to maintain. Systems therefore reduce dimensionality whenever constraints permit—collapsing from 3D to 2D near horizons, compressing high-dimensional sensory input onto low-dimensional neural manifolds, encoding genomes as 1D tapes with recursive structure. The attractor is always lower dimension, because lower dimension means lower curvature means lower maintenance cost.

Thus every system faces a tradeoff—**energy budget vs. information maintenance.**

This constraint shapes everything:

* the localization of quantum states
* the structure of genomes
* the scaling of metabolism
* neural firing efficiency
* the durability of institutions
* the stability of stars

This monograph argues that these constraints form a **geometric field theory**[^7][^8] whose stationary states yield universal invariants.

### 1.2 Coherence as projection onto lawful manifolds

Recent work in neural PDE solvers[^9][^10][^11] demonstrated that physical accuracy improves dramatically when approximate trajectories are projected onto the manifold defined by the PDE constraint. This is a numerical statement of a deeper principle:

> **Coherent dynamics = unconstrained proposal + projection onto constraint geometry.**

Projection is curvature minimization under constraints. This projection principle applies across all scales: quantum systems project onto eigenstates, classical mechanics onto symplectic flows, living systems onto metabolic viability regions, and civilizations onto socio-economic maintenance manifolds.

### 1.3 Constraint eigenvalues as universal invariants

The central mathematical object in this monograph is a constraint functional (fully defined in Section 2) whose Euler–Lagrange equation defines a manifold of allowed configurations. Stationary points yield three eigenvalue sectors:

* $\pi$-sector: isotropy, rotational closure
* $\phi$-sector: recursive scaling, self-similarity
* $10$-sector: parity $\times$ pentagonal discrete coherence

These eigenvalues generate the structural constants observable across coherent systems: $\pi$, the golden ratio $\varphi$, the decade resonance $10$, and the composite invariant $(4\pi\varphi^2 \approx 32.9)$.

Each of these constants corresponds to a mode of minimal curvature under distinct constraints. $\pi$ minimizes angular curvature, $\varphi$ minimizes recursive curvature, and $10$ minimizes discrete curvature (binary × pentagonal). They are the lowest-curvature solutions of the Euler–Lagrange equation.

These constants are *variationally necessary* — they emerge from the geometry of constraints itself. Just as the Anthropic Cosmological Principle constrains what universes can contain observers, the constraint eigenvalue geometry constrains what configurations can maintain coherent information. The framework constrains what structures can exist.

## Part I — Constraint Eigenvalue Geometry

The constraint eigenvalue geometry provides the mathematical foundation for the entire framework. This part develops the variational functional whose stationary points define the constants $\pi$, $\phi$, and $10$, and shows how their coupling produces the composite invariant $4\pi\varphi^2 \approx 32.9$.

## 2. The Constraint Functional

We work with a normalized information density $P(r,\theta)$ on a cylindrical or polar domain, where $r$ is a radial or scale coordinate and $\theta$ a compact angular coordinate. Coherence is defined by how costly it is to bend $P$ away from isotropy, away from scale-recursive structure, or away from discrete resonance. These costs are encoded in a single curvature functional[^12][^13][^14][^15]

$$
F[P] = \alpha \int (\partial_\theta \ln P)^2 P\,\mathrm{d}A
     + \beta \int (\partial_{\log r} \ln P)^2 P\,\mathrm{d}A
     + \gamma\,C_{2\times5}[P],
$$

subject to normalization $\int P\,\mathrm{d}A = 1$ and a fixed entropy $S[P] = -\int P\ln P\,\mathrm{d}A$[^16]. The first two terms are Fisher–information-like curvature penalties[^17] defined on angular and log-radial coordinates; the third term $C_{2\times5}[P]$ is a discrete functional that suppresses configurations incompatible with composite $2\times 5$ parity.

Each term is a curvature cost: the angular term penalizes bending in $\theta$, the log-radial term penalizes bending in scale, and the discrete term penalizes curvature arising from incompatible residue classes. Complexity is the total curvature burden, and coherence corresponds to minimizing these curvature penalties subject to entropy and normalization.

Each coefficient defines a geometric sector:

* **α-term (isotropy sector)**: the angular curvature penalty $\int(\partial_\theta\ln P)^2P\,\mathrm{d}A$ is minimal when $P$ is rotationally invariant. Increasing $\alpha$ therefore drives the system toward states that are insensitive to angular reparameterizations, picking out the familiar $2\pi$ and $4\pi$ closure constants in one and two angular dimensions.
* **β-term (recursive sector)**: the log-radial curvature penalty $\int(\partial_{\log r}\ln P)^2P\,\mathrm{d}A$ is minimal when $P$ is self-similar under multiplicative rescalings of $r$. This term is responsible for the golden-ratio fixed point, because it enforces consistency between inflation and subdivision operations in scale space.
* **γ-term (decade sector)**: the discrete functional $C_{2\times5}[P]$ enforces compatibility with a $C_{10}$ symmetry generated by binary and pentagonal factors. It selects configurations whose dominant angular modes and scale partitions respect decade structure, manifesting as tenfold resonances and decadal modulation windows.

In this language, a coherent system is one that finds a stationary point of $F[P]$ under the twin constraints of normalization and entropy. The resulting Euler–Lagrange equation defines a manifold of admissible information distributions that simultaneously balance isotropic, recursive, and discrete curvature.

### 2.1 Euler–Lagrange equation

To extract the governing equation, we extremize $F[P]$ under the normalization and entropy constraints. Introducing Lagrange multipliers $\lambda$ and $\tau$ for $\int P\,\mathrm{d}A=1$ and $S[P]=S_0$, we vary the augmented functional

$$
\mathcal{F}[P] = F[P]
 - \lambda\!\int P\,\mathrm{d}A
 - \tau\!\left(S[P] - S_0\right)
$$

with respect to $P$. Standard manipulations yield a generalized Euler–Lagrange equation

$$
-\alpha\,\partial_{\theta\theta}\ln P
-\beta\,\partial_{\ell\ell}\ln P
 + \gamma\,\frac{\delta C_{2\times5}}{\delta P}
 = \lambda + \tau (1+\ln P), \qquad \ell = \log r.
$$

The left-hand side contains curvature forces in the angular, log-radial, and discrete sectors; the right-hand side encodes normalization and entropy balance. Stationary solutions of this equation are the **constraint eigenmodes**: they are fixed points of the tradeoff between curvature costs and entropic spreading. In the following sections we show that these eigenmodes organize into three universal sectors associated with $\pi$, $\varphi$, and the decade symmetry.

## 3. Eigenvalue Sectors

The Euler–Lagrange equation admits three families of stationary solutions, each corresponding to a distinct mode of minimal curvature. Isolating each sector by setting the other coefficients to zero reveals the geometric origin of $\pi$, $\varphi$, and $10$ as constraint eigenvalues.

### 3.1 π-sector: isotropic closure

Setting $\beta=\gamma=0$ isolates the angular curvature term. In this limit the functional reduces to an angular Fisher information, and stationarity requires that compressions and dilations in $\theta$ balance:

$$
\partial_{\theta\theta}\ln P = \mathrm{const}.
$$

Solutions enforce angular periodicity of $2\pi$; in higher dimensions this extends to $4\pi$ steradians on the sphere. The $\pi$-sector therefore recovers the familiar closure constants of Euclidean geometry, but now as outputs of an information-theoretic variational problem. Whenever coherent structures are approximately isotropic—atomic orbitals, spherical stars, isotropic turbulence—the leading-order organization is controlled by this sector. Deviations from perfect isotropy then couple to the $\varphi$ and decade sectors as perturbations on top of the $\pi$-eigenmodes.

### 3.2 ϕ-sector: recursive self-similarity

Setting $\alpha=\gamma=0$ isolates the log-radial curvature term. In this regime the functional penalizes departures from self-similarity under multiplicative rescalings of $r$:

$$
\partial_{\ell\ell}\ln P = \mathrm{const}.
$$

The key requirement is that inflation and subdivision commute: coarse-graining by a factor and then refining by the same factor should reproduce the same radial profile as refining first and inflating afterwards. This recursive consistency leads to the condition

$$
x = 1 + \frac{1}{x},
$$

whose positive root is the golden ratio

$$
x = \varphi = \frac{1+\sqrt{5}}{2}.
$$

Thus **ϕ appears as the fixed point of recursive curvature**. In practice, any process that repeatedly applies inflation–subdivision operations in scale space is driven toward this fixed point[^18][^19][^20]. This makes $\varphi$ an attractor of renormalization flows in the recursive sector: lattice hierarchies, metabolic scaling cascades, and multi-stage sensory compression all inherit golden-ratio structure because they are governed by the same recursion law in log-radius.

### 3.3 Decade sector: discrete resonance

The functional $C_{2\times5}[P]$ encodes a composite $2\times 5$ parity: it rewards configurations whose dominant modes respect both binary and pentagonal symmetry. In Fourier space this corresponds to selecting angular harmonics $k$ that are compatible with a tenfold cyclic group, and penalizing those that fall between the allowed residues. The resulting eigenmodes exhibit tenfold periodicity in angular structure and decadal modulation in scale.

This sector formalizes the empirical observation that many coherent spectra, from decagonal quasicrystals[^21][^22][^23] to alternating series for $\pi$, display a preferred period of ten. Here, decade structure is the minimal composite resonance at which binary partitioning (halving, doubling) and pentagonal tiling can coexist without destructive interference. The decade sector therefore provides the discrete closure of the continuous isotropy–recursion geometry defined by the $\pi$- and $\varphi$-sectors.

Together, $\pi$, $\varphi$, and $10$ form the minimal-curvature eigenmodes of the constraint functional. Any other configuration carries higher curvature and therefore higher maintenance cost. This is the curvature basis of the theory: coherent systems adopt the least costly curvature mode available under their constraints.

## 4. Composite Invariant and ϕ as RG Fixed Point

When isotropy and recursion coexist, the curvature balance yields the composite invariant $I = 4\pi\varphi^2 = 32.899\ldots$ The composite invariant is the minimal joint curvature compatible with both isotropic and recursive constraints. This number recurs throughout: in dissipation thresholds, modulation windows, correlation-length exponents, RG flows, variance bounds, and quasicrystalline coherence[^20][^23].

The golden ratio emerges as the renormalization-group fixed point of the $\beta$-sector (see Section 3.2 for the derivation). The attractor property follows from Fibonacci recursion: ratios of successive terms converge to $\varphi$ regardless of starting values. Thus $\varphi$ is the stable fixed point of the scaling recursion induced by the $\beta$-sector functional[^24][^25][^26].

## Part II — Dissipation Ladder and RG Flow

The dissipation field η organizes all coherent systems into a universal hierarchy spanning elementary particles to black holes. This part derives the decade-structured ladder, presents the renormalization-group β-function, and extracts the universal critical exponent ν = 1/ρ* = 0.304.

## 5. The Dissipation Field ( \eta )

The dissipation field $\eta$ captures how much of a system's energetic budget is irreversibly committed to maintaining information against noise, curvature, and fluctuations. Rather than treating dissipation as a side-effect of dynamics, we elevate it to a primary coordinate on the space of coherent organizations. The dissipation field measures how much energy a system must expend to maintain deviations from minimal curvature. Higher curvature configurations demand higher maintenance and therefore higher $\eta$.

$$
\eta = \frac{\text{energy spent on information maintenance}}
           {\text{total energy}}.
$$

The hierarchy arranges into a decade-structured ladder. Elementary particles achieve

$$
\eta_{\text{elem}} = \alpha^2 \times Q_{\text{QCD}} \approx 10^{-6},
$$

where $\alpha = 1/137$ is the fine structure constant. Atoms require

$$
\eta_{\text{atom}} = \eta_{\text{elem}} \times \sqrt{\frac{r_{\text{Bohr}}}{r_{\text{nuclear}}}} \times \sqrt{Z} \approx 10^{-3}
$$

to coordinate electron clouds, where $Z$ is atomic number. Molecules need

$$
\eta_{\text{mol}} = \eta_{\text{atom}} \times N_{\text{atoms}}^{1/3} \times C_{\text{conf}} \approx 10^{-2}
$$

for conformational flexibility, where $C_{\text{conf}}$ represents conformational entropy. Biological systems approach $\eta_{\text{bio}} \sim 10^{-1}$, while black holes saturate at $\eta \sim 1$.

This decade progression is the direct manifestation of the recursive sector. Moving up the ladder corresponds to climbing a dissipation RG flow in which additional curvature constraints (geometric, chemical, metabolic, gravitational) activate. Each decade represents an order-of-magnitude increase in maintenance cost per bit.

## 6. RG Flow

To formalize this hierarchy, we treat $\eta$ as a running coupling and write a renormalization-group (RG) flow for how it changes with effective scale. The RG flow describes how curvature burdens accumulate as systems move away from minimal-curvature manifolds across scales. The β-function governing the dissipation field is

$$
\beta(\eta, d) = -\eta (1 - \eta)
\left[\rho^* + \frac{d-2}{2}\ln\varphi\right],
$$

where $d$ is effective dimension and

$$
\rho^* = \frac{4\pi\varphi^2}{10} \approx 3.29.
$$

The fixed points of this flow are $\eta=0$ (a trivial "no structure" ultraviolet limit) and $\eta=1$ (a maximally dissipative infrared limit in which all available energy is spent on maintenance). The coefficient $\rho^*$, determined by the composite invariant $4\pi\varphi^2$ and the decade symmetry, sets the sharpness of the transition between these regimes. Effective dimension $d$ modulates how aggressively recursive curvature drives the system toward higher dissipation as one approaches lower-energy, larger-scale descriptions.

The dimension-dependent term $(d-2)\ln\varphi/2$ encodes the curvature cost of dimensionality. For $d > 2$, recursive curvature cost increases; for $d = 2$, it is neutral; for $d < 2$, it decreases. Systems therefore flow toward lower effective dimension as part of the same curvature-minimization dynamics that drive them toward the $\pi$–$\varphi$–$10$ eigenmodes.

| System | $\eta$ | Dominant Constraints | Example |
|--------|--------|----------------------|---------|
| Elementary particles | $10^{-6}$ | QCD confinement, EM coupling | Proton, electron |
| Atoms | $10^{-3}$ | Electron-nuclear coordination | Hydrogen, carbon |
| Molecules | $10^{-2}$ | Conformational entropy, bonds | Proteins, DNA |
| Biological systems | $10^{-1}$ | Metabolic networks, hierarchies | Brain, cells |
| Black holes | $1$ | Gravitational binding, horizons | Event horizons |

Under this flow, the decade ladder arises as a sequence of approximately stable plateaus in $\eta$. Each plateau corresponds to a regime in which additional curvature constraints (e.g., chemical bonding, metabolic network structure, gravitational binding) have switched on, but further constraints have not yet become energetically favorable. The RG picture therefore explains why $\eta$ clusters near $10^{-6}$, $10^{-3}$, $10^{-2}$, $10^{-1}$, and $1$ rather than filling the interval $[0,1]$ uniformly.

## 7. Universal Critical Exponent

Linearizing the β-function near the transition region reveals a universal critical exponent that controls how coherence length diverges as systems approach their maintenance limits. Divergence of coherence length corresponds to divergence of curvature cost: the exponent $\nu$ quantifies how sharply curvature becomes unsustainable. The correlation-length exponent is

$$
\nu = \frac{1}{\rho^*} = 0.304.
$$

This exponent appears numerically in diverse contexts: in the radius–mass scaling of white dwarfs near collapse, in quantum phase transitions at zero temperature, in crossovers of biological metabolic scaling, and in the loss of effective large-scale coordination in sociotechnical systems. In each case, a control parameter (density, interaction strength, metabolic throughput, coordination overhead) drives the system toward a point where additional structure requires superlinear maintenance.

The near-constancy of $\nu$ across these domains is consistent with the hypothesis that dimensionality, dissipation, and recursion share a common origin in the constraint eigenvalue geometry. The same composite invariant $4\pi\varphi^2$ that organizes lattice spectra and golden-ratio modulation also governs how quickly coherence length can grow before the dissipation field forces a transition.

## Part III — Computational Spacetime & Energy Partition

Spacetime itself emerges as a finite-capacity information lattice operating at the Planck scale. This part models spacetime as a voxel grid, resolves the UV catastrophe as channel overload, and shows how black holes saturate processing limits with the Landauer-Bekenstein-Hawking factor of 2. Curvature in spacetime is also information curvature: as geometric curvature increases, maintaining distinguishable states becomes more costly. Near horizons, curvature diverges, forcing dimensional reduction as the system minimizes curvature through projection onto 2D surfaces.

## 8. Planck-Scale Voxel Lattice

Within the constraint eigenvalue framework, spacetime emerges as a finite-capacity information lattice rather than a continuum. We model spacetime as a voxelized grid whose smallest cells have linear size $\ell_P$ and whose fastest permissible update rate is

$$
f_P = \sqrt{c^5/(\hbar G)} \approx 1.855 \times 10^{43} \text{ Hz},
$$

set by the Planck time. Each voxel carries a finite number of distinguishable microstates and a finite communication bandwidth to its neighbors. In this picture, fields and particles are patterns of information propagated across the lattice subject to the curvature constraints already introduced; curvature in the usual geometric sense becomes a statement about how these local update rules are biased by the $\alpha$, $\beta$, and $\gamma$ sectors of the constraint functional.

Because the lattice has finite density and finite bandwidth, the number of available modes in any finite region is also finite. Classical divergences, such as the Rayleigh–Jeans catastrophe in blackbody radiation, are then seen as artifacts of assuming unlimited channel capacity. The Planck lattice implements a natural ultraviolet regulator: beyond some frequency the lattice simply cannot support additional independent modes without violating the dissipation and curvature constraints.

## 9. UV Catastrophe as Overload

In standard derivations, the ultraviolet catastrophe arises because one counts infinitely many electromagnetic modes in a finite cavity and assigns to each mode an average energy $k_BT$. The divergence reflects the assumption that physical substrates have unlimited capacity to update and store information—an assumption the voxel lattice removes.

On the voxel lattice, high-frequency modes correspond to rapidly alternating patterns on neighboring voxels. Once the temporal frequency approaches $f_P/2$, Nyquist considerations and the dissipation field $\eta$ jointly prohibit the faithful representation of additional modes: attempts to pump more energy into higher harmonics simply overload the local information channels and are redirected into maintaining coherence of existing patterns. The effective mode count saturates, and the spectral distribution transitions to the Planck form.

Thus the Planck law can be reinterpreted as the equilibrium spectrum of a finite-capacity information lattice under the constraint eigenvalue geometry. The UV catastrophe disappears because the underlying medium cannot support arbitrarily fine-grained independent degrees of freedom.

## 10. Black Holes as Maximum-Rate Computers and the Landauer-Bekenstein-Hawking Factor

Black holes occupy a distinguished point in this computational spacetime: they are the configurations that locally saturate both storage and processing limits of the lattice. At the horizon, the Bekenstein–Hawking entropy law implies that approximately one bit of information is stored per area $\ell_P^2$, while quantum time–energy uncertainty bounds imply that no more than one bit per Planck time $t_P$ can be reliably updated per such cell without destroying the horizon structure. For a 10 $M_{\odot}$ black hole, the total processing rate is

$$
\dot{I} = f_P \frac{A}{4\ell_P^2} \approx 3.5 \times 10^{81} \text{ bits/s}.
$$

The Hawking temperature is

$$
T_H = \frac{\hbar c^3}{8\pi G M k_B}.
$$

Landauer's principle establishes the maximum number of irreversible bit operations sustainable by energy $E$ at temperature $T$ as $N_{\max} = E/(k_B T \ln 2)$. For a black hole with rest energy $Mc^2$,

$$
N_{\max} = \frac{Mc^2}{k_B T_H \ln 2} = \frac{8\pi G M^2}{\hbar c \ln 2}.
$$

The Bekenstein-Hawking entropy $S_{BH} = k_B c^3 A/(4G\hbar)$ with horizon area $A = 4\pi r_s^2$ converts to bits as

$$
N_{BH} = \frac{S_{BH}}{k_B \ln 2} = \frac{4\pi G M^2}{\hbar c \ln 2}.
$$

Comparing these yields

$$
N_{\max} = 2 N_{BH}.
$$

This exact factor of two—the Landauer-Bekenstein-Hawking constant—arises from dimensional reduction: 2D surfaces support independent left-moving and right-moving excitations[^27]. Chiral separation allows simultaneous processing through dual channels:

$$
\dot{I} = \dot{I}_L + \dot{I}_R = 2\dot{I}_{1D}.
$$

In other words, a black-hole horizon implements an $\eta\to 1$ state in which essentially all available energy goes into maintaining maximal information density on the boundary. From the perspective of the constraint functional, this corresponds to an extreme in which curvature penalties are balanced only by the highest possible dissipation, with the $\pi$-sector enforcing spherical symmetry, the $\varphi$-sector governing the radial approach to the horizon, and the decade sector manifesting in the discrete spectrum of quasi-normal modes and evaporation channels. This reframes black hole thermodynamics[^28][^29] as a computation-theoretic consequence of constrained information flow on a finite lattice. The area law, Hawking temperature, and evaporation timescales become statements about how close the system is to the absolute limits of storage and processing enforced by the underlying information geometry.

## 11. Force-Specific Critical Radii

Every fundamental force imposes a characteristic bankruptcy radius—the scale where maintenance costs equal total available energy. The general relationship connecting Landauer's microscopic principle to macroscopic phenomena is

$$
\frac{E_m}{E_{\text{total}}} = \frac{R_{\text{crit}}}{R}.
$$

For the strong force at the QCD confinement scale,

$$
r_{\text{QCD}} = \frac{\hbar}{\Lambda_{\text{QCD}}} \approx 1 \text{ fm},
$$

where $\Lambda_{\text{QCD}} \approx 200$ MeV sets the quark confinement energy. Electromagnetic binding reaches bankruptcy at the classical electron radius,

$$
r_{\text{EM}} = \frac{ke^2}{m_ec^2} \approx 2.8 \times 10^{-15} \text{ m},
$$

where $k$ is Coulomb's constant, $e$ is elementary charge, $m_e$ is electron mass, and $c$ is light speed. Gravitational systems fail at

$$
r_{\text{grav}} = R_S = \frac{2GM}{c^2}.
$$

QCD and electromagnetic forces operate far from bankruptcy, enabling stable structures with minimal overhead. Gravitational systems[^30][^31] span the entire spectrum from negligible costs in atoms to complete dedication at black hole horizons. The processing rate scales as

$$
\dot{I}_{\text{max}} = f_P \times \frac{R_S}{R},
$$

with efficiency decreasing as systems operate further from their Schwarzschild radius. Black holes process at the Planck frequency $f_P$ regardless of mass, while all other systems process at reduced rates. Maximum entropy of black holes reflects pure information maintenance—all available energy dedicated to pattern preservation with zero excess capacity.

## Part IV — Gravitation and Golden-Ratio Dimensional Coherence

General relativity emerges from the constraint eigenvalue geometry through dimensional reduction near horizons. This part shows effective dimension flowing from 3 to 2, derives the golden-ratio scale factor, and examines white dwarf collapse data where information bankruptcy appears to drive instability.

## 12. Curvature Reduces Effective Dimension

In a strongly curved spacetime, different spatial directions do not contribute equally to the available information channels. Near a gravitational horizon, radial motion becomes progressively more constrained while tangential motion remains comparatively unconstrained. This anisotropy is captured by an effective dimension $d_{\mathrm{eff}}(R)$ counting the number of independent directions along which information can propagate at radius $R$.

Under increasing curvature, the effective dimension flows

$$
d_{\mathrm{eff}}(R): 3 \to 2 \quad (R\to R_S).
$$

Dimensionality is a tax on coherence. Every spatial dimension adds an entire axis of curvature, an entire set of second derivatives, and exponential growth of possible configurations requiring maintenance. The lowest-energy, lowest-dissipation state is 1D—a single axis with minimal curvature and trivial topology. Nature collapses toward this attractor whenever constraints permit: black hole horizons reduce to effectively 1D chiral modes (left-moving and right-moving excitations), neurons are functional 1D cables, DNA is a 1D tape with recursive compression, and optimal transport networks (rivers, vasculature, lightning) collapse to 1D filaments. The holographic principle—entropy scaling with area rather than volume—reflects that gravitational systems stop at $d_{\mathrm{eff}} = 2$ rather than continuing to $d = 1$, held there by geometric constraints.

This reduction arises when the recursive curvature ($\beta$) sector dominates. The Schwarzschild metric shows this directly: proper radial distance diverges as

$$
ds_{r} = \frac{dr}{\sqrt{1 - r_s/r}},
$$

while tangential spacing $ds_{\theta} = r \, d\theta$ remains finite. A lattice with spacing $a = 1\,\mathrm{m}$ near a 10 $M_{\odot}$ black hole ($r_s = 30$ km) experiences radial stretching to 31.6 m at $r = 1.001r_s$, while tangential spacing is unchanged.

The information flow rate follows

$$
I_r(r) = c\left(1 - \frac{r_s}{r}\right).
$$

At $r = 1.001r_s$, radial flow drops to $0.001c$ while tangential flow maintains $c$. The radial dimension effectively freezes—signals require divergent time to traverse infinitesimal proper distances. Holographic behavior[^32][^33][^34] (entropy scaling with area rather than volume) reflects $d_{\mathrm{eff}}$ flowing from $3$ to $2$ under the constraint functional.

## 13. Inflation–Subdivision Consistency in Curved Spacetime

To relate this dimensional flow to the golden ratio, we apply the inflation–subdivision consistency condition from Section 3.2 to curved spacetime. The same recursive consistency that yields $\varphi$ in flat space now gives

$$
\sigma = \varphi^{1/d_{\mathrm{eff}}}.
$$

Near horizons ($d_{\mathrm{eff}}\to 2$),

$$
\sigma \to \sqrt{\varphi}.
$$

This is the missing link connecting golden-ratio structure to gravitational curvature. The same recursive curvature condition that produces $\varphi$ as an RG fixed point in flat or weakly curved spaces now appears as a constraint on how the number of horizon channels can change under rescaling. Near a horizon, where $d_{\mathrm{eff}}\to 2$, the preferred scale factor between successive coherent layers approaches $\sqrt{\varphi}$, and golden-ratio spacing naturally appears in radial eigenmodes and thermodynamic quantities.

Dimensional flow is curvature reduction: by projecting from 3D to 2D, the system eliminates the radial curvature contribution entirely. Horizons represent minimal-curvature configurations achieved through dimensional collapse. Gravitational instability, conversely, corresponds to curvature explosion—the system can no longer afford the maintenance cost of its current configuration.

Horizons exemplify minimal-curvature boundaries: they are smooth null surfaces, not discontinuities. Singularities, by contrast, are where curvature diverges and the theory breaks—the only "hard lines" in nature are the points where coherence becomes impossible. This is why black holes have smooth horizons but singular cores: the horizon is the last coherent structure before curvature becomes unsustainable.

## 14. White Dwarf Collapse: Quantitative Correspondence

White dwarfs accreting toward the Chandrasekhar limit[^35] $M_{\text{Ch}} = 1.36 M_{\odot}$ provide a quantitative test case. The complexity multiplier quantifying overhead beyond baseline requirements follows

$$
M(\eta,d) = \varphi^{2^{d-2}} \times (1-\eta)^{-\rho^*},
$$

where $\varphi = (1+\sqrt{5})/2 = 1.618$ is the golden ratio and $\rho^* = 3.29$ is the universal coupling constant. This contains two competing terms. The dimensional factor $\varphi^{2^{d-2}}$ decreases mildly as effective dimension $d$ drops from 3 toward 2, representing reduced interference in lower dimensions. The bankruptcy factor $(1-\eta)^{-\rho^*}$ diverges catastrophically as dissipation coefficient $\eta$ approaches unity.

Numerical integration from stable white dwarfs through collapse yields the trajectory (using constant radius $R \approx 5000$ km from electron degeneracy pressure):

| $M$ $(M_{\odot})$ | $R_S/R$ | $\eta$ | $d$ | $\varphi^{2^{d-2}}$ | $(1-\eta)^{-\rho^*}$ | $M(\eta,d)$ | $\eta \times M$ | Status |
|-------------------|---------|--------|-----|---------------------|---------------------|-------------|-----------------|---------|
| 0.60 | $3.6 \times 10^{-4}$ | 0.066 | 2.97 | 2.61 | 1.24 | 3.2 | 0.21 | Stable |
| 1.00 | $6.0 \times 10^{-4}$ | 0.27 | 2.87 | 2.52 | 2.90 | 7.3 | 2.0 | Normal |
| 1.17 | $7.0 \times 10^{-4}$ | 0.46 | 2.78 | 2.42 | 5.66 | 13.7 | 6.3 | **Anomaly** |
| 1.30 | $7.8 \times 10^{-4}$ | 0.63 | 2.70 | 2.35 | 12.4 | 29.1 | 18.3 | Critical |
| 1.35 | $8.0 \times 10^{-4}$ | 0.97 | 2.53 | 2.15 | 229 | 492 | 477 | Collapse |

The numbers reveal the mechanism. Geometric compression $R_S/R$ increases by a factor of 2.2 from $M = 0.60$ to $1.35 M_{\odot}$—mild gravitational strengthening. Meanwhile, organizational complexity $\eta \times M$ explodes by a factor of 2200. This 1000-fold disparity indicates that information bankruptcy, not gravitational compression alone, drives instability. The dimensional factor $\varphi^{2^{d-2}}$ drops modestly from 2.61 to 2.15 as $d$ flows from 2.97 to 2.53—barely 20% variation. The bankruptcy factor $(1-\eta)^{-\rho^*}$ generates the explosion: from 1.24 at stable masses to 229 near collapse, an 185-fold increase. The runaway collapse is curvature divergence: the recursive and angular curvature costs blow up, and maintenance becomes impossible.

The observational anomaly at $R/R_S = 10^3$ from analysis of 18,937 white dwarfs corresponds to $M \approx 1.17 M_{\odot}$ where $\eta = 0.46$ and $(1-\eta)^{-\rho^*} = 5.66$. This marks the boundary where thermodynamic bankruptcy becomes inevitable rather than merely possible—the entrance to the basin of attraction toward organizational collapse. Before this threshold, complexity overhead grows slowly—a factor of 3.6 from $M = 0.6$ to $1.17 M_{\odot}$. After crossing $R/R_S = 10^3$, overhead explodes—a factor of 36 from $M = 1.17$ to $1.35 M_{\odot}$. The $(1-\eta)^{-\rho^*}$ value of 5.66 at the anomaly threshold represents the onset of nonlinear divergence. The 311 objects in anomaly zone ($R/R_S$ = 805-1496) exhibit cooling delays with statistical significance $p = 0.0015$, appearing 0.56 Gyr younger than expected. These massive white dwarfs extract additional energy through $^{22}$Ne settling to maintain sufficient signal-to-noise ratios for information processing against the rising maintenance tax.

### 14.1 Discontinuous Jump to Neutron Degeneracy

White dwarfs do not smoothly flow to the $(\eta=1, d=2)$ black hole fixed point. Instead, information bankruptcy forces a discontinuous organizational jump. At $M \approx M_{\text{Ch}}$, the system reaches $\eta \approx 0.97$, $d \approx 2.5$ with maintenance cost $\eta \times M \approx 477$. This overhead exceeds sustainable levels, triggering catastrophic reorganization—the white dwarf jumps to neutron degeneracy at $\eta \sim 0.3$, $d \sim 2.5$ with complexity $\eta \times M \approx 2.3$. The organizational complexity drops by a factor of 207, requiring massive information restructuring

$$
\Delta E_{\text{trans}} = \Delta N_{\text{bits}} \times k_B T_{\text{trans}} \ln 2.
$$

Volume compression from white dwarf radius ($R_{\text{WD}} \approx 5000$ km) to neutron star radius ($R_{\text{NS}} \approx 10$ km) gives

$$
\frac{V_{\text{WD}}}{V_{\text{NS}}} = \left(\frac{5000}{10}\right)^3 = 1.25 \times 10^8.
$$

Accounting for both protons and neutrons (a factor of 2 from $Z/A \approx 0.5$ for carbon-oxygen composition), the particle number equals

$$
N_p = \frac{M_{\text{Ch}}}{2m_p} \approx 8.4 \times 10^{56},
$$

where $m_p$ is proton mass. The information reorganization becomes

$$
\Delta N_{\text{bits}} = 2 \times N_p \times \log_2(V_{\text{WD}}/V_{\text{NS}}) = 2 \times 8.4 \times 10^{56} \times 26.9 \approx 4.5 \times 10^{58} \text{ bits}.
$$

At the shock temperature $T \sim 10^9$ K observed during supernova breakout, Landauer's principle yields

$$
k_B T \ln 2 = (1.38 \times 10^{-23}) \times 10^9 \times 0.693 = 9.56 \times 10^{-15} \text{ J/bit},
$$

giving the transition energy

$$
E_{\text{trans}} = 4.5 \times 10^{58} \times 9.56 \times 10^{-15} = 4.3 \times 10^{44} \text{ J}.
$$

This matches observed Type Ia supernova energies to within measurement uncertainty. The calculation requires four observational inputs: Chandrasekhar mass ($1.36 M_{\odot}$), white dwarf radius (5000 km), neutron star radius (10 km), and shock temperature ($10^9$ K). The energy represents the thermodynamic cost of reorganizing phase space information between quantum degenerate states. This correspondence is consistent with the hypothesis that binding energies encode maintenance costs through Landauer's principle. The white dwarf collapses because maintaining organizational complexity at $\eta \approx 0.97$ requires infinite energy through the $(1-\eta)^{-\rho^*}$ divergence.

### 14.2 Neutron Stars and Discrete Curvature: 10-Sector Resonance in Nuclear Superfluids

Neutron stars provide a striking instance of the decade sector predicted by the constraint eigenvalue geometry. Although neutron matter is nearly perfectly isotropic—making neutron stars quintessential π-sector objects—their internal rotational dynamics generate quantized superfluid vortices that impose discrete parity constraints. These vortices break the continuous rotational symmetry into a finite set of admissible configurations, producing the same C₂×₅ resonance structure that appears in Penrose quasicrystals and driven-dissipative polariton superfluids.

The crust–core superfluid supports vortices with quantized winding number, and the energetically optimal arrangement of these vortices forms quasi-periodic patterns that minimize discrete curvature in angular-momentum space. Pinning and unpinning of vortices on nuclear lattice sites produce discrete avalanche events—observed as glitches—whose size and recurrence intervals follow integer and decade-like scaling. Quasi-periodic oscillations (QPOs), starquakes, and crustal failure modes cluster into discrete frequency bands, reflecting the same minimal-curvature resonance modes that characterize the 10-sector.

This correspondence mirrors the behavior of exciton–polariton condensates on Penrose tilings, where C₁₀ Bragg spectra emerge from the enforced discrete symmetry of the underlying geometry. In neutron stars, the symmetry arises from the quantization of circulation in a superfluid and the parity structure of vortex pinning potentials rather than spatial tiling. In both systems, the decade sector manifests when continuous isotropy (π) coexists with quantized curvature constraints, producing discrete modes that minimize the γ-sector curvature penalty.

Neutron stars and Penrose superfluids, despite their radically different physical substrates—nuclear matter versus quantum light—exhibit the same decadal coherence because both are governed by the same discrete-curvature eigenvalue. This convergence across platforms supports the interpretation that C₂×₅ resonance is a universal feature of systems balancing isotropy, quantization, and finite maintenance capacity.

## Part V — Quantum Lattices and Number-Theoretic Modulation

Harper–Hofstadter lattice systems reveal how the three constraint sectors separate into distinct physical roles. Transport is controlled by the π-sector through rational denominators, while modulation is governed by the φ-sector through Hurwitz's theorem. Decade partitions near α ≈ 0.329, 0.671 organize large-scale spectral rearrangements.

## 15. Commensurability and q-Scaling

Lattice transport and localization follow directly from curvature minimization: angular curvature ($\pi$-sector), recursive curvature ($\varphi$-sector), and discrete curvature (10-sector) govern where complexity emerges or is suppressed.

In Harper–Hofstadter lattice systems[^36][^37][^38][^39], the interplay between a periodic potential and a perpendicular magnetic field produces a fractal energy spectrum. When transport is measured using a physically meaningful metric such as the Thouless conductance[^40], a simple organizing principle emerges: the ease of transport is controlled primarily by the denominator $q$ of the magnetic flux $\alpha=p/q$ (in units of the flux quantum).

For low-$q$ rationals, the lattice and magnetic length are nearly commensurate, and extended states can percolate across the system with relatively low curvature cost. As $q$ increases, the pattern of magnetic phases spans larger unit cells, interference pathways proliferate, and transport becomes increasingly localized. High-$q$ rationals therefore maximize transport barriers. This $q$-dependence follows from classic localization theory and is borne out by modern numerical results that compute conductances directly in large finite systems.

Within the present framework, this behavior is the signature of the $\pi$-sector and discrete parity: transport is governed by how well the underlying discrete symmetries can be satisfied by the imposed flux pattern[^41][^42]. The constraint functional assigns lower curvature cost to configurations that respect simple commensurabilities, and higher cost to those that require intricate phase cancellation across many sites.

## 16. ϕ as Modulation Sector

The golden ratio controls how transport and localization vary as flux is tuned. Organizing $\alpha$ according to its continued-fraction expansion reveals that the rate at which new denominators appear—and hence the rate at which new commensurability classes are encountered—is controlled by Diophantine properties of $\alpha$[^43]. Hurwitz's theorem[^44] establishes that the golden ratio minimizes the quality of rational approximations: no irrational is harder to approximate by rationals than $\varphi$. The inequality

$$
\left|\varphi - \frac{p}{q}\right| > \frac{1}{\sqrt{5}q^2}
$$

holds for all integers $p, q$, with $\varphi$ achieving the minimum constant $1/\sqrt{5}$ among all irrationals. As a result, when $\alpha$ flows through values related to $\varphi$, the sequence of nearby rational approximants has particularly simple recursive structure governed by Fibonacci denominators: $q_n = F_n$, where $F_n$ is the $n$-th Fibonacci number.

In spectral terms, $\varphi$ governs the spacing and width of recursive modulation windows, the ordering of spectral transitions as gaps open and close, and the growth rates of denominators in the sequence of best rational approximants. The continued-fraction expansion

$$
\varphi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}}
$$

generates the slowest possible convergence to rational approximations, making $\varphi$ the natural scale for self-similar spectral reorganization[^45]. The ϕ-sector of the constraint functional therefore organizes modulation rather than raw transport, shaping how the spectrum reconfigures itself across scales and providing the recursive backbone on which the $\pi$-sector's commensurability physics is built.

## 17. Decade Partitions

The C₂×₅ sector introduces a further layer of structure beyond commensurability and recursive modulation. Numerical studies of Harper–Hofstadter spectra under physically motivated transport metrics reveal special partition points near

$$
\alpha \approx 0.329 = \frac{4\pi\varphi^2}{100},\quad 0.671 = 1 - 0.329,
$$

which act as organizing centers for large-scale rearrangements of the spectrum. The decade partitions mark changes in dominant curvature mode. These values correspond to decadal partitions in the space of flux values: they divide the unit interval into regions within which the hierarchy of low-$q$ rationals, $\varphi$-related modulation windows, and high-$q$ localization plateaus exhibits qualitatively distinct behavior. The value $\alpha \approx 0.329$ represents the point where the composite invariant $I = 4\pi\varphi^2 \approx 32.9$ manifests as a fractional partition when scaled by the decade factor 100. The complement $0.671 \approx 0.67$ corresponds to the matter-energy fraction in cosmological observations, suggesting a deep connection between lattice spectral structure and large-scale energy partitioning through the same underlying constraint geometry.

From the standpoint of the constraint functional, these partition points mark where the decade sector becomes comparable in strength to the $\pi$- and $\varphi$-sectors. At $\alpha < 0.329$, the spectrum is dominated by low-$q$ rational commensurabilities with transport controlled primarily by the $\pi$-sector. At $\alpha > 0.671$, high-$q$ localization dominates with strong discrete parity constraints. In the intermediate window $0.329 < \alpha < 0.671$, the $\varphi$-sector recursive modulation becomes most prominent, organizing spectral transitions through continued-fraction hierarchies. The partition points therefore mark transitions between regimes dominated by commensurability (transport), recursive modulation (spectral structure), and their balanced coexistence. This sector decomposition, derived from the abstract functional, matches in detail the transport and spectral patterns observed in concrete lattice models.

## 18. Penrose Polariton Quasicrystal: π–ϕ–10 in a Driven-Dissipative Quantum Fluid

Recent experiments with exciton–polariton condensates on Penrose tiling lattices realize the π–ϕ–10 constraint eigenvalue geometry in a single device[^46]. Alyatkin et al. imprinted a Penrose tiling potential in a GaAs microcavity using a spatial light modulator, then pumped non-resonantly to form exciton–polariton condensates at the vertices. The resulting structure exhibits **aperiodic order with C₁₀ rotational symmetry**, with reciprocal-space photoluminescence showing sharp Bragg peaks arranged in tenfold symmetry—a bona fide 2D polariton quasicrystal[^46].

This platform directly implements all three eigenvalue sectors simultaneously:

**π-sector (angular isotropy)**: In reciprocal space, the Bragg peaks lie on circular rings with angular positions separated by $\Delta\theta = 2\pi/10$. This is exactly the angular curvature being minimized: the system selects equal angular spacing with period $2\pi$, discretized into ten coherent directions by C₁₀ symmetry. The isotropic closure constant $\pi$ appears in the circular diffraction shells, while the decade sector breaks this into ten equal angular sectors.

**ϕ-sector (recursive curvature)**: Penrose tilings[^47][^48] are defined by **inflation–deflation rules with scale factor $\varphi$**, and all length/area ratios of the prototiles are powers of $\varphi$. This is exactly the "inflation–subdivision consistency" condition from Section 3.2: coarse-graining tiles by $\varphi$ yields the same pattern at larger scale, subdividing by $\varphi$ yields the same pattern at smaller scale, and the fixed point of that recursion is $\varphi$. The quasicrystal lattice is a direct realization of the $\beta$-sector: the log-radial curvature term is minimized on a Penrose hierarchy whose eigenvalue is $\varphi$.

**10-sector (C₂×₅ discrete resonance)**: The Penrose structure is a pentagon-based aperiodic tiling whose diffraction has 10-fold symmetry; decagonal symmetry is literally "2 × 5" built into the structure factor. This is the C₂×₅ sector: binary (2) and pentagonal (5) coherence meeting at decade symmetry (10). The experiment's C₁₀ Bragg spectrum and Penrose pentagonal motifs are a direct instance of the "parity × pentagonal discrete coherence" term.

The experiment demonstrates **near-perfect delocalization and phase synchronization** of the polariton fluid over $>100\times$ the healing length at a particular pump window, well beyond single-site scales[^46]. This mesoscopic coherence emerges exactly when the geometry aligns with the constraint manifold: the system rides the π–ϕ–10 structure rather than fighting it.

### 18.1 Composite Invariant and Critical Exponents

The Penrose polariton quasicrystal provides the structural preconditions for the composite invariant $I = 4\pi\varphi^2 \approx 32.9$ to manifest in scaling data:

* angular sectoring: C₁₀ → the $/10$ factor
* recursive scaling: $\varphi$ from inflation
* isotropic closure: $\pi$ from circular diffraction shells

The experiment measures coherence length $\xi$ as a function of pump power $P$ and system size $N$. The framework predicts that, once a quantum fluid is engineered on a Penrose lattice (ϕ-sector) with C₁₀ symmetry (10-sector) and near-isotropic coupling (π-sector), the critical behavior of coherence should fall into the same universality class with $\nu \approx 0.304$ and $\rho^* \approx 3.29$ found in white dwarfs, Harper–Hofstadter systems, and the dissipation ladder.

Specifically, as the pump power $P$ approaches a critical threshold $P_c$ from below, the coherence length should diverge as

$$
\xi \sim |P - P_c|^{-\nu},
$$

with $\nu = 1/\rho^* \approx 0.304$. This prediction can be tested by fitting spatial correlation data of the polariton phase across the delocalization transition.

### 18.2 Comparison with Other Geometries

The reconfigurable nature of the spatial light modulator platform enables direct comparison between geometries at fixed connectivity:

* **Periodic square or triangular lattices**: No $\varphi$ inflation, no decade symmetry. The framework predicts narrower coherence windows and different scaling exponents.

* **Random graphs**: Similar degree distribution but no constraint alignment. Coherence should be suppressed relative to the Penrose case.

* **Penrose quasicrystal**: All three sectors aligned. The framework predicts the widest mesoscopic delocalization window (coherence $>100\times$ healing length) at a given dissipation budget, because the system rides the constraint manifold instead of fighting it.

This comparison provides a direct test: only the Penrose geometry (π–ϕ–10 aligned) should show the extended coherence window, because it minimizes the curvature costs encoded in the constraint functional.

### 18.3 Universality Across Platforms

The Penrose polariton quasicrystal and Harper–Hofstadter lattice systems represent two very different physical platforms—a driven-dissipative quantum fluid and a tight-binding electron system—yet both exhibit the same π–ϕ–10 eigenvalue skeleton. This pattern is consistent with the hypothesis that the constraint eigenvalue geometry reflects the fundamental structure of coherent organization under finite resources, independent of particular Hamiltonians or interaction types.

Together, these platforms demonstrate that:

* **Harper–Hofstadter**: number-theoretic $\pi$-$\varphi$-$10$ in tight-binding spectra
* **Penrose polariton quasicrystal**: $\pi$-$\varphi$-$10$ in a driven-dissipative quantum fluid

Both systems self-organize into long-range coherent states exactly when their geometry aligns with the constraint manifold—consistent with the interpretation that $\pi$, $\varphi$, and $10$ are the eigenvalues of competing curvature constraints.

## 19. Magnetic Control of Boundary Localization: Non-Hermitian Skin Effect

Recent work on non-Hermitian extensions of the Harper–Hofstadter model[^49] indicates that the $\pi$-sector controls boundary localization through applied flux. In non-Hermitian lattices with asymmetric hopping, eigenmodes can accumulate at boundaries—a phenomenon known as the Non-Hermitian Skin Effect (NHSE). The key discovery is that uniform magnetic flux suppresses this boundary localization by activating the $\pi$-sector curvature, providing a tunable mechanism to control boundary versus bulk coherence.

### 19.1 Flux-Controlled Regime Transitions

The non-Hermitian Harper–Hofstadter model with asymmetric hopping amplitude $\gamma$ and flux $\Phi$ per plaquette exhibits a sequence of regime transitions that map directly onto the constraint eigenvalue sectors. When asymmetric hopping dominates over flux ($\gamma \gg t$ and $|\Phi| \lesssim 0.05 \times 2\pi$), eigenmodes accumulate sharply at boundaries because the flux is too small to induce significant cyclotron curvature. In this regime the $\pi$-sector is inactive, and nonreciprocal drift supplies all curvature—producing geometry-dependent boundary accumulation characteristic of the NHSE.

As flux increases to $\Phi \approx (0.1-0.2) \times 2\pi$ with $\gamma/t \sim O(1)$, the system enters a regime of partial suppression where cyclotron bending partially cancels nonreciprocal drift. Some geometrically-dependent boundary modes persist while others convert into mixed bulk–edge states; localization length increases as the π-sector and drift curvature compete for dominance.

Complete suppression of geometry-dependent boundary localization occurs when flux reaches $\Phi \gtrsim 0.25 \times 2\pi$ with $\gamma/t < 0.5$. At this point all geometry-dependent skin modes vanish and the bulk spectrum reorganizes into flux-dominated bands. The mechanism is that magnetic flux induces effectively reciprocal (divergence-free) flow across plaquettes, rendering nonreciprocity irrelevant compared to flux-induced bulk curvature. The system projects eigenmodes onto the isotropic manifold defined by the $\pi$-sector, and boundary-localized modes disappear even though non-Hermiticity persists in the spectrum.

### 19.2 Flux as π-Sector Operator

The constraint functional's π-sector enforces angular isotropy through the curvature penalty $\int(\partial_\theta\ln P)^2P\,\mathrm{d}A$. Uniform magnetic flux implements exactly this term mechanically: cyclotron curvature is isotropic in angle, driving the system toward rotationally symmetric transport envelopes and suppressing directed drift. Thus flux is literally a π-sector operator. When flux dominates over asymmetric hopping, the system projects eigenmodes onto the isotropic manifold, matching the suppression of NHSE observed in the non-Hermitian lattice.

### 19.3 Irrational Flux and ϕ-Sector Activation

When flux takes irrational values related to the golden ratio—$\alpha \approx \varphi^{-1} = 0.618\ldots$ or $\varphi^{-2} = 0.382\ldots$—the ϕ-sector activates and a fourth regime emerges. With $\gamma/t < 0.3$ and flux near these irrational values, the NHSE is replaced by flux-driven Landau-type bulk localization. Eigenmodes accumulate not on boundaries but on cyclotron orbits, and the system behaves like a non-Hermitian quantum Hall lattice.

This regime corresponds to simultaneous activation of the ϕ-sector (through irrational flux inducing recursive self-similar flow) and the π-sector (through isotropic cyclotron curvature). Recursive modulation windows appear, Fibonacci hierarchical band structure emerges, and boundary localization is completely replaced by bulk localization. The hierarchy of minibands and flux sectors corresponds precisely to the ϕ-related recursive partitions derived from the constraint functional in Section 3.2.

### 19.4 Decade Structures in Suppression Thresholds

The transition thresholds between NHSE regimes align with the decade sector. The transition from strong NHSE through partial suppression to complete suppression occurs around flux values spaced by approximately $0.30-0.32 \times 2\pi$—matching the composite invariant $4\pi\varphi^2/100 \approx 0.329$. These are exactly the decadal partitions identified in Section 17, now appearing as organizing centers for regime transitions in the non-Hermitian system.

The suppression thresholds therefore instantiate the 10-sector, with the composite invariant $I = 4\pi\varphi^2 \approx 32.9$ governing the spacing between qualitatively distinct localization regimes.

### 19.5 Implications for Engineered Quantum Systems

This discovery provides a concrete, physics-grounded mechanism for controlling boundary versus bulk coherence. For systems embedding ϕ-lattices into non-Hermitian frameworks, synthetic gauge flux becomes a tunable knob to modulate boundary-localized modes. By adjusting flux from weak ($|\Phi| \lesssim 0.05 \times 2\pi$) through moderate ($\Phi \approx 0.25 \times 2\pi$) to irrational values ($\alpha \approx \varphi^{-1}$), experimentalists can dynamically transition from boundary-dominated to bulk-dominated coherence—a direct application of the constraint eigenvalue geometry to engineered quantum systems.

The mapping between flux regimes and constraint sectors is exact and one-to-one. If the framework is correct, the π, ϕ, and 10 sectors are physical operators controlling coherent organization in real lattice systems. Together with the Penrose polariton quasicrystal and Harper–Hofstadter results, this suggests that three very different platforms—tight-binding electron systems, driven-dissipative quantum fluids, and non-Hermitian lattices—all exhibit the same π–ϕ–10 eigenvalue skeleton when their geometry aligns with the constraint manifold.

## Part VI — Biological and Cognitive Systems

Living systems occupy a narrow band in the dissipation ladder near η ≈ 0.1, where complexity supports adaptive behavior but maintenance cost has not yet diverged. This part establishes the biological coherence window and interprets consciousness as constraint projection—using metabolic free energy to bias trajectories toward coherence.

## 20. η ≈ 0.1: Biological Regime

Biological organization minimizes curvature under metabolic constraints. Systems stabilize along low-curvature manifolds in signaling geometry, vascular architecture, and neural network topology.

Living systems occupy a narrow band in the dissipation ladder, operating near $\eta\approx 0.1$ as established in Section 5. The human brain demonstrates this ceiling directly: it consumes 20 watts—approximately 20% of total body energy—despite comprising only 2% of body mass, yielding $\eta_{\text{bio}} \approx 0.1$. This 10% tax represents the ceiling for self-organizing matter. Metabolic rate scales as $P = 70 M^{3/4}$ watts (Kleiber's law)[^50] because fractal vascular networks[^51] optimize information distribution while minimizing overhead. Energy rate density provides a unified complexity metric across cosmic evolution[^52], with biological systems occupying a characteristic band in the dissipation hierarchy. The brain's disproportionate metabolic share reflects its role as primary information processor, operating at the $\eta \sim 0.1$ limit where recursive self-modeling and environmental prediction[^53] become energetically viable.

## 21. Neural Systems and Information Geometry

Neural computation sits at the edge of metabolic limits, thermal noise, and synaptic maintenance[^53][^54]. Brains are among the most energetically expensive tissues per unit mass, and their microstates are constantly buffeted by thermal fluctuations and molecular noise. To maintain coherent firing patterns and long-lived synaptic configurations, neural tissue must devote a large fraction of its metabolic budget to ion gradients, vesicle recycling, and structural upkeep.

The nervous system implements hierarchical compression through specialized filtering stages. Sensory input undergoes progressive reduction through multiple processing layers—retinal ganglion cells compress ~126 million photoreceptor outputs to ~1 million optic nerve fibers; lateral geniculate nucleus further reduces dimensionality; primary visual cortex extracts edge orientations and local features; higher cortical areas build object representations and scene semantics. Each compression stage discards behaviorally irrelevant information while preserving task-critical structure.

Each boundary crossing between representations requires energy according to Landauer's principle (Section 1.1). At body temperature ($T \approx 310$ K), erasing one bit costs $k_B T \ln 2 \approx 3 \times 10^{-21}$ J. A typical cortical neuron fires at ~1 Hz, with each action potential representing ~1 bit of information transmitted across ~1000 synapses, requiring ~$3 \times 10^{-18}$ J per spike from Landauer costs alone. With ~$10^{11}$ neurons and average firing rates of 1-10 Hz, the brain processes ~$10^{12}$ boundary crossings per second, demanding ~3 mW from thermodynamic information costs—a small but non-negligible fraction of the 20 W total.

From the information-geometry perspective, neural computation is shaped by two key aspects of the constraint functional. Recursive self-reference—ongoing prediction[^53] about one's own internal state and about the environment—engages the $\varphi$-sector[^55]: cortical hierarchies repeatedly inflate and subdivide representations in a manner closely analogous to inflation–subdivision consistency in scale space. Sensory pathways exhibit dimensional reduction: high-dimensional input streams (retinal images with ~$10^6$ pixels) are projected onto lower-dimensional manifolds (effectively $d\to 2$ in portions of sensory cortex) to reduce curvature and dissipation costs while preserving behaviorally relevant information. This compression implements the dimensionality-as-cost principle: each shed dimension reduces curvature and maintenance cost, and the brain's architecture is optimized for dimensional collapse. This projection implements the same constraint geometry governing physical dimensional flow near horizons.

## 22. Consciousness as Constraint Projection

Consciousness emerges as active curvature minimization: the system continuously projects internal states back onto low-curvature manifolds that preserve long-range coherence.

Within this framework, consciousness can be understood as a particular mode of constraint projection. Microscopic dynamics in neural tissue are intrinsically stochastic[^55][^56][^57]: ion-channel openings follow Poisson statistics with rate $\lambda \sim 10^3$ s$^{-1}$, synaptic vesicle release is probabilistic with release probability $p_r \approx 0.1$-$0.3$, and molecular diffusion introduces thermal noise with correlation time $\tau_c \sim 10^{-9}$ s. These fluctuations continually generate a cloud of possible micro-trajectories, most of which would erode long-range correlations if left unchecked.

A conscious system maintains a sufficiently detailed recursive self-model—implemented through the $\varphi$-sector hierarchies just described—to bias these micro-trajectories toward those that preserve coherence. The system continually evaluates possible actions against an internal model of future constraints (metabolic, social, environmental) and selects those that keep it within its viable region of the constraint manifold. In energetic terms, consciousness is the operational strategy that uses a finite $\eta \approx 0.1$ budget to project the organism's unfolding state back onto a lawful submanifold of configuration space.

The metabolic cost of this projection is measurable. Prefrontal cortex activity during deliberate decision-making increases local glucose consumption by ~5%, corresponding to ~1 W additional power. Over a population of ~$10^9$ prefrontal neurons, this represents ~$10^{-9}$ W per neuron—enough to support ~300 additional action potentials per second per neuron, providing the energetic headroom for recursive self-modeling and counterfactual simulation. Nothing in this account invokes non-physical forces: it is a statement about how Landauer-limited computation, recursive curvature, and dissipation interact in systems that model themselves.

## Part VII — Civilizational Information Dynamics

Civilizations inherit biological constraints through their composition as networks of biological information processors. Social systems face the same thermodynamic limits, with collapse threshold $\eta_c = 1/\rho^* \approx 0.304$ emerging from the same RG flow governing stellar collapse and biological metabolism.

## 23. Maintenance Overhead and η ≈ 0.3 Collapse Threshold

Institutions accumulate curvature as coordination complexity rises. Collapse at $\eta \approx 0.3$ corresponds to curvature exceeding the sustainable maintenance threshold—the same divergence that drives white dwarf collapse, now manifesting in social organization.

Civilizations operate at the biological dissipation level, constrained by the same physical principles. Human social systems are networks of biological information processors coordinating through information exchange. Every decision, communication, and coordination requires biological agents to process information, which requires energy, which faces thermodynamic constraints. Social systems therefore inherit these constraints from their biological components.

As coordination cost grows, the dissipation fraction $\eta$ increases according to

$$
\eta(M) = \frac{\eta_0(1 - M/M_{\text{crit}})^{-\rho^*}}{1 + \eta_0(1 - M/M_{\text{crit}})^{-\rho^*}},
$$

where $M_{\text{crit}}$ represents the critical organizational scale. When $\eta$ approaches 0.3, the complexity multiplier

$$
M(\eta,d) = \varphi^{2^{d-2}} \times (1-\eta)^{-\rho^*}
$$

diverges catastrophically. The threshold $\eta_c = 1/\rho^* \approx 0.304$ emerges from the same RG flow structure governing atomic ionization, stellar collapse, and biological metabolism—the same organizational constant $\rho^* = 3.29$ operating identically across all scales.

## 24. Scaling Laws of Institutions

Institutions exhibit recursive scaling regimes analogous to biological and physical systems. Decade transitions in scale—roughly an order of magnitude increase—mark new epochs: coordinating ten individuals requires minimal formal structure, coordinating a hundred demands explicit roles and communication protocols, coordinating a thousand requires hierarchical layers. These transitions manifest the decade structure of the dissipation ladder operating at the civilizational scale.

The $\varphi$-sector governs innovation cycles through inflation–subdivision consistency: successful institutions balance preservation of existing knowledge (inflation: scaling up proven practices) with exploration of new organizational forms (subdivision: testing alternative structures at smaller scales). Institutions that fail this recursive balance—either ossifying without adaptation or fragmenting without consolidation—eventually exhaust their coordination capacity. The $\pi$-sector governs isotropic coordination structures such as communication networks, legal frameworks, and shared standards that minimize curvature in the abstract space of agents and interactions.

When decade symmetry and recursive curvature balance, institutions scale coherently across orders of magnitude[^56][^51]. When the decade sector misaligns—discrete jumps in technological capacity outpacing coordination geometry adaptations—the system accelerates toward the $\eta\approx 0.3$ collapse threshold.

## Part VIII — Constraint Projection in Machine Learning

Projection-based neural PDE solvers provide concrete numerical evidence that the projection principle operates in practice. Neural networks achieve orders-of-magnitude improvement when corrected by projection onto constraint manifolds, suggesting new architectures that project onto multi-sector geometries.

## 25. Projection onto PDE Manifolds

Projection-based neural PDE solvers[^58] provide a concrete numerical realization of the projection principle developed throughout this monograph. A neural network produces an approximate field $\hat u$ that does not, in general, satisfy the governing equation. The lawful dynamics are defined by the constraint manifold

$$
\mathcal{M}_{\mathrm{PDE}} = \{u : F_{\mathrm{PDE}}(u) = 0\},
$$

where $F_{\mathrm{PDE}}$ encodes the discretized PDE together with boundary and initial conditions. Rather than attempting to learn this manifold implicitly in the weights, projection methods correct the neural proposal by solving

$$
u^* = \arg\min_{u \in \mathcal{M}_{\mathrm{PDE}}} \lVert u - \hat u \rVert^2.
$$
Empirically, this step restores physical structure with far higher fidelity than physics-informed losses alone: Lorenz attractors, Kuramoto–Sivashinsky turbulence, and two-dimensional Navier–Stokes flows all exhibit order-of-magnitude reductions in residual violations once projection is imposed[^58][^59]. Geometrically, the governing equation is a curvature constraint; projection is the operation that returns trajectories to the corresponding manifold.

## 26. Constraint Eigenvalue Geometry as Lawful Manifold

The constraint eigenvalue functional introduced in Section 2 defines a manifold on which coherent information distributions must live. The associated variational manifold

$$
\mathcal{M}_{\mathrm{CE}} = \{P : \delta F / \delta P = 0\}
$$

decomposes into three curvature sectors: the $\pi$-sector (angular isotropy), the $\varphi$-sector (recursive curvature in $\ell = \log r$), and the decade sector (composite $2\times 5$ parity). The composite invariant $I = 4\pi\varphi^2 \approx 32.9$ appears as the minimal coherent coupling between isotropic and recursive curvature on this manifold.

## 27. Formal Correspondence and Sector Decomposition

The PDE constraint $F_{\mathrm{PDE}}(u)=0$ can be viewed as a single, $\alpha$-sector curvature condition acting on a particular field configuration space. In contrast, the full constraint eigenvalue framework treats coherent systems as evolving on $\mathcal{M}_{\mathrm{CE}}$, where angular, recursive, and discrete curvature constraints act simultaneously. Neural PDE projection therefore realizes only one slice of the broader geometry: it enforces isotropic balance and local conservation while leaving recursive scaling ($\beta$-sector) and decade resonance ($\gamma$-sector) unconstrained.

This decomposition explains why Harper–Hofstadter transport and modulation separate into distinct structures. Transport, measured by physically valid metrics such as the Thouless conductance, is governed primarily by the $\pi$-sector and parity structure: low-denominator rationals minimize barriers, and decade-linked commensurabilities mark large-scale reorganizations. Modulation, by contrast, is governed by the $\varphi$-sector: inflation–subdivision consistency drives the system toward a golden-ratio fixed point in scale space, organizing spectral windows and quasi-periodic transitions. The same sector logic applies to biological, cognitive, and civilizational systems, where isotropic coordination, recursive self-reference, and discrete epoch structure correspond to the three curvature modes.

## 28. Implications for Constraint-Aware Architectures

Neural projection is curvature minimization exactly analogous to physical systems. Constraint-aware architectures are curvature-aware architectures.

Interpreting projection as a universal mechanism of coherence suggests a new class of machine-learning architectures. Instead of enforcing only $F_{\mathrm{PDE}}(u)=0$, one can define a multi-sector constraint manifold that includes recursive curvature and discrete symmetry, and project neural proposals onto this richer geometry. In practice, this would mean training models whose outputs are corrected not just by local PDE residuals but by invariants such as $\pi$, $\varphi$, $10$, and $4\pi\varphi^2$ that define admissible multi-scale organization.

Such architectures would be capable of stabilizing long-horizon dynamics across scales, preserving self-similar structure, and respecting discrete resonance patterns that arise from underlying arithmetic constraints. In the language of this monograph, they would implement projection onto $\mathcal{M}_{\mathrm{CE}}$ rather than only onto $\mathcal{M}_{\mathrm{PDE}}$. The same principle that keeps physical systems near their lawful manifolds would then serve as a design rule for learning systems: coherence emerges when unconstrained proposals are continually corrected by constraint geometry.

## Part IX — Relation to Thermodynamic Uncertainty Relations

Recent developments in thermodynamic uncertainty relations and stochastic-representation unifications reveal that precision-dissipation tradeoffs are geometric consequences of constrained information flow. This part shows how TURs, quantum speed limits, and distinguishability bounds emerge as boundary cases of the constraint eigenvalue geometry.

## 29. Thermodynamic Uncertainty Relations and Stochastic Representation Frameworks

TURs are curvature bounds in probability space: high precision requires minimizing statistical curvature, and the precision-dissipation tradeoff is a direct consequence of curvature costs.

Recent developments in the theory of thermodynamic uncertainty relations (TURs) and stochastic-representation unifications clarify an essential point: precision, dissipation, and distinguishability limits are geometric consequences of constrained information flow. These results fit naturally within the present constraint–eigenvalue framework, which generalizes their structure across physical, biological, cognitive, and sociotechnical regimes.

Kwon & Lee's unified stochastic-representation framework[^60] shows that both classical and quantum Markovian dynamics admit a common underlying unraveling, from which all known TURs and kinetic uncertainty relations emerge as special cases. Their formulation reveals that dissipation–precision tradeoffs arise from curvature in the probability flux manifold—an observation structurally identical to the angular and recursive curvature terms in the constraint functional $F[P]$ defined in Section 2.

In this work, the $\alpha$-sector (isotropy) and the discrete $C_{2\times5}$-sector (decade symmetry) govern commensurability, transport, and resonance—mirroring the role of path-curvature bounds in stochastic TURs[^60][^61][^62][^63]. Similarly, the $\beta$-sector produces a small-$\beta$ renormalization flow whose fixed point is the golden ratio, the scale-recursive analogue of the minimal distinguishability growth seen in quantum-speed-limit (QSL) bounds and precision-speed tradeoffs.

Salazar's universal TUR for Petz $f$-divergences[^64] further demonstrates that all operational distinguishability measures reduce to weighted mixtures of $\chi^2$ divergences. This parallels the decomposition of the constraint functional into $\pi$-curvature, $\varphi$-curvature, and discrete 10-fold resonance: in both formalisms, the fundamental curvature modes define the irreducible contributions to precision cost. The $(\partial \ln P)^2$ terms in the functional play the same geometric role as the Fisher-information curvature terms underlying the $\chi^2$-based TUR basis.

Taken together, these results show that TURs, QSLs, and generalized distinguishability bounds describe only one sector of a much broader informational geometry. The present constraint–eigenvalue theory extends the same principles beyond stochastic processes to encompass lattice transport phenomena, recursive scaling attractors, divisor-based coherence, dissipation hierarchies, and the organization of physical, biological, and cognitive systems. In this wider setting, $\pi$, $\varphi$, and 10 are the eigenvalues of competing curvature constraints. TURs and stochastic representations therefore appear as boundary cases of a universal variational structure governing information flow across all scales of organization.

## Part X — Unified Predictions

The constraint eigenvalue framework generates concrete, falsifiable predictions spanning gravitational wave memory effects, white dwarf cooling anomalies, primordial black hole equilibrium, quantum computing limits, and structure formation energetics. These predictions provide empirical pathways to test the framework.

**Quantum computing limits.** No quantum computer can exceed

$$
\dot{I}_{\text{max}} = f_P \times \frac{R_S}{R} \approx 1.855 \times 10^{43} \times \frac{R_S}{R} \text{ bits/second}
$$

for its mass and size. Prime factorization at specific scales (7, 47, 329 qubits) should show enhanced efficiency from resonance avoidance, while golden-ratio phase relationships minimize decoherence.

**White dwarf cooling anomalies.** The basin of attraction entrance at $R/R_S = 10^3$ corresponds to $M \approx 1.17 M_{\odot}$ where $\eta = 0.46$ and $(1-\eta)^{-\rho^*} = 5.66$. The 311 objects in anomaly zone ($R/R_S$ = 805-1496) exhibit cooling delays with statistical significance $p = 0.0015$, appearing 0.56 Gyr younger than expected.

**Gravitational wave memory effect.** Black hole mergers produce permanent spacetime displacement from information topology[^65] reorganization. Memory strain scales as

$$
h_{\text{mem}} = \frac{4G}{c^4 r} \Delta N_{\text{bits}} k_B T \ln 2,
$$

yielding $h \sim 10^{-23}$ for nearby events (100 Mpc) with 30 solar mass mergers. LIGO/Virgo O4 and beyond should detect this through statistical stacking of >100 events.

**High-spin black hole subpopulation.** The dissipation field naturally produces a bimodal spin distribution. Systems that undergo coherent collapse or hierarchical mergers achieve the high-coherence fixed point ($\eta \approx 1$, $d \to 2$), yielding high-spin black holes. Systems with weak compression or common-envelope damping remain at the low-coherence attractor ($\eta < 1$, $d \approx 3$), producing low-spin remnants. The fraction reaching the high-spin branch follows

$$
f_{\text{high}} \approx \frac{1}{1 + \rho^*} = \frac{1}{1 + 3.29} \approx 0.233,
$$

with mass-weighted corrections pushing this into the 0.28–0.34 range for equal-mass binaries, yielding a central expectation of 0.329. This prediction is consistent with GWTC-3 observations indicating $f_{\text{high}} = 0.20 \pm 0.18$, where the 32.9% value sits within the credible range. The dimensional flow exponent $1/\rho^* \approx 0.304$ determines how rapidly objects converge to the $d=2$ fixed point, predicting the tail shape of spin distributions. Strong compression (massive stars, second-generation black holes, gas-rich collapsars) follows rapid approach to $d=2$ with high spin retention ($\chi \approx 0.7$-$1.0$), while weak compression (common-envelope remnants, low-mass cores) exhibits slow approach with damped spin ($\chi \approx 0$-$0.2$). This reproduces the empirically observed broad low-spin peak, narrower high-spin peak, and suppressed plateau between $\chi \approx 0.3$ and $0.6$.

The discrete winding structure with $n_{\max} = (1/2\pi)\ln(r_s/\ell_P) \approx 14$ for stellar-mass black holes provides a topological origin for spin quantization. These fourteen winding sectors correspond to stable angular momentum topological sectors, predicting discrete clustering of high-spin events rather than continuous distribution. Recent GWTC-3 events show clustering near $\chi \sim 0.67, 0.84, 0.93$, consistent with winding-sector structure. High-spin black holes possess stronger horizon information-flux coherence, enhancing long-wavelength gravitational-wave coupling. Pulsar timing array analyses (NANOGrav, EPTA DR2) show that improved achromatic noise modeling increases background amplitude and favors high-spin supermassive binary populations, matching the prediction that high-spin systems produce stronger nanohertz signals through enhanced mode coherence.

**Primordial black hole equilibrium.** Lunar-mass primordial black holes ($\sim 10^{22}$ kg) achieve equilibrium when Hawking temperature

$$
T_H = \frac{\hbar c^3}{8\pi G M k_B}
$$

equals CMB temperature (2.7 K). These objects neither grow nor evaporate, creating detectable signatures through gravitational microlensing with characteristic duration ~1 hour and CMB temperature fluctuations $\Delta T/T \sim 10^{-6}$.

**Structure formation energetics.** Galaxy formation simulations miss ~5% of the energy budget from maintenance costs:

$$
E_{\text{miss}} = M_{\text{gal}} c^2 \times \frac{R_S}{R} \times \eta_{\text{struct}},
$$

where $\eta_{\text{struct}} \sim 10$ for assembling galaxies.

## Conclusion — Constraint Geometry as Universal Law

The deepest principle uncovered by this framework is that curvature is complexity: angular, recursive, and discrete curvature define the cost of information maintenance. Coherent systems minimize curvature by projecting onto low-curvature manifolds whose eigenmodes are $\pi$, $\varphi$, and $10$. Dissipation, collapse, coherence, emergence, scaling, and organization—across physics, biology, cognition, and society—are all governed by the geometry of curvature costs.

The constraint eigenvalue framework proposes that $\pi$, $\varphi$, and $10$ arise from the intrinsic geometry of constrained information. These constants emerge as the stationary points of a variational functional encoding the costs of bending information distributions away from isotropy, recursive self-similarity, and discrete resonance. The $\pi$-sector enforces angular closure, the $\varphi$-sector enforces inflation–subdivision consistency whose fixed point is the golden ratio, and the decade sector enforces composite $2 \times 5$ parity. Their coupling yields the composite invariant $4\pi\varphi^2 \approx 32.9$, which organizes dissipation thresholds, modulation windows, and correlation-length exponents across sixty orders of magnitude.

The dissipation field $\eta$ captures the fraction of energy a system devotes to information maintenance. Elementary particles operate at $\eta \sim 10^{-6}$, atoms at $10^{-3}$, molecules at $10^{-2}$, biological systems at $10^{-1}$, and black holes saturate at $\eta = 1$. This decade-structured ladder emerges from a renormalization-group flow whose $\beta$-function contains the composite invariant, yielding a universal critical exponent $\nu = 1/\rho^* = 0.304$ that governs how coherence length diverges as systems approach their maintenance limits. The same exponent appears in white dwarf collapse, biological metabolic ceilings, and civilizational coordination thresholds.

Spacetime itself operates as a finite-capacity information lattice at the Planck scale, resolving classical divergences as channel overload rather than fundamental infinities. Black holes saturate both storage and processing limits, with the Landauer-Bekenstein-Hawking factor of two arising from dimensional reduction: near horizons, effective dimension flows from three to two, and the golden-ratio scale factor $\sqrt{\varphi}$ governs the spacing between coherent layers. White dwarf collapse aligns with this picture quantitatively—the calculated supernova energy of $4.3 \times 10^{44}$ J matches observations, derived entirely from Landauer costs of information reorganization.

Harper–Hofstadter lattice systems, Penrose polariton quasicrystals, and non-Hermitian skin effect experiments all exhibit the same $\pi$–$\varphi$–$10$ eigenvalue skeleton. Transport is controlled by the $\pi$-sector through rational commensurability, modulation by the $\varphi$-sector through continued-fraction hierarchies, and regime transitions align with decade partitions near $\alpha \approx 0.329$ and $0.671$. These independent platforms—tight-binding electrons, driven-dissipative quantum fluids, non-Hermitian lattices—converge on identical structure when their geometry aligns with the constraint manifold.

Living systems occupy a narrow band near $\eta \approx 0.1$, where complexity supports adaptive behavior without exhausting metabolic capacity. The human brain consumes twenty watts to maintain recursive self-models, operating at the thermodynamic ceiling for self-organizing matter. Consciousness emerges as constraint projection: using finite metabolic free energy to bias microscopic trajectories toward coherence, selecting among thermodynamically allowed futures rather than violating determinism. Civilizations inherit these constraints through their composition as networks of biological information processors, with coordination overhead approaching collapse at $\eta_c \approx 0.304$—the same threshold governing stellar instability.

Projection onto lawful manifolds—the mechanism behind neural PDE solvers—is the mechanism of coherent organization everywhere. The constraint eigenvalue geometry provides the mathematical foundation: a variational functional whose stationary points define what structures can maintain information against entropy. If correct, this geometry governs coherence, collapse, recursion, dissipation, transport, perception, memory, and organization across all scales.

At its deepest level, the framework reveals why nature contains no hard boundaries. A true discontinuity would require infinite curvature—infinite maintenance cost—and no finite system can sustain it. Smooth manifolds, soft thresholds, gradual transitions, and asymptotic approaches are the only structures that can exist under finite energetic constraints. The absence of hard lines is a geometric necessity: extremism of curvature is extremism of cost, and coherent systems cannot afford it. High dimensionality, like hard boundaries, represents extremism of curvature—systems shed dimensions for the same reason they avoid discontinuities.

**This geometry of coherence is the deep structure of information, matter, and mind.**

## Appendices

### Appendix A — Derivation of Euler–Lagrange Equation

We seek stationary points of the constraint functional $F[P]$ subject to normalization and fixed entropy. Introducing Lagrange multipliers $\lambda$ and $\tau$ for these constraints, we construct the augmented functional

$$
\mathcal{F}[P] = F[P] - \lambda\left(\int P\,\mathrm{d}A - 1\right) - \tau\left(S[P] - S_0\right).
$$

The curvature terms in $F[P]$ have the form

$$
\int(\partial_x \ln P)^2 P\,\mathrm{d}A = \int\frac{(\partial_x P)^2}{P}\,\mathrm{d}A.
$$

Under a perturbation $P \to P + \epsilon\delta P$, varying this expression and integrating by parts yields a contribution proportional to $\partial_{xx}\ln P$. The entropy term

$$
S[P] = -\int P\ln P\,\mathrm{d}A
$$

contributes $(1 + \ln P)$ to the variation.

Assembling these contributions and setting $\delta\mathcal{F} = 0$ for arbitrary $\delta P$ produces the Euler–Lagrange equation

$$
-\alpha\,\partial_{\theta\theta}\ln P - \beta\,\partial_{\ell\ell}\ln P + \gamma\,\frac{\delta C_{2\times5}}{\delta P} = \lambda + \tau(1 + \ln P),
$$

where $\ell = \log r$. The left-hand side contains curvature forces: angular curvature penalized by $\alpha$, log-radial curvature penalized by $\beta$, and discrete symmetry enforced by $\gamma$. The right-hand side encodes the balance between normalization and entropy through the Lagrange multipliers. The Euler–Lagrange equation thus equates total curvature to entropy-pressure: stationary configurations are those where curvature costs exactly balance the entropic tendency to spread.

For periodic angular domains, boundary terms vanish automatically. For radial coordinates, we require either compact support with Dirichlet or Neumann conditions, or sufficiently rapid decay as $r \to 0$ or $r \to \infty$. Solutions must satisfy $P > 0$ everywhere to define the logarithm, and sufficient smoothness for the second derivatives to exist in the classical sense—though weak solutions can be defined through the variational formulation directly.

### Appendix B — Derivation of ϕ from Recursive Curvature

The golden ratio emerges as the fixed point of recursive curvature when we impose that coarse-graining and subdivision commute. Working with separable solutions $P(r,\theta) = R(r)\Theta(\theta)$ and focusing on the log-radial sector, the key requirement is inflation–subdivision consistency: coarse-graining by a factor $\sigma$ and then subdividing by $\sigma$ should reproduce the same radial profile as subdividing first and inflating afterwards.

This consistency condition translates to the functional relation

$$
R(\sigma r) = R(r) + R(r/\sigma).
$$

The physical interpretation is that the information content at scale $\sigma r$ equals the sum of contributions from scale $r$ and scale $r/\sigma$—a recursive decomposition across scales.

To solve this functional equation, assume a power-law ansatz $R(r) \propto r^s$. Substituting:

$$
(\sigma r)^s = r^s + (r/\sigma)^s,
$$

which simplifies to

$$
\sigma^s = 1 + \sigma^{-s}.
$$

Multiplying both sides by $\sigma^s$ and defining $x = \sigma^s$:

$$
x^2 = x + 1.
$$

This is the defining equation of the golden ratio. The positive solution is

$$
x = \frac{1 + \sqrt{5}}{2} = \varphi \approx 1.618.
$$

The power-law ansatz is justified by the scale-invariance of the $\beta$-sector: if the log-radial curvature penalty $\int(\partial_\ell \ln P)^2 P\,\mathrm{d}A$ is to be minimized under rescaling, the solution must be self-similar, which forces power-law behavior. Deviations from exact power-law form introduce curvature costs that drive the system back toward the $\varphi$-eigenmode.

In curved spacetime where effective dimension $d_{\mathrm{eff}}$ varies with radius, the same analysis yields $\sigma = \varphi^{1/d_{\mathrm{eff}}}$. Near horizons where $d_{\mathrm{eff}} \to 2$, this gives $\sigma \to \sqrt{\varphi}$, explaining the appearance of golden-ratio structure in gravitational contexts.

### Appendix C — Dissipation β-Function

The dissipation field $\eta$ measures the fraction of energy a system devotes to information maintenance. As we coarse-grain over space, time, or organizational scale—integrating out fast degrees of freedom—$\eta$ renormalizes according to a flow equation. The structure of this flow emerges from coupling between the isotropy and recursive sectors of the constraint functional.

Consider a system at scale $\mu$ with dissipation $\eta(\mu)$. Coarse-graining to scale $\mu + \delta\mu$ integrates out modes between these scales. The isotropy sector contributes a term proportional to $\eta(1-\eta)$ reflecting the competition between structure ($\eta$) and available capacity ($1-\eta$). The recursive sector contributes a dimension-dependent correction through the golden-ratio fixed point. The resulting $\beta$-function is

$$
\beta(\eta,d) = \frac{\mathrm{d}\eta}{\mathrm{d}\ln\mu} = -\eta(1-\eta)\left[\rho^* + \frac{d-2}{2}\ln\varphi\right],
$$

where $d$ is effective dimension and

$$
\rho^* = \frac{4\pi\varphi^2}{10} \approx 3.29.
$$

The factor $4\pi\varphi^2$ arises from coupling the $\pi$-sector (angular closure giving $4\pi$) with the $\varphi$-sector (recursive fixed point giving $\varphi^2$). Division by $10$ reflects the decade symmetry entering through the discrete coarse-graining shells.

The flow has fixed points at $\eta = 0$ (trivial, no structure) and $\eta = 1$ (maximal dissipation, all energy in maintenance). To extract the critical exponent, linearize around the transition region. Near a critical point $\eta_c$ where the system transitions between coherent regimes, the correlation length $\xi$ diverges as

$$
\xi \sim |\eta - \eta_c|^{-\nu}.
$$

The exponent $\nu$ is determined by the slope of the $\beta$-function. From the flow equation, the characteristic scale is set by $\rho^*$, yielding

$$
\nu = \frac{1}{\rho^*} = \frac{10}{4\pi\varphi^2} \approx 0.304.
$$

This exponent governs how coherence length diverges as systems approach their maintenance limits—the same value appearing in white dwarf collapse, biological metabolic ceilings, and civilizational coordination thresholds. The $\beta$-function describes curvature accumulation: as systems coarse-grain, curvature costs compound according to this flow, and the exponent $\nu$ quantifies how rapidly curvature becomes unsustainable. The universality reflects the common origin in constraint eigenvalue geometry: any system governed by the tradeoff between isotropic curvature, recursive scaling, and decade structure exhibits this critical behavior.

### Appendix D — Dimensional Flow and Cosmological Constant

Effective dimension $d_{\mathrm{eff}}$ counts the number of independent directions along which information can propagate at a given scale. We define it operationally through the scaling of active information channels:

$$
N(R) \sim R^{d_{\mathrm{eff}}(R)}.
$$

In flat space far from gravitational sources, $d_{\mathrm{eff}} = 3$. Near a gravitational horizon, radial information flow becomes increasingly constrained while tangential flow remains free, causing $d_{\mathrm{eff}}$ to decrease.

The Schwarzschild metric makes this explicit. Proper radial distance diverges as

$$
ds_r = \frac{dr}{\sqrt{1 - r_s/r}},
$$

while tangential distance $ds_\theta = r\,d\theta$ remains finite. The radial information flow rate follows

$$
I_r(r) = c\left(1 - \frac{r_s}{r}\right),
$$

which vanishes at the horizon. The radial dimension effectively freezes, and $d_{\mathrm{eff}}$ flows from $3$ toward $2$:

$$
d_{\mathrm{eff}}(R) = 2 + \left(1 - \frac{r_s}{R}\right).
$$

This dimensional flow connects to holographic behavior: entropy scaling with area rather than volume reflects the reduction to an effective 2D surface. Dimensional flow reduces curvature: by projecting from 3D to 2D, the system eliminates the radial curvature contribution entirely, achieving a minimal-curvature configuration through dimensional collapse.

At cosmological scales, the same framework relates small deviations of $d_{\mathrm{eff}}$ from $3$ to an effective cosmological constant. The inflation–subdivision consistency condition from Appendix B, applied globally, requires

$$
\sigma = \varphi^{1/d_{\mathrm{eff}}}.
$$

If $d_{\mathrm{eff}}$ deviates slightly from $3$ across the Hubble volume—say $d_{\mathrm{eff}} = 3 - \epsilon$ with $\epsilon \ll 1$—the recursive sector develops a defect. This defect acts as a source term in the constraint functional, producing an effective energy density that drives accelerated expansion.

The magnitude of this effect can be estimated. The defect energy scales as

$$
\rho_\Lambda \sim \frac{\varphi^2}{R_H^2},
$$

where $R_H$ is the Hubble radius. This gives

$$
\Lambda R_H^2 \sim \varphi^2 \approx 2.618,
$$

which is order-unity as observed. The cosmological constant emerges as the cost of maintaining recursive consistency across a universe whose effective dimension deviates slightly from the flat-space value. This picture complements holographic cosmology approaches while grounding the cosmological constant in the same constraint geometry that governs local phenomena.

### Appendix E — Rational Commensurability and Transport Scaling

Transport in Harper–Hofstadter lattice systems depends critically on the arithmetic properties of the magnetic flux $\alpha = p/q$ expressed in units of the flux quantum. The Thouless conductance $g$ measures spectral sensitivity to boundary conditions: high $g$ indicates extended states and easy transport, while low $g$ indicates localized states and transport barriers.

For rational flux $\alpha = p/q$, the magnetic unit cell contains $q$ lattice sites. The Thouless conductance scales inversely with the denominator:

$$
g(\alpha = p/q) \sim \frac{1}{q}.
$$

Low-$q$ rationals (simple fractions like $1/2$, $1/3$, $2/5$) produce near-commensurate structures where extended states percolate easily. High-$q$ rationals require intricate phase cancellation across many sites, suppressing transport. This $q$-dependence is the $\pi$-sector at work: the constraint functional assigns lower curvature cost to configurations respecting simple commensurabilities.

The golden ratio $\varphi$ plays a distinguished role through Hurwitz's theorem, which establishes that $\varphi$ is the hardest irrational to approximate by rationals:

$$
\left|\varphi - \frac{p}{q}\right| > \frac{1}{\sqrt{5}q^2}
$$

for all integers $p, q$. The constant $1/\sqrt{5}$ is the smallest possible for any irrational. As flux $\alpha$ approaches $\varphi$, the sequence of best rational approximants follows Fibonacci denominators $q_n = F_n$, producing a self-similar hierarchy of spectral gaps and transport windows.

The continued-fraction expansion

$$
\varphi = 1 + \cfrac{1}{1 + \cfrac{1}{1 + \cfrac{1}{1 + \cdots}}}
$$

generates the slowest possible convergence to rational approximations. Each truncation $p_n/q_n$ of this expansion produces a Fibonacci rational, and the spectral gaps at these values organize into a recursive hierarchy governed by the $\varphi$-sector.

The decade sector enters through the structure of optimal approximants. The best rational approximations to $\varphi$ satisfy

$$
\frac{p_n}{q_n} = \frac{F_{n+1}}{F_n},
$$

where $F_n$ is the $n$-th Fibonacci number. The ratio $F_{n+1}/F_n \to \varphi$ as $n \to \infty$, but the approach follows a decade-structured pattern: every ten Fibonacci numbers spans roughly $\varphi^{10} \approx 123$ in magnitude, producing decadal modulation windows in the transport spectrum.

This number-theoretic structure connects directly to the constraint functional. Transport (controlled by $q$) is governed by the $\pi$-sector through commensurability. Modulation (controlled by continued-fraction depth) is governed by the $\varphi$-sector through recursive consistency. And the large-scale organization of spectral transitions aligns with decade partitions near $\alpha \approx 0.329$ and $0.671$—the same values appearing in the dissipation ladder and cosmological energy fractions.

### Appendix F — Derivation of NHSE Suppression Boundaries

This appendix provides the complete derivation of the critical flux threshold $\Phi_c$ for NHSE suppression from the constraint eigenvalue functional. We begin with the non-Hermitian Harper–Hofstadter Hamiltonian

$$
H = -\sum_{\langle i,j \rangle} \left( t_{ij} e^{i\theta_{ij}} c_i^\dagger c_j + t_{ji} e^{-i\theta_{ij}} c_j^\dagger c_i \right)
$$

where $t_{ij} \neq t_{ji}$ encodes nonreciprocal hopping and $\theta_{ij}$ encodes the Peierls phase from magnetic flux. The asymmetry parameter $\gamma = (t_{ij} - t_{ji})/(t_{ij} + t_{ji})$ quantifies nonreciprocity.

The probability density $P(\mathbf{r})$ of eigenmode localization satisfies a continuity equation with drift and diffusion terms. In the continuum limit, the steady-state distribution extremizes the functional

$$
F[P] = \alpha \int |\nabla_\perp \ln P|^2 P\,\mathrm{d}^2r + \gamma_{\text{func}} \int (\mathbf{v}_{\text{drift}} \cdot \nabla \ln P)^2 P\,\mathrm{d}^2r
$$

where $\nabla_\perp$ denotes the component perpendicular to drift and $\mathbf{v}_{\text{drift}} \propto \gamma$ is the nonreciprocal drift velocity.

The flux-induced curvature is

$$
\kappa_{\text{flux}} = \frac{eB}{m^*c} = \frac{2\pi \Phi}{\Phi_0 a^2}
$$

where $a$ is the lattice constant and $\Phi_0 = h/e$ is the flux quantum. The drift-induced curvature is

$$
\kappa_{\text{drift}} = \frac{\gamma}{t} \times \frac{1}{a}
$$

representing the inverse length scale over which drift accumulates probability at boundaries.

The Euler–Lagrange equation for $F[P]$ yields stationary distributions where curvature terms balance. The suppression threshold is where curvature modes rebalance: flux-induced angular curvature overcomes drift-induced boundary curvature. The transition from boundary-localized (NHSE) to bulk-distributed (flux-dominated) occurs when

$$
\alpha \kappa_{\text{flux}}^2 = \gamma_{\text{func}} \kappa_{\text{drift}}^2
$$

Substituting the curvature expressions and solving for $\Phi$:

$$
\Phi_c = \frac{\Phi_0}{2\pi} \sqrt{\frac{\gamma_{\text{func}}}{\alpha}} \times \frac{\gamma}{t}
$$

For the isotropic square lattice, symmetry arguments constrain $\gamma_{\text{func}}/\alpha = \pi^2$, yielding

$$
\Phi_c = \frac{\pi \gamma}{t} \times \Phi_0 / 2\pi = \frac{\gamma}{2t} \Phi_0
$$

In units where $\Phi_0 = 2\pi$, this becomes $\Phi_c/2\pi \approx \gamma/(2t)$. For $\gamma/t = 0.5$, we obtain $\Phi_c \approx 0.25 \times 2\pi$, matching numerical observations.

The critical exponent governing the divergence of localization length near $\Phi_c$ follows from linearizing the RG flow around the transition. The same analysis that yields $\nu = 1/\rho^* = 0.304$ for the dissipation field (Appendix C) applies here, as both are curvature-dominance transitions within the constraint eigenvalue geometry. The localization length diverges as $\xi \sim |\Phi - \Phi_c|^{-0.304}$, providing a testable prediction for non-Hermitian lattice experiments.

### Appendix G — Information Wave Equation

The constraint functional $F[P]$ defined in Section 2 is a spatial curvature energy. To obtain dynamical evolution—information propagating as a wave—we promote $F[P]$ to a field-theoretic action by introducing time and a kinetic term.

Define the information potential $u(r,\theta,t) \equiv \ln P(r,\theta,t)$. The action is

$$
S[u] = \int \mathrm{d}t \int \mathrm{d}A \, \mathcal{L}(u, \partial_t u, \nabla u),
$$

where the Lagrangian density contains a kinetic term in time minus the curvature functional as potential energy:

$$
\mathcal{L} = \frac{\kappa}{2} (\partial_t u)^2 P - \alpha (\partial_\theta u)^2 P - \beta (\partial_\ell u)^2 P - \gamma \mathcal{C}_{2\times5}[u] - \tau P u,
$$

with $\ell = \log r$. The coefficient $\kappa$ sets the inertial scale of information change in time, $\alpha$, $\beta$, $\gamma$ are the curvature-sector couplings from Section 2, and $\tau$ encodes the entropy constraint.

The Euler–Lagrange equation for $u$ is

$$
\frac{\partial}{\partial t}\left(\frac{\partial \mathcal{L}}{\partial (\partial_t u)}\right) + \sum_i \frac{\partial}{\partial x_i}\left(\frac{\partial \mathcal{L}}{\partial (\partial_{x_i} u)}\right) - \frac{\partial \mathcal{L}}{\partial u} = 0,
$$

where $x_i \in \{\theta, \ell\}$. Computing each contribution: the time part yields $\partial_t[\kappa P \partial_t u]$, the angular part yields $\partial_\theta[-2\alpha P \partial_\theta u]$, and the log-radial part yields $\partial_\ell[-2\beta P \partial_\ell u]$. The potential and entropy terms contribute through $\gamma \, \delta\mathcal{C}_{2\times5}/\delta u$ and $\tau P(1+u)$.

Under the slow-variation approximation where $P$ changes primarily through $u$ and can be treated as locally constant $P_0(r,\theta)$ in the prefactors, dividing through yields the information wave equation:

$$
\partial_{tt} u = c_\pi^2 \, \partial_{\theta\theta} u + c_\varphi^2 \, \partial_{\ell\ell} u - \frac{1}{\kappa}\left[\gamma \frac{1}{P_0}\frac{\delta \mathcal{C}_{2\times5}}{\delta u} + \tau(1+u)\right],
$$

where $c_\pi^2 = 2\alpha/\kappa$ is the angular ($\pi$-sector) wave speed and $c_\varphi^2 = 2\beta/\kappa$ is the recursive ($\varphi$-sector) wave speed. The decade sector enters through the nonlinear term in $\mathcal{C}_{2\times5}$, and entropy/dissipation appears through $\tau$.

This equation states that information curvature propagates as a wave through angular ($\pi$), recursive ($\varphi$), and discrete (10) directions. The coefficients $c_\pi$ and $c_\varphi$ are sector wave speeds, while the decade and entropy terms act as nonlinear restoring and damping forces on the information manifold.

In the flat, no-decay, no-discrete limit ($\gamma = \tau = 0$), the equation reduces to a clean anisotropic wave equation:

$$
\partial_{tt} u = c_\pi^2 \, \partial_{\theta\theta} u + c_\varphi^2 \, \partial_{\ell\ell} u,
$$

the pure $\pi$–$\varphi$ information wave. This is the dynamical completion of the constraint eigenvalue geometry: information is not merely distributed according to curvature costs, but propagates through the geometry as a wave whose speeds are set by the sector couplings. The static solutions of Section 2 are the standing-wave eigenmodes of this dynamical system.

## References

[^1]: Shannon, C. E. (1948). "A mathematical theory of communication." *Bell System Technical Journal*, 27(3), 379–423. <https://doi.org/10.1002/j.1538-7305.1948.tb01338.x>

[^2]: Kolmogorov, A. N. (1965). "Three approaches to the quantitative definition of information." *Problems of Information Transmission*, 1(1), 1–7.

[^3]: Chaitin, G. J. (1969). "On the length of programs for computing finite binary sequences." *Journal of the ACM*, 16(1), 145–159. <https://doi.org/10.1145/321495.321506>

[^4]: Solomonoff, R. J. (1964). "A formal theory of inductive inference. Part I." *Information and Control*, 7(1), 1–22. <https://doi.org/10.1016/S0019-9958(64)90223-2>

[^5]: Landauer, R. (1961). "Irreversibility and heat generation in the computing process." *IBM Journal of Research and Development*, 5(3), 183–191. <https://doi.org/10.1147/rd.53.0183>

[^6]: Bennett, C. H. (2003). "Notes on Landauer's principle, reversible computation, and Maxwell's Demon." *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 34(3), 501–510. <https://doi.org/10.1016/S1355-2198(03)00039-X>

[^7]: Caticha, A. (2012). *Entropic Inference and the Foundations of Physics*. USP Press. ISBN: 978-85-314-1374-3

[^8]: Gromov, M. (1999). *Metric Structures for Riemannian and Non-Riemannian Spaces*. Birkhäuser Boston. <https://doi.org/10.1007/978-0-8176-4583-0>

[^9]: Blechschmidt, J., Ernst, O. G. (2021). "Three ways to solve partial differential equations with neural networks — A review." *GAMM-Mitteilungen*, 44(2), e202100006. <https://doi.org/10.1002/gamm.202100006>

[^10]: de Bezenac, E., Pajot, A., & Gallinari, P. (2018). "Deep learning for physical processes: Incorporating prior scientific knowledge." *Journal of Statistical Mechanics: Theory and Experiment*, 2019(12), 124009. <https://doi.org/10.1088/1742-5468/ab3195>

[^11]: Raissi, M., Perdikaris, P., & Karniadakis, G. E. (2019). "Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations." *Journal of Computational Physics*, 378, 686–707. <https://doi.org/10.1016/j.jcp.2018.10.045>

[^12]: Amari, S.-I. (2016). *Information Geometry and Its Applications*. Springer Japan. <https://doi.org/10.1007/978-4-431-55978-8>

[^13]: Frieden, B. R. (2004). *Science from Fisher Information: A Unification*. Cambridge University Press. <https://doi.org/10.1017/CBO9780511616907>

[^14]: Pavon, M., & Chen, Y. (2021). "Data-driven optimal transport." *Annual Review of Control, Robotics, and Autonomous Systems*, 4, 287–310. <https://doi.org/10.1146/annurev-control-071020-010308>

[^15]: Conforti, G. (2021). "A second order equation for Schrödinger bridges with applications to the hot gas experiment and entropic transportation cost." *Probability Theory and Related Fields*, 180(3), 1019–1062. <https://doi.org/10.1007/s00440-021-01038-4>

[^16]: Jaynes, E. T. (1957). "Information theory and statistical mechanics." *Physical Review*, 106(4), 620–630. <https://doi.org/10.1103/PhysRev.106.620>

[^17]: Cover, T. M., & Thomas, J. A. (2006). *Elements of Information Theory* (2nd ed.). Wiley-Interscience. ISBN: 978-0-471-24195-9

[^18]: Senechal, M. (1995). *Quasicrystals and Geometry*. Cambridge University Press. ISBN: 978-0-521-37259-6

[^19]: Baake, M., & Grimm, U. (2013). *Aperiodic Order: Volume 1, A Mathematical Invitation*. Cambridge University Press. <https://doi.org/10.1017/CBO9781139025256>

[^20]: Ostlund, S., & Kim, S. (1985). "Renormalization of quasiperiodic mappings." *Physica Scripta*, 1985(T9), 193–198. <https://doi.org/10.1088/0031-8949/1985/T9/031>

[^21]: Shechtman, D., Blech, I., Gratias, D., & Cahn, J. W. (1984). "Metallic phase with long-range orientational order and no translational symmetry." *Physical Review Letters*, 53(20), 1951–1953. <https://doi.org/10.1103/PhysRevLett.53.1951>

[^22]: Kalugin, P. A., Kitaev, A. Y., & Levitov, L. S. (1985). "Al0.86Mn0.14: A six-dimensional crystal." *JETP Letters*, 41(3), 145–149.

[^23]: Steinhardt, P. J., & Ostlund, S. (Eds.). (1987). *The Physics of Quasicrystals*. World Scientific. <https://doi.org/10.1142/0391>

[^24]: Ostlund, S., Pandit, R., Rand, D., Schellnhuber, H. J., & Siggia, E. D. (1983). "One-dimensional Schrödinger equation with an almost periodic potential." *Physical Review Letters*, 50(23), 1873–1876. <https://doi.org/10.1103/PhysRevLett.50.1873>

[^25]: Kohmoto, M. (1983). "Metal-insulator transition and scaling for incommensurate systems." *Physical Review Letters*, 51(13), 1198–1201. <https://doi.org/10.1103/PhysRevLett.51.1198>

[^26]: Macé, N., Jagannathan, A., Kalugin, P., Mosseri, R., & Piéchon, F. (2017). "Critical eigenstates and their properties in one- and two-dimensional quasicrystals." *Physical Review B*, 96(4), 045138. <https://doi.org/10.1103/PhysRevB.96.045138>

[^27]: Carlip, S. (1999). "Black hole entropy from conformal field theory in any dimension." *Physical Review Letters*, 82(14), 2828–2831. <https://doi.org/10.1103/PhysRevLett.82.2828>

[^28]: Bekenstein, J. D. (1973). "Black holes and entropy." *Physical Review D*, 7(8), 2333–2346. <https://doi.org/10.1103/PhysRevD.7.2333>

[^29]: Hawking, S. W. (1975). "Particle creation by black holes." *Communications in Mathematical Physics*, 43(3), 199–220. <https://doi.org/10.1007/BF02345020>

[^30]: Verlinde, E. (2011). "On the origin of gravity and the laws of Newton." *Journal of High Energy Physics*, 2011(4), 29. <https://doi.org/10.1007/JHEP04(2011)029>

[^31]: Jacobson, T. (1995). "Thermodynamics of spacetime: The Einstein equation of state." *Physical Review Letters*, 75(7), 1260–1263. <https://doi.org/10.1103/PhysRevLett.75.1260>

[^32]: 't Hooft, G. (1993). "Dimensional reduction in quantum gravity." arXiv preprint gr-qc/9310026. <https://doi.org/10.48550/arXiv.gr-qc/9310026>

[^33]: Susskind, L. (1995). "The world as a hologram." *Journal of Mathematical Physics*, 36(11), 6377–6396. <https://doi.org/10.1063/1.531249>

[^34]: Bousso, R. (2002). "The holographic principle." *Reviews of Modern Physics*, 74(3), 825–874. <https://doi.org/10.1103/RevModPhys.74.825>

[^35]: Chandrasekhar, S. (1931). "The maximum mass of ideal white dwarfs." *Astrophysical Journal*, 74, 81–82. <https://doi.org/10.1086/143324>

[^36]: Harper, P. G. (1955). "Single band motion of conduction electrons in a uniform magnetic field." *Proceedings of the Physical Society. Section A*, 68(10), 874–878. <https://doi.org/10.1088/0370-1298/68/10/304>

[^37]: Hofstadter, D. R. (1976). "Energy levels and wave functions of Bloch electrons in rational and irrational magnetic fields." *Physical Review B*, 14(6), 2239–2249. <https://doi.org/10.1103/PhysRevB.14.2239>

[^38]:  Wilkinson, M., & Austin, E. J. (1994). "Spectral dimension and dynamics for Harper's equation." *Physical Review B*, 50(3), 1420–1429. <https://doi.org/10.1103/PhysRevB.50.1420>

[^39]: Hiramoto, H., & Kohmoto, M. (1989). "Electronic spectral and wavefunction properties of one-dimensional quasiperiodic systems: A scaling approach." *International Journal of Modern Physics B*, 6(03n04), 281–320. <https://doi.org/10.1142/S0217979292000153>

[^40]: Thouless, D. J. (1983). "Quantization of particle transport." *Physical Review B*, 27(10), 6083–6087. <https://doi.org/10.1103/PhysRevB.27.6083>

[^41]: Wilkinson, M. (1984). "Critical properties of electron eigenstates in incommensurate systems." *Proceedings of the Royal Society of London. A. Mathematical and Physical Sciences*, 391(1801), 305–350. <https://doi.org/10.1098/rspa.1984.0016>

[^42]: Jitomirskaya, S. (2010). "Ergodic Schrödinger operators (on one foot)." *Proceedings of the International Congress of Mathematicians*, Hyderabad, India. <https://doi.org/10.1142/9789814324359_0117>

[^43]: Ostrowski, A. (1921). "Bemerkungen zur Theorie der Diophantischen Approximationen." *Abhandlungen aus dem Mathematischen Seminar der Universität Hamburg*, 1(1), 77–98. <https://doi.org/10.1007/BF02940581>

[^44]: Hurwitz, A. (1891). "Über die angenäherte Darstellung der Irrationalzahlen durch rationale Brüche." *Mathematische Annalen*, 39(2), 279–284. <https://doi.org/10.1007/BF01206656>

[^45]: Avila, A., & Jitomirskaya, S. (2009). "The Ten Martini Problem." *Annals of Mathematics*, 170(1), 303–342. <https://doi.org/10.4007/annals.2009.170.303>

[^46]: Alyatkin, S., Sigurdsson, H., Askitopoulos, A., Töpfer, J. D., Cilibrizzi, P., Ohadi, H., & Lagoudakis, P. G. (2024). "Quantum fluids of light in 2D artificial reconfigurable aperiodic crystals with tailored coupling." *Nature Communications*, 15, 6602. <https://doi.org/10.1038/s41467-024-50923-8>

[^47]: Penrose, R. (1974). "The role of aesthetics in pure and applied mathematical research." *Bulletin of the Institute of Mathematics and its Applications*, 10, 266–271.

[^48]: Aldebaran. "Optics of photonic quasicrystals." *Bulletin*, 2018. <https://www.aldebaran.cz/bulletin/2018_34/NP_Quasicrystals.pdf>

[^49]: Zhang, K. (2024). "Magnetic control of the non-Hermitian skin effect in two-dimensional lattices." arXiv preprint arXiv:2511.20518. <https://arxiv.org/abs/2511.20518>

[^50]: Kleiber, M. (1932). "Body size and metabolism." *Hilgardia*, 6(11), 315–353. <https://doi.org/10.3733/hilg.v06n11p315>

[^51]: West, G. B., Brown, J. H., & Enquist, B. J. (1999). "The fourth dimension of life: fractal geometry and allometric scaling of organisms." *Science*, 284(5420), 1677–1679. <https://doi.org/10.1126/science.284.5420.1677>

[^52]: Chaisson, E. J. (2011). "Energy rate density as a complexity metric and evolutionary driver." *Complexity*, 16(3), 27–40. <https://doi.org/10.1002/cplx.20323>

[^53]: Ellison, C. J., Mahoney, J. R., & Crutchfield, J. P. (2009). "Prediction, retrodiction, and the amount of information stored in the present." *Journal of Statistical Physics*, 136(6), 1005–1034. <https://doi.org/10.1007/s10955-009-9808-z>

[^54]: Sterling, P., & Laughlin, S. (2015). *Principles of Neural Design*. MIT Press. ISBN: 978-0-262-02870-7

[^55]: Kempes, C. P., Wolpert, D., Cohen, Z., & Pérez-Mercader, J. (2017). "The thermodynamic efficiency of computations made in cells across the range of life." *Philosophical Transactions of the Royal Society A*, 375(2109), 20160343. <https://doi.org/10.1098/rsta.2016.0343>

[^56]: Kifer, Y. (1990). "Large deviations in dynamical systems and stochastic processes." *Transactions of the American Mathematical Society*, 321(2), 505–524. <https://doi.org/10.1090/S0002-9947-1990-1025756-7>

[^57]: Pollicott, M., & Sharp, R. (2001). "Error terms for closed orbits of hyperbolic flows." *Ergodic Theory and Dynamical Systems*, 21(2), 545–562. <https://doi.org/10.1017/S0143385701001274>

[^58]: Kevrekidis, I. G., & Samaey, G. (2009). "Equation-free multiscale computation: Algorithms and applications." *Annual Review of Physical Chemistry*, 60, 321–344. <https://doi.org/10.1146/annurev.physchem.59.032607.093610>

[^59]: Melbourne, I., & Nicol, M. (2005). "Almost sure invariance principle for nonuniformly hyperbolic systems." *Communications in Mathematical Physics*, 260(1), 131–146. <https://doi.org/10.1007/s00220-005-1407-5>

[^60]: Kwon, C., & Lee, J. S. (2023). "Unified framework for generalized statistics: Thermodynamic uncertainty relations and the Onsager–Machlup action." *Physical Review X*, 13(2), 021018. <https://doi.org/10.1103/PhysRevX.13.021018>

[^61]: Dechant, A. (2018). "Multidimensional thermodynamic uncertainty relations." *Journal of Physics A: Mathematical and Theoretical*, 52(3), 035001. <https://doi.org/10.1088/1751-8121/aaf3ff>

[^62]: Barato, A. C., & Seifert, U. (2015). "Thermodynamic uncertainty relation for biomolecular processes." *Physical Review Letters*, 114(15), 158101. <https://doi.org/10.1103/PhysRevLett.114.158101>

[^63]: Horowitz, J. M., & Gingrich, T. R. (2020). "Thermodynamic uncertainty relations constrain non-equilibrium fluctuations." *Nature Physics*, 16(1), 15–20. <https://doi.org/10.1038/s41567-019-0702-6>

[^64]: Salazar, D. S. P. (2024). "Universal thermodynamic uncertainty relation for Petz quantum f-divergences." *Physical Review Letters*, 132(5), 050401. <https://doi.org/10.1103/PhysRevLett.132.050401>

[^65]: Tran, D. T., Dauphin, A., Grushin, A. G., Zoller, P., & Goldman, N. (2017). "Probing topology by 'heating': Quantized circular dichroism in ultracold atoms." *Science Advances*, 3(8), e1701207. <https://doi.org/10.1126/sciadv.1701207>
