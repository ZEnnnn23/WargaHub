import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Activity, Server, Database, CheckCircle2, RefreshCw } from 'lucide-react';

export default function WaGatewayLogModal() {
  const { isWaLogModalOpen, setIsWaLogModalOpen, waLogs } = useApp();

  if (!isWaLogModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg flex items-center gap-2">
                <span>Monitor Gateway WhatsApp Fonnte & Antrean Redis</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </h3>
              <p className="text-xs text-slate-400">Log Pengiriman Asinkron Real-Time</p>
            </div>
          </div>

          <button
            onClick={() => setIsWaLogModalOpen(false)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Server Infrastructure Status Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-slate-300 font-semibold">Fonnte WA API</span>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">ONLINE</span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-slate-300 font-semibold">Redis Queue Broker</span>
            </div>
            <span className="text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full font-bold">READY (0 delay)</span>
          </div>

          <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-indigo-400" />
              <span className="text-xs text-slate-300 font-semibold">Auto Retry</span>
            </div>
            <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded-full font-bold">3x Retries</span>
          </div>
        </div>

        {/* Log Table */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-3 bg-slate-900 border-b border-slate-800 text-xs font-bold text-slate-300">
            Riwayat Log Pengiriman Terakhir ({waLogs.length})
          </div>

          <div className="max-h-80 overflow-y-auto divide-y divide-slate-800/80">
            {waLogs.map((log) => (
              <div key={log.id} className="p-4 space-y-1.5 hover:bg-slate-900/50 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-emerald-400 font-bold">{log.id}</span>
                    <span className="text-slate-500">[{log.redisQueueId}]</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{log.timestamp}</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span>Penerima: <strong className="text-white">{log.recipientPhone}</strong></span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {log.status}
                  </span>
                </div>

                <p className="text-[11px] text-slate-400 font-mono bg-slate-900 p-2 rounded-lg border border-slate-800">
                  {log.content}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
