/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Calendar as CalendarIcon, 
  BookOpen, 
  Trophy, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  Filter,
  BarChart3,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { format, isAfter, isBefore, isSameDay, parseISO, differenceInDays } from 'date-fns';
import { REVISION_DATA, DayPlan, Session } from './data';
import { cn } from './lib/utils';

const SUBJECT_COLORS: Record<string, string> = {
  'Bio HL': 'bg-bio-green text-white',
  'Math SL': 'bg-ib-blue text-white',
  'Bus SL': 'bg-slate-600 text-white',
  'Bus SL Toolkit': 'bg-slate-500 text-white',
  'History SL': 'bg-hist-gold text-white',
  'History': 'bg-hist-gold text-white',
  'English HL': 'bg-purple-600 text-white',
  'English': 'bg-purple-600 text-white',
  'French HL': 'bg-blue-500 text-white',
  'French': 'bg-blue-500 text-white',
  'Freedom': 'bg-emerald-500 text-white',
};

const PHASE_NAMES = [
  "Phase 1: High-Volume Content Mastery",
  "Phase 2: Subject Integration",
  "Phase 3: The Exam Sprint"
];

export default function App() {
  const [completedSessions, setCompletedSessions] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('ib-revision-completed');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [activePhase, setActivePhase] = useState(1);

  useEffect(() => {
    localStorage.setItem('ib-revision-completed', JSON.stringify(Array.from(completedSessions)));
  }, [completedSessions]);

  const toggleSession = (sessionId: string) => {
    setCompletedSessions(prev => {
      const next = new Set(prev);
      if (next.has(sessionId)) next.delete(sessionId);
      else next.add(sessionId);
      return next;
    });
  };

  const stats = useMemo(() => {
    const total = REVISION_DATA.length * 2;
    const completed = completedSessions.size;
    const percentage = Math.round((completed / total) * 100);
    
    const subjects = Array.from(new Set(REVISION_DATA.flatMap(d => [d.session1.subject, d.session2.subject])));
    const subjectStats = subjects
      .filter(sub => sub !== 'History' && sub !== 'Freedom')
      .map(sub => {
        const subSessions = REVISION_DATA.flatMap(d => [d.session1, d.session2]).filter(s => s.subject === sub);
        const subCompleted = subSessions.filter(s => completedSessions.has(s.id)).length;
        return {
          name: sub,
          total: subSessions.length,
          completed: subCompleted,
          percentage: Math.round((subCompleted / subSessions.length) * 100)
        };
      })
      .filter(s => s.total > 0)
      .sort((a, b) => b.percentage - a.percentage);

    return { total, completed, percentage, subjectStats };
  }, [completedSessions]);

  const today = new Date();
  const nextExam = REVISION_DATA.find(d => d.isExamDay && isAfter(parseISO(d.date), today));
  const daysToNextExam = nextExam ? differenceInDays(parseISO(nextExam.date), today) : null;

  const filteredData = useMemo(() => {
    return REVISION_DATA.filter(d => d.phase === activePhase);
  }, [activePhase]);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="bg-ib-blue text-white py-8 px-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">IB Revision Masterplan 2026</h1>
              <p className="text-blue-100 mt-1 flex items-center gap-2">
                <CalendarIcon size={16} />
                {format(today, 'MMMM d, yyyy')} | Targeting 2 Sessions/Day
              </p>
            </div>
            {daysToNextExam !== null && (
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 flex items-center gap-4">
                <div className="bg-exam-red p-2 rounded-lg">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-200 font-semibold">Next Exam In</div>
                  <div className="text-2xl font-bold">{daysToNextExam} Days</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-8 space-y-8">
        {/* Progress Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <BarChart3 size={20} className="text-ib-blue" />
                Overall Progress
              </h2>
              <span className="text-2xl font-black text-ib-blue">{stats.percentage}%</span>
            </div>
            <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stats.percentage}%` }}
                className="h-full bg-ib-blue"
              />
            </div>
            <div className="mt-4 flex justify-between text-sm text-slate-500 font-medium">
              <span>{stats.completed} sessions completed</span>
              <span>{stats.total - stats.completed} remaining</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Trophy size={20} className="text-hist-gold" />
              Subject Mastery
            </h2>
            <div className="space-y-4 overflow-y-auto max-h-[200px] pr-2 custom-scrollbar flex-1">
              {stats.subjectStats.map(sub => (
                <div key={sub.name} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tight text-slate-600">
                    <span>{sub.name}</span>
                    <span>{sub.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${sub.percentage}%` }}
                      className={cn(
                        "h-full transition-colors duration-500",
                        sub.percentage === 100 ? "bg-emerald-500" : "bg-ib-blue/60"
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase Navigation */}
        <nav className="flex flex-wrap gap-3">
          {[1, 2, 3].map(phase => (
            <button
              key={phase}
              onClick={() => setActivePhase(phase)}
              className={cn(
                "px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 border-2",
                activePhase === phase 
                  ? "bg-ib-blue border-ib-blue text-white shadow-lg shadow-ib-blue/20 -translate-y-0.5" 
                  : "bg-white border-slate-200 text-slate-500 hover:border-ib-blue/30 hover:bg-slate-50"
              )}
            >
              Phase {phase}
            </button>
          ))}
        </nav>

        {/* Content Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="space-y-1">
            <h2 className="text-xl font-black text-ib-blue uppercase tracking-tight">
              {PHASE_NAMES[activePhase - 1]}
            </h2>
            <p className="text-slate-500 text-sm">
              {activePhase === 1 && "Deep Content Mastery & Foundations"}
              {activePhase === 2 && "Subject Integration & History Deep-Dive"}
              {activePhase === 3 && "The Final Exam Sprint"}
            </p>
          </div>
        </div>

        {/* Revision List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredData.map((day, idx) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.05 }}
                className={cn(
                  "bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden",
                  day.isExamDay && "border-exam-red/30 bg-exam-red/[0.02]"
                )}
              >
                <div className={cn(
                  "px-6 py-3 flex items-center justify-between border-b border-slate-100",
                  day.isExamDay ? "bg-exam-red/5" : "bg-slate-50/50"
                )}>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-lg px-3 py-1 shadow-sm">
                      <span className="text-[10px] font-black uppercase text-slate-400 leading-none">{format(parseISO(day.date), 'MMM')}</span>
                      <span className="text-lg font-black text-ib-blue leading-none">{format(parseISO(day.date), 'd')}</span>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{format(parseISO(day.date), 'EEEE')}</span>
                      <h3 className="font-bold text-slate-700">{day.focus}</h3>
                    </div>
                  </div>
                  {day.isExamDay && (
                    <span className="bg-exam-red text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
                      Exam Day
                    </span>
                  )}
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SessionItem 
                    session={day.session1} 
                    isCompleted={completedSessions.has(day.session1.id)}
                    onToggle={() => toggleSession(day.session1.id)}
                    label="Session 1: Morning"
                  />
                  <SessionItem 
                    session={day.session2} 
                    isCompleted={completedSessions.has(day.session2.id)}
                    onToggle={() => toggleSession(day.session2.id)}
                    label="Session 2: Afternoon"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredData.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <AlertCircle size={48} className="mx-auto text-slate-300 mb-4" />
              <h3 className="text-lg font-bold text-slate-600">No sessions found</h3>
              <p className="text-slate-400">Try adjusting your filters or switching phases.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer Info */}
      <footer className="max-w-5xl mx-auto px-4 py-12 text-center text-slate-400 text-sm">
        <p>© 2026 IB Diploma Programme Revision Masterplan</p>
        <p className="mt-1 italic">"The Path to May 2026"</p>
      </footer>
    </div>
  );
}

function SessionItem({ 
  session, 
  isCompleted, 
  onToggle,
  label
}: { 
  session: Session; 
  isCompleted: boolean; 
  onToggle: () => void;
  label: string;
}) {
  return (
    <div 
      onClick={onToggle}
      className={cn(
        "group cursor-pointer p-4 rounded-xl border-2 transition-all duration-200",
        isCompleted 
          ? "bg-emerald-50 border-emerald-200" 
          : "bg-white border-slate-100 hover:border-ib-blue/20 hover:shadow-md"
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">{label}</span>
        {isCompleted ? (
          <CheckCircle2 size={20} className="text-emerald-500" />
        ) : (
          <Circle size={20} className="text-slate-300 group-hover:text-ib-blue/40" />
        )}
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter",
            SUBJECT_COLORS[session.subject] || 'bg-slate-200 text-slate-600'
          )}>
            {session.subject}
          </span>
          <h4 className={cn(
            "font-bold text-sm leading-tight",
            isCompleted ? "text-emerald-900 line-through opacity-60" : "text-slate-800"
          )}>
            {session.title}
          </h4>
        </div>
        <p className={cn(
          "text-xs leading-relaxed",
          isCompleted ? "text-emerald-700/60" : "text-slate-500"
        )}>
          {session.description}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span className={cn(
          "text-[9px] font-bold uppercase px-2 py-0.5 rounded-full",
          session.type === 'content' && "bg-blue-100 text-blue-700",
          session.type === 'skills' && "bg-amber-100 text-amber-700",
          session.type === 'exam' && "bg-rose-100 text-rose-700",
          session.type === 'recall' && "bg-indigo-100 text-indigo-700",
        )}>
          {session.type}
        </span>
      </div>
    </div>
  );
}
