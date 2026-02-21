---
title: 'ADE Domain Walls and Branch Selection'
description: "Domain wall energies between ADE branches are finite, spanning 456×. Gap-set nesting makes E₈ maximal under inclusion. Thermal stability and frozen tunneling make selection primordial and irreversible."
pubDate: '2026-02-18'
zenodoDepositionId: 18724795
zenodoUrl: "https://zenodo.org/records/18724795"
doi: "10.5281/zenodo.18724795"
category: 'core'
order: 4
zenodoDescription: |
  Domain wall energies between the four principal ADE compactification branches—E₈ (binary icosahedral, 2I), E₇ (binary octahedral, 2O), E₆ (binary tetrahedral, 2T), and D₈ (binary dihedral, BD₆)—are computed from the Kaluza–Klein spectral mismatch on their respective orbifolds S³/Γ. All hard wall tensions are finite, bounded by the larger Coxeter number of each pair.

  The gap sets satisfy a strict inclusion hierarchy: gap(E₆) ⊂ gap(E₇) ⊂ gap(E₈) and gap(D₈) ⊂ gap(E₈), making E₈ the unique maximal element under gap-set inclusion. This ordering is purely combinatorial—independent of energetic modeling, KK multiplicities, or wall tension functionals.

  The wall tension hierarchy spans a factor of ~456× from the cheapest wall (E₆↔D₈, T = 73, two mismatched modes) to the most expensive (E₈↔D₈, T = 33,332, twelve mismatched modes). At every E₈ wall, the mismatch is one-directional: the partner branch always has modes that E₈ forbids, but E₈ never has modes the partner forbids.

  Thermal stability analysis at GUT-scale compactification identifies a selection window between ~5×10¹⁵ and ~4×10¹⁶ GeV where cheap walls dissolve while E₈ walls persist. E₈ walls form first and dissolve last.

  The Coleman–De Luccia bounce action for tunneling between branches is R-independent (the compactification radius cancels exactly). All downhill bounce actions satisfy B ≫ 1 (smallest: 1.8×10⁷), freezing out quantum tunneling at any temperature below the compactification scale. Branch selection is primordial and irreversible.

  Five independent arguments converge on E₈: worst-approximable irrational (Hurwitz), largest finite subgroup of SU(2), unique g = h/2 semigroup, most expensive domain walls with last-to-dissolve thermal stability, and frozen tunneling rates.
keywords:
  - "ADE classification"
  - "domain walls"
  - "E8 singularity"
  - "branch selection"
  - "numerical semigroup"
  - "Kaluza-Klein spectrum"
  - "McKay correspondence"
  - "bubble nucleation"
  - "orbifold"
  - "spectral mismatch"
---

The [KK spectrum computation](/kk-spectrum-e8-and-the-lcd-question) established that the Poincaré homology sphere $S^3/\mathrm{2I}$ has the deepest spectral protection gap among ADE orbifolds—56× enhancement of the KK mass gap, 15 forbidden levels, genus $g = h/2$. The ADE classification permits other branches: $E_7$ (binary octahedral), $E_6$ (binary tetrahedral), and the $D$-series (binary dihedral), each with its own orbifold, semigroup, and spectral gap. The question is whether these branches can coexist on the same 6D substrate, and if so, what energy cost the domain walls between them carry. If domain wall energies are infinite, branches are globally exclusive and $E_8$ selection is a boundary condition. If finite, coexistence is possible and the stability hierarchy determines relative populations.

This post computes the spectral mismatch between all pairs of the four principal ADE branches ($E_8$, $E_7$, $E_6$, $D_8$), establishes that all domain wall energies are finite, and shows that $E_8$ selection is a dynamical stability outcome—primordial and irreversible.

## 1. Gap Sets and Structural Ordering

The [semigroup selection rule](/kk-spectrum-e8-and-the-lcd-question#4-the-numerical-semigroup) determines the forbidden KK levels for each branch from the Klein invariant degrees alone. The four gap sets are:

| Branch | $\Gamma$ | Semigroup | Gap set | $\|G\|$ |
|:---|:---|:---|:---|:---:|
| $E_8$ | $\mathrm{2I}$ | $\langle 6, 10, 15 \rangle$ | $\{1,2,3,4,5,7,8,9,11,13,14,17,19,23,29\}$ | 15 |
| $E_7$ | $\mathrm{2O}$ | $\langle 4, 6, 9 \rangle$ | $\{1,2,3,5,7,11\}$ | 6 |
| $E_6$ | $\mathrm{2T}$ | $\langle 3, 4, 6 \rangle$ | $\{1,2,5\}$ | 3 |
| $D_8$ | $\mathrm{BD}_6$ | $\langle 2, 7 \rangle$ | $\{1,3,5\}$ | 3 |

The gap sets satisfy a strict inclusion hierarchy:

$$
\mathrm{gap}(E_6) \subset \mathrm{gap}(E_7) \subset \mathrm{gap}(E_8)
$$

$$
\mathrm{gap}(D_8) \subset \mathrm{gap}(E_7) \subset \mathrm{gap}(E_8)
$$

Verified: $\{1,2,5\} \subset \{1,2,3,5,7,11\} \subset \{1,2,3,4,5,7,8,9,11,13,14,17,19,23,29\}$, and $\{1,3,5\} \subset \{1,2,3,5,7,11\} \subset \{1,2,3,4,5,7,8,9,11,13,14,17,19,23,29\}$. The $E_6$ and $D_8$ gap sets are not nested in either direction: $E_6$ uniquely forbids $l = 2$, $D_8$ uniquely forbids $l = 3$.

$E_8$ is the unique maximal element under gap-set inclusion in the sparse regime ($l \leq 29 = h_{E_8} - 1$). This ordering uses no energetic modeling, no KK multiplicities, and no wall tension functional. The invariant ring structure alone induces it. The $A$-family (binary cyclic groups) has empty gap sets—the halved Klein degrees always include 1, generating all of $\mathbb{Z}_{\geq 0}$—and contributes no structural deletion.

## 2. Spectral Mismatch and Domain Walls

At a domain wall between branches $\Gamma_1$ and $\Gamma_2$, a KK mode at spin $l$ that propagates on one side ($n_l > 0$) but sits in the gap set of the other ($n_l = 0$) becomes evanescent, with decay length $\delta_l = R / \sqrt{4l(l+1)}$. Each evanescent mode contributes boundary energy proportional to its multiplicity times inverse penetration depth:

$$
\varepsilon_l \propto m_l \cdot \sqrt{\lambda_l}
$$

The hard mismatch set $\mathcal{M}$ consists of all spin values that survive on one side but are forbidden on the other. This set is bounded above by $\max(h_1, h_2)$: above both Coxeter numbers, all modes survive on both sides and contribute no hard mismatch. The hard tension sum therefore terminates after finitely many terms. No regularization is required.

| Pair | Modes forbidden only in $\Gamma_1$ | Modes forbidden only in $\Gamma_2$ | Total mismatched |
|:---|:---|:---|:---:|
| $E_8 \leftrightarrow E_7$ | $\varnothing$ | $\{4,8,9,13,14,17,19,23,29\}$ | 9 |
| $E_8 \leftrightarrow E_6$ | $\varnothing$ | $\{3,4,7,8,9,11,13,14,17,19,23,29\}$ | 12 |
| $E_8 \leftrightarrow D_8$ | $\varnothing$ | $\{2,4,7,8,9,11,13,14,17,19,23,29\}$ | 12 |
| $E_7 \leftrightarrow E_6$ | $\varnothing$ | $\{3,7,11\}$ | 3 |
| $E_7 \leftrightarrow D_8$ | $\varnothing$ | $\{2,7,11\}$ | 3 |
| $E_6 \leftrightarrow D_8$ | $\{3\}$ | $\{2\}$ | 2 |

At every $E_8$ wall, the mismatch is entirely one-directional: the column "modes forbidden only in $E_8$" is empty. The partner branch always has modes that $E_8$ forbids; $E_8$ never has modes the partner forbids. This is the set-theoretic consequence of gap-set nesting. The only pair with bidirectional mismatch is $E_6 \leftrightarrow D_8$, where each branch uniquely forbids one mode the other permits.

## 3. Wall Tension Hierarchy

The dimensionless hard wall tension $T_{\mathrm{hard}} = \sum_{l \in \mathcal{M}} m_l \cdot \sqrt{4l(l+1)}$ was computed for each pair. The physical tension is $\sigma_{\mathrm{wall}} = T_{\mathrm{hard}} / R^3$, where $R$ is the compactification radius.

| Wall | $T_{\mathrm{hard}}$ | Mismatched modes | Wall type |
|:---|---:|:---:|:---|
| $E_6 \leftrightarrow D_8$ | 73 | 2 | Phase boundary |
| $E_7 \leftrightarrow D_8$ | 777 | 3 | Phase boundary |
| $E_7 \leftrightarrow E_6$ | 801 | 3 | Symmetry breaking |
| $E_8 \leftrightarrow E_7$ | 14,213 | 9 | Symmetry breaking |
| $E_8 \leftrightarrow E_6$ | 32,587 | 12 | Symmetry breaking |
| $E_8 \leftrightarrow D_8$ | 33,332 | 12 | Phase boundary |

The hierarchy spans a factor of $\sim$456 between cheapest and most expensive. The binary polyhedral groups satisfy the subgroup chain $\mathrm{2T} \subset \mathrm{2O} \subset \mathrm{2I}$, so the $E_8 \to E_7$ and $E_8 \to E_6$ transitions are symmetry-breaking cascades. The $E_8 \to D_8$ transition is not ($\mathrm{BD}_6$ is not a subgroup of $\mathrm{2I}$). The cheapest wall ($E_6 \leftrightarrow D_8$, $T = 73$) involves groups without a subgroup relation. The wall tension is dominated by the number and eigenvalue weight of mismatched modes, not the algebraic relationship between the groups.

The $E_8 \leftrightarrow E_7$ wall is dominated by its highest mismatched mode: $l = 29$ (the Frobenius number of $E_8$) contributes $\sim$49% of the total tension due to its high multiplicity ($n_{29} = 2$ in $E_7$, giving $m_{29} = 118$).

## 4. Thermal Stability and the Selection Epoch

A domain wall is stable against thermal hole nucleation when the wall energy exceeds the available thermal energy at the thermal wavelength: $\sigma_{\mathrm{wall}} > T_{\mathrm{cosmo}}^3$. The critical temperature for each wall is

$$
T_{\mathrm{crit}} = \frac{(T_{\mathrm{hard}})^{1/3}}{R}.
$$

Below $T_{\mathrm{crit}}$, the wall is stable; above it, thermal fluctuations dissolve it. The dissolution ordering preserves the wall tension hierarchy: cheapest walls dissolve first, $E_8$ walls dissolve last.

At GUT-scale compactification ($R = 10^4 \, l_{\mathrm{Pl}}$):

| Epoch | $T$ [GeV] | $\Omega$ ($E_6 \leftrightarrow D_8$) | $\Omega$ ($E_7 \leftrightarrow E_6$) | $\Omega$ ($E_8 \leftrightarrow E_7$) | $\Omega$ ($E_8 \leftrightarrow D_8$) |
|:---|:---:|:---:|:---:|:---:|:---:|
| GUT | $10^{16}$ | 0.13 | 1.46 | 25.9 | 60.7 |
| Electroweak | 159 | $\gg 1$ | $\gg 1$ | $\gg 1$ | $\gg 1$ |

where the stability ratio $\Omega = \sigma_{\mathrm{wall}} / T_{\mathrm{cosmo}}^3$, with $\Omega > 1$ indicating wall stability. At the GUT scale, the cheapest wall ($E_6 \leftrightarrow D_8$) has $\Omega = 0.13$—marginally unstable. The $E_8 \leftrightarrow D_8$ wall has $\Omega = 61$—stable by a factor of 60. A selection window exists between $\sim 5 \times 10^{15}$ and $\sim 4 \times 10^{16}$ GeV where cheap walls dissolve while $E_8$ walls persist.

As the universe cools through the branch selection epoch, walls dissolve in order:

1. $E_6 \leftrightarrow D_8$ dissolves at $T > 5.1 \times 10^{15}$ GeV
2. $E_7 \leftrightarrow D_8$ dissolves at $T > 1.1 \times 10^{16}$ GeV
3. $E_7 \leftrightarrow E_6$ dissolves at $T > 1.1 \times 10^{16}$ GeV
4. $E_8 \leftrightarrow E_7$ dissolves at $T > 3.0 \times 10^{16}$ GeV
5. $E_8 \leftrightarrow E_6$ dissolves at $T > 3.9 \times 10^{16}$ GeV
6. $E_8 \leftrightarrow D_8$ dissolves at $T > 3.9 \times 10^{16}$ GeV

$E_8$ walls form first and are the last to become unstable. $E_8$ is the last branch standing.

## 5. Frozen Tunneling

In the thin-wall approximation, the Euclidean bounce action for tunneling from a false vacuum to a true vacuum separated by a domain wall of tension $\sigma$ with vacuum energy splitting $\varepsilon$ is[^1]

$$
B = \frac{27\pi^2 \sigma^4}{2\varepsilon^3}.
$$

For the ADE branches, $\sigma = T_{\mathrm{hard}} / R^3$ and $\varepsilon = \Delta\mathrm{drive} / R^4$. Substituting:

$$
B = \frac{27\pi^2 \, T_{\mathrm{hard}}^4}{2 \, \Delta\mathrm{drive}^3}.
$$

The $R$ dependence cancels exactly. The bounce action is a pure dimensionless number determined by the spectral data ($T_{\mathrm{hard}}$ and $\Delta\mathrm{drive}$). Selection operates identically at any compactification scale.

Using the spectral drives from [From Lattice Projection to Cosmic Expansion](/from-lattice-projection-to-cosmic-expansion) ($E_8$: 40.7, $E_7$: 19.5, $E_6$: 11.7, $D_8$: 5.8), all downhill transitions are:

| Transition | $T_{\mathrm{hard}}$ | $\Delta\mathrm{drive}$ | $B$ | $\log_{10} B$ |
|:---|---:|---:|---:|:---:|
| $D_8 \to E_6$ | 73 | 5.9 | $1.84 \times 10^7$ | 7.3 |
| $D_8 \to E_7$ | 777 | 13.7 | $1.89 \times 10^{10}$ | 10.3 |
| $E_6 \to E_7$ | 801 | 7.8 | $1.16 \times 10^{11}$ | 11.1 |
| $E_7 \to E_8$ | 14,213 | 21.2 | $5.71 \times 10^{14}$ | 14.8 |
| $D_8 \to E_8$ | 33,332 | 34.9 | $3.87 \times 10^{15}$ | 15.6 |
| $E_6 \to E_8$ | 32,587 | 29.0 | $6.16 \times 10^{15}$ | 15.8 |

Every bounce action satisfies $B \gg 1$. The smallest is $B \approx 1.8 \times 10^7$ ($D_8 \to E_6$). Zero-temperature quantum tunneling between any pair of ADE branches is completely frozen out. $E_8$ has no downhill channels (it is the true vacuum), and all uphill transitions away from $E_8$ have $B > 10^{14}$.

The mechanism: $B \sim T_{\mathrm{hard}}^4 / \Delta\mathrm{drive}^3$. The wall tensions range from 73 to 33,332. The vacuum energy splittings range from 5.9 to 34.9. The fourth power of the wall tension overwhelms the third power of the splitting. The domain walls are much too expensive relative to the vacuum energy gained by conversion.

At finite temperature, the thermal bounce action is $B_{\mathrm{thermal}} = 16\pi \sigma^3 / (3\varepsilon^2 T)$, which does depend on $R$. At GUT-scale compactification and GUT temperature, the cheapest transition ($D_8 \to E_6$) has $B_{\mathrm{thermal}} \approx 23{,}000$. Thermal activation cannot drive transitions either.

Branch selection is primordial. Once a region of the 6D substrate compactifies to a particular $S^3/\Gamma$, it cannot convert to another branch by bubble nucleation—at any temperature below the compactification scale. Selection occurs during the compactification phase transition itself, when $E_8$ has the highest critical temperature, the deepest spectral gap, and the most distributed gap structure. Once formed, the frozen tunneling rates ensure it is irreversible.

## 6. The Five-Leg Argument

Five independent properties converge on $E_8$:

| | Argument | Source | Role |
|:---:|:---|:---|:---|
| 1 | $\varphi$ is the worst-approximable irrational (Hurwitz) | [Constraint geometry](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry), §4 | Why $E_8$ is favored |
| 2 | $\mathrm{2I}$ is the largest finite $\subset \mathrm{SU}(2)$ ($\|\mathrm{2I}\| = 120$) | [KK spectrum](/kk-spectrum-e8-and-the-lcd-question), §1 | Why $E_8$ is favored |
| 3 | $\langle 6, 10, 15 \rangle$ achieves $g = h/2$—maximally distributed gaps | [KK spectrum](/kk-spectrum-e8-and-the-lcd-question), §8 | Why $E_8$ is favored |
| 4 | $E_8$ walls most expensive, dissolve last—thermal attractor | §4 above | When selection occurs |
| 5 | All tunneling rates frozen ($B \gg 1$, $R$-independent) | §5 above | Why it is irreversible |

Legs 1–3 establish why $E_8$ is the spectrally preferred branch. Leg 4 identifies the epoch at which selection occurs. Leg 5 proves the selection is permanent.

## 7. Limitations and Falsifiability

The hard tension model treats each evanescent mode as contributing independently to the wall energy. Interference effects between evanescent modes, and the detailed spatial profile of the domain wall (which depends on the compactification dynamics), could modify the numerical values. The ordering of the hierarchy is controlled by the combinatorics of the mismatch sets and is robust to the details of the tension functional.

The soft mismatch—multiplicity differences between modes that survive on both sides—contributes a formally divergent sum for branch pairs with $|\Gamma_1| \neq |\Gamma_2|$, since the asymptotic multiplicities scale as $(2l+1)^2 / |\Gamma|$. This divergence is a standard UV artifact regularizable via spectral zeta functions[^2]. The hard mismatch (the focus of this computation) is unconditionally finite.

The bounce action computation uses the thin-wall approximation and identifies vacuum energy splittings with spectral drive differences. A more refined treatment would derive $\varepsilon$ from the Casimir energy of each orbifold. The $R$-independence of $B$ is exact within this model.

The compactification radius $R$ remains a free parameter. It sets the physical energy scale but does not affect the hierarchy of wall tensions, the gap-set nesting, or the bounce action ratios.

The $E_6 \leftrightarrow D_8$ wall tension ($T = 73$) is $\sim$456× cheaper than the most expensive $E_8$ wall. These two branches—sharing the same group order ($|\Gamma| = 24$), the same genus ($g = 3$), and the same Frobenius number ($F = 5$)—are near-degenerate and the most likely candidates for local coexistence.

## References

[^1]: Coleman, S. & De Luccia, F. (1980). Gravitational effects on and of vacuum decay. *Physical Review D*, 21(12), 3305–3315.

[^2]: Minakshisundaram, S. & Pleijel, Å. (1949). Some properties of the eigenfunctions of the Laplace-operator on Riemannian manifolds. *Canadian Journal of Mathematics*, 1, 242–256.
