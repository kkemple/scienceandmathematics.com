---
title: "Simulation Horizons, Constraints, and the Emergence of Strategic Agency"
description: "A phase boundary for when optimization becomes strategy: systems play games only when horizon and authority justify intervention over migration under thermodynamic and institutional constraints."
pubDate: "2025-12-21"
zenodoDepositionId: 18018477
zenodoUrl: "https://zenodo.org/records/18018477"
doi: "10.5281/zenodo.18018477"
updatedDate: "2025-12-21"
type: "analysis"
keywords:
  - "agency"
  - "bounded rationality"
  - "control theory"
  - "game theory"
  - "reflexivity"
  - "model predictive control"
  - "thermodynamics"
  - "simulation horizon"
  - "constraints"
zenodoDescription: |
  This essay proposes a boundary condition for when "optimization" becomes strategy. Many systems respond to local gradients (migration, adjustment, reflex-like control). Strategic behavior—incurring present cost to reshape future payoffs—appears only when an agent can simulate counterfactual futures far enough ahead and has sufficient control authority to act on those simulations.

  We formalize this with a constrained horizon model: thermodynamic and organizational overhead bound the effective planning horizon, while actuator limits and structural controllability bound intervention capacity. In this framing, equilibrium is less a timeless fixed point than a temporarily stabilized trajectory of a constrained feedback system, which can persist for long periods yet collapse abruptly when horizons shorten or constraints bind.

  The goal is not to "prove" a single theory of agency, but to make the domain of validity of game-theoretic explanations explicit—especially in regimes (crises, panics, coordination breakdowns) where game theory is often invoked precisely as the system exits the strategic regime.
---

Most systems do not play games. They respond to gradients.

The distinction matters because economics and biology both reach for optimization language to compress behavior into a single object. But optimization hides a structural split: some systems move toward better conditions, while others change the conditions themselves. A migrating herd follows food gradients. A central bank reshapes the constraint topology. Both can be described as "optimizing," yet only one exhibits strategic agency in any meaningful sense.

This note sketches a boundary condition for that transition. The claim is not that game theory is wrong—it is that game theory is conditional. A system can only behave strategically when it can afford to model counterfactual futures and has enough authority to convert those models into world-editing actions. Below that threshold, what looks like optimization is often just motion along a constraint field.

## The Gradient–Game Distinction

Gradient-following and strategic play differ in kind, not degree.

Gradient-following behavior minimizes immediate energetic cost without counterfactual reasoning: relocate, reallocate, avoid heat, chase food, reduce exposure, deleverage. The system responds to the local slope of a payoff or free-energy function. Strategic play incurs present cost to alter future payoffs: build a moat, change rules, coordinate a coalition, impose a standard, backstop a market, raise switching costs. The system models futures, compares trajectories, and intervenes.

Consider a system embedded in an environment with state $x_t \in \mathcal{X}$ and a local payoff function $u(x_t)$. Many biological and physical systems evolve according to $\dot{x}_t \propto \nabla u(x_t)$, or its discrete analogue. Behavior follows local gradients. These systems do not represent counterfactual futures, do not model other agents' delayed responses, and do not accept present cost for distant gain. They are adaptive but non-strategic.

From a control perspective, such systems are open-loop or weakly closed-loop. They minimize immediate cost subject to feasibility constraints. Migration through state space dominates intervention on state space. Most biological life operates in this regime.

This is the same split that appears in reflexive markets: most participants migrate along liquidity and narrative gradients, while a smaller class of actors—central banks, regulators, dominant platforms—can intervene and reshape the constraints themselves. The core theme of [Bounded Reflexivity & Constraint Theory](/bounded-reflexivity-and-constraint-theory) is precisely this asymmetry between those who move within the field and those who reshape it.

## The Simulation Threshold

The boundary can be stated cleanly: an agent plays a game only when it can evaluate counterfactuals far enough ahead that intervention dominates migration.

Two quantities do most of the work. The effective controllable horizon $\tau_{\text{ctrl}}$ measures how far into the future the agent can simulate and act on a plan. The environment timescale $\tau_{\text{env}}$ measures how quickly relevant payoffs and constraints evolve, including other agents' responses.

Define a dimensionless horizon adequacy parameter,

$$
\kappa \equiv \frac{\tau_{\text{ctrl}}}{\tau_{\text{env}}}.
$$

When $\kappa \ll 1$, the future is effectively opaque. Intervention cannot be justified reliably, and myopic descent dominates. When $\kappa \gtrsim 1$, counterfactual evaluation becomes feasible, and present sacrifice can be traded for future payoff-shape change.

This is not a moral distinction—smart versus dumb, rational versus irrational. It is a constraint distinction. When $\kappa$ collapses through stress, bandwidth loss, or depleted slack, systems revert to migration even if they were strategic the day before.

## Thermodynamics of Horizon

Simulation is not free. It is computation. Computation dissipates. Even in idealized form, there is a floor.

Landauer's bound gives a minimum energy per erased bit[^1],

$$
E_{\min} = k_B T \ln 2.
$$

Actual systems operate far above Landauer efficiency, but the bound remains a reference point: it reminds us that thinking is an energetic allocation problem, not a purely informational one. This is the thermodynamic thread running through [The Anthropic Thermodynamic Principle](/the-anthropic-thermodynamic-principle): agency lives in a narrow overhead window where complexity is sufficient yet slack remains.

The practical abstraction separates maintenance from slack. Let total available power be $P$ and let $\eta \in (0,1)$ represent the fraction consumed by maintenance and overhead. Slack power is $(1-\eta)P$. Not all slack is usable for planning—a recurring structure/capacity split, roughly "structure" versus "degrees of freedom," describes what fraction of slack is actually available for choice rather than absorbed by keeping the system coherent.

Define an available choice power budget,

$$
P_{\text{choice}} \equiv P \cdot \lambda \cdot (1-\eta),
$$

where $\lambda \in (0,1)$ is the usable fraction of slack after structure and coordination overhead is accounted for. In real organizations under load, $\lambda$ is often much less than 1.

If one decision cycle has duration $\Delta t$, the energy available for planning in that cycle is,

$$
E_{\text{choice}} = P_{\text{choice}} \Delta t.
$$

Now attach an imperfect but operational cost model for simulation. Suppose a horizon rollout of length $H$ uses $b$ effective bit-operations per step—state, model, counterfactual bookkeeping—and costs $e_b$ energy per bit-operation,

$$
E_{\text{sim}}(H) \approx H \, b \, e_b.
$$

Feasibility requires $E_{\text{sim}}(H) \le E_{\text{choice}}$, yielding an upper bound on the simulation horizon,

$$
H \le H^\star \equiv \left\lfloor \frac{P_{\text{choice}} \Delta t}{b \, e_b} \right\rfloor = \left\lfloor \frac{P \lambda (1-\eta) \Delta t}{b \, \chi \, k_B T \ln 2} \right\rfloor,
$$

where $\chi \ge 1$ captures inefficiency above the Landauer limit.

This makes the qualitative claim quantitative: the planning horizon collapses when $\eta$ rises (stress), when $P$ falls (resource loss), when $b$ rises (model complexity), or when $e_b$ rises (inefficiency, friction, coordination cost). The statement that agents are rational within the horizon they can simulate becomes a physical constraint, not a psychological observation.

## Horizon Without Actuation Is Still Migration

Horizon alone does not create strategy. An agent can simulate futures and still be forced to migrate if it cannot materially actuate the environment.

This is where the reflexivity framing matters. In constrained systems, there are actors with qualitatively different control sets. In markets, households migrate; central banks intervene. In platforms, users migrate; platforms change the incentive landscape. In organizations, teams migrate; leadership can change the constraint topology—budget, mandate, process, hiring capacity.

Model this as a constrained control problem,

$$
x_{t+1} = f(x_t, u_t, w_t), \quad u_t \in \mathcal{U}(x_t),
$$

where $\mathcal{U}(x_t)$ encodes admissible actions: capital, mandates, legal permissions, technical levers. A crude proxy for authority is the size and leverage of this feasible action set, though in real systems geometry matters more than volume.

In linearized form around a trajectory,

$$
x_{t+1} = A_t x_t + B_t u_t + \epsilon_t,
$$

authority becomes the combination of how much input magnitude is permitted (constraint set) and whether the system is controllable through $B_t$ (structural reachability)[^2]. Two agents can have the same horizon $H^\star$ and wildly different ability to move the system because their $B_t$ and $\mathcal{U}(x)$ differ.

The strategic regime requires a joint condition: $\kappa \gtrsim 1$ (horizon adequate) and authority nontrivial (intervention feasible and reaching the relevant degrees of freedom). Otherwise the system may be smart but still trapped into gradient descent.

## Equilibrium as Stabilized Trajectory

Once horizons are finite and authority is uneven, equilibrium should be treated carefully. The equilibrium you see in the world is often maintained, not chosen.

Classically, an equilibrium is a fixed point $x^\star$ of a best-response mapping or a dynamical system. But in constrained, reflexive environments the more common object is a stabilized trajectory: a regime that persists because deviations are punished, horizons are too short to justify exit, or authority actively stabilizes the current basin.

In control language, if a closed-loop policy $u_t = \pi(x_t)$ induces local feedback gain $K_t$, then local deviations evolve like,

$$
\delta x_{t+1} = (A_t + B_t K_t) \, \delta x_t + \delta \epsilon_t.
$$

Stability is a spectral condition: the closed-loop matrix must have spectral radius less than 1 in discrete time, or eigenvalues with negative real parts in continuous time. But crucially, bounded reflexivity shows up in the search for $K_t$ (horizon-limited planning), while authority shows up in admissible $u_t$ and effective $B_t$.

Equilibrium becomes an emergent property of constrained feedback rather than an abstract solution concept. This is the bridge between the market-level story in [Bounded Reflexivity & Constraint Theory](/bounded-reflexivity-and-constraint-theory) and the agency story in [Complex Adaptable Systems, Complexity Ladders, & Agency](/complex-adaptable-systems-complexity-ladders-and-agency): stability is what systems do when they can afford it.

## Stress Collapses Games into Gradients

The simplest prediction of this framework is qualitative: under stress, systems revert to gradient-following behavior because horizons shorten.

In the energy model above, $H^\star$ is increasing in $P_{\text{choice}}$ and decreasing in $\eta$. Any stressor that raises maintenance overhead or reduces slack shrinks the feasible planning horizon. As $\tau_{\text{ctrl}} = H^\star \Delta t$ falls below $\tau_{\text{env}}$, $\kappa$ drops and strategic behavior becomes less descriptive.

This pattern appears consistently in financial panics. Decision cycles speed up ($\Delta t$ shrinks). Uncertainty inflates model complexity ($b$ rises). Funding constraints raise effective overhead ($\eta$ rises). Constraints bind faster than agents can re-coordinate.

The outcome looks like irrationality, but it is often rational under a collapsed horizon: migration dominates intervention because intervention can no longer be reliably evaluated. Panic is not a failure of reasoning but reasoning operating under a collapsed $\kappa$.

Formally, stress raises effective overhead $\eta$, which reduces choice power,

$$
\frac{\partial P_{\text{choice}}}{\partial \eta} = -P \lambda < 0.
$$

Therefore $H^\star$ shrinks,

$$
\frac{\partial H^\star}{\partial \eta} < 0.
$$

Once $H^\star$ falls below the environment's strategic timescale, the system crosses back into the gradient-following regime. This is the mathematical statement of herding, forced deleveraging, flight-to-safety, and institutional default choice behavior—all of which are rational under a collapsed horizon.

## A Toy Model: Leveraged Crowded Trade

To see these dynamics concretely, consider a minimal model of leveraged trading with endogenous price impact, margin constraints, finite simulation horizon, and a controller that can reshape constraints.

In discrete time, there is one risky asset with price $p_t > 0$ and two strategic agents $i \in \{1, 2\}$ holding positions $q_{i,t}$. Each agent has equity $W_{i,t} > 0$. A controller—clearinghouse, prime broker, central bank proxy—sets a margin requirement $m_t \in (0,1)$ each period.

Price formation follows linear impact on net order flow. Let $\Delta q_{i,t} = q_{i,t+1} - q_{i,t}$ be agent $i$'s trade and $\xi_t$ be exogenous noise order flow. Then,

$$
p_{t+1} = p_t + \kappa \left( \Delta q_{1,t} + \Delta q_{2,t} + \xi_t \right),
$$

with $\kappa > 0$ the impact sensitivity. This is the core reflexive coupling: trades move price, which feeds back into wealth and constraints.

Equity updates via mark-to-market,

$$
W_{i,t+1} = W_{i,t} + q_{i,t} (p_{t+1} - p_t).
$$

The maintenance margin constraint requires that equity cover a fraction $m_t$ of position value,

$$
W_{i,t} \ge m_t \, |q_{i,t}| \, p_t.
$$

When violated, the agent faces required liquidation $L_{i,t} = \max\left(0, |q_{i,t}| - \frac{W_{i,t}}{m_t p_t}\right)$. The position must be reduced by at least $L_{i,t}$—forced selling if long, forced buying if short. That is the mechanical gradient shove.

Each agent solves a horizon-limited control problem. With finite lookahead $H_i$, agent $i$ minimizes a quadratic cost over the planning window, subject to price dynamics, wealth dynamics, margin feasibility, and forced liquidation. The agent is optimizing a reflexive system, but only over a finite horizon.

Now tie horizon to feasibility. Define a per-step simulation cost $c_i > 0$ and a per-period choice budget $B_i > 0$. The constraint $H_i c_i \le B_i$ yields $H_i \le \lfloor B_i / c_i \rfloor$. When the system is stressed, $B_i$ decreases (less slack, more time on survival and collateral management) or $c_i$ increases (state space becomes more complex, volatility rises, more branches to simulate). Either way, effective horizon collapses.

Two regimes appear immediately. In the strategic regime, both agents have $H_i$ large enough and constraints are not binding. They behave like strategic optimizers, accepting short-term drawdown to preserve future payoff. Optimal controls come from the MPC problem, producing smooth $\Delta q$. Price evolves with moderate impact; no cascade.

In the gradient regime, constraints bind and/or horizons collapse. Forced liquidation imposes $\Delta q_{i,t}$ with sign determined by constraint violation. Trades become reactive to the constraint gradient rather than to future payoff. If $L_{i,t} > 0$, any feasible policy must satisfy $|q_{i,t+1}| \le |q_{i,t}| - L_{i,t}$, and the price impact term induces a feedback loop: forced selling pushes price down, which pushes wealth down, which tightens margin, which forces more selling. That is the cascade.

Control authority enters as constraint-topology shaping. The controller chooses $m_t$. A procyclical policy—raising margins when volatility rises, $m_t = m_0 + \phi \sigma_t$—increases $L_{i,t}$ exactly when prices are moving, amplifying forced selling. A countercyclical policy—lowering margins in stress or injecting equity—reshapes the constraint set to prevent $L_{i,t}$ from turning positive system-wide.

This is the formal statement of the central claim: controllers determine whether the system damps or violently exits when constraints bind. Strategy requires horizon. Horizon is a resource. Stress collapses horizon. When horizon collapses, behavior reverts to gradients. Controllers shape whether that reversion becomes a violent cascade.

## Domain of Validity for Game Theory

Game theory is powerful precisely when the strategic regime holds: horizons are long relative to environment change, authority is sufficient to make commitments credible, and coordination bandwidth exists to maintain common knowledge.

When those conditions fail, game theory does not become false—it becomes incomplete. Other lenses dominate: gradient dynamics (flows in constraint fields), evolutionary and stochastic selection, control saturation and constraint binding, regime shifts driven by topology (who can act) rather than preferences (what they want).

This explains why game theory often feels least predictive in crises. Crises are the moments when $\kappa$ is collapsing and $\mathcal{U}(x)$ is shrinking. The lens designed for strategic equilibrium loses resolution precisely when it matters most.

Game theory implicitly assumes sufficient simulation horizon, negligible cost of reasoning, and static constraints. This framework yields a precise boundary: game theory applies only above the simulation threshold. Below it, agents do not play games, equilibria are flow states, and control collapses into feasibility gradients. Under stress, markets revert to biology.

## Implications

Four consequences follow from the constraint-horizon structure.

Bounded rationality is energetic, not psychological. Rationality is limited by feasible simulation, not intelligence. The planning horizon collapses when overhead rises or slack falls, not when agents become irrational. This reframes bounded rationality as a control limitation operating at thermodynamic boundaries.

Equilibrium stability depends on authority. Controllers determine whether systems damp or cascade. The same stress that collapses individual horizons can be offset by controllers with longer horizons and larger control sets. Central banks, clearinghouses, and platforms do not migrate when stress rises—they intervene. Whether equilibria persist or collapse depends on the distribution of control authority, not on aggregate preferences.

Intervention replaces migration at higher complexity. This is the defining feature of agency. As systems cross the simulation threshold, they stop following gradients and start reshaping them. The transition is sharp and structural, not gradual and behavioral.

Crisis is horizon collapse. Panic, herding, flight-to-safety—these are not failures of rationality but rational responses under collapsed $\kappa$. Forced liquidation, margin calls, default choices—all reflect the system crossing from the strategic regime into gradient descent. Game-theoretic explanations lose power precisely because the system has exited their domain of validity.

## Closing Note

This piece is intended to sit alongside [Bounded Reflexivity & Constraint Theory](/bounded-reflexivity-and-constraint-theory) (the market substrate: constraints and feedback) and [Complex Adaptable Systems, Complexity Ladders, & Agency](/complex-adaptable-systems-complexity-ladders-and-agency) (the thermodynamic feasibility window for agency) as a third foundation: when does optimization become strategy at all?

The useful formal object is not rationality but $\kappa$—horizon adequacy—paired with an authority measure. Where both are high, game theory explains a lot. Where either collapses, the system looks less like a game and more like a field.

Systems reveal their nature through how they respond to pressure. When they migrate, they are following gradients. When they intervene, they have crossed into agency. Bounded reflexivity governs how far into the future agents can see. Control authority governs how much of the environment they can change. Equilibrium is not a solution to an optimization problem—it is a temporarily stabilized trajectory of a constrained feedback system.

When horizons collapse, games dissolve. What remains is motion.

---

[^1]: Landauer, R. (1961). Irreversibility and heat generation in the computing process. *IBM Journal of Research and Development*, 5(3), 183–191.

[^2]: Kalman, R. E. (1960). On the general theory of control systems. *Proceedings of the First International Conference on Automatic Control*.
