---
title: 'Binding Energy, Critical Radii, & Information Maintenance Tax'
description: "Binding energy as thermodynamic maintenance cost via Landauer's principle. White dwarf analysis reveals a phase transition at R/R_S ≈ 10³, and bit-counting predicts Type Ia supernova energy to 4.3 × 10⁴⁴ J."
pubDate: '2025-10-14'
updatedDate: '2026-01-28'
zenodoDepositionId: 18528967
zenodoUrl: "https://zenodo.org/records/18528967"
doi: "10.5281/zenodo.18528967"
keywords:
  - "Landauer principle"
  - "binding energy"
  - "white dwarf"
  - "Chandrasekhar limit"
  - "information theory"
  - "thermodynamics"
  - "Type Ia supernova"
  - "organizational complexity"
  - "critical phenomena"
  - "black hole thermodynamics"
  - "curl"
  - "non-integrability"
  - "constraint geometry"
zenodoDescription: |
  Binding energies across all scales — nuclear, electromagnetic, gravitational — represent ongoing thermodynamic maintenance costs against entropy, following from Landauer's principle (E = k_B T ln 2 per bit). Each fundamental force imposes a characteristic "bankruptcy radius" where maintenance equals total energy: QCD confinement at ~1 fm, electromagnetic at the classical electron radius, and gravitational at the Schwarzschild radius.

  A complexity multiplier M(η,d) = φ^{2^{d-2}} × (1-η)^{-ρ*}, where ρ* = 4πφ²/10 ≈ 3.29 is the coupling constant from constraint geometry, quantifies organizational overhead. White dwarf trajectories toward the Chandrasekhar limit provide empirical test: geometric compression increases by factor 2.2 while organizational complexity explodes by factor 2200, indicating information bankruptcy drives instability.

  Independent analysis of the Montreal White Dwarf Database (5,519 objects) and Gaia DR3 (7,496 objects) identifies R/R_S ≈ 10³ as a discrete phase transition boundary, with anomaly-zone objects appearing systematically older than matched references (+103 Myr at 3.59σ; +58 Myr at 34.6σ). Type Ia supernova energy equals the Landauer cost of reorganizing phase space information from electron to neutron degeneracy — counting bits (ΔN ≈ 4.5 × 10⁵⁸) at shock temperature (T ~ 10⁹ K) gives E = 4.3 × 10⁴⁴ J, matching observed supernova energies.
---

Every atom in your body pays continuous energy to maintain its structure against entropy. Nuclear binding energy, chemical bonds, gravitational self-energy—these represent ongoing thermodynamic costs, an information maintenance tax that all organized systems pay to resist dissolution into thermal chaos.

White dwarfs accreting toward the Chandrasekhar limit reveal the mechanism. Geometric gravitational compression increases by a factor of 2.2 while organizational complexity explodes by a factor of 2200—a 1000-fold disparity suggesting information bankruptcy drives collapse. Independent analysis of two white dwarf catalogs identifies $R/R_S \approx 10^3$ as a discrete phase transition boundary: objects crossing this threshold appear systematically older than mass-and-temperature matched references, with the Montreal sample showing +103 Myr excess aging at 3.59σ significance and Gaia confirming at 34.6σ. The effect concentrates below $R/R_S \approx 1000$ and vanishes above, consistent with sector saturation forcing accelerated entropy production. The correspondence between binding energies and thermodynamic maintenance costs spans 57 orders of magnitude, from elementary particles to black holes.

## The Thermodynamic Tax

[Landauer's principle](/hilberts-sixth-problem-and-the-cost-of-infinite-information) establishes the minimum energy cost for information maintenance against thermal noise—$k_B T \ln 2$ per bit, where $k_B$ is Boltzmann's constant and $T$ is temperature[^1]. Binding energy across all scales represents this ongoing thermodynamic maintenance against entropy. Rather than stored or latent energy that could be released, binding energy quantifies the continuous work required to keep structure coherent. Nuclear binding maintains quark confinement, electromagnetic binding maintains atomic configurations, gravitational binding maintains bulk coherence—each through sustained energy expenditure against thermal randomization.

Any organized system requires bits to specify its configuration. For a bound system with accessible phase space volume $\Omega$, the bit count equals,

$$
N_{\text{bits}} = \log_2\left(\frac{\Omega}{h^{3N}}\right),
$$

where $h$ is Planck's constant and $N$ is particle number. Phase space volume scales with both position and momentum degrees of freedom through virial relationships,

$$
\Omega \sim \left(\frac{MR}{\hbar}\right)^{3N/2},
$$

where $M$ is mass, $R$ is radius, and $\hbar = h/2\pi$.

Thermal and quantum fluctuations constantly randomize configurations, requiring continuous energy expenditure,

$$
E_m = N_{\text{bits}} \times k_B T \ln 2.
$$

This maintenance energy equals binding energy for the dominant force at each scale. For gravitational systems, equating $E_m$ with binding energy $GM^2/R$ and incorporating the Landauer-Bekenstein-Hawking factor of 2 from [dimensional reduction at horizons](/black-hole-horizons-and-dimensional-reduction-correspondence) yields,

$$
\frac{E_m}{Mc^2} = \frac{R_S}{R},
$$

where $R_S = 2GM/c^2$ is the Schwarzschild radius. This creates a complete energy budget partition,

$$
E_m + E_a = Mc^2,
$$

where $E_a = Mc^2(1 - R_S/R)$ represents energy available for work beyond maintenance.

### The Geometric Origin of Maintenance

The thermodynamic tax is not merely an accounting identity—it has a geometric origin. Any organized system enforces feasibility constraints on its dynamics: electron shells confine electrons to quantized orbitals, nuclear binding confines quarks within hadrons, gravitational virial relations confine matter within characteristic radii. These constraints project the system's dynamics onto admissible configurations.

When constraints are state-independent—the same restriction everywhere in phase space—the projected dynamics can still derive from a scalar potential. The system descends toward equilibrium along a well-defined gradient. When constraints vary with state—when the admissible directions depend on where the system currently sits—the projection generically introduces [curl into the effective dynamics](/the-geometry-of-self-correction).

Curl measures irreducible circulation: work that must be continuously supplied because no global potential exists. The curl-maintenance functional,

$$
\mathcal{M}_{\mathrm{curl}} = \frac{1}{2} \int |d\alpha|^2 \, dV,
$$

where $\alpha = F^\flat$ is the 1-form dual to the correction field $F$, quantifies this cost. On compact manifolds with trivial first cohomology, a [spectral lower bound](/the-geometry-of-self-correction) ensures that non-integrable projections carry an irreducible maintenance floor proportional to the projection defect magnitude.

Binding energies are curl-maintenance costs—the thermodynamic price of enforcing non-integrable constraints against entropy. Nuclear binding maintains quark confinement against QCD fluctuations. Electromagnetic binding maintains electron configurations against thermal noise. Gravitational binding maintains bulk coherence against dispersal. Each represents continuous energy expenditure to sustain state-dependent feasibility projections that lack global potentials.

## Force-Specific Bankruptcy Radii

Each fundamental force imposes a characteristic bankruptcy—the scale where maintenance costs equal total energy. For the strong force at the QCD confinement scale,

$$
r_{\text{QCD}} = \frac{\hbar}{\Lambda_{\text{QCD}}} \approx 1 \text{ fm},
$$

where $\Lambda_{\text{QCD}} \approx 200$ MeV sets quark confinement energy. Electromagnetic binding reaches bankruptcy at the classical electron radius,

$$
r_{\text{EM}} = \frac{ke^2}{m_ec^2} \approx 2.8 \times 10^{-15} \text{ m},
$$

where $k$ is Coulomb's constant, $e$ is elementary charge, $m_e$ is electron mass, and $c$ is light speed. Gravitational systems fail at,

$$
r_{\text{grav}} = R_S = \frac{2GM}{c^2}.
$$

The dissipation field $\eta$ quantifies the fraction of a system's energy budget devoted to curvature maintenance (Section 5 of the [monograph](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry)). Observed values cluster near decade-spaced plateaus: elementary particles at $\eta \sim 10^{-6}$, atoms at $\sim 10^{-3}$, molecules at $\sim 10^{-2}$, and biological systems at $\sim 10^{-1}$. These values are order-of-magnitude estimates from the characteristic energy scales at each organizational level — the fine structure constant $\alpha^2 \approx 5 \times 10^{-5}$ sets the electromagnetic coupling scale, Bohr-to-nuclear radius ratios set atomic coordination costs, and conformational entropy sets molecular overhead. The decade spacing itself is a prediction of the RG flow with $C_{10}$ symmetry (Section 4 of the monograph), where each RG period spans one decade in scale.

| Force | $r_{\text{crit}}$ | Typical $r/r_{\text{crit}}$ | Maintenance Cost |
|-------|------------------|----------------------------|------------------|
| QCD | 1 fm | ~100 | ~1% rest mass |
| EM | $2.8 \times 10^{-15}$ m | ~$10^5$ | ~$10^{-5}$ rest mass |
| Grav | $2GM/c^2$ | varies | $R_S/R \times$ rest mass |

QCD and electromagnetic forces operate far from bankruptcy, enabling stable structures with minimal overhead. Gravitational systems span the entire spectrum from negligible costs in atoms to complete dedication at black hole horizons. These bankruptcy radii mark where accumulated curvature has consumed all available capacity—the system has exhausted integrable degrees of freedom, and maintenance cost equals total energy budget. At this threshold, no further organizational complexity can be sustained without catastrophic reorganization.

## Information Bankruptcy Trajectory

White dwarfs accreting mass toward the Chandrasekhar limit $M_{\text{Ch}} = 1.36 M_{\odot}$[^2] provide a natural laboratory for studying information bankruptcy. The complete trajectory reveals that organizational complexity determines collapse.

The complexity multiplier quantifying the overhead beyond baseline requirements follows,

$$
M(\eta,d) = \varphi^{2^{d-2}} \times (1-\eta)^{-\rho^*},
$$

where $\varphi = (1+\sqrt{5})/2$ is the golden ratio and $\rho^* = 4\pi\varphi^2/10 \approx 3.29$ is the coupling constant derived in the [constraint geometry framework](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry). This contains two competing terms. The dimensional factor $\varphi^{2^{d-2}}$ decreases mildly as effective dimension $d$ drops from 3 toward 2, representing reduced interference in lower dimensions. The bankruptcy factor $(1-\eta)^{-\rho^*}$ diverges catastrophically as dissipation coefficient $\eta$ approaches unity.

Numerical integration from stable white dwarfs through collapse yields the trajectory (using constant radius $R \approx 5000$ km from electron degeneracy pressure):

| $M$ $(M_{\odot})$ | $R_S/R$ | $\eta$ | $d$ | $\varphi^{2^{d-2}}$ | $(1-\eta)^{-\rho^*}$ | $M(\eta,d)$ | $\eta \times M$ | Status |
|-------------------|---------|--------|-----|------------------|---------------------|-------------|-----------------|---------|
| 0.60 | $3.6 \times 10^{-4}$ | 0.066 | 2.97 | 2.61 | 1.24 | 3.2 | 0.21 | Stable |
| 1.00 | $6.0 \times 10^{-4}$ | 0.27 | 2.87 | 2.52 | 2.90 | 7.3 | 2.0 | Normal |
| 1.17 | $7.0 \times 10^{-4}$ | 0.46 | 2.78 | 2.42 | 5.66 | 13.7 | 6.3 | **Anomaly** |
| 1.30 | $7.8 \times 10^{-4}$ | 0.63 | 2.70 | 2.35 | 12.4 | 29.1 | 18.3 | Critical |
| 1.35 | $8.0 \times 10^{-4}$ | 0.97 | 2.53 | 2.15 | 229 | 492 | 477 | Collapse |

The trajectory reveals the mechanism. Geometric compression $R_S/R$ increases by a factor of 2.2 from $M = 0.60$ to $1.35 M_{\odot}$ — mild gravitational strengthening. Meanwhile, organizational complexity $\eta \times M$ explodes by a factor of 2200 over the same range. This 1000-fold disparity indicates that information bankruptcy, not gravitational compression alone, drives instability. The dimensional factor $\varphi^{2^{d-2}}$ drops modestly from 2.61 to 2.15 as $d$ flows from 2.97 to 2.53 — barely 20% variation. The bankruptcy factor $(1-\eta)^{-\rho^*}$ generates the explosion: from 1.24 at stable masses to 229 near collapse, a 185-fold increase driven by the same coupling constant $\rho^* \approx 3.29$ that governs the $\beta$-function's RG flow.

### Basin of Attraction Entrance

The observational anomaly at $R/R_S = 10^3$ corresponds to $M \approx 1.17 M_{\odot}$ where $\eta = 0.46$ and $(1-\eta)^{-\rho^*} = 5.66$. This marks the boundary where thermodynamic bankruptcy becomes inevitable rather than merely possible—the entrance to the basin of attraction toward organizational collapse.

Before this threshold, complexity overhead grows slowly—a factor of 3.6 from $M = 0.6$ to $1.17 M_{\odot}$. After crossing $R/R_S = 10^3$, overhead explodes—a factor of 36 from $M = 1.17$ to $1.35 M_{\odot}$. The $(1-\eta)^{-\rho^*}$ value of 5.66 at the anomaly threshold represents the onset of nonlinear divergence. Systems maintain $\eta < 0.5$ through moderate overhead factors. Beyond $\eta \sim 0.5$, divergence accelerates uncontrollably.

Independent analysis of two white dwarf catalogs—the Montreal White Dwarf Database (5,519 objects) and Gaia DR3 (7,496 objects)—reveals that objects in the anomaly zone appear systematically *older* than mass-and-temperature matched references. The Montreal sample shows +103 Myr excess aging (95% CI: 44–253 Myr, p = 0.0025, Z = 3.59σ), while Gaia confirms with +58 Myr (p < 0.0001, Z = 34.6σ). Binned analysis reveals threshold structure: the effect concentrates below R/R_S ≈ 1000, with the strongest signal at R/R_S = 500–700 (+166 Myr) and negligible anomaly above R/R_S = 1100.

The discrete, threshold-like character of the effect—rather than a continuous gradient with mass—suggests a phase transition in constraint geometry. Once a white dwarf crosses into the R/R_S < 1000 regime, it enters a qualitatively different organizational basin characterized by accelerated entropy production and faster evolution through state space. This is consistent with sector saturation in the constraint eigenvalue framework: at R/R_S ≈ 10³, one organizational sector reaches capacity, forcing reconfiguration whose thermodynamic cost manifests as ~100 Myr of accelerated aging.

Independent observational work has recently identified anomalous behavior in ultra-massive white dwarfs concentrated near the same compactness scale. A 2026 analysis of Gaia-selected white dwarfs along the Q branch[^3] reports extended cooling delays localized to this regime, inferred from kinematic clustering and photometric evolution rather than direct age residuals. While interpreted within conventional stellar-evolution frameworks, the discreteness and localization of the effect closely mirror the threshold behavior identified here. The convergence of independent observables — cooling dwell time on the Q branch and apparent age excess relative to matched controls — suggests a structural transition in white dwarf evolution rather than a smooth modification of cooling physics, reinforcing the interpretation of $R/R_S \sim 10^3$ as a physically meaningful regime boundary rather than a model-dependent artifact.

## The Discontinuous Jump to Neutron Degeneracy

White dwarfs do not smoothly flow to the $(\eta=1, d=2)$ black hole fixed point. Instead, information bankruptcy forces a discontinuous organizational jump. At $M \approx M_{\text{Ch}}$, the system reaches $\eta \approx 0.97$, $d \approx 2.5$ with maintenance cost $\eta \times M \approx 477$. This overhead exceeds sustainable levels, triggering catastrophic reorganization—the white dwarf **jumps** to neutron degeneracy at $\eta \sim 0.3$, $d \sim 2.5$ with complexity $\eta \times M \approx 2.3$.

The organizational complexity drops by a factor of 207, requiring massive information restructuring. The energy cost of this reorganization follows from Landauer's principle: counting the bits required to reorganize phase space information from electron to neutron degeneracy ($\Delta N_{\text{bits}} \approx 4.5 \times 10^{58}$) at the shock temperature $T \sim 10^9$ K gives a transition energy of $E_{\text{trans}} = 4.3 \times 10^{44}$ J — matching observed [Type Ia supernova energies](/type-ia-supernova-information-theoretic-energetics)[^4] to within measurement uncertainty. The full derivation, which requires only four observational inputs (Chandrasekhar mass, white dwarf radius, neutron star radius, and shock temperature) and no parameters from the constraint geometry, is developed in the [companion paper](/type-ia-supernova-information-theoretic-energetics). The white dwarf collapses because maintaining organizational complexity at $\eta \approx 0.97$ requires infinite energy through the $(1-\eta)^{-\rho^*}$ divergence.

The $(\eta=1, d=2)$ black hole state requires additional compression beyond neutron star density, achievable only by exceeding the Oppenheimer-Volkoff limit[^5]. White dwarf collapse represents information bankruptcy at electron degeneracy—a different failure mode with lower organizational overhead than neutron star collapse to black holes. This mechanism operates across all scales: ionization at atomic bankruptcy (~100 eV per particle), molecular dissociation at chemical limits (~10 eV per bond), stellar collapse at gravitational thresholds (~$10^{44}$ J for solar masses).

## Information Processing Hierarchy

Black holes occupy the IR fixed point of the $\beta$-function at $(\eta = 1, d = 2)$, where all available energy is dedicated to maintaining horizon structure — maximum entropy as pure curvature maintenance with zero excess capacity[^6]. The [dimensional reduction to $d = 2$](/black-hole-horizons-and-dimensional-reduction-correspondence) at this fixed point is consistent with the holographic scaling of Bekenstein-Hawking entropy with boundary area rather than volume. All other organized systems operate at $\eta < 1$, with residual capacity $(1-\eta)$ available for organizational dynamics beyond pure pattern preservation.

Recent observations of the tidal disruption event AT2020afhd provide an empirical window into this regime[^7]. The system exhibits synchronized X-ray and radio oscillations persisting over many dynamical times, consistent with Lense–Thirring precession driven by black hole spin. Angular momentum information remains coherently encoded in boundary geometry across extended timescales—behavior consistent with the information maintenance saturation expected as $\eta \to 1$. That such coherence emerges naturally in the strong-field limit suggests the dimensional reduction and boundary processing architecture may be generic features of gravitational information storage.

Critical mass phenomena mark bankruptcy thresholds. White dwarfs approaching the Chandrasekhar limit see the dissipation coefficient diverge through the saturating form,

$$
\eta(M) = \frac{\eta_0(1 - M/M_{\text{Ch}})^{-\rho^*}}{1 + \eta_0(1 - M/M_{\text{Ch}})^{-\rho^*}},
$$

with $\eta_0 = 0.01$ and $\rho^* = 3.29$. This prevents unphysical $\eta > 1$ while capturing divergence as $M \to M_{\text{Ch}}$. Combined with the complexity multiplier, this generates the observed 2200-fold increase in organizational overhead over the mass range from stable white dwarfs to collapse. Conversely, black holes face inverted criticality through Hawking evaporation[^6],

$$
T_H = \frac{\hbar c^3}{8\pi G M k_B} \propto \frac{1}{M},
$$

where $T_H$ is Hawking temperature. Below approximately $10^{12}$ kg, rising temperature creates thermal noise overwhelming error correction, triggering runaway evaporation.

## The Deeper Correspondence

Every bound system — from nuclei to galaxies — pays continuous energy to maintain informational coherence, with cost scaling as $E_m = Mc^2 \times (r_{\text{crit}}/r) \times \eta$. Each fundamental force acts as a different collection mechanism for the same underlying tax, with characteristic bankruptcy radii where maintenance equals available energy.

The geometric foundation connects this observation to the [constraint geometry framework](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry). [Curl](/the-geometry-of-self-correction) explains why maintenance is required: state-dependent feasibility projections introduce irreducible circulation that demands continuous energy supply. The coupling constant $\rho^* = 4\pi\varphi^2/10 \approx 3.29$ explains when maintenance overwhelms the system: as $\eta$ approaches the bankruptcy regime, the complexity multiplier $(1-\eta)^{-\rho^*}$ diverges, integrable degrees of freedom are progressively exhausted, and the system must reorganize or collapse. Bankruptcy radii mark where accumulated curvature has consumed all available capacity.

The white dwarf trajectory through the basin of attraction threshold at $R/R_S = 10^3$ confirms the predicted mechanism, and the [Type Ia supernova energy](/type-ia-supernova-information-theoretic-energetics) of $4.3 \times 10^{44}$ J from Landauer bit-counting matches observation. Black holes represent the thermodynamic endpoint where all energy maintains horizon structure — maximum entropy as pure maintenance with zero excess capacity. Critical mass phenomena from Chandrasekhar to Oppenheimer-Volkoff limits[^5] emerge as bankruptcy thresholds where organizational modes become unsustainable.

## Attack Surface

The binding-as-maintenance interpretation rests on two empirical claims and one theoretical identification. If the white dwarf cooling anomaly at $R/R_S \approx 10^3$ is explained by conventional physics — enhanced neutrino cooling, modified equations of state near the Chandrasekhar limit, or systematic biases in progenitor populations — then the sector saturation interpretation loses its primary evidence, though the Landauer energy calculation would remain independent. If the Type Ia supernova energy match ($4.3 \times 10^{44}$ J) is coincidental rather than causal — if the agreement between Landauer bit-counting and observed energies reflects fortuitous cancellation of errors in the four input parameters — then the framework's strongest quantitative prediction dissolves. The theoretical identification of binding energy with curl-maintenance cost depends on the constraint geometry's claim that state-dependent projections introduce irreducible circulation (Theorem 4 of the [self-correction paper](/the-geometry-of-self-correction)); if that theorem's hypotheses fail on the relevant physical manifolds, the geometric foundation weakens. The methodology appendix below details the empirical analysis and its limitations.

## Appendix: White Dwarf Anomaly Methodology

The empirical analysis supporting the $R/R_S \approx 10^3$ threshold draws on two independent white dwarf catalogs[^8] with complementary strengths. The primary dataset comprises 5,519 objects with valid mass, surface gravity, effective temperature, and model-derived cooling ages from the Montreal White Dwarf Database export. The anomaly zone ($R/R_S$ = 800–1500) contains 111 objects with mean mass 1.17 $M_{\odot}$, while the reference population ($R/R_S$ > 3000) contains 5,408 objects with mean mass 0.65 $M_{\odot}$. Montreal ages derive from detailed atmospheric modeling and represent the more reliable age estimates. The secondary dataset comprises 7,496 objects pre-filtered for $R/R_S$ = 500–1500 and $M$ > 1.1 $M_{\odot}$ from Gaia DR3, with ages estimated from effective temperature and mass using a model fitted to Montreal data ($R^2$ = 0.934), introducing approximately 0.14 dex uncertainty. In this catalog, the anomaly zone ($R/R_S$ = 500–1000) contains 1,333 objects and the reference population ($R/R_S$ = 1000–1500) contains 6,163 objects.

For each anomaly-zone object, the analysis identifies 10 nearest neighbors in (mass, log $T_{\text{eff}}$) space from the reference population using KDTree-based matching. The age residual equals the difference between observed age and median age of matched references. Significance testing employs permutation tests (N = 500–2000), bootstrap confidence intervals, and Wilcoxon signed-rank tests.

The Montreal sample shows +103 Myr median age excess (95% CI: 44–253 Myr) with permutation p-value 0.0025 (Z = 3.59σ), while the Gaia sample shows +58 Myr median age excess with permutation p-value < 0.0001 (Z = 34.6σ). Binned analysis of the Gaia data reveals threshold structure: $R/R_S$ = 500–700 shows +166 Myr excess, $R/R_S$ = 700–900 shows +74 Myr, and above $R/R_S$ = 1100 no significant anomaly is detected. The discrete, threshold-like character rather than continuous gradient supports interpretation as a phase transition in constraint geometry.

High-mass white dwarfs may have systematic differences in progenitor populations or formation channels, and the causal mechanism cannot yet be distinguished from alternative explanations such as enhanced neutrino cooling or modified equation of state effects near the Chandrasekhar limit. Future work should compare against detailed MESA evolutionary tracks and extend analysis to the $R/R_S$ < 500 regime to test for secondary transitions.

[^1]: Landauer, R. (1961). Irreversibility and heat generation in the computing process. *IBM Journal of Research and Development*, 5(3), 183-191.

[^2]: Chandrasekhar, S. (1931). The maximum mass of ideal white dwarfs. *Astrophysical Journal*, 74, 81-82.

[^3]: Ould Rouis, L. B., Hermes, J. J., Guidry, J. A., et al. (2026). White Dwarf Merger Remnants with Cooling Delays on the Q Branch Lack Strong Magnetism. *Astrophysical Journal*, submitted. arXiv:2602.02670.

[^4]: Hillebrandt, W., & Niemeyer, J. C. (2000). Type Ia supernova explosion models. *Annual Review of Astronomy and Astrophysics*, 38(1), 191-230.

[^5]: Oppenheimer, J. R., & Volkoff, G. M. (1939). On massive neutron cores. *Physical Review*, 55(4), 374.

[^6]: Hawking, S. W. (1975). Particle creation by black holes. *Communications in Mathematical Physics*, 43(3), 199-220.

[^7]: Pasham, D. R., et al. (2025). Synchronized X-ray and radio variability from the tidal disruption event AT2020afhd consistent with Lense–Thirring precession. *Science Advances*, 11(49), eady9068.

[^8]: Dufour, P., et al. (2017). The Montreal White Dwarf Database. *Proceedings of the 20th European White Dwarf Workshop*, 509, 3. See also Gentile Fusillo, N. P., et al. (2021). A catalogue of white dwarfs in Gaia EDR3. *Monthly Notices of the Royal Astronomical Society*, 508(3), 3877-3896.
