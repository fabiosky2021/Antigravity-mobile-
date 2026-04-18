/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rocket, Cpu, Mic, Terminal, LayoutGrid, Activity, ChevronRight, Maximize2 } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-background min-h-screen pb-24 text-text-bright font-body">
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30 flex justify-between items-center w-full px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Rocket className="text-cyan-500" />
          <h1 className="text-xl font-black text-cyan-500 font-mono uppercase tracking-widest">Antigravity V1</h1>
        </div>
        <div className="w-8 h-8 rounded-full border border-cyan-500/30 overflow-hidden">
          <img alt="System Operator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkEwmVv-7ehe4-cCxgFwQvHyWcWQ7Aocv-DNVPw5O6hqptK4QHB6KclOfVEh3fAtI81M_uk5xYYPKz0TAOhqSNv0Tfle9Dq0vdHY5cFRSmI-RTzod9VjoaOYwIjdxcjevpD9FXBabZdQLl8rQCEgoRV005PaK1HpZKvni6AxSWuP6qohdDSfiE91bAUw4q32UBGqsC9O5z-WJhLil4c7kazAF_1_Zlu-SDeoKA7Zmo6tdt9z2bSIGN1MEPDV3sX-c2kKcVGZGQMXfQ"/>
        </div>
      </header>

      <main className="p-4 space-y-6">
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-on-surface-variant">Intelligent Routing</span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-container"></span>
                </span>
                <h2 className="mono-text font-bold text-tertiary-container text-lg tracking-tight">ACTIVE: CLAUDE OPUS</h2>
              </div>
            </div>
            <div className="px-3 py-1 bg-surface-container-high rounded border border-outline-variant/20">
              <span className="text-[10px] font-mono text-on-surface">LATENCY: 42MS</span>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-3">
          <div className="bg-surface-container-low p-4 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono text-on-surface-variant">RAM_ALLOC</span>
              <Cpu className="text-primary text-sm" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-mono font-bold text-primary tracking-tighter">18.4</span>
              <span className="text-xs font-mono text-on-surface-variant pb-1">GB / 24GB</span>
            </div>
            <div className="mt-3 h-1 bg-surface-container-highest rounded-full w-full">
              <div className="bg-primary-container h-full w-3/4"></div>
            </div>
          </div>
          <div className="bg-surface-container-low p-4 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono text-on-surface-variant">CPU_USAGE</span>
              <Cpu className="text-secondary text-sm" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-mono font-bold text-secondary tracking-tighter">42</span>
              <span className="text-xs font-mono text-on-surface-variant pb-1">% CORE-X</span>
            </div>
            <div className="mt-3 h-1 bg-surface-container-highest rounded-full w-full">
              <div className="bg-secondary-container h-full w-[42%]"></div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container rounded-xl p-5 border border-cyan-500/10 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Mic className="text-cyan-400" />
              <span className="mono-text text-sm font-bold tracking-widest text-cyan-400">VISÃO_HOOK</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-tertiary-container">LISTENING</span>
              <div className="h-1.5 w-1.5 rounded-full bg-tertiary-container"></div>
            </div>
          </div>
          <button className="w-full py-4 bg-primary-container/10 border border-primary-container/30 rounded-lg flex items-center justify-center gap-3">
            <Mic className="text-primary-container" />
            <span className="mono-text font-bold text-primary-container text-xs tracking-[0.2em]">TOGGLE VOICE COMMS</span>
          </button>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="mono-text text-xs font-bold tracking-[0.3em] text-on-surface-variant">NCP_LOGIC</h3>
            <span className="text-[10px] font-mono text-outline">v2.0.48</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-lg min-h-[160px] border-l-2 border-cyan-500/20">
            <div className="space-y-2 font-mono text-[11px] leading-relaxed">
              <p className="text-on-surface-variant">14:02:11 &gt; INITIALIZING DIAG_CORE...</p>
              <p className="text-primary-container">14:02:22 &gt; RECOMMENDATION: Replace F1 Fuse - 2.5A SMD</p>
            </div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 px-4 bg-gradient-to-t from-black to-slate-950 border-t border-cyan-900/50">
        <a className="flex flex-col items-center justify-center bg-cyan-500/20 text-cyan-400 rounded-lg px-3 py-1" href="#">
          <LayoutGrid />
          <span className="text-[10px] font-mono font-bold uppercase mt-1">Status</span>
        </a>
        <a className="flex flex-col items-center justify-center text-slate-500" href="#">
          <Terminal />
          <span className="text-[10px] font-mono font-bold uppercase mt-1">Diagnostics</span>
        </a>
      </nav>
    </div>
  );
}
