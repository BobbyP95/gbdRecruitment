type Step = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  steps: Step[];
};

/**
 * A connected, numbered sequence — used only where order genuinely matters
 * (a real process a client or candidate moves through step by step).
 */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="relative max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <li key={step.title} className="relative pl-16 pb-10 last:pb-0">
          {index !== steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-[1.5rem] top-12 bottom-0 w-px bg-emerald-200"
            />
          )}
          <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950 text-white font-bold">
            {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-emerald-950">{step.title}</h3>
          <p className="mt-1 text-gray-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
