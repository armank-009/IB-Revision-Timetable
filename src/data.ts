export interface Session {
  id: string;
  title: string;
  description: string;
  subject: string;
  type: 'content' | 'skills' | 'exam' | 'recall';
}

export interface DayPlan {
  date: string; // ISO string
  phase: number;
  session1: Session;
  session2: Session;
  focus: string;
  isExamDay?: boolean;
}

export const REVISION_DATA: DayPlan[] = [
  // PHASE 1: High-Volume Content Mastery
  {
    date: '2026-04-03',
    phase: 1,
    focus: 'Foundations',
    session1: { id: 'p1-d1-s1', subject: 'Bio HL', title: 'A1.1, A1.2, A2.1', description: 'Water, Nucleic acids, Origins of cells', type: 'content' },
    session2: { id: 'p1-d1-s2', subject: 'Math SL', title: '1.1-1.5 (Algebra)', description: 'Number Toolkit, Standard form, Exponents & logs, GDC', type: 'skills' }
  },
  {
    date: '2026-04-04',
    phase: 1,
    focus: 'Math Logic',
    session1: { id: 'p1-d2-s1', subject: 'Bio HL', title: 'A2.2, A2.3, A3.1', description: 'Cell structure, Viruses, Diversity of organisms', type: 'content' },
    session2: { id: 'p1-d2-s2', subject: 'Math SL', title: '1.6-1.9 (Sequences)', description: 'Arithmetic & Geometric sequences & series', type: 'skills' }
  },
  {
    date: '2026-04-05',
    phase: 1,
    focus: 'Calculation',
    session1: { id: 'p1-d3-s1', subject: 'Bio HL', title: 'A3.2, A4.1, A4.2', description: 'Classification/Cladistics, Evolution, Biodiversity', type: 'content' },
    session2: { id: 'p1-d3-s2', subject: 'Math SL', title: '1.10-1.11 (Finance)', description: 'Compound interest, Amortisation & annuities', type: 'skills' }
  },
  {
    date: '2026-04-06',
    phase: 1,
    focus: 'Biz Intro',
    session1: { id: 'p1-d4-s1', subject: 'Bio HL', title: 'B1.1, B1.2, B2.1', description: 'Carbs/Lipids, Proteins, Membranes & transport', type: 'content' },
    session2: { id: 'p1-d4-s2', subject: 'Bus SL', title: 'Unit 1: Intro to Biz', description: 'Entities, Objectives, Stakeholders, MNCs', type: 'content' }
  },
  {
    date: '2026-04-07',
    phase: 1,
    focus: 'Functions',
    session1: { id: 'p1-d5-s1', subject: 'Bio HL', title: 'B2.2, B2.3, B3.1', description: 'Organelles, Cell specialization, Gas exchange', type: 'content' },
    session2: { id: 'p1-d5-s2', subject: 'Math SL', title: '2.1-2.4 (Functions)', description: 'Linear Functions, Equations, Graphing properties', type: 'skills' }
  },
  {
    date: '2026-04-08',
    phase: 1,
    focus: 'HR Concepts',
    session1: { id: 'p1-d6-s1', subject: 'Bio HL', title: 'B3.2, B3.3, B4.1', description: 'Transport, Muscle/Motility, Adaptation', type: 'content' },
    session2: { id: 'p1-d6-s2', subject: 'Bus SL', title: 'Unit 2: HRM', description: 'Org Structure, Leadership, Motivation, Communication', type: 'content' }
  },
  {
    date: '2026-04-09',
    phase: 1,
    focus: 'Modelling',
    session1: { id: 'p1-d7-s1', subject: 'Bio HL', title: 'B4.2, C1.1, C1.2', description: 'Niches, Enzymes/Metabolism, Cell respiration', type: 'content' },
    session2: { id: 'p1-d7-s2', subject: 'Math SL', title: '2.5-2.8 (Modelling)', description: 'Quad, Cubic, Exp, Sinusoidal models', type: 'skills' }
  },
  {
    date: '2026-04-10',
    phase: 1,
    focus: 'Trigonometry',
    session1: { id: 'p1-d8-s1', subject: 'Bio HL', title: 'C1.3, C2.1, C2.2', description: 'Photosynthesis, Signaling, Neural signaling', type: 'content' },
    session2: { id: 'p1-d8-s2', subject: 'Math SL', title: '3.1-3.3 (Trig)', description: 'Trig Toolkit, Arcs & Sectors, coordinate geometry', type: 'skills' }
  },
  {
    date: '2026-04-11',
    phase: 1,
    focus: 'P1 Sources',
    session1: { id: 'p1-d9-s1', subject: 'Bus SL', title: 'Unit 3: Finance (1)', description: 'Intro, Sources, Costs/Revenues, Final Accounts', type: 'content' },
    session2: { id: 'p1-d9-s2', subject: 'History SL', title: 'Prescribed Subject', description: 'Case Study Practice (1 Topic)', type: 'skills' }
  },
  {
    date: '2026-04-12',
    phase: 1,
    focus: 'Finance Math',
    session1: { id: 'p1-d10-s1', subject: 'Bio HL', title: 'C3.1, C3.2, C4.1', description: 'Body systems, Disease, Populations', type: 'content' },
    session2: { id: 'p1-d10-s2', subject: 'Bus SL', title: 'Unit 3: Finance (2)', description: 'Ratios, Cash Flow, Investment Appraisal', type: 'skills' }
  },
  {
    date: '2026-04-13',
    phase: 1,
    focus: 'Geometry',
    session1: { id: 'p1-d11-s1', subject: 'Bio HL', title: 'C4.2, D1.1, D1.2', description: 'Energy, DNA Rep, Protein Synthesis', type: 'content' },
    session2: { id: 'p1-d11-s2', subject: 'Math SL', title: '3.4-3.6 (3D Geom)', description: '3D coordinate geometry, Vol/SA, Non-right Trig', type: 'skills' }
  },
  {
    date: '2026-04-14',
    phase: 1,
    focus: 'Spatial Math',
    session1: { id: 'p1-d12-s1', subject: 'Bio HL', title: 'D1.3, D2.1, D2.2', description: 'Mutation/Editing, Cell division, Gene expression', type: 'content' },
    session2: { id: 'p1-d12-s2', subject: 'Math SL', title: '3.7-3.8 (Voronoi)', description: 'Voronoi Diagrams, Toxic waste dump problem', type: 'skills' }
  },

  // PHASE 2: Subject Integration
  {
    date: '2026-04-15',
    phase: 2,
    focus: 'Hist P2 Prep',
    session1: { id: 'p2-d1-s1', subject: 'History SL', title: 'Authoritarian States', description: 'Rise & Rule (World History Topic 1)', type: 'content' },
    session2: { id: 'p2-d1-s2', subject: 'Math SL', title: '4.1-4.5 (Stats)', description: 'Sampling, Statistical measures, Univariate', type: 'skills' }
  },
  {
    date: '2026-04-16',
    phase: 2,
    focus: 'Hist Analysis',
    session1: { id: 'p2-d2-s1', subject: 'History SL', title: 'Authoritarian States', description: 'Rule & Impact (World History Topic 1)', type: 'content' },
    session2: { id: 'p2-d2-s2', subject: 'Math SL', title: '4.6-4.8 (Regression)', description: 'Correlation & Bivariate Regression', type: 'skills' }
  },
  {
    date: '2026-04-17',
    phase: 2,
    focus: 'Content Cycle',
    session1: { id: 'p2-d3-s1', subject: 'History SL', title: 'The Cold War', description: 'Origins & Early Crises (World History Topic 2)', type: 'content' },
    session2: { id: 'p2-d3-s2', subject: 'Bio HL', title: 'D2.3, D3.1, D3.2', description: 'Water potential, Reproduction, Inheritance', type: 'content' }
  },
  {
    date: '2026-04-18',
    phase: 2,
    focus: 'Probability',
    session1: { id: 'p2-d4-s1', subject: 'Bus SL', title: 'Unit 4: Marketing', description: 'Planning, Research, The Seven Ps', type: 'content' },
    session2: { id: 'p2-d4-s2', subject: 'Math SL', title: '4.9-4.11 (Prob)', description: 'Probability, Conditional, Sample Space', type: 'skills' }
  },
  {
    date: '2026-04-19',
    phase: 2,
    focus: 'P1 Literacy',
    session1: { id: 'p2-d5-s1', subject: 'Bus SL Toolkit', title: 'SWOT, Ansoff, STEEPLE, BCG', description: 'Matrix Analysis & Strategic Tools', type: 'skills' },
    session2: { id: 'p2-d5-s2', subject: 'English HL', title: 'Paper 1: Non-Literary Analysis', description: 'Analyzing visual and textual stylistic devices', type: 'skills' }
  },
  {
    date: '2026-04-20',
    phase: 2,
    focus: 'Bio Final',
    session1: { id: 'p2-d6-s1', subject: 'Bus SL Toolkit', title: 'Biz Plans, Decision Trees', description: 'Circular Models & Descriptive Stats', type: 'skills' },
    session2: { id: 'p2-d6-s2', subject: 'Bio HL', title: 'D3.3, D4.1, D4.2', description: 'Homeostasis, Natural selection, Stability', type: 'content' }
  },
  {
    date: '2026-04-21',
    phase: 2,
    focus: 'Dist. Models',
    session1: { id: 'p2-d7-s1', subject: 'History SL', title: 'The Cold War', description: 'Crises, Détente, End (World History Topic 2)', type: 'content' },
    session2: { id: 'p2-d7-s2', subject: 'Math SL', title: '4.12-4.14 (Dist)', description: 'Discrete & Binomial Distribution', type: 'skills' }
  },
  {
    date: '2026-04-22',
    phase: 2,
    focus: 'Stats Mastery',
    session1: { id: 'p2-d8-s1', subject: 'Bus SL', title: 'Unit 5 & Final Drill', description: 'Operations Mgmt (5.1-5.5) + Units 1-4 Recall', type: 'recall' },
    session2: { id: 'p2-d8-s2', subject: 'Math SL', title: '4.15-4.18 (Tests)', description: 'Normal dist, Chi-sq, T-test', type: 'skills' }
  },
  {
    date: '2026-04-23',
    phase: 2,
    focus: 'French Skills',
    session1: { id: 'p2-d9-s1', subject: 'Math SL', title: '5.1-5.3 (Diff)', description: 'Differentiation & Apps, Modelling', type: 'content' },
    session2: { id: 'p2-d9-s2', subject: 'French HL', title: 'Paper 1 Prep', description: 'Readers/Writers, Time/Space, Intertextuality', type: 'skills' }
  },
  {
    date: '2026-04-24',
    phase: 2,
    focus: 'Calculus',
    session1: { id: 'p2-d10-s1', subject: 'Bus SL', title: 'Paper 1 Case Study', description: 'Mock Practice & Theory Application', type: 'exam' },
    session2: { id: 'p2-d10-s2', subject: 'Math SL', title: '5.4-5.6 (Int)', description: 'Integration & Trapezoid Rule, Applications', type: 'skills' }
  },
  {
    date: '2026-04-25',
    phase: 2,
    focus: 'Exam Logic',
    session1: { id: 'p2-d11-s1', subject: 'History SL', title: 'P2 Comparative Essays', description: 'Auth States vs Cold War Practice', type: 'exam' },
    session2: { id: 'p2-d11-s2', subject: 'Bus SL', title: 'Paper 2 Calculation', description: 'Section B Drills (Finance/Operations)', type: 'exam' }
  },
  {
    date: '2026-04-26',
    phase: 2,
    focus: 'Bio Synthesis',
    session1: { id: 'p2-d12-s1', subject: 'Bus SL', title: 'Paper 2 Section C', description: 'Conceptual Essays Practice', type: 'exam' },
    session2: { id: 'p2-d12-s2', subject: 'Bio HL', title: 'D4.3 (Climate Change)', description: 'Review all Themes (A-D)', type: 'content' }
  },
  {
    date: '2026-04-27',
    phase: 2,
    focus: 'GDC Speed',
    session1: { id: 'p2-d13-s1', subject: 'Bus SL', title: 'Full Timed Past Paper', description: '2025/2024 Paper Simulation', type: 'exam' },
    session2: { id: 'p2-d13-s2', subject: 'Math SL', title: 'Final Formula Sheet', description: 'GDC Proficiency check & Formula Recall', type: 'recall' }
  },
  {
    date: '2026-04-28',
    phase: 2,
    focus: 'Final Cram',
    session1: { id: 'p2-d14-s1', subject: 'Bus SL', title: 'FINAL RECALL', description: 'Definitions & Formulas (Units 1-5)', type: 'recall' },
    session2: { id: 'p2-d14-s2', subject: 'Bus SL', title: 'Case Study Final Review', description: 'P1 Case Study Deep Dive', type: 'recall' }
  },

  // PHASE 3: The Exam Sprint
  {
    date: '2026-04-29',
    phase: 3,
    focus: 'Business P1',
    isExamDay: true,
    session1: { id: 'p3-d1-s1', subject: 'Bus SL', title: 'BUSINESS MGMT P1', description: 'Official Exam (April 29)', type: 'exam' },
    session2: { id: 'p3-d1-s2', subject: 'Bus SL', title: 'P2 Section B/C Prep', description: 'Finance & Operations Calculation Drills', type: 'recall' }
  },
  {
    date: '2026-04-30',
    phase: 3,
    focus: 'Business P2',
    isExamDay: true,
    session1: { id: 'p3-d2-s1', subject: 'Bus SL', title: 'BUSINESS MGMT P2', description: 'Official Exam (April 30)', type: 'exam' },
    session2: { id: 'p3-d2-s2', subject: 'History SL', title: 'Timeline Drills', description: 'Auth States & Cold War Timeline', type: 'recall' }
  },
  {
    date: '2026-05-01',
    phase: 3,
    focus: 'History Prep',
    session1: { id: 'p3-d3-s1', subject: 'History SL', title: 'Paper 1 Source sets', description: 'Practice with Prescribed Subject', type: 'skills' },
    session2: { id: 'p3-d3-s2', subject: 'English HL', title: 'Paper 2: Comparative Planning', description: 'Thematic links between two literary works', type: 'skills' }
  },
  {
    date: '2026-05-02',
    phase: 3,
    focus: 'History P2 Prep',
    session1: { id: 'p3-d3-s3', subject: 'History SL', title: 'World History Topics', description: 'Essay Planning (2 Topics)', type: 'skills' },
    session2: { id: 'p3-d3-s4', subject: 'English HL', title: 'Paper 1: Guided Analysis', description: 'Practice with Unseen Literary Texts', type: 'recall' }
  },
  {
    date: '2026-05-03',
    phase: 3,
    focus: 'History Final',
    session1: { id: 'p3-d3-s5', subject: 'History SL', title: 'Full Paper 1 & 2 Mock', description: 'Timed Practice', type: 'exam' },
    session2: { id: 'p3-d3-s6', subject: 'History SL', title: 'Final Recall', description: 'Key Dates & Historiography', type: 'recall' }
  },
  {
    date: '2026-05-04',
    phase: 3,
    focus: 'History Exam',
    isExamDay: true,
    session1: { id: 'p3-d4-s1', subject: 'History SL', title: 'HISTORY P1 & P2', description: 'Official Exam (May 4)', type: 'exam' },
    session2: { id: 'p3-d4-s2', subject: 'English HL', title: 'Paper 1 Stylistic devices', description: 'Review for May 7th', type: 'recall' }
  },
  {
    date: '2026-05-05',
    phase: 3,
    focus: 'English P1 Prep',
    session1: { id: 'p3-d5-s3', subject: 'English HL', title: 'P1 Unseen Practice', description: 'Analysis of Poetry/Prose', type: 'skills' },
    session2: { id: 'p3-d5-s4', subject: 'Bio HL', title: 'Theme A & B Review', description: 'Unity/Diversity & Form/Function', type: 'recall' }
  },
  {
    date: '2026-05-06',
    phase: 3,
    focus: 'English P2 Prep',
    session1: { id: 'p3-d6-s3', subject: 'English HL', title: 'P2 Comparative Practice', description: 'Essay Structuring', type: 'skills' },
    session2: { id: 'p3-d6-s4', subject: 'English HL', title: 'P1 Techniques', description: 'Final Review of Stylistic Devices', type: 'recall' }
  },
  {
    date: '2026-05-07',
    phase: 3,
    focus: 'English P1',
    isExamDay: true,
    session1: { id: 'p3-d5-s1', subject: 'English HL', title: 'ENGLISH A LIT P1', description: 'Official Exam (May 7)', type: 'exam' },
    session2: { id: 'p3-d5-s2', subject: 'Bio HL', title: 'Rapid Theme Retrieval', description: 'Theme A & B Focus', type: 'recall' }
  },
  {
    date: '2026-05-08',
    phase: 3,
    focus: 'English P2',
    isExamDay: true,
    session1: { id: 'p3-d6-s1', subject: 'English HL', title: 'ENGLISH A LIT P2', description: 'Official Exam (May 8)', type: 'exam' },
    session2: { id: 'p3-d6-s2', subject: 'Bio HL', title: 'Rapid Theme Retrieval', description: 'Theme C & D Focus', type: 'recall' }
  },
  {
    date: '2026-05-09',
    phase: 3,
    focus: 'Bio P1 Prep',
    session1: { id: 'p3-d9-s3', subject: 'Bio HL', title: 'Paper 1 MCQs', description: 'Full Syllabus Practice', type: 'skills' },
    session2: { id: 'p3-d9-s4', subject: 'Math SL', title: 'Topic 1 & 2 Recall', description: 'Algebra & Functions', type: 'recall' }
  },
  {
    date: '2026-05-10',
    phase: 3,
    focus: 'Bio P2 Prep',
    session1: { id: 'p3-d10-s3', subject: 'Bio HL', title: 'Paper 2 Data-Response', description: 'Section A & B Practice', type: 'skills' },
    session2: { id: 'p3-d10-s4', subject: 'Bio HL', title: 'Paper 1 MCQs', description: 'Full Syllabus Practice', type: 'recall' }
  },
  {
    date: '2026-05-11',
    phase: 3,
    focus: 'Bio P1',
    isExamDay: true,
    session1: { id: 'p3-d7-s1', subject: 'Bio HL', title: 'BIOLOGY HL P1', description: 'Official Exam (May 11)', type: 'exam' },
    session2: { id: 'p3-d7-s2', subject: 'Math SL', title: 'Topic-by-topic formula', description: 'Final Recall for May 14', type: 'recall' }
  },
  {
    date: '2026-05-12',
    phase: 3,
    focus: 'Bio P2',
    isExamDay: true,
    session1: { id: 'p3-d8-s1', subject: 'Bio HL', title: 'BIOLOGY HL P2', description: 'Official Exam (May 12)', type: 'exam' },
    session2: { id: 'p3-d8-s2', subject: 'Math SL', title: 'GDC Strategy', description: 'Chi-sq, Normal dist, Finance', type: 'recall' }
  },
  {
    date: '2026-05-13',
    phase: 3,
    focus: 'Math Final Prep',
    session1: { id: 'p3-d13-s1', subject: 'Math SL', title: 'Full Paper 1 Mock', description: 'Non-Calc Practice', type: 'exam' },
    session2: { id: 'p3-d13-s2', subject: 'Math SL', title: 'Full Paper 2 Mock', description: 'Calc/GDC Practice', type: 'exam' }
  },
  {
    date: '2026-05-14',
    phase: 3,
    focus: 'Math P1',
    isExamDay: true,
    session1: { id: 'p3-d9-s1', subject: 'Math SL', title: 'MATH AA SL P1', description: 'Official Exam (May 14)', type: 'exam' },
    session2: { id: 'p3-d9-s2', subject: 'French HL', title: 'Lang/Lit Text Type', description: 'Theme review (May 19)', type: 'recall' }
  },
  {
    date: '2026-05-15',
    phase: 3,
    focus: 'Math P2',
    isExamDay: true,
    session1: { id: 'p3-d10-s1', subject: 'Math SL', title: 'MATH AA SL P2', description: 'Official Exam (May 15)', type: 'exam' },
    session2: { id: 'p3-d10-s2', subject: 'French HL', title: 'Lang/Lit Text Type', description: 'Theme review (May 19)', type: 'recall' }
  },
  {
    date: '2026-05-16',
    phase: 3,
    focus: 'French P1 Prep',
    session1: { id: 'p3-d16-s1', subject: 'French HL', title: 'Paper 1 Mock', description: 'Text-type analysis practice', type: 'skills' },
    session2: { id: 'p3-d16-s2', subject: 'French HL', title: 'Vocab Drill', description: 'Thematic Vocabulary', type: 'recall' }
  },
  {
    date: '2026-05-17',
    phase: 3,
    focus: 'French P2 Prep',
    session1: { id: 'p3-d17-s1', subject: 'French HL', title: 'Paper 2 Quotes', description: 'Key Quotes for Comparative Essay', type: 'recall' },
    session2: { id: 'p3-d17-s2', subject: 'French HL', title: 'Stylistic Analysis', description: 'Techniques review', type: 'recall' }
  },
  {
    date: '2026-05-18',
    phase: 3,
    focus: 'French Final',
    session1: { id: 'p3-d18-s1', subject: 'French HL', title: 'Full Paper 1 & 2 Mock', description: 'Timed Practice', type: 'exam' },
    session2: { id: 'p3-d18-s2', subject: 'French HL', title: 'Final Theme Review', description: 'Intertextuality & Time/Space', type: 'recall' }
  },
  {
    date: '2026-05-19',
    phase: 3,
    focus: 'French P1',
    isExamDay: true,
    session1: { id: 'p3-d11-s1', subject: 'French HL', title: 'FRENCH A LANG/LIT P1', description: 'Official Exam (May 19)', type: 'exam' },
    session2: { id: 'p3-d11-s2', subject: 'Freedom', title: 'COMPLETE', description: 'FREEDOM', type: 'recall' }
  },
  {
    date: '2026-05-20',
    phase: 3,
    focus: 'French P2',
    isExamDay: true,
    session1: { id: 'p3-d12-s1', subject: 'French HL', title: 'FRENCH A LANG/LIT P2', description: 'Official Exam (May 20)', type: 'exam' },
    session2: { id: 'p3-d12-s2', subject: 'Freedom', title: 'COMPLETE', description: 'FREEDOM', type: 'recall' }
  }
];

