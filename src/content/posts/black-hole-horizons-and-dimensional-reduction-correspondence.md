---
title: 'Black Hole Horizons & Dimensional Reduction Correspondence'
description: "Five independent paths—geometry, thermodynamics, topology, information theory, entropic gravity—converge on the same horizon structure: 3D-to-2D dimensional reduction, dual chiral sectors, S³ topology."
pubDate: '2025-08-22'
category: 'supporting'
updatedDate: "2026-04-22"
zenodoDepositionId: 19700759
zenodoUrl: "https://zenodo.org/records/19700759"
doi: "10.5281/zenodo.19700759"
keywords:
  - "black hole thermodynamics"
  - "dimensional reduction"
  - "holographic principle"
  - "event horizon"
  - "Bekenstein-Hawking entropy"
  - "chiral symmetry"
  - "Hopf fibration"
  - "information theory"
  - "entropic gravity"
  - "quasi-normal modes"
  - "gravitational UV catastrophe"
  - "finite information capacity"
zenodoDescription: |
  Five independent mathematical paths—differential geometry, thermodynamics, topology, information theory, and entropic gravity—converge on identical structure at black hole horizons. The convergence is explained by a single principle: the gravitational ultraviolet catastrophe, structurally parallel to Planck's 1900 electromagnetic catastrophe.

  The geometric path follows Schwarzschild metric singularities where radial information flow vanishes as r → r_s while tangential flow persists. The thermodynamic path derives Landauer processing capacity N_max = 2N_BH, a factor of two consistent with dual chiral sectors on 2D surfaces. The topological path identifies finite lattice site counts despite infinite proper distance, with radial compactification into S¹ yielding Hopf fibration S³ topology. The information processing path shows that 3D communication overhead scales as N^(4/3) and becomes prohibitive at Planck densities, favoring 2D surface architecture. The entropic gravity path (following Bianconi) shows radial form components vanishing to maintain finite action. Each path reads one face of a single structural reorganization.

  Both UV catastrophes resolve "infinite information request from finite substrate." The electromagnetic case is resolved by spectral quantization (h·ν cutoff). The gravitational case is resolved by dimensional cutoff (3D → 2D). Each path independently produces: dimensional reduction from 3D to 2D, dual chiral sectors with equal central charges, S³ topology from radial compactification, and quantized winding numbers n = 0, 1, ..., n_max ≈ 14 for stellar-mass black holes. In constraint geometry, the mechanism is the geometric slack mapping l_max = ⌊h(1/ξ − 1)⌋: when the maintenance fraction ξ exceeds 0.5, the system requests internal KK modes below the Coxeter threshold, into the 15 forbidden levels of the ⟨6,10,15⟩ gap set, forcing topological phase transition. The Bekenstein-Hawking area law is the geometric circuit breaker.

  The Landauer accounting is frame-covariant: the ratio E/T cancels under Tolman blueshift, so the same N_max emerges at any radius. The asymptotic frame is preferred because the ADM mass, Hawking temperature, and Smarr formula are all simultaneously well-defined there. Cortês and Liddle's per-emission saturation result shows each Hawking quantum leaves the horizon at the Landauer cost k_B T_H ln 2; the aggregate 2N_BH figure is the macroscopic sum.

  For the full Kerr-Newman family, the Smarr formula acquires work terms 2Ω_H J + Φ_H Q, and the Landauer bound strictly exceeds 2N_BH for any nonzero spin or charge. Two complementary chiral decompositions emerge: a spin channel (Kerr/CFT) where the rotational work maps to the right-moving sector at the Frolov-Thorne temperature T_R = T_H/Ω_H, and a charge channel (Kerr-Newman/CFT) where the electromagnetic work maps to the right-moving sector at T̃_R = T_H/Φ_H. A Kerr-Newman black hole with both J ≠ 0 and Q ≠ 0 admits both decompositions simultaneously. In the extremal limit a² + Q² → M², N_max diverges while N_BH stays finite, but the Third Law guarantees this state is unreachable in finite operations: generic absorption separates the horizons and restores finite T_H ∝ √(M² − a² − Q²).

  Observable predictions include quasi-normal mode phase correlations constrained by holographic bounds, spectral features at characteristic phase intervals Δψ = 2π/n_max, and potential waveform phase jumps in LISA extreme mass ratio inspiral observations. The dual-sector structure bears on the information paradox by providing processing capacity (2N_BH operations) exceeding storage (N_BH bits), sufficient for complete information throughput during evaporation.
---

On 14 January 2025, LIGO-Virgo's detection of GW250114 confirmed the second law of black hole thermodynamics to 4.4$\sigma$ confidence—the final horizon area exceeded the sum of initial areas by a measurable margin[^1], validating decades of theoretical work on event horizon structure[^2][^3]. The ringdown analysis measured two quasi-normal modes, $(l=2, m=2, n=0)$ and $(l=2, m=2, n=1)$, with frequency deviation $\delta f_{221} = 0.1 \pm 0.3$ consistent with Kerr structure. What the observation does not yet resolve is why the horizon behaves this way—why area, not volume, is the conserved quantity, and why the dynamics organize around a two-dimensional surface at all.

Five independent mathematical paths—differential geometry, thermodynamics, topology, information theory, and entropic gravity—converge on the same structural conclusion. Extreme gravitational fields force dimensional reduction from three spatial dimensions to two, with the radial direction compactifying into a topological circle. The convergence is exact: each path independently produces 2D surface dynamics with dual chiral sectors, $S^3$ topology from radial compactification, and quantized winding numbers.

## The Geometric Path

The Schwarzschild metric describes spacetime curvature around a non-rotating black hole of mass $M$ with Schwarzschild radius $r_s = 2GM/c^2$[^4]. Near the horizon, the metric components reveal strong anisotropy between radial and tangential directions.

The proper distance between adjacent points separated by coordinate distance $dr$ becomes,

$$
ds_{r} = \frac{dr}{\sqrt{1 - r_s/r}}.
$$

As $r \to r_s$, this diverges. A lattice with spacing $a = 1$ m placed near a 10 $M_{\odot}$ black hole ($r_s = 30$ km) experiences radial stretching to 31.6 m at $r = 1.001r_s$. Meanwhile, tangential spacing $ds_{\theta} = r \, d\theta$ remains finite.

The information flow rates follow the metric structure. Define the radial information current as the rate at which causal boundaries propagate,

$$
I_r(r) = c\left(1 - \frac{r_s}{r}\right).
$$

At $r = 1.001r_s$, radial information flow drops to 0.001c while tangential flow maintains $c$. The radial dimension effectively freezes from an information-theoretic perspective—signals require divergent time to traverse infinitesimal proper distances. Physical degrees of freedom cannot propagate radially but remain unrestricted tangentially.

This metric-induced anisotropy forces dimensional reduction. Three-dimensional physics collapses to two-dimensional surface dynamics as the radial direction becomes inaccessible to causal processes.

Recent observations align with this geometric picture. The tidal disruption event AT2020afhd exhibits synchronized, long-lived X-ray and radio oscillations with a period of approximately 20 days, consistent with Lense–Thirring precession driven by black hole spin[^5]. The spin inference emerges entirely from coherent boundary dynamics—angular momentum encoded in the geometry of spacetime dragging. Such coherence persisting over many dynamical times suggests radial degrees of freedom have become effectively inaccessible, consistent with the dimensional reduction derived above.

## The Thermodynamic Path

Black hole thermodynamics reveals a precise numerical relationship between information processing capacity and entropy storage that demands dimensional structure.

The Hawking temperature for mass $M$ is[^3],

$$
T_H = \frac{\hbar c^3}{8\pi G M k_B}.
$$

Landauer's principle establishes the maximum number of irreversible bit operations sustainable by energy $E$ at temperature $T$ as $N_{max} = E/(k_B T \ln 2)$[^6]. For a black hole with rest energy $Mc^2$,

$$
N_{max} = \frac{Mc^2}{k_B T_H \ln 2} = \frac{8\pi G M^2}{\hbar c \ln 2}.
$$

The Bekenstein-Hawking entropy[^2] $S_{BH} = k_B c^3 A/(4G\hbar)$ with horizon area $A = 4\pi r_s^2$ converts to bits through division by $k_B \ln 2$,

$$
N_{BH} = \frac{S_{BH}}{k_B \ln 2} = \frac{4\pi G M^2}{\hbar c \ln 2}.
$$

Comparing these expressions yields,

$$
N_{max} = 2 N_{BH}.
$$

This exact factor of two—the Landauer-Bekenstein-Hawking constant—requires explanation. The horizon processes information at twice the rate expected from naive entropy counting. The resolution emerges from recognizing that two-dimensional surfaces support independent left-moving and right-moving excitations[^7][^8]. Chiral separation on the 2D horizon allows simultaneous processing through dual channels, with the factor of 2 reflecting the dual chiral structure where left-moving and right-moving modes remain independent.

$$
\dot{I} = \dot{I}_L + \dot{I}_R = 2\dot{I}_{1D}.
$$

The thermodynamic constraint forces dual-sector architecture, which demands dimensional reduction to a surface supporting chiral modes.

Black holes are distinguished among thermodynamic systems in this respect. A thermal gas of energy $E$ in volume $V$ at temperature $T$ has entropy below the Bekenstein bound[^9] and processing capacity $N_{max} = E/(k_B T \ln 2)$, but the ratio $N_{max}/N_{BH}$ depends on the equation of state. The Smarr scaling $E = 2TS$ is what locks the ratio to exactly two for any black hole mass, independent of formation history.

### Frame Covariance and the Asymptotic Accounting

Identifying the Hawking temperature as the Landauer bath temperature requires care. For a static observer at finite radius $r$, the locally measured temperature is Tolman-blueshifted[^10],

$$
T_{\text{loc}}(r) = \frac{T_H}{\sqrt{1 - r_s/r}},
$$

and diverges as $r \to r_s$. For a freely falling observer the situation is more nuanced: Shallue and Carroll[^11] showed that an infalling Unruh-DeWitt detector registers an effective temperature smoothly rising from $T_H$ at large $r$ to $2T_H$ at the horizon, but cannot thermalize in the finite proper time before crossing. The infalling frame is therefore not an equilibrium setting in which Landauer's principle applies.

The asymptotic frame is the correct one for three independent reasons. First, the energy budget $E = Mc^2$ entering the Landauer bound is the ADM mass, defined at spatial infinity; pairing an asymptotic energy with a local Tolman temperature would violate thermodynamic consistency. Second, the physical erasure channel is Hawking radiation, whose quanta arrive at infinity in a thermal spectrum at temperature $T_H$. Cortês and Liddle[^12] showed that Hawking evaporation saturates the Landauer bound on a per-emission basis at precisely this temperature—the aggregate identity $N_{max} = 2N_{BH}$ is the macroscopic sum of their per-quantum accounting. Third, the Landauer ratio $E/T$ is itself frame-covariant: a local energy quantum $E_{\text{loc}}$ measured at radius $r$ redshifts to $E_\infty = E_{\text{loc}}\sqrt{1 - r_s/r}$ at infinity while the local temperature blueshifts by the inverse factor, so $E_\infty/T_H = E_{\text{loc}}/T_{\text{loc}}(r)$. The Landauer bound yields the same $N_{max}$ regardless of the radius at which it is evaluated. The asymptotic frame is preferred because it is the frame in which the conserved mass, the Hawking temperature, and the Smarr formula are all simultaneously well defined.

### Kerr-Newman Black Holes and Dual-Channel Decomposition

The Schwarzschild result $N_{max} = 2N_{BH}$ relies on the Smarr formula $Mc^2 = 2T_H S_{BH}$, where the entire rest energy participates in a single thermal term with no work contributions[^13]. For a Kerr-Newman black hole carrying both angular momentum $J$ and electric charge $Q$, the Smarr formula acquires two work terms[^14],

$$
Mc^2 = 2T_H S_{BH} + 2\Omega_H J + \Phi_H Q,
$$

where $\Omega_H$ is the horizon angular velocity and $\Phi_H = Q r_+/(r_+^2 + a^2)$ is the electric potential at the outer horizon. The coefficient asymmetry—two on the rotational term, one on the electromagnetic—reflects Euler scaling under $M \to \lambda M$: $S_{BH}$ and $J$ both scale as $M^2$, while $Q$ scales as $M$. The Landauer capacity becomes

$$
N_{max} = 2N_{BH} + \frac{2\Omega_H J}{k_B T_H \ln 2} + \frac{\Phi_H Q}{k_B T_H \ln 2},
$$

which strictly exceeds $2N_{BH}$ for any nonzero spin or charge. The excess capacity beyond Schwarzschild is entirely carried by the work terms.

Each excess term admits a chiral interpretation, but the rewriting depends on which $U(1)$ symmetry is chosen as the basis for the conformal decomposition. Two complementary pictures emerge.

When the conformal symmetry is constructed around the rotational $U(1)$ isometry, as in the Kerr/CFT correspondence[^15] and its non-extremal extension through hidden conformal symmetry[^16], the relevant right-moving temperature is the Frolov-Thorne temperature[^17] $T_R = T_H/\Omega_H = (r_+ - r_-)/(4\pi a)$. The rotational work maps entirely to the right-moving sector, $2\Omega_H J/(k_B T_H \ln 2) = 2J/(k_B T_R \ln 2)$. Substituting $J = S_R/(4\pi^2 T_R)$ from the Cardy formula[^18] and evaluating $4\pi^2 T_R^2 = (M^2 - a^2)/a^2$, the spin-channel decomposition reads

$$
N_{max} = 2N_L + 2N_R \frac{M^2}{M^2 - a^2} + \frac{\Phi_H Q}{k_B T_H \ln 2},
$$

where $a = J/M$. The left-moving capacity $2N_L$ is independent of both spin and charge—since $r_+ + r_- = 2M$, the left-moving Cardy entropy evaluates to $S_L = 2\pi M^2$ for all values of $a$ and $Q$. The right-moving capacity absorbs the rotational work through the boost factor $M^2/(M^2 - a^2)$. The electromagnetic contribution remains a cross-sector term that cannot be absorbed into a single chiral temperature of the spin-channel CFT.

Constructing the conformal symmetry around the electromagnetic $U(1)$ instead, as in the Kerr-Newman/CFT correspondence developed by Hartman, Murata, Nishioka, and Strominger[^19] and by Chen, Long, and Zhang[^20], yields a different right-moving temperature $\tilde{T}_R = T_H/\Phi_H = (r_+ - r_-)/(4\pi Q r_+)$. The electromagnetic work now maps entirely to the right-moving sector, $\Phi_H Q/(k_B T_H \ln 2) = Q/(k_B \tilde{T}_R \ln 2)$, and the rotational contribution becomes the cross-sector term. A Kerr-Newman black hole with both $J \neq 0$ and $Q \neq 0$ admits both decompositions simultaneously; neither changes the total $N_{max}$, but each isolates one work term into a single chiral sector at the cost of leaving the other unfactored.

The limiting cases verify the structure. Schwarzschild ($a = 0$, $Q = 0$) reduces to $N_{max} = 2N_{BH}$ with $N_L = N_R = N_{BH}/2$ and neither chiral channel available. Pure Kerr ($Q = 0$) admits only the spin channel, with the entire excess carried by the right-moving sector at the Frolov-Thorne temperature. Reissner-Nordström ($a = 0$, $Q \neq 0$) admits only the charge channel, with $N_{max} = 2N_{BH} + Q/(k_B \tilde{T}_R \ln 2)$ exceeding $2N_{BH}$ by an amount that diverges as the extremal limit $Q \to M$ is approached.

The extremal limit $a^2 + Q^2 \to M^2$ produces a divergence. The horizons merge ($r_+ \to r_- \to M$), and all thermodynamic temperatures vanish: $T_H \to 0$, $T_R \to 0$, and $\tilde{T}_R \to 0$. The Bekenstein-Hawking entropy remains finite, $S_{BH} \to \pi(M^2 + a^2)$, so $N_{BH}$ is bounded—but the Landauer capacity $N_{max} = Mc^2/(k_B T_H \ln 2) \to \infty$. The cost per bit operation vanishes; the energy budget formally supports infinitely many operations. The Hawking emission rate vanishes too, yielding an infinite budget at zero clock rate.

The Third Law of black hole thermodynamics[^21] guarantees this state is unreachable in finite operations. Generic matter absorption at extremality contributes excess energy $\delta E = \delta M - \Omega_H \delta J - \Phi_H \delta Q > 0$ by the first law of black hole mechanics[^14], separating the horizons and restoring a finite Hawking temperature $T_H \propto \sqrt{M^2 - a^2 - Q^2}$. The processing capacity drops from infinity to a large but finite value. The divergence is asymptotic — approached but never attained.

## The Topological Path

The compactification mechanism operates through lattice site density near the horizon. Consider a thin spherical shell at radius $r$ with thickness $dr$. The number of lattice sites in this shell is,

$$
dN = \frac{4\pi r^2}{a^2} \cdot \frac{dr}{\Delta s_r} = \frac{4\pi r^2}{a^2} \sqrt{1 - \frac{r_s}{r}} \, dr.
$$

The crucial factor $\sqrt{1 - r_s/r}$ suppresses site density as $r \to r_s$. Despite infinite proper distance to the horizon, the total number of sites in any near-horizon shell remains finite. Integration from $r_s$ to $r_s + \epsilon$ converges,

$$
N_{shell} = \frac{4\pi r_s^2}{a^2} \int_0^\epsilon \frac{dx}{\sqrt{x(2r_s + x)}} < \infty.
$$

This finite site count indicates that the radial dimension has compactified—points that appear infinitely separated in proper distance correspond to finite phase separation in the compactified coordinate. The compactified radial direction forms a circle $S^1$ attached to each point on the 2D horizon sphere $S^2$, producing the Hopf fibration[^22] with total topology $S^3$. Parameterize using two complex numbers with $|z_1|^2 + |z_2|^2 = 1$,

$$
z_1 = \cos(\xi/2) e^{i(\psi + \phi)/2}, \quad z_2 = \sin(\xi/2) e^{i(\psi - \phi)/2}.
$$

The angle $\psi \in [0, 2\pi]$ labels position along the compactified radial direction.

Infalling information accumulates phase winding around this circle. A photon following a radial geodesic acquires phase,

$$
\Delta\psi = \int_{r}^{r_s} \frac{dr'}{r' - r_s} = \ln\left(\frac{r - r_s}{l_P}\right).
$$

Quantum cutoff at Planck length $l_P$ yields maximum winding number $n_{max} = \frac{1}{2\pi}\ln\left(\frac{r_s}{l_P}\right) \approx 14$ for stellar-mass black holes. These quantized winding sectors provide topologically protected information channels—local perturbations cannot change winding number without global reorganization.

The topology demands dimensional reduction. The $S^3$ structure encodes 3D information on a 2D surface through winding phase relationships.

## The Information Processing Path

Processing rate constraints reveal dimensional structure through computational capacity bounds. Black holes saturate the Planck frequency limit $f_P = \sqrt{c^5/(\hbar G)} = 1.855 \times 10^{43}$ Hz[^23], representing the fastest possible information processing.

For a 10 $M_{\odot}$ black hole with $N_{BH} = A/(4l_P^2) \approx 1.05 \times 10^{79}$ bits, the total processing rate—each bit operating at Planck frequency—is,

$$
\dot{I} = f_P \times N_{BH} \approx 1.9 \times 10^{122} \text{ bits/s}.
$$

This distributes across $\sim 10^{79}$ independent channels, each operating at $f_P$—the horizon functions as a massively parallel processor. By contrast, the Hawking luminosity $L_H = \hbar c^6/(15360\pi G^2 M^2) \approx 9 \times 10^{-31}$ W yields an information emission rate of $L_H/(k_B T_H \ln 2) \sim 10^1$ bits/s. The ratio $\dot{I}_H/\dot{I}_p \sim 10^{-121}$ demonstrates that the horizon's internal processing capacity exceeds its information output by over 120 orders of magnitude.

This efficiency requires specific architecture. Three-dimensional processing at Planck-scale densities would require coordinating information flow across all three dimensions simultaneously, with communication overhead scaling as $N^{4/3}$. Two-dimensional surface processing scales as $N$, eliminating the coordination bottleneck.

Dimensional reduction to 2D eliminates this bottleneck. Surface processing with left/right chiral sectors provides the dual-channel architecture matching the factor-of-two thermodynamic requirement. The information processing constraint independently demands the same dimensional structure derived geometrically and topologically.

## The Entropic Gravity Path

Bianconi's theory interprets the spacetime metric as a quantum density matrix encoding information about matter fields[^24]. The metric $g_{\mu\nu}$ becomes an effective description of how information propagates through regions with varying matter content.

Matter fields induce metric perturbations through the G-field,

$$
G_{\mu\nu} = g_{\mu\nu} + \alpha M_{\mu\nu} - \beta R_{\mu\nu},
$$

where $M_{\mu\nu}$ represents matter contributions and $R_{\mu\nu}$ is the Ricci curvature. The gravitational action derives from quantum relative entropy,

$$
S = \frac{1}{l_P^d} \int \sqrt{|g|} \, \text{Tr}_F \ln(G^{-1}g) \, d^4x.
$$

This entropic action naturally incorporates information-theoretic costs. Variation with respect to the metric yields modified Einstein equations with emergent cosmological constant $\Lambda_G$ sourced by information maintenance,

$$
\Lambda_G = \frac{1}{2\beta} \text{Tr}_F(G - I - \ln G) \approx \frac{1}{4\beta} \text{Tr}_F(\epsilon^2),
$$

where $\epsilon = Gg^{-1} - I$ measures departure from equilibrium near the horizon.

At the event horizon, the radial metric component becomes singular: $G_{rr} \to \infty$. The trace operation $\text{Tr}_F$ over form degrees of freedom reveals that only 2-forms (tangential components) remain finite. The 0-form (scalar field) vanishes as $\phi \propto \sqrt{1 - r_s/r} \to 0$. Radial 1-form components $\omega_r \to 0$ while tangential components $\omega_\theta, \omega_\phi$ survive.

The entropic formalism shows dimensional reduction as informational necessity. Maintaining three-dimensional quantum relative entropy near the horizon requires infinite action. Nature resolves this by collapsing the radial form structure, leaving only 2D tangential degrees of freedom that support finite entropy production. The dimensional reduction emerges from demanding finite, well-defined entropic action at all spacetime points.

## Convergence of the Five Paths

Five independent paths—differential geometry, thermodynamics, topology, information theory, and entropic gravity—each built from different axioms and following different mathematical machinery, converge on identical structure at black hole horizons[^25][^26]. The geometric path calculates metric singularities forcing radial compactification. The thermodynamic path requires $N_{max} = 2N_{BH}$, forcing dual sectors. The topological path identifies Hopf fibration structure from radial compactification. The information processing path demands 2D architecture to eliminate communication overhead. The entropic gravity path shows radial form structure collapsing to maintain finite action. All five arrive at the same conclusion: horizons are 2D surfaces with $S^1$ radial compactification, supporting dual chiral sectors with quantized winding numbers.

The resulting structure is a 2D conformal surface (Virasoro algebra)[^27] with dual chiral sectors carrying equal central charges $c_L = c_R$, $S^3$ topology from the Hopf fibration of the compactified radial direction over the horizon sphere, quantized winding numbers $n = 0, 1, \ldots, n_{max}$ providing topologically protected information channels, processing capacity $N_{max} = 2N_{BH}$ from the dual sectors, and central charge $c = 24r_s^2/l_P^2$ determined by horizon area[^15]. For stellar-mass black holes, $n_{max} \approx 14$ discrete winding sectors partition the available information channels.

When independent paths converge on identical mathematical structure through entirely different machinery, the convergence itself carries evidential weight. The horizon marks a dimensional phase transition where spacetime reorganizes to maintain finite information processing capacity.

## The Gravitational Ultraviolet Catastrophe

The five paths describe the same reorganization from five vantage points. A single principle forces the reorganization, and it is structurally parallel to Planck's 1900 ultraviolet catastrophe: a physical system requesting infinite information from a finite substrate, resolved by the minimum structural change that renders the demand finite.

Classical electrodynamics in thermal equilibrium assigned energy $k_B T$ to each mode, with cavity mode density scaling as $N(\nu) \sim \nu^3$. Each mode costs $k_B T \ln 2$ to specify (Landauer), so the catastrophe was an information overflow before it was an energy divergence. Planck's quantum $h\nu$ resolved it through spectral truncation: high-frequency modes were frozen out without altering the geometry. The cutoff was one-dimensional—in frequency space.

Gravity faces the analogous catastrophe in a different variable. Three-dimensional information processing at Planck-scale density requires communication channels scaling as $N^{(d+1)/d} = N^{4/3}$. For a 10 $M_\odot$ black hole with $N_{BH} \sim 10^{79}$ bits, the coordination overhead reaches $\sim 10^{105}$—vastly exceeding the holographic area budget. The Bekenstein–Hawking entropy scales as area ($M^2$), but 3D coordination scales as volume ($M^3$). As compactness increases, 3D processing becomes impossible. The resolution is geometric: the radial dimension freezes, coordination overhead drops from $N^{4/3}$ to $N$, and storage and processing become finite and proportional.

| Feature | EM UV catastrophe | Gravitational UV catastrophe |
|:---|:---|:---|
| Divergent quantity | Mode density $\sim \nu^3$ | Coordination overhead $\sim N^{4/3}$ |
| Divergence variable | Frequency $\nu \to \infty$ | Compactness $r/r_s \to 1$ |
| What is exceeded | Finite energy budget | Finite holographic budget |
| Resolution | Quantization ($h\nu$ cutoff) | Dimensional reduction (3D $\to$ 2D) |
| Cutoff character | Spectral (in frequency space) | Geometric (in real space) |
| What is preserved | Spatial dimensionality | Information capacity |
| Key constant | $\hbar$ | $\ell_P^2 = \hbar G/c^3$ |

The five paths are five readings of this single principle. The geometric path reads the cutoff through metric singularities. The thermodynamic path reads it through the Landauer–Bekenstein constraint $N_{\max} = 2 N_{BH}$—storage and processing made proportional. The topological path reads it through radial $S^1$ compactification. The information-processing path reads it through the elimination of the $N^{4/3}$ bottleneck. The entropic-gravity path reads it through the vanishing of radial form components. Each path sees one face of the same structural reorganization.

The mechanism is transparent in [constraint geometry](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry). The maintenance fraction $\xi = R_S/R$ measures macroscopic compactness, and it couples to the internal Kaluza–Klein spectrum on $S^3/\mathrm{2I}$ through the geometric slack mapping $l_{\max} = \lfloor h(1/\xi - 1)\rfloor = \lfloor 30(1/\xi - 1)\rfloor$. At $\xi = 0.5$, $l_{\max} = 30$—the Coxeter boundary. PSR J0740+6620 at $\xi = 0.493$ sits there exactly, as the [full chain post](/from-lattice-projection-to-cosmic-expansion) documents. When $\xi > 0.5$, the system requests $l_{\max} < 30$—but the semigroup $\langle 6, 10, 15 \rangle$ has 15 forbidden levels below the Coxeter number. The internal geometry cannot fulfill the request. Storage overflows from the saturated isotropic sector into the discrete sector; the discrete sector runs out of admissible spin levels; the substrate executes a topological phase transition. The radial dimension collapses, $\mathcal{D}$ drops from 3 to 2, and the Bekenstein–Hawking area law $S_{BH} = A/(4\ell_P^2)$ is the geometric circuit breaker that protects the information budget.

Gravitational collapse, in this reading, is not a mechanical yield of degeneracy pressure. It is the minimum geometric reorganization that keeps the information request finite. The five paths converge because they each detect one face of a single structural cutoff—the gravitational analog of what Planck's quantum did for the electromagnetic spectrum.

## Spectral Depth and Topological Winding

The semigroup $\langle 6, 10, 15 \rangle$ on $S^3/\mathrm{2I}$ carries the algebraic content of the $E_8$ singularity as a scale-invariant obstruction: the spin levels in its gap set below the Coxeter number $h = 30$ are removed from the Kaluza–Klein spectrum at every mass. The topological winding sectors on the 2D boundary exist because these bulk modes are unavailable. As the maintenance fraction $\xi$ crosses $0.5$, the slack mapping $l_{\max} = \lfloor 30(1/\xi - 1)\rfloor$ drops below $h$, and the system requests internal storage at spin levels that the binary icosahedral quotient $\mathrm{2I}$ has algebraically removed from the spectrum. The continuous tail of the bulk spectrum is gone; the substrate is gapped at $\{1, 2, 3, 4, 5, 7, 8, 9, 11, 13, 14, 17, 19, 23, 29\}$. The 3D internal geometry cannot fulfill the information storage request, because the levels it would store on are mathematically forbidden by the icosahedral projection.

The system resolves the request through dimensional substitution. The radial direction, no longer able to support continuous causal processes, compactifies into a topological circle $S^1$ attached to each point of the 2D horizon sphere $S^2$, producing the Hopf fibration $S^3$. A radial geodesic acquires phase winding $\Delta\psi = \ln((r - r_s)/l_P)$ around the compactified circle, quantized by the Planck cutoff into discrete sectors $n = 0, 1, \ldots, n_{\max}$ with $n_{\max} = (1/2\pi)\ln(r_s/l_P)$ growing logarithmically with horizon radius. The dual chiral sectors—left-movers and right-movers with equal central charges $c_L = c_R$ on the 2D boundary—are the emerged collective forced by this substitution. The factor-of-two relation $N_{\max} = 2 N_{BH}$ reads as the quantitative signature: storage capacity unchanged at $N_{BH}$ bits, processing capacity doubled because the boundary supports two independent chiral channels in place of the one continuous bulk it replaced.

Spectral depth in three dimensions is traded for topological winding in two. The algebraic content of the gap set is preserved across the transition as the cause of the boundary structure; the boundary structure is the emerged collective irreducible to its components.

## Observable Signatures

The dimensional reduction theory makes testable predictions distinguishable from standard Kerr black hole models. The GW250114 ringdown confirms Kerr structure within 30% precision through the measured frequency deviation $\delta f_{221} = 0.1 \pm 0.3$[^1], but finer signatures lie beyond that resolution.

The winding number structure predicts additional signatures. High-$l$ overtones must exhibit phase correlations constrained by holographic bound,

$$
\sum_l (2l+1) n_{max} \log_2(n_{phase}) \leq \frac{A}{4l_P^2}.
$$

Statistical analysis of stacked O5 observations could detect these correlations through departures from random phase distributions, with the $n_{max} \approx 14$ discrete sectors manifesting as spectral features separated by characteristic phase intervals $\Delta\psi = 2\pi/n_{max}$.

For primordial black holes[^28] with $M < 10^{15}$ g, Hawking temperature exceeds 100 GeV and enables direct particle emission. The winding structure scales with mass through $n_{max} = \frac{1}{2\pi}\ln(r_s/l_P)$, so smaller black holes have fewer topological sectors—potentially creating detectable gaps in emission spectra at angles $\psi = 2\pi n$.

LISA observations[^29] of extreme mass ratio inspirals will probe near-horizon structure through gravitational self-force effects. Winding transitions could appear as phase jumps in the waveform with characteristic frequency shifts $\Delta f/f \sim 1/n_{max} \sim 0.07$ for solar-mass objects.

## Consequences for the Information Paradox

The dual-sector structure with $N_{max} = 2N_{BH}$ bears directly on the information paradox[^30]. The horizon stores $N_{BH}$ bits but can process $2N_{BH}$ operations, providing sufficient capacity for complete information throughput during evaporation. The factor of 2 emerges from the topological structure of 2D surfaces supporting independent chiral sectors and is exact. The per-emission analysis of Cortês and Liddle[^12] complements this aggregate budget: each Hawking quantum saturates the Landauer bound at cost $k_B T_H \ln 2$ as it leaves the horizon, and the $2N_{BH}$ figure is the macroscopic sum of their per-quantum accounting. For the full Kerr-Newman family, the processing margin grows with both spin and charge, providing additional headroom beyond the Schwarzschild case—astrophysical black holes generically carry angular momentum and therefore exceed the Schwarzschild minimum.

Within constraint geometry, dimensional reduction at horizons represents the endpoint of the coupled $(\xi, \mathcal{D})$ flow derived in §5 of that post. As the maintenance fraction $\xi$ approaches 1, the dimensional flow equation $d\mathcal{D}/d\mu = -(\xi/u^*)\ln\varphi$ drives effective dimension toward 2. Black holes are the unique physical systems that simultaneously saturate all three curvature sectors—the $\varphi$-sector as radial information flow freezes, the $\pi$-sector as angular degrees of freedom pack at maximal isotropic density, and the $N$-sector as discrete information storage reaches the Bekenstein-Hawking bound. The five-path convergence documented here provides independent mathematical confirmation that the $\mathcal{D} \to 2$ fixed point reflects genuine geometric reorganization at horizons.

## Limitations and Falsifiability

The five-path convergence is the paper's central claim, and each path represents a potential failure mode. If a consistent 3D interior description of horizon physics can be maintained with finite action—contradicting the entropic gravity path—then the dimensional reduction may be an artifact of coordinate choice rather than physical reorganization. If the factor-of-two relationship $N_{max} = 2N_{BH}$ receives corrections from quantum gravity effects (loop quantum gravity, string theory microstate counting), the dual chiral sector interpretation loses its exactness. The logarithmic correction $-(3/2)\ln(A/\ell_P^2)$ from one-loop determinants breaks the strict Euler scaling and modifies the processing-to-storage ratio at scales approaching $M_{\text{Planck}}$; the identity is semiclassical and quasi-static, valid for $M \gg M_{\text{Planck}}$. If LISA observations of extreme mass ratio inspirals show no evidence of winding structure (no phase jumps at $\Delta f/f \sim 1/n_{max}$), the topological sector predictions would be empirically excluded. The convergence argument is strongest when all five paths remain independently valid—breaking any one weakens the case but does not eliminate the others, while confirming the predicted observable signatures would substantially strengthen it.

## Horizons as Forced Dimensional Reduction

Five independent mathematical paths—differential geometry, thermodynamics, topology, information theory, and entropic gravity—produce the same horizon structure from entirely different axioms. The convergence is not coincidence. Each path detects one face of a single structural cutoff: the gravitational analog of Planck's 1900 ultraviolet catastrophe. Classical three-dimensional processing at Planck-scale density requests infinite coordination from a finite substrate; the minimum geometric reorganization that keeps the demand finite is radial compactification, $S^1$ over the horizon $S^2$, with storage and processing made proportional through the Landauer–Bekenstein relation $N_{\max} = 2 N_{BH}$. In the constraint-geometry reading, the mechanism is the geometric slack mapping $l_{\max} = \lfloor h(1/\xi - 1)\rfloor$ against the $\langle 6, 10, 15 \rangle$ gap set: when $\xi$ crosses $1/2$, the internal Kaluza–Klein spectrum runs out of admissible levels below the Coxeter number, and the Bekenstein–Hawking area law engages as the geometric circuit breaker. Gravitational collapse, on this reading, is the minimum structural change that preserves the information budget.

[^1]: Isi, M., Farr, W. M., Giesler, M., Scheel, M. A., & Teukolsky, S. A. (2021). Testing the No-Hair Theorem with GW150914. *Physical Review Letters*, 127(1), 011103.

[^2]: Bekenstein, J. D. (1973). Black Holes and Entropy. *Physical Review D*, 7(8), 2333-2346.

[^3]: Hawking, S. W. (1975). Particle Creation by Black Holes. *Communications in Mathematical Physics*, 43(3), 199-220.

[^4]: Schwarzschild, K. (1916). Über das Gravitationsfeld eines Massenpunktes nach der Einsteinschen Theorie. *Sitzungsberichte der Königlich Preussischen Akademie der Wissenschaften zu Berlin*, 189-196.

[^5]: Pasham, D. R., et al. (2025). Synchronized X-ray and radio variability from the tidal disruption event AT2020afhd consistent with Lense–Thirring precession. *Science Advances*, 11(49), eady9068.

[^6]: Landauer, R. (1961). Irreversibility and Heat Generation in the Computing Process. *IBM Journal of Research and Development*, 5(3), 183-191.

[^7]: Hawking, S. W., Perry, M. J., & Strominger, A. (2016). Soft Hair on Black Holes. *Physical Review Letters*, 116(23), 231301. arXiv\:1601.00921.

[^8]: Hawking, S. W., Perry, M. J., & Strominger, A. (2018). Superrotation Charge and Supertranslation Hair on Black Holes. arXiv\:1810.01847.

[^9]: Bekenstein, J. D. (1981). Universal Upper Bound on the Entropy-to-Energy Ratio for Bounded Systems. *Physical Review D*, 23(2), 287-298.

[^10]: Tolman, R. C. (1930). On the Weight of Heat and Thermal Equilibrium in General Relativity. *Physical Review*, 35(8), 904-924.

[^11]: Shallue, C. J., & Carroll, S. M. (2025). What Hawking Radiation Looks Like as You Fall into a Black Hole. *Physical Review D*, 112(8), 085013.

[^12]: Cortês, M., & Liddle, A. R. (2024). Hawking Evaporation and the Landauer Principle. arXiv\:2407.08777.

[^13]: Smarr, L. (1973). Mass Formula for Kerr Black Holes. *Physical Review Letters*, 30(2), 71-73.

[^14]: Bardeen, J. M., Carter, B., & Hawking, S. W. (1973). The Four Laws of Black Hole Mechanics. *Communications in Mathematical Physics*, 31(2), 161-170.

[^15]: Guica, M., Hartman, T., Song, W., & Strominger, A. (2009). The Kerr/CFT Correspondence. *Physical Review D*, 80(12), 124008. arXiv\:0809.4266.

[^16]: Castro, A., Maloney, A., & Strominger, A. (2010). Hidden Conformal Symmetry of the Kerr Black Hole. *Physical Review D*, 82(2), 024008. arXiv\:1004.0996.

[^17]: Frolov, V. P., & Thorne, K. S. (1989). Renormalized Stress-Energy Tensor near the Horizon of a Slowly Evolving, Rotating Black Hole. *Physical Review D*, 39(8), 2125-2154.

[^18]: Cardy, J. L. (1986). Operator Content of Two-Dimensional Conformally Invariant Theories. *Nuclear Physics B*, 270, 186-204.

[^19]: Hartman, T., Murata, K., Nishioka, T., & Strominger, A. (2009). CFT Duals for Extreme Black Holes. *Journal of High Energy Physics*, 2009(04), 019.

[^20]: Chen, B., Long, J., & Zhang, J.-j. (2010). Hidden Conformal Symmetry of Extremal Black Holes. *Physical Review D*, 82, 104017.

[^21]: Israel, W. (1986). Third Law of Black Hole Dynamics: A Formulation and Proof. *Physical Review Letters*, 57(4), 397-399.

[^22]: Hopf, H. (1931). Über die Abbildungen der dreidimensionalen Sphäre auf die Kugelfläche. *Mathematische Annalen*, 104(1), 637-665.

[^23]: Mohr, P. J., Newell, D. B., & Taylor, B. N. (2016). CODATA recommended values of the fundamental physical constants\: 2014. *Reviews of Modern Physics*, 88(3), 035009. arXiv\:1507.07956.

[^24]: Bianconi, G. (2024). Gravity from Entropy. *Physical Review D*, 111(6), 066001. arXiv\:2408.14391.

[^25]: Strominger, A., & Vafa, C. (1996). Microscopic Origin of the Bekenstein-Hawking Entropy. *Physics Letters B*, 379(1-4), 99-104.

[^26]: Carlip, S. (2005). Conformal Field Theory, (2+1)-Dimensional Gravity, and the BTZ Black Hole. *Classical and Quantum Gravity*, 22(12), R85-R124.

[^27]: Blöte, H. W. J., Cardy, J. L., & Nightingale, M. P. (1986). Conformal invariance, the central charge, and universal finite-size amplitudes at criticality. *Physical Review Letters*, 56(7), 742-745.

[^28]: Carr, B. J., & Hawking, S. W. (1974). Black Holes in the Early Universe. *Monthly Notices of the Royal Astronomical Society*, 168(2), 399-415.

[^29]: Amaro-Seoane, P., Audley, H., Babak, S., Baker, J., Barausse, E., et al. (2017). Laser Interferometer Space Antenna. arXiv\:1702.00786.

[^30]: Hawking, S. W. (1976). Breakdown of Predictability in Gravitational Collapse. *Physical Review D*, 14(10), 2460-2473.
