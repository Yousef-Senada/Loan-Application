import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const questions = [
    "What is your name?",
    "What is your major?",
    "What are your hobbies?",
    "Are you currently working?",
];

export default function QuestionModal({ isOpen, onClose }) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [error, setError] = useState("");
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        if (!answers[step] || answers[step].trim() === "") {
            setError("Please enter an answer before continuing.");
            return;
        }
        setError("");
        setDirection(1);
        setStep(step + 1);
    };

    const handlePrev = () => {
        setError("");
        setDirection(-1);
        if (step > 0) setStep(step - 1);
    };

    const handleSubmit = () => {
        if (!answers[step] || answers[step].trim() === "") {
            setError("Please enter an answer before submitting.");
            return;
        }
        const result = questions.map((q, i) => ({
            question: q,
            answer: answers[i],
        }));
        console.log("Submitted Answers:", result);
        onClose();
    };

    const handleAnswerChange = (e) => {
        const updatedAnswers = { ...answers };
        updatedAnswers[step] = e.target.value;
        setAnswers(updatedAnswers);
        if (error) setError("");
    };

    const variants = {
        enter: (dir) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (dir) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
        }),
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl shadow-xl w-[90%] max-w-xl p-8 overflow-hidden"
                        initial={{ scale: 0.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.1, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                            <div
                                className={`h-2 rounded-full transition-all duration-300 bg-gradient-to-r from-emerald-300 to-emerald-700`}
                                style={{
                                    width: `${
                                        ((step + 1) / questions.length) * 100
                                    }%`,
                                }}
                            />
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">
                                Step {step + 1} of {questions.length}
                            </h2>
                            <button
                                className="text-red-500 hover:text-red-700 font-semibold"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={step}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                    opacity: { duration: 0.2 },
                                }}
                            >
                                <p className="text-lg mb-4 font-medium">
                                    {questions[step]}
                                </p>

                                <motion.textarea
                                    rows={3}
                                    value={answers[step] || ""}
                                    onChange={handleAnswerChange}
                                    placeholder="Type your answer here..."
                                    className={`w-full p-3 border ${
                                        error
                                            ? "border-red-500"
                                            : "border-neutral-200"
                                    } outline-0 rounded-md transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-50 focus:ring-offset-0`}
                                    layout
                                />
                                {error && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {error}
                                    </p>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handlePrev}
                                disabled={step === 0}
                                className="px-6 py-2 text-white bg-gray-500 rounded-xl disabled:opacity-50 hover:bg-gray-700"
                            >
                                Previous
                            </button>

                            {step === questions.length - 1 ? (
                                <button
                                    onClick={handleSubmit}
                                    className="px-6 py-2 text-white bg-emerald-500 rounded-xl hover:bg-emerald-700"
                                >
                                    Submit
                                </button>
                            ) : (
                                <button
                                    onClick={handleNext}
                                    className="px-6 py-2 text-white bg-emerald-500 rounded-xl hover:bg-emerald-700"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
