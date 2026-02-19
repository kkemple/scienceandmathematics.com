---
title: 'Conservation, Dissipation, & Field Emergence'
description: "Conservation plus symmetry yields Maxwell, Klein-Gordon, and Euler field equations. Fermi's golden rule derives the microscopic origin of ξ, whose RG flow follows the constraint geometry β-function."
pubDate: '2025-10-06'
category: 'supporting'
updatedDate: '2026-01-28'
zenodoDepositionId: 18701913
zenodoUrl: "https://zenodo.org/records/18701913"
doi: "10.5281/zenodo.18701913"
keywords:
  - "field theory"
  - "Noether theorem"
  - "Maxwell equations"
  - "Klein-Gordon equation"
  - "dissipation"
  - "fluctuation-dissipation theorem"
  - "Fermi golden rule"
  - "conservation laws"
  - "gauge symmetry"
  - "beta function"
  - "constraint geometry"
zenodoDescription: |
  Classical field equations emerge from conservation constraints combined with symmetry requirements. Noether's theorem connects symmetries to conserved currents; U(1) gauge invariance yields Maxwell's equations; Lorentz invariance produces Klein-Gordon; Galilean symmetry generates Euler's fluid equations. These textbook results establish the pattern that conservation plus symmetry determines dynamics.

  The framework extends to include thermal dissipation through a coefficient ξ quantifying energy loss to microscopic degrees of freedom. Fermi's golden rule provides the microscopic origin: electron-phonon coupling yields ξ₀ = α²√(mₑ/M) ≈ 10⁻⁶ for elementary particles, with the fine structure constant α = 1/137 appearing naturally. The fluctuation-dissipation theorem ensures thermal equilibrium through balanced noise and damping.

  This microscopic derivation establishes ξ as a physical, derivable quantity — the essential prerequisite for its role as the maintenance fraction ξ ∈ [0,1] in the constraint geometry's β-function. The decade-spaced hierarchy from ξ ~ 10⁻⁶ (particles) through 10⁻¹ (biological systems) to 1 (black holes) follows from the RG coupling u* = 4πφ²/10 ≈ 3.29, derived from triadic tension and C₁₀ decade symmetry. The microscopic origin derived here provides the UV boundary condition; the constraint geometry determines the flow.
---

Conservation plus symmetry produces field equations. Start with a single constraint — a conserved current $n^\mu$ with vanishing divergence — and impose symmetry requirements. U(1) gauge symmetry generates Maxwell's equations. Lorentz invariance yields Klein-Gordon. Galilean symmetry produces Euler's fluid equations. Mathematical consistency alone. Add dissipation through thermal coupling with maintenance fraction $\xi$ ranging from $10^{-6}$ for elementary particles to unity for black holes, [quantifying the energy required to maintain organizational structure](/binding-energy-critical-radii-and-information-maintenance-tax). Fermi's golden rule provides the microscopic origin of $\xi$, establishing it as a physical quantity whose flow across scales is governed by the [constraint geometry's $\beta$-function](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry).

## The Conservation Constraint

Begin with a vector field $n^\mu(x)$ on a manifold $M$ with metric $g_{\mu\nu}$. The conservation constraint states,

$$
\nabla_\mu n^\mu = 0,
$$

where $\nabla_\mu$ is the covariant derivative. This single equation expresses local conservation—whatever $n^\mu$ represents cannot be created or destroyed, only moved around.

For any spacelike hypersurface Σ, the integral,

$$
Q = \int_\Sigma \sqrt{g} \, n^\mu dS_\mu,
$$

remains constant in time. This is Gauss's theorem in curved spacetime—the total "charge" $Q$ is conserved.

Specific field equations follow from introducing an action functional $S[\phi]$ where $\phi$ represents field degrees of freedom. Noether's theorem connects symmetries to conserved currents[^1],

$$
n^\mu = \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)},
$$

where $\mathcal{L}$ is the Lagrangian density. The Euler-Lagrange equations,

$$
\partial_\mu \left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0,
$$

automatically satisfy $\nabla_\mu n^\mu = 0$ when the action has appropriate symmetry.

## Electromagnetic Fields from U(1) Symmetry

Add U(1) gauge symmetry to the conservation constraint. The Lagrangian must be invariant under $\phi \rightarrow e^{i\alpha}\phi$ where $\alpha$ is an arbitrary function. The minimal Lagrangian satisfying Lorentz and gauge invariance is[^2],

$$
\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu},
$$

where $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ is the field tensor. Varying the action gives Maxwell's equations[^3],

$$
\partial_\mu F^{\mu\nu} = 0, \quad \partial_{[\mu}F_{\nu\rho]} = 0.
$$

Conservation manifests through the electromagnetic stress-energy tensor,

$$
T^{\mu\nu} = F^{\mu\rho}F_\rho^{\nu} + \frac{1}{4}g^{\mu\nu}F_{\rho\sigma}F^{\rho\sigma}.
$$

Maxwell's equations emerge as the unique solution requiring U(1) gauge symmetry with local conservation.

## Scalar Fields from Lorentz Invariance

For a scalar field $\phi$ with only Lorentz invariance required, the simplest action is,

$$
S[\phi] = \int d^4x \sqrt{-g} \left[-\frac{1}{2}\partial_\mu \phi \partial^\mu \phi - V(\phi)\right].
$$

This yields the Klein-Gordon equation[^4][^5],

$$
\Box \phi + \frac{dV}{d\phi} = 0,
$$

where $\Box = g^{\mu\nu}\nabla_\mu\nabla_\nu$ is the d'Alembertian (wave operator). In flat spacetime, $\Box = \partial_\mu \partial^\mu$. The quadratic potential $V(\phi) = m^2\phi^2/2$ yields,

$$
(\Box + m^2)\phi = 0.
$$

The conserved current is,

$$
n^\mu = -i(\phi^* \partial^\mu \phi - \phi \partial^\mu \phi^*),
$$

encoding probability flux or particle number conservation.

## Fluid Dynamics from Galilean Symmetry

For non-relativistic fluids, impose Galilean rather than Lorentz invariance[^6]. The conserved quantities are mass and momentum. Mass conservation gives,

$$
\frac{\partial \rho}{\partial t} + \nabla \cdot (\rho \mathbf{v}) = 0,
$$

where ρ is density and v is velocity. Momentum conservation yields Euler's equation,

$$
\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v} = -\frac{1}{\rho}\nabla P,
$$

with pressure $P = (\partial U/\partial \rho)_s$ determined by the equation of state. These equations follow from varying the Galilean-invariant action,

$$
S = \int dt d^3x \left[\frac{1}{2}\rho v^2 - U(\rho)\right],
$$

where $U(\rho)$ is the internal energy density.

## The Dissipation Extension

Action principles generate time-reversible dynamics. Physical systems break this symmetry through thermal dissipation—energy flows irreversibly to microscopic degrees of freedom. This arrow of time cannot emerge from variational principles alone but requires explicit thermal coupling.

Decompose any field into Fourier modes,

$$
\phi(\mathbf{x},t) = \sum_k \phi_k(t) e^{i\mathbf{k} \cdot \mathbf{x}}.
$$

Each mode evolves according to,

$$
\frac{d\phi_k}{dt} = -i\omega_k \phi_k - \eta_k(\phi_k - \phi_k^0) + \sqrt{2\eta_k k_B T} \, \xi_k(t),
$$

where $\omega_k$ represents the natural frequency from conservative dynamics, $\eta_k$ quantifies dissipation strength for mode k, $\phi_k^0$ denotes the thermal equilibrium value, and $\xi_k(t)$ describes Gaussian white noise with correlation $\langle \xi_k(t) \xi_{k'}(t') \rangle = \delta_{kk'} \delta(t-t')$.

The dissipation coefficient connects microscopic relaxation to macroscopic dynamics[^7][^8],

$$
\eta_k = \frac{\Gamma_k}{E_0/\hbar},
$$

where $\Gamma_k$ quantifies thermal relaxation rate and $E_0$ sets the characteristic energy scale. The decade spacing of the maintenance hierarchy — $10^{-6}$ for elementary particles through $10^{-1}$ for biological systems — is governed by the RG coupling $u^* = 4\pi\varphi^2/10 \approx 3.29$, derived in the [constraint geometry monograph](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) from the triadic tension theorem and $C_{10}$ decade symmetry. The factor of 10 in the denominator reflects the unique cyclic group $C_{10} = C_2 \times C_5$ surviving negative selection (non-crystallographic, $\varphi$-compatible, binary-closed), which partitions each RG period into ten equivalent coarse-graining shells. One full RG period spans one decade in scale, producing the observed order-of-magnitude jumps in $\xi$.

## Microscopic Origin of Dissipation

Quantum mechanics determines $\eta$ through system-environment coupling strength. Fermi's golden rule yields the transition rate[^9],

$$
\Gamma = \frac{2\pi}{\hbar}|g|^2 \rho(E),
$$

where $g$ is the coupling strength and $\rho(E)$ is the density of states.

For electron-phonon coupling in atoms, the coupling strength scales as,

$$
g \sim \frac{e^2}{4\pi\epsilon_0 a_0^2} \times \sqrt{\frac{\hbar}{M\omega_{ph}}},
$$

where $a_0 = 0.529$ Å is the Bohr radius and $M$ the nuclear mass. Evaluating yields,

$$
\eta_0 = \alpha^2 \sqrt{\frac{m_e}{M}} \approx 10^{-6},
$$

where $\alpha = e^2/(4\pi\epsilon_0\hbar c) = 1/137$ is the fine structure constant. This elementary dissipation rate emerges from quantum mechanics through Fermi's golden rule — the same principle governing atomic transitions produces the baseline maintenance overhead. The result establishes $\xi$ as a physical, derivable quantity with a specific microscopic origin, which is the essential prerequisite for treating it as the maintenance fraction $\xi \in [0,1]$ in the constraint geometry's $\beta$-function.

The mode-specific $\eta_k$ from the Langevin dynamics above and this baseline $\eta_0$ from Fermi's golden rule are microscopic quantities. The macroscopic maintenance fraction $\xi$ appearing in the [constraint geometry's RG flow](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) is their coarse-grained counterpart — the fraction of a system's total energy budget devoted to curvature maintenance against entropy. The $\beta$-function $\beta(\xi, \mathcal{D}) = -\xi(1-\xi)[u^* + (\mathcal{D}-2)\ln\varphi/2]$ governs how this macroscopic field evolves across scales, with $\eta_0 \approx 10^{-6}$ as the UV boundary condition set by the quantum mechanical floor derived here.

Complex systems exhibit enhanced dissipation through geometric factors[^7]. Atoms achieve $\xi_a = \eta_0 \times \sqrt{a_0/r_n} \times \sqrt{Z} \approx 10^{-3}$ through nuclear-electron coupling[^10]. Molecules reach $\xi_m \approx 10^{-2}$ via additional vibrational and rotational modes. Biological systems attain $\xi_b \approx 10^{-1}$ through hierarchical organization across multiple scales. Black holes saturate at $\xi = 1$, the IR fixed point of the $\beta$-function where all available energy maintains horizon structure against Hawking radiation. The decade spacing of this progression — each order of magnitude corresponding to one RG period — follows from the $C_{10}$ decade symmetry and the coupling $u^* = 4\pi\varphi^2/10 \approx 3.29$, whose derivation from triadic tension and negative selection is given in the [monograph](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry).

## Complete Field Dynamics

Combining conservation and dissipation gives the complete evolution equation,

$$
\frac{\partial \phi}{\partial t} = \{\phi, H\} - \sum_k \eta_k(\phi_k - \phi_k^0) + \sqrt{2\eta_k k_B T} \, \xi_k(t).
$$

The first term $\{\phi, H\}$ represents conservative Hamiltonian evolution from the action principle. The second term drives dissipation toward equilibrium. The third term adds thermal fluctuations maintaining detailed balance.

The fluctuation-dissipation theorem establishes thermal equilibrium[^8],

$$
P(\phi_k) \propto \exp\left(-\frac{E_k}{k_B T}\right),
$$

recovering the Boltzmann distribution.

## Application to Field Theories

The framework reproduces established field equations with dissipation emerging from thermal coupling. Electromagnetic fields in conductors obey Maxwell's equations,

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t},
$$

with Ohmic dissipation $\mathbf{J} = \sigma \mathbf{E}$. The conductivity $\sigma = ne^2\tau/m$ connects to $\eta$ through the scattering time $\tau = 1/(\eta \omega_p)$ where $\omega_p$ is the plasma frequency.

Viscous fluid dynamics follows from Galilean-invariant conservation with dissipation,

$$
\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \mathbf{v},
$$

where kinematic viscosity $\nu = \eta v_{th}^2/\omega_v$ relates dissipation coefficient to thermal velocity and vorticity frequency.

## Fundamental Structure

Conservation plus symmetry generates the reversible dynamics of physical fields — Maxwell from U(1), Klein-Gordon from Lorentz invariance, Euler from Galilean symmetry. Thermal coupling breaks time-reversal symmetry through the maintenance fraction $\xi$, whose microscopic origin traces to Fermi's golden rule. The baseline $\eta_0 = \alpha^2\sqrt{m_e/M} \approx 10^{-6}$ is a derived quantity, not a phenomenological parameter.

This microscopic floor is the starting point of the macroscopic maintenance fraction $\xi \in [0,1]$ that appears in the [constraint geometry's $\beta$-function](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry). The $\beta$-function governs how $\xi$ flows across scales, with the RG coupling $u^* = 4\pi\varphi^2/10 \approx 3.29$ producing the observed decade-spaced hierarchy from elementary particles through biological systems to black holes. The microscopic derivation here establishes that $\xi$ is physical — the constraint geometry determines how it flows.

[^1]: Noether, E. (1918). Invariante Variationsprobleme. *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen, Mathematisch-Physikalische Klasse*, 1918, 235-257.

[^2]: Yang, C. N., & Mills, R. L. (1954). Conservation of Isotopic Spin and Isotopic Gauge Invariance. *Physical Review*, 96(1), 191-195.

[^3]: Jackson, J. D. (1999). *Classical Electrodynamics* (3rd ed.). Wiley.

[^4]: Klein, O. (1926). Quantentheorie und fünfdimensionale Relativitätstheorie. *Zeitschrift für Physik*, 37(12), 895-906.

[^5]: Gordon, W. (1926). Der Comptoneffekt nach der Schrödingerschen Theorie. *Zeitschrift für Physik*, 40(1-2), 117-133.

[^6]: Landau, L. D., & Lifshitz, E. M. (1987). *Fluid Mechanics* (2nd ed.). Pergamon Press.

[^7]: Zwanzig, R. (1960). Ensemble Method in the Theory of Irreversibility. *Journal of Chemical Physics*, 33(5), 1338-1341.

[^8]: Kubo, R. (1957). Statistical-Mechanical Theory of Irreversible Processes. *Journal of the Physical Society of Japan*, 12(6), 570-586.

[^9]: Sakurai, J. J., & Napolitano, J. (2017). *Modern Quantum Mechanics* (2nd ed.). Cambridge University Press.

[^10]: Ashcroft, N. W., & Mermin, N. D. (1976). *Solid State Physics*. Holt, Rinehart and Winston.
