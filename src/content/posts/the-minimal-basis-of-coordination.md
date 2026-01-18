---
title: 'The Minimal Basis of Coordination'
description: "Any persistent distributed system must solve exactly three irreducible problems: signal extraction, boundary stabilization, and overload management. These are independent, jointly sufficient, and minimal—no fourth problem exists."
pubDate: '2026-01-18'
zenodoDepositionId: 18292496
zenodoUrl: "https://zenodo.org/records/18292496"
doi: "10.5281/zenodo.18292496"
keywords:
  - "coordination"
  - "information theory"
  - "distributed systems"
  - "bounded rationality"
  - "constraint geometry"
  - "organizational theory"
  - "sociotechnical systems"
  - "entropy"
  - "signal extraction"
  - "complexity"
zenodoDescription: |
  This paper proves a minimality result for coordination dynamics: any persistent system of finite agents must solve exactly three irreducible problems—signal extraction, boundary stabilization, and overload management. These problems are independent, jointly sufficient, and minimal. No fourth independent coordination problem exists.

  The derivation requires only four assumptions weaker than those in economics or game theory: finiteness (bounded capacity, energy, time), information excess (environment supplies more input than agents can process), time-extended coordination (repeated interaction, not single-shot), and nonstationarity (environment changes over time). These apply equally to neurons, organisms, firms, markets, and civilizations.

  Signal extraction compresses raw input into decision-relevant state representations—mandatory given finite processing capacity and Shannon channel limits. Boundary stabilization hardens repeated interactions into persistent interfaces (roles, protocols, rules)—mandatory to amortize coordination cost over time. Overload management handles regimes where environmental change exceeds design capacity—mandatory to prevent catastrophic rather than graceful failure.

  Apparent alternatives (incentives, culture, power, learning, strategy) are shown to be reducible to one or more of the three. Strategy in particular exists only when overload is sufficiently suppressed; it collapses under entropy swarming rather than constituting a separate problem.

  The technical appendix connects the triad to the constraint–information field formalism: signal extraction corresponds to existence of informative gradients in the information field, boundary stabilization to temporal stability of the constraint field, and entropy swarming to curl dominance when state-dependent feasibility projections induce non-integrable effective dynamics. A lemma proves that feasibility projection generically induces curl with an irreducible geometric floor.

  The result is a basis decomposition of coordination dynamics forced by finiteness, time extension, and nonstationarity—not a behavioral taxonomy but a structural necessity.
---

Every persistent system composed of finite agents—neurons, organisms, teams, firms, markets, civilizations—faces the same structural challenge: coordinate repeatedly over time under informational and energetic constraints. The specific solutions vary enormously. The underlying problems do not.

This note formalizes a result that emerged empirically from analysis of large-scale sociotechnical systems and was later reinforced by constraint-theoretic and information-theoretic considerations. Any such system must solve exactly three irreducible problems: extraction of decision-relevant signal from noise under bandwidth constraints, stabilization of coordination boundaries across time to amortize interaction costs, and management of overload regimes in which neither signal extraction nor boundary stabilization remains effective. These three problems are independent, jointly sufficient, and minimal. No additional independent coordination problem exists once they are accounted for.

Apparent alternatives—incentives, culture, power, learning, strategy—are reducible to one or more of the three. The result is not a taxonomy of behaviors but a basis decomposition of coordination dynamics forced by finiteness, time extension, and nonstationarity.

## Scope and Intent

This analysis does not propose a new sociological typology, organizational framework, or behavioral taxonomy. Its aim is narrower and more structural: to identify the minimal set of independent problems that must be solved by any persistent multi-agent system operating under finite informational and energetic constraints.

The claim is not that all systems solve these problems well, nor that solutions are identical across domains, but that no system can avoid confronting them, and that no fourth independent problem remains once they are accounted for. The argument proceeds as a necessity result rather than an empirical generalization.

## Assumptions

The derivation requires only four assumptions, each weaker than those typically invoked in economics, control theory, or game theory.

Finiteness: agents have bounded computational capacity, bounded energy, and bounded time[^1]. Information excess: the environment supplies more raw input than agents can process exhaustively. Time-extended coordination: agents must coordinate repeatedly over time, not in a single interaction. Nonstationarity: the environment and the agent population change over time.

These assumptions apply equally to neurons, organisms, teams, firms, markets, and infrastructures. They do not require rational expectations, known dynamics, or stable payoff matrices.

## The Three Irreducible Problems

### Signal Extraction from Noise

From finiteness and information excess, raw input exceeds processing capacity. Compression is therefore mandatory. Some inputs must be discarded, filtered, or down-weighted for any state representation to exist.

This follows directly from Shannon's channel capacity[^2] and [Landauer's principle](/the-thermodynamic-computational-speed-limit)[^3]: information processing has irreducible physical cost, and finite systems cannot preserve all distinctions. If signal extraction fails, the system cannot define state or act coherently. This problem is existence-critical.

### Boundary Stabilization Through Repetition

From time-extended coordination, if coordination must occur repeatedly, renegotiating roles, interfaces, and expectations at every interaction incurs superlinear cost. Coordination becomes intractable unless interaction patterns stabilize.

Repeated operations must therefore harden into persistent interfaces—organizational roles, workflows, protocols, institutional rules[^4]. In biological systems this appears as synaptic reinforcement; in organizations as process and role clarity; in markets as standardized instruments and venues. This phenomenon is not cultural but thermodynamic: it is the amortization of coordination cost over time. If boundaries do not stabilize, coordination cost diverges. This problem is scaling-critical.

### Overload and Collapse Regimes

From finiteness, information excess, and nonstationarity, there exist regimes in which environmental change, novelty, or load exceeds the system's design capacity. In such regimes, signal extraction degrades and previously stabilized boundaries weaken or conflict.

[Constraint-theoretic analysis](/the-geometry-of-self-correction) shows that under state-dependent feasibility constraints, effective dynamics generically lose integrability. Curl appears in the correction field; gradient descent no longer exists; cycling, imitation, and local synchronization dominate behavior. Empirically, this manifests as herding, panic, coordination cascades, or what might be called entropy swarming[^5]: behavior becomes more synchronized than it is understood. If such regimes are unmanaged, systems fail catastrophically rather than degrading gracefully. This problem is failure-critical.

## Independence and Completeness

The three problems are independent. Signal extraction concerns state definition. Boundary stabilization concerns coordination memory across time. Overload management concerns behavior under constraint saturation. None can be reduced to another, and failure in any one produces distinct, observable pathologies.

They are also jointly sufficient: once all three are accounted for, no additional irreducible coordination problem remains.

## Elimination of Candidate Fourth Problems

Commonly proposed alternatives are reducible to the triad.

Incentives modify signal salience or reinforce boundaries. Culture caches heuristics for filtering signal and stabilizing boundaries. Power asymmetrically controls boundary enforcement and signal amplification. Learning is the temporal accumulation of boundary stabilization. Adaptation reweights signal and reconfigures boundaries under stress. Resilience is the system's ability to delay or damp entropy swarming. Strategy appears only when overload is sufficiently suppressed to permit extended [simulation horizons](/simulation-horizons-constraints-and-the-emergence-of-strategic-agency); it collapses under entropy swarming rather than constituting a separate problem.

None introduces a new independent axis. All are composites, regimes, or control policies operating within the same three-problem basis.

## Relation to Constraint Geometry

This minimality result aligns with several independent theoretical structures developed elsewhere on this site.

[Constraint geometry](/the-geometry-of-self-correction) explains why overload regimes generically produce cycling rather than convergence when feasibility projections are state-dependent. [Bounded reflexivity](/bounded-reflexivity-and-constraint-theory) formalizes how coordination can exceed interpretability, producing fragility. [Simulation horizon analysis](/simulation-horizons-constraints-and-the-emergence-of-strategic-agency) shows that strategic behavior exists only above a threshold of available slack; below it, systems revert to gradient-following consistent with entropy swarming.

The triad does not compete with these frameworks; it is the coordination-level projection of the same underlying constraints.

## The Result

Any persistent distributed system of finite agents must implement mechanisms for extracting decision-relevant signal from noise, stabilizing coordination boundaries across time, and managing overload regimes in which neither signal extraction nor boundary stabilization remains effective. These three problems are independent and jointly sufficient. No additional independent coordination problem exists.

This is a minimality claim in the same sense as a basis in linear algebra or conserved quantities in physics.

## Implications

The practical implication is diagnostic rather than prescriptive. Every intervention in a sociotechnical system operates by strengthening one of the three dimensions or by trading off among them. Every failure mode corresponds to degradation in one of the three.

The theoretical implication is more general: coordination dynamics across biology, organizations, markets, and civilizations share a common structural basis imposed by information and thermodynamic constraints, not by domain-specific conventions.

## Closing Remark

The result presented here did not originate from abstraction but from empirical compression: a wide variety of observed systems collapsed onto the same minimal set of irreducible coordination problems. Subsequent formal analysis shows that this collapse is not coincidental. It is forced.

What varies across systems is not which problems exist, but how they are solved, deferred, or allowed to fail.

## Technical Appendix: Connection to Constraint–Information Field Dynamics

This appendix makes explicit how the three coordination problems arise directly from the constraint–information field formulation developed in [Bounded Reflexivity & Constraint Theory](/bounded-reflexivity-and-constraint-theory). The goal is not to introduce new structure, but to show that the triad is already implicit in the existing formalism.

### The Field Model

Let system state be $x(t) \in \mathcal{X}$. Collective motion follows the effective force,

$$
F(x,t) = -\alpha \nabla C(x,t) + \beta \nabla I(x,t),
$$

with induced dynamics,

$$
\frac{dx}{dt} = \frac{F(x,t)}{L(x,t)}.
$$

Here $C(x,t)$ is the constraint field, encoding physical, institutional, balance-sheet, capacity, or feasibility limits. $I(x,t)$ is the information field, encoding signal clarity, common knowledge, interpretability, and coordination bandwidth. $L(x,t)$ is liquidity or actuation resistance, scaling response speed.

This structure treats agents not as optimizers over static payoff functions, but as bounded movers on a time-varying feasibility landscape.

### Mapping the Triad to Field Structure

Each of the three coordination problems corresponds to a distinct, unavoidable requirement on this field system.

**Signal extraction corresponds to existence of $\nabla I$.** The information field $I(x,t)$ is not optional. For $\nabla I$ to exist and be well-defined, the system must compress raw observations into a scalar (or low-dimensional) object that meaningfully orders states by interpretability or signal clarity. This is precisely signal extraction from noise.

If signal extraction fails, $I(x,t)$ becomes flat or ill-defined, $\nabla I \approx 0$, motion reduces to pure constraint avoidance $-\nabla C$, and agents lose the ability to distinguish informative from uninformative directions. Signal extraction is therefore the epistemic precondition for nontrivial dynamics. Without it, the field collapses to a purely repulsive constraint geometry.

**Boundary stabilization corresponds to temporal stability of $C(x,t)$.** The constraint field encodes not only hard physical limits, but also institutionalized memory: roles, workflows, mandates, protocols, and rules that persist across time. Boundary stabilization corresponds to the condition that $C(x,t)$ varies slowly relative to agent motion,

$$
\left| \frac{\partial C}{\partial t} \right| \ll \left| \nabla C \cdot \dot{x} \right|.
$$

When this holds, agents can amortize coordination cost by learning the geometry of $C$. Feasible directions remain stable long enough for repeated interaction to harden pathways. If boundary stabilization fails, $C(x,t)$ fluctuates rapidly, feasible directions shift faster than agents can adapt, coordination cost diverges superlinearly, and effective liquidity $L(x,t)$ increases, slowing response.

**Entropy swarming corresponds to frustration spread and curl dominance.** Define the frustration spread,

$$
F_t = \tilde{C}_t - \tilde{N}_t,
$$

where $\tilde{C}_t$ measures degree of behavioral synchronization and $\tilde{N}_t$ measures narrative or interpretive coherence. Entropy swarming corresponds to regimes where $\tilde{C}_t \gg \tilde{N}_t$—agents move together without shared understanding.

Geometrically, these regimes coincide with state-dependent feasibility projections, non-integrable effective dynamics, and emergence of [curl in the correction field](/the-geometry-of-self-correction). Even if $\nabla C$ and $\nabla I$ are individually gradient fields, institutional rules, leverage constraints, saturation, and delays generically induce an implemented field $F_{\text{impl}} \neq \nabla \Phi$ for any scalar potential $\Phi$. The resulting nonzero curl obstructs monotone descent and produces cycling, herding, and cascades.

Entropy swarming is therefore the generic dynamical attractor when constraint pressure accelerates, information gradients degrade, and feasibility projections dominate motion.

### Independence and Minimality in Field Terms

The three problems correspond to independent structural requirements:

| Problem | Field-level requirement | Failure mode |
|---------|------------------------|--------------|
| Signal extraction | Existence of informative $\nabla I$ | Indistinguishable state space |
| Boundary stabilization | Temporal stability of $C(x,t)$ | Coordination cost explosion |
| Entropy swarming | Control of curl / frustration spread | Cycling, cascades, collapse |

No additional independent requirement appears in the field equations. Any proposed fourth factor—incentives, power, culture, strategy—operates by reshaping $I(x,t)$, reshaping $C(x,t)$, altering $L(x,t)$, or modifying regime transitions between gradient-dominated and curl-dominated dynamics. Such factors are control parameters or regime descriptors, not independent structural dimensions.

### Relation to Strategic Regimes and Horizon Collapse

In [Simulation Horizons, Constraints, and the Emergence of Strategic Agency](/simulation-horizons-constraints-and-the-emergence-of-strategic-agency), strategic behavior is shown to require,

$$
\kappa \equiv \frac{\tau_{\text{ctrl}}}{\tau_{\text{env}}} \gtrsim 1,
$$

with sufficient authority to reshape $C(x,t)$. Entropy swarming corresponds to $\kappa \ll 1$: horizons collapse, and motion reduces to local field following. This places strategy inside the triad, not alongside it. Strategy is a regime that exists only when the third problem is sufficiently suppressed.

### Lemma: Feasibility Projection Induces Curl

This lemma establishes that curl is the structural signature of swarming, not a behavioral add-on.

Let $(M,g)$ be a compact, oriented Riemannian manifold with $H^1(M)=0$. Let $\phi \in C^\infty(M)$ define a smooth potential and let the proposal correction field be the gradient flow,

$$
F_0 := -\nabla \phi, \qquad \alpha_0 := F_0^\flat = -d\phi,
$$

so $d\alpha_0 = 0$ (curl-free).

Assume implementation is constrained by a state-dependent feasibility operator $\Pi_x : T_xM \to \mathcal{K}_x$ (projection onto a closed convex admissible set $\mathcal{K}_x \subseteq T_xM$) and define the implemented field,

$$
F(x) := \Pi_x(F_0(x)), \qquad \alpha := F^\flat.
$$

Let the projection defect be $\delta F = F - F_0$ and $\delta\alpha = \alpha - \alpha_0$. Then:

**All curl in the implemented field is induced by the projection defect.**

$$
d\alpha = d(\delta\alpha).
$$

**If $\Pi$ is not globally integrable** (i.e., $\Pi(\nabla\phi)$ is not itself a gradient field for any scalar potential), **then generically $d\alpha \neq 0$.** Equivalently, the implemented correction field has nonzero curl and cannot be written as $-\nabla \psi$ for any $\psi \in C^\infty(M)$.

**The curl-maintenance functional admits a strictly positive lower bound** whenever the defect has persistent magnitude and is not purely divergence-dominated. Define,

$$
\mathcal{M}_{\mathrm{curl}}(F) := \frac{1}{2}\int_M |d\alpha|^2 \, dV_g.
$$

Then,

$$
\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}|d(\delta\alpha)|_{L^2}^2 \geq \frac{1}{2}\Big(\lambda_1|\delta\alpha|_{L^2}^2 - |\delta(\delta\alpha)|_{L^2}^2\Big),
$$

where $\lambda_1 > 0$ is the first positive eigenvalue of the Hodge Laplacian on 1-forms. In particular, if there exists $\kappa > 0$ such that,

$$
|\delta(\delta\alpha)|_{L^2} \leq \sqrt{\lambda_1 - \kappa} \, |\delta\alpha|_{L^2},
$$

then,

$$
\mathcal{M}_{\mathrm{curl}}(F) \geq \frac{\kappa}{2} |\delta\alpha|_{L^2}^2 > 0.
$$

**Interpretation.** In the gradient regime, $d\alpha \approx 0$ and motion is approximately potential-driven; coherent descent dominates. In the entropy swarm regime, feasibility projection is state-dependent and non-integrable, inducing persistent $d\alpha \neq 0$ (curl). Monotone descent is obstructed and cycling, herding, and cascades become generic responses to pressure.

This lemma is the geometric bridge between the regime structure and the claim that entropy swarming is not an extra behavioral category but the structural consequence of constraint-induced non-integrability under overload.

### Summary

The constraint–information field formalism already contains the triad implicitly. Signal extraction is required for $I$ to exist. Boundary stabilization is required for $C$ to be learnable. Entropy swarming is the unavoidable regime when curl dominates the effective field.

The three problems are therefore not an added taxonomy but a minimal decomposition of the field dynamics themselves. They are the only independent ways coordination can succeed, scale, or fail in a system governed by bounded reflexivity and constraint geometry.

[^1]: Simon, H. A. (1955). "A behavioral model of rational choice." *Quarterly Journal of Economics*, 69(1), 99-118.

[^2]: Shannon, C. E. (1948). "A mathematical theory of communication." *Bell System Technical Journal*, 27(3), 379-423.

[^3]: Landauer, R. (1961). "Irreversibility and heat generation in the computing process." *IBM Journal of Research and Development*, 5(3), 183-191.

[^4]: Williamson, O. E. (1979). "Transaction-cost economics: The governance of contractual relations." *Journal of Law and Economics*, 22(2), 233-261.

[^5]: Bikhchandani, S., Hirshleifer, D., & Welch, I. (1992). "A theory of fads, fashion, custom, and cultural change as informational cascades." *Journal of Political Economy*, 100(5), 992-1026.

[^6]: Hodge, W. V. D. (1941). *The Theory and Applications of Harmonic Integrals*. Cambridge University Press.
