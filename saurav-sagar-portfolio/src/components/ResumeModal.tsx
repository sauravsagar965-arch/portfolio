import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-white text-black rounded-3xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header / Controls */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50 print:hidden">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-gray-900">Resume Preview</h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-bold hover:bg-emerald-700 transition-colors"
                  >
                    <Printer size={16} /> Print / Save as PDF
                  </button>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* Resume Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 print:p-0 print:overflow-visible bg-white">
              <div className="max-w-[800px] mx-auto font-sans text-[11pt] leading-relaxed text-gray-800">
                {/* Header */}
                <header className="text-center mb-8 border-b-2 border-gray-900 pb-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2 uppercase tracking-tight">
                    {data.basics.name}
                  </h1>
                  <p className="text-lg font-semibold text-gray-700 mb-4">{data.basics.title}</p>
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-600">
                    <span>{data.basics.phone}</span>
                    <span>•</span>
                    <span>{data.basics.email}</span>
                    <span>•</span>
                    <a href={data.basics.links[0].url} className="text-emerald-700 hover:underline">
                      {data.basics.links[0].url.replace('https://', '')}
                    </a>
                    <span>•</span>
                    <span>{data.basics.location}</span>
                  </div>
                </header>

                {/* Summary */}
                <section className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                    Professional Summary
                  </h2>
                  <p>{data.basics.summary}</p>
                </section>

                {/* Education */}
                <section className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                    Education
                  </h2>
                  <div className="space-y-4">
                    {data.education.map((edu: any, i: number) => (
                      <div key={i} className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-gray-900">{edu.institution}</div>
                          <div className="italic">{edu.degree}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{edu.location || ''}</div>
                          <div className="text-gray-600">{edu.dates}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                    Professional Experience
                  </h2>
                  <div className="space-y-6">
                    {data.experience.map((exp: any, i: number) => (
                      <div key={i}>
                        <div className="flex justify-between items-start mb-1">
                          <div className="font-bold text-gray-900">{exp.company}</div>
                          <div className="font-semibold text-gray-700">{exp.location}</div>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                          <div className="italic font-medium">{exp.role}</div>
                          <div className="text-gray-600">{exp.dates}</div>
                        </div>
                        <ul className="list-disc ml-5 space-y-1">
                          {exp.bullets.map((bullet: string, j: number) => (
                            <li key={j}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Skills */}
                <section className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                    Key Skills
                  </h2>
                  <div className="space-y-2">
                    {data.skills.map((skill: any, i: number) => (
                      <div key={i}>
                        <span className="font-bold">{skill.category}: </span>
                        <span>{skill.items.join(', ')}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Projects */}
                {data.projects && data.projects.length > 0 && (
                  <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                      Projects
                    </h2>
                    <div className="space-y-4">
                      {data.projects.map((project: any, i: number) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-1">
                            <div className="font-bold text-gray-900">{project.title}</div>
                            <div className="italic font-semibold text-gray-600">{project.stack}</div>
                          </div>
                          <ul className="list-disc ml-5 space-y-1">
                            {project.bullets.map((bullet: string, j: number) => (
                              <li key={j}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Certifications */}
                <section className="mb-8">
                  <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 mb-3">
                    Certifications
                  </h2>
                  <p className="leading-relaxed">
                    {data.certifications.join(' | ')}
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
