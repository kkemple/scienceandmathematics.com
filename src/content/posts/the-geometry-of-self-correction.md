---
title: 'The Geometry of Self-Correction'
description: "Converging and cycling systems differ by one geometric property: curl of the correction field. A Hodge-theoretic lower bound proves that cycling from state-dependent constraint projections is structural, not parametric."
pubDate: '2026-01-09'
updatedDate: '2026-01-28'
category: 'supporting'
draft: true
zenodoDepositionId: 18602872
zenodoUrl: "https://zenodo.org/records/18602872"
doi: "10.5281/zenodo.18602872"
zenodoDescription: |
  This paper develops a coordinate-free geometric framework for understanding when feedback systems converge versus cycle. The central result is a diagnostic criterion: systems with curl-free correction fields exhibit pure convergence, while systems with nonzero curl cycle indefinitely. More precisely, nonzero curl obstructs monotone descent and makes limit cycles generic under perturbation.

  The framework uses the unit sphere as the simplest nontrivial state space, where the alignment distance between a system's current state and its target anchor serves as a natural Lyapunov function. Gradient flow on this manifold guarantees monotonic convergence—but real systems often fail to converge despite well-defined targets. The resolution lies in the correction field's differential structure: when multiple objectives, constraints, or state-dependent rules combine as interacting vector fields rather than weighted sums of scalar potentials, curl emerges and convergence guarantees dissolve.

  Three mechanisms introduce curl: (1) multi-objective interference through state-dependent weighting or thresholds, (2) constraints and saturation creating asymmetric correction, and (3) delays and hysteresis coupling current corrections to past states. The curl diagnostic distinguishes problems solvable by parameter adjustment (zero curl, multiple local minima) from problems requiring structural redesign (nonzero curl, architectural interference).

  A key quantitative result establishes that feasibility projections induce an irreducible curl floor. Using Hodge theory, we prove that when a gradient proposal passes through a non-integrable feasibility operator, the curl-maintenance functional—measuring vorticity energy—is bounded below by the spectral gap of the Hodge Laplacian times the projection defect magnitude. This makes precise the claim that cycling is structural rather than parametric: no amount of tuning can eliminate curl induced by constraint geometry.

  Divergence of the correction field provides a complementary diagnostic, measuring local compressive strength—where trajectories concentrate versus disperse. This translates to stability margins in control applications.

  Applications to control systems (FADEC multi-loop engine control) and AI alignment (reward hacking as curl emergence) demonstrate the diagnostic in concrete domains. A connection to triadic tension in constraint geometry shows how three mutually incompatible curvature sectors produce exactly the state-dependent projections that trigger the curl floor theorem.

  The contribution is a geometric language that reveals why some feedback architectures converge while others cycle, independent of domain — and why complexity itself tends to generate cycling. The curl diagnostic is coordinate-free, computable, and decisive.
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
  - "constraint geometry"
  - "convergence"
  - "Hodge theory"
  - "spectral gap"
  - "differential forms"
---

Feedback systems that successfully self-correct share a common mathematical structure — their correction dynamics follow the gradient of a scalar potential on the space of possible states. This paper develops the geometry of such systems using coordinate-free methods on the unit sphere, where the alignment distance between a system's current state and its target anchor serves as a natural Lyapunov function. The central result is a diagnostic criterion: systems with curl-free correction fields exhibit pure convergence, while systems with nonzero curl cycle indefinitely. More precisely, nonzero curl obstructs monotone descent and makes limit cycles generic under perturbation. Divergence of the correction field measures local compressive strength — where trajectories concentrate versus disperse. A Hodge-theoretic lower bound (Theorem 4) establishes that when feasibility projections are state-dependent and non-integrable, the resulting curl floor is structural: no amount of parameter tuning can eliminate cycling without changing the constraint architecture itself.

## Introduction

A thermostat and a high-bypass turbofan engine solve the same problem: temperature regulation. The mechanism is isomorphic—measure deviation from target, apply corrective force. What differs is scale and complexity. The thermostat flips a switch. The turbofan coordinates fuel flow, compressor discharge pressure, variable stator geometry, altitude compensation, and thermal load management across interdependent subsystems. Both regulate temperature. The thermostat converges reliably. The turbofan, under certain flight regimes, can oscillate between correction modes.

The difference in their behavior is geometric.

The mathematics of self-correction has been understood in pieces for over a century. Lyapunov showed that certain scalar functions guarantee stability when they decrease along trajectories[^1]. Ashby's cybernetics formalized feedback as requisite variety—a system's capacity to match environmental perturbations[^2]. Control theory developed transfer functions and stability criteria. What has been missing is a geometric language that reveals why some feedback architectures converge while others cycle, independent of the specific domain—and why complexity itself tends to generate cycling.

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

This distinction matters because parameter optimization cannot eliminate architectural curl. Turbofans that oscillate between correction modes, AI systems that exhibit reward hacking, markets that oscillate around equilibrium values—all may have correction fields with intrinsic curl that no amount of tuning can remove.

### Quantifying the Curl Floor

The claim that feasibility projection "introduces curl" admits a sharper formulation. Define the curl-maintenance functional for a vector field $F$ on a Riemannian manifold $(M, g)$ as,

$$
\mathcal{M}_{\mathrm{curl}}(F) := \frac{1}{2} \int_M |d\alpha|^2 \, dV_g,
$$

where $\alpha = F^\flat$ is the metric-dual 1-form. This measures the $L^2$-size of the exterior derivative—the total "vorticity energy" of the correction field.

When a curl-free proposal $F_0 = \nabla \phi$ passes through a feasibility projection $\Pi$, the implemented field becomes $F = \Pi(F_0)$ with defect $\delta F = F - F_0$. Since $d(d\phi) = 0$, all curl-maintenance derives from the defect: $\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}|d(\delta\alpha)|^2_{L^2}$.

The substantive result is that this cost has a geometric lower bound. The Hodge Laplacian $\Delta_1 = d\delta + \delta d$ has a kernel equal to the harmonic 1-forms $\mathcal{H}^1(M)$. If $H^1(M) = 0$ (e.g., spheres $\mathbb{S}^{n-1}$ for $n \geq 2$), then $\mathcal{H}^1(M) = \{0\}$ and $\Delta_1$ has a strictly positive spectral gap on all 1-forms. If $H^1(M) \neq 0$ (e.g., periodic domains such as $T^3$), $\mathcal{H}^1(M)$ is nontrivial and $\Delta_1$ has zero modes, but a strictly positive spectral gap persists on the orthogonal complement. In either case, the curl-maintenance of the non-harmonic component of the projection defect satisfies,

$$
\mathcal{M}_{\mathrm{curl}}(F) \geq \frac{\kappa}{2} |\delta\alpha_\perp|^2_{L^2} > 0,
$$

for some $\kappa > 0$ determined by the spectral gap and the divergence structure of the defect[^13].

This is the quantitative version of "structural, not parametric." A system whose correction architecture repeatedly induces a nontrivial projection defect carries an irreducible curl floor. The floor is not a tuning artifact but a geometric constant times the persistent defect magnitude. Because the curl floor is set by the Hodge spectral gap, no gain scheduling, local smoothing, or parameter tuning can eliminate cycling without changing the feasibility map itself. Cycling and sustained corrective work are the irreducible residue of feasibility—the cost of implementing constraints that prevent a global scalar Lyapunov function from existing on the realized dynamics.

### Connection to Triadic Tension

The curl floor theorem applies to any system with state-dependent, non-integrable constraint projections. The [triadic tension theorem](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry) identifies a specific and important instance: three curvature sectors — angular ($\pi$), recursive ($\varphi$), and discrete ($N$) — that cannot be simultaneously minimized. When a system attempts to correct across all three sectors, the admissible correction directions at any configuration depend on which sector is currently dominant. This state-dependence is not a modeling choice but a geometric consequence of the pairwise incompatibility of the sector minimizers (T1).

The resulting feasibility map is non-integrable. If the system sits near the $\varphi$-sector minimum, the admissible cone tilts toward reducing recursive curvature, but this forces angular curvature to increase (by the strictly negative off-diagonal covariances, T2). As the system corrects angular curvature, the cone tilts again, now forcing discrete curvature to rise. The correction field circulates through sector-dominated configurations rather than converging to a point where all three are simultaneously satisfied — because no such point exists. The projection defect $\delta\alpha$ has persistent magnitude (the sectors are genuinely independent observables, by T3), and the Hodge spectral gap provides the lower bound. Theorem 4 then guarantees a strictly positive curl floor: triadic tension forces irreducible cycling with a quantifiable maintenance cost.

This connection closes the loop between the general theory developed here and the specific constraint geometry of [the monograph](/triadic-tension-decade-symmetry-and-dissipation-flow-in-constraint-geometry). The curl diagnostic is a general tool; triadic tension is a specific trigger; and the curl floor theorem quantifies the consequence. A minimal field-theoretic model in which the stiffness ratio and topological protection boundary are computed exactly is developed in [Preserved Curl, Scale Separation, and Topological Leakage](/preserved-curl-scale-separation-and-topological-leakage). The repair framework extends these results by treating local optimization under the curl floor as a first-class process, proving that repair operations traversing the same non-integrable feasibility map incur a strictly positive geometric overhead bounded by the same spectral gap — see [Repair as Local Optimization in Constraint Geometry](/repair-as-local-optimization-in-constraint-geometry).

### Control Systems

Classical control theory developed stability criteria for linear time-invariant systems: Nyquist plots[^4], Bode margins[^5], root locus methods[^6]. These tools implicitly analyze whether the closed-loop system has a Lyapunov function—whether the correction field is effectively curl-free.

Nonlinear control extends these ideas through Lyapunov's direct method, which seeks scalar functions that decrease along trajectories[^7]. The gradient-flow perspective reveals why this works: a decreasing Lyapunov function certifies that the correction field derives from a potential, guaranteeing convergence without solving the dynamics explicitly.

The curl diagnostic adds predictive power. If a control system exhibits limit cycles or oscillations, the correction field has nonzero curl. This directs attention toward the source of circulation—often saturation, backlash, or mode-switching—rather than toward gain adjustment.

Return to the turbofan. Its Full Authority Digital Engine Control (FADEC) manages fuel flow, variable stator vanes, bleed valves, and afterburner sequencing[^8]. Each subsystem has its own correction loop. When the aircraft transitions between flight regimes—say, from cruise to rapid descent—the correction loops can interfere. The fuel controller reduces flow to lower temperature; the compressor controller opens bleed valves to prevent surge; the bleed valve opening reduces pressure, triggering the fuel controller to compensate. Under certain conditions, these interactions create circulation in the combined correction field. The engine can oscillate between correction modes—a known failure mode in switched/gain-scheduled control systems that requires careful bumpless transfer design to prevent[^9]. Engine designers spend considerable effort ensuring the combined FADEC architecture remains curl-free across the operating envelope—a geometric constraint on multi-loop control design. The compressor provides a particularly clean instantiation: the surge line is a finite-residence manifold, variable stators and bleed valves perform feasibility projections that induce structural curl, and rotating stall is curl made visible in the flow field. See [Compressors, Curl, & Constraint Geometry](/compressors-curl-and-constraint-geometry) for the complete mapping.

### AI Alignment

Gradient descent on a loss function is literal gradient flow — the system moves along $-\nabla L$ where $L$ is the loss. Reward hacking and specification gaming represent curl emergence[^10]: when an agent finds ways to increase measured reward that decrease intended performance, the actual correction field diverges from the intended one, and the system cycles through exploits rather than converging to aligned behavior. The curl diagnostic frames the core alignment problem geometrically — alignment architectures must ensure that whatever signals actually drive learning derive from a scalar potential consistent with intended behavior.

## Why This Matters

The curl diagnostic has direct consequences for design, diagnosis, and prediction. A system intended to self-correct will succeed only if its correction field derives from a consistent scalar objective, so the design principle is conservative: prefer architectures that provably maintain curl-free correction fields, and when multiple objectives are genuinely necessary, combine them as weighted sums of scalar potentials rather than as interacting vector corrections. When a system cycles rather than converges, the curl diagnostic localizes the problem — it points to specific architectural features generating the cycling and distinguishes problems solvable by parameter adjustment (zero curl, multiple local minima) from problems requiring structural redesign (nonzero curl, architectural interference). Knowing the curl structure of a system's correction architecture allows prediction of its long-run behavior without simulating the detailed dynamics, because systems with curl-free correction fields will converge while systems with nonzero curl will cycle. The geometry of self-correction transforms informal intuitions about feedback and stability into precise, measurable structure. Systems that converge share mathematical form with systems that cycle — except for one property. That property is coordinate-free, computable, and decisive.

## Attack Surface

The curl diagnostic and the curl floor theorem (Theorem 4) rest on checkable claims. If a system with demonstrably state-dependent, non-integrable constraint projections exhibits sustained monotone convergence without cycling, the diagnostic fails — the non-integrability condition in the theorem's hypothesis would need to be revisited for that class of projections. If the Hodge spectral gap $\lambda_1^\perp$ vanishes on physically relevant manifolds (e.g., noncompact manifolds where the spectral gap degenerates), the quantitative lower bound loses its floor and the curl-maintenance functional can approach zero even with persistent projection defects. The theorem applies to any compact Riemannian manifold: when $H^1(M) = 0$ (e.g., spheres), $\lambda_1^\perp$ is the usual first eigenvalue on all 1-forms; when $H^1(M) \neq 0$ (e.g., periodic domains $T^3$), the bound applies to the non-harmonic sector, with harmonic forms contributing no curl. Extending to noncompact state spaces requires verifying that the spectral gap remains positive. Both conditions are independently testable — the first through numerical simulation of constrained dynamics, the second through spectral analysis of the Hodge Laplacian on the manifold in question.

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

Third, the appropriate notion of descent becomes set-valued. In the language of nonsmooth analysis[^12], the dynamics evolve along the Clarke generalized gradient of $V$ restricted to feasible directions. Formally,

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

Conversely, on simply connected manifolds, a curl-free vector field is locally (and globally) a gradient by the Poincaré lemma[^11]. On manifolds with nontrivial topology, curl-free fields may have nonzero "circulation" around non-contractible loops.

For $\mathbb{S}^{n-1}$ with $n \geq 3$, the sphere is simply connected, so curl-free implies gradient. For $\mathbb{S}^1$ (the circle), a constant tangent field has zero curl but is not a gradient—it has nonzero circulation around the circle.

### Curl-Maintenance Under Feasibility Projections

This section develops the quantitative theory underlying the curl floor discussed in the main text. The framework applies to any compact, oriented Riemannian manifold $(M, g)$ without boundary, with $\dim M = n \geq 2$.

#### The Curl-Maintenance Functional

Let $\mathfrak{X}(M)$ denote smooth vector fields and $\Omega^k(M)$ denote smooth $k$-forms on $M$. For $F \in \mathfrak{X}(M)$, let $\alpha := F^\flat \in \Omega^1(M)$ be the metric-dual 1-form. The curl-maintenance (or vorticity energy) functional is,

$$
\mathcal{M}_{\mathrm{curl}}(F) := \frac{1}{2} \int_M |d\alpha|^2 \, dV_g = \frac{1}{2} |d\alpha|^2_{L^2}.
$$

This is a purely geometric quantity measuring the $L^2$-size of the exterior derivative of the implemented 1-form.

#### Feasibility as Projection

Assume that for each $x \in M$ there is a closed convex cone (or subspace) $\mathcal{K}_x \subset T_x M$, and let $\Pi_x : T_x M \to \mathcal{K}_x$ be the metric orthogonal projection. Given a proposal field $F_0 \in \mathfrak{X}(M)$, define the implemented field,

$$
F(x) = \Pi_x(F_0(x)), \qquad \alpha := F^\flat, \qquad \alpha_0 := F_0^\flat.
$$

The projection defect is,

$$
\delta F := F - F_0, \qquad \delta\alpha := \alpha - \alpha_0.
$$

If the proposal is gradient-like, $F_0 = \nabla\phi$ for some smooth $\phi$, then $\alpha_0 = d\phi$ and therefore,

$$
d\alpha = d(\alpha_0 + \delta\alpha) = d(\delta\alpha).
$$

Under a curl-free proposal, all curl-maintenance is induced by the feasibility projection:

$$
\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2} \int_M |d(\delta\alpha)|^2 \, dV_g.
$$

#### The Integrability Criterion

A 1-form $\alpha$ is curl-free if and only if it is closed: $d\alpha = 0$. On manifolds with $H^1(M) = 0$ (e.g., spheres $\mathbb{S}^m$ for $m \geq 2$), closed implies exact, so curl-free is equivalent to $\alpha = d\psi$ for some scalar potential $\psi$.

**Proposition 1 (Zero maintenance iff integrable).** Let $F \in \mathfrak{X}(M)$, $\alpha = F^\flat$. Then,

$$
\mathcal{M}_{\mathrm{curl}}(F) = 0 \quad \Longleftrightarrow \quad d\alpha = 0.
$$

If additionally $H^1(M) = 0$, then,

$$
\mathcal{M}_{\mathrm{curl}}(F) = 0 \quad \Longleftrightarrow \quad \exists \, \psi \in C^\infty(M) \text{ such that } F = \nabla\psi.
$$

*Proof.* $\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}|d\alpha|^2_{L^2}$ vanishes if and only if $d\alpha \equiv 0$. If $H^1(M) = 0$, every closed 1-form is exact: $\alpha = d\psi$, hence $F = \nabla\psi$. $\blacksquare$

This makes the "no global scalar function" claim operational: curl is exactly the obstruction to scalar descent.

#### Minimum-Curl Solutions at Fixed Divergence

To connect to minimum-maintenance correction architectures, fix a divergence constraint. For a 1-form $\alpha$, the codifferential $\delta\alpha$ equals (up to sign conventions) the divergence of the corresponding vector field. Fix any smooth function $s \in C^\infty(M)$ with $\int_M s \, dV_g = 0$ (necessary for solvability on a compact manifold without boundary). Consider the feasible class,

$$
\mathcal{A}_s := \{ \alpha \in \Omega^1(M) : \delta\alpha = s \}.
$$

**Proposition 2 (Minimum-curl solution at fixed divergence).** Assume $H^1(M) = 0$. For any $s \in C^\infty(M)$ with $\int_M s \, dV_g = 0$, the minimization problem,

$$
\inf_{\alpha \in \mathcal{A}_s} \frac{1}{2} |d\alpha|^2_{L^2}
$$

has value $0$, and every minimizer satisfies $d\alpha = 0$. Equivalently, every minimizer is exact: $\alpha = d\psi$, where $\psi$ solves the Poisson equation,

$$
\Delta\psi = s \quad \text{(with } \Delta = \delta d \text{ on functions)}.
$$

Thus, among all fields with a prescribed divergence profile, the zero-maintenance architecture is gradient/potential-driven.

*Proof.* Solve $\Delta\psi = s$ (solvable because $\int s = 0$). Then $\alpha = d\psi$ satisfies $\delta\alpha = \delta d\psi = \Delta\psi = s$, hence $\alpha \in \mathcal{A}_s$, and $d\alpha = dd\psi = 0$, so the objective is $0$. Since the objective is nonnegative, $0$ is the infimum. Any minimizer must have $d\alpha = 0$; when $H^1(M) = 0$, it is exact. $\blacksquare$

*Interpretation:* If a system can implement any field satisfying the divergence requirement, then curl-maintenance can be driven to zero by choosing a gradient field. Persistent maintenance becomes necessary only when feasibility excludes that integrable solution or when implementation maps a curl-free proposal through a non-integrable feasibility operator.

#### The Spectral Lower Bound

Let $\Delta_1 := d\delta + \delta d$ be the Hodge Laplacian on 1-forms, with kernel $\mathcal{H}^1(M)$ (the harmonic 1-forms). Define the spectral gap on the orthogonal complement:

$$
\lambda_1^\perp \;:=\; \inf_{\beta \perp \mathcal{H}^1,\; \beta \neq 0} \frac{|d\beta|^2_{L^2} + |\delta\beta|^2_{L^2}}{|\beta|^2_{L^2}} \;>\; 0.
$$

When $H^1(M) = 0$, $\mathcal{H}^1(M) = \{0\}$ and the infimum is over all nonzero 1-forms; $\lambda_1^\perp$ reduces to the usual $\lambda_1$. When $H^1(M) \neq 0$ (e.g., periodic domains $T^3$), $\mathcal{H}^1(M)$ is nontrivial, but $\lambda_1^\perp$ remains strictly positive on the complement — $\Delta_1$ is invertible on the non-harmonic sector.

**Lemma 3 (Spectral lower bound for the defect curl).** Let $\beta \in \Omega^1(M)$ with $\beta \perp \mathcal{H}^1(M)$. Then,

$$
|d\beta|^2_{L^2} \geq \lambda_1^\perp |\beta|^2_{L^2} - |\delta\beta|^2_{L^2}.
$$

*Proof.* By the variational characterization of $\lambda_1^\perp$,

$$
|d\beta|^2_{L^2} + |\delta\beta|^2_{L^2} \geq \lambda_1^\perp |\beta|^2_{L^2}.
$$

Rearrange. $\blacksquare$

#### The Main Theorem

**Theorem 4 (Projected gradient flows have an unavoidable curl floor).** Let the proposal be gradient: $\alpha_0 = d\phi$, and let $\alpha = \Pi(\nabla\phi)^\flat$ be the implemented field, with defect $\delta\alpha = \alpha - \alpha_0$. Decompose the defect into harmonic and non-harmonic parts:

$$
\delta\alpha = \delta\alpha_{\mathrm{harm}} + \delta\alpha_\perp, \qquad \delta\alpha_{\mathrm{harm}} \in \mathcal{H}^1(M),\;\; \delta\alpha_\perp \perp \mathcal{H}^1(M).
$$

Then $d(\delta\alpha_{\mathrm{harm}}) = 0$ and

$$
\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2} |d(\delta\alpha)|^2_{L^2} = \frac{1}{2} |d(\delta\alpha_\perp)|^2_{L^2} \;\geq\; \frac{1}{2} \left( \lambda_1^\perp |\delta\alpha_\perp|^2_{L^2} - |\delta(\delta\alpha_\perp)|^2_{L^2} \right).
$$

In particular, if the non-harmonic defect has persistent magnitude and is not entirely divergence-dominated—i.e., if there exists $\kappa > 0$ such that,

$$
|\delta(\delta\alpha_\perp)|_{L^2} \leq \sqrt{\lambda_1^\perp - \kappa} \, |\delta\alpha_\perp|_{L^2},
$$

then,

$$
\mathcal{M}_{\mathrm{curl}}(F) \geq \frac{\kappa}{2} |\delta\alpha_\perp|^2_{L^2} > 0.
$$

*Proof.* Since $\alpha_0$ is exact, $d\alpha = d(\delta\alpha)$. Harmonic forms are closed, so $d(\delta\alpha) = d(\delta\alpha_\perp)$, hence $\mathcal{M}_{\mathrm{curl}}(F) = \frac{1}{2}|d(\delta\alpha_\perp)|^2_{L^2}$. The lower bound is Lemma 3 with $\beta = \delta\alpha_\perp$. The strict positivity condition is immediate from the displayed inequality. $\blacksquare$

This is the formal "structural, not parametric" statement: if feasibility repeatedly induces a nontrivial projection defect whose non-harmonic component cannot be represented purely as divergence, curl-maintenance is bounded away from zero by a geometric constant (through $\lambda_1^\perp$) times a persistent defect magnitude. In periodic simulation domains $M = T^3$, the harmonic 1-forms correspond to spatially uniform ($k = 0$) modes and contribute no curl. The curl-floor bound therefore applies to the mean-zero sector ($k \neq 0$) relevant to vorticity, stress gradients, and transport — exactly the sector used in DNS measurements of finite residence and shear relaxation.

#### When Projection Preserves Zero Maintenance

Given the theorem, "zero maintenance after projection" is a special case characterized by integrability of the implemented field:

$$
\mathcal{M}_{\mathrm{curl}}(F) = 0 \quad \Longleftrightarrow \quad d(\delta\alpha) = 0 \quad \Longleftrightarrow \quad \delta\alpha_\perp \text{ is closed (hence exact when } H^1(M) = 0 \text{)}.
$$

Operationally: feasibility preserves zero maintenance only when the projection rule $\Pi_x$ maps the proposal $\nabla\phi$ into another gradient field $\nabla\psi$ globally. Fixed linear projections onto fixed subspaces can do this (they are integrable). State-dependent gating, asymmetric saturation cones, and mode-switching generically do not: they vary with $x$ and with the proposal direction, producing a defect with nontrivial exterior derivative.

#### Connection to the Three Curl Generators

The three curl-generating mechanisms identified in the main text—multi-objective interference, constraints and saturation, delays and hysteresis—align under a single obstruction. Each mechanism induces an effective state-dependent, non-integrable feasibility map, hence a defect $\delta\alpha$ with $d(\delta\alpha) \neq 0$.

Multi-objective interference produces state-dependent weighting or thresholds that change $\Pi_x$ as a function of $x$. Constraints and saturation impose asymmetric cones $\mathcal{K}_x$ that vary with the direction of the proposal. Delays and hysteresis couple the projection to past states, creating path-dependence that manifests as non-integrability when projected to instantaneous variables.

In each case, the geometric content is identical: the implemented correction field cannot be written as the gradient of any scalar function on the state space. The curl-maintenance functional quantifies this obstruction, and Theorem 4 establishes that when the obstruction is persistent, the maintenance cost has an irreducible floor.

The wedge statement summarizes the result: among all vector fields satisfying a prescribed divergence profile, the unique zero-maintenance architecture is gradient/potential-driven. Any persistent feasibility projection that is not integrable forces a strictly positive curl-maintenance floor, quantified by a Hodge spectral gap and the size of the projection defect.

[^1]: Lyapunov, A.M. (1892). *The General Problem of the Stability of Motion*. Doctoral dissertation, University of Kharkov. Translated in Fuller, A.T. (1992). International Journal of Control, 55(3), 531-773.

[^2]: Ashby, W.R. (1956). *An Introduction to Cybernetics*. Chapman & Hall, London.

[^3]: Müller, C. (1966). *Spherical Harmonics*. Lecture Notes in Mathematics, Vol. 17, Springer.

[^4]: Nyquist, H. (1932). Regeneration Theory. *Bell System Technical Journal*, 11(1), 126-147.

[^5]: Bode, H.W. (1945). *Network Analysis and Feedback Amplifier Design*. Van Nostrand, New York.

[^6]: Evans, W.R. (1948). Graphical Analysis of Control Systems. *Transactions of the AIEE*, 67(1), 547-551.

[^7]: Khalil, H.K. (2002). *Nonlinear Systems*, 3rd ed. Prentice Hall.

[^8]: Spang, H.A. & Brown, H. (1999). Control of Jet Engines. *Control Engineering Practice*, 7(9), 1043-1059.

[^9]: Csank, J.T., et al. (2013). Aircraft Turbine Engine Control Research at NASA Glenn Research Center. NASA/TM—2013-217821.

[^10]: Amodei, D., Olah, C., Steinhardt, J., Christiano, P., Schulman, J., & Mané, D. (2016). Concrete Problems in AI Safety. arXiv\:1606.06565.

[^11]: Spivak, M. (1965). *Calculus on Manifolds*. Benjamin.

[^12]: Clarke, F.H. (1983). *Optimization and Nonsmooth Analysis*. Wiley.

[^13]: The spectral gap $\lambda_1^\perp$ is the smallest positive eigenvalue of the Hodge Laplacian $\Delta_1 = d\delta + \delta d$ on 1-forms orthogonal to harmonic forms. When $H^1(M) = 0$ (e.g., $\mathbb{S}^{n-1}$ for $n \geq 2$), this equals the usual first eigenvalue; for $\mathbb{S}^{n-1}$ that value is $n-1$. On $T^3$, $\lambda_1^\perp = (2\pi/L)^2$ where $L$ is the box side length. See Rosenberg, S. (1997). *The Laplacian on a Riemannian Manifold*. Cambridge University Press, Chapter 4.
