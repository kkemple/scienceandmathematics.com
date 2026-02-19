---
title: 'Type Ia Supernova Information-Theoretic Energetics'
description: "A thermodynamic lower bound on Type Ia supernova energetics from Landauer's principle applied to phase-space reorganization at the Chandrasekhar limit. Four inputs yield E ≳ 10⁴⁴ J."
pubDate: '2025-09-29'
category: 'supporting'
updatedDate: '2026-01-28'
zenodoDepositionId: 18701915
zenodoUrl: "https://zenodo.org/records/18701915"
doi: "10.5281/zenodo.18701915"
keywords:
  - "Type Ia supernova"
  - "Chandrasekhar limit"
  - "white dwarf"
  - "Landauer principle"
  - "phase space"
  - "information theory"
  - "stellar astrophysics"
  - "thermodynamic bound"
  - "constraint geometry"
zenodoDescription: |
  A compact, order-of-magnitude constraint on Type Ia supernova kinetic energy based on information/entropy accounting. Using a minimal proxy for the amount of coarse-grained state-space reorganization available to Chandrasekhar-mass degenerate matter, we estimate an information scale ΔN_b ≃ N log₂ χ ~ 4.6 × 10⁵⁸ bits for N ≃ M_Ch/m_p and a fiducial density contrast χ ≡ V_WD/V_nuc ~ 10⁸. Applying Landauer's bound, E ≳ k_B T ln 2 per bit, gives a dissipation scale E ≳ 10⁴⁴ J for characteristic explosion temperatures T ~ 10⁹ K.

  This is a bound-style thermodynamic estimate. It does not assert that SNe Ia reach neutron-star densities; the compression proxy χ (with R_nuc ~ 10 km as one illustrative normalization) parameterizes a large state-space contrast. The estimate is not in tension with thermonuclear burning models, which yield similar energies through different accounting. A minimal phenomenology E ~ f ΔN_b k_B T ln 2 with f ∈ (0,1] representing the realized fraction of available reorganization provides a natural framework for Type Ia luminosity diversity.

  The calculation requires four inputs:

  1. Chandrasekhar mass
  2. White dwarf radius
  3. A density-contrast proxy
  4. A characteristic temperature
---

Type Ia supernovae release characteristic kinetic energies of order $10^{44}$ J with sufficient consistency to serve as cosmological standard candles[^1]. In standard models, the energy budget is supplied by thermonuclear burning of C/O material in a white dwarf approaching the Chandrasekhar mass[^2]. A simple information-theoretic estimate — applying Landauer's bound to the state-space reorganization available to Chandrasekhar-mass degenerate matter — independently recovers the same energy scale. The estimate is a thermodynamic budget, a lower bound on irreversible dissipation associated with a large compression/state-space contrast. It makes no claim about explosion mechanism and is not in tension with thermonuclear models.

## Scales and Particle Number

The Chandrasekhar mass is[^3],

$$
M_{\text{Ch}} \simeq 1.4 \, M_{\odot}.
$$

A baryon count sufficient for order-of-magnitude energetics is,

$$
N \simeq \frac{M_{\text{Ch}}}{m_p} \simeq \frac{1.4 \times 1.989 \times 10^{30} \text{ kg}}{1.67 \times 10^{-27} \text{ kg}} \simeq 1.7 \times 10^{57}.
$$

The coarse-grained compression/state-space contrast is parameterized by a single density-volume ratio,

$$
\chi \equiv \frac{V_{\text{WD}}}{V_{\text{nuc}}}.
$$

As one illustrative normalization, taking characteristic length scales $R_{\text{WD}} \sim 5 \times 10^3$ km and $R_{\text{nuc}} \sim 10$ km,

$$
\chi \sim \left(\frac{R_{\text{WD}}}{R_{\text{nuc}}}\right)^3 \sim \left(\frac{5000}{10}\right)^3 \simeq 1.25 \times 10^8.
$$

The quantity $R_{\text{nuc}} \sim 10$ km serves as a fiducial normalization for $\chi$. Normal Type Ia supernovae are thermonuclear disruptions and do not approach neutron-star densities; $\chi$ should be read as a parameter encoding a large state-space contrast, not as a claim about the remnant.

## Information Reorganization

The information content of a degenerate system follows from a coarse-grained count of accessible phase-space cells. For $N$ fermions with characteristic momentum cutoff $p_F$ in volume $V$, the phase-space volume scales as[^4],

$$
\Omega \sim \left(\frac{V p_F^3}{h^3}\right)^N,
$$

so the information content in bits is $N_b \equiv \log_2 \Omega$. The difference between two coarse-grained macrostates is,

$$
\Delta N_b \simeq N \log_2\!\left(\frac{V_1}{V_2}\right) + 3N \log_2\!\left(\frac{p_{F,1}}{p_{F,2}}\right).
$$

For a letter-length, order-of-magnitude estimate we retain only the configuration-space contribution and treat the momentum-space correction as an $\mathcal{O}(1)$ factor,

$$
\Delta N_b \simeq N \log_2 \chi.
$$

Using $\chi \simeq 1.25 \times 10^8$ and $N \simeq 1.7 \times 10^{57}$,

$$
\Delta N_b \simeq (1.7 \times 10^{57}) \log_2(1.25 \times 10^8) \simeq (1.7 \times 10^{57})(26.9) \simeq 4.6 \times 10^{58} \text{ bits}.
$$

The dependence on the density contrast is weak: $\Delta N_b \propto \log_2 \chi$, so even an order-of-magnitude change in $\chi$ shifts $\Delta N_b$ by only $N \log_2 10 \approx 3.3 N$.

## Energetics via Landauer's Bound

Landauer's principle gives a minimum dissipation of $\epsilon(T) = k_B T \ln 2$ per bit at temperature $T$[^5]. Associating the reorganization $\Delta N_b$ with characteristic temperatures $T \sim 10^9$ K during the explosion/shock phase[^6][^7],

$$
E \gtrsim \Delta N_b \, k_B T \ln 2,
$$

$$
\simeq (4.6 \times 10^{58})(1.38 \times 10^{-23} \text{ J K}^{-1})(10^9 \text{ K})(0.693),
$$

$$
\simeq 4.4 \times 10^{44} \text{ J}.
$$

Written to show parameter dependence,

$$
E \gtrsim 4.4 \times 10^{44} \text{ J} \left(\frac{\Delta N_b}{4.6 \times 10^{58}}\right)\left(\frac{T}{10^9 \text{ K}}\right).
$$

The bound depends only logarithmically on the compression proxy $\chi$ but linearly on $T$. For $N \simeq 1.7 \times 10^{57}$ and $\chi \sim 10^7$–$10^9$ (corresponding to $\log_2 \chi \simeq 23$–$30$), and $T \sim 3 \times 10^8$–$3 \times 10^9$ K, the resulting lower bound spans roughly an order of magnitude around $10^{44}$ J. That this bound lands near the observed SN Ia kinetic energy for plausible $(\chi, T)$ is the main observation.

In practice, $T$ should be interpreted as an effective temperature of the degrees of freedom acting as the heat bath for the irreversible dissipation in Landauer's bound — a parameter to be constrained by explosion conditions.

## Relation to Thermonuclear Burning

Thermonuclear burning provides a natural energy source: increasing the binding energy per nucleon by $\sim 0.6$ MeV across $\sim 10^{57}$ nucleons yields,

$$
E_{\text{nuc}} \sim (10^{57})(0.6 \text{ MeV})(1.602 \times 10^{-13} \text{ J MeV}^{-1}) \sim 10^{44} \text{ J}.
$$

The information-theoretic estimate is not in tension with this; it reframes the energy scale in terms of a coarse-grained reorganization budget set by the accessible-state geometry. A minimal phenomenology is $E \sim f \, \Delta N_b \, k_B T \ln 2$ with $f \in (0, 1]$ representing the realized fraction of the available reorganization. Variation in $f$ across different explosion channels — deflagration, detonation, delayed detonation — provides a natural framework for Type Ia luminosity diversity.

## Connection to Constraint Geometry

The [constraint geometry](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) develops the broader framework in which this calculation sits. As white dwarfs accrete toward $M_{\text{Ch}}$, the maintenance fraction $\xi$ increases and the complexity multiplier $(1-\xi)^{-u^*}$ diverges. The white dwarf cooling anomaly at $R/R_S = 10^3$ observed across 7,515 Gaia DR3 objects ($14.5\sigma$, Wilcoxon $p = 4.27 \times 10^{-84}$) marks the structural saturation threshold where this divergence begins. The Landauer bit-counting performed here quantifies the energy cost of the discontinuous organizational jump forced by information bankruptcy — the transition from electron degeneracy ($\xi \sim 0.5$) to neutron degeneracy ($\xi \sim 0.3$), with complexity dropping by a factor of $\sim 200$.

The four observational inputs — Chandrasekhar mass, white dwarf radius, compression proxy, and shock temperature — enter the Landauer calculation. No parameters from the constraint geometry appear in the energy estimate itself. The constraint geometry's role is to predict *when* the transition occurs (at the $(1-\xi)^{-u^*}$ divergence) and *why* (information bankruptcy under triadic tension).

## Discussion

The bound is most transparently written as,

$$
E \gtrsim N \, k_B T \ln 2 \, \log_2 \chi \simeq \Delta N_b \, k_B T \ln 2,
$$

which makes clear that the estimate depends only logarithmically on the compression proxy $\chi$ but linearly on $T$. With four inputs ($M_{\text{Ch}}$, $R_{\text{WD}}$, a density-contrast proxy such as $R_{\text{nuc}}$ or $\chi$, and a characteristic $T$), a simple state-counting model combined with Landauer's bound provides a compact constraint on the SN Ia energy scale. Whether (and in what sense) the explosion dynamics approaches this bound requires a microphysical identification of the relevant dissipative degrees of freedom, which is beyond the scope of this estimate.

[^1]: Maoz, D., Mannucci, F., & Nelemans, G. (2014). Observational Clues to the Progenitors of Type Ia Supernovae. *Annual Review of Astronomy and Astrophysics*, 52, 107-170.

[^2]: Hillebrandt, W., & Niemeyer, J. C. (2000). Type Ia Supernova Explosion Models. *Annual Review of Astronomy and Astrophysics*, 38, 191-230.

[^3]: Chandrasekhar, S. (1931). The Maximum Mass of Ideal White Dwarfs. *Astrophysical Journal*, 74, 81-82.

[^4]: Pathria, R. K., & Beale, P. D. (2011). *Statistical Mechanics* (3rd ed.). Academic Press.

[^5]: Landauer, R. (1961). Irreversibility and Heat Generation in the Computing Process. *IBM Journal of Research and Development*, 5(3), 183-191.

[^6]: Nomoto, K., Thielemann, F.-K., & Yokoi, K. (1984). Accreting White Dwarf Models of Type I Supernovae. *Astrophysical Journal*, 286, 644-658.

[^7]: Seitenzahl, I. R., Ciaraldi-Schoolmann, F., Röpke, F. K., Ruiter, A. J., Pakmor, R., Sim, S. A., Kromer, M., Ohlmann, S. T., Taubenberger, S., Springel, V., & Hillebrandt, W. (2013). Three-dimensional delayed-detonation models with nucleosynthesis for Type Ia supernovae. *Monthly Notices of the Royal Astronomical Society*, 429, 1156-1172.
