---
title: 'Conservation, Dissipation, & Field Emergence'
pubDate: '2025-10-06'
---

Conservation plus symmetry equals field equations. Start with a single constraint—a conserved current $n^\mu$ with vanishing divergence—and impose symmetry requirements. U(1) gauge symmetry generates Maxwell's equations. Lorentz invariance yields Klein-Gordon. Galilean symmetry produces Euler's fluid equations. No assumptions about underlying physics, just mathematical consistency. Add dissipation through thermal coupling with coefficient $\eta$ ranging from $10^{-6}$ for elementary particles to unity for black holes, [quantifying the energy required to maintain organizational structure](/binding-energy-as-information-maintenance-tax). The complete framework—conservation, dissipation, and quantum overlap—reproduces field dynamics from electromagnetism to gravitation through pure constraint satisfaction.

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

remains constant in time. This is Gauss's theorem in curved spacetime—the total "charge" Q is conserved.

Specific field equations follow from introducing an action functional $S[\phi]$ where $\phi$ represents field degrees of freedom. Noether's theorem connects symmetries to conserved currents [^1],

$$
n^\mu = \frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)},
$$

where $\mathcal{L}$ is the Lagrangian density. The Euler-Lagrange equations,

$$
\partial_\mu \left(\frac{\partial \mathcal{L}}{\partial(\partial_\mu \phi)}\right) - \frac{\partial \mathcal{L}}{\partial \phi} = 0,
$$

automatically satisfy $\nabla_\mu n^\mu = 0$ when the action has appropriate symmetry.

## Electromagnetic Fields from U(1) Symmetry

Add U(1) gauge symmetry to the conservation constraint. The Lagrangian must be invariant under $\phi \rightarrow e^{i\alpha}\phi$ where $\alpha$ is an arbitrary function. The minimal Lagrangian satisfying Lorentz and gauge invariance is [^2],

$$
\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu},
$$

where $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ is the field tensor. Varying the action gives Maxwell's equations [^13],

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

This yields the Klein-Gordon equation [^3] [^4],

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

For non-relativistic fluids, impose Galilean rather than Lorentz invariance [^5]. The conserved quantities are mass and momentum. Mass conservation gives,

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

The dissipation coefficient connects microscopic relaxation to macroscopic dynamics [^6][^7],

$$
\eta_k = \frac{\Gamma_k}{E_0/\hbar},
$$

where $\Gamma_k$ quantifies thermal relaxation rate and $E_0$ sets the characteristic energy scale.

## Microscopic Origin of Dissipation

Quantum mechanics determines $\eta$ through system-environment coupling strength. Fermi's golden rule yields the transition rate [^14],

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

where $\alpha = e^2/(4\pi\epsilon_0\hbar c) = 1/137$ is the fine structure constant.

Complex systems exhibit enhanced dissipation through geometric factors [^6]. Atoms achieve $\eta_a = \eta_0 \times \sqrt{a_0/r_n} \times \sqrt{Z} \approx 10^{-3}$ through nuclear-electron coupling [^15]. Molecules reach $\eta_m \approx 10^{-2}$ via additional vibrational and rotational modes. Biological systems attain $\eta_b \approx 10^{-1}$ through hierarchical organization across multiple scales. Black holes saturate the bound at $\eta = 1$, with all available energy maintaining horizon structure against Hawking radiation.

## The Quantum Overlap Criterion

A third constraint determines when systems undergo phase transitions. The quantum overlap parameter,

$$
\Omega = n \lambda^d,
$$

measures the number of particles $n$ within a volume set by the quantum wavelength $\lambda$ in $d$ dimensions.

The characteristic wavelength follows from the system's energy scale,

$$
\lambda = \frac{\hbar}{\sqrt{2mE_0}}.
$$

Phase transitions occur at critical overlap values [^9]. The [uncertainty principle constrains wavelength-position products](/fourier-transforms-and-the-uncertainty-principle) through Fourier conjugacy. Bose-Einstein condensation emerges when $n \lambda_T^3 \approx 2.612$, with thermal de Broglie wavelength $\lambda_T = h/\sqrt{2\pi m k_B T}$. Fermi degeneracy appears at $n \lambda_F^3 \approx 1$. Gravitational collapse initiates when density reaches $n \approx 1/\lambda_g^3$ with $\lambda_g = \hbar/\sqrt{GMm^2/r}$.

Distinct perturbation mechanisms drive transitions through different pathways. Thermal fluctuations modify wavelength as $\lambda \propto T^{-1/2}$. Geometric compression alters density following $n \propto r^{-3}$. Interaction strength affects coherence length through $\lambda \propto \exp(1/g_{int})$ where $g_{int}$ quantifies coupling strength.

## Complete Field Dynamics

Combining all three constraints gives the complete evolution equation,

$$
\frac{\partial \phi}{\partial t} = \{\phi, H\} - \sum_k \eta_k(\phi_k - \phi_k^0) + \sqrt{2\eta_k k_B T} \, \xi_k(t).
$$

The first term $\{\phi, H\}$ represents conservative Hamiltonian evolution from the action principle. The second term drives dissipation toward equilibrium. The third term adds thermal fluctuations maintaining detailed balance.

The fluctuation-dissipation theorem establishes thermal equilibrium [^7],

$$
P(\phi_k) \propto \exp\left(-\frac{E_k}{k_B T}\right),
$$

recovering the Boltzmann distribution.

## Application to Field Theories

The framework reproduces established field equations with dissipation emerging from thermal coupling. Electromagnetic fields in conductors obey [Maxwell's equations](/information-field-theory-from-constraint-to-cosmos),

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\epsilon_0 \frac{\partial \mathbf{E}}{\partial t},
$$

with Ohmic dissipation $\mathbf{J} = \sigma \mathbf{E}$. The conductivity $\sigma = ne^2\tau/m$ connects to $\eta$ through the scattering time $\tau = 1/(\eta \omega_p)$ where $\omega_p$ is the plasma frequency.

Viscous fluid dynamics follows from Galilean-invariant conservation with dissipation,

$$
\frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v} \cdot \nabla)\mathbf{v} = -\frac{1}{\rho}\nabla P + \nu \nabla^2 \mathbf{v},
$$

where kinematic viscosity $\nu = \eta v_{th}^2/\omega_v$ relates dissipation coefficient to thermal velocity and vorticity frequency.

Gravitational systems governed by Einstein's equations [^10],

$$
R_{\mu\nu} - \frac{1}{2}g_{\mu\nu}R = 8\pi G T_{\mu\nu},
$$

exhibit effective dissipation $\eta_g = (r_s/r)^{\alpha}$ where $r_s = 2GM/c^2$ is the Schwarzschild radius and $\alpha$ depends on matter complexity.

## Information Processing Interpretation

Information theory reveals the fundamental connection [^11],

$$
\frac{dI_k}{dt} = \frac{\eta_k}{\ln 2},
$$

measuring Shannon information loss per mode. Total processing rate becomes,

$$
\dot{I} = \sum_k \eta_k \frac{E_k}{\hbar \ln 2}.
$$

Black holes saturate the theoretical limit at $10^{43}$ bits/second per solar mass through $\eta = 1$ across all modes [^12]. Physical systems operate at fractions of this bound—atoms at $10^{-3}$, molecules at $10^{-2}$, biological systems at $10^{-1}$ of maximum throughput.

## Fundamental Structure

Field equations emerge from three information-theoretic constraints without assuming underlying physics. Conservation with symmetry generates the conservative dynamics—Maxwell from U(1), Klein-Gordon from Lorentz invariance, Euler from Galilean symmetry. The dissipation coefficient $\eta$ quantifies information loss to thermal reservoirs, ranging from $10^{-6}$ for elementary particles through $10^{-3}$ (atoms), $10^{-2}$ (molecules), $10^{-1}$ (biological systems) to unity for black holes. Quantum overlap $\Omega = n\lambda^d$ triggers phase transitions when crossing critical thresholds.

The exponential hierarchy in $\eta$ reflects organizational complexity—each order of magnitude represents additional degrees of freedom requiring maintenance. Black holes saturate at $\eta = 1$, [processing information at the Planck frequency limit](/the-thermodynamic-computational-speed-limit) $10^{43}$ Hz. All other systems operate below this bound, their processing rates determined by $\dot{I} = \sum_k \eta_k E_k/(\hbar \ln 2)$. Fields aren't fundamental entities but information channels whose dynamics follow from constraint optimization. Conservation ensures causality. Dissipation enforces the second law. Quantum overlap sets critical phenomena. Together they generate physics from pure information theory.

[^1]: Noether, E. (1918). Invariante Variationsprobleme. *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen, Mathematisch-Physikalische Klasse*, 1918, 235-257.

[^2]: Yang, C. N., & Mills, R. L. (1954). Conservation of Isotopic Spin and Isotopic Gauge Invariance. *Physical Review*, 96(1), 191-195.

[^3]: Klein, O. (1926). Quantentheorie und fünfdimensionale Relativitätstheorie. *Zeitschrift für Physik*, 37(12), 895-906.

[^4]: Gordon, W. (1926). Der Comptoneffekt nach der Schrödingerschen Theorie. *Zeitschrift für Physik*, 40(1-2), 117-133.

[^5]: Landau, L. D., & Lifshitz, E. M. (1987). *Fluid Mechanics* (2nd ed.). Pergamon Press.

[^6]: Zwanzig, R. (1960). Ensemble Method in the Theory of Irreversibility. *Journal of Chemical Physics*, 33(5), 1338-1341.

[^7]: Kubo, R. (1957). Statistical-Mechanical Theory of Irreversible Processes. *Journal of the Physical Society of Japan*, 12(6), 570-586.

[^9]: Pitaevskii, L., & Stringari, S. (2003). *Bose-Einstein Condensation*. Oxford University Press.

[^10]: Weinberg, S. (1972). *Gravitation and Cosmology: Principles and Applications of the General Theory of Relativity*. John Wiley & Sons.

[^11]: Shannon, C. E. (1948). A Mathematical Theory of Communication. *Bell System Technical Journal*, 27(3), 379-423.

[^12]: Lloyd, S. (2000). Ultimate physical limits to computation. *Nature*, 406(6799), 1047-1054.

[^13]: Jackson, J. D. (1999). *Classical Electrodynamics* (3rd ed.). Wiley.

[^14]: Sakurai, J. J., & Napolitano, J. (2017). *Modern Quantum Mechanics* (2nd ed.). Cambridge University Press.

[^15]: Ashcroft, N. W., & Mermin, N. D. (1976). *Solid State Physics*. Holt, Rinehart and Winston.
