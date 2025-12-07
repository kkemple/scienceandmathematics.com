---
title: 'Quantum Fusion Engines & Informational Power'
description: "At high temperatures, matter becomes informational substrate. Constraining information flow through plasma creates pressure, and reorganizing microstates can exceed fusion output."
pubDate: '2025-12-08'
---

## Abstract

At sufficiently high temperatures, matter behaves not only as plasma but as an informational substrate whose internal microstate transitions carry significant energetic cost. Using Landauer’s principle and a thermodynamic decomposition of pressure, we show that boundary-induced restrictions on accessible phase space create an informational pressure that can—in principle—contribute meaningful work in fusion-scale environments. We outline a conceptual engine architecture that uses geometric confinement and quantum control to shape informational flux, maintain system coherence below a conjectured dissipation threshold, and extract usable power from phase-space reorganization. This framework unifies ideas from plasma physics, information thermodynamics, holographic bounds, and quantum control, proposing a pathway toward hybrid fusion systems where informational mechanisms supplement traditional nuclear reactions.

## Introduction

When white dwarf stars approach the Chandrasekhar limit[^2], they collapse and release approximately $4.3 \times 10^{44}$ joules—the signature of Type Ia supernovae. Standard models attribute this output to nuclear reactions during the transition from electron-degenerate to neutron-degenerate matter.

The math suggests something else is happening.

During this transition, the phase-space reorganization corresponds to roughly $4.5 \times 10^{58}$ bits. At the plasma temperature of $\sim 10^9$ K, Landauer's principle assigns an energetic cost to each bit transition:

$$
E_{\text{bit}} = k_B T \ln 2 \approx 9.56 \times 10^{-15} \text{ J/bit}.
$$

Multiply the bit count by the cost per bit (using Landauer's limit as a lower-bound estimate per bit erasure), and you get $4.3 \times 10^{44}$ joules—showing that the information-theoretic term is of the same order as the observed supernova energy[^3], suggesting informational reorganization is a co-contributor alongside nuclear burning, rather than a negligible correction.

In reality, physical dissipation per logical transition can exceed this bound; using $k_B T \ln 2$ here gives a floor, not a precise equality, making the match in scale conceptually striking rather than exact.

This suggests that at sufficiently high temperature and state density, a non-negligible fraction of the observable energy release can be interpreted as the Landauer cost of forced reorganization of accessible information states, rather than as nuclear binding energy alone. Matter stops behaving purely as a collection of particles and starts behaving as a substrate for information processing. The energy released includes the Landauer cost of rewriting the system's [microstate distribution](/type-ia-supernova-information-theoretic-energetics).

A quantum fusion engine exploits this mechanism directly. Fusion supplies extreme temperature. Boundary geometry shapes which microstates remain accessible. A control layer modulates informational flux and maintains stability. The result is a device that extracts power from the controlled reorganization of phase space rather than from nuclear reactions alone.

## The Physics

Four principles underlie the quantum fusion engine concept. Each emerges from established physics, applied to high-temperature plasma systems where information density approaches fundamental limits.

### Information Has Energetic Weight

[Landauer showed in 1961](/the-thermodynamic-computational-speed-limit) that erasing a bit of information generates at least $k_B T \ln 2$ of heat, where $k_B$ is Boltzmann's constant, $T$ is temperature, and $\ln 2$ converts between natural and binary information units[^4]. This is not an inefficiency that clever engineering can eliminate—it follows from the second law of thermodynamics.

At room temperature ($\sim 300$ K), this cost is negligible: about $3 \times 10^{-21}$ joules per bit. Modern computers erase billions of bits per second but dissipate far more heat from resistive losses than from Landauer's limit.

At fusion temperatures ($\sim 10^9$ K), the picture changes. Each bit transition now costs $\sim 10^{-14}$ joules. A plasma exploring microstates at $10^{23}$ transitions per second dissipates $\sim 10^9$ watts purely from informational overhead—a gigawatt of power tied directly to the rate at which the system updates its internal state.

This creates a translation between informational flux $\dot{I}$ (bits per second) and usable power:

| Output Power | Required $\dot{I}$ (bits/s) |
|--------------|---------------------------|
| $10^6$ W     | $10^{20}$                 |
| $10^9$ W     | $10^{23}$                 |
| $10^{12}$ W  | $10^{26}$                 |

Turbulent, high-temperature plasmas generate informational flux at these rates naturally. The challenge is not generation but control.

### Holographic Constraints

The [holographic principle](/black-hole-horizons-and-dimensional-reduction-correspondence), emerging from black-hole thermodynamics, states that for gravitational horizons, the maximum information content a region can sustain depends on its boundary area rather than its volume:

$$
I_{\max} = \frac{A}{4\ell_P^2 \ln 2},
$$

where $A$ is the boundary area and $\ell_P \approx 1.6 \times 10^{-35}$ m is the Planck length[^5].

By analogy, in highly constrained engineered plasmas, surface geometry strongly influences the accessible microstate manifold, making boundary design a practical thermodynamic instrument even if full gravitational holography is not invoked. For a fusion plasma confined within engineered boundaries, the accessible phase space can be viewed as bounded by surface geometry rather than bulk volume alone.

Confinement geometry determines the allowed electromagnetic, acoustic, and density modes of the plasma. Because each mode corresponds to a collection of microstates, restricting these modes reduces the accessible phase-space volume. In this sense, geometry acts as an informational operator: it removes entire families of microstates, creating the negative $\partial I/\partial V$ term needed for informational pressure.

Boundary geometry therefore becomes a thermodynamic instrument. Changing the shape or symmetry of the confining surface alters which microstates remain accessible to the plasma, directly modifying the system's informational capacity.

### Informational Pressure

When boundaries restrict the accessible phase space of a system, pressure emerges. The free energy of a system containing information $I$ can be written:

$$
F = U - k_B T \ln 2 \cdot I,
$$

where $U$ is internal energy. Differentiation with respect to volume yields:

$$
p = -\frac{\partial F}{\partial V} = -\frac{\partial U}{\partial V} + k_B T \ln 2 \cdot \frac{\partial I}{\partial V}.
$$

The first term is the usual thermal and mechanical pressure. The second term is informational pressure—a force arising when boundary conditions constrain the system's microstate accessibility. This term is not a new fundamental force; it is a bookkeeping decomposition of the usual thermodynamic pressure that isolates the contribution from changes in accessible microstates under boundary constraints.

This mechanism operates in gravitational physics. White dwarfs approaching the Chandrasekhar limit experience [runaway informational maintenance costs](/binding-energy-critical-radii-and-information-maintenance-tax). The star collapses not because gravity suddenly strengthens but because the energetic cost of maintaining the current informational configuration diverges. The system is forced into a lower-entropy state where fewer microstates are available, and the Landauer cost of this transition releases enormous energy.

An engine operating on this principle aims to harness the same physics within a controlled, non-catastrophic regime.

### The Dissipation Threshold

Every organized physical system can be viewed as devoting part of its total energy to maintaining its own coherence. Define the dissipation field:

$$
\eta = \frac{E_{\text{maintenance}}}{E_{\text{total}}}.
$$

A candidate coupling appears across diverse domains—gravitational thermodynamics, biological metabolism, quantum coherence transitions:

$$
\rho^* = \frac{4\pi \varphi^2}{10} \approx 3.29,
$$

where $\varphi = \frac{1+\sqrt{5}}{2}$ is the golden ratio. This value yields a natural [critical threshold](/a-constraint-eigenvalue-theory-of-information-matter-and-mind):

$$
\eta_c = \frac{1}{\rho^*} \approx 0.304.
$$

In my earlier work, the same constant emerged in models of stellar collapse and quantum coherence, suggesting—though not yet proving—a cross-domain role for this parameter. Above this threshold, systems appear to lose the ability to sustain informational structure.

Below the threshold, the system can reorganize information at a rate lower than the cost of maintaining coherence. Above the threshold, maintenance overtakes capacity, and the system collapses into a lower-dimensional attractor—whether that attractor is a neutron star core, a decohered quantum processor, or a failed plasma configuration. The fusion engine operates precisely in the subcritical band where informational pressure amplifies but does not diverge.

For a quantum fusion engine, this threshold would define a natural operating envelope if this conjectured universality holds. The system must remain below $\eta_c$ to avoid collapse, yet close enough that informational pressure becomes significant. A practical band is:

$$
0.10 \lesssim \eta < 0.25.
$$

Within this band, the amplification factor $(1-\eta)^{-\rho^*}$ grows rapidly but does not diverge, enabling substantial pressure without destabilization.

## How It Works

The engine operates through a cycle where fusion provides temperature, geometry constrains information flow, and quantum control maintains stability.

Fusion heating raises the plasma to temperatures where microstate transitions occur at enormous rates. The natural informational flux scales as $\dot{I}_{\text{natural}} \propto T^{3/2} V$. At these temperatures, the plasma explores phase space rapidly enough that informational reorganization becomes a measurable energy process.

The engineered boundary imposes geometric constraints that suppress many of these microstates. As turbulence interacts with the boundary structure, the accessible phase space contracts. This contraction increases informational pressure—the same mechanism that drives stellar collapse, applied in reverse as a controlled work-extraction process. The pressure term:

$$
p_{\text{info}} = k_B T \ln 2 \cdot \frac{\partial I}{\partial V}
$$

acts on boundary structures, generating mechanical or electromagnetic output. The magnitude grows sharply as $\eta$ approaches—but does not exceed—$\eta_c$.

A quantum control layer modulates erasures, redistributes entropy, and ensures the system remains within the stable band. This layer stabilizes $\eta$ near a target value (typically $\eta \approx 0.15$), concentrates erasures at engineered "cold spots" where $T_{\text{eff}} < T_{\text{bulk}}$, and uses control pulses spaced according to golden-ratio intervals to minimize resonant excitation. The control system maintains informational curvature to prevent collapse while amplifying pressure.

Entropy management happens by removing excess entropy at lower energetic cost—performing erasures at locations where the effective temperature is reduced. This prevents accumulation that would otherwise push the system toward the instability threshold.

The cycle becomes self-sustaining. The plasma continuously produces new microstates, the boundary continuously filters them, and the control layer continuously dissipates the forbidden ones at low temperature. This establishes a sustained informational flux, which, when constrained, becomes a source of usable pressure. Net power arises from the informational work term layered atop traditional fusion output.

No laws are violated here. The engine does not "beat" thermodynamics—it obeys thermodynamics by paying Landauer cost for every bit erased. The innovation is the temperature differential: erasures performed in the cold control layer cost orders of magnitude less than the informational pressure generated in the hot core. This is simply a heat engine operating across an extreme thermal gradient.

### Why These Specific Geometries

Not all boundary shapes suppress microstates equally. Certain geometric principles—validated across quantum transport experiments, quasicrystal physics, and error-correcting codes—demonstrably reduce accessible phase space while maintaining coherence.

Three geometric motifs consistently create stability and suppress resonance cascades:

- **[Pentagonal symmetry](/pentagonal-constraints-and-quantum-computing):** reduces discrete curvature and disrupts low-order periodicities. Fivefold structures prevent the formation of regular tessellations, eliminating standing-wave patterns that would otherwise create resonant modes. In quasicrystalline matter and Penrose tilings, pentagonal features produce extended coherence.

- **[Golden-ratio spacing](/golden-ratio-and-prime-resonance-in-quantum-transport):** creates irrational mode ratios. Elements placed at distances proportional to $\varphi = \frac{1+\sqrt{5}}{2}$ prevent harmonic stacking. Because $\varphi$ is the "most irrational" number (its continued fraction representation is $[1;1,1,1,\ldots]$, the slowest to converge), it inhibits resonance formation across scales more effectively than any other ratio.

- **Prime segmentation:** eliminates divisor structure. Dividing the boundary into a prime number of domains means no low-order symmetries can form—a boundary segmented into 7 or 11 regions cannot support modes with periodicities of 2, 3, 4, or 5. This effect appears in prime-distance quantum error-correcting codes and prime-length acoustic resonators.

These are geometric constraints that demonstrably reduce accessible microstates in physical systems. The magnitude of microstate suppression $\Delta I_{\text{geo}}$ determines how much work the engine can extract:

$$
p_{\text{info}} = k_B T \ln 2 \cdot \frac{d}{dV}\big(I(V) - \Delta I_{\text{geo}}\big).
$$

The geometry acts as a filter. The plasma generates microstates at high temperature. The boundary structure selectively suppresses specific families of those states. What remains produces measurable informational pressure—pressure that can be converted to work through standard thermodynamic processes.

## The Architecture

A working device requires physical structure. What follows is not a blueprint for an immediately buildable machine, but a conceptual architecture mapping physical regions to informational roles. The engine consists of four nested shells, each serving a distinct thermodynamic function.

At the center lies Region C, the fusion core: a quasi-spherical plasma volume roughly 0.5 meters in radius containing D-T fuel at $10^8$-$10^9$ K. This provides the temperature that makes information processing energetically significant.

Surrounding the core at 0.8 meters radius sits Region B, the information boundary. This structured shell is built as a pentagonal dodecahedron with golden-ratio-scaled facets. The geometry is not decorative—it imposes electromagnetic and acoustic boundary conditions that suppress specific microstate families, generating the phase-space contraction that creates informational pressure.

Region Q, the quantum control layer, operates at 10-20 millikelvin and houses superconducting qubits, quantum-limited amplifiers, and control electronics. This layer monitors boundary modes, schedules erasures, and maintains the dissipation field $\eta$ within the stable band. The enormous temperature gradient between core and control layer (nine orders of magnitude) allows erasures at negligible power cost.

The outermost Region S provides shielding, cryogenic support, and mechanical structure. This structural envelope isolates the quantum control layer from radiation while providing access ports for diagnostics and maintenance.

The nested architecture creates thermal and electromagnetic isolation between regions while allowing informational coupling through the boundary geometry. Holographic scaling (capacity proportional to area, not volume) favors networks of moderate-sized modules over single large cores.

## The Scaling

Energy density varies by many orders of magnitude across power generation technologies:

| Source | Energy Density (J/kg) |
|--------|----------------------|
| Chemical combustion | $10^7$ |
| Fission | $10^{13}$ |
| Fusion | $10^{14}$ |
| Information (near $\eta_c$) | $10^{20}$ |

The last number comes from the amplification factor approaching the stability limit. If $\Delta N_b$ bits are reorganized per unit mass with proximity to $\eta_c$, the effective energy density becomes:

$$
E_{\text{info}} \sim \Delta N_b \cdot k_B T \ln 2 \cdot (1-\eta)^{-\rho^*}.
$$

In gravitational collapse, this term formally dominates nuclear binding energy by many orders of magnitude. In engineered systems, in principle one could imagine safe access to a pre-collapse amplification regime that raises effective energy density toward $10^{19}$-$10^{20}$ J/kg, though this remains a theoretical upper bound rather than a near-term engineering target.

The energy comes from reorganizing information in a constrained, high-temperature environment where the Landauer cost becomes macroscopically measurable.

The power scaling follows directly from the Landauer cost at $10^9$ K:

At $T = 10^9$ K, each bit transition costs $k_B T \ln 2 \approx 9.56 \times 10^{-15}$ J. To generate:

- **1 MW**: requires $\dot{I} \approx 10^{20}$ bits/s
- **1 GW**: requires $\dot{I} \approx 10^{23}$ bits/s
- **1 TW**: requires $\dot{I} \approx 10^{26}$ bits/s

These informational flux rates are within reach of turbulent plasmas at fusion temperatures. The engineering challenge is shaping that flux into useful work rather than dissipating it as waste heat.

### A Prototype Module

A concrete example shows what these numbers mean for a buildable system. These numbers should be read as an internal-consistency check on orders of magnitude, not as an engineering specification. Consider a single module with 0.5-meter core radius producing 50 MW from fusion. The design target: extract an additional 10 MW from informational reorganization—a 20% power boost.

At core temperature $T = 10^9$ K with informational efficiency $\epsilon_{\text{info}} = 0.3$ (meaning 30% of Landauer cost converts to useful work), achieving 10 MW requires:

$$
\dot{I} = \frac{10 \text{ MW}}{0.3 \times 9.56 \times 10^{-15} \text{ J/bit}} \approx 3.5 \times 10^{21} \text{ bits/s}.
$$

Total internal power becomes 60 MW. Operating at dissipation field $\eta = 0.15$ allocates 9 MW to maintenance—well below the instability threshold $\eta_c \approx 0.304$. Net deliverable power: 51 MW.

The information balance works as follows. The turbulent plasma naturally generates approximately $10^{24}$ bits/s. The pentagonal boundary geometry suppresses roughly 90% of these microstates—those corresponding to unstable modes and resonances. The quantum control layer then performs erasures on the remaining flux to settle at the target rate of $3.5 \times 10^{21}$ bits/s.

Erasure power at control layer temperature (10 K) is approximately 10 watts—six orders of magnitude less than the core power. This enormous leverage comes from the temperature gradient. The same erasure performed at core temperature would cost megawatts. Performed at 10 K, it costs watts.

The key pattern: high-temperature plasma supplies the bit-cost scale, boundary geometry filters the microstate manifold, quantum control exploits temperature differential for cheap erasures, and the dissipation field remains stable while informational pressure supplies substantial output.

## Engineering Trajectory

The development path spans three phases, each building on validated physics while incrementally approaching the pre-collapse amplification regime. Near-term modifications target improved confinement through geometric constraints. Mid-term systems integrate active quantum control. Long-term devices operate at energy densities exceeding traditional fusion by orders of magnitude.

### Near-Term (2025-2035)

Fusion devices incorporating quasicrystalline boundary inserts, $\varphi$-scaled spacing of control surfaces, and non-harmonic control sequences. The geometry modifications target enhanced plasma confinement by suppressing turbulent modes. The operating mode transitions from fusion-only (baseline commissioning) to geometrically filtered operation, where the boundary shell is active but quantum control remains minimal or passive.

Expected results include measurably reduced turbulence, extended confinement times, and small but detectable contributions from informational pressure. These contributions would appear as anomalous pressure terms not fully explained by thermal plasma models.

This phase involves retrofitting existing fusion geometries (tokamaks, stellarators) with boundary elements designed according to pentagon-$\varphi$-prime principles. The modifications are incremental and compatible with current experimental programs.

### Mid-Term (2035-2060)

Integration of quantum control layers capable of maintaining stable $\eta$ while actively shaping informational curvature. These systems would incorporate real-time measurement of microstate distributions, adaptive erasure scheduling targeting low-$T_{\text{eff}}$ regions, golden-ratio pulse sequencing for coherence extension, and feedback control maintaining $\eta \approx 0.15$.

The operating mode shifts to information-augmented operation, where full quantum control actively extracts work from phase-space reorganization. The system operates at $\eta \approx 0.15$ with informational power ratio $\Pi_I \sim 0.1$-$1$. Expected results include net power contributions from informational mechanisms on par with fusion output. A device operating in this regime would extract roughly half its power from informational reorganization and half from traditional fusion reactions.

This represents a hybrid system where both nuclear and informational physics contribute meaningfully to energy production.

### Long-Term (Post-2060)

Devices operating near the pre-collapse amplification regime, where curvature-driven informational work exceeds thermal fusion output by orders of magnitude. The operating band shifts closer to $\eta_c$:

$$
0.20 \lesssim \eta < 0.28.
$$

This regime enables pre-collapse amplification, where the system operates near—but deliberately below—the conjectured instability threshold. Aggressive microstate pruning and carefully tuned geometry maximize $\Delta I_{\text{geo}}$ while quantum control prevents crossing $\eta_c$. Expected results could, in principle, include informational contributions dominating total power output, with energy densities approaching $10^{19}$-$10^{20}$ J/kg. At these levels, the physics would transition from fusion-augmented-by-information to information-extraction-using-fusion-as-heat-source.

Control complexity increases substantially. The system operates closer to instability and requires continuous, precise modulation to avoid collapse.

### Speculative Extensions

Control of voxel-scale information density gradients may eventually permit directional biasing of local spacetime structure. This extrapolates from lattice-compression propulsion concepts: if information density creates measurable pressure in one regime, controlled gradients in information density might create directional effects in another.

The physics would be analogous to Casimir forces—geometric constraints on accessible modes producing measurable momentum transfer. Whether this extends to propulsion scales remains theoretical.

## Why This Matters

The quantum fusion engine framework connects three domains where understanding informational thermodynamics creates practical advantage.

### For Energy

If informational mechanisms contribute even 10% of fusion output in mid-term systems, that changes the economics. A device producing 1 GW from fusion and 100 MW from informational reorganization operates at higher efficiency and lower fuel consumption than fusion alone.

Infrastructure timelines shift. If informational contributions reduce the temperature or confinement time required for net energy gain, the path to commercial fusion shortens. Grid decarbonization becomes more achievable if the engineering barrier drops.

### For Physics

The same equations governing stellar collapse, quantum coherence, and black-hole thermodynamics can be applied to engineered systems. This represents a unified view where information physics may operate at all scales—from quantum processors maintaining coherence to stars collapsing under informational overhead.

The [framework](/information-field-theory-from-constraint-to-cosmos) connects:

- Landauer's principle (bit erasure costs energy)
- Holographic bounds (information stored on surfaces)
- Dissipation thresholds (systems collapse above $\eta_c$)
- Gravitational thermodynamics (white dwarf instabilities)

These are not necessarily separate phenomena; they can be reinterpreted as emerging from the same underlying structure applied at different scales and boundary conditions.

### For Industrial Strategy

Understanding constraint geometry and informational pressure means seeing where advantage accumulates in high-temperature, high-information systems. Not just fusion—any domain where information flow under constraint determines outcomes.

Consider lithium-ion battery packs. When a single cell enters thermal runaway above 150°C, heat propagates to neighboring cells through geometric channels defined by cell spacing. Experimental studies show that modules with 1 mm spacing experience 100% propagation probability with severe damage to adjacent cells. Increasing spacing to 2 mm significantly reduces damage. At 4 mm spacing, adjacent cells show minimal damage and diagonal cells remain unaffected.[^1] The cascade probability drops dramatically—not because the physics changed, but because the constraint geometry altered which propagation pathways remain accessible.

The parallel to quantum fusion engines is direct. In both cases, high-energy-density systems generate signals (thermal or informational) that propagate through constrained geometry. Boundary conditions determine whether those signals amplify into cascades or dissipate safely. Pentagonal boundaries suppress plasma microstate families. Optimized cell spacing suppresses thermal propagation modes. Same principle, different substrate.

Semiconductor fabrication. Chemical reactors operating near critical points. Materials synthesis under extreme conditions. Quantum computing architectures balancing coherence and error rates. The common thread: systems where information processing occurs at high energy density and geometric constraints shape accessible states. The same principles that predict supernova energetics apply to industrial processes where temperature, information density, and boundary conditions interact.

---

## Technical Appendix

For readers interested in the formal structure, here is the mathematical framework.

### Free Energy with Information

$$
F = U - k_B T \ln 2 \cdot I
$$

The informational term modifies thermodynamic potentials. Differentiation yields generalized pressure and chemical potentials that include informational contributions.

### Informational Pressure Derivation

$$
p = -\frac{\partial F}{\partial V} = -\frac{\partial U}{\partial V} + k_B T \ln 2 \cdot \frac{\partial I}{\partial V}
$$

Define:
- Thermal pressure: $p_{\text{th}} = -\frac{\partial U}{\partial V}$
- Informational pressure: $p_{\text{info}} = k_B T \ln 2 \cdot \frac{\partial I}{\partial V}$

Work per unit time from the informational component:

$$
\dot{W}_{\text{info}} \approx p_{\text{info}} \cdot \dot{V}
$$

For fixed-volume systems, power extraction occurs via boundary forces and electromagnetic stresses rather than bulk volume changes.

### RG Flow for Dissipation Field

$$
\frac{d\eta}{d\ln \mu} = -\eta(1-\eta)\left[\rho^* + \frac{d-2}{2}\ln\varphi \right]
$$

where $\mu$ is the running energy scale, $\rho^* \approx 3.29$, and $d$ is the effective dimension of information flow.

Fixed points: $\eta = 0$ (no dissipation) and $\eta = 1$ (complete dissipation). The conjectured critical threshold:

$$
\eta_c = \frac{1}{\rho^*} \approx 0.304
$$

would separate stable operation from collapse if the universality hypothesis holds.

### Boundary Geometry Functional

The geometric information suppression:

$$
\Delta I_{\text{geo}} = \log_2|\Omega| - \log_2|\Omega'| \geq 0
$$

where $\Omega$ is the unconstrained phase-space volume and $\Omega'$ is the constrained volume after imposing boundary geometry $G = (C, \varphi, p)$.

The informational pressure becomes:

$$
p_{\text{info}}(t) = k_B T(t) \ln 2 \cdot \frac{\partial}{\partial V}\big(I_{\text{nat}}(V,t) - \Delta I_{\text{geo}}(V,G,t)\big)
$$

### Steady-State Conditions

Energy balance:

$$
0 = P_{\text{fusion}} + \dot{W}_{\text{info}} - P_{\text{out}} - P_{\text{maintenance}}
$$

with $P_{\text{maintenance}} = \eta P_{\text{total}}$.

Information balance:

$$
0 = \dot{I}_{\text{nat}} - \dot{I}_{\text{sup}} - \dot{I}_{\text{erase}}
$$

Dissipation control:

$$
\frac{d\eta}{dt} = -\gamma_\eta \eta(1-\eta)\left[\rho^* + \frac{d-2}{2}\ln\varphi \right] - K(\eta - \eta_*)
$$

where $K$ is the feedback gain maintaining $\eta$ near target value $\eta_*$.

### Dimensionless Groups

**Informational Péclet number:**

$$
\Pi_I = \frac{\dot{I} \cdot k_B T}{P_{\text{fusion}}}
$$

**Geometric suppression number:**

$$
\Pi_{\text{geo}} = \frac{\dot{I}_{\text{sup}}}{\dot{I}_{\text{nat}}}
$$

**Dissipation ratio:**

$$
\Pi_\eta = \eta
$$

A quantum fusion engine with strong informational contribution satisfies $\Pi_I \sim \mathcal{O}(1)$ and $\Pi_\eta \lesssim 0.25$.

[^1]: Lopez, C.F., Jeevarajan, J.A., and Mukherjee, P.P. "Experimental Analysis of Thermal Runaway and Propagation in Lithium-Ion Battery Modules." *Journal of The Electrochemical Society* 162, no. 9 (2015): A1905-A1915.

[^2]: Chandrasekhar, S. (1931). The Maximum Mass of Ideal White Dwarfs. *Astrophysical Journal*, 74, 81-82.

[^3]: Hillebrandt, W., & Niemeyer, J. C. (2000). Type Ia Supernova Explosion Models. *Annual Review of Astronomy and Astrophysics*, 38(1), 191-230.

[^4]: Landauer, R. (1961). Irreversibility and Heat Generation in the Computing Process. *IBM Journal of Research and Development*, 5(3), 183-191.

[^5]: Bekenstein, J. D. (1973). Black Holes and Entropy. *Physical Review D*, 7(8), 2333-2346.
