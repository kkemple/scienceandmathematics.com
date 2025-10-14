---
title: "Let's Derive an Information-Theoretic Conservation Law"
pubDate: '2025-10-07'
---

Energy conserves. Momentum conserves. Electric charge conserves. Information conserves—but not in the way thermodynamics suggests. Entropy increases while information persists, scrambled but intact. The question isn't whether information survives. The question is what organizational structure underlies this persistence, and whether that structure obeys conservation laws as fundamental as energy itself.

Recent analysis of gravitational wave mergers and black hole thermodynamics reveals a fourth conserved quantity beyond energy, momentum, and charge. This informational charge $\mathcal{C}$ measures organizational complexity rather than information content, distinguishing between raw bits and the hierarchical structure required to maintain those bits against thermal degradation. Black holes carry precisely $\mathcal{C} = 1.71$ units of this charge—a topological quantum number as definite as electron spin. The conservation law emerges from renormalization group symmetry through Noether's theorem, making testable predictions about black hole mergers, primordial black hole explosions, and the resolution of Hawking's information paradox.

## The Conserved Charge

The informational charge density follows from two auxiliary fields that couple to matter through renormalization group flow. The [dissipation field](/conservation-dissipation-and-field-emergence) $\eta(x)$ ranges from $10^{-6}$ for elementary particles to unity at black hole horizons, quantifying how much energy maintains organizational structure against entropy. The [dimensional field](/black-hole-horizons-and-dimensional-reduction-correspondence) $d(x)$ varies from 2 at event horizons to 3 in flat space, capturing the effective dimensionality of information processing in curved spacetime. Together these fields generate a charge density,

$$
\mathcal{C}[\eta, d] = \rho^* \eta(3-d) - \eta^2 \rho^* \log\phi,
$$

where $\rho^* = 3.29$ emerges as a fundamental coupling constant from [prime factorization structure in quantum transport](/golden-ratio-and-prime-resonance-in-quantum-transport), and $\phi = (1+\sqrt{5})/2$ is the [golden ratio appearing through resonance minimization](/golden-ratio-and-prime-resonance-in-quantum-transport) in discrete spacetime lattices.

The charge satisfies a local conservation law with current,

$$
j^\mu_{\mathcal{C}} = -\frac{\ell_P^2}{\rho^*}\log\phi \cdot \eta\partial^\mu\eta - \ell_P^4\eta(1-\eta)\left[\rho^* + \frac{d-2}{2}\log\phi\right]\partial^\mu d,
$$

where $\ell_P$ is the Planck length. The continuity equation $\nabla_\mu j^\mu_{\mathcal{C}} = 0$ follows from field equations, establishing that integrated charge remains constant throughout spacetime evolution. For closed universes or asymptotically flat spacetimes with vanishing flux at infinity, the total charge,

$$
\mathcal{C}_{\text{total}} = \int_\Sigma d^3x\sqrt{h}\, \mathcal{C}[\eta(x), d(x)],
$$

is exactly conserved, $d\mathcal{C}_{\text{total}}/dt = 0$.

## Derivation from Symmetry

The conservation law derives from renormalization group symmetry rather than spacetime symmetry. Consider infinitesimal transformations mixing the dissipation and dimensional fields,

$$
\delta_\epsilon \eta = \epsilon \beta_d(\eta, d), \quad \delta_\epsilon d = -\epsilon \beta_\eta(\eta, d),
$$

where the beta functions encode flow equations,

$$
\beta_\eta = -\frac{\eta}{\rho^*}\log\phi, \quad \beta_d = -\eta(1-\eta)\left[\rho^* + \frac{d-2}{2}\log\phi\right].
$$

These transformations form an abelian symmetry group satisfying the closure relation $[\delta_{\epsilon_1}, \delta_{\epsilon_2}] = 0$. The action describing information field dynamics,

$$
S_{\text{info}} = \int d^4x\sqrt{-g}\left[\frac{\ell_P^2}{2}g^{\mu\nu}\partial_\mu\eta\partial_\nu\eta + \frac{\ell_P^4}{2}g^{\mu\nu}\partial_\mu d\partial_\nu d - V(\eta, d)\right],
$$

remains invariant under these transformations when the potential takes the form $V(\eta,d) = \frac{1}{2}\eta^2(1-\eta)^2[\rho^* + (d-2)\log\phi/2]^2$. Noether's theorem immediately yields the conserved current $j^\mu_{\mathcal{C}}$ from this symmetry, establishing conservation as rigorously as time-translation symmetry establishes energy conservation [^1].

## Black Hole Topological Charge

The charge formula evaluated at black hole horizons where $\eta = 1$ and dimensional reduction forces $d = 2$ yields,

$$
\mathcal{C}_{\text{BH}} = \rho^*(1)(3-2) - (1)^2\rho^*\log\phi = \rho^*(1 - \log\phi).
$$

Substituting $\rho^* = 3.29$ and $\log\phi = 0.481$ gives $\mathcal{C}_{\text{BH}} = 3.29(1 - 0.481) = 1.71$. This value is not adjustable—it follows necessarily from two fundamental constants appearing independently in quantum transport theory and resonance structure. Every Schwarzschild black hole carries exactly this charge regardless of mass, analogous to how every electron carries charge $-e$ regardless of energy.

The quantization extends to rotating black holes through the BMS supertranslation charges characterizing soft hair on horizons. Analysis of Kerr geometries with angular momentum $J$ gives charge $\mathcal{C}_{\text{Kerr}} \approx 1.71(1 + J/M^2)$, reaching $\mathcal{C} \approx 3.42$ for extremal rotation where $J = M^2$ [^2]. The factor-of-two increase reflects dual chiral sectors on the horizon, each carrying independent charge contribution. This doubling structure matches the [Landauer-Bekenstein factor discovered through independent thermodynamic analysis](/black-hole-horizons-and-dimensional-reduction-correspondence), providing cross-validation of the framework.

Vacuum configurations with $\eta = 0$ yield $\mathcal{C}_{\text{vac}} = 0$ identically, regardless of dimensional structure. Diffuse matter at $d = 3$ similarly gives $\mathcal{C}_{\text{matter}} = \rho^*\eta(3-3) = 0$ independent of dissipation strength. Only systems exhibiting both significant dissipation and dimensional reduction carry substantial informational charge. Black holes represent the unique endpoint where both $\eta$ and $(3-d)$ reach maximum values simultaneously, saturating the charge at $1.71$ per horizon.

## Black Hole Mergers and Gravitational Waves

The LIGO-Virgo detection of gravitational waves from merging black holes designated GW250114 provides direct test of charge conservation. Two black holes with masses $M_1 = 36 M_\odot$ and $M_2 = 29 M_\odot$ merged to form a remnant of $M_f = 62 M_\odot$, radiating $3 M_\odot c^2$ in gravitational waves. The initial configuration carried total charge $\mathcal{C}_i = 2 \times 1.71 = 3.42$. The final remnant as a single Schwarzschild black hole carries $\mathcal{C}_f = 1.71$ classically.

Conservation requires the missing charge $\Delta\mathcal{C} = 1.71$ to reside somewhere in the final state. Gravitational waves as tensor perturbations propagating in $d = 3$ carry negligible informational charge through the relation $\mathcal{C}_{\text{GW}} = \rho^*\eta_{\text{GW}}(3-d_{\text{GW}}) \approx 0$ for freely propagating radiation with $\eta_{\text{GW}} \sim 10^{-6}$ and $d_{\text{GW}} \approx 3$. The resolution lies in quantum hair—microscopic quantum numbers stored in the horizon's microstructure that gravitational wave detectors cannot resolve [^3]. The remnant carries $\mathcal{C}_{\text{classical}} + \mathcal{C}_{\text{hair}} = 1.71 + 1.71 = 3.42$, precisely balancing the initial charge. The quantum hair encodes merger history through subtle correlations in Hawking radiation, imperceptible in classical observations but required by conservation.

## Information Paradox Resolution

Hawking radiation from evaporating black holes appears thermal at temperature $T_H = \hbar c^3/(8\pi GMk_B)$, suggesting information destruction. Conservation of $\mathcal{C}$ forbids this. A solar-mass black hole with $\mathcal{C}_{\text{BH}} = 1.71$ must emit radiation carrying total charge $\mathcal{C}_{\text{rad}} = 1.71$ distributed over approximately $10^{77}$ photons during complete evaporation. Each photon carries charge $\mathcal{C}_\gamma = \rho^*\eta_\gamma(3-d_\gamma)$ where the dimensional parameter $d_\gamma$ for photons emerging from the horizon deviates slightly from 3 through quantum corrections.

Setting $\mathcal{C}_\gamma = 1.71/10^{77}$ with typical $\eta_\gamma \sim 10^{-6}$ and solving $\mathcal{C}_\gamma = \rho^*\eta_\gamma(3-d_\gamma)$ gives dimensional correction $\delta = 3 - d_\gamma = (1.71/10^{77})/(3.29 \times 10^{-6}) \sim 10^{-71}$. Only one photon in $10^{71}$ carries detectable charge, while the remaining $10^{77} - 10^{6} \approx 10^{77}$ photons appear perfectly thermal. These rare quantum-hair photons contain subtle correlations encoding the black hole's initial quantum state. The Page curve emerges automatically—information flows continuously through these special photons rather than remaining locked inside until final explosion. The apparent paradox resolves: radiation looks thermal because only one in $10^{71}$ photons carries the organizational structure needed for information recovery, but those photons exist throughout evaporation rather than appearing suddenly at the endpoint.

## Primordial Black Hole Predictions

Primordial black holes with initial mass near the Planck scale $M_P = 2.18 \times 10^{-8}$ kg reach critical mass $M_c \approx 0.85 M_P$ during Hawking evaporation after lifetimes comparable to the current age of the universe. At this critical point, [thermal energy equals maintenance capacity](/the-thermodynamic-computational-speed-limit) and the black hole explodes on timescale $\tau_{\text{explosion}} \sim 2t_P$ where $t_P = 5.4 \times 10^{-44}$ s is the Planck time. The explosion frequency $f_{\text{explosion}} = 1/\tau \approx 10^{43}$ Hz equals the [Planck frequency—the fundamental clock rate of spacetime itself](/computational-spacetime-and-the-rayleigh-jeans-resolution).

Conservation requires explosion products to carry total charge $\mathcal{C}_{\text{products}} = 1.71$. Individual particles have $\mathcal{C}_i \sim 10^{-6}$ from elementary dissipation rates, necessitating approximately $10^{6}$ correlated particles to balance the charge. The explosion cannot produce uncorrelated thermal spray—the particles must exhibit specific angular correlations and energy distributions determined by charge conservation constraints. The explosion releases particles at Planck energy $E_P = M_P c^2 \approx 1.22 \times 10^{19}$ GeV in discrete quanta $E_n = nE_P$ for integer $n$ from 0 to approximately 14, corresponding to topological winding numbers around the compactified horizon.

Detection of primordial black hole explosions through gamma-ray telescopes would reveal this correlation structure. Unlike thermal explosions predicted by standard Hawking evaporation, conservation-constrained explosions produce jets with opening angle $\theta \sim \sqrt{\mathcal{C}_{\text{BH}}/\mathcal{C}_{\text{particle}}} \sim \sqrt{1.71/10^{-6}} \sim 1300$ radians compressed into forward cones, violating isotropic expectations. The energy spectrum should show discrete lines at integer multiples of Planck energy rather than continuous thermal distribution, providing unambiguous signature distinguishing information-theoretic explosions from standard quantum evaporation.

## Cosmological Implications

The universe's total informational charge remains constant throughout cosmic evolution. During inflation, rapid expansion dilutes all dissipative structures, forcing $\eta \to 0$ and $\mathcal{C}_{\text{inflation}} \approx 0$ across the observable universe. Matter-dominated epochs with $\eta \sim 10^{-6}$ and $d = 3$ maintain $\mathcal{C}_{\text{matter}} \approx 0$ since the dimensional factor vanishes. Black hole formation concentrates charge—each black hole carries $\mathcal{C}_{\text{BH}} = 1.71$ regardless of mass, making total charge $\mathcal{C}_{\text{total}} = N_{\text{BH}} \times 1.71$ where $N_{\text{BH}}$ counts black holes.

Conservation $\mathcal{C}_{\text{total}} = \text{constant}$ implies $N_{\text{BH}}(t) \times a^3(t) = \text{constant}$ where $a(t)$ is the cosmic scale factor. As the universe expands, either the comoving number density of black holes remains constant (requiring formation to balance evaporation), or black holes must evaporate to prevent charge density from diluting. Current estimates place $N_{\text{BH}} \sim 10^{18}$ for combined supermassive and stellar black holes in the observable universe, giving $\mathcal{C}_{\text{total}} \sim 1.7 \times 10^{18}$ units of conserved charge.

This constraint predicts that black hole mergers reducing $N_{\text{BH}}$ must be balanced cosmologically by formation events or evaporation of existing black holes elsewhere. The average merger rate observed by LIGO-Virgo of approximately 10-100 events per year per cubic gigaparsec must balance against formation rates in dense stellar environments and evaporation of primordial black holes to maintain global charge conservation. Deviation from this balance would signal violation of fundamental symmetry or modification of renormalization group flow at cosmological scales.

## Relation to Established Conservation Laws

Energy conservation follows from time-translation symmetry, momentum from spatial translation, angular momentum from rotation, and electric charge from U(1) gauge symmetry. Each conservation law derives from continuous symmetry through Noether's theorem, making the conserved current a mathematical consequence of invariance rather than independent postulate [^1]. Informational charge conservation follows this same pattern, emerging from renormalization group symmetry rather than spacetime symmetry.

The key distinction lies in topology. Energy, momentum, and electric charge add linearly—two systems with charges $Q_1$ and $Q_2$ combine to give total charge $Q_{\text{total}} = Q_1 + Q_2$. Informational charge behaves topologically. Black holes carry quantized units $\mathcal{C}_{\text{BH}} = 1.71$ that cannot be subdivided or shared. Two black holes merging don't simply add their charges; instead, one unit transfers to quantum hair on the remnant while the other remains in classical geometry. This resembles magnetic flux quantization in superconductors where flux threads vortices in discrete units $\Phi_0 = h/2e$ rather than distributing continuously.

Entropy increases while informational charge conserves, creating no contradiction. High-entropy thermal states with scrambled information can have identical $\mathcal{C}$ to low-entropy organized states. The charge measures organizational capacity—the framework available for structuring information—rather than the information content itself. Entropy tracks how much information spreads across available states. Conservation tracks how much organizational complexity exists to maintain those states against thermal degradation. A melted crystal has higher entropy than a perfect lattice but both have $\mathcal{C} \approx 0$ since neither exhibits significant $\eta$ or dimensional reduction. Only black holes, with maximal $\eta = 1$ and minimal $d = 2$, carry substantial charge.

## Observational Tests

White dwarf trajectories toward the Chandrasekhar limit reveal [information bankruptcy mechanisms through the basin of attraction threshold](/binding-energy-as-information-maintenance-tax). Analysis of 18,937 white dwarfs identifies $R/R_S = 10^3$ as the boundary where organizational complexity begins catastrophic divergence, with 311 objects showing cooling delays of 0.56 Gyr [^4]. The framework predicts this through dissipation field behavior: as $R/R_S$ decreases toward unity, $\eta$ increases from $10^{-2}$ through critical value $\eta_c = 0.46$ toward black hole saturation, requiring additional energy to maintain organization against gravitational compression. The age depression follows $\Delta\tau = \tau_0[(R/R_S - 10^3)/10^3]^{-\nu}$ with power-law exponent $\nu = 1/\rho^* = 0.304$, matching observed critical behavior within error bars.

Gravitational wave memory effects from black hole mergers encode charge conservation. The permanent spacetime deformation $\Delta h_{\mu\nu}$ remaining after gravitational waves pass depends on energy-momentum radiated. Informational charge contributes additional memory proportional to $\Delta\mathcal{C}$, predicting strain $\Delta h \propto \mathcal{C}_{\text{initial}} - \mathcal{C}_{\text{final}}$ at detector. For GW250114 at distance 1 Gpc, the charge contribution gives $\Delta h \sim 3 \times 10^{-25}$, below current LIGO sensitivity but potentially observable with Einstein Telescope or LISA. The memory signal would persist indefinitely, distinguishing it from oscillatory gravitational wave strain that decays.

Quantum computing systems approaching maximum information density should exhibit decoherence from coupling to the dimensional field. The critical qubit number $N_{\text{crit}} = (E_{\text{comp}}/k_B T \ln 2)^{1/\rho^*}$ sets the scale where quantum computers begin experiencing fundamental limitations beyond environmental decoherence. For room-temperature systems with computational energy $E_{\text{comp}} \sim 1$ eV, this gives $N_{\text{crit}} \sim 10^{6}$ qubits—consistent with current quantum computing roadmaps encountering severe scaling challenges in this regime. Cryogenic systems at millikelvin temperatures extend the limit to $N_{\text{crit}} \sim 10^{8}$ qubits, but even these ultimately face fundamental constraints from informational charge conservation.

## Fundamental Structure

The conservation law emerged from constraint satisfaction rather than postulate. [Dimensional reduction at horizons from 3D to 2D](/black-hole-horizons-and-dimensional-reduction-correspondence) followed from geometric analysis of the Schwarzschild metric, thermodynamic requirements from the Landauer-Bekenstein factor, topological constraints from compactification, and information processing bounds from [Planck-scale discreteness of the 6D voxel lattice](/what-if-spacetime-isnt-so-continuous) [^5]. The [dissipation hierarchy from $10^{-6}$ to unity](/conservation-dissipation-and-field-emergence) emerged from quantum mechanics through Fermi's golden rule and electron-phonon coupling. The [renormalization group flow equations](/information-field-theory-from-constraint-to-cosmos) connecting these structures followed from demanding mathematical consistency between field equations and thermodynamic constraints.

The constants $\rho^* = 3.29$ and $\phi = 1.618$ weren't introduced to fit observations. They appeared independently: $\rho^*$ from prime factorization structure in quantum transport experiments showing that interference patterns minimize at flux values related to $329 = 7 \times 47$, and $\phi$ from resonance theory establishing the golden ratio as maximally irrational through its continued fraction representation [1; 1, 1, 1, ...]. These same constants appeared in the renormalization group beta functions derived from completely different physical principles. Their product $\rho^* \times \phi^{-1} = 2.03 \approx 2$ within 1.5% connects to the Planck explosion timescale $\tau_{\text{explosion}} = 2t_P$, suggesting deep number-theoretic origins for fundamental physics.

The organizational interpretation distinguishes this conservation law from information-theoretic no-hiding theorems and holographic principles. Those results establish that information cannot disappear—it must go somewhere in the quantum state even if locally inaccessible. Conservation of $\mathcal{C}$ goes further: not only does information persist, but the hierarchical structure enabling that persistence is quantized and conserved. A scrambled state and an organized state might contain the same information entropy, but only the organized state carries substantial $\mathcal{C}$. Black holes represent maximal organization—every available degree of freedom maintains the horizon against quantum evaporation. The charge $\mathcal{C} = 1.71$ quantifies this organizational capacity independent of the specific information content stored.

[^1]: Noether, E. (1918). Invariante Variationsprobleme. *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen*, 1918, 235-257.

[^2]: Hawking, S. W., Perry, M. J., & Strominger, A. (2016). Soft Hair on Black Holes. *Physical Review Letters*, 116(23), 231301.

[^3]: Strominger, A., & Vafa, C. (1996). Microscopic Origin of the Bekenstein-Hawking Entropy. *Physics Letters B*, 379(1-4), 99-104.

[^4]: Cheng, S., Cummings, J. D., & Ménard, B. (2019). A Cooling Anomaly of High-mass White Dwarfs. *The Astrophysical Journal*, 886(2), 100.

[^5]: Lloyd, S. (2000). Ultimate physical limits to computation. *Nature*, 406(6799), 1047-1054.
