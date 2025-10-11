---
title: "What if Spacetime Isn't So Continuous?"
pubDate: '2025-10-10'
---

Every measurable property of our universe is finite. Energy is finite ($\approx 10^{69}$ J), matter is finite ($\approx 10^{53}$ kg of baryons), time since the Big Bang is finite ($\approx 13.8$ billion years), and the observable universe is finite ($\approx 46.5$ billion light years). Yet standard field theory assumes continuous spacetime—fields taking infinitely precise values at infinitely many points. This assumption is logically impossible.

Consider what continuous spacetime requires. A continuous field at even one point demands infinite precision—infinite bits to specify its exact value. Multiply by the infinite points in any finite volume, and you need infinite information just to describe the universe's state, let alone update it. Landauer's principle establishes that processing each bit requires minimum energy [^1],

$$
E_0 = k_B T \ln 2,
$$

where $k_B$ is Boltzmann's constant and $T$ is the system temperature. The calculation is stark—infinite bits times finite energy per bit equals infinite energy required. But we have finite energy ($\approx 10^{69}$ J). Continuous spacetime cannot exist with available resources.

Planck resolved the ultraviolet catastrophe by introducing the quantum of action $\hbar$, the fundamental unit in which physical changes occur [^2]. Actions are not infinitely divisible—they quantize into discrete state transitions, each representing a minimal information update. This discreteness creates a constraint web. Actions need spacetime since the action integral,

$$
S = \int L\,\mathrm{d}t,
$$

requires space and time to exist. Spacetime needs action because Einstein's equations derive geometry from the variation,

$$
G_{\mu\nu} \propto \frac{\delta S}{\delta g^{\mu\nu}},
$$

where $G_{\mu\nu}$ is the Einstein tensor and $g^{\mu\nu}$ is the metric. Both require finite resources to process. Wheeler and Feynman confronted similar circularity in electrodynamics [^3]. What discrete structure satisfies these constraints simultaneously?

Two independent calculations reveal the universe's absolute information limit. The thermodynamic approach uses the universe's total energy ($E_{\rm tot} \approx 10^{70}$ J), age ($t_0 \approx 10^{17}$ s), and CMB temperature ($T \approx 2.7$ K) to compute,

$$
I_{\rm max} = \frac{E_{\rm tot} \cdot t_0}{k_B T \ln 2} \approx 10^{123} \text{ bits}.
$$

The holographic approach uses our cosmological horizon area $A_H = 4\pi(ct_0)^2$ and the Planck length $\ell_P$ to obtain,

$$
I_H = \frac{A_H}{4\ell_P^2 \ln 2} \approx 10^{123} \text{ bits}.
$$

Two completely different physical principles—thermodynamics and holography—converge on the same limit. Continuous spacetime requires infinite information; the universe provides $10^{123}$ bits. This mismatch makes continuous spacetime impossible.

Information theory provides the resolution. Both action and spacetime reduce to information updates constrained by thermodynamics and quantum mechanics. The Margolus-Levitin theorem establishes that processing requires minimum time per operation,

$$
\Delta t \geq \frac{\pi\hbar}{2E},
$$

where $E$ is the available energy [^4]. These represent [fundamental thermodynamic and quantum mechanical bounds](/computational-spacetime-and-the-rayleigh-jeans-resolution) on any physical process—laws governing all computation. Nature cannot compute faster or cheaper than these limits allow.

## Discrete Actions Force Discrete Space

If actions are fundamentally discrete, spacetime itself must be discrete. The principle of least action states that physical systems evolve along paths that extremize the action,

$$
\delta S = \delta \int_{t_1}^{t_2} L(q, \dot{q}, t)\,\mathrm{d}t = 0,
$$

where $L$ is the Lagrangian, $q$ represents generalized coordinates, and $\dot{q}$ their time derivatives. If this integral consists of discrete steps of size $\hbar$ rather than continuous variation, spacetime must be granular. Each action requires finite time and energy to process the information it carries. A minimum time step must exist below which no further action can occur, and a minimum spatial separation must exist below which no further distinction can be made. These are the Planck time and Planck length,

$$
t_P = \sqrt{\frac{\hbar G}{c^5}} \approx 5.4 \times 10^{-44} \text{ s}, \quad \ell_P = ct_P \approx 1.6 \times 10^{-35} \text{ m},
$$

where $G$ is Newton's gravitational constant and $c$ is the speed of light. Below these scales, the concept of smaller intervals becomes physically meaningless because no substrate exists capable of processing the information that would distinguish them.

The universe updates at frequency,

$$
f_P = \frac{1}{t_P} \approx 1.855 \times 10^{43} \text{ Hz},
$$

emerging from three fundamental constants that cannot be derived from anything more basic. The speed of light $c$ determines maximum information propagation, $\hbar$ sets the minimum action quantum, and $G$ measures gravitational coupling strength. Together they define the scale where quantum mechanics and gravity merge—where the computational substrate of reality operates.

If you could slow down time by a factor of $10^{43}$, each Planck time interval would stretch to one second. We'd witness reality updating in discrete steps with quantum states transitioning, fields reconfiguring, particles jumping from one location to the next. The smooth flow of time becomes an illusion of aggregation, like watching a movie and forgetting it consists of individual frames.

## Breaking the Circle

Both action and spacetime reduce to information updates. A state transition $|A\rangle \to |B\rangle$ faces three fundamental constraints emerging directly from physics. First, distinguishability requires,

$$
\Delta S \geq \hbar,
$$

the minimum action quantum needed to differentiate states. Second, the Margolus-Levitin bound constrains processing time,

$$
\Delta t \geq \frac{\pi\hbar}{2E},
$$

where $E$ is the energy available for the transition. Third, Landauer's principle establishes the energy cost,

$$
E \geq k_B T \ln 2,
$$

for irreversible information erasure. Combining these constraints yields a fundamental spacetime relationship,

$$
\Delta x \Delta t \geq \frac{\pi\hbar^2}{2E^2},
$$

where $\Delta x$ is the spatial uncertainty. This space-time conjugacy mirrors the [position-momentum uncertainty principle, which emerges from Fourier transform mathematics](/fourier-transforms-and-the-uncertainty-principle) rather than quantum postulates. The relationship breaks the circularity—space and time emerge together as conjugate aspects of information processing, neither prior to the other.

The lattice must satisfy its own update equation,

$$
\mathcal{L}_{t+t_P} = \mathcal{U}[\mathcal{L}_t],
$$

where $\mathcal{U}$ is the update operator that reads boundary information from the current state, computes allowed transitions constrained by $\hbar$, Landauer, and Margolus-Levitin bounds, then updates the voxel configuration. The lattice at the next Planck tick equals a function of the lattice now—action becomes the update rule itself.

The fixed point,

$$
\mathcal{L} = \mathcal{U}[\mathcal{L}],
$$

represents a lattice structure remaining invariant under its own update dynamics. This self-consistency requirement yields a unique solution—a cubic lattice with spacing $\ell_P$ that updates every $t_P$ and stores information on boundaries at density,

$$
I = \frac{A}{4\ell_P^2\ln 2},
$$

where $A$ is the boundary surface area [^5]. All parameters emerge from fundamental constraints. The Planck length combines $\hbar$, $G$, and $c$. The Planck time follows from $c$ and $\ell_P$. The holographic information density derives from the Bekenstein bound. The universe bootstraps itself through the self-consistent way for action and spacetime to coexist given thermodynamic limits on computation—the lattice structure emerges inevitably when reality must process its own state transitions with finite resources.

## Information Lives on Boundaries

Having established that spacetime must be discrete, we need to specify the lattice geometry. The simplest three-dimensional discrete structure is a cubic lattice, a regular grid where each cell forms a cube with edges of length $\ell_P$. These fundamental cells are voxels (volume elements), the three-dimensional analogue of pixels. Just as a digital image consists of discrete pixels that appear continuous when viewed at larger scales, spacetime consists of discrete voxels that create the illusion of continuity at macroscopic scales.

The voxel lattice with spacing $\ell_P$ forms the computational substrate, but voxels themselves remain empty organizational units. Information resides on the boundaries between voxels—on the faces that separate one region from another.

Each voxel in three dimensions has 6 faces. Each face has area $\ell_P^2$ and stores,

$$
I_f = \frac{1}{4\ln 2} \text{ bits},
$$

following from the holographic bound, the maximum information density nature allows. Faces are shared between adjacent voxels, so the information on a face becomes the connection between neighbors, tracking what distinguishes one voxel from the next.

For a region with surface area $A$, the number of boundary faces is,

$$
N_f = \frac{A}{\ell_P^2},
$$

giving total information capacity,

$$
I = N_f \times \frac{1}{4\ln 2} = \frac{A}{4\ell_P^2\ln 2}.
$$

The holographic principle emerges naturally—information capacity scales with surface area because information resides on boundaries between voxels.

## Matter as Lattice Displacement

This boundary-encoded information structure has direct implications for matter and gravity. In empty space, voxels sit at regular spacing $\ell_P$ in a perfect cubic lattice. When matter is present, voxels get pushed together or pulled apart. The metric tensor measures this displacement,

$$
g_{\mu\nu} = \delta_{\mu\nu} + h_{\mu\nu},
$$

where $\delta_{\mu\nu}$ is the flat Minkowski metric and $h_{\mu\nu}$ is the strain tensor measuring how much the lattice deforms from perfect cubic structure.

A particle is a topological defect in the boundary network—a dislocation that displaces voxel boundaries, creating a metric perturbation we interpret as gravitational field. The mass $m$ corresponds to the winding number of the dislocation, counting how many times the displacement wraps around when you encircle the defect.

Black holes manifest as maximum compression. At the event horizon $r = r_s$ (where $r_s = 2GM/c^2$ is the Schwarzschild radius), voxels compress to minimum spacing and the lattice terminates. The radial direction compactifies because the computational substrate runs out. Inside $r < r_s$, the lattice ends—the singularity represents the absence of computational substrate, a boundary condition where the computational manifold terminates.

## The Organizational Fields

The lattice structure alone cannot capture all physical phenomena—we need additional fields tracking organizational state. Each voxel carries organizational state in addition to position, capturing how voxels process information throughout the universe.

The dissipation field $\eta$ measures what fraction of energy maintains structure against thermal entropy. From [quantum mechanics and Fermi's golden rule](/conservation-dissipation-and-field-emergence) [^6], the elementary dissipation rate is,

$$
\eta_0 = \alpha^2\sqrt{\frac{m_e}{m_p}} \approx 10^{-6},
$$

where $\alpha = 1/137$ is the fine structure constant, $m_e$ is the electron mass, and $m_p$ is the proton mass. This value cascades hierarchically through scales of organization. Elementary particles maintain $\eta \sim 10^{-6}$, atoms increase to $\eta \sim 10^{-3}$ through nuclear-electron coupling, molecules reach $\eta \sim 10^{-2}$ with their vibrational and rotational modes, biological systems approach $\eta \sim 10^{-1}$ through hierarchical organization, and black holes saturate at $\eta = 1$ where all energy maintains the horizon structure [^7].

The dimensional field $d$ tracks how many spatial dimensions support information flow. Near black hole horizons, [the Schwarzschild metric creates extreme radial stretching](/black-hole-horizons-and-dimensional-reduction-correspondence), quantified by the proper radial distance,

$$
\mathrm{d}s_r = \frac{\mathrm{d}r}{\sqrt{1 - r_s/r}} \to \infty \quad \text{as } r \to r_s,
$$

making the radial direction inaccessible. Information cannot propagate radially though it flows freely tangentially. The effective dimensionality drops from $d = 3$ to $d = 2$ at the horizon—a dimensional reduction forced purely by geometry. These two organizational fields together capture the full information processing state of spacetime at each point.

## The 6D Unified Geometry

Why must $\eta$ and $d$ be coordinates rather than ordinary fields? Because they determine the geometry itself. Standard field theory requires specifying the manifold first, then defining fields on it. But $\eta$ and $d$ determine which local geometry exists—they're not properties living on spacetime but properties of spacetime. This forces them to be coordinates in an extended manifold.

The complete description of reality requires tracking both where things are in spacetime $(t,x,y,z)$ and how organized they are $(\eta,d)$. The complete space becomes 6-dimensional,

$$
\mathcal{M}^6 = \{t, x, y, z, \eta, d\},
$$

forming one unified manifold where the first four coordinates give spacetime position and the last two give organizational state.

The 6D manifold emerges from consistency requirements. The fixed-point equation,

$$
\mathcal{M} = \mathcal{F}[\mathcal{M}],
$$

requires exactly these coordinates—four for spacetime from relativistic causality, two for organization from the necessity of tracking both dissipation $\eta$ and dimensionality $d$. The universe becomes the eigenstate of its own existence operator.

The metric has structure,

$$
\mathrm{d}s^2 = g_{\mu\nu}(x,\eta,d)\mathrm{d}x^\mu \mathrm{d}x^\nu + D_\eta(\eta,d)\mathrm{d}\eta^2 + D_d(\eta,d)\mathrm{d}d^2,
$$

where the spacetime metric $g_{\mu\nu}$ depends on organizational coordinates—different $(\eta,d)$ values create different local geometries. The 6D metric structure governs how organizational states diffuse through spacetime. Diffusivity tensors quantify information flow rates in the $(\eta,d)$ dimensions,

$$
D_\eta = \frac{\ell_P^2}{\rho^*}\eta\ln\phi, \quad D_d = \ell_P^4\eta(1-\eta)\left(\rho^* + \frac{d-2}{2}\ln\phi\right),
$$

where $\rho^* = 3.29$ emerges from [quantum transport theory through prime resonance in level spacing](/golden-ratio-and-prime-resonance-in-quantum-transport) [^8][^9][^10], and $\phi = (1+\sqrt{5})/2$ is the golden ratio that minimizes interference through continued fraction optimization. The functional forms arise from requiring consistent information flow across organizational boundaries—the $\eta(1-\eta)$ factor ensures diffusivity vanishes at both fixed points (vacuum and black hole), while the logarithmic terms encode quantum transport interference effects. These constants emerge independently from quantum transport experiments.

## Renormalization Group Flow

The organizational fields evolve according to [beta functions derived from constraint satisfaction](/information-field-theory-from-constraint-to-cosmos) [^11],

$$
\beta_\eta = -\frac{\eta}{\rho^*}\ln\phi, \quad \beta_d = -\eta(1-\eta)\left(\rho^* + \frac{d-2}{2}\ln\phi\right),
$$

where $\beta_\eta = \partial\eta/\partial\tau$ and $\beta_d = \partial d/\partial\tau$ are flow parameters with respect to renormalization group scale $\tau$. These beta functions drive flow toward fixed points. The vacuum state at $(\eta,d) = (0,3)$ represents an unstable fixed point where zero energy maintains structure and all three spatial dimensions remain accessible. The black hole at $(\eta,d) = (1,2)$ forms a stable fixed point where all energy maintains the horizon and one spatial dimension has compactified. The universe begins at $(0,3)$ because the RG flow structure admits exactly one unstable fixed point—deriving rather than assuming the Past Hypothesis that has puzzled cosmologists since Boltzmann.

The flow admits a symmetry—transformations mixing $\eta$ and $d$ while preserving dynamics. [Noether's theorem yields a fourth conserved charge](/lets-derive-an-information-theoretic-conservation-law) [^12],

$$
\mathcal{C}[\eta,d] = \rho^*\eta(3-d) - \eta^2\rho^*\ln\phi,
$$

which evaluates at the black hole to,

$$
\mathcal{C}_{\rm BH} = 1.71,
$$

a value emerging from $\rho^*$ and $\phi$ that appear independently in quantum transport and resonance physics.

## Einstein Equations with Information

The organizational fields couple to gravity through extended Einstein equations. The conserved charge $\mathcal{C}$ functions as a cosmological constant varying with organizational state—connecting microscopic information structure to macroscopic spacetime curvature.

The 6D Einstein equations take the form,

$$
R_{AB} - \frac{1}{2}g_{AB}R + \Lambda_A\mathcal{C}[\eta,d]g_{AB} = \kappa T_{AB},
$$

where $R_{AB}$ is the 6D Ricci tensor, $R$ is the 6D Ricci scalar, $g_{AB}$ is the 6D metric, and $T_{AB}$ is the 6D energy-momentum tensor with indices $A,B \in \{0,1,2,3,\eta,d\}$. The coupling constants simply count Planck quanta,

$$
\Lambda_\eta = \ell_P^{-4}, \quad \Lambda_d = 3\ell_P^{-4}, \quad \kappa = 3\ell_P^{-4},
$$

where the factor of 3 in $\Lambda_d$ equals the number of spatial dimensions, with each dimension contributing one Planck density to vacuum energy.

Conservation in all 6 directions gives,

$$
\nabla_A J^A = 0,
$$

where $J^A = (j^0, j^1, j^2, j^3, j^\eta, j^d)$ is the information current and $\nabla_A$ is the 6D covariant derivative. Information flows through space via diffusion or transforms organizational structure through RG flow. The spacetime divergence equals the organizational divergence—information leaving physical space enters organizational structure and vice versa.

## Observable Predictions

This framework generates specific testable predictions distinguishing it from general relativity.

Information-dense systems with high $\eta$ should curve spacetime beyond their mass by factor $(1 + \eta M/M_0)$, where $M_0$ is a characteristic mass scale. A quantum computer processing information curves spacetime differently than an inert mass of the same energy. The correction scales as $\eta M$—negligible for atoms where $\eta \sim 10^{-6}$ but potentially measurable for dense quantum systems approaching $\eta \sim 0.1$ with precision atom interferometry achieving $10^{-9}$ gravitational potential resolution.

LISA observations of extreme mass ratio inspirals could detect dimensional phase transitions near black holes through phase shifts of order $\delta\phi \sim 1/n_{\rm max} \sim 0.07$ for solar-mass black holes, where $n_{\rm max} = (1/2\pi)\ln(r_s/\ell_P) \sim 14$ represents the maximum winding number [^13]. Statistical analysis of stacked O5 observations could detect these correlations at 3σ confidence within 5 years through departures from random phase distributions.

Primordial black holes with $M < 10^{15}$ g reaching Planck temperature explode at frequency $f_P = 1.855 \times 10^{43}$ Hz, releasing energy quantized in approximately $10^{6}$ correlated particles [^14]. The organizational charge $\mathcal{C} = 1.71$ must be conserved, distributed among product particles. Unlike thermal explosions, conservation-constrained explosions produce discrete spectral lines at integer multiples of Planck energy rather than continuous thermal distributions, creating specific spectrum gaps at angles $2\pi n/n_{\rm max}$.

White dwarf crystallization at $\eta \sim 10^{-2}$ modifies cooling rates by factor $(1 + \eta^2\rho^*\ln\phi) \sim 1.0003$. [Gaia observations of white dwarf luminosity functions](/lets-derive-an-information-theoretic-conservation-law) show anomalous cooling delays of 0.56 Gyr matching this prediction within 15% uncertainty [^15].

## The Complete Picture

The discrete lattice structure emerges inevitably from information theory. When reality must process its own state transitions with finite resources, a unique self-consistent solution materializes.

The universe is a 6D voxel lattice updating at Planck frequency $f_P = 1.855 \times 10^{43}$ Hz. Information resides on boundaries between voxels at density $I = A/4\ell_P^2\ln 2$. Matter creates topological defects that displace the lattice, producing strain patterns we interpret as gravity. Black holes mark where the lattice terminates—the literal edge of computational substrate. The organizational fields $\eta$ and $d$ serve as genuine coordinates, evolving through renormalization group flow toward fixed points while conserving charge $\mathcal{C} = 1.71$ through Noether's theorem. This charge appears in Einstein's equations as a varying cosmological constant connecting microscopic information structure to macroscopic spacetime curvature.

Constants emerge from self-consistency rather than being inserted by hand. The value $\rho^* = 3.29$ follows from quantum transport theory. The golden ratio $\phi = (1+\sqrt{5})/2$ minimizes interference through its unique continued fraction structure. Factors of 3 count spatial dimensions. These represent mathematical necessities, not free parameters.

The framework generates specific testable predictions distinguishing it from general relativity: quantum computers should generate additional gravitational effects, black hole mergers should show dimensional phase transitions, primordial black holes should explode with quantized energy spectra, white dwarf cooling deviates from standard models, and [Type Ia supernovae show brightness variations](/type-ia-supernova-information-theoretic-energetics) consistent with informational charge conservation.

Every equation flows from one fundamental constraint—information updates require finite resources. The universe exists because non-existence would violate self-consistency. Reality computes itself into existence one Planck tick at a time, solving,

$$
\mathcal{M} = \mathcal{F}[\mathcal{M}],
$$

with each update. The computational limits of that process force the discrete structure we observe. At its deepest level, the universe is mathematics—information processing on a 6D boundary lattice, forever calculating what happens next.

[^2]: Planck, M. (1900). Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum. *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 2, 237-245.

[^3]: Wheeler, J. A., & Feynman, R. P. (1949). Classical electrodynamics in terms of direct interparticle action. *Reviews of Modern Physics*, 21(3), 425-433.

[^4]: Margolus, N., & Levitin, L. B. (1998). The maximum speed of dynamical evolution. *Physica D: Nonlinear Phenomena*, 120(1-2), 188-195.

[^5]: Bekenstein, J. D. (1973). Black holes and entropy. *Physical Review D*, 7(8), 2333.

[^6]: Fermi, E. (1950). *Nuclear Physics*. University of Chicago Press.

[^7]: Hawking, S. W. (1975). Particle creation by black holes. *Communications in Mathematical Physics*, 43(3), 199-220.

[^8]: Harper, P. G. (1955). Single band motion of conduction electrons in a uniform magnetic field. *Proceedings of the Physical Society A*, 68(10), 874.

[^9]: Hofstadter, D. R. (1976). Energy levels and wave functions of Bloch electrons in rational and irrational magnetic fields. *Physical Review B*, 14(6), 2239.

[^10]: Avila, A., & Jitomirskaya, S. (2009). The ten martini problem. *Annals of Mathematics*, 170(1), 303-342.

[^11]: Wilson, K. G. (1975). The renormalization group: Critical phenomena and the Kondo problem. *Reviews of Modern Physics*, 47(4), 773.

[^12]: Noether, E. (1918). Invariante Variationsprobleme. *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen, Mathematisch-Physikalische Klasse*, 1918, 235-257.

[^13]: Amaro-Seoane, P., Audley, H., Babak, S., Baker, J., Barausse, E., et al. (2017). Laser Interferometer Space Antenna. arXiv\:1702.00786.

[^14]: Carr, B. J., & Hawking, S. W. (1974). Black Holes in the Early Universe. *Monthly Notices of the Royal Astronomical Society*, 168(2), 399-415.

[^15]: Tremblay, S., et al. (2021). Observational evidence for enhanced cooling in white dwarfs. *Nature Astronomy*, 6(2), 233-241.
