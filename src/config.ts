import type { ThemeConfig } from "./types";

export const themeConfig: ThemeConfig = {
	// SITE INFO ///////////////////////////////////////////////////////////////////////////////////////////
	site: {
		website: "https://scienceandmathematics.com/", // Site domain
		title: "Science & Mathematics", // Site title
		author: "Kurtis Kemple", // Author name
		description:
			"A first principles exploration of how knowledge emerges across disciplines, designed for deep understanding and synthesis. Examining the causal mechanisms that unite seemingly disparate fields, revealing elegant structures from quantum mechanics to biological systems.", // Site description
		language: "en-US", // Default language
	},

	// GENERAL SETTINGS ////////////////////////////////////////////////////////////////////////////////////
	general: {
		contentWidth: "40rem", // Content area width
		centeredLayout: true, // Use centered layout (false for left-aligned)
		themeToggle: true, // Show theme toggle button (uses system theme by default)
		postListDottedDivider: true, // Show dotted divider in post list
		footer: true, // Show footer
		fadeAnimation: true, // Enable fade animations
	},

	// DATE SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
	date: {
		dateFormat: "YYYY-MM-DD", // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
		dateSeparator: ".", // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
		dateOnRight: true, // Date position in post list (true for right, false for left)
	},

	// POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
	post: {
		readingTime: false, // Show reading time in posts
		toc: true, // Show table of contents (when there is enough page width)
		imageViewer: true, // Enable image viewer
		copyCode: true, // Enable copy button in code blocks
		linkCard: true, // Enable link card
	},
};
