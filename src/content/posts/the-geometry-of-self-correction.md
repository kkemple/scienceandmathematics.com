---
title: 'The Geometry of Self-Correction'
description: "Systems that converge share mathematical structure with systems that cycle—except for one geometric property. The curl of the correction field determines whether feedback produces alignment or oscillation."
pubDate: '2025-01-09'
zenodoDepositionId: 18201294
zenodoUrl: "https://zenodo.org/records/18201294"
doi: "10.5281/zenodo.18201294"
zenodoDescription: |
  This paper develops a coordinate-free geometric framework for understanding when feedback systems converge versus cycle. The central result is a diagnostic criterion: systems with curl-free correction fields exhibit pure convergence, while systems with nonzero curl cycle indefinitely. More precisely, nonzero curl obstructs monotone descent and makes limit cycles generic under perturbation.

  The framework uses the unit sphere as the simplest nontrivial state space, where the alignment distance between a system's current state and its target anchor serves as a natural Lyapunov function. Gradient flow on this manifold guarantees monotonic convergence—but real systems often fail to converge despite well-defined targets. The resolution lies in the correction field's differential structure: when multiple objectives, constraints, or state-dependent rules combine as interacting vector fields rather than weighted sums of scalar potentials, curl emerges and convergence guarantees dissolve.

  Three mechanisms introduce curl: (1) multi-objective interference through state-dependent weighting or thresholds, (2) constraints and saturation creating asymmetric correction, and (3) delays and hysteresis coupling current corrections to past states. The curl diagnostic distinguishes problems solvable by parameter adjustment (zero curl, multiple local minima) from problems requiring structural redesign (nonzero curl, architectural interference).

  Divergence of the correction field provides a complementary diagnostic, measuring local compressive strength—where trajectories concentrate versus disperse. This translates to stability margins in control applications.

  Applications span control systems (FADEC multi-loop engine control), AI alignment (reward hacking as curl emergence), and financial markets (reflexive dynamics introducing curl). The framework connects to constraint theory by showing that agents following constraint gradients reach equilibrium when the combined field is curl-free, but cycle when institutional rules create non-conservative correction pressures.

  The contribution is a unified geometric language that reveals why some feedback architectures converge while others cycle, independent of domain—and why complexity itself tends to generate cycling. The curl diagnostic is coordinate-free, computable, and decisive.
keywords:
  - "cybernetics"
  - "gradient flow"
  - "Lyapunov functions"
  - "alignment"
  - "feedback systems"
  - "control theory"
  - "self-correction"
  - "divergence"
  - "curl"
  - "manifolds"
  - "coordination"
  - "convergence"
---

## Abstract

Feedback systems that successfully self-correct share a common mathematical structure—their correction dynamics follow the gradient of a scalar potential on the space of possible states. This paper develops the geometry of such systems using coordinate-free methods on the unit sphere, where the alignment distance between a system's current state and its target anchor serves as a natural Lyapunov function. The central result is a diagnostic criterion: systems with curl-free correction fields exhibit pure convergence, while systems with nonzero curl cycle indefinitely. More precisely, nonzero curl obstructs monotone descent and makes limit cycles generic under perturbation. Divergence of the correction field measures local compressive strength—where trajectories concentrate versus disperse. These tools apply wherever feedback operates—control systems, markets, and artificial agents. The framework connects to constraint theory by identifying when agents following constraint gradients will reach equilibrium versus oscillate around it.

## Introduction

A thermostat and a high-bypass turbofan engine solve the same problem: temperature regulation. The mechanism is isomorphic—measure deviation from target, apply corrective force. What differs is scale and complexity. The thermostat flips a switch. The turbofan coordinates fuel flow, compressor discharge pressure, variable stator geometry, altitude compensation, and thermal load management across interdependent subsystems. Both regulate temperature. The thermostat converges reliably. The turbofan, under certain flight regimes, can oscillate between correction modes.

The difference in their behavior is geometric.

The mathematics of self-correction has been understood in pieces for over a century. Lyapunov showed that certain scalar functions guarantee stability when they decrease along trajectories[^1]. Ashby's cybernetics formalized feedback as requisite variety—a system's capacity to match environmental perturbations[^2]. Control theory developed transfer functions and stability criteria. What has been missing is a unified geometric language that reveals why some feedback architectures converge while others cycle, independent of the specific domain—and why complexity itself tends to generate cycling.

The key insight is that correction fields—the vector fields describing how systems respond to deviation—can be classified by their differential structure. A correction field that derives from a scalar potential (the gradient of some function) has zero curl and produces pure convergence. A correction field assembled from multiple objectives, constraints, or state-dependent rules generically has nonzero curl and produces cycling. This classification is coordinate-free: it depends only on the intrinsic geometry of the state space, not on how we choose to describe it.

This paper develops these ideas on the simplest nontrivial state space—the unit sphere of directions—where the mathematics is tractable and the intuitions are clear. The results generalize to arbitrary Riemannian manifolds, but the sphere captures the essential structure: a curved space where gradient flow exhibits global properties invisible in flat Euclidean settings.

## The Alignment Distance

Before analyzing dynamics, we need a measure of how far a system has drifted from its target. The alignment distance provides this measure in a form that depends only on the angle between state and anchor, not on any choice of coordinates.

Consider an inner-product space $(V, \langle \cdot, \cdot \rangle)$—for concreteness, $\mathbb{R}^n$ with the standard dot product. Let $x \in V \setminus \{0\}$ denote the system's current state and $a \in V \setminus \{0\}$ denote the anchor or target. We care about direction, not magnitude, so normalize both to the unit sphere,

$$
s = \frac{x}{\|x\|}, \qquad \hat{a} = \frac{a}{\|a\|}, \qquad s, \hat{a} \in \mathbb{S}^{n-1}.
$$

The alignment distance between state and anchor is then,

$$
d(s, \hat{a}) = 1 - \langle s, \hat{a} \rangle.
$$

This quantity equals zero when $s = \hat{a}$ (perfect alignment) and approaches 2 when $s = -\hat{a}$ (perfect anti-alignment). The intermediate value $d = 1$ corresponds to orthogonality—the state is neither aligned nor opposed to the anchor.

The alignment distance is coordinate-free in the precise sense that it depends only on the inner product structure, not on the choice of basis. Rotate or reflect the coordinate system arbitrarily; the distance between any two directions remains unchanged. This invariance matters because it ensures the measure captures genuine geometric structure rather than artifacts of representation.

For the dynamics that follow, we treat the alignment distance as a potential function on the sphere,

$$
V(s) \equiv d(s, \hat{a}) = 1 - \langle s, \hat{a} \rangle.
$$

The gradient of this potential will define the correction field, and its properties will determine whether the system converges or cycles.

## Gradient Flow on the Sphere

On a curved manifold like the sphere, the gradient of a function lives in the tangent space at each point. The tangent space to $\mathbb{S}^{n-1}$ at a point $s$ consists of all vectors orthogonal to $s$,

$$
T_s \mathbb{S}^{n-1} = \{ v \in V : \langle v, s \rangle = 0 \}.
$$

The differential of the alignment potential $V$ acts on tangent vectors as $dV_s(v) = -\langle v, \hat{a} \rangle$. The intrinsic gradient $\nabla_{\mathbb{S}} V(s)$ is the unique tangent vector satisfying,

$$
dV_s(v) = \langle \nabla_{\mathbb{S}} V(s), v \rangle \quad \text{for all } v \in T_s \mathbb{S}^{n-1}.
$$

Computing this gradient requires projecting $-\hat{a}$ onto the tangent space at $s$. The projection removes the component parallel to $s$, leaving,

$$
\nabla_{\mathbb{S}} V(s) = -\left( \hat{a} - \langle \hat{a}, s \rangle s \right).
$$

The bracketed term is the tangent component of the anchor direction. It vanishes only when $s$ is parallel or anti-parallel to $\hat{a}$—the two equilibria of the system.

Pure convergence corresponds to following the negative gradient. Define the dynamics,

$$
\dot{s} = -k \nabla_{\mathbb{S}} V(s) = k \left( \hat{a} - \langle \hat{a}, s \rangle s \right), \qquad k > 0.
$$

This flow has three properties that characterize self-correcting systems.

The trajectory remains on the sphere. Differentiating $\|s\|^2$ along the flow yields,

$$
\frac{d}{dt} \|s\|^2 = 2 \langle s, \dot{s} \rangle = 2k \left( \langle s, \hat{a} \rangle - \langle \hat{a}, s \rangle \|s\|^2 \right) = 0.
$$

The constraint is preserved automatically—no projection or normalization step is required.

The alignment distance decreases monotonically. Computing the time derivative of $V$ along trajectories,

$$
\dot{V} = \langle \nabla_{\mathbb{S}} V(s), \dot{s} \rangle = -k \| \nabla_{\mathbb{S}} V(s) \|^2 = -k \left( 1 - \langle \hat{a}, s \rangle^2 \right) \leq 0.
$$

The inequality is strict except at equilibria. This makes $V$ a Lyapunov function: it provides a certificate that the system approaches its target.

The equilibria are exactly $s = \hat{a}$ (aligned) and $s = -\hat{a}$ (anti-aligned). At these points, the gradient vanishes and $\dot{V} = 0$. Everywhere else, the system moves toward lower $V$.

The alignment distance thus serves as a Lyapunov potential guaranteeing convergence in the strict sense: the system descends monotonically toward the anchor.

## The Curl Diagnostic

This guarantee may appear too strong. Real systems often fail to converge despite having well-defined targets. The resolution lies in the assumption that the correction field is a pure gradient. When that assumption fails—when the correction field has nonzero curl—the guarantees dissolve.

The gradient flow derived above is curl-free by construction. In Euclidean space, a vector field $F$ that equals the gradient of some potential $\Phi$ satisfies,

$$
F(x) = -\nabla \Phi(x) \quad \Rightarrow \quad \nabla \times F = 0.
$$

The curl measures the local circulation of the field—how much it twists around a point. A gradient field has no circulation; it flows straight downhill.

On the sphere, the analogous statement involves the exterior derivative. The intrinsic correction field $-\nabla_{\mathbb{S}} V$ is a gradient field on the Riemannian manifold, so it has no intrinsic circulation. Any apparent curl observed when embedding the sphere in ambient $\mathbb{R}^n$ is an artifact of the embedding, not a property of the dynamics.

The curl diagnostic becomes powerful when we consider correction fields that are not pure gradients. In practice, systems often combine multiple objectives. A turbofan engine simultaneously regulates turbine inlet temperature, compressor surge margin, and thrust output—three objectives with interdependent correction pathways. An AI system may balance reward signals with safety constraints. A portfolio may target returns while managing risk and liquidity.

If these objectives combine as a weighted sum of scalar potentials,

$$
\Phi = \sum_i \alpha_i \Phi_i,
$$

then the resulting correction field remains a gradient (of $\Phi$) and stays curl-free. Convergence is preserved.

If instead the objectives combine as vector fields with projections, saturations, delays, thresholds, or state-dependent gating, the resulting correction field generically satisfies,

$$
F \neq -\nabla \Phi \quad \text{for any } \Phi,
$$

and then $\nabla \times F \neq 0$. The system can orbit, churn, or cycle rather than descend monotonically.

This is the geometric signature of multi-objective interference. When a system cycles rather than converges, the curl diagnostic tells you the problem is structural: the correction field does not derive from any consistent scalar objective. Parameter tuning cannot fix this. The architecture itself prevents convergence.

## Divergence as Compressive Strength

While curl measures circulation, divergence measures local volume change. In gradient flow, the divergence of the correction field indicates where trajectories compress together (approaching an attractor) versus spread apart (leaving a repeller).

For Euclidean gradient flow with $F = -\nabla \Phi$, the divergence equals the negative Laplacian of the potential,

$$
\nabla \cdot F = -\Delta \Phi.
$$

Negative divergence indicates locally contracting flow—trajectories converge. Positive divergence indicates locally expanding flow—trajectories separate.

On the sphere, the intrinsic divergence involves the Laplace-Beltrami operator $\Delta_{\mathbb{S}}$. For the alignment potential $V(s) = 1 - \langle s, \hat{a} \rangle$, the divergence of the correction field can be computed explicitly.

The key fact is that the restriction of any linear function to the unit sphere is a degree-1 spherical harmonic, hence an eigenfunction of the Laplace-Beltrami operator with eigenvalue $-(n-1)$[^3],

$$
\Delta_{\mathbb{S}} \langle s, \hat{a} \rangle = -(n-1) \langle s, \hat{a} \rangle.
$$

Since $\Delta_{\mathbb{S}}(1) = 0$, we have,

$$
\Delta_{\mathbb{S}} V(s) = \Delta_{\mathbb{S}} \left( 1 - \langle s, \hat{a} \rangle \right) = (n-1) \langle s, \hat{a} \rangle.
$$

The intrinsic divergence of the correction field $F(s) = -k \nabla_{\mathbb{S}} V(s)$ is therefore,

$$
\operatorname{div}_{\mathbb{S}} F(s) = -k \Delta_{\mathbb{S}} V(s) = -k(n-1) \langle s, \hat{a} \rangle.
$$

Writing $\langle s, \hat{a} \rangle = \cos \theta$ where $\theta$ is the angular misalignment,

$$
\operatorname{div}_{\mathbb{S}} F(\theta) = -k(n-1) \cos \theta.
$$

This formula provides a literal compressive-strength map over the sphere of possible states. In the hemisphere facing the anchor ($\cos \theta > 0$), divergence is negative and the flow compresses trajectories toward the attractor. At the equator orthogonal to the anchor ($\cos \theta = 0$), divergence vanishes and the flow neither expands nor contracts locally. In the opposite hemisphere ($\cos \theta < 0$), divergence is positive and the flow expands, pushing trajectories away from the repelling equilibrium.

The compression scales with dimension $n$ and gain $k$. Higher-dimensional state spaces exhibit stronger compression near the attractor—more directions contribute to the convergence.

Divergence identifies which regions of state space act as attractors and how strongly. In control applications, this translates to stability margins: a system operating in a high-compression region (large negative divergence) damps perturbations quickly, while a system near the equator ($\cos \theta \approx 0$) responds sluggishly. The turbofan's FADEC maintains operating points in high-compression regions of the thermal state space—not because engineers computed divergence explicitly, but because trial and error converges on the same geometric fact.

## When Curl Emerges

Pure gradient flow guarantees convergence, but the gradient structure is fragile. Several common architectural features introduce nonzero curl, breaking the convergence guarantee.

### Multi-Objective Interference

When objectives cannot be reduced to a single scalar, the correction field becomes a sum of vectors rather than the gradient of a sum of scalars. Consider two anchors $\hat{a}_1$ and $\hat{a}_2$ with associated potentials $V_1(s) = 1 - \langle s, \hat{a}_1 \rangle$ and $V_2(s) = 1 - \langle s, \hat{a}_2 \rangle$. If the correction field is,

$$
F(s) = -k_1 \nabla_{\mathbb{S}} V_1(s) - k_2 \nabla_{\mathbb{S}} V_2(s),
$$

then $F$ remains curl-free—it is the gradient of $k_1 V_1 + k_2 V_2$.

If instead the objectives interact through state-dependent weighting, thresholds, or projections—for instance, "pursue $\hat{a}_1$ when close to $\hat{a}_2$, otherwise pursue $\hat{a}_2$"—the combined field generically has nonzero curl. The system can cycle between the objectives without reaching either.

### Constraints and Saturation

Physical systems face constraints: actuators have maximum force, budgets have limits, attention has bandwidth. When correction signals saturate, the mapping from desired correction to actual correction becomes nonlinear. If the saturation function is not the gradient of some potential, curl appears.

A thermostat with symmetric heating and cooling converges. A thermostat that heats faster than it cools can cycle around the setpoint if the asymmetry is large enough. The asymmetry introduces curl into the correction field.

### Delays and Hysteresis

Feedback systems with significant delays can develop oscillations even when the instantaneous correction field is curl-free. Mathematically, delays introduce additional state variables—the system's history becomes part of its state. The dynamics in this enlarged state space may remain curl-free. However, when projected back to the reduced space of instantaneous variables, the coupling between current corrections and past states manifests as curl. The system circles because it responds to where it was rather than where it is.

Hysteresis produces similar effects. A system that activates correction at one threshold but deactivates at another exhibits path-dependent behavior. The correction field is not single-valued; it depends on history. This history-dependence can manifest as cycling.

### Diagnostic Application

The curl diagnostic provides actionable information. If a feedback system cycles rather than converges, measuring or estimating the curl of its correction field localizes the problem.

Zero curl everywhere: the potential exists but has multiple local minima, or the gain is insufficient, or external perturbations dominate. These are parameter problems.

Nonzero curl in specific regions: the architecture introduces circulation in those regions. The fix requires structural change—simplifying objectives, removing state-dependent gating, or redesigning the feedback pathway—not parameter adjustment.

This distinction matters because parameter optimization cannot eliminate architectural curl. Turbofans that oscillate between correction modes, AI systems that exhibit reward hacking, markets that oscillate around equilibrium values—all may have correction fields with intrinsic curl that no amount of tuning can remove. The following sections examine each domain.

### Control Systems

Classical control theory developed stability criteria for linear time-invariant systems: Nyquist plots[^4], Bode margins[^5], root locus methods[^6]. These tools implicitly analyze whether the closed-loop system has a Lyapunov function—whether the correction field is effectively curl-free.

Nonlinear control extends these ideas through Lyapunov's direct method, which seeks scalar functions that decrease along trajectories[^7]. The gradient-flow perspective reveals why this works: a decreasing Lyapunov function certifies that the correction field derives from a potential, guaranteeing convergence without solving the dynamics explicitly.

The curl diagnostic adds predictive power. If a control system exhibits limit cycles or oscillations, the correction field has nonzero curl. This directs attention toward the source of circulation—often saturation, backlash, or mode-switching—rather than toward gain adjustment.

Return to the turbofan. Its Full Authority Digital Engine Control (FADEC) manages fuel flow, variable stator vanes, bleed valves, and afterburner sequencing[^8]. Each subsystem has its own correction loop. When the aircraft transitions between flight regimes—say, from cruise to rapid descent—the correction loops can interfere. The fuel controller reduces flow to lower temperature; the compressor controller opens bleed valves to prevent surge; the bleed valve opening reduces pressure, triggering the fuel controller to compensate. Under certain conditions, these interactions create circulation in the combined correction field. The engine can oscillate between correction modes—a known failure mode in switched/gain-scheduled control systems that requires careful bumpless transfer design to prevent[^9]. Engine designers spend considerable effort ensuring the combined FADEC architecture remains curl-free across the operating envelope—a geometric constraint on multi-loop control design.

### AI Alignment

The term "alignment" in artificial intelligence is not merely metaphorical. An AI system has an implicit or explicit objective; the alignment distance measures how far its behavior diverges from intended behavior. Gradient descent on the loss function is literal gradient flow—the system moves along $-\nabla L$ where $L$ is the loss.

Reward hacking and specification gaming represent curl emergence[^10]. When an agent finds ways to increase measured reward that decrease intended performance, the actual correction field (driven by measured reward) diverges from the intended correction field (what the designer wanted). The system cycles through exploits rather than converging to aligned behavior.

The curl diagnostic suggests a design principle: alignment architectures should ensure the correction field—whatever signals actually drive learning—derives from a scalar potential consistent with intended behavior. This is precisely the problem of reward modeling and value learning framed geometrically.

### Markets

Financial markets exhibit both convergent and oscillatory dynamics. Arbitrage mechanisms push prices toward efficient levels—a convergent process when arbitrageurs have sufficient capital and information. Reflexive dynamics[^11], where price movements influence the fundamentals that prices are supposed to reflect, can introduce curl.

The [bounded reflexivity framework](/bounded-reflexivity-and-constraint-theory) describes agents moving along constraint and information gradients. When these gradients derive from consistent scalar fields (constraint pressure, information clarity), markets converge to equilibria. When institutional mandates, leverage constraints, and coordination dynamics interact, the combined correction field can develop curl, producing oscillations around rather than convergence to equilibrium values.

Constraint geometry shapes the curl structure. Markets operating within simple constraint architectures—single asset classes with uniform participants—tend toward convergence. Markets with complex, interacting constraints—derivatives, leverage, heterogeneous mandates—exhibit more cycling.

## Connection to Constraint Theory

The gradient-flow formalism provides mathematical foundations for constraint theory's behavioral predictions. In the [bounded reflexivity framework](/bounded-reflexivity-and-constraint-theory), agents respond to constraint pressure and information gradients according to,

$$
F(x,t) = -\alpha \nabla C(x,t) + \beta \nabla I(x,t),
$$

where $C$ is the constraint field and $I$ is the information field. This is a weighted sum of gradients—hence curl-free if $C$ and $I$ are smooth scalar fields.

The curl-free property explains why the framework predicts convergence to equilibria determined by constraint geometry. Agents flow toward regions of low constraint pressure and high information clarity. The flow compresses trajectories in regions where both gradients point in the same direction; it expands trajectories where they oppose.

When does curl enter? When the constraint and information fields are not independent scalars but interact through institutional rules, leverage dynamics, or coordination requirements. A bank facing multiple binding constraints (capital ratios, liquidity requirements, stress test limits) may experience correction pressures that do not derive from any single scalar objective. The resulting dynamics can cycle through constraint regimes rather than settling at a consistent equilibrium.

The [simulation horizons framework](/simulation-horizons-constraints-and-the-emergence-of-strategic-agency) distinguishes agents that play games from agents that follow gradients. When simulation capacity permits game-theoretic reasoning, agents may deviate from gradient flow to exploit strategic considerations. When simulation horizons collapse—under time pressure, cognitive load, or environmental complexity—agents revert to gradient following.

The geometry of self-correction applies to the gradient-following regime. The curl diagnostic predicts which environments produce convergent gradient-following (curl-free constraint landscapes) versus oscillatory gradient-following (curl-generating constraint interactions). Strategic agents can exploit this distinction, positioning for convergence when the environment permits and anticipating oscillation when it does not.

## Why This Matters

The mathematics of self-correction may appear abstract, but its implications are concrete.

### For System Design

A system intended to self-correct—a control loop, an organization, an incentive structure—will succeed only if its correction field derives from a consistent scalar objective. Multi-objective optimization, constraint interactions, and state-dependent rules all risk introducing curl.

The design principle is conservative: prefer architectures that provably maintain curl-free correction fields over architectures that seem to balance multiple objectives but may generate cycling. When multiple objectives are genuinely necessary, combine them as weighted sums of scalar potentials rather than as interacting vector corrections.

### For Diagnosis

When a system cycles rather than converges, the curl diagnostic localizes the problem. Compute or estimate the correction field from observed behavior. Test for curl—local circulation patterns. If curl is present, identify its source: which objectives conflict, which constraints interact, which state-dependent rules create circulation.

This diagnostic is more precise than "the system is unstable" or "incentives are misaligned." It points to specific architectural features generating the cycling and distinguishes problems solvable by parameter adjustment from problems requiring structural redesign.

### For Prediction

Systems with curl-free correction fields will converge; systems with nonzero curl will cycle. This prediction holds across domains—thermostats and turbofans, AI systems and markets. Knowing the curl structure of a system's correction architecture allows prediction of its long-run behavior without simulating the detailed dynamics.

In markets, constraint architectures that generate curl produce oscillations exploitable by agents who recognize the pattern. In organizations, correction processes with intrinsic curl produce predictable cycling that can be anticipated and planned around even if it cannot be eliminated.

The geometry of self-correction transforms informal intuitions about feedback and stability into precise, measurable structure. Systems that converge share mathematical form with systems that cycle—except for one property. That property is coordinate-free, computable, and decisive.

---

## Technical Appendix

For readers interested in the complete derivations, this appendix provides the formal details.

### Intrinsic Gradient Derivation

On $\mathbb{S}^{n-1} \subset \mathbb{R}^n$, the tangent space at $s$ is $T_s \mathbb{S}^{n-1} = \{ v \in \mathbb{R}^n : \langle v, s \rangle = 0 \}$. For $V(s) = 1 - \langle s, \hat{a} \rangle$, the differential is,

$$
dV_s(v) = -\langle v, \hat{a} \rangle.
$$

The Riemannian gradient satisfies $dV_s(v) = \langle \nabla_{\mathbb{S}} V(s), v \rangle$ for all tangent vectors $v$. Since $-\hat{a}$ may not lie in $T_s \mathbb{S}^{n-1}$, we project,

$$
\nabla_{\mathbb{S}} V(s) = -\hat{a} + \langle \hat{a}, s \rangle s = -(\hat{a} - \langle \hat{a}, s \rangle s).
$$

Verification: for $v \in T_s \mathbb{S}^{n-1}$,

$$
\langle \nabla_{\mathbb{S}} V(s), v \rangle = -\langle \hat{a}, v \rangle + \langle \hat{a}, s \rangle \langle s, v \rangle = -\langle \hat{a}, v \rangle = dV_s(v),
$$

using $\langle s, v \rangle = 0$.

### Lyapunov Verification

For the flow $\dot{s} = k(\hat{a} - \langle \hat{a}, s \rangle s)$,

$$
\dot{V} = \frac{d}{dt}(1 - \langle s, \hat{a} \rangle) = -\langle \dot{s}, \hat{a} \rangle = -k \langle \hat{a} - \langle \hat{a}, s \rangle s, \hat{a} \rangle.
$$

Expanding,

$$
\dot{V} = -k \left( \|\hat{a}\|^2 - \langle \hat{a}, s \rangle \langle s, \hat{a} \rangle \right) = -k \left( 1 - \langle \hat{a}, s \rangle^2 \right).
$$

Since $|\langle \hat{a}, s \rangle| \leq 1$, we have $\dot{V} \leq 0$ with equality only when $\langle \hat{a}, s \rangle = \pm 1$, i.e., at the equilibria $s = \pm \hat{a}$.

### Divergence Calculation

The Laplace-Beltrami operator on $\mathbb{S}^{n-1}$ satisfies,

$$
\Delta_{\mathbb{S}} f = \Delta_{\mathbb{R}^n} \tilde{f} \big|_{\mathbb{S}^{n-1}} - (n-1) \frac{\partial \tilde{f}}{\partial r} \big|_{r=1},
$$

where $\tilde{f}$ is a homogeneous extension of $f$. For $f(s) = \langle s, \hat{a} \rangle$, extend as $\tilde{f}(x) = \langle x, \hat{a} \rangle / \|x\|$ (degree-0 homogeneous) or as $\tilde{f}(x) = \langle x, \hat{a} \rangle$ (degree-1 homogeneous).

Using the degree-1 extension: $\Delta_{\mathbb{R}^n} \tilde{f} = 0$ (linear functions are harmonic), and $\frac{\partial \tilde{f}}{\partial r} = \langle s, \hat{a} \rangle$. Therefore,

$$
\Delta_{\mathbb{S}} \langle s, \hat{a} \rangle = 0 - (n-1) \langle s, \hat{a} \rangle = -(n-1) \langle s, \hat{a} \rangle.
$$

For $V(s) = 1 - \langle s, \hat{a} \rangle$,

$$
\Delta_{\mathbb{S}} V = \Delta_{\mathbb{S}}(1) - \Delta_{\mathbb{S}} \langle s, \hat{a} \rangle = 0 + (n-1) \langle s, \hat{a} \rangle.
$$

The divergence of $F = -k \nabla_{\mathbb{S}} V$ is,

$$
\operatorname{div}_{\mathbb{S}} F = -k \Delta_{\mathbb{S}} V = -k(n-1) \langle s, \hat{a} \rangle = -k(n-1) \cos \theta.
$$

### Constraint-Induced Non-Integrability and Differential Inclusions

The geometric arguments in the main text can be formalized using the theory of differential inclusions, which provides the correct mathematical framework for systems with state-dependent constraints, saturations, and projections.

Let $M$ be a smooth Riemannian manifold (e.g., $\mathbb{S}^{n-1}$), and let

$$
F(s) = -\nabla_M V(s)
$$

be a smooth gradient vector field generated by a scalar potential $V$.

Suppose that at each state $s \in M$, admissible correction directions are restricted to a closed, convex cone

$$
C(s) \subset T_s M
$$

representing actuator limits, safety constraints, or feasibility restrictions.

The constrained dynamics are then described not by an ordinary differential equation, but by the projected differential inclusion,

$$
\dot{s} \in \Pi_{C(s)}\big(F(s)\big),
$$

where $\Pi_{C(s)}$ denotes projection onto the admissible cone in the tangent space.

This projection operation has three mathematically significant consequences.

First, the resulting vector field is generally nonsmooth. Even when $F$ is smooth, the projection map $\Pi_{C(s)}$ is only Lipschitz continuous and fails to be differentiable at the boundary of $C(s)$. Classical gradient-flow theory no longer applies.

Second, the projected field need not be integrable. That is, there may exist no scalar function $\tilde{V}$ such that

$$
\Pi_{C(s)}\big(F(s)\big) = -\nabla_M \tilde{V}(s) \quad \text{for all } s \in M.
$$

This failure is structural: projection onto a state-dependent cone generically destroys the exactness of the associated 1-form. Even if $F$ is curl-free, the projected field may possess nonzero circulation.

Third, the appropriate notion of descent becomes set-valued. In the language of nonsmooth analysis[^13], the dynamics evolve along the Clarke generalized gradient of $V$ restricted to feasible directions. Formally,

$$
\dot{s} \in -\partial_C V(s),
$$

where $\partial_C V$ denotes the Clarke subdifferential.

Such systems may still admit Lyapunov functions and asymptotically stable equilibria. However, the existence of a global smooth scalar potential whose gradient generates the flow is no longer guaranteed. The obstruction is not insufficient gain or poor parameterization, but loss of integrability induced by the constraint geometry itself.

From a geometric perspective, this loss of integrability manifests as curl emergence in the effective correction field when viewed in the ambient space. Trajectories may slide along constraint boundaries, generating circulation even though the unconstrained field points strictly downhill. This explains why constrained feedback systems can exhibit persistent cycling despite monotone decrease of a Lyapunov function.

The distinction is fundamental: unconstrained gradient flow guarantees global convergence by exact descent, whereas constrained flow guarantees only viability and stability within the admissible set. The curl diagnostic introduced in the main text identifies precisely when this structural transition occurs.

In this sense, curl does not indicate instability but rather the absence of a globally consistent scalar objective compatible with the constraint architecture.

### Curl on Manifolds

On a general Riemannian manifold $(M, g)$, the curl of a vector field $X$ is defined via the exterior derivative of its dual 1-form $X^\flat$,

$$
(\operatorname{curl} X)^\flat = \star \, dX^\flat,
$$

where $\star$ is the Hodge star operator. For a gradient field $X = \nabla f$, the dual is $X^\flat = df$, and,

$$
dX^\flat = d(df) = 0
$$

by the identity $d^2 = 0$. Hence gradient fields are curl-free.

Conversely, on simply connected manifolds, a curl-free vector field is locally (and globally) a gradient by the Poincaré lemma[^12]. On manifolds with nontrivial topology, curl-free fields may have nonzero "circulation" around non-contractible loops.

For $\mathbb{S}^{n-1}$ with $n \geq 3$, the sphere is simply connected, so curl-free implies gradient. For $\mathbb{S}^1$ (the circle), a constant tangent field has zero curl but is not a gradient—it has nonzero circulation around the circle.

[^1]: Lyapunov, A.M. (1892). *The General Problem of the Stability of Motion*. Doctoral dissertation, University of Kharkov. Translated in Fuller, A.T. (1992). International Journal of Control, 55(3), 531-773.

[^2]: Ashby, W.R. (1956). *An Introduction to Cybernetics*. Chapman & Hall, London.

[^3]: Müller, C. (1966). *Spherical Harmonics*. Lecture Notes in Mathematics, Vol. 17, Springer.

[^4]: Nyquist, H. (1932). Regeneration Theory. *Bell System Technical Journal*, 11(1), 126-147.

[^5]: Bode, H.W. (1945). *Network Analysis and Feedback Amplifier Design*. Van Nostrand, New York.

[^6]: Evans, W.R. (1948). Graphical Analysis of Control Systems. *Transactions of the AIEE*, 67(1), 547-551.

[^7]: Khalil, H.K. (2002). *Nonlinear Systems*, 3rd ed. Prentice Hall.

[^8]: Spang, H.A. & Brown, H. (1999). Control of Jet Engines. *Control Engineering Practice*, 7(9), 1043-1059.

[^9]: Csank, J.T., et al. (2013). Aircraft Turbine Engine Control Research at NASA Glenn Research Center. NASA/TM—2013-217821.

[^10]: Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J., & Mané, D. (2016). Concrete Problems in AI Safety. arXiv:1606.06565.

[^11]: Soros, G. (1987). *The Alchemy of Finance: Reading the Mind of the Market*. Simon & Schuster.

[^12]: Spivak, M. (1965). *Calculus on Manifolds*. Benjamin.

[^13]: Clarke, F.H. (1983). *Optimization and Nonsmooth Analysis*. Wiley.
