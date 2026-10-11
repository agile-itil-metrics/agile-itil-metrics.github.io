# Introduction to Part 10: Metrics in the Age of AI

**AI makes output cheap and fluent, which breaks the old link between what is produced and what is worth having, so measure what survives, what helps, and what stays under control.**

Every metric in this book rests on an assumption that producing the thing being counted takes real effort. A resolved ticket reflected work. A written article reflected knowledge. A merged change reflected care. Generative AI weakens that assumption. It can draft a reply, an article, a test, or a block of code in seconds, and what it drafts is often plausible and sometimes wrong. The counts go up. Whether the people served are better off is a separate question that the counts cannot answer.

AI also adds new things to measure. Conversational assistants and agents that act on a user's behalf need measures of resolution, handoff, and the harm of wrong actions. The governance of models, prompts, and suppliers needs measures of coverage, control, and incident handling. And people who work beside these tools need their skills, understanding, and sustainable pace protected. The measures in this part draw on the rest of the book, because the guardrails are the same ones: pair each metric with a check on what it could hide, compare with a baseline, sample with people, and keep data about people out of evaluation (see topic 1.2, Goodhart's law and the psychology of metrics).

Agile and ITIL ways of working offer a sensible stance toward all of this. Treat each use of AI as a small experiment. State the expected benefit, try it with willing people, compare with similar work done without it, and decide on the evidence. Keep stakeholders continuously involved, because they are the first to notice when the signal degrades. Aim at a sustainable pace, so that time saved is a choice about quality and learning, not an automatic increase in demand. And remember the aim of building around motivated individuals: AI should relieve tedious work and respect people's judgment, and it should not become a way to monitor them.

Facts about AI tools, products, and rules change quickly. Statements in this part about specific regulations, standards, and tools are dated as of October 2026, and the reader should recheck them. The measurement principles are more durable than any of the technology they describe.

## Topics in this part

- **10.1 AI in service management measurement**: where AI enters the work, baselines before adoption, comparisons, time to a checked result, and full cost.
- **10.2 Measuring AI-assisted work**: retention, rework, review load, escaped defects, understanding, and skills.
- **10.3 AI agent and chatbot metrics**: verified resolution, return contacts, handoffs, time to a person, answer accuracy, and the reversal of agent actions.
- **10.4 Metric inflation and quality dilution**: how volume and speed inflate, usefulness sampling, verification burden, and breaking feedback loops.
- **10.5 AI governance and risk metrics**: the register of uses, risk classes, change control for models and prompts, evaluation, oversight, and incidents.

## How these topics interrelate

The foundations topic (see topic 10.1, AI in service management measurement) sets the method: baseline, comparison, sampling, and full cost. It applies to every other topic in the part. The assisted work topic (see topic 10.2, Measuring AI-assisted work) uses that method on the work people do with AI beside them, and looks at what survives and what happens to understanding. The chatbot and agent topic (see topic 10.3, AI agent and chatbot metrics) applies it to systems that face users directly or act on their behalf, where the cost of a wrong answer or action falls on someone else.

Inflation and dilution (see topic 10.4, Metric inflation and quality dilution) is the cautionary companion to all of these. It explains why the easy numbers rise and what to pair with them, and it connects to the usefulness checks in the other topics. Governance (see topic 10.5, AI governance and risk metrics) is the structure that holds the rest in place: it provides the register that tells you what to measure, the risk classes that tell you how deeply, the change control that keeps behavior from drifting unseen, and the incident process for when something goes wrong.

Several guardrail pairs follow. A speed measure should be read with the time to a checked result and the verification burden. A containment or deflection figure should be read with verified resolution and return contacts. A registered-uses count should be read against independent discovery. An adoption figure for an AI tool should be treated as descriptive, and outcomes against comparison carry the weight.

The part links to earlier ones: the review and flow measures of Part 2, the knowledge and self-service measures of Part 3, the security and risk measures of Part 8, and the people measures of Part 9. It leads into the final content part, which is about building a metrics program itself, because a program that introduces measurement without care will suffer the same distortions this part describes.
