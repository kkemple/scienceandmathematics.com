---
title: 'From 6D Lattice Projection to 3D Cosmic Expansion'
description: "One projection from 6D produces a spectral gap and a triadic frustration. They feed one β-function whose flow organizes compact objects, derives the area law, and produces accelerated expansion."
pubDate: '2026-02-18'
updatedDate: '2026-02-24'
zenodoDepositionId: 18763109
zenodoUrl: "https://zenodo.org/records/18763109"
doi: "10.5281/zenodo.18763109"
category: 'core'
order: 1
zenodoDescription: |
  A 6D periodic lattice projected to 3D simultaneously produces three structures: an aperiodic tiling (the quasicrystal), a spectral gap (from the Kaluza–Klein spectrum on the orbifold S³/2I), and a triadic frustration (from the constraint functional on entropy-constrained densities). The spectral gap and the frustration are dual descriptions of one obstruction—the orbifold quotient removes degrees of freedom that would otherwise allow simultaneous relaxation of all three curvature sectors.

  The spectral gap delivers an effective dimension D through the semigroup-controlled eigenvalue count on S³/2I, where 15 forbidden modes thin the low-energy spectrum to d_eff ≈ 2.61. The frustration delivers the coupling constant u* = 4πφ²/10 ≈ 3.29 through ground-state curvature I = 4πφ² partitioned by C₁₀ decade symmetry. Both feed independently into the β-function β(ξ, D) = −ξ(1−ξ)[u* + (D−2)ln(φ)/2], whose one-loop exactness is enforced by a vertex selection rule derived from the Perron–Frobenius eigenvalue of the Penrose substitution matrix.

  The coupled flow from (ξ, D) = (0, 3) to (1, 2) organizes the tier hierarchy of compact objects. Dark matter halos sit at ξ ~ 10⁻⁵. White dwarfs approach the structural saturation threshold u*/10 ≈ 0.329, where the Gaia DR3 catalog reveals a cooling anomaly at 14.5σ. Black holes complete the flow to the IR fixed point, where the effective dimension reaches 2—the Bekenstein–Hawking area law as a derived consequence. GWTC spin populations match the u* prediction at 0.1σ.

  The universe as a whole is unbound and responds differently. When Ω_m approaches ξ_c ≈ 0.304, the constraint functional undergoes eigenmode transition: the π-sector becomes dominant, producing accelerated expansion. The N-sector curvature pump model yields w₀ = −0.724 and w_a = −0.746, matching DESI DR2 measurements at 0.4σ and 0.5σ respectively.

  Branch competition among ADE orbifolds is quantified through spectral drive, with the E₈ branch achieving 40.7 versus 5.8 for the dodecagonal branch. Domain wall analysis shows E₈ walls are most expensive (factor 456×), E₈ is the unique maximal element under gap-set inclusion, and all tunneling rates are frozen (B ≫ 1, R-independent). Selection is primordial and irreversible.
keywords:
  - "6D projection"
  - "quasicrystal"
  - "E8 singularity"
  - "Kaluza-Klein spectrum"
  - "beta function"
  - "constraint geometry"
  - "spectral dimension"
  - "black hole entropy"
  - "dark energy"
  - "triadic tension"
  - "numerical semigroup"
  - "Penrose tiling"
  - "dissipation flow"
  - "dimensional reduction"
---

Penrose tilings[^1] have appeared on bathroom floors, building facades, and medieval Islamic architecture centuries before anyone wrote down their mathematics. Their defining property is aperiodicity—no finite translation maps the pattern onto itself—enforced by the golden ratio $\varphi = (1+\sqrt{5})/2$, whose continued fraction $[1; 1, 1, 1, \ldots]$ converges more slowly than any other irrational number. Hurwitz proved this in 1891: $\varphi$ is the worst-approximable number, meaning no rational $p/q$ satisfies $|\varphi - p/q| < 1/(\sqrt{5} \cdot q^2)$[^2]. That extremal property of a single irrational number connects a 6D lattice to cosmic expansion through a chain of results.

A 6D periodic lattice, projected to 3D, simultaneously produces a quasicrystal, a spectral gap, and a triadic frustration. The spectral gap and the frustration are dual descriptions of one obstruction—the orbifold quotient removes degrees of freedom that would otherwise allow simultaneous relaxation of all three curvature sectors. The spectral gap delivers an effective dimension $\mathcal{D}$. The frustration delivers a coupling constant $u^*$. Both feed independently into a single $\beta$-function, $\beta(\xi, \mathcal{D}) = -\xi(1-\xi)[u^* + (\mathcal{D}-2)\ln\varphi/2]$, whose flow from $(\xi, \mathcal{D}) = (0, 3)$ to $(1, 2)$ organizes the tier hierarchy of compact objects. Bound systems that complete the flow reach a two-dimensional IR fixed point—the Bekenstein–Hawking area law. The universe as a whole, which is unbound, responds to the same threshold by switching eigenmodes, producing accelerated expansion at $z \approx 0.63$.

The [constraint geometry](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) provides the $\beta$-function. The [KK spectrum computation](/kk-spectrum-e8-and-the-lcd-question) provides the effective dimension. The [ADE domain wall analysis](/ade-domain-walls-and-branch-selection) establishes why $E_8$ is selected over competing branches. Each section below traces one link of this chain, from the lattice through the projection, the spectrum, the frustration, the $\beta$-function, the physical hierarchy, branch selection, and the cosmological consequences.

## The 6D Lattice and Its Projection

Kramer and Neri proved in 1984 that the minimum dimension for a periodic lattice whose projection to $\mathbb{R}^3$ carries icosahedral symmetry is $d = 6$[^3]. The physical motivation came from the experimental discovery of icosahedral quasicrystals[^4]. The lattice $\Lambda \subset \mathbb{R}^6$ is periodic, infinite, and entirely without frustration. The projection decomposes $\mathbb{R}^6 = E_\parallel \oplus E_\perp$ into a physical subspace $E_\parallel \cong \mathbb{R}^3$ and an internal subspace $E_\perp \cong \mathbb{R}^3$.

The projection map $\Pi = (\pi_\parallel, \, S^3 \to S^3/\mathrm{2I})$ acts on $\Lambda$ and on the internal space simultaneously. Three independent consequences follow from this single operation:

$$
\Pi \;\longmapsto\; \begin{cases} \mathcal{T}: \pi_\parallel(\Lambda) \to \text{aperiodic tiling} & \text{(quasicrystal)} \\ \mathcal{S}: \mathrm{Spec}(\Delta_{S^3/\mathrm{2I}}) \to \{l : n_l \neq 0\} & \text{(spectral gap)} \\ \mathcal{F}: F[P]\big|_{S^3/\mathrm{2I}} \to I > 0 & \text{(frustration).} \end{cases}
$$

The image $\pi_\parallel(\Lambda)$ is a 3D Penrose tiling—aperiodic because the irrationality of $\varphi$ prevents any lattice translation from mapping entirely into $E_\parallel$. The internal space $E_\perp$ compactifies to $S^3$ and the icosahedral symmetry quotients it to the orbifold $S^3/\mathrm{2I}$, where $\mathrm{2I}$ is the binary icosahedral group ($|\mathrm{2I}| = 120$, the largest finite subgroup of $\mathrm{SU}(2)$). The McKay correspondence[^5] identifies this orbifold with the $E_8$ singularity, with Coxeter number $h = 30$.

The symmetry group is forced. Three independent requirements eliminate all alternatives. Crystallographic restriction eliminates $C_1, C_2, C_3, C_4, C_6$—these produce resonance lock-in under recursive scaling. $\varphi$-compatibility eliminates every remaining $n \neq 5$, since $2\cos(\pi/n) = \varphi$ has the unique solution $n = 5$. Binary closure on $S^2$ (which carries $\mathbb{Z}_2$ antipodal symmetry) lifts $C_5$ to $C_2 \times C_5 = C_{10}$. On $S^3$, the group implementing $C_{10}$ symmetry is $\mathrm{2I}$.

The orbifold $S^3/\mathrm{2I}$ determines which fields survive the quotient and how the surviving spectrum differs from that of the parent $S^3$.

## The Spectral Gap

Scalar fields on $S^3/\mathrm{2I}$ decompose into Kaluza–Klein modes. On the parent $S^3$, every spin level $l = 0, 1, 2, \ldots$ contributes. On the orbifold, only modes invariant under $\mathrm{2I}$ survive. The generating function is the Molien series[^6]:

$$
M(t) = \frac{1 + t^{30}}{(1 - t^{12})(1 - t^{20})}.
$$

The exponents 12, 20, 30 are the degrees of the Klein invariants[^7] $(H, T, f)$ satisfying the $E_8$ surface equation $T^2 = H^3 - 1728f^5$. The surviving spins are the elements of the numerical semigroup[^8] $\langle 6, 10, 15 \rangle = \langle a/2, \, b/2, \, h/2 \rangle$, with gap set $\{1, 2, 3, 4, 5, 7, 8, 9, 11, 13, 14, 17, 19, 23, 29\}$. There are 15 gaps, and the genus $g = 15 = h/2$. This relationship—genus equals half the Coxeter number—holds only for $E_8$ among all [ADE types](/ade-domain-walls-and-branch-selection).

The first surviving mode sits at $l = 6$, with eigenvalue $\lambda_1 = 4 \cdot 6 \cdot 7 = 168$. On the unquotiented $S^3$, the first excitation is $\lambda = 3$. The protection factor $\sigma = 168/3 = 56$ measures how far the orbifold has pushed up the spectral floor.

The deletion of 15 modes changes the effective dimensionality. Weyl's law[^9] says the cumulative eigenvalue count on a $d$-dimensional manifold grows as $N(\lambda) \sim \lambda^{d/2}$. On $S^3/\mathrm{2I}$, the thinned count in the semigroup-controlled regime ($l \leq h$) grows as $N(\lambda) \sim \lambda^{d_{\mathrm{eff}}/2}$ with $d_{\mathrm{eff}} = 2.61$. The orbifold is topologically three-dimensional but spectrally behaves as dimension $\sim$2.6 at low energies. Scale-dependent spectral dimension—including reduction to 2 in the infrared—has also been reported in causal dynamical triangulations[^10]. As the cutoff increases past the Coxeter number, $d_{\mathrm{eff}}$ asymptotes back toward 3—the Weyl regime. The full computation is in the [KK spectrum post](/kk-spectrum-e8-and-the-lcd-question).

The spectral gap delivers the first of two inputs to the $\beta$-function: the effective dimension $\mathcal{D}$. But the projection from 6D forces *an* ADE orbifold, not uniquely this one. The question of *why* $E_8$ requires comparing all available branches.

## Branch Competition

Other finite subgroups of $\mathrm{SU}(2)$—the binary octahedral ($\mathrm{2O}$, mapping to $E_7$), binary tetrahedral ($\mathrm{2T}$, mapping to $E_6$), and binary dihedral groups (mapping to the $D$-series)—produce legitimate eigenbranches with distinct orbifolds, semigroups, spectral gaps, and $\beta$-function profiles.

The spectral drive—the product of protection factor $\sigma$ and $\beta$-function strength at criticality—measures the total flow capacity of each branch:

| Branch | $\Gamma$ | Semigroup | $\sigma$ | $d_{\mathrm{eff}}$ | Drive |
|:---|:---|:---|---:|:---:|---:|
| Penrose ($E_8$) | $\mathrm{2I}$ | $\langle 6,10,15\rangle$ | 56× | 2.61 | 40.7 |
| Octahedral ($E_7$) | $\mathrm{2O}$ | $\langle 4,6,9\rangle$ | 27× | 2.68 | 19.5 |
| Tetrahedral ($E_6$) | $\mathrm{2T}$ | $\langle 3,4,6\rangle$ | 16× | 2.70 | 11.7 |
| Dodecagonal ($D_8$) | $\mathrm{BD}_6$ | $\langle 2,7\rangle$ | 8× | 2.50 | 5.8 |

The $\beta$-function varies by $\sim1\%$ across branches; the protection factor dominates. The $E_8$ branch's dominance traces to three independent properties: $\varphi$ is the worst-approximable irrational (maximal resonance protection), $\mathrm{2I}$ is the largest finite subgroup of $\mathrm{SU}(2)$ (most aggressive mode deletion), and $\langle 6, 10, 15 \rangle$ is the unique ADE semigroup achieving genus $g = h/2$ (maximally distributed gap structure).

Branches with weaker spectral drive remain viable only with thermodynamic compensation—configurational entropy from defect-tile species mixing. The dodecagonal branch requires approximately 5× entropy amplification ($S/Nk_B$ from 0.120 to 0.554). The Penrose branch requires no entropy subsidy.

The [ADE domain wall computation](/ade-domain-walls-and-branch-selection) establishes that domain wall energies between all branch pairs are finite, with the $E_8$ walls most expensive by a factor of $\sim 456\times$. Gap-set nesting ($\mathrm{gap}(E_6) \subset \mathrm{gap}(E_7) \subset \mathrm{gap}(E_8)$) makes $E_8$ the unique maximal element under inclusion. Thermal stability analysis shows $E_8$ walls dissolve last during cosmological cooling, and all tunneling rates are frozen ($B \gg 1$, $R$-independent). Selection is primordial and irreversible.

The second input to the $\beta$-function—a coupling constant—comes from the same $E_8$ orbifold, read differently.

## The Frustration

The orbifold structure that deletes 15 KK modes also prevents simultaneous relaxation of three curvature sectors. The constraint functional

$$
F[P] = g_\pi K_\pi[P] + g_\varphi K_\varphi[P] + g_N K_N[P]
$$

operates on entropy-constrained probability densities, where $K_\pi$ measures departure from angular isotropy, $K_\varphi$ measures departure from golden-ratio self-similarity, and $K_N$ measures departure from $C_{10}$ discrete resonance.

The [triadic tension theorem](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) establishes four properties: (T1) the sector minimizers are mutually disjoint; (T2) the covariance matrix $\Sigma_{ij} = \langle \delta K_i \, \delta K_j \rangle$ satisfies $\Sigma_{ij} < 0$ for $i \neq j$; (T3) $\det(\Sigma) > 0$; (T4) the ground state has $F[P_0] > 0$. No configuration relaxes all three sectors simultaneously.

The pairwise incompatibilities are quantitative, computed from a 21,976-vertex Penrose tiling (Robinson triangle inflation, 12 subdivision steps, 62,820 directed nearest-neighbor bonds).

The $\pi$–$\varphi$ clash is geometric. The $\varphi$-minimizer—the Penrose tiling itself—retains tenfold bond-angular anisotropy. Fibonacci inflation produces ten edge directions at 36° intervals, giving bond-orientational order $|\psi_{10}| = 0.849$ and angular Fisher information $K_\pi \geq 72.1$ (gap $\delta_{\pi\varphi} \geq 72.1$; von Mises estimate $\approx 311$). The fivefold vertex symmetry promotes to tenfold in the pair correlation by Friedel's law, so the relevant harmonic is $m = 10$. Optimizing self-similarity forces angular structure that the $\pi$-sector penalizes.

The $\varphi$–$N$ clash is algebraic. The frequency combs $\omega = 2\pi k / \ln\varphi$ and $\omega = 2\pi k / \ln 10$ are incommensurable because $\ln 10 / \ln\varphi = 4.785\ldots$ is irrational, and the self-similarity mismatch factorizes as $\delta_{\varphi N}/A^2 = 2\sin^2(\pi\ln\varphi/\ln 10) = 0.745$. The golden-ratio inflation period and the decade symmetry period cannot be simultaneously satisfied.

The $\pi$–$N$ clash is harmonic. $C_{10}$ symmetry requires angular harmonics at $k = 10, 20, \ldots$, each carrying $k^2 |\hat{P}_k|^2$ of angular curvature (gap $\delta_{\pi N} \geq 72.1$, exact von Mises value $\approx 311$). Discrete resonance demands precisely the angular structure that isotropy forbids.

The ground-state curvature is $I = 4\pi\varphi^2 \approx 32.9$. The $4\pi$ comes from the Gauss–Bonnet theorem applied to $S^2$—the angular manifold at the endpoint of dimensional flow, whose topology is forced by compactness, orientability, and positive curvature. The $\varphi^2$ comes from the fixed-point equation $x = 1 + 1/x$, giving $\varphi^2 = \varphi + 1$.

The frustration delivers the second input to the $\beta$-function: a coupling constant derived from $I$. The 15 missing KK modes and the nonzero ground-state curvature are two readouts of the same obstruction—the orbifold quotient—and they converge in a single equation.

## Two Paths, One Bracket

The spectral gap supplies $\mathcal{D}$. The frustration supplies $u^*$. They feed independently into the $\beta$-function through different channels.

The spectral path delivers the effective dimension.

$$
\mathcal{S} \;\to\; d_{\mathrm{eff}} \;\to\; \mathcal{D}.
$$

The frustration path delivers the coupling constant. Self-similarity requires uniform curvature spectral density. $C_{10}$ decade symmetry partitions each RG period into 10 equivalent shells. Total curvature per period is $I$, giving

$$
\mathcal{F} \;\to\; I = 4\pi\varphi^2 \;\to\; u^* = I/10 \approx 3.290.
$$

Both enter the same equation. The dissipation fraction $\xi \in [0, 1]$ measures the share of organizational capacity devoted to maintenance. Its flow under coarse-graining is governed by a $\beta$-function assembled from four ingredients: the logistic factor $-\xi(1-\xi)$ (from the boundedness of $\xi$), the coupling $u^*$ (from the frustration), the dimensional correction $(\mathcal{D}-2)\ln\varphi/2$ (from the spectrum), and the vertex selection rule.

The vertex selection rule enforces one-loop exactness. The recursion symmetry operator acts on perturbations $\delta P$ around the self-similar ground state as $T_\varphi(\delta P)(\theta, \ell) = \varphi \cdot \delta P(\theta, \ell + \ln\varphi)$, where the shift implements geometric inflation and the prefactor $\varphi$ is the Perron–Frobenius eigenvalue of the Penrose substitution matrix $M = \bigl(\begin{smallmatrix}1&1\\1&0\end{smallmatrix}\bigr)$. At $P_0$, the vertex functionals inherit $\ln\varphi$-periodicity, so the shift drops out and only the amplitude scaling $\varphi^n$ remains: $\varphi^n g_n = \varphi^2 g_n$ forces $g_n = 0$ for $n > 2$ because $\varphi$ is irrational. Higher-order corrections vanish identically, and the one-loop $\beta$-function is exact.

$$
\beta(\xi, \mathcal{D}) = -\xi(1-\xi)\left[u^* + \frac{\mathcal{D}-2}{2}\ln\varphi\right]
$$

with coupled dimensional flow $d\mathcal{D}/d(\ln\mu) = -(\xi/u^*)\ln\varphi$.

The UV fixed point is $(\xi, \mathcal{D}) = (0, 3)$: no organizational structure, full three dimensions. The IR fixed point is $(\xi, \mathcal{D}) = (1, 2)$: complete organizational saturation, two effective dimensions. At $\mathcal{D} = 2$, the dimensional correction vanishes exactly, and the critical exponent takes its universal value $\nu = 1/u^* = 10/(4\pi\varphi^2) \approx 0.304$. This same ratio defines the critical maintenance fraction $\xi_c = 1/u^* \approx 0.304$—the threshold where the maintenance multiplier $(1-\xi)^{-u^*}$ enters nonlinear divergence. Systems crossing $\xi_c$ undergo qualitative structural change; the universe as a whole, being unbound, responds with eigenmode transition rather than collapse (§Accelerated Expansion below).

## The Tier Hierarchy

Physical systems sit at different points along the flow from $(0, 3)$ to $(1, 2)$, and the $\beta$-function value at each point determines the local dynamics.

### From Curl to Maintenance Cost

Feasibility projection through incompatible curvature sectors generically produces [irreducible curl](/the-geometry-of-self-correction) — correction fields that cannot be written as gradients. A system with irreducible curl cannot globally relax. It must sustain ongoing redistributive dynamics: energy continuously committed to maintaining the constrained configuration rather than settling to a minimum — a thermodynamic cost locked into structural coherence and unavailable for any other purpose.

The maintenance fraction $\xi$ measures this cost as a share of total energy budget:

$$
\xi \equiv \frac{E_{\mathrm{bind}}}{Mc^2}.
$$

Why binding energy? Because in a gravitational system, the binding energy is precisely the energy that has been removed from availability by the act of gravitational organization. It is the energy committed to holding the configuration together against the incompatible curvature sectors — the physical realization of the circulation cost that irreducible curl demands. A diffuse gas cloud has committed no energy to holding itself together — $\xi = 0$, everything is available, and the system sits at the UV fixed point $(0, 3)$. A black hole has committed its entire rest-mass energy to gravitational configuration — $\xi = 1$, nothing remains, and the system sits at the IR fixed point $(1, 2)$. Between these extremes, $\xi$ tracks how far along the flow from uncommitted to fully committed a system has traveled.

The logistic structure $\xi(1-\xi)$ in the $\beta$-function follows directly from this physical picture. At $\xi = 0$, there is nothing to maintain — the maintenance rate vanishes. At $\xi = 1$, there is no remaining budget from which to draw further maintenance cost — the rate vanishes again. Between these endpoints, the rate is positive and maximal near $\xi = 1/2$. This is the unique first-order polynomial that respects both boundaries.

For gravitationally bound systems, the maintenance fraction has a concrete, measurable realization:

$$
\xi_{\mathrm{grav}} = \frac{R_S}{R} = \frac{2GM}{Rc^2},
$$

where $R_S$ is the Schwarzschild radius and $R$ is the characteristic system radius. This is dimensionless, scale-covariant, and computable directly from observed masses and radii. It provides the operational bridge between the abstract constraint geometry and astrophysical data.

### Four-Tier Partition

Cosmic matter partitions into four tiers corresponding to four qualitatively distinct regimes of the $(\xi, \mathcal{D})$ flow. Each tier occupies a different region of the flow plane, and the RG evolution within each region has qualitatively different character.

1. **Diffuse, non-collapsed matter.** $\xi_0 = 0$, $\mathcal{D}_0 = 3$. This matter has never entered the flow. At $z = 0$, roughly 56% of cosmic matter remains in this tier.

2. **Halo gravitational channel.** Dark matter halos have entered gravitational collapse but remain at $\xi \sim 10^{-5}$ — bound but far below $\xi_c$. About 44% of matter at $z = 0$.

3. **Compact stellar remnants** (white dwarfs, neutron stars). Individual objects carry significant $\xi$ ($10^{-4}$ to $10^{-1}$), but their mass-weighted cosmological contribution is small ($\sim 10^{-3}$ of total matter).

4. **Black holes** (stellar and supermassive). $\xi = 1$, $\mathcal{D} = 2$. At the IR fixed point. Every black hole has $R_S/R = 1$ regardless of formation channel — the Bekenstein–Hawking area law $S_{\mathrm{BH}} = A/(4\ell_P^2)$ confirms $\mathcal{D} = 2$.

Mass fractions satisfy $f_0(z) + f_h(z) + f_r(z) + f_{\mathrm{BH}}(z) = 1$, with compact remnants and black holes subtracted from halo mass to avoid double counting.

### Halo Gravitational Maintenance

The halo tier requires explicit construction because its $\xi$ is an integral over the halo population. Halos are modeled with NFW profiles, and the maintenance fraction uses the central potential depth normalized to $R_S/R$ in the point-mass limit:

$$
\xi_{\mathrm{halo,grav}}(M,z) = \frac{2GM}{R_{\mathrm{vir}}c^2} \frac{c(M,z)}{\ln(1+c) - c/(1+c)},
$$

where $c(M,z)$ is the concentration parameter. The factor of 2 ensures consistency with $\xi_{\mathrm{grav}} = R_S/R = 2GM/(Rc^2)$ across all tiers — it comes from the Schwarzschild radius definition, not the virial theorem.

The global halo maintenance load, mass-weighted over the Sheth–Tormen halo mass function and normalized to total matter density, is

$$
\xi_h(0) = 3.02 \times 10^{-5}.
$$

This number is small. Halos are gravitationally bound — they pass Stage 1 of the activation cascade — but their binding-energy fraction is five orders of magnitude below $\xi_c$. They are bound but unloaded. The $\beta$-function evaluates to $\beta \sim -4 \times 10^{-5}$: weak flow, far from any structural threshold.

### Compact Remnant Tier

White dwarfs at $\xi_{\mathrm{WD}} \sim 2 \times 10^{-4}$ are approaching the structural saturation threshold $u^*/10 \approx 0.329$. The Gaia DR3 catalog contains 7,515 white dwarfs with a [cooling anomaly](/binding-energy-critical-radii-and-information-maintenance-tax) at this radius ratio, at $14.5\sigma$ significance[^11]. As mass approaches the Chandrasekhar limit, $R$ shrinks, $\xi$ rises, and the maintenance multiplier $(1-\xi)^{-u^*}$ diverges — the system reaches information bankruptcy and reorganizes.

Neutron stars sit at $\xi \sim 0.31$–$0.49$, measured directly from NICER X-ray timing (simultaneous mass–radius: J0030+0451 at $\xi = 0.311$, J0437$-$4715 at $\xi = 0.369$, J0740+6620 at $\xi = 0.493$). Every measured neutron star exceeds $\xi_c = 0.304$. They have passed all three stages of the activation cascade — kinematic binding, organizational loading past $\xi_c$, and geometric transition where the curl floor engages. The $\beta$-function is steep ($\beta \sim -0.83$ for the canonical $1.4\,M_\odot$/11 km case) and the effective dimension has begun dropping below 3. Neutron stars are the highest-$\xi$ objects that remain below tri-sector saturation.

Stellar black holes are not in this tier. $R_S/R = 1$ for any black hole — they belong to the black hole tier at the IR fixed point.

Although individual neutron star $\xi$ values are large, the neutron star mass density is small relative to total matter ($\rho_{\mathrm{NS}} \sim 10^{-4}\,\rho_m$), so the global compact-remnant maintenance load remains small:

$$
\xi_r(0) \sim 10^{-5}.
$$

### Black Hole Tier

All black holes satisfy $\xi = 1$ and $\mathcal{D} = 2$. The formation channel differs — core collapse for stellar-mass, sustained accretion for supermassive — but the end state is identical. The event horizon defines $R = R_S$, Bekenstein–Hawking entropy[^12][^13] scales as area not volume, and the system is confined to boundary-supported dynamics. The LIGO/Virgo catalog (GWTC, 164 binary black hole mergers) yields spin populations consistent with the $u^*$ prediction at [$0.1\sigma$ deviation](/black-hole-horizons-and-dimensional-reduction-correspondence)[^14].

SMBH mass density is anchored at $\rho_{\mathrm{SMBH}}(0) = 4.3 \times 10^5\,M_\odot\,\mathrm{Mpc}^{-3}$ from the Soltan argument — integrating AGN luminosity across cosmic time with radiative efficiency $\epsilon \approx 0.1$ gives the total accreted mass. Stellar black hole density is constructed from stellar evolution inventories. Since $\xi_{\mathrm{BH}} = 1$ for all black holes, their maintenance contribution is simply their combined mass fraction:

$$
\xi_{\mathrm{BH}}(z) = f_{\mathrm{SMBH}}(z) + f_{\mathrm{sBH}}(z), \qquad \xi_{\mathrm{BH}}(0) \approx 1.1 \times 10^{-4}.
$$

Because $\xi_{\mathrm{BH}} = 1$, all energy is consumed by maintenance and the [dimensional flow](/black-hole-horizons-and-dimensional-reduction-correspondence) drives $\mathcal{D} \to 2$ — horizons are boundary-supported dynamics at the IR fixed point. The flow factor $\xi(1-\xi) = 0$ confirms they have completed the RG trajectory: no further evolution is possible, and their contribution to the cosmological tier budget is purely their combined mass fraction.

### Diagnostic Mean Binding Fraction

The global diagnostic is the direct sum of tier contributions, each normalized to total matter density:

$$
\bar{\xi}(z) = \xi_h(z) + \xi_r(z) + \xi_{\mathrm{BH}}(z).
$$

| Component | Value |
|---|---|
| $\xi_h$ | $3.02 \times 10^{-5}$ |
| $\xi_r$ | $\sim 10^{-5}$ |
| $\xi_{\mathrm{BH}}$ | $\sim 1.1 \times 10^{-4}$ |
| $\bar{\xi}$ | $\sim 1.5 \times 10^{-4}$ |

This value is diagnostic only — it indicates the overall scale of cosmological maintenance burden. RG integration must proceed tierwise, not from this average, for reasons explained below.

### Tierwise RG Integration

RG evolution must be performed separately for each tier because the flow equations are nonlinear. The maintenance rate $d\xi/d\mu = \xi(1-\xi)\mathcal{W}(\mathcal{D})$ depends on $\xi(1-\xi)$, which is concave. By Jensen's inequality, averaging $\xi$ across tiers first and then computing the flow rate systematically overestimates the result compared to computing flow rates tierwise and then averaging. The error is proportional to the variance of $\xi$ across tiers — and since $\xi$ spans from 0 (diffuse) to 1 (black holes), the variance is maximal.

More concretely: the diffuse tier ($\xi = 0$) contributes zero to the flow because no energy has been committed to maintenance — structure has not begun. The black hole tier ($\xi = 1$) also contributes zero *further* flow, but for the opposite reason: all energy is consumed by maintenance, the dimensional flow has driven $\mathcal{D} \to 2$, and the system has completed its RG trajectory. Both give $\xi(1-\xi) = 0$, but the physics is opposite — one has not started, the other is maximally active at the IR fixed point. Only the intermediate tiers (halos and compact remnants) drive nonzero evolution. Averaging first would incorrectly attribute flow contributions to the diffuse and black hole mass whose $\xi$ values properly produce no further change.

The tierwise dimension evolution is

$$
\mathcal{D}_i(z) = 3 - \frac{\ln\varphi}{u^*} \int_{\mu(z_{\mathrm{ref}})}^{\mu(z)} \xi_i(\mu')\,d\mu',
$$

with RG clock $\mu(z) = \ln[k_{nl}(0)/k_{nl}(z)]$ defined by the nonlinear scale where $\Delta^2(k_{nl}, z) = 1$. The mass-weighted global effective dimension at $z = 0$ gives

$$
3 - \langle \mathcal{D}(0) \rangle = 1.4 \times 10^{-5}.
$$

The universe remains extremely close to $\mathcal{D} = 3$. Expansion wins: $R(t)$ increases faster than cumulative binding energy can grow in the bulk.

### Linear Growth Modification

The standard $\Lambda$CDM linear growth equation for matter density perturbations is

$$
\delta'' + \left[2 + \frac{d\ln H}{d\ln a}\right]\delta' - \frac{3}{2}\Omega_m(a)\,\delta = 0,
$$

where primes denote derivatives with respect to $\ln a$. Maintenance costs enter as additional friction — binding energy committed to structural coherence is unavailable for driving perturbation growth:

$$
\delta'' + \left[2 + \frac{d\ln H}{d\ln a} + \Gamma_{\mathrm{TCG}}(z,k)\right]\delta' - \frac{3}{2}\Omega_m(a)\,\delta = 0.
$$

The friction kernel $\Gamma_{\mathrm{TCG}}(z,k)$ combines the logistic maintenance rate $\mathcal{W}(\xi)\,\xi(1-\xi)$ from the $\beta$-function, a normalization set at criticality, a microstructural amplification factor from spectral concentration on Penrose defect vertices, and a Lorentzian cutoff at the cosmological coherence scale. Every factor is assembled from previously defined geometric objects — no new free parameters enter.

Because $\bar{\xi}(z) \ll 1$ and diffuse mass dominates, the friction kernel forces deviations into the sub-ppm regime:

| Observable | Max deviation ($z \leq 2$) |
|---|---|
| $D_{\mathrm{TCG}}/D_{\Lambda\mathrm{CDM}}$ | $1.2 \times 10^{-6}$ |
| $f_{\mathrm{TCG}}/f_{\Lambda\mathrm{CDM}}$ | $3.0 \times 10^{-6}$ |
| $(f\sigma_8)_{\mathrm{TCG}}/(f\sigma_8)_{\Lambda\mathrm{CDM}}$ | $3.0 \times 10^{-6}$ |

Across $z \leq 1000$, the maximum $(f\sigma_8)$ deviation reaches $1.3 \times 10^{-5}$. Strict binding-energy maintenance forces TCG corrections into the sub-ppm regime for linear observables. The framework coexists with $\Lambda$CDM in the linear regime, with its structural content confined to the nonlinear and boundary-saturated regimes.

The **critical approach regime** is the interval of the dissipation flow in which curvature tradeoffs are binding, absorption capacity remains nonzero, and no integrable correction exists. It is bounded by two thresholds: entry at structural saturation $u^*/10 \approx 0.329$, where the discrete sector becomes binding; exit at maintenance bankruptcy $\xi \to 1$, where the logistic factor $\xi(1-\xi)$ drives absorption capacity to zero. Between these thresholds, the coexistence of slowing flow and irreducible frustration produces oscillatory dynamics as a structural consequence. The richest dynamics concentrate in approach rather than at equilibrium or after collapse.

Every system discussed so far — halos, white dwarfs, neutron stars, black holes — is gravitationally bound. The same $\beta$-function applies at the global cosmological scale, but the universe as a whole is unbound, and this changes the outcome.

## Accelerated Expansion

Bound systems can complete the flow to $(1, 2)$. The universe fails Stage 1 of the activation cascade—it is unbound—so it responds differently. When the global matter fraction $\Omega_m$ approaches $\xi_c \approx 0.304$—the same divergence threshold that drives white dwarf information bankruptcy—the response for an unbound system is not collapse but eigenmode transition.

The constraint functional admits different dominant eigenmodes at different epochs. The Euler–Lagrange equation

$$
-g_\pi \partial_{\theta\theta}\ln P - g_\varphi \partial_{\ell\ell}\ln P + g_N \frac{\delta C_{2\times 5}}{\delta P} = \lambda + \tau(1 + \ln P)
$$

yields radiation-dominated dynamics ($\pi$-sector dominant) at early times, matter-dominated clustering ($\varphi + N$ sectors dominant) during structure formation, and accelerated expansion ($\pi$-sector dominant again) at late times. The transition occurs at $z \approx 0.63$, when $\Omega_m$ approaches $\xi_c = 0.304$. The upper boundary of the transition is set by $u^*/10 = 0.329$—the per-shell curvature budget—where the discrete sector becomes fully binding and the $\pi$-eigenmode takes over. The acceleration onset occurs when $\Omega_\Lambda(z)$ crosses this threshold, which happens at $z = 0.632$, matching the observed $q = 0$ redshift.

The present-day $\Omega_m = 0.315 \pm 0.007$ (Planck 2018) sits inside the approach window $[\xi_c, \, u^*/10] = [0.304, \, 0.329]$. The window is a structural attractor. When $\Omega_m$ drops below $\xi_c$, the N-sector desaturates, the $\pi$-eigenmode weakens, structure formation reactivates, and the matter fraction stabilizes. When $\Omega_m$ rises above $u^*/10$, the N-sector saturates, the $\pi$-eigenmode dominates, expansion accelerates, and matter dilutes back down. The feedback holds $\Omega_m$ in the window between the two thresholds derived from the same coupling constant $u^* = 4\pi\varphi^2/10$.

The physical mechanism is the N-sector curvature pump. For $w_0 > -1$ (as DESI observes), $\rho_{DE}$ must increase with $z$ near $z = 0$: dark energy was slightly stronger in the recent past. At higher $z$, $\Omega_m$ is larger, the N-sector is more saturated, and the cross-susceptibility $R_{\pi N} = +0.069 > 0$ (from T2) pumps curvature into the $\pi$-sector, enhancing $\rho_{DE}$. As the N-sector desaturates toward $z = 0$, the pump weakens and $\rho_{DE}$ relaxes toward $\Lambda$. The capped pump model

$$
f(z) = 1 + A \times \min\!\left[\left(\frac{\Omega_m}{\Omega_{m,0}}\right)^{1/2} - 1, \; \frac{1}{\xi_c} - 1\right] \times \left(\frac{\Omega_\Lambda}{\Omega_{\Lambda,0}}\right)^{\!\varphi^2}
$$

has each structural feature determined by the framework: $n = 1/2$ (mean-field exponent), $m = \varphi^2$ (framework constant), cap $= 1/\xi_c - 1$ (N-sector saturation limit), and amplitude $A = \mathcal{W}(3) + 1 = u^* + 1 + \ln\varphi/2 \approx 4.531$ (the full 3D coupling plus unit curvature offset). The resulting equation of state gives $w_0 = -0.724$ vs DESI DR2's $-0.75 \pm 0.07$ ($0.4\sigma$) and $w_a = -0.746$ vs DESI's $-0.86 \pm 0.25$ ($0.5\sigma$)[^15]. As a cross-check, $A = \mathcal{W}(3)+1$ predicts $R_{\pi N}/|R_{\pi\pi}| = (\mathcal{W}(3)+1)/5 = 0.906$, matching the measured 0.908 to 0.2%.

The eigenmode transition also makes contact with [Type Ia supernova energetics](/type-ia-supernova-information-theoretic-energetics). At the $\pi$-sector transition, the white dwarf's organizational information must be erased and rewritten — a process whose minimum thermodynamic cost is set by Landauer's principle[^16] applied to the number of structural bits crossing the threshold. The resulting energy $E = 4.3 \times 10^{44}$ J matches the observed bolometric output of normal Type Ia events[^17].

## The Complete Chain

A 6D periodic lattice projects to 3D. The projection simultaneously produces the orbifold $S^3/\mathrm{2I}$—the Poincaré homology sphere, whose McKay correspondent is $E_8$.

$$6\text{D lattice} \xrightarrow{\;\text{project}\;} S^3/\mathrm{2I}.$$

The Molien series of $\mathrm{2I}$ reads off which Kaluza–Klein modes survive the quotient. The surviving spins are exactly the elements of the numerical semigroup $\langle 6, 10, 15 \rangle$, with 15 gaps—half the Coxeter number $h = 30$, a property unique to $E_8$ among all ADE types.

$$S^3/\mathrm{2I} \xrightarrow{\;\text{Molien}\;} \langle 6,10,15 \rangle \xrightarrow{\;n_l = 0\;} d_{\mathrm{eff}} = 2.61.$$

Those 15 missing modes thin the low-energy eigenvalue count. By Weyl's law, the orbifold is topologically three-dimensional but spectrally behaves as dimension 2.61—the effective dimension $\mathcal{D}$ that enters the $\beta$-function.

A second path runs in parallel. The same orbifold quotient prevents simultaneous relaxation of three curvature sectors, producing a ground-state curvature $I = 4\pi\varphi^2 \approx 32.9$. Decade symmetry partitions each RG period into 10 equivalent shells, giving the coupling constant $u^* = I/10 \approx 3.29$.

$$\text{projection} \xrightarrow{\;\text{frustration}\;} I = 4\pi\varphi^2 \xrightarrow{\;C_{10}\;} u^* = I/10.$$

The spectral path delivers $\mathcal{D}$. The frustration path delivers $u^*$. Both are consequences of a single projection, and they converge in the bracket $[u^* + (\mathcal{D}-2)\ln\varphi/2]$.

The projection forces *an* ADE orbifold but does not uniquely force $E_8$. Branch selection completes the chain: $E_8$ has the highest spectral drive (40.7 vs 5.8 for $D_8$), the most expensive [domain walls](/ade-domain-walls-and-branch-selection) (factor 456×), and is the unique maximal element under gap-set inclusion. All tunneling rates are frozen ($B \gg 1$, $R$-independent). Selection is primordial and irreversible.

## Limitations

**The 6D lattice is assumed.** The Kramer–Neri theorem establishes that 6 is the minimum dimension for icosahedral projection, but does not explain why a 6D lattice exists. The framework begins at the lattice and derives everything downstream.

**The compactification radius $R$ is a free parameter.** Everything else—$u^*$, $\xi_c$, the spectral gap, the tier hierarchy, the expansion onset—follows from the projection. But $R$ sets the energy scale at which KK modes become relevant, and its value is not derived.

**The "+1" in $A = 1 + \mathcal{W}(3)$ has a physical interpretation but not yet a first-principles derivation.** The N-sector curvature pump model yields $w_0 = -0.724$ ($0.4\sigma$ from DESI DR2) and $w_a = -0.746$ ($0.5\sigma$ from DESI DR2). The amplitude $A = \mathcal{W}(3) + 1$ is numerically verified ($\chi^2$ at the derived value matches the numerical optimum to 3 decimal places) and cross-predicts $R_{\pi N}/|R_{\pi\pi}| = (\mathcal{W}(3)+1)/5 = 0.906$ vs measured 0.908 (0.2% match). The "+1" admits a bare + dressed decomposition: $1$ = bare constraint coupling, $\mathcal{W}(3)$ = RG-mediated coupling. A rigorous derivation from the Euler–Lagrange equation showing that the constraint-level response is exactly unity would complete this link.

[^1]: Penrose, R. (1974). The role of aesthetics in pure and applied mathematical research. *Bulletin of the Institute of Mathematics and Its Applications*, 10, 266–271.

[^2]: Hurwitz, A. (1891). Ueber die angenäherte Darstellung der Irrationalzahlen durch rationale Brüche. *Mathematische Annalen*, 39(2), 279–284.

[^3]: Kramer, P. & Neri, R. (1984). On periodic and non-periodic space fillings of Eⁿ obtained by projection. *Acta Crystallographica Section A*, 40(5), 580–587.

[^4]: Shechtman, D., Blech, I., Gratias, D., & Cahn, J. W. (1984). Metallic phase with long-range orientational order and no translational symmetry. *Physical Review Letters*, 53(20), 1951–1953.

[^5]: McKay, J. (1980). Graphs, singularities, and finite groups. In *The Santa Cruz Conference on Finite Groups*, Proceedings of Symposia in Pure Mathematics, Vol. 37, AMS, 183–186. See also Baez, J. C. (2018). From the icosahedron to E₈. *London Mathematical Society Newsletter*, 476, 18–23. arXiv:1712.06436.

[^6]: Molien, T. (1897). Über die Invarianten der linearen Substitutionsgruppen. *Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften*, 1152–1156.

[^7]: Klein, F. (1884). *Vorlesungen über das Ikosaeder und die Auflösung der Gleichungen vom fünften Grade*. Teubner, Leipzig. English translation: *Lectures on the Icosahedron and the Solution of Equations of the Fifth Degree*, Dover, 1956.

[^8]: Rosales, J. C. & García-Sánchez, P. A. (2009). *Numerical Semigroups*. Developments in Mathematics, Vol. 20, Springer.

[^9]: Weyl, H. (1912). Das asymptotische Verteilungsgesetz der Eigenwerte linearer partieller Differentialgleichungen. *Mathematische Annalen*, 71, 441–479.

[^10]: Ambjørn, J., Jurkiewicz, J., & Loll, R. (2005). The spectral dimension of the universe is scale dependent. *Physical Review Letters*, 95, 171301.

[^11]: Gentile Fusillo, N. P., et al. (2021). A catalogue of white dwarfs in Gaia EDR3. *Monthly Notices of the Royal Astronomical Society*, 508(3), 3877–3896.

[^12]: Bekenstein, J. D. (1973). Black holes and entropy. *Physical Review D*, 7, 2333–2346.

[^13]: Hawking, S. W. (1975). Particle creation by black holes. *Communications in Mathematical Physics*, 43, 199–220.

[^14]: Abbott, R., et al. (The LIGO Scientific Collaboration and Virgo Collaboration). (2023). Population of merging compact binaries inferred using gravitational waves through GWTC-3. *Physical Review X*, 13, 011048.

[^15]: DESI Collaboration (2025). DESI DR2 Results II: Measurements of Baryon Acoustic Oscillations and Cosmological Constraints. arXiv:2503.14738.

[^16]: Landauer, R. (1961). Irreversibility and heat generation in the computing process. *IBM Journal of Research and Development*, 5(3), 183–191.

[^17]: Scalzo, R. A., et al. (2019). Type Ia supernova bolometric light curves and ejected mass estimates from the Nearby Supernova Factory. *Monthly Notices of the Royal Astronomical Society*, 483(3), 3297–3311.
