/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ReviewContent from './components/ReviewContent';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Smartphone, Menu, Search, Github } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-orange-500 selection:text-white">
      {/* Navigation Rail - Technical Style */}
      <nav className="fixed left-0 top-0 bottom-0 w-16 border-r border-zinc-800 hidden md:flex flex-col items-center py-8 gap-8 bg-[#0a0a0a] z-50">
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center text-black font-black text-xl">
          M
        </div>
        <div className="flex-1 flex flex-col gap-6 text-zinc-500">
          <Smartphone className="hover:text-white cursor-pointer transition-colors" size={20} />
          <Search className="hover:text-white cursor-pointer transition-colors" size={20} />
          <Menu className="hover:text-white cursor-pointer transition-colors" size={20} />
        </div>
        <Github className="text-zinc-700 hover:text-white cursor-pointer transition-colors" size={20} />
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-zinc-800 bg-[#0a0a0a] sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-black font-black">M</div>
          <span className="font-bold text-white tracking-tight">MOMIX.APK</span>
        </div>
        <Menu size={24} />
      </header>

      {/* Main Content Area */}
      <main className="md:pl-16">
        <ScrollArea className="h-screen">
          <div className="relative">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full -z-10" />
            
            <ReviewContent />
            
            {/* Footer */}
            <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-900 text-center text-sm text-zinc-500">
              <p>© 2026 Momix APK Review. All rights reserved.</p>
              <p className="mt-2 text-xs opacity-50">
                Disclaimer: We are not affiliated with Momix. This is an independent review for educational purposes.
              </p>
            </footer>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
