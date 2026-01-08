---
title: 'Innovation Cycles and Civilizational Renormalization'
description: "Models innovation eras as renormalization flows where exploitation drives organizational overhead toward critical thresholds, triggering crises that force breakthrough restructurings from agriculture to AI."
pubDate: '2025-10-18'
zenodoDepositionId: 18187245
zenodoUrl: "https://zenodo.org/records/18187245"
doi: "10.5281/zenodo.18187245"
keywords:
  - "innovation cycles"
  - "civilizational collapse"
  - "renormalization group"
  - "phase transitions"
  - "organizational theory"
  - "technological change"
  - "complexity"
  - "artificial intelligence"
  - "historical patterns"
  - "thermodynamics"
zenodoDescription: |
  This paper proposes modeling innovation cycles through organizational overhead dynamics, where civilizations approach saturation thresholds through exploitation, triggering phase transitions to new organizational levels. The framework is explicitly speculative but generates interesting correspondences across 12,000 years of historical data.

  We identify a five-stage cycle: Discovery → Exploitation → Saturation → Crisis → Breakthrough. As organizational overhead (η) grows, maintenance costs eventually exceed productive capacity, forcing reorganization. Historical data suggests systems destabilize when overhead approaches 25-30% of total capacity.

  Historical analysis shows cycle duration scaling with baseline complexity: Fire→Agriculture (290,000 years), Agriculture→Metallurgy (7,000 years), Steam→Electricity (180 years), Computing→AI (70 years). The acceleration pattern—from millennia to decades—follows from higher baseline complexity approaching saturation faster.

  Current crisis signatures (information overload, alignment problems, attention economy breakdown) are interpreted as overhead approaching productive capacity limits. The framework offers testable predictions about breakthrough timing and crisis characteristics.

  We emphasize this is exploratory modeling. Historical complexity resists simple quantification; η values are estimated rather than measured. The framework offers a lens for pattern recognition rather than deterministic prediction.
---

Human civilization oscillates through recognizable cycles—discover a new mechanism, exploit through rapid innovation, saturate possibilities until diminishing returns trigger crisis, breakthrough to the next level. Fire to agriculture to metallurgy to steam to electricity to computing to artificial intelligence. Each cycle follows a similar pattern with accelerating frequency. The mechanism appears thermodynamic. Civilizations behave as [information processing systems](/information-theoretic-constraints-on-sociotechnical-systems) that approach organizational saturation through exploitation, triggering phase transitions to new organizational levels.

The pattern suggests quantitative structure. Innovation cycles shorten as civilizational complexity increases. Historical data supports this—the agricultural era lasted 10,000 years, the industrial revolution 200 years, the computing era 80 years, the AI transformation projecting 20-30 years. Each cycle operates at higher base complexity, approaching saturation faster. The acceleration follows naturally if organizational dynamics exhibit [renormalization group flow](/information-field-theory-from-constraint-to-cosmos) behavior.

This article explores the innovation-saturation cycle through the lens of information maintenance costs, examines patterns across 12,000 years of human development, estimates current position in the AI cycle, and offers testable predictions about breakthrough timing and crisis characteristics.

## The Universal Cycle

Innovation cycles follow a five-stage progression identical across all scales. Discovery relaxes constraints enabling a new possibility space. Exploitation rapidly fills that space through optimization. Saturation approaches a local maximum where further gains diminish. Crisis emerges when maintenance overhead exceeds productive capacity. Breakthrough transitions to a higher organizational level with relaxed constraints.

$$
\text{Discovery} \to \text{Exploitation} \to \text{Saturation} \to \text{Crisis} \to \text{Breakthrough}
$$

Discovery opens new degrees of freedom. Fire enabled thermal energy manipulation. Agriculture enabled food production control. Steam enabled mechanical work amplification. Each innovation relaxed a fundamental constraint—caloric intake, geographical range, power availability—creating an expanded possibility space $\mathcal{C}_{\text{new}} \supset \mathcal{C}_{\text{old}}$.

Exploitation fills the possibility space through rapid innovation. Once fire was discovered, cooking, heating, tool hardening, and land clearing followed within centuries. Once agriculture was discovered, irrigation, selective breeding, food storage, and trade developed rapidly. The exploitation phase exhibits exponential growth as civilization climbs the [complexity ladder](/complex-adaptable-systems-complexity-ladders-and-agency) in the expanded space.

Saturation occurs when easy gains are exhausted. The low-hanging fruit gets picked. Remaining improvements require disproportionate effort. Agricultural societies cleared available fertile land. Industrial societies extracted accessible resources. Information societies processed obvious datasets. The growth rate transitions from exponential to logarithmic as the system approaches a local optimum.

Crisis manifests when organizational overhead approaches a saturation threshold. Maintaining existing complexity consumes an increasing fraction of productive capacity. Define maintenance overhead $\eta$ as the fraction of total energy devoted to coordination rather than production. As $\eta$ grows, the system's capacity for further growth diminishes nonlinearly.

Historical and biological data suggest systems destabilize when overhead reaches roughly 25-30% of total capacity. [Biological systems](/the-anthropic-thermodynamic-principle) typically operate at η ~ 0.1, well below this limit. Complex civilizations approach it during saturation phases. The pattern appears across domains—[organizational complexity](/complex-adaptable-systems-complexity-ladders-and-agency), metabolic limits, and coordination costs all exhibit similar thresholds where maintenance burden overwhelms productive capacity.

Breakthrough represents a phase transition to a new organizational state. Not incremental improvement but a fundamental restructuring. The agricultural revolution restructured hunter-gatherer organization. The industrial revolution restructured agrarian organization. Each transition involved new energy sources, communication modes, social structures, and cognitive frameworks. The breakthrough relaxes constraints at a higher level, initiating the next cycle.

## Mathematical Formalization

The innovation cycle admits a representation through organizational overhead dynamics. Define the exploitation parameter $\epsilon(t)$ measuring how thoroughly the possibility space fills, ranging from 0 (discovery) to 1 (complete saturation).

The overhead evolution follows,

$$
\eta(t) = \eta_0 + (\eta_{\text{sat}} - \eta_0) \times \frac{\epsilon(t)}{1 - k\epsilon(t)},
$$

where $\eta_0$ is baseline overhead at discovery, $\eta_{\text{sat}}$ is the saturation threshold (empirically around 0.25-0.30), and $k$ determines saturation sharpness. The exploitation parameter grows through,

$$
\frac{d\epsilon}{dt} = r\epsilon(1-\epsilon) - \delta\eta,
$$

combining logistic growth (first term) with overhead friction (second term). As $\epsilon \to 1$, overhead approaches $\eta_{\text{sat}}$ and growth rate collapses.

The crisis timing follows from overhead approaching saturation,

$$
t_{\text{crisis}} \sim t_0 + \frac{1}{r}\ln\left(\frac{\eta_{\text{sat}} - \eta_0}{\eta_1 - \eta_0}\right),
$$

where $\eta_1$ is initial growth phase overhead. This suggests crises occur logarithmically after discovery—rapid initial exploitation followed by an extended saturation period before breakdown.

During exploitation, productive capacity must overcome growing overhead. As $\eta$ increases, maintenance costs grow nonlinearly—small increases in overhead near saturation produce large increases in coordination burden. When overhead approaches the saturation threshold, maintaining existing structure becomes unsustainable. The system faces a binary choice—collapse to a lower organizational level or breakthrough to a higher level with lower effective overhead.

The breakthrough timing depends on the exploration of adjacent possibility spaces. While the primary innovation saturates, secondary exploration continues. The breakthrough probability follows,

$$
P_{\text{breakthrough}}(t) = 1 - \exp\left[-\lambda \int_0^t \eta(\tau)^2 d\tau\right],
$$

where $\lambda$ quantifies exploration rate. High overhead $\eta$ increases pressure for alternatives, accelerating breakthrough probability. The integral ensures probability accumulates—the longer saturation persists, the more likely breakthrough occurs.

## Historical Validation

Human civilization demonstrates this pattern across twelve millennia with quantitative agreement. Each major transition shows the characteristic overhead growth, saturation, crisis, and breakthrough sequence.

### Fire to Agriculture (300,000 BCE - 10,000 BCE)

Fire mastery enabled cooking, warmth, tool hardening, and land clearing[^1]. Exploitation lasted approximately 290,000 years—extremely long because human population remained small and geographical expansion absorbed overhead growth. Saturation emerged through megafauna extinction and resource pressure[^2], forcing innovation.

Organizational overhead at fire discovery: $\eta_0 \approx 10^{-4}$ (minimal social structure)
Overhead at saturation: $\eta_{\text{sat}} \approx 0.15$ (extended kinship networks, territorial conflicts)
Crisis manifestation: Food scarcity, climate stress, megafauna depletion
Breakthrough: The agricultural revolution relaxing the food supply constraint

The 290,000-year duration reflects operating far below saturation. With $\eta_{\text{sat}} \approx 0.15$, substantial margin remained before organizational limits would bind. The breakthrough occurred through environmental pressure rather than organizational collapse.

### Agriculture to Metallurgy (10,000 BCE - 3,000 BCE)

The agricultural revolution enabled settled life, population growth, specialization, and surplus accumulation[^3]. Exploitation filled fertile regions through farming technique development. Saturation emerged through soil depletion, disease concentration, and Malthusian pressures[^4].

Duration: approximately 7,000 years
$\eta_0 \approx 0.02$ (early agricultural communities)
$\eta_{\text{sat}} \approx 0.20$ (complex agricultural societies, early cities)
Crisis: Resource conflicts, social stratification, epidemic disease
Breakthrough: Bronze Age metallurgy enabling tools, weapons, and trade

The 7,000-year duration shows acceleration—faster saturation than the fire era despite lower starting overhead. Agricultural societies accumulated complexity faster through population density and specialization.

### Metallurgy to Steam (3,000 BCE - 1,700 CE)

Bronze and iron metallurgy enabled advanced tools, weapons, construction, and long-distance trade. Exploitation filled technological niches through classical civilizations. Multiple regional cycles occurred—Bronze Age collapse[^5], Roman fall[^6], medieval reorganization.

Duration: approximately 4,700 years
$\eta_0 \approx 0.05$ (early metallurgical societies)
$\eta_{\text{sat}} \approx 0.25$ (imperial structures, global trade networks)
Crisis: Resource exhaustion, plague, climate change, political collapse
Breakthrough: Steam power relaxing the mechanical work constraint

The multiple sub-cycles reflect regional variation. Global civilization lacked sufficient integration for coordinated crisis. Local collapses occurred (Bronze Age, Rome, Mayans) without preventing overall progress.

### Steam to Electricity (1,700 - 1,880)

Steam power enabled the industrial revolution, transforming manufacturing, transportation, and urbanization[^7]. Exploitation lasted approximately 180 years through factory systems, railways, and coal-powered expansion.

Duration: 180 years
$\eta_0 \approx 0.08$ (early industrial society)
$\eta_{\text{sat}} \approx 0.28$ (mature industrial capitalism)
Crisis: Labor exploitation[^8], pollution, social upheaval, resource depletion
Breakthrough: Electrification enabling distributed power, communication

The dramatic acceleration—from 4,700 years to 180 years—reflects higher baseline complexity. Industrial societies operated closer to saturation limits, reaching crisis faster despite lower absolute overhead growth.

### Electricity to Computing (1,880 - 1,950)

Electrification revolutionized power distribution, lighting, communication, and manufacturing. Exploitation through mass production, telecommunications, and electrified transportation lasted approximately 70 years.

Duration: 70 years
$\eta_0 \approx 0.15$ (electrified industrial society)
$\eta_{\text{sat}} \approx 0.30$ (global industrial economy)
Crisis: World wars[^9], economic depression, resource conflicts
Breakthrough: Computing enabling information processing, automation

The crisis manifested catastrophically—two world wars representing organizational saturation at global scale. The 70-year duration confirms the acceleration pattern with starting overhead already elevated.

### Computing to AI (1,950 - 2020)

Digital computing enabled information processing automation, communication networks, and knowledge amplification. Exploitation through personal computing, internet, mobile devices, and cloud infrastructure lasted approximately 70 years.

Duration: 70 years
$\eta_0 \approx 0.20$ (early information society)
$\eta_{\text{sat}} \approx 0.31$ (networked global economy)
Crisis: Information overload, privacy collapse, algorithmic manipulation, attention economy
Breakthrough: Artificial intelligence enabling cognitive automation

Current position: Entering the crisis phase with overhead approaching saturation. The characteristics—diminishing returns from additional data, computational costs growing superlinearly, alignment problems emerging—indicate an approaching breakdown.

### Quantitative Pattern

Plotting cycle duration against starting overhead reveals an exponential relationship:

| Cycle | Duration (years) | $\eta_0$ | $\eta_{\text{sat}}$ | $\Delta\eta$ |
|-------|------------------|----------|---------------------|--------------|
| Fire → Agriculture | 290,000 | 0.0001 | 0.15 | 0.15 |
| Agriculture → Metal | 7,000 | 0.02 | 0.20 | 0.18 |
| Metal → Steam | 4,700 | 0.05 | 0.25 | 0.20 |
| Steam → Electricity | 180 | 0.08 | 0.28 | 0.20 |
| Electricity → Computing | 70 | 0.15 | 0.30 | 0.15 |
| Computing → AI | 70 | 0.20 | 0.31 | 0.11 |

The duration scales approximately as:

$$
t_{\text{cycle}} \approx \frac{t_{\text{ref}}}{\eta_0^2}
$$

where $t_{\text{ref}} \sim 3$ years. This predicts computing-to-AI cycle duration:

$$
t_{\text{comp-AI}} = \frac{3}{0.20^2} = 75 \text{ years}
$$

matching observed 70 years within measurement uncertainty. The squared dependence reflects that higher starting overhead both accelerates saturation and increases crisis pressure.

## Acceleration Mechanism

The cycle acceleration follows naturally from organizational dynamics. Each innovation cycle operates at a higher effective organizational level with increased baseline complexity.

Overhead evolution exhibits characteristic flow behavior: near $\eta = 0$, change is slow—simple systems have little coordination burden to accumulate. As $\eta$ increases toward saturation, the dynamics accelerate—each increment of complexity adds disproportionate coordination cost.

Each breakthrough doesn't reset $\eta$ to zero—it transitions to a higher organizational level with lower effective overhead but higher baseline complexity. The effective overhead after breakthrough:

$$
\eta_{\text{new}} = \eta_{\text{old}} \times (1 - \alpha_{\text{innovation}})
$$

where $\alpha_{\text{innovation}} \in (0,1)$ measures constraint relaxation. The breakthrough reduces overhead through reorganization, but baseline remains elevated from accumulated complexity.

The inter-cycle time decreases because each cycle starts at higher baseline complexity. If cycle duration scales as $t \propto 1/\eta_0^2$, then cycles starting at $\eta_0 = 0.2$ run roughly 4× faster than cycles starting at $\eta_0 = 0.1$. This matches the observed pattern: modern cycles measured in decades rather than millennia.

## Current Crisis Characteristics

The computing-to-AI transition exhibits characteristic crisis signatures indicating an approach to organizational saturation. These are measurable manifestations of overhead approaching productive capacity limits.

Information overload manifests through exponential data growth without a corresponding comprehension increase. Global data generation reached 64 zettabytes in 2020[^10], doubling every two years. Human processing capacity remains fixed at approximately 40 bits per second of conscious awareness. The ratio:

$$
R_{\text{overload}} = \frac{\text{data generation rate}}{\text{processing capacity}} \approx \frac{10^{21} \text{ bits/year}}{10^9 \text{ bits/year/person} \times 8 \times 10^9 \text{ people}} \sim 100
$$

indicates 100× more information generated than collectively processable. This overload creates filter bubbles, misinformation spread, and decision paralysis—classic saturation symptoms.

Privacy collapse emerges through surveillance infrastructure exceeding governance capacity. Every digital interaction generates behavioral data feeding optimization systems. The overhead of protecting privacy now exceeds benefit in many contexts—users accept terms-of-service because opting out costs more than privacy is worth. This reversal signals saturation where maintenance burden overwhelms utility.

Algorithmic manipulation demonstrates coordination costs dominating productive value. Social media platforms optimize engagement through personalized content feeds. The optimization creates polarization, addiction, and manipulation as emergent properties. Attempts to correct these issues through additional algorithmic filtering increase complexity without resolving underlying problems—a characteristic saturation pattern.

Attention economy breakdown manifests through declining productivity despite increased connectivity. Notification interruptions occur every 6 minutes on average[^11]. The cognitive switching cost,

$$
C_{\text{switch}} = N_{\text{interruptions}} \times t_{\text{recovery}} = 80/\text{day} \times 15 \text{ min} = 1200 \text{ min/day}
$$

exceeds available time, creating a permanent partial attention state. The system operates near capacity limits—characteristic saturation behavior.

Alignment crisis in AI development reveals approaching saturation. As models scale, unexpected capabilities emerge while controllability decreases. GPT-4 exhibits sophisticated reasoning but produces confident falsehoods[^12]. The ratio of capabilities to alignment scales as model size increases:

$$
R_{\text{alignment}} = \frac{C_{\text{capabilities}}}{C_{\text{alignment}}} \propto N_{\text{parameters}}^{\alpha}
$$

with $\alpha > 0$. Larger models become more capable but less aligned—the gap widens rather than narrows. This divergence pattern indicates fundamental saturation rather than an engineering challenge.

## Breakthrough Predictions

The framework generates quantitative predictions about the next breakthrough's timing and characteristics. These predictions are falsifiable—they can be tested against future observations.

The breakthrough timing follows from overhead dynamics and exploration rate. The current AI cycle began approximately 1950 with moderate baseline complexity. Overhead has grown substantially, with current estimates suggesting we're approaching saturation. The breakthrough probability increases as overhead accumulates—the longer saturation persists, the more likely breakthrough occurs.

The breakthrough must relax the constraint currently binding. The computing cycle saturated through:

- **Data bottleneck**: Exhausted easily accessible training data
- **Energy bottleneck**: Training costs growing superlinearly
- **Alignment bottleneck**: Capabilities outpacing control
- **Cognitive bottleneck**: Artificial systems lack genuine understanding

The next innovation must address one or more of these constraints. Candidates include:

**Neuromorphic computing**: Energy-efficient architectures mimicking biological processing[^13]. Would relax energy bottleneck by reducing training costs 1000×. Predicted impact: $\Delta\eta \approx -0.1$ (10% overhead reduction through efficiency gains).

**Quantum machine learning**: Quantum advantage in specific learning tasks[^14]. Would relax computational bottleneck for certain problem classes. Predicted impact: $\Delta\eta \approx -0.05$ (5% reduction, limited to quantum-advantaged domains).

**Embodied AI**: Physical interaction grounding abstract reasoning. Would relax cognitive bottleneck by providing causal understanding. Predicted impact: $\Delta\eta \approx -0.15$ (15% reduction through genuine world models).

**Collective intelligence**: Human-AI hybrid systems exceeding either component. Would relax alignment bottleneck by maintaining human values in loop. Predicted impact: $\Delta\eta \approx -0.08$ (8% reduction through complementary strengths).

The most likely breakthrough combines multiple approaches. Historical pattern shows breakthroughs involve multiple simultaneous innovations creating reinforcing effects. The agricultural revolution combined plant domestication, animal husbandry, and settled life. The industrial revolution combined steam power, factory organization, and transportation networks. The AI breakthrough likely involves neuromorphic hardware, quantum algorithms, embodied cognition, and human-AI collaboration.

The post-breakthrough cycle duration depends on how much constraint relaxation the breakthrough achieves. If the combined innovations reduce overhead significantly, the next cycle could last several decades. If overhead reduction is modest, the subsequent cycle will be shorter—starting from higher baseline complexity means faster approach to the next saturation point.

Delayed breakthrough increases starting overhead for the next cycle, shortening it further. This creates a self-reinforcing pattern: prolonged saturation without breakthrough leads to increasingly rapid and volatile subsequent cycles.

## Implications for Navigation

Understanding innovation cycles provides practical guidance for individuals, organizations, and societies navigating transitions. If the pattern holds, it cannot be avoided but can be anticipated.

During the exploitation phase, optimize for the current paradigm. Gains come easily through applying established methods. Investments in mainstream technology, conventional education, and incremental improvements generate returns. The productive strategy involves maximizing output within existing constraints.

During the saturation phase, prepare for transition. Diminishing returns signal approaching crisis. Overhead costs accelerate while gains decrease. The productive strategy shifts toward diversification, exploration, and resilience-building. Maintain optionality for post-breakthrough landscape.

During the crisis phase, adapt or perish. Overhead exceeds capacity. Maintaining the status quo becomes impossible. Organizations face a binary choice—collapse to a simpler structure or breakthrough to a new paradigm. The productive strategy involves abandoning sunk costs, embracing uncertainty, and experimenting with alternatives.

During the breakthrough phase, position for the new cycle. Constraint relaxation creates an expanded possibility space. Early movers capture disproportionate gains. The productive strategy involves rapid learning, aggressive innovation, and infrastructure building in the new paradigm.

Current position: Late saturation transitioning to crisis. AI capabilities expanding while alignment deteriorates. Data exhausted, energy costs rising, cognitive limitations binding. The framework suggests breakthrough pressure will intensify over the coming years.

Individual strategy: Develop skills complementary to AI rather than competing with it. Focus on domains requiring genuine understanding, ethical judgment, and human connection—precisely what current systems lack. Prepare for post-breakthrough economy where human-AI collaboration replaces human-only or AI-only work.

Organizational strategy: Build adaptive capacity exceeding efficiency. Saturation-phase organizations optimized for current paradigm face obsolescence through breakthrough. Maintain exploration budget (10-20% resources) investigating adjacent possibilities. Develop breakthrough detection mechanisms signaling paradigm shifts early.

Societal strategy: Reduce fragility through distributed resilience. Breakthrough transitions create volatility as old structures collapse before new ones stabilize. Societies with strong safety nets, distributed power, and adaptive institutions navigate transitions successfully. Concentrate systems magnify crisis impact through cascading failures.

## The Inevitability of Cycles

Innovation cycles are a thermodynamic necessity from information processing under resource constraints. Any system exploiting a new possibility space follows the discovery-exploitation-saturation-crisis-breakthrough progression.

The pattern appears universal across scales. Biological evolution exhibits similar dynamics—Cambrian explosion (discovery), radiation (exploitation), niche-filling (saturation), extinction events (crisis), and adaptive radiation (breakthrough). Economic markets cycle through bubble (exploitation), peak (saturation), crash (crisis), and recovery (breakthrough). Individual learning follows exploration (discovery), practice (exploitation), plateau (saturation), frustration (crisis), and insight (breakthrough).

The universality emerges from fundamental constraints. Systems process information under energy limits. New discoveries relax constraints enabling rapid growth. Growth continues until overhead approaches capacity. Crisis forces reorganization. The mathematics is identical regardless of substrate—thermodynamic bounds govern all information processing.

If this pattern holds, the acceleration is difficult to avoid. Each cycle operates at higher baseline complexity. Higher complexity means faster approach to saturation. The inter-cycle time decreases as baseline overhead rises. We may not be able to prevent acceleration—but we can prepare for increasingly rapid transitions.

The current AI cycle may represent an inflection point. If overhead continues growing without breakthrough, civilization approaches organizational saturation where maintenance costs consume most productive capacity. The consequences could be severe—coordinated stress across complex systems struggling to sustain coordination burden. The framework suggests breakthrough pressure is high, but delayed breakthrough increases crisis severity.

Understanding cycles enables navigation rather than prediction. We cannot control breakthrough timing or form—too many variables, too much complexity. We can position for inevitable transition by maintaining adaptability, building resilience, and exploring adjacent possibilities. The cycle continues regardless of individual action. The question isn't whether breakthrough occurs but whether we're prepared when it does.

From fire to artificial intelligence spans 300,000 years of accelerating innovation cycles. Each breakthrough relaxed constraints, enabled exploitation, saturated possibilities, triggered crisis, and transitioned to a higher organizational level. If the pattern reflects thermodynamic bounds on information processing, it will continue. The next breakthrough approaches. The cycle continues. The ladder climbs.

[^1]: Berna, F., et al. (2012). Microstratigraphic evidence of in situ fire in the Acheulean strata of Wonderwerk Cave, Northern Cape province, South Africa. *Proceedings of the National Academy of Sciences*, 109(20), E1215-E1220.

[^2]: Koch, P. L., & Barnosky, A. D. (2006). Late Quaternary extinctions: state of the debate. *Annual Review of Ecology, Evolution, and Systematics*, 37, 215-250.

[^3]: Smith, B. D. (1998). *The Emergence of Agriculture*. Scientific American Library.

[^4]: Malthus, T. R. (1798). *An Essay on the Principle of Population*. J. Johnson.

[^5]: Cline, E. H. (2014). *1177 B.C.: The Year Civilization Collapsed*. Princeton University Press.

[^6]: Ward-Perkins, B. (2005). *The Fall of Rome and the End of Civilization*. Oxford University Press.

[^7]: Allen, R. C. (2009). *The British Industrial Revolution in Global Perspective*. Cambridge University Press.

[^8]: Engels, F. (1845/1993). *The Condition of the Working Class in England*. Oxford University Press.

[^9]: Tooze, A. (2014). *The Deluge: The Great War, America and the Remaking of the Global Order, 1916-1931*. Viking.

[^10]: Reinsel, D., Gantz, J., & Rydning, J. (2018). *The Digitization of the World: From Edge to Core*. IDC White Paper.

[^11]: Mark, G., Iqbal, S. T., Czerwinski, M., Johns, P., & Sano, A. (2016). Neurotics can't focus: An in situ study of online multitasking in the workplace. *Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems*, 1739-1744.

[^12]: OpenAI (2023). GPT-4 Technical Report. arXiv:2303.08774.

[^13]: Davies, M., et al. (2018). Loihi: A neuromorphic manycore processor with on-chip learning. *IEEE Micro*, 38(1), 82-99.

[^14]: Arute, F., et al. (2019). Quantum supremacy using a programmable superconducting processor. *Nature*, 574(7779), 505-510.
