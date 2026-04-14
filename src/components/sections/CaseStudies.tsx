"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Target } from "lucide-react";

interface ProjectData {
  id: string;
  title: string;
  client: string | null;
  tags: string | null;
  problem: string | null;
  strategy: string | null;
  execution: string | null;
  result: string | null;
  description: string | null;
}

export default function CaseStudies({ data }: { data: ProjectData[] }) {
  if (!data?.length) return null;

  return (
    <section id="case-studies" className="py-24 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Authority & Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Strategic executions designed to solve specific business bottlenecks and drive
            measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {data.map((study: ProjectData, index: number) => {
            const tagsList = study.tags ? study.tags.split(",").map(t => t.trim()) : [];
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 md:p-12 rounded-3xl bg-card border border-border hover:border-blue-500/50 transition-all group relative overflow-hidden shadow-sm"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-15 transition">
                  <TrendingUp className="w-24 h-24 text-blue-500" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tagsList.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">{study.title}</h3>
                    {study.client && <p className="text-muted-foreground font-medium mb-8">Client: {study.client}</p>}

                    <div className="space-y-6">
                      {study.problem && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                            The Problem
                          </h4>
                          <p className="text-muted-foreground/90">{study.problem}</p>
                        </div>
                      )}
                      {study.strategy && (
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                            The Strategy
                          </h4>
                          <p className="text-muted-foreground/90">{study.strategy}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-8">
                    {study.execution && (
                      <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                          <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Execution
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">{study.execution}</p>
                      </div>
                    )}

                    {study.result && (
                      <div className="p-6 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" /> Result
                        </h4>
                        <p className="text-foreground font-semibold text-lg leading-relaxed">
                          {study.result}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

  );
}
