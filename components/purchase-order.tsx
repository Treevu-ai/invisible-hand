"use client"
import { motion } from "framer-motion"

export function PurchaseOrder() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="max-w-[650px] mx-auto mt-16 border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0A0A0A] p-8 shadow-sm" style={{ borderRadius: "40px" }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00FF88] font-medium mb-1">Purchase Order</p>
          <p className="text-black dark:text-white font-bold text-lg tracking-tight">PO #IH-2026-0042</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider">Date</p>
          <p className="text-black dark:text-white text-sm font-medium">2026-05-21</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-[9px] uppercase tracking-wider mb-1">Supplier</p>
          <p className="text-black dark:text-white text-sm font-bold">Cartonera del Sur</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Lima, Peru</p>
        </div>
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-[9px] uppercase tracking-wider mb-1">Buyer</p>
          <p className="text-black dark:text-white text-sm font-bold">Your Company</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">Reference: Req #1287</p>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-white/5 pt-6 mb-6">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 dark:text-gray-500 text-[9px] uppercase tracking-wider">
              <th className="pb-3 font-medium">SKU</th><th className="pb-3 font-medium">Description</th>
              <th className="pb-3 font-medium text-right">Qty</th><th className="pb-3 font-medium text-right">Unit</th>
              <th className="pb-3 font-medium text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-xs">
              <td className="py-2 text-black dark:text-white font-mono">CB-3030-S</td>
              <td className="py-2 text-black dark:text-white">Corrugated box 30x30cm</td>
              <td className="py-2 text-right text-black dark:text-white tabular-nums">5,000</td>
              <td className="py-2 text-right text-gray-500 dark:text-gray-400 tabular-nums">$0.89</td>
              <td className="py-2 text-right text-black dark:text-white font-bold tabular-nums">$4,450.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-100 dark:border-white/5">
              <td colSpan={4} className="pt-4 text-xs text-black dark:text-white font-bold text-right">Subtotal</td>
              <td className="pt-4 text-right text-black dark:text-white font-bold tabular-nums text-sm">$4,450.00</td>
            </tr>
            <tr>
              <td colSpan={4} className="pt-2 text-xs text-gray-500 dark:text-gray-400 text-right">Delivery (5 business days)</td>
              <td className="pt-2 text-right text-gray-500 dark:text-gray-400 tabular-nums text-xs">Included</td>
            </tr>
            <tr className="border-t border-gray-100 dark:border-white/5">
              <td colSpan={4} className="pt-4 text-xs text-black dark:text-white font-bold text-right">Total</td>
              <td className="pt-4 text-right text-[#00FF88] font-bold tabular-nums text-lg">$4,450.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-[9px] uppercase tracking-wider mb-1">Payment Terms</p>
          <p className="text-black dark:text-white text-xs">Net 30 · Invoice upon delivery</p>
        </div>
        <div>
          <p className="text-gray-400 dark:text-gray-500 text-[9px] uppercase tracking-wider mb-1">Delivery</p>
          <p className="text-black dark:text-white text-xs">Av. Los Pinos 245, Lima · 5 days</p>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-white/5 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-[#FFBD2E] animate-pulse" />
          <span className="text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider font-medium">Awaiting your approval</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#00FF88] font-bold text-xs">26% savings</span>
          <span className="text-gray-400 dark:text-gray-500 text-[10px]">vs budget $1.20/unit</span>
        </div>
      </div>
    </motion.div>
  )
}
