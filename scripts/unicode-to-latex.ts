export function unicodeToLatex(text: string): string {
  let result = text;

  // Handle superscript sequences (e.g., ⁻⁸⁴ -> ^{-84})
  const superMap: Record<string, string> = {
    "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4",
    "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9",
    "⁻": "-", "⁺": "+",
  };
  result = result.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+/g, (match) => {
    const converted = match.split("").map((c) => superMap[c] || c).join("");
    return `$^{${converted}}$`;
  });

  // Handle subscript sequences (e.g., ₁₀ -> _{10})
  const subMap: Record<string, string> = {
    "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4",
    "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9",
  };
  result = result.replace(/[₀₁₂₃₄₅₆₇₈₉]+/g, (match) => {
    const converted = match.split("").map((c) => subMap[c] || c).join("");
    return `$_{${converted}}$`;
  });

  const replacements: [RegExp, string][] = [
    // Greek letters
    [/π/g, "$\\pi$"],
    [/φ/g, "$\\varphi$"],
    [/ξ/g, "$\\xi$"],
    [/β/g, "$\\beta$"],
    [/σ/g, "$\\sigma$"],
    [/Ω/g, "$\\Omega$"],
    [/α/g, "$\\alpha$"],
    [/γ/g, "$\\gamma$"],
    [/δ/g, "$\\delta$"],
    [/ε/g, "$\\varepsilon$"],
    [/η/g, "$\\eta$"],
    [/θ/g, "$\\theta$"],
    [/λ/g, "$\\lambda$"],
    [/μ/g, "$\\mu$"],
    [/ρ/g, "$\\rho$"],
    [/τ/g, "$\\tau$"],
    [/ω/g, "$\\omega$"],
    [/Δ/g, "$\\Delta$"],
    [/Γ/g, "$\\Gamma$"],
    [/Λ/g, "$\\Lambda$"],
    [/Σ/g, "$\\Sigma$"],
    [/Φ/g, "$\\Phi$"],
    [/Ψ/g, "$\\Psi$"],

    // Math symbols
    [/≈/g, "$\\approx$"],
    [/≫/g, "$\\gg$"],
    [/≪/g, "$\\ll$"],
    [/×/g, "$\\times$"],
    [/−/g, "$-$"],
    [/±/g, "$\\pm$"],
    [/∞/g, "$\\infty$"],
    [/√/g, "$\\sqrt{}$"],
    [/∂/g, "$\\partial$"],
    [/∇/g, "$\\nabla$"],
    [/∫/g, "$\\int$"],
    [/∑/g, "$\\sum$"],
    [/∏/g, "$\\prod$"],
    [/→/g, "$\\to$"],
    [/←/g, "$\\leftarrow$"],
    [/↔/g, "$\\leftrightarrow$"],
    [/⇒/g, "$\\Rightarrow$"],
    [/⇐/g, "$\\Leftarrow$"],
    [/⇔/g, "$\\Leftrightarrow$"],
    [/≤/g, "$\\leq$"],
    [/≥/g, "$\\geq$"],
    [/≠/g, "$\\neq$"],
    [/∈/g, "$\\in$"],
    [/∉/g, "$\\notin$"],
    [/⊂/g, "$\\subset$"],
    [/⊃/g, "$\\supset$"],
    [/∪/g, "$\\cup$"],
    [/∩/g, "$\\cap$"],
    [/∅/g, "$\\emptyset$"],
    [/∀/g, "$\\forall$"],
    [/∃/g, "$\\exists$"],
    [/¬/g, "$\\neg$"],
    [/∧/g, "$\\land$"],
    [/∨/g, "$\\lor$"],
  ];

  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }

  // Merge adjacent math modes: $X$$Y$ -> $XY$
  result = result.replace(/\$\$/g, "");

  return result;
}
