'use server';

/**
 * @fileOverview A flow that generates helpful hints for object recognition in Smart Mode.
 *
 * - generateObjectRecognitionHints - A function that generates hints for object recognition.
 * - GenerateObjectRecognitionHintsInput - The input type for the generateObjectRecognitionHints function.
 * - GenerateObjectRecognitionHintsOutput - The return type for the generateObjectRecognitionHints function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateObjectRecognitionHintsInputSchema = z.object({
  objectName: z.string().describe('The name of the object to be recognized.'),
  userAttempt: z.string().optional().describe('The user\'s attempt to describe the object.'),
});
export type GenerateObjectRecognitionHintsInput = z.infer<typeof GenerateObjectRecognitionHintsInputSchema>;

const GenerateObjectRecognitionHintsOutputSchema = z.object({
  hint: z.string().describe('A helpful hint to guide the user in recognizing the object.'),
});
export type GenerateObjectRecognitionHintsOutput = z.infer<typeof GenerateObjectRecognitionHintsOutputSchema>;

export async function generateObjectRecognitionHints(input: GenerateObjectRecognitionHintsInput): Promise<GenerateObjectRecognitionHintsOutput> {
  return generateObjectRecognitionHintsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateObjectRecognitionHintsPrompt',
  input: {schema: GenerateObjectRecognitionHintsInputSchema},
  output: {schema: GenerateObjectRecognitionHintsOutputSchema},
  prompt: `You are a helpful AI assistant designed to provide hints to young users who are learning to recognize objects in a game.

  The user is trying to recognize the object: {{{objectName}}}.

  {% if userAttempt %} The user attempted: {{{userAttempt}}}.  Provide a hint that builds on their attempt. {% else %} Provide a general hint about the object. {% endif %}

  The hint should be:
  - Age-appropriate
  - Encouraging
  - Focused on guiding the user towards recognizing the object, not just giving the answer away.
  - Only a few words long.
  `,
});

const generateObjectRecognitionHintsFlow = ai.defineFlow(
  {
    name: 'generateObjectRecognitionHintsFlow',
    inputSchema: GenerateObjectRecognitionHintsInputSchema,
    outputSchema: GenerateObjectRecognitionHintsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
