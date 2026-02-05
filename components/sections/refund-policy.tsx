"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function RefundPolicy() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-white via-gray-50 to-white">
          <CardContent className="p-8 md:p-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              REFUND POLICIES
            </motion.h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <strong>You may request a refund within 7 days period of your purchase.</strong> To request a refund, contact our support team at{" "}
                <a 
                  href="mailto:refund@advanceproff.com" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold underline transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  refund@advanceproff.com
                </a>
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <strong>Refunds are granted at our discretion and may be subject to review.</strong> Refunds will be issued via the same method used for the original payment, unless otherwise specified.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <strong>Certain products or services may not be eligible for refunds.</strong> Please email us at{" "}
                <a 
                  href="mailto:refund@advanceproff.com" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold underline transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  refund@advanceproff.com
                </a>{" "}
                for specific exclusions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <strong>The processing time:</strong> Refunds may take 30-day refund period.
              </motion.p>

              <motion.p
                className="pt-4 border-t border-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                If you have questions or need assistance, please contact us at{" "}
                <a 
                  href="mailto:info@advanceproff.com" 
                  className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold underline transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@advanceproff.com
                </a>
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
